#!/usr/bin/env python3
"""
Backend API Test Suite for NutriEdge Lifesciences
Tests all backend endpoints with realistic data
"""
import requests
import json
import os
from pathlib import Path

# Read REACT_APP_BACKEND_URL from frontend/.env
frontend_env_path = Path(__file__).parent / "frontend" / ".env"
BACKEND_URL = None

with open(frontend_env_path, 'r') as f:
    for line in f:
        if line.startswith('REACT_APP_BACKEND_URL='):
            BACKEND_URL = line.split('=', 1)[1].strip()
            break

if not BACKEND_URL:
    raise ValueError("REACT_APP_BACKEND_URL not found in frontend/.env")

API_BASE = f"{BACKEND_URL}/api"

print(f"Testing backend at: {API_BASE}")
print("=" * 80)

# Test results tracking
test_results = {
    "passed": [],
    "failed": []
}


def log_test(test_name, passed, details=""):
    """Log test result"""
    status = "✅ PASS" if passed else "❌ FAIL"
    print(f"\n{status}: {test_name}")
    if details:
        print(f"  Details: {details}")
    
    if passed:
        test_results["passed"].append(test_name)
    else:
        test_results["failed"].append({"test": test_name, "details": details})


def test_root_endpoint():
    """Test 1: GET /api/ - should return welcome message"""
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "NutriEdge Lifesciences API is running":
                log_test("GET /api/ - Root endpoint", True, f"Response: {data}")
                return True
            else:
                log_test("GET /api/ - Root endpoint", False, f"Unexpected message: {data}")
                return False
        else:
            log_test("GET /api/ - Root endpoint", False, f"Status code: {response.status_code}, Body: {response.text}")
            return False
    except Exception as e:
        log_test("GET /api/ - Root endpoint", False, f"Exception: {str(e)}")
        return False


def test_create_inquiry_valid():
    """Test 2a: POST /api/inquiries - Valid payload should return 200"""
    try:
        payload = {
            "name": "Dr. Sarah Johnson",
            "email": "sarah.johnson@healthcorp.com",
            "phone": "+1-555-0123",
            "subject": "Inquiry about Omega-3 supplements",
            "message": "I am interested in learning more about your pharmaceutical-grade Omega-3 supplements for cardiovascular health research."
        }
        
        response = requests.post(f"{API_BASE}/inquiries", json=payload, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            # Check all required fields are present
            required_fields = ["id", "name", "email", "phone", "subject", "message", "created_at"]
            missing_fields = [f for f in required_fields if f not in data]
            
            # Check for MongoDB ObjectId leak
            if "_id" in data:
                log_test("POST /api/inquiries - Valid payload", False, "MongoDB _id leaked in response!")
                return False, None
            
            if missing_fields:
                log_test("POST /api/inquiries - Valid payload", False, f"Missing fields: {missing_fields}")
                return False, None
            
            # Verify data matches
            if data["name"] == payload["name"] and data["email"] == payload["email"]:
                log_test("POST /api/inquiries - Valid payload", True, f"Created inquiry with id: {data['id']}")
                return True, data["id"]
            else:
                log_test("POST /api/inquiries - Valid payload", False, "Response data doesn't match payload")
                return False, None
        else:
            log_test("POST /api/inquiries - Valid payload", False, f"Status code: {response.status_code}, Body: {response.text}")
            return False, None
    except Exception as e:
        log_test("POST /api/inquiries - Valid payload", False, f"Exception: {str(e)}")
        return False, None


def test_create_inquiry_invalid_email():
    """Test 2b: POST /api/inquiries - Invalid email should return 422"""
    try:
        payload = {
            "name": "John Smith",
            "email": "not-an-email",
            "phone": "+1-555-0456",
            "subject": "Product inquiry",
            "message": "I would like to know more about your products."
        }
        
        response = requests.post(f"{API_BASE}/inquiries", json=payload, timeout=10)
        
        if response.status_code == 422:
            log_test("POST /api/inquiries - Invalid email validation", True, "Correctly rejected invalid email")
            return True
        else:
            log_test("POST /api/inquiries - Invalid email validation", False, f"Expected 422, got {response.status_code}")
            return False
    except Exception as e:
        log_test("POST /api/inquiries - Invalid email validation", False, f"Exception: {str(e)}")
        return False


def test_create_inquiry_missing_email():
    """Test 2c: POST /api/inquiries - Missing email should return 422"""
    try:
        payload = {
            "name": "Jane Doe",
            "phone": "+1-555-0789",
            "subject": "Question",
            "message": "This is a test message without email."
        }
        
        response = requests.post(f"{API_BASE}/inquiries", json=payload, timeout=10)
        
        if response.status_code == 422:
            log_test("POST /api/inquiries - Missing email validation", True, "Correctly rejected missing email")
            return True
        else:
            log_test("POST /api/inquiries - Missing email validation", False, f"Expected 422, got {response.status_code}")
            return False
    except Exception as e:
        log_test("POST /api/inquiries - Missing email validation", False, f"Exception: {str(e)}")
        return False


def test_create_inquiry_short_name():
    """Test 2d: POST /api/inquiries - Too short name should return 422"""
    try:
        payload = {
            "name": "A",  # Only 1 character, min is 2
            "email": "test@example.com",
            "phone": "+1-555-0999",
            "subject": "Test",
            "message": "This is a test message with a short name."
        }
        
        response = requests.post(f"{API_BASE}/inquiries", json=payload, timeout=10)
        
        if response.status_code == 422:
            log_test("POST /api/inquiries - Short name validation", True, "Correctly rejected name < 2 chars")
            return True
        else:
            log_test("POST /api/inquiries - Short name validation", False, f"Expected 422, got {response.status_code}")
            return False
    except Exception as e:
        log_test("POST /api/inquiries - Short name validation", False, f"Exception: {str(e)}")
        return False


def test_create_inquiry_short_message():
    """Test 2e: POST /api/inquiries - Too short message should return 422"""
    try:
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+1-555-1111",
            "subject": "Test",
            "message": "Hi"  # Only 2 characters, min is 5
        }
        
        response = requests.post(f"{API_BASE}/inquiries", json=payload, timeout=10)
        
        if response.status_code == 422:
            log_test("POST /api/inquiries - Short message validation", True, "Correctly rejected message < 5 chars")
            return True
        else:
            log_test("POST /api/inquiries - Short message validation", False, f"Expected 422, got {response.status_code}")
            return False
    except Exception as e:
        log_test("POST /api/inquiries - Short message validation", False, f"Exception: {str(e)}")
        return False


def test_get_inquiries(created_id=None):
    """Test 3: GET /api/inquiries - Should return array of inquiries"""
    try:
        response = requests.get(f"{API_BASE}/inquiries", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            
            if not isinstance(data, list):
                log_test("GET /api/inquiries - List inquiries", False, "Response is not an array")
                return False
            
            # Check for MongoDB ObjectId leak in any inquiry
            for inquiry in data:
                if "_id" in inquiry:
                    log_test("GET /api/inquiries - List inquiries", False, "MongoDB _id leaked in response!")
                    return False
            
            # If we created an inquiry, verify it appears
            if created_id and len(data) > 0:
                found = any(inq.get("id") == created_id for inq in data)
                if found:
                    # Check if sorted by created_at descending (newest first)
                    if len(data) > 1:
                        first_date = data[0].get("created_at", "")
                        second_date = data[1].get("created_at", "")
                        if first_date >= second_date:
                            log_test("GET /api/inquiries - List inquiries", True, f"Found {len(data)} inquiries, sorted correctly, created inquiry present")
                        else:
                            log_test("GET /api/inquiries - List inquiries", False, "Inquiries not sorted by created_at descending")
                            return False
                    else:
                        log_test("GET /api/inquiries - List inquiries", True, f"Found {len(data)} inquiry, created inquiry present")
                    return True
                else:
                    log_test("GET /api/inquiries - List inquiries", False, f"Created inquiry {created_id} not found in list")
                    return False
            else:
                log_test("GET /api/inquiries - List inquiries", True, f"Retrieved {len(data)} inquiries")
                return True
        else:
            log_test("GET /api/inquiries - List inquiries", False, f"Status code: {response.status_code}, Body: {response.text}")
            return False
    except Exception as e:
        log_test("GET /api/inquiries - List inquiries", False, f"Exception: {str(e)}")
        return False


def test_status_endpoints():
    """Test 4: POST /api/status and GET /api/status"""
    try:
        # Test POST /api/status
        payload = {
            "client_name": "NutriEdge Test Client"
        }
        
        response = requests.post(f"{API_BASE}/status", json=payload, timeout=10)
        
        if response.status_code != 200:
            log_test("POST /api/status", False, f"Status code: {response.status_code}, Body: {response.text}")
            return False
        
        data = response.json()
        
        # Check for MongoDB ObjectId leak
        if "_id" in data:
            log_test("POST /api/status", False, "MongoDB _id leaked in response!")
            return False
        
        # Check required fields
        if "id" not in data or "client_name" not in data or "timestamp" not in data:
            log_test("POST /api/status", False, f"Missing required fields in response: {data}")
            return False
        
        status_id = data["id"]
        log_test("POST /api/status", True, f"Created status check with id: {status_id}")
        
        # Test GET /api/status
        response = requests.get(f"{API_BASE}/status", timeout=10)
        
        if response.status_code != 200:
            log_test("GET /api/status", False, f"Status code: {response.status_code}, Body: {response.text}")
            return False
        
        data = response.json()
        
        if not isinstance(data, list):
            log_test("GET /api/status", False, "Response is not an array")
            return False
        
        # Check for MongoDB ObjectId leak in any status
        for status in data:
            if "_id" in status:
                log_test("GET /api/status", False, "MongoDB _id leaked in response!")
                return False
        
        # Verify the created status is in the list
        found = any(s.get("id") == status_id for s in data)
        if found:
            log_test("GET /api/status", True, f"Retrieved {len(data)} status checks, created status present")
            return True
        else:
            log_test("GET /api/status", False, f"Created status {status_id} not found in list")
            return False
            
    except Exception as e:
        log_test("POST/GET /api/status", False, f"Exception: {str(e)}")
        return False


def main():
    """Run all tests"""
    print("\n🧪 Starting Backend API Tests for NutriEdge Lifesciences\n")
    
    # Test 1: Root endpoint
    test_root_endpoint()
    
    # Test 2: Create inquiry with valid data
    success, created_id = test_create_inquiry_valid()
    
    # Test 2b-e: Validation tests
    test_create_inquiry_invalid_email()
    test_create_inquiry_missing_email()
    test_create_inquiry_short_name()
    test_create_inquiry_short_message()
    
    # Test 3: Get inquiries
    test_get_inquiries(created_id if success else None)
    
    # Test 4: Status endpoints
    test_status_endpoints()
    
    # Summary
    print("\n" + "=" * 80)
    print("📊 TEST SUMMARY")
    print("=" * 80)
    print(f"✅ Passed: {len(test_results['passed'])}")
    print(f"❌ Failed: {len(test_results['failed'])}")
    
    if test_results['failed']:
        print("\n❌ Failed Tests:")
        for failure in test_results['failed']:
            print(f"  - {failure['test']}")
            print(f"    {failure['details']}")
    
    print("\n" + "=" * 80)
    
    # Exit with appropriate code
    exit(0 if len(test_results['failed']) == 0 else 1)


if __name__ == "__main__":
    main()

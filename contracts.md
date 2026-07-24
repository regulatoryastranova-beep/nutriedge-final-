# NutriEdge Lifesciences — API Contracts

## Backend Endpoints (prefix: `/api`)

### 1. POST /api/inquiries
Create a new contact inquiry.
**Body**:
```json
{
  "name": "string (required, min 2)",
  "email": "string (required, valid email)",
  "phone": "string (required)",
  "subject": "string (optional)",
  "message": "string (required, min 5)"
}
```
**Response 200**:
```json
{ "id": "uuid", "name": "...", "email": "...", "phone": "...", "subject": "...", "message": "...", "created_at": "iso-datetime" }
```

### 2. GET /api/inquiries
List all inquiries (admin/testing).
**Response 200**: `Array<Inquiry>` (newest first, limit 200)

## Mocks Replaced
- `Contact.jsx` was storing inquiries in `localStorage` under `ne_inquiries`. This will now POST to `/api/inquiries` using axios with `REACT_APP_BACKEND_URL`.
- All product data, testimonials, director message, company info remain client-side (mock.js) — not required to be persisted.

## MongoDB Collection
- `inquiries` — stores inquiry documents `{ id, name, email, phone, subject, message, created_at }`

## Frontend Integration
- Add axios call in `pages/Contact.jsx` `handleSubmit`. On success show toast + reset form. On error show destructive toast.

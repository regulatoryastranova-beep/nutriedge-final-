from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, field_validator
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="NutriEdge Lifesciences API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------------- Models ---------------- #
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class InquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=5, max_length=30)
    subject: Optional[str] = Field(default="", max_length=200)
    message: str = Field(..., min_length=5, max_length=3000)

    @field_validator('name', 'phone', 'message')
    @classmethod
    def strip_ws(cls, v: str):
        return v.strip()


class Inquiry(InquiryCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------------- Routes ---------------- #
@api_router.get("/")
async def root():
    return {"message": "NutriEdge Lifesciences API is running"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.dict())
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    items = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**i) for i in items]


@api_router.post("/inquiries", response_model=Inquiry)
async def create_inquiry(payload: InquiryCreate):
    try:
        obj = Inquiry(**payload.dict())
        await db.inquiries.insert_one(obj.dict())
        return obj
    except Exception as e:
        logger.exception("Failed to create inquiry")
        raise HTTPException(status_code=500, detail=f"Could not save inquiry: {e}")


@api_router.get("/inquiries", response_model=List[Inquiry])
async def list_inquiries():
    items = await db.inquiries.find().sort("created_at", -1).to_list(200)
    return [Inquiry(**{k: v for k, v in i.items() if k != '_id'}) for i in items]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

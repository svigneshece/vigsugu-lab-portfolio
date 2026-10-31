import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Database directory & file path
const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "messages.json");

function ensureDbFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

export async function GET() {
  try {
    ensureDbFile();
    const raw = fs.readFileSync(DB_FILE, "utf-8");
    const messages = JSON.parse(raw);
    return NextResponse.json({
      status: "Database active and connected",
      databaseType: "VIGSUGU LAB Local JSON Store + Cloud Ready",
      totalMessages: messages.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { status: "Database initialization error", error: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    const newRecord = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim(),
      subject: subject || "General Inquiry",
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    // Store in Local Database
    ensureDbFile();
    let records = [];
    try {
      const existing = fs.readFileSync(DB_FILE, "utf-8");
      records = JSON.parse(existing);
      if (!Array.isArray(records)) records = [];
    } catch {
      records = [];
    }

    records.unshift(newRecord);
    fs.writeFileSync(DB_FILE, JSON.stringify(records, null, 2), "utf-8");

    return NextResponse.json(
      {
        success: true,
        message: "Your dispatch has been successfully recorded in the VIGSUGU LAB database!",
        recordId: newRecord.id,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process dispatch.", details: String(error) },
      { status: 500 }
    );
  }
}

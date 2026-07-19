import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, condition, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY env var is not set");
      return NextResponse.json(
        { error: "Form service not configured." },
        { status: 500 }
      );
    }

    const payload = {
      access_key: accessKey,
      subject: `New Consultation Request — ${name}`,
      from_name: "StemCell.my",
      name,
      email,
      phone,
      condition: condition || "Not specified",
      message: message || "No message provided",
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as { success: boolean; message?: string };

    if (!result.success) {
      console.error("Web3Forms error:", result.message);
      return NextResponse.json(
        { error: "Failed to send submission." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Consultation API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();
  if (!email || !email.includes("@")) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.EARLY_ACCESS_TO;
  const sender = process.env.EARLY_ACCESS_FROM;
  if (!apiKey || !recipient || !sender) return NextResponse.json({ error: "Email delivery is not configured" }, { status: 503 });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: sender, to: [recipient], subject: "Northline EV early access", text: `New early-access interest: ${email}` }),
  });
  if (!response.ok) return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}

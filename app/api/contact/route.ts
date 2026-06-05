import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "Eksik alan: name, phone ve message zorunludur." },
        { status: 400 }
      );
    }

    // ─── Integration point ────────────────────────────────────────────────
    // Connect email/CRM/webhook/DB to process the contact form submission.
    // ─────────────────────────────────────────────────────────────────────

    console.info("[Contact] New contact form submission received:", {
      subject: body.subject,
      // Do NOT log personal data in production
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact] Error processing request:", error);
    return NextResponse.json(
      { error: "Sunucu hatası. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}

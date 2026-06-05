import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.from || !body.to || !body.cargoType || !body.phone) {
      return NextResponse.json(
        { error: "Eksik alan: from, to, cargoType ve phone zorunludur." },
        { status: 400 }
      );
    }

    // ─── Integration point ────────────────────────────────────────────────
    // Connect to one of the following to process the lead:
    //
    //   Email:   await sendEmail({ to: process.env.CONTACT_EMAIL, body })
    //   CRM:     await postToCRM(body)
    //   Webhook: await fetch(process.env.WEBHOOK_URL, { method: "POST", body: JSON.stringify(body) })
    //   DB:      await db.quotes.create({ data: body })
    //
    // The payload includes: from, to, cargoType, phone, notes, date,
    // serviceSlug, pagePath, source, and UTM/GCLID params.
    // ─────────────────────────────────────────────────────────────────────

    console.info("[Quote] New quote request received:", {
      from: body.from,
      to: body.to,
      cargoType: body.cargoType,
      // Do NOT log phone or personal data in production
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Quote] Error processing request:", error);
    return NextResponse.json(
      { error: "Sunucu hatası. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}

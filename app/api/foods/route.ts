import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const result = await fetch("https://api.npoint.io/8e771049f5a2a11e682d");
    const data = await result.json();
    return NextResponse.json(data)

}
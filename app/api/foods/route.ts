import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const result = await fetch("https://api.npoint.io/fa895853cb8f22917648");
    const data = await result.json();
    return NextResponse.json(data)

}
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const result = await fetch("https://api.npoint.io/ad0be4b1fb33bd6c3f13");
    const data = await result.json();
    return NextResponse.json(data)

}
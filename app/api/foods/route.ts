import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const result = await fetch("https://api.npoint.io/4160866e8011cd5dd285");
    const data = await result.json();
    return NextResponse.json(data)

}
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    // Fixed: corrected the select syntax
    const featuredProts = await db
      .select()
      .from(projects)
      .where(eq(projects.featured, "true"))
      .orderBy(desc(projects.createdAt))
      .limit(3);

    return NextResponse.json({ projects: featuredProts });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

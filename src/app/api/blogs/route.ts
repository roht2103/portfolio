import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { blogs } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, date, description, highlights, category, link, featured } =
      body;

    // Validate input - Fixed: removed featured from validation (it's optional/boolean)
    if (!title || !date || !description || !highlights || !link || !category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert project into the database
    const [newBlog] = await db
      .insert(blogs)
      .values({
        title,
        date,
        description,
        highlights,
        category,
        link,
        featured: featured ?? "false",
      })
      .returning();

    return NextResponse.json({ blog: newBlog }, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Fixed: corrected the select syntax
    const allBlogs = await db.select().from(blogs).orderBy(desc(blogs.date));

    return NextResponse.json({ blogs: allBlogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

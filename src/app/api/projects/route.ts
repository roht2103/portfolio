import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      date,
      description,
      highlights,
      technologies,
      sourceCode,
      link,
      featured,
    } = body;

    // Validate input - Fixed: removed featured from validation (it's optional/boolean)
    if (
      !title ||
      !date ||
      !description ||
      !highlights ||
      !technologies ||
      !sourceCode ||
      !link
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert project into the database
    const [newProject] = await db
      .insert(projects)
      .values({
        title,
        date,
        description,
        highlights,
        technologies,
        sourceCode: sourceCode,
        link,
        featured: featured ?? false, // Default to false if not provided
      })
      .returning();

    return NextResponse.json({ project: newProject }, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Fixed: corrected the select syntax
    const allProjects = await db
      .select()
      .from(projects)
      .orderBy(desc(projects.createdAt));

    return NextResponse.json({ projects: allProjects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

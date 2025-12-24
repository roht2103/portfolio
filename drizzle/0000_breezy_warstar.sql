CREATE TABLE "blogs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"date" text NOT NULL,
	"description" text,
	"highlights" text[] NOT NULL,
	"category" text NOT NULL,
	"link" text NOT NULL,
	"featured" text DEFAULT 'false' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"date" text NOT NULL,
	"description" text,
	"highlights" text[] NOT NULL,
	"technologies" text[] NOT NULL,
	"source_code" text,
	"link" text NOT NULL,
	"featured" text DEFAULT 'false' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

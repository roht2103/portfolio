import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  date: text("date").notNull(),
  description: text("description"),
  highlights: text("highlights").array().notNull(),
  technologies: text("technologies").array().notNull(),
  sourceCode: text("source_code"),
  link: text("link").notNull(),
  featured: text("featured").default("false").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const blogs = pgTable("blogs", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  date: text("date").notNull(),
  description: text("description"),
  highlights: text("highlights").array().notNull(),
  category: text("category").notNull(),
  link: text("link").notNull(),
  featured: text("featured").default("false").notNull(),
});

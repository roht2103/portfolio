"use client";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-slate-300 border-t-slate-950 dark:border-slate-700 dark:border-t-slate-100 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  return <DashboardContent session={session} />;
};

const DashboardContent = ({ session }: { session: any }) => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-950 dark:text-slate-100 mb-2">
              Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Welcome back, {session?.user?.name || "User"}!
            </p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="font-semibold cursor-pointer"
          >
            Sign Out
          </Button>
        </div>
        <div className="mt-6 flex space-x-4">
          <AddProject />
          <AddBlog />
        </div>
      </div>
    </div>
  );
};

export function AddProject() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    highlights: "",
    technologies: "",
    sourceCode: "",
    link: "",
    featured: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log('storing data:', formData);

    try {
      const highlightsArray = formData.highlights
        .split("\n")
        .filter((h) => h.trim() !== "");
      const technologiesArray = formData.technologies
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t !== "");

      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          date: formData.date,
          description: formData.description,
          highlights: highlightsArray,
          technologies: technologiesArray,
          sourceCode: formData.sourceCode || null,
          link: formData.link,
          featured: formData.featured ? "true" : "false",
        }),
      });

      if (response.ok) {
        alert("Project added successfully!");
        setFormData({
          title: "",
          date: "",
          description: "",
          highlights: "",
          technologies: "",
          sourceCode: "",
          link: "",
          featured: false,
        });
        setOpen(false);
      } else {
        const error = await response.json();
        alert(`Error: ${error.error || "Failed to add project"}`);
      }
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer" variant="outline">Add Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
          <DialogDescription>
            Add project to your portfolio here. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input className="dark:bg-stone-950" required id="title" name="title" value={formData.title} onChange={handleChange} placeholder="Project Title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea className="dark:bg-stone-950" required id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Brief description of the project" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="highlights">Highlights</Label>
              <Textarea className="dark:bg-stone-950" required id="highlights" name="highlights" value={formData.highlights} onChange={handleChange} placeholder="Key Highlights" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="technologies">Technologies</Label>
              <Input className="dark:bg-stone-950" required id="technologies" name="technologies" value={formData.technologies} onChange={handleChange} placeholder="React, Node.js, MongoDB" />
              <p className="text-xs text-slate-500">
                Separate technologies with commas
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">
                Date
              </Label>
              <Input
                className="dark:bg-stone-950"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="e.g., 2024 or January 2024"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sourceCode">Source Code</Label>
              <Input
                className="dark:bg-stone-950"
                required
                id="sourceCode"
                name="sourceCode"
                value={formData.sourceCode}
                onChange={handleChange}
                placeholder="https://github.com/username/repo"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="link">
                Live Link
              </Label>
              <Input
                className="dark:bg-stone-950"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="https://project-demo.com"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="w-4 h-4 rounded border-slate-300 text-slate-950 focus:ring-slate-500"
              />
              <Label htmlFor="featured" className="cursor-pointer">
                Featured Project
              </Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="cursor-pointer" variant="outline">Cancel</Button>
            </DialogClose>
            <Button className='cursor-pointer' type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Project"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function AddBlog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    highlights: "",
    category: "",
    link: "",
    featured: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const highlightsArray = formData.highlights
        .split("\n")
        .filter((h) => h.trim() !== "");

      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          date: formData.date,
          description: formData.description,
          highlights: highlightsArray,
          category: formData.category,
          link: formData.link,
          featured: formData.featured ? "true" : "false",
        }),
      });

      if (response.ok) {
        alert("Blog added successfully!");
        setFormData({
          title: "",
          date: "",
          description: "",
          highlights: "",
          category: "",
          link: "",
          featured: false,
        });
        setOpen(false);
      } else {
        const error = await response.json();
        alert(`Error: ${error.error || "Failed to add blog"}`);
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to add blog");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer" variant="outline">
          Add Blog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Blog</DialogTitle>
            <DialogDescription>
              Add a new blog post to your portfolio. All fields marked with * are required.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="blog-title">
                Title
              </Label>
              <Input
                className="dark:bg-stone-950"
                id="blog-title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Blog Title"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="blog-date">
                Date
              </Label>
              <Input
                className="dark:bg-stone-950"
                id="blog-date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="e.g., 2024 or January 2024"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="blog-category">
                Category
              </Label>
              <Input
                className="dark:bg-stone-950"
                id="blog-category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g., Web Development, Technology"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="blog-description">Description</Label>
              <Textarea
                className="dark:bg-stone-950"
                id="blog-description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Brief description of the blog post"
                rows={3}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="blog-highlights">
                Highlights
              </Label>
              <Textarea
                className="dark:bg-stone-950"
                id="blog-highlights"
                name="highlights"
                value={formData.highlights}
                onChange={handleChange}
                placeholder="One highlight per line"
                rows={4}
                required
              />
              <p className="text-xs text-slate-500">
                Enter each highlight on a new line
              </p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="blog-link">
                Blog Link
              </Label>
              <Input
                className="dark:bg-stone-950"
                id="blog-link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="https://medium.com/your-blog"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="blog-featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
              />
              <Label htmlFor="blog-featured" className="cursor-pointer">
                Featured Blog
              </Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="cursor-pointer" type="button" variant="outline" disabled={loading}>
                Cancel
              </Button>
            </DialogClose>
            <Button className="cursor-pointer" type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Blog"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DashboardPage;
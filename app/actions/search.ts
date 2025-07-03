"use server";

import { redirect } from "next/navigation";

export async function searchBlogs(formData: FormData) {
  const topic = formData.get("topic") as string;
  const title = formData.get("title") as string;

  if (!topic && !title) {
    redirect("/blogs");
  }

  const params = new URLSearchParams();

  if (topic) {
    params.append("topic", topic);
  }
  if (title) {
    params.append("title", title);
  }

  redirect(`/blogs?${params.toString()}`);
}

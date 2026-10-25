"use server";

import { redirect } from "next/navigation";

export async function enrollInCourse(courseId: string, firstLessonUrl: string) {
  // In design repository, mock enrollment by redirecting to checkout/preview
  redirect(`/checkout?productId=${courseId}&type=course`);
}

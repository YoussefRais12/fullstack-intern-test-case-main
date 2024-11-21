import { Course } from "../models/course.model";

/**
 * Fetch all courses or filter courses by a search query.
 * @param searchQuery Optional search string for filtering courses.
 * @returns A promise that resolves to a list of courses.
 */
export async function fetchCourses(searchQuery?: string): Promise<Course[]> {
  const url = new URL("http://localhost:3000/api/courses");

  if (searchQuery) {
    url.searchParams.append("search", searchQuery);
  }

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }
  return res.json();
}

/**
 * Fetch a single course by its code.
 * @param courseCode The code of the course to fetch.
 * @returns A promise that resolves to the course details.
 */
export async function fetchCourseDetails(courseCode: string): Promise<Course> {
  const url = `http://localhost:3000/api/courses/${courseCode}`;

  const res = await fetch(url);
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("Course not found");
    }
    throw new Error("Failed to fetch course details");
  }
  return res.json();
}

import { Question } from "../models/question.model";

/**
 * Fetch questions for a specific course by its ID
 * @param courseId The ID of the course
 * @returns A promise that resolves to a list of questions
 */
export async function fetchCourseQuestions(courseId: string): Promise<Question[]> {
  const response = await fetch(`http://localhost:3000/api/courses/${courseId}/questions`);
  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }
  return response.json();
}

/**
 * Update a specific question
 * @param courseId The ID of the course
 * @param questionId The ID of the question
 * @param data The updated question data
 * @returns The updated question
 */
export async function updateQuestion(
    courseId: string,
    questionId: string,
    data: { title: string; choices: { text: string }[] }
  ): Promise<Question> {
    const response = await fetch(
      `http://localhost:3000/api/courses/${courseId}/questions/${questionId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
  
    if (!response.ok) {
      throw new Error("Failed to update question");
    }
  
    return response.json();
  }

  /**
 * Duplicate a question in a specific course
 * @param courseId The ID of the course
 * @param questionId The ID of the question to duplicate
 * @returns The duplicated question
 */
export async function duplicateQuestion(courseId: string, questionId: string): Promise<Question> {
    const response = await fetch(
      `http://localhost:3000/api/courses/${courseId}/questions/${questionId}/duplicate`,
      {
        method: "PUT",
      }
    );
  
    if (!response.ok) {
      throw new Error("Failed to duplicate question");
    }
  
    return response.json();
  }
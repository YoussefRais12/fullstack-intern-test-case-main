import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Modal, Input, List, Form } from "antd";
import { useEffect, useState } from "react";
import { fetchCourseDetails } from "../../api-services/courses.api-service";
import { fetchCourseQuestions, updateQuestion, duplicateQuestion } from "../../api-services/questions.api-service"; // Add duplicate API
import { Course } from "../../models/course.model";

interface Question {
  _id: string;
  title: string;
  choices: { text: string; isCorrect: boolean; _id: string }[];
}

export const CourseDetails = () => {
  const { courseId } = useParams(); // Retrieve the courseId from the URL
  const navigate = useNavigate(); // Hook to navigate back
  const [course, setCourse] = useState<Course | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loadingCourse, setLoadingCourse] = useState<boolean>(true);
  const [loadingQuestions, setLoadingQuestions] = useState<boolean>(true);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null); // Track the question being edited
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Fetch course details
  useEffect(() => {
    async function getCourseDetails() {
      if (!courseId) return;

      setLoadingCourse(true);
      try {
        const fetchedCourse = await fetchCourseDetails(courseId); // Fetch course by its ID
        setCourse(fetchedCourse);
      } catch (error) {
        console.error("Error fetching course details:", error);
        setCourse(null);
      } finally {
        setLoadingCourse(false);
      }
    }

    getCourseDetails();
  }, [courseId]);

  // Fetch questions for the course
  useEffect(() => {
    async function getQuestions() {
      if (!courseId) return;

      setLoadingQuestions(true);
      try {
        const fetchedQuestions = await fetchCourseQuestions(course?._id); 
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setQuestions([]);
      } finally {
        setLoadingQuestions(false);
      }
    }

    getQuestions();
  }, [course]);

  const handleQuestionClick = (question: Question) => {
    setEditingQuestion(question);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setEditingQuestion(null);
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (values: { title: string; choices: { text: string }[] }) => {
    if (!editingQuestion || !courseId) return;

    try {
      const updatedQuestion = await updateQuestion(course?._id, editingQuestion._id, {
        title: values.title,
        choices: values.choices,
      });

      setQuestions((prevQuestions) =>
        prevQuestions.map((q) => (q._id === updatedQuestion._id ? updatedQuestion : q))
      );
      setIsModalOpen(false);
      setEditingQuestion(null);
    } catch (error) {
      console.error("Error updating question:", error);
    }
  };

  const handleDuplicate = async (questionId: string) => {
    if (!courseId) return;

    try {
      const duplicatedQuestion = await duplicateQuestion(course?._id , questionId); // Duplicate question API call
      setQuestions((prevQuestions) => [...prevQuestions, duplicatedQuestion]); // Add duplicated question to list
    } catch (error) {
      console.error("Error duplicating question:", error);
    }
  };

  if (loadingCourse || loadingQuestions) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <Card title="Course Details">
      <h2>{course.title}</h2>
      <p>
        <strong>Code:</strong> {course.code}
      </p>
      <p>
        <strong>Description:</strong> {course.description}
      </p>
      <p>
        <strong>Questions:</strong>
      </p>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            <span onClick={() => handleQuestionClick(question)}>{question.title}</span>
            <Button type="link" onClick={() => handleDuplicate(question._id)}>
              Duplicate
            </Button>
          </li>
        ))}
      </ul>
      <Button type="primary" onClick={() => navigate("/courses")}>
        Back to Table
      </Button>

      <Modal
        title="Edit Question"
        open={isModalOpen}
        onCancel={handleModalClose}
        footer={null}
      >
        {editingQuestion && (
          <Form
            layout="vertical"
            initialValues={{
              title: editingQuestion.title,
              choices: editingQuestion.choices.map((choice) => ({ text: choice.text })),
            }}
            onFinish={handleFormSubmit}
          >
            <Form.Item
              name="title"
              label="Question Title"
              rules={[{ required: true, message: "Please input the question title!" }]}
            >
              <Input />
            </Form.Item>
            <Form.List name="choices">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Form.Item
                      key={key}
                      label={`Choice ${name + 1}`}
                      {...restField}
                      name={[name, "text"]}
                      fieldKey={[fieldKey, "text"]}
                      rules={[{ required: true, message: "Please input the choice text!" }]}
                    >
                      <Input
                        addonAfter={
                          <Button
                            type="link"
                            danger
                            onClick={() => remove(name)}
                            style={{ padding: 0 }}
                          >
                            Remove
                          </Button>
                        }
                      />
                    </Form.Item>
                  ))}
                  <Button type="dashed" onClick={() => add()}>
                    Add Choice
                  </Button>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </Card>
  );
};

import { Card, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchCourses } from '../../api-services/courses.api-service';
import { Course } from "../../models/course.model";
import { DataType } from "../../models/data-type.model";
import * as S from './CourseList.styles'

type CourseListItem = DataType<Pick<Course, '_id'>>

//Def var
const columns: ColumnsType<CourseListItem> = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  }
];

//Data population
function transformCoursesToDatasource(courses: Course[]): CourseListItem[] {
  return courses.map(course => ({
    key: course._id,
    _id: course.code,
    title: course.title,
    description: course.description
  }));
}

export const CourseList = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>([]);
  const [coursesDataSource, setCoursesDataSource] = useState<CourseListItem[]>([]);
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    async function getCourses() {
      const coursesPayload = await fetchCourses();
      setCourses(coursesPayload);
    }
    getCourses();
  }, []);

  useEffect(() => {
    setCoursesDataSource(transformCoursesToDatasource(courses));
  }, [courses]);

  // Handle search input changes
  async function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      // Fetch all courses if search query is cleared
      const allCourses = await fetchCourses();
      setCourses(allCourses);
    } else {
      // Perform search when query is not empty
      const searchResults = await fetchCourses(query); // Call the search API
      setCourses(searchResults);
    }
  }

  function handleCourseClick(course: CourseListItem) {
    navigate(`./${course._id}`);
  }

  return (
    <S.Wrapper>
      <S.SearchInput
        defaultValue={searchQuery}
        onChange={handleSearchChange}
        placeholder='Search for a course by ID or name'
        // prefix={<S.SearchIcon icon={faSearch} />}
      />

   
      <Card>
        <Table
          columns={columns}
          dataSource={coursesDataSource}
          onRow={course => ({
            onClick: () => handleCourseClick(course),
          })}
          scroll={{ y: '80vh' }}
        />
      </Card>
    </S.Wrapper>
  );
};

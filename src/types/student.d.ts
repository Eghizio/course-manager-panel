export type Student = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    studentClass: string;
    courses: Course[];
};

export type Course = {
    id: string;
    title: string;
    categories: string[];
    description: string;
    teachers: string[];
};

export type EnrollData = Omit<Student, "id">;
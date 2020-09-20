export type Student = {
    id: string;
    firstName: string;
    lastName: string;
    email: string; // might not be needed, outplayed GDPR
    studentClass: string; // probably just 1-8 A-B
    courses: Course[];
};

// might need studentClass restriction and date (week day hh:mm - hh:mm), max students
export type Course = {
    id: string;
    title: string;
    teachers: string[];
    categories: string[];
    capacity: number;
    date: {
        day: string;
        time: { start: string; end: string; };
    };
    classes: number[]
    description: string;
};

export type EnrollData = Omit<Student, "id">;
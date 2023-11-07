#! /usr/bin/env node
 
 class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}

class Student extends Person {
    roll_number: string = "";
    courses: Course[] = [];

    constructor(name: string, age: number, roll_number: string) {
        super(name, age);
        this.roll_number = roll_number;
    }

    registerForCourses(course: Course) {
        this.courses.push(course);
    }
}

class Instructor extends Person {
    private salary: number;
    courses: Course[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }

    assignCourse(course: Course) {
        this.courses.push(course);
    }
}

class Course {
    id: string;
    name: string;
    students: Student[] = [];
    instructors: Instructor[] = [];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    addStudent(student: Student) {
        this.students.push(student);
        student.registerForCourses(this);
    }

    setInstructor(instructor: Instructor) {
        this.instructors.push(instructor);
        instructor.assignCourse(this);
    }
}

class Department {
    name: string;
    courses: Course[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addCourse(course: Course) {
        this.courses.push(course);
    }

    getCourses() {
        return this.courses;
    }
}

const instructor1 = new Instructor("Zia", 15, 50000);
const student1 = new Student("Sameer", 15, "001");
const student2 = new Student("Ammar", 20, "002");
const course1 = new Course("course1", "Metaverse");
const course2 = new Course("course2", "Blockchain");
const department1 = new Department("Computer Science");

course1.addStudent(student1);
course1.setInstructor(instructor1);

department1.addCourse(course1);

console.log(student1.courses);
console.log(course1.instructors);
console.log(student1);
console.log(department1);

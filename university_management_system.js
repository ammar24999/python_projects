#! /usr/bin/env node
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    roll_number = "";
    courses = [];
    constructor(name, age, roll_number) {
        super(name, age);
        this.roll_number = roll_number;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructors = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.instructors.push(instructor);
        instructor.assignCourse(this);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
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
export {};

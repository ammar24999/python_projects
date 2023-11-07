#! /usr/bin/env node

class Person {
    private _personality: string = "mystery";

    constructor() {
        this._personality = "mystery";
    }

    AskQuestion(answer: number) {
        if (answer === 1) {
            this._personality = "Extrovert";
        } else {
            this._personality = "Introvert";
        }
    }

    GetPersonality() {
        return this._personality;
    }
}

class Student extends Person {
    private _name: string = "";

    constructor(name: string) {
        super();
        this._name = name;
    }

    get Name() {
        return this._name;
    }

    set Name(name: string) {
        this._name = name;
    }

    GetStudentInfo() {
        return `Name: ${this._name}, Personality: ${this.GetPersonality()}`;
    }
}

const readline = require('readline-sync');

const answer = parseInt(readline.question("Type 1 if you like to talk to others, Type 2 if you'd rather be by yourself: "));

const name = readline.question("What is your name? ");

const myStudent = new Student(name);

myStudent.AskQuestion(answer);

console.log(`Your name is ${myStudent.Name} and your personality is ${myStudent.GetPersonality()}.`);

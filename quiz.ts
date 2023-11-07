#! /usr/bin/env node
import inquirer from "inquirer";
const questions = [
    {
        type: "list",
        name: "question1",
        message: "What is the capital of Pakistan?",
        choices: ["London", "Paris", "Berlin", "Islamabad"],
        correctAnswer: "Islamabad",
    },
    {
        type: "list",
        name: "question2",
        message: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
    },
    {
        type: "list",
        name: "question3",
        message: "What is the largest mammal in the world?",
        choices: ["Elephant", "Giraffe", "Blue Whale", "Dolphin"],
        correctAnswer: "Blue Whale",
    },
];

const score = { correct: 0, incorrect: 0 };

async function runQuiz() {
    for (const question of questions) {
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: question.name,
                message: question.message,
                choices: question.choices,
            },
        ]);

        if (answer[question.name] === question.correctAnswer) {
            console.log("Correct!\n");
            score.correct++;
        } else {
            console.log(`Incorrect. The correct answer is ${question.correctAnswer}.\n`);
            score.incorrect++;
        }
    }

    console.log("Quiz Completed!");
    console.log(`Correct Answers: ${score.correct}`);
    console.log(`Incorrect Answers: ${score.incorrect}`);
}

runQuiz();

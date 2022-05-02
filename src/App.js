import React, { useState } from "react";
import "./App.css";
export default function App() {
  const questions = [
    {
      questionText: "Are you ready to settle down?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },

    {
      questionText: "How long do you want your next relationship to last?",
      answerOptions: [
        { answerText: "Days", isCorrect: false },
        { answerText: "The rest of my life", isCorrect: true },
        { answerText: "Several years", isCorrect: false },
      ],
    },

    {
      questionText: "How important are money to you?",
      answerOptions: [
        { answerText: "Very Important", isCorrect: false },
        { answerText: "Important", isCorrect: false },
        { answerText: "Not important at all", isCorrect: true },
      ],
    },

    {
      questionText: "Do you smoke?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
        { answerText: "Trying to quit", isCorrect: true },
      ],
    },

    {
      questionText:
        "Do you think a work and personal life balance is important?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },

    {
      questionText:
        "What is more apealing to you: high salary or a job that makes you happy?",
      answerOptions: [
        { answerText: "Money", isCorrect: false },
        { answerText: "Career", isCorrect: false },
        { answerText: "A  fulfilling job", isCorrect: true },
      ],
    },

    {
      questionText: "Is being money or career-driven important to you?",
      answerOptions: [
        { answerText: "Money", isCorrect: false },
        { answerText: "Career", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },

    {
      questionText: "Do you have kids?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },

    {
      questionText: "Do you want kids?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },

    {
      questionText: "What are you looking for?",
      answerOptions: [
        { answerText: "Fun", isCorrect: false },
        { answerText: "Adventure", isCorrect: false },
        { answerText: "Sex", isCorrect: false },
        { answerText: "Love", isCorrect: true },
      ],
    },

    {
      questionText: "Vegan",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },

    {
      questionText: "How important is religion to you?",
      answerOptions: [
        { answerText: "Extremely important", isCorrect: false },
        { answerText: "Somewhat important", isCorrect: false },
        { answerText: "Not important at all", isCorrect: true },
      ],
    },

    {
      questionText: "Are you annoyed by super logical people?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "Sometimes", isCorrect: true },
        { answerText: "No", isCorrect: true },
      ],
    },

    {
      questionText: "A university degree is... ?",
      answerOptions: [
        { answerText: "Absolutly Necessary", isCorrect: false },
        { answerText: "Doesn't matter", isCorrect: true },
        { answerText: "Not Necessary", isCorrect: true },
      ],
    },

    {
      questionText: "Would you seriously date someone who doesn't own a car?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },

    {
      questionText: "Can you be single and happy?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "Absolutly", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },

    {
      questionText: "Have you been faithful in all of your relationships?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },

    {
      questionText: "Have you ever been in an open relationship?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },

    {
      questionText: "Are you concerned about climate and environment?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },

    {
      questionText: "Is mental health as important as physical health?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },

    {
      questionText: "Do you REALLY find intelligence better than looks?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Somewhat", isCorrect: true },
      ],
    },

    {
      questionText: "Do you think morality is universal, or relative?",
      answerOptions: [
        { answerText: "Universal", isCorrect: false },
        { answerText: "Relative", isCorrect: true },
        { answerText: "I don't know", isCorrect: false },
      ],
    },
    {
      questionText: "On  dates, do you pay for yourself?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Sometimes", isCorrect: true },
      ],
    },
    {
      questionText: "Which is better for a long relationship?",
      answerOptions: [
        { answerText: "Dedication", isCorrect: true },
        { answerText: "Passion", isCorrect: false },
      ],
    },
    {
      questionText: "Is jealousy really healthy in a relationship?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

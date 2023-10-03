import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Question() {
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctAnswer: 0 }]);
  const navigate = useNavigate();

  function handleClick () {
    navigate('/Answer', {})
  }
  useEffect(() => {
    const lists = JSON.parse(localStorage.getItem('questions'))
    if(lists) {
      setQuestions(lists)
    }
  }, [])
  
  const addQuestion = () => {
    if (questions.length < 10) {
      setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: 0 }]);
    }
  };

  const onSave = () => {
    localStorage.setItem('questions', JSON.stringify(questions))
  }

  const handleQuestionChange = (index, text) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = text;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, text) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = text;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, correctAnswer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctAnswer = correctAnswer;
    setQuestions(updatedQuestions);
  };

  return (
    <div>
     
      {questions.map((question, index) => (
        <div key={index}>
          <h3>Question {index + 1}</h3>
          <textarea
            placeholder="Enter your question here"
            value={question.question}
            onChange={(e) => handleQuestionChange(index, e.target.value)}
          />
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type="text"
                placeholder={`Option ${optionIndex + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
              />
              <label>
                <input
                  type="radio"
                  checked={question.correctAnswer === optionIndex}
                  onChange={() => handleCorrectAnswerChange(index, optionIndex)}
                />
              </label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={onSave}>Save</button>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Question;

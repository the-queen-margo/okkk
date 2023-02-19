import './Quiz.css';
import React from 'react';
import { useState } from "react";
import sobaka  from "./sources/images.png";
var flag = Boolean(false)

export const Quiz = () =>{
    const [currentQuestions, setCurrentQuestions]= useState(0)
    const [score, setScore]= useState(0)
    const [showSobaka, setShowSobaka]= useState(0)
    const showSobakaOn = showSobaka? 'visible':'hidden'
    const handleAnswerOptionClick = (isCorrect) =>{
        if ((isCorrect)&&(currentQuestions == questions.length-1)&&(flag==false)){
            setScore(score+1)
            flag= true
        }
        else if ((isCorrect)&&(currentQuestions == questions.length-1)&&(flag == true)){
            setScore(score)
        }
        else
        if (isCorrect){
            setScore(score+1)
        }
        const nextQuestion = currentQuestions +1
        if (nextQuestion <questions.length){
            setCurrentQuestions(nextQuestion)
        }
        if ((currentQuestions == questions.length-1)&&(score<4)){
            setShowSobaka(1)
        }
        
    }
    const questions = [ 
    {
        questionText:'сайт где во время проосмотра лора японской истории выскакивает скример прямо из картинки ?', //0
        answerOptions: [
        {answerText: "рудип", isCorrect: false},
        {answerText:   "просрись челлендж", isCorrect: true},
        {answerText: "обосрись челлендж", isCorrect: false}
        ]
    },
    {
    questionText:'как переводится слово screamer?', //0
    answerOptions: [
    {answerText: " крикнуть", isCorrect: false},
    {answerText:   "крикун", isCorrect: true},
    {answerText: "ужастик", isCorrect: false}
    ]
    },
     {
        questionText:'what is cocojambo', //0
        answerOptions: [
        {answerText: "a best place in the world", isCorrect: false },
        {answerText: "a good song", isCorrect:false },
         {answerText:"na nae co co jambo",isCorrect:true}
        ]
     },
     {
        questionText:'who killed mark', //0
        answerOptions: [
            {answerText:'moss',isCorrect: false },
            {answerText:'oxxymiron', isCorrect: false},
            {answerText:'who is mark?',isCorrect: true}
        ]
     }

    ]
return(
    <div>
        <div className ="quiz" >
        <div className ='question_secton' >
            <div className="question_count">
                                <span> Vopros {currentQuestions +1}</span>/{questions.length}
                </div>
                <div className='question_text'>{questions[currentQuestions].questionText}</div>
            </div>
            <div className = "answer_section">
                {questions[currentQuestions].answerOptions.map(
                    item =>(<button className = "answer_button" onClick=
                    {() => handleAnswerOptionClick(item.isCorrect)}>
                        {item.answerText}
                    </button>
                    ))}
            <div className = "score_section" >
                true answers {score} from {questions.length}
            </div>
            <img src = {sobaka} className = 'sobaka ' style = {{visibility: showSobakaOn }}/> 
            </div>
        </div>
        </div>
)
}
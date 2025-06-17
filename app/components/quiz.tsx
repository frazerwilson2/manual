'use client';

import React, { useMemo, useReducer, useState } from 'react';
import { useData } from '../useData';
import { questionUtils } from '../utils';
import { reducer } from '../reducer';
import { Question } from './question';
import { Button } from './button';

export const Quiz = () => {
    const [quizResult, setQuizResult] = useState<'complete'|'rejection'|null>(null);
    const {loading, error, quizData} = useData();
    
    const [state, dispatch] = useReducer(reducer, {
        currentQuestionIndex: 0,
        answers: {},
    });

    const {getQuestionData, isRejection} = useMemo(() => questionUtils(quizData || { questions: [] }), [quizData]);

    if (loading) {
        return (
            <div className="container mx-auto px-6 md:px-0 h-[700px] py-[100px] text-center text-main">
                Loading Quiz Questions...
            </div>
        );
    }

    if (error) {
        return (
            <div className='container mx-auto px-6 md:px-0 h-[700px] py-[100px] text-center text-main'>
                <h1 className='text-lg'>Error Loading Quiz</h1>
                <p>{error}</p>
                <p>Please check your network connection and try again.</p>
            </div>
        );
    }

    if (!quizData) {
        return (
            <div className='container mx-auto px-6 md:px-0 h-[700px] py-[100px] text-center text-main'>
                No quiz data available. Please try again later.
            </div>
        );
    }

    const currentQuestion = getQuestionData(state.currentQuestionIndex);

    const onAnswerSelect = (answer: string) => {
        dispatch({ type: 'SET_ANSWER', payload: { questionIndex: state.currentQuestionIndex, answer } });
        if(isRejection(state.currentQuestionIndex, answer)){
            setQuizResult('rejection');
            return;
        }
        if (state.currentQuestionIndex < quizData.questions.length - 1) {
            dispatch({ type: 'NEXT_QUESTION' });
        } else {
            console.log('Quiz completed!', state.answers);
            setQuizResult('complete');
        }
        // scroll to top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (quizResult === 'complete') {
        return (
            <div className='container mx-auto px-6 md:px-0 h-[700px] py-[100px]'>
                <h1 className='text-main text-lg'>Quiz Completed!</h1>
                <p className='text-md mb-12 mt-12'>Great news! We have the perfect treatment for your hair loss. Proceed to <a href="www.manual.co">www.manual.co</a>, and prepare to say hello to your new hair!</p>
                    <Button simple label="< Back" onClick={()=>setQuizResult(null)} />
            </div>
        );
    }
    if (quizResult === 'rejection') {   
        return (
            <div className='container mx-auto px-6 md:px-0 h-[700px] py-[100px]'>
                <h1 className='text-main text-lg'>Quiz Rejected</h1>
                <p className='text-md mb-12 mt-12'>Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.</p>
                <Button simple label="< Back" onClick={()=>setQuizResult(null)} />
            </div>
        );
    }

    return (
        <div className='container mx-auto px-6 md:px-0 min-h-[700px] md:h-[700px] py-[100px]'>
            <h1 className='text-h2 md:text-lg text-main'>Manual product quiz</h1>
            <div className='md:flex flex-col justify-center h-full'>
                {currentQuestion && 
                    <Question 
                        question={currentQuestion.question} 
                        options={currentQuestion.options} 
                        onAnswer={onAnswerSelect}
                        currentAnswer={state.answers[state.currentQuestionIndex]}
                    />
                }
                <div className='mt-12'>
                    {state.currentQuestionIndex !== 0 && (
                        <Button
                            onClick={() => dispatch({ type: 'PREVIOUS_QUESTION' })}
                            disabled={state.currentQuestionIndex === 0}
                            label="&lt; Back"
                            simple
                        />
                    )}
                </div>
            </div>
            
        </div>
    );
};
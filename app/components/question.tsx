import React from "react";
import type { QuestionProps } from "../types";
import { isHtmlString } from "../utils";
import { Button } from "./button";

export const Question = ({ question, options, onAnswer, currentAnswer }: QuestionProps) => {
    return (
        <div className="animate-fade-in">
            <h2 className="text-md mb-12">{question}</h2>
            <div className="flex gap-4 flex-col md:flex-row">
                {options.map((option, index) => (
                    isHtmlString(option.display) ? (
                    <button
                        key={index}
                        onClick={() => onAnswer(option.value)}
                        className={currentAnswer === option.value ? "border border-blue-500 border-2" : ''}
                    >
                        <span dangerouslySetInnerHTML={{ __html: option.display }} />
                    </button>) : <div className={currentAnswer === option.value ? "border border-blue-500 border-2" : ''}><Button onClick={() => onAnswer(option.value)} label={option.display} /></div>
                ))}
            </div>
        </div>
    );
}
export interface QuizState {
    currentQuestionIndex: number;
    answers: Record<number, string>;
}

export type QuizActions = 
    { type: 'NEXT_QUESTION'; } | 
    { type: 'PREVIOUS_QUESTION'; } | 
    { type: 'SET_ANSWER'; payload: {questionIndex:number, answer: string} };

type QuestionOption = {
    display: string;
    value: string;
    isRejection: boolean;
};

type Question = {
        "question": string,
        "type": "ChoiceType",
        "options": QuestionOption[],
}

export type QuizData = {
    questions: Question[];
};

export type QuestionProps = {
    question: string;
    options: QuestionOption[];
    onAnswer: (answer: string) => void;
    currentAnswer?: string;
}
import { QuizActions, QuizState } from "./types";

export const reducer = (state:QuizState, action:QuizActions): QuizState => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
        case 'PREVIOUS_QUESTION':
            return { ...state, currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1) };
        case 'SET_ANSWER':
            return { ...state, answers: { ...state.answers, [action.payload.questionIndex]: action.payload.answer } };
        default:
            return state;
    }
}
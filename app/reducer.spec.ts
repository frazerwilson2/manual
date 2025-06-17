import {reducer} from './reducer';

describe('Reducer Tests', () => {
    it('should handle NEXT_QUESTION action', () => {
        const initialState = { currentQuestionIndex: 0, answers: {} };
        const action = { type: 'NEXT_QUESTION' as const };
        const newState = reducer(initialState, action);
        expect(newState.currentQuestionIndex).toBe(1);
    });

    it('should handle PREVIOUS_QUESTION action', () => {
        const initialState = { currentQuestionIndex: 2, answers: {} };
        const action = { type: 'PREVIOUS_QUESTION' as const };
        const newState = reducer(initialState, action);
        expect(newState.currentQuestionIndex).toBe(1);
    });

    it('should not go below index 0 on PREVIOUS_QUESTION', () => {
        const initialState = { currentQuestionIndex: 0, answers: {} };
        const action = { type: 'PREVIOUS_QUESTION' as const };
        const newState = reducer(initialState, action);
        expect(newState.currentQuestionIndex).toBe(0);
    });

    it('should handle SET_ANSWER action', () => {
        const initialState = { currentQuestionIndex: 0, answers: {} };
        const action = { type: 'SET_ANSWER' as const, payload: { questionIndex: 0, answer: 'test' } };
        const newState = reducer(initialState, action);
        expect(newState.answers[0]).toBe('test');
    });
}
);  
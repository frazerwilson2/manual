import {questionUtils} from './utils';

describe('questionUtils', () => {
    const mockData = {
        questions: [
            {
                question: 'What is your favorite color?',
                type: "ChoiceType" as const,
                options: [
                    { value: 'red', display: 'Red', isRejection: false },
                    { value: 'blue', display: 'Blue', isRejection: false },
                    { value: 'green', display: 'Green', isRejection: true }
                ]
            },
            {
                question: 'What is your favorite animal?',
                type: "ChoiceType" as const,
                options: [
                    { value: 'dog', display: 'Dog', isRejection: false },
                    { value: 'cat', display: 'Cat', isRejection: false }
                ]
            }
        ]
    };

    it('should return the correct question data for a given index', () => {
        const { getQuestionData } = questionUtils(mockData);
        expect(getQuestionData(0)).toEqual(mockData.questions[0]);
        expect(getQuestionData(1)).toEqual(mockData.questions[1]);
        expect(getQuestionData(2)).toBeNull();
    });

    it('should correctly identify a rejection answer', () => {
        const { isRejection } = questionUtils(mockData);
        expect(isRejection(0, 'red')).toBe(false);
        expect(isRejection(0, 'green')).toBe(true);
        expect(isRejection(1, 'dog')).toBe(false);
        expect(isRejection(1, 'cat')).toBe(false);
    });
});
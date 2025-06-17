import { QuizData } from "./types";

    export const questionUtils = (data:QuizData) => {

        const getQuestionData = (index: number) => {
            return data && data.questions[index] ? data.questions[index] : null;
        };

        const isRejection = (index: number, answer: string): boolean => {
            const question = data.questions[index];
            const option = question.options.find(opt => opt.value === answer);
            return option ? option.isRejection : false;
        };

        return {getQuestionData, isRejection}
    }

    export function isHtmlString(str: string): boolean {
        const htmlTagRegex = /<[^>]+>|&[a-z]+;|&#[0-9]+;/i;
        return htmlTagRegex.test(str);
    }
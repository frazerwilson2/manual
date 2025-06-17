import { useEffect, useState } from "react";
import { QuizData } from "./types";

export const useData = () => {
    const [quizData, setQuizData] = useState<QuizData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const fetchQuizQuestions = async () => {
                setLoading(true);
    
                try {
                    const response = await fetch('/api');
    
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
    
                    const data = await response.json();
                    setQuizData(data);
                } catch (err: any) {
                    console.error('Error fetching quiz data on client:', err);
                    setError(err.message || 'An unknown error occurred');
                } finally {
                    setLoading(false); // Set loading state to false when fetch is complete (success or error)
                }
            };

            useEffect(() => {
                fetchQuizQuestions();
            }, []);

            return {quizData, loading, error}
}

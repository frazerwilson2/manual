'use client';
import React, { createContext, ReactNode, useContext, useState } from "react";

interface QuizContextType {
  showQuiz: boolean;
  setShowQuiz: (show: boolean) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [showQuiz, setShowQuiz] = useState(false); // Initial state is false

  return (
    <QuizContext.Provider value={{ showQuiz, setShowQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuizContext() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
}

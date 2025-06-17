import {render, screen, waitFor} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Quiz } from './quiz'
import { describe } from 'node:test'

const mockQuizData = { questions: [
                {question: 'What is love?', options: [
                    {
                        "display":"baby dont hurt me",
                        "value":"no more",
                        "isRejection":false
                    },
                    {
                        "display":"reject",
                        "value":"reject",
                        "isRejection":true
                    }
                ]},
                {question: 'chicken or egg?', options: [
                    {
                        "display":"egg",
                        "value":"no more",
                        "isRejection":false
                    },
                    {
                        "display":"chicken",
                        "value":"no more",
                        "isRejection":true
                    }
                ]},
            ] }

describe('Quiz Component', () => {

afterEach(() => {
    jest.clearAllMocks();
});

    it('renders loading state initially', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ questions: [] }),
        })
    ) as jest.Mock;

        render(<Quiz />);
        expect(screen.getByText('Loading Quiz Questions...')).toBeInTheDocument();
    });

    it('shows error on API failure', async () => {
    global.fetch = jest.fn(() =>
        Promise.reject(new Error('Network Error')),
    ) as jest.Mock;
    
    render(<Quiz />);
    await waitFor(() => {
        expect(screen.getByText('Error Loading Quiz')).toBeInTheDocument();
    });
    });

    it('loads data and displays', async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockQuizData),
        })
    ) as jest.Mock;

        render(<Quiz />);
        await waitFor(() => {
            expect(screen.getByText('What is love?')).toBeInTheDocument();
        });
    });

    it('steps through answers (and returns)', async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockQuizData),
        })
    ) as jest.Mock;

        render(<Quiz />);
        await waitFor(() => {
            expect(screen.getByText('What is love?')).toBeInTheDocument();
        });

        const answerButton = screen.getByText('baby dont hurt me');
        answerButton.click();
        await waitFor(() => {
            expect(screen.getByText('chicken or egg?')).toBeInTheDocument();
        });

        const backButton = screen.getByText(/Back/);
        backButton.click();
        await waitFor(() => {
            expect(screen.getByText('What is love?')).toBeInTheDocument();
        });
    });

    it('handles rejection answers', async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockQuizData),
        })
    ) as jest.Mock;

        render(<Quiz />);
        await waitFor(() => {
            expect(screen.getByText('What is love?')).toBeInTheDocument();
        });

        const answer = screen.getByText('reject');
        answer.click();
        await waitFor(() => {
            expect(screen.getByText('Quiz Rejected')).toBeInTheDocument();
        });
    });

    it('completes after all questions', async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockQuizData),
        })
    ) as jest.Mock;

        render(<Quiz />);
        await waitFor(() => {
            expect(screen.getByText('What is love?')).toBeInTheDocument();
        });

        const answerButton1 = screen.getByText('baby dont hurt me');
        answerButton1.click();
        await waitFor(() => {
            expect(screen.getByText('chicken or egg?')).toBeInTheDocument();
        });

        const answerButton2 = screen.getByText('egg');
        answerButton2.click();

        await waitFor(() => {
            expect(screen.getByText('Quiz Completed!')).toBeInTheDocument();
        });
    });
});
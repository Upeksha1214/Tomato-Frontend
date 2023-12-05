import React, { useEffect, useState } from 'react';
import bgImg from '../../asset/Img/R.png';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import answerGenerate from '../../utill/answerGenarate';
import { gameQuestion } from '../../utill/gameServices';

const MAX_QUESTIONS = 10;
const LEVEL_DURATION = 30;

export default function Level2() {
    const [que, setQue] = useState('');
    const [answers, setAnswers] = useState([]);
    const [solution,setSolution] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(LEVEL_DURATION);
    const [errorMessage, setErrorMessage] = useState('');
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    

    const fetchQuestion = async () => {
        try {
            // console.log('invoking game function.');
            const response = await gameQuestion();
            console.log(response);
            setQue(response.question);
            setSolution(response.solution);

            const answersArray = answerGenerate(response.solution);
            setQuestionsAnswered((prev) => prev + 1)
            setAnswers(answersArray);
            setErrorMessage(''); 
        } catch (error) {
            console.error('Error fetching question:', error);
        }
    };

    useEffect(() => {
        if (questionsAnswered < MAX_QUESTIONS) {
            fetchQuestion();
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        } else {
            console.log('Game Over. Player answered 10 questions.');
        }
    }, []);

    useEffect(() => {
        if (timer === 0 && questionsAnswered < MAX_QUESTIONS) {
            setTimer(LEVEL_DURATION);
        }
    }, [timer]);

    const handleAnswerClick = (selectedAnswer) => {
        console.log(selectedAnswer);
        console.log(que);

        const isCorrect = selectedAnswer === solution;

        console.log(isCorrect);

        if (isCorrect) {
            setScore((prevScore) => prevScore +1);
            console.log(score);
            setErrorMessage(''); 
        } else {
            setErrorMessage('Wrong answer! Try again.');
        }

        setTimer(LEVEL_DURATION);

        // if (isCorrect) {
        //     setQuestionsAnswered((prev) => prev + 1);
        // }

        if (questionsAnswered +2 === MAX_QUESTIONS) {
            console.log('Game Over. Player answered 10 questions.');
        } else {
            fetchQuestion();
        }
    };

    const defaultTheme = createTheme();
    return (
        <ThemeProvider theme={defaultTheme}>
            <div
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    display: 'flex',
                }}
            >
                <Container>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <h1 style={{ fontSize: '3em', color: '#eb3b5a' }}>Level 2</h1>
                        </Grid>
                    </Grid>
                    {questionsAnswered < MAX_QUESTIONS && (
                        <>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <label
                                        style={{
                                            backgroundColor: 'white',
                                            fontSize: '2em',
                                            color: '#eb3b5a',
                                        }}
                                    >
                                        What is the value of the tomato?
                                    </label>
                                </Grid>
                                <Grid item xs={6}>
                                    <label
                                        style={{
                                            fontSize: '2em',
                                            color: '#eb3b5a',
                                            position: 'absolute',
                                            textAlign: 'center',
                                            right: '65px',
                                            backgroundColor: 'white',
                                            width: '150px',
                                        }}
                                    >
                                        Score: {score}
                                    </label>
                                </Grid>
                            </Grid>
                            <Grid container style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Grid
                                    item
                                    sx={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        borderRadius: 8,
                                        p: 4,
                                    }}
                                    style={{
                                        backgroundColor: 'white',
                                        width: '48%',
                                        height: '300px',
                                        position: 'relative',
                                        top: '10px',
                                    }}
                                >
                                    <img src={que} style={{ height: '250px' }} alt="Question" />
                                </Grid>
                                <Grid
                                    container
                                    spacing={2}
                                    justifyContent={'center'}
                                    marginTop={'20px'}
                                >
                                    {answers.map((answer, index) => (
                                        <Grid item key={index}>
                                            <Button
                                                variant="contained"
                                                color="info"
                                                onClick={() => handleAnswerClick(answer)}
                                            >
                                                {answer}
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid
                                    item
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Link href="/Level3" variant="body2" style={{ textDecoration: 'no' }}>
                                        <Button
                                            style={{
                                                backgroundColor: 'red',
                                                color: '#ffb8b8',
                                                fontSize: '2em',
                                                position: 'absolute',
                                                right: '60px',
                                                top: '540px',
                                            }}
                                        >
                                            LEVEL 3
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid
                                    item
                                    style={{
                                        position: 'absolute',
                                        right: '72px',
                                        top: '50px',
                                        fontSize: '2em',
                                        color: 'white',
                                    }}
                                >
                                    Time: {timer}s
                                </Grid>
                                {errorMessage && (
                                    <Grid
                                        item
                                        style={{
                                            position: 'absolute',
                                            right: '60px',
                                            top: '530px',
                                            fontSize: '1.5em',
                                            color: 'red',
                                        }}
                                    >
                                        {errorMessage}
                                    </Grid>
                                )}
                            </Grid>
                        </>
                    )}
                </Container>
            </div>
        </ThemeProvider>
    );
}
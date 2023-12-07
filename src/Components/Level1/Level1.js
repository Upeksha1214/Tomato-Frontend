import React, { useEffect, useState } from 'react';
import bgImg from '../../asset/Img/R.png';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { gameQuestion } from '../../utill/gameServices';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import answerGenerate from '../../utill/answerGenarate';

export default function Level1() {
    const [que, setQue] = useState('');
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [solution,setSolution] = useState(0);

    const x = async () => {
        console.log('invoking game function.');
        const response = await gameQuestion();
        console.log(response);
        setQue(response.question);
        setSolution(response.solution);

        const answersArray = answerGenerate(response.solution);
        setAnswers(answersArray);
    };

    useEffect(() => {
        x();
    }, []);

    const handleAnswerClick = (selectedAnswer) => {
        // Check if the selected answer is correct
        const isCorrect = selectedAnswer === solution;

        // Update score if correct
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);

        // } else  {
        //     alert('Wrong answer! Try again.');
         }

        x();

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
                    <Grid container>
                        <Grid item md={6}>
                            <h1 style={{ fontSize: '3em', color: '#eb3b5a' }}>Level 1</h1>
                        </Grid>
                    </Grid>
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
                    <Grid
                        container
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                    >
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
                            <img src={que} alt="question" style={{ height: '250px' }} />
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
                        </Grid>
                        <Grid
                            item
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Link href="/Level2" variant="body2" style={{ textDecoration: 'no' }}>
                                <Button
                                    style={{
                                        backgroundColor: 'red',
                                        color: '#ffb8b8',
                                        fontSize: '2em',
                                        position: 'absolute',
                                        right: '60px',
                                        top: '550px',
                                    }}
                                >
                                    LEVEL 2
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </ThemeProvider>
    );
}

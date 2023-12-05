import React from 'react'
import bgImg from '../../asset/Img/R.png';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';


export default function Welcome() {
    const defaultTheme = createTheme();


    return (
        <ThemeProvider theme={defaultTheme}>
        <div style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
        }}>
            <Grid container spacing={2}>
                <Grid item>
                    <h1 style={{ fontSize: '3em', color: '#eb3b5a', textAlign: 'center', position: "absolute", left: '390px' }}>
                        Welcome Tomato Game</h1>
                </Grid>
                <Grid item 
                style={{justifyContent: 'center',
                 alignItems: 'center',}}>
                <Link href="/Level1" variant="body2" style={{textDecoration:'no'}}>
                <Button style={{backgroundColor:'red',color:'#ffb8b8',fontSize: '2em',
                position:'absolute',top: '321px',left: '570px'}}
                >Start The Game </Button>
                </Link>
                </Grid>
                
            </Grid>

        </div>
        </ThemeProvider>
    )
}

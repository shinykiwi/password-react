import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import {Alert, AlertTitle, Button, IconButton, Paper, styled, TextField} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import InfoIcon from '@mui/icons-material/Info';
import {useState} from "react";
import calculateTimeToCrack from "./passwordgenerator";

function valuetext(value) {
    return `${value}`;
}

function App() {
    const [strength, setStrength] = useState(8);
    const [strColour, setStrColour] = useState("#1ea95a")
    const [length, setLength] = useState(8);

    const [noun, setNoun] = useState("Weak");
    const [crack_time, setCrackTime] = useState("N/A");

    const [specialChar, setSpecialChar] = useState(false);
    const [numbers, setNumbers] = useState(false);

    const [password, setPassword] = useState("Password")

    const handleSpecial = (e) => {
        setSpecialChar(e.target.checked)
        if (e.target.checked){
            setStrength(strength + ((1/6)*100))
        }
        else{
            setStrength(strength - ((1/6)*100))
        }
        console.log(strength)
    }

    const handleNumbers = (e) => {
        setNumbers(e.target.checked)
        if(e.target.checked){
            setStrength(strength + ((1/6)*100))
        }
        else{
            setStrength(strength - ((1/6)*100))
        }
        console.log(strength)
    }


    const handleChange = (e) => {
        const val = e.target.value
        console.log(val)
        setStrength(val)
        setCrackTime(calculateTimeToCrack('password123'))

        if(val === 8){
            setNoun("Weak")
            setStrength(Number(100*(1/6)))
        }
        else if(val === 16) {
            setNoun("Ok")
            setStrength(Number(100*(2/6)))
        }
        else if(val === 24){
            setNoun("Good")
            setStrength(Number(100*(3/6)))
        }
        else if(val === 32){
            setNoun("Great")
            setStrength(Number(100*(4/6)))
        }
        else if(val === 40){
            setNoun("Strong")
            setStrength(Number(100*(5/6)))
        }
        else if(val === 48){
            setNoun("Very Strong")
            setStrength(Number(100*(6/6)))
        }
        console.log(strength)
    }

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[200],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#1ea95a'
        },
    }));


  return (
    <div className="App">
        <div className={"container"}>
            <div className={"flex"}>
                <div className={"flex-col"} >
                    <Box className={"box"}>
                        <h2>Create a password</h2>
                        <div>
                            <TextField id="outlined-basic" label={password} variant="outlined" />
                            <IconButton aria-label="copy">
                                <ContentCopyIcon />
                            </IconButton>
                        </div>
                        <div>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={specialChar}/>} label="Special Characters" onChange={(e)=> handleSpecial(e)}/>
                                <FormControlLabel control={<Checkbox checked={numbers}/>} label="Numbers" onChange={(e)=> handleNumbers(e)}/>
                            </FormGroup>
                        </div>
                        <div>
                            <p>Length</p>
                            <Slider
                                aria-label="Length"
                                defaultValue={length}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={8}
                                marks
                                min={8}
                                max={32}
                                onChange={(e)=> handleChange(e)}
                            />
                        </div>
                        <p>{noun}</p>
                        <div>
                            <BorderLinearProgress variant="determinate" value={strength} />
                        </div>
                        <p>Time to crack: <span>{crack_time}</span></p>
                    </Box>
                </div>
                <div className={"flex-col"}>
                    <Box className={"box"}>
                        <div className={"flex-col"}>
                            <div className={"button"}>
                                <Alert severity="warning">
                                    <AlertTitle>Review passwords</AlertTitle>
                                    One of your passwords was leaked in a recent breach <strong>7 days ago.</strong>
                                </Alert>
                            </div>
                            <div className={"button"}>
                                <Button  variant="contained" startIcon={<VpnKeyIcon />}>
                                    Passwords
                                </Button>
                            </div>
                            <div className={"button"}>
                                <Button  variant="contained" startIcon={<InfoIcon />}>
                                    Info
                                </Button>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    </div>

  );
}

export default App;

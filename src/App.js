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
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import {useState} from "react";
import calculateTimeToCrack from "./passwordgenerator";

function valuetext(value) {
    return `${value}`;
}

function App() {
    const [strength, setStrength] = useState(8);
    const [strColour, setStrColour] = useState("#1ea95a")
    const [length, setLength] = useState(8);

    const [specialChar, setSpecialChar] = useState(false);
    const [numbers, setNumbers] = useState(false);

    const [password, setPassword] = useState("Password")

    const [noun, setNoun] = useState("Weak");
    const [crack_time, setCrackTime] = useState(calculateTimeToCrack(password));

    const handleTextChange = (e) => {
        setPassword(e.target.value)
        handleChange()
    }

    const handleSpecial = (e) => {
        setSpecialChar(e.target.checked)
        handleChange()
    }

    const handleNumbers = (e) => {
        setNumbers(e.target.checked)
        handleChange()
    }

    const handleSliderChange = (e) => {
        setLength(e.target.value)
        handleChange()
    }


    const handleChange = () => {
        setCrackTime(calculateTimeToCrack(password))  // Update crack time
        let strength = 0, noun;

        if (numbers)
            strength += (1/8) * 100
        if(specialChar)
            strength += (1/8) * 100
        if(length <= 8) {
            noun = "Weak"
            strength += (1/8) * 100
        }
        else if(length <= 16) {
            noun = "Ok"
            strength += (2/8) * 100
        }
        else if(length <= 24){
            noun = "Good"
            strength += (3/8) * 100
        }
        else if(length <= 32){
            noun = "Great"
            strength += (4/8) * 100
        }
        else if(length <= 40){
            noun = "Strong"
            strength += (5/8) * 100
        }
        else if(length <= 48){
            noun = "Very Strong"
            strength += (6/8) * 100
        }
        setNoun(noun)
        setStrength(strength)
        console.log('strength: ' + strength)
    }

    const onGenerate = (e) =>{

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
                            <TextField id="outlined-basic" label="Password" value={password} variant="outlined"
                                       onChange={(e) => handleTextChange(e)}/>
                            <IconButton aria-label="copy" onClick={() => {navigator.clipboard.writeText(password)}}>
                                <ContentCopyIcon />
                            </IconButton>
                            <IconButton aria-label="generate" onClick={(e) => onGenerate(e)}>
                                <ShuffleOnIcon />
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
                                max={48}
                                onChange={(e)=> handleSliderChange(e)}
                            />
                        </div>
                        <p>{noun}</p>
                        <div>
                            <BorderLinearProgress variant="determinate" value={strength} />
                        </div>
                        <p>Time to crack: <span>{crack_time}</span></p>
                    </Box>
                </div>
            </div>
        </div>
    </div>

  );
}

export default App;

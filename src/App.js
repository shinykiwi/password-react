import './App.css';
import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import {IconButton, styled, TextField} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import {calculateTimeToCrack, generatePassword} from "./passwordgenerator";

function valuetext(value) {
    return `${value}`;
}

function App() {
    const [strength, setStrength] = useState(8);
    const [length, setLength] = useState(8);

    const [specialChar, setSpecialChar] = useState(false);
    const [numbers, setNumbers] = useState(false);

    const [password, setPassword] = useState(generatePassword(8, false, false))

    const [noun, setNoun] = useState("Weak");
    const [crackTime, setCrackTime] = useState(calculateTimeToCrack(password));


    const handleTextChange = (e) => {
        let val = e.target.value
        setLength(val.length)
        setPassword(val)
    }
    const handleSpecial = (e) => setSpecialChar(e.target.checked)
    const handleNumbers = (e) => setNumbers(e.target.checked)
    const handleSliderChange = (e) => setLength(e.target.value)

    const onGenerate = () => setPassword(generatePassword(length, numbers, specialChar))

    useEffect(() => {
        handleChange();
    }, [password, numbers, specialChar, length])

    const handleChange = () => {
        setCrackTime(calculateTimeToCrack(password))  // Update crack time
        let strength = 0, noun;

        // checkboxes
        if (numbers)
            strength += (1 / 8) * 100
        if (specialChar)
            strength += (1 / 8) * 100

        if (length <= 8) {
            noun = "Ok"
            strength += (2 / 8) * 100
        } else if (length <= 14) {
            noun = "Good"
            strength += (3 / 8) * 100
        } else if (length <= 20) {
            noun = "Great"
            strength += (4 / 8) * 100
        } else if (length <= 26) {
            noun = "Strong"
            strength += (5 / 8) * 100
        } else if (length <= 32) {
            noun = "Very Strong"
            strength += (6 / 8) * 100
        }
        setNoun(noun)
        setStrength(strength)
    }



    const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
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
        <link href="https://fonts.cdnfonts.com/css/8bit-wonder" rel="stylesheet"/>
        <div className={"container"}>
            <div className={"box2"} style={{marginLeft: -30}}>
                <div className={"flex-col"} >
                    <Box className={"box"}>
                        <h2>Create a password</h2>
                        <div>
                            <TextField id="outlined-basic"
                                       label="Password"
                                       value={password}
                                       inputProps={{ maxLength: 32 }}
                                       variant="outlined"
                                       onChange={(e) => handleTextChange(e)}/>
                            <IconButton aria-label="copy" onClick={() => {navigator.clipboard.writeText(password)}}>
                                <ContentCopyIcon />
                            </IconButton>
                            <IconButton aria-label="generate" onClick={() => onGenerate()}>
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
                                defaultValue={8}
                                value={length}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                marks
                                min={8}
                                max={32}
                                onChange={(e)=> handleSliderChange(e)}
                            />
                        </div>
                        <p>{noun}</p>
                        <div>
                            <BorderLinearProgress variant="determinate" value={strength} />
                        </div>
                        <p>Time to crack: <span>{crackTime}</span></p>
                    </Box>
                </div>
            </div>
        </div>
    </div>

  );
}

export default App;

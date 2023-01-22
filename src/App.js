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
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC4prHzu1sgv8ucS5fKTtx0XTcVl8tnmjw",
  authDomain: "password-app-519f3.firebaseapp.com",
  databaseURL: "https://password-app-519f3-default-rtdb.firebaseio.com",
  projectId: "password-app-519f3",
  storageBucket: "password-app-519f3.appspot.com",
  messagingSenderId: "57679699233",
  appId: "1:57679699233:web:fb06c9e0b8977d9227b260",
  measurementId: "G-46632LYQ4E"
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)

import './App.css';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';
 
function App() {
    const dataRef = useRef()

    const submithandler = (e) => {
            e.preventDefault()
            handleSubmit(dataRef.current.value)
            dataRef.current.value = ""


    return (
            <div className="App">
                    <form onSubmit={submithandler}>
                            <input type= "text" ref={dataRef} />
                            <button type = "submit">Save</button>
                    </form>
            </div>
    );
}

export default App;


function valuetext(value) {
    return `${value}°C`;
}



function App() {
    const [strength, setStrength] = useState(8);
    const [strColour, setStrColour] = useState("#1ea95a")
    const [length, setLength] = useState(8);
    const [noun, setNoun] = useState("Poor");

    const handleChange = (e) => {
        const val = e.target.value
        console.log(val)
        setStrength(val)

        if(val === 8){
            setNoun("Weak")
            setStrength(Number(100*(1/4)))
        }
        else if(val === 16) {
            setNoun("Ok")
            setStrength(Number(100*(2/4)))
        }
        else if(val === 24){
            setNoun("Good")
            setStrength(Number(100*(3/4)))
        }
        else if(val === 32){
            setNoun("Great")
            setStrength(Number(100*(4/4)))
        }

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
                            <TextField id="outlined-basic" label="Password" variant="outlined" />
                            <IconButton aria-label="delete">
                                <ContentCopyIcon />
                            </IconButton>
                        </div>
                        <div>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Special Characters" />
                                <FormControlLabel control={<Checkbox />} label="Numbers" />
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
                        <p>Time to crack: <span>44d 1hr</span></p>
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
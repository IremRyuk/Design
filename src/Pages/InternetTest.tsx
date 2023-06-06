import { Box, Typography,Stack,Button } from "@mui/material";
// import {useEffect, useState} from 'react'

export default function InternetTest() {
  const imageAddr =
  "http://wallpaperswide.com/download/shadow_of_the_tomb_raider_2018_puzzle_video_game-wallpaper-7680x4800.jpg" +
  "?n=" +
  Math.random();
let startTime: number, endTime: number;
let downloadSize:number = 5616998; //5.36Mb
let download = new Image();
let roundedDecimals:number = 2;
let bytesInAKilobyte:number = 1024;

function showResults() {
  let duration = (endTime - startTime) / 1000;
  let bitsLoaded = downloadSize * 8;
  let speedBps = (bitsLoaded / duration).toFixed(roundedDecimals);
  let displaySpeed = speed(speedBps);
  console.log(displaySpeed.value,displaySpeed.units)
}

function speed(bitsPerSecond: any) {
  let KBps:number = parseInt((bitsPerSecond / bytesInAKilobyte).toFixed(roundedDecimals));
  if (KBps <= 1) return { value: bitsPerSecond, units: "Bps" };
  var MBps:number = parseInt((KBps / bytesInAKilobyte).toFixed(roundedDecimals));
  if (MBps <= 1) return { value: KBps, units: "KBps" };
  else return { value: MBps, units: "MBps" };
}

function play(){
  download.onload = function () {
    endTime = new Date().getTime();
    showResults();
  };
  startTime = new Date().getTime();
  download.src = imageAddr;
}

  return (
    <Box
    width='100vw'
    height='100vh'
    marginTop='100px'
    display='flex'
    justifyContent='center'
    alignItems='center'
    >
<Stack
direction='column'
width='40%'
border='2px solid red'
alignItems='center'
p={5}
spacing={2}
>
  <Typography variant='h5'>Click On Start Button To Test Your Internet Speed</Typography>
  <Typography variant='h4'>45,mb</Typography>
  <Button onClick={()=>play()}>Press To Start</Button>
  </Stack>
    </Box>
  )
}

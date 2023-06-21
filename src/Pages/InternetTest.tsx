import { Box, Typography,Stack,Button } from "@mui/material";
import {useState} from 'react'
import Nav from "../Components/Nav";
import MiniNav from "../Components/MiniNav";
export default function InternetTest() {
  // Set Title
  document.title = 'ToolLand - Internet Test'
  // useState
  const [speedTest,setSpeed] = useState<number|string>(0)
  const [country,setCountry] = useState<string>('Find Country')
  const [city,setCity] = useState<string>('Find City')
  const imageAddr =
  `https://wallpaperaccess.com/full/5244392.jpg` +
  "?n=" +
  Math.random();
let startTime: number, endTime: number;
let downloadSize:number = 4244792; //4.24Mb
let download = new Image();
let roundedDecimals:number = 2;
let bytesInAKilobyte:number = 1024;

function showResults() {
  let duration = (endTime - startTime) / 1000;
  let bitsLoaded = downloadSize * 8;
  let speedBps = (bitsLoaded / duration).toFixed(roundedDecimals);
  let displaySpeed = speed(speedBps);
  console.log(displaySpeed.value,displaySpeed.units)
  setSpeed(displaySpeed.value)
}

function speed(bitsPerSecond: any) {
  let KBps:number = parseInt((bitsPerSecond / bytesInAKilobyte).toFixed(roundedDecimals));
  if (KBps <= 1) return { value: bitsPerSecond, units: "Bps" };
  var MBps:number = parseInt((KBps / bytesInAKilobyte).toFixed(roundedDecimals));
  if (MBps <= 1) return { value: KBps, units: "KBps" };
  else return { value: MBps, units: "MBps" };
}

function play(){
  // clear values
  setSpeed('loading...')
  setCountry('loading...')
  setCity('loading...')

  // get internet speed
  download.onload = function () {
    endTime = new Date().getTime();
    showResults();
  };
  startTime = new Date().getTime();
  download.src = imageAddr;

  // get location information
  const success = (position:any) =>{
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const server = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}
    &longitude=${longitude}&localityLanguage=en`
    fetch(server)
    .then(res=>res.json())
    .then(data=>{setCountry(data.countryName),setCity(data.city)})
  }

  const error = (err:any)=>{
    console.log(err)
  }

  navigator.geolocation.getCurrentPosition(success,error)
}

  return (
    <>
    <Nav />
    <Box
    width='100vw'
    height='100vh'
    display='flex'
    justifyContent='center'
    alignItems='center'
    >
<Stack
direction='column'
width={{xs:'100%',sm:'70%'}}
textAlign='center'
alignItems='center'
p={5}
spacing={2}
>
  <Typography sx={{width:'100%',fontSize:{xs:'x-large',sm:'xx-large'},fontWeight:'bold'}}>Click On Start Button To Get Your Information</Typography>
  <br />
  <Typography sx={{fontSize:{xs:'large',sm:'x-large'}}}>Internet Speed: <span style={{fontWeight:'bold'}}>{speedTest}</span> mb</Typography>
  <Typography sx={{fontSize:{xs:'large',sm:'x-large'}}}>Your Country: <span style={{fontWeight:'bold'}}>{country}</span></Typography>
  <Typography sx={{fontSize:{xs:'large',sm:'x-large'}}}>Your City: <span style={{fontWeight:'bold'}}>{city}</span></Typography>
  <Button variant='contained' color='success' onClick={()=>play()}>Press To Start</Button>
  </Stack>
    </Box>
    <MiniNav />
    </>
  )
}

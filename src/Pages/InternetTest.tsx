import { Box, Typography,Stack,Button } from "@mui/material";
import { ReactInternetSpeedMeter } from 'react-internet-meter'
import 'react-internet-meter/dist/index.css'
import {useEffect, useState} from 'react'

export default function InternetTest() {
  const [stopTest,SetStop] = useState<boolean>(false)
  const [checkSpeed, SetCheckSpeed] = useState<number>(0);
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
  <Typography variant='h4'>{checkSpeed},mb</Typography>
  {/* <Button onClick={()=>play()}>Press To Start</Button> */}
  </Stack>




      {/* This is Speed Test Form Real-Internet-Meter */}
      {stopTest && 
      <>
      <ReactInternetSpeedMeter
        txtSubHeading="Internet connection is slow"
        outputType="" // "alert"/"modal"/"empty"
        customClassName={null}
        pingInterval={2000} // milliseconds
        txtMainHeading="Opps..."
        thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
        threshold={50}
        imageUrl="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg"
        downloadSize="1561257" //bytes
        callbackFunctionOnNetworkTest={(data:any) => SetCheckSpeed(data)}
          />
      </>
      }

    </Box>
  )
}

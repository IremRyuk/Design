import { Box, Stack, Typography,Button, IconButton } from "@mui/material";
import '../Styles/Home/home.css'
import {useState} from 'react'
import {BottomStyle, CatergoriesBtns, HomeLinksStyle, HomeTime_Links,} from "../Styles/Mui/Mui";
import { Link } from "react-router-dom";
// Social Links Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Home() {
    // Set Title
    document.title = 'ToolLand'
    // React State
    const[hours,_setHours] = useState<number>(new Date().getHours())
    const[minutes,_setMinutes] = useState<number>(new Date().getMinutes())
  return (
    <Box
    className='home'
    >
<br />
<br />
        <center><Typography variant="h4">Welcome to <span style={{fontWeight:'bold'}}>ToolLand</span></Typography></center>
        <br />
        <center><Typography variant="h4" sx={{fontWeight:'bold',display:{xs:'none',md:'block'}}}>From Here You Can Choose Any Tool You Like </Typography></center>
        {/* Categories */}
        <Stack 
        direction='column'
        height='70vh'
        justifyContent='center'
        alignItems='center'
        sx={{
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50%,-50%)'
        }}
        className='change'
        >
<Link to ='/paint'><Button variant='contained' sx={CatergoriesBtns}>Paint</Button></Link>
<Link to ='/savedata'><Button variant='contained' sx={CatergoriesBtns}>Save Information</Button></Link>
<Link to ='/convert'><Button variant='contained' sx={CatergoriesBtns}>Converting</Button></Link>
<Link to ='/internetTest'><Button variant='contained' sx={CatergoriesBtns}>Internet Speed Test</Button></Link>
        </Stack>
<Stack sx={BottomStyle} direction='row'>
        {/* Time */}
        <Typography sx={HomeTime_Links }>Your Current Time:{hours}:{minutes}</Typography>
        {/* Social Links */}
        <Stack sx={HomeTime_Links } direction='row' spacing={5}>
<IconButton sx={HomeLinksStyle} onClick={()=>window.location.href = 'https://www.facebook.com/'}>
  <FacebookIcon />
</IconButton>
<IconButton sx={HomeLinksStyle} onClick={()=>window.location.href = 'https://www.twitter.com/'}>
  <TwitterIcon />
</IconButton>
<IconButton sx={HomeLinksStyle} onClick={()=>window.location.href = 'https://www.instagram.com/'}>
  <InstagramIcon />
</IconButton>
        </Stack>
        </Stack>
    </Box>
  )
}

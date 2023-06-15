import { Box, Modal, Stack, Typography,Button } from "@mui/material";
import '../Styles/Home/home.css'
import {useState,useEffect} from 'react'
import {CatergoriesBtns, HomeModal, HomeModalFonts, HomeTime} from "../Styles/Mui/Mui";
import { Link } from "react-router-dom";

export default function Home() {
    // React State
    const[modalOpen,setModalOpen] = useState<boolean>(false)
    const[hours,_setHours] = useState<number>(new Date().getHours())
    const[minutes,_setMinutes] = useState<number>(new Date().getMinutes())
    const seen = sessionStorage.getItem('seen')
    // Open Modal
    useEffect(()=>{
        if(seen === null){
            sessionStorage.setItem('seen','true')
            setModalOpen(true)
        }else{
            return
        }
    })
  return (
    <Box
    className='home'
    >
<br />
<br />
        <center><Typography variant="h3">Welcome to <span style={{fontWeight:'bold'}}>ToolLand</span></Typography></center>
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
<Link to ='/convert'><Button variant='contained' sx={CatergoriesBtns}>Converting</Button></Link>
<Link to ='/internetTest'><Button variant='contained' sx={CatergoriesBtns}>Internet Speed Test</Button></Link>
<Link to ='/savedata'><Button variant='contained' sx={CatergoriesBtns}>Save Information</Button></Link>
        </Stack>

        {/* Time */}
        <Typography sx={HomeTime}>Your Current Time:{hours}:{minutes}</Typography>

        {/* Modal On First Load Page */}
        <Modal
        open={modalOpen}
        onClose={()=>setModalOpen(false)}
        >
            <Box
            p={1}
            sx={HomeModal}>
            <Typography sx={HomeModalFonts}>Tips for using webSite</Typography>
            <br />
            <Typography sx={HomeModalFonts}>1) Click on page and swipe left or right For Page Navigation </Typography>
            <br />
            <br />
            <Typography sx={HomeModalFonts}>2) From Top Right Menu Button, You can change settings</Typography>
            </Box>
        </Modal>
    </Box>
  )
}

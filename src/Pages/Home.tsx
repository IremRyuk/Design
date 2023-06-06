import { Box, Modal, Stack, Typography } from "@mui/material";
import '../Styles/Home/home.css'
import {useState,useEffect} from 'react'
import { HomeModal, HomeModalFonts, HomeTime } from "../Styles/Mui/Mui";

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
    width='100vw'
    height='100vh'
    className='home'
    >
        <center><Typography variant="h3">Welcome to <span style={{fontWeight:'bold'}}>ToolLand</span></Typography></center>
        {/* Titles */}
        <Stack position='relative' direction='column' textAlign='right' width='100vw' height='200px' mt={20}>
<Typography sx={{fontSize:{sm:'x-large',md:'xx-large'}}} className="title1">Convert Kg Into Pounds</Typography>
<Typography sx={{fontSize:{sm:'x-large',md:'xx-large'}}} className="title2">Convert Km Into Ft</Typography>
<Typography sx={{fontSize:{sm:'x-large',md:'xx-large'}}} className="title3">Save Your Personal Data,Edit & Delete</Typography>
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

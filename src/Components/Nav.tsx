import { AppBar, Toolbar,Typography,Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { WindowSizeAct } from "../Redux/Action/Navigation/WindowSizeAct";
import { Link } from "react-router-dom";

export default function Nav() {
    let [_isOpen,_setIsOpen] = useState<boolean>(false)
    // Redux
    const dispatch = useDispatch()
    const windowWidth = useSelector((state:any)=>state.windowWidth)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            let size = window.innerWidth
            dispatch(WindowSizeAct(size))
        })
    })
  return (
    <AppBar
    className="navigation"
    sx={{
        display:{xs:'none',sm:'flex'},
bgcolor:'transparent',
boxShadow:'none',
padding:'0px',
margin:'0px'
    }}
    >
        <Toolbar>
            <Stack direction='row' width='100vw' alignItems='center'>
                <Typography sx={{flexGrow:'1'}}>
                    <Link to='/'><Button sx={{fontSize:'xx-large',color:'#00ffad'}}>ToolLand</Button></Link>
                </Typography>
                <Stack direction='row' spacing={5}>
                    <Link to='/paint' style={{textDecoration:'none'}}><Typography sx={{fontSize:'x-large',cursor:'pointer',color:'#00ffad'}}>Paint</Typography></Link>
                    <Link to='/savedata' style={{textDecoration:'none'}}><Typography sx={{fontSize:'x-large',cursor:'pointer',color:'#00ffad'}}>SaveData</Typography></Link>
                    <Link to='/convert' style={{textDecoration:'none'}}><Typography sx={{fontSize:'x-large',cursor:'pointer',color:'#00ffad'}}>Convert</Typography></Link>
                    <Link to='/internetTest' style={{textDecoration:'none'}}><Typography sx={{fontSize:'x-large',cursor:'pointer',color:'#00ffad'}}>Internet</Typography></Link>
                </Stack>
            </Stack>
{windowWidth <= 900 && 
<>
</>
}
        </Toolbar>
    </AppBar>
  )
}

import { AppBar, Toolbar,Typography,Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { WindowSizeAct } from "../Redux/Action/Navigation/WindowSizeAct";
// import { Menu } from "@mui/icons-material";
import { SwiperValueAct } from "../Redux/Action/SwiperValueAct/SwiperValueAct";

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
position:'fixed',
top:'0%',
left:'0%',
bgcolor:'transparent',
boxShadow:'none',
padding:'0px',
margin:'0px'
    }}
    >
        <Toolbar>
            <Stack direction='row' width='100vw' alignItems='center'>
                <Typography sx={{flexGrow:'1'}}>
                    <Button sx={{fontSize:'xx-large',color:'#00ffad'}} onClick={()=>dispatch(SwiperValueAct(1))}>ToolLand</Button>
                </Typography>
                <Stack direction='row' spacing={5}>
                    <Typography sx={{fontSize:'x-large',cursor:'pointer',color:'#00ffad'}} onClick={()=>dispatch(SwiperValueAct(0))}>Paint</Typography>
                    <Typography sx={{fontSize:'x-large',cursor:'pointer',color:'#00ffad'}} onClick={()=>dispatch(SwiperValueAct(1))}>Converting</Typography>
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

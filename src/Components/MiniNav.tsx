import { Box,BottomNavigation, BottomNavigationAction,Typography} from '@mui/material'
import {useState} from 'react'
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SpeedIcon from '@mui/icons-material/Speed';
import ScaleIcon from '@mui/icons-material/Scale';
import { useNavigate } from 'react-router-dom';
export default function MiniNav() {
    const navigate = useNavigate()
    const [value, setValue] = useState<number>(0);
    return (
        <Box display={{xs:'flex',sm:'none'}}>
        <center><Typography variant='h4' sx={{width:'100%',position:'absolute',top:2,}} onClick={()=>navigate('/')}>ToolLand</Typography></center>
        <BottomNavigation
        showLabels={true}
        sx={{
            width:'100%',
            position:'absolute',
            bottom:0,
            bgcolor:'transparent',
            backdropFilter:'blur(10px)',
        }}
            value={value}
            onChange={(_event, newValue) => {
                setValue(newValue);
            }}>
            <BottomNavigationAction disableTouchRipple style={{scale:'1.2'}} value={value} onClick={()=>navigate("/internetTest")} icon={<SpeedIcon />}/>
            <BottomNavigationAction disableTouchRipple style={{scale:'1.2'}} value={value} onClick={()=>navigate("/convert")} icon={<ScaleIcon />}/>
            <BottomNavigationAction disableTouchRipple style={{scale:'1.2'}} value={value} onClick={()=>navigate('/paint')} icon={<ColorLensIcon />}/>
            <BottomNavigationAction disableTouchRipple style={{scale:'1.2'}} value={value} onClick={()=>navigate('/savedata')} icon={<FormatListNumberedRtlIcon />} />
        </BottomNavigation>
        </Box>
    )
}

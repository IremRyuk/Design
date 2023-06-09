import { Box, Typography,Stack,Button } from "@mui/material";
import { ReactSketchCanvas,ReactSketchCanvasRef} from 'react-sketch-canvas';
import { CanvasMainBox } from "../Styles/Mui/Mui";
import {createRef,useState} from 'react'
import '../Styles/Paint/paint.css'
export default function Paint() {
    let mod = createRef<ReactSketchCanvasRef>()
    let [color,setColor] = useState<string>('black')
    let [bgColor,setBGColor] = useState<string>('white')
    const clearOn = () => {
        mod.current?.eraseMode(true);
    }
    const clearOff = () => {
        mod.current?.eraseMode(false);
    }
    const clearAll = () => {
        mod.current?.clearCanvas();
    }
    const Undo = () => {
        mod.current?.undo();
    }
    const Redo = () => {
        mod.current?.redo();
    }
  return (
    <Box
    sx={CanvasMainBox}
    >
        <Stack width='80%' height='70%' direction='row' onMouseEnter={()=>console.log('entered')} onMouseLeave={()=>{console.log('leave')}}>
            {/* Tools For Drawing */}
            <Box width='20%'>
                <Typography>Choose Pan Color</Typography>
                <input type='color' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setColor(e.target.value)}}/>
                <Typography>Choose Background Color</Typography>
                <input type='color' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setBGColor(e.target.value)}}/>
            </Box>
            {/* Board */}
    <ReactSketchCanvas
    ref={mod}
      style={{border:'2px solid white',borderRadius:'2.4mm'}}
      width="70%"
      height="100%"
      strokeColor={color}
      canvasColor={bgColor}
      strokeWidth={4}
      eraserWidth={20}
    />
    <Button variant='contained' color='primary' onClick={()=>Undo()}>Undo</Button>
    <Button variant='contained' color='primary' onClick={()=>Redo()}>Undo</Button>
    <Button variant='contained' color='primary' onClick={()=>clearOn()}>Erase</Button>
    <Button variant='contained' color='success' onClick={()=>clearOff()}>Pan</Button>
    <Button variant='contained' color='error' onClick={()=>clearAll()}>Clear</Button>
    </Stack>
    </Box>
  )
}


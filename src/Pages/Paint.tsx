import { Box, Typography,Stack,Button } from "@mui/material";
import { ReactSketchCanvas,ReactSketchCanvasRef} from 'react-sketch-canvas';
import { CanvasMainBox, PaintBtns, PaintFunctions } from "../Styles/Mui/Mui";
import {createRef,useState} from 'react'
import '../Styles/Paint/paint.css'
import MiniPaint from "./MiniPaint";
import { useSelector } from "react-redux";
import Nav from "../Components/Nav";
import MiniNav from "../Components/MiniNav";
export default function Paint() {
  // Set Title
  document.title = 'ToolLand - Paint'
  // Redux
  let screenSize = useSelector((state:any)=>state.windowWidth)
  
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
    <>
    <Nav />
    <Box
    sx={CanvasMainBox}
    >
        <Stack width={{md:'95%',lg:'90%'}} height='80%' direction='row'>
            {/* Tools For Drawing */}
            <Stack 
            mr={2}
            sx={PaintBtns}
            border='2px solid black'
            justifyContent='space-evenly'
            borderRadius='2.4mm'
            alignItems='center'
            >
                {/* Pan Color */}
                <Box>
                <center>
                <Typography>Choose Pan Color</Typography>
                <input type='color' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setColor(e.target.value)}}/>
                </center>
                </Box>
                {/* Background Color */}
                <Box>
                <center>
                <Typography>Choose Background Color</Typography>
                <input type='color' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setBGColor(e.target.value)}}/>
                </center>
                </Box>
            </Stack>
            {/* Board */}
    <ReactSketchCanvas
    ref={mod}
      style={{border:'2px solid black',borderRadius:'2.4mm'}}
      width="70%"
      height="100%"
      strokeColor={color}
      canvasColor={bgColor}
      strokeWidth={4}
      eraserWidth={20}
    />
    <Stack
    ml={2}
    sx={PaintBtns}
    direction='column'
    height='100%'
    border='2px solid black'
    borderRadius='2.4mm'
    justifyContent='space-around'
    alignItems='center'
    >
        <Button variant='contained' sx={PaintFunctions} color='success' onClick={()=>clearOff()}>Pan</Button>
        <Button variant='contained' sx={PaintFunctions} color='error' onClick={()=>clearAll()}>Erase</Button>
    <Button variant='contained' sx={PaintFunctions} color='primary' onClick={()=>Undo()}>Undo</Button>
    <Button variant='contained' sx={PaintFunctions} color='primary' onClick={()=>Redo()}>Redo</Button>
    <Button variant='contained' sx={PaintFunctions} color='error' onClick={()=>clearOn()}>Clear</Button>
    </Stack>
    </Stack>
    </Box>
    {screenSize<=900 && 
    <MiniPaint />
  }
  <MiniNav />
    </>
  )
}


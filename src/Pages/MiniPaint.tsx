import { Box, Typography,Stack,Button,Drawer} from "@mui/material";
import { ReactSketchCanvas,ReactSketchCanvasRef} from 'react-sketch-canvas';
import { CanvasMini, PaintBtnsDrawerMini, PaintFunctions } from "../Styles/Mui/Mui";
import {createRef,useState} from 'react'
import '../Styles/Paint/paint.css'
export default function MiniPaint() {
        let mod = createRef<ReactSketchCanvasRef>()
        let [color,setColor] = useState<string>('black')
        let [bgColor,setBGColor] = useState<string>('white')

        // Drawer State
        let [leftDrawer,setLeftDrawer] = useState<boolean>(false)
        let [rightDrawer,setRightDrawer] = useState<boolean>(false)

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
    sx={CanvasMini}
    >
        <Stack
        direction='row'
        width='100vw'
        justifyContent='space-around'
        mb={2}
        >
            <Button variant="contained" sx={PaintBtnsDrawerMini} onClick={()=>setLeftDrawer(true)}>Colors</Button>
            <Button variant="contained" sx={PaintBtnsDrawerMini} onClick={()=>setRightDrawer(true)}>Tools</Button>
        </Stack>
        <Stack width='98%' height='75%' justifyContent='center' direction='row'>
            {/* Left Colors For Drawing */}
            <Drawer
            anchor="left"
            open={leftDrawer}
            onClose={()=>setLeftDrawer(false)}
            >
            <Box 
            width='200px'
            height='100%'
            textAlign='center'
            bgcolor='#3a3a3a'
            color='#00ffad'
            >
                <br />
                <Typography variant="h5">Choose Colors</Typography>
             {/* Pan Color */}
             <Box mt={5}>
                <center>
                <Typography sx={{width:'80%'}}>Choose Pan Color</Typography>
                <br />
                <input type='color' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setColor(e.target.value)}}/>
                </center>
                </Box>
                {/* Background Color */}
                <Box mt={5}>
                <center>
                <Typography sx={{width:'80%'}}>Choose Background Color</Typography>
                <br />
                <input type='color' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setBGColor(e.target.value)}}/>
                </center>
                </Box>
            </Box>
            </Drawer>
            {/* Right Colors For Drawing */}
            <Drawer
            anchor="right"
            open={rightDrawer}
            onClose={()=>setRightDrawer(false)}
            >
            <Box 
            width='200px'
            height='100%'
            textAlign='center'
            bgcolor='#3a3a3a'
            color='#00ffad'
            >
                <br />
                <Typography variant="h5">Choose Tools</Typography>
             {/* Tools Box */}
             <Stack
             mt={2}
            height='80%'
            direction='column'
            justifyContent='space-evenly'
            alignItems='center'>
        <Button variant='contained' sx={PaintFunctions} color='success' onClick={()=>clearOff()}>Pan</Button>
        <br />
        <Button variant='contained' sx={PaintFunctions} color='error' onClick={()=>clearAll()}>Erase</Button>
        <br />
        <Button variant='contained' sx={PaintFunctions} color='primary' onClick={()=>Undo()}>Undo</Button>
        <br />
        <Button variant='contained' sx={PaintFunctions} color='primary' onClick={()=>Redo()}>Redo</Button>
        <br />
        <Button variant='contained' sx={PaintFunctions} color='error' onClick={()=>clearOn()}>Clear</Button>
    </Stack>
            </Box>
            </Drawer>

            {/* Board */}
    <ReactSketchCanvas
    ref={mod}
      style={{border:'2px solid black',borderRadius:'2.4mm',boxShadow:'0px 0px 7px #00ffad'}}
      width="95%"
      height="100%"
      strokeColor={color}
      canvasColor={bgColor}
      strokeWidth={4}
      eraserWidth={20}
    />
    </Stack>
    </Box>
  )
}

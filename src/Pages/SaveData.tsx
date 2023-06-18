import { Box,Stack,Button, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { SaveDataBtns, SaveDataInput } from "../Styles/Mui/Mui";
import Typography from "@mui/material/Typography";
import {useState,useEffect} from 'react'
import Nav from "../Components/Nav";
import MiniNav from "../Components/MiniNav";
import AlertForSaveData from "../Components/AlertForSaveData";
import { useDispatch } from 'react-redux';
import { AlertsAct, AlertsActEmpty } from "../Redux/Action/Alert/AlertsAct";
import AlertForSaveDataEmpty from "../Components/AlertForSaveDataEmpty";

export default function SaveData() {
  // Redux
  const dispatch = useDispatch()
    // useState
  const [arr,setArr] = useState<{}[]>([])
  const [saveText,setSaveText] = useState<string>('')
  const [obj,setObj] = useState<{}>({})
  const [btn,setBtn] = useState<boolean>(true)

  // UseEffect
useEffect(()=>{
  setObj({title:saveText})
  // Look After Btn "Add"
  saveText === ''?setBtn(true):setBtn(false)
},[saveText])

// Look After Data Array To Delete Items From LocalStorage
useEffect(()=>{
  if(arr.length === 0){
    return 
  }else{
    let toStringData = JSON.stringify(arr)
    localStorage.setItem('saveData',toStringData)
  }
},[arr])


  // Add
  const Add = () => {
    if(saveText === ''){
      return
    }
    else if(arr.some((res:any)=>res.title == saveText)){
      dispatch(AlertsAct())
     return
    }
    else{
      // Set Data In Array
      setArr([obj,...arr])
      // Clear SaveText Input Value
      setSaveText('')
      // Focus On TextField
    }
  }

  // Delete Current Item
  const Delete = (currentItem: any) =>{
    localStorage.removeItem('saveData')
    setArr(arr.filter((res:any)=>{return res.title != currentItem}))
  }

  // Show Saved Data From LocalStorage
  const ShowSavedValues = () => {
    const getData:string|null = localStorage.getItem('saveData')
    if(getData==null){
      dispatch(AlertsActEmpty())
      return
    }else{
      let obj2 = JSON.parse(getData!)
      setArr(obj2)
    }
  }
const Erase = () => {
  localStorage.clear()
  setArr([])
}

  return (
    <>
    <Nav />
    <br />
    <br />
    <br />
    <Box
    width='100vw'
    height='100vh'
    display='flex'
    justifyContent='center'
    alignItems={{xs:'flex-start',sm:'center'}}
    sx={{backdropFilter:'blur(10px)'}}
    >
      <Box
      width={{xs:'100%',sm:'85%',lg:'80%',xl:'70%'}}
      height='80vh'
      border='4px solid #00ffad'
      borderRadius='2.4mm'
      >
        {/* Remove, Input and Add */}
        <Stack
        direction='column'
        width='100%'
        height='20%'
        justifyContent='space-around'
        alignItems='center'
        p={1}
        >
          <TextField
          autoComplete='off'
          value={saveText}
          placeholder="type..."
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSaveText(e.target.value)}
          onKeyDown={(e)=>{if(e.key === 'Enter'){Add()}}}
          variant="standard"
          sx={SaveDataInput}
          inputProps={{
            style:{
fontSize:'large',
color:'white'
            },
            endadornment:(
              <InputAdornment position="end">X</InputAdornment>
            )
          }}
          />
          <Stack direction='row' justifyContent='space-around' width='100%' p={1}>
          <Button variant="contained" sx={SaveDataBtns} color='error' onClick={()=>Erase()}>Clear All</Button>
          <Button variant="contained" sx={SaveDataBtns} onClick={()=>Add()} disabled={btn}>Add</Button>
          <Button variant="contained" sx={SaveDataBtns} onClick={()=>ShowSavedValues()}>Show All</Button>
          </Stack>
        </Stack>
        {/* Saved Data */}
        <Stack
        border='2px solid #00ffad'
        width='100%'
        height='80%'
        sx={{overflowY:'auto'}}
        p={2}
        >
          {arr.map((data:any)=>(
            <Stack direction='row' alignItems='center' m={2} p={1} justifyContent='space-around' key={data.title} boxShadow='0px 0px 10px #00ffad'>
  <Typography sx={{width:'70%',fontSize:'x-large',bgcolor:'transparent'}}>{data.title} </Typography>
  <Typography sx={{fontSize:'x-large'}}>|</Typography>
  <Button variant='contained' color='error' sx={{width:'min-content'}} onClick={()=>Delete(data.title)}>Delete</Button>
</Stack>
          ))}
        </Stack>
      </Box>
    </Box>
    <MiniNav />
    <AlertForSaveData />
    <AlertForSaveDataEmpty />
    </>
  )
}


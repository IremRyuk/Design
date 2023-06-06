import { Box, Stack, TextField, Typography } from "@mui/material";
import {useState,useEffect} from 'react'
import { ConvertInput, ConvertResult, ConvertTitle } from "../Styles/Mui/Mui";
import '../Styles/Convert/convert.css'
import $ from 'jquery'
interface Obj<T> {
  lbs:T,
  inches:T,
  ft:T
}
export default function Converting() {
  const [convert,setConvert] = useState<Obj<any>>({
    lbs:'0',
    ft:'0',
    inches:'0'
  })
  const [result,setResult] = useState<{kg:number,mt:number,cm:number}>({
    kg:0,
    mt:0,
    cm:0
  })
  useEffect(()=>{
    convert.lbs>=9999?$('.maxLbs').css({border:"4px solid red",borderRadius:'4px'}):$('.maxLbs').css({border:"4px solid transparent"})
    convert.ft>=9999?$('.maxFt').css({border:"4px solid red",borderRadius:'4px'}):$('.maxFt').css({border:"4px solid transparent"})
    convert.inches>=9999?$('.maxInches').css({border:"4px solid red",borderRadius:'4px'}):$('.maxInches').css({border:"4px solid transparent"})
  })
  const handleChangePound = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(parseInt(convert.lbs)>=9999){
     return
    }
    else{
      setConvert({...convert,lbs:e.target.value})
      setResult({...result,kg:parseInt(e.target.value) * 0.45359237})
    }
  }
  const handleChangeInches = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(parseInt(convert.inches)>=9999){
      return
     }
     else{
    setConvert({...convert,inches:e.target.value})
    setResult({...result,cm:parseInt(e.target.value) * 0.393701})
     }
      }
  const handleChangeFoot = (e:React.ChangeEvent<HTMLInputElement>) => {
        setConvert({...convert,ft:e.target.value})
        setResult({...result,mt:parseInt(e.target.value) * 0.3048})
          }
  return (
    <>
    <Box
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    className='convert'
    >
      <center><Typography sx={{fontSize:{xs:'x-large',md:'xx-large'},marginTop:"100px",fontWeight:'bold'}}>Units Of Measure - American into Europian</Typography></center>
      <Stack 
      direction='column' 
      spacing={{xs:1,md:5}} 
      p={{xs:1,md:5}}
      sx={{
        width:{xs:'90%',sm:'70%',md:'50%',lg:'40%'},
        border:'2px solid #00ffad',
        borderRadius:'2.4mm',
        boxShadow:'0px 0px 15px 2px #00ffad',
        backdropFilter:'blur(100px)',
      }}
      mt={5}
      >
        <Stack direction='column' textAlign='center'>
          {/* Lbs */}
          <Typography sx={ConvertTitle}>Lbs Into Kilograms</Typography>
<Stack direction='row'alignItems='center' justifyContent='space-evenly'mt={1}>
<TextField
value={convert.lbs}
onClick={()=>setConvert({...convert,lbs:''})}
onChange={handleChangePound}
name='pound'
type='number'
variant='outlined'
FormHelperTextProps={{
color:'error'
}}
inputProps={{
  style:{
    color:'#00ffad',
    fontSize:'x-large',
    textAlign: 'center' 
  }
}}
sx={ConvertInput}
className='maxLbs'
/>
<Typography variant="h4">Is</Typography>
<Typography sx={ConvertResult}>{result.kg.toFixed(2)}</Typography>
</Stack>
</Stack>

{/* Inches */}
<Stack direction='column' textAlign='center' mt={1}>
          <Typography sx={ConvertTitle}>Inches Into Centimetres</Typography>
<Stack direction='row'alignItems='center' justifyContent='space-evenly' mt={1}>
<TextField
value={convert.inches}
onClick={()=>setConvert({...convert,inches:''})}
onChange={handleChangeInches}
name='pound'
type='number'
variant='outlined'
inputProps={{
  style:{
    textAlign:'center',
    color:'#00ffad',
    fontSize:'x-large'
  }
}}
sx={ConvertInput}
className='maxInches'
/>
<Typography variant="h4">Is</Typography>
<Typography sx={ConvertResult}>{result.cm.toFixed(2)}</Typography>
</Stack>
</Stack>

{/* Foot */}
<Stack direction='column' textAlign='center' mt={1}>
          <Typography sx={ConvertTitle}>Foot Into Meters</Typography>
<Stack direction='row'alignItems='center' justifyContent='space-evenly' mt={1}>
<TextField
value={convert.ft}
onClick={()=>setConvert({...convert,ft:''})}
onChange={handleChangeFoot}
name='pound'
type='number'
variant='outlined'
inputProps={{
  style:{
    color:'#00ffad',
    fontSize:'x-large',
    textAlign: 'center' 
  }
}}
sx={ConvertInput}
className='maxFt'
/>
<Typography variant="h4">Is</Typography>
<Typography sx={ConvertResult}>{result.mt.toFixed(2)}</Typography>
</Stack>
</Stack>
      </Stack>
    </Box>
    </>
  )
}
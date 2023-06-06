// Home
export const HomeModal = {
    padding:{sm:'32px',md:'80px'},
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70vw',
    height: 'fit-content',
    bgcolor: 'black',
    borderRadius: '2.4mm',
    textAlign: 'center',
    color: '#00ffad',
    '&:focus-visible': {
        outline: 'none'
    }
}
export const HomeModalFonts = {
    fontSize:{
        sm:'x-large',
        md:'xx-large'
    }
}
export const HomeTime = {
    position:'absolute',
    bottom:'20%',
    left:'5%',
    fontSize:{
        sm:'x-large',
        md:'xx-large'
    }
}

// Convert
export const ConvertInput = {
    width:'40%',
    // fontSize:'xx-large',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          border: '2px solid #00ffad',
        },
        '&:hover fieldset': {
          borderColor: '#00ffad',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#4dffc6',
        },
      },
}
export const ConvertResult = {
  fontSize:'x-large',
  width:'40%',
  border:'2px solid #00ffad',
  borderRadius:'4px',
  padding:'16.5px 14px',
  textAlign:'center',
}
export const ConvertTitle = {
  fontSize:{
    xs:'x-large',
    md:'xx-large'
}
}
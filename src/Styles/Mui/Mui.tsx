// Home
export const CatergoriesBtns = {
    fontSize: {
        xs: 'large',
        sm: 'x-large'
    },
    width: {
        xs: '80vw',
        sm: '65vw',
        md: '40vw',
        lg: '32vw'
    },
    padding: '20px 40px',
    bgcolor: 'transparent',
    boxShadow: '0px 0px 10px #00ffad',
    fontWeight: 'bold',
    transition: '0.3s',
    backdropFilter: 'blur(10px)',
    '&:hover': {
        bgcolor: '#00ffad',
        color: 'black',
        scale: '1.1',
        margin: '20px 0px'
    }
}

export const BottomStyle ={
    position: 'absolute',
    bottom:'5%',
    width:'100vw',
    flexDirection:{xs:'column',md:'row'},
    justifyContent:{xs:'center',md:'space-around'},
    gap:'10px',
    alignItems:'center'
}
export const HomeTime_Links = {
    width: 'fit-content',
    fontSize: {
        xs: 'x-large',
        sm: 'xx-large'
    },
}
export const HomeLinks = {
    width: 'fit-content',
    fontSize: {
        xs: 'x-large',
        sm: 'xx-large'
    }
}
export const HomeLinksStyle = {
    scale: '2',
    color: "#00ffd3",
    '&:hover': {
        scale: '2.3'
    },
    transition: '0.2s'
}
// Convert
export const ConvertInput = {
    width: '40%',
    // fontSize:'xx-large',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #00ffad'
        },
        '&:hover fieldset': {
            borderColor: '#00ffad'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#4dffc6'
        }
    }
}
export const ConvertResult = {
    fontSize: 'x-large',
    width: '40%',
    border: '2px solid #00ffad',
    borderRadius: '4px',
    padding: '16.5px 14px',
    textAlign: 'center'
}
export const ConvertTitle = {
    fontSize: {
        xs: 'x-large',
        md: 'xx-large'
    }
}
// Canvas
export const CanvasMainBox = {
    width: '100vw',
    height: '100vh',
    display: {
        xs: 'none',
        md: 'flex'
    },
    justifyContent: 'center',
    alignItems: 'center'
}
export const PaintBtns = {
    minWidth: {
        sm: '100px',
        md: '150px',
        lg: '200px'
    },
    boxShadow: '0px 0px 10px #00ffad'
}
export const PaintFunctions = {
    width: '70%',
    padding: '10px 20px'
}
// Canvas Paint 600<
export const CanvasMini = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
export const PaintFunctionsMini = {
    marginTop: '10px',
    width: '80%',
    padding: '10px 20px'
}
export const PaintBtnsDrawerMini = {
    minWidth: '100px',
    background: '#3a3a3a',
    color: '#00ffad',
    '&:hover': {
        background: '#3a3a3a'
    },
    boxShadow: '0px 0px 5px #00ffad',
    borderRadius: '2mm'
}
// SaveData
export const SaveDataBtns = {
    width: 'fit-content',
    fontSize: {
        xs: 'small',
        sm: 'large'
    }
}

export const SaveDataInput = {
    width: '70%',
    border: '2px solid #00ffad',
    padding: '5px 10px',
    '& .MuiInput-underline:before': {
        borderBottomColor: 'transparent'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'transparent'
    },
    '& .MuiInput-underline:hover': {
        borderBottomColor: 'transparent'
    }
}
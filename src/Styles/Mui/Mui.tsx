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

export const HomeModal = {
    padding: {
        sm: '32px',
        md: '80px'
    },
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
    fontSize: {
        sm: 'x-large',
        md: 'xx-large'
    }
}
export const HomeTime = {
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    fontSize: {
        sm: 'x-large',
        md: 'xx-large'
    }
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
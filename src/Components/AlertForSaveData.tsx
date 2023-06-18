import React from 'react'
import {Stack,Snackbar} from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch,useSelector } from 'react-redux';
import { AlertsAct } from '../Redux/Action/Alert/AlertsAct';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function AlertForSaveData() {
    const dispatch = useDispatch()
    const alertState = useSelector((state:any)=>state.changeValue)
    console.log(alertState)
  
    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      dispatch(AlertsAct())
    };
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={alertState} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{horizontal:'center',vertical:'bottom'}}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Title Already Exists
        </Alert>
      </Snackbar>
    </Stack>
  )
}

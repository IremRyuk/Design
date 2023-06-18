import React from 'react'
import {Stack,Snackbar} from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch,useSelector } from 'react-redux';
import { AlertsActEmpty } from '../Redux/Action/Alert/AlertsAct';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function AlertForSaveDataEmpty() {
    const dispatch = useDispatch()
    const alertStateEmpty = useSelector((state:any)=>state.changeValueEmpty)
    console.log(alertStateEmpty)
  
    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      dispatch(AlertsActEmpty())
    };
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={alertStateEmpty} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{horizontal:'center',vertical:'bottom'}}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Empty Data
        </Alert>
      </Snackbar>
    </Stack>
  )
}

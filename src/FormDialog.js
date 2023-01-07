import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='fixed bottom-3 right-3'>
        <Fab size="large" color="primary" aria-label="add" >
        <AddIcon onClick={handleClickOpen} />
        </Fab>
      <Dialog open={open} onClose={handleClose} style={{minWidth:"90vw"}}>
         <Card sx={{maxWidth: 300, width: "90vw", height: 40}}>
          <TextField
          fullWidth
          name="subjectName"
          variant='standard'
          >

          </TextField>
         </Card>
      </Dialog>
    </div>
  );
}

{/* <DialogTitle>Subject</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions> */}
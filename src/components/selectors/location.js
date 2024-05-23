import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import * as React from 'react';
import Grid from '@mui/joy/Grid';
import { DialogContent } from '@mui/joy';
import {Link} from '@mui/joy';


const cities=['Delhi-NCR', 'Chennai', 'Thrissur', 'Bengaluru', 'Hyderabad', 'Mumbai']

export default function LocationSelector(){
    const [open, setOpen] = React.useState(false);


    return(  <React.Fragment>
        <FormControl  sx={{ m: 1 , width:100}} variant="none">
        
        <InputLabel variant="standard" htmlFor="uncontrolled-native" >
           {cities[0]}
        </InputLabel>
        <NativeSelect onClick={() => setOpen(true)}>
        
        <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={()=> setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: 1000,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Popular Cities
          </Typography>
          <DialogContent>
          <Grid container spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ flexGrow: 1 }}
          >
          {cities.map(i=>{
            return(
                <Grid xs={3}>
            <Link level='title-lg' underline='none' color='black'>{i}</Link>
           </Grid>
            )
            
          })}
           
          </Grid>
          </DialogContent>
        </Sheet>
      </Modal>
      </NativeSelect>
      </FormControl>
      </React.Fragment>
    )
}
import React, {useState} from 'react';
import {DataGrid, GridColDef, GridDataContainer, GridValueGetterParams} from '@material-ui/data-grid';
import {useGetData} from '../../custom-hooks';
import {server_calls} from '../../api';
import { Button,Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core'; 
  import { CarForm } from '../../components/CarForm';


const columns: GridColDef[] = [
    {field: 'car_make', headerName: 'Car Make', width: 130},
    {field: 'car_model', headerName: 'Model', width: 130},
    {field: 'car_year', headerName: 'Year', width: 130},
    {field: 'car_color', headerName: 'Color', width: 130},
    {field: 'id', headerName: 'ID #', width: 170}
];
/*
--Placeholder values to make sure table generated before linking to API/custom-hooks
const rows = [
    {id: 1, car_make: 'Toyota', car_model: 'Carolla', car_year: 1996, car_color: 'Beige'}
]
*/
interface gridData{
    data:{
      id?:string;
    }
  }




export const DataTable = () => {

    let { carData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<gridData>({data:{}})

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
    setTimeout(function(){window.location.reload()}, 1000);
  }

  console.log(gridData.data.id)

    return (
        <div style={{ height: 400, width: '100%' }}>
        <h2>Cars In Inventory</h2>
        <DataGrid rows={carData} columns={columns} pageSize={10} checkboxSelection onRowSelected = { setData } />
    {/* Updated Code Below This point */ }
        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Car</DialogTitle>
        <DialogContent>
            <DialogContentText>Update Car</DialogContentText>
            <CarForm id={gridData.data.id!}/>
        </DialogContent>
        <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
        </DialogActions>
        </Dialog>
        </div>
    );
}
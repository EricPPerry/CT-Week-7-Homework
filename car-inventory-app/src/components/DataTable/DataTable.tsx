import React from 'react';
import {DataGrid, GridColDef, GridValueGetterParams} from '@material-ui/data-grid';
import {useGetData} from '../../custom-hooks'


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

export const DataTable = () => {

    let {carData, getData} = useGetData();
    console.log(carData) //to make sure car data is returned, int he event it does not show up correctly on webapage
    return (
        <div style={{height: 400, width: '100%'}}>
            <h2>Cars in Inventory</h2>
            <DataGrid rows={carData} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}
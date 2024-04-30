import { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from '../custom-hooks/FetchData'


const columns: GridColDef[] = [
    {field: 'id', headerName: "ID", width: 90},
    {field: 'brand', headerName: "Brand", headerClassName: 'bg-slate-300 font-bold', width: 210},
    {field: 'name', headerName: "Name", headerClassName: 'bg-slate-300 font-bold', width: 260},
    {field: 'region', headerName: "Region", headerClassName: 'bg-slate-300 font-bold', width: 120},
    {field: 'type', headerName: "Type", headerClassName: 'bg-slate-300 font-bold', width: 160},
    {field: 'abv', headerName: "ABV", headerClassName: 'bg-slate-300 font-bold', width: 60, type: 'number'},
    {field: 'price', headerName: "$ Price", headerClassName: 'bg-slate-300 font-bold', width: 120, type: 'number'}

]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { tableData, getData } = useGetData();
    const[ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 1000)
    }

  return (
    <>
        <Modal
        id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Add Entry
                </button>
            </div>
            <button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</button>
            <button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</button>
        </div>   
        <div className={ open ? "hidden" : "container mx-3 p-3"}
        style={{ height: 700, width: '100%', maxWidth: 1000}}
        >
            <h2 className="p-3 bg-amber-700 text-white my-1 rounded">Whiskey Collection</h2>
            <DataGrid columnVisibilityModel={{id: false}} rows={tableData} columns={columns} className={"bg-slate-100"}
            checkboxSelection={true}
            onRowSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable
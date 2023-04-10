import * as React from 'react';
// import { useState } from 'react';
import './instanceList.css';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { ClassNames } from '@emotion/react';
import { Box } from '@mui/material';
import { red } from '@mui/material/colors';


 
export default function InstanceList(){

const [post, setPost] = React.useState([]);

console.log(post);
const getInstance=()=>{
    axios.get("http://10.10.10.50/instances").then((response) => {
      setPost(response.data);
    })
    .catch((error)=>{
        console.log(error)
    })
}


    const columns = [
        { field: 'id', headerName: 'ID', width: 58,headerClassName: 'super-app-theme--header'},
        { field: 'ami_id', headerName: 'AMI ID', width: 250,headerClassName: 'super-app-theme--header'},
        { field: 'key_pair', headerName: 'Key Pair', width: 120,headerClassName: 'super-app-theme--header'},
        { field: 'name', headerName: 'Name', width: 200,headerClassName: 'super-app-theme--header'},
        { field: 'creation_date', headerName: 'Creation Date', width: 300,headerClassName: 'super-app-theme--header' },
        { field: 'region', headerName: 'Region', width: 150,headerClassName: 'super-app-theme--header' },
        { field: 'instance_type', headerName: 'Instance Type', width: 200,headerClassName: 'super-app-theme--header' },
    
    ]
    React.useEffect(() => {
        getInstance();
    }, []);
    return(
<div className='parent'>
<h2 className='tittle'>Inventory</h2>
<Box sx={{
    height:600,
    // backgroundColor:'red',
}}>
          <DataGrid
          className='gridBox'
        rows={post}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        sx={{
            '& .super-app-theme--header':{ backgroundColor:'#c9c7c7',
            color:'#000000',
            fontSize:'larger',
        },
        }}
        />
        </Box>
        </div>
    )
}
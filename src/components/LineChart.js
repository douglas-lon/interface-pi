import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Plot from 'react-plotly.js';

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
  };
  
  var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
  };

const situacao = ['Ativo','Transferido','Abandonou',]

let ano2017 = {
    x: [...situacao],
    y: [1194, 142, 55],
    name: '2017'
}

let ano2018 = {
    x: [...situacao],
    y: [1000, 190, 70],
    name:'2018'
}

const data = [
    ano2017,
    ano2018
]


const LineChart = () => {
    const style={height: '100%', width: '100%'}

    return (
        <Box sx={{
            overflow:'hidden',
            borderRadius:2,
            bgcolor:'blue',
            minWidth:'40vw',
            maxWidth:'50vw',
            minHeight: '53vh',
            maxHeight: '57vh',
            boxShadow: '10'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'white',
                height:'100%',
                width:'100%',
                alignItems:'center'
                }}>

                <Plot
                data={data}
                style={style}
                layout={{title:'Media por ano'}}
                useResizeHandler={true}
                />

                

            </Box>
        </Box>
    )
}

export default LineChart
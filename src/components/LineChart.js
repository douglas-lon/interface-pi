import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Plot from 'react-plotly.js';


const situacao = [0,1,2,3,4,5,6,7,8,9,10]

let ano2019 = {
    x: [...situacao],
    y: [88, 12, 91, 94, 94, 81, 128, 89, 89, 126, 107],
    name: '2019'
}

let ano2020 = {
    x: [...situacao],
    y: [107, 13, 94, 88, 76, 86, 104, 115, 74, 136, 107],
    name:'2020'
}

let ano2021 = {
    x: [...situacao],
    y: [79, 10, 89, 103, 93, 87, 123, 102, 72, 127, 115],
    name:'2021'
}

const data = [
    ano2019,
    ano2020,
    ano2021
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
                layout={{title:'Nivel das notas', xaxis:{'type': 'category'}}}
                useResizeHandler={true}
                />

                

            </Box>
        </Box>
    )
}

export default LineChart
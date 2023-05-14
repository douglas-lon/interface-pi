import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Plot from 'react-plotly.js';

let rawData=[{
    values: [67, 23, 10],
    labels: ['Aprovados', 'Reprovados', 'Pendentes'],
    type: 'pie'
  }]

let dataByYear = {
    2017: [{
        values: [67, 23, 10],
        labels: ['Aprovados', 'Reprovados', 'Pendentes'],
        type: 'pie'
      }],
    2018: [{
        values: [70, 20, 10],
        labels: ['Aprovados', 'Reprovados', 'Pendentes'],
        type: 'pie'
      }],
    2019: [{
        values: [73, 20, 7],
        labels: ['Aprovados', 'Reprovados', 'Pendentes'],
        type: 'pie'
      }]
} 

const PieChart = () => {
    const [data, setData] = useState([...dataByYear['2017']])
    const [layout, setLayout] = useState({title: `Rendimento por Ano: ${2017}`})
    const style={height: '100%', width: '100%'}

    const items = []

    const addItems = () => {
        for (const [key, value] of Object.entries(dataByYear)) {
            items.push(
                <MenuItem value={key}>{key}</MenuItem>
            )

          }

    } 

    const handleSelectChange = (value) => {
        setData([...dataByYear[value]])
        setLayout({title: `Rendimento por Ano: ${value}`})
    }

    addItems()

    return (
        <Box sx={{
            overflow:'hidden',
            borderRadius:2,
            bgcolor:'white',
            minWidth:'40vw',
            maxWidth:'50vw',
            minHeight: '53vh',
            maxHeight: '57vh',
            boxShadow: '10'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                height:'100%',
                width:'100%',
                alignItems:'center',
                paddingTop:'15px'
                }}>

                <FormControl sx={{m: 1, width:'90%',}}>
                    <InputLabel id="demo-simple-select-label">Ano</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={data[0].values}
                        label="Ano"
                        onChange={(e) => { handleSelectChange(e.target.value)}}
                    >
                        {items}
                    </Select>
                </FormControl>

                <Plot
                data={data}
                style={style}
                layout={layout}
                useResizeHandler={true}
                />

                

            </Box>
        </Box>
    )
}

export default PieChart
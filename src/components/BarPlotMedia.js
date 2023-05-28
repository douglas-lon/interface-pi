import { Box } from '@mui/material'
import React from 'react'
import { FilterBarPlot } from './BarFilter'

let xOut = [2019,2020,2021]
let yOut = [77.5,70.6,81.7]

let dataY = [
  {type: 'bar', x: xOut, y: yOut,  text: yOut.map(String),
  textposition: 'auto', marker: {color: 'lightblue'}},
  
]

let layout= {title: 'Frequência por Ano', xaxis:{'type': 'category'}} 
let style={width: '100%', height: '100%'}

export const BarPlotMedia = () => (
    <Box sx={{
      overflow:'hidden',
      borderRadius:2,
      bgcolor:'blue',
      width: '90%',
      minHeight: '60vh',
      maxHeight: '80vh',
      boxShadow: '10'
    }} >
      
      <FilterBarPlot data={dataY}
        x={xOut}
        layout={layout}
        useResizeHandler={true}
        style={style}
      />

    </Box>
)
import { Box } from '@mui/material'
import React from 'react'
import { FilterBarPlot } from './BarFilter'

let xOut = ['2019','2020','2021']
let yOut = [5.65,5.51,5.62]

let dataY = [
  {type: 'bar', x: xOut, y: yOut,  text: yOut.map(String),
  textposition: 'auto'}
]

let layout= {title: 'Media por ano', xaxis:{'type': 'category'}} 
let style={width: '100%', height: '100%'}

export const BarPlot = () => (
    <Box sx={{
      overflow:'hidden',
      borderRadius:2,
      bgcolor:'blue',
      minWidth:'50vw',
      maxWidth:'40vw',
      minHeight: '50vh',
      maxHeight: '50vh',
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
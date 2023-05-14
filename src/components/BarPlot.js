import { Box } from '@mui/material'
import React from 'react'
import { FilterBarPlot } from './BarFilter'

let xOut = [2018,2019,2020,2021,2022]
let yOut = [8,3,2,4,4,1,9,2,7,6,2]

let dataY = [
  {type: 'bar', x: xOut, y: yOut}
]

let layout= {title: 'Alguma coisa por ano'} 
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
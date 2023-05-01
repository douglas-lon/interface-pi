import React from 'react'
import Plot from 'react-plotly.js'

let xOut = [1,2,3,4,5,6,7,8,9,10,11]
let yOut = [8,3,2,4,4,1,9,2,7,6,2]
export const FancyPlot = () => (
    <Plot
    data={[
      {
        x: xOut,
        y: yOut,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: 'red'},
      },
      {type: 'bar', x: xOut, y: yOut},
    ]}
    layout={ {width: 800, height: 600, title: 'A Fancy Plot'} }
  />
)
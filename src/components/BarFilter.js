import { Box, Button, Checkbox, FormControlLabel, FormGroup, List } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js'

export const FilterBarPlot = (props) => {
    const data = Object.assign([], props.data)
    let filters = [...props.x]

    const [checkBool, setCheckBool] = useState(new Array(filters.length).fill(true))
    const [value, setValue] = useState([...filters])
    const [variableData, setVariableData] = useState([...data])

    let formCheckBox = []

    const handleStateChange = () => {
            let newValues = [...value]
            
            for (let i=0; i < checkBool.length; i++) {
                if (!checkBool[i]) {
                    newValues.splice(i, 1)
                } else if (checkBool[i] && filters[i] !== value[i]) {
                    newValues.splice(i, 0, filters[i])
                    
                }
            }

            setValue(newValues)
        
    }
    
    useEffect(() => {
        let newData =  [...data]
        newData[0].x = [...value]
        setVariableData(newData)
    }, [value])

    useEffect(() => {
        
        handleStateChange()
    }, [checkBool])

    
    const onMyClick = (pValue, index) => {
        setCheckBool((prev) => prev.map((v, i) => i === index ? !v : v))
    }
    
    const addCheckbox = () => {
        for (let index = 0; index < filters.length; index++) {

            formCheckBox.push(
            <Box width={'max-content'}>
                <FormGroup  aria-label="position">
                    <FormControlLabel
                    display={'inline-block'} 
                    value="end"
                    control={<Checkbox  checked={checkBool[index]} onClick={() => {onMyClick(filters[index], index)}} />}
                    label={filters[index]}
                    labelPlacement="end"
                    />
                </FormGroup>
            </Box>)
        }

    }


    return (
        <Box display={'flex'} bgcolor={'gray'} height={'100%'} width={'100%'}>
            <Plot data={variableData}
            layout={props.layout}
            useResizeHandler={props.useResizeHandler}
            style={props.style}
            
            />
            {addCheckbox()}
            <Box sx={{
                m:0,
                p:0
            }} display={'grid'} alignContent={'center'}  bgcolor={'white'}>
                <List style={{maxHeight: '100%', overflow: 'auto'}}>
                    {formCheckBox}
                </List>
            </Box>
        </Box>
    )
}
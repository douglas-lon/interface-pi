import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


let dummyData = {
    Masculino: 79,
    Feminino: 81,
}

export default function CardWithFilter() {
    const [cardValue, setCardValue] = React.useState('Escolha')

    const items = []

    const addItems = () => {
        for (const [key, value] of Object.entries(dummyData)) {
            items.push(
                <MenuItem value={value}>{key}</MenuItem>
            )

          }

    }

    return (
      <Card  sx={{ boxShadow: '10', minWidth: 300, width:590,maxWidth: 600, maxHeight:500, position:'relative', paddingTop:'15px'}}>
        <CardActions sx={{justifyContent:'center'}}>
            <FormControl  sx={{ m: 1, width:'100%'}}>
                <InputLabel id="demo-simple-select-helper-label">Frequência por Género:</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Frequência por Género:"
                defaultValue={dummyData}
                onChange={(e) => { setCardValue(`${e.target.value}%`)}}
                >   
                    {addItems()}
                    {items}
                </Select>
            </FormControl>
        </CardActions>
        <CardContent width={'100%'}>
            <Typography fontWeight={'bold'} fontSize={'8.3vw'} lineHeight={''} textAlign={'center'} variant="h2" component="h2">
                {cardValue}
            </Typography>
        </CardContent>
        
      </Card>
    )
  }
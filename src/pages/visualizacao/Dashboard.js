import {Container} from '@mui/material/'
import { BarPlot } from '../../components/BarPlot'

const Dashboard = () => {

    return (

        <Container sx={{
            mt:2,
            p:4,
            bgcolor: 'darkgray',
            borderRadius: 3,
            display:'flex',
            minHeight: '100vh',
            minWidth: '95vw'
        }}>
            <BarPlot/>
        </Container>
    )
}

export default Dashboard
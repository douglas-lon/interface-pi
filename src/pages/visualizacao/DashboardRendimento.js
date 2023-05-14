import {Box, Container} from '@mui/material/'
import PieChart from '../../components/PieChart'
import {BarPlot} from '../../components/BarPlot'
import CardWithFilter from '../../components/CardWithFilter'
import LineChart from '../../components/LineChart'

const DashboardRendimento = () => {

    return (

        <Container sx={{
            mt:2,
            p:4,
            borderRadius: 3,
            display:'flex',
            flexDirection:'column',
            gap: 5,
            minHeight: '100vh',
            minWidth: '95vw',
        }}>
            <Box display={'flex'} justifyContent={'center'} gap={10}>
                <BarPlot/>
                <CardWithFilter/>
            </Box>

            <Box display={'flex'} gap={10} justifyContent={'center'}>
                <PieChart/>
                <LineChart/>
            </Box>
            
        </Container>
    )
}

export default DashboardRendimento
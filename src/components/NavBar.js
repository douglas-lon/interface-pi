import {AppBar, Button, Stack, Box} from '@mui/material/'

export const NavBar = () => {
    return (
        <Box display={'flex'} justifyContent={'center'}>
            <AppBar  sx={{borderRadius: 3, maxWidth:'90%', backgroundColor:'rgb(111, 111, 111)'}} position='static'>
                <Box display={'flex'} sx={{
                    justifyContent:'center',  
                    direction:'row',
                    gap:2,
                    minHeight:'4em',
                }} >
                    <Button sx={{color:'white', 
                    display:'block', 
                    fontSize:'1em',
                    '&:hover': {
                        backgroundColor: 'rgb(80, 80, 80)',
                      }}}> Home </Button>

                    <Button sx={{color:'white', 
                    display:'block', 
                    fontSize:'1em',
                    '&:hover': {
                        backgroundColor: 'rgb(80, 80, 80)',
                      }}}> Dashboard </Button>

                    <Button sx={{color:'white', 
                    display:'block', 
                    fontSize:'1em',
                    '&:hover': {
                        backgroundColor: 'rgb(80, 80, 80)',
                      }}}> Classificar </Button>
                </Box>
            </AppBar>
        </Box>
    )
}
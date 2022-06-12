import { Drawer, Box, Typography, List } from '@mui/material'
import React from 'react'

export const Sidebar = () => {
  return (
    <Drawer
        anchor='left'
        open={ true }
        onClose={ () => console.log('cerrando') }
    >
        <Box sx={{ padding: '5px 10px' }}>
            <Typography variant='h4'>Menú</Typography>
        </Box>

        <List>
            
        </List>
    </Drawer>
  )
}

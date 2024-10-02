import { CardContentInner } from 'react-admin';
import DonationPieChart from './pie_chart';
import MyBarChart from './Barras';
import {Card, CardContent, Typography, Grid} from '@mui/material'
import { motion } from 'framer-motion'
 // Importa tu componente

const MyDashboard = () => (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <motion.div 
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}>
                <Card sx={{borderRadius: '16px'}}>
                    <CardContent>
                        <Typography variant='h6'>Origen de donaciones</Typography>
                        <DonationPieChart/>
                    </CardContent>
                </Card>
            </motion.div>
        </Grid>
        <Grid item xs={12} sm={6}>
            <motion.div
            initial={{opacity:0, y:-20}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.5, delay: 0.2}}>
                <Card sx={{borderRadius:'16px'}}>
                    <CardContent>
                        <Typography variant='h6'>Cantidad donada por usuario</Typography>
                        <MyBarChart />
                    </CardContent>
                </Card>
            </motion.div>
        </Grid>
    </Grid>
    
  
);

export default MyDashboard;

import { CardContentInner } from 'react-admin';
import DonationPieChart from '../Gráficas/pie_chart';
import MyBarChart from '../Gráficas/Barras';
import {Card, CardContent, Typography, Grid} from '@mui/material'
import { motion } from 'framer-motion'

const MyDashboard = () => (
    <Grid container spacing={1}>
        <Grid item xs={12}>
            <motion.div                         //animación de entrada de los cuadros 
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}>
                <Card sx={{borderRadius: '16px', minHeight:'500px'}}> {/*Este compomente es el cuadro de almacenamiento*/}
                    <CardContent>
                        <Typography variant='h6'>Origen de donaciones</Typography>
                        <MyBarChart/>
                    </CardContent>
                </Card>
            </motion.div>
        </Grid>
        <Grid item xs={12} sm={6}>
            <motion.div
            initial={{opacity:0, y:-20}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.5, delay: 0.2}}>
                <Card sx={{borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <CardContent>
                        <Typography variant='h6'>Cantidad donada por usuario</Typography>
                        <DonationPieChart/>
                    </CardContent>
                </Card>
            </motion.div>
        </Grid>
    </Grid>
    
  
);

export default MyDashboard;

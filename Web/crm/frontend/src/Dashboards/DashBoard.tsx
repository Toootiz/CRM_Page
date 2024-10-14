import DonationPieChart from '../Gráficas/pie_chart';
import MyBarChart from '../Gráficas/Barras';
import DateChart from '../Gráficas/Date_chart';
import FundraisingProgressWheel from '../Gráficas/Top_donadores';
import {Card, CardContent, Typography, Grid} from '@mui/material'
import { motion } from 'framer-motion'

const MyDashboard = () => (
    <Grid container spacing={1}>
        <Grid item xs={12} sm={8}>
            <motion.div                         //animación de entrada de los cuadros 
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}>
                <Card sx={{borderRadius: '16px',minHeight: '600px'}}> {/*Este compomente es el cuadro de almacenamiento*/}
                    <CardContent>
                        <Typography variant='h6'>Cantidad donada por usuario</Typography>
                        <MyBarChart/>
                    </CardContent>
                </Card>
            </motion.div>
        </Grid>
        <Grid item xs={12} sm={4}>
            <motion.div
            initial={{opacity:0, y:-20}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.5, delay: 0.2}}>
                <Card sx={{borderRadius:'16px',  minHeight: '671px'}}>
                    <CardContent>
                        <Typography variant='h6'>Origen de donaciones</Typography>
                        <DonationPieChart/>
                    </CardContent>
                </Card>
            </motion.div>
        </Grid>
        <Grid item xs={12} sm={8}>
            <motion.div                         //animación de entrada de los cuadros 
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}>
                <Card sx={{borderRadius: '16px'}}> {/*Este compomente es el cuadro de almacenamiento*/}
                    <CardContent>
                        <Typography variant='h6'>Ingresos Mensuales</Typography>
                        <DateChart/>
                    </CardContent>
                </Card>
            </motion.div>
        </Grid>
        <Grid item xs={12} sm={4}>
            <motion.div
            initial={{opacity:0, y:-20}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.5, delay: 0.2}}>
                <Card sx={{borderRadius:'16px',  minHeight: '472px'}} >
                    <CardContent  >
                        <Typography  variant='h6'>Progreso de recaudación</Typography>
                        <FundraisingProgressWheel />
                    </CardContent>
                </Card>
            </motion.div>
        </Grid>
    </Grid>
    
  
);

export default MyDashboard;

import { CardContentInner } from 'react-admin';
import DonationPieChart from './pie_chart';
import MyBarChart from './Barras';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
 // Importa tu componente

const MyDashboard = () => (
    <Card>
        <CardContent>
            <DonationPieChart />
        </CardContent>
    
        <CardContent>
        <MyBarChart />
        </CardContent>
    </Card>
  
);

export default MyDashboard;

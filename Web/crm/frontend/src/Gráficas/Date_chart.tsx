import React, { useState, useEffect } from 'react';
import { useDataProvider } from 'react-admin';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


const DateChart = () => {
    const dataProvider = useDataProvider();  // Hook para acceder al dataProvider
    const [data, setData] = useState([]);    // Estado para almacenar los datos
    const [loading, setLoading] = useState(true);

    dataProvider.getList('donations', { pagination: { page: 1, perPage: 100 }, sort: { field: 'amount', order: 'ASC' } })
        .then(({ data }) => {
            const donationData = data.reduce((acc, donation) => {
            const { date, amount } = donation;
            const month = date.split('-')[1];
            const existing = acc.find(item => item.month === month);
    
            if (existing) {
                existing.donations += amount;
            } else {
                acc.push({ month, donations: amount });
            }
    
            return acc;
            }, []);
    
            setData(donationData);
            setLoading(false);
        });





  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip itemStyle={{backgroundColor: 'white', color: 'black'}}/>
        <Legend />
        <Line type="monotone" dataKey="donations" label="Ingresos" stroke="#00D7C9" activeDot={{ r: 10 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DateChart;

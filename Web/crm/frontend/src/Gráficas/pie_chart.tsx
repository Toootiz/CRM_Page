// Importa las dependencias necesarias
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { useDataProvider } from 'react-admin';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DonationPieChart = () => {
  const dataProvider = useDataProvider();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Llama a la API de React Admin para obtener los datos de donaciones
    dataProvider.getList('donations', { pagination: { page: 1, perPage: 100 }, sort: { field: 'amount', order: 'ASC' } })
      .then(({ data }) => {
        
        // Procesa los datos para agrupar las donaciones por tipo y sumar las cantidades
        const donationData = data.reduce((acc, donation) => {
          const { type, amount } = donation;
          const existing = acc.find(item => item.name === type);

          if (existing) {
            existing.value += amount;
          } else {
            acc.push({ name: type, value: amount });
          }

          return acc;
        }, []);

        setData(donationData);
      });
  }, [dataProvider]);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default DonationPieChart;

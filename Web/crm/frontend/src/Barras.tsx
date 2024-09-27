// src/components/BarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dataProvider from './dataProvider';
import jsonServerProvider from 'ra-data-json-server';

const data = jsonServerProvider('https://localhost:5001/api/donations/');

const MyBarChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Nombre" />
      <YAxis dataKey="Monto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="ventas" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default MyBarChart;


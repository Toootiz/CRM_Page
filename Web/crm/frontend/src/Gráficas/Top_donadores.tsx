import React, { useEffect, useState } from "react";
import { useDataProvider } from 'react-admin'; // Si estás usando React Admin

const TopDonorsList = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dataProvider = useDataProvider();  // Usa useDataProvider para hacer la llamada

  // Llamada al Data Provider con useDataProvider
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const { data } = await dataProvider.getList('donations', { // Reemplaza 'donors' con el recurso correcto
          pagination: { page: 1, perPage: 100 },  // Ajusta según las necesidades
          sort: { field: 'amount', order: 'DESC' }, // Ordena de mayor a menor por monto de donación
          filter: {},
        });
        
        // Ordenar donadores por la cantidad de donación (por si no lo maneja la API)
        const sortedDonors = data.sort((a, b) => b.amount - a.amount);

        // Obtener los 5 donadores principales
        const topFiveDonors = sortedDonors.slice(0, 10); 

        setDonors(topFiveDonors);
        setLoading(false);
      } catch (error) {
        setError("Error fetching donors");
        setLoading(false);
      }
    };

    fetchDonors();
  }, [dataProvider]);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <ul>
        {donors.map((donor, index) => (
          <li key={index} style={{display:"flex", flexDirection:"column", alignItems:"center", fontSize:"20px"}}>
            {donor.name}: ${donor.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopDonorsList;

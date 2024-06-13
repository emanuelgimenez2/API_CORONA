import axios from 'axios';

const API_URL = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';

export const obtenerDatosHistoricos = async () => {
  try {
    const respuesta = await axios.get(API_URL);
    return respuesta.data;
  } catch (error) {
    console.error('Error al obtener los datos históricos:', error);
  }
};

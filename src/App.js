import React, { useEffect, useState } from 'react';
import { obtenerDatosHistoricos } from './api';

const App = () => {
  const [datosHistoricos, setDatosHistoricos] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      const datos = await obtenerDatosHistoricos();
      setDatosHistoricos(datos);
    };

    cargarDatos();
  }, []);

  // Renderiza tu componente con los datos obtenidos
  return (
    <div>
      {datosHistoricos ? (
        <pre>{JSON.stringify(datosHistoricos, null, 2)}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default App;


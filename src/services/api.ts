const APP_URL = import.meta.env.VITE_APP_URL;

// Función para consultar datos (GET)
export const getConfirmedData = async (queryParam:string, queryValue:string) => {
  if (!queryParam && !queryValue) {
    throw new Error("Debe proporcionar un parámetro de consulta (telefono o id) y su valor.");
  }
  const url = new URL(APP_URL);
  try {
    const response = await fetch(url.toString()+`?telefono=${queryParam}&id=${queryValue}`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error HTTP: ${response.status} - ${errorText}`);
    }

    const data = await response.json()
    return data;

  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  }
};

// Función para enviar confirmaciones (POST)
export const postConfirmation = async (personasArray:string[], telefono:string, ) => {
  const dataToSend = {
    personas: personasArray,
    telefono: telefono,
  };
//console.log(JSON.stringify(dataToSend))
  try {
    const response = await fetch(APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });
    if (response.ok) { 
        const result = await response.json();
        return result;
    } else {
        const errorBody = await response.text();
        throw new Error(`Error HTTP: ${response.status} - ${errorBody}`);
    }

  } catch (error) {
    console.error("Error al enviar confirmación:", error);
    throw error;
  }
};
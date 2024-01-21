import { Proyecto } from "@/app/lib/definitions"
import { ImagenProyecto } from "@/app/lib/definitions"

export const Crear = async ({
  nombre,
  token,
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/proyecto/create/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nombre,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error desconocido");
    }

    const responseData = await response.json();
    return { success: true, data: responseData };
  } catch (error) {
    return { success: false, error: error.message || "Error desconocido" };
  }
};



// GET

export async function VerProyectos() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/proyecto/`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const responseData = await response.json();
    return { response: responseData };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'Error fetching data' };
  }
}

// id
export async function VerProyectoId(proyectoId) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/proyecto/${proyectoId}/`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const responseData = await response.json();
    return { response: responseData };
  } catch (error) {
    console.error('Error al obtener el proyecto por ID:', error);
    return { error: 'Error fetching data' };
  }
}

//Eliminar 

export async function EliminarProyecto({
  id,
  token,
}) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/proyecto/${id}/delete/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    return { success: true, message: 'Proyecto eliminado correctamente' };
  } catch (error) {
    console.error('Error al Eliminar el proyecto', error);
    return { error: 'Error fetching' };
  }
}


//PUT

export async function Actualizar({
  proyectoId,
  nombre,
  descripcion,
  tecnologias,
  online,
  url,
  github,
  token,
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/proyecto/${proyectoId}/put/`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,

      },
      body: JSON.stringify({
        nombre,
        descripcion,
        tecnologias,
        online,
        url,
        github,
      }),
    }
  );
  const responseData = await response.json();
  return responseData
};


//imagen

export async function ImagenPUT({
  proyectoId,
  imagen,
  token,
}) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const formdata = new FormData();
  formdata.append("imagen", imagen, "NombreArchivo.png"); 

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: formdata,
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/proyecto/${proyectoId}/imagen/`,
      requestOptions
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error al actualizar la imagen del proyecto:", error.message);
    return { error: "Error al actualizar la imagen del proyecto" };
  }
}

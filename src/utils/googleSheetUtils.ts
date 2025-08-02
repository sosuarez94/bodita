const APP_URL = import.meta.env.VITE_APP_URL;


export interface ConfirmResponse {
    success:boolean;
    message:string;
}


export const confirmarAsistencia = async(persona:string,telefono:string):Promise<ConfirmResponse>=>{
    console.log([persona,telefono])
    try {
        const response= await fetch(APP_URL,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({persona,telefono})
        })
        if(!response.ok){
            throw new Error('Error en la conexion')
        }

        return await response.json();
    } catch (error:any) {
        return {success:false,message: error.message}
        
    }
}
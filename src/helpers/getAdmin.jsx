import clienteAxios from "../axios"



export const login = async (datos) =>{
    try {
        const {data} = await clienteAxios.post('/usuario/login',{...datos, rol: 'administrador'});
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const obtenerProductores = async()=>{
    try {
        const {data} = await clienteAxios('/productores');
        return data
    } catch (error) {
        console.log(error)
    }

}

export const agregarProductor = async(productor) =>{
 
        const {data} = await clienteAxios.post('/productores/nuevo', productor);
        return data

}

export const obtenerTransportistas = async()=>{
    try {
        const {data} = await clienteAxios('transportista/');
        return data
    } catch (error) {
        console.log(error)
    }

}

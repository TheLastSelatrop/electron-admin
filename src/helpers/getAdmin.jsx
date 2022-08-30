import clienteAxios from "../axios"





export const obtenerProductores = async()=>{
    const {data} = await clienteAxios('/productores');
    console.log(data)
}
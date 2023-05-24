
import React, { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";


function EditarLibro() {
   const {id} = useParams();
   const[data, setData] = useState([])
   const navigate = useNavigate()
   useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/libros/'+id)
    .then(res => setData(res.data))
    .catch(err =>console.log(err))
   },[])
   function handleSubmit(event){
    event.preventDefault()
    axios.put('http://127.0.0.1:8000/api/libros/'+id, data)
    .then(res =>{
        alert("El dato ha sido actualizado");
        navigate('/')
    })
    

}

    return (
     <div className='container shadow-lg p-3 mb-5 bg-white rounded'>
        <form onSubmit={handleSubmit}> 
        <h3>Create Libros</h3>

        <div className='mb-3'>
                <label className='form-label'>Id</label>
                <input 
                    type='text'
                    className='form-control'
                    disabled
                    value={data.id}
                    />   
</div>
            <div className='mb-3'>
                <label className='form-label'>Titulo de Libro</label>
                <input 
                    type='text'
                    className='form-control'
                    value={data.tituloLibro}
                    onChange={e=>setData({...data, tituloLibro: e.target.value})}/>              
                               
            </div>
            <div className='mb-3'>
                <label className='form-label'>Autor</label>
                <input 
                    type='text'
                    className='form-control'
                    value={data.autor}
                    onChange={e=>setData({...data, autor: e.target.value})}/>    
                     
            
            </div>
            <div className='mb-3'>
                <label className='form-label'>Precio</label>
                <input 
                   
                    type='number'
                    className='form-control'
                    value={data.precio}
                    onChange={e=>setData({...data, precio: e.target.value})}/>    
                    
                
            </div>
           
            <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form> 
    </div>
    
  )
}

export default EditarLibro
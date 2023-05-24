import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'



function AgregarLibro() {
    const [inputData, setInputData] = useState( {
        tituloLibro:'', autor:'',precio:''
    })

    const navigat = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://127.0.0.1:8000/api/libros', inputData)
        .then(res =>{
            alert("El dato ha sido guardado");
            navigat('/');
        }).catch(err => console.log(err));

    }

    return (
        <div className='container shadow-lg p-3 mb-5 bg-white rounded'>
            <h2>Agregar Libro</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                <label className='form-label'>Titulo de Libro</label>
                <input 
                    type='text'
                    className='form-control'
                    onChange={e=>setInputData({...inputData, tituloLibro: e.target.value})}/>               
            </div>
            <div className='mb-3'>
                <label className='form-label'>Autor</label>
                <input 
                    type='texts'
                    className='form-control'
                    onChange={e=>setInputData({...inputData, autor: e.target.value})}/> 
            
            </div>
            <div className='mb-3'>
                <label className='form-label'>Precio</label>
                <input 
                   
                    type='number'
                    className='form-control'
                    onChange={e=>setInputData({...inputData, precio: e.target.value})}/> 
                
            </div>
                <br></br>
                <button type='submit' className='btn btn-primary'>Agregar Libro</button>
            </form>
        </div>
    )
};
export default AgregarLibro
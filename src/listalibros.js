import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const ListaLibros = () => {
    const [libros, setLibros] = useState([]);

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/libros')
        .then(response =>{
            setLibros(response.data);
        })
        .catch(error =>{
            console.error(error);

        });
    },[]);

    const handleEliminarLibro = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/libros/${id}`)
            .then(response => {
                setLibros(libros.filter(libro => libro.id !== id));
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>

<table className="table table-hover">
<thead>
<tr>
<th scope="col">ID</th>
<th scope="col">Titulo</th>
<th scope="col">Autor</th>
<th scope="col">Precio</th>
<th scope="col">Opciones</th>

</tr>
</thead>
<tbody>
    {libros.map(libros =>(
        <tr key={libros.id}>
            <th scope="row">{libros.id}</th>
                <td>{libros.tituloLibro}</td>
                <td>{libros.autor}</td>
                <td>{libros.precio}</td>
                <td>
                    {/**/}
                <Link to={`/edit/${libros.id}`}>
                  <button className="btn btn-success">Editar</button>
                </Link>
                <button className="btn btn-danger" onClick={() => handleEliminarLibro(libros.id)}>Eliminar</button>
                </td>
                </tr>

    ) )}
    </tbody>
    </table>
    </div>
    );

};
export default ListaLibros;



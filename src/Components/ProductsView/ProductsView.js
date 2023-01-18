import React, { useEffect, useState } from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import {Helmet} from "react-helmet";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ProductsView() {

    let {id} = useParams();

    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/categories/${id}`)
            .then((response) => {
                setData(response.data);
            });
    }, []);

    return (
        
        <>
            <Helmet>
                <title>ProductsView</title>
            </Helmet>
            <Navbar />
            {
                       <div className='mia'>
                        <div className='selma' key={data.id}>
                            <h3>{data.id}</h3>
                            <h2>{data.name}</h2>
                            <h1>{data.description}</h1>
                            <Link to={"/"}><button>Go Back</button></Link>
                        </div>
                       </div>
            }
        </>
    )
}

export default ProductsView
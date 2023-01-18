import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../../Layout/Navbar/Navbar';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import "./index.scss"
function Products() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/categories`)
            .then((response) => {
                setData(response.data);
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>Products</title>
            </Helmet>
            <Navbar />
            <div className='btn'><Link to="/addpage"><button>Add a new product</button></Link></div>
           
            {
                
                data.map((element) => {
                    return (
                        <>
                        <div className='mia'>
                            <div className='selma' key={element.id}>
                                <h3>{element.id}</h3>
                                <h2>{element.name}</h2>
                                <h1>{element.description}</h1>
                                <Link to={`/productsview/${element.id}`}><button>GO TO</button></Link>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Products
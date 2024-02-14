import React, { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import ReactGA from "react-ga4"
import '../styles/pages.scss';

function Listado() {
    const [list, setList] = useState([])
    const [recoveryData, setRecoveryData] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                return response.json()
            })
            .then((list) => {
                setList(list)
            })        
    }, [])

   
    // function sendEventGA4() {
    //     ReactGA.event({
    //         category: "Product",
    //         action: "click",
    //         label: "Item"
    //     });
    // }

    function showList() {
        return (

            <div>
                <section >
                    <div className="container py-5">
                        <div className="row justify-content-center mb-3">
                            {list.map(item => {
                                return (
                                    <div className="col-md-12 col-xl-10" style={{ marginBottom: "10px" }} key={item.id}>
                                        <div className="card shadow-0 border rounded-3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                                            <div style={{ width: "210px", height: "140px", backgroundImage: `url(${item.image})`, backgroundSize: "cover" }}></div>
                                                            {/* <img src={item.image}
                                                                className="w-100" /> */}
                                                            <a href="#!">
                                                                <div className="hover-overlay">
                                                                    <div className="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-6 col-xl-6" style={{ textAlign: "left" }}>
                                                        <h5>{item.title}</h5>
                                                        <div className="mt-1 mb-0 text-muted small">
                                                            <span>{item.category}</span>
                                                        </div>
                                                        <p className="mb-4 mb-md-0">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start" style={{ textAlign: "center" }}>
                                                        <div className="flex-row align-items-center mb-1">
                                                            <h4 className="mb-1 me-1">${item.price}</h4>
                                                        </div>
                                                        <h6 className="text-success">Envío gratis</h6>
                                                        <div className="d-flex flex-column mt-4">
                                                            <NavLink to={`/list/${item.id}`} style={{ color: "#fff", textDecoration: "none" }} relative="route"><button className="btn btn-primary btn-sm" type="button">Detalles</button></NavLink>
                                                            {/* <Link to={`/list/${item.id}`} style={{ color: "#fff", textDecoration: "none" }} relative="route"><button onClick={sendEventGA4} className="btn btn-primary btn-sm" type="button">Detalles</button></Link> */}
                                                            {/* <button onClick={sendEventGA4(item.title, item.category, item.price)} className="btn btn-primary btn-sm" type="button">Detalles</button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((response) => {
                return response.json()
            })
            .then((list) => {
                setList(list)
                setRecoveryData(true)
            })
    }, [])

    if (recoveryData)
        return showList()
    else
        return (<div>Recuperando Datos...</div>)
}

export default Listado
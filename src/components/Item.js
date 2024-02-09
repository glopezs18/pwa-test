import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/pages.scss';

function Item() {
    const params = useParams()

    const [item, setItem] = useState([])
    const [recoveryData, setRecoveryData] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + params.id)
            .then(response => {
                return response.json()
            })
            .then((item) => {
                setItem(item)
            })
    }, [])

    function showItem() {
        return (
            <div>
                <div className="container" style={{margin: "40px 0"}}>
                    <div className="row">
                        <div className="col-sm-4 item-photo">
                            <img style={{ width: "100%" }} src={item.image} />
                        </div>
                        <div className="col-sm-8" style={{border:"0px solid gray", padding: "50px"}}>
                            <h3 style={{marginTop: "20px"}}>{item.title}</h3>
                            <h5 style={{ color: "#337ab7" }}>{item.category}</h5>

                            <h6 className="title-price"><small>PRECIO</small></h6>
                            <h3 style={{ marginTop: "0px" }}>U$S {item.price}</h3>

                            <ul className="menu-items">
                                <li className="active">Detalle del producto</li>
                            </ul>
                            <div style={{width:"100%", borderTop: "1px solid silver"}}>
                                <p style={{ padding: "15px" }}>
                                    <small>
                                        {item.description}
                                    </small>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((response) => {
                return response.json()
            })
            .then((item) => {
                setRecoveryData(true)
            })
    }, [])

    if (recoveryData)
        return showItem()
    else
        return (<div>Recuperando Datos...</div>)

    // return (
    //   <div>
    //     <h3>ID: {params.id}</h3>
    //   </div>
    // );
}
export default Item
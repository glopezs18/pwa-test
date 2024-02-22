import React, { Fragment, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { DFPSlotsProvider, AdSlot, DFPManager } from 'react-dfp';
import '../styles/home.scss';

function Home() {
    const [toggled, setToggled] = useState(false);
       
    useEffect(() => {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#version=v2.2&appId=myAppId&xfbml=true&autoLogAppEvents=true";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    const getComments = (url) => {
        var elId = document.getElementById(url);
        elId.style.display = "block";
        window.FB.XFBML.parse();

        // setToggled(true)
        // elId.classList.toggle("hidden");
        // return {
        //     __html: ''
        // };
        // elId.innerHTML = '<div class="fb-comments" data-href="https://www.soy502.com ' + location.pathname + '" data-numposts="5"></div>';

    }

    return (
        <Fragment>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className=""
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"
                        className=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active"
                        aria-current="true"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <div className="mask"></div>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Eleva tu estilo con nuestras prendas de moda</h1>
                                <p>Descubre nuestra colección exclusiva de prendas de moda que te ayudarán a destacar en cualquier ocasión.</p>
                                <p><a className="btn btn-lg btn-site" href="#marketing">Ver más</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="mask"></div>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Calidad y comodidad en cada prenda que vestimos</h1>
                                <p>En nuestra tienda en línea, nos comprometemos a brindarte prendas de alta calidad que garantizan comodidad durante todo el día.</p>
                                <p><a className="btn btn-lg btn-site" href="#ClothesThings">Ver más</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="mask"></div>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Expresa tu personalidad a través de tu ropa.</h1>
                                <p>Nuestra amplia selección de estilos te permite expresar tu autenticidad y personalidad a través de tu elección de ropa.</p>
                                <p><a className="btn btn-lg btn-site" href="#ClothesThings">Ver más</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="container marketing" id="marketing">
                <DFPSlotsProvider dfpNetworkId="82890815">
                    <div className="row">
                        <div className="col-lg-4">
                            <img className="img-characteristics" src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />

                            <h2>Variedad de Estilos</h2>
                            <p>Explora nuestra amplia gama de estilos, desde elegante hasta casual, para encontrar la ropa perfecta que se adapte a tu personalidad y ocasión.</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="img-characteristics" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" />

                            <h2>Comodidad Inigualable</h2>
                            <p>Nuestras prendas están diseñadas con materiales de alta calidad para ofrecer una comodidad incomparable, para que puedas sentirte genial todo el día.</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="img-characteristics" src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />

                            <h2>Calidad Duradera</h2>
                            <p>Te garantizamos que nuestras prendas están hechas para durar, con atención a cada detalle y materiales que resisten el paso del tiempo.</p>
                        </div>
                    </div>

                    <div id="ClothesThings" className="featurette-divider"></div>

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Colección  <span className="text-muted">de Tendencia</span></h2>
                            <p className="lead">Descubre nuestra colección de tendencia, siempre actualizada con las últimas y más elegantes prendas de moda para mantenerte a la vanguardia.</p>

                            <button className="getComments bt-comments" onClick={event => getComments('articulo/quitaran-carros-gruas-usac-anuncia-drastica-medida-101477')}> Comentar <i className="fa fa-comment" aria-hidden="true"></i></button>

                            <div className={toggled ? "fb-comments" : "fb-comments hidden"} id="articulo/quitaran-carros-gruas-usac-anuncia-drastica-medida-101477">
                                <div className="fb-comments" data-href="https://www.soy502.com/articulo/quitaran-carros-gruas-usac-anuncia-drastica-medida-101477" data-numposts="5"></div>
                            </div>
                            <div className="desktop-ads">
                                <AdSlot slotId="test1" dfpNetworkId="82890815" sizes={[[336, 280]]} adUnit="Mobile_Box_Top_Fama_Arte" />
                            </div>

                        </div>
                        <div className="col-md-5">
                            <img width="100%" src="https://images.unsplash.com/photo-1556011299-650a931cbfae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />

                        </div>
                    </div>

                    <div className="featurette-divider"></div>

                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Ropa para  <span className="text-muted">Todas las Temporadas</span>
                            </h2>
                            <p className="lead">Ya sea primavera, verano, otoño o invierno, encontrarás la ropa perfecta en nuestra tienda para lucir bien en cualquier estación.</p>

                            <div className="desktop-ads">
                                <AdSlot slotId="test2" sizes={[[336, 280]]} adUnit="Mobile_Box_Top_Fama_Arte" targetingArguments={{ 'segment': 'comida' }} />
                            </div>

                        </div>
                        <div className="col-md-5 order-md-1">
                            <img width="100%" src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />

                        </div>
                    </div>

                    <div className="featurette-divider"></div>

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Elegancia <span className="text-muted">Casual</span></h2>
                            <p className="lead">Nuestra selección de ropa combina a la perfección la elegancia con un toque casual, permitiéndote lucir sofisticado sin esfuerzo en cualquier ocasión.</p>

                            <button className="getComments bt-comments" onClick={event => getComments('articulo/usac-anuncia-cursos-libres-gratuitos-este-2024-101566')}> Comentar <i className="fa fa-comment" aria-hidden="true"></i></button>

                            <div className={toggled ? "fb-comments" : "fb-comments hidden"} id="articulo/usac-anuncia-cursos-libres-gratuitos-este-2024-101566">
                                <div className="fb-comments" data-href="https://www.soy502.com/articulo/usac-anuncia-cursos-libres-gratuitos-este-2024-101566" data-numposts="5"></div>
                            </div>
                            <div className="desktop-ads">
                                <AdSlot slotId="test3" sizes={[[336, 280]]} adUnit="Mobile_Box_Top_Fama_Arte" targetingArguments={{ 'segment': 'carros' }} />
                            </div>

                        </div>
                        <div className="col-md-5">
                            <img width="100%" src="https://images.unsplash.com/photo-1600091106710-7be582d40984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" />

                        </div>
                    </div>

                    <div className="featurette-divider"></div>
                </DFPSlotsProvider>
            </div>
        </Fragment>

    );
}

export default Home
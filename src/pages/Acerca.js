import React, { Component } from 'react'
import '../styles/pages.scss';

class Acerca extends Component {
    render() {
        return (
            <div>

                <div className="container about" id="about">

                    <div className="featurette-divider"></div>

                    <div className="row featurette">
                        <div className="col-md-7" style={{textAlign:"justify"}}>
                            <h2 className="featurette-heading" style={{textAlign: "center", marginBottom: "20px"}}>Acerca de  <span className="text-muted">Nosotros</span></h2>
                            <p className="lead">En <strong>EstiloEstelar</strong>, nuestra pasión es la moda. Desde el momento en que abrimos nuestras puertas, nos hemos comprometido a ofrecer a nuestros clientes las últimas tendencias y la mejor selección de ropa para que se sientan seguros y a la moda en cualquier ocasión.</p>
                            <p className="lead">Nuestra historia comenzó hace 15 años, cuando un grupo de entusiastas de la moda se unió para crear una tienda que combinara estilo, calidad y accesibilidad. Desde entonces, hemos crecido y evolucionado, pero nuestra misión sigue siendo la misma: ayudarte a expresar tu estilo único a través de la ropa que vistes.</p>
                            <p className="lead">Lo que nos hace especiales es nuestro enfoque en la satisfacción del cliente. Trabajamos incansablemente para seleccionar cuidadosamente cada artículo que ofrecemos en nuestra tienda, asegurándonos de que estén a la altura de nuestros estándares de calidad y estilo. Además, nuestro equipo de atención al cliente está siempre dispuesto a ayudarte en cada paso del camino, desde encontrar la prenda perfecta hasta asegurarnos de que tu experiencia de compra sea excepcional.</p>
                            <p className="lead">En <strong>EstiloEstelar</strong>, no solo vendemos ropa; vendemos confianza, autenticidad y un sentido de comunidad. Creemos que la moda es una forma poderosa de expresión personal, y estamos aquí para apoyarte en cada paso de tu viaje. Nos enorgullece servir a clientes de todo el mundo y formar parte de la diversa comunidad de amantes de la moda que compartimos.</p>
                            <p className="lead">¡Gracias por confiar en nosotros como tu destino de moda! Estamos emocionados de ser parte de tu estilo de vida y esperamos ayudarte a lucir y sentirte increíble en cada momento importante.</p>
                        </div>
                        <div className="col-md-5">
                            <img width="100%" src="https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />

                        </div>
                    </div>

                    <div className="featurette-divider"></div>
                </div>
            </div>
        );
    }
}

export default Acerca
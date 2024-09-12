import Mapa from "../components/map";


const Home = () => {
    return (
        <div>
        <main>
        <div className='title'>
                <h1>AMERICAN GARAGE</h1>
            </div>
            <p className="descripciontaller">es un taller de automóviles de alta calidad especializado en vehículos americanos. 
            Con un equipo de mecánicos expertos y apasionados, ofrecen una amplia gama de servicios, 
            desde reparaciones generales hasta restauraciones completas. 
            Su conocimiento y experiencia con marcas de automóviles americanas les permite proporcionar un servicio excepcional y personalizado a cada cliente. 
            En American Garage, su coche americano está en manos seguras y expertas.</p>

            <h2 className="title">Servicios</h2>
            <div className='servicios'>
                <li>
                    Mantenimiento preventivo: Cambios de aceite, rotación de neumáticos, reemplazo de filtros de aire, y servicios de inspección periódica.
                </li>
                <li>
                    frenos: Reemplazo de pastillas de freno, discos, y otros servicios relacionados con el sistema de frenos.
                </li>
                <li>
                    motor: Reparación de motores, reemplazo de correas de distribución, y servicios de enfriamiento del motor.
                </li>
                <li>
                    transmisión: Mantenimiento y reparación de la transmisión, tanto manual como automática.
                </li>
                <li>
                    escape y silenciado: Reparación y reemplazo de componentes del sistema de escape.
                </li>
                <li>
                suspensión: Trabajos en los amortiguadores, resortes, y otros componentes de la suspensión.
                </li>
                <li>
                    aire acondicionado y calefacción**: Recarga del refrigerante del aire acondicionado y reparación del sistema de calefacción.
                </li>
                <li>
                    batería y eléctrico: Pruebas y reemplazos de baterías, así como reparaciones en el sistema eléctrico del vehículo.
                </li>
                <li>
                    carrocería: Reparaciones de carrocería y pintura.
                </li>
                <li>
                    Pre ITV: Inspecciones de seguridad y emisiones requeridas por la ley.
                </li>
                <li>
                    Banco de pruebas: medicion de potencia de su vehiculo y reprogramaciones de centralitas
                </li>
                <li>
                    restauraciones: Le damos un nueva vida a tu coche clasico.
                </li>
            </div>
            <h2 className="title">donde encontrarnos</h2>
            <Mapa/>
        </main>
        </div>
    );
}

export default Home;

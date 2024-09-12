

//imagenes
import camaro from '../img/camarodespues.jpg'
import nova from '../img/novadespues.jpg'
import corvete from '../img/corvettedespues.jpg'
import camaroa from '../img/camaroantes.jpg'
import novaa from '../img/novaantes.jpg'
import corvetea from '../img/corvettantes.jpg'

const Restauration = () => {
    return (
        <div>
            <div className='title'>
                <h1>AMERICAN GARAGE</h1>
            </div>
            <div className='title'>
                <h2>Chevrolet camaro</h2>
                <p className='descripcion' >restauracion completa de carroceria y de interior</p>
            </div>
            <div className='car'>
                <div>
                    <h3>Antes</h3>
                    <img src={camaroa}></img>
                </div>
                <div>
                    <h3>Despues</h3>
                    <img src={camaro}></img>
                </div>
            </div>
            <div className='title'>
                <h2>Crevrelet nova</h2>
                <p className='descripcion' >restauracion completa de carroceria, de interior y motor nuevo</p>
            </div>
            
            <div className='car'>
                <div>
                    <h3>Antes</h3>
                    <img src={novaa}></img>
                </div>
                <div>
                    <h3>Despues</h3>
                    <img src={nova}></img>
                </div>
                
            </div>
            <div className='title'>
                <h2>Chevrolet Corvete</h2>
                <p className='descripcion' >restauracion completa de carroceria, interior y de motor</p>
            </div>
            <div className='car'>
                <div>
                <h3>Antes</h3>
                <img src={corvetea}></img>
                </div>
                <div>
                    <h3>Despues</h3>
                    <img src={corvete}></img>
                </div>              
            </div>
        </div>
    );
}

export default Restauration;

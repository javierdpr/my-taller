import camaro from '../img/camarodespues.jpg'
import nova from '../img/novadespues.jpg'
import corvete from '../img/corvettedespues.jpg'
import taller from '../img/taller.jpg';
import ruedas from '../img/ruedas.jpg';
import motores from '../img/motores.jpg';
import alineado from '../img/alineado.jpg';
import cabina from '../img/cabina.jpg';
import bancopruebas from '../img/bancopruebas.jpg';
import close from '../img/close.png'


const Galery = () => {

    const handleClick = () => {

        const imagenes = document.querySelectorAll('.img-galeria');
        const imagenesLight = document.querySelector('.agregar-imagen');
        const contenedorLight = document.querySelector('.imagen-light');

        imagenes.forEach(imagen =>{
            imagen.addEventListener('click',()=>{
                aparecerImagen(imagen.getAttribute('src'));
            })
        })

        contenedorLight.addEventListener('click', (e)=>{
            if(e.target !== imagenesLight){
                contenedorLight.classList.toggle('show');
                imagenesLight.classList.toggle('showImage');
            }
        })

        const aparecerImagen = (imagen)=>{
            imagenesLight.src = imagen;
            contenedorLight.classList.toggle('show');
            imagenesLight.classList.toggle('showImage');
        }
    
    };
    
    return (
        <>
        <div className='gallery'>
        <div className='title'>
                <h1>AMERICAN GARAGE</h1>
            </div>
            <div className='contenedor'>
                <div className='contenedor-galeria'>
                    <img onClick={handleClick} src={camaro} className="img-galeria"/>
                    <img onClick={handleClick} src={nova} className="img-galeria"/>
                    <img onClick={handleClick} src={corvete} className="img-galeria"/>
                    <img onClick={handleClick} src={taller} className="img-galeria"/>
                    <img onClick={handleClick} src={ruedas} className="img-galeria"/>
                    <img onClick={handleClick} src={motores} className="img-galeria"/>
                    <img onClick={handleClick} src={alineado} className="img-galeria"/>
                    <img onClick={handleClick} src={cabina} className="img-galeria"/>
                    <img onClick={handleClick} src={bancopruebas} className="img-galeria"/>
                </div>
            </div>
        </div>
        <div className='imagen-light'>
            <img onClick={handleClick} src={close} alt="" className='close'/>
            <img  alt="" className="agregar-imagen" />
            </div>
        </>
        
    );
}

export default Galery;


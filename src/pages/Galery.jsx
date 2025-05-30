import { useEffect, useState } from 'react';
import camaro from '../img/camarodespues.jpg'
import nova from '../img/novadespues.jpg'
import corvete from '../img/corvettedespues.jpg'
import taller from '../img/taller.jpg';
import ruedas from '../img/ruedas.jpg';
import motores from '../img/motores.jpg';
import alineado from '../img/alineado.jpg';
import cabina from '../img/cabina.jpg';
import bancopruebas from '../img/bancopruebas.jpg';
import closeIcon from '../img/close.png'; // Renamed for clarity, as 'close' can be a keyword/function

const Galery = () => {
    // State to manage the currently displayed image in the lightbox
    const [currentImage, setCurrentImage] = useState('');
    // State to manage lightbox visibility
    const [lightboxOpen, setLightboxOpen] = useState(false);

    // Function to open the lightbox with a specific image
    const openLightbox = (imageSrc) => {
        setCurrentImage(imageSrc);
        setLightboxOpen(true);
    };

    // Function to close the lightbox
    const closeLightbox = () => {
        setLightboxOpen(false);
        // Optional: clear currentImage if it helps with transitions or state management
        // setCurrentImage(''); 
    };

    useEffect(() => {
        const galleryImages = document.querySelectorAll('.img-galeria');
        const lightboxElement = document.querySelector('.imagen-light');
        const lightboxImageElement = document.querySelector('.agregar-imagen');
        const closeButtonElement = document.querySelector('.close');

        // Event listener for each gallery image
        const handleImageClick = (event) => {
            // event.target is the clicked image
            openLightbox(event.target.getAttribute('src'));
        };

        galleryImages.forEach(image => {
            image.addEventListener('click', handleImageClick);
        });

        // Event listener for the lightbox container (to close when clicking outside the image)
        const handleLightboxContainerClick = (event) => {
            // Close if the click is on the container itself, not the main image or the close button
            if (event.target === lightboxElement) {
                closeLightbox();
            }
        };

        if (lightboxElement) {
            lightboxElement.addEventListener('click', handleLightboxContainerClick);
        }
        
        // Event listener for the explicit close button
        const handleCloseButtonClick = () => {
            closeLightbox();
        };

        if (closeButtonElement) {
            closeButtonElement.addEventListener('click', handleCloseButtonClick);
        }

        // Cleanup function to remove event listeners when the component unmounts
        return () => {
            galleryImages.forEach(image => {
                image.removeEventListener('click', handleImageClick);
            });
            if (lightboxElement) {
                lightboxElement.removeEventListener('click', handleLightboxContainerClick);
            }
            if (closeButtonElement) {
                closeButtonElement.removeEventListener('click', handleCloseButtonClick);
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount and cleanup on unmount

    useEffect(() => {
        // Effect to toggle CSS classes for lightbox visibility based on state
        const lightboxElement = document.querySelector('.imagen-light');
        const lightboxImageElement = document.querySelector('.agregar-imagen');

        if (lightboxOpen) {
            if (lightboxElement) lightboxElement.classList.add('show');
            if (lightboxImageElement) {
                lightboxImageElement.src = currentImage;
                lightboxImageElement.classList.add('showImage');
            }
        } else {
            if (lightboxElement) lightboxElement.classList.remove('show');
            if (lightboxImageElement) lightboxImageElement.classList.remove('showImage');
        }
    }, [lightboxOpen, currentImage]); // Runs when lightboxOpen or currentImage changes

    // Image data - could also be fetched or passed as props
    const images = [
        { id: 1, src: camaro, alt: "Camaro" },
        { id: 2, src: nova, alt: "Nova" },
        { id: 3, src: corvete, alt: "Corvette" },
        { id: 4, src: taller, alt: "Taller" },
        { id: 5, src: ruedas, alt: "Ruedas" },
        { id: 6, src: motores, alt: "Motores" },
        { id: 7, src: alineado, alt: "Alineado" },
        { id: 8, src: cabina, alt: "Cabina" },
        { id: 9, src: bancopruebas, alt: "Banco de Pruebas" },
    ];

    return (
        <>
        <div className='gallery'>
            <div className='title'>
                <h1>AMERICAN GARAGE</h1>
            </div>
            <div className='contenedor'>
                <div className='contenedor-galeria'>
                    {images.map(image => (
                        <img 
                            key={image.id} 
                            src={image.src} 
                            alt={image.alt} 
                            className="img-galeria"
                            // onClick is no longer needed here as useEffect handles it
                        />
                    ))}
                </div>
            </div>
        </div>
        {/* Lightbox container - its visibility and content are controlled by useEffect */}
        <div className="imagen-light">
            <img src={closeIcon} alt="Close" className='close'/> {/* onClick handled by useEffect */}
            {/* src and class for agregar-imagen are handled by useEffect */}
            <img alt="Enlarged view" className="agregar-imagen" />
        </div>
        </>
    );
}

export default Galery;


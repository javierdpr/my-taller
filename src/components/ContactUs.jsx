import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs
        .sendForm('service_03ev4q4', 'template_b4pmuxn', form.current, {
        publicKey: 'VE4bqyPUx7ucLczzc',
    })
        .then(
        () => {
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
    );
    };

return (
    <div className='contact'>
        <div className='title'>
            <h2>Contactar</h2>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Telefono</label>
        <input type='number' name='user_number'/>
        <label>Mensage</label>
        <textarea name="message" />
        <input type="submit" value="enviar" className='send'/>
    </form>
    </div>
    
    );
};
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
        <label>Cuentame</label>
        <input type="text" name="user_name" placeholder='Nombre'/>
        <input type="email" name="user_email" placeholder='Email'/>
        <input type='number' name='user_number' placeholder='Telefono'/>
        <textarea name="message" placeholder='Mensage'/>
        <input type="submit" value="ENVIAR" className='send' />
    </form>
    </div>
    
    );
};
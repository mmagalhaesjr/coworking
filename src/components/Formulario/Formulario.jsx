import { StyledFormulario } from "./styled";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


export default function Formulario() {

    const navegar = useNavigate();
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('temasek_id', 'template_nb72y2a', form.current, '5MZ9RpLZpT_8ZlGsq')
            .then((result) => {
                navegar("/confirmar");
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }



    return (



        <StyledFormulario id="contato" >

            {/* <form action="https://formsubmit.co/contato@temasekjf.com.br" method="POST"  > */}
            <form ref={form}  onSubmit={sendEmail}>

                <input type="hidden" name="_captcha" value="false"></input>
                {/* <input type="hidden" name="_next" value='https://www.temasekjf.com.br/confirmar' /> */}

                <div className="inputBox">
                    <input type="text" name="nome" id="nome" className="inputUser" required />
                    <label htmlFor="nome" className="labelInput">Nome completo</label>
                </div>
                <div className="inputBox">
                    <input type="text" name="email" id="email" className="inputUser" required />
                    <label htmlFor="email" className="labelInput">E-mail</label>
                </div>

                <div className="inputBox">
                    <input type="number" name="telefone" id="email" className="inputUser" required />
                    <label htmlFor="telefone" className="labelInput">Numero</label>
                </div>

              
              
                <div className="inputBox">
                    <label htmlFor="mensagem" className="labelInput">Mensagem:</label>
                    <textarea id="msg" className="imputMesnsagem" name="mensagem" rows="4" cols="50"></textarea>
                </div>

                <button>ENVIAR</button>


            </form>
        </StyledFormulario >

    )
}
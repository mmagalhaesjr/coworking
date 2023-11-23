import { StyledFormulario } from "./styled";
import { useState } from "react";


export default function Formulario() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);

        // Criar um elemento de link e clicar nele para redirecionar
        const link = document.createElement('a');
        link.href ="/confirmar";
        // link.target = '_blank';
        link.rel = 'noreferrer';
        link.click();
    };
    

    return (
        <StyledFormulario id="contato" >

            <form onSubmit={handleSubmit} action="https://formsubmit.co/contato@temasekjf.com.br" method="POST">
           
                <input type="hidden" name="_next" value='https://www.temasekjf.com.br/' />
                <input type="hidden" name="_captcha" value="false"></input>

                <div className="inputBox">
                    <input type="text" name="nome" id="nome" className="inputUser" required />
                    <label htmlFor="nome" className="labelInput">Nome completo</label>
                </div>
                <div className="inputBox">
                    <input type="text" name="email" id="email" className="inputUser" required />
                    <label htmlFor="email" className="labelInput">E-mail</label>
                </div>
                <div className="inputBox">
                    <input type="text" name="telefone" id="email" className="inputUser" required />
                    <label htmlFor="email" className="labelInput">Telefone</label>
                </div>
                <div className="inputBox">
                    <label htmlFor="email" className="labelInput">Mensagem:</label>
                    <textarea id="msg" className="imputMesnsagem" name="msg" rows="4" cols="50"></textarea>
                </div>
                <button type="submit">ENVIAR</button>

            </form>
            {submitted && (
                <p>Enviando...</p>
            )}
           
        </StyledFormulario >
    )
}
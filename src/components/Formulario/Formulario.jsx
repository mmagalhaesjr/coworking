import { StyledFormulario } from "./styled";
import { useState,useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import { useNavigate } from "react-router-dom";


export default function Formulario() {
    const [submitted, setSubmitted] = useState(false);

    const navegar = useNavigate()
    const { setHomeComponent } = useContext(HomeContext)
    const contato = () => {
        setHomeComponent('contato')
        navegar('/confirmar');
    };

    
  

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        // Enviar dados para o servidor
        const response = await fetch("https://formsubmit.co/contato@temasekjf.com.br", {
            method: "POST",
            body: new FormData(event.target),
        });
        contato();

        if (response.ok) {
            // Lidar com o envio bem-sucedido (redirecionar, exibir mensagem, etc.)
            console.log("Formulário enviado com sucesso!");
            contato();
            
        } else {
            // Lidar com erros no envio
            console.error("Erro ao enviar o formulário:", response.statusText);
        }
    } catch (error) {
        console.error("Erro ao enviar o formulário", error);
    } finally {
        setSubmitted(true);
    }
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
            {submitted && <p>Enviando</p>}
           
        </StyledFormulario >
    )
}
import { StyledFormulario } from "./styled";


export default function Formulario() {

    return (
        <StyledFormulario id="contato" >

            <form action="https://formsubmit.co/contato@temasekjf.com.br" method="POST">
           
                <input type="hidden" name="_next" value='http://www.temasekjf.com.br/' />
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
                <button>ENVIAR</button>

            </form>
        </StyledFormulario >
    )
}
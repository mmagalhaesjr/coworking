import { StyledFormulario } from "./styled";


export default function Formulario() {

    return (
        <StyledFormulario id="contato" >

            <div id="titulos">
                <h1>CONTATO</h1>
                <p> Interessado em saber mais sobre nossos serviços?  Entre em contato com a gente!</p>
            </div>

            <form action="https://formsubmit.co/magalhaesmarcosjr@gmail.com" method="POST">

                <input type="hidden" name="_next" value='http://localhost:5173/confirmar/' />
                
                <div className="inputBox">
                    <input type="text" name="nome" id="nome" className="inputUser" required />
                    <label htmlFor="nome" className="labelInput">Nome completo</label>
                </div>
                <div className="inputBox">
                    <input type="text" name="email" id="email" className="inputUser" required />
                    <label htmlFor="email" className="labelInput">Email</label>
                </div>
                <div className="inputBox">
                    <input type="number" name="telefone" id="email" className="inputUser" required />
                    <label htmlFor="email" className="labelInput">Telefone</label>
                </div>
                <div className="inputBox">
                    <label htmlFor="email" className="labelInput">Mensangem</label>
                    <textarea id="msg" className="imputMesnsagem" name="msg" rows="4" cols="50"></textarea>
                </div>
                <button>ENVIAR</button>

            </form>
        </StyledFormulario >
    )
}
import { StyledFormulario } from "./styled";


export default function Formulario() {
    return (
        <StyledFormulario>
            <h1>Entre em contato</h1>
            <form>

                <div className="inputBox">
                    <input type="text" name="nome" id="nome" className="inputUser" required
                        value={nome} />
                    <label htmlFor="nome" className="labelInput">Nome completo</label>
                </div>

                <div className="inputBox">
                    <input type="text" name="email" id="email" className="inputUser" required
                        value={email} />
                    <label htmlFor="email" className="labelInput">Email</label>
                </div>

                <div className="inputBox">
                    <input type="tel" name="telefone" id="telefone" className="inputUser" required
                        value={telefone} />
                    <label htmlFor="telefone" className="labelInput">Telefone</label>
                </div>

                <button type="submit" name="submit" id="submit">Cadastrar</button>

            </form>
        </StyledFormulario>
    )
}
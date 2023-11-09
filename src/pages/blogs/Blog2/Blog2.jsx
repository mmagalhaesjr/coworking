import { StyledBlog2 } from "./styled"

import foto1 from '../../../assets/blog/blog2-f1.png'
import foto2 from '../../../assets/blog/blog2-f2.png'


export default function Blog2() {
    return (
        <StyledBlog2>
            <div id="titulo">
                <h1>
                    Conheça algumas estratégias que podem aumentar suas
                    oportunidades de negócio.
                </h1>
            </div>

            <div id="container">
                <div className="texto">
                    <p>
                        Economizar recursos e investir com sabedoria são práticas cruciais para o sucesso e
                        crescimento de um negócio.

                    </p>
                </div>
                <div className="texto">
                    <p>
                        O primeiro passo é criar um planejamento financeiro. Crie um plano de negócios sólido,
                        detalhando suas metas e despesas estimadas. Isso ajudará a manter o foco nos gastos
                        essenciais e nas áreas que exigem investimento.

                    </p>
                </div>
                <div className="img">
                    <img src={foto1} alt="" />
                </div>
                <div className="texto">
                    <p>
                        Analisar suas despesas regularmente e identificar onde é possível diminuir gastos também é
                        prioridade nesse caso. A redução de custos vai permitir que você economize para investir em
                        qualidade na sua empresa.

                    </p>
                </div>
                <div className="texto">
                    <p>
                        Confira como economizar em um negócio clicando no vídeo abaixo:

                    </p>
                </div>
                <div className="img">
                    <img src={foto2} alt="" />
                </div>
                <div className="texto">
                    <p>
                        Agora, priorize os seus gastos. Foque nos investimentos que realmente impulsionarão o
                        crescimento do negócio. Concentre-se em áreas-chave, como marketing eficiente,
                        desenvolvimento de produtos e atendimento ao cliente.
                    </p>
                </div>
                <div className="texto">
                    <p>
                        Outra opção que não deve ser descartada é negociar com seus fornecedores para obter
                        melhores preços e termos. Pode ser possível obter descontos ou prazos de pagamento
                        melhores.

                    </p>
                </div>
                <div className="texto">
                    <p>
                        Automatize os processos. Investir em sistemas e ferramentas de automação pode reduzir a
                        necessidade de mão de obra e melhorar a eficiência operacional.
                    </p>
                </div>
                <div className="img">
                    <img src={foto2} alt="" />
                </div>
                <div className="texto">
                    <p>
                        Outsourcing: Avalie a terceirização de algumas tarefas para empresas especializadas. Isso
                        pode ser mais econômico do que manter todas as funções internas.


                    </p>
                </div>
                <div className="texto">
                    <p>
                        Por último, mas não menos importante, por que não pensar no coworking como alternativa?
                        Os escritórios compartilhados oferecem uma série de vantagens que podem melhorar a sua
                        experiência de trabalho, além de propiciar o networking diário.
                    </p>
                </div>
                <div className="texto" >
                    <p>
                        Conte com o Temasek Coworking para ter flexibilidade no trabalho, potencializar as
                        conexões e aprimorar a qualidade dos seus negócios.
                    </p>
                </div>


            </div>
        </StyledBlog2>
    )
}
import { StyledBlogPagina } from "./styled";
import { Helmet } from 'react-helmet';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";


import TelaBlog from "../../components/Blog/TelaBlog";
import Cabecalho2 from '../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../components/Rodape/Rodape';

import { BsWhatsapp } from 'react-icons/bs';
import foto1 from "../../assets/blog/blog1/foto1.webp"
import foto2 from "../../assets/blog/blog2/foto1.webp"
import foto3 from "../../assets/blog/blog3/foto1.webp"
import foto4 from "../../assets/blog/blog4/blog4-f1.webp"
import foto5 from "../../assets/blog/blog5/foto1.webp"
import foto6 from "../../assets/blog/blog6/blog6-f1.webp"
import foto7 from "../../assets/blog/blog7/blog7-f1.webp"
import foto8 from "../../assets/blog/blog8/blog8-capa.webp"
import foto9 from "../../assets/blog/blog9/blog9-f2.webp"
import foto10 from "../../assets/blog/blog10/blog10-f1.webp"
import foto11 from "../../assets/blog/blog11/foto1.png"
import foto12 from "../../assets/blog/blog12/foto1.jpg"
import foto13 from "../../assets/blog/blog13/foto1.png"
import foto14 from "../../assets/blog/blog14/1.webp"
import foto15 from "../../assets/blog/blog15/foto1.png"
import foto16 from "../../assets/blog/blog16/1.png"
import foto17 from "../../assets/blog/blog17/foto1.png"
import foto18 from "../../assets/blog/blog18/1.png"
import foto19 from "../../assets/blog/blog19/1.png"



export default function BlogPagina2() {

    const blogs = [

        {
            link: '/blog19',
            img: foto19,
            titulo: 'Home office: A importância de encontros presenciais no modelo de trabalho híbrido',
            texto: 'Entenda os 5 motivos pelos quais a interação face a face é crucial na eficácia do trabalho não presencial'
        },
        {
            link: '/blog18',
            img: foto18,
            titulo: 'Coworking para Empreendedores',
            texto: 'A seguir, vamos falar sobre empreendedorismo e todas as potencialidades do coworking para seu negócio'
        },
        {
            link: '/blog17',
            img: foto17,
            titulo: 'Os 5 principais serviços de um coworking',
            texto: 'Neste blog, exploraremos os principais serviços que tornam os espaços de coworking uma escolha inteligente'
        },
        {
            link: '/blog16',
            img: foto16,
            titulo: 'Advocacia em Movimento',
            texto: 'Como os espaços de coworking transformam a rotina dos escritórios jurídicos'
        },
        {
            link: '/blog15',
            img: foto15,
            titulo: 'Por que locar uma sala em um coworking é uma escolha inteligente?',
            texto: 'Neste blog, exploraremos uma opção que tem ganhado cada vez mais destaque no mundo profissional: a locação de salas em espaços de coworking'
        },
        {
            link: '/blog14',
            img: foto14,
            titulo: 'Zé das Flores: 35 Anos na Mesma Avenida de Juiz de Fora',
            texto: 'Mais de Três Décadas de Cores e Aromas na Avenida Central da cidade'
        },
        {
            link: '/blog13',
            img: foto13,
            titulo: '3 Dicas para se tornar um empreendedor de sucesso',
            texto: 'Vamos explorar três dicas fundamentais para ajudar você a trilhar o caminho do empreendedorismo de forma bem-sucedida.'
        },
        {
            link: '/blog12',
            img: foto12,
            titulo: 'Mark Zuckerberg - Como construir o futuro',
            texto: 'Confira a entrevista com Mark Zuckerberg, co-fundador do Facebook e sua empresa-mãe Meta'
        },
        {
            link: '/blog11',
            img: foto11,
            titulo: 'Construindo uma carreira de sucesso: princípios e comportamentos essenciais',
            texto: 'Neste blog, vamos explorar alguns princípios básicos que podem ajudar você a alcançar o sucesso profissional que deseja.'
        },
        {
            link: '/blog10',
            img: foto10,
            titulo: 'Quanto deveria investir em um espaço de coworking?',
            texto: 'A pergunta que muitos profissionais se fazem é: "Quanto eu devo gastar em um coworking?"'
        },
        {
            link: '/blog9',
            img: foto9,
            titulo: 'Coworking e Bem-Estar: Como criar um espaço de trabalho saudável',
            texto: 'Neste blog, exploraremos como criar um espaço de coworking que priorize o bem-estar dos membros e promova...'
        },
        {
            link: '/blog8',
            img: foto8,
            titulo: 'Descubra o cenário ideal: Como encontrar o espaço de coworking perfeito',
            texto: 'Vamos explorar as características que definem os melhores espaços...'
        },
        {
            link: '/blog7',
            img: foto7,
            titulo: 'Descubra o poder da comunidade: Como os Coworkings estão transformando a maneira como trabalhamos',
            texto: 'Neste blog, exploraremos como os coworkings estão revolucionando a maneira como trabalhamos...'
        },
        {
            link: '/blog6',
            img: foto6,
            titulo: 'Desbloqueando o Potencial: Estratégias para Maximizar sua Experiência em um Coworking',
            texto: 'Para tirar o máximo proveito de seu espaço de coworking, é importante adotar uma abordagem estratégica, confira a seguir:...'
        },
        {
            link: '/blog5',
            img: foto5,
            titulo: 'Trabalho Flexível: Desvendando os Benefícios do Coworking',
            texto: 'Descubra neste blog como esses espaços de trabalho compartilhados podem revolucionar...'
        },
        {
            link: '/blog4',
            img: foto4,
            titulo: 'É possível ter privacidade em um escritório compartilhado?',
            texto: 'Confira abaixo algumas maneiras de garantir a privacidade em um espaço de coworking...'
        },
        {
            link: '/blog3',
            img: foto3,
            titulo: 'Curiosidades sobre o Coworking',
            texto: 'O que você ainda não sabe sobre os escritórios compartilhados'
        },
        {
            link: '/blog2',
            img: foto2,
            titulo: 'Como economizar para investir?',
            texto: 'Conheça algumas estratégias que podem aumentar suas oportunidades de negócio...'
        },
        {
            link: '/blog1',
            img: foto1,
            titulo: 'Por que o coworking é uma escolha inteligente?',
            texto: 'O coworking abrange um espaço de trabalho compartilhado por profissionais independentes...'
        },
    ];



    const blogsPorPagina = 6;
    const numeroDePaginas = Math.ceil(blogs.length / blogsPorPagina);

    const renderizarPagina = (pagina) => {
        const inicio = (pagina - 1) * blogsPorPagina;
        const fim = inicio + blogsPorPagina;
        const blogsPagina = blogs.slice(inicio, fim);



        return (
            <SwiperSlide key={pagina}>
                {blogsPagina.map((blog) => (
                    <TelaBlog
                        key={blog.link}
                        link={blog.link}
                        img={blog.img}
                        titulo={blog.titulo}
                        texto={blog.texto}
                    />
                ))}
            </SwiperSlide>
        );
    };

    const paginas = Array.from({ length: numeroDePaginas }, (_, index) => index + 1);


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (


        <>
            <Helmet>
                <title>Temasek Coworking Blog</title>
                <meta name="description" content="Bem-vindo ao Temasek Coworking JF - O melhor espaço de coworking em Juiz de Fora. Oferecemos ambientes colaborativos para trabalho, networking e eventos. Conheça nossos espaços e planos. confira nosso conteudo em blog" />
            </Helmet>

            <Cabecalho2 />

            <StyledBlogPagina>
                <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>
                <div id="titulo">
                    <h1>
                        Confira nosso conteúdo em Blog
                    </h1>
                </div>

                <div id="container">
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {paginas.map((pagina) => renderizarPagina(pagina))}
                    </Swiper>
                </div>

            </StyledBlogPagina>

            <Rodape />


        </>
    )
}

import { Box, Input, Button, Image, Container } from "@chakra-ui/react";
import { IoShieldCheckmark, IoHeadset } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import {FaArrowCircleRight} from 'react-icons/fa';
import "../Home/index.css";
import myImage from '../../imagens/dashboard.png';
import arrow from '../../imagens/arrow-icon.svg';


function Home(){
    return(
        <div className="main-container">

            <Container className="box-1">
                
                <h2 className="title">O melhor Software para aumentar<br/>suas Vendas e Serviços</h2>
                <p className="subtitle">Este software inovador otimiza processos de vendas e serviços, impulsionando o crescimento<br/>
                    e a eficiência. Aumente suas conversões e melhore a satisfação do cliente com nossa tecnologia
                </p>
                

                <div className="input-container">
                    <Input placeholder="Adicione seu E-mail" className="email-input"/>
                    <Button className="teste-button">Teste Gratuito</Button>
                </div>
            </Container>

            <Box className="imagem-teste">
                <Image src={myImage} boxSize={'100%'}/>
            </Box>

            <Container className="box-2">
                <div className="card-principal">
                    <p style={{fontSize: 24, fontWeight: "bold"}}>
                        High-quality
                    </p>
                    <h3 className="title">
                        Nós temos a melhor solução<br/> para seu negócio 
                    </h3>

                    <Container className="card-produtos">
                        <Box className="card-conteudo">
                            <IoShieldCheckmark size={48} color="#6B7CFF"/>
                            <h3 className="card-title">Alta segurança para proteger <br/> contra pirataria</h3>
                            <p>Proteja seu investimento com a mais alta qualidade<br/> em segurança contra pirataria</p>
                        </Box>
                        <Box className="card-conteudo">
                            <BiSolidLike size={48} color="#6B7CFF"/>
                            <h3 className="card-title">Qualidade de performance<br/>Premium</h3>
                            <p>Desempenho premium para os mais altos padrões de<br/> qualidade e eficiência</p>
                        </Box>
                        <Box className="card-conteudo">
                            <IoHeadset size={48} color="#6B7CFF"/>
                            <h3 className="card-title">Suporte em tempo integral - 24 horas por dia, 7 dias da semana</h3>
                            <p>Suporte em tempo integral para garantir sua<br/> tranquilidade e satisfação.</p>
                        </Box>
                    </Container>
                </div>
            </Container>

            <Container className="box-3">
                <div className="card-work">
                    <span className="highlight">
                        Por que você deve trabalhar com a gente?
                    </span>
                    <h1 className="main-title">
                        Leve seu negócio para o próximo nível
                    </h1>
                    <p className="content">
                        Nossa equipe especializada está comprometida em maximizar suas vendas e expandir<br/>
                        seu alcance de mercado. Além disso, oferecemos suporte contínuo e soluções inovadoras<br/>
                        para superar desafios e impulsionar seu sucesso.
                    </p>
                </div>
                <div className="card-work-1">
                    <Box className="topic-box">
                        <Image src={arrow} sizes="40px" style={{marginRight: 25}}/>
                        <p className="topic-content">
                            Equipe altamente qualificada e com vasta experiência no setor, garantindo soluções eficazes e inovadoras para o seu negócio.
                        </p>
                    </Box>
                    <Box className="topic-box">
                        <Image src={arrow} sizes="40px" style={{marginRight: 25}}/>
                        <p className="topic-content">
                            Sempre focamos nas necessidades expecíficas de cada cliente, proporcionando uma experiência de parceria excepcional.
                        </p>
                    </Box>
                    <Box className="topic-box">
                        <Image src={arrow} sizes="40px" style={{marginRight: 25}}/>
                        <p className="topic-content">
                            Inúmeros casos de clientes satisfeitos que alcançaram seus objetivos de crescimento e melhoria contínua através dos nossos serviços.
                        </p>
                    </Box>
                </div>
            </Container>

        </div>
    )
}

export default Home;
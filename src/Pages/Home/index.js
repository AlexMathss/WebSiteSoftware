
import { Box, Input, Button, Image, Container, CardHeader, Card, CardBody, Text } from "@chakra-ui/react";
import { IoShieldCheckmark, IoHeadset } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";

import "../Home/index.css";

import myImage from '../../imagens/dashboard.png';
import arrow from '../../imagens/arrow-icon.svg';
import impressions from '../../imagens/impressions.png';
import logo_1 from '../../imagens/logo_1.png';
import logo_2 from '../../imagens/logo_2.png';
import logo_3 from '../../imagens/logo_3.png';
import logo_4 from '../../imagens/logo_4.png';
import logo_5 from '../../imagens/logo_5.png';
import advanced from '../../imagens/advanced.png';
import chat from '../../imagens/chat.png';
import robo from '../../imagens/robo.png';


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

            <Container className="box-4">
                <Box className="impressions-box">
                    <div className="impressions-content">
                        <h1 style={{fontSize: 48}}>Mais impressões, mais conversões</h1>
                        <p style={{fontSize: 16, lineHeight: '150%'}}>
                            Estamos comprometidos em aumentar a visibilidade da sua marca com mais impressões, resultando
                            em mais conversões para o seu negócio. Nossa abordagem estratégica maximiza o alcance e a
                            eficácia das suas campanhas, garantindo resultados excepcionais.
                        </p>

                        <Button className="free-trial">
                            Teste Grátis
                        </Button>
                    </div>
                    <div className="imagem">
                        <Image src={impressions}/>
                    </div>
                </Box>
            </Container>

            <Box className="sub-footer">
                <Image src={logo_1}/>
                <Image src={logo_2}/>
                <Image src={logo_3}/>
                <Image src={logo_4}/>
                <Image src={logo_5}/>
            </Box>

            <Container className="box-5">
                <h1 style={{fontSize: 48}}>Features</h1>
                <Box className="features">
                    <Card className="card-feature">
                        <CardHeader>
                            <Image src={advanced}/>
                        </CardHeader>
                        <CardBody style={{height: 183, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                            <Text>Criptografia avançada de 246 bits</Text>
                            <Text>
                                Apresentamos nossa solução de criptografia avançada de 246 bits, garantindo máxima segurança
                                para seus dados sensíveis. Com tecnologia de ponta, protegemos suas informações contra ameaças
                                cibernéticas.
                            </Text>
                        </CardBody>
                    </Card>
                    <Card className="card-feature">
                        <CardHeader>
                            <Image src={chat}/>
                        </CardHeader>
                        <CardBody style={{height: 183, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                            <Text>Ferramentas de colaboração simples</Text>
                            <Text>
                                Nossa empresa oferece ferramentas de colaboração simples, facilitando o trabalho em equipe e a
                                comunicação. Com uma interface intuitiva e recursos eficientes, sua equipe pode compartilhar ideias
                                e documentos com facilidade. Simplifique a colaboração e aumente a produtividade com nossas soluções.
                            </Text>
                        </CardBody>
                    </Card>
                    <Card className="card-feature">
                        <CardHeader>
                            <Image src={robo}/>
                        </CardHeader>
                        <CardBody style={{height: 183, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                            <Text>Recursos de IA personalizáveis</Text>
                            <Text>
                                Descubra nosso produto com recursos de IA personalizáveis, projetado para atender ás
                                necessidades específicas do seu negócio. Otimize processos, melhore a tomada de decisões e 
                                ofereça experiência únicas aos clientes.
                            </Text>
                        </CardBody>
                    </Card>
                </Box>
            </Container>

        </div>
    )
}

export default Home;
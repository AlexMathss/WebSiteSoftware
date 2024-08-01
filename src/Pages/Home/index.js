
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
import divider from '../../imagens/divider.png';
import gabriel from '../../imagens/gabriel.png';
import rafael from '../../imagens/rafael.png';
import leonardo from '../../imagens/leonardo.png';
import logo from '../../imagens/logo.png';
import twitter from '../../imagens/twitter.png';
import facebook from '../../imagens/Facebook.png';
import instagram from '../../imagens/Instagram.png';
import linkedin from '../../imagens/LinkedIn.png';


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
                        <Image src={advanced} style={{width:56, height: 56}}/>
                        <CardHeader>
                            <Text className="card-header-text">Criptografia avançada de 246 bits</Text>
                        </CardHeader>
                        <CardBody className="card-body-feature">
                            <Text style={{lineHeight: '150%', fontSize: 18}}>
                                Apresentamos nossa solução de criptografia avançada de 246 bits, garantindo máxima segurança
                                para seus dados sensíveis. Com tecnologia de ponta, protegemos suas informações contra ameaças
                                cibernéticas.
                            </Text>
                        </CardBody>
                    </Card>
                    <Image src={divider} style={{width: 2, height: 263}}/>
                    <Card className="card-feature">
                        <Image src={chat} style={{width: 56, height: 56}}/>
                        <CardHeader>
                            <Text className="card-header-text">Ferramentas de colaboração simples</Text>
                        </CardHeader>
                        <CardBody className="card-body-feature">
                            <Text style={{lineHeight: '150%', fontSize: 18}}>
                                Nossa empresa oferece ferramentas de colaboração simples, facilitando o trabalho em equipe e a
                                comunicação. Com uma interface intuitiva e recursos eficientes.
                            </Text>
                        </CardBody>
                    </Card>
                    <Image src={divider} style={{width: 2, height: 263}}/>
                    <Card className="card-feature">
                        <Image src={robo} style={{width: 56, height: 56}}/>
                        <CardHeader>
                            <Text className="card-header-text">Recursos de IA personalizáveis</Text>
                        </CardHeader>
                        <CardBody className="card-body-feature">
                            <Text style={{lineHeight: '150%', fontSize: 18}}>
                                Descubra nosso produto com recursos de IA personalizáveis, projetado para atender ás
                                necessidades específicas do seu negócio.
                            </Text>
                        </CardBody>
                    </Card>
                </Box>
            </Container>

            <Container className="box-6">
                <Box className="comments">
                    <h1>Os resultados impressionantes que<br/> nossos clientes experimentaram</h1>
                    <Box className="box-cards">
                        <Card className="card-comment">
                            <CardHeader style={{width: 283, height: 190}}>
                                <Text style={{fontSize: 18, fontWeight: 'bolder'}}>
                                    "Estou impressionado com a eficiência do software! A ferramenta de análise de leads<br/>
                                    aumentou nossa produtividade em 30%. O suporte ao cliente é excelente e sempre disponível<br/>
                                    para ajudar. Recomendo para qualquer empresa ue queira otimizar suas vendas!"
                                </Text>
                            </CardHeader>
                            <CardBody>
                                <Image src={gabriel} style={{width: 56, height: 56}}/>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Gabriel</Text>
                                <Text style={{fontSize: 12}}>CEO</Text>
                            </CardBody>
                        </Card>
                        <Card className="card-comment">
                            <CardHeader style={{width: 283, height: 190}}>
                                <Text style={{fontSize: 18, fontWeight: 'bolder'}}>
                                    "A segurança dos dados é uma prioridade para nós, e a solução de criptografia de 246<br/>
                                    bits oferecida por esta empresa é simplesmente a melhor. A equipe foi super atenciosa e<br/>
                                    personalizou tudo de acordo com nossas necessidades. Excelente serviço!"
                                </Text>
                            </CardHeader>
                            <CardBody>
                                <Image src={leonardo} style={{width: 56, height: 56}}/>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Leonardo</Text>
                                <Text style={{fontSize: 12}}>Marketing Manager</Text>
                            </CardBody>
                        </Card>
                        <Card className="card-comment">
                            <CardHeader style={{width: 283, height: 190}}>
                                <Text style={{fontSize: 18, fontWeight: 'bolder'}}>
                                    "Adorei a simplicade das ferramentas de colaboração! Facilitou muito o trabalho
                                    em equipe, e a integração com outras plataformas foi suave. A personalização com IA nos
                                    ajudou a automatizar processos complexos. Parabéns pelo serviço de qualidade!"
                                </Text>
                            </CardHeader>
                            <CardBody>
                                <Image src={rafael} style={{width: 56, height: 56}}/>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rafael</Text>
                                <Text style={{fontSize: 12}}>CTO</Text>
                            </CardBody>
                        </Card>
                    </Box> 
                </Box>
            </Container>

            <Container className="box-7">
                <Box className="box-pricing">
                    <Text className="pricing-title">
                        Você está pronto para expandir seu<br/>
                        negócio conosco?
                    </Text>
                    <Text className="princing-subtitle">
                        Garanta agora a melhor solução para suas necessidades! Clique aqui e aproveite nossa oferta especial!
                    </Text>
                    <Button className="pricing-button">
                        Veja o Preço
                    </Button>
                </Box>
            </Container>

            <Container className="box-8">
                <Box className="footer-content">
                    <Card className="company-link">
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ffffff'}}>Company</Text>
                        <Text>Sobre nós</Text>
                        <Text>Por que nos escolher?</Text>
                        <Text>Preços</Text>
                        <Text>Testemunhos</Text>
                    </Card>
                    <Card className="resources-link">
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ffffff'}}>Resources</Text>
                        <Text>Política de Privacidade</Text>
                        <Text>Termos e Condições</Text>
                        <Text>Blog</Text>
                        <Text>Contate-nos</Text>
                    </Card>
                    <Card className="product-link">
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ffffff'}}>Produtos</Text>
                        <Text>Gerenciamento de Projetos</Text>
                        <Text>Controlador de Tempo</Text>
                        <Text>Cronograma</Text>
                        <Text>Geração de Leads</Text>
                        <Text>Colaboração Remota</Text>
                    </Card>
                    <Card className="subscribe">
                        <CardHeader className="subscribe-header">
                            <Image src={logo} style={{width: 139.43, height: 32}}/>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FFFFFF'}}>Assine nossas notícias</Text>
                        </CardHeader>
                        <CardBody className="subscribe-footer">
                            <Input placeholder="Digite seu e-mail" className="input-footer"/>
                            <Button className="subscribe-button">
                                Inscreva-se
                            </Button>
                        </CardBody>
                    </Card>
                </Box>
                <Box className="box-copy">
                    <div className="separator"/>
                    <Text style={{fontSize: 12, color: '#FFFFFF'}}> &copy; CopyRight Finsweet 2022</Text>
                    <Box className="box-social">
                        <Image src={facebook} className="social-img"/>
                        <Image src={twitter} className="social-img"/>
                        <Image src={instagram} className="social-img"/>
                        <Image src={linkedin} className="social-img"/>
                    </Box>
                    <div className="separator"/>
                </Box>
            </Container>

        </div>
    )
}

export default Home;
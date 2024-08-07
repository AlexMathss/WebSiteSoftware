
import { Box, Input, Button, Image, Container, CardHeader, Card, CardBody, Text } from "@chakra-ui/react";

import "../Product/index.css";

import productimg from '../../imagens/product-bord.png';
import logo_1 from '../../imagens/logo_1.png';
import logo_2 from '../../imagens/logo_2.png';
import logo_3 from '../../imagens/logo_3.png';
import logo_4 from '../../imagens/logo_4.png';
import logo_5 from '../../imagens/logo_5.png';
// ------------------
import security from '../../imagens/1.svg';
import features from '../../imagens/2.svg';
import collaborate from '../../imagens/3.svg';
import sync from '../../imagens/4.svg';
import ia from '../../imagens/5.svg';
import notes from '../../imagens/6.svg';

function Product(){
    return(
        <div className="main-container">

            <Container className="box-1">
                <Container className="product-container">
                    <Box className="product-inicio">
                        <Text style={{fontSize: 56, fontWeight: 'bold'}}>
                            Aumente suas vendas e serviços
                        </Text>
                        <Text style={{fontSize: 18}}>
                            Impulsionamos vendas e serviços empresariais com análise de dados, estratégias de marketing
                            personalizadas e tecnologia avançada, maximizando conversões e retornos sobre investimento.
                        </Text>
                        <Box className="product-button">
                            <Button className="button-iniciar">
                                Iniciar
                            </Button>
                            <Button className="button-contact">
                                Contate-nos
                            </Button>
                        </Box>
                    </Box>
                    <Image src={productimg} style={{width: 616, height: 401}}/>
                </Container>
                
                <Box className="sub-footer">
                    <Image src={logo_1}/>
                    <Image src={logo_2}/>
                    <Image src={logo_3}/>
                    <Image src={logo_4}/>
                    <Image src={logo_5}/>
                </Box>
                
            </Container>

            <Container className="box-2">
                <Container className="service-container">
                    <Box className="box-title">
                        <Text style={{fontSize: 48, fontWeight: "bold"}}>
                            Tire o melhor proveito da sua empresa<br/> com o nosso serviço
                        </Text>
                    </Box>

                    <Box className="service-box">
                        <Container className="grid-container">
                            <Box className="service-description">
                                <Image src={security} className="img-description"/>
                                <Text className="service-title">Segurança e Privacidade</Text>
                                <Text className="service-span">
                                    Garantindo a máxima segurança contra ameaças cibernéticas.
                                </Text>
                            </Box>
                            <Box className="service-description">
                                <Image src={features} className="img-description"/>
                                <Text className="service-title">Recursos IA Integrados</Text>
                                <Text className="service-span">
                                    Oferece personalização avançada e automação inteligente para processos empresariais.
                                </Text>
                            </Box>
                            <Box className="service-description">
                                <Image src={collaborate} className="img-description"/>
                                <Text className="service-title">Colaborar com outros</Text>
                                <Text className="service-span">
                                    Ferramentas intuitivas para facilitar o trabalho em equipe de maneira eficiente
                                </Text>
                            </Box>
                        </Container>
                        <Container className="grid-container">
                            <Box className="service-description">
                                <Image src={sync} className="img-description"/>
                                <Text className="service-title">Sincronização em tempo real</Text>
                                <Text className="service-span">
                                    Assegura que todos os dados e arquivos estejam atualizados em todos os dispositivos.
                                </Text>
                            </Box>
                            <Box className="service-description">
                                <Image src={ia} className="img-description"/>
                                <Text className="service-title">NovaLogic IA</Text>
                                <Text className="service-span">
                                    É uma avançado produto de inteligência artificial projetado para transformar e otimizar processos.
                                </Text>
                            </Box>
                            <Box className="service-description">
                                <Image src={notes} className="img-description"/>
                                <Text className="service-title">Fácil organização de notas</Text>
                                <Text className="service-span">
                                    Permite capturar, classificar e acessar informações rapidamente, garantindo que nada seja perdido.
                                </Text>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Container>

        </div>
    )
}

export default Product;
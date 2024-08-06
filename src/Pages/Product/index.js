
import { Box, Input, Button, Image, Container, CardHeader, Card, CardBody, Text } from "@chakra-ui/react";

import "../Product/index.css";

import productimg from '../../imagens/product-bord.png';
import logo_1 from '../../imagens/logo_1.png';
import logo_2 from '../../imagens/logo_2.png';
import logo_3 from '../../imagens/logo_3.png';
import logo_4 from '../../imagens/logo_4.png';
import logo_5 from '../../imagens/logo_5.png';

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

        </div>
    )
}

export default Product;

import { Box, Input, Button, Image } from "@chakra-ui/react";
import "../Home/index.css";
import myImage from '../../imagens/dashboard.png';

function Home(){
    return(
        <div className="main-container">

            <Box className="box-1">
                
                <h2 className="title">O melhor Software para aumentar<br/>suas Vendas e Serviços</h2>
                <p className="subtitle">Este software inovador otimiza processos de vendas e serviços, impulsionando o crescimento<br/>
                    e a eficiência. Aumente suas conversões e melhore a satisfação do cliente com nossa tecnologia
                </p>
                

                <div className="input-container">
                    <Input placeholder="Adicione seu E-mail" className="email-input"/>
                    <Button className="teste-button">Teste Gratuito</Button>
                </div>
            </Box>

            <Box className="imagem-teste">
                <Image src={myImage} boxSize={'100%'}/>
            </Box>

        </div>
    )
}

export default Home;
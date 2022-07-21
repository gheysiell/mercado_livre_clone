import React from 'react'
import tShirtImage from '../../assets/tshirt.png'
import SellerInfo from '../SellerInfo'
import ProductAction from '../ProductAction'
import { 
    Container,
    Row,
    Panel,
    Column,
    Gallery,
    Section,
    Description
} from './styles'

const Product: React.FC = () => {
    return (
        <Container>
            <Row>
                <a href="#">Compartilhar</a>
                <a href="#">Vender um igual</a>
            </Row>

            <Panel>
                <Column>
                    <Gallery>
                        <img alt='T-shirt' src={tShirtImage} />
                    </Gallery>
                    <Info />
                </Column>

                <Column>
                    <ProductAction/>
                    <SellerInfo/> 

                    <WarrantySection />
                    <WarrantySection />
                    <WarrantySection />
                </Column>
            </Panel>
        </Container>
    )
}

const Info = () => {
    return (
        <Description>
            <h2>Descrição</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam augue lacus, molestie imperdiet ex at, rhoncus venenatis leo. Suspendisse ex tellus, 
                sodales feugiat justo nec, vehicula ultrices neque. Donec auctor elementum est, dictum tempus metus. Curabitur vehicula dolor nec mauris vestibulum 
                accumsan. Ut congue scelerisque nibh non pharetra. Maecenas sed quam quis libero aliquam consequat. Duis fringilla mollis lorem, ac consequat orci
                auctor quis. Donec tincidunt odio in elit efficitur, vulputate finibus lorem condimentum.
                <br/>
                <br/>
                Itens inclusos: <br/>
                - 1x LED <br/>
                - 1x LED <br/>
                - 1x LED <br/>
                - 1x LED <br/>
                - 1x LED <br/>                        
                <br/>
                Mauris ex tortor, placerat vel urna eu, luctus hendrerit est. Pellentesque scelerisque cursus consequat. Integer nibh lorem, rhoncus vitae nunc eu, 
                pretium elementum nulla. Pellentesque ullamcorper neque vel eleifend vulputate. Integer faucibus dapibus iaculis. Proin tincidunt est vitae laoreet interdum. 
                Mauris maximus nunc nulla, id fringilla odio vehicula at. Nunc mollis quam vitae mauris dictum, eget tristique lorem lacinia.
            </p>
        </Description>
    )
}

const WarrantySection = () => {
    return(
        <Section>
            <h4>Garantia</h4>
            <div>
                <span>
                    <p className="title">Compra garantida com o Lorem Ipsum</p>
                    <p className="description">
                        Receba o produto que você está esperando ou receba o seu dinheiro
                    </p>
                </span>
                <span>
                    <p className="title">Garantia do vendedor</p>
                    <p className="description">
                        Sem garantia
                    </p>
                </span>
            </div>
            <a href='#'>Saiba mais sobre garantia</a>
        </Section>
    )
}

export default Product
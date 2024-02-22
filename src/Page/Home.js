import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const data = {
    Promo:
    [
        {
            id:'1',
            title:'Special Avocado Slushie',
            description:'Selling at $3.50 (USP $4.00)',
            pic:'./offer1.jpg'
        },

        {
            id:'2',
            title:'Free dumpling',
            description:'Extra free dumpling with any noddle ordered',
            pic:'./offer2.jpg'
        },

        {
            id:'3',
            title:'Ching Teng',
            description:'Special Price of $2.00 USP($2.20)',
            pic:'./offer3.jpg'
        },

        {
            id:'4',
            title:'Dessert',
            description:'50 cents off every purchase',
            pic:'./offer4.jpg'
        },

        {
            id:'5',
            title:'Extra Ingredients',
            description:'For any noodle dishes',
            pic:'./offer5.jpg'
        },

        {
            id:'6',
            title:'Drinks',
            description:'20 cents off every two drinks',
            pic:'./offer6.jpg'
        },

        {
            id:'7',
            title:'Yong Tau Foo',
            description:'1 Free Fishball per bowl',
            pic:'./offer7.jpg'
        },

        {
            id:'8',
            title:'Iced Tea',
            description:'$1.00 for Honey Earl Grey/Jasmine Green Tea',
            pic:'./offer8.jpg'
        },

        {
            id:'9',
            title:'Iced Tea',
            description:'$1.00 for Honey Earl Grey/Jasmine Green Tea',
            pic:'./offer8.jpg'
        },
        {
            id:'10',
            title:'Iced Tea',
            description:'$1.00 for Honey Earl Grey/Jasmine Green Tea',
            pic:'./offer8.jpg'
        },
        {
            id:'11',
            title:'Iced Tea',
            description:'$1.00 for Honey Earl Grey/Jasmine Green Tea',
            pic:'./offer8.jpg'
        },
        {
            id:'12',
            title:'Iced Tea',
            description:'$1.00 for Honey Earl Grey/Jasmine Green Tea',
            pic:'./offer8.jpg'
        }



    ]
}


export default function Home() {
    return (
      <>
        <Container>
            <Row style={{backgroundColor:'#ffddd0', margin:"10px"}}>
                <Row><h3 style={{textAlign:'center'}}>Recommendation</h3></Row>
                <Row><p style={{textAlign:'center'}}>Dishes and Stores that others have enjoyed</p></Row>
                <Row>
                <Carousel style={{margin:"auto", width:"30%"}}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./slide1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>MMH Tiffin Centre, 01-15</h3>
                    <p>Craving for scrumptious briyani, prata or dosai?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./slide2.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Hylam Street Old Coffee</h3>
                    <p>Counting down to the weekend, what better way to enjoy lunch with a post meal snack! </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./slide3.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>MJ Cafe</h3>
                    <p>Featuring ginger tea from MJ Cafe, always heartwarming to drink</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </Row>
            </Row>

            <Row style={{border: '1px solid black', borderRadius:'20px'}}>
                <Row><h3 style={{backgroundColor:"lemonchiffon", borderRadius:'20px 0px 0px 0px', width:'200px'}}>Promotion</h3></Row>
                <Row>
                    <p>Stay up-to-date with our latest deals and offers!</p>
                </Row>
                <Row>
                <div className="promoRow">

                {
                data.Promo.map(promoItem=>
                    (
                    <div className="promoCardContainer">
                        <Card className="promoCard" sm={{width:0.1}}>
                            <Card.Img src={promoItem.pic} className="promoImg"/>
                            <Card.Body className="promoBody">
                                <Card.Title>{promoItem.title}</Card.Title>
                                <Card.Text className="promoText">{promoItem.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    )
                    )
                }

                </div>
                </Row>
            </Row>
        </Container>

      </>
    );
  }
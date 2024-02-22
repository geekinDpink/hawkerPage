import React from "react";
import Card from 'react-bootstrap/Card';

export default function StallCard({stall,handleShow, setModalStall})
{
    const handleClick = (event) => {
        let elementID = event.target.getAttribute('id');
        setModalStall(stall);
        handleShow(true);
        console.log(stall.stallname);
    };

    return(
        <>
            <Card className="stallCard" key={stall.stallname} id={stall.stallname} style={{width:"31%", margin:"1.1%"}} onClick={(e) => handleClick(e)}>
                <Card.Img src={stall.stallpic} alt="Card image" style={{height:"60%"}}/>
                <Card.Body className="stallBody">
                    <Card.Title>{stall.stallname}</Card.Title>
                    <Card.Text className="stallText">{stall.description}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}




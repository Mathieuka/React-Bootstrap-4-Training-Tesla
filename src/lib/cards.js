import React from 'react'; 
import { Card, Button, CardDeck, } from 'react-bootstrap';




const Cards = (props) => {
    const {title} = props;
    const {nbCards} = props;
    let arr = [];
    let {aImage, aText, head ,subtitle} = props

    for(let i = 0; i < nbCards; i++){
        if(aText[i]){
            arr.push(
                <Card key={i} >
                    <Card.Img variant="top" src={aImage[i] ? aImage[i] : 'http://ekladata.com/Wy0zkii5_9bchreVixxvv0_E5Xc@550x388.jpg'} />
                    <Card.Body className='bg-dark text-white'>
                        {head[i] != '' ? <Card.Header className='bg-dark'>{head[i]}</Card.Header> : false}
                        <Card.Title className='pt-3'>{subtitle[i] != '' ? subtitle[i] : false}</Card.Title>
                        <Card.Text>
                            {aText[i]}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            )
        }   
    }
    return ( 
        <CardDeck className='mb-5 w-50 mx-auto'>
            {arr.map(card=>card)}
        </CardDeck>
        
        
     );
}
 
export default Cards;




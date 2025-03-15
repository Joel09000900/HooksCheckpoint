import React from 'react';
import Card from 'react-bootstrap/Card';


const MovieCard = ({titre , description , Image , note}) => {
    return (

        <div className='d-flex justify-content-center'>
        <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={Image}  />
        <Card.Body>
          <Card.Title>{titre}</Card.Title>
          <Card.Text>
            
            <strong>Description:</strong> {description}<br /> 
            <strong>Note:</strong> {note}
            
          </Card.Text>
        </Card.Body>
        
      </Card>
        </div>
    );
}

export default MovieCard;

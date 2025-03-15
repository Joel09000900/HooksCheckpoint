import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import MovieDescription from './MovieDescription';



const MovieCard = ({ titre, description, Image, note, id }) => {
    return (
        <div className='d-flex justify-content-center'>
            <Card style={{ width: '18rem', margin: '1rem' }}>
               <Link to="/movie/:id"> <Card.Img variant="top" src={Image} /> </Link> 
                <Card.Body>
                    <Card.Title>{titre}</Card.Title>
                    <Card.Text>
                        <strong>Description:</strong> {description}<br />
                        <strong>Note:</strong> {note} <br />
                        <Link to={`/movie/${id}`}>En savoir plus</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;

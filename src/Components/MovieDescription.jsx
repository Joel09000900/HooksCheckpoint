import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const MovieDescription = () => {
    const { id } = useParams();
    const movies = [
        { id: '1', titre: 'Movie 1', description: 'Description of Movie 1', note: '5/5' },
        { id: '2', titre: 'Movie 2', description: 'Description of Movie 2', note: '4/5' },
        // Add more movies as needed
    ];
    const movie = movies.find(movie => movie.id === id) || { titre: 'Not Found', description: 'No description available', note: 'N/A' };

    const navigate = useNavigate();

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <Card style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img variant="top" src={movie.Image} />
                    <Card.Body>
                        <Card.Title>{movie.titre}</Card.Title>
                        <Card.Text>
                            <strong>Description:</strong> {movie.description}<br />
                            <strong>Note:</strong> {movie.note} <br />
                        </Card.Text>
                    </Card.Body>
                </Card>
                <button onClick={() => navigate('/')}>Retour à l'accueil</button>
            </div>
        </div>
    );
};

export default MovieDescription;

import { NavLink } from 'react-router';
import { Character } from '../../types/allCharacters';
import { Col, Card, CardBody, CardImage, CardTitle, CardText } from './styledCard';

type cardCharacterProps = {
    character: Character
}


export const CardCharacter = ({ character } : cardCharacterProps) => {
    return (
        <Col>
            <Card>
                <CardImage src={character.image} alt={character.name} />
                <CardBody>
                    <CardTitle>{character.name}</CardTitle>
                    <CardText>
                        <strong>Status:</strong> {character.status}
                    </CardText>
                    <NavLink to={`/personaje/${character.id}`}>más información</NavLink>
                </CardBody>
            </Card>
        </Col>
    )
}
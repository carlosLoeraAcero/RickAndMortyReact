import { NavLink } from 'react-router';
import { Character } from '../../types/allCharacters';

type cardCharacterProps = {
    character: Character
}


export const CardCharacter = ({ character } : cardCharacterProps) => {
    return (
        <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card h-100">
                <img src={character.image} className="card-img-top" alt={character.name} />
                <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                    <strong>Status:</strong> {character.status}
                </p>
                <NavLink to={'/personaje/'+ character.id}>mas información</NavLink>
                </div>
            </div>
        </div>
    )
}
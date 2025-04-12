import { EpisodeInfo } from '../../types';
import { Col, Card, CardBody, CardTitle, CardText } from '../Characters/styledCard';

type CardEpisodeProps = {
    episode: EpisodeInfo
}

export const CardEpisode = ({ episode } : CardEpisodeProps) => {
    return (
        <Col>
            <Card>
                <CardBody>
                    <CardTitle>{episode.name}</CardTitle>
                    <CardText>
                        <strong>Episodio:</strong> {episode.episode}
                    </CardText>
                    <CardText>
                        <strong>Fecha de estreno:</strong> {episode.air_date}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )
}
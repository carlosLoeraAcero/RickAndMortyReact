import { EpisodeInfo } from '../../types';

type CardEpisodeProps = {
    episode: EpisodeInfo
}

export const CardEpisode = ({ episode } : CardEpisodeProps) => {
    return (
        <div className="col-6 col-md-3 mb-4 text-center" key={episode.id}>
            <div className="card h-100">
                <div className="card-body">
                <h5 className="card-title">{episode.name}</h5>
                <p className="card-text">
                    <strong>Episodio:</strong> {episode.episode}
                </p>
                <p className="card-text">
                    <strong>Fecha de estreno:</strong> {episode.air_date}
                </p>
                </div>
            </div>
        </div>
    )
}
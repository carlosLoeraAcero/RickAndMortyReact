import { useParams } from "react-router";
import { useFetch } from "../../Hooks/useFetch";
import { onlyCharacter } from "../../types";
import { Loader } from "../Loader";

type Params = {
    id: string;
  };

export const DetailCharacter = () => {
    let params = useParams<Params>();
    const { data, isLoading, error } = useFetch<onlyCharacter>(`https://rickandmortyapi.com/api/character/${params.id}`)

    console.log(data?.name)

    return(
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 d-flex">
                                <img 
                                    src={data?.image} 
                                    className="img-fluid rounded-start w-100 h-100" 
                                    alt={data?.name}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{data?.name}</h5>
                                    <p className="card-text">Especie: {data?.species}</p>
                                    <p className="card-text">Género: {data?.gender}</p>
                                    <p className="card-text">Origen: {data?.origin.name}</p>
                                    <p className="card-text">Dirección: {data?.location?.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    isLoading && <Loader />
                }
            </div>
        </div>

    )
}
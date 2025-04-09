import { useEffect, useState } from 'react';
import { useFetch } from '../../Hooks/useFetch'
import { CardCharacter } from './CardCharacter';
import { AllData } from '../../types';
import { Loader } from '../Loader';
import { Pager } from '../Pager';

export const AllCharacters = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [ inputSearch, setInputSearch ] = useState('');
    const [searchUrl, setSearchUrl] = useState<string>(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
    const { data, error, isLoading } = useFetch<AllData>(searchUrl);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (inputSearch) {
            setSearchUrl(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${inputSearch}`);
        } else {
            setSearchUrl(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
        }
    }, [inputSearch, currentPage]);

    return(
        <div className="container">
            <div className='row my-2'>
                <div className="col-6 col-md-4 ms-auto">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder='Buscar por nombre' 
                        value={inputSearch} 
                        onChange={(e) => setInputSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="row my-4">
                {
                    data?.results && data.results.map((character) => {
                        return(
                            <CardCharacter key={character.id} character={character} />
                        )
                    })
                }
                {isLoading && <Loader />}
                {error && <div>{error}</div>}
            </div>
            <Pager
                currentPage={currentPage}
                totalPages={data?.info.pages || 1}
                onPageChange={handlePageChange}
            />
        </div>
    )
}
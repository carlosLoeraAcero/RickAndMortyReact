import { useState } from 'react';
import { useFetch } from '../../Hooks/useFetch';
import { ApiResponseEpisodes } from '../../types';
import { CardEpisode } from './CardEpisode';
import { Loader } from '../Loader';
import { Pager } from '../Pager';

export const AllEpisodes = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data, isLoading, error } = useFetch<ApiResponseEpisodes>(`https://rickandmortyapi.com/api/episode?page=${currentPage}`);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="container my-4">
                <div className="row">
                    {
                        data?.results.map(( episode ) => {
                            return(
                               <CardEpisode episode={episode} key={episode.id}/>
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
        </>
    )
}
import { Route, Routes } from "react-router"
import { AllCharacters } from "../Components/Characters/AllCharacters"
import { MyNavbar } from "../Components/MyNavBar"
import { AllEpisodes } from "../Components/Episodes/AllEpisodes"
import { DetailCharacter } from "../Components/Characters/DetailCharacter"


export const HomeRouter = () => {
    return(
        <>
            <MyNavbar />
            <Routes>
                <Route path='/episodios' element={<AllEpisodes />}/>
                <Route path='/personajes' element={<AllCharacters />}/>
                <Route path="personaje/:id" element={<DetailCharacter />} />
                <Route path='/*' element={<AllCharacters />}/>
            </Routes>
        </>
    )
}
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import SimpsonApi from "../services/SimpsonAPI.js";
import CharacterSlider from "../components/CharacterSlider.jsx";
import EpisodesSlider from "../components/EpisodesSlider.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		SimpsonApi.getCharacters().then(data => dispatch({
			type: "setCharacters",
			payload: data.results
		}))
			.catch(error => console.error("Error cargando personajes:", error));
	}, []);

	useEffect(() => {
		SimpsonApi.getEpisodes().then(data => dispatch({
			type: "setEpisodes",
			payload: data.results
		}))
			.catch(error => console.error("Error cargando personajes:", error));
	}, []);
	

	return (
		<div className="container mt-5">
			{store.characters?.length > 0 && (
				<CharacterSlider characters={store.characters} />
			)}

			{store.episodes?.length > 0 && (
				<EpisodesSlider episodes={store.episodes} />
			)}

		</div>
	);
};
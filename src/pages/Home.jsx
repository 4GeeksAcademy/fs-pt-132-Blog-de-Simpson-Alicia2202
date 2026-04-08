import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import SimpsonApi from "../services/SimpsonAPI.js";
import CharacterSlider from "../components/CharacterSlider.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		SimpsonApi.getCharacters().then(data => dispatch({
			type: "set_characters",
			payload: data.docs || []
		}))
			.catch(error => console.error("Error cargando personajes:", error));
	}, []);
	

	return (
		<div className="container mt-5">
			{store.characters?.length > 0 && (
				<CharacterSlider characters={store.characters} />
			)}

		</div>
	);
};
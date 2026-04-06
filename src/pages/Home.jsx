import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import DisneyApi from "../services/DisneyAPI.js";
import CharacterCard from "../components/CharacterCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	// useEffect(() => {
	// 	DisneyApi.getCharacters().then(data => dispatch({
	// 		type: "set_characters",
	// 		payload: data.data || data
	// 	}))
	// 	.catch(error => console.error("Error cargando personajes:", error));
	// }, []);
	useEffect(() => {
		DisneyApi.getCharacters().then(data => {
			if (data && Array.isArray(data)) {
				// Filtro ultra-sencillo: solo que tenga imageUrl
				const cleanData = data.filter(char => char.imageUrl);

				dispatch({
					type: "set_characters",
					payload: cleanData
				});
			}
		}).catch(err => console.error("Error en Home:", err));
	}, []);

	return (
		<div className="container mt-5">
			<p className="text-muted">Personajes encontrados: {store.characters?.length || 0}</p><p className="text-muted">Personajes encontrados: {store.characters?.length || 0}</p>
			<div className="row">
				{store.characters?.map((character) => (
					<div className="col-md-4 mb-4" key={character._id}>
						<CharacterCard character={character} />
					</div>
				))}

			</div>
		</div>
	);
}; 
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import DisneyApi from "../services/DisneyAPI.js";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  useEffect(() => {
	DisneyApi.getCharacter().then (data => dispatch({
		type: "set_characters",
		payload: data
	}))
  }, []);

	return (
		<div className="text-center mt-5">
			{/* <CharacterCard */}

		</div>
	);
}; 
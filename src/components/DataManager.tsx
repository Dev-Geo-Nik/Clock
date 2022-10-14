import { useEffect, useState } from "react";
import { ActionTypes } from "../context/Actions";
import { useGeneralContext } from "../context/GeneralContext";

const DataManager: React.FC = () => {
	const [error, setError] = useState<any>(null);
	const { dispatch } = useGeneralContext();
	useEffect(() => {
		const fetchAnyApiCalls = async () => {
			const urls = ["https://programming-quotes-api.herokuapp.com/Quotes/random", "http://ip-api.com/json/"];
			try {
				const response = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
				const res = await fetch(`http://worldtimeapi.org/api/timezone/${response[1].timezone}`);
				const data = await res.json();
				// console.log(data);
				dispatch({ type: ActionTypes.FETCH_INITIAL_DATA, payload: { quotesData: response[0], geolocationData: response[1], timeData: data } });
			} catch (error: any) {
				setError(error.message);
				console.log("Error", error);
			}
		};
		fetchAnyApiCalls();
	}, [error]);
	return <></>;
};

export default DataManager;

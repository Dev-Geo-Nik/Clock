import { useEffect, useState } from "react";
import { ActionTypes } from "../context/Actions";
import { useGeneralContext } from "../context/GeneralContext";

const DataManager: React.FC = () => {
	const [error, setError] = useState<any>(null);
	const { dispatch } = useGeneralContext();
	useEffect(() => {
		const fetchAnyApiCalls = async () => {
			const urls = ["https://programming-quotes-api.herokuapp.com/Quotes/random", "https://geolocation-db.com/json/"];
			try {
				const response = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
				console.log(response[1]);
				const findTimezone = await fetch(`https://ipapi.co/${response[1].IPv4}/json/`);
				const findTimezoneData = await findTimezone.json();
				dispatch({ type: ActionTypes.FETCH_INITIAL_DATA, payload: { quotesData: response[0], geolocationData: response[1], timezoneData: findTimezoneData } });
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

import { useGeneralContext } from "../context/GeneralContext";
import styles from "./quote.module.scss";
import QuoteRefreshIcon from "../assets/img/desktop/icon-refresh.svg";
import { useFetch } from "../hooks/useFetch";
import { ActionTypes } from "../context/Actions";

const Quote: React.FC = () => {
	const {
		dispatch,
		state: { quote },
	} = useGeneralContext();
	const handleClick = async () => {
		try {
			const response = await fetch("https://programming-quotes-api.herokuapp.com/Quotes/random");
			const data = await response.json();
			dispatch({ type: ActionTypes.FETCH_NEW_QUOTE, payload: data });
		} catch (error) {}
	};
	return (
		<div className={styles.quote_container}>
			<div className={styles.quote_text_container}>
				<p className={styles.quote_text}>
					<q>{quote?.en}</q>
				</p>
				<img src={QuoteRefreshIcon} alt="" className={styles.quote_icon} onClick={handleClick} />
			</div>

			<p className={styles.quote_author}>{quote?.author}</p>
		</div>
	);
};

export default Quote;

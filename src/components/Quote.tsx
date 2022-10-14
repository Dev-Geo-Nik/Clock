import { useGeneralContext } from "../context/GeneralContext";
import styles from "./quote.module.scss";
import QuoteRefreshIcon from "../assets/img/desktop/icon-refresh.svg";
const Quote: React.FC = () => {
	const {
		dispatch,
		state: { quote },
	} = useGeneralContext();
	return (
		<div className={styles.quote_container}>
			<div className={styles.quote_text_container}>
				<p className={styles.quote_text}>
					<q>{quote.en}</q>
				</p>
				<img src={QuoteRefreshIcon} alt="" className={styles.quote_icon} />
			</div>

			<p className={styles.quote_author}>{quote.author}</p>
		</div>
	);
};

export default Quote;

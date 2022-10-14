import DataManager from "../../components/DataManager";
import { useGeneralContext } from "../../context/GeneralContext";

import styles from "./home.module.scss";
import Quote from "../../components/Quote";
// import DayBackgroundImage  from "../"

const Home: React.FC = () => {
	const {
		dispatch,
		state: { ipData, quote, timeData },
	} = useGeneralContext();

	let time;
	let displayBackground;
	if (timeData) {
		// We build the time from the unixtime
		time = new Date(timeData.unixtime * 1000).toLocaleTimeString();
		// We check if the time is day then we display the day div else the night background image div
		displayBackground = time?.includes("AM") ? <div className={`${styles.day_image} ${styles.bg_image}`}></div> : <div className={`${styles.night_image}  ${styles.bg_image}`}></div>;
	}

	return (
		<>
			<DataManager />
			<section className={styles.home}>
				{displayBackground}
				<Quote />
			</section>
		</>
	);
};

export default Home;

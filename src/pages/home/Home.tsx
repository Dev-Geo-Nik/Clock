import DataManager from "../../components/DataManager";
import { useGeneralContext } from "../../context/GeneralContext";

import styles from "./home.module.scss";
import Quote from "../../components/Quote";
import DisplayData from "../../components/DisplayData";
import ExtraDetails from "../../components/ExtraDetails";

const Home: React.FC = () => {
	const {
		dispatch,
		state: { ipData, quote, timeData, isModalOpen },
	} = useGeneralContext();
	console.log(isModalOpen);
	let displayBackground;
	let isDayTime = null;
	if (timeData) {
		// We build the time from the unixtime
		const time = new Date(timeData.unixtime * 1000).getHours();
		// We check if the time is day then we display the day div else the night background image div
		isDayTime = time > 6 && time < 20;
		displayBackground = isDayTime ? <div className={`${styles.day_image} ${styles.bg_image}`}></div> : <div className={`${styles.night_image}  ${styles.bg_image}`}></div>;
	}

	// console.log(timeData);

	return (
		<>
			<DataManager />
			<section className={styles.home}>
				{displayBackground}
				{isModalOpen ? null : <Quote />}
				<DisplayData isDayTime={isDayTime} ipData={ipData} timeData={timeData} />
				{isModalOpen && <ExtraDetails isDayTime={isDayTime} />}
			</section>
		</>
	);
};

export default Home;

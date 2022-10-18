import DataManager from "../../components/DataManager";
import { useGeneralContext } from "../../context/GeneralContext";

import styles from "./home.module.scss";
import Quote from "../../components/Quote";
import DisplayData from "../../components/DisplayData";
import ExtraDetails from "../../components/ExtraDetails";

const Home: React.FC = () => {
	const {
		dispatch,
		state: { ipData, isModalOpen },
	} = useGeneralContext();

	let displayBackground;
	let isDayTime = null;
	const time = new Date().getHours();

	isDayTime = time > 6 && time < 20;
	displayBackground = isDayTime ? <div className={`${styles.day_image} ${styles.bg_image}`}></div> : <div className={`${styles.night_image}  ${styles.bg_image}`}></div>;

	return (
		<>
			<DataManager />
			<section className={styles.home}>
				{displayBackground}
				{/* control the children with wrapper class */}
				<div className={styles.wrapper}>
					{!isModalOpen && <Quote />}
					<DisplayData isDayTime={isDayTime} ipData={ipData} />
				</div>
				{isModalOpen && <ExtraDetails isDayTime={isDayTime} />}
			</section>
		</>
	);
};

export default Home;

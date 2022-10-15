import styles from "./displayData.module.scss";
import DayIcon from "../assets/img/desktop/icon-sun.svg";
import NightIcon from "../assets/img/desktop/icon-moon.svg";
import ArrowDownIcon from "../assets/img/desktop/icon-arrow-down.svg";
import { useGeneralContext } from "../context/GeneralContext";
import { ActionTypes } from "../context/Actions";
interface Props {
	isDayTime: boolean | null;
	ipData: any;
	timeData: any;
}

const DisplayData: React.FC<Props> = ({ isDayTime, ipData, timeData }) => {
	// let displayIcon =
	const {
		state: { isModalOpen },
		dispatch,
	} = useGeneralContext();

	const handleClick = () => {
		dispatch({ type: ActionTypes.IS_MODAL_OPEN, payload: !isModalOpen });
	};

	const timeNow = new Date();
	const currentTime = timeNow.getHours() + ":" + timeNow.getMinutes();
	const zone = timeNow.toLocaleTimeString("default").includes("AM") ? "AM" : "PM";
	return (
		<section className={isModalOpen ? `${styles.text_context_container} ${styles.modal_open} ` : `${styles.text_context_container} ${styles.night_theme} `}>
			<div className={styles.day_message_container}>
				<img src={DayIcon} alt="" className={styles.icon} />
				<p className={styles.header}>Have a nice day, IT's Currently</p>
			</div>
			<p className={styles.time_text}>
				{currentTime}
				<span className={styles.time_text_span}>{zone}</span>
			</p>
			<div className={styles.location_container}>
				<p className={styles.location_text}>
					{ipData?.city}, {ipData?.country}
				</p>
				<div className={styles.btn_container} onClick={handleClick}>
					<span className={styles.btn_text}>More</span> <img src={ArrowDownIcon} className={styles.arrow_icon} alt="" />
				</div>
			</div>
		</section>
	);
};

export default DisplayData;

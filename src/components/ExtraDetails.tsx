import { useGeneralContext } from "../context/GeneralContext";
import styles from "./extraDetails.module.scss";
interface Props {
	isDayTime: boolean | null;
}

const ExtraDetails: React.FC<Props> = ({ isDayTime }) => {
	const {
		state: { ipData, quote, timeData, isModalOpen },
	} = useGeneralContext();

	console.log(timeData);
	const { day_of_year, day_of_week, week_number } = timeData;
	return (
		<div className={isDayTime ? `${styles.extra_details_container} ${styles.day_theme} ` : `${styles.extra_details_container} ${styles.night_theme} `}>
			<div className={styles.time_container}>
				<p className={styles.header}>Current Timezone</p>
				<p className={styles.value}>{ipData.timezone}</p>
				<p className={styles.header}>Day of the year</p>
				<p className={styles.value}>{day_of_year}</p>
			</div>
			<div className={styles.week_container}>
				<p className={styles.header}>Day of the week</p>
				<p className={styles.value}>{day_of_week}</p>
				<p className={styles.header}>Week number</p>
				<p className={styles.value}>{week_number}</p>
			</div>
		</div>
	);
};

export default ExtraDetails;

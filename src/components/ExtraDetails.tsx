import { useGeneralContext } from "../context/GeneralContext";
import { getNumberOfWeek } from "../utils/helpers";
import styles from "./extraDetails.module.scss";
interface Props {
	isDayTime: boolean | null;
}

const ExtraDetails: React.FC<Props> = ({ isDayTime }) => {
	const {
		state: { ipData, quote, isModalOpen, timezoneData },
	} = useGeneralContext();

	const dayOfYear = (date: any) => {
		// @ts-ignore
		return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
	};
	const day_of_the_year = dayOfYear(new Date());

	return (
		<div className={isDayTime ? `${styles.extra_details_container} ${styles.day_theme} ` : `${styles.extra_details_container} ${styles.night_theme} `}>
			<div className={styles.time_container}>
				<div className={styles.group}>
					<p className={styles.header}>Current Timezone</p>
					<p className={styles.value}>{timezoneData.timezone}</p>
				</div>
				<div className={styles.group}>
					<p className={styles.header}>Day of the year</p>
					<p className={styles.value}>{day_of_the_year}</p>
				</div>
			</div>
			<div className={styles.week_container}>
				<div className={styles.group}>
					<p className={styles.header}>Day of the week</p>
					<p className={styles.value}>{new Date().getDay()}</p>
				</div>
				<div className={styles.group}>
					<p className={styles.header}>Week number</p>
					<p className={styles.value}>{getNumberOfWeek()}</p>
				</div>
			</div>
		</div>
	);
};

export default ExtraDetails;

import './Component.css';
import styles from './Component.module.css';

console.log(styles);

function Component() {
	return (
		<>
			<div className="block">
				<h1 className="block__title">Component title from hz</h1>
				<p className="block__text">Lorem ipsum dolor sit amet.</p>
				<button className="block__btn">click me!</button>
			</div>

			<div className={styles.info}>
				<h2 className={styles.infoTitle}>info title </h2>
				<p className={styles.infoText}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
					cupiditate!
				</p>
			</div>
		</>
	);
}

export default Component;

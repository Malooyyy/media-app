import React from 'react'
import styles from './RightSide.module.css'
import user from '../../assets/bmw.one.jpg'

const RightSide = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.user}>
					<img src={user} className={styles.profileUserImg} />
					<div className={styles.userData}>
						<span>John Doe</span>
						<div className={styles.onlineDot} />
					</div>
				</div>
				<div className={styles.user}>
					<img src={user} className={styles.profileUserImg} />
					<div className={styles.userData}>
						<span>John Doe</span>
						<div className={styles.onlineDot} />
					</div>
				</div>
				<div className={styles.user}>
					<img src={user} className={styles.profileUserImg} />
					<div className={styles.userData}>
						<span>John Doe</span>
						<div className={styles.onlineDot} />
					</div>
				</div>
				<div className={styles.user}>
					<img src={user} className={styles.profileUserImg} />
					<div className={styles.userData}>
						<span>John Doe</span>
						<div className={styles.cstylesonlineDot} />
					</div>
				</div>
				<div className={styles.user}>
					<img src={user} className={styles.profileUserImg} />
					<div className={styles.userData}>
						<span>John Doe</span>
						<div className={styles.onlineDot} />
					</div>
				</div>
				<div className={styles.user}>
					<img src={user} className={styles.profileUserImg} />
					<div className={styles.userData}>
						<span>John Doe</span>
						<div className={styles.onlineDot} />
					</div>
				</div>
				<div className={styles.user}>
					<img src={user} className={styles.profileUserImg} />
					<div className={styles.userData}>
						<span>John Doe</span>
						<div className={styles.onlineDot} />
					</div>
				</div>
				<div className={styles.user}>
					<img src={user} className={styles.profileUserImg} />
					<div className={styles.userData}>
						<span>John Doe</span>
						<div className={styles.onlineDot} />
					</div>
				</div>
				<div className={styles.user}>
					<img src={user} className={styles.profileUserImg} />
					<div className={styles.userData}>
						<span>John Doe</span>
						<div className={styles.onlineDot} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default RightSide

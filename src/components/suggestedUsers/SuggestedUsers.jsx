import React from 'react'
import styles from './suggestedUsers.module.css'
import profileUserImg from '../../assets/por.1.jpg'
import man from '../../assets/bmw.one.jpg'

const SuggestedUsers = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.myProfile}>
					<img src={profileUserImg} className={styles.profileUserImg} alt='' />
					<div className={styles.profileData}>
						<span>WebDevMania</span>
						<span className={styles.shortBio}>Live is full of adventures</span>
					</div>
				</div>
				<div className={styles.suggestedUsers}>
					<h3 className={styles.title}>Recommended users to Follow</h3>
					<div className={styles.suggestedUser}>
						<img src={man} className={styles.imgUser} alt='' />
						<div className={styles.suggestedUserData}>
							<span>John Doe</span>
							<span className={styles.suggestedMsg}>Suggested to you</span>
						</div>
						<button className={styles.followBtn}>Follow</button>
					</div>
					<div className={styles.suggestedUser}>
						<img src={man} className={styles.imgUser} alt='' />
						<div className={styles.suggestedUserData}>
							<span>John Doe</span>
							<span className={styles.suggestedMsg}>Suggested to you</span>
						</div>
						<button className={styles.followBtn}>Follow</button>
					</div>
					<div className={styles.suggestedUser}>
						<img src={man} className={styles.imgUser} alt='' />
						<div className={styles.suggestedUserData}>
							<span>John Doe</span>
							<span className={styles.suggestedMsg}>Suggested to you</span>
						</div>
						<button className={styles.followBtn}>Follow</button>
					</div>
					<div className={styles.suggestedUser}>
						<img src={man} className={styles.imgUser} alt='' />
						<div className={styles.suggestedUserData}>
							<span>John Doe</span>
							<span className={styles.suggestedMsg}>Suggested to you</span>
						</div>
						<button className={styles.followBtn}>Follow</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SuggestedUsers

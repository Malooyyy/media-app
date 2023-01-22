import React from 'react'
import styles from './ProfileCard.module.css'
import profileUserImg from '../../assets/por.1.jpg'

const ProfileCard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<div className={styles.imgContainer}>
						<img src={profileUserImg} className={styles.profileUserImg} />
					</div>
					<div className={styles.usernameAndCreatedAt}>
						<p>
							<span>Username:</span> doskulov.mirbek
						</p>
						<p>
							<span>Created At:</span> 14th of January 2023
						</p>
					</div>
				</div>
				<hr />
				<div className={styles.bottom}>
					<p>
						Followers: <span>43123</span>
					</p>
					<p>
						Followings: <span>3274</span>
					</p>
				</div>
			</div>
			<h3 className={styles.myProfile}>My profile</h3>
		</div>
	)
}

export default ProfileCard

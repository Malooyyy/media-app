import React from 'react'
import styles from './home.module.css'
import Post from '../post/Post'
import RightSide from '../rightsite/RightSide'
import ProfileCard from '../profileCard/ProfileCard'
import SuggestedUsers from '../suggestedUsers/SuggestedUsers'

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<ProfileCard />
				<SuggestedUsers />
			</div>
			<Post />
			<RightSide />
		</div>
	)
}

export default Home

import React from 'react'
import styles from './navbar.module.css'
import { AiOutlineLogout, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import profileUserImg from '../../assets/por.1.jpg'

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<h3>Logo</h3>
				</div>
				<div className={styles.center}>
					<input type='text' placeholder='Search user...' />
					<AiOutlineSearch className={styles.searchIcon} />
				</div>
				<div className={styles.right}>
					<div className={styles.icons}>
						<AiOutlineUser />
						<AiOutlineLogout />
					</div>
					<img src={profileUserImg} className={styles.profileUserImg} />
				</div>
			</div>
		</div>
	)
}

export default Navbar

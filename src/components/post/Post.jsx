import React from 'react'
import styles from './post.module.css'
import profileUserImg from '../../assets/por.1.jpg'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMessageRounded } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'

const Post = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<div className={styles.topLeft}>
						<img src={profileUserImg} className={styles.profileUserImg} />
						<div className={styles.profileMetadata}>
							<span>doskulov.mirbek</span>
							<span>3 hours ago</span>
						</div>
					</div>
					<HiOutlineDotsVertical size={25} />
				</div>
				<div className={styles.center}>
					<div className={styles.desc}>My first post!</div>
					<img src={profileUserImg} className={styles.postImg} />
				</div>
				<div className={styles.controls}>
					<div className={styles.controlsLeft}>
						<AiOutlineHeart />
						<BiMessageRounded />
					</div>
					<div className={styles.controlsRight}>
						<BsBookmark />
					</div>
				</div>
				<div className={styles.comments}>
					<div className={styles.comment}>
						<div className={styles.commentLeft}>
							<img src={profileUserImg} className={styles.commentImg} />
							<div className={styles.commentData}>
								<span>doskulov.mirbek</span>
								<span className={styles.commentTimeago}>1 hour ago</span>
							</div>
							<div className={styles.commentText}>
								Nice post doskulov.mirbek!
							</div>
						</div>
						<div className={styles.commentRight}>
							<AiOutlineHeart />
							<span>5 likes</span>
						</div>
					</div>
					<div className={styles.comment}>
						<div className={styles.commentLeft}>
							<img src={profileUserImg} className={styles.commentImg} />
							<div className={styles.commentData}>
								<span>doskulov.mirbek</span>
								<span className={styles.commentTimeago}>1 hour ago</span>
							</div>
							<div className={styles.commentText}>
								Nice post doskulov.mirbek!
							</div>
						</div>
						<div className={styles.commentRight}>
							<AiOutlineHeart />
							<span>5 likes</span>
						</div>
					</div>
					<div className={styles.comment}>
						<div className={styles.commentLeft}>
							<img src={profileUserImg} className={styles.commentImg} />
							<div className={styles.commentData}>
								<span>doskulov.mirbek</span>
								<span className={styles.commentTimeago}>1 hour ago</span>
							</div>
							<div className={styles.commentText}>
								Nice post doskulov.mirbek!
							</div>
						</div>
						<div className={styles.commentRight}>
							<AiOutlineHeart />
							<span>5 likes</span>
						</div>
					</div>
				</div>
				<div className={styles.postCommentSection}>
					<input
						type='text'
						className={styles.inputSection}
						placeholder='Type here...'
					/>
					<button>Post</button>
				</div>
			</div>
		</div>
	)
}

export default Post

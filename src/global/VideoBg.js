import React from 'react'
import VideoBg from '../assets/img/ПРИРОДА КЫРГЫЗСТАНА_THE NATURE OF KYRGYZSTAN.mp4'

import BlogPost from '../Voice/BlogPost'
import '../components/Modal.css'
import Voice from '../Voice/Voice'

// import Clock from '../Clock/Clock'
import img from '../assets/img/MRSUN.png'

import Days from '../ui/Days'
import NewClock from '../Clock/NewClock'

const VideoBackground = () => {
	return (
		<div className='container'>
			<div className='main' style={{ backgroundColor: 'rgba(0,0,0,.4)' }}>
				<div className='container'>
					<div className='overlay'></div>
					<video
						style={{
							width: '125%',
							minHeight: '100%',
							marginTop: '-290px',
							marginleft: '-100px',
						}}
						className='video'
						src={VideoBg}
						autoPlay
						loop
						muted
					></video>

					<div className='content'>
						<img
							style={{
								position: 'absolute',
								width: '120px',
								boxShadow: '0px 5px 37px -19px rgba(255, 255, 255, 0.67) inset',
								marginLeft: '-10px',
								borderRadius: '50%',
								height: '120px',
								marginBottom: '580px',
							}}
							src={img}
							alt=''
						/>

						<h1
							style={{
								fontFamily: 'anton',
								position: 'absolute',
								color: 'white',
								fontWeight: '600',
								fontSize: '22px',

								marginBottom: '580px',
								marginLeft: '150px',
							}}
						>
							Ulan Nazi Saviia
							<br />
							Marsel Rahatbek.
						</h1>

						<div className='week-days'>
							<Days />
						</div>
						<div className='clock-pic'>
							{/* <Clock /> */}
							<div className='klock'>
								<NewClock />
							</div>
						</div>
						<div className='block'>
							<BlogPost />
							<Voice />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoBackground

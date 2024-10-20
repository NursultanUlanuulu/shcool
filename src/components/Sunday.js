import React, { useEffect, useState } from 'react'
import { useAppContext } from '../global/AppContext'
import '../App.css'
import muz16 from '../music/muz16.mp3'
import muz2 from '../music/AUD-20231219-WA0089.mp3'
import muz3 from '../music/au4.mp3'
import muz4 from '../music/тактеке.mp3'
import muz14 from '../music/kuu.mp3'
import muz5 from '../music/au7.mp3'
import muz6 from '../music/jjj.mp3'
import muz7 from '../music/балет.mp3'
import muz8 from '../music/дети.mp3'
import muz9 from '../music/йэйээ.mp3'
import muz10 from '../music/кай куну кай мезгилде .mp3'
import muz11 from '../music/карамельки.mp3'
import muz12 from '../music/кр тоолордун мекени.mp3'
import muz13 from '../music/кыргызстан.mp3'
import muz15 from '../music/учат в школе.mp3'
import muz17 from '../music/muz17.mp3'
import muz1 from '../music/mux15.mp3'

import '../components/DefaultValue.css'

import '../components/DefaultValue.css'

const daysOfWeek = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

function Sunday({ disableAudioDays, setDisableAudioDays }) {
	const {
		selectedAudio,
		currentTime,
		activeInput,
		disableAudio,
		audioRef,
		handleSelectChange,
		handleStopAudio,
		handleInputFocus,
		handleCheckboxChange,
		setActiveInput,
	} = useAppContext()

	const handleInputChange = (inputName, event) => {
		const { value } = event.target
		setSundayInputs(prevInputs => ({
			...prevInputs,
			[inputName]: value,
		}))
	}

	useEffect(() => {
		const savedInputs = localStorage.getItem('sundayInputs')
		if (savedInputs) {
			setSundayInputs(JSON.parse(savedInputs))
		}
	}, [])

	const [sundayInputs, setSundayInputs] = useState(() => {
		const savedInputs = localStorage.getItem('sundayInputs')
		return savedInputs
			? JSON.parse(savedInputs)
			: {
				input1: '07:45',
				input2: '08:30',
				input3: '08:35',
				input4: '09:20',
				input5: '09:25',
				input6: '10:10',
				input7: '10:20',
				input8: '11:05',
				input9: '11:10',
				input10: '11:55',
				input11: '12:00',
				input12: '12:45',
				input15: '13:00',
				input16: '13:45',
				input17: '13:50',
				input18: '14:35',
				input19: '14:40',
				input20: '15:25',
				input21: '15:35',
				input22: '16:20',
				input23: '16:25',
				input24: '17:10',
				input25: '17:15',
				input26: '18:00',
			}
	})

	useEffect(() => {
		localStorage.setItem('mondayInputs', JSON.stringify(sundayInputs))
	}, [sundayInputs])

	useEffect(() => {
		const currentDayOfWeek = daysOfWeek[new Date().getDay()]
		if (currentDayOfWeek === 'Sunday') {
			const inputs = document.querySelectorAll("input[type='time']")
			inputs.forEach((input, index) => {
				if (
					input.value === currentTime &&
					!disableAudio &&
					!disableAudioDays.sunday
				) {
					setActiveInput(index)
					// Only play if user has already interacted
					if (selectedAudio && audioRef.current) {
						handlePlayAudio(selectedAudio)
						setTimeout(handleStopAudio, 60000) // Stop after 1 minute
					}
				}
			})
		}
	}, [currentTime, selectedAudio, disableAudio, disableAudioDays.sunday])

	const handlePlayAudio = audioFile => {
		audioRef.current.src = audioFile
		audioRef.current.play()
	}
	return (
		<div>
			<center>
				<div className='card'>
					<p className='card__name'>
						{currentTime && <h2 className='title'>{currentTime}</h2>}
						<h3 className='subtitle'>Воскресенье </h3>
					</p>
					<select
						style={{
							background: 'white',
							color: 'black',
							padding: '5px 10px',
							border: 'none',
							position: 'absolute',
							marginLeft: '-498px',
							marginTop: '75px',
						}}
						onChange={handleSelectChange}
						value={selectedAudio}
					>
						<option value=''>Выберите аудио</option>


						<option value={muz1}>Аудио 1</option>
						<option value={muz2}>Аудио 2</option>
						<option value={muz3}>Аудио 3</option>
						<option value={muz4}>Аудио 4</option>
						<option value={muz5}>Аудио 5</option>
						<option value={muz6}>Аудио 6</option>
						<option value={muz7}>Балет</option>
						<option value={muz8}>Дети</option>
						<option value={muz9}>Йэ Йэ</option>
						<option value={muz10}>кай куну кай мезгилде</option>
						<option value={muz11}>Карамелька</option>
						<option value={muz12}>Тоолордун мекени</option>
						<option value={muz13}>Кыргызстан</option>
						<option value={muz14}>Аудио 14</option>
						<option value={muz15}>Учат в школе</option>
						<option value={muz16}>Аудио 16</option>
						<option value={muz17}>Аудио 17</option>
					</select>
					<div className='ParentValue'>
						<div className='defaultValue'>
							<h3
								style={{
									margin: '10px 0',
								}}
							>
								1-смена
							</h3>
							<div className=''>
								<div className=''>
									<div className='grid'>
										<input
											type='time'
											defaultValue={sundayInputs.input1}
											onFocus={() => handleInputFocus(0)}
											onChange={e => handleInputChange('input1', e)}
										/>
										<input
											type='time'
											defaultValue={sundayInputs.input2}
											onFocus={() => handleInputFocus(1)}
											onChange={e => handleInputChange('input2', e)}
										/>
									</div>
									<div className='grid'>
										<input
											type='time'
											defaultValue={sundayInputs.input3}
											onFocus={() => handleInputFocus(2)}
											onChange={e => handleInputChange('input3', e)}
										/>
										<input
											type='time'
											defaultValue={sundayInputs.input4}
											onFocus={() => handleInputFocus(3)}
											onChange={e => handleInputChange('input4', e)}
										/>
									</div>
									<div className='grid'>
										<input
											type='time'
											defaultValue={sundayInputs.input5}
											onFocus={() => handleInputFocus(4)}
											onChange={e => handleInputChange('input5', e)}
										/>
										<input
											type='time'
											defaultValue={sundayInputs.input6}
											onFocus={() => handleInputFocus(5)}
											onChange={e => handleInputChange('input6', e)}
										/>
									</div>
								</div>
								<div className=''>
									<div className='grid'>
										<input
											type='time'
											defaultValue={sundayInputs.input7}
											onFocus={() => handleInputFocus(6)}
											onChange={e => handleInputChange('input7', e)}
										/>
										<input
											type='time'
											defaultValue={sundayInputs.input8}
											onFocus={() => handleInputFocus(7)}
											onChange={e => handleInputChange('input8', e)}
										/>
									</div>
									<div className='grid'>
										<input
											type='time'
											defaultValue={sundayInputs.input9}
											onFocus={() => handleInputFocus(8)}
											onChange={e => handleInputChange('input9', e)}
										/>
										<input
											type='time'
											defaultValue={sundayInputs.input10}
											onFocus={() => handleInputFocus(9)}
											onChange={e => handleInputChange('input10', e)}
										/>
									</div>
									<div className='grid'>
										<input
											type='time'
											defaultValue={sundayInputs.input11}
											onFocus={() => handleInputFocus(10)}
											onChange={e => handleInputChange('input11', e)}
										/>
										<input
											type='time'
											defaultValue={sundayInputs.input12}
											onFocus={() => handleInputFocus(11)}
											onChange={e => handleInputChange('input12', e)}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className='defaultValue'>
							<h3
								style={{
									margin: '10px 0',
								}}
							>
								2-смена
							</h3>
							<div className='parentGrid'>
								<div className=''>
									<div className='grid'>
										<input
											type='time'
											defaultValue={sundayInputs.input15}
											onFocus={() => handleInputFocus(14)}
											onChange={e => handleInputChange('input15', e)}
										/>
										<input
											type='time'
											defaultValue={sundayInputs.input16}
											onFocus={() => handleInputFocus(15)}
											onChange={e => handleInputChange('input16', e)}
										/>
									</div>
									<div className='grid'>
										<input
											type='time'
											defaultValue={sundayInputs.input17}
											onFocus={() => handleInputFocus(16)}
											onChange={e => handleInputChange('input17', e)}
										/>
										<input
											type='time'
											defaultValue={sundayInputs.input18}
											onFocus={() => handleInputFocus(17)}
											onChange={e => handleInputChange('input18', e)}
										/>
									</div>
								</div>
								<div className='parentGrid'>
									<div className='grid'>
										<input
											type='time'
											defaultValue={sundayInputs.input19}
											onFocus={() => handleInputFocus(18)}
											onChange={e => handleInputChange('input19', e)}
										/>
										<input
											type='time'
											defaultValue={sundayInputs.input20}
											onFocus={() => handleInputFocus(19)}
											onChange={e => handleInputChange('input20', e)}
										/>
									</div>
									<div className='grid'>
										<input
											type='time'
											defaultValue={sundayInputs.input21}
											onFocus={() => handleInputFocus(20)}
											onChange={e => handleInputChange('input21', e)}
										/>
										<input
											type='time'
											defaultValue={sundayInputs.input22}
											onFocus={() => handleInputFocus(21)}
											onChange={e => handleInputChange('input22', e)}
										/>
									</div>
									<div className='grid'>
										<input
											type='time'
											defaultValue={sundayInputs.input23}
											onFocus={() => handleInputFocus(22)}
											onChange={e => handleInputChange('input23', e)}
										/>
										<input
											type='time'
											defaultValue={sundayInputs.input24}
											onFocus={() => handleInputFocus(23)}
											onChange={e => handleInputChange('input24', e)}
										/>
									</div>
									<div className='grid'>
										<input
											type='time'
											defaultValue={sundayInputs.input25}
											onFocus={() => handleInputFocus(24)}
											onChange={e => handleInputChange('input25', e)}
										/>
										<input
											type='time'
											defaultValue={sundayInputs.input26}
											onFocus={() => handleInputFocus(25)}
											onChange={e => handleInputChange('input26', e)}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<audio ref={audioRef} />
					{selectedAudio && activeInput !== null && (
						<button
							style={{
								margin: '5px 0 ',
								fontSize: '18px',
								color: 'white',
								background: 'blue',
								padding: '5px 20px',
								borderRadius: '14px',
							}}
							onClick={handleStopAudio}
						>
							Остановить аудио
						</button>
					)}

					<input
						style={{
							width: '20px',
							height: '20px',
							border: '2px solid blue',
						}}
						type='checkbox'
						checked={disableAudioDays.sunday}
						onChange={() => {
							handleCheckboxChange('sunday')
							setDisableAudioDays(prevDays => ({
								...prevDays,
								sunday: !prevDays.sunday,
							}))
						}}
					/>
					<label
						style={{
							margin: '5px 0 ',
							fontSize: '18px',
							background: 'red',
							padding: '5px 20px',
							borderRadius: '14px',
						}}
					>
						Disable Audio
					</label>
				</div>
			</center>
		</div>
	)
}

export default Sunday

import React, { useState, useEffect } from 'react'
import muz4 from '../music/гимн-кр.mp3'

const Gimn = () => {
	const [isNationalAnthemPlaying, setNationalAnthemPlaying] = useState(false)

	const playNationalAnthem = () => {
		try {
			setNationalAnthemPlaying(true)
			const audio = new Audio(muz4)

			audio.onplay = () => {
				console.log('Гимн воспроизведен')
			}

			audio.onerror = error => {
				console.error('Ошибка воспроизведения: ', error)
				setNationalAnthemPlaying(false)
			}

			audio.onended = () => {
				setNationalAnthemPlaying(false)
			}

			audio.play()
		} catch (error) {
			console.error('Ошибка воспроизведения: ', error)
			setNationalAnthemPlaying(false)
		}
	}

	const scheduleNationalAnthem = () => {
		const currentDate = new Date()
		const dayOfWeek = currentDate.getDay()

		// Проверка, если день недели с понедельника по пятницу (1-5)
		if (dayOfWeek >= 1 && dayOfWeek <= 5) {
			const targetTime = new Date(currentDate)
			targetTime.setHours(7, 42, 0) // Установить время на 07:42:00

			const timeUntilPlay = targetTime - currentDate

			if (timeUntilPlay > 0) {
				setTimeout(() => {
					playNationalAnthem()
				}, timeUntilPlay)
			} else {
				// Если текущее время уже прошло, проверяем следующий день
				const nextDay = new Date(currentDate.getTime() + 86400000) // Добавляем 24 часа
				nextDay.setHours(7, 42, 0)

				setTimeout(() => {
					playNationalAnthem()
				}, nextDay - currentDate)
			}
		}
	}

	useEffect(() => {
		scheduleNationalAnthem()
	}, [])

	return (
		<div>
			{isNationalAnthemPlaying ? (
				<p>Гимн воспроизводится...</p>
			) : (
				<div>
					<p
						style={{
							fontSize: '36px',
							color: 'white',
							marginLeft: '1040px',
							marginTop: '-550px',
							position: 'absolute',
						}}
					>
						..
					</p>
				</div>
			)}
		</div>
	)
}

export default Gimn

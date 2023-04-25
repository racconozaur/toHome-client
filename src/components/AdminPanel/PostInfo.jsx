import React from 'react'
import { acceptPostFrom, denyPostFrom } from '../../actions/user'
import Button from '../../utils/button/Button'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useTranslation } from 'react-i18next'
import MapCard from '../Map/MapCard'

// import io from 'socket.io-client'

// const socket = io.connect('http://localhost:5000')

const PostInfo = (props) => {
	// const [isConnected, setIsConnected] = useState(socket.connected)


	const { t } = useTranslation()

	// const message = 'hello'
	// const room = props.sender

	// socket.emit('join_room', props.sender)

	const acceptHandler = () => {
		// socket.emit('send_message', { message, room })
		acceptPostFrom(props.id).then(res => props.handlePostChange(res, props.id))
	}

	const denyHandler = () => {
		// socket.emit('send_message', { message, room })
		denyPostFrom(props.id).then(res => props.handlePostChange(res, props.id))
	}

	// useEffect(() => {
	// 	socket.on('connect', () => {
	// 		setIsConnected(true)
	// 	})
	// 	socket.on('disconnect', () => {
	// 		setIsConnected(false)
	// 	})

	// 	return () => {
	// 		socket.off('connect')
	// 		socket.off('disconnect')
	// 	}
	// }, [])


	

    // console.log(isConnected, socket.id)
	return (
		<div className='flex flex-col w-8/12 ml-60 mb-4'>
			<div className=' bg-white border-2 border-black rounded-lg dark:border-white dark:bg-slate-800 dark:text-slate-50'>
				<div className='p-4 '>
					<img src={props.img} alt={props.img} />

					<p className=' font-bold text-2xl my-4'>
						{t('Title')}: {props.title}
					</p>
					<p className=' font-semibold text-2xl'>
						{t('Price')}: USD ${props.price}
					</p>
					<p className=' text-xl my-4'>Type: {props.type}</p>
					<p>{t('Status')}: {props.status}</p>
					<p>{t('Number of rooms')}: {props.rooms}</p>
					<p>
						{t('Square')}: {props.square} m<sup>2</sup>
					</p>
					<p>{t('Location')}: Longitude: {props.location.longitude.toFixed(4)} | Latitude:
					{props.location.latitude.toFixed(4)}</p>
					<p>{t('Description')}: {props.content}</p>

					<div>
						{t('Location')}: Latitude: {props.location.latitude.toFixed(4)}{' '}
						| Longitude: {props.location.longitude.toFixed(4)}
						<MapCard location={props.location}/>
					</div>

					<p className='font-bold mb-4'>{t('Contact Details')}: </p>
					<p>{t('Status')}: {props.name}</p>
					<p>Email: {props.sender}</p>
					<p>{t('Number')}: {props.number}</p>
				</div>

				<div className=' border-t-2 border-black p-4 dark:border-white'>
					<Button
						className=' bg-green-400 w-20 h-12'
						onClick={acceptHandler}
					>
						Accept
					</Button>
					<Button 
						className=' bg-red-400 w-20 h-12'
						onClick={denyHandler}
					>
						Deny
					</Button>
				</div>
				{/* <p>{t('Likes')}: {` ${onePost.likes.slice(0, 4)} ${onePost.likes.length > 5 ? `and ${onePost.likes.length - 5}` : ''}`}</p> */}
			</div>
		</div>
	)
}

export default PostInfo

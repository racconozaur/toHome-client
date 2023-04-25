import React, { useState, useEffect } from 'react'
import Card from './Card'
import { getAllUserInfo } from '../../actions/user'

const AllUsers = () => {
	const [allUsersData, setAllUsersData] = useState([])

	useEffect(() => {
		getAllUserInfo().then((res) => setAllUsersData(res))
		return(() => {
			setAllUsersData([])
		})
	}, [])

	const handleUserRoleChange = (data, id) => {
		const newData = allUsersData.map(prevObj => {
			if(prevObj._id === id){
				return data
			}
			return prevObj
		})

		setAllUsersData(newData)
	}

	const userList = allUsersData.map((user) => (
		<Card
			key={user._id}
			id={user._id}
			mail={user.email}
			date={user.date}
			status={user.status}
			role={user.role}
			handleUserRoleChange={handleUserRoleChange}
		/>
	))

	return (
		<div className='flex flex-col w-10/12 ml-60 -z-10'>
			<div className='overflow-x-auto'>
				<div className='p-1.5 w-full inline-block align-middle'>
					<div className='overflow-hidden border rounded-lg'>
						<table className='min-w-full divide-y divide-gray-200'>
							<thead className='bg-gray-50'>
								<tr>
									<th
										scope='col'
										className='px-6 py-3 text-base font-bold text-left text-gray-500 uppercase '
									>
										Email
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-base font-bold text-left text-gray-500 uppercase '
									>
										Date
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-base font-bold text-left text-gray-500 uppercase '
									>
										Status
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-base font-bold text-right text-gray-500 uppercase flex justify-center'
									>
										Role
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-base font-bold text-right text-gray-500 uppercase '
									>
										Set admin
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-base font-bold text-right text-gray-500 uppercase '
									>
										Edit
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-base font-bold text-right text-gray-500 uppercase '
									>
										Delete
									</th>
								</tr>
							</thead>
							<tbody className='divide-y divide-gray-200 '>
								{userList}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AllUsers

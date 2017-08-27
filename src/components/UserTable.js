import React from 'react';
import UserInfo from './UserInfo';

const UserTable = (props) => {
	const users = props.users.map((user, index) => {
		return <UserInfo 
						key={index} 
						index={index} 
						img={user.img}
						url={`https://www.freecodecamp.com/${user.username}`}
						username={user.username} 
						recent={user.recent} 
						alltime={user.alltime} />
	})

	return(
		<div>
			<table>
				<tbody>
					<tr>
						<th colSpan="4">Title</th>
					</tr>
					<tr>
						<th>#</th>
						<th>Camper Name</th>
						<th><button className="btn btn-primary" onClick={props.showRecent}>Points in past 30 days</button></th>
						<th><button className="btn btn-primary" onClick={props.showAlltime}>All time points</button></th>
					</tr>
					{users}
				</tbody>
			</table>
		</div>
	);
}

export default UserTable;
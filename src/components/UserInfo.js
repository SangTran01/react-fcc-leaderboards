import React from 'react';

const UserInfo = (props) => {
	return(
		<tr>
			<td>{props.index + 1}</td>
			<td>
				<img src={props.img} alt={props.img}/>
				<a href={props.url} target="_blank">{props.username}</a>
			</td>
			<td>{props.recent}</td>
			<td>{props.alltime}</td>
		</tr>
	);
}

export default UserInfo;
import React,{ Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Menu } from 'antd';
import ContestPollListItem from './contestPollListItem';

function ContestPollList(props){
	const data = props.data;

	return(
		<div>
			{
				data.map((value,i)=>{
					return(
						<ContestPollListItem
	                        key = {i}
	                        number = {i+1}
	                        cover = {value.performerAtom.photos}
	                        name = {value.performerAtom.nickName}
	                        totalRank = { value.recordAtom.voteCount }
	                    />
					)
					
				})
			}
		</div>
	);
}

ContestPollList.propTypes = {

};

export default ContestPollList;
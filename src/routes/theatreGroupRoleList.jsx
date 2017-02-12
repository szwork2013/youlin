import React,{ Component, PropTypes } from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import RoleListItem from '../components/theatreGroup/roleListItem';

const TheatreGroupRoleListType = {
	data:PropTypes.array,
};


const TheatreGroupRoleList =(props)=>{
	const { data } = props;
  	return ( 
    	<div>
    		{
		    	data.map((data, i) => {
		    		return(
		    			<RoleListItem
				     		key = {i}
				     		cover = {data.movieRoleAtom.cover}
				  			name = {data.movieRoleAtom.name?data.movieRoleAtom.name:''}
				  			linePosition = {data.movieRoleAtom.levelName?data.movieRoleAtom.levelName:''}
				  			ageGroup = {data.movieRoleAtom.ageGroup?data.movieRoleAtom.ageGroup:''}
				  			sex = {data.movieRoleAtom.sex?data.movieRoleAtom.sex:''}
				  			roleTag = { data.movieRoleAtom.tagNames?data.movieRoleAtom.tagNames:''}
				  			people = {data.applyCount}
				  			signUp = {data.movieRoleAtom.regNumber?data.movieRoleAtom.regNumber:0}
				  			groupId = { data.movieRoleAtom.groupId?data.movieRoleAtom.groupId:'' }
				  			id = {data.movieRoleAtom.id?data.movieRoleAtom.id:0}
				  			performerCover = { data.performerCover?data.performerCover:[] }
				  		/>
		    		)
		    	})
			}
	  	</div>
    );
};

TheatreGroupRoleList.propTypes = TheatreGroupRoleListType;

export default TheatreGroupRoleList;

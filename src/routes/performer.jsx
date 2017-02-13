import React,{ Component, PropTypes } from 'react';
import { Carousel } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
import styles from './performer.less';
import PerformerListItem from '../components/performer/performerListItem';
import img from '../assets/actor/activity.png';
import Nav from '../components/layout/nav'

let curPageNo = 1;

const Performer = ({
	performer,dispatch
})=>{

	const { resultObject,bannerArray,nextPage } = performer;
	let banner = [];
	for (var i = 0; i < bannerArray.length; i++) {
		banner.push(
			<Link to = { `theatreGroupDetail/${bannerArray[i].value}`}>
				<div>
			    	<div className={styles.boxTop}>
			    		<img src ={bannerArray[i].cover} />	    		
			    		<div>
			    			<p>{bannerArray[i].name}</p>
			    		</div>
			    	</div>
			    </div>
			</Link>
		)
	}

	var vNextPage;
	if (nextPage) {
		vNextPage = (<button onClick={onNextPage}>点击加载更多</button>);
	} else {
		vNextPage = (<p>没有更多数据...</p>);
	}	

	function onNextPage(){
		curPageNo++;
		dispatch({
	       	type: 'performer/fetchPerformerList',
	       	payload:{ids:[],pageNo:curPageNo,pageSize:10}
	    });
	}

    return (
    	
    	<div style = {{paddingBottom:50}}>
    		<Nav>
    		<Carousel autoplay>
    		{banner.length > 0 ? banner : <div></div>}
    		</Carousel>
	  		{

				resultObject.map((data, i) => {
					let random = parseInt(1000000*Math.random()); 
					return(
						<Link to={`performerDetail/?detailId=${data.id}`} style = {{color:'#999'}}>
			    			<PerformerListItem
			    				key = {i}
			    				cover = {data.cover}
			    				nickName = {data.nickName}
		  						ageGroup = {data.ageGroup}
		  						sex = {data.sex}
		  						specialtys = {data.specialtys}
		  						tags = {data.tags}
		  						weight = {data.weight}
		  						height = {data.height}
		  						hotDegree = {data.hotDegree}
		  						recommend = {random}
			    			/>
			    		</Link>
					)
				})
			}

			<div style = {{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:10,paddingBottom:20}} className = {styles.loadMoreButton}>{vNextPage}</div> 
			</Nav>
	  	</div>
    );
};

function mapStateToProps({ performer }) {
  return { performer };
}

Performer.propTypes = {

};

export default connect(mapStateToProps)(Performer);
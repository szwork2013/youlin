import React,{ Component, PropTypes } from 'react';
import { Tag,Card,Icon,Button } from 'antd';
import { Link } from 'dva/router';
import styles from './performerListItem.less';
import img from '../../assets/actor/activity1.png';

import thumb_up from '../../assets/rank/thumb_up.png';
import vote from '../../assets/rank/vote.png';

const PerformerListItem = ({
  nickName,
  ageGroup,
  tags,
  sex,
  createTime,
  height,
  weight,
  specialtys,
  cover,
  hotDegree,
  recommend
}) => {

  let vTags = [];
  if (eval(tags)) {
    for (var i = 0; i < eval(tags).length; i++) {
        vTags.push(<Tag key = {i} className={styles.tag}>{eval(tags)[i].tagsname}</Tag>);
    }
  }

    let specialtysTag =[];

    if (eval(specialtys)) {
        for (var i = 0; i < eval(specialtys).length; i++) {
          specialtysTag.push(<Tag key = {i} className={styles.tag}>{eval(specialtys)[i].tagsname}</Tag>);
        }
    }

    let vageGroup = '';
    if (ageGroup === '11-20') {
        vageGroup ='青少年'
    }else if (ageGroup === '21-30' || ageGroup === '31-40') {
        vageGroup ='青年' 
    }else if (ageGroup === '41-50') {
        vageGroup ='中年' 
    }else{
        vageGroup ='老年' 
    }

    return (	
	<div className = { styles.normal}>
        <div className = { styles.customCard}>
			<div className = {styles.customImage}>
            <div style = {{ position:'relative' }}>
                <img width="100%" height="200"  src = {cover}/>
                <p className={styles.recommend}>{recommend}</p>
  				<div className={styles.topHot}><Icon className={styles.hot} type="" /><span>{hotDegree}</span></div>
            </div>

            <div className={styles.boxBotton}>
              <div className={styles.evaluate}>
                  <img width = "25" heigth = "25" src = {thumb_up}/>
                  <span>0</span>
              </div>
              <div className={styles.evaluate}>
                 <img width = "25" heigth = "25" src = {vote}/>
                  <span>0</span>
              </div>
           </div>   

            <div>
    			<div style = {{margin:5}}>
    				<div className = { styles.opus }>
                    <div>
    					<p style={{fontSize:16}}>{nickName}</p>
    					<p style = {{paddingLeft:11,paddingTop:2}}>{vageGroup}</p>
                    </div>
    				<div>
              {vTags}
    				</div>
    			</div>
    			<div className = { styles.time }>
                    <div>
          				<span>{sex === 1 ?'女':'男'} </span>
                        <span>&nbsp;{height}&nbsp;cm&nbsp;&nbsp;&nbsp;{weight}&nbsp;kg</span>
                    </div>
    		 		<div className={styles.tag}>
    				   {specialtysTag}
    				</div>
    				</div>
    			</div>

            </div>
    		</div>
		</div>
	</div>
  );
};

PerformerListItem.propTypes = {
  ageGroup:PropTypes.string,
  nickName:PropTypes.string,
  sex:PropTypes.number,
  tags:PropTypes.string,
  createTime:PropTypes.number,
  specialtys:PropTypes.string,
  tags:PropTypes.string,
  weight:PropTypes.number,
  height:PropTypes.number,
  hotDegree:PropTypes.string,
  cover:PropTypes.string,
  recommend :PropTypes.number,
};

export default PerformerListItem;


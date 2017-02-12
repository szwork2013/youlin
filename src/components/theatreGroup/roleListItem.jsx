import React,{ PropTypes } from 'react';
import { Tag ,Icon } from 'antd';
import { Link,browserHistory } from 'dva/router';
import styles from './roleListItem.less';
import ranking_header from '../../assets/icon/ranking_header.png';
import pathToRegexp from 'path-to-regexp';

const RoleListItem = ({
    name,
    linePosition,
    people,
    ageGroup,
    sex,
    roleTag,
    signUp,
    groupId,
    performerCover,
    cover,
    id
}) => {
    
    let vTag =  (new Function("return " + roleTag))();
    let tagArray = [];
    if (vTag && vTag.length>0) {
        for (var i = 0; i < vTag.length; i++) {
            tagArray.push(
                 <span className = {styles.tag}>{vTag[i].tagsname}</span>
            )
        }
    }

    return (
        <div>
            <div className={styles.box}>
                <div className={styles.roleInfo}>
                    <img  src = {cover?cover:ranking_header} className={styles.headPortrait}/>
                    <span>角色名:{name}</span>
                    <Link to={`rolePerformerInfo/groundId=${groupId}&roleId=${id}`}>
                        <span className = {styles.applicationState}>我要报名</span>
                    </Link>
                    <span className = {styles.applicationState}>已申请</span>
                </div>
                <p>线位:{ linePosition }
                    <Link to={`roleList/contestPoll/groupId=${groupId}`} style = {{ color:'#FE7E13',float:'right',marginLeft:10}}>查看排行榜</Link>
                    <span>已申请{people}人</span>
                </p>
                <p>年龄段:{ageGroup}</p>
                <p>性别:{sex === 1 ? '女':'男'}</p>
                <p>角色标签:  {tagArray}</p>
                <p>
                    {
                        performerCover.map((value,i)=>{
                            if (i<5) {
                                return(
                                    <img src={value?value:ranking_header} className={styles.img}/>
                                )
                            }
                        })
                    }
                    <Icon type="ight-circle-o"  className={styles.icon}/>
                    <span>{signUp}人</span>
                    <span>已报名:</span>
                </p>
            </div>
        </div>
  );
};

RoleListItem.propTypes = {
    name:PropTypes.string,
    linePosition:PropTypes.string,
    people:PropTypes.number,
    ageGroup:PropTypes.string,
    sex:PropTypes.number,
    roleTag:PropTypes.string,
    signUp:PropTypes.number,
    groupId:PropTypes.number,
    performerCover:PropTypes.array,
    cover:PropTypes.string,
    id:PropTypes.number,
};


export default RoleListItem;
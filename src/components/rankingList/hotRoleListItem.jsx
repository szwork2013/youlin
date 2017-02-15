import React,{PropTypes} from 'react';
import { Link } from 'dva/router';
import styles from './hotRoleListItem.less';
import header from '../../assets/icon/header.png';
import rankingHeader from '../../assets/icon/ranking_header.png';

const HotRoleListItem = ({
  name,
  character,
  tagNames,
  description,
  performers,
  cover,
  groupId,
  id,
  people
}) => {

    let characterArray = [];
    let tagArray = [];

    if (character) {
        let vCharacter =  (new Function("return " + character))();
        for (let i = 0; i < vCharacter.length; i++) {
            characterArray.push(<span className={styles.tag}>{vCharacter[i].tagsname}</span>);
        }
    }

    if (tagNames) {
        let vTagNames =  (new Function("return " + tagNames))();
        for (let i = 0; i < vTagNames.length; i++) {
            tagArray.push(<span className={styles.tag}>{vTagNames[i].tagsname}</span>);
        }
    }

    return (
        <div className = { styles.normal }>
            <div className = { styles.row }>

                <div className = { styles.headerImg }>
              	     <img src ={cover?cover:header}/>
                </div>
              	<div className = { styles.rowRigth }>
              		<p>{name}
                        <Link to={`rolePerformerInfo/groundId=${groupId}&roleId=${id}`}>
                            <span className = {styles.applicationState}>报名</span>
                        </Link>
                    </p>
              		<p>性格：{characterArray}</p>
              		<p>特征：{tagArray}</p>
                    <div><p>{description}</p></div>
              	</div>
            </div>
            <div className = { styles.enlist }>
                  {
                      performers.map((data,i)=>{
                        return(
                           <img
                            key = {i}
                            src = {data?data:rankingHeader}
                            key = {i}
                          />
                        )
                      })
              
                    }
                  <div>
                    <p>已报名:{people}人</p>
                    <p></p>
                  </div>
            </div>
        </div>
  );
};

HotRoleListItem.propTypes = {
    name:PropTypes.string,
    character:PropTypes.array,
    tagNames:PropTypes.array,
    description:PropTypes.string,
    performers:PropTypes.array,
    cover:PropTypes.string,
    groupId:PropTypes.number,
    id:PropTypes.number,
    people:PropTypes.number,
};

export default HotRoleListItem;

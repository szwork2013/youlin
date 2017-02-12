import React,{ Component, PropTypes } from 'react';
import { Row, Col ,Tag ,Icon ,Button} from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
import styles from './contestRoleList.less';
import ContestRoleListItem from '../components/contest/contestPollListItem';
import ranking_header from '../assets/icon/ranking_header.png';


class ContestRoleList extends  Component{

    onChange(groundId){
        if (this.props.changeClick) {
            this.props.changeClick(groundId);
        }
    }

    render(){

        const { roleData,data,groundId} = this.props;

        let dataArray = [];

        for (var i = 0; i < data.length; i++) {
            if (data[i].performerAtom && data[i].performerAtom.nickName) {}
            dataArray.push(
                <Link key = {i} to={`performerDetail/?detailId=${data[i].performerAtom.id}`}>
                    <ContestRoleListItem
                      key = {i}
                      number = { i+1 }
                      cover = {data[i].recordAtom.photos}
                      name = {data[i].performerAtom && data[i].performerAtom.nickName ? data[i].performerAtom.nickName :''}
                      totalRank = { data[i].recordAtom.voteCount }
                    />
                </Link>
            )
        }

    
        return(
            <div className = {styles.normal}>
                <ul className = {styles.items}>
                    {
                        roleData.map((data,i)=>{

                            return(
                                <div key = {i} >
                                    <li className = { styles.item} onClick = {()=>this.onChange(groundId)}>
                                        <img src = {data.movieRoleAtom.cover?data.movieRoleAtom.cover:ranking_header} className = {styles.itemPoster}/>
                                        <p>{data.movieRoleAtom.name}</p>
                                    </li>
                                </div>
                            );
                        })
                    }
                </ul>

                <div className={styles.rank}>
                    <p className={styles.ranktitle}>本角色排行榜</p>
                    <div className = {styles.ranklist}>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <div style = {{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                                <div className = {styles.crown}/>
                                <img className = {styles.no1Img} src = {ranking_header}/>
                            </div>
                                <p>NO1</p>
                                <p>西瓜霜</p>
                            </div>
                            
                            <div>
                                <p></p>
                                <p></p>
                            </div>
                        </div> 
                    </div>
                    {dataArray}
                 
                <div>
            </div>
        </div>
        );
    }
}

ContestRoleList.propTypes = {
    location:PropTypes.object,
    roleData:PropTypes.array,
    data:PropTypes.array,
    groundId:PropTypes.number,
};

export default ContestRoleList;

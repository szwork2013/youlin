import React,{ Component, PropTypes } from 'react';
import { connect } from 'dva';
import pathToRegexp from 'path-to-regexp';
import Item from '../components/rankingList/allRoleListItem';
import styles from './rankingRoleDetail.less';

var roldId = '';
var upCount = '';

class  RankingRoleDetail  extends Component{

    constructor() {
        super();
        this.state = {
             isVote:false,
             curPageNo:1,
        };
    }

    componentWillMount() {
        const match = pathToRegexp('/hotRole/hotRoleItem/:hotRoleItemId').exec(this.props.location.pathname);
        if (match) {
            roldId = match[1];
        }   
    }
    
    componentWillUnmount(){
         window.location.reload();    
    }

    voteCountClick(){//投票 到微信支付

    }

    upCountClick(id){//点赞
        this.props.dispatch({ type:'rankingRoleDetail/thumbUp', payload:{ recordId:id,}});
    }

    onNextPage(){
        this.props.dispatch({
            type: 'theatreGroup/fetchHotRoleList',
            payload:{'movieRoleId':roldId,'pageNo':this.state.curPageNo + 1,'pageSize':10}
        });
        this.setState({curPageNo: this.state.curPageNo + 1});
    }

    render(){
        const { resultObject,nextPage,thumbUpSuccess} = this.props.rankingRoleDetail;
        
        var vNextPage;
        if (nextPage) {
            vNextPage = (<button onClick={()=>this.onNextPage()}>点击加载更多</button>);
        } else {
            vNextPage = (<p>没有更多数据...</p>);
        }       

        return (
            <div>
                <div className = {styles.nav}>
                    <p>竞演的角色</p>
                </div>
                {   
                    resultObject.length>0 ? (
                        resultObject.map((data,i)=>{
                            return(
                                 <Item
                                    key = {i}
                                    cover = {data.performerAtom && data.performerAtom.photos ?data.performerAtom.photos :''}
                                    roleName = {data.roleAtom.name}
                                    tagNames = {data.roleAtom.name}
                                    heatCount = {data.recordAtom.heatCount}
                                    nickName = {data.performerAtom &&data.performerAtom.nickName?data.performerAtom.nickName:'' }
                                    ranking = {i+1}
                                    groupName = {data.roleAtom && data.roleAtom.groupName ?data.roleAtom.groupName :'' }
                                    headPortrait = {data.recordAtom.headPortrait}
                                    tagNames = {data.performerAtom && data.performerAtom.tags ?data.performerAtom.tags :''}
                                    upCount = {data.recordAtom.upCount}
                                    voteCount = {data.recordAtom.voteCount}
                                    voteCountClick = {()=>this.voteCountClick()}
                                    upCountClick = {(id)=>this.upCountClick(id)}
                                    recordId = {data.recordAtom.id}
                                    roleId= {data.roleAtom.id}
                                    isThumbUp = {thumbUpSuccess}
                                />
                                );
                            })
                        ):(<div/>)
                }
                <div style = {{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:10,paddingBottom:20}} className = {styles.loadMoreButton}>{vNextPage}</div> 
            </div>
        );
    }
  
};

function mapStateToProps({ rankingRoleDetail }) {
  return { rankingRoleDetail };
}

RankingRoleDetail.propTypes = {
    rankingRoleDetail:PropTypes.object,
};

export default connect(mapStateToProps)(RankingRoleDetail);

import React,{ Component, PropTypes } from 'react';
import { Menu } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './collection.less';

import CollectionActor from '../../components/my/CollectionActor';
import CollectionCrew from '../../components/my/CollectionCrew';

const Item = Menu.Item;

const defaultProps = {

};
const propTypes = {
  dispatch:PropTypes.func,
  collection:PropTypes.object
};

class MyCollection extends Component {

    constructor(props){
        super(props);
        this.state={
           
        }
    }

    render() {
        const { resultObject } =  this.props.collection;
        return (
            <div>
                <div>
                    <CollectionCrew data = { resultObject ? resultObject :[]}/> 
                </div>
            </div>
        );
    }
};

function mapStateToProps({ collection }) {
  return { collection };
}

MyCollection.defaultProps = defaultProps;
MyCollection.propTypes = propTypes;

export default connect(mapStateToProps)(MyCollection);

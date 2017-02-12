import React,{ Component, PropTypes } from 'react';
import { Upload, Icon, message } from 'antd';
import styles from './UpdatePhotos.less';
import FileInput from '../../utils/fileInput';

function UpdatePhotos({
    location,updateCover,updateHeaderImage,updateImage
}){
  return (
    <div>
        <div className={styles.box}>
            <p>请上传横屏拍摄的一张大头照</p>
            <FileInput 
                onChange={updateCover} 
                multiple={false} 
                className={styles.modalBtn}
                btnValue = {'设置封面'}
            />
        </div>

        <div className={styles.box}>
            <p>请上传正方形格式的照片</p>
            <FileInput 
                onChange={updateHeaderImage} 
                multiple={false} 
                className={styles.modalBtn}
                btnValue = {'上传头像'}
            />
        </div>
        
        <div className={styles.box}>
            <p>请上传竖屏拍摄的照片</p>
            <FileInput 
                onChange={updateImage} 
                multiple={false} 
                className={styles.modalBtn}
                btnValue = {'添加照片'}
            />
        </div>
    </div>
  );
};

UpdatePhotos.propTypes = {
    location:PropTypes.object,
    updateCover:PropTypes.func,
    updateHeaderImage:PropTypes.func,
    updateImage:PropTypes.func,
};

export default UpdatePhotos;
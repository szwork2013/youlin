import { refereshToken } from '../services/my';

export function relanding() {

    const userInfo = JSON.parse(localStorage.getItem('MY_USER_INFO'));
    var parmas = {'refereshToken':userInfo.refreshToken};
    refereshToken(parmas).then((value)=>{
        if (value.data && value.data.success) {
            userInfo.accessToken = value.data.resultObject.accessToken;
            userInfo.refreshToken = value.data.resultObject.refreshToken;
            localStorage.setItem('MY_USER_INFO',JSON.stringify(userInfo));
            document.cookie = 'JSESSIONID'+ "=" + escape(value.data.resultObject.accessToken);
        }
    }),(error)=>{

    }
}
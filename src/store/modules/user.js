import Cookies from 'js-cookie';
import {logout} from '@/api/login.js'
const user = {
    state: {},
    mutations: {
        logout (state, vm) {
            logout(Cookies.get("token"))
            .then(res => {
                if(res.data.statusCode==200){
                  
                }else{
                    this.$Message.error(Response.data.message);  
                }
            })
            .catch(err => {});
            Cookies.remove('user');
            Cookies.remove('password');
            Cookies.remove('access');
            Cookies.remove('token');
            // 恢复默认样式
            let themeLink = document.querySelector('link[name="theme"]');
            themeLink.setAttribute('href', '');
            // 清空打开的页面等数据，但是保存主题数据
            let theme = '';
            if (localStorage.theme) {
                theme = localStorage.theme;
            }
            localStorage.clear();
            if (theme) {
                localStorage.theme = theme;
            }
        }
    }
};

export default user;

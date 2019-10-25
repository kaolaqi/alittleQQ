
<template>
    <div class="footer-tab-container">
        <a @click="goLink(1)" :class="{active : activeIndex === 1}">
            <i class="cicon" :class="{'icon-tab_icon_grab' : activeIndex === 1,'icon-tab_icon_grab_pre' : activeIndex !== 1}"></i>
            <span>消息</span>
        </a>
        <a  @click="goLink(2)"  :class="{active : activeIndex === 2}">
            <i class="cicon" :class="{'icon-tab_icon_task' : activeIndex === 2,'icon-tab_icon_task_pre' : activeIndex !== 2}"></i>
            <span>联系人</span>
        </a>
        <a  @click="goLink(3)"  :class="{active : activeIndex === 3}">
            <i class="cicon" :class="{'icon-tab_icon_personal' : activeIndex === 3,'icon-tab_icon_personal_pre' : activeIndex !== 3}"></i>
            <span>我的</span>
        </a>
    </div>
</template>


<script>
import { modalLoadingServer } from '@/server/modals/index';

export default {
    name:'footer-tab',
    data(){
        return{
        }
    },
    computed: {
        activeIndex(){
            var rootPath = this.$route.path.match(/\/(.*)\//)[1];
            return rootPath === 'message' ? 1 : rootPath === 'contacts' ? 2 : rootPath === 'user' ? 3 : ''
        }
    },
    methods:{
        goLink:function(type){
            var self = this;
            if(type === self.activeIndex){
                return
            }
            switch(type){
                case 1:
                    self.$router.push({name:'MessageIndex'})
                    break;
                case 2:
                    self.$router.push({name:'ContactsList'})
                    break;
                case 3:
                    self.$router.push({name:'user'})
                    break;
            }
        }
    },
}
</script>





<style lang="scss" scoped>
    @import './index.scss';
</style>




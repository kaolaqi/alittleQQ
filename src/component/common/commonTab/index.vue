<template>
    <div>
        <ul>
             <!-- :style="{width: `${100/tabHeader.length}%`}"  -->
            <li 
                :style="{width: `${100/tabHeader.length}%`}"
                v-for="(item, index) in tabHeader" 
                :key="index"
                :class="{active: activeTab === item.status}"
                @click="clickTab(item)">
                <span v-if="activeStyle && activeTab === item.status" :style="activeStyle">{{item.name}}</span>
                <span v-else :style="customStyle">{{item.name}}</span>
            </li>
            <i class="active_line" 
                :class="{activeTransition: isDomLoaded}"
                :style="[activeLineStyle,{width: `${lineWidth}px`, transform: `translateX(${slideLeft}px)`}]"></i>
        </ul>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        tabHeader: {
            type: Array,
            default: []
        },
        activeStyle: {
            type: Object,
            default: {}
        },
        customStyle: {
            type: Object,
            default: {}
        },
        activeLineStyle: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            lineWidth: 0,
            activeTab: '',
            slideLeft: '',
            liWidth: '',
            isDomLoaded: false
        };
    },
    created() {
    },
    mounted() {
        this.activeTab = this.tabHeader[0].status;
        this.$nextTick(() => {
            this.locateLine();
            setTimeout(() => {
                this.isDomLoaded = true
            },0)
        })
    },
    methods: {
        clickTab(item) {
            this.activeTab = item.status
            this.$emit('checkTab', item)
            this.$nextTick(() => {
                this.locateLine();
            })
        },
        locateLine() {
            var activeTab = document.getElementsByClassName('active')[0]
            var tabWidth = activeTab.offsetWidth
            //默认的话是划线宽度是一个tab的宽度的1/3
            this.lineWidth = this.activeLineStyle.width ? this.activeLineStyle.width : activeTab.offsetWidth / 3;
            this.slideLeft = activeTab.getBoundingClientRect().left + ((tabWidth-this.lineWidth)/2)
        }
    }
};
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>
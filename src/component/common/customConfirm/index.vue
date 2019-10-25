<template>
    <div>
        <div class="modals-container" v-show="isVisible">
            <div class="modal-confirm">
                <div class="title">{{title}}</div>
                <div class="message">
                    <slot name="content"></slot>
                </div>
                <div class="modal-button" >
                    <div class="cancel" @click="submitCancel"  :style="cancelStyle" >
                        {{cancelText || '取消'}}
                    </div>
                    <div class="confirm" @click="submitConfirm" :style="confirmStyle" >
                        {{confirmText || '确定'}}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        isVisible:{
            type: Boolean,
            default: true
        },
        title: {
            type: String
        },
        cancelText: {
            type: String
        },
        confirmText: {
            type: String
        },
        cancelStyle: {
            type: Object
        },
        confirmStyle: {
            type: Object
        }

    },
    data() {
        return {
            
        };
    },
    created() {
        
    },
    methods: {
        submitCancel() {
            this.$emit('closePopup')
        },
        submitConfirm() {
            this.$emit('submitConfirm')
        }
    }
};
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>
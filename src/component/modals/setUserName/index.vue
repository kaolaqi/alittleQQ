
<template>
  <div v-if="isVisible" class="modals-component-container">
    <div class="modal-setUserName">
      <div class="head">修改昵称</div>
      <p>
        <input v-model="userName" type="text" @input="updateFlag=true" />
        <i v-show="userName" class="cicon icon-nicknames_clear" @click="clearText" />
      </p>
      <div class="btn">
        <div class="cancel" @click="submitCancel">取消</div>
        <div class="confirm" @click="submitSetUserName">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import { userModel } from "@/http/index";
import tokenServer from "@/server/token/index";
import { modalAlertServer, modalLoadingServer } from "@/server/modals/index";

export default {
  name: "ModalSetUserName",
  data() {
    return {
      userName: "",
      firstFlag: false,
      isVisible: false
    };
  },
  updated: function() {
    var self = this;
    if (self.isVisible && self.oldUserName && !self.firstFlag) {
      self.firstFlag = true;
      self.userName = self.oldUserName;
    }
  },
  methods: {
    clearText() {
      this.userName = "";
    },
    submitSetUserName: function() {
      var self = this;
      self.submitCancel();
      if (!self.userName) {
        modalAlertServer.use({
          content: "用户昵称不能为空"
        });
        return false;
      }
      modalLoadingServer.loading("提交中");
      userModel
        .setUserName({
          nickName: self.userName
        })
        .then(function(data) {
          modalLoadingServer.unload();
          if (data.returnCode === 100) {
            modalAlertServer.use({
              content: "修改成功",
              onClickConfirm: function() {
                modalAlertServer.hide();
                self.$parent.userInfo.nickName = self.userName;
                tokenServer.updateUserInfo();
              }
            });
          } else {
            modalAlertServer.use({
              content: data.returnMsg
            });
          }
        });
    },
    submitCancel() {
      this.$emit("closeEdit");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

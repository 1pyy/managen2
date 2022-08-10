<template>
  <div class="login">
    <div class="loginform">
      <h3>叮叮后台管理系统</h3>
      <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" type="text" autocomplete="off" :prefix-icon="Avatar"
            placeholder="请输入账号" />
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="ruleForm.pwd" type="password" autocomplete="off" :prefix-icon="Lock" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { reactive } from 'vue';
import { Avatar, Lock } from '@element-plus/icons-vue'

const rules = reactive({

})

const ruleForm = reactive({
  username: '',
  pwd: ''
})

const submitForm = () => {

}
</script>
  
<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;

  .loginform {
    width: 420px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h3 {
      color: #fff;
      text-align: center;
      margin-bottom: 20px;
      font-size: 24px;
    }

    :deep(.el-button--primary) {
      width: 100%;
      height: 45px;
    }

    :deep(.el-input__inner) {
      height: 45px;
    }

    :deep(.el-input__wrapper) {
      background-color: #283443;
    }
  }
}
</style>
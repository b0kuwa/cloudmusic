<template>
  <el-aside width="200px" class="bg-gray-100 p-0">
    <!-- 路由前进和后退 -->
    <div class="head-left flex text-red-300 justify-end bg-red-500 items-center" style="height: 50px">
      <a href="javascript:;" @click.prevent="back" class="text-red-300 p-1">
        <i class="el-icon-arrow-left"></i>
      </a>
      <a href="javascript:;" @click.prevent="forward" class="text-red-300 p-1">
        <i class="el-icon-arrow-right"></i>
      </a>
    </div>
    <!-- 用户头像 -->
    <div v-if="userinfo.uid" class="flex items-center gap-2 px-2 cursor-default py-2" @click="dialogVisible = true">
      <!-- 登录状态 -->
      <div class="rounded-full bg-white w-12 h-12 border flex justify-center items-center">
        <span class="el-icon-user-solid block user-icon"></span>
      </div>
      <span class="text-sm">未登录</span>
      <span class="el-icon-caret-right text-gray-500"></span>
    </div>
    <!-- 未登录 -->
    <div v-else class="flex items-center gap-2 px-2 cursor-default py-2">
      <div class="rounded-full bg-white w-12 h-12 border flex justify-center items-center">
        <span class="el-icon-user-solid block user-icon"></span>
      </div>
      <span class="text-sm">未登录</span>
      <span class="el-icon-caret-right text-gray-500"></span>
    </div>
    <!-- 路由跳转链接 -->
    <div>
      <router-link
        :to="item.to"
        v-for="(item, index) in list"
        :key="index"
        class="flex items-center gap-1 text-sm py-2 text-gray-800 px-4 cursor-default hover:bg-gray-200"
      >
        <span :class="item.icon"></span>
        {{ item.label }}
      </router-link>
    </div>
    <!-- 登录对话框 -->
    <el-dialog title="登录" :visible.sync="dialogVisible" center width="350px" @close="closeLoginDialog">
      <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="loginForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <button class="login-btn" @click="login">登录</button>
      </span>
    </el-dialog>
  </el-aside>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      list: [
        {
          label: '发现音乐',
          icon: 'iconfont icon-yinle',
          to: { name: 'individuation' }
        },
        {
          label: '私人FM',
          icon: 'iconfont icon-radio',
          to: { name: 'fm' }
        },
        {
          label: '视频',
          icon: 'iconfont icon-VideoClip',
          to: { name: 'video' }
        },
        {
          label: '朋友',
          icon: 'iconfont icon-friend',
          to: { name: 'friend' }
        }
      ],
      // 登录对话框显示
      dialogVisible: false,
      // 登录表单
      loginForm: {
        phone: '',
        password: ''
      },
      // 验证规则
      loginRules: {
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      // 用户信息
      userinfo: {}
    }
  },
  methods: {
    login() {
      this.dialogVisible = false
    },
    closeLoginDialog() {
      this.$refs.loginFormRef.resetFields()
    },
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    }
  }
}
</script>

<style scoped>
.user-icon {
  font-size: 35px !important;
  @apply text-gray-500;
}
ul li span {
  font-size: 20px;
}
.el-dialog {
  border-radius: 10px !important;
}
.login-btn {
  width: 80%;
  letter-spacing: 2px;
  @apply bg-red-600 text-white rounded-md font-bold py-2;
}
.router-link-active {
  @apply text-red-600 bg-gray-300;
}
</style>
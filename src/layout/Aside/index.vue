<template>
  <aside class="bg-gray-50 p-0 w-52">
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
    <el-popover placement="right" trigger="click">
      <ul>
        <li class="cursor-pointer hover:bg-gray-100 px-2 py-1 w-full"><i class="el-icon-switch-button"></i> 退出登录</li>
      </ul>
      <div slot="reference" class="flex items-center gap-2 px-2 cursor-default py-2" @click.stop="showLoginDialog">
        <!-- 登录状态 -->
        <div class="rounded-full bg-white w-12 h-12 border flex justify-center items-center">
          <el-avatar size="medium" :src="userInfo.avatarUrl">
            <i class="el-icon-user"></i>
          </el-avatar>
        </div>
        <span class="text-sm">{{ userInfo.nickname || '未登录' }}</span>
        <span class="el-icon-caret-right text-gray-500"></span>
      </div>
    </el-popover>
    <!-- 路由跳转链接 -->
    <div>
      <router-link
        :to="item.to"
        v-for="(item, index) in list"
        :key="index"
        class="flex items-center gap-1 text-sm py-2 text-gray-800 px-4 cursor-default hover:bg-gray-100"
      >
        <span :class="item.icon"></span>
        {{ item.label }}
      </router-link>
    </div>
    <!-- 登录对话框 -->
    <el-dialog title="登录" :visible.sync="dialogVisible" center width="350px" @close="closeLoginDialog" @keyup.enter="login">
      <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef">
        <el-form-item prop="phone">
          <el-input prefix-icon="el-icon-user" v-model="loginForm.phone" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" type="password" v-model="loginForm.password" placeholder="密码"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <button class="login-btn" @click="login">登录</button>
      </span>
    </el-dialog>
  </aside>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
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
        phone: [{ required: true, message: '手机号不合法', trigger: 'blur' }],
        password: [{ required: true, message: '密码不合法', trigger: 'blur' }]
      },
      // 个人信息对话框显示
      userInfoDialogVisible: false
    }
  },
  computed: {
    ...mapGetters([
        'userInfo',
        'loginStatus'
    ])
  },
  methods: {
    // 登录
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) {
          return
        }
        const res = await this.$api.login(this.loginForm.phone, this.loginForm.password)
        if (res.code !== 200) {
          this.$refs.loginFormRef.resetFields()
          return this.$message.error('登录失败！请仔细检查账号或密码是否有误！')
        }
        this.getUserDetail(res.profile.userId)
        window.localStorage.setItem('cookie', res.cookie)
        window.localStorage.setItem('token', res.token)
        this.dialogVisible = false
        this.$message.success('登录成功！')
        this.$forceUpdate()
      })
    },
    // 获取用户详情
    async getUserDetail(uid) {
      const res = await this.$api.getUserDetail(uid)
      if (res.code !== 200) {
        return this.$message.error('获取用户详情失败！')
      }
      const userInfo = res.profile
      userInfo.level = res.level
      userInfo.listenSongs = res.listenSongs
      userInfo.createTime = res.createTime
      userInfo.createDays = res.createDays
      this.$store.commit('SAVE_USER_INFO', userInfo)
      this.$store.commit('SET_LOGIN_STATUS', true)
      window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    // 显示登录对话框
    showLoginDialog() {
      if (this.userInfo.userId) {
        return
      } else {
        this.dialogVisible = true
      }
    },
    // 关闭登录对话框
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
  @apply text-red-600 bg-gray-200;
}
.el-popover{
    padding: 0 !important;
    @apply px-0 py-3;
}
</style>
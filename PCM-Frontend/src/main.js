import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from './utils/cookies'

import App from './App'

import LoginPage from './views/LoginPage'
import SignupPage from './views/SignupPage'
import ForgetPage from './views/ForgetPage'
import IndexPage from './views/IndexPage'
import MainPage from './views/MainPage'
import ApplyPage from './views/ApplyPage'
import MyPage from './views/MyPage'
import CheckRecordPage from './views/CheckRecordPage'
import QueryRoomPage from './views/QueryRoomPage'
import AdminIndexPage from './views/AdminIndexPage'
import AdminLoginPage from './views/AdminLoginPage'
import AdminForgetPage from './views/AdminForgetPage'
import AdminMainPage from './views/AdminMainPage'
import AdminApprovePage from './views/AdminApprovePage'

Vue.use(Router)

var router = new Router()

router.map({
  '/': {
    component: IndexPage,
    name: 'index'
  },
  '/login': {
    component: LoginPage,
    name: 'login'
  },
  '/signup': {
    component: SignupPage,
    name: 'signup'
  },
  '/forget': {
    component: ForgetPage,
    name: 'forget'
  },
  '/index': {
    component: MainPage,
    name: 'main'
  },
  '/apply': {
    component: ApplyPage,
    name: 'apply'
  },
  '/record': {
    component: CheckRecordPage,
    name: 'check'
  },
  '/query': {
    component: QueryRoomPage,
    name: 'query'
  },
  '/admin': {
    component: AdminIndexPage,
    name: 'admin'
  },
  '/admin/login': {
    component: AdminLoginPage,
    name: 'adminLogin'
  },
  '/admin/forget': {
    component: AdminForgetPage,
    name: 'adminForget'
  },
  'admin/index': {
    component: AdminMainPage,
    name: 'adminMain'
  },
  'admin/approve': {
    component: AdminApprovePage,
    name: 'adminApprove'
  },
  'admin/logout': {
    name: 'adminLogout'
  },
  '/me': {
    component: MyPage,
    name: 'me'
  }
})

router.beforeEach(({ to, next }) => {
  var path = to.path

  if (path !== '/signup' && path !== '/login' && path !== '/') {
    if (document.cookie == "sid=" || document.cookie == "sid") {
      router.go({name: 'index'})
      return
    }
  }

  next()
})
router.start(App, '#app')
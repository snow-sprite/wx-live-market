import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isShowRefresh: wx.getStorageSync('isShowIndexRefresh'),
    textIndex: wx.getStorageSync('globalFontSize') || 1,
    themeIndex: wx.getStorageSync('globalTheme') || 0,
    isAutoNightMode: wx.getStorageSync('isAutoNightModeInGlobal') || false,
    globalAutoNightStartTime: wx.getStorageSync('globalAutoNightStartTime') || '20:00', // start time
    globalAutoNightEndTime: wx.getStorageSync('globalAutoNightEndTime') || '06:00', // end time
    isNightMode: wx.getStorageSync('isNightModeInGlobal') || false
  },
  getters: {
    isShowRefresh: state => state.isShowRefresh,
    textIndex: state => state.textIndex,
    themeIndex: state => Number(state.themeIndex),
    isAutoNightMode: state => state.isAutoNightMode,
    globalAutoNightStartTime: state => state.globalAutoNightStartTime,
    globalAutoNightEndTime: state => state.globalAutoNightEndTime,
    isNightMode: state => state.isNightMode
  },
  mutations: {
    toggleRefresh (state) { // 设置首页是否有刷新
      state.isShowRefresh = !state.isShowRefresh
    },
    pickerTextSizeChange (state, val) { // 设置全局字体
      state.textIndex = val
    },
    pickerThemeChange (state, val) { // 设置主题模式
      val = Number(val)
      state.themeIndex = val
      switch (state.themeIndex) {
        case 1:
          // 设置之家红主题
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#C2362D',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
          break
        case 2:
          // 设置石榴粉主题
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#ED7C98',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
          break
        case 3:
          // 设置芒果橙主题
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#F09D39',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
          break
        case 4:
          // 设置旗鱼蓝主题
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#4892E7',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
          break
        case 5:
          // 设置西瓜绿主题
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#62A47E',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
          break
        case 6:
          // 设置葡萄紫主题
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#613FB0',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
          break
        default:
          // 简约白
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#fff',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
      }
    },
    toggleAutoNightMode (state, val) { // 设置自动夜间模式
      state.isAutoNightMode = val
    },
    pickerAutoNightStartTime (state, startTime) { // 设置start时间
      state.globalAutoNightStartTime = startTime
    },
    pickerAutoNightEndTime (state, endTime) { // 设置end时间
      state.globalAutoNightEndTime = endTime
    },
    toggleNightMode (state, value) { // 设置夜间模式
      state.isNightMode = value
      if (value) {
        // 设置夜间模式下头部背景
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#232323'
        })
        // 底部tabbar夜间模式
        wx.setTabBarStyle({
          color: '#a5a5a5',
          backgroundColor: '#232323',
          selectedColor: '#ffd700'
        })
      } else {
        // 设置非夜间模式下的头部背景
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#ffffff'
        })
        // 底部tabbar非夜间模式
        wx.setTabBarStyle({
          color: '#a5a5a5',
          backgroundColor: '#ffffff',
          selectedColor: '#ffd700'
        })
      }
    }
  }
})

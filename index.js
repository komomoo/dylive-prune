// ==UserScript==
// @name         抖音直播精简2023
// @namespace    https://github.com/komomoo/dylive-prune
// @version      0.12
// @description  移除相关直播、移除礼物栏、移除用户进入直播间消息、移除粉丝牌&礼物弹幕、移除点赞动画、进入直播间时自动屏蔽礼物特效、移除小黄车。源代码https://github.com/komomoo/dylive-prune，欢迎pr👏
// @author       komo
// @match        https://live.douyin.com/*
// @icon         https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico
// @grant        none
// @run-at       document-end
// ==/UserScript==

;(function () {
  'use strict'

  const css = `
  /* 移除礼物栏 */
  .aqK_4_5U{display: none !important;}
  /* 移除相关直播 */
  .evLAq21m{display: none !important;}
  /* 网页全屏：全屏高度 */
  .EDvjMGPs.FKQqfehj{height:100% !important;}
  /* 弹幕区用户进入直播间消息 */
  .webcast-chatroom___bottom-message{display:none !important;}
  /* 粉丝牌&礼物弹幕 */
  .ZUGMpBcb{display:none !important;}
  /* 点赞动画 */
  #flutterLike{display:none !important;}
  /* 礼物特效栏 */
  .VLPIYL3T{display:none !important;}
  /* 小黄车 */
  .x5oLQRf4{display:none !important;}
  /* 顶栏按钮：客户端 */
  .wobrT4EE{display:none !important;}
  /* 顶栏按钮：快捷访问 */
  div.iqAeEhI1:nth-child(3){display:none !important;}
  `
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(css))
  document.querySelector('head').append(style)

  // 点击关闭礼物按钮
  function giftClickClose() {
    const giftBtnDom = '.xg-inner-controls > xg-right-grid > xg-icon:nth-child(5) > div > div:nth-child(2)'
    const target = document.querySelector('.basicPlayer')
    const observer = new MutationObserver((records) => {
      const gifBtn = document.querySelector(giftBtnDom)
      if (gifBtn) {
        setTimeout(() => gifBtn.click(), 50)
        observer.disconnect()
      }
    })
    observer.observe(target, { childList: true })
  }
  setTimeout(giftClickClose, 50)
})()

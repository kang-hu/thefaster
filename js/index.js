import "babel-polyfill"
import Vue from 'vue'
import "jquery/jquery"
import 'gsap'
import {TweenMax, Power2, TimelineMax} from "gsap/TweenMax"

import imgGameBg from '../images/pc_bg.jpg'
import imgGameBgMb from '../images/mobile_bg.jpg'
import imgNpcHand from '../images/deal_hand.png'
import imgCardT1 from '../images/T1.png'
import imgCardT3 from '../images/T3.png'
import imgCardT5 from '../images/T5.png'
import imgCardT7 from '../images/T7.png'
import imgCardT11 from '../images/T11.png'
import imgCard1 from '../images/c1.png'
import imgCard11 from '../images/c11.png'
import imgCard12 from '../images/c12.png'
import imgCard13 from '../images/c13.png'
import imgCardG from '../images/G.png'
import imgTitle from '../images/game_title.png'
import imgBoss from '../images/boss.png'
import imgStart from '../images/start_icon.png'
import { setTimeout } from "core-js"
import { id } from "postcss-selector-parser"
/*
*
* Utility
*
*/

window.RTApi = {
  'checkLogin' : 'https://member.ruten.com.tw/user/ajax_header_slice.php',
}

window.common = {}
common.mobileCheck = function (data) {
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(data)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(data.substr(0,4)))return true
  else return false
}

common.getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

common.isMobile = common.mobileCheck(window.navigator.userAgent || window.navigator.vendor || window.opera)

common.GetCookie = function(name){
  var result = null
  var myCookie = " " + document.cookie + ";"
  var searchName = " " + name + "="
  var startOfCookie = myCookie.indexOf(searchName)
  var endOfCookie
  if (startOfCookie != -1){
    startOfCookie += searchName.length
    endOfCookie = myCookie.indexOf(";",startOfCookie)
    result = unescape(myCookie.substring(startOfCookie, endOfCookie))
  }
  return result
}

common.checkOffline = function() {
  return false
}

common.checkDoubleEleventDay = function() {
  var nowDate = this.getDate();
  return 20181111 <= nowDate && nowDate < 20181112;
}

common.getDate = function() {
  let today = new Date()
  let month = today.getMonth() + 1
  let day = today.getDate()
  return Number(today.getFullYear() + ((month > 9 ? '' : '0') + month) + ((day > 9 ? '' : '0') + day))
}

/*
*
* Page
*
*/

window.GameObj = function (w,h,x,y,deg,alpha) {
  this.w = w
  this.h = h
  this.x = x
  this.y = y
  this.deg = deg
  this.alpha = alpha
  this.show = true
  this.handleClick = function(mouse) {
    if (this.x < mouse.offsetX && this.x + this.w > mouse.offsetX && this.y < mouse.offsetY && this.y + this.h > mouse.offsetY) {
      return true;
    }
    return false;
  }
}

GameObj.prototype.getCenter = function(){
  return {
    x: - this.w / 2,
    y: - this.h / 2
  }
}

window.tweens = {
  tweenNpcHand: null,
}

window.gameTimers = {
  timerCardTrans: null,
  setCardTrans: function () {
    gameConfig.cardTransIndex = common.getRandomInt(4,gameConfig.cardArr.length - 1)
    return setInterval(function(){
      gameConfig.cardTransIndex = gameConfig.cardTransIndex + 1 >= gameConfig.cardArr.length ? 4 : gameConfig.cardTransIndex + 1
      gameConfig.curCardImg = gameConfig.cardTransArr[gameConfig.cardTransIndex]
    },500)
  },
  timerNpc: null,
  timerMsg: null,
  msgWaiting: 2000,
}

window.gameConfig = {
  cardTransArr: [],
  cardTransIndex: 4,
  eachWaiting:  common.isMobile ? 1500 : 500,
  showFlash: false,
  curCardImg: new Image(),
}

window.gameObjConfig = {
  card: '',
  dealHand: '',
  title: '',
  boss: '',
  start: '',
  npcHand: '',
  onTableCard1: '',
  onTableCard2: '',
}



var app = new Vue({
  el: '#app',
  data: {
    bannerIsEleven: common.checkDoubleEleventDay(),
    permission: true,
    load: 0,
    isLoading: 'true',
    showPopup: true,
    showMsg: false,
    showRule: false,
    showAwardSmall: false,
    showAwardBig: false,
    showAlreadyGet: false,
    showCheckMine: true,
    showAgain: false,
    awardPoints: 1,
    msgText: '',
    gameState: 1, // 記錄目前遊戲進行階段 1 初始遊戲 2 遊戲感應ACTIVE 3 動畫中 4 遊戲結束 5等待Ajax
    getDeadS: false,
    getTicketNum: 1,
    curCardType: 0, // 0 死蝦 1 普通 2 點數
    curAward: 5,//5 6 7 8 9
    user: {
      rid: '',
      name: '',
    }
  },
  computed: {
    loadingCount: function() {
      var vm = this
      if( vm.load >= 11) {
        setTimeout(()=>{vm.isLoading = false})
      }
      return ((this.load / 11) * 100).toFixed()
    }
  },
  mounted: function () {
    var vm = this

    function drawImg (imgObj,config){
      ctx.save()
      ctx.beginPath()
      ctx.globalAlpha = config.alpha
      ctx.translate(config.x,config.y)
      ctx.rotate(config.deg*Math.PI/180)
      ctx.drawImage(imgObj,config.getCenter().x,config.getCenter().y,config.w,config.h)
      ctx.closePath()
      ctx.restore()
    }

    window.canvas = document.getElementById("mycanvas"),
    window.ctx = window.canvas.getContext("2d")
    //建立畫布

    var isMobile = common.mobileCheck(window.navigator.userAgent || window.navigator.vendor || window.opera)

    canvas.width = isMobile ? 640 : 1000
    canvas.height = isMobile ? 1138 : 640

    // load IMG Start
    var title = new Image()
    title.src = imgTitle
    var boss = new Image()
    boss.src = imgBoss
    var bg = new Image()
    bg.src = isMobile ? imgGameBgMb : imgGameBg
    var npcHand = new Image()
    npcHand.src = imgNpcHand
    var startIcon = new Image()
    startIcon.src = imgStart
    var onTableCard1 = new Image()
    onTableCard1.src = imgCard1
    var onTableCard2 = new Image()
    onTableCard2.src = imgCard12

    // 0~4 > point 5 > 死蝦 6~end > 點數
    gameConfig.cardSrcArr = [imgCardT1, imgCardT3, imgCardT5, imgCardT7, imgCardT11, imgCardG, imgCard1, imgCard11, imgCard12, imgCard13,]
    gameConfig.cardArr = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()]
    gameConfig.cardArr.forEach((item,index) => {
      item.src = gameConfig.cardSrcArr[index]
      item.onload = function(){
        vm.load = vm.load + 1
      }
    })

    // load IMG END
    function render () {
      ctx.save()
      ctx.drawImage(bg,0,0,canvas.width,canvas.height)
      // start drawContent
      if (common.isMobile) {
        drawImg(onTableCard1, gameObjConfig.onTableCard1)
        drawImg(onTableCard2, gameObjConfig.onTableCard2)
      }

      drawImg(gameConfig.cardArr[gameConfig.cardTransIndex], gameObjConfig.card)
      drawImg(npcHand, gameObjConfig.dealHand)

      if(gameObjConfig.start.show) {
        drawImg(startIcon, gameObjConfig.start)
      }

      drawImg(npcHand, gameObjConfig.npcHand)
      drawImg(title, gameObjConfig.title)

      if(gameConfig.showFlash) {
        ctx.fillStyle = "#af4d4d"
        ctx.fillRect(0,0,canvas.width,canvas.height)
      }

      drawImg(boss, gameObjConfig.boss)
      ctx.restore()

      requestAnimationFrame(render)
    }

    function init (){
      vm.checkLogin()
      vm.resetGame()
      requestAnimationFrame(render)
    }

    init()
  },
  methods: {
    saveAward: function() {
      var vm = this
      var gameType = 'GAME_' + vm.curAward

      function showSave(point) {
        vm.showPopup = true
        vm.awardPoints = point

        switch (vm.curAward) {
          case 5:
            vm.showAwardSmall = true
            break
          case 6:
            vm.showAwardSmall = true
            break
          case 7:
            vm.showAwardSmall = true
            break
          case 8:
            vm.showAwardBig = true
            break
          case 9:
            vm.showAwardBig = true
            break
        }
      }
      showSave(100)
      // $.ajax({
      //   url: `https://rapi.ruten.com.tw/api/coin/v1/deposit`,
      //   dataType: 'json',
      //   type: 'POST',
      //   data: {
      //     'ctrl_rowid': vm.user.rid,
      //     'ref_event': gameType
      //   },
      //   xhrFields: {
      //     withCredentials: true
      //   },
      //   success: function(res) {
      //     showSave(res.data.amount)
      //   },
      //   error: function(res) {
      //     try {
      //       var response = JSON.parse(res.responseText)
      //       if(response.status === 'fail') {
      //         if(response.data.code === 401) {
      //           alert('恭喜您！已達5000彩票上限，不會再累計囉~記得雙11當天，回來盡情使用唷！')
      //           vm.showAgain = true
      //         } else {
      //           alert(response.data.message)
      //           vm.showAgain = true
      //         }
      //       }
      //     } catch (error) {
      //       alert('系統忙碌中')
      //       vm.showAgain = true
      //     }
      //   },
      //   complete: function() {
      //     vm.gameState = 4
      //   }
      // })
    },
    checkLogin: function () {
      var vm = this
      vm.user.rid = ''
      vm.user.name = 'test_user'
      vm.load = vm.load + 1
    },
    popEnter: function (el, done) {
      var tween = TweenMax.fromTo(el,0.3,{opacity:0 , yPercent: -50},{opacity:1 ,yPercent: 0, ease: Back.easeInOut.config(2.5), onComplete:()=>{done()}})
    },
    msgEnter: function (el, done) {
      TweenMax.fromTo(el,0.3,{y:'100%'},{y:'0%' , ease: Power2.easeOut, onComplete:()=>{done()}})
    },
    msgLeave: function (el, done) {
      TweenMax.fromTo(el,0.3,{y:'0%'},{y:'100%' ,ease: Power2.easeOut ,onComplete:()=>{done()}})
    },
    loadLeave: function (el, done) {
      setTimeout(()=>{TweenMax.to(el,1,{alpha: 0, onComplete:()=>{done()}})})
    },
    beforeStartGame: function () {
      var vm = this
      vm.gameState = 5
      vm.showPopup = true
      vm.showRule = true
      vm.gameState = 1
      // $.ajax({
      //   url: `https://rapi.ruten.com.tw/api/users/v1/${vm.user.name}/coin/permission`,
      //   dataType: 'json',
      //   type: 'GET',
      //   data: {
      //     'ref_event': 'GAME_'+vm.curAward
      //   },
      //   xhrFields: {
      //     withCredentials: true
      //   },
      //   success: function(res) {
      //     vm.showPopup = true
      //     if (res.data.available) {
      //       vm.showRule = true

      //     } else {
      //       vm.showAlreadyGet = true
      //       vm.gameState = 1
      //       vm.permission = false
      //     }
      //   },
      //   error: function(res) {
      //     // alert('連線失敗')
      //     // location.reload()
      //   },
      //   complete: function() {
      //     vm.gameState = 1
      //   }
      // })
    },
    startGame: function () {
      var vm = this
      vm.showPopup = false
      vm.showRule = false
      vm.showAlreadyGet = false
      vm.npcHandAni()
      vm.startGameAni()
    },
    userAction: function () {
      var vm = this
      switch(vm.gameState) {
        case 1:
          vm.beforeStartGame()
          // if(!common.checkOffline()) {
          //   if(vm.user.rid && vm.user.name){
          //     vm.beforeStartGame()
          //   } else {
          //     location.href = 'https://member.ruten.com.tw/user/login.htm?refer='+window.encodeURIComponent(window.location.href)
          //   }
          // } else {
          //   alert(`「活動已結束，感謝您的參與！請持續關注露天活動，好康不錯過～」`)
          // }

          break
        case 2:
          // 動畫到位感應遊戲階段
          tweens.tweenNpcHand.pause()
          gameObjConfig.npcHand.x = -500
          gameConfig.showFlash = true
          setTimeout(() => {
            gameConfig.showFlash = false
          }, 50)
          vm.replyToGetCard()
          break
        case 3:
          // 動畫中
          vm.showMsg =  true
          vm.msgText = 'ㄟㄟ~不要亂點喔！！'
          clearTimeout(gameTimers.timerMsg)
          if(!vm.getDeadS) {
            gameTimers.timerMsg = setTimeout(() => { vm.showMsg = false }, gameTimers.msgWaiting)
          }
          break
        case 4:
          // 已進入結束遊戲狀態 準備reset
          vm.resetGame()
        case 5:
          // ajax連線階段
      }
    },
    replyToGetCard() {
      var vm = this
      switch(vm.curCardType) {
        case 0:
          // 點擊獲得點數的case
          clearTimeout(gameTimers.timerWatingThisRound)
          vm.gameState = 5
          if (vm.permission) {
            vm.saveAward()
          } else {
            vm.showPopup = true
            vm.showCheckMine = true
            vm.gameState = 4
          }
          break
        case 1:
          // 拍到死蝦，遊戲結束，點擊後重新開始
          clearTimeout(gameTimers.timerWatingThisRound)
          clearTimeout(gameTimers.timerMsg)
          vm.gameState = 4
          vm.showMsg =  true
          vm.getDeadS = true
          vm.showAgain = true
          break
        case 2:
          // 拍到一般卡片，什麼事情都沒發生，去下一局
          clearTimeout(gameTimers.timerMsg)
          vm.showMsg =  true
          vm.msgText = '不要亂拿，這不是唷！！'
          if(!vm.getDeadS) {
            gameTimers.timerMsg = setTimeout(() => { vm.showMsg = false }, gameTimers.msgWaiting)
          }
          break
      }
    },
    npcHandAni: function () {
      tweens.tweenNpcHand = TweenMax.to(gameObjConfig.npcHand,1,{
        x: 20,
        deg: 30,
        repeat: -1,
        yoyo: true,
        ease: Back.easeInOut.config(1.0),
      })
    },
    resetGame:function () {
      var vm = this

      gameObjConfig.card = common.isMobile ? new GameObj(250,344,canvas.width,-200,310,1) : new GameObj(250,344,canvas.width,152,310,1)
      gameObjConfig.dealHand = common.isMobile ? new GameObj(500,500,canvas.width - 55,-220,190,1) : new GameObj(500,500,canvas.width - 55,-120,190,1)
      gameObjConfig.title = common.isMobile ? new GameObj(400,110,canvas.width/2,86,0,1) : new GameObj(400,110,canvas.width/2,70,0,1)
      gameObjConfig.boss = common.isMobile ? new GameObj(360,360,140,320,0,1) : new GameObj(240, 240, 200, 310, 0,1)
      gameObjConfig.start = common.isMobile ? new GameObj(160,160,450,920,0,1) : new GameObj(160, 160, 360, 355, 0, 1)
      gameObjConfig.npcHand = new GameObj(400,400,-65,250,0,1)
      gameObjConfig.onTableCard1 = common.isMobile ? new GameObj(240,330,400,400,-16,1) : new GameObj(200,275,300,300,-16,1)
      gameObjConfig.onTableCard2 = common.isMobile ? new GameObj(240,330,410,540,0,1) : new GameObj(200,275,310,400,0,1)

      vm.showPopup = false
      vm.showRule = false
      vm.showMsg = false
      vm.showAwardBig = false
      vm.showAwardSmall = false
      vm.showAgain = false
      vm.getDeadS = false
      vm.showAlreadyGet = false
      vm.showCheckMine = false
      vm.curCardType = 0
      vm.curAward = 5
      vm.gameState = 1
      vm.permission = true

      if(gameTimers.timerCardTrans) {
        clearTimeout(gameTimers.timerCardTrans)
      }

      gameTimers.timerCardTrans = gameTimers.setCardTrans()
      // 遊戲重新執行 gamestate >' + this.gameState
    },
    startGameAni:function () {
      var vm = this
      vm.gameState = 3

      var tlStart = new TimelineMax({
        paused: true,
        onStart: function() {
        },
        onComplete: function(){
          setTimeout(() => {
            vm.playOneTime()
          }, 300)
        }
      })

      var startIconMoveTo = common.isMobile ? 1600 : -200

      tlStart.add('start')
        .to(gameObjConfig.title,0.3,{
          y: -200,
          ease: Back.easeInOut.config(2.5)
        })
        .to(gameObjConfig.start,0.3,{
          y: startIconMoveTo,
          ease: Back.easeInOut.config(2.5)
        },'start')
        .to(gameObjConfig.dealHand,0.3,{
          y: -250,
          ease: Back.easeInOut.config(2.5)
        },'start')
        .to(gameObjConfig.card,0.3,{
          y: -200,
          ease: Back.easeInOut.config(2.5)
        },'start')
        .add(
          TweenMax.to(gameObjConfig.boss,0.3,{
            y: -200,
            ease: Back.easeInOut.config(2.5)
          }),'start'
        )
        .add('setToLocation')
        .to(gameObjConfig.dealHand,0.5,{
          y: -120,
          ease: Power0.easeNone
        },'setToLocation')
        .to(gameObjConfig.card,0.5,{
          y: 152,
          ease: Power0.easeNone
        },'setToLocation')

      tlStart.play()
    },
    playOneTime: function () {
      var vm = this
      vm.gameState = 3

      var min = common.isMobile ? 1200 : 400
      var max = common.isMobile ? 1499 : 499

      clearInterval(gameTimers.timerCardTrans)
      vm.curCardType = common.getRandomInt(0, 2)

      switch (vm.curCardType) {
        case 0:
          gameConfig.cardTransIndex = common.getRandomInt(0, 4)
          vm.curAward = gameConfig.cardTransIndex + 5
          break
        case 1:
          gameConfig.cardTransIndex = 5
          break
        case 2:
          gameConfig.cardTransIndex = common.getRandomInt(6, gameConfig.cardArr.length - 1)
          break
      }

      var tlDeal= new TimelineMax({
        paused: true,
        onComplete: function(){
          vm.gameState = 2
          if(vm.curCardType === 0) {
            gameTimers.timerWatingThisRound = setTimeout(()=>{
              vm.npcWin()
              vm.gameState = 5
            },common.getRandomInt(min, max))
          } else {
            gameTimers.timerWatingThisRound = setTimeout(()=>{
              vm.playNextCard()
            },gameConfig.eachWaiting)
          }
        }
      })

      tlDeal
        .add('deal')
        .to(gameObjConfig.dealHand,0.3,{
          deg: 240,
          y: -120,
          ease: Back.easeInOut.config(2)
        },'deal')
        .to(gameObjConfig.card,0.5,{
          x: 260,
          y: 325,
          deg: 30 - common.getRandomInt(0, 60),
          delay: 0.1,
          ease: Power2.easeOut,
        },'deal')

      setTimeout(()=>{
        tlDeal.play(0)
      },300)
    },
    playNextCard: function () {
      var vm = this
      this.gameState = 3

      var tlClearReset = new TimelineMax({
        paused: true,
        onComplete: function(){

          gameTimers.timerCardTrans = gameTimers.setCardTrans()

          setTimeout(()=>{
            vm.playOneTime()
          },500)

        }
      })

      tlClearReset
        .to(gameObjConfig.card,0.5,{
          x: -500,
          y: -40,
          deg: -30
        })
        .add('cardOut')
        .set(gameObjConfig.card,{
          x: canvas.width,
          y: 152,
          deg: 310,
        },'cardOut'+0.3)
        .set(gameObjConfig.dealHand,{
          x: canvas.width - 55,
          y: -120,
          deg: 190,
        },'cardOut'+0.3)

      tlClearReset.play(0)
    },
    npcWin: function () {
      var vm = this
      vm.gameState = 3
      clearTimeout(gameTimers.timerMsg)
      TweenMax.to(gameObjConfig.npcHand,0.25,{
        x: 80,
        deg: 100,
        ease: Back.easeInOut.config(2),
        onComplete: function () {
          vm.showMsg = true
          vm.msgText = "關主獲勝，你太慢了！"
          vm.showAgain = true
        }
      })
    }
  }
})

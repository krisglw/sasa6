<template>
  <main v-cloak>
    <header class="top" v-if='k1'>
      <span class='top_title'>今日特卖</span>
      <div class="countdown">
        <span class=''>剩余</span>
        <span class='circle'>{{h}}</span>
        <span class=''>:</span>
        <span class='circle'>{{m}}</span>
        <span class=''>:</span>
        <span class='circle'>{{s}}</span>
      </div>
    </header>
    <header class="top2" v-if="k2">
      <span class='top_title'>今日特卖</span>
      <div class="countdown">
        <span class=''>剩余</span>
        <span class='circle'>{{h}}</span>
        <span class=''>:</span>
        <span class='circle'>{{m}}</span>
        <span class=''>:</span>
        <span class='circle'>{{s}}</span>
      </div>
    </header>
    <div class="list">
      <ul>
        <router-link to='/details'>
          <li v-for='(item,i) in list'>
          	<div class="left">
              <img :src="item.pic" alt="">
            </div>
            <div class="right">
              <h3>{{item.title}}</h3>
              <p>{{item.desc}}</p>
              <div class="proBox">
                <div class="pro">
                  <span class="proBar" :style="{width:item.pro}"></span>
                </div>
                <span class="num">已抢{{item.sale}}</span>
              </div>
              <div class="s_price">
                <span class="newPrice">{{item.newPrice}}</span>
                <del class="oldPrice">{{item.oldPrice}}</del>
                <span class="buy">
                  立即抢购
                </span>
              </div>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="blank"></div>
  </main>
</template>

<script>
  export default{
    data(){
      return{
        h:'',
        m:'',
        s:'',
        countDownList: '00时00分00秒',
        actEndTime: '2050-11-19 18:50:00',
        k1:true,
        k2:false,
        list:''
      }
    },
    created() {
    　　　　this.countDown();
    },
    mounted(){
      this.$http.get('./data/sale.json')
      .then((response)=>{
        this.list=response.data.list
      })
      .catch(function(error){
        console.log(error)
      }),
      window.addEventListener("scroll",this.top,true)
    },
    methods:{
      timeFormat(param) {
      　　　　　　return param < 10 ? '0' + param : param;
      },
      countDown(it) {
　　　　　　var interval = setInterval(() => {
　　　　　　　　// 获取当前时间，同时得到活动结束时间数组
　　　　　　　　let newTime = new Date().getTime();
　　　　　　　　// 对结束时间进行处理渲染到页面
　　　　　　　　let endTime = new Date(this.actEndTime).getTime();
　　　　　　　　let obj = null;
　　　　　　　　// 如果活动未结束，对时间进行处理
　　　　　　　　if (endTime - newTime > 0) {
　　　　　　　　　　let time = (endTime - newTime) / 1000;
　　　　　　　　　　// 获取天、时、分、秒
　　　　　　　　　　let day = parseInt(time / (60 * 60 * 24));
　　　　　　　　　　let hou = parseInt(time % (60 * 60 * 24) / 3600);
　　　　　　　　　　let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
　　　　　　　　　　let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
　　　　　　　　　　obj = {
　　　　　　　　　　　　day: this.timeFormat(day),
　　　　　　　　　　　　hou: this.timeFormat(hou),
　　　　　　　　　　　　min: this.timeFormat(min),
　　　　　　　　　　　　sec: this.timeFormat(sec)
　　　　　　　　　　};
      } else { // 活动已结束，全部设置为'00'
　　　　　　　　　　obj = {
　　　　　　　　　　　　day: '00',
　　　　　　　　　　　　hou: '00',
　　　　　　　　　　　　min: '00',
　　　　　　　　　　　　sec: '00'
　　　　　　　　　　};
　　　　　　　　　　clearInterval(interval);
　　　　　　　　}
      this.h=obj.hou;
      this.m=obj.min;
      this.s=obj.sec;
      this.countDownList = obj.hou + '时' + obj.min + '分' + obj.sec + '秒';
      　　　　　　}, 1000);
      　　　　},
      top(){
        let h=document.documentElement.scrollTop||document.body.scrollTop
        h>10?(this.k1=false):(this.k1=true)
        h>10?(this.k2=true):(this.k2=false)
    }

    }
  }
</script>

<style scoped="">
  [v-cloak]{
    display: none;
  }
  .top{
    text-align: center;
    color: #fff;
    padding: 0;
    /* height: 100px; */
    padding-bottom: 70px;
    padding-top: 30px;
    background: url(../../../data/images/bg.png);
    margin-top: 0;
    width: 100%;
  }
  .top_title{
    font-size: 1.4rem;
  }
  .countdown{
    display: inline-block;
    margin-bottom: 0;
  }
  .circle{
    display: inline-block;
    width: 1.375rem;
    height: 1.375rem;
    line-height: 1.375rem;
    text-align: center;
    font-size: 12px;
    color: #ed008c;
    background-color: #fff;
    border-radius: 50%;
  }
  .top2{
    text-align: center;
    color: #fff;
    padding: 10px 0px;
    background: url(../../../data/images/bg.png);
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .list{
    background: #F6F6F6;

  }
  .list ul{
    width: 96%;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .list li{
    margin: 10px 0px;
    background-color: #fff;
    padding: 15px 3px;
    width: 100%;
    border-radius: 15px;
    box-sizing: border-box;
  }
  .list li:nth-child(1){
    margin-top: -40px;
  }
  .list li .left{
    width: 30%;
    display: inline-block;
    float: left;
  }
  .left img{
    width: 100%;
  }
  .list li .right{
    width: 66%;
    display: inline-block;
    float: right;
    }
  .right h3{
    font-size:0.9rem;
    color: #333;
    height: 42px;
    width: 95%;
  }
  .right p{
    font-size: 0.8rem;
    height: 1rem;
   overflow: hidden;
   text-overflow: ellipsis;
   margin: 3px 0px 10px;
   width: 95%;
   white-space: nowrap;
   color: #666666;
  }
  .proBox{
    width:100%;
    overflow: hidden;
  }
 .right .pro{
   width: 64%;
   height: 10px;
   background-color: #eaeaea;
   border-radius: 35px;
   position: relative;
   margin: 5px 0px 10px;
   display: inline-block;
 }
  .right .pro .proBar{
    height: 10px;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 35px;
    color: #999999;
    background: linear-gradient(90deg,#ed008c 7%,#ff3d76);
  }
 .proBox .num{
    width: 34%;
    font-size: 0.7rem;
    float: right;
    margin-top: 3px;
    padding-left: 5px;
    box-sizing: border-box;
    color: #999999;
    width: ({{item.pro}})%;
  }
  .newPrice{
    color:#ed008c;
    font-size: 1.1rem;
  }
  .oldPrice{
    color: #999;
    font-size: 0.75rem;
  }
  .buy{
    padding: 5px 15px;
    border-radius: 35px;
    background: linear-gradient(90deg,#ed008c 7%,#ff3d76);
    color: #fff;
    font-size: 0.85rem;
    float: right;
    margin-right: 15px;
  }
  .blank{
    width: 100%;
    height: 60px;
    background-color: #F6F6F6;
  }
</style>

<template>
  <main>
    <router-view></router-view>
    <nav>
      <ul class="ul">
        <li @click="change2(0)" :class="{navCurrent:0==num}">
          <router-link to='/index'>
            <div :class="{navImgBox:true,navImg:true2==true}">
             <img src="../../assets/images/05.png" alt="" class="img_gray" >
              <img src="../../assets/images/nav1.png" alt=""  class="img_red">
            </div>
             <span>首页</span>
          </router-link>
        </li>
        <li  @click="change2(1)" :class="{navCurrent:1==num}">
          <router-link to='/sort'>
            <div :class="{navImgBox:true,navImg:true2==true}">
              <img src="../../assets/images/nav2.png" alt="" class="img_gray">
              <img src="../../assets/images/02.png" alt=""  class="img_red">
            </div>
             <span>分类</span>
          </router-link>
         </li>
        <li  @click="change2(2)" :class="{navCurrent:2==num}">
         <router-link to='/sale'>
           <div :class="{navImgBox:true,navImg:true2==true}">
             <img src="../../assets/images/nav3.png" alt="" class="img_gray">
             <img src="../../assets/images/03.png" alt=""  class="img_red" @click="change()">

           </div>
            <span>特卖</span>
          </router-link>
         </li>
        <li  @click="change2(3)" :class="{navCurrent:3==num}">
         <router-link to='/cart'>
             <div :class="{navImgBox:true,navImg:true2==true}">
               <img src="../../assets/images/nav4.png" alt="" class="img_gray">
               <img src="../../assets/images/04.png" alt=""  class="img_red">
               <em class="number2" v-show='emptyCart'>{{num}}</em>
             </div>
             <span>购物车</span>
          </router-link>
        </li>
        <li @click="change2(3)" :class="{navCurrent:4==num}">
         <router-link to='/login'>
            <div :class="{navImgBox:true,navImg:true2==true}">
              <img src="../../assets/images/nav5.png" alt="" class="img_gray">
              <img src="../../assets/images/nav5.png" alt="" class="img_gray">
            </div>
            <span>我的</span>
          </router-link>
         </li>
      </ul>
    </nav>
  </main>
</template>

<script>
  export default{
    data(){
      return{
         true1:false,
         true2:true,
         emptyCart:false,
         num:0
      }
    },
    methods:{
      change(){
        this.true1=!this.true1
        // this.true2=!this.true2
      },
      change2(i){
        this.num=i
      }

    }
  }
</script>

<style scoped>
  .navCurrent a{
    color: #ed008c;
  }
  .navCurrent img:nth-of-type(1){
    display: none;
  }
  .navCurrent img:nth-of-type(2){
    display: inline-block;
  }
  nav{
    padding: 5px 0px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: 100;

  }
  ul{
    width: 100%;
    overflow: hidden;
  }
  li{
    list-style: none;
    float: left;
    width: 20%;
    text-align: center;
    margin: 0;
  }
  .navImg{
    width: 1.3rem;
    height: 1.3rem;
    position: relative;
    margin:5px auto;
  }
    .img_gray{
      display: inline-block;
    }
    .img_red{
      display: none;
    }
  .img_gray,.img_red{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;

  }
  span{
    display: block;
    font-size: 0.75rem;
  }
  .number2{
    display: inline-block;
    width:12px;
    height:12px;
    text-align: center;
    line-height:12px;
    background-color: #ED008C;
    color:#fff ;
    border-radius: 50%;
    font-size: 0.7rem;
    float: right;
    margin-top: -5px;
    margin-right: -2px;
    z-index: 2;
    position: relative;
  }
</style>

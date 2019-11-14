<template>
  <main>
    <div class="register2">
      <h3>注册</h3>
    </div>
    <div class="registerBox k_padding6">
      <div class="phone_number">
        <input type="text" placeholder="请输入手机／邮箱" v-model="msg4">
        <img src="../../assets/images/clear.png" alt="" class="clear1 clearIcon" v-show="msg4" @click="clear4()">
      </div>
    </div>
    <!-- 滑块 -->
    <div class="slide">
      <div class="slide_iconBox">
        <span class="slide_icon"></span>
      </div>
      <span class="slide_txt">向右拖动滑块填充拼图</span>
    </div>
    <div class="login3 k_padding6">
      <router-link to='/login'>
        <p>已有账号？<span>登录</span></p>
      </router-link>
    </div>
  </main>
</template>

<script>
  export default{
    data(){
      return{
        msg4:'',
        pubmsg:''
      }
    },
    methods:{
      clear4(){
        this.msg4=''
      }
    }
  }
</script>

<style scoped="">
  .k_padding6{
    padding:0px 25px ;
    box-sizing: border-box;
  }
  .register2 h3{
    text-align: center;
    padding: 40px 0px 20px;
    box-sizing: border-box;
    font-weight: bolder;
    font-size: 1.25rem;
    color: #333333;
  }
  .registerBox input{
    width:100%;
    outline: none;
    border: none;
    padding: 10px 0px;
    border-bottom: 1px solid #CCCCCC;
    margin: 5px 0px;
    font-size: 0.9rem;
  }
  .phone_number{
    position: relative;
  }
  .clear1{
    position: absolute;
    right: 15px;
    top: 16px;
    width: 0.9rem;
    height: 0.9rem;
  }
  /* 滑块 */
  .slide{
    height: 50px;
    background-color: #F6F6F6;
    border-radius: 20px;
    margin: 20px auto;
    width: 85%;
    position: relative;
    text-align: center;
    border: 1px solid #F5F5F5;
    line-height: 50px;
    color: #45494c;
  }
  .slide_iconBox{
    position: absolute;
    left: 0;
    top: 0;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,.3);

  }
  .slide_icon{
      display: inline-block;
      background-image: url("../../assets/images/icon_light.png");
      background-position: 0 -26px;
      background-size: 32px 544px;
      width: 14px;
      height: 10px;
      position: absolute;
      left: 17px;
      top: 21px;
  }
  .login3{
    width: 100%;
  }
  .login3 p{
    width: 30%;
    float: right;
    font-size: 0.85rem;
  }
  .login3 span{
    color: #E4007F;
  }
</style>

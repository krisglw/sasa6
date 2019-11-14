<template>
  <main>
    <header class="k_padding4">
      <router-link to='/index'>
        <div class="index_img">
          <img src="../../assets/images/05.png" alt="" class="backIndex2">
        </div>
      </router-link>
    </header>
    <div class="getPass">
      <h3>找回密码</h3>
    </div>
    <div class="login2 k_padding5">
      <div class="phone_number">
        <input type="text" placeholder="请输入手机号码" v-model="msg5">
        <img src="../../assets/images/clear.png" alt="" class="clear1 clearIcon" v-show="msg5" @click="clear5()">
      </div>
      <div class="getCode">
        <input type="text" placeholder="请输入验证码" v-model="verify2">
        <span class="getCode2">获取验证码</span>
      </div>
    </div>
    <!-- 滑块 -->
    <div class="slide">
      <div class="slide_iconBox">
        <span class="slide_icon"></span>
      </div>
      <span class="slide_txt">向右拖动滑块填充拼图</span>
    </div>
    <!-- 登录 -->
    <div :class="{loginBtn:true,loginBtn2:0==num}">
      <span>下一步</span>
    </div>
    <span v-show="false">{{numChange3}}</span>
  </main>
</template>

<script>
  export default{
    data(){
      return{
        msg5:'',
        verify2:'',
        num:1
      }
    },
    computed:{
      numChange3(){
        if((this.msg5!='')&&(this.verify2!='')){
          this.num=0
        }
        else{
          this.num=1
        }
        return this.msg5+this.verify2;
      }
    },
    methods:{
      clear5(){
        this.msg5=''
      }
    }
  }
</script>

<style scoped="">
  .k_padding4{
    padding:0px 15px ;
    box-sizing: border-box;
  }
  .k_padding5{
    padding:0px 25px ;
    box-sizing: border-box;
  }
  header{
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
  }
  .index_img{
    padding:20px 15px;
    box-sizing: border-box;
  }
  header .backIndex2{
    float: right;
    width: 1.8rem;
    height: 1.8rem;
  }
  .getPass{
    text-align: center;
    padding: 20px 0px 10px;
    box-sizing: border-box;
  }
  .getPass h3{
    font-weight: bolder;
    font-size: 1.25rem;
    color: #333333;
  }
  .login2 input{
    width:100%;
    outline: none;
    border: none;
    padding: 10px 0px;
    border-bottom: 1px solid #CCCCCC;
    margin: 5px 0px;
    font-size: 0.9rem;

  }
  .getCode{
    position: relative;
  }
  .getCode2{
    position: absolute;
    right: 10px;
    top: 15px;
    color: #ed008c;
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
  /* 登录 */
  .loginBtn{
    width: 85%;
    text-align: center;
    padding: 15px 0px;
    box-sizing: border-box;
    background-image: linear-gradient(90deg,#f67fc6,#ff9ebb);
    color: #fff;
    margin:10px auto;
    border-radius: 30px;
  }
  .loginBtn2{
    background-image: linear-gradient(90deg,#ed008c 7%,#ff3d76);
  }
  .loginBtn span{
    letter-spacing: 5px;
  }
</style>

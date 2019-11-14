<template>
  <main>
    <header class="k_padding4">
      <router-link to='/index'>
        <div class="index_img">
          <img src="../../assets/images/05.png" alt="" class="backIndex2">
        </div>
      </router-link>
    </header>
    <div class="logo2">
      <img src="../../assets/images/logo2.png" alt="">
    </div>
    <!-- 登录 -->
    <div class="loginWay">
      <span class="account_login" @click="change()"  :class="{current:true3==true}">账户登录</span>
      <span class="passfree_login"  @click="change()" :class="{current:true4==true}">免密码登录</span>
    </div>
    <div class="login1 k_padding5" v-show="true3">
      <div class="phone_number">
        <input type="text" placeholder="请输入手机／邮箱" class="inp_content" v-model="msg1">
        <img src="../../assets/images/clear.png" alt="" class="clear1 clearIcon" v-show="msg1" @click="clear3(0)">
      </div>
      <div class="pass">
        <input type="text" placeholder="请输入密码" class="inp_content" v-model="msg2">
        <span :class="{passIcon:true,passIcon2:true==pass}" @click='passChange()'></span>
        <img src="../../assets/images/clear.png" alt="" class="clear2 clearIcon" v-show="msg2" @click="clear3(1)">
      </div>
    </div>
    <div class="login2 k_padding5"  v-show="true4">
      <div class="phone_number">
        <input type="text" placeholder="请输入手机号码" v-model="msg3">
        <img src="../../assets/images/clear.png" alt="" class="clear1 clearIcon" v-show="msg3" @click="clear3(2)">
      </div>
      <div class="getCode">
        <input type="text" placeholder="请输入验证码" v-model="verify">
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
      <span>登录</span>
    </div>
    <div class="login_resign">
      <router-link to='/resign'>
        <span class="register">立即注册</span>
      </router-link>
      <router-link to='/forgetPass'>
        <span class="forgetPass" v-show="true3">忘记密码?</span>
      </router-link>
    </div>
    <!-- 其他登录方式 -->
    <div class="other_login">
      <div class="other_login_img">
        <img src="../../assets/images/weibo.png" alt="" class="weibo">
        <img src="../../assets/images/alipay.png" alt="" class="alipay">
      </div>
      <p>手机浏览器暂时不提供微信登录</p>
    </div>
    <!-- 调用computed -->
   <span v-show="false"> {{numChange}}</span>
   <span v-show="false"> {{numChange2}}</span>
  </main>
</template>
<script>
  export default{
    data(){
      return{
        true1:true,
        ture2:false,
        true3:true,
        true4:false,
        cleaning:false,
        msg1:'',
        msg2:'',
        msg3:'',
        verify:'',
        num:1,
        pass:''
      }
    },
    methods:{
      change(){
        this.true3=!this.true3
        this.true4=!this.true4
      },
      clear3(i){
        if(i==0){
          this.msg1=''
        }else if(i==1){
          this.msg2=''
        }else{
          this.msg3=''
        }

      },
      passChange(){
        this.pass=!this.pass
      }


    },
    //watch监听
    watch:{
      // num(i){
      //   if((this.msg1!='')&&(this.msg2!='')){
      //     this.num=i
      //   }
      // }
      msg1(){
        console.log('123')
      }
    },
    computed:{
      numChange(){
        if((this.msg1!='')&&(this.msg2!='')){
          this.num=0
        }
        else{
          this.num=1
        }
        return this.msg1+this.msg2;
      },
      numChange2(){
        if((this.msg3!='')&&(this.verify!='')){
          this.num=0
        }
        else{
          this.num=1
        }
        return this.msg3+this.verify;
      }

    },
    mounted(){
        // $(".passIcon").click(function(){
        //    $(".passIcon").toggleClass("passIcon2");
        // });

    }
  }
</script>

<style>
  @import url("../../assets/css/login.css");
</style>

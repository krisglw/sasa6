<template>
  <main>
    <header class="header2">
      <h1 @click="addGoods()">
        购物车
        <em class="number2" v-show='cart'>{{allnum}}</em>
      </h1>
    </header>
    <div class="content ">
      <div class="k_padding3">
        <div class="notice" v-show="true1">
          <span>单次交易限值为人民币5000元，个人年度交易限值为人民币26000元</span>
          <i @click="close()">X</i>
        </div>
        <!-- 空购物车 -->
        <div class="shoppingCart_empty" v-show='emptyCart'>
          <div class="cart_null">
            <div class="cart">
              <img src="../../../data/images/cart.png" alt="">
            </div>
            <span>购物车没有商品喔</span>
          </div>
        </div>
        <!-- 加车后 -->
        <div class="shoppingCart" v-show='cart'>
          <div class="cart_goods">
            <div  :class="{tit2:true,cartCurrent:0==num2}" @click="selectAll()">
              <img src="../../assets/images/cart1.png" alt="" class="select_icon cart1" v-show="checkAll">
              <img src="../../assets/images/cart2.png" alt="" class="select_icon cart2" v-show="!checkAll">
              <span>国内保税仓</span>
            </div>
            <ul class="goodsList">
            	<li v-for="(item,i) in cartList1">
                <div class="select2" @click='changeCart2(i)'>
                  <img :src="item.cart1" alt="" class="select_icon2" v-show='cartList1[i].checked==false' v-model="checked">
                  <img :src="item.cart2" alt="" class="select_icon2" v-show='cartList1[i].checked==true'>
                </div>
                <div class="goodsInfo2">
                  <div class="goodsImg">
                    <img :src="item.pic" alt="">
                  </div>
                </div>
                <div class="goodsInfo3">
                  <h3>
                    <span class="saleType">特卖</span>
                    <span class="goodsName">{{item.name}} </span>
                  </h3>
                  <p class="taxes">
                    预计税费
                    <span>¥{{item.taxes}}</span>
                  </p>
                  <div class="numberBox">
                    <span class="price4">¥{{item.price}}</span>
                    <div class="change_number">
                      <span class="sub" @click="sub(i)">-</span>
                      <span class="num">{{item.num}}</span>
                      <span class="add" @click="add(i)">+</span>
                    </div>
                  </div>
                  <div class="del">
                    <span>移入收藏夹</span>
                    <span>|</span>
                    <span>删除</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class="content5 cart_down">
          <div class="blank2">
            <h2>猜你喜欢</h2>
          </div>
          <ul>
          	<li v-for="(item,i) in aList16">
          		<div class="c5_imgBox">
               <img :src="item.pic" alt="" class="c5_img1">
               <img :src="item.icon1" alt="" class="c5_img2">
               <img :src="item.icon2" alt="" class="c5_img3">
               <div v-if="i==0||i==1||i==3" class="c2_time">
                 特卖剩余&nbsp;{{countDownList}}
               </div>
             </div>
             <h3>{{item.desc}}</h3>
             <div class='express'>
               <span>香港特快直送</span>
             </div>
             <div class="c2_price">
               <span class="newPrice">{{item.newPrice}}</span>
               <span class="oldPrice">{{item.oldPrice}}</span>
             </div>
                <span class="area">{{item.area}}</span>
          	</li>
          </ul>
        </div>
      </div>
      <div class="cartBlank"></div>
    </div>
    <!-- 合计 -->
    <div class="checkout" v-show='cart'>
      <div class="checkoutBox">
        <span>合计（不含运费及税费&nbsp;):</span>
        <span class="totalPrice">￥{{allprice}}</span>
        <div class="totalBox">
          <div class="total">
            结算
            <span>({{allnum}})</span>
          </div>
        </div>
      </div>
    </div>
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
        true1:true,
        aList16:'',
        cartList1:[],
        // 购物车数量
        num:1,
        num2:1,
        cart:false,
        emptyCart:true,
        cartIcon:false,
        cartIcon2:true,
        cartIcon3:false,
        cartIcon4:true,
        checkAll:false,
        checked:[],
        allprice: 0,
        allnum: 0,


      }
    },
    created() {
    　　　　this.countDown();
    },
    computed:{
      cartNum(){
        return this.cartList1[i].taxes+this.cartList1[i].price
      }
    },
    mounted() {
      this.$http.get('./data/index.json')
     .then((response)=>{
      this.aList16=response.data.aList16
     })
     this.$http.get('./data/cart.json')
     .then((response)=>{
      this.cartList1=response.data.cartList1
     })
     .catch(function(error){
       console.log(error)
     })

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
      close(){
        this.true1=!this.true1;
      },
      add(i){
        this.cartList1[i].num++;
        this.addPrice()
      },
      sub(i){
        if(this.cartList1[i].num>1){
          this.cartList1[i].num--;
          this.addPrice();
        }
      },
      addGoods(){
        this.emptyCart=!this.emptyCart
        this.cart=!this.cart
         this.addPrice()

      },
      changeCart(){
          this.cartIcon=!this.cartIcon
          this.cartIcon2=!this.cartIcon2
      },
      changeCart2(i){
        this.cartList1[i].checked=!this.cartList1[i].checked
        this.checkAll = !this.checkAll;
        this.addPrice()
      },
      selectAll(){
        this.checkAll = !this.checkAll;
        if(this.checkAll){
         for(var i = 0; i < this.cartList1.length; i++){
           this.cartList1[i].checked = false;
           this.addPrice()
         }
        }else{
          for(var i = 0; i < this.cartList1.length; i++){
            this.cartList1[i].checked = true
            this.addPrice()
          }
        }

      },
      addPrice(){
        this.allnum = 0;
        this.allprice = 0;
        for(var i = 0; i < this.cartList1.length; i++){
          if(this.cartList1[i].checked){
            this.allnum += this.cartList1[i].num;
            this.allprice += this.cartList1[i].price*this.cartList1[i].num
          }
           // this.checkAll = true;
        }

      }

    }

  }
</script>

<style>
  @import url("../../assets/css/cart.css");
</style>

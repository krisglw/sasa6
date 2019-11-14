<template>
  <main>
    <header class="details_header">
      <router-link to='/sale'>
          <img src="../../assets/images/back2.png" alt="" class="backSale">
      </router-link>
        <ul class="navIndex">
          <li  @click="return1()" class="current2">商品</li>
          <li  @click="return2()">评价</li>
          <li  @click="return3()">详情</li>
        </ul>
        <router-link to='/index'>
          <img src="../../assets/images/05.png" alt="" class="backIndex">
        </router-link>
    </header>
    <div class="banner2"  id='goods'>
      <swiper :options="swiperOption" class='bimg'>
          <swiper-slide>
            <img src="../../../data/images/d01.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../../../data/images/d02.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../../../data/images/d03.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../../../data/images/d04.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../../../data/images/d05.jpg" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <img src="../../../data/images/aicon1.png" alt=""class="bimg1">
        <img src="../../../data/images/aicon2.png" alt="" class="bimg2">
        <div class="countdown2">
          <div class="left2">
            <span class="left2_1">限时特卖</span>
            <span class="left2_2">剩余{{countDownList}}</span>
          </div>
            <span class="right2">已抢82%</span>
        </div>
    </div>
    <div class="goods_details">
      <div class="price2">
        <span>￥89.00</span>
        <del>市场价￥282.00</del>
      </div>
      <div class="vip">
        <img src="../../../data/images/vip.png" alt="">
        <span>莎莎VIP会员专享价</span>
        <span class="vipPrice">￥84.55</span>
      </div>
      <div class="area2 k_padding2">
        <img src="../../../data/images/area2.png" alt="">
        <span>欧美品牌</span>
      </div>
      <div class="desc k_padding2">
        <h3>贝德玛 舒妍多效洁肤液 500 毫升 .</h3>
        <p>舒妍洁肤液使肌肤清新舒适，柔嫩，更具光泽。使用后，皮肤变得更细致弹嫩、光芒四射！</p>
      </div>
    </div>
    <!-- 留白 -->
    <div class="blank4"></div>
    <!-- 快递 -->
    <ul class="express2 k_padding2" >
      <li>
        <span class='tit'>配送</span>
        <div>
          <p>香港特快直送</p>
          <p>香港直送时间为3-7个工作天</p>
        </div>
      </li>
      <li>
        <span class='tit'>运费</span>
        <div>
           <p>满288免运费</p>
        </div>
        <span class="more2">&gt;</span>
      </li>
      <li>
        <span class='tit'>税费</span>
        <div>
          <p>预估税费￥ 8.10,实际税费请依据提交订单为准</p>
        </div>
        <span class="more2">&gt;</span>
      </li>
      <li id='comments'>
        <span class='tit'>服务</span>
        <div class="service">
          <span></span>30日退换保证
         <span></span>正货担保
         <span></span>价格承诺
        </div>
        <span class="more2">&gt;</span>
      </li>
    </ul>
    <!-- 评价 -->
    <div class="comment" >
      <div class="comment_header k_padding2">
          <span>商品评价 1053&nbsp;&nbsp;</span>
          <span>好评 98.0%</span>
          <span class="more3">查看更多&gt;</span>
      </div>
      <div class="comment_content k_padding2">
          <swiper :options="swiperOption2">
            <swiper-slide v-for='(item,i) in list1'>
              <ul>
              	<li>
              		<div class="user_info">
                    <img :src="item.pic " alt="">
                    <span>{{item.userName}}</span>
                  </div>
                  <div class="review_info">
                    {{item.review}}
                  </div>
              	</li>
              </ul>
            </swiper-slide>
          </swiper>
      </div>
    </div>
    <!-- 留白 -->
    <div class="blank4"></div>
    <!-- 查看品牌 -->
    <div class="brand k_padding2" id='details'>
      <img src="/data/images/a92.jpg" alt="">
        <span>SUISEE</span>
        <a href="#">查看此品牌&gt;</a>
    </div>
    <!-- 留白 -->
    <div class="blank4"></div>
    <!-- 猜你喜欢 -->
    <div class="guess_like k_padding2">
      <h2>猜你喜欢</h2>
       <swiper :options="swiperOption3">
        <swiper-slide class='swiper-slide3' v-for="(item,i) in list2" style='width:30%;'>
          <ul>
          	<li>
          		<div>
                <img :src="item.pic" alt="">
              </div>
              <h3>
                {{item.desc}}
              </h3>
              <p>
                {{item.price}}
              </p>
          	</li>
          </ul>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
    <!-- 留白 -->
    <div class="blank4"></div>
    <!-- details -->
    <div class="details k_padding2">
      <div class="navItem">
        <span @click="change1()" :class="{current:exist1==true}">图文详情</span>
        <span @click="change2()" :class="{current:exist2==true}">服务说明</span>
      </div>
      <div class="authentic">
        <img src="../../../data/images/d01.png" alt="">
      </div>
      <div class="promise">
        <ul>
          <li>
            <img src="../../../data/images/d02.png" alt="">
            <span>正货担保</span>
          </li>
          <li>
            <p>
              莎莎注重商品的质量，致力让顾客对我们予以更大的信心。
              集团严格规定所有商品均为原厂正货，禁止出售过期商品(担保至少有3-6个月的使用期)及假货。多年良好品牌，信誉信心之选！
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <img src="../../../data/images/d03.png" alt="">
            <span>30天售后服务</span>
          </li>
          <li>
            <p>
              莎莎商品由包装到配送，均由专员复核检查，质量有担保。我们诚意提供30日商品退换服务，让您购物更轻松。
              如收货后对商品不满，您可以在确认收货起30日内登录「我的订单」并申请售后服务。请按指示填写相关申诉要求，我们将及时处理。
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap1" v-show="exist1">
       <div class="line"></div>
       <!-- 规格参数 -->
       <div class="para k_padding2">
         <div class="para_tit">— 规格参数 —</div>
         <ul>
           <li>
             <span>商品品牌：</span>
             <span>贝德玛 Bioderma</span>
           </li>
           <li>
             <span>原产地：</span>
             <span>法国</span>
           </li>
           <li>
             <span>商品品牌：</span>
             <span>贝德玛 Bioderma</span>
           </li>
           <li>
             <span>功能：</span>
             <span>清洁,亮肤,保湿,滋润</span>
           </li>
           <li>
             <span>规格：</span>
             <span>500 毫升</span>
           </li>
           <li>
             <span>颜色：</span>
             <span>.</span>
           </li>
           <li>
             <span>商品编号：</span>
             <span>102497504002</span>
           </li>
         </ul>
       </div>
       <div class="line"></div>
       <!-- — 商品信息 — -->
       <div class="goods_info k_padding2">
         <div>
           <div class="para_tit">— 商品信息 —</div>
         </div>
         <div class="goods_info2">
           <h3>商品描述</h3>
           <p>
             <strong>舒妍多效洁肤液 500毫升</strong>
           </p>
           <p>
             Bioderma（法国贝德玛）舒妍多效洁肤液，添加水油双成分统一的MICELLE胶束科技洁肤成分，卓效清除面部彩妆及污垢。
             另含D.A.F.皮肤学配方发明专利和青瓜植物精华，洁净肌肤同时纾缓保湿。
             质地水感清爽，未添加着色剂、香料、酒精和皂基，敏弱肌肤也适用。免水洗卸妆，轻轻一抹，轻松抹出洁净素肌。
           </p>
         </div>
         <div class="goods_info2">
           <h3>商品特色</h3>
           <ul>
           	<li>
               <strong>彩妆卸净 毛孔不堵</strong>
             </li>
             <li>
               <strong>四效合一: </strong>
               <span>集合卸妆、清洁、补水以及纾缓功效，堪称卸妆界的当家花旦。</span>
             </li>
             <li>
               <strong>MICELLE胶束技术 : </strong>
               <span>一种生物技术，能与肌肤匹配，卓效清洁净彻。</span>
             </li>
             <li>
               <strong>免水洗 :  </strong>
               <span>水般舒适的清爽质地，一抹卸净，减少卸妆或清洁后的肌肤负担。</span>
             </li>
             <li>
               <strong>安心使用 :  </strong>
               <span>未添加着色剂香料、酒精和皂基，敏弱肌肤也可放心使用。</span>
             </li>
           </ul>
         </div>
         <div class="goods_info2">
           <h3>商品功效</h3>
           <ul>
             <li>
               <strong>卸妆  : </strong>
               <span>轻轻一抹，便能轻松卸除面部彩妆，娇嫩的眼部及唇部肌肤同样适用。</span>
             </li>
             <li>
               <strong>清洁  : </strong>
               <span>洁肤液沁入肌底，清洁净彻，带走毛孔内的污垢，让肌肤清爽透气。</span>
             </li>
             <li>
               <strong>补水 :   </strong>
               <span>特别添加D.A.F. (Dermatological Advanced Formulation)皮肤学配方发明专利成分，强韧肌底，增益天然防卫壁垒，令肌肤水润弹嫩。</span>
             </li>
             <li>
               <strong>纾缓 :  </strong>
               <span>青瓜植物精华为肌肤保湿，同时纾缓敏弱及泛红，令肌肤水润舒适。 </span>
             </li>
           </ul>
         </div>
       </div>
    </div>
    <div class="wrap2 k_padding2" v-show="exist2">
      <h3>配送说明</h3>
      <p>
	    “香港仓”商品订单满¥288免费付运，满¥144运费¥45，未满¥144运费¥90。“香港仓”运送时间一般为3-10个工作天；<br>
	    “国内保税仓”商品满¥168免邮。“国内保税仓”运送时间一般为2-5个工作天。
      </p>
    </div>
    <!-- 加车 -->
    <div class="addCart k_padding2">
      <div class="collection">
        <img src="../../../data/images/d04.png" alt="">
        <p>收藏</p>
      </div>
      <div class="addCart2">
        <router-link to='/cart'>
          <img src="../../../data/images/d05.png" alt="">
          <em v-show="goods_num">{{num2}}</em>
          <p>购物车</p>
        </router-link>
      </div>
      <div class="addCart3" @click="cart1()">
        <span>加入购物车</span>
      </div>
    </div>
    <!-- 加车2 -->
    <div class="cartMask" v-show="true1">
      <div class="cartBox k_padding2">
        <ul>
          <li class="goodsInfo">
            <div class="imgBox">
              <img src="../../../data/images/45.jpg" alt="">
            </div>
            <div class="price3">
              <span>￥89.00</span>
            </div>
            <div class="close2">
              <span @click="close()">X</span>
            </div>
          </li>
          <li class="number">
            <span class="numberTxt">数量</span>
            <div class="check_number">
              <span class="sub" @click="sub()">-</span>
              <span class="actual_number">{{num2}}</span>
              <span class="add" @click="add()">+</span>
            </div>
          </li>
          <li class="addCart4">
            <span @click="cart2()">加入购物车</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="success" v-show="cartMsg" id='susMsg'>
      <span>加入购物车成功</span>
    </div>
  </main>
</template>



<script>
  export default {
      data() {
          return {
            countDownList: '00时00分00秒',
            actEndTime: '2050-11-19 18:50:00',
            pic:'',
            userName:'',
            review:'',
            exist1:true,
            exist2:false,
            list1:'',
            list2:'',
            true1:false,
            num2:1,
            cartMsg:false,
            goods_num:false,
            swiperOption: {
              spaceBetween: 30,
              centeredSlides: true,
              loop:true,
              autoplay: {
                delay: 1500,
                disableOnInteraction: false
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
            },
             swiperOption2: {
               slidesPerView: 'auto',
               spaceBetween: 30,
               pagination: {
                 el: '.swiper-pagination',
                 clickable: true
               }
             },
            swiperOption3: {
                     scrollbar: {
                       el: '.swiper-scrollbar',
                       hide: true
                     }
                   }
          }
        },
        created() {
        　　　　this.countDown();
        　　},
        mounted(){
            this.$http.get("./data/details.json")
            .then((responce=>{
              this.list1=responce.data.list1,
              this.list2=responce.data.list2
            }))
            .catch(function(error){
              console.log(error)
            })
            $('.navIndex li').click(function()
              {
                $(this).addClass('current2').siblings().removeClass('current2')
              }
            )
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
              change1(){
                this.exist1=true,
                this.exist2=false
              },
              change2(){
                this.exist1=false,
                this.exist2=true
              },
              return1(){
                 document.querySelector("#goods").scrollIntoView(true);
              },
              return2(){
                 document.querySelector("#comments").scrollIntoView(true);
              },
              return3(){
                 document.querySelector("#details").scrollIntoView(true);
              },
              cart1(){
                this.true1=true;
              },
              cart2(){
                this.true1=false;
                this.cartMsg=true
                this.goods_num=true
                setTimeout(function()
                  {
                    document.getElementById("susMsg").style.display="none";
                  },1500);
              },
              close(){
                this.true1=false;
              },
              add(num2){
                this.num2++;
                // this.$router.push({path: '/cart',query:{ num }});
              },
              sub(num2){
                  this.num2--;
                  if(this.num2==0){
                    this.num2=1
                  }
                  // this.$router.push({path: '/cart',query:{ num }});
              }
            }
      }
</script>
<style>
  .banner2 .swiper-pagination-bullet-active{
    background: #666;
  }
 .swiper-slide {
    width: 60%;
  }


</style>
<style scoped="">
  @import url("../../assets/css/details.css");
</style>

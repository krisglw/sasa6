<template>
  <main id="index">
    <!-- 头部 -->
    <div class="searchBox" v-if="true1" >
      <div class="header">
        <router-link to="/aside">
          <img src="../../assets/images/btn2.png" alt="" class="btn">
        </router-link>
          <img src="../../assets/images/logo.png" alt="" class="logo">
      </div>
      <div class="sreach">
        <router-link to="/search">
             <input type="text" placeholder="防晒" class="inp">
        </router-link>
        <img src="../../assets/images/search.png" alt="" class="sreach_icon">
      </div>
    </div>
      <div class="sreach2" v-if='true2' v-cloak>
        <router-link to='/aside'>
          <img src="../../assets/images/btn.png" alt="" class="btn">
        </router-link>
        <router-link to='/search'>
          <div class="sreach2_inp">
            <img src="../../assets/images/search.png" alt="" class="sreach_icon2">
           <span>防晒</span>
          </div>
        </router-link>
      </div>
      <!-- 轮播图 -->
      <swiper :options="swiperOption1" class="banner">
              <swiper-slide>
                <img src="../../../data/images/banner01.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="../../../data/images/banner02.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="../../../data/images/banner03.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="../../../data/images/banner04.jpg" alt="">
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
       </swiper>
       <!-- 公告 -->
       <div class="slogan">
         <div class="slogan_top">
           <div class="slogan_top1">
             <div class="slogan_left">
               <span>
                 香港莎莎&nbsp;&nbsp; 官方自营&nbsp;&nbsp; 正货海淘
               </span>
             </div>
             <div class="slogan_right">
               <ul>
                 <li>
                   <img src="../../assets/images/icon1.png" alt="">官方自营
                  </li>
                 <li>
                   <img src="../../assets/images/icon2.png" alt="">正货担保
                  </li>
                 <li>
                   <img src="../../assets/images/icon3.png" alt="">30天售后无忧
                  </li>
               </ul>
             </div>
           </div>
           <div class="details_btn">
             <span >查看详情</span>
           </div>
         </div>
         <div class="slogan_bottom">
            <span class="span1">公告</span>
           <swiper :options="swiperOption2" class='slogan_bottom1'>
                    <swiper-slide>
                      <span class="span2">国庆期间北京地区物流延迟通知</span>
                      <span class="more">|&nbsp;&nbsp;<a href="#">查看更多</a> </span>
                    </swiper-slide>
            </swiper>
         </div>
       </div>
       <!-- 留白 -->
       <div class="blank"></div>
       <!-- 今日特卖 -->
       <div class="content1 k_padding">
         <div class="c1_titie">
           <div class="countdown1">
             <b>今日特卖</b>
             <span class='circle'>{{h}}</span>
             <span>:</span>
             <span class='circle'>{{m}}</span>
             <span>:</span>
             <span class='circle'>{{s}}</span>
           </div>
          <div class="c1_titie_more">
            <router-link to='/sale'>
               <a href="">查看更多&gt;</a>
            </router-link>
          </div>
         </div>
          <!-- lunbo1 -->
         <div class="lunbo1">
          <swiper :options="swiperOption3">
               <swiper-slide v-for="(item,i) in aList1">
                 <img :src="item.pic" alt="">
                  <h3>{{item.desc}}</h3>
                  <div class="progress">
                    <span></span>
                  </div>
                  <div class="sales_price">
                    <span class="sales">{{item.sales}}</span>
                    <span class="price">{{item.price}}</span>
                  </div>
               </swiper-slide>
               <div class="swiper-pagination" slot="pagination"></div>
           </swiper>
         </div>
       </div>
       <!-- 留白 -->
       <div class="blank"></div>
       <!-- content2 -->
       <div class="content2 ">
          <h1 class="c2_title ">
            <b class="k_padding">每日必看</b>
          </h1>
            <img src="../../../data/images/New_Member.jpg" alt="" class="c2_img">
            <swiper :options="swiperOption4" class='k_padding'>
                 <swiper-slide v-for="(item,i) in aList2" class='c2_swiper'>
                   <div class="c2_imgBox">
                     <div v-if="i==1" class="c2_time">
                       剩余<br>{{countDownList}}
                     </div>
                      <img :src="item.pic" alt="">
                   </div>
                    <h3>{{item.desc}}</h3>
                    <div class="c2_price">
                      <span class="newPrice">{{item.newPrice}}</span>
                      <span class="oldPrice">{{item.oldPrice}}</span>
                    </div>
                    <div class="swiper-pagination" slot="pagination"></div>
                  </swiper-slide>
                 <swiper-slide class="c2_more c2_swiper">
                     <a href="#">查看更多</a>
                 </swiper-slide>
             </swiper>
             <!-- 留白 -->
             <div class="blank"></div>
             <img src="../../../data/images/a06.jpg" alt="" class="c2_img">
             <swiper :options="swiperOption5" class='k_padding'>
                  <swiper-slide v-for="(item,i) in aList3" class='c2_swiper'>
                    <div class="c2_imgBox">
                      <div v-if="i<2" class="c2_time">
                        剩余<br>{{countDownList}}
                      </div>
                       <img :src="item.pic" alt="">
                    </div>
                     <h3>{{item.desc}}</h3>
                     <div class="c2_price">
                       <span class="newPrice">{{item.newPrice}}</span>
                       <span class="oldPrice">{{item.oldPrice}}</span>
                     </div>
                     <div class="swiper-pagination" slot="pagination"></div>
                   </swiper-slide>
                  <swiper-slide class="c2_more c2_swiper">
                      <a href="#">查看更多</a>
                  </swiper-slide>
              </swiper>
              <!-- 留白 -->
              <div class="blank"></div>
              <img src="../../../data/images/a15.jpg" alt="" class="c2_img">
              <swiper :options="swiperOption6" class='k_padding'>
                   <swiper-slide v-for="(item,i) in aList4" class='c2_swiper'>
                     <div class="c2_imgBox">
                       <div v-if="i==0||i==2" class="c2_time">
                         剩余<br>{{countDownList}}
                       </div>
                        <img :src="item.pic" alt="">
                     </div>
                      <h3>{{item.desc}}</h3>
                      <div class="c2_price">
                        <span class="newPrice">{{item.newPrice}}</span>
                        <span class="oldPrice">{{item.oldPrice}}</span>
                      </div>
                      <div class="swiper-pagination" slot="pagination"></div>
                    </swiper-slide>
                   <swiper-slide class="c2_more c2_swiper">
                       <a href="#">查看更多</a>
                   </swiper-slide>
               </swiper>
               <!-- 留白 -->
               <div class="blank"></div>
               <img src="../../../data/images/a21.jpg" alt="" class="c2_img">
               <swiper :options="swiperOption7" class='k_padding'>
                    <swiper-slide v-for="(item,i) in aList5" class='c2_swiper'>
                      <div class="c2_imgBox">
                        <div v-if="i==0" class="c2_time">
                          剩余<br>{{countDownList}}
                        </div>
                         <img :src="item.pic" alt="">
                      </div>
                       <h3>{{item.desc}}</h3>
                       <div class="c2_price">
                         <span class="newPrice">{{item.newPrice}}</span>
                         <span class="oldPrice">{{item.oldPrice}}</span>
                       </div>
                       <div class="swiper-pagination" slot="pagination"></div>
                     </swiper-slide>
                    <swiper-slide class="c2_more c2_swiper">
                        <a href="#">查看更多</a>
                    </swiper-slide>
                </swiper>
                <!-- 留白 -->
                <div class="blank"></div>
                <img src="../../../data/images/a25.jpg" alt="" class="c2_img">
                <swiper :options="swiperOption8" class='k_padding'>
                     <swiper-slide v-for="(item,i) in aList6" class='c2_swiper'>
                       <div class="c2_imgBox">
                         <div v-if="i==0||i==3" class="c2_time">
                           剩余<br>{{countDownList}}
                         </div>
                          <img :src="item.pic" alt="">
                       </div>
                        <h3>{{item.desc}}</h3>
                        <div class="c2_price">
                          <span class="newPrice">{{item.newPrice}}</span>
                          <span class="oldPrice">{{item.oldPrice}}</span>
                        </div>
                        <div class="swiper-pagination" slot="pagination"></div>
                      </swiper-slide>
                     <swiper-slide class="c2_more c2_swiper">
                         <a href="#">查看更多</a>
                     </swiper-slide>
                 </swiper>
                 <!-- 留白 -->
                 <div class="blank"></div>
                 <img src="../../../data/images/a35.jpeg" alt="" class="c2_img">
                 <swiper :options="swiperOption8" class='k_padding'>
                      <swiper-slide v-for="(item,i) in aList7" class='c2_swiper'>
                        <div class="c2_imgBox">
                          <div v-if="i==1" class="c2_time">
                            剩余<br>{{countDownList}}
                          </div>
                           <img :src="item.pic" alt="">
                        </div>
                         <h3>{{item.desc}}</h3>
                         <div class="c2_price">
                           <span class="newPrice">{{item.newPrice}}</span>
                           <span class="oldPrice">{{item.oldPrice}}</span>
                         </div>
                         <div class="swiper-pagination" slot="pagination"></div>
                       </swiper-slide>
                      <swiper-slide class="c2_more c2_swiper">
                          <a href="#">查看更多</a>
                      </swiper-slide>
                  </swiper>
                  <!-- 留白 -->
                  <div class="blank"></div>
                  <img src="../../../data/images/a40.jpg" alt="" class="c2_img">
                  <swiper :options="swiperOption9" class='k_padding'>
                       <swiper-slide v-for="(item,i) in aList8" class='c2_swiper'>
                         <div class="c2_imgBox">
                           <div v-if="i==2" class="c2_time">
                             剩余<br>{{countDownList}}
                           </div>
                            <img :src="item.pic" alt="">
                         </div>
                          <h3>{{item.desc}}</h3>
                          <div class="c2_price">
                            <span class="newPrice">{{item.newPrice}}</span>
                            <span class="oldPrice">{{item.oldPrice}}</span>
                          </div>
                          <div class="swiper-pagination" slot="pagination"></div>
                        </swiper-slide>
                       <swiper-slide class="c2_more c2_swiper">
                           <a href="#">查看更多</a>
                       </swiper-slide>
                   </swiper>
                   <!-- 留白 -->
                   <div class="blank"></div>
                   <img src="../../../data/images/a49.jpg" alt="" class="c2_img">
                   <swiper :options="swiperOption10" class='k_padding'>
                        <swiper-slide v-for="(item,i) in aList9" class='c2_swiper'>
                          <div class="c2_imgBox">
                            <div v-if="i==3" class="c2_time">
                              剩余<br>{{countDownList}}
                            </div>
                             <img :src="item.pic" alt="">
                          </div>
                           <h3>{{item.desc}}</h3>
                           <div class="c2_price">
                             <span class="newPrice">{{item.newPrice}}</span>
                             <span class="oldPrice">{{item.oldPrice}}</span>
                           </div>
                           <div class="swiper-pagination" slot="pagination"></div>
                         </swiper-slide>
                        <swiper-slide class="c2_more c2_swiper">
                            <a href="#">查看更多</a>
                        </swiper-slide>
                    </swiper>
                    <!-- 留白 -->
                    <div class="blank"></div>
                    <img src="../../../data/images/a30.jpg" alt="" class="c2_img">
                    <swiper :options="swiperOption11" class='k_padding'>
                         <swiper-slide v-for="(item,i) in aList10" class='c2_swiper'>
                           <div class="c2_imgBox">
                             <div v-if="i==1" class="c2_time">
                               剩余<br>{{countDownList}}
                             </div>
                              <img :src="item.pic" alt="">
                           </div>
                            <h3>{{item.desc}}</h3>
                            <div class="c2_price">
                              <span class="newPrice">{{item.newPrice}}</span>
                              <span class="oldPrice">{{item.oldPrice}}</span>
                            </div>
                            <div class="swiper-pagination" slot="pagination"></div>
                          </swiper-slide>
                         <swiper-slide class="c2_more c2_swiper">
                             <a href="#">查看更多</a>
                         </swiper-slide>
                     </swiper>
                     <!-- 留白 -->
                     <div class="blank"></div>
                     <img src="../../../data/images/a54.jpg" alt="" class="c2_img">
                     <swiper :options="swiperOption12" class='k_padding'>
                          <swiper-slide v-for="(item,i) in aList11" class='c2_swiper'>
                            <div class="c2_imgBox">
                              <div v-if="i==1" class="c2_time">
                                剩余<br>{{countDownList}}
                              </div>
                               <img :src="item.pic" alt="">
                            </div>
                             <h3>{{item.desc}}</h3>
                             <div class="c2_price">
                               <span class="newPrice">{{item.newPrice}}</span>
                               <span class="oldPrice">{{item.oldPrice}}</span>
                             </div>
                             <div class="swiper-pagination" slot="pagination"></div>
                           </swiper-slide>
                          <swiper-slide class="c2_more c2_swiper">
                              <a href="#">查看更多</a>
                          </swiper-slide>
                      </swiper>
       </div>
       <!-- content3 -->
       <!-- 留白 -->
       <div class="blank"></div>
       <div class='content3'>
          <div class="c3_box1">
            <div class="c3_title k_padding">
              <b>粉底</b>
              <a href="#">查看更多&gt;</a>
            </div>
            <img src="../../../data/images/a59.jpg" alt="">
            <div c3_box1_list>
              <swiper :options="swiperOption13" class='k_padding'>
                   <swiper-slide v-for="(item,i) in aList12" class='c2_swiper'>
                     <div class="c2_imgBox">
                       <div v-if="i==0||i==4||i==6" class="c2_time">
                         剩余<br>{{countDownList}}
                       </div>
                        <img :src="item.pic" alt="">
                     </div>
                      <h3>{{item.desc}}</h3>
                      <div class="c2_price">
                        <span class="newPrice">{{item.newPrice}}</span>
                        <span class="oldPrice">{{item.oldPrice}}</span>
                      </div>
                      <div class="swiper-pagination" slot="pagination"></div>
                    </swiper-slide>
               </swiper>
            </div>
          </div>
          <!-- 留白 -->
          <div class="blank"></div>
          <div class="c3_box1">
            <div class="c3_title k_padding">
              <b>美唇</b>
              <a href="#">查看更多&gt;</a>
            </div>
            <img src="../../../data/images/a68.jpg" alt="">
            <div c3_box1_list>
              <swiper :options="swiperOption14" class='k_padding'>
                   <swiper-slide v-for="(item,i) in aList13" class='c2_swiper'>
                     <div class="c2_imgBox">
                       <div v-if="i==0||i==2||i==6" class="c2_time">
                         剩余<br>{{countDownList}}
                       </div>
                        <img :src="item.pic" alt="">
                     </div>
                      <h3>{{item.desc}}</h3>
                      <div class="c2_price">
                        <span class="newPrice">{{item.newPrice}}</span>
                        <span class="oldPrice">{{item.oldPrice}}</span>
                      </div>
                      <div class="swiper-pagination" slot="pagination"></div>
                    </swiper-slide>
               </swiper>
            </div>
          </div>
       </div>
       <!-- 留白 -->
       <div class="blank"></div>
       <!-- content4 -->
       <div class="content4">
            <div class="c4_title k_padding">
              <b>环球品牌</b>
              <a href="#">查看更多&gt;</a>
            </div>
            <div class="c4_list1">
                <swiper :options="swiperOption15" class='k_padding'>
                     <swiper-slide v-for="(item,i) in aList14" class='c2_swiper c4_swiper'>
                       <div class="c2_imgBox c4_imgBox">
                          <img :src="item.pic" alt="">
                       </div>
                        <div class="swiper-pagination" slot="pagination"></div>
                      </swiper-slide>
                 </swiper>
            </div>
            <div class="c4_list2">
              <swiper :options="swiperOption16" class='k_padding'>
                   <swiper-slide v-for="(item,i) in aList15" class='c2_swiper'>
                     <div class="c2_imgBox c4_imgBox">
                        <img :src="item.pic" alt="">
                     </div>
                      <div class="swiper-pagination" slot="pagination"></div>
                    </swiper-slide>
               </swiper>
            </div>
       </div>
       <!-- content5 -->
       <div class="content5 indexBlank">
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
                特卖剩余<br>{{countDownList}}
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
       <!-- 底部留白 -->
       <div class="blank3"></div>
       <div class="indexBlank"></div>
       <!-- 返回顶部 -->
       <div v-show='true3' class="back" @click="backTop()">
         <img src="../../../data/images/back.png" alt="">
       </div>
       <!-- 侧边内容 -->
       <transition name='slide'>

       </transition>
  </main>
</template>

<script>
  export default {
    name:'index',
     data() {
       return {
         aList1:'',
         aList2:'',
         aList3:'',
         aList4:'',
         aList5:'',
         aList6:'',
         aList7:'',
         aList8:'',
         aList9:'',
         aList10:'',
         aList11:'',
         aList12:'',
         aList13:'',
         aList14:'',
         aList15:'',
         aList16:'',
         blist1:'',
         h:'',
         m:'',
         s:'',
         true1:true,
         true2:false,
         true3:true,
         countDownList: '00时00分00秒',
        actEndTime: '2050-11-19 18:50:00',
         swiperOption1: {
                   spaceBetween: 0,
                   centeredSlides: true,
                   loop:true,
                   autoplay: {
                     delay: 2000,
                     disableOnInteraction: false
                   },
                   pagination: {
                     el: '.swiper-pagination',
                     clickable: true
                   }
                 },
        swiperOption2: {
                 direction: 'vertical',
                 spaceBetween: 0,
                 centeredSlides: false,
                 loop:true,
                 autoplay: {
                   delay: 2000,
                   disableOnInteraction: false
                 }
               },
         swiperOption3: {
                   slidesPerView: 3,
                   spaceBetween: 30,
                   freeMode: true,
                   pagination: {
                     el: '.swiper-pagination',
                     clickable: true
                   }
                 },
         swiperOption4: {
                   slidesPerView: 3,
                   spaceBetween: 30,
                   freeMode: true,
                   pagination: {
                     el: '.swiper-pagination',
                     clickable: true
                   }
                 },
         swiperOption5: {
                   slidesPerView: 3,
                   spaceBetween: 30,
                   freeMode: true,
                   pagination: {
                     el: '.swiper-pagination',
                     clickable: true
                   }
                 },
         swiperOption6: {
                   slidesPerView: 3,
                   spaceBetween: 30,
                   freeMode: true,
                   pagination: {
                     el: '.swiper-pagination',
                     clickable: true
                   }
                 },
          swiperOption7: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    freeMode: true,
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                    }
                  },
            swiperOption8: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                      freeMode: true,
                      pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                      }
                    },
          swiperOption9: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    freeMode: true,
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                    }
                  },
           swiperOption10: {
                     slidesPerView: 3,
                     spaceBetween: 30,
                     freeMode: true,
                     pagination: {
                       el: '.swiper-pagination',
                       clickable: true
                     }
               },
          swiperOption11: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    freeMode: true,
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                    }
                  },
           swiperOption12: {
                     slidesPerView: 3,
                     spaceBetween: 30,
                     freeMode: true,
                     pagination: {
                       el: '.swiper-pagination',
                       clickable: true
                     }
                   },
           swiperOption13: {
                     slidesPerView: 3,
                     spaceBetween: 30,
                     freeMode: true,
                     pagination: {
                       el: '.swiper-pagination',
                       clickable: true
                     }
                   },
           swiperOption14: {
                     slidesPerView: 3,
                     spaceBetween: 30,
                     freeMode: true,
                     pagination: {
                       el: '.swiper-pagination',
                       clickable: true
                     }
                   },
          swiperOption15: {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    freeMode: true,
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                    }
                  },
          swiperOption16: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    freeMode: true,
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                    }
                  }

     }
    },
  　created() {
  　　　　this.countDown();

  　　},
  mounted(){
     this.$http.get('./data/index.json')
     .then((response)=>{
       this.aList1=response.data.aList1,
       this.aList2=response.data.aList2,
       this.aList3=response.data.aList3,
      this.aList4=response.data.aList4,
      this.aList5=response.data.aList5,
      this.aList6=response.data.aList6,
      this.aList7=response.data.aList7,
      this.aList8=response.data.aList8,
      this.aList9=response.data.aList9,
      this.aList10=response.data.aList10,
      this.aList11=response.data.aList11,
      this.aList12=response.data.aList12,
      this.aList13=response.data.aList13,
      this.aList14=response.data.aList14,
      this.aList15=response.data.aList15,
      this.aList16=response.data.aList16,
      this.blist1=response.data.blist1


     })
     .catch(function(error){
       console.log(error);
     }),
     window.addEventListener("scroll",this.search,true),
     window.addEventListener("scroll",this.back,true)
   },
  methods: {
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
                // 搜索栏
                  search(){
                    let h1=document.documentElement.scrollTop||document.body.scrollTop;
                    h1>=30? (this.true1=false):(this.true1=true);
                    h1>=30? (this.true2=true):(this.true2=false)


                  },
              // 回到顶部
                backTop(){
                  document.body.scrollTop=0;
                  document.documentElement.scrollTop=0

                },
                back(){
                  let h3=document.documentElement.scrollTop||document.body.scrollTop;
                  h3>300?(this.true3=true):(this.true3=false);
                }
            }

  }
</script>
<style>
 .banner .swiper-pagination-bullet{
    background: #fff;
    opacity: 1;
  }
  .banner .swiper-pagination-bullet-active{
    background: red;
  }
</style>
<style scoped>
  @import url("../../assets/css/indexContent.css");
  /* header */
  .header{
    margin: 0px auto;
    overflow: hidden;
    text-align: center;
    margin-top: 7px;
  }
 .searchBox .btn{
    width: 1.375rem;
    height: 1.125rem;
    display:inline-block;
    color: gray;
   float: left;
   margin-left: 20px;
   margin-top: 15px;
  }
  .sreach2 .btn{
    width: 1.375rem;
     height: 1.125rem;
     display:inline-block;
     color: gray;
    float: left;
    margin-left: 20px;
    margin-top: 7px;
  }
  .logo{
    width: 7.375rem;
    height: 1.75rem;
    display:inline-block;
    margin-top: 5px;
    margin-left: -30px;

  }
  .sreach{
    position: relative;
    text-align: center;
  }
  .inp{
    border: 1px solid transparent;
    border-radius: 30px;
    padding: 8px 0px 8px 10px;
    background-color: #f6f6f6;
    width: 90%;
    margin: 10px auto;
    outline: none;
    color: #999;
  }
  .sreach_icon{
    position: absolute;
    right:7%;
    top: 33%;
    width: 17px;
    height: 17px;
  }
  /* sreach2 */
.sreach2{
    width: 100%;
   background-image: linear-gradient(-269deg,#f53b86,#ff7292);
   padding: 8px 0px;
   position: fixed;
   left: 0;
   top: 0;
   text-align: center;
   z-index: 100;
   /* display: none; */
  }

 .sreach2 .sreach2_inp{
  display: inline-block;
  background-color: #fff;
  border-radius: 30px;
  width:70%;
  padding: 6px 0px;
  margin-left: -35px;


}
.sreach_icon2{
  width: 15px;
  height:15px;
  margin-left: -40px;
  top: 3px;
  position: relative;
}
.sreach2_inp span{
  color: #999;
  font-size: 14px;
}

/* banner */

.banner .swiper-slide{
  padding-bottom: 58.66%;
  height: 0;
}
.banner img{
   width: 100%;

}
.swiper-pagination-bullet-active{
		background:red;
	}
  /* content */
  .slogan{
    padding: 0 15px;
    margin-top: 5px;

  }
  .slogan_left span{
    color: #ed008c;
    font-size: 0.85rem;

  }
  .slogan_right{
    font-size: 0.65rem;
  }
  .slogan_right li{
    margin-right: 6px;
    color: #666;
  }
  .slogan_right li img{
    position: relative;
    top: 5px;
    margin-right: 2px;
  }
  .slogan_top1{
    display: inline-block;
    width: 76%;
  }
.details_btn{
  width: 15%;
  padding: 5px 12px;
  color: #fff;
  background-color: #ed008c;
  display: inline-block;
  font-size: 0.65rem;
  border-radius: 25px;

}
.slogan_bottom{
  margin-top: 8px;
  display: inline-block;
  width: 100%;
}
.span1{
  color: #000;
  font-size: 0.65rem;
  width: 10%;
  display: inline-block;
  float: left;
}
.span2{
  float: left;
}
.slogan_bottom1{
  width: 85%;
  display: inline-block;
  margin-left: 10px;
  height: 20px;
}
.slogan_bottom  .slogan_bottom1  span{
  font-size: 0.58rem;
  color: #000000;
  text-align: center;
}

.slogan_bottom  .slogan_bottom1   a{
  font-size: 0.65rem;
}
.more{
  float: right;
}
</style>

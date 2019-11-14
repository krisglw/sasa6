<template>
  <main>
    <section class="sideBox">
       <div class="sTop">
         <ul>
             <router-link to='/login'>
               <li>登录</li>
             </router-link>
             <router-link to='/resign'>
               <li>注册</li>
             </router-link>
         </ul>
         <router-link to='/index'>
            <span>X</span>
         </router-link>
       </div>
       <div class="s_content">
         <div class="sc1">
          <ul>
            <li class='sli1'>我的账户</li>
            <li class='sli2'>我的订单</li>
            <li class='sli3'>积分中心</li>
            <li class='sli4'>在线客服</li>
            <li class='sli5'>帮助中心</li>
            <li>关注我们</li>
          </ul>
         </div>
         <div class="sc2">
           <div class="sotrList">
             <ul>
             	<li v-for='(item,i) in blist1'>
                   <span>{{item.goods}}</span>
                   <i class="iconfont icon-youjiankuohao"></i>
                </li>
             </ul>
           </div>
         </div>
       </div>
       <footer>
         <div class="footer_top">
           <span>Global site</span>
         </div>
         <div class="footer_content">
           <ul>
             <li><a href="#">公司简介</a></li>
             <li><a href="#">招商合作</a></li>
             <li><a href="#">其它送货地区</a></li>
             <li><a href="#">正货担保</a></li>
             <li><a href="#">使用条款</a></li>
             <li><a href="#">隐私策略</a></li>
             <li><a href="#">消费者告知书</a></li>
           </ul>
           <p>© Copyright 2019. All rights reserved 版权所有.</p>
           <p>Sa Sa dot Com Limited 莎莎网有限公司</p>
           <p>(Member of Sa Sa Group 莎莎集团成员)</p>
           <p>
             <i></i>
             <img src="../../assets/images/footer.png" alt="">
             <a href="#"> 豫公网安备 41019602002163号 </a>
           </p>
           <p><a href="#"> 豫ICP备18010375号-1 </a></p>
           <p><a href="#"> 营业执照 </a></p>
         </div>
       </footer>
    </section>
  </main>
</template>


<script>
  export default{
    data(){
      return{
         blist1:''
      }
    },
    mounted(){
      this.$http.get('./data/index.json')
      .then((response)=>{
        this.blist1=response.data.blist1
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }
</script>

<style scoped="">
  /* 侧边内容 */
  .sideBox{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 101;
    width: 100%;
  }
  .sTop {
    width: 100%;
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
  }
  .sTop ul{
    display: inline-block;
  }
  .sTop li{
    background-color: #f6f6f6;
    padding: 5px 15px;
    box-sizing: border-box;
    background: #f6f6f6;
    border-radius: 14px;
    color: #666;
    margin: 10px 8px;
    font-size: 14px;
  }
  .sTop span{
    float: right;
    font-weight: 80;
    font-size: 1.5rem;
    margin-top:10px;
    margin-right: 10px;
    color: #777;
  }
  .s_content{
    background-color: #f6f6f6;
    padding: 10px 15px;
    box-sizing: border-box;
  }
  .sc1{
    background-color: #fff;
  }
  .sc1 ul{
    border-radius: 0.5rem;
  }
  .sc1 li{
    width: 49%;
    padding: 10px 0px;
    text-align: center;
    box-sizing: border-box;
  }
  .sli1,.sli3,.sli5{
    border-right: 1px solid #f6f6f6;
  }
  .sli1,.sli2,.sli3,.sli4{
    border-bottom:1px solid #f6f6f6 ;
  }
  .sc2{
    margin-top: 15px;
  }
  .sotrList{
     /* padding: 20px 15px; */
     background: #f6f6f6;
     box-sizing: border-box;
    }
    .sotrList ul{
      border-radius: 5px;
      background-color: #fff;
    }
    .sotrList ul li{
      padding:15px 12px;
      color: #333;
      box-sizing: border-box;
      width: 100%;
      border-bottom: 1px solid #F6F6F6;
      font-size:0.9rem;
    }

    .sotrList  li i{
     float: right;
     margin-right: 5px;
     margin-top: 2px;
      display: inline-block;
      font-size: 0.75rem;
      width: 10px;
      height: 10px;
      font-weight: bold;
    }
    .blank{
      width: 100%;
      height: 3rem;
      background-color: #F6F6F6;
    }
    /* footer */
    footer{
      background-color: #f6f6f6;
      padding-bottom: 20px;
      font-size: 0.8rem;
    }
    .footer_top{
      text-align: center;
    }
   footer .footer_top span{
      display: inline-block;
      padding: 5px 15px;
      border:1px solid #ccc ;
      margin: 20px 0px;
      color: #666;
      border-radius: 45px;
      font-size: 0.9rem;

    }
   .footer_content{
     text-align: center;
     font-size: 0.8rem;
   }
    .footer_content li a{
      font-size: 0.8rem;
      padding:0px 5px;
      border-right: 1px solid #666;
    }
    .footer_content p a{
      font-size: 0.8rem;
    }
    .footer_content img{
      width: 18px;
      height: 18px;
      position: relative;
      top: 5px;
      right: -3px;
    }

</style>

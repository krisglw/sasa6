<template>
  <main>
    <div class="top">
      <router-link to='/sort'>
        <img src="../../assets/images/back2.png" alt="" class="backSort">
      </router-link>
      <span>分类</span>
      <router-link to='/index'>
        <span class="close">X</span>
      </router-link>
    </div>
    <div class="sotrList">
       <ul>
          <li v-for='(item,i) in sList1'>
             <span>{{item.goods}}</span>
             <i class="iconfont icon-youjiankuohao"></i>
          </li>
       </ul>
     </div>
    <!-- 留白 -->
    <div class="blank"></div>
  </main>
</template>

<script>
  export default{
   // let blist1={
   //   template:'#blist1'
   //  }
   //  let list1={
   //   template:'#list1'
   //  }
    data(){
        return{
          sList1:''
        }
    },
    mounted(){
      this.$http.get("./data/sortChildren.json")
      .then((response)=>{
        this.sList1=response.data.sList1
      })
      .catch(function(error){
        console.log(error)
      })
    }
  }
</script>

<style scoped="">
  .top{
    text-align: center;
    padding: 15px;
    position:relative;
    font-size: 1.2rem;
    box-sizing: border-box;
  }
  .top span{
    color: #333333;
  }
  .top .close{
    position: absolute;
    right: 5%;
    top: 30%;
  }
  .backSort{
    float: left;
    width: 0.9rem;
    height: 1.3rem;
    float: left;
    margin-top: 4px;
  }
  .sotrList{
    padding: 20px 15px;
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
</style>

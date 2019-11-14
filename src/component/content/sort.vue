<template id='blist1'>
  <main>
      <div class="top">
        <span>分类</span>
        <router-link to='/index'>
          <span class="close">X</span>
        </router-link>
      </div>
      <div class="sotrList">
        <ul>
        	<li v-for='(item,i) in blist1'>
            <router-link :to='item.path'>
              <span>{{item.goods}}</span>
              <i class="iconfont icon-youjiankuohao"></i>
            </router-link>
           </li>
        </ul>
      </div>
     <!-- 留白 -->
     <div class="blank"></div>
  </main>
</template>

<!-- <template id='sort1'>
  <main>
   <div class="top">
      <span>
        &lt;
      </span>
      <span>分类</span>
      <router-link to='/index'>
        <span class="close">X</span>
      </router-link>
    </div>
    <ul>
    	<li v-for='(item,i) in list1'>
          <span>{{item.goods}}</span>
       </li>
    </ul>
  </main>
</template> -->

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
          blist1:'',
          list1:''
        }
    },
    mounted(){
      this.$http.get("./data/sort.json")
      .then((response)=>{
        this.blist1=response.data.blist1
        this.list1=response.data.list1
      })
      .catch(function(error){
        console.log(error)
      })
    }
  }
</script>

<style scoped>
  .top{
    text-align: center;
    padding: 15px 0px;
    position:relative;
    font-size: 1.2rem;
    color: #333333;
  }
  .top .close{
    position: absolute;
    right: 5%;
    top: 30%;
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

<template>
  <main>
    <header>
      <router-link to='/index'>
         <img src="../../assets/images/back2.png" alt="" class="back2">
      </router-link>
      <div class="searchBox">
        <img src="../../assets/images/search.png" alt="" class="img1">
         <input type="text" placeholder="防晒" class="inp">
         <img src="../../assets/images/close.png" alt="" class="img2">
         <span>搜索</span>
      </div>
    </header>
    <div class="search1">
      <div>
        <span>最近搜索</span>
        <span  class="del">
          <img src="../../assets/images/del.png" alt="">
        </span>
        <div class="c1">
          <ul>
            <li>防晒</li>
            <li>衣服</li>
            <li>水杯</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search2">
      <span>热门搜索</span>
      <div class="c2">
        <ul>
          <li>面膜</li>
          <li>伊丽莎白 · 雅顿</li>
          <li>SK-II</li>
          <li>口红</li>
          <li>安热沙</li>
          <li>香水</li>
          <li>雅诗兰黛</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
</script>

<style scoped="">
  header{
    padding:5px;
    box-sizing: border-box;
    text-align: center;
  }
  .back2{
    width: 0.875rem;
    height:1.5rem;
    float: left;
    margin-top: 15px;
    margin-left: 5px;
  }
  .searchBox{
    position: relative;
    width: 93%;
    display: inline-block;
    overflow: hidden;

  }
  .searchBox span{
    font-size: 15px;
  }
  .img1{
    position: absolute;
    left: 15px;
    top: 19px;
    width: 16px;
    height: 16px;
  }
  .img2{
    position: absolute;
    right: 50px;
    top: 19px;
    width: 16px;
    height: 16px;
  }
  .inp{
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 8px 0px 8px 30px;
    background-color: #f6f6f6;
    width: 85%;
    margin: 10px auto;
    outline: none;
    color: #999;
    font-size: 14px;
    box-sizing: border-box;
  }
  .search1,.search2{
    font-size: 15px;
    padding: 5px 15px;
    box-sizing: border-box;
  }
  .search1 ul,.search2 ul{
    border-bottom: 1px solid #ECECEC;
    padding-bottom: 15px;
  }
  .del{
    float: right;
    width: 15px;
    height: 15px;
    display: inline-block;
  }
  .del img{
      width: 20px;
      height:20px;
    }
  li{
    background-color: #f6f6f6;
    padding: 5px 15px;
    box-sizing: border-box;
    background: #f6f6f6;
    border-radius: 14px;
    color: #666;
    margin: 8px 5px;
    font-size: 14px;

  }
</style>

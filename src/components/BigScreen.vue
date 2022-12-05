<template>
    <div class ="BigScreen">
        <div class ="header">智慧工厂</div>
        <div class="main"> 
            <div class ="left">
                <div class="cityEvent" @click="showfloor3">
                    <h3>
                        <img src ="../assets/bg/bar.svg" class="icon"  alt="" />
                        <span>厂房外形展示</span>
                    </h3>
                    <div class="footerBorder"></div>
                </div>
                <div class="cityEvent" @click ="showAll">
                    <h3>
                        <img src ="../assets/bg/bar.svg" class="icon"  alt="" />
                        <span>厂房分层展开</span>
                    </h3>
                    <div class="footerBorder"></div>
                </div>
                <div class="cityEvent" @click="showfloor1">
                    <h3>
                        <img src ="../assets/bg/bar.svg" class="icon"  alt="" />
                        <span>厂房展开第一层</span>
                    </h3>
                    <div class="footerBorder"></div>
                </div>
                <div class="cityEvent" @click="showfloor2">
                    <h3>
                        <img src ="../assets/bg/bar.svg" class="icon"  alt="" />
                        <span>厂房展开第二层</span>
                    </h3>
                    <div class="footerBorder"></div>
                </div>
            </div>
            <div class="right"></div>

        </div>
        
    </div>
</template>

<script>
import eventHub from "../three/eventHub";

export default {
    name: 'ThreeBigScreen',

    data() {
        return {
            flag:false,
        };
    },

    mounted() {
        
    },

    methods: {
         showfloor1(){
            eventHub.$emit('showfloor1')
            console.log(1);
        },
     showfloor2(){
        eventHub.$emit('showfloor2')
        console.log(1);
    },
      showfloor3(){
        eventHub.$emit('showfloor3')
        console.log(1);
    },
    showAll(){
      if(!this.flag){
      eventHub.$emit("showAll")
      this.flag = true}
      else{
        eventHub.$emit("hiddenAll")
        this.flag =false
      }
    } 
    },
};
</script>

<style lang="less" scoped>
.BigScreen {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;

  left: 0;
  top: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
}

.header {
  /* width: 1920px;
        height: 100px; */

  width: 19.2rem;
  height: 1rem;
  background-image: url(@/assets/bg/title.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  color: rgb(226, 226, 255);
  font-size: 0.4rem;
}


.main {
//   flex: 1;
  width: 19.2rem;
  display: flex;
  justify-content: space-between;
}

.left {
  width: 4rem;
  /* background-color: rgb(255,255,255,0.5); */
  background-image: url(../assets/bg/line_img.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem 0;
}

// .right {
//   width: 4rem;

//   background-image: url(../assets/bg/line_img.png);
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: left center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0.4rem 0;
// }

.cityEvent {
  position: relative;
  width: 6rem;
  /* height: 3rem; */
  margin-bottom: 1rem;
  background-image: url(../assets/bg/bg_img03.png);
  background-repeat: repeat;
  pointer-events: auto;
  margin-left: 3rem;
}

.cityEvent::before {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  left: 0;
  top: 0;
  border-top: 4px solid rgb(34, 133, 247);
  border-left: 4px solid rgb(34, 133, 247);
  content: "";
  display: block;
}

.cityEvent::after {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  right: 0;
  top: 0;
  border-top: 4px solid rgb(34, 133, 247);
  border-right: 4px solid rgb(34, 133, 247);
  content: "";
  display: block;
}
.footerBorder {
  position: absolute;
  bottom: 0;
  bottom: 0;
  width: 6rem;
  height: 0.4rem;
}
.footerBorder::before {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  left: 0;
  top: 0;
  border-bottom: 4px solid rgb(34, 133, 247);
  border-left: 4px solid rgb(34, 133, 247);
  content: "";
  display: block;
}

.footerBorder::after {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  right: 0;
  top: 0;
  border-bottom: 4px solid rgb(34, 133, 247);
  border-right: 4px solid rgb(34, 133, 247);
  content: "";
  display: block;
}

.icon {
  width: 40px;
  height: 40px;
}

h1 {
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.3rem 0.3rem;
  justify-content: space-between;
  font-size: 0.3rem;
}
h3 {
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.3rem;
  text-shadow: 0 0 5px #000;
  font-size: 0.7rem;
 
}

h1 > div {
  display: flex;
  align-items: center;
}
h1 span.time {
  font-size: 0.2rem;
  font-weight: normal;
}

.cityEvent li > p {
  color: #eee;
  padding: 0rem 0.3rem 0.3rem;
}
.list h1 {
  padding: 0.1rem 0.3rem;
}
.cityEvent.list ul {
  pointer-events: auto;
  cursor: pointer;
}

.cityEvent li.active h1 {
  color: red;
}
.cityEvent li.active p {
  color: red;
}




</style>
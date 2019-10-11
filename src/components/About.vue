<template>
<div class="head">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
  <a class="navbar-brand" href="#">
    <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/fire_1f525.png" alt="logo" style="width:40px;">
  </a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a href="#fire"> About Firebase</a>
    </li>
    <li class="nav-item">
      <a href="#vue">About Vue.js</a>
    </li>
    <li class="nav-item">
     
    </li>
  </ul>
   <ul class="navbar-nav ml-auto">
            <li class="nav-item">

              
            </li>
        </ul>
</nav>
      <h2 class="text-center ">Fire🔥Chat</h2> 
    <div class="tagg sticky-top">

      <vue-typed-js :strings="['fun','awesome', 'brilliant']" :loop="true" >
      <h4>A realtime <span class="typing"></span> chatting system!</h4>
      </vue-typed-js>

      </div>
      <div class="logos">
            <a href="https://vuejs.org/" target="_blank"><img src="../assets/vue.svg"></a><span>+</span>
            <a href="https://firebase.google.com/" target="_blank"><img src="../assets/firebase.svg"></a>
          </div>
       <p>Made using Vue.js and Google Firebase</p> 
            <div class="wrapper">
                <form @submit.prevent="enterWelcome">
          <button class="button" style="vertical-align:middle" type="submit"><span>Start Fire🔥Chat</span></button>
                </form>
            </div>
            
<div id="fire">Display hidden</div>
<div class="row fire">
  <div class="col-sm-3 i1">
      <img src="../assets/firebase.svg" style="width:300px;height:200px" alt="firebase"/>
  </div>
  <div  class="col-sm-8 i2">
      <h4>About Firebase</h4>
      <p>Firebase is a mobile and web application development platform developed by Firebase, Inc. in 2011, then acquired by Google in 2014. As of October 2018, the Firebase platform has 18 products, which are used by 1.5 million apps. Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment. Firebase offers a number of services, including realtime database, analytics, authentication ,cloud messaging, crashlytics, perfomance. Realtime database: the Firebase Realtime Database is a cloud-hosted NoSQL database that enables data to be stored and synced between users in real time. The data is synced across all clients in real time and is still available when an app goes offline. This will be used in the project which I will be making.
Analytics: Google Analytics for Firebase offers free, unlimited reporting on as many as 500 separate events. Analytics presents data about user behaviour in iOS and Android apps, enabling better decision-making about improving performance and app marketing.
Authentication: Firebase Authentication makes it easy for developers to build secure authentication systems and enhances the sign-in and onboarding experience for users. This feature offers a complete identity solution, supporting email and password accounts, phone auth, as well as Google, Facebook, GitHub, Twitter login and more.
</p>
  </div>
   <div  class="col-sm-1 i1 ">
  </div>
</div>
<div class="row gap">
  <div class="col-sm-1"></div>
  <div class="col-sm-8 o2">
      <h4 id="vue">About Vue.js</h4>
      <p>
          Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications. Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages.
Vue uses an HTML based template syntax that allows binding the rendered DOM to the underlying Vue instance’s data. All Vue templates are valid HTML that can be parsed by spec-compliant browsers and HTML parsers. Under the hood, Vue compiles the templates into virtual DOM render functions. A virtual Document Object Model (or “DOM”) allows Vue to render your component in its memory before updating your browser which makes everything faster because there are fewer interactions with the browser. Combined with the reactivity system, Vue is able to calculate the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
Vue users can use template syntax or choose to directly write render functions using JSX. Render functions open up possibilities for powerful component-based patterns, for example, the new transition system is now completely component-based, using render functions internally.

      </p>
  </div>
  <div class="col-sm-3 o1">
      <img src="../assets/vue.svg" style="width:300px;height:200px" alt="vue"/>
  </div>
</div>

<div class="footer">
    <p><a href="https://www.linkedin.com/in/rahul-trivedi-7b82a8173/" target="_blank">BY - RAHUL TRIVEDI</a></p>
  
</div>
</div>

</template>

<script>
export default {
  name: 'About',
  
  methods: {
    enterWelcome() {
       
        // this.$router.push('Welcome');
        window.location.href = "http://localhost:8081/welcome";
      }
    
  },
};
</script>

<style lang="scss">
.logos {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 70px;
    max-width: 100%;
  }
  span {
    margin-left: 20px;
    margin-right: 20px;
  }
}
.tagg{
  color: #52BE80; 
  font-family: 'Raleway', sans-serif;
  text-align: center;
  margin-left: 30%;
  margin-bottom: 30px;
}
label{
  font-size: 25px;
}
.head{
    background-image: linear-gradient(45deg, hsl(30,92,50), #4F2AE3);
}
p {
  text-align: center;
  font-size: 1.2em;
  font-family: 'Raleway', sans-serif;
}
.i2 p{
    text-align: left;
}
.o2 p{
    text-align: left;
}
h3{
  font-family: 'Raleway', sans-serif;
  color: hsl(153,47,48);
}
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   text-align: center;
   z-index: 1;
   padding-top: 5px;
   padding-bottom: 0;
   background: #202023;
}
.wrapper{
    text-align: center;
}
button{
    padding: 10px 30px;
    text-align: center;
    justify-content: center;
    color: #fff;
    font-size: 25px;
    background-color: #52BE80; 
     border-radius: 25px;
  text-decoration: none;
  padding: 20px;
  width: 350px;
  display: inline-block;
   border: 2px solid #52BE80;
 box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
   transition: all 0.5s;
  cursor: pointer;
  margin: 40px;

  
}
button:hover {
  background-color: hsl(30,92,50); /* Green */
  color: white;
  border: 2px solid hsl(30,92,50);
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);

}
button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

button:hover span {
  padding-right: 25px;
}

button:hover span:after {
  opacity: 1;
  right: 0;
}
.nav-item a{
    font-size: 20px;
}
.nav-item a:hover{
    text-decoration: none;
    background: #fff;
    color: #3D4641;
}
.fire {
    margin-top: 50px;
}
h2{
    margin-top: 80px;
    color: hsl(30,92,50) 
}
.i1 img{
    margin-top: 100px;
    vertical-align: middle;
}
.i2{
    background: hsl(30,92,50);
    color: #fff;
    border-radius: 30px;
}
h3{
    background: hsl(30,92,50);
    color: #fff;
    border-radius: 30px;
}
.o2{
    background: #52BE80;;
    color: #fff;
    border-radius: 30px;
    margin-bottom: 50px;
}
.o1 img{
  margin-top: 100px;
    vertical-align: middle;
}
.gap{
    margin: 80px auto;
    margin-bottom: -20px;
    padding-bottom: 50px;
}
#fire{
    margin-top:50px;
    text-indent: -9999px;
}
</style>

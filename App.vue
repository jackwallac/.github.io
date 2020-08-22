

<template>

  <div id="app">


     <a class="tooltip">
     <img src="./assets/about2.png" width="136.25" height="50" class="about" onmouseover="document.getElementById('sketch').src='https://i.imgur.com/gB2ytCX.png'" onmouseout="document.getElementById('sketch').src='https://i.imgur.com/zSVliHA.png'"> <span> <img src= "https://i.imgur.com/T6kZL0T.jpg" alt="profile" width="205" height="205" class="profile">
<h1 class="tooltip"> Hey! I'm Jack Wallace, a rising senior at the University of Texas at Austin pursuing a B.S. in both Architectural Engineering and Radio/Television/Film, class of 2021. </h1>

<p>I think I was 13 when I first played "Dark Souls."</p>

<p>It's partly the nigh-sadistic difficulty of the game and the subsequent sense of overwhelming accomplishment from overcoming its many obstacles that allows me to recall my exact age at the time of this surpisingly formative moment. On further reflection, however, this was the very first time that I experienced a piece of media that succeeded on every front with regards to an embedded narrative and gripping, environmental storytelling. "Dark Souls" lulls you into a state of captivation, and so much of that is achieved through a rigourously planned and cohesive architectural structure. Every location of the game bleeds into each other with the utmost subtlety — it's one of the greatest feats of worldbuilding to date. </p>

<p>It would take quite a while for me to realize that "Dark Souls" unconciously inspired my current career path. Almost a decade, even. I was devouring architecture books without even realizing why. Majoring in both Architectural Engineering and Radio/Television/Film was my way of exploring this curiosity, and it wasn't until my sophomore year that I realized that a career in production/set design suited me perfectly. No other field has come even close to sating this curiosity. It's the first career I've encountered that values my mastery of the architectural language and rewards my engineering and creative savvy in crafting authentic environments that translate to the screen. It's a career that values, well, me — and I'm fully invested. </p>

<p>We need sets that are smart for their respective narratives and ambitions. I think I can help.</p>


     </span>
     </a>
    <img src="./assets/signature.png" width="150" height="112.5" class= "sign">

    <a class="tooltip2" href="https://drive.google.com/file/d/1y8xEg0eWZnqY-qfDpcJCkOVw-FCWDdPk/view?usp=sharing" target="_blank"> <img src="./assets/resume.png" width="125" height="50" class="resume" onmouseover="document.getElementById('sketch').src='https://i.imgur.com/67wyyz8.png'" onmouseout="document.getElementById('sketch').src='https://i.imgur.com/zSVliHA.png'"> <span> <img src= "https://i.imgur.com/oLoBhpJ.png" alt="resume" width="636" height="823" class="resumephoto">
    </span>
    </a>


    <a class = "tooltip2"><img src="./assets/portfolio.png" width="125" height="50" class="portfolio"  onmouseover="document.getElementById('sketch').src='https://i.imgur.com/xlYJWsZ.png'" onmouseout="document.getElementById('sketch').src='https://i.imgur.com/zSVliHA.png'"> <span>
  <h2> Here's where you can find some of my stuff. </h2>
    <div class="gallery">

      <a target="_blank" href="https://i.imgur.com/gB2ytCX.png">
        <img src="https://i.imgur.com/H3f3lip.png" alt="Cinque Terre" width="600" height="400">
      </a>
      <div class="desc"><h1>Bench Project:</h1> Designed and modeled a pedestrian bench to integrate into the landscape of the Belo Center for New Media lawn. Critical attention was given to drafting a bench that equally functioned as a recliner.</div>
    </div>

    <div class="gallery">
      <a target="_blank" href="https://drive.google.com/file/d/18zFaWXM4O_d90LzXpjIKOVvnZRvwVjhY/view?usp=sharing">
        <img src="https://i.imgur.com/VIqu99M.png" alt="Forest" width="600" height="400">
      </a>
      <div class="desc"><h1> Highrise Project:</h1> Fully designed, mapped and modeled a 600’ high-rise virtually stationed in Mexico City, Mexico for Introduction to Design II with a small team of three. Project built on “neighborhood” theme and the resulting struggles that come with dense, vertical residential packing. </div>
    </div>

    <div class="gallery">
      <a target="_blank" href="https://drive.google.com/file/d/1EizLQ9WsJ7VYFFzXrfUAwiQHD-hJK1-E/view?usp=sharing">
        <img src="https://i.imgur.com/89xRVs4.png" alt="Northern Lights" width="600" height="400">
      </a>
      <div class="desc"><h1>Sketchbook:</h1> A compedium of personal sketches and projects. Will be frequently updated! </div>
    </div>

</span>
  </a>


    <a href="https://www.instagram.com/thejackwallace/?hl=en" target="_blank"><img src="./assets/insta.png" width="200" height="61" class="insta" align="bottom right" onmouseover="document.getElementById('sketch').src='https://i.imgur.com/e6lJgSH.png'" onmouseout="document.getElementById('sketch').src='https://i.imgur.com/zSVliHA.png'"> </a>
    <a href="mailto:jackwallacecollege@gmail.com" target="_blank"><img src="./assets/email.png" width="200" height="54" class="email" align="bottom right" onmouseover="document.getElementById('sketch').src='https://i.imgur.com/MhM0qGR.png'" onmouseout="document.getElementById('sketch').src='https://i.imgur.com/zSVliHA.png'"> </a>

    <img id="sketch" class="sketch" src="./assets/backgroundphoto.png" width="400" height="250">

</div>

 </template>

 <script>

 export default{
 name: 'App',
}


</script>

<style>

div.gallery {
  margin-top: 10px;
  margin-right: 5px;
  border: 1px solid #ccc;
float: right;
  width: 220px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding-top: 5px;
  padding: 15px;
  text-align: justify;
}


h1 {font-size: 20px;
font-family: "Futura", bold;}

h2 {font-size: 20px;
  margin-top: 125px;
  margin-left: 20px;
font-family: "Futura", bold;}


.resumephoto {
position:absolute;
  bottom: 10px;
  top:0px;

  }

  .resume {
position:absolute;
    top: 320px;
    left: 550px;

    }

  .resume:hover {
    position: absolute;
    top: 320px;
    left: 550px;
    animation: shake 0.5s;
    animation-iteration-count: infinite;
    }
    @keyframes shake {
      0% { transform: translate(1px, 1px) rotate(0deg); }
      10% { transform: translate(-1px, -2px) rotate(-1deg); }
      20% { transform: translate(-3px, 0px) rotate(1deg); }
      30% { transform: translate(3px, 2px) rotate(0deg); }
      40% { transform: translate(1px, -1px) rotate(1deg); }
      50% { transform: translate(-1px, 2px) rotate(-1deg); }
      60% { transform: translate(-3px, 1px) rotate(0deg); }
      70% { transform: translate(3px, 1px) rotate(-1deg); }
      80% { transform: translate(-1px, -1px) rotate(1deg); }
      90% { transform: translate(1px, 2px) rotate(0deg); }
      100% { transform: translate(1px, -2px) rotate(-1deg); }

  }




  .about {
    position: absolute;
    top: 270px;
    left: 550px;
  }

.about:hover {

  position: absolute;
  top: 270px;
  left: 550px;
animation: shake 0.5s;
animation-iteration-count: infinite;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
.portfolio {
  position: absolute;
  top: 360px;
  left: 550px;
padding-top: 30px;
}
.portfolio:hover {
  position: absolute;
  top: 360px;
  left: 550px;
  animation: shake 0.5s;
  animation-iteration-count: infinite;
  }
  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}
.sketch {
  position: absolute;
  top: 250px;
  left: 150px;
}

.sign {
  position: absolute;
  bottom: 250px;
  left: 170px;
}


.insta {
  position: absolute;
  bottom: 50px;
  left: 920px;
   padding-right: 15px;
}
.insta:hover {
  position: absolute;
  bottom: 50px;
  left: 920px;
  animation: shake 0.5s;
  animation-iteration-count: infinite;
  }
  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}

.email {
  position: absolute;
  bottom: 50px;
  right: 100px;
  padding-left: 15px;
}

.email:hover {
  position: absolute;
  bottom: 50px;
  right: 100px;
  animation: shake 0.5s;
  animation-iteration-count: infinite;
  }
  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}


.tooltip {
  text-decoration:none;
  position:relative;
}

.tooltip span {
  display:none;
  -moz-border-radius:20px;
  -webkit-border-radius:20px;
  border-radius:20px;
  color:black;
  background:white;
}


.tooltip:hover span {
  font-size: 16px;
  font-family: "Times New Roman";
  display:block;
  position:absolute;
  top:0;
  left:0;
  z-index:1000;
  width:700px;
  height:700px;
  margin-top:50px;
  margin-left:695px;
  padding:8px;
}

.tooltip2 {
  text-decoration:none;
  position:relative;
}

.tooltip2 span {
  display:none;
  -moz-border-radius:2px;
  -webkit-border-radius:2px;
  border-radius:2px;
  color:black;
  background:white;
}


.tooltip2:hover span {
  display:block;
  position:absolute;
  top:0;
  left:0;
  z-index:1000;
  width:700px;
  height:500px;
  margin-top:0px;
  margin-left:680px;
  padding:8px;
}


</style>

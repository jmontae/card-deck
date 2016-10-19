# "card-deck" scrolling trick
### made with some jQuery wizardry

Check the demo [here](http://www.jermaine.fyi/card-deck).

Couple things:

Here's the HTML structure.

```html
<div class="slide slide0"></div>               //very first slide, indexed at 0
<div class="container1">                      //slides thereafter have a container...
<div id="slide1" class="slide slide1"></div> //and a slide	
</div>
<div class="container2">
  <div id="slide2" class="slide slide2"></div>
</div>
```

Here's some CSS stuff. I've commented the .css file as well, hopefully it's not too confusing!

    body{
      height: 340vh; // 100vh x the number of slides you have (+ however much for a footer, in this case 40vh)
    }

    .slide{
      height: 100vh; //slides are full viewport height
    }

    .slide0{ //very first slide
      position: relative;       //first slide needs relative positioning if using z-indeces
      z-index: 3;               //top-most z-index for the first slide
    }
    
    .container1{	
      position: absolute;	
      top: 0;	        //all containers are given absolute positioning (so they stack like a deck)
      left: 0;	
      height: 200vh;  //100vh x the number of the slide (in this case, 2). This is so the script knows how far to scroll	
      z-index: 2;     //the z-index goes on the containers hereafter (only the first slide needs an index)
    }
    
    .slide1{    
      width: 100vw;   //IMPORTANT: divs need a width if they're fixed or they won't be visible  
      position: fixed;	
      background-image: url(slide2.jpg); 
      background-position: center;    
      background-repeat: none;
    }
    
    .container-footer{      //if you're making a footer, give it a container
      height: 340vh;        //since the footer is last, the container is the height of the body  
      position: absolute;  
      top: 0;  
      left: 0;  
      z-index: 0;           //footer has 0 index (or -1 so you don't have to worry about numbers)
     }

    footer{  
      height: 40vh;  
      width: 100vw;  
      position: fixed;      //the footer will be fixed to the bottom of its container.
      bottom: 0;            //it'll be visible when scrolling past the last slide
      right: 0;  
      background-color: black;
    }

In the script.js file, just add the lines for the slides

```javascript
stopFixedScroll(1); //index of the slide ( i.e. '.slide1') as the parameter
```

That's it! Feel free to reach out if you need help!

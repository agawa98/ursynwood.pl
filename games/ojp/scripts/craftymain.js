var acounter = 0;
var bcounter = 0;
var ccounter = 0;
var dcounter = 0;
var ecounter = 0;
var fcounter = 0;
var gcounter = 0;
var hcounter = 0;
var icounter = 0;
var jcounter = 0;
var kcounter = 0;
var lcounter = 0;
var mcounter = 0;
var ncounter = 0;
var ocounter = 0;
var pcounter = 0;
var rcounter = 0;
var scounter = 0;
var tcounter = 0;
var ucounter = 0;
var wcounter = 0;
var xcounter = 0;
var ycounter = 0;
var zcounter = 0;
var aacounter = 0;
var counterskel=250;
var skeletoncounter=0;
var jakubpuchatekhp = 100;
var swordjakubpuchatekhp=100;
var swordjakubpuchatekspeed=1;
var healthregentimeout = 100;
var damagemultiplier=1;
var wizardhp = 150;
var starcounter = 0;
var wizardspeed =0.5;
var normalskeletonspeed = 1.8;
var bigskeletonspeed = 1.5;
var xskeletonspeed = 3;
var yskeletonspeed = 3;
var normalskeletonhp = 120;
var bigskeletonhp = 160;
var xskeletonhp = 100;
var yskeletonhp = 100;
var bomblont = 0;
var openbars =0;
var miodekcooldown = 0;
var lastfacingdirection=0;
var addspeed = 0.3;
var cobra1hp = 100;
var cobra2hp = 100;
var cobra3hp = 100;
var cobra1speed = 2;
var cobra2speed = 3;
var cobra3speed = 4;
var venomduration = 0;
var ninjaspeed = 3;
var ninjatargetx = 100;
var ninjatargety = 400;
var ninjahp = 100;
var shurikenxdirection = 0;
var shurikenydirection = 0;
var putinspeed = 1;
var putintargetx = 600;
var putintargety = 100;
var putinhp = 250;
var swordpickedup = false;
var skelspawned= false;
var medpackpickedup =true;
var skelpassed=false;
var wellchoicehasbeenmade=false;
var bombpickedup = false;
var bombspawned = false;
var thebombhasbeenplanted = false;
var someonewashurt = false;
var venomresist = false;
var ninjakilled = false;
var dollskilled = true;
var villageburnedtext = "Ta wioska wyglądała podejrzanie więc wybiegłeś stamtąd jak najszybciej nawet nie patrząc na studnię";
var wizardtext = ["Czarodziej: Hultaju oddawaj moje gwiazdy!!!", "Czarodziej: Co ty robisz z moimi gwiazdami??", "Czarodziej: Stój!!!!!", "Czarodziej: *sapie*"];
var skeletontext = ["*kości stukają*", "Szkielet: Co ty tu robisz??", "Szkielet: Co zrobiłeś z Czarodziejem???"];
var bombtut = ["Kliknij O aby podłożyć bombę (najpierw musisz ją zebrać)"];
var miodektut = ["Kliknij P aby strzelać telepatycznym miodkiem"];
  Crafty.init(800, 500, document.getElementById("game"));
  
  Crafty.sprite(20, "img/sprites20.png",{
    void: [111,1111],
    grass1: [0,0],
    grass2: [1,0],
    grass3: [2,0],
    grass4: [3,0],
    wall: [0,1],
    star: [1,1],
    sword: [2,1],
    medpack: [3,1],
    cave1: [0,2],
    cave2: [1,2],
    cave3: [2,2],
    cave4: [3,2],
    cave5: [0,3],
    cave6: [1,3],
    cave7: [2,3],
    cave8: [3,3],
    lava1: [0,4],
    lava2: [1,4],
    bridge1: [2,4],
    bridge2: [3,4],
    lawn1: [0,5],
    lawn2: [1,5],
    lawn3: [2,5],
    lawn4: [3,5],
    lawn5: [0,6],
    lawn6: [1,6],
    fencehori: [2,6],
    fencevert: [3,6],
    fenceleftbot: [0,7],
    fencelefttop: [1,7],
    fencerighttop: [2,7],
    fencerightbot: [3,7],
    sanddefault: [0,8],
    sand1: [1,8],
    sand2: [2,8],
    sand3: [3,8],
    sand4: [0,9],
    sand5: [1,9],
    vineh1: [2,9],
    vineh2: [3,9],
    vinev1: [0,10],
    vinev2: [1,10],
    vinec1: [2,10],
    vinec2: [3,10],
    miodek: [0,11],
    cobra: [0,12],
    bombpickup: [2,12],
    sandcrack1: [0,13],
    sandcrack2: [1,13],
    concretedef: [0,14],
    concrete1: [1,14],
    concrete2: [2,14],
    concrete3: [3,14],
    concrete4: [0,15],
    stripe: [1,15],
    curb1: [2,15],
    curb2: [3,15],
    shuriken: [0,16],
    doll20: [1,17],

  });
  Crafty.sprite(40, "img/sprites40.png",{
    jakubpuchatek: [0,0],
    swordjakubpuchatek: [0,1],
    wizard: [1,0],
    doll40: [2,0],
    normalskeleton: [1,1],
    xskeleton: [0,2],
    yskeleton: [1,2],
    ninja: [0,3],
    kgbfloor: [1,3],
    sickle: [0,4]
  });
  Crafty.sprite(60, "img/sprites60.png",{
    bigskeleton: [0,0],
    wishingwell: [1,0],
    doll60: [0,1]
  });
  Crafty.sprite(80, "img/sprites80.png",{
    doll80 : [0,0]
  });
  Crafty.sprite(100, "img/sprites100.png",{
    putindefault: [0,0],
    putincrying: [1,0],
    putinwink: [2,0],
    putindead: [3,0],
  });
  Crafty.sprite(140, "img/sprites140.png",{
    ironbars: [0,0],
    house: [1,0],
    
  });
  Crafty.sprite(300, "img/sprites300.png",{
    bombready: [0,0],
    carpet: [0,1],
  });

  function op(){
    starcounter=10;
    openbars=4;
    counterskel = 390;
    venomresist = true;
  }

  function s5(){
    Crafty.enterScene("fifth");
  }

  function s6(){
    Crafty.enterScene("sixth");
  }




  function newtask(content, id){
    var text = document.createTextNode(content);
    var parag = document.createElement("p");
    parag.className = "objective";
    parag.id = id;
    var objdiv = document.getElementById("objectivelist");
    parag.appendChild(text);
    objdiv.appendChild(parag);
  }

  function healthloss(damage){
    if(swordpickedup == false){
      jakubpuchatekhp -=damage;
      $("#healthbar").html("HP: " + jakubpuchatekhp);
      $("#healthbarbar").val(jakubpuchatekhp);
    }
    if(swordpickedup == true){
      swordjakubpuchatekhp-=damage;
      $("#healthbar").html("HP: " + swordjakubpuchatekhp);
      $("#healthbarbar").val(swordjakubpuchatekhp);
    }
    isjakubpuchatekdeadyet();
  }

  function cleardialog(){
    $(".bubble").remove();
  }



  function isjakubpuchatekdeadyet(){
    if(swordpickedup ==true){
      if(swordjakubpuchatekhp<1){
        Crafty.enterScene("dead");
        cleardialog();
      }
    }
    else{
    if(jakubpuchatekhp<1){
      Crafty.enterScene("dead");
      cleardialog();
    }
    }
  }

  function iswizarddeadyet(){
    if(wizardhp<1){
      Crafty.enterScene("wizarddead");
      cleardialog();
      objectivecompleted("wizardobjective");
    }
  }

  function caniopenbars(){
    if(Math.round(Math.random()*4)>1){
      newdialogbubble(skeletontext, 2);
    }
    openbars++;
    if(openbars>3){
      skelpassed=true;
      ironbars.destroy();
      objectivecompleted("skeletonobjective");
    }
  }

  function isnormalskeletondeadyet(){
    if(normalskeletonhp<1){
      caniopenbars();
      normalskeleton.destroy();
    }
  }
  function isbigskeletondeadyet(){
    if(bigskeletonhp<1){
      caniopenbars();
      bigskeleton.destroy();
    }
  }
  function isxskeletondeadyet(){
    if(xskeletonhp<1){
      caniopenbars();
      xskeleton.destroy();
    }
  }
  function isyskeletondeadyet(){
    if(yskeletonhp<1){
      caniopenbars();
      yskeleton.destroy();
    }
  }

  function objectivecompleted(objectiveid){
    document.getElementById(objectiveid).style.color = "green";
  }

  function newdialogbubble(whicharray, numberofarraycontentsminusone){
    let los=Math.round(Math.random()*numberofarraycontentsminusone);
    var parag = document.createElement("p");
    parag.className = "bubble";
    var text = document.createTextNode(whicharray[los]);
    var bubblediv = document.getElementById("bubblecontainer");
    parag.appendChild(text);
    bubblediv.appendChild(parag);
  }

  function showwizardobjective(){
    
    var wotext = document.createTextNode("Rozpruj Czarodzieja!!!");
    var parag = document.createElement("p");
    parag.className = "objective";
    parag.id = "wizardobjective";
    var objdiv = document.getElementById("objectivelist");
    parag.appendChild(wotext);
    objdiv.appendChild(parag);
  }

  function clearobjectives(){
    $(".objective").remove();
  }

  function healthregen(){
      ccounter++;
      if(ccounter > healthregentimeout && swordjakubpuchatekhp <99){
        healthloss(-2);
      }
      if(ccounter>healthregentimeout){
        ccounter = 0;
      }
  }

  document.getElementById("wellbtn").addEventListener("click", function(event){
    event.preventDefault();
    wellwished();
  });

  function wellwished(){
    if(document.getElementById("biggerhealth").checked){
      healthregentimeout=50;
      villageburnedtext = "Pełen sił idziesz przed siebie w kierunku Moskwy.";
    }
    if(document.getElementById("biggersword").checked){
      damagemultiplier = 2;
      villageburnedtext = "Z podwójnie śmiertelnym mieczem biegniesz dalej w kierunku Moskwy.";
    }
    wellchoicehasbeenmade=true;
    objectivecompleted("wellobjective");
    document.getElementById("wellchoice").style.visibility = "hidden";
  }

  function spawnmedpack(){
    let los = Math.round(Math.random()*10);
          if(los>3 && medpackpickedup ==true){
            medpackpickedup=false;
            var medx = Math.floor((Math.random()*650)+50);
            var medy = Math.floor((Math.random()*400)+50);
            medpack = Crafty.e("2D, Canvas, Solid, Collision, medpack")
                .attr({x: medx, y: medy, w:20, h:20})
                .checkHits("swordjakubpuchatek")
                .collision()
                .bind("HitOn", function(){
                  if(swordjakubpuchatekhp<76){
                    healthloss(-25);
                    medpack.destroy();
                    medpackpickedup=true;
                  }
                  if(swordjakubpuchatekhp>75 && swordjakubpuchatekhp<100){
                    let damage = (100-swordjakubpuchatekhp)*-1;
                    healthloss(damage);
                    medpack.destroy();
                    medpackpickedup=true;
                  }
                });
          }
          bcounter=0;
  }

  function spawnbomb(){
          if(bombpickedup ==false && bombspawned==false && skelpassed == false){
            bombspawned=true;
            var bombx = Math.floor((Math.random()*650)+50);
            var bomby = Math.floor((Math.random()*400)+50);
            bomb = Crafty.e("2D, Canvas, Solid, Collision, bombpickup")
                .attr({x: bombx, y: bomby})
                .checkHits("swordjakubpuchatek")
                .collision()
                .bind("HitOn", function(){
                  if(bombpickedup==false){
                    bomb.destroy();
                    bombpickedup=true;
                    bombspawned=false;
                  }
                });
          }
          lcounter = 0;
  }

  function cobra1tookdamage(dmg){
    cobra1hp-=dmg;
    if(cobra1hp<1){
      cobra1.destroy();
    }
  }

  function cobra2tookdamage(dmg){
    cobra2hp-=dmg;
    if(cobra2hp<1){
      cobra2.destroy();
    }
  }

  function cobra3tookdamage(dmg){
    cobra3hp-=dmg;
    if(cobra3hp<1){
      cobra3.destroy();
    }
  }

  function isninjadeadyet(){
    if(ninjahp<1){
      objectivecompleted("killninja");
      ninja.destroy();
      ninjakilled = true;
      Crafty.enterScene("ninjadown");
    }
  }

  function isputindeadyet(){
    if(putinhp<1){
      objectivecompleted("killputin");
      putin.destroy();
      putinkilled = true;
      Crafty.enterScene("end1");
    }
  }

  Crafty.scene("introduction", function(){
    Crafty.background("#158f1b");
    Crafty.e("2D, DOM, Text")
    .text("Po tym, jak Kłapouchy okazał się agentem KGB, który miał na celu eksterminację wszystkich obywateli Stumilowego Lasu, Jakub Puchatek miał już dość tych zdradzieckich rusków.")
    .attr({x:30, y:230, w: 700, h:50})
    .css({"text-align": "center", "color": "white", "font-size": "20px", "font-family": "'Courier New', Courier, monospace;"})
    .bind("EnterFrame", function(){
      dcounter++;
      if(dcounter==400){
        Crafty.enterScene("introduction2");
      }
    })
    .bind("KeyDown", function(e){
      if(e.key == Crafty.keys.SPACE){
        dcounter = 399;
      }
    });
  });

  Crafty.scene("introduction2", function(){
    Crafty.background("#168250");
    Crafty.e("2D, DOM, Text")
    .text("Zaraz po pogrzebie Krzysia wyruszył w podróż do filii rosyjskiej agencji niecałe 2500km stąd. Pierwszą przeszkodę spotkał jeszcze w swoim rodzimym lesie.")
    .attr({x:30, y:230, w: 700, h:50})
    .css({"text-align": "center", "color": "white", "font-size": "20px", "font-family": "'Courier New', Courier, monospace;"})
    .bind("EnterFrame", function(){
      ecounter++;
      if(ecounter==400){
        Crafty.enterScene("first");
      }
    })
    .bind("KeyDown", function(e){
      if(e.key == Crafty.keys.SPACE){
        ecounter = 399;
      }
    });
  });





  Crafty.scene("first",function(){
          
           function generateWorld() {
            for (var i = 0; i < 40; i++) {
              for (var j = 0; j < 25; j++) {
                 grassType = Math.floor((Math.random()*4)+1);
                 Crafty.e("2D, Canvas, Color, grass"+grassType)
                  .attr({x: i * 20, y: j * 20})
                  .color("none");
              }
            }
          }
        
          function generateWestWall(){
            for(var i=0;i<25;i++){
              Crafty.e("2D, Canvas, Solid, Collision, wall")
                .attr({x:0 , y:i*20})
                .checkHits("jakubpuchatek")
                .checkHits("swordjakubpuchatek")
                .bind("HitOn", function(){
                  jakubpuchatek.x+=12;
                  if(swordpickedup == true){
                    swordjakubpuchatek.x+=12;
                  }
                });
            }
          }

          function generateEastWall(){
            for(var i=0;i<25;i++){
              Crafty.e("2D, Canvas, Solid, Collision, wall")
                .attr({x:780 , y:i*20})
                .checkHits("jakubpuchatek")
                .checkHits("swordjakubpuchatek")
                .bind("HitOn", function(){
                  jakubpuchatek.x-=12;
                  if(swordpickedup == true){
                    swordjakubpuchatek.x-=12;
                  }
                });
            }
          }

          function generateNorthWall(){
            for(var i=0;i<40;i++){
              Crafty.e("2D, Canvas, Solid, Collision, wall")
                .attr({x:20*i , y:0})
                .checkHits("jakubpuchatek")
                .checkHits("swordjakubpuchatek")
                .bind("HitOn", function(){
                  jakubpuchatek.y+=12;
                  if(swordpickedup == true){
                    swordjakubpuchatek.y+=12;
                  }
                });
            }
          }

          function generateSouthWall(){
            for(var i=0;i<40;i++){
              Crafty.e("2D, Canvas, Solid, Collision, wall")
                .attr({x:i*20 , y:480})
                .checkHits("jakubpuchatek")
                .checkHits("swordjakubpuchatek")
                .bind("HitOn", function(){
                  jakubpuchatek.y-=12;
                  if(swordpickedup == true){
                    swordjakubpuchatek.y-=12;
                    
                  }
                });
            }
          }
        Crafty.bind("EnterFrame", function(){
          if(jakubpuchatek.x-wizard.x<0){
            wizard.x-=wizardspeed;
          }
          else{
            wizard.x+=wizardspeed;
          }
          if(jakubpuchatek.y-wizard.y<0){
            wizard.y-=wizardspeed;
          }
          else{
            wizard.y+=wizardspeed;
          }
        });

        generateWorld();
        generateWestWall();
        generateEastWall();
        generateSouthWall();
        generateNorthWall();

        var stext = document.createTextNode("Zbierz gwiazdy 0/11");
        var parag = document.createElement("p");
        parag.className = "objective";
        parag.id = "stars";
        var objdiv = document.getElementById("objectivelist");
        parag.appendChild(stext);
        objdiv.appendChild(parag);

        

          jakubpuchatek = Crafty.e("2D, Canvas, Fourway, Collision, Solid, jakubpuchatek")
          .attr({x:400, y:250, w:40, h:40})
          .fourway(200)
          .collision()
          .checkHits("Solid")
          .bind("HitOn",function(){
          });
          

          wizard = Crafty.e("2D, Canvas, Solid, Collision, wizard")
          .attr({x:700, y:200, w:40, h:40})
          .checkHits("jakubpuchatek")
          .collision()
          .bind("HitOn",function(){
            if(wizard.x<jakubpuchatek.x){
              jakubpuchatek.x+=20;
            }
            if(wizard.x>jakubpuchatek.x){
              jakubpuchatek.x-=20;
            }
            if(wizard.y<jakubpuchatek.y){
              jakubpuchatek.y+=20;
            }
            if(wizard.y>jakubpuchatek.y){
              jakubpuchatek.y-=20;
            }
            let damage = 10;
            healthloss(damage);
          });

          function starcollector(){

            starx = Math.floor((Math.random()*700)+50);
            stary = Math.floor((Math.random()*400)+50);

            star = Crafty.e("2D, Canvas, Solid, Collision, star")
            .attr({x: starx, y: stary, w:20, h:20})
            .checkHits("jakubpuchatek")
            .collision()
            .bind("HitOn", function(){
                starcounter++;
                wizardspeed=wizardspeed*1.15;
                star.destroy();
                if(starcounter<11){
                  starcollector();
                } 
                $("#stars").html("Zbierz gwiazdy ("+starcounter+"/11)");
                if(starcounter>10){
                  objectiveid="stars";
                  objectivecompleted(objectiveid);

                  newtask("Rozpruj Czarodzieja!!!", "wizardobjective");
                  
                  sword = Crafty.e("2D, Canvas, Solid, Collision, sword")
                  .attr({x: 100, y:210, w:40, h:40})
                  .checkHits("jakubpuchatek")
                  .collision()
                  .bind("HitOn", function(){
                    sword.destroy();
                    swordpickedup = true;
                    
                    swordjakubpuchatek = Crafty.e("2D, Canvas, Fourway, Collision, Solid, swordjakubpuchatek")
                      .attr({x:jakubpuchatek.x, y:jakubpuchatek.y, w:40, h:40})
                      .fourway(200)
                      .collision()
                      .checkHits("Solid")
                      .onHit("wizard", function(){
                        wizardhp-=25;
                        iswizarddeadyet();
                      })
                      .bind("HitOn",function(){
                      });
                    swordjakubpuchatekhp = jakubpuchatekhp;
                    jakubpuchatek.destroy();
                    
                    swordwizard = Crafty.e("2D, Canvas, Solid, Collision, wizard")
                      .attr({x:wizard.x, y:wizard.y, w:40, h:40})
                      .checkHits("swordjakubpuchatek")
                      .collision()
                      .bind("HitOn",function(){
                        if(swordwizard.x<swordjakubpuchatek.x){
                          swordjakubpuchatek.x+=20;
                        }
                        if(swordwizard.x>swordjakubpuchatek.x){
                          swordjakubpuchatek.x-=20;
                        }
                        if(swordwizard.y<swordjakubpuchatek.y){
                          swordjakubpuchatek.y+=20;
                        }
                        if(swordwizard.y>swordjakubpuchatek.y){
                          swordjakubpuchatek.y-=20;
                        }
                        healthloss(10);
                      });
                    swordwizardspeed = 2.5;
                    wizard.destroy();
                    Crafty.bind("EnterFrame", function(){
                      if(swordjakubpuchatek.x-swordwizard.x<0){
                        swordwizard.x-=swordwizardspeed;
                      }
                      else{
                        swordwizard.x+=swordwizardspeed;
                      }
                      if(swordjakubpuchatek.y-swordwizard.y<0){
                        swordwizard.y-=swordwizardspeed;
                      }
                      else{
                        swordwizard.y+=swordwizardspeed;
                      }
                    });
                  });
                }
                let los = Math.floor(Math.random()*100);
                if(los>75){
                  newdialogbubble(wizardtext, 3);
                }
            });
          }
          
          starcollector();
          
  });





  Crafty.scene("wizarddead", function(){
    let damage = swordjakubpuchatekhp-100;
    healthloss(damage);
    Crafty.background("green");
    Crafty.e("Text, 2D, DOM")
    .text("Brawo, rozgromiłeś Czarodzieja! Przeszukując jego zwłoki w poszukiwaniu magicznych przedmiotów, natrafiasz na błyszczący pierścień. Po założeniu go na palec przenosi cię on do komnaty Czarodzieja...")
    .attr({x:30, y:170, w: 700, h:50})
    .css({"text-align": "center", "color": "white", "font-size": "30px", "font-family": "'Courier New', Courier, monospace;"})
    .bind("EnterFrame", function(){
      acounter++;
      if(acounter==250){
        Crafty.enterScene("second");
      }
      if(acounter==249){
        clearobjectives();
      }
    })
    .bind("KeyDown", function(e){
      if(e.key == Crafty.keys.SPACE){
        acounter = 248;
      }
    });
  });
  





  Crafty.scene("second", function(){
    
    function generateWorld() {
      for (var i = 0; i < 40; i++) {
        for (var j = 0; j < 25; j++) {
          var los=Math.round(Math.random()*100);
          if(los>97){
           cavetype = Math.floor((Math.random()*6)+2);
           Crafty.e("2D, Canvas, Color, cave"+cavetype)
            .attr({x: i * 20, y: j * 20})
            .color("none");
          }
          else{
            Crafty.e("2D, Canvas, Color, cave1")
              .attr({x: i * 20, y: j * 20})
              .color("none");
        }
      }
      }
    }
  
    function generateWestWall(){
      for(var i=0;i<25;i++){
        lavatype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, lava"+lavatype)
          .attr({x:0 , y:i*20})
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.x+=12;
          healthloss(20);
          });
      }
    }

    function generateEastWall(){
      for(var j=37;j<40;j++){
      for(var i=0;i<25;i++){
        if(i>9 && i<15){
          continue;
        }
        lavatype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, lava"+lavatype)
          .attr({x:j*20 , y:i*20})
          .checkHits("jakubpuchatek")
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.x-=12;
          healthloss(20);
          });
      }
    }
    }

    function generateBridge(){
      for(var j=37;j<40;j++){
        for(var i=10; i<15;i++){
          let bridgetype = Math.round(Math.random()+1);
          Crafty.e("2D, Canvas, bridge"+bridgetype)
          .attr({x:j*20, y:i*20});
        }
      }
    }

    function generateIronBars(){
        ironbars = Crafty.e("2D, Canvas, Collision, Solid, ironbars")
        .attr({x:720, y:180, w:20, h:140})
        .collision()
        .checkHits("jakubpuchatek")
        .checkHits("swordjakubpuchatek")
        .bind("HitOn", function(){
          swordjakubpuchatek.x-=16;
        });
    }

    function generateNorthWall(){
      for(var i=0;i<40;i++){
        lavatype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, lava"+lavatype)
          .attr({x:20*i , y:0})
          .checkHits("jakubpuchatek")
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.y+=12;
          healthloss(20);
          });
      }
    }

    function generateSouthWall(){
      for(var i=0;i<40;i++){
        lavatype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, lava"+lavatype)
          .attr({x:i*20 , y:480})
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.y-=12; 
          healthloss(20);
          });
      }
    }

    function generateNextLevelTransition(){

        Crafty.e("2D, Canvas, Solid, Collision")
        .attr({x:780, y:200, w:10, h:100})
        .collision()
        .checkHits("swordjakubpuchatek")
        .bind("HitOn", function(){
          cleardialog();
          clearobjectives();
          Crafty.enterScene("skeletonkilled");
          let swjphp = -1*(100-swordjakubpuchatekhp);
        healthloss(swjphp);
        });
    }

    generateWorld();
    generateWestWall();
    generateSouthWall();
    generateNorthWall();
    generateEastWall();
    generateBridge();
    generateIronBars();
    generateNextLevelTransition();

    newtask("Zabij cztery szkielety aby móc otworzyć bramę!", "skeletonobjective");

    newdialogbubble(bombtut, 0);

    Crafty.bind("EnterFrame",function(){
      lcounter++;
      if(lcounter==500){
        spawnbomb();
      }
    });

    Crafty.bind("KeyDown", function(e){
      if(e.key == Crafty.keys.O){
        
        if(bombpickedup==true && thebombhasbeenplanted==false){
        thebombhasbeenplanted=true;
        bombarmed = Crafty.e("2D, Canvas, Solid, Collision, SpriteAnimation, bombready")
        .attr({x:swordjakubpuchatek.x-150, y:swordjakubpuchatek.y-150})
        .reel("bombexplosion", 10000, 0, 0, 2)
        .animate("bombexplosion", 1)
        .collision()
        .checkHits("Solid")
        .bind("EnterFrame",function(){
          
          bomblont++;
          if(bomblont>190){
            this.reelPosition(1);
          }
          if(bomblont>201){
            bomblont=0;
            bombpickedup=false;
            thebombhasbeenplanted=false;
            bombarmed.destroy();
          }
          if(bomblont==200){
              if(swordjakubpuchatek.x > bombarmed.x && swordjakubpuchatek.x < bombarmed.x+300 && swordjakubpuchatek.y > bombarmed.y && swordjakubpuchatek.y < bombarmed.y+300){
                healthloss(20);
                someonewashurt=true;
            }
            if(counterskel>400){
              if(xskeleton.x > bombarmed.x && xskeleton.x < bombarmed.x+300 && xskeleton.y > bombarmed.y && xskeleton.y < bombarmed.y+300 && xskeletonhp>1){
                xskeletonhp-=50;
                isxskeletondeadyet();
                someonewashurt=true;
              }
            }
            if(counterskel>1200){
              if(bigskeleton.x > bombarmed.x && bigskeleton.x < bombarmed.x+300 && bigskeleton.y > bombarmed.y && bigskeleton.y < bombarmed.y+300 && bigskeletonhp>1){
                bigskeletonhp-=50;
                isbigskeletondeadyet();
                someonewashurt=true;
              }
            }
            if(counterskel>800){
              if(normalskeleton.x > bombarmed.x && normalskeleton.x < bombarmed.x+300 && normalskeleton.y > bombarmed.y && normalskeleton.y < bombarmed.y+300 && normalskeletonhp>1){
                normalskeletonhp-=50;
                isnormalskeletondeadyet();
                someonewashurt=true;
              }
            }
            if(counterskel>1600){
              if(yskeleton.x > bombarmed.x && yskeleton.x < bombarmed.x+300 && yskeleton.y > bombarmed.y && yskeleton.y < bombarmed.y+300 && yskeletonhp>1){
                yskeletonhp-=50;
                isyskeletondeadyet();
                someonewashurt=true;
              }
            }
            if(someonewashurt == true){
              spawnbomb();
              bombpickedup=false;
              someonewashurt=false;
            }
          }
        });
        }
      }
    });





    swordjakubpuchatek = Crafty.e("2D, Canvas, Fourway, Collision, Solid, swordjakubpuchatek")
      .attr({x:jakubpuchatek.x, y:jakubpuchatek.y, w:40, h:40})
      .fourway(200)
      .collision()
      .checkHits("Solid")
      .onHit("normalskeleton", function(){
        normalskeletonhp-=20;
        isnormalskeletondeadyet();
      })
      .onHit("bigskeleton", function(){
        bigskeletonhp -=20;
        isbigskeletondeadyet();
      })
      .onHit("xskeleton", function(){
        xskeletonhp -=20;
        isxskeletondeadyet();
      })
      .onHit("yskeleton", function(){
        yskeletonhp-=20;
        isyskeletondeadyet();
      });

      Crafty.bind("EnterFrame", function(){                    
        bcounter++;
        
        if(bcounter>300){                
          bcounter=0;
          spawnmedpack();
        }
      });

      Crafty.bind("EnterFrame", function(){
        healthregen();
      });
      
      Crafty.bind("EnterFrame", function(){
        counterskel++;
        if(skelpassed==false){
        if(counterskel==400 && skeletoncounter<4){
          xskeleton = Crafty.e("2D, Canvas, Solid, Collision, xskeleton, enemy")
          .checkHits("swordjakubpuchatek")
          .attr({x:100, y:400, w:40, h:40})
          .collision()
          .onHit("swordjakubpuchatek",function(){
            if(xskeleton.x<swordjakubpuchatek.x){
              swordjakubpuchatek.x+=20;
            }
            if(xskeleton.x>swordjakubpuchatek.x){
              swordjakubpuchatek.x-=20;
            }
            if(xskeleton.y<swordjakubpuchatek.y){
              swordjakubpuchatek.y+=20;
            }
            if(xskeleton.y>swordjakubpuchatek.y){
              swordjakubpuchatek.y-=20;
            }
            let damage = 15;
            healthloss(damage);
          });
          skelspawned =true;
          skeletoncounter++;
        }

        if(counterskel==800 && skeletoncounter<4){
          normalskeleton = Crafty.e("2D, Canvas, Solid, Collision, normalskeleton, enemy")
          .checkHits("swordjakubpuchatek")
          .attr({x:700, y:100, w:40, h:40})
          .collision()
          .onHit("swordjakubpuchatek",function(){
            if(normalskeleton.x<swordjakubpuchatek.x){
              swordjakubpuchatek.x+=20;
            }
            if(normalskeleton.x>swordjakubpuchatek.x){
              swordjakubpuchatek.x-=20;
            }
            if(normalskeleton.y<swordjakubpuchatek.y){
              swordjakubpuchatek.y+=20;
            }
            if(normalskeleton.y>swordjakubpuchatek.y){
              swordjakubpuchatek.y-=20;
            }
            healthloss(20);
          });
          skelspawned =true;
          skeletoncounter++;
        }

        if(counterskel==1200 && skeletoncounter<4){
          bigskeleton = Crafty.e("2D, Canvas, Solid, Collision, bigskeleton, enemy")
          .checkHits("swordjakubpuchatek")
          .attr({x:700, y:400, w:60, h:60})
          .collision()
          .onHit("swordjakubpuchatek",function(){
            if(bigskeleton.x<swordjakubpuchatek.x){
              swordjakubpuchatek.x+=40;
            }
            if(bigskeleton.x>swordjakubpuchatek.x){
              swordjakubpuchatek.x-=40;
            }
            if(bigskeleton.y<swordjakubpuchatek.y){
              swordjakubpuchatek.y+=40;
            }
            if(bigskeleton.y>swordjakubpuchatek.y){
              swordjakubpuchatek.y-=40;
            }
            healthloss(35);
          });
          skelspawned =true;
          skeletoncounter++;
        }

        if(counterskel==1600 && skeletoncounter<4){
          yskeleton = Crafty.e("2D, Canvas, Solid, Collision, yskeleton, enemy")
          .checkHits("swordjakubpuchatek")
          .attr({x:100, y:50, w:40, h:40})
          .collision()
          .onHit("swordjakubpuchatek",function(){
            if(yskeleton.x<swordjakubpuchatek.x){
              swordjakubpuchatek.x+=20;
            }
            if(yskeleton.x>swordjakubpuchatek.x){
              swordjakubpuchatek.x-=20;
            }
            if(yskeleton.y<swordjakubpuchatek.y){
              swordjakubpuchatek.y+=20;
            }
            if(yskeleton.y>swordjakubpuchatek.y){
              swordjakubpuchatek.y-=20;
            }
            healthloss(10);
          });
          skelspawned =true;
          skeletoncounter++;
        }
      }
      });
  
      Crafty.bind("EnterFrame", function(){
          if(skelspawned==true){
            if(skeletoncounter>1){
              if(swordjakubpuchatek.x-normalskeleton.x<0){
                normalskeleton.x-=normalskeletonspeed;
              }
              else{
                normalskeleton.x+=normalskeletonspeed;
              }
              if(swordjakubpuchatek.y-normalskeleton.y<0){
                normalskeleton.y-=normalskeletonspeed;
              }
              else{
                normalskeleton.y+=normalskeletonspeed;
              }
            }
            if(skeletoncounter>2){
              if(swordjakubpuchatek.x-bigskeleton.x<0){
                bigskeleton.x-=bigskeletonspeed;
              }
              else{
                bigskeleton.x+=bigskeletonspeed;
              }
              if(swordjakubpuchatek.y-bigskeleton.y<0){
                bigskeleton.y-=bigskeletonspeed;
              }
              else{
                bigskeleton.y+=bigskeletonspeed;
              }
            }
            if(skeletoncounter>0){
              if(swordjakubpuchatek.x-xskeleton.x<0){
                xskeleton.x-=xskeletonspeed;
              }
              else{
                xskeleton.x+=xskeletonspeed;
              }
            }
            if(skeletoncounter>3){
              if(swordjakubpuchatek.y-yskeleton.y<0){
                yskeleton.y-=yskeletonspeed;
              }
              else{
                yskeleton.y+=yskeletonspeed;
              }
            }
          }
          });
    
  });

  Crafty.scene("skeletonkilled", function(){
    bombpickedup=false;
    medpackpickedup=false;
    Crafty.background("#411561");
    Crafty.e("Text, 2D, DOM")
    .text("Wychodząc z jaskini natknąłęś się na opuszczoną osadę ze studnią na środku.")
    .attr({x:30, y:230, w: 700, h:50})
    .css({"text-align": "center", "color": "white", "font-size": "30px", "font-family": "'Courier New', Courier, monospace;"})
    .bind("EnterFrame",function(){
      fcounter++;
      if(fcounter==300){
        Crafty.enterScene("third");
      }
    })
    .bind("KeyDown", function(e){
      if(e.key == Crafty.keys.SPACE){
        fcounter = 299;
      }
    });
  });





  Crafty.scene("third", function(){


    newtask("Wybierz życzenie w studni", "wellobjective");


    function generateWorld() {
      for (var i = 0; i < 40; i++) {
        for (var j = 0; j < 25; j++) {
          var los=Math.round(Math.random()*100);
          
          if(los>98){
           lawntype = Math.round((Math.random()*2)+3);
           Crafty.e("2D, Canvas, Color, lawn"+lawntype)
            .attr({x: i * 20, y: j * 20})
            .color("none");
          }
          if(los>90 && los<=98){
          lawntype = Math.round(Math.random()+1);
           Crafty.e("2D, Canvas, Color, lawn"+lawntype)
            .attr({x: i * 20, y: j * 20})
            .color("none");
          }
          if(los<=90){
            Crafty.e("2D, Canvas, Color, lawn6")
              .attr({x: i * 20, y: j * 20})
              .color("none");
        }
      }
      }
    }
  
    function generateWestWall(){
      for(var i=0;i<25;i++){
        lavatype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, fencevert")
          .attr({x:0 , y:i*20})
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.x+=12;
          });
      }
    }

    function generateEastWall(){
      for(var i=0;i<25;i++){
        if(i>9 && i<15){
          continue;
        }
        lavatype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, fencevert")
          .attr({x:780 , y:i*20})
          .checkHits("jakubpuchatek")
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.x-=12;
          });
      }
    }
    function generateNorthWall(){
      for(var i=1;i<39;i++){
        lavatype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, fencehori")
          .attr({x:20*i , y:0})
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.y+=12;
          });
      }
      Crafty.e("2D, Canvas, Solid, Collision, fencerighttop")
        .attr({x:780, y:0});
      Crafty.e("2D, Canvas, Solid, Collision, fencelefttop")
        .attr({x:0, y:0});

    }

    function generateSouthWall(){
      for(var i=1;i<39;i++){
        lavatype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, fencehori")
          .attr({x:i*20 , y:480})
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.y-=12; 
          });
      }
      Crafty.e("2D, Canvas, Solid, Collision, fencerightbot")
        .attr({x:780, y:480});
      Crafty.e("2D, Canvas, Solid, Collision, fenceleftbot")
        .attr({x:0, y:480});
    }

    function generateHouses(){
      var house = Crafty.e("2D, Canvas, Solid, Collision, house")
        .attr({x:400, y:0})
        .collision()
        .checkHits("swordjakubpuchatek")
        .bind("HitOn",function(){
            if(house.x<swordjakubpuchatek.x){
              swordjakubpuchatek.x+=20;
            }
            if(house.x>swordjakubpuchatek.x){
              swordjakubpuchatek.x-=20;
            }
            if(house.y<swordjakubpuchatek.y){
              swordjakubpuchatek.y+=20;
            }
            if(house.y>swordjakubpuchatek.y){
              swordjakubpuchatek.y-=20;
            }

    });
    }

    function generateNextLevelTransition(){

      Crafty.e("2D, Canvas, Solid, Collision")
      .attr({x:780, y:200, w:10, h:100})
      .collision()
      .checkHits("swordjakubpuchatek")
      .bind("HitOn", function(){
        cleardialog();
        clearobjectives();
        Crafty.enterScene("villageburned");
        let swjphp = -1*(100-swordjakubpuchatekhp);
      healthloss(swjphp);
      });
     }

    generateWorld();
    generateEastWall();
    generateWestWall();
    generateNorthWall();
    generateSouthWall();
    generateHouses();
    generateNextLevelTransition();

    var swordjakubpuchatek = Crafty.e("2D, Canvas, Fourway, Collision, Solid, swordjakubpuchatek")
    .attr({x:70, y:200})
    .fourway(200)
    .collision()
    .checkHits("Solid");

    var wishingwell = Crafty.e("2D, Canvas, Solid, Collision, wishingwell")
    .attr({x:570, y:220})
    .collision()
    .checkHits("Solid")
    .bind("HitOn",function(){
      if(wishingwell.x<swordjakubpuchatek.x){
        swordjakubpuchatek.x+=12;
      }
      if(wishingwell.x>swordjakubpuchatek.x){
        swordjakubpuchatek.x-=12;
      }
      if(wishingwell.y<swordjakubpuchatek.y){
        swordjakubpuchatek.y+=12;
      }
      if(wishingwell.y>swordjakubpuchatek.y){
        swordjakubpuchatek.y-=12;
      } 
      if(wellchoicehasbeenmade == false){
        document.getElementById("wellchoice").style.visibility = "visible";

       
      }
      

    });


  });



  Crafty.scene("villageburned",function(){
    if(wellchoicehasbeenmade==false){
      document.getElementById("wellchoice").style.visibility = "hidden";
    }
    Crafty.background("#411561");
    Crafty.e("Text, 2D, DOM")
    .text(villageburnedtext)
    .attr({x:30, y:230, w: 700, h:50})
    .css({"text-align": "center", "color": "white", "font-size": "30px", "font-family": "'Courier New', Courier, monospace;"})
    .bind("EnterFrame",function(){
      hcounter++;
      if(hcounter==300){
        Crafty.enterScene("fourth");
      }
    })
    .bind("KeyDown", function(e){
      if(e.key == Crafty.keys.SPACE){
        hcounter = 299;
      }
    });
  });



  Crafty.scene("fourth",function(){

    function generateWorld() {
      for (var i = 0; i < 40; i++) {
        for (var j = 0; j < 25; j++) {
          var los=Math.round(Math.random()*100);
          
          if(los>98){
           sandtype = Math.round(Math.random()+4);
           Crafty.e("2D, Canvas, Color, sand"+sandtype)
            .attr({x: i * 20, y: j * 20})
            .color("none");
          }
          if(los>90 && los<=98){
          sandtype = Math.round((Math.random()*2)+1);
           Crafty.e("2D, Canvas, Color, sand"+sandtype)
            .attr({x: i * 20, y: j * 20})
            .color("none");
          }
          if(los<=90){
            Crafty.e("2D, Canvas, Color, sanddefault")
              .attr({x: i * 20, y: j * 20})
              .color("none");
        }
      }
      }
    }
  
    function generateWestWall(){
      for(var i=0;i<25;i++){
        vinetype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, vinev"+vinetype)
          .attr({x:0 , y:i*20})
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.x+=12;
          healthloss(5);
          });
      }
    }

    function generateEastWall(){
      for(var i=0;i<25;i++){
        if(i>9 && i<15){
          continue;
        }
        vinetype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, vinev"+vinetype)
          .attr({x:780 , y:i*20})
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.x-=12;
          healthloss(5);
          });
      }
    }
    function generateNorthWall(){
      for(var i=1;i<39;i++){
        vinetype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, vineh"+vinetype)
          .attr({x:20*i , y:0})
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.y+=12;
          healthloss(5);
          });
      }
      vinetype = Math.round(Math.random()+1);
      Crafty.e("2D, Canvas, Solid, Collision, vinec"+vinetype)
        .attr({x:780, y:0});

      vinetype = Math.round(Math.random()+1);
      Crafty.e("2D, Canvas, Solid, Collision, vinec"+vinetype)
        .attr({x:0, y:0});

    }

    function generateSouthWall(){
      for(var i=1;i<39;i++){
        vinetype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, vineh"+vinetype)
          .attr({x:i*20 , y:480})
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.y-=12; 
          healthloss(5);
          });
      }
      vinetype = Math.round(Math.random()+1);
      Crafty.e("2D, Canvas, Solid, Collision, vinec"+vinetype)
        .attr({x:780, y:480})

;
      Crafty.e("2D, Canvas, Solid, Collision, vinec"+vinetype)
        .attr({x:0, y:480});
    }

    function generateObstacleWall1(){
      for(var i=0;i<20;i++){
        cracktype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, sandcrack"+cracktype)
          .attr({x:650 , y:i*20})
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.x-=22;
          healthloss(5);
          });
      }
    }

    function generateObstacleWall2(){
      for(var i=5;i<25;i++){
        cracktype = Math.round(Math.random()+1);
        Crafty.e("2D, Canvas, Solid, Collision, sandcrack"+cracktype)
          .attr({x:500 , y:i*20})
          .checkHits("swordjakubpuchatek")
          .bind("HitOn", function(){
          swordjakubpuchatek.x-=22;
          healthloss(5);
          });
      }
    }

    function generateNextLevelTransition(){

      Crafty.e("2D, Canvas, Solid, Collision")
      .attr({x:780, y:200, w:10, h:100})
      .collision()
      .checkHits("swordjakubpuchatek")
      .bind("HitOn", function(){
        cleardialog();
        clearobjectives();
        Crafty.enterScene("snakesescaped");
        let swjphp = -1*(100-swordjakubpuchatekhp);
      healthloss(swjphp);
      });
     }


    generateWorld();
    generateEastWall();
    generateWestWall();
    generateSouthWall();
    generateNorthWall();
    generateObstacleWall1();
    generateObstacleWall2();
    generateNextLevelTransition();

    newtask("Obroń się przed żmijami!!!!!");

   

    Crafty.bind("EnterFrame", function(){
      healthregen();
    });

    Crafty.bind("KeyDown", function(e){
      if(e.key == Crafty.keys.UP_ARROW){
        lastfacingdirection=0;
      }
    });
    Crafty.bind("KeyDown", function(e){
      if(e.key == Crafty.keys.RIGHT_ARROW){
        lastfacingdirection=1;
      }
    });
    Crafty.bind("KeyDown", function(e){
      if(e.key == Crafty.keys.DOWN_ARROW){
        lastfacingdirection=2;
      }
    });
    Crafty.bind("KeyDown", function(e){
      if(e.key == Crafty.keys.LEFT_ARROW){
        lastfacingdirection=3;
      }
    });

    
    var swordjakubpuchatek = Crafty.e("2D, Canvas, Fourway, Collision, Solid, swordjakubpuchatek")
    .attr({x:70, y:200})
    .fourway(200)
    .collision()
    .checkHits("Solid")
    .bind("EnterFrame",function(){
      miodekcooldown++;
      gcounter++;
      jcounter++;
        if(venomduration>0 && gcounter>40 && venomresist==false){
          venomduration--;
          healthloss(10);
          gcounter=0;
          los = Math.round(Math.random()*3);
          Crafty.bind("EnterFrame",function(){
            mcounter++;
            if(los==0){
              swordjakubpuchatek.x+=addspeed;
            }
            if(los==1){
              swordjakubpuchatek.x-=addspeed;
            }
            if(los==2){
              swordjakubpuchatek.y+=addspeed;
            }
            if(los==3){
              swordjakubpuchatek.y-=addspeed;
            }
            if(mcounter>40){
              addspeed=0;
              mcounter=0;
              addspeed+=0.3;
            }
          });
      }
    })
    .onHit("enemy",function(){
      if(jcounter>40){
        venomduration +=5;
        jcounter=0;
      }
    });


    


    cobra1 = Crafty.e("2D, Collision, Canvas, Solid, SpriteAnimation, cobra, enemy")
    .attr({x:710, y: 60})
    .collision()
    .checkHits("Solid")
    .reel("cobramove", 2000, 0, 12, 2)
    .animate("cobramove", -1)
    .onHit("miodek", function(){
      cobra1tookdamage(10);
    })
    .onHit("swordjakubpuchatek", function(){
      cobra1tookdamage(damagemultiplier*20);
      if(cobra1.x<swordjakubpuchatek.x){
        swordjakubpuchatek.x+=12;
      }
      if(cobra1.x>swordjakubpuchatek.x){
        swordjakubpuchatek.x-=12;
      }
      if(cobra1.y<swordjakubpuchatek.y){
        swordjakubpuchatek.y+=12;
      }
      if(cobra1.y>swordjakubpuchatek.y){
        swordjakubpuchatek.y-=12;
      }
    })
    .bind("EnterFrame", function(){
      if(swordjakubpuchatek.x-cobra1.x<0){
        cobra1.x-=cobra1speed;
      }
      else{
        cobra1.x+=cobra1speed;
      }
      if(swordjakubpuchatek.y-cobra1.y<0){
        cobra1.y-=cobra1speed;
      }
      else{
        cobra1.y+=cobra1speed;
      }
    });
    

    cobra2 = Crafty.e("2D, Collision, Canvas, Solid, SpriteAnimation, cobra, enemy")
    .attr({x:710, y: 250})
    .collision()
    .checkHits("Solid")
    .reel("cobramove", 1200, 0, 12, 2)
    .animate("cobramove", -1)
    .onHit("miodek", function(){
      cobra2tookdamage(10);
    })
    .onHit("swordjakubpuchatek", function(){
      cobra2tookdamage(damagemultiplier*20);
      if(cobra2.x<swordjakubpuchatek.x){
        swordjakubpuchatek.x+=12;
      }
      if(cobra2.x>swordjakubpuchatek.x){
        swordjakubpuchatek.x-=12;
      }
      if(cobra2.y<swordjakubpuchatek.y){
        swordjakubpuchatek.y+=12;
      }
      if(cobra2.y>swordjakubpuchatek.y){
        swordjakubpuchatek.y-=12;
      } 
    })
    .bind("EnterFrame", function(){
      if(swordjakubpuchatek.x-cobra2.x<0){
        cobra2.x-=cobra2speed;
      }
      else{
        cobra2.x+=cobra2speed;
      }
      if(swordjakubpuchatek.y-cobra2.y<0){
        cobra2.y-=cobra2speed;
      }
      else{
        cobra2.y+=cobra2speed;
      }
    });
    

    cobra3 = Crafty.e("2D, Collision, Canvas, Solid, SpriteAnimation, cobra, enemy")
    .attr({x:710, y: 440})
    .collision()
    .checkHits("Solid")
    .reel("cobramove", 400, 0, 12, 2)
    .animate("cobramove", -1)
    .onHit("miodek", function(){
      cobra3tookdamage(10);
    })
    .onHit("swordjakubpuchatek", function(){
      cobra3tookdamage(damagemultiplier*20);
      if(cobra3.x<swordjakubpuchatek.x){
        swordjakubpuchatek.x+=12;
      }
      if(cobra3.x>swordjakubpuchatek.x){
        swordjakubpuchatek.x-=12;
      }
      if(cobra3.y<swordjakubpuchatek.y){
        swordjakubpuchatek.y+=12;
      }
      if(cobra3.y>swordjakubpuchatek.y){
        swordjakubpuchatek.y-=12;
      } 
    })
    .bind("EnterFrame", function(){
      if(swordjakubpuchatek.x-cobra3.x<0){
        cobra3.x-=cobra3speed;
      }
      else{
        cobra3.x+=cobra3speed;
      }
      if(swordjakubpuchatek.y-cobra3.y<0){
        cobra3.y-=cobra3speed;
      }
      else{
        cobra3.y+=cobra3speed;
      }
    });




    
  });

  Crafty.scene("snakesescaped",function(){

      Crafty.background("#411561");
      Crafty.e("Text, 2D, DOM")
      .text("Po ciężkiej przeprawie przez haszcze jesteś zdumiony, że jeszcze żyjesz. Wiesz, że nie zostało ci wiele kilometrów do celu.")
      .attr({x:30, y:230, w: 700, h:50})
      .css({"text-align": "center", "color": "white", "font-size": "30px", "font-family": "'Courier New', Courier, monospace;"})
      .bind("EnterFrame",function(){
        ncounter++;
        if(ncounter==300){
          Crafty.enterScene("prefifth");
        }
      })
      .bind("KeyDown", function(e){
        if(e.key == Crafty.keys.SPACE){
          ncounter = 299;
        }
      });
    });

    Crafty.scene("prefifth",function(){

      Crafty.background("red");
      Crafty.e("Text, 2D, DOM")
      .text("W końcu dotarłeś do celu, Siedziby KGB. Na parkingu przed wejściem jednak spotykasz przebiegłego skurczybyka ninje ruska z nieziemskimi supermocami")
      .attr({x:30, y:230, w: 700, h:50})
      .css({"text-align": "center", "color": "white", "font-size": "30px", "font-family": "'Courier New', Courier, monospace;"})
      .bind("EnterFrame",function(){
        ncounter++;
        if(ncounter==300){
          Crafty.enterScene("fifth");
        }
      })
      .bind("KeyDown", function(e){
        if(e.key == Crafty.keys.SPACE){
          ncounter = 299;
        }
      });
    });

    Crafty.scene("fifth", function(){

      function generateWorld() {
        for (var i = 0; i < 40; i++) {
          for (var j = 0; j < 25; j++) {
            var los=Math.round(Math.random()*100);
            
            if(los>98){
             concretetype = Math.ceil(Math.random()*4);
             Crafty.e("2D, Canvas, Color, concrete"+concretetype)
              .attr({x: i * 20, y: j * 20})
              .color("none");
            }
            if(los<=98){
              Crafty.e("2D, Canvas, Color, concretedef")
                .attr({x: i * 20, y: j * 20})
                .color("none");
          }
        }
        }
      }
    
      function generateWestWall(){
        for(var i=0;i<25;i++){
          Crafty.e("2D, Canvas, Solid, Collision, void")
            .collision()
            .attr({x:0 , y:i*20})
            .checkHits("swordjakubpuchatek")
            .onHit("ninja",function(){
              ninja.x+=12; 
            })
            .onHit("swordjakubpuchatek",function(){
              swordjakubpuchatek.x+=12; 
            });
        }
      }
  
      function generateEastWall(){
        for(var i=0;i<25;i++){
          Crafty.e("2D, Canvas, Solid, Collision, void")
            .collision()
            .attr({x:780 , y:i*20})
            .checkHits("swordjakubpuchatek")
            .onHit("ninja",function(){
              ninja.x-=12; 
            })
            .onHit("swordjakubpuchatek",function(){
              swordjakubpuchatek.x-=12; 
            });
        }
      }
      function generateNorthWall(){
        for(var i=0;i<41;i++){
          curbtype = Math.round(Math.random()+1);
          Crafty.e("2D, Canvas, Solid, Collision, curb"+ curbtype)
            .collision()
            .attr({x:20*i , y:0})
            .checkHits("swordjakubpuchatek")
            .onHit("ninja",function(){
              ninja.y+=12; 
            })
            .onHit("swordjakubpuchatek",function(){
              swordjakubpuchatek.y+=12; 
            });
        }
      }
  
      function generateSouthWall(){
        for(var i=1;i<39;i++){
          Crafty.e("2D, Canvas, Solid, Collision, void")
            .collision()
            .attr({x:i*20 , y:480})
            .checkHits("swordjakubpuchatek")
            .onHit("ninja",function(){
              ninja.y-=12; 
            })
            .onHit("swordjakubpuchatek",function(){
              swordjakubpuchatek.y-=12; 
            });
        }
      }

      function generateStripes(){

        for(var j=1;j<25;j++){
          if(j>7 && j<18){
            continue;
          }
          for(var i=2;i<40;i+=5){
            Crafty.e("2D, Canvas, Color, stripe")
              .attr({x:i*20 , y:j*20})
              .color("none");
          }
        }
      }

      generateWorld();
      generateEastWall();
      generateNorthWall();
      generateWestWall();
      generateSouthWall();
      generateStripes();

      newdialogbubble(miodektut, 0);

      newtask("Pokonaj ruskiego agenta", "killninja");

      var swordjakubpuchatek = Crafty.e("2D, Canvas, Fourway, Collision, Solid, swordjakubpuchatek")
    .attr({x:70, y:70})
    .fourway(200)
    .collision()
    .checkHits("Solid")
    .bind("EnterFrame",function(){
      miodekcooldown++;
    })
    .bind("KeyDown", function(e){
      if(e.key == Crafty.keys.P && miodekcooldown > 50){
        miodekcooldown = 0;
        var miodek = Crafty.e("2D, Canvas, SpriteAnimation, Collision, Solid, miodek")
        .attr({x:swordjakubpuchatek.x, y:swordjakubpuchatek.y})
        .reel("miodekspin", 500, 0, 11, 4)
        .animate("miodekspin", -1)
        .collision()
        .checkHits("Solid")
        .bind("EnterFrame",function(){
          pcounter++;
          if(lastfacingdirection == 0){
            miodek.y-=6;
          }
          if(lastfacingdirection == 1){
            miodek.x+=6;
          }
          if(lastfacingdirection == 2){
            miodek.y+=6;
          }
          if(lastfacingdirection == 3){
            miodek.x-=6;
          }
        })
        .onHit("Solid", function(){
          if(pcounter>20){
            this.destroy();
            pcounter=0;

          }
        });
      }
    })
    .onHit("miodek", function(){
      if(pcounter>20){
        healthloss(15);}
    });

        ninja = Crafty.e("2D, Canvas, Collision, Solid, ninja")
          .attr({x:700, y:400})
          .collision()
          .onHit("miodek", function(){
            ninjahp -=10;
            isninjadeadyet();
          })
          .bind("EnterFrame", function(){
            healthregen();
              if(swordjakubpuchatek.x > ninja.x-100 && swordjakubpuchatek.x < ninja.x+100 && swordjakubpuchatek.y > ninja.y-100 && swordjakubpuchatek.y < ninja.y+100){
                ninja.x =Math.floor((Math.random()*650)+50);
                ninja.y = Math.floor((Math.random()*400)+50);
              }
              ocounter++;
              
              if(ocounter>100){
                ocounter=0;
                ninjatargetx = Math.floor((Math.random()*650)+50);
                ninjatargety = Math.floor((Math.random()*400)+50);
              }
              if(ninjatargetx-ninja.x<0){
                ninja.x-=ninjaspeed;
              }
              else{
                ninja.x+=ninjaspeed;
              }
              if(ninjatargety-ninja.y<0){
                ninja.y-=ninjaspeed;
              }
              else{
                ninja.y+=ninjaspeed;
              }

              rcounter++;
              if(rcounter>200){
                rcounter=0;
                shurikenxdirection = (ninja.x-swordjakubpuchatek.x)/30;
                shurikenydirection = (ninja.y-swordjakubpuchatek.y)/30;

                var shuriken = Crafty.e("2D, Canvas, Solid, Collision, SpriteAnimation, shuriken")
                .attr({x:ninja.x, y:ninja.y})
                .collision()
                .reel("shurikenspin", 400, 0, 16, 4)
                .animate("shurikenspin", -1)
                .onHit("swordjakubpuchatek", function(){
                  healthloss(30);
                  shuriken.destroy();
                });
                Crafty.bind("EnterFrame",function(){
                  shuriken.x-=shurikenxdirection;
                  shuriken.y-=shurikenydirection;

                  if(rcounter>150){
                    shuriken.destroy();
                  }

                });
              }

              scounter++;

              if(scounter>300){
                scounter=0;
                spawnmedpack();
              }


      });

    });

    Crafty.scene("ninjadown", function(){
      Crafty.background("blue");
      Crafty.e("Text, 2D, DOM")
      .text("Po pokonaniu ruska wchodzisz do budynku KGB. Tam spotykasz Putina we własnej osobie")
      .attr({x:30, y:230, w: 700, h:50})
      .css({"text-align": "center", "color": "white", "font-size": "30px", "font-family": "'Courier New', Courier, monospace;"})
      .bind("EnterFrame",function(){
        tcounter++;
        if(tcounter==300){
          Crafty.enterScene("sixth");
        }
      })
      .bind("KeyDown", function(e){
        if(e.key == Crafty.keys.SPACE){
          tcounter = 299;
        }
      });
    });

    Crafty.scene("sixth", function(){

      function generateWorld() {
        for (var i = 0; i < 20; i++) {
          for (var j = 0; j < 13; j++) {
              Crafty.e("2D, Canvas, Color, kgbfloor")
                .attr({x: i * 40, y: j * 40})
                .color("none");
           }
        }
      }
    
      function generateWestWall(){
        for(var i=0;i<25;i++){
          Crafty.e("2D, Canvas, Solid, Collision, void")
            .collision()
            .attr({x:0 , y:i*20})
            .checkHits("swordjakubpuchatek")
            .onHit("putin",function(){
              putin.x+=12; 
            })
            .onHit("swordjakubpuchatek",function(){
              swordjakubpuchatek.x+=12; 
            });
        }
      }
  
      function generateEastWall(){
        for(var i=0;i<25;i++){
          Crafty.e("2D, Canvas, Solid, Collision, void")
            .collision()
            .attr({x:780 , y:i*20})
            .checkHits("swordjakubpuchatek")
            .onHit("putin",function(){
              putin.x-=12; 
            })
            .onHit("swordjakubpuchatek",function(){
              swordjakubpuchatek.x-=12; 
            });
        }
      }
      function generateNorthWall(){
        for(var i=0;i<41;i++){
          Crafty.e("2D, Canvas, Solid, Collision, void")
            .collision()
            .attr({x:20*i , y:0})
            .checkHits("swordjakubpuchatek")
            .onHit("putin",function(){
              putin.y+=12; 
            })
            .onHit("swordjakubpuchatek",function(){
              swordjakubpuchatek.y+=12; 
            });
        }
      }
  
      function generateSouthWall(){
        for(var i=1;i<39;i++){
          Crafty.e("2D, Canvas, Solid, Collision, void")
            .collision()
            .attr({x:i*20 , y:480})
            .checkHits("swordjakubpuchatek")
            .onHit("putin",function(){
              putin.y-=12; 
            })
            .onHit("swordjakubpuchatek",function(){
              swordjakubpuchatek.y-=12; 
            });
        }
      }

      generateWorld();
      generateWestWall();
      generateSouthWall();
      generateNorthWall();
      generateEastWall();

      newtask("Pokonaj Putina", "killputin");

      Crafty.e("2D, Canvas, carpet")
      .attr({x:250, y:150});


      var swordjakubpuchatek = Crafty.e("2D, Canvas, Fourway, Collision, Solid, swordjakubpuchatek")
      .attr({x:70, y:70})
      .fourway(200)
      .collision()
      .checkHits("Solid")
      .bind("EnterFrame",function(){
        miodekcooldown++;
      })
      .bind("KeyDown", function(e){
        if(e.key == Crafty.keys.P && miodekcooldown > 50){
          miodekcooldown = 0;
          miodek = Crafty.e("2D, Canvas, SpriteAnimation, Collision, Solid, miodek")
          .attr({x:swordjakubpuchatek.x, y:swordjakubpuchatek.y})
          .reel("miodekspin", 500, 0, 11, 4)
          .animate("miodekspin", -1)
          .collision()
          .checkHits("Solid")
          .bind("EnterFrame",function(){
            zcounter++;
            if(lastfacingdirection == 0){
              miodek.y-=6;
            }
            if(lastfacingdirection == 1){
              miodek.x+=6;
            }
            if(lastfacingdirection == 2){
              miodek.y+=6;
            }
            if(lastfacingdirection == 3){
              miodek.x-=6;
            }
          })
          .onHit("Solid", function(){
            if(zcounter>20){
              this.destroy();
              zcounter=0;
  
            }
          });
        }
      })
      .onHit("miodek", function(){
        if(zcounter>40){
          healthloss(15);}
      });



      putin = Crafty.e("2D, Canvas, Solid, Collision, SpriteAnimation, putindefault")
      .attr({x:700, y:300})
      .reel("putin", 100000000, 0, 0, 4)
      .animate("putin", -1)
      .collision()
      .onHit("miodek", function(){
        putinhp -=15;
        isputindeadyet();
        miodek.destroy();
      })
      .onHit("swordjakubpuchatek", function(){
        healthloss(30);
        if(putin.x<swordjakubpuchatek.x){
          swordjakubpuchatek.x+=20;
        }
        if(putin.x>swordjakubpuchatek.x){
          swordjakubpuchatek.x-=20;
        }
        if(putin.y<swordjakubpuchatek.y){
          swordjakubpuchatek.y+=20;
        }
        if(putin.y>swordjakubpuchatek.y){
          swordjakubpuchatek.y-=20;
        }
        putinhp-=(damagemultiplier* 20);
        isputindeadyet();
      })
      .bind("EnterFrame", function(){

        healthregen();
        ucounter++;
        
        if(ucounter>100){
          ucounter=0;
          putintargetx = Math.floor((Math.random()*250)+400);
          putintargety = Math.floor((Math.random()*200)+150);
        }
        if(putintargetx-putin.x<0){
          putin.x-=putinspeed;
        }
        else{
          putin.x+=putinspeed;
        }
        if(putintargety-putin.y<0){
          putin.y-=putinspeed;
        }
        else{
          putin.y+=putinspeed;
        }

        wcounter++;

        if(wcounter==260){
          putin.reelPosition(2);
        }
        if(wcounter>300){
          putin.reelPosition(0);
          wcounter=0;
          projectile1xdirection = (putin.x-swordjakubpuchatek.x)/40;
          projectile1ydirection = (putin.y-swordjakubpuchatek.y)/40;
          projectile2xdirection = (putin.x-swordjakubpuchatek.x - 100)/40;
          projectile2ydirection = (putin.y-swordjakubpuchatek.y - 100)/40;
          projectile3xdirection = (putin.x-swordjakubpuchatek.x + 100)/40;
          projectile3ydirection = (putin.y-swordjakubpuchatek.y + 100)/40;

          var projectile1 = Crafty.e("2D, Canvas, Solid, Collision, SpriteAnimation, sickle")
          .attr({x:putin.x, y:putin.y})
          .collision()
          .reel("sicklespin", 400, 0, 4, 4)
          .animate("sicklespin", -1)
          .onHit("swordjakubpuchatek", function(){
            healthloss(20);
            projectile1.destroy();
          });
          var projectile2 = Crafty.e("2D, Canvas, Solid, Collision, SpriteAnimation, sickle")
          .attr({x:putin.x, y:putin.y})
          .collision()
          .reel("sicklespin", 400, 0, 4, 4)
          .animate("sicklespin", -1)
          .onHit("swordjakubpuchatek", function(){
            healthloss(20);
            projectile2.destroy();
          });
          var projectile3 = Crafty.e("2D, Canvas, Solid, Collision, SpriteAnimation, sickle")
          .attr({x:putin.x, y:putin.y})
          .collision()
          .reel("sicklespin", 400, 0, 4, 4)
          .animate("sicklespin", -1)
          .onHit("swordjakubpuchatek", function(){
            healthloss(20);
            projectile3.destroy();
          });
          Crafty.bind("EnterFrame",function(){
            projectile1.x-=projectile1xdirection;
            projectile1.y-=projectile1ydirection;
            projectile2.x-=projectile2xdirection;
            projectile2.y-=projectile2ydirection;
            projectile3.x-=projectile3xdirection;
            projectile3.y-=projectile3ydirection;

            if(wcounter>150){
              projectile1.destroy();
              projectile2.destroy();
              projectile3.destroy();
            }

          });
        }
        
        if(putinhp<100 && putinhp>20){
          putin.reelPosition(1);
        }

        if(putinhp<=20){
          putin.reelPosition(3);
        }
        xcounter++;

          if(xcounter>300){
            xcounter=0;
            spawnmedpack();
          }
        
        
      });




    });

    Crafty.scene("end1", function(){
      Crafty.background("gray");
      Crafty.e("Text, 2D, DOM")
      .text("Po tym jak pokonałeś swojego najgorszego wroga, czujesz, że wypełniłeś swój życiowy cel. Odchodzisz w kierunku Stumilowego Lasu, po drodze wybuchając cały budynek KGB.          (koniec)")
      .attr({x:30, y:230, w: 700, h:50})
      .css({"text-align": "center", "color": "white", "font-size": "30px", "font-family": "'Courier New', Courier, monospace;"});
    });


  Crafty.scene("dead", function(){
    Crafty.background("black");
    Crafty.e("Text, 2D, DOM")
    .text("Zginoles. Odswiez strone by zagrac ponownie")
    .attr({x:30, y:230, w: 700, h:50})
    .css({"text-align": "center", "color": "white", "font-size": "30px", "font-family": "'Courier New', Courier, monospace;"});
  });




Crafty.enterScene("introduction");
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import { withRouter }         from 'react-router-dom'

import * as Actions         from '../../redux/actions'

import { bedroomSVG } from './BedroomString';
import $ from 'jquery';
import { TimelineMax } from 'gsap';
import MorphSVGPlugin from '../utilities/MorphSvgPlugin';
import { withStyles } from 'material-ui/styles';
import { Paper } from 'material-ui'

var mapStateToProps = (state) => ({
})

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
});

var colorDefault = '#FFF';
var colorDuration = 1;

//var tlVertex = new TimelineMax();

var tlShake = new TimelineMax({repeat:-1});
var tlVertexRemote = new TimelineMax();
var tlVertexDiary = new TimelineMax();
var tlVertexPig = new TimelineMax();

class BedroomSVG extends React.Component {

  constructor(props) {
		super(props);

    var bedroomDiv = document.createElement('div');
		bedroomDiv.innerHTML = bedroomSVG;
    this.svg = $(bedroomDiv).find('svg')[0];
    this.svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    this.svg.setAttribute('viewBox', '0 0 1500 800')

    this.addButtonListeners = this.addButtonListeners.bind(this);

    this.hoverRemote = this.hoverRemote.bind(this);
    this.hoverPig = this.hoverPig.bind(this);
    this.hoverDiary = this.hoverDiary.bind(this);
    this.hoverSleep = this.hoverSleep.bind(this);
    this.hoverDresser = this.hoverDresser.bind(this);
    this.hoverCactus = this.hoverCactus.bind(this);
    this.hoverFlowers = this.hoverFlowers.bind(this);

    this.leaveRemote = this.leaveRemote.bind(this);
    this.leavePig = this.leavePig.bind(this);
    this.leaveDiary = this.leaveDiary.bind(this);
    this.leaveSleep = this.leaveSleep.bind(this);
    this.leaveDresser = this.leaveDresser.bind(this);
    this.leaveCactus = this.leaveCactus.bind(this);
    this.leaveFlowers = this.leaveFlowers.bind(this);

    this.clickRemote = this.clickRemote.bind(this);
    this.clickPig = this.clickPig.bind(this);
    this.clickDiary = this.clickDiary.bind(this);
    this.clickSleep = this.clickSleep.bind(this);
    this.clickCactus = this.clickCactus.bind(this);
    this.clickFlowers = this.clickFlowers.bind(this);
    this.clickDresser = this.clickDresser.bind(this);
	};

  componentDidMount() {
    this.addButtonListeners();
  };

    addButtonListeners() {
      buttonRemote.addEventListener('mouseover', this.hoverRemote);
      buttonPig.addEventListener('mouseover', this.hoverPig);
      buttonDiary.addEventListener('mouseover', this.hoverDiary);
      buttonSleep.addEventListener('mouseover', this.hoverSleep);
      buttonDresser.addEventListener('mouseover', this.hoverDresser);
      buttonCactus.addEventListener('mouseover', this.hoverCactus);
      buttonFlower.addEventListener('mouseover', this.hoverFlowers);

      buttonRemote.addEventListener('mouseleave', this.leaveRemote);
      buttonPig.addEventListener('mouseleave', this.leavePig);
      buttonDiary.addEventListener('mouseleave', this.leaveDiary);
      buttonSleep.addEventListener('mouseleave', this.leaveSleep);
      buttonDresser.addEventListener('mouseleave', this.leaveDresser);
      buttonCactus.addEventListener('mouseleave', this.leaveCactus);
      buttonFlower.addEventListener('mouseleave', this.leaveFlowers);

      buttonRemote.addEventListener('click', this.clickRemote);
      buttonPig.addEventListener('click', this.clickPig);
      buttonDiary.addEventListener('click', this.clickDiary);
      buttonSleep.addEventListener('click', this.clickSleep);
      buttonDresser.addEventListener('click', this.clickDresser);
      buttonCactus.addEventListener('click', this.clickCactus);
      buttonFlower.addEventListener('click', this.clickFlowers);

      buttonRemote.setAttribute('cursor', 'pointer');
      buttonPig.setAttribute('cursor', 'pointer');
      buttonDiary.setAttribute('cursor', 'pointer');
      buttonSleep.setAttribute('cursor', 'pointer');
      buttonDresser.setAttribute('cursor', 'pointer');
      buttonCactus.setAttribute('cursor', 'pointer');
      buttonFlower.setAttribute('cursor', 'pointer');
  };

    removeButtonListeners() {
      buttonRemote.removeEventListener('mouseover', this.hoverRemote);
      buttonPig.removeEventListener('mouseover', this.hoverPig);
      buttonDiary.removeEventListener('mouseover', this.hoverDiary);
      buttonSleep.removeEventListener('mouseover', this.hoverSleep);
      buttonDresser.removeEventListener('mouseover', this.hoverDresser);
      buttonCactus.removeEventListener('mouseover', this.hoverCactus);
      buttonFlower.removeEventListener('mouseover', this.hoverFlowers);

      buttonRemote.removeEventListener('mouseleave', this.leaveRemote);
      buttonPig.removeEventListener('mouseleave', this.leavePig);
      buttonDiary.removeEventListener('mouseleave', this.leaveDiary);
      buttonSleep.removeEventListener('mouseleave', this.leaveSleep);
      buttonDresser.removeEventListener('mouseleave', this.leaveDresser);
      buttonCactus.removeEventListener('mouseleave', this.leaveCactus);
      buttonFlower.removeEventListener('mouseleave', this.leaveFlowers);

      buttonRemote.removeEventListener('click', this.clickRemote);
      buttonPig.removeEventListener('click', this.clickPig);
      buttonDiary.removeEventListener('click', this.clickDiary);
      buttonSleep.removeEventListener('click', this.clickSleep);
      buttonDresser.removeEventListener('click', this.clickDresser);
      buttonCactus.removeEventListener('click', this.clickCactus);
      buttonFlower.removeEventListener('click', this.clickFlowers);

      buttonRemote.removeAttribute('cursor', 'pointer');
      buttonPig.removeAttribute('cursor', 'pointer');
      buttonDiary.removeAttribute('cursor', 'pointer');
      buttonSleep.removeAttribute('cursor', 'pointer');
      buttonDresser.removeAttribute('cursor', 'pointer');
      buttonCactus.removeAttribute('cursor', 'pointer');
      buttonFlower.removeAttribute('cursor', 'pointer');
    };

  hoverShake(e) {
    tlShake.fromTo(e, 2, {x:-1}, {x:1, ease:RoughEase.ease.config({
      strength:8,
      points:20,
      template:Linear.easeNone,
      randomize:false
    }) , clearProps:"x"});
  };

  leaveShake() {
    tlShake.clear();
  };

  hoverRemote() {
    this.hoverShake(remote);
  };

  leaveRemote() {
    this.leaveShake();
  };

  clickRemote() {
    this.removeButtonListeners();
    tlShake.clear();
    this.props.setSVGText('car');

    let tlCar = new TimelineMax({onComplete: proxyFunction.bind(this)});
    function proxyFunction(): void {
      this.addButtonListeners();
    };

    const pathRemoteCar = MorphSVGPlugin.pathDataToBezier(vertexRemoteCar, {align: alignRemote});
    const wheels = [wheelLeft, wheelRight]
    const startTime = 3.5

    tlCar.to(cometRemote, 0.05, {display:'block'})
         .to(cometRemote, 0.6, {bezier: { type: "cubic", values: pathRemoteCar}, ease: Sine.easeInOut})
         .to(cometRemote, 0.01, {display:'none'})
         .to(cometRemote, 0.01, {x: 0, y: 0})

         .to(glowCar, 0.01, {display:'block'})
         .to(glowCar, 0.75, {scaleX: 3.2, scaleY: 3.2, opacity: 0, transformOrigin: "center"})
         .to(glowCar, 0.01, {display: 'none'})
         .to(glowCar, 0.01, {scaleX: 1, scaleY: 1, opacity: 1, transformOrigin: "center"})

         .to(carAnimation, 0.05, {display: 'block'}, "=+0.5")
         .fromTo([carSmoke1, carSmoke2, carSmoke3], 7.5, {y:-0.5}, {
            y:0.5,
            ease:RoughEase.ease.config({
              strength:20,
              points:20,
              template:Sine.easeNone,
              randomize:false
            }) , clearProps:"x"}, "+=0.5")

         .fromTo(carSmoke1, 0.5, {scaleX: 1, scaleY: 1}, {scaleX: 1.4, scaleY: 1.4, ease: Sine.easeInOut, yoyo: true, repeat: 15}, "-=7.5")
         .fromTo(carSmoke2, 0.5, {scaleX: 1, scaleY: 1}, {scaleX: 1.6, scaleY: 1.6, ease: Sine.easeInOut, yoyo: true, repeat: 15}, "-=7.5")
         .fromTo(carSmoke3, 0.5, {scaleX: 1, scaleY: 1}, {scaleX: 1.2, scaleY: 1.2, ease: Sine.easeInOut, yoyo: true, repeat: 15}, "-=7.5")
         .fromTo(carBodyGroup, 7.5, {y:-0.02}, {
            y:0.02,
            ease:RoughEase.ease.config({
              strength:100,
              points:100,
              template:Sine.easeNone,
              randomize:false
            }) , clearProps:"x"}, '-=8')

         .to(car, 1.2, {x: -70, ease: Sine.easeInOut}, 0.7 + startTime)
         .to(wheels, 1.2, {rotation: '-=360', ease: Sine.easeInOut, transformOrigin: '50% 50%'}, 0.7 + startTime)

         .to(car, 1, {x: 40, y: 160, ease: Sine.easeInOut}, 2 + startTime)
         .to(wheels, 1, {rotation: '+=360', ease: Sine.easeInOut, transformOrigin: '50% 50%'}, 2 + startTime)

         .to(car, 0.6, {x: 200, ease: Sine.easeInOut}, 3.1 + startTime)
         .to(wheels, 0.6, {rotation: '-=360', ease: Sine.easeInOut, transformOrigin: '50% 50%'}, 3.1 + startTime)

         .to(car, 0.6, {y: 80, ease: Sine.easeInOut}, 3.8 + startTime)
         .to(wheels, 0.6, {rotation: '-=360', ease: Sine.easeInOut, transformOrigin: '50% 50%'}, 3.8 + startTime)

         .to(car, 0.7, {x: -30, y: -10, ease: Sine.easeInOut}, 4.5 + startTime)
         .to(wheels, 0.7, {rotation: '+=360', ease: Sine.easeInOut, transformOrigin: '50% 50%'}, 4.5 + startTime)

         .to(car, 0.8, {y: 0, ease: Sine.easeInOut}, 5.3 + startTime)
         .to(wheels, 0.8, {rotation: '+=360', ease: Sine.easeInOut, transformOrigin: '50% 50%'}, 5.3 + startTime)

         .to(car, 0.8, {x: 0, ease: Sine.easeInOut}, 6.2 + startTime)
         .to(wheels, 0.8, {rotation: '+=360', ease: Sine.easeInOut, transformOrigin: '50% 50%'}, 6.2 + startTime)

         .to(carAnimation, 0.1, {display: 'none'})
  };

  hoverPig() {
    this.hoverShake(pig);
  };

  leavePig() {
    this.leaveShake();
  };

  clickPig() {
    this.removeButtonListeners();
    tlShake.clear();

    let tlPig = new TimelineMax();


    const cometPig = [cometPigLamp, cometPigPlanets, cometPigClock]
    const glowPig = [glowLamp, glowPlanets, glowClock]

    const pathPigMove = MorphSVGPlugin.pathDataToBezier(pathPig, {align: alignPathPig});
    const pathPigLamp = MorphSVGPlugin.pathDataToBezier(vertexPigLamp, {align: alignPigLamp});
    const pathPigPlanets = MorphSVGPlugin.pathDataToBezier(vertexPigPlanets, {align: alignPigPlanets});
    const pathPigClock = MorphSVGPlugin.pathDataToBezier(vertexPigClock, {align: alignPigClock});

    // comets appear, animate along the path, and then disappear
    tlPig.to(cometPig, 0.05, {display:'block'})
         .to(cometPigLamp, 0.5, {bezier: { type: "cubic", values: pathPigLamp}, ease: Sine.easeInOut})
         .to(cometPigPlanets, 0.5, {bezier: { type: "cubic", values: pathPigPlanets}, ease: Sine.easeInOut}, '-=0.5')
         .to(cometPigClock, 0.5, {bezier: { type: "cubic", values: pathPigClock}, ease: Sine.easeInOut}, '-=0.5')
         .to(cometPig, 0.01, {display:'none'})
         .to(cometPig, 0.01, {x: 0, y: 0})

    // pulsing glow after comet hits the object; triggers Theft animation
         .to(glowPig, 0.01, {display:'block'})
         .to(glowPig, 0.75, {scaleX: 4, scaleY: 4, opacity: 0, transformOrigin: "center"})
         .to(glowPig, 0.01, {display: 'none'})
         .to(glowPig, 0.01, {scaleX: 1, scaleY: 1, opacity: 1, transformOrigin: "center", onComplete: this.animateTheft.bind(this)})

    // pig animates toward the user and back

         .to(pig, 2.3, {
           bezier: { type: "cubic", values: pathPigMove, ease: Sine.easeInOut},
           scaleX: 1.8,
           scaleY: 1.8,
           yoyo: true,
           repeat: 1
         }, 1.2)
  };

  hoverDiary() {
    this.hoverShake(diary);
  };

  leaveDiary() {
    this.leaveShake();
  };

  clickDiary() {
    this.removeButtonListeners();
    tlShake.clear();

    let tlDiary = new TimelineMax();

    const cometDiary = [cometDiaryLamp, cometDiaryPlanets, cometDiaryClock]
    const glowDiary = [glowLamp, glowPlanets, glowClock]

    const pathDiaryLamp = MorphSVGPlugin.pathDataToBezier(vertexDiaryLamp, {align: alignDiaryLamp});
    const pathDiaryPlanets = MorphSVGPlugin.pathDataToBezier(vertexDiaryPlanets, {align: alignDiaryPlanets});
    const pathDiaryClock = MorphSVGPlugin.pathDataToBezier(vertexDiaryClock, {align: alignDiaryClock});

    // comets appear, animate along the path, and then disappear
    tlDiary.to(cometDiary, 0.05, {display:'block'})
           .to(cometDiaryLamp, 0.5, {bezier: { type: "cubic", values: pathDiaryLamp}, ease: Sine.easeInOut})
           .to(cometDiaryPlanets, 0.5, {bezier: { type: "cubic", values: pathDiaryPlanets}, ease: Sine.easeInOut}, '-=0.5')
           .to(cometDiaryClock, 0.5, {bezier: { type: "cubic", values: pathDiaryClock}, ease: Sine.easeInOut}, '-=0.5')
           .to(cometDiary, 0.01, {display:'none'})
           .to(cometDiary, 0.01, {x: 0, y: 0})

    // pulsing glow after comet hits the object, triggers Theft animation
           .to(glowDiary, 0.01, {display:'block'})
           .to(glowDiary, 0.75, {scaleX: 4, scaleY: 4, opacity: 0, transformOrigin: "center"})
           .to(glowDiary, 0.01, {display: 'none'})
           .to(glowDiary, 0.01, {scaleX: 1, scaleY: 1, opacity: 1, transformOrigin: "center", onComplete: this.animateTheft.bind(this)})

    // frame of open diary appears; close diary disappears; open diary animates toward user
           .to(diary, 0.01, {display: 'none'}, 1)
           .to(diaryOpen, 0.01, {display: 'block'}, 1)
           .to(diaryOpen, 2.2, {
                scaleX: 1.4,
                scaleY: 1.4,
                x:50,
                y: 50,
                yoyo: true,
                repeat: 1,
                ease: Sine.easeInOut
              }, 0.3)
          .to(diaryOpen, 0.01, {display: 'none'})
          .to(diary, 0.01, {display: 'block'})
  };

  animateTheft() {
    const tlTheft = new TimelineMax({onComplete: proxyFunction.bind(this)});
    const startTime = 0.3;

    function proxyFunction(): void {
      this.addButtonListeners();
    };

    //turn on the lights
    tlTheft.to(lampShade, 0.01, {fill: '#FFF3C0'}, 0.1)
           .to(lampTop, 0.01, {fill: '#FCEA6B'}, 0.1)
           .to(lampLight, 0.01, {fill: '#EAE1B2', display: 'block'}, 0.1)

    //flash lights
           .fromTo(lampTop, 0.2, {fill: '#BC0D0D'}, {fill: '#FCEA6B', repeat: 25}, startTime)
           .fromTo(lampShade, 0.2, {fill: '#E26F6F'}, {fill: '#FFF3C0', repeat: 25}, startTime)
           .fromTo(lampLight, 0.2, {fill: '#C98181'}, {fill: '#EAE1B2', repeat: 25}, startTime)

    //bounce clock up and down
           .fromTo(clock, 0.1, {y: 5, x: 3}, {
              y: -5,
              x: -3,
              yoyo: true,
              repeat: 44,
              ease: Sine.easeInOut
            }, startTime)

    //move clock bells
            .fromTo(clockBellLeft, 0.2, {
              rotation: -4,
              transformOrigin: "50%",
              y: 3
            },
            {
              rotation: 4,
              transformOrigin: "50%",
              y: -3,
              yoyo: true,
              repeat: 22,
              ease: Sine.easeInOut
            }, startTime)

            .fromTo(clockBellRight, 0.2, {
              rotation: 4,
              transformOrigin: "50%",
              y: -3
            },
            {
              rotation: -4,
              transformOrigin: "50%",
              y: 3,
              yoyo: true,
              repeat: 21,
              ease: Sine.easeInOut
            }, startTime)

    //planets wobble back and forth
            .to(solarSystem, 0.6, {
              rotation: 15,
              ease: Sine.easeInOut,
              transformOrigin: "50%"
            }, startTime)

            .fromTo(solarSystem, 0.5, {
              rotation: 10,
              transformOrigin: "50%",
              ease: Sine.easeInOut
            },
            {
              rotation: -10,
              yoyo: true,
              repeat: 10,
              ease: Sine.easeInOut
            }, startTime+0.6)

    //move things back into place
          .to(solarSystem, 0.25, {rotation: 0, transformOrigin: "50%"}, startTime+4.5)
          .to([clock, clockBellLeft, clockBellRight], 0.1, {x: 0, y: 0}, startTime+4.8)

    // make things disappear
    .to(lampLight, 0.1, {display: 'none'}, startTime+4.8)
    .to(lampTop, 0.1, {fill: '#848383'}, startTime+4.8)
    .to(lampShade, 0.1, {fill: '#ADADAD'}, startTime+4.8)
  }

  hoverSleep() {
    this.hoverShake(sleep);
  };

  leaveSleep() {
    this.leaveShake();
  };

  clickSleep() {
    this.removeButtonListeners();
    tlShake.clear();

    const tlSleep = new TimelineMax({onComplete: proxyFunction.bind(this)});
    function proxyFunction(): void {
      this.addButtonListeners();
    };

    const tlBlinds = new TimelineMax();
    // variables for comets
    const pathSleepBlinds = MorphSVGPlugin.pathDataToBezier(vertexSleepBlinds, {align: alignSleepBlinds});
    const pathSleepPlanets = MorphSVGPlugin.pathDataToBezier(vertexSleepPlanets, {align: alignSleepPlanets});
    const pathSleepClock = MorphSVGPlugin.pathDataToBezier(vertexSleepClock, {align: alignSleepClock});
    const pathSleepNitelite = MorphSVGPlugin.pathDataToBezier(vertexSleepNitelite, {align: alignSleepNitelite});

    const cometSleep = [cometSleepBlinds, cometSleepPlanets, cometSleepClock, cometSleepNitelite]
    const glowSleep = [glowBlinds, glowPlanets, glowClock, glowNitelite]

    const pathSun = MorphSVGPlugin.pathDataToBezier(pathSunset, {align: alignPathSunset});
    const pathMoon = MorphSVGPlugin.pathDataToBezier(pathMoonrise, {align: alignPathMoonrise});

    // comets appear, animate along the path, and then disappear
    tlSleep.to(cometSleep, 0.05, {display:'block'})
           .to(cometSleepBlinds, 0.5, {bezier: { type: "cubic", values: pathSleepBlinds}, ease: Sine.easeInOut})
           .to(cometSleepPlanets, 0.5, {bezier: { type: "cubic", values: pathSleepPlanets}, ease: Sine.easeInOut}, '-=0.5')
           .to(cometSleepClock, 0.5, {bezier: { type: "cubic", values: pathSleepClock}, ease: Sine.easeInOut}, '-=0.5')
           .to(cometSleepNitelite, 0.5, {bezier: { type: "cubic", values: pathSleepNitelite}, ease: Sine.easeInOut}, '-=0.5')
           .to(cometSleep, 0.01, {display:'none'})
           .to(cometSleep, 0.01, {x: 0, y: 0})

    // pulsing glow after comet hits the object
           .to(glowSleep, 0.01, {display:'block'})
           .to(glowSleep, 0.75, {scaleX: 4, scaleY: 4, opacity: 0, transformOrigin: "center"})
           .to(glowSleep, 0.01, {display: 'none'})
           .to(glowSleep, 0.01, {scaleX: 1, scaleY: 1, opacity: 1, transformOrigin: "center"})

    // animate sunset and moonrise
           // sunset animation along path with color change
           .to([outsideSun, outsideSunGlow], 3, {bezier: {type: "cubic", values: pathSun}, ease: Sine.easeInOut, scaleX: 1.4, scaleY: 1.4, transformOrigin: "center"}, "+=0.5")
           .to(outsideSun, 3, {fill: "#f26f41"}, "-=3")

           // first color change of clouds to reddish
           .to(cloudLeft, 3, {fill: "#ffd69f"}, "-=3")
           .to(cloudCenter, 3, {fill: "#f28757"}, "-=3")
           .to(cloudRight, 3, {fill: "#d6b39a"}, "-=3")

           .staggerTo("#outsideSunGlow_1_ stop", 1, {
             stopColor: "#f26f41",
             ease: Sine.easeInOut,
             cycle: {
               stopColor: ["#f26f41", "#fff"]
             }
           }, 0, "-=3")


           // first color change of sky to red
           .staggerTo("#outsideSky_1_ stop", 3, {
             stopColor: "#b1e6f2",
             ease: Sine.easeInOut,
             cycle: {
               stopColor: ["#b1e6f2", "#ff7654"]
             }
           }, 1, "-=4")
           .to([windowGlare1, windowGlare2, windowGlare3], 1, {opacity: 0}, "-=4")

           // second color change of cloud to purple
           .to(cloudLeft, 3, {fill: "#9e97b6"})
           .to(cloudCenter, 3, {fill: "#443d56"}, "-=4")
           .to(cloudRight, 3, {fill: "#4d495b"}, "-=4")

           // second color change of sky to purple
           .staggerTo("#outsideSky_1_ stop", 2, {
             stopColor: "#ff7654",
             ease: Sine.easeInOut,
             cycle: {
               stopColor: ["#ff7654", "#110f27"]
             }
           }, 1, "-=6")

           // third color change of sky to completely purple
           .staggerTo("#outsideSky_1_ stop", 2, {
             stopColor: "#110f27",
             ease: Sine.easeInOut,
             cycle: {
               stopColor: ["#110f27", "#110f27"]
             }
           }, 0, "-=4")

           // moonrise animation
           .to(outsideMoon, 2, {bezier: {type: "cubic", values: pathMoon}, ease: Sine.easeInOut}, "-=4")

           // blinds come down
           .to(blindsMiddle, 2, {scaleY: 18.2, ease: Sine.easeInOut}, "-=1")
           .to(blindsBottom, 2, {y: 289, ease: Sine.easeInOut}, "-=2")

           // lights go off
           .to(night, 0.01, {display: 'block'})
           .to([night, nightLightGlow, sunGlow], 1, {opacity: 0.9}, "+=0.4")

           // revert sun, sky, and clouds
           .to([outsideSun, outsideSunGlow, outsideMoon], 0.01, {x: 0, y: 0, scaleX: 1, scaleY: 1})
           .to(outsideSun, 0.01, {fill: "#ffe027"}, "-=0.01")
           .to(cloudLeft, 0.01, {fill: "#efefef"}, "-=0.01")
           .to(cloudCenter, 0.01, {fill: "#e8e8e6"}, "-=0.01")
           .to(cloudRight, 0.01, {fill: "#fff"}, "-=0.01")
           .to([windowGlare1, windowGlare2, windowGlare3], 0.01, {opacity: 0.5}, "-=0.01")
           .staggerTo("#outsideSky_1_ stop", 0.01, {
             stopColor: "#b1e6f2",
             cycle: {
               stopColor: ["#b1e6f2", "#b1e6f2"]
             }
           }, 0.01, "-=0.01")
           .staggerTo("#outsideSunGlow_1_ stop", 0.01, {
             stopColor: "#ffe027",
             cycle: {
               stopColor: ["#ffe027", "#fff"]
             }
           }, 0, "-=0.01")

           .to([night, nightLightGlow, sunGlow], 1, {opacity: 0}, "+=1")

           //bounce clock up and down
           .from(clock, 0.2, {y: 0, x:0}, {
             y: 5,
             x: 3,
             ease: Sine.easeInOut
           })

           .fromTo(clockBellLeft, 0.1, {y: 0, x: 0, rotation: 0}, {
             y: 3,
             rotation: -4,
             transformOrigin: "50%",
             ease: Sine.easeInOut
           }, "-=0.2")

           .fromTo(clockBellRight, 0.1, {y: 0, rotation: 0}, {
             y: -3,
             rotation: 4,
             transformOrigin: "50%",
             ease: Sine.easeInOut
           }, "-=0.2")

           .fromTo(clock, 0.1, {y: 5, x: 3}, {
              y: -5,
              x: -3,
              yoyo: true,
              repeat: 25,
              ease: Sine.easeInOut
            })

           //move clock bells
           .fromTo(clockBellLeft, 0.2, {
             rotation: -4,
             transformOrigin: "50%",
             y: 3
           },
           {
             rotation: 4,
             transformOrigin: "50%",
             y: -3,
             yoyo: true,
             repeat: 13,
             ease: Sine.easeInOut
           }, "-=2.5")

           .fromTo(clockBellRight, 0.2, {
             rotation: 4,
             transformOrigin: "50%",
             y: -3
           },
           {
             rotation: -4,
             transformOrigin: "50%",
             y: 3,
             yoyo: true,
             repeat: 12,
             ease: Sine.easeInOut
           }, "-=2.5")

           .to([clock, clockBellLeft, clockBellRight], 0.1, {x: 0, y: 0}, "+=0.01")

          // blinds go up
           .to(blindsMiddle, 2, {scaleY: 1, ease: Sine.easeInOut}, "-=4")
           .to(blindsBottom, 2, {y: 0, ease: Sine.easeInOut}, "-=4")
  };

  hoverDresser() {
    var dresser = [dresserFront, dresserBack];
    this.hoverShake(dresser);
  };

  leaveDresser() {
    this.leaveShake();
  };

  clickDresser() {
    this.removeButtonListeners();
    tlShake.clear();

    const tlDresser = new TimelineMax({onComplete: proxyFunction.bind(this)});
    const tlUmbrella = new TimelineMax({paused: true})
    const tlPants = new TimelineMax({paused: true})

    function proxyFunction(): void {
      this.addButtonListeners();
    };

    function chooseWeather() {

      const weather = Math.floor(Math.random() * 4);

      this.addUmbrella = () => {
        tlUmbrella.add(TweenMax.to(umbrellaLeft, 0.7, {rotation: -18, transformOrigin: "top", ease: Sine.easeInOut}), 0.5);
        tlUmbrella.add(TweenMax.to(umbrellaRight, 0.7, {rotation: 18, transformOrigin: "top", ease: Sine.easeInOut}), 0.5);
      }

      this.addPants = () => {
        tlPants.add(TweenMax.to([pantsLeft, pantsRight], 0.7, {scaleY: 13, transformOrigin: "top", ease: Sine.easeInOut}));
      }

      console.log(weather)

      if (weather==0) {
        // hot weather
        tlUmbrella.play();
        tlPants.play();
        tlDresser.to(clothesShirt, 0.1, {display: 'block'}, '+=1.5')
                 .to(clothesShirt, 1, {y: -200, scaleX: 1.4, scaleY: 1.4, transformOrigin: "bottom", ease: Sine.easeInOut})
                 .to(clothesShirt, 0.6, {opacity: 0, ease: Sine.easeInOut}, "+=0.2")
                 .to(clothesShorts, 0.1, {display: 'block'})
                 .to(clothesShorts, 1, {y: -200, scaleX: 1.4, scaleY: 1.4, transformOrigin: "bottom", ease: Sine.easeInOut})
                 .to(clothesShorts, 0.6, {opacity: 0, ease: Sine.easeInOut})
                 .to([clothesShirt, clothesShorts], 0.1, {display: "none"})
                 .to([clothesShirt, clothesShorts], 0.1, {y: 0, opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "bottom"})
                 .to([dresserOpenBack, dresserOpenFront], 0.1, {display: "none", onComplete: endAnimation}, "+=0.3")

      } else if (weather==1) {
        // cold
        this.addPants();
        tlPants.play();
        tlUmbrella.play();
        tlDresser.to(clothesPants, 0.1, {display: 'block'}, '+=1.5')
                 .to(clothesPants, 1, {scaleY: 1, transformOrigin: "bottom", ease: Sine.easeInOut})
                 .to(clothesPants, 1, {y: -200, scaleX: 1.4, scaleY: 1.4, transformOrigin: "bottom", ease: Sine.easeInOut})
                 .to(clothesPants, 0.6, {opacity: 0, ease: Sine.easeInOut}, "+=0.2")
                 .to(clothesSweater, 0.1, {display: 'block'})
                 .to(clothesSweater, 1, {y: -200, scaleX: 1.4, scaleY: 1.4, transformOrigin: "bottom", ease: Sine.easeInOut})
                 .to(clothesSweater, 0.6, {opacity: 0, ease: Sine.easeInOut})
                 .to([clothesPants, clothesSweater], 0.1, {display: "none"})
                 .to([clothesPants, clothesSweater], 0.1, {y: 0, opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "bottom"})
                 .to([dresserOpenBack, dresserOpenFront], 0.1, {display: "none", onComplete: endAnimation}, "+=0.3")

      } else if (weather==2) {
        // raining
        this.addUmbrella();
        tlPants.play();
        tlUmbrella.play();
        tlDresser.to(clothesRain, 0.1, {display: 'block'}, '+=1.5')
                 .to(clothesRain, 1, {scaleY: 1, transformOrigin: "bottom", ease: Sine.easeInOut})
                 .to(clothesRain, 1, {y: -200, scaleX: 1.4, scaleY: 1.4, transformOrigin: "bottom", ease: Sine.easeInOut})
                 .to(clothesRain, 0.6, {opacity: 0, ease: Sine.easeInOut})
                 .to(clothesRain, 0.1, {display: "none"})
                 .to(clothesRain, 0.1, {y: 0, opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "bottom"})
                 .to([dresserOpenBack, dresserOpenFront], 0.1, {display: "none", onComplete: endAnimation}, "+=0.3")
      }

      else if (weather==3) {
        // snowing
        this.addUmbrella();
        this.addPants();
        tlPants.play();
        tlUmbrella.play();

        tlDresser.to(clothesMittens, 0.1, {display: 'block'}, '+=1.5')
                 .to(clothesMittens, 1, {y: -200, scaleX: 1.4, scaleY: 1.4, transformOrigin: "bottom", ease: Sine.easeInOut})
                 .to(clothesMittens, 0.6, {opacity: 0, ease: Sine.easeInOut}, "+=0.2")
                 .to(clothesHat, 0.1, {display: 'block'})
                 .to(clothesHat, 1, {y: -200, scaleX: 1.4, scaleY: 1.4, transformOrigin: "bottom", ease: Sine.easeInOut})
                 .to(clothesHat, 0.6, {opacity: 0, ease: Sine.easeInOut}, "+=0.2")
                 .to(clothesSkis, 0.1, {display: 'block'})
                 .to(clothesSkis, 1.3, {y: -120, scaleX: 1.4, scaleY: 1.4, transformOrigin: "bottom", ease: Sine.easeInOut})
                 .to(clothesSkis, 0.6, {opacity: 0, ease: Sine.easeInOut})
                 .to([clothesMittens, clothesHat, clothesSkis], 0.1, {display: "none"})
                 .to([clothesMittens, clothesHat, clothesSkis], 0.1, {y: 0, opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "bottom"})
                 .to([dresserOpenBack, dresserOpenFront], 0.1, {display: "none", onComplete: endAnimation}, "+=0.3")
      }
    };

    function endAnimation() {
      tlUmbrella.add(TweenMax.to([umbrellaRight, umbrellaLeft], 0.8, {rotation: 0, transformOrigin: "top", ease: Sine.easeInOut}, "=+0.6"));
      tlUmbrella.add(TweenMax.to(paperUmbrella, 0.7, {scaleX: 1, scaleY: 1, transformOrigin: "bottom", ease: Sine.easeInOut}));
      tlPants.add(TweenMax.to([pantsLeft, pantsRight], 0.8, {scaleY: 0, transformOrigin: "top", ease:Sine.easeInOut}, "=+0.6"));
      tlPants.add(TweenMax.to(paperPants, 0.7, {scaleX: 1, scaleY: 1, transformOrigin: "bottom", ease: Sine.easeInOut}));
    };

    const cometDresser = [cometDresserUmbrella, cometDresserPants]
    const glowDresser = [glowUmbrella, glowPants]
    const pathDresserUmbrella = MorphSVGPlugin.pathDataToBezier(vertexDresserUmbrella, {align: alignDresserUmbrella});
    const pathDresserPants = MorphSVGPlugin.pathDataToBezier(vertexDresserPants, {align: alignDresserPants});

    tlDresser.to(cometDresser, 0.1, {display: 'block'})
             .to(cometDresserUmbrella, 0.5,  {bezier: { type: "cubic", values: pathDresserUmbrella}, ease: Sine.easeInOut})
             .to(cometDresserPants, 0.5,  {bezier: { type: "cubic", values: pathDresserPants}, ease: Sine.easeInOut}, '-=0.5')
             .to(cometDresser, 0.01, {display:'none'})
             .to(cometDresser, 0.01, {x: 0, y: 0})

             .to(glowDresser, 0.01, {display:'block'})
             .to(glowDresser, 0.75, {scaleX: 4, scaleY: 4, opacity: 0, transformOrigin: "center"})
             .to(glowDresser, 0.01, {display: 'none'})
             .to(glowDresser, 0.01, {scaleX: 1, scaleY: 1, opacity: 1, transformOrigin: "center"})

             .to([dresserOpenBack, dresserOpenFront], 0.1, {display: 'block', onComplete: chooseWeather}, "+=0.5")
             .to([clothesPants, clothesRain, clothesSkis], 0.1, {scaleY: 0.2, transformOrigin: "bottom"})

    tlUmbrella.to(paperUmbrella, 0.8, {scaleX: 2, scaleY: 2, transformOrigin: "bottom", ease: Sine.easeInOut})

    tlPants.to(paperPants, 0.8, {scaleX: 2, scaleY: 2, transformOrigin: "bottom", ease: Sine.easeInOut})
  };

  hoverCactus() {
    this.hoverShake(cactus);
  };

  leaveCactus() {
    this.leaveShake();
  };

  clickCactus() {
    this.removeButtonListeners();
    tlShake.clear();

    const tlCactus = new TimelineMax({onComplete: this.animatePlants.bind(this)});

    const cometCactus = [cometCactusLamp, cometCactusPail]
    const glowCactus = [glowPail, glowLamp]
    const pathCactusPail = MorphSVGPlugin.pathDataToBezier(vertexCactusPail, {align: alignCactusPail});
    const pathCactusLamp = MorphSVGPlugin.pathDataToBezier(vertexCactusLamp, {align: alignCactusLamp});

    tlCactus.to(cometCactus, 0.1, {display: 'block'})
            .to(cometCactusLamp, 0.5,  {bezier: { type: "cubic", values: pathCactusLamp}, ease: Sine.easeInOut})
            .to(cometCactusPail, 0.5,  {bezier: { type: "cubic", values: pathCactusPail}, ease: Sine.easeInOut}, '-=0.5')
            .to(cometCactus, 0.01, {display:'none'})
            .to(cometCactus, 0.01, {x: 0, y: 0})

            .to(glowCactus, 0.01, {display:'block'})
            .to(glowCactus, 0.75, {scaleX: 4, scaleY: 4, opacity: 0, transformOrigin: "center"})
            .to(glowCactus, 0.01, {display: 'none'})
            .to(glowCactus, 0.01, {scaleX: 1, scaleY: 1, opacity: 1, transformOrigin: "center"})
  }

  hoverFlowers() {
    this.hoverShake(flowers);
  };

  leaveFlowers() {
    this.leaveShake();
  };

  clickFlowers() {
    this.removeButtonListeners();
    tlShake.clear();

    const tlFlowers = new TimelineMax({onComplete: this.animatePlants.bind(this)});

    const cometFlowers = [cometFlowersLamp, cometFlowersPail]
    const glowFlowers = [glowPail, glowLamp]
    const pathFlowersPail = MorphSVGPlugin.pathDataToBezier(vertexFlowersPail, {align: alignFlowersPail});
    const pathFlowersLamp = MorphSVGPlugin.pathDataToBezier(vertexFlowersLamp, {align: alignFlowersLamp});

    tlFlowers.to(cometFlowers, 0.1, {display: 'block'})
             .to(cometFlowersLamp, 0.5,  {bezier: { type: "cubic", values: pathFlowersLamp}, ease: Sine.easeInOut})
             .to(cometFlowersPail, 0.5,  {bezier: { type: "cubic", values: pathFlowersPail}, ease: Sine.easeInOut}, '-=0.5')
             .to(cometFlowers, 0.01, {display: 'none'})
             .to(cometFlowers, 0.01, {x: 0, y: 0})

             .to(glowFlowers, 0.01, {display:'block'})
             .to(glowFlowers, 0.75, {scaleX: 4, scaleY: 4, opacity: 0, transformOrigin: "center"})
             .to(glowFlowers, 0.01, {display: 'none'})
             .to(glowFlowers, 0.01, {scaleX: 1, scaleY: 1, opacity: 1, transformOrigin: "center"})
  }

  animatePlants() {
    const tlPlants = new TimelineMax({onComplete: addListeners.bind(this)});
    const tlSun = new TimelineMax({paused: true});
    const tlBeforeClickLamp = new TimelineMax({paused: true});
    const tlBeforeClickPail = new TimelineMax({paused: true});
    const tlAfterClick = new TimelineMax({paused: true});

    const pathPail = MorphSVGPlugin.pathDataToBezier(pathPailCactus, {align: alignPathPailCactus});
    const clouds = [cloudLeft, cloudCenter, cloudRight]
    const petals = [petalsLeftLight, petalsLeftDark, petalsCenterLight, petalsCenterDark, petalsRightLight, petalsRightDark]

    function addListeners() {
      this.addButtonListeners();
    }

    function playSun() {
      tlSun.play();
    };

    function beforeClick() {
      tlBeforeClickLamp.play();
      tlBeforeClickPail.play();
      tlPlants.pause()
      buttonPail.addEventListener('click', afterClick);
      buttonPail.setAttribute('cursor', 'pointer');
    };

    function afterClick() {
      buttonPail.removeEventListener('click', afterClick);
      buttonPail.removeAttribute('cursor', 'pointer');
      tlBeforeClickPail.clear();
      tlPlants.play();
    }

    function stopLamp() {
      tlBeforeClickLamp.clear();
    }

    function stopSun() {
      tlSun.clear();
    }

    // sun pulses indefinitely
    tlSun.fromTo(outsideSunGlow, 1, {scale: 1.2, transformOrigin:'center'}, {scale: 1.4, yoyo: true, repeat: -1})

    tlBeforeClickLamp.to(lampLight, 0.5, {fill: '#EAE1B2', display: 'block'})
                     .fromTo(lampTop, 0.5, {fill: '#FCEA6B', ease: Sine.easeInOut},
                        {fill: '#02962f', ease: Sine.easeInOut, yoyo: true, repeat: -1})
                     .fromTo(lampShade, 0.5, {fill: '#FFF3C0', ease: Sine.easeInOut},
                        {fill: '#3bb254', ease: Sine.easeInOut, yoyo: true, repeat: -1}, '-=0.5')
                     .fromTo(lampLight, 0.5, {fill: '#EAE1B2', ease: Sine.easeInOut},
                        {fill: '#85e8a3', ease: Sine.easeInOut, yoyo: true, repeat: -1}, '-=0.5')

    tlBeforeClickPail.fromTo(pail, 2, {x:-1}, {x:1, ease:RoughEase.ease.config({
                        strength:8,
                        points:20,
                        template:Linear.easeNone,
                        randomize:false
                      }), clearProps:"x", repeat: -1}, 0.5);

    // sun shifts slightly to the right, turns lighter and bigger, sky turns into inferno
    tlPlants.to([outsideSun, outsideSunGlow], 2, {
              ease: Sine.easeInOut,
              x: 70,
              scaleX: 1.2,
              scaleY: 1.2,
              transformOrigin: "center"
            })
            .to(outsideSun, 1, {fill: '#fcec9f'}, '-=1')
            .to([cloudLeft, cloudCenter, cloudRight], 1, {opacity: 0}, '-=1')
            .staggerTo("#outsideSky_1_ stop", 1, {
              stopColor: "#ffa72a",
              cycle: {
                stopColor: ["#ffa72a", "#fff315"]
              },
              onComplete: playSun
            }, 0, "-=1")

    // thermometer gets bigger, shows temp, and then shrinks again
            .to(thermometer, 2, {
              scaleX: 1.5,
              scaleY: 1.5,
              ease: Sine.easeInOut,
              transformOrigin: 'bottom'
            }, "-=1")
            .to(thermoMercury, 1, {
              scaleY: 2.17,
              transformOrigin: 'bottom',
              ease: Sine.easeInOut
            }, "-=1")
            .to(thermometer, 2, {
              scaleX: 1,
              scaleY: 1,
              ease: Sine.easeInOut,
              transformOrigin: 'bottom'})

    // cactus turns brown and shrinks
            .to(cactusBody, 5, {fill: '#846124'}, "-=3")
            .to([cactusThorns, cactusBody], 5, {
              scaleX: 0.6,
              scaleY: 0.6,
              transformOrigin: 'bottom'
            }, "-=3")

    // flower parts turn brown, leaves start falling
            .to([leafMidLeft, leafMidCenter, leafMidRight], 4, {
              stroke: '#3f2700',
              ease: Sine.easeInOut
            }, "-=5")
            .to([leafBodyLeft, leafBodyCenter, leafBodyRight], 4, {
              fill: '#7c4900',
              ease: Sine.easeInOut
            }, "-=5")
            .to(flowerStems, 4, {stroke: '#3d2400', ease: Sine.easeInOut}, "-=5")
            .to([petalsLeftLight, petalsLeftDark, petalsCenterLight, petalsCenterDark, petalsRightLight, petalsRightDark], 4, {fill: '#89611b'}, "-=5")
            .to(leafLeft, 4, {
              y: 200,
              x: -10,
              opacity: 0,
              directionalRotation: 180,
              ease: Sine.easeInOut
            }, "-=4")
            .to(leafRight, 3, {
              y: 200,
              x: 15,
              opacity: 0,
              directionalRotation: 180,
              ease: Sine.easeInOut
            }, "-=3")
            .to(leafCenter, 3, {
              y: 170,
              x: -30,
              opacity: 0,
              directionalRotation: -180,
              ease: Sine.easeInOut
            }, "-=3.5")
            .to(leafBodyLeft, 0.01, {fill: '#009245'})
            .to(leafBodyCenter, 0.01, {fill: '#006837'}, '-=0.01')
            .to(leafBodyRight, 0.01, {fill: '#39B54A'}, '-=0.01')
            .to(leafMidLeft, 0.01, {stroke: '#006837'}, '-=0.01')
            .to(leafMidCenter, 0.01, {stroke: '#01773C'}, '-=0.01')
            .to(leafMidRight, 0.01, {stroke: '#009245'}, '-=0.01')
            .to([leafLeft, leafCenter, leafRight], 0.01, {x: 0, y: 0, rotation: 0, onComplete: beforeClick.bind(this)}, '-=0.01')

    //move garden pail toward cactus
            .to(pail, 0.2, {x: 0, ease: Sine.easeInOut})
            .to(pail, 2, {bezier: {type: "cubic", values: pathPail}, ease: Sine.easeInOut})
            .to(pail, 0.7, {rotation: -70, transformOrigin: 'center', ease: Sine.easeInOut}, "-=0.7")

    //water cactus
            .to(waterCactus, 0.1, {opacity: 1})
            .to(waterCactus, 0.5, {scaleY: 23, transformOrigin: 'top'})
            .to(waterCactus, 0.5, {scaleY: 1, transformOrigin: 'bottom'})
            .to(waterCactus, 0.01, {opacity: 0, scaleY: 23, transformOrigin: 'bottom'})
            .to(waterCactus, 0.01, {scaleY: 1, transformOrigin: 'top'})

    //rotate pail back and move pail to flowers
            .to(pail, 0.7, {rotation: 0, transformOrigin: 'center', ease: Sine.easeInOut}, "-=0.5")
            .to(pail, 0.5, {x: -110, ease: Sine.easeInOut})
            .to(pail, 0.7, {rotation: -70, transformOrigin: 'center', ease: Sine.easeInOut})

    //water flowers
            .to(waterFlowers, 0.1, {opacity: 1})
            .to(waterFlowers, 0.5, {scaleY: 19.5, transformOrigin: 'top'})
            .to(waterFlowers, 0.5, {scaleY: 1, transformOrigin: 'bottom'})
            .to(waterFlowers, 0.01, {opacity: 0, scaleY: 19.5, transformOrigin: 'bottom'})
            .to(waterFlowers, 0.01, {scaleY: 1, transformOrigin: 'top'})

    //rotate pail and move back to window sill
            .to(pail, 0.7, {rotation: 0, transformOrigin: 'center', ease: Sine.easeInOut}, "-=0.5")
            .to(pail, 1, {x: 0, y: 0, ease: Sine.easeInOut})

    // grow cactus back
            .to([cactusBody, cactusThorns], 4, {
              scaleX: 1,
              scaleY: 1,
              transformOrigin: 'bottom',
              ease: Sine.easeInOut
            }, "-=3")
            .to(cactusBody, 4, {fill: '#8CC63F',  ease: Sine.easeInOut}, "-=4")

    // grow flower back and stop lamp
            .to([leafLeft, leafCenter, leafRight], 3, {opacity: 1}, '-=2')
            .to(flowerStems, 3, {stroke: '#006837'}, '-=3')
            .to([petalsLeftDark, petalsCenterDark], 3, {fill: '#E079A3'}, '-=3')
            .to([petalsLeftLight, petalsCenterLight], 3, {fill: '#F29EC3'}, '-=3')
            .to(petalsRightLight, 3, {fill: '#F7D0E0'}, '-=3')
            .to(petalsRightDark, 3, {fill: '#F2B1CF', onComplete: stopLamp}, '-=3')

    // turn lamp back
            .to(lampLight, 0.01, {display: 'none'})
            .to(lampTop, 0.01, {fill: '#848383'}, '-=0.01')
            .to(lampShade, 0.01, {fill: '#ADADAD'}, '-=0.01')

    // revert sky back
            .to([outsideSun, outsideSunGlow], 2, {
                      ease: Sine.easeInOut,
                      x: 0,
                      scaleX: 1,
                      scaleY: 1,
                      transformOrigin: "center"
                    })
            .to(outsideSun, 1, {fill: '#FFE027'}, '-=1')
            .to([cloudLeft, cloudCenter, cloudRight], 1, {opacity: 1}, '-=1')
            .to(thermoMercury, 1, {
              scaleY: 1,
              transformOrigin: 'bottom',
              ease: Sine.easeInOut
            }, "-=1")
            .staggerTo("#outsideSky_1_ stop", 1, {
                      stopColor: "#b1e6f2",
                      cycle: {
                        stopColor: ["#b1e6f2", "#b1e6f2"]
                      },
                      onComplete: stopSun
                    }, 0, "-=1")
  }

  render() {
    const { classes } = this.props;

    const inputs = {
			svg: {
				dangerouslySetInnerHTML: {__html: $(this.svg).prop('outerHTML')},
        overflow: 'hidden',
			},
    };

    return (
      <Paper className={classes.root} elevation={3}>
        <div {...inputs.svg}/>
      </Paper>
    )
  };
};

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BedroomSVG)))

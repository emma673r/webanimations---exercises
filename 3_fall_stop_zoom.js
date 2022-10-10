"use strict";

const ball = document.querySelector("#ball");

// Create keyframes and properties for falling and zoom

const fallingProp = {
  duration: 1000,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out",
};

const zoomProp = {
  duration: 500,
  fill: "forwards",
  //composites default value is replace where the actively animating property's value simply replaces any previous set value
  // "add" does so that both animation will be seen as the browser on the fly figures out the appropriate transformation at a given point
  composite: "add",
};

const fallingKF = [{ transform: "translateY(-20vw)" }, { transform: "translateY(65vw)" }];
const zoomKF = [{ transform: "scale(1)" }, { transform: "scale(0)" }];

const fallingBall = ball.animate(fallingKF, fallingProp);

// register click

ball.addEventListener("mousedown", ballClicked);

// start falling animation

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  fallingBall.pause();
  // change speed rate of falling each tyime its been clicked

  // start zoom-animation
  const zoomBall = ball.animate(zoomKF, zoomProp);

  zoomBall.onfinish = () => {
    fallingBall.cancel();

    fallingProp.duration = fallingProp.duration * 1.2;
    console.log(fallingProp.duration);

    zoomBall.cancel();
    
    ball.animate(fallingKF, fallingProp);
    // fallingBall.play();
  };
}

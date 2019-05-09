import React from 'react';
import xiaomiImg from '../images/imusic.png';
import spiderImg from '../images/ispider.jpeg';
import gameImg from '../images/igame.jpg';
import megviiImg from '../images/iface.jpg';
import gpaImg from '../images/iedu.jpg';
import projectImg from '../images/iproject.png';

export const directions = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left'
}

export const ways = {
  IN: 'in',
  OUT: 'out'
}

export const face = {
  INITAL_CLS: 'face'
}

export const card = {
  INITAL_CLS: 'card'
}

// get direction of mouse
// see https://stackoverflow.com/a/3647634 for details
export function getDirectionStr(e) {
  let direction = getDirection(e);
  switch(direction) {
    case 0:
      return directions.TOP;
    case 1:
      return directions.RIGHT;
    case 2:
      return directions.BOTTOM;
    case 3:
      return directions.LEFT;
    default:
      return directions.TOP;
  }
}

function getDirection(e) {
  // Width and height of current item
  let item = e.currentTarget;
  let w = item.offsetWidth;
  let h = item.offsetHeight;
  let position = getPosition(item);

  // Calculate the x/y value of the pointer entering/exiting, relative to the center of the item.
  let x = (e.pageX - position.x - (w / 2) * (w > h ? (h / w) : 1));
  let y = (e.pageY - position.y - (h / 2) * (h > w ? (w / h) : 1));

  // Calculate the angle the pointer entered/exited and convert to clockwise format (top/right/bottom/left = 0/1/2/3).
  let d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

  // console.table([x, y, w, h, e.pageX, e.pageY, item.offsetLeft, item.offsetTop, position.x, position.y]);

  return d;
}

function getPosition(el) {
  let xPos = 0;
  let yPos = 0;

  while (el) {
    xPos += (el.offsetLeft + el.clientLeft);
    yPos += (el.offsetTop + el.clientTop);

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

export const mainContents = [
  <div>
    <p>
      XiaoMi Music: XiaoMi Music is a music app running on MIUI 
      which is the OS for XiaoMi phones.
    </p>
    <p>  
      I was a member of backend team, 
      using java and python provided RESTful API.
    </p>
    <p>
      Techs: Python, Java, Mysql, MongoDB, Hbase, Tornado, 
      SpringBoot, etc.
    </p>
  </div>,
  <div>
    <p>
      Builded and improved a distributed spider system 
      @ Leshi.
    </p>
    <p>
      Crawled short videos and processed crawled data 
      by MapReduce on HDFS. 
      Collected Hundreds of Ts video data everyday.
    </p>
    <p>
      Techs: Python, Scrapy, HDFS, MapReduce, LeveDB, 
      RabbitMQ, MongoDB, etc.
    </p>
  </div>,
  <div>
    <p>
      Decisive Pacific Battle: A SLG mobile-phone game, 
      developed for IOS and Android.
    </p>
    <p>
      I was a member of backend team, 
      using long connection sockects to provide APIs, 
      writing in Python.
    </p>
    <p>
      Techs: Python, MongoDB, Sockets, etc.
    </p>
  </div>,
  <div>
    <p>
      Label++: Megvii is a visual recognition company 
      and Label++ is a web project for collecting,
      marking visual data. 
    </p>
    <p>
      I was responsible for the development of Label++, 
      frontend and backend both.
    </p>
    <p>
      Techs: Python, Mysql, Flask, Javascript, JQuery, RequireJs, AngularJs, etc.
    </p>
  </div>,
  <div>
    <p>
      Binghamton University(State Univ. of NY). 
      Master of Science in Electrical Engineering; 
      GPA: 3.97.
    </p>
    <p>
      Beihang University.
      Bachelor of Science in Automatic Control and Electrical Eng.; 
      GPA: 3.22.
    </p>
  </div>,
  <div>
    <p>
      Music Composer: Used Keras to construct a LSTM model, 
      built a music composer.
    </p>
    <p>
      Graphic Display: Analyzed and visualized relationships 
      among people in Song Dynasty.
    </p>
    <p>
      Virtual Stock Market: Constructed a virtual stock market 
      by tracking data from Yahoo finance API.
    </p>
  </div>
]

export const mainContentsBg = [
  xiaomiImg, spiderImg, gameImg, megviiImg, gpaImg, projectImg
]

export const skills = {
  python: 'A', java: 'B+', JS: 'B+',
  Mysql: 'A-', Tornado: 'A', React: 'B',
  Energy: 'S+'
}
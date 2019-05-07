const directions = {
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

// get direction of mouse
// see https://github.com/NigelOToole/direction-reveal/blob/master/scripts/direction-reveal.js for details
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

  // Calculate the angle the pointer entered/exited and convert to clockwise format (top/right/bottom/left = 0/1/2/3).  See https://stackoverflow.com/a/3647634 for a full explanation.
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

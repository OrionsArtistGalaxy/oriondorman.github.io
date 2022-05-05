const sprites = {
  Sprite1: new Sprite1({
    x: -180,
    y: 180,
    direction: 89.5475585638157,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};const sprites = {
  Sprite1: new Sprite1({
    x: -180,
    y: 180,
    direction: 89.5475585638157,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};const sprites = {
  Sprite1: new Sprite1({
    x: -180,
    y: 180,
    direction: 89.5475585638157,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};let circle = document.getElementById('circle');

const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);
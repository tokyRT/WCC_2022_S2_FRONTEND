(function () {
  
  const aiguille = document.getElementById('aiguille');
  console.log(aiguille);
  document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;
    const aX = aiguille.getBoundingClientRect().left + aiguille.getBoundingClientRect().width/2;
    const aY = aiguille.getBoundingClientRect().top+ aiguille.getBoundingClientRect().height/2;
    let deltaX = x - aX;
    let deltaY = y - aY;
    let cosTeta = deltaX/(Math.sqrt(deltaX * deltaX + deltaY * deltaY));
    let angle = Math.acos(cosTeta) * 180 / Math.PI;
    let sign = y < aY ? -1 : 1;
    aiguille.style.transform = `rotate(${sign*angle}deg)`;
  });
  
})();

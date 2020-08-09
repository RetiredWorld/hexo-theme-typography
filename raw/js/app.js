let stage
let mainContainer
let sideBar

function updateSidebar() {
  if (window.innerWidth <= 768 || window.innerHeight <= 600) {
    sideBar.setAttribute('style', `width:${stage.offsetWidth.toString()}px;`)
    mainContainer.classList.remove('col-sm-9')
  } else {
    mainContainer.classList.add("col-sm-9")
    const sidebarW =
      stage.offsetWidth - mainContainer.offsetWidth + (window.innerWidth - stage.offsetWidth) / 2;
    sideBar.setAttribute('style', `width:${sidebarW}px;`)
  }
}

window.onload = function () {
  stage = document.getElementById("stage")
  mainContainer = document.getElementById('main-container')
  sideBar = document.getElementById('side-bar')

  mainContainer.classList.remove('invisible')
  mainContainer.classList.add('fadeInTop')

  window.addEventListener('resize',updateSidebar)
  updateSidebar();

  if (window.innerWidth <= 768) {
    sideBar.classList.remove('invisible')
    sideBar.classList.add('fadeInTop')
  }else{
    sideBar.classList.remove('invisible')
    sideBar.classList.add('fadeInRight')
  }
  document.getElementsByClassName('site-title')[0].addEventListener('click', ()=>{
    window.location.href = '/'
  })
}

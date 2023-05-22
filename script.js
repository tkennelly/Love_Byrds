//Start Button
const openStartBtn = document.getElementById('openStart');
const start = document.getElementById('start')
const closeStartBtn = document.getElementById('closeStart')

const openStart = () => {
  start.style.display = 'block';
}

const closeStart = () => {
  start.style.display = 'none'
}

openStartBtn.addEventListener('click', openStart)
closeStartBtn.addEventListener('click', closeStart)

//Instructions Button
const openInstBtn = document.getElementById('openInst')
const inst = document.getElementById('inst')
const closeInstBtn = document.getElementById('closeInst')

const openInst = () => {
    inst.style.display = 'block';
}

const closeInst = () => {
    inst.style.display = 'none'
}

openInstBtn.addEventListener('click', openInst)

closeInstBtn.addEventListener('click', closeInst)




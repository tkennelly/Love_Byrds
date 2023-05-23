import { edwinText, edwinQuestions, edwinResponse } from './text.js'

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

// ---- POINTS ----

let pointTotal = 0

// ---- END POINTS ----

// START QUESTIONS

console.log('working')

let continueBtn = document.getElementById('continue')

let bachelorSpeaking = document.getElementById('bachelorText')

let oneBtn = document.getElementById('one')

let twoBtn = document.getElementById('two')

let threeBtn = document.getElementById('three')

const showResponse = (e) => {
    console.log('in showresponse')
    let points = parseInt(e.target.dataset.points)
    let step = parseInt(continueBtn.dataset.step)
    console.log(`current step: ${step}`)
    bachelorSpeaking.innerHTML = edwinResponse[`${step}`][`${points}`]

    oneBtn.innerHTML = ''
    twoBtn.innerHTML = ''
    threeBtn.innerHTML = ''

    oneBtn.style.display = 'none'
    twoBtn.style.display = 'none'
    threeBtn.style.display = 'none'

    oneBtn.dataset.points = ''
    twoBtn.dataset.points = ''
    threeBtn.dataset.points = ''

    continueBtn.style.display = ''

    step++
    continueBtn.dataset.step = step
}

const clickAnswer = (e) => {
   console.log(e)
   console.log(e.target.dataset.points)
   pointTotal += parseInt(e.target.dataset.points)
   showResponse(e)
}

const buildBtns = (step) => {
    oneBtn.innerHTML = edwinQuestions[`${step}`][0].answer
    twoBtn.innerHTML = edwinQuestions[`${step}`][1].answer
    threeBtn.innerHTML = edwinQuestions[`${step}`][2].answer

    oneBtn.style.display = 'inline'
    twoBtn.style.display = 'inline'
    threeBtn.style.display = 'inline'

    oneBtn.dataset.points = edwinQuestions[`${step}`][0].points
    twoBtn.dataset.points = edwinQuestions[`${step}`][1].points
    threeBtn.dataset.points = edwinQuestions[`${step}`][2].points

    continueBtn.style.display = 'none'

    oneBtn.addEventListener('click', clickAnswer)
    twoBtn.addEventListener('click', clickAnswer)
    threeBtn.addEventListener('click', clickAnswer)
}

const takeStep = (step) => {
    bachelorSpeaking.innerHTML = edwinText[`${step}`]

    if (step == 4) {
       buildBtns(step)
     } else if (step == 7) {
        buildBtns(step)
     } else if (step == 10) {
        buildBtns(step)
    }
}

const playGame = () => {
    console.log(`points: ${pointTotal}`)
    let step = parseInt(continueBtn.dataset.step)
    console.log(`current step: ${step}`) 
    takeStep(step)
    step++
    continueBtn.dataset.step = step
    console.log(`next step: ${continueBtn.dataset.step}`)
}

continueBtn.addEventListener('click', playGame)



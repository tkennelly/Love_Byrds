import { edwinText, edwinQuestions, edwinResponse, endMsg } from './text.js'

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

let reactImage = document.getElementById('normal')

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

    if (points == 1) {
        reactImage.src = 'sad.png'
    } else if (points == 3) {
        reactImage.src = 'happy.png'
    }

    step++
    continueBtn.dataset.step = step

// replace image with reaction
//     if (edwinResponse[`[${points}]`] == 1) {
//         reactImage.innerHTML = `<img id="normal" src="sad.png"/>`
//     } else if (edwinResponse[`${points}`] == 3) {
//         reactImage.innerHTML = `<img id="normal" src="happy.png"/>`
//     }
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

const reloadPage = () => {
   //just in case
   pointTotal = 0
   location.reload()
}

const endGame = () => {
   let endHeadText = document.getElementById(`endHeaderText`)
   let endText = document.getElementById(`endText`)
   let ending = document.getElementById(`endMsging`)
   let reloadBtn = document.getElementById(`closeEnding`)
   
   bachelorSpeaking.innerHTML = ``
   continueBtn.style.display = `none`

   if (pointTotal <= 25) {
      endHeadText.innerHTML = endMsg.bad.h 
      endText.innerHTML = endMsg.bad.p
      ending.style.display = `block`
      reloadBtn.addEventListener('click', reloadPage)
   } else if (pointTotal > 25 && pointTotal <= 35) {
      endHeadText.innerHTML = endMsg.neutral.h
      endText.innerHTML = endMsg.neutral.p
      ending.style.display = `block`
      reloadBtn.addEventListener('click', reloadPage)
   } else if (pointTotal > 35) {
      endHeadText.innerHTML = endMsg.good.h
      endText.innerHTML = endMsg.good.p
      ending.style.display = `block`
      reloadBtn.addEventListener('click', reloadPage)
   }
}

const takeStep = (step) => {
    bachelorSpeaking.innerHTML = edwinText[`${step}`]

    if (step == 4) {
         buildBtns(step)
     } else if (step == 7) {
         buildBtns(step)
     } else if (step == 10) {
         buildBtns(step)
     } else if (step == 13) {
         buildBtns(step)
     } else if (step == 16) {
         buildBtns(step)
     } else if (step == 19) {
         buildBtns(step)
     } else if (step == 22) {
         buildBtns(step)
     } else if (step == 25) {
         buildBtns(step)
     } else if (step == 28) {
         buildBtns(step)
     } else if (step == 31) {
         buildBtns(step)
     } else if (step == 34) {
         buildBtns(step)
     } else if (step == 37) {
         buildBtns(step)
     } else if (step == 40) {
         buildBtns(step)
     } else if (step == 43) {
         buildBtns(step)
     } else if (step == 46) {
         buildBtns(step)
     } else if (step == 49) {
         endGame()
     }
}

const playGame = () => {
    console.log(`points: ${pointTotal}`)
    let step = parseInt(continueBtn.dataset.step)
    console.log(`current step: ${step}`) 
    takeStep(step)
    reactImage.src = 'normal.png'
    step++
    continueBtn.dataset.step = step
    console.log(`next step: ${continueBtn.dataset.step}`)
}

continueBtn.addEventListener('click', playGame)



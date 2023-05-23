let edwinText = {
    0: `Why, hello! My name is Holmen E. Byrds, but please feel free to call me Edwin.`, 
    1: `whatever hes gonna say1`,
    2: `whatever hes gonna say2`,
    3: `Let's start off easy, shall we? I love all types of beautiful colors, especially ones found in nature. What is your favorite color?`,
    4: `(Which of these colors do you like best?)`,
    6: `How about a more fun one. In your own opinion, do you consider yourself more extroverted or introverted?`,
    7: `(Which of these describes you the most?)`,
    9: `I think getting an early start on the day makes every hour all the more rewarding. How about you?`,
    10: `(Are you a morning or a night person?)`,
    12: `So…I've been meaning to ask. Why me? Why do you want to 'score a date' with me, as it were?`,
    13: `(Why do you want to date Edwin?)`,
    15: `I value a lot of things in a person, what are some traits you value in potential dates? Or even in potential not-dates! What is a quality that is important to you?`,
    16: `(Which of these is the best quality?)`
}

let edwinQuestions = {
    4: [
        {answer: `Blue`,
        points: 1},
        {answer: `Nuetral`,
        points: 2},
        {answer: `Good`,
        points: 3}
    ],
    7: [
        {answer: `Introvert`,
        points: 1},
        {answer: `Extrovert`,
        points: 2},
        {answer: `Ambivert`,
        points: 3}
    ],
    10: [
        {answer: `Morning`,
        points: 3},
        {answer: `Night`,
        points: 2},
        {answer: `Neither`,
        points: 1}   
    ],
    13: [
        {answer: `Short answer`,
        points: 1},
        {answer: `Medium answer`,
        points: 2},
        {answer: `Long answer`,
        points: 3}
    ],
    16: [
        {answer: `Kindness`,
        points: 2},
        {answer: `Honesty`,
        points: 1},
        {answer: `Passion`,
        points: 3}
            
    ]
}

let edwinResponse = {
    5: {
        1: `Oh…did you know that true blue is the only color not found in nature? Blue Jays actually only look blue due to the structure of their feathers, which distort the reflection of light.`,
        2: `I suppose that is a nice color, like ___ and ___.`,
        3: `Did you just pick those colors because they're what I am wearing? Oh I don't mind, I appreciate the flattery. And they are my favorite colors after all.`
    },
    8: {
        1: `Oh…so…you don't want to meet my friends?`,
        2: `Oh so fun, then you'd love to visit my friends, right? Though, sometimes it's good to have some time alone too, right?`,
        3: `Me too! I love my friends and I love to see them as often as I can, but I also love spending time alone, you know? I'm so glad you understand.`
    },
    11: {
        1: `Undecided, huh. Well…it's good to be decisive sometimes you know.`,
        2: `Fair enough, nothing wrong with being a night owl.`,
        3: `Yes! Early bird gets the worm as they say! A fresh cup of coffee bright and early in the morning is how I love to start the day!`
    },
    14: {
        1: `Huh…not much of a reason then?`,
        2: `Alrighty then, to the point I suppose. Nothing to complain about.`,
        3: `Oh…wow…thank you. I'm…not sure what to say. Flattery will get you everywhere.`
    },
    17: {
        1: `Like…to a fault? Would you not tell a single white lie? Interesting…`,
        2: `Kindness is a beautiful thing, very important.`,
        3: `I think it is essential to have some kind of passion in your life! Without passions, pardon me for saying, but life is meaningless!`
    }
}

export { edwinText, edwinQuestions, edwinResponse }
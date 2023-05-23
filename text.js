let edwinText = {
    0: `Why, hello! My name is Holmen E. Byrds, but please feel free to call me Edwin.`, 
    1: `whatever hes gonna say1`,
    2: `whatever hes gonna say2`,
    3: `Let's start off easy, shall we? I love all types of beautiful colors, especially ones found in nature. What is your favorite color?`,
    4: `(Which of these colors do you like best?)`,
    6: `How about a more fun one. In your own opinion, do you consider yourself more extroverted or introverted?`,
    7: `(Which of these describes you the most?)`
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
    }
}

export { edwinText, edwinQuestions, edwinResponse }
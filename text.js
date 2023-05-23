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
    16: `(Which of these is the best quality?)`,
    18: `I think you might be able to make a good guess what my favorite animal is, but I'd like to know yours? Or, let's narrow it down. Are you more of a cat or a dog person?`,
    19: `(What's better, cats or dogs?)`,
    21: `So…if we were going to go on a date…where would you take me? No wait- let's not make this all about me. Where would you like to go on a date?`,
    22: `(What is your ideal date?)`,
    24: `You knew this question was coming, or at least could have assumed. What do you think is the best type of bird?`,
    25: `(Which of these birds is the best?)`,
    27: `Ok, how about we rapid-fire some easy questions, shall we? What is your favorite kind of food?`,
    28: `(Choose your favorite type of food.)`
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
    ],
    19: [
        {answer: `Cats`,
        points: 1},
        {answer: `Dogs`,
        points: 2},
        {answer: `Actually, I prefer birds myself`,
        points: 3}
    ],
    22: [
        {answer: `Something outdoorsy`,
        points: 3},
        {answer: `Fancy dinner reservations`,
        points: 1},
        {answer: `A quiet night in`,
        points: 2}       
    ],
    25: [
        {answer: `Falcon`,
        points: 1},
        {answer: `Parrot`,
        points: 2},
        {answer: `Robin`,
        points: 3} 
    ],
    28: [
        {answer: `Sweet`,
        points: 1},
        {answer: `Savory`,
        points: 2},
        {answer: `Bitter`,
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
    },
    20: {
        1: `Oh…those dreadful creatures. Did you know stray cats have single handedly eliminated more than 6 endemic bird species and over 70 subspecies, as well as even some lizard species? Keep your cats inside, people.`,
        2: `Dogs are such good creatures. Never met a dog I don't enjoy thoroughly.`,
        3: `R-really? You aren't… humoring me, are you?`
    },
    23: {
        1: `Oh dear, this is awkward… You see, they don't usually let me into those expensive-type restaurants… or any indoor restaurants for that matter. On account of the birds. You know how it is.`,
        2: `A good night in with the one you love is always a special evening.`,
        3: `That sounds lovely. Maybe a picnic? Or a hike? Oh! There are some beautiful botanical gardens in this area. I've seen them already but they are always worth a re-visit.`
    },
    26: {
        1: `Ah yes… the falcon… See, I would never hate a bird, but for some reason I've never met a falcon that hasn't hated me. Granted I've only met one single falcon…maybe I should take a falconry class…`,
        2: `Incredibly intelligent creatures! Did you know they are actually omnivores? Some of them, I mean. In New Zealand, native Kea parrots were first observed attacking and killing sheep in 1868 and were persecuted as sheep-killers until 1986, when they were granted protected status. Fascinating. Terrifying.`,
        3: `The robin! An incredible little thing, this young one here on my [location] is named Trumpet, he's an American robin. They are one of my most common birds in all North America. If you'd like to attract more of them to your home, you can create small piles of leaf litter around your yard. Leaf litter attracts worms and other insects, those are the favorite food of robins!`
    },
    29 : {
        1: `Oh…unfortunately I am just not equipped for terribly sweet things…they make my teeth hurt…`,
        2: `Savory! A nice choice, a good cheddar and chive scone, perhaps?`,
        3: `After my own heart, are we? Not everyone is a fan of bitterness. Coffee, Negroni, the bitter taste of a nice deep dark chocolate. Ah, I'm daydreaming again. Do not mind me.`
    }
}

export { edwinText, edwinQuestions, edwinResponse }
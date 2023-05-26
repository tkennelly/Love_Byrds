let edwinText = {
    0: `Why, hello! My name is Holmen E. Byrds, but please feel free to call me Edwin.`, 
    1: `I don't particularly like long walks on the beach, but perhaps through a park? Or maybe down a city street on a nice cool evening.`,
    2: `But enough about me, I want to hear about you! I mean, of course I do, that's why we are both here, isn't it? 
    `,
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
    28: `(Choose your favorite type of food.)`,
    30: `Next! What is your greatest fear?`,
    31: `(Which of these scare you the most?)`,
    33: `Next! What is your idea of fun?`,
    34: `(Which of these activities is most fun to you?)`,
    36: `Ok, I'll give you a break from the rapid fire. Come real close, I'll give you a hard one….Have you ever done something really…really bad? Like, 'done time' bad?`,
    37: `(Have you ever been to jail?)`,
    39: `I myself just love to collect bookmarks of all shapes and sizes. Practical and pretty! Do you collect anything?`,
    40: `(Do you collect anything?)`,
    42: `So…I might as well ask…I promise they are friendly but, would you like to hold one of my birds?`,
    43: `(Hold one of Edwin's Birds?)`,
    45: `Final question, incredibly important. Hypothetically, if you returned home to find a bird, a common species for your area certainly, had made itself comfortable in your living room, how many times would that have to happen before you thought that maybe someone was perhaps putting the birds there intentionally?`,
    46: `How many single common birds would you be able to find in your house before you thought a human being was putting them there, and they were not making their way inside accidentally?`,
    48: `(You've finished! Click continue to see how you fared.)`
}

let edwinQuestions = {
    4: [
        {answer: `Blue`,
        points: 1},
        {answer: `Purple and Red`,
        points: 2},
        {answer: `Yellow and Green`,
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
        {answer: `You're attractive.`,
        points: 1},
        {answer: `You seem like a pretty interesting guy.`,
        points: 2},
        {answer: `The whole bird thing is pretty fascinating, I just had to get to know you more. You seem to have a lot of cool things to say and on top of that, you're not hard to look at.`,
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
    ],
    31: [
        {answer: `Scarecrows`,
        points: 3},
        {answer: `Spiders`,
        points: 1},
        {answer: `Heights`,
        points: 2} 
    ],
    34: [
        {answer: `Playing Video Games`,
        points: 1},
        {answer: `Reading a Book`,
        points: 3},
        {answer: `Going to a Party`,
        points: 2}
    ],
    37: [
        {answer: `I would never land myself in trouble.`,
        points: 1},
        {answer: `Have you?`,
        points: 3},
        {answer: `What are you, a cop?`,
        points: 2}
    ],
    40: [
        {answer: `Anything that catches my eye`,
        points: 3},
        {answer: `Practical items`,
        points: 2},
        {answer: `Nothing`,
        points: 1}
    ],
    43: [
        {answer: `I'd love to`,
        points: 3},
        {answer: `No.`,
        points: 1},
        {answer: `That's ok, I'll just look.`,
        points: 2}
    ],
    46: [
        {answer: `0-2`,
        points: 1},
        {answer: `3-5`,
        points: 3},
        {answer: `6+`,
        points: 2}
    ]
}

let edwinResponse = {
    5: {
        1: `Oh…did you know that true blue is the only color not found in nature? Blue Jays actually only look blue due to the structure of their feathers, which distort the reflection of light.`,
        2: `I suppose those are a nice colors, like lavender and roses.`,
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
        3: `The robin! An incredible little thing, this young one here on my shoulder is named Trumpet, he's an American robin. They are one of my most common birds in all North America. If you'd like to attract more of them to your home, you can create small piles of leaf litter around your yard. Leaf litter attracts worms and other insects, those are the favorite food of robins!`
    },
    29: {
        1: `Oh…unfortunately I am just not equipped for terribly sweet things…they make my teeth hurt…`,
        2: `Savory! A nice choice, a good cheddar and chive scone, perhaps?`,
        3: `After my own heart, are we? Not everyone is a fan of bitterness. Coffee, Negroni, the bitter taste of a nice deep dark chocolate. Ah, I'm daydreaming again. Do not mind me.`
    },
    32:  {
        1: `Oh come now, spiders aren't scary! They're good for the ecosystem, they eat other bugs and supply food for a multitude of other animals! Including some birds, if I may add…`,
        2: `A very rational fear, heights are scary!`,
        3: `You too!? Well, good to know I'm not alone! Can I let you in on a secret? …The Wizard of Oz…I swear that should be rated as a horror movie…`
    },
    35: {
        1: `Oh dear…I am dreadful at video games. Not sure why, but put a controller in my hand and the character will die instantly. Believe me, Animal Crossing was a nightmare.`,
        2: `A party, how fun. Friends and family and music and dancing. All things that are good for the soul.`,
        3: `You're a reader too? What genres? Oh I do love a good book, I've had my nose in The Capture by Kathryn Lasky recently. Always nice to revisit a classic series…`
    },
    38: {
        1: `Oh. Ok… aggressive…`,
        2: `Ha! Of course not. Could you imagine? These guys following me around are not very intimidating, are they? Plus, could you imagine me brandishing a gun? Let alone pulling it out on a near daily basis…`,
        3: `Uh…haha…well…funny story…I may have gotten arrested for…taking a penguin from the zoo…but it was all a misunderstanding! I promise! It followed me, I didn't even notice as I was leaving! I did, however, spend a whole 2 hours in the Zoo security office. That's right, you're talking to a man who's done cold hard time.`
    },
    41: {
        1: `Oh…how boring…did you know that if you press a leaf between dry sheets of paper, you can make an attractive and handy bookmark! Why don't you try that some time?`,
        2: `A decent answer. Collecting things that are needed for everyday life is a good habit to form!`,
        3: `Oh! Like precious items? Pretty rocks? Ornate trinkets? How lovely! A good eye-catching item is essential in one's life, and the more the merrier!`
    },
    44: {
        1: `Oh…ok.`,
        2: `Not fond of the hands-on approach? Totally fine! My birds don't mind the staring, that's for sure.`,
        3: `Fantastic! Take Cashew, he's a Black-Capped Chickadee! Did you know, the Black-Capped Chickadee has adapted to be able to remember thousands of hiding places, as it hides all its seeds and other food items to eat later in different spots every time!`
    },
    47: {
        1: `What, are you really so paranoid? Think that the world is out to get you? That someone out there is poised and at-the-ready to fill your house with common songbirds? Absurd.`,
        2: `Really? So many? And not for a second would you think that maybe someone might be putting them in there? Fascinating. Truly fascinating.`,
        3: `Now that is a practical answer! A few birds is a coincidence, but too many is an anomaly!`
    }
}

let endMsg = {
        good: {
            h: `You got the GOOD ending!`,
            p: `You and Edwin go on a lovely date. You visit the local botanical gardens and Edwin teaches your which flowers and plants will attract which local bird species. You get the feeling this is the bigging of a long and beautiful relationship.`
        },
        neutral: {
            h: `You got the NEUTRAL ending!`,
            p: `Edwin is not too sure about the two of you yet. "How about another go at it?" He asks you. Well, how about it?`
        },
        bad: {
            h: `You got the BAD ending!`,
            p: `You two are, simply put, a horrible match. Maybe pay more attention to what HE likes next time.`
        }
}

export { edwinText, edwinQuestions, edwinResponse, endMsg }
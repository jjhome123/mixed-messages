let qArr = [
    'Which',
    'What do',
    'When do',
    'Where do',
    'Why do'    
];//end of qArr

let subjectArr = [
    'seals',
    'dogs',
    'birds',
    'cats',
    'elephants',
    'tigers',
    'lions',
    'fish',
    'pandas',
    'whales',
    'humans'
]//end of subjectArr

let vArr1 = [
    'like',
    'love',
    'hate',
    'refuse',
    'fail',
    'happen',
    'agree',
    'disagree',
    'admit',
    'attempt',
    'hesitate'
]//end of vArr1

let vArr2 = [
    'to eat',
    'to drink',
    'to dream of',
    'to experiment with',
    'to explore',
    'to expect',
    'to doubt',
    'to fry',
    'to boil',
    'to bake'
]//end of vArr2

let nArr = [
    'cookies',
    'surprises',
    'juice',
    'alcohol',
    'sexuality',
    "mom's spaghetti",
    'diamonds',
    'investment',
    'money',
    'genetics'
]//end of nArr

let tArr = [
    'at night',
    'at midnight',
    'in the middle of the night',
    'in the afternoon',
    'at noon',
    'in the early morning',
    'at 1am',
    'at 2am',
    'at 3am',
    'at 4am',
    'at 5am',
    'at 6am',
    'at 7am',
    'at 8am',
    'at 9am',
    'at 10am',
    'at 11am',
    'at 12pm',
    'at 1pm',
    'at 2pm',
    'at 3pm',
    'at 4pm',
    'at 5pm',
    'at 6pm',
    'at 7pm',
    'at 8pm',
    'at 9pm',
    'at 10pm',
    'at 11pm'
]//end of tArr

let adjArr = [
    'silly',
    'dumb',
    'clever',
    'stupid',
    'generous',
    "lazy",
    'tall',
    'short',
    'insane',
    'crazy'
]//end of adjArr

let placeArr = [
    'In Cairo',
    'In Tokyo',
    'In Sydney',
    'In Portland',
    'In San Francisco',
    'In New York City',
    'On Mars',
    'On Pluto!'
]

const randomJokeSetup = (qArr,subjectArr,vArr1,vArr2,nArr,tArr,adjArr,placeArr) => {
    qArr = qArr[Math.floor(Math.random()*qArr.length)];
    subjectArr = subjectArr[Math.floor(Math.random()*subjectArr.length)];
    vArr1 = vArr1[Math.floor(Math.random()*vArr1.length)];
    vArr2 = vArr2[Math.floor(Math.random()*vArr2.length)];
    nArr = nArr[Math.floor(Math.random()*nArr.length)];
    tArr = tArr[Math.floor(Math.random()*tArr.length)];
    adjArr = adjArr[Math.floor(Math.random()*adjArr.length)];
    placeArr = placeArr[Math.floor(Math.random()*placeArr.length)];
    
    if(qArr === 'What do'){
        console.log(`${qArr} ${subjectArr} ${vArr1} ${vArr2} ${tArr}?`);
        console.log(`${nArr}!`);
    }    
    else if(qArr === 'Where do'){
        console.log(`${qArr} ${subjectArr} ${vArr1} ${vArr2} ${nArr} ${tArr}?`);
        console.log(`${placeArr}!`);
    }
    else if (qArr === 'Why do'){     
        console.log(`${qArr} ${subjectArr} ${vArr1} ${vArr2} ${nArr} ${tArr}?`);
        console.log(`Because they ${vArr1} ${vArr2} ${nArr}!`);
    }
    else if (qArr === 'When do'){
        console.log(`${qArr} ${subjectArr} ${vArr1} ${vArr2} ${nArr}?`);
        console.log(`Usually ${tArr}!`);
    }
    else if (qArr === 'Which'){
        console.log(`${qArr} ${subjectArr} ${vArr1} ${vArr2} ${nArr} ${tArr}`);
        console.log(`The ${adjArr} ones!`);
    }
};

randomJokeSetup(qArr,subjectArr,vArr1,vArr2,nArr,tArr,adjArr,placeArr);

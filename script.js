let questions = {
    pipes: [{ question: "What is the formula for the flow rate?", options: ["Q = A * v", "Q = A / v", "Q = A + v", "Q = A - v"], answer: 0 },
    { question: "If two pipes can fill a tank in 6 hours and 9 hours respectively, how long will both take together?", options: ["3.6 hours", "4 hours", "5 hours", "3 hours"], answer: 1 },
    { question: "Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened together, the time taken to fill the tank is?" , options: ["50 min", "12 min", "25 min", "15 min"], answer: 1 },
    { question: "Two pipes can fill a cistern separately in 10 hours and 15 hours. They can together fill the cistern in?" , options: ["6 hours", "7 hours", "8 hours", "9 hours"], answer: 1},
    { question: "If 3/5 th of a cistern is filled in 1 minute, the time needed to fill the rest is?", options: ["40 sec", "30 sec", "36 sec", "24 sec"], answer: 1 },
    { question: "If 1/3 of a tank holds 80 litres of water, then the quantity of water that 1/2 tank holds is?", options: ["240 litres", "120 litres", "80/3 litres", "100 litres"], answer: 1 },
    { question: "3/4 part of a tank is full of water. When 30 litres of water is taken out, the tank becomes empty. The capacity of the tank is?", options: ["36 litres", "42 litres", "40 litres", "38 litres"], answer: 1 },
    { question: "A tap drips at a rate of one drop/ sec. 600 drops make 100ml. The number of litres wasted in 300 days is?", options: ["4320000 ", "432000 ", "43200 ", "4320 "], answer: 1 },
    { question: "A cistern is provided with two pipes A and B. A can fill it in 20 minutes and B can empty it in 30 minutes. If A and B be kept open alternately for one minute each, how soon will the cistern be filled?", options: ["121 minutes","110 minutes","115 minutes","120 minutes"], answer: 1},
    { question: "Three taps A, B, C can fill an overhead tank in 4, 6 and 12 hours respectively. How long would the three taps take to fill the tank if all of them are opened together?", options: ["2 hours", "4 hours", "3 hours", "5 hours"], answer: 1},
        // Add questions and options for Pipes and Cisterns
    ],
    probability: [{ question: "What is the probability of flipping a head?", options: ["0.5", "1", "0", "0.25"], answer: 0 },
    { question: "If a bag contains 3 red and 2 blue balls, what is the probability of drawing a red ball?", options: ["2/5", "3/5", "1/5", "4/5"], answer: 1 },
    { question: "What is the probability of flipping a fair coin and getting heads?", options: ["1/2", "1/4", "1/3", "1/6"], answer: 0 },
    { question: "If you roll two dice, what is the probability of rolling a total of 8?", options: ["5/36", "1/6", "1/12", "1/2"], answer: 0 },
    { question: "What is the probability of drawing a heart from a standard deck of cards?", option: ["1/4", "1/13", "1/52", "1/13"], answer: 0 },
    { question: "In a bag with 6 red, 4 blue, and 2 green marbles, what is the probability of drawing a green marble?", option: ["1/6", "1/3", "1/12", "1/2"], answer: 0 },
    { question: "If the probability of an event is 0.25, what is the probability that the event does not occur?", option: ["0.75", "0.25", "0.50", "1.00"], answer: 0 },
    { question: "What is the probability of picking a king from a standard deck of cards?", option: ["1/13", "1/52", "1/26", "1/4"], answer: 0 },
    { question: "When rolling a fair six-sided die, what is the probability of rolling a number less than 3?", option: ["1/6", "1/3", "1/2", "1/4"], answer: 0 },
    { question: "If you have a standard deck of cards, what is the probability of drawing a queen?", option: ["1/52", "1/13", "1/26", "1/4"], answer: 0 },
        // Add questions and options for Probability
    ],
    age: [{ question: "If a person is 20 years old now, how old will they be in 10 years?", options: ["30", "20", "40", "25"], answer: 0 },
        { question: "A is twice as old as B. If B is 10, how old is A?", options: ["20", "15", "10", "25"], answer: 0 },
        { question: "If John is twice as old as Mary and their ages add up to 36, how old is John?", options: ["12", "18", "24", "30"], answer: 0 },
        { question: "A father is 4 times as old as his son. If the sum of their ages is 40, how old is the son?", options: ["8", "10", "12", "16"], answer: 0 },
        { question: "Five years ago, Alice was 3 times as old as her brother. If Alice is now 20, how old is her brother now?", options: ["5", "10", "15", "20"], answer: 0 },
        { question: "In 10 years, Sam will be 3 times as old as he was 10 years ago. How old is Sam now?", options: ["10", "15", "20", "25"], answer: 0 },
        { question: "If the present age of a man is 40 years and his son is 10 years old, how many years later will the man be twice as old as his son?", options: ["10", "15", "20", "25"], answer: 0 },
        { question: "Two years ago, the age of Sarah was 5 years less than her brother's age. If Sarah is now 12, how old is her brother now?", options: ["10", "15", "17", "19"], answer: 0 },
        { question: "The sum of the ages of a mother and her daughter is 50 years. If the mother is 4 times as old as her daughter, how old is the daughter?", options: ["10", "15", "20", "25"], answer: 0 },
        { question: "If Mark is 5 years younger than his sister and the sum of their ages is 30, how old is Mark?", options: ["10", "12", "15", "20"], answer: 0 },
        // Add questions and options for Problems on Age
    ],
    profit: [{question: "If selling price is doubled, the profit triples. Find the profit percent?" , options: ["100%", "200%", "300%", "400%"], answer: 0 },
        { question: "If the cost price of 12 pens is equal to the selling price of 8 pens, the gain percent is?", options: ["12%", "30%", "50%", "60%"], answer: 0 }, 
        { question: "If a shirt is sold for $50 and the cost price is $40, what is the profit percentage?", options: ["20%", "25%", "30%", "40%"], answer: 0 },
        { question: "A shopkeeper buys an item for $80 and sells it for $100. What is the profit earned?", options: ["$10", "$15", "$20", "$25"], answer: 0 },
        { question: "If the cost price of a watch is $200 and it is sold at a loss of 10%, what is the selling price?", options: ["$180", "$190", "$200", "$210"], answer: 0 },
        { question: "A seller marks a price of $120 on an item and offers a discount of 15%. What is the selling price after the discount?", options: ["$100", "$102", "$105", "$110"], answer: 0 },
        { question: "If a book is sold for $90 after a 10% loss, what was the cost price?", options: ["$100", "$110", "$120", "$130"], answer: 0 },
        { question: "A dealer bought a bicycle for $150 and sold it for $180. What is the profit percentage?", options: ["15%", "20%", "25%", "30%"], answer: 0 },
        { question: "If a retailer sells a product at a profit of 25% and the selling price is $125, what is the cost price?", options: ["$100", "$110", "$120", "$130"], answer: 0 },
        { question: "A product is bought for $200 and sold for $160. What is the loss percentage?", options: ["15%", "20%", "25%", "30%"], answer: 0 },
        // Add questions and options for Profit and Loss
    ]
};

let currentCategory;
let currentQuestionIndex = 0;
let score = 0;
let timer;
let totalTime = 60; // 60 seconds for the quiz

function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('home').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const questionData = questions[currentCategory][currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    document.getElementById('question-number').innerText = `Question: ${currentQuestionIndex + 1}`;
}

function selectAnswer(selectedIndex) {
    const questionData = questions[currentCategory][currentQuestionIndex];
    if (selectedIndex === questionData.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timer = setInterval(() => {
        totalTime--;
        document.getElementById('timer').innerText = `Time: ${totalTime}`;
        if (totalTime <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('result-name').innerText = document.getElementById('name').value || 'Participant';
    document.getElementById('total-time').innerText = 60 - totalTime;
    document.getElementById('total-questions').innerText = questions[currentCategory].length;
    document.getElementById('correct-answers').innerText = score;
    document.getElementById('wrong-answers').innerText = questions[currentCategory].length - score;
    document.getElementById('percentage').innerText = (score / questions[currentCategory].length * 100).toFixed(2);
}

function restart() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
    totalTime = 60;
}

function goHome() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
}


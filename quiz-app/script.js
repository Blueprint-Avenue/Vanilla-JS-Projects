const quizData = [
	{
		question: "Do they have a Fourth of July in England?",
		a: "Yes",
		b: "No",
		c: "Maybe",
		d: "They're England",
		correct: "a",
	},
	{
		question:
			"If a red house is made from red bricks, a blue house is made from blue bricks, a pink house is made from pink bricks, and a black house is made from black bricks. What is a greenhouse made from?",
		a: "Wood",
		b: "Moss covered stones",
		c: "Glass",
		d: "Green Bricks",
		correct: "c",
	},
	{
		question: "What is heavier? A pound of cotton or a pound of iron?",
		a: "A pound of iron",
		b: "A pound of cotton",
		c: "Both are the same weight",
		d: "We cannot calculate it",
		correct: "c",
	},
	{
		question:
			"Some months have 31 days, and some months have 30 days. But how many have 28 days?",
		a: "1",
		b: "8",
		c: "4",
		d: "12",
		correct: "d",
	},
	{
		question:
			"John digs a hole that is 2 yards wide, 3 yards long, and 1 yard deep. How many cubic feet of dirt are in it?",
		a: "0",
		b: "2",
		c: "3",
		d: "5",
		correct: "a",
	},
	{
		question:
			"You are participating in a race. You've just passed the second person. What position are you now in?",
		a: "1st",
		b: "2nd",
		c: "3rd",
		d: "4th",
		correct: "b",
	},
	{
		question: "Where did the real Boston Tea Party take place?",
		a: "New York",
		b: "Boston",
		c: "Los Angeles",
		d: "Chicago",
		correct: "b",
	},
	{
		question: "How many continents are there in total?",
		a: "4",
		b: "5",
		c: "6",
		d: "7",
		correct: "d",
	},
];

const answers = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();
	const currentQuizData = quizData[currentQuiz];

	questionEl.innerHTML = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected() {
	let answer = undefined;

	answers.forEach((answers) => {
		if (answers.checked) {
			answer = answers.id;
		}
	});
	return answer;
}

function deselectAnswers() {
	answers.forEach((answers) => {
		answers.checked = false;
	});
}

submitBtn.addEventListener("click", () => {
	// check to see the answer
	const answer = getSelected();
	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}
		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `<h2>You Answered correctly ${score} out of ${quizData.length} questions</h2> <button onclick="location.reload()">Reload</button>`;
		}
	}
});

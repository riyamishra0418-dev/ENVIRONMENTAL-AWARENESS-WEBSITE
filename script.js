
/* EcoSphere — script.js */

// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// 2. LIGHT AND DARK MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark");

    themeBtn.textContent = isDark ? "☀️" : "🌙";

    themeBtn.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
});


// 3. THE LITTLE PLANET POST — NEWS SLIDESHOW

const ecoStories = [
    {
        date: "INDIA · COMMUNITY ACTION",
        title: "A Young Man Takes Action for His River",
        subtitle: "One person's determination drew attention to a local pollution problem.",
        image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1000&q=85",
        alt: "River and green natural landscape",
        caption: "Local environmental action can inspire wider awareness.",
        description: "In 2026, reports highlighted Surendra Singh Choudhary, known online as Bittu Tabahi, for efforts to clean polluted stretches of the Ajnar River in Madhya Pradesh. His work brought attention to the importance of protecting local waterways.",
        link: "https://www.ndtv.com/india-news/who-is-bittu-tabahi-21-year-olds-river-cleaning-effort-gets-job-offer-from-dutch-ngo-12006019",
        linkText: "Read the NDTV report ↗"
    },
    {
        date: "NIGERIA · MANGROVE RESTORATION",
        title: "Community Efforts Help Mangroves Grow Back",
        subtitle: "Local conservation work is helping damaged coastal habitats recover.",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=85",
        alt: "Sunlight shining through trees",
        caption: "Healthy coastal habitats support people and wildlife.",
        description: "The Lokiaka Community Development Centre has been associated with community-led mangrove restoration in Nigeria's Niger Delta. Mangroves provide wildlife habitat, store carbon and can help protect shorelines. Open the linked coverage for the reported project details.",
        link: "https://timesofindia.indiatimes.com/world/rest-of-world/in-nigerias-oil-hit-niger-delta-women-planted-more-than-3-million-mangroves-190-hectares-of-bare-swamp-forest-came-back-green/articleshow/134702149.cms",
        linkText: "Read the Times of India report ↗"
    },
    {
        date: "GLOBAL · OCEAN CONSERVATION",
        title: "A Mission to Stop Plastic Reaching the Ocean",
        subtitle: "Engineers and environmental teams are developing ways to tackle plastic pollution.",
        image: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=1000&q=85",
        alt: "Blue ocean water",
        caption: "Preventing waste from entering waterways is part of the solution.",
        description: "The Ocean Cleanup develops technologies designed to remove plastic from rivers and the ocean. Its work also underlines the need to prevent waste at its source, improve collection systems and reduce avoidable plastic use.",
        link: "https://theoceancleanup.com/",
        linkText: "Visit The Ocean Cleanup ↗"
    }
];

let storyIndex = 0;

const storyDate = document.getElementById("storyDate");
const storyTitle = document.getElementById("storyTitle");
const storySubtitle = document.getElementById("storySubtitle");
const storyImage = document.getElementById("storyImage");
const storyCaption = document.getElementById("storyCaption");
const storyDescription = document.getElementById("storyDescription");
const storyLink = document.getElementById("storyLink");
const newsPaper = document.getElementById("newsPaper");
const slideDots = document.getElementById("slideDots");

function showStory(index) {
    storyIndex = (index + ecoStories.length) % ecoStories.length;

    const story = ecoStories[storyIndex];

    storyDate.textContent = story.date;
    storyTitle.textContent = story.title;
    storySubtitle.textContent = story.subtitle;

    storyImage.src = story.image;
    storyImage.alt = story.alt;

    storyCaption.textContent = story.caption;
    storyDescription.textContent = story.description;

    storyLink.href = story.link;
    storyLink.textContent = story.linkText;

    // Replay the newspaper animation.
    newsPaper.style.animation = "none";
    void newsPaper.offsetWidth;
    newsPaper.style.animation = "paperAppear .35s ease";

    // Highlight the currently selected story dot.
    document.querySelectorAll(".slide-dot").forEach(function (dot, i) {
        const active = i === storyIndex;

        dot.classList.toggle("active", active);
        dot.setAttribute("aria-pressed", String(active));
    });
}

// Create a clickable dot for every story.
ecoStories.forEach(function (story, index) {
    const dot = document.createElement("button");

    dot.className = "slide-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", "Show story " + (index + 1));

    dot.addEventListener("click", function () {
        showStory(index);
    });

    slideDots.appendChild(dot);
});

// Previous and next buttons.
document.getElementById("prevStory").addEventListener("click", function () {
    showStory(storyIndex - 1);
});

document.getElementById("nextStory").addEventListener("click", function () {
    showStory(storyIndex + 1);
});

// Display the first story when the page loads.
showStory(0);


// 4. LITTLE GREEN WONDERS — INTERACTIVE FACTS

const wonderCards = document.querySelectorAll(".wonder-card");
const factPopup = document.getElementById("factPopup");
const factText = document.getElementById("factText");

wonderCards.forEach(function (card) {
    card.addEventListener("click", function () {
        factText.textContent = card.dataset.fact;
        factPopup.hidden = false;

        factPopup.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });
});

document.getElementById("closeFact").addEventListener("click", function () {
    factPopup.hidden = true;
});


// 5. ENVIRONMENTAL AWARENESS QUIZ

const questions = [
    {
        question: "Which action helps reduce plastic waste?",
        options: [
            "Using reusable bags",
            "Using more plastic bags",
            "Throwing plastic anywhere"
        ],
        answer: 0
    },
    {
        question: "Where should old batteries go?",
        options: [
            "Into a river",
            "To a designated collection point",
            "Into a fire"
        ],
        answer: 1
    },
    {
        question: "Which action saves electricity?",
        options: [
            "Leaving lights on",
            "Running unused devices",
            "Switching off unused lights"
        ],
        answer: 2
    },
    {
        question: "What can suitable food scraps become?",
        options: [
            "Compost",
            "Plastic",
            "Metal"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionText = document.getElementById("question");
const quizCount = document.getElementById("quizCount");
const quizOptions = document.getElementById("quizOptions");
const quizResult = document.getElementById("quizResult");
const scoreText = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const restartQuiz = document.getElementById("restartQuiz");

function loadQuestion() {
    const q = questions[currentQuestion];

    questionText.textContent = q.question;

    quizCount.textContent =
        "QUESTION " + (currentQuestion + 1) +
        " OF " + questions.length;

    quizOptions.innerHTML = "";

    q.options.forEach(function (answerText, index) {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "option";
        button.textContent = answerText;

        button.addEventListener("click", function () {
            checkAnswer(index, button);
        });

        quizOptions.appendChild(button);
    });

    quizResult.textContent = "";
    nextBtn.hidden = true;
    restartQuiz.hidden = true;
    answered = false;

    scoreText.textContent =
        "Score: " + score + " / " + questions.length;
}

function checkAnswer(selectedIndex, selectedButton) {
    if (answered) {
        return;
    }

    answered = true;

    const correctIndex = questions[currentQuestion].answer;
    const buttons = quizOptions.querySelectorAll(".option");

    buttons.forEach(function (button) {
        button.disabled = true;
    });

    if (selectedIndex === correctIndex) {
        score++;

        quizResult.textContent = "Correct! Great job 🌱";
        selectedButton.classList.add("correct");
    } else {
        quizResult.textContent =
            "Not quite! The correct answer is: " +
            questions[currentQuestion].options[correctIndex];

        selectedButton.classList.add("wrong");
        buttons[correctIndex].classList.add("correct");
    }

    scoreText.textContent =
        "Score: " + score + " / " + questions.length;

    if (currentQuestion < questions.length - 1) {
        nextBtn.hidden = false;
    } else {
        restartQuiz.hidden = false;
        quizResult.textContent += " Quiz complete!";
    }
}

nextBtn.addEventListener("click", function () {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
});

restartQuiz.addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
});

// Load the first question.
loadQuestion();


// 6. GREEN PLEDGE FORM

const pledgeForm = document.getElementById("pledgeForm");
const pledgeMessage = document.getElementById("pledgeMessage");

pledgeForm.addEventListener("submit", function (event) {
    // Stop the page from refreshing on form submission.
    event.preventDefault();

    const name = document.getElementById("visitorName").value.trim();
    const habit = document.getElementById("pledgeChoice").value;

    if (!name || !habit) {
        pledgeMessage.textContent =
            "Please enter your name and choose a habit.";
        return;
    }

    pledgeMessage.textContent =
        "Thank you, " + name + "! 💚 Your pledge: " +
        habit + ". Every small action matters!";

    pledgeForm.reset();
});

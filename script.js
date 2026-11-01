
const words = [
    "بحبك ❤️",
    "I Love You ❤️",
    "Je t'aime ❤️",
    "Te Amo ❤️",
    "Ti Amo ❤️",
    "Ich Liebe Dich ❤️",
    "愛してる ❤️",
    "사랑해 ❤️",
    "Я тебя люблю ❤️",
    "Seni Seviyorum ❤️",
    "Eu Te Amo ❤️",
    "我爱你 ❤️",
    "أحبك ❤️",
    "Kocham Cię ❤️",
    "Ik Hou Van Jou ❤️",
    "Miluji Tě ❤️",
    "Σ' αγαπώ ❤️",
    "ฉันรักคุณ ❤️"
];

let index = 0;
const loveText = document.getElementById("loveText");

setInterval(() => {
    loveText.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % words.length;
        loveText.textContent = words[index];
        loveText.style.opacity = 1;
    }, 400);

}, 2000);

// Open message
function showMessage() {
    document.getElementById("messageBox")
        .classList.add("show");
}

// Close message
function closeMessage() {
    document.getElementById("messageBox")
        .classList.remove("show");
}

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.textContent = ["❤️", "💕", "💗", "💖"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.getElementById("hearts")
        .appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);
/* This took me far too long (I have little/no experience in JS) */

var quoteTable = [
    "Even monkeys can fall from trees", "Anonymous (Japanese Proverb)",
    "Appear weak when you are strong, and strong when you are weak", "Sun Tzu",
    "Fall seven times, stand up eight", "Anonymous (Japanese Proverb)",
    "The best time to plant a tree was a hundred years ago. The second best time is now.", "Anonymous (Japanese Proverb)",
    "Consideration for others is the basic of a good life, a good society.", "Kong Fuzi (Confucious)",
    "Everything has beauty, but not everyone sees it.", "Kong Fuzi (Confucious)",
    "Don't become a Buddhist: the world doesn't need more Buddhists. Do practice compassion: the world needs more compassion.", "Tenzin Gyatso (14th Dalai Lama)",
    "It is precisely when we have suffered defeat that we can determine to win and open the path to future victory.", "Daisaku Ikeda",
    "Emptiness, which is conceptually liable to be mistaken for sheer nothingness, is in fact the reservoir of infinite possibilities.", "Daisetsu Teitaro Suzuki"
];

const quote = document.querySelector("#quote");
const sayer = document.querySelector("#sayer");
const rand = randint(quoteTable.length);

function randint(max) {
    return Math.floor(Math.random() * max);
}

/* Prevent table from bugging out at boundaries by using *
 * different logic for odd and even */

if (rand % 2 == 0) {
    quote.innerHTML = quoteTable[parseInt(rand)];
    sayer.innerHTML = quoteTable[parseInt(rand) + 1];
};

if (rand % 2 == 1) {
    quote.innerHTML = quoteTable[parseInt(rand) - 1];
    sayer.innerHTML = quoteTable[parseInt(rand)];
};
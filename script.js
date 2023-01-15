var quotes = ['Even monkeys can fall from trees', 'Appear weak when you are strong, and strong when you are weak', 'Fall seven times, stand up eight', 'The best time to plant a tree was a hundred years ago. The second best time is now.', 'Consideration for others is the basic of a good life, a good society.', 'Everything has beauty, but not everyone sees it.', "Don't become a Buddhist: the world doesn't need more Buddhists. Practice compassion: the world needs more compassion.", "It is precisely when we have suffered defeat that we can determine to win and open the path to future victory.", "Emptiness, which is conceptually liable to be mistaken for sheer nothingness, is in fact the reservoir of infinite possibilities."];
var sayers = ['Japanese Proverb',  'Sun Tzu', 'Japanese Proverb', 'Japanese Proverb', 'Kong Fuzi (Confucious)', 'Kong Fuzi (Confucious)',  'Tenzin Gyatso (14th Dalai Lama)',  'Daisaku Ikeda',  'Daisetsu Teitaro Suzuki']

var quoteText = document.getElementById("quote");
var sayerText = document.getElementById("sayer");
var randint = Math.floor(Math.random * quotes.length);

function quoteGenerate() {
    quoteText.textContent= 'quoteText';
}

function sayerGenerate() {
    sayerText.textContent= 'sayerText';    
}
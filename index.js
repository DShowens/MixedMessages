// Start of the code for Mixed Messges project from Codecademy

const movie = [
"Star Wars", 
"Titanic", 
"E.T. the Extra-Terrestrial",
"Finding Nemo",
"Back to the Future",
"Babe",
"Toy Story",
"The Sandlot",
"The Terminator",
"Top Gun"
]

const character = [
"Obi-Wan Kenobi", 
"Jack Dawson", 
"E.T.",
"Dory",
"Doc",
"Arthur Hoggett",
"Buzz Lightyear",
"Hamilton 'Ham' Porter",
"Terminator",
"Maverick"
]

const movieQuote = [
"May the Force be with you.", 
"I'm the king of the world!",
"E.T. phone home.",
"Just keep swimming.",
"Roads?  Where we,re going we don't need roads.",
"That'll do, pig.",
"To infinity and beyond!",
"You're killing me, Smalls.",
"I'll be back.",
"I feel the need - the need for speed!"
]

function randomGenerator(movie, character, movieQuote) {
    let movieChoice = movie[(Math.floor(Math.random()*movie.length))];
    let characterChoice = character[(Math.floor(Math.random()*movie.length))];
    let movieQuoteChoice = movieQuote[(Math.floor(Math.random()*movie.length))];


    console.log(
    `
    Perhaps the movie "${movieChoice}", should have had the quote: 
    "${movieQuoteChoice}" 
    with the character "${characterChoice}" saying the line. 
    `)   
};

randomGenerator(movie, character, movieQuote);

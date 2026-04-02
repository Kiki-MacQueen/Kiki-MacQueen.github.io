const newQuoteButton = document.querySelector('#js-new-quote');
const answerButton = document.querySelector('#js-tweet');

const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

let currentAnswer = '';

function displayQuote(question) {
  document.querySelector('#js-quote-text').textContent = question;
  document.querySelector('#js-answer-text').textContent = '';
}

function getQuote() {
  fetch(apiEndpoint)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      currentAnswer = data.answer;
      displayQuote(data.question);
    })
    .catch(function(error) {
      console.error('Error fetching trivia:', error);
      alert('Failed to fetch trivia. Please try again.');
    });
}

newQuoteButton.addEventListener('click', getQuote);

answerButton.addEventListener('click', function() {
  document.querySelector('#js-answer-text').textContent = currentAnswer;
});

getQuote();

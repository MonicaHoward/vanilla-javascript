var likeButton = document.querySelector('#like-button');
var likeCount = document.querySelector('#like-count');
var currentCount = 0;

likeButton.addEventListener('click', function() {
  currentCount += 1;
  likeCount.textContent = currentCount;
});

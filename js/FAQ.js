const questions = document.querySelectorAll('.article-container');


questions.forEach(function (question) {

  const plusBtn = question.querySelector('.plus-icon');
  const minusBtn = question.querySelector('.minus-icon');
  const ans=question.querySelector('.ans');

  plusBtn.addEventListener('click', function (e) {
    minusBtn.classList.add('show-minus');
    plusBtn.classList.add('remove-plus')
    ans.classList.add('show-ans');
  })
  minusBtn.addEventListener('click', function (e) {
    minusBtn.classList.remove('show-minus');
    plusBtn.classList.remove('remove-plus')
    ans.classList.remove('show-ans');
  })

});
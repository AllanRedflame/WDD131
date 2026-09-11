const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');



button.addEventListener('click', function() {
  // Code to execute when the button is clicked
  if (input.value.trim() !== '') {
    li.innerText = input.value;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    li.append(li);
   }

    deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});


});


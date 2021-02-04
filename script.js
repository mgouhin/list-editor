const listTitle = document.querySelector('h1');
const addItemBtn = document.querySelector('.add-item-btn');
const list = document.querySelector('ul');

alert('need to update button & input styles');
//alert('update so add item button is always at the list bottom');

function editText(e) {
  // store the current target text and hide the target text
  let currentTextElement = e.target;
  let currentText = currentTextElement.textContent;

  // create an input dialog set initial text to the current text
  let inputDialog = document.createElement('input');
  inputDialog.setAttribute('type', 'text');
  inputDialog.setAttribute('value', currentText);
  inputDialog.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      // grab the input text and set it as the new title
      currentTextElement.textContent = inputDialog.value.trim();

      // remove the input box
      inputDialog.remove();

      // display the new title
      currentTextElement.style.display = 'block';
    }
  });
  inputDialog.addEventListener('blur', (e) => {
    // grab the input text and set it as the new title
    currentTextElement.textContent = inputDialog.value.trim();

    // remove the input box
    inputDialog.remove();

    // display the new title
    currentTextElement.style.display = 'block';
  });

  currentTextElement.insertAdjacentElement('afterend', inputDialog);
  currentTextElement.style.display = 'none';

  inputDialog.focus();
  inputDialog.select();
}

listTitle.addEventListener('click', editText);

addItemBtn.addEventListener('click', () => {
  let newItemContainer = document.createElement('li');
  let itemSpan = document.createElement('span');
  let itemDeleteBtn = document.createElement('button');

  itemSpan.textContent = 'new item';
  itemSpan.addEventListener('click', editText);

  itemDeleteBtn.textContent = ' X ';
  itemDeleteBtn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });

  newItemContainer.appendChild(itemSpan);
  newItemContainer.appendChild(itemDeleteBtn);
  list.appendChild(newItemContainer);
  newItemContainer.insertAdjacentElement('afterend', addItemBtn.parentNode);
});
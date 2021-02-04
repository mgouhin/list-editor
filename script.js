const pageTitle = document.querySelector('title');
const listTitle = document.querySelector('h1');
const addItemBtn = document.querySelector('.add-item-btn');
const list = document.querySelector('ul');

// start new item with text box and focus
// update styles for buttons and input texts

function editText(e) {
  // store the current target text and hide the target text
  let currentTextElement = e.target;
  let currentText = currentTextElement.textContent;

  // create an input dialog set initial text to the current text
  let inputDialog = document.createElement('input');
  inputDialog.setAttribute('type', 'text');
  inputDialog.setAttribute('value', currentText);
  inputDialog.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter') && (inputDialog.value.trim().length >= 1)) {
      // grab the input text and set it as the new title
      currentTextElement.textContent = inputDialog.value.trim();

      // if the list title changes, change the page title as well
      if (currentTextElement.nodeName === 'H1') {
        pageTitle.textContent = inputDialog.value.trim();
      }

      // remove the input box
      inputDialog.remove();

      // display the new title
      currentTextElement.style.display = 'block';
    }
  });
  inputDialog.addEventListener('blur', (e) => {
    if (inputDialog.value.trim().length >= 1) {
      // grab the input text and set it as the new text
      currentTextElement.textContent = inputDialog.value.trim();

      // remove the input box
      inputDialog.remove();

      // display the new text
      currentTextElement.style.display = 'block';
    }
  });

  currentTextElement.insertAdjacentElement('afterend', inputDialog);
  currentTextElement.style.display = 'none';

  inputDialog.focus();
  inputDialog.select();
}

listTitle.addEventListener('click', editText);

addItemBtn.addEventListener('click', () => {
  // creating a li with span/text and a delete button
  let newItemContainer = document.createElement('li');
  let itemSpan = document.createElement('span');
  let itemDeleteBtn = document.createElement('button');

  itemSpan.textContent = 'new item';
  itemSpan.addEventListener('click', editText);

  itemDeleteBtn.textContent = ' X ';
  itemDeleteBtn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });

  // adds the new list item and moves the '+ item' button to the end of the list
  newItemContainer.appendChild(itemSpan);
  newItemContainer.appendChild(itemDeleteBtn);
  list.appendChild(newItemContainer);
  newItemContainer.insertAdjacentElement('afterend', addItemBtn.parentNode);

  // creates a click event on the new list item, therby prompting user
  // for new text
  const selectText = new MouseEvent('click');
  newItemContainer.dispatchEvent(selectText);
});
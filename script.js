'use strict';

const list = document.createElement('ul');

const addTitle = () => {
  const title = document.createElement('h1');
  title.innerText = 'Created list:';
  document.body.prepend(title);
};

const addList = () => {
  document.body.append(list);
};

const createItemInList = (content) => {
  const newItem = document.createElement('li');
  newItem.textContent = content;
  list.append(newItem);
};

const removeLastItemInList = () => {
  list.lastElementChild.remove();
};

const clearList = () => {
  const itemsList = document.querySelectorAll('ul li');
  for (const item of itemsList) {
    item.remove();
  }
};

const readUserInput = () => {
  const userInput = prompt('Введите пункт списка');

  switch (true) {
    case userInput === null:
    case userInput === 'exit':
      return false;
    case userInput === '':
    case userInput.trim() === '':
      return true;
    case userInput === 'del':
      removeLastItemInList();
      return true;
    case userInput === 'clear':
      clearList();
      return true;
    default:
      createItemInList(userInput);
      return true;
  }
};

const listEditing = () => {
  if (!readUserInput()) {
    if (list.childNodes.length > 0) addTitle();
    return;
  }
  listEditing();
};

addList();
listEditing();

console.log(list);


/* Новые элементы должны добавляться в список по нажатию на Enter */

const inputElement = document.querySelector('#input');

inputElement.addEventListener('keydown', function(event){

  if (event.key == 'Enter') {
    if(inputElement.value != '') {
      const newElement = document.createElement('li');
      newElement.textContent = inputElement.value;
      
      newElement.addEventListener('click', function() {
        newElement.classList.toggle('done');
      });

      const itemsContainer = document.querySelector('.items');
      itemsContainer.append(newElement);

      inputElement.value = '';
  } }

} );


/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */


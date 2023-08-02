/*var input = document.getElementById("text");
var output = document.getElementById("copied-element");
const btn = document.getElementById("enter-button");

btn.addEventListener('click', event => {
    printCopied();
})

function printCopied() {
    output.innerHTML = input.value;
}

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        alert('hi');
        document.getElementById("enter-button").click();
    }
});*/

function render() {
    document.getElementById('text');
    document.getElementById('copied-list').innerHTML = '';
  
    copied.forEach(function (copy) {
      let element = document.createElement('div');
      element.classList = "copied-element";
      element.innerText = copy.title;
  
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.innerText = 'Delete';
      deleteButton.onclick = deleteCopy;
      deleteButton.id = copy.id;
      element.appendChild(deleteButton);
  
      const copyList = document.getElementById('copied-list');
      copyList.appendChild(element);
    });
  }
  
  let copied;
  
  const savedcopied = JSON.parse(localStorage.getItem('copied'));
  
  if(Array.isArray(savedcopied)) {
    copied = savedcopied;
    render();
  } else {
    copied = [];
    render();
  }
  
  function createCopy(title) {
    const id = '' + new Date().getTime();
  
    copied.push({
      title: title,
      id: id
    });
  
    saveCopied();
  }
  
  function removeCopy(idToDelete) {
    copied = copied.filter(function (copy) {
      if(copy.id === idToDelete){
        return false;
      } else {
        return true;
      }
    });
  
    saveCopied();
  }
  
  function saveCopied() {
    localStorage.setItem('copied', JSON.stringify(copied));
  }
  
  function addCopy() {
    if(document.getElementById('text') === null || document.getElementById('text') === undefined || document.getElementById('text') === '') {
      console.log('hi');
    } else {
      const textbox = document.getElementById('text');
      const title = textbox.value;
    
      createCopy(title);
    
      render();
    }
    
  }
  
  function deleteCopy(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
  
    removeCopy(idToDelete);
     
    render();
  }
  
  function clearFields() {
    document.getElementById('text').value = '';
  }
  
  let copyTitle = document.getElementById('text');
  
  copyTitle.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
      addCopy();
      clearFields();
    }
  })
  




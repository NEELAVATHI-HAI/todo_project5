const main = document.getElementById('child1');

const addListBtn = document.getElementById('addListBtn');
const child2 = document.getElementById('child2'); 

const addNewList = document.getElementById('addNewList'); 
const listText = document.getElementById('listText');
const addBtn = document.getElementById('addBtn');
const closeBtn = document.getElementById('closeBtn');

const addNewItem = document.getElementById('addNewItem');
const itemText = document.getElementById('itemText');
const itemBtn = document.getElementById('itemBtn');

let page2BackBtn = document.getElementById('page2BackBtn');
let page2AddBtn = document.getElementById('page2AddBtn');

const page2Contains = document.getElementById('page2Contains');

function toggleList() {
    addNewList.classList.toggle('addNewListActive');

}

addListBtn.addEventListener('click', toggleList);
closeBtn.addEventListener('click', toggleList);

addBtn.addEventListener('click', () => {

    toggleList();

    let tripCard = document.createElement('div');
    tripCard.classList.add('task');
    child2.appendChild(tripCard);

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('cardHeader');
    tripCard.appendChild(cardHeader);

    let newListTitle = document.createElement('h2');
    newListTitle.classList.add('task_title');
    newListTitle.style.color = 'tomato';
    newListTitle.innerHTML = `${listText.value}`;
    cardHeader.appendChild(newListTitle);

    let hr = document.createElement('hr');
    hr.classList.add('hr');
    cardHeader.appendChild(hr);

    newListTitle.addEventListener('click', myFunc);

    function myFunc(e){

        e.target.parentElement.parentElement.classList.toggle('active');
        let activeList = document.querySelectorAll('.task');

        for (let i = 0; i < activeList.length; i++) {

            if (activeList[i] !== e.target.parentElement.parentElement){

                activeList[i].classList.add('inactive');
                main.classList.add('inactive');
                page2Contains.classList.add('active');

                let page2Title = document.createElement('h2');
                page2Title.innerHTML = `
                <span style="color:tomato;">${newListTitle.innerHTML}</span> 
                `;
                page2BackBtn.after(page2Title);

                page2BackBtn.addEventListener('click', () => {
                    main.classList.remove('inactive');
                    activeList[i].classList.remove('inactive');
                    page2Contains.classList.remove('active');
                    page2Title.remove();

                });

                page2AddBtn.addEventListener('click', () => {
                    toggleList();
                    main.classList.remove('inactive');
                    activeList[i].classList.remove('inactive');
                    page2Contains.classList.remove('active');
                    page2Title.remove();
                });

            }

        }
        e.target.removeclass('task_title');

    }

    let newTaskBody = document.createElement('div');
    newTaskBody.classList.add('task_body');
    newTaskBody.innerHTML = `
        <div class="btn-ListBody">
        <span class="material-icons removeTask"  >
        delete
        </span>
        <span class="material-icons addTask" >
        add_circle
        </span>
        </div>
        `;
    tripCard.appendChild(newTaskBody);

})

child2.addEventListener('click', scratchTodo);

function scratchTodo(e) {

    let item = e.target;
    
    if (item.classList.contains('pendingIcon')) {

        item.parentElement.classList.toggle('me');

    }
}

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeTask')) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('addTask')) {
        addNewItem.classList.toggle('addNewItemActive');
        parentNode = e.target.parentNode.parentNode.parentNode;
    }
});

itemBtn.addEventListener('click', () => {

    addNewItem.classList.toggle('addNewItemActive');

    let newTask = document.createElement('p');
    newTask.classList.add('taskText');
    parentNode.appendChild(newTask);

    let pTask = document.createElement('div');
    pTask.classList.add('pTask');
    pTask.id = 'pendingtasks';

    pTask.innerHTML = `
        <span class="material-icons pendingIcon ">announcement</span>
        <p class="scratch" id="">${itemText.value}</p>
        `;
    parentNode.appendChild(pTask);
    itemText.value = '';
});

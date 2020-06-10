const form=document.querySelector('#task-form');
const taskList= document.querySelector('.collection');
const taskInput= document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
	form.addEventListener('submit',addTask);
	taskList.addEventListener('click',removeTask);

}

function addTask(e){
	if (taskInput.value=== '') {
		alert('Please Input data');
	}

const li = document.createElement('li');
li.className='collection-item';
li.appendChild(document.createTextNode(taskInput.value));
const link=document.createElement('a');
link.className='delete-item secondary-content';
e.preventDefault();
link.innerHTML='<i class="fa fa-remove"></li>';

li.appendChild(link);
taskList.appendChild(li);
taskInput.value='';
e.preventDefault();
}

//remove

function removeTask(e){
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Are Your Sure ?')) {
			e.target.parentElement.parentElement.remove();
		}
	}
}
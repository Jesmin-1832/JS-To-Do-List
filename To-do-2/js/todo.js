// Loader

document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    setTimeout(function() {
        loader.style.opacity = 0 ;
    }, 2000);
    setTimeout(function() { 
        loader.style.display = 'none';
    }, 3000);
})

document.addEventListener("DOMContentLoaded", function() {
    const todo = document.querySelector('.todo');
    todo.style.opacity = 0;

    setTimeout(function() {
        todo.style.opacity = 1;
    }, 2500);
    setTimeout(function() {
        todo.style.display = 'block';
    }, 2000);
})
 

// Logout 

document.addEventListener("DOMContentLoaded", function () {
    function logout() {
        localStorage.removeItem("loggedInUser");
        window.location = "./login.html";
    }

    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn.addEventListener("click", logout);

});


// Username and First letter 

document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("currentUser");

    if (username) {
        document.getElementById("loggedInUserName").textContent = username;

        const firstLetter = username.charAt(0).toUpperCase();
        document.getElementById("firstletter").innerHTML = firstLetter;
    } else {
        document.getElementById("loggedInUserName").textContent = "Sign in first..!";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const email = localStorage.getItem("email");

    if (email) {
        document.querySelector(".email").textContent = email;
    }
    else {
        document.querySelector(".email").textContent = "email not found..!";
    }
});


// Drop down

document.addEventListener("DOMContentLoaded", function () {
    const userInfo = document.querySelector('.user-info');
    const dropdown = document.querySelector('.dropdown')
    function toggleDropdown() {
        dropdown.classList.toggle('open');
    }

    userInfo.addEventListener('click', toggleDropdown);
    document.addEventListener('click', function (event) {
        if (!userInfo.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});


// Add task Addpopup

document.addEventListener('DOMContentLoaded', () => {
    const userInfo = document.querySelector('.user-info');
    const dropdown = document.querySelector('.dropdown');
    const logoutBtn = document.getElementById('logoutBtn');
    const addTaskButton = document.querySelector('.addtask');
    const addPopup = document.getElementById('addPopup');
    const cancelButton = document.getElementById('cancelButton');
    const closeButton = document.getElementById('closeButton');

    userInfo.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    logoutBtn.addEventListener('click', () => {
        console.log('Logging out...');
    });

    addTaskButton.addEventListener('click', () => {
        addPopup.style.display = 'block';
    });

    cancelButton.addEventListener('click', () => {
        addPopup.style.display = 'none';
    });

    closeButton.addEventListener('click', () => {
        addPopup.style.display = 'none';
    });

    document.addEventListener('click', (event) => {
        const isClickInside = addPopup.contains(event.target) || addTaskButton.contains(event.target);
        if (!isClickInside) {
            addPopup.style.display = 'none';
        }


        if (!userInfo.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});

// close Addpopup to anywhere click 

document.addEventListener('DOMContentLoaded', () => {
    const allTaskTab = document.getElementById('allTaskTab');
    const todayTaskTab = document.getElementById('todayTaskTab');
    const upcomingTaskTab = document.getElementById('upcomingTaskTab');

    function setActiveTab(activeTab) {
        allTaskTab.classList.remove('active');
        todayTaskTab.classList.remove('active');
        upcomingTaskTab.classList.remove('active');
        activeTab.classList.add('active');
    }

    setActiveTab(allTaskTab);

    allTaskTab.addEventListener('click', () => setActiveTab(allTaskTab));
    todayTaskTab.addEventListener('click', () => setActiveTab(todayTaskTab));
    upcomingTaskTab.addEventListener('click', () => setActiveTab(upcomingTaskTab));
});


// Today popup show 

document.addEventListener('DOMContentLoaded', () => {
    const userInfo = document.querySelector('.user-info');
    const dropdown = document.querySelector('.dropdown');
    const logoutBtn = document.getElementById('logoutBtn');
    const addTaskButton = document.querySelector('.taskAdd');
    const todayPopup = document.getElementById('todayPopup');
    const cancelButton = document.getElementById('cancelButton');
    const closeButton = document.getElementById('closeButton');

    userInfo.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    logoutBtn.addEventListener('click', () => {
        console.log('Logging out...');
    });

    addTaskButton.addEventListener('click', () => {
        todayPopup.style.display = 'block';
    });

    cancelButton.addEventListener('click', () => {
        todayPopup.style.display = 'none';
    });

    closeButton.addEventListener('click', () => {
        todayPopup.style.display = 'none';
    });

    document.addEventListener('click', (event) => {
        const isClickInside = todayPopup.contains(event.target) || addTaskButton.contains(event.target);
        if (!isClickInside) {
            todayPopup.style.display = 'none';
        }

        if (!userInfo.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});

// close Today popup to anywhere click 

document.addEventListener('DOMContentLoaded', () => {
    const allTaskTab = document.getElementById('allTaskTab');
    const todayTaskTab = document.getElementById('todayTaskTab');
    const upcomingTaskTab = document.getElementById('upcomingTaskTab');

    function setActiveTab(activeTab) {
        allTaskTab.classList.remove('active');
        todayTaskTab.classList.remove('active');
        upcomingTaskTab.classList.remove('active');
        activeTab.classList.add('active');
    }

    setActiveTab(allTaskTab);

    allTaskTab.addEventListener('click', () => setActiveTab(allTaskTab));
    todayTaskTab.addEventListener('click', () => setActiveTab(todayTaskTab));
    upcomingTaskTab.addEventListener('click', () => setActiveTab(upcomingTaskTab));
});


// Tasks show and hide 

document.addEventListener('DOMContentLoaded', () => {
    const allTaskTab = document.getElementById('allTaskTab');
    const todayTaskTab = document.getElementById('todayTaskTab');
    const upcomingTaskTab = document.getElementById('upcomingTaskTab');
    const notificationTab = document.getElementById('notificationTab');

    const projectBtn = document.querySelector('.projectHeading');
    const allTaskPage = document.querySelector('.AllTaskPage');
    const todayPage = document.querySelector('.TodayPage');
    const GroupingPage = document.querySelector('.GroupingPage');
    const notificationPage = document.querySelector('.notification');
    const projectShowPage = document.querySelector('.projectShow');

    function setActiveTab(activeTab) {
        allTaskTab.classList.remove('active');
        todayTaskTab.classList.remove('active');
        upcomingTaskTab.classList.remove('active');
        notificationTab.classList.remove('active');
        projectBtn.classList.remove('active');
        activeTab.classList.add('active');
    }

    function hideAllPages() {
        allTaskPage.style.display = 'none';
        todayPage.style.display = 'none';
        GroupingPage.style.display = 'none';
        notificationPage.style.display = 'none';
        projectShowPage.style.display = 'none';
    }

    // Set default tab
    setActiveTab(allTaskTab);
    allTaskPage.style.display = 'none';
    todayPage.style.display = 'block';
    GroupingPage.style.display = 'none';
    notificationPage.style.display = 'none';
    projectShowPage.style.display = 'none';

    // Event listeners for tabs
    allTaskTab.addEventListener('click', () => {
        setActiveTab(allTaskTab);
        hideAllPages();
        allTaskPage.style.display = 'block';
    });

    todayTaskTab.addEventListener('click', () => {
        setActiveTab(todayTaskTab);
        hideAllPages();
        todayPage.style.display = 'block';
    });

    upcomingTaskTab.addEventListener('click', () => {
        setActiveTab(upcomingTaskTab);
        hideAllPages();
        GroupingPage.style.display = 'block';
    });

    notificationTab.addEventListener('click', () => {
        setActiveTab(notificationTab);
        hideAllPages();
        notificationPage.style.display = 'block';
    });

    projectBtn.addEventListener('click', () => {
        setActiveTab(projectBtn);
        hideAllPages();
        projectShowPage.style.display = 'block';
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const taebSwitch = document.querySelector('.taeb-switch');
    const taebs = document.querySelectorAll('.taeb-switch .taeb');

    taebs.forEach(taeb => {
        taeb.addEventListener('click', () => {
            if (taeb.classList.contains('active')) return;
            taebs.forEach(tab => tab.classList.remove('active'));

            taeb.classList.add('active');

            const direction = taeb.getAttribute('taeb-direction');
            taebSwitch.classList.remove('left', 'right');
            taebSwitch.classList.add(direction);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const taebSwitch = document.querySelector('.taeb-switch2');
    const taebs = document.querySelectorAll('.taeb-switch2 .taeb');

    taebs.forEach(taeb => {
        taeb.addEventListener('click', () => {
            if (taeb.classList.contains('active')) return;

            taebs.forEach(tab => tab.classList.remove('active'));

            taeb.classList.add('active');

            const direction = taeb.getAttribute('taeb-direction');
            taebSwitch.classList.remove('left', 'right');
            taebSwitch.classList.add(direction);
        });
    });
});


// Date Disable 

function disablePastDates() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("myDate").setAttribute("min", today);
}


// Date dropdown Show 

document.querySelector('.dueDate').addEventListener('click', function () {
    const dateSelect = document.querySelector('.dateSelect');
    dateSelect.style.display = dateSelect.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function (event) {
    const dateSelect = document.querySelector('.dateSelect');
    const button = document.querySelector('.dueDate');
    if (!button.contains(event.target) && !dateSelect.contains(event.target)) {
        dateSelect.style.display = 'none';
    }
});


// Priority dropdown Show 

document.querySelector('.priority').addEventListener('click', function () {
    const selectPriority = document.querySelector('.selectPriority');
    selectPriority.style.display = selectPriority.style.display === 'block' ? 'none' : 'block';
});


document.addEventListener('click', function (event) {
    const selectPriority = document.querySelector('.selectPriority');
    const button = document.querySelector('.priority');
    if (!button.contains(event.target) && !selectPriority.contains(event.target)) {
        selectPriority.style.display = 'none';
    }
});

// Priority dropdown Show for TodayPopup
document.addEventListener('DOMContentLoaded', function () {
    const todayPopup = document.getElementById('todayPopup');
    const todayPriorityButton = todayPopup.querySelector('.priority');
    const todaySelectPriority = todayPopup.querySelector('.selectPriority');

    todayPriorityButton.addEventListener('click', () => {
        if (todaySelectPriority.style.display === 'block') {
            todaySelectPriority.style.display = 'none';
        } else {
            todaySelectPriority.style.display = 'block';
        }
    });

    document.addEventListener('click', function (event) {
        if (!todayPriorityButton.contains(event.target) && !todaySelectPriority.contains(event.target)) {
            todaySelectPriority.style.display = 'none';
        }
    });
});

// Add click event listener to selectPriority items in TodayPopup
document.addEventListener('DOMContentLoaded', () => {
    const todayPopupPriorityItems = document.querySelectorAll('#todayPopup .selectPriority a');

    todayPopupPriorityItems.forEach(item => {
        item.addEventListener('click', function () {
            todayPopupPriorityItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            document.querySelector('#todayPopup .priorityButton').innerHTML = '<i class="fa-regular fa-flag"></i> ' + this.getAttribute('data-value');
        });
    });
});

// Inbox dropdown Show 

document.querySelector('.inbox').addEventListener('click', function () {
    const selectinbox = document.querySelector('.selectinbox');
    selectinbox.style.display = selectinbox.style.display === 'block' ? 'none' : 'block';
});


document.addEventListener('click', function (event) {
    const selectinbox = document.querySelector('.selectinbox');
    const button = document.querySelector('.inbox');
    if (!button.contains(event.target) && !selectinbox.contains(event.target)) {
        selectinbox.style.display = 'none';
    }
});

// Inbox dropdown Show Today

const todayInboxButton = todayPopup.querySelector('.inbox');
const todaySelectInbox = todayPopup.querySelector('.selectinbox');

todayInboxButton.addEventListener('click', () => {
    todaySelectInbox.style.display = todaySelectInbox.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    if (!todayInboxButton.contains(event.target) && !todaySelectInbox.contains(event.target)) {
        todaySelectInbox.style.display = 'none';
    }
});


// Add click event listener to dateSelect items

const dateSelectItems = document.querySelectorAll('.dateSelect a');
dateSelectItems.forEach(item => {
    item.addEventListener('click', function () {
        dateSelectItems.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');

        const dueDateButton = document.getElementById('dueDateButton');
        dueDateButton.innerHTML = '<i class="fa-regular fa-calendar"></i> ' + this.getAttribute('data-value');
    });
});

// Add click event listener to selectPriority items

const selectPriorityItems = document.querySelectorAll('.Addpopup .selectPriority a');
selectPriorityItems.forEach(item => {
    item.addEventListener('click', function () {
        selectPriorityItems.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');

        const priorityButton = document.getElementById('priorityButton');
        priorityButton.innerHTML = '<i class="fa-regular fa-flag"></i> ' + this.getAttribute('data-value');
    });
});



// Event listener for submit button

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function () {
    const taskName = document.querySelector('.taskInput').value;
    const description = document.querySelector('.taskInput2').value;

    const selectedDueDateElement = document.querySelector('.dateSelect a.active');
    const selectedDueDate = selectedDueDateElement ? selectedDueDateElement.getAttribute('data-value') : '';

    const selectedPriorityElement = document.querySelector('.selectPriority a.active');
    const selectedPriority = selectedPriorityElement ? selectedPriorityElement.getAttribute('data-value') : '';

    if (taskName.trim() !== '' && description.trim() !== '' && selectedDueDate.trim() !== '' && selectedPriority.trim() !== '') {
        const taskDetails = {
            taskName: taskName,
            description: description,
            dueDate: selectedDueDate,
            priority: selectedPriority
        };

        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        existingTasks.push(taskDetails);
        localStorage.setItem('tasks', JSON.stringify(existingTasks));

        document.querySelector('.taskInput').value = '';
        document.querySelector('.taskInput2').value = '';
        Toastify({
            text: "Task Added successfully...",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(130deg, #00600f, #00c820)",
            },
            onClick: function () { }
        }).showToast();
        let popuphide = document.getElementById("addPopup")
        popuphide.style.display = "none";
    } else {
        Toastify({
            text: "Please Fill All Details..!",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(130deg, rgb(203 59 59), rgb(126 21 21))",
            },
            onClick: function () { }
        }).showToast();
    }
});


// Show Task 


document.addEventListener('DOMContentLoaded', () => {
    function displayTasks() {
        const taskList = document.querySelector('.showData');
        taskList.innerHTML = '';

        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

        if (existingTasks.length === 0) {
            taskList.textContent = "No Tasks Available..!";
        } else {
            existingTasks.forEach((task, index) => {
                const taskItem = document.createElement('div');
                taskItem.classList.add('task');
                taskItem.innerHTML = `  
                    <div class="d-flex align-items-center">
                        <input type="checkbox" class="checkboxField" />
                        <h3>${task.taskName}</h3>
                    </div>
                    <p>${task.description}</p>
                    <h5><i class="fa-solid fa-calendar-day"></i>&nbsp; ${task.dueDate}</h5>
                    <h6>${task.priority}</h6>
                    <button class="closeBtn" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
                `;
                taskList.appendChild(taskItem);
            });

            const closeButtons = document.querySelectorAll('.closeBtn');
            closeButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const taskIndex = this.getAttribute('data-index');
                    deleteTask(taskIndex);
                });
            });
        }
    }

    function deleteTask(index) {
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        existingTasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(existingTasks));
        Toastify({
            text: "Task Deleted successfully...",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(130deg, #00600f, #00c820)",
            },
            onClick: function () { }
        }).showToast();
        displayTasks();
    }

    // Event listener for the submit button
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function () {
        const taskName = document.querySelector('.taskInput').value;
        const description = document.querySelector('.taskInput2').value;

        const selectedDueDateElement = document.querySelector('.dateSelect a.active');
        const selectedDueDate = selectedDueDateElement ? selectedDueDateElement.getAttribute('data-value') : '';

        const selectedPriorityElement = document.querySelector('.selectPriority a.active');
        const selectedPriority = selectedPriorityElement ? selectedPriorityElement.getAttribute('data-value') : '';

        if (taskName.trim() !== '' && description.trim() !== '' && selectedDueDate.trim() !== '' && selectedPriority.trim() !== '') {
            const taskDetails = {
                taskName: taskName,
                description: description,
                dueDate: selectedDueDate,
                priority: selectedPriority
            };

            const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            existingTasks.push(taskDetails);
            localStorage.setItem('tasks', JSON.stringify(existingTasks));

            document.querySelector('.taskInput').value = '';
            document.querySelector('.taskInput2').value = '';

        }

        displayTasks();
    });

    displayTasks();
});





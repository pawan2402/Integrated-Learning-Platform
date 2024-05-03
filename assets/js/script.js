function toggleNavDropdownCourses() {
    var dropdownCourses = document.getElementById("navDropdownCourses");
    if (dropdownCourses.style.display === "block") {
        dropdownCourses.style.display = "none";
    } else {
        dropdownCourses.style.display = "block";
    }
}

function toggleNavDropdownResources() {
    var dropdownResources = document.getElementById("navDropdownResources");
    if (dropdownResources.style.display === "block") {
        dropdownResources.style.display = "none";
    } else {
        dropdownResources.style.display = "block";
    }
}

function toggleNavDropdownLanguages() {
    var dropdownLanguages = document.getElementById("navDropdownLanguages");
    if (dropdownLanguages.style.display === "block") {
        dropdownLanguages.style.display = "none";
    } else {
        dropdownLanguages.style.display = "block";
    }
} // Script For Navbar Dropdown


var notyf = new Notyf();
const submit = document.querySelector('.btn-sign');
const email = document.querySelector('.email-btn');
const password = document.querySelector('.password-btn');


submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (email.value.length > 2 && password.value.length > 2) {
        notyf.success('please Wait...');
        const ans = fetch('https://backend-integrated-learning-platform.onrender.com/login', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ email: email.value, password: password.value })
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    notyf.success(result.message);
                    localStorage.setItem('user', result.id);
                    window.location.href = "./index.html";
                }
                else {
                    notyf.error(result.message);
                }
            })
    }
    else {
        notyf.error("email and password is too short");
    }
}); //script for handling form login submission




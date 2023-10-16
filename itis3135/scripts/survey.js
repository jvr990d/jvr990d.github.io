var courseCount = 1;
function addCourse() {
    var courses = document.getElementById('courses');
    var courseElement = document.createElement('div');
    courseElement.innerHTML = `
        <div class="course-entry">
            <label>
                Course: 
                <input type="text" name="course${courseCount}">
            </label>
            <button type="button" onclick="removeCourse(${courseCount})">Delete</button>
        </div>`;
    courses.appendChild(courseElement);
    courseCount++;
}

function removeCourse(courseNumber) {
    var inputElement = document.querySelector(`input[name="course${courseNumber}"]`);
    if (inputElement) {
        var parentDiv = inputElement.closest('.course-entry');
        parentDiv.remove();
    }
}

document.getElementById('info').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!validateForm()) {
        alert("Please fill out all required fields and ensure the image is in PNG or JPG format.");
        return;
    }
    

    var formData = new FormData(event.target);
    var output = document.getElementById('output');
    var imageFile = formData.get('image');
    var imageUrl = URL.createObjectURL(imageFile);

    output.innerHTML = `
        
        <h2 text-align="center" ><strong> ${formData.get('name')} || ${formData.get('mascot')}</strong></h2>
        
        <figure>
            <img src="${imageUrl}" alt="Uploaded Image of ${formData.get('name')}"">
            <figcaption>${formData.get('caption')}</figcaption>
        </figure>
        <ul>
        <li><strong>Personal Background:</strong> ${formData.get('backgroundPersonal')}</li>
        <li><strong>Professional Background:</strong> ${formData.get('backgroundProfessional')}</li>
        <li><strong>Academic Background:</strong> ${formData.get('backgroundAcademic')}</li>
        <li><strong>Background in Web Development:</strong> ${formData.get('backgroundWebDevelopment')}</li>
        <li><strong>Primary Computer Platform:</strong> ${formData.get('platform')}</li>
        <li><strong>Courses:</strong></li>
        <ul>
            ${Array.from(formData.keys()).filter(key => key.startsWith('course')).map(key => `<li>${formData.get(key)}</li>`).join('')}
        </ul>
        <li><strong>Funny thing?</strong> ${formData.get('funnyThing')}</li>
        <li><strong>Anything else?</strong> ${formData.get('anythingElse')}</li>
        <li><strong>I understand that what is on this page is not password protected and I will not put anything here that I don’t want publicly available. -  ${formData.get('name')}</li>
        <ul>
        ;
    `


    // reset link
    var resetLink = document.createElement('a');
    resetLink.href = '#';
    resetLink.innerText = 'Fill out the form again';
    resetLink.classList.add('reset-link');  
    resetLink.addEventListener('click', function(e) {
        e.preventDefault();  
        output.innerHTML = '';
        document.getElementById('info').style.display = 'block';
    });
    output.appendChild(resetLink);
});

// validation form
function validateForm() {
    var form = document.getElementById('info');

    if (!form.name.value) return false;
    if (!form.mascot.value) return false;

    var imageFile = form.image.files[0];
    if (imageFile) {
        var fileType = imageFile.type;
        if (fileType !== 'image/png' && fileType !== 'image/jpeg') return false;
    } else {
        return false;
    }

    if (!form.caption.value) return false;
    if (!form.backgroundPersonal.value) return false;
    if (!form.backgroundProfessional.value) return false;
    if (!form.backgroundAcademic.value) return false;
    if (!form.backgroundWebDevelopment.value) return false;
    if (!form.platform.value) return false;
    if (!form.agreement.checked) return false;

    return true;
}
const input_name = document.querySelector('[name="name"]');
const input_college = document.querySelector('[name="college"]');
const input_class = document.querySelector('[name="class"]');
const input_phone = document.querySelector('[name="phone"]');
const input_leave_reason = document.querySelector('[name="leave_reason"]');
const input_leave_to = document.querySelector('[name="leave_to"]');
input_name.addEventListener('blur', (e) => {
    try {
        input_name.parentElement.parentElement.classList.remove('has-warning');
        input_name.nextSibling.remove();
    } catch (error) {}
    if (!input_name.value)
    {
        input_name.parentElement.parentElement.classList.add('has-warning'); 
        let span = document.createElement('span');   
        span.className = "help-block";   
        span.innerHTML = "请输入名字";
        input_name.after(span);
    }
})

input_college.addEventListener('blur', (e) => {
    try {
        input_college.parentElement.parentElement.classList.remove('has-warning');
        input_college.nextSibling.remove();
    } catch (error) {}
    if (!input_college.value)
    {
        input_college.parentElement.parentElement.classList.add('has-warning'); 
        let span = document.createElement('span');   
        span.className = "help-block";   
        span.innerHTML = "请输入学院";
        input_name.after(span);
    }
})

input_class.addEventListener('blur', (e) => {
    try {
        input_class.parentElement.parentElement.classList.remove('has-warning');
        input_class.nextSibling.remove();
    } catch (error) {}
    if (!input_class.value)
    {
        input_class.parentElement.parentElement.classList.add('has-warning'); 
        let span = document.createElement('span');   
        span.className = "help-block";   
        span.innerHTML = "请输入班级";
        input_class.after(span);
    }
})




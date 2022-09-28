/*
 * @Author: Faith
 * @Date: 2022-03-16 10:02
 * @LastAuthor: Faith
 * @LastEditTime: 2022-09-28 15:12
 * @Description:
 */

const formData = document.querySelectorAll('.form-control')
const input_name = document.querySelector('[name="name"]')
const input_college = document.querySelector('[name="college"]')
const input_class = document.querySelector('[name="class"]')
const input_phone = document.querySelector('[name="phone"]')
const input_leave_reason = document.querySelector('[name="leave_reason"]')
const input_leave_to = document.querySelector('[name="leave_to"]')
const input_leave_day = document.querySelector('[name="leave_day"]')
const input_start_time = document.querySelector('[name="start_time"]')
const input_leave_time = document.querySelector('[name="leave_time"]')
const input_emergeName = document.querySelector('[name="emergeName"]')
const input_stu_id = document.querySelector('[name="stu_id"]')
const input_tutor = document.querySelector('[name="tutor"]')
const submit = document.querySelector('#submit')

function getStore(name) {
  return localStorage.getItem(name)
}

function setStore(name, value) {
  return localStorage.setItem(name, value)
}

function setFormCookie() {
  let data = []

  formData.forEach((dom) => {
    let name = dom.getAttribute('name')
    let value = dom.value
    console.log(value)
    setStore(name, value)
    setCookie(name, value)
    data.push({ name, value })
  })
  location.href = '../index.html'
  //   console.log(data)
}

// setFormCookie()

// submit.addEventListener('click', () => {
//   if (window.location.host) {
//     // location.href = ""
//   }
//   console.log('object')
//   location.href = '../index.html'
// })

function setDefaultData(name) {
  const value = getCookie(name)
  if (value) {
    return value
  }
}
input_name.addEventListener('blur', (e) => {
  try {
    input_name.parentElement.parentElement.classList.remove('has-warning')
    input_name.nextSibling.remove()
  } catch (error) {}
  if (!input_name.value) {
    input_name.parentElement.parentElement.classList.add('has-warning')
    let span = document.createElement('span')
    span.className = 'help-block'
    span.innerHTML = '请输入名字'
    input_name.after(span)
  }
})

input_college.addEventListener('blur', (e) => {
  try {
    input_college.parentElement.parentElement.classList.remove('has-warning')
    input_college.nextSibling.remove()
  } catch (error) {}
  if (!input_college.value) {
    input_college.parentElement.parentElement.classList.add('has-warning')
    let span = document.createElement('span')
    span.className = 'help-block'
    span.innerHTML = '请输入学院'
    input_name.after(span)
  }
})

input_class.addEventListener('blur', (e) => {
  try {
    input_class.parentElement.parentElement.classList.remove('has-warning')
    input_class.nextSibling.remove()
  } catch (error) {}
  if (!input_class.value) {
    input_class.parentElement.parentElement.classList.add('has-warning')
    let span = document.createElement('span')
    span.className = 'help-block'
    span.innerHTML = '请输入班级'
    input_class.after(span)
  }
})

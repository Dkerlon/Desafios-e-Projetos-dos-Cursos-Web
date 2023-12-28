
var drop1 = document.querySelector('.dropdown_1')
var drop2 = document.querySelector('.dropdown_2')

var dropbtn2 = document.querySelector('.dropdown_btn_2').addEventListener('click', function(){
    event.stopPropagation()
    drop2.style.display = 'flex'
})

var dropbtn1 = document.querySelector('.dropdown_btn_1').addEventListener('click', function (){
    event.stopPropagation()
    drop1.style.display = 'flex'
})


var corpo = document.body.addEventListener('click', function(){
    drop1.style.display = 'none'
})

var corpo = document.body.addEventListener('click', function(){
    drop2.style.display = 'none'
})



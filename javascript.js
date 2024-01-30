var sec=0;
var min=0;
var hr=0;
var int;
const startbut=document.getElementById('start-timer')   
const stopbut=document.getElementById('stop-timer')
const resetbut=document.getElementById('reset-timer')
const hour=document.getElementById('hour')
const minute=document.getElementById('minute')
const seconds=document.getElementById('seconds')
const timerdisplay=document.getElementById('timer-display')

//Start Timer
function starttimer()
{

    if(sec>=0)
    {
        sec++
        seconds.innerHTML=sec
    }
    if(sec<10)
    {
    seconds.innerHTML="0"+sec
    }
    if(sec>=60)
    {
        sec=0
        min++
        minute.innerHTML=min
    }
    if(min<10)
    {
        minute.innerHTML='0'+min+" :"
    }
    if(min>=60)
    {
        min=0
        hr++
        hour.innerHTML=hr
    }
    if(hr<10)
    {
        hour.innerHTML="0"+hr+" :"
    }
    int=setTimeout(starttimer,10)
}
startbut.addEventListener('click',starttimer)

//Stop Timer
function stoptimer()
{
    clearTimeout(int)
}
stopbut.addEventListener('click',stoptimer)


//Reset Timer
function resettimer()
{
    hr=0
    min=0
    sec=0
    hour.innerHTML="0"+hr+" :"
    minute.innerHTML="0"+min+" :"
    seconds.innerHTML="0"+sec
    clearTimeout(int)
}
resetbut.addEventListener('click',resettimer)


//Change Color
function changeButtonColor(button, color) {
    button.style.backgroundColor = color;
}
startbut.addEventListener('mouseover', function() {
    changeButtonColor(startbut, 'green')
})
startbut.addEventListener('mouseout',function()
{
    changeButtonColor(startbut, '')
})

stopbut.addEventListener('mouseover',function()
{
    changeButtonColor(stopbut,'red')
})
stopbut.addEventListener('mouseout',function()
{
    changeButtonColor(stopbut,'')
})
resetbut.addEventListener('mouseover',function()
{
    changeButtonColor(resetbut,'violet')
})
resetbut.addEventListener('mouseout',function()
{
    changeButtonColor(resetbut,'')
})
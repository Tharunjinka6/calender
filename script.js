const Month_name=document.querySelector(".Month");
const Day_name=document.querySelector(".Day");
const Date_num=document.querySelector(".Date");
const Year_num=document.querySelector(".Year");

const Current_date=new Date();

const themonth=Current_date.toLocaleString('default', {
    month: 'long'
})
Month_name.innerHTML=themonth;

const theday=Current_date.toLocaleString('default', {
    weekday: 'long'
})
Day_name.innerHTML=theday;

const theDate=Current_date.toLocaleString('default', {
    day: 'numeric'
})
Date_num.innerHTML=theDate;

const theYear=Current_date.toLocaleString('default', {
    year: 'numeric'
})
Year_num.innerHTML=theYear;


// Write a JavaScript function to check whether an input is a date object or not Start

function myProgram1() {
    var vInputHere = document.getElementById("exampleInputNo1").value;

    var dateResult = new Date(vInputHere);
    // document.getElementById("my-1-div-p").innerHTML = `${dateResult}`;

    if (dateResult == "Invalid Date") {
        document.getElementById("my-1-div-p").innerHTML = `Input is not a Date.`
    } else {

        document.getElementById("my-1-div-p").innerHTML = `Input is a Date.`
    }
}


// Write a JavaScript function to check whether an input is a date object or not End



// Write a JavaScript function to get the current date Start

function myProgram2() {

    var dateResult2 = new Date();
    var dateResult2_day = dateResult2.getDate();
    var dateResult2_month = dateResult2.getMonth();
    var dateResult2_year = dateResult2.getFullYear();

    // document.getElementById("my-2-div-p").innerHTML = `Current Date is ${dateResult2_day}+"\\"+${dateResult2_month}`

    document.getElementById("my-2-div-p").innerHTML = "Current Date is " + dateResult2_day + "/" + dateResult2_month + "/" + dateResult2_year;
    document.getElementById("my-2-div-p-2").innerHTML = "Current Date is " + dateResult2_day + "-" + dateResult2_month + "-" + dateResult2_year;
}


// Write a JavaScript function to get the current date End



// Write a JavaScript function to get the number of days in a month Start

function myProgram3() {


    var vInputHere = document.getElementById("exampleInputNo2").value;

    var dateResult2 = new Date(vInputHere);

    var dateResult2_month = dateResult2.getMonth();

    var dateResult2_year = dateResult2.getFullYear();



    var dateResult2_month_days = new Date(dateResult2_year, dateResult2_month + 1, 0).getDate();


    document.getElementById("my-3-div-p").innerHTML = "Total Number of Days in Given Month is " + dateResult2_month_days;

}

// Write a JavaScript function to get the number of days in a month End


// Write a JavaScript function to get the month name from a particular date Start

function myProgram4() {

    var vMonthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var vInputHere = document.getElementById("exampleInputNo3").value;

    var dateResult4 = new Date(vInputHere);

    var dateResult4_month = dateResult4.getMonth();

    document.getElementById("my-4-div-p").innerHTML = "Month Name is : " + vMonthName[dateResult4_month];

}

// Write a JavaScript function to get the month name from a particular date End


// Write a JavaScript function to compare dates (i.e. greater than, less than or equal to Start

function myProgram5() {


    var vFirstDate = new Date(document.getElementById("exampleInputNo4").value);
    var vSecondDate = new Date(document.getElementById("exampleInputNo5").value);

    if (vFirstDate > vSecondDate) {
        document.getElementById("my-5-div-p").innerHTML = "First Date is Greater Than Second Date";
    } else if (vSecondDate > vFirstDate) {
        document.getElementById("my-5-div-p").innerHTML = "Second Date is Greater Than First Date";
    } else {
        document.getElementById("my-5-div-p").innerHTML = "First Date is Equal to Second Date";
    }



}

// Write a JavaScript function to compare dates (i.e. greater than, less than or equal to End



// Write a JavaScript function to add specified minutes to a Date object Start

function myProgram6() {

    var vFirstDateMin = document.getElementById("exampleInputNo6").value;

    var vFirstDate = new Date(document.getElementById("exampleInputNo7").value);

    // var vResult6 = vFirstDate.setMinutes(vFirstDate.getMinutes(), vFirstDateMin);
    var vResult6 = new Date();
    vResult6.setMinutes(vFirstDate.getMinutes() + parseInt(vFirstDateMin));



    document.getElementById("my-6-div-p").innerHTML = "Added Minutes in Given Date :" + vResult6;



}

// Write a JavaScript function to add specified minutes to a Date object End



// Write a JavaScript function to test whether a date is a weekend Start


function myProgram7() {



    var vFirstDate = new Date(document.getElementById("exampleInputNo8").value);

    var vResult7 = vFirstDate.getDay();

    var vResultShow;




    var vDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    if (vResult7 == 0) {
        vResultShow = `${vDay[vResult7]} is Weekend`;
    } else {
        vResultShow = `${vDay[vResult7]} is Not Weekend`;
    }

    document.getElementById("my-7-div-p").innerHTML = vResultShow;


}

// Write a JavaScript function to test whether a date is a weekend End



// Write a JavaScript function to get difference between two dates in days Start
function myProgram8() {



    var vFirstDate = new Date(document.getElementById("exampleInputNo9").value);

    var vSecondDate = new Date(document.getElementById("exampleInputNo10").value);


    var vGetTime = vSecondDate.getTime() - vFirstDate.getTime();

    var vSetDays = (vGetTime / (1000 * 60 * 60 * 24)) + 1;

    document.getElementById("my-8-div-p").innerHTML = "Difference between two dates in days is :" + vSetDays;


}

// Write a JavaScript function to get difference between two dates in days End



// Write a JavaScript function to get the last day of a month Start

function myProgram9() {



    var vFirstDate = new Date(document.getElementById("exampleInputNo11").value);
    var vGetMonth = vFirstDate.getMonth();
    var vGetYear = vFirstDate.getFullYear();
    var vResult1 = new Date(vGetYear, parseInt(vGetMonth) + 1, 0);

    document.getElementById("my-9-div-p").innerHTML = "Last Day of the Month is : " + vResult1;


}



// Write a JavaScript function to get the last day of a month End


// Write a JavaScript function to calculate yesterday day Start

function myProgram10() {



    var vFirstDate = new Date(document.getElementById("exampleInputNo12").value);
    var vResult1 = new Date(vFirstDate - 86400000);

    document.getElementById("my-10-div-p").innerHTML = "Yesterday Day is : " + vResult1;


}

// Write a JavaScript function to calculate yesterday day End


// Write a JavaScript function to get the maximum date from an array of dates Start

function myProgram11() {
    var vDateNewArray = [];
    // var vDateArray = [new Date('01-jan-2021'), new Date('01-jan-2022'), new Date('01-jun-2021'), new Date('30-jan-2022')];
    var vDateArray = ['01-jan-2021', '01-jan-2022', '01-jun-2023', '30-jan-2022'];
    vDateArray.forEach(element => {
        vDateNewArray.push((new Date(element)));

    });

    var vResult = new Date(Math.max(...vDateNewArray));

    // var vResult = (vResult / (1000 * 60 * 60 * 24));
    document.getElementById("my-11-div-p").innerHTML = "Array of Dates : " + vDateArray;
    document.getElementById("my-11-div-p2").innerHTML = "Maximum Date from Array is : " + vResult;


}

//Write a JavaScript function to get the maximum date from an array of dates End


// Write a JavaScript function to get the minimum date from an array of dates Start

function myProgram12() {
    var vDateNewArray = [];
    // var vDateArray = [new Date('01-jan-2021'), new Date('01-jan-2022'), new Date('01-jun-2021'), new Date('30-jan-2022')];
    var vDateArray = ['01-jan-2021', '01-jan-2022', '01-jun-2023', '30-jan-2022'];
    vDateArray.forEach(element => {
        vDateNewArray.push((new Date(element)));

    });

    var vResult = new Date(Math.min(...vDateNewArray));

    // var vResult = (vResult / (1000 * 60 * 60 * 24));
    document.getElementById("my-12-div-p").innerHTML = "Array of Dates : " + vDateArray;
    document.getElementById("my-12-div-p2").innerHTML = "Minimum Date from Array is : " + vResult;


}

// Write a JavaScript function to get the minimum date from an array of dates End

// Write a JavaScript function that will return the number of minutes in hours and minutes Start
function myProgram13() {


    var vFirstDate = document.getElementById("exampleInputNo13").value;


    var hours = (vFirstDate / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);

    document.getElementById("my-13-div-p").innerHTML = vFirstDate + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";



}
// Write a JavaScript function that will return the number of minutes in hours and minutes End


// Write a JavaScript function to get the amount of days of a year Start
function myProgram14() {

    function days_of_a_year(year) {

        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    }


    var vFirstDate = new Date(document.getElementById("exampleInputNo14").value);
    var vFirstDateyear = vFirstDate.getFullYear();

    var vLeapyear = days_of_a_year(parseInt(vFirstDateyear));

    document.getElementById("my-14-div-p").innerHTML = "No. of Days : " + vLeapyear;



}
// Write a JavaScript function to get the amount of days of a year End


//Write a JavaScript function to get the quarter (1 to 4) of the year Start
function myProgram15() {




    var vFirstDate = new Date(document.getElementById("exampleInputNo15").value);
    var vFirstDateyear = vFirstDate.getFullYear();

    var vFirstDateyearM = vFirstDate.getMonth() + 1;
    var vResult = (Math.ceil(vFirstDateyearM / 3));


    document.getElementById("my-15-div-p").innerHTML = "No. of Quarter : " + vResult;



}

//Write a JavaScript function to get the quarter (1 to 4) of the year End


//Write a JavaScript function to count the number of days passed since beginning of the year Start


function myProgram16() {



    var vFirstDate = new Date();
    var vSecondDate = new Date(new Date().getFullYear(), 0, 1);

    var vResult = (((vFirstDate - vSecondDate) + 1) / (1000 * 60 * 60 * 24));



    document.getElementById("my-16-div-p").innerHTML = "No. of Days Passed Since Beginning : " + Math.ceil(vResult);



}

//Write a JavaScript function to count the number of days passed since beginning of the year End


//Write a JavaScript function to convert a Unix timestamp to time Start




function myProgram17() {

    var vFirstDate = new Date(document.getElementById("exampleInputNo16").value * 1000);


    document.getElementById("my-17-div-p").innerHTML = vFirstDate;



}

//Write a JavaScript function to convert a Unix timestamp to time End

// Write a JavaScript program to calculate age Start

function myProgram18() {
    var vFirstDate = new Date(document.getElementById("exampleInputNo17").value);
    var vFirstYear = vFirstDate.getFullYear();

    var vCurrentDate = new Date();
    var vcurrentDateYear = vCurrentDate.getFullYear();

    var vResult = vcurrentDateYear - vFirstYear;


    document.getElementById("my-18-div-p").innerHTML = "Your Age is :" + vResult;



}

// Write a JavaScript program to calculate age End


// Write a JavaScript function to get the day of the month, 2 digits with leading zeros Start

function myProgram19() {
    var vFirstDate = new Date(document.getElementById("exampleInputNo18").value);

    var vResult = (parseInt(vFirstDate.getDate()) < 10 ? '0' : '') + vFirstDate.getDate();



    document.getElementById("my-19-div-p").innerHTML = "Month Day : " + vResult;

}


// Write a JavaScript function to get the day of the month, 2 digits with leading zeros End


//Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun) Start

function myProgram20() {

    var arrayDayss = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var vGetDate = new Date();
    var vGetDay = vGetDate.getDay();

    document.getElementById("my-20-div-p").innerHTML = "Day : " + arrayDayss[vGetDay];

}

//Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun) End
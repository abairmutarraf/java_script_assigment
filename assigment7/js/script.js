// Write a js program to find maximum between two numbers Start



function myProgram1() {
    var myNum1 = document.getElementById("exampleInputNo1").value;
    var myNum2 = document.getElementById("exampleInputNo2").value;

    if (parseFloat(myNum1) > parseFloat(myNum2)) {
        document.getElementById("my-1-div-p").innerHTML = `Maximum Number Between Two Numbers ${myNum1} and ${myNum2} is : ${myNum1}`;
    } else {
        document.getElementById("my-1-div-p").innerHTML = `Maximum Number Between Two Numbers ${myNum1} and ${myNum2} is : ${myNum2}`;
    }
}


// Write a js program to find maximum between two numbers End


// Write a js program to find maximum between three numbers Start



function myProgram2() {
    var myNum1 = document.getElementById("exampleInputNo3").value;
    var myNum2 = document.getElementById("exampleInputNo4").value;
    var myNum3 = document.getElementById("exampleInputNo5").value;

    if (parseFloat(myNum1) > parseFloat(myNum2) && parseFloat(myNum1) > parseFloat(myNum3)) {
        document.getElementById("my-2-div-p").innerHTML = `Maximum Number Between Three Numbers ${myNum1} and ${myNum2} and ${myNum3} is : ${myNum1}`;
    } else if (parseFloat(myNum2) > parseFloat(myNum1) && parseFloat(myNum2) > parseFloat(myNum3)) {
        document.getElementById("my-2-div-p").innerHTML = `Maximum Number Between Three Numbers ${myNum1} and ${myNum2} and ${myNum3} is : ${myNum2}`;
    } else {
        document.getElementById("my-2-div-p").innerHTML = `Maximum Number Between Three Numbers ${myNum1} and ${myNum2} and ${myNum3} is : ${myNum3}`;
    }
}


// Write a js program to find maximum between three numbers End

// Write a js program to check whether a number is negative, positive or zero Start

function myProgram3() {
    var myNum1 = document.getElementById("exampleInputNo6").value;

    if (parseFloat(myNum1) < parseFloat(0)) {
        document.getElementById("my-3-div-p").innerHTML = `Number ${myNum1} is : Negative`;
    } else if (parseFloat(myNum1) > parseFloat(0)) {
        document.getElementById("my-3-div-p").innerHTML = `Number ${myNum1} is : Positive`;
    } else {
        document.getElementById("my-3-div-p").innerHTML = `Number ${myNum1} is : Zero`;
    }
}

// Write a js program to check whether a number is negative, positive or zero End


// Write a js program to check whether a number is divisible by 5 and 11 or not Start

function myProgram4() {
    var myNum1 = document.getElementById("exampleInputNo7").value;

    var result1 = parseFloat(myNum1) % parseFloat(5);

    var result2 = parseFloat(myNum1) % parseFloat(11);

    if (result1 === 0 && result2 === 0) {
        document.getElementById("my-4-div-p").innerHTML = `Number ${myNum1} is divisible by 5 and 11 `;
    } else {
        document.getElementById("my-4-div-p").innerHTML = `Number ${myNum1} is not divisible by 5 and 11`;
    }
}

// Write a js program to check whether a number is divisible by 5 and 11 or not End


// Write a js program to check whether a number is even or odd Start
function myProgram5() {
    var myNum1 = document.getElementById("exampleInputNo8").value;

    var result1 = parseFloat(myNum1) % parseFloat(2);



    if (result1 == 0) {
        document.getElementById("my-5-div-p").innerHTML = `Number ${myNum1} is Even`;
    } else {
        document.getElementById("my-5-div-p").innerHTML = `Number ${myNum1} is Odd`;
    }
}

// Write a js program to check whether a number is even or odd End



// Write a js program to check whether a year is leap year or not Start 

function myProgram6() {
    var myNum1 = document.getElementById("exampleInputNo9").value;

    var result1 = parseFloat(myNum1) % parseFloat(4);

    var result2 = parseFloat(myNum1) % parseFloat(100);

    var result3 = parseFloat(myNum1) % parseFloat(400);



    if (result3 == 0 || result1 == 0) {
        document.getElementById("my-6-div-p").innerHTML = `Number ${myNum1} is Leap Year`;
    } else {
        document.getElementById("my-6-div-p").innerHTML = `Number ${myNum1} is Not Leap Year`;
    }
}


// Write a js program to check whether a year is leap year or not End


// Write a js program to check whether a character is alphabet or not Start 


function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}


function myProgram7() {
    var myNum1 = document.getElementById("exampleInputNo10").value;

    var result1 = isCharacterALetter(myNum1);




    if (result1 == true) {
        document.getElementById("my-7-div-p").innerHTML = `Number ${myNum1} is a Character`;
    } else {
        document.getElementById("my-7-div-p").innerHTML = `Number ${myNum1} is not a Character`;
    }
}





// Write a js program to check whether a character is alphabet or not End


// Write a js program to input any alphabet and check whether it is vowel or consonant Start

function myProgram8() {
    var myNum1 = document.getElementById("exampleInputNo11").value;

    if ((myNum1.toLowerCase()) == 'a' ||
        (myNum1.toLowerCase()) == 'e' ||
        (myNum1.toLowerCase()) == 'i' ||
        (myNum1.toLowerCase()) == 'o' ||
        (myNum1.toLowerCase()) == 'u') {
        document.getElementById("my-8-div-p").innerHTML = `Character ${myNum1} is a Vowel`;
    } else {
        document.getElementById("my-8-div-p").innerHTML = `Character ${myNum1} is consonant`;
    }
}

// Write a js program to input any alphabet and check whether it is vowel or consonant End


// Write a js program to input any character and check whether it is alphabet, digit or special character Start
function myProgram9() {
    var myNum1 = document.getElementById("exampleInputNo12").value;

    var result1 = /^[a-zA-Z]+$/;
    var result2 = /^[0-9]+$/;


    if (myNum1.match(result1)) {
        document.getElementById("my-9-div-p").innerHTML = `${myNum1} is a Character`;
    } else if (myNum1.match(result2)) {
        document.getElementById("my-9-div-p").innerHTML = `${myNum1} is a Number`;
    } else {
        document.getElementById("my-9-div-p").innerHTML = `${myNum1} is Specail Character`;
    }
}

// Write a js program to input any character and check whether it is alphabet, digit or special character End



// Write a js program to check whether a character is uppercase or lowercase alphabet Start
function myProgram10() {
    var myNum1 = document.getElementById("exampleInputNo13").value;


    if (myNum1 == myNum1.toLowerCase()) {
        document.getElementById("my-10-div-p").innerHTML = `${myNum1} is a Lower Case Character`;
    } else {
        document.getElementById("my-10-div-p").innerHTML = `${myNum1} is a Upper Case Character`;
    }
}

// Write a js program to check whether a character is uppercase or lowercase alphabet End


// Write a js program to input week number and print week day Start


function getDateOfISOWeek(w, y) {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
}


function myProgram11() {


    var currentTime = new Date()
    var myNum1 = document.getElementById("exampleInputNo14").value;
    var getYear = currentTime.getFullYear();
    var result = getDateOfISOWeek(myNum1, getYear);
    var result2 = result.toString().substr(0, 3);

    document.getElementById("my-11-div-p").innerHTML = `Week Day for Week # is ${result2}`;

}


// Write a js program to input week number and print week day End



// Write a js program to input month number and print number of days in that month Start



function myProgram12() {

    var currentTime = new Date()
    var myNum1 = document.getElementById("exampleInputNo15").value;
    var getYear = currentTime.getFullYear();
    var daysInMonth = new Date(getYear, myNum1, 0).getDate();
    document.getElementById("my-12-div-p").innerHTML = `No. of Days in Given Month : ${daysInMonth}`;

}

// Write a js program to input month number and print number of days in that month End


// Write a js program to count total number of notes in given amount Start 


function myProgram13() {

    var amount = document.getElementById("exampleInputNo16").value;

    var notes = [5000, 500, 200, 100, 50, 20, 10, 5, 1];
    var noteCounter = Array(9).fill(0);

    for (let i = 0; i < 9; i++) {
        if (amount >= notes[i]) {
            noteCounter[i] = Math.floor(amount / notes[i]);
            amount = amount - noteCounter[i] * notes[i];
        }
    }


    document.getElementById("my-13-div-p").innerHTML = `Total number of Notes in Given Amount : `;

    var list = document.getElementById("my-13-div-p-1");
    var listInner = "<table>";

    for (let i = 0; i < 9; i++) {
        if (noteCounter[i] != 0) {
            // document.getElementById("my-13-div-p-1").innerHTML = ` ${notes[i]} + " : " +  ${noteCounter[i]} + "<br/>"`;

            listInner += "<tr><td>" + notes[i] + " =  " + noteCounter[i] + "</td> </tr>";
            // document.write(notes[i] + " : " + noteCounter[i] + "<br/>");
        }
    }

    listInner += "</table>";
    list.innerHTML = listInner;



}


// Write a js program to count total number of notes in given amount End


// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following: Start

function myProgram14() {
    var myNum1 = document.getElementById("exampleInputNo17").value;
    var myNum2 = document.getElementById("exampleInputNo18").value;
    var myNum3 = document.getElementById("exampleInputNo19").value;
    var myNum4 = document.getElementById("exampleInputNo20").value;
    var myNum5 = document.getElementById("exampleInputNo21").value;

    var result = Math.round((((parseFloat(myNum1) + parseFloat(myNum2) + parseFloat(myNum3) + parseFloat(myNum4) + parseFloat(myNum5)) / 500) * 100)).toFixed(2);


    document.getElementById("my-14-div-p").innerHTML = `Percentage : ${result} % `;


    if (parseFloat(result) >= 90) {
        document.getElementById("my-14-div-p-1").innerHTML = `Grade : A `;
    } else if (parseFloat(result) >= 80) {
        document.getElementById("my-14-div-p-1").innerHTML = `Grade : B `;
    } else if (parseFloat(result) >= 70) {
        document.getElementById("my-14-div-p-1").innerHTML = `Grade : C `;
    } else if (parseFloat(result) >= 60) {
        document.getElementById("my-14-div-p-1").innerHTML = `Grade : D `;
    } else if (parseFloat(result) >= 50) {
        document.getElementById("my-14-div-p-1").innerHTML = `Grade : E `;
    } else {
        document.getElementById("my-14-div-p-1").innerHTML = `Grade : F `;
    }
}




// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following: End
function calculate() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let bmi = weight / (height * height);
    let result = (bmi * 10000).toFixed(1); // computed BMI value in kg/m2 rounded to 1 decimal point

    document.getElementById("output").innerHTML = result; // display computed BMI value

    /* use if-else to categorize BMI value, display health status message and
       change result background color */   

    if(result < 18.5){   // if value is 18.5 and below
        document.getElementById("status").innerHTML = "Underweight";
        document.querySelector(".result-box").style.backgroundColor = 'gray';
        document.querySelector(".result-box").style.color = 'white';
    }
    else if(result >= 18.5 && result <= 24.9){
        document.getElementById("status").innerHTML = "Optimum range";
        document.querySelector(".result-box").style.backgroundColor = 'darkseagreen';
        document.querySelector(".result-box").style.color = 'white';
    }
    else if(result >= 25 && result <= 29.9){
        document.getElementById("status").innerHTML = "Overweight";
        document.querySelector(".result-box").style.backgroundColor = 'darksalmon';
        document.querySelector(".result-box").style.color = 'white';
    }
    else if(result >=30 && result <= 34.9){
        document.getElementById("status").innerHTML = "Class I Obesity";
        document.querySelector(".result-box").style.backgroundColor = 'tomato';
        document.querySelector(".result-box").style.color = 'white';
    }
    else if(result >=35 && result <= 39.9){
        document.getElementById("status").innerHTML = "Class II Obesity";
        document.querySelector(".result-box").style.backgroundColor = 'crimson';
        document.querySelector(".result-box").style.color = 'white';
    }
    else { // if value is above 40
        document.getElementById("status").innerHTML = "Class III Obesity";
        document.querySelector(".result-box").style.backgroundColor = 'crimson';
        document.querySelector(".result-box").style.color = 'white';
    }
}


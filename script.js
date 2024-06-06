const heightInput = document.querySelector(".height");
const weightInput = document.querySelector(".weight");
const calculateButton = document.querySelector(".calculator");
const result = document.querySelector(".displayResult");

calculateButton.addEventListener("click", ()=> {

    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);

    // conditional checks

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight ${weight}`;
    } else {
        const finalResult = (weight / (height * height / 10000)).toFixed(2)

        if(finalResult < 18.6){
            result.innerHTML = `Your BMI is ${finalResult}. You are underweight`;
            result.style.color = "red";
        } else if (finalResult > 18.6 && finalResult < 24.9){
            result.innerHTML = `Your BMI is ${finalResult}.You are normal`;
            result.style.color = "green";
        } else {
            result.innerHTML = `Your BMI is ${finalResult}. You are overweight`;
            result.style.color = "#ffff11";
        }
    }

})
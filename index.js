//Calorie calculator


let kgEntry;
let cmEntry;
let ageEntry;
let activityLevel;
let gender;
let bmrBase;
let bmrPlus;
let endResult;
let gainmass;
let losemass;



submit.onclick = function(){
    kgEntry = Math.abs(Number(document.getElementById("kgEntry").value));
    cmEntry = Math.abs(Number(document.getElementById("cmEntry").value));
    ageEntry = Math.abs(Number(document.getElementById("ageEntry").value));
    activityLevel = document.getElementById("activityLevel").value;
    gender = document.getElementById("genderEntry").value;

    endResult = document.getElementById("endResult");
    gainmass = document.getElementById("gainmass");
    losemass = document.getElementById("losemass");

    switch(activityLevel){
        case "sedentary":
            activityLevel = 1.2;
            break;
        case "lightlyActive":
            activityLevel = 1.375;
            break;
        case "moderatelyActive":
            activityLevel = 1.55;
            break;
        case "veryActive":
            activityLevel = 1.725;
            break;
        case "extraActive":
            activityLevel = 1.9;
            break;
    }


    switch(gender){
        case "male":
            bmrBase = Math.floor((10 * kgEntry) + (6.25 * cmEntry) - (5 * ageEntry) + 5);
            break;
        case "female":
            bmrBase = Math.floor((10 * kgEntry) + (6.25 * cmEntry) - (5 * ageEntry) - 161);
            break;
    }
    bmrPlus =  bmrBase * activityLevel

    //end output
    endResult = document.getElementById("endResult").textContent = `${bmrPlus} Calories`;
    gainmass = document.getElementById("gainmass").textContent = ` ${bmrPlus + 500} Calories`;
    losemass = document.getElementById("losemass").textContent = ` ${bmrPlus - 500} Calories`;



}
//Reading and writing data to the controls
function init() {
    var btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", readData);
    btnSubmit.addEventListener("mouseover", changeColor);
    var year = document.getElementById("txtVehicleYear");
    year.addEventListener("keypress", restrictNumbersOnly);
}

function restrictNumbersOnly(evt) {
    if (evt.keyCode >= 48 && evt.keyCode <= 57) {

    } else {
        evt.preventDefault();
    }
}

function readData() {
    alert("Hello guys")
}

function changeColor() {
    var btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.style.color = "red";
}

init();

function writeValuesToTextBoxes() {
    // get element By ID
    var txtYear = document.getElementById("txtVehicleYear");
    txtYear.value = 2010;
    //get elements By Tagname
    var labels = document.getElementsByTagName('label');
    console.log(labels);

    var inputs = document.getElementsByTagName('input');
    console.log(inputs);

    //by Class name
    var labelByClass = document.getElementsByClassName("label-size");
    console.log(labelByClass);
}

writeValuesToTextBoxes();

function bindCounrtyValuesToDropdown() {
    var countries = [
        {
            value: "IN",
            text: "India"
        },
        {
            value: "US",
            text: "United States"
        },
        {
            value: "UK",
            text: "United Kingdom"
        }
                  ];

    //fetch the dropdown reference
    var ddlCountry = document.getElementById("ddlCountry");

    for (var i = 0; i < countries.length; i++) {
        //create the option tag
        var optionTag = document.createElement("option");
        optionTag.value = countries[i].value;
        optionTag.innerHTML = countries[i].text;

        //append the option tag as a child to dropdown
        ddlCountry.appendChild(optionTag);
    }
}
bindCounrtyValuesToDropdown();

function createInputElement() {
    var inputElem = document.createElement("input");
    inputElem.type = "input";
    inputElem.id = "chkTermsAndConditions";
    inputElem.placeholder = "check me";
    var terms = document.getElementById('termsConditions')
    terms.appendChild(inputElem);
}
createInputElement();

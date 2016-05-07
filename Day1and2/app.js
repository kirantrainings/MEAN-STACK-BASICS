

function printPersonDetails(){
   
var address={
    pin:0,
    state:"",
    stateCode:"",
    country:"",
    countryCode:""
};

var person= {
    firstName:"",
    lastName:"",
    age:0,
    gender:"",
    personalAddress:address
};
    address.country="India";
    address.countryCode="IN";
    address.pin=12345;
    address.state="Telengana";
    address.stateCode="TG";
    
    person.firstName="Kiran";
    person.lastName="Paturi";
    person.age=30;
    person.gender="M";
    
    person.personalAddress=address;
    
    console.log(person);
}

printPersonDetails();
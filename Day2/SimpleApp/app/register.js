function registerUser(){
    this.firstName="";
    this.lastName="";
    this.age="";
    this.gender="";
    this.email="";
}

//declare the event Handler

function createEventHandlers(){
    document.getElementById("btnRegister")
        .addEventListener("click",handleRegister)
}

function handleRegister(){
    var firstName= document.getElementById("txtFirstName").value;
    var lastName= document.getElementById("txtLastName").value;
    var age= document.getElementById("txtAge").value;
    var email= document.getElementById("txtEmail").value;
    var user = new registerUser();
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    console.log(user);
}

createEventHandlers();
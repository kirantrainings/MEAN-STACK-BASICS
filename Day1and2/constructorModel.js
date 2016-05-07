function employee(fName,lName,sal,ssn){
    var firstName=fName,
        lastName=lName,
        SSN=ssn,
        salary=sal
    this.getFistName=function(){
        return firstName;
    };
    this.getLastName=function(){
        return lastName;
    };
    this.getSSN= function(){
        return SSN.substring(6,10);
    };
    this.getSalary= function(){
        return salary;
    };
    this.setSalary= function(data){
        salary=data;
    };
    this.setSSN = function(item){
        SSN=item;
    };
     this.setFistName = function(item){
        firstName=item;
    };
     this.setLastName = function(item){
        lastName=item;
    };
    
}

var manager=new employee("Kiran","Paturi","40000","1234567890");
/*manager.setFistName("Kiran");
manager.setLastName("Paturi");
manager.setSalary(40000);
manager.setSSN("1234567890");*/
employee.prototype.fullName=function(){
    console.log(firstName+lastName);
}
console.log(manager.getSalary());
console.log(manager.getSSN());
console.log(manager.getFistName());
console.log(manager.getLastName());
var admin = new employee("mmmmm","mmss","40000","1234567890");
console.log(admin);
console.log(admin.fullName());


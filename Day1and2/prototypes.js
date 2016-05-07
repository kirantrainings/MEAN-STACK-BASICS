function employee(){
    var firstName,
        lastName,
        SSN,
        salary;
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

var manager=new employee();
manager.setFistName("Kiran");
manager.setLastName("Paturi");
manager.setSalary(40000);
manager.setSSN("1234567890");

console.log(manager.getSalary());
console.log(manager.getSSN());
console.log(manager.getFistName());
console.log(manager.getLastName());


/*var userName="kiran";

  var outerFunction=function(){
     var lastName= "PVS";
      console.log(userName+" "+lastName);
    
      var innerFunction=function(){
           console.log(userName);
       }
       innerFunction();
  }

outerFunction();*/


var generateTicket=function(transportMode){
    
    var printTicket=function(source,destination){
        
        return "Ticket Generated for"+transportMode+" "+"From:"+source+" To"+destination;
    };
    return printTicket;
}

var kkkk = generateTicket("Bus");
var pppp = generateTicket("train");
var zzzz = generateTicket("Flight");

console.log(kkkk("Hyderabad","Vijayawada"));

console.log(pppp("Hyderabad","Banglore"));

console.log(zzzz("Hyderabad","NewYork"));
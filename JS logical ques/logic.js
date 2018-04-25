function sunday()
{
for (let year = 2014; year <= 2050; year++)
    {
    let d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
       document.write("1st January be a Sunday  "+year +"<br>");
      
    }
} 

function curDate()
{
   let day = new Array(7);
   day[0] = "Sunday";
   day[1] = "Monday";
   day[2] = "Tuesday";
   day[3] = "Wednesday";
   day[4] = "Thursday";
   day[5] = "Friday";
   day[6] = "Saturday";

var cdate = new Date();

var weekday_value = cdate.getDay();

document.write("Today is " + day[weekday_value]);
document.write("<br>");
document.write("Current time is " + cdate.getHours()); 
document.write(":" +cdate.getMinutes() );
document.write("<br>");

var currentDt = new Date();
    var mm = currentDt.getMonth() + 1;
    var dd = currentDt.getDate();
    var yyyy = currentDt.getFullYear();
    var date = mm + '/' + dd + '/' + yyyy;
    document.write("Date is " + date);
}



function unique_char(str1)
{
    var str=str1;
    var uniq="";
    for (var x=0;x < str.length;x++)
    {
   
    if(uniq.indexOf(str.charAt(x))==-1)
      {
         uniq += str[x];  
     
      }
     
    }
       
    document.write("Unique characters in " +str, " are " +uniq);
}



function sortByAge()
{
    var peopleList = [] 
      peopleList[0]=  { name: "John Smith", age: 23 },
      peopleList[1]= { name: "Mary Key", age: 18 },
      peopleList[2]= { name: "Bob-small", age: 6 }
 
    peopleList.sort(function(a, b)
    {
        return a.age-b.age;
    })
    
    for (var i=0; i<peopleList.length; i++) 
      {

        document.write("Element " +i+ " contains: " +peopleList[i].age+ "<br />");
      }

}



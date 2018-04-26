
//-----------------------------------Function 1a ------------------------------------
function dateCalYear(date1,date2)
{
  var d1 = new Date(date1);
  var d2 = new Date(date2);
  var difference_ys = d1.getFullYear() - d2.getFullYear();       

  document.write ("Year's difference " +Math.abs(difference_ys));
}



//-----------------------------------Function 1b ------------------------------------

function dateCalMonth(date1,date2)
{ var res;
  var d1 = new Date(date1);
  var d2 = new Date(date2);
  var difference_ms = d1.getFullYear() - d2.getFullYear();       
  var month = difference_ms *12;
  month -= d1.getMonth() + 1;
  month += d2.getMonth();
 document.write ("Month's difference " +Math.abs(month));

}
 


//-----------------------------------Function 1c ------------------------------------

function dateCalWeeks(date1,date2) 
 {
    var d1 = new Date(date1);
    var d2 = new Date(date2);
    var res;
    var diff =(d1.getTime() - d2.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7);
    res = Math.abs(Math.round(diff));
     document.write ("Week's difference " +Math.abs(res));
    
  
 }



 //-----------------------------------Function 1d ------------------------------------


 function dateCalDays(date1, date2) 
 {
    var ONEDAY = 1000 * 60 * 60 * 24;
    var d1 = new Date(date1);
    var d2 = new Date(date2);
  
    var difference_ms = Math.abs(d1.getTime() -d2.getTime());

    document.write("Day's difference " +Math.round(difference_ms/ONEDAY) ) ;
}




 //---------------------------------Function 2 ------------------------------------


function arrElement()
{
    var numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    var len=  numbers.length;
    document.write ("Last Element is: " +numbers[len-1]);

}




 //-----------------------------------Function 3 ------------------------------------

function dateDiff( date1)
{
    var ONEDAY = 1000 * 60 * 60 * 24;
    var d1 = new Date(date1);
    var ds = new Date(date1);
    // var d = new Date();
    var dd = ds.getDate();
    var mm = ds.getMonth()+1; //January is 0!
    var yyyy = ds.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

 ds = mm + '/' + dd + '/' + yyyy; 
    var d2 = new Date();
  
    var difference_ms = Math.abs(d1.getTime() -d2.getTime());

    document.write(" Difference in days between  " +ds) ;

    document.write(" and today is " +Math.round(difference_ms/ONEDAY));


}





//-----------------------------------Function 4 ------------------------------------

function filter_array()
 {
       var test_array = [NaN, 0, 15, false, -22, '',undefined, 47, null]; 
       var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length)
     {
        var value = test_array[index];

        if (value) 
        {
            result[++resIndex] = value;
        }
    }

    document.write (result);
}

//-----------------------------------Function 5 ------------------------------------
function add_data(f1,f2)
{
    let fruits = ['banana', 'orange', 'mango'];
    fruits = [...fruits.slice(0,3), f1,f2];
    document.getElementById("demo").innerHTML = fruits;
   

}
function remove_data(f1)
{
    let fruits = ['banana', 'orange', 'mango', 'cherry', 'apple'];
    fruits.splice(3,1);
    document.getElementById("demo1").innerHTML = fruits;


}
function length()
{
var len;
let fruits = ['banana', 'orange', 'mango', 'cherry', 'apple'];
fruits.splice(3,1);
 len =fruits.length;
    document.getElementById("demo2").innerHTML = len;


}
function tra()
{
    let fruits = {  
        fruit1: 'banana',
        fruit2: 'orange',
        fruit3: 'mango',
        fruit4: 'apple'

      };
      for (let [key, value] of Object.entries(fruits)) {  
        console.log(key + ':' + value);
      }
}



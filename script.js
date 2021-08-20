function updateRate() /* updates rate when slider moves */
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=""+rateval+" %";
}

function compute() /* calculates interest */
{
var principal = document.getElementById("principal").value; /* user entry in the "Amount" field*/
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var year = new Date().getFullYear() + parseInt(years); /* converts no of years into actual year */
 
var interest = (principal * years * rate / 100);/*calculates interest percentage*/   

if (principal > 0) /*validates user entry higher than 0*/{
document.getElementById("result").innerHTML=`If you deposit ${principal.bold().fontcolor("red")},\<br>at an interest rate of ${rate.bold().fontcolor("red")}. \<br>You will receive an amount of`;/*diplay*/

var int_line = document.getElementById("interest_line");/*a new var to avoid typing the whole line*/
int_line.style.color = "red";/*to highlight interest*/
int_line.style.fontWeight = "bold";
int_line.innerHTML= `${interest}`;/*diplay*/
document.getElementById("interest_line_punk").innerHTML=`,\<br>`;/*diplay*/

document.getElementById("year_line").innerHTML=`in the year `;/*diplay*/

var yr_val = document.getElementById("year_value");/*a new var to avoid typing the whole line*/
yr_val.style.color = "red";/*to highlight year*/
yr_val.style.fontWeight = "bold";
yr_val.innerHTML= `${year}`;/*diplay*/

  }
else /*popup alert if user intry is 0 or less*/
  {
  alert("Enter a positive number");
  }
    
}

 
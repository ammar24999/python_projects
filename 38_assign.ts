/* Cities: Write a function called describe_city() that accepts the name of 
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, 
at least one of which is not in the default country. */
function describe_city(name,country="Pakistan"){
    return (`${name} is in ${country} ` )
}
console.log(describe_city("karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("Pindi"));
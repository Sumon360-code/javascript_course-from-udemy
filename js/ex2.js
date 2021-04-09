function result(celsius){
    let fahrenheit = (9 * celsius / 5) + 32;
    return fahrenheit;
}
var result1 = parseFloat(document.getElementById("celsius_1").innerHTML);
document.getElementById("fahr_1").innerHTML = result(result1);

var result2 = parseFloat(document.getElementById("celsius_2").innerHTML);
document.getElementById("fahr_2").innerHTML = result(result2);

var result3 = parseFloat(document.getElementById("celsius_3").innerHTML);
document.getElementById("fahr_3").innerHTML = result(result3);


// get the highest number of students
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
let getName = classification.slice(-3, );
document.getElementById("best_students").innerHTML = getName;



// show title from the object

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4,
    'total_reviews' : function (){
       let total = this['5_stars_reviews'] + this['4_stars_reviews'] + this['3_stars_reviews'] + this['2_stars_reviews'] + this['1_stars_reviews'];
        return total;
    }
}
  
let courseTitle = course.title;
document.getElementById("course_title").innerHTML = courseTitle;

let category = course.categories[0];
document.getElementById("main_category").innerHTML = category;

let totalPercentage =Math.round( (course['5_stars_reviews'] / course.total_reviews() * 100))
document.getElementById("reviews_5_stars").innerHTML = totalPercentage + "%";


// get name from array
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
shoppingList.pop();
shoppingList.unshift("chocolate");
console.log(shoppingList);

shoppingList.push("cheese", "eggs");
console.log(shoppingList)
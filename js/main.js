//TASK 1-------------------------------------------------------------------
//Access HTML element with id tag-line.
//Access all headings that belong to div with the class name bg-main-content.
//Create the variable collect and assign it with content of tag-line.
//Loop through the array of headings and append the content of each heading to variable collect
//After the loop, use alert to print collect





var tagline = document.getElementById("tag-line");
console.log("tagline: ", tagline);

var h2 = document.querySelectorAll(".bg-main-content h2");
console.log("h2: ", h2);

//accesses the content of tag-line
var collect = tagline.innerHTML + "\n------------------------------------------------\n";
console.log("collect: ", collect);

var i;

for (i=0; i<h2.length; i += 1){
    collect += h2[i].innerHTML + "\n";
};

alert(collect);

    




//TASK 2-------------------------------------------------------------------
//Access 13th div with class name box that belongs to div with the class name bg-main-content. 
//You can name the variable when_to_launch.
//Use property children to "scoop" in array all HTML elements that belong to that div.
//Create the variable collect and assign it with content of heading that belongs to gotten array.
//Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
//After the loop, use alert to print collect



//var when_to_launch = h2[12].innerHTML + "\n-----------------------------\n";

var when_to_launch = document.querySelectorAll(".bg-main-content .box")[12]; //sets the 13th div inside this var

var children = when_to_launch.children; //puts all children of 13th div in this var

var collect2 = when_to_launch.children[0].innerHTML + "\n-----------------------\n"; //puts h2 in this var

for (i=1; i<children.length; i+=1) {
    collect2 += children[i].innerHTML + "\n\n";
}    
    

alert(collect2);


















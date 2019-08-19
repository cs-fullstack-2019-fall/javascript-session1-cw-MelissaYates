// Create a FacebookUser class with one attribute: name. In a main function use the array below to create an array of FacebookUser objects
// and console.log that new array.
//
// let myArray = ['Marvin','Ferris','Brynn','Damian','Whitney','Leila','Frances','Keith','Cara','Ainsley',
// 'Adrian','Adam','Iona','Akeem','Scarlett','Murphy','Angelica','Georgia','Calvin','Amy','Merrill','Gloria','Charissa',
// 'Colorado','Inga','Eden','Carla','Hedley','Thaddeus','Maggie','Kimberly','Ezra','Kane','Candace','Cade','Dante','Scott',
// 'Philip','Dieter','Kristen','Nerea','Ivor','Stacey','Tanner','Judith','Emery','Lionel','Josiah','Wesley','Anne','Lane','Kameko',
// 'Colleen','Travis','Abdul','Scarlet','Quail','Larissa','Palmer','Irene','Cherokee','Rajah','Maxine','Yen','Bruce','Matthew','Ivan',
// 'Georgia','Charissa','Thaddeus','Jack','Dean','Florence','Madonna','Dennis','Zeus','Destiny','Maia','Mara','Florence','Anika','Brenda',
// 'Jocelyn','Zia','Kiona','Lars','Molly','Gregory','Felix','William','Dahlia','Gil','Byron','Daria','Nevada','Claudia','Zelenia','Nathan','Judah','Sheila']
//
// Challenge
// In your HTML file, include in below div tag in the position as seen below:
//
//     <body>
// <div id="classwork"></div>
//     <script src="index.js"></script>
//     </body>
// Using the array you created in the problem above, concatenate every element's name attribute to the [OBJECT NAME] position below.
// Make sure each element is no longer an array and concatenating each new string to a new variable.
//
// <h1 style='color:blue;background:red;text-shadow: -2px 2px 2px #000000;'>[OBJECT NAME]</h1>
// Lastly, assign the new string variable to the code below:
//
//     document.getElementById("classwork").innerHTML = [NEW STRING]

class FacebookUser{
    constructor(name){
        this.name_p = name;
    }
}

function main(){
    let myArray = ['Marvin','Ferris','Brynn','Damian','Whitney','Leila','Frances','Keith','Cara','Ainsley','Adrian','Adam','Iona','Akeem','Scarlett','Murphy','Angelica','Georgia','Calvin','Amy','Merrill','Gloria','Charissa','Colorado','Inga','Eden','Carla','Hedley','Thaddeus','Maggie','Kimberly','Ezra','Kane','Candace','Cade','Dante','Scott', 'Philip','Dieter','Kristen','Nerea','Ivor','Stacey','Tanner', 'Judith','Emery','Lionel','Josiah','Wesley','Anne','Lane','Kameko',
        'Colleen','Travis','Abdul','Scarlet','Quail','Larissa','Palmer','Irene','Cherokee','Rajah','Maxine','Yen','Bruce','Matthew','Ivan','Georgia','Charissa','Thaddeus','Jack','Dean','Florence','Madonna','Dennis','Zeus','Destiny','Maia','Mara','Florence','Anika','Brenda',
        'Jocelyn','Zia','Kiona','Lars','Molly','Gregory','Felix','William','Dahlia','Gil','Byron','Daria','Nevada','Claudia','Zelenia','Nathan','Judah','Sheila'];
let array_of_facebook_user = [];
array_of_facebook_user = myArray.map
    (
        function(eachElement)
        {
           return new FacebookUser(eachElement);

        }
    );
console.log(array_of_facebook_user);
let name = "";
let newString = "";

    "<h1 style='color:blue;background:red;text-shadow: -2px 2px 2px #000000;'>;</h1>";
document.getElementById("classwork").innerHTML = newString;
}

main();



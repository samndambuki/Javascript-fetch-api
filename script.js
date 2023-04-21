//fetch - perform a request
//returns a promise
//promise will be fulfilled or rejected

//fufilled - then
//reject - catch
//data - argument - all data stored inside the argument
//data double quotes means it is in json format
fetch('https://fakestoreapi.com/products').then((data)=>{
    // console.log(data);
    //convert into js object
    return data.json();
}).then((completedata)=>{
    //array index and title 
    // console.log(completedata[2].title);
    //display data in browser
    // document.getElementById('root').innerHTML  = completedata[2].title;
    //display cards from api

    //create a variable
    let data1 = "";
    //array
    //map method 
    //take 3 arguments
    //first - current value //run for each element in an array an return output
    //second - index no.
    //third - array working on 


    completedata.map((values)=>{
        //have all data
        //template literals - use $
        data1 += `<div class="card">
        <h1 class="title">${values.title}</h1>
        <img class="images" src=${values.image} alt="img">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    });

    document.getElementById("cards").innerHTML = data1;

    //get some errror - hanlde using catch

}).catch((err)=>{
    console.log(err);
})
 
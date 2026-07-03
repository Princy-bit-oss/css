const product=[
    {
        name:"Welcome Baby Decor",
        decription:"Decorating little arrivals with love and happiness.",
        price:"₹6500",
        image:"image1.JPG",
    },
    {
        name:"Merry Christmas Decor",
        decription:"Spreading festive magic with beautifully crafted Christmas décor",
        price:"₹4500",
        image:"image2.jpg",
    },
    {
        name:"Jungle Theme Bdy Decor",
        decription:"Bringing wild adventures to life with jungle-themed birthday décor",
        price:"₹5000",
        image:"image3.jpg",
    },
];

const cardcontainer = document.getElementById("cardcontainer");

const name='Princy'
cardcontainer.innerHTML =  
product.map(
    (product) => 
      `
        <div class="card">
            <img src="${product.image}" alt="${product.name}" class="card-img">
            <h2>${product.name}</h2>
            <p>${product.decription}</p>
            <p class="price">${product.price}</p>
        </div>
    `
  );
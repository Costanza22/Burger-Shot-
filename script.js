let foodContainer = document.querySelector('.food-container');

const fooditem=[
    {
        FoodName: "Classic Burger",
        foodimg: 'images/BurgerShot-Bleeder-GTAIV-Poster.webp',
        price: "9,9c",
        type: "Burgers",
        des: "Try it now!"
    },
    {
        FoodName: "Triple Shot Burger",
        foodimg: 'images/Heartstopperadvertisement.webp',
        price: "12c",
        type: "Burgers",
        des: "Try it now!"
    },
    {
        FoodName: "Money Shot Meal/The Bleeder Meal",
        foodimg: 'images/BurgerShot-GTAIV-MenuPoster1.webp',
        price: "6,99c/3,99c ",
        type: "Combos",
        des: "Try it now!"
    },
    {
        FoodName: "Torpedo Meal/Meat Free Meal",
        foodimg: 'images/BurgerShot-GTAIV-MenuPoster2.webp',
        price: "6,66c/4,99c",
        type: "Combos",
        des: "Try it now!"
    },
    {
        FoodName: "MooKids Meal",
        foodimg: 'images/BurgerShot-GTASA-MooKidsMeal.webp',
        price: "2c",
        type: "Kids",
        des: "McShot with a extra"
    },
    {
        FoodName: "Beef Tower",
        foodimg: 'images/BurgerShot-GTASA-BeefTower.webp',
        price: "5c",
        type: "Kids",
        des: "Mexican Beef with extra"
    },
    {
        FoodName: "MeatStack",
        foodimg: 'images/BurgerShot-GTASA-MeatStack.webp',
        price: "RS 10c",
        type: "Kids",
        des: "Classic Shot Meat with extra"
    },

    {
        FoodName: "SaladMeal",
        foodimg: 'images/BurgerShot-GTASA-SaladMeal.webp',
        price: "5c",
        type: "Kids",
        des: "Fit Option with extra"
    }
    

  
]


const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'All')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Combos'){
                if(box.classList.contains('Combos'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Kids'){
                if(box.classList.contains('Kids'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Burgers'){
                if(box.classList.contains('Burgers'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Gallery'){
                if(box.classList.contains('Gallery'))
                {
                    box.classList.remove('d-none')
                }
                
            }
        })
        
    })
})
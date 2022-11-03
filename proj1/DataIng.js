// ingredient data


 ingredients =[
    {
        id:0,
        name:'onion',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUP9sdN6eTkMw2PeoTogbYIOZJ7UQ-tXANuw&usqp=CAU ',
        calories:40 ,


    },
    {
        id:1,
        name:'olive oil',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcCxEdyBM3Z8lvcVZKYMqRTr-OywA4bn93Q&usqp=CAU',
        calories:884 ,
    },
    {
        id:2,
        name:'garlic',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR17SZdkqdI6ZygsjiBmjgmV4oviP8iZ8tNA&usqp=CAU',
        calories:111 ,
    },
    {
        id:3,
        name:'penne pasta',
        img:'https://www.barilla.com//-/media/images/en_us/products/groups/ranges/classic-blue-box/bb_penne_pp.png?la=en-US',
        calories:118 
    }
]

class Ingredient{
    
     constructor(id,name, img, calories){
        this.id=id;
        this.name=name;
        this.img=img;
        this.calories=calories;
   }

 }
 class DishRecipe{
    constructor(name,ingredients,time,cookingMethod,img) {
        this.name=name;
        this.ingredients=ingredients;
        this.time=time;
        this.cookingMethod=cookingMethod;
        this.img=img;
    }
 }
 
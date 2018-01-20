let menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    //Seeter and getter appetizers
		set appetizers(appetizersIn) { this._appetizers.push(appetizersIn); },
    get appetizers() { return this._appetizers; },   
    //Seeter and getter mains
    set mains(mainsIn) { this._mains.push(mainsIn); },
    get mains() { return this._mains; },
    //Seeter and getter desserts
    set desserts(dessertsIn) { this._desserts.push(dessertsIn); },
    get desserts() { return this._desserts; },
    
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
			mains: this._courses.mains,
      desserts: this._courses.desserts,
    }
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    
    return dishes[randomIndex];    
  },
  
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, The price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers','Salad', 3.50);
menu.addDishToCourse('appetizers','Bruschetti', 7);
menu.addDishToCourse('appetizers','Spiced Olives', 5.80);

menu.addDishToCourse('mains', 'Grilled Chicken', 12.89);
menu.addDishToCourse('mains', 'Pork Ribs', 13.20);
menu.addDishToCourse('mains', 'Grilled fish', 10.40);

menu.addDishToCourse('desserts', 'Cheesecake', 5);
menu.addDishToCourse('desserts', 'Chocolate cake', 8);
menu.addDishToCourse('desserts', 'Ice Cream', 4);

let meal = menu.generateRandomMeal();
console.log(meal);
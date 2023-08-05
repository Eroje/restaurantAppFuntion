const menu = {
    _meal: '', // To receive meal inputed
    _price: 0, // To receive price inputed
  
    set meal (mealToCheck) { // Ensure meal is a string
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
      }
    },
  
    set price (priceToCheck) { // Ensure price is a number
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
      }
    },
  
    get todaysSpecial () {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for ${this._price} dollars!`
      } else {
        return 'Meal or Price was not set correctly!'
      }
    }
  };
  
  menu.meal = 'Chicken & Chips';
  menu.price = 15;
  
  console.log(menu.todaysSpecial);
  
  
  
  
  
  
  
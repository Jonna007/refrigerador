class Refrigerator {
    constructor(brand, color, height, price, energyConsumption) {
      this.brand = brand
      this.color = color;     
      this.height = height;     
      this.price = price;           
      this.energyConsumption = energyConsumption;
      this.meal = ['pollo', 'carne', 'yogurt', 'beer'];              
    }
  
    
    addMeal(foodItem) {
      this.meal.push(foodItem);
      alert(`Se ha añadido ${foodItem} al refrigerador. Estado actual: ${this.meal.join(', ')}.`);
    }
  
    removeMeal(foodItem) {
      const index = this.meal.indexOf(foodItem);
      if (index > -1) {
        this.meal.splice(index, 1);
        alert(`Se ha eliminado ${foodItem} del refrigerador. Estado actual: ${this.meal.join(', ')}.`);
      } else {
        alert(`El alimento ${foodItem} no se encuentra en el refrigerador.`);
      }
    }
  
    showMeal() {
      alert(`El refrigerador contiene: ${this.meal.join(', ')}.`);
    }
  
    showInfo (){
        alert(`Brand: ${this.brand}, Color: ${this.color}, Height: ${this.height}, Price: ${this.price}, EnergyConsumption: ${this.energyConsumption}`);
    }
  
    getPrice() {
        alert(`El precio del refrigerador es: $${this.price}.`);
      }
    
    newPricePrice(newPrice) {
      this.price = newPrice;
      alert(`El nuevo precio del refrigerador es: $${this.price}.`);
    }
  }
  

  let refrigerador = new Refrigerator("Samsung", "blanco", "1.80m", "2.000$", "Bajo");
  refrigerador.showInfo();
  refrigerador.getPrice(); 
  refrigerador.newPricePrice("1.999$"); 
  refrigerador.showMeal();
  refrigerador.addMeal("ensalada");
  refrigerador.removeMeal("ensalada");
  refrigerador.addMeal("pizza");
  
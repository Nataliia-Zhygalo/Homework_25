
/*
1. Створити клас Людина.
Властивості:
імʼя;
вік.
Методи:
конструктор, який приймає два параметри: імʼя та вік;
метод, який виводить у консоль інформацію про людину.

2. Створити клас Автомобіль.
Властивості:
марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
власник.
Методи:
конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

В якості демонстраціїї створити:
декілька екземплярів класу Людина;
декілька екземплярів класу Автомобіль;
присвоїти власників автомобілям.
*/
function Human(name, age) {
  this.name = name;
  this.age = age;
  Human.prototype.getInfo = function () {
  return `Name: ${this.name} \nAge: ${this.age}`
    }
}
function Car(make, model, year, licensePlate) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.licensePlate = licensePlate;

  Car.prototype.getInfo = function () {
       let info = `Car: ${this.make} \nModel: ${this.model} \nYear: ${this.year}\nLicense plate: ${this.licensePlate}\n`;
       if (this.owner == undefined) {
      return info + 'Owner is undefined.';
        } else {
        return info + this.owner.getInfo();  
        }
      }
    }
  Car.prototype.getOwner = function (owner) {
     if (owner.age >= 18) {
       this.owner = owner;
       } else {
       console.log(`${owner.name} is under 18`);
       }
     }
   

const humanOne = new Human('Nataliia', 31);
console.log(humanOne.getInfo());

const humanTwo = new Human('Solomiia', 12);
console.log(humanTwo.getInfo());

const carOne = new Car('Audi', 'Q5', 2016, 'BC345678');
carOne.getOwner(humanOne); 
console.log(carOne.getInfo());

const carTwo = new Car('Ford', 'Focus', 2020, 'BC67878');
carTwo.getOwner(humanTwo);
console.log(carTwo.getInfo());














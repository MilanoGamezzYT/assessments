const Cars = [
    { brand: "Audi", model: "A3" },
    { brand: "BMW", model: "3 Series" },
    { brand: "Chevrolet", model: "Camaro" },
    { brand: "Dodge", model: "Charger" },
    { brand: "Ford", model: "Mustang" },
    { brand: "Honda", model: "Civic" },
    { brand: "Infiniti", model: "Q50" },
    { brand: "Jaguar", model: "F-Type" },
    { brand: "Kia", model: "Optima" },
    { brand: "Lamborghini", model: "Huracan" },
    { brand: "Mercedes-Benz", model: "C-Class" },
    { brand: "Ferrari", model: "F8 Tributo" },
    { brand: "Nissan", model: "Altima" },
    { brand: "Porsche", model: "911" },
    { brand: "Range Rover", model: "Evoque" },
    { brand: "Subaru", model: "Impreza" },
    { brand: "Ferrari", model: "SF90 Stradale" },
    { brand: "Tesla", model: "Model S" },
    { brand: "Toyota", model: "Corolla" },
    { brand: "Volkswagen", model: "Golf" },
    { brand: "Acura", model: "NSX" },
    { brand: "Bentley", model: "Continental" },
    { brand: "Cadillac", model: "Escalade" },
    { brand: "Ferrari", model: "488 GTB" },
    { brand: "Dodge", model: "Challenger" },
    { brand: "Ferrari", model: "458" },
    { brand: "GMC", model: "Sierra" },
    { brand: "Hyundai", model: "Elantra" },
    { brand: "Jeep", model: "Grand Cherokee" },
    { brand: "Ferrari", model: "SF90 Stradale" },
    { brand: "Koenigsegg", model: "Agera" },
    { brand: "Lexus", model: "LS" },
    { brand: "Maserati", model: "GranTurismo" },
    { brand: "Nissan", model: "GT-R" },
    { brand: "Pagani", model: "Huayra" },
    { brand: "Rolls-Royce", model: "Ghost" },
    { brand: "Smart", model: "ForTwo" },
    { brand: "Tesla", model: "Model X" },
    { brand: "Toyota", model: "Prius" },
    { brand: "Volkswagen", model: "Jetta" },
    { brand: "Alfa Romeo", model: "Giulia" },
    { brand: "Bugatti", model: "Chiron" },
    { brand: "Chevrolet", model: "Corvette" },
    { brand: "Ferrari", model: "Portofino" },
    { brand: "Fiat", model: "500" },
    { brand: "GMC", model: "Yukon"},
    { brand: "Honda", model: "Accord"},
    { brand: "Jaguar", model: "XJ"},
    { brand: "Kia", model: "Soul"},
    { brand: "Lamborghini", model: "Aventador"},
    { brand: "Mercedes-Benz", model: "E-Class"},
    { brand: "Nissan", model: "Maxima"},
    { brand: "Porsche", model: "Panamera"},
    { brand: "Range Rover", model: "Sport"},
    { brand: "Subaru", model: "Legacy"},
    { brand: "Tesla", model: "Model 3"},
    { brand: "Toyota", model: "Camry"},
    { brand: "Volkswagen", model: "Passat"},
];

  const carList = document.getElementById("carList");
  function compareBrands(a, b) {
    if (a.brand < b.brand) {
      return -1;
    } else if (a.brand > b.brand) {
      return 1;
    } else {
      return 0;
    }
  }
  
  const sortedCars = Cars.sort(compareBrands);
  

  sortedCars.forEach((car) => {
    const listItem = document.createElement("li");
    listItem.textContent = car.brand + " " + car.model;

    if (car.brand === "Ferrari") {
      listItem.style.color = "red";
    }

    carList.appendChild(listItem);
  });
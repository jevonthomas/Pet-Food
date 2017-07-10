let petFood = (function () {
  dogFood = [];

  return {
    loadDogFood: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        dogFood = JSON.parse(this.responseText).dog_brands;
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // dogFood array as an argument.
        callbackToInvoke(dogFood);
      });
      //Tell which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
      loader.open("GET", "dog-food.json");
      //Get request
      loader.send();
    }
  };
})();
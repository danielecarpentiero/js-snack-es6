const bikes = [
  {
    bikeName: "augusto",
    bikeWeight: 38,
    bikeImage: "../img/81KvpYgtwpL._AC_UF894,1000_QL80_.jpg",
  },
  {
    bikeName: "giorgina",
    bikeWeight: 22,
    bikeImage: "../img/1692-0-0-2687-10000-5876-1000.jpg",
  },
  {
    bikeName: "teodora",
    bikeWeight: 26,
    bikeImage: "../img/2023-Canyon-Ultimate-CFRCrop-9f7857a.jpg",
  },
  {
    bikeName: "fausta",
    bikeWeight: 19,
    bikeImage: "../img/best_lightweight_bikes_21.jpg",
  },
  {
    bikeName: "alda",
    bikeWeight: 30,
    bikeImage: "../img/Lightweight_Urgestalt_bikeTest_web_Main_side.jpg",
  },
  {
    bikeName: "duda",
    bikeWeight: 41,
    bikeImage: "../img/MG_BR_HC-2021_Rebecca-Richardson_01-77d5685.jpg",
  },
  {
    bikeName: "manila",
    bikeWeight: 23,
    bikeImage: "../img/wQSfPdUmv6RrZEecuN4eU-320-80.jpg",
  },
];
console.log(bikes[5].bikeWeight);
const bikeContainer = document.getElementById("contenitore");

bikes.forEach((bike) => {
  bikeContainer.innerHTML = ` <div class="bike">
  <div class="image">
    <img
      src="${bike.bikeImage}"
      class="img-fluid"
      alt=""
    />
    <h2 class="text-center">${bike.bikeName}</h2>
    <h3 class="text-center">Peso: ${bike.bikeWeight}</h3>
  </div>
</div>`;
  console.log(bike);
});

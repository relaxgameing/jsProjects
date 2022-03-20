"use strict";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
const mainmap = document.getElementById("map");


class App {
  #map;
  #mapevent;
  #Workouts = [];
  constructor() {
    this._getPosition();
    inputType.addEventListener("change", this._toggleElevationFeild.bind(this));
    form.addEventListener("submit", this._submitForm.bind(this));
  }
  //to start by getting position
  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        alert("can get your location");
      }
    );
  }
  //to load map on getting location
  _loadMap(position) {
    const location = [position.coords.latitude, position.coords.longitude];

    this.#map = L.map("map").setView(location, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // L.marker(location).addTo(this.#map).bindPopup("current marked").openPopup();

    this.#map.on("click", this._showForm.bind(this));
  }
  //to show form on click
  _showForm(mape) {
    this.#mapevent = mape;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationFeild() {
    inputElevation.closest("div").classList.toggle("form__row--hidden");
    inputCadence.closest("div").classList.toggle("form__row--hidden");
  }
  //submit form
  _submitForm(e) {
    e.preventDefault();
    if (
      inputDistance.value < 1 ||
      inputDuration.value < 1 ||
      inputCadence.value < 1
    ) {
      alert("input positive integer");
      return;
    }
    const type = inputType.value;
    const distance = inputDistance.value;
    const duration = inputDuration.value;
    const cadence = inputCadence.value;
    this._newWorkout.bind(this, type, distance, duration, cadence);
    inputCadence.value = inputDistance.value = inputDuration.value = "";
    form.classList.add("hidden");

    //add marker on the map
    const { lat, lng } = this.#mapevent.latlng;
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          maxHeight: 60,
          autoClose: false,
          closeOnClick: false,
          className: `${type}-popup`,
        })
      )
      .setPopupContent(`${type}`)
      .openPopup();

    //to add the show list in the bar
    if (type === "running") {
      ul.insertAdjacentHTML(
        "beforeend",
        `<li class="workout workout--running" data-id="1234567890">
      <h2 class="workout__title">Running on April 14</h2>
      <div class="workout__details">
        <span class="workout__icon">🏃‍♂️</span>
        <span class="workout__value">${distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${duration}</span>
        <span class="workout__unit">min</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">4.6</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
      </li>`
      );
    } else {
      ul.insertAdjacentHTML(
        "beforeend",
        `<li class="workout workout--cycling" data-id="1234567891">
      <h2 class="workout__title">Cycling on April 5</h2>
      <div class="workout__details">
        <span class="workout__icon">🚴‍♀️</span>
        <span class="workout__value">${distance}}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${duration}</span>
        <span class="workout__unit">min</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">16</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${cadence}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>`
      );
    }
  }

  _newWorkout(type, distance, duration, cadence,this) {
    if (type === "running") {
      this.#Workouts.push(new Running(distance, duration,  cadence,this));
    } else {
      this.#Workouts.push(
        new Cycling(distance, duration,  elevationGain,this)
      );
    }
  }
}

const app = new App();

class Workout {
  #id;
  #distance;
  #duration;
  #coords;
  #date;

  constructor(distance, duration,this) {
    this.#coords = this.#mapevent.latlng;
    this.#distance = distance;
    this.#duration = duration;
  }
}

class Running extends Workout {
  #name;
  #cadence;
  #pace;
  constructor(distance, duration,  cadence,this) {
    super(distance, duration,this);
    this.#cadence = cadence;

  }
}
class Cycling extends Workout {
  #name;
  #elevationGain;
  #speed;
  constructor(distance, duration, elevationGain) {
    super(distance, duration,this);
    this.#elevationGain = elevationGain;
  }
}

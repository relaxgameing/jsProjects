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
// const mainmap = document.getElementById("map");

class App {
  #map;
  #mapevent;
  #Workouts = [];
  constructor() {
    this._getPosition();
    this._showLocalStorage();
    inputType.addEventListener("change", this._toggleElevationFeild);
    form.addEventListener("submit", this._submitForm.bind(this));
    containerWorkouts.addEventListener("click", this._viewIn.bind(this));
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

  _loadMap(position) {
    const location = [position.coords.latitude, position.coords.longitude];

    this.#map = L.map("map").setView(location, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    console.log();
    L.marker(location)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          maxHeight: 60,
          autoClose: false,
          closeOnClick: false,
          className: `leaflet-popup`,
        })
      )
      .setPopupContent(`current position`)
      .openPopup();

    this.#map.on("click", this._showForm.bind(this));
    this.#Workouts.forEach((work) => this._addMarker(work));
  }

  _showForm(mape) {
    this.#mapevent = mape;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationFeild() {
    inputElevation.closest("div").classList.toggle("form__row--hidden");
    inputCadence.closest("div").classList.toggle("form__row--hidden");
  }

  _submitForm(e) {
    e.preventDefault();
    if (inputDistance.value < 1 || inputDuration.value < 1) {
      return alert("input positive integer");
    }

    const type = inputType.value;
    const distance = inputDistance.value;
    const duration = inputDuration.value;

    let gain;
    if (type === "running") {
      gain = inputCadence.value;
    } else {
      gain = inputElevation.value;
    }

    this._newWorkout.bind(this, type, distance, duration, gain);

    inputCadence.value =
      inputElevation.value =
      inputDistance.value =
      inputDuration.value =
        "";

    form.classList.add("hidden");
    this._newWorkout(type, distance, duration, gain);
  }

  _newWorkout(type, distance, duration, gain) {
    let workout;
    if (type === "running") {
      workout = new Running(distance, duration, gain, this.#mapevent.latlng);
      this.#Workouts.push(workout);
    } else {
      workout = new Cycling(distance, duration, gain, this.#mapevent.latlng);
      this.#Workouts.push(workout);
    }

    this._addMarker(workout);
    this._addHtml(workout);
    this._setlocalStorage();
  }

  _addMarker(workout) {
    console.log(workout.coords);
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          maxHeight: 60,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.type}`)
      .openPopup();
  }

  _addHtml(workout) {
    const html = `<li class="workout workout--${workout.type}" data-id=${
      workout.id
    }>
    <h2 class="workout__title">Running on April 14</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
      } </span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.gain}</span>
      <span class="workout__unit">spm</span>
    </div>
    </li>`;

    containerWorkouts.insertAdjacentHTML("beforeend", html);
  }

  _viewIn(e) {
    if (!e.target.closest(".workout")) {
      return;
    }

    const currentId = e.target.closest(".workout").dataset["id"];
    let found;
    this.#Workouts.forEach(function (e) {
      if (e.id === Number(currentId)) {
        found = e;
        return;
      }
    });
    this.#map.panTo(found.coords);
  }

  _setlocalStorage() {
    localStorage.setItem("workout", JSON.stringify(this.#Workouts));
  }

  _showLocalStorage() {
    const data = JSON.parse(localStorage.getItem("workout"));
    if (!data) {
      return;
    }

    this.#Workouts = data;
    this.#Workouts.forEach((work) => this._addHtml(work));
  }

  reset() {
    localStorage.clear();
    location.reload();
  }
}

const app = new App();

class Workout {
  date = new Date();

  constructor(distance, duration, coords) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
    this.id = Date.now();
  }

  _calSpeed() {
    return Math.round(this.distance / this.duration);
  }
}

class Running extends Workout {
  type = "running";
  constructor(distance, duration, cadence, coords) {
    super(distance, duration, coords);
    this.gain = cadence;
    this.speed = this._calSpeed();
  }
}
class Cycling extends Workout {
  type = "cycling";

  constructor(distance, duration, elevationGain, coords) {
    super(distance, duration, coords);
    this.gain = elevationGain;
    this.speed = this._calSpeed();
  }
}

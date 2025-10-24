<h1 align="center">🌍 WeatherApp — Vue 3 + Pinia + SCSS</h1>

<p align="center">
  <strong>A modern weather application built with Vue 3, Pinia, and SCSS.</strong><br>
  Search for cities and check real-time weather data using the Open-Meteo Geocoding API.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3-42b883?logo=vue.js" />
  <img src="https://img.shields.io/badge/Pinia-State%20Manager-yellow" />
  <img src="https://img.shields.io/badge/SCSS-Styling-cc6699?logo=sass" />
  <img src="https://img.shields.io/badge/Vite-Bundler-646cff?logo=vite" />
  <img src="https://img.shields.io/badge/OpenMeteo-API-blue" />
</p>

---

## 🧭 Overview

**WeatherApp** is a lightweight **frontend application** built with **Vue 3** that allows users to search for cities and view current weather conditions.  

It uses the **Open-Meteo Geocoding API** to retrieve geographic coordinates (`latitude`, `longitude`) from city names, and then fetches weather data based on those coordinates.

---

## ✨ Features

- 🔍 Real-time city search  
- 🌍 Displays **city name and country** (`City (Country)`)  
- 🌡️ Fetches live weather data from **Open-Meteo API**  
- 💾 Persistent recent searches using **localStorage**  
- ⚡ Global state management with **Pinia**  
- 🎨 Responsive, clean UI styled with **SCSS**  
- 💬 Fully frontend — no backend required  

---

## 🧠 Tech Stack

| Technology | Description |
|-------------|-------------|
| **Vue 3 (Composition API)** | Main framework |
| **Pinia** | State management |
| **Vite** | Development and build tool |
| **SCSS** | Custom modular styling |
| **Open-Meteo API** | Weather and geolocation data |
| **localStorage** | Persistent storage for user history |

---

## ⚙️ Local Setup

```bash
# Clone the repository
git clone https://github.com/raquel-1/weather.git

# Enter the project folder
cd weather

# Install dependencies
npm install

# Start the development server
npm run dev -- --open

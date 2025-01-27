// Laikrodžio funkcionalumas
function updateTime() {
    const now = new Date();
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');
    
    // Laiko formatavimas
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
    
    // Datos formatavimas
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    dateElement.textContent = `${year}-${month}-${day}`;
}

// Ekranų valdymas
function showScreen(screenId) {
    // Paslepiame visus ekranus
    const allScreens = document.querySelectorAll('#home-screen, #music-screen, #sport-screen, #settings-screen');
    allScreens.forEach(screen => screen.classList.add('hidden'));
    
    // Parodome pasirinktą ekraną
    document.querySelector(screenId).classList.remove('hidden');
}

// Atnaujinama laikrodžio informacija kas sekundę
setInterval(updateTime, 1000);
updateTime(); // Pradinis laiko nustatymas

// Pradžioje rodome tik pagrindinį ekraną
document.addEventListener('DOMContentLoaded', () => {
    showScreen('#home-screen');
});

// Screen Navigation
const homeScreen = document.getElementById('home-screen');
const musicScreen = document.getElementById('music-screen');
const sportScreen = document.getElementById('sport-screen');
const settingsScreen = document.getElementById('settings-screen');

const musicButton = document.getElementById('music-button');
const sportButton = document.getElementById('sport-button');
const settingsButton = document.getElementById('settings-button');
const backButtons = document.querySelectorAll('.back-button');
const menu = document.querySelector('.menu'); // Menu container
const infoElements = [document.getElementById('time'), document.getElementById('date'), document.querySelector('.battery')];

// Event listeners for menu buttons
musicButton.addEventListener('click', () => showScreen(musicScreen));
sportButton.addEventListener('click', () => showScreen(sportScreen));
settingsButton.addEventListener('click', () => showScreen(settingsScreen));

// Event listeners for back buttons
backButtons.forEach(button => {
  button.addEventListener('click', () => showScreen(homeScreen));
});

// Update clock
function updateClock() {
    const now = new Date();
    
    // Update time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.querySelector('.time').textContent = `${hours}:${minutes}`;
    
    // Update date
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    document.querySelector('.date').textContent = `${year}-${month}-${day}`;
}

// Muzikos valdymas
const songs = ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5'];
let currentSongIndex = 0;

function updateSongDisplay() {
    const songElement = document.querySelector('.song');
    songElement.textContent = `Now Playing: ${songs[currentSongIndex]}`;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongDisplay();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongDisplay();
}

// Switch between screens
function switchScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    document.getElementById(screenId).classList.add('active');
}

// Brightness control
function updateBrightness(value) {
    const watch = document.querySelector('.watch');
    // Keičiame ryškumą naudodami CSS filter
    watch.style.filter = `brightness(${value}%)`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);

    // Pridedame ryškumo slankiklio event listener
    const brightnessSlider = document.querySelector('input[type="range"]');
    brightnessSlider.addEventListener('input', (e) => {
        updateBrightness(e.target.value);
    });
    
    // Nustatome pradinį ryškumą
    updateBrightness(50);

    // Muzikos valdymo mygtukų event listeners
    const prevButton = document.querySelector('.controls button:first-child');
    const nextButton = document.querySelector('.controls button:last-child');
    
    prevButton.addEventListener('click', previousSong);
    nextButton.addEventListener('click', nextSong);
    
    // Pradinės dainos rodymas
    updateSongDisplay();
});

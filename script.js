let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'Daniel Vargas 💧';
});

window.addEventListener('focus', () => {
    document.title = docTitle;
});

let btnMenu = document.getElementById('btnMenu');
let menu = document.querySelector('.menu-mobile');
let boxGlass = document.querySelector('.box-glass');

btnMenu.addEventListener('click', () => {
    menu.classList.add('active');
    boxGlass.classList.add('active');
});

boxGlass.addEventListener('click', () => {
    menu.classList.remove('active');
    boxGlass.classList.remove('active');
});

let btnHome = document.getElementById('btnHome');
let btnContent = document.getElementById('btnContent');
let btnBio = document.getElementById('btnBio');

let ClassMain = document.querySelector('.main');
let ClassContent = document.querySelector('.content');
let ClassBio = document.querySelector('.bio');

btnHome.addEventListener('click', () => {
    ClassMain.classList.add('active');
    ClassBio.classList.remove('active');
    ClassContent.classList.remove('active');
});

btnContent.addEventListener('click', () => {
    ClassContent.classList.add('active');
    ClassMain.classList.remove('active');
    ClassBio.classList.remove('active');
});

btnBio.addEventListener('click', () => {
    ClassBio.classList.add('active');
    ClassMain.classList.remove('active');
    ClassContent.classList.remove('active');
});

let main = document.getElementById('main');
let content = document.getElementById('content');
let bio = document.getElementById('bio');

let btnMobileHome = document.getElementById('btnMobileHome');
let btnMobileContent = document.getElementById('btnMobileContent');
let btnMobileBio = document.getElementById('btnMobileBio');
let btnMobileStore = document.getElementById('btnMobileStore');

btnMobileHome.addEventListener('click', () => {
    btnMobileHome.classList.add('active');
    btnMobileContent.classList.remove('active');
    btnMobileBio.classList.remove('active');
    btnMobileStore.classList.remove('active');
    main.classList.add('active');
    bio.classList.remove('active');
    content.classList.remove('active');
});

btnMobileContent.addEventListener('click', () => {
    btnMobileContent.classList.add('active');
    btnMobileHome.classList.remove('active');
    btnMobileBio.classList.remove('active');
    btnMobileStore.classList.remove('active');
    content.classList.add('active');
    bio.classList.remove('active');
    main.classList.remove('active');
});

btnMobileBio.addEventListener('click', () => {
    btnMobileBio.classList.add('active');
    btnMobileHome.classList.remove('active');
    btnMobileContent.classList.remove('active');
    btnMobileStore.classList.remove('active');
    bio.classList.add('active');
    main.classList.remove('active');
    content.classList.remove('active');
});

let year = document.getElementById('year');
year.textContent = new Date().getFullYear();

let btnMusic = document.getElementById('btnMusic');
let btnVideos = document.getElementById('btnVideos');
let MusicBox = document.querySelector('.music-box');
let VideosBox = document.querySelector('.videos-box');

btnMusic.addEventListener('click', () => {
    btnMusic.classList.add('active');
    btnVideos.classList.remove('active');
    MusicBox.classList.add('active');
    VideosBox.classList.remove('active');
});

btnVideos.addEventListener('click', () => {
    btnVideos.classList.add('active');
    btnMusic.classList.remove('active');
    VideosBox.classList.add('active');
    MusicBox.classList.remove('active');
});

let btnMainMusic = document.getElementById('btnMainMusic');
let btnMainVideos = document.getElementById('btnMainVideos');
let MainHome = document.querySelector('.main');
let MainContent = document.querySelector('.content');

btnMainMusic.addEventListener('click', () => {
    MainHome.classList.remove('active');
    MainContent.classList.add('active');
    btnMusic.classList.add('active');
    btnVideos.classList.remove('active');
    MusicBox.classList.add('active');
    VideosBox.classList.remove('active');
})

btnMainVideos.addEventListener('click', () => {
    MainHome.classList.remove('active');
    MainContent.classList.add('active');
    btnMusic.classList.remove('active');
    btnVideos.classList.add('active');
    MusicBox.classList.remove('active');
    VideosBox.classList.add('active');
})
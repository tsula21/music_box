// variables 
let tbody = document.getElementById('tbody');
let showbtn = document.querySelector('.showlist');
let showLessbtn = document.querySelector('#lessbtn');
const closeSpace = document.querySelector('.david');
let exitFav = document.querySelector('#exit');
let exitFav1 = document.querySelector('.exit1');
// console.log(kk);
// FAVORITE SONGS
let favoriteTracks = [];
let heart = document.getElementById('heart');
let heart2 = document.querySelector('.cover-list');
const favList = document.querySelector('.favorite');
const favMusic = document.querySelector('.fav_songs');
let totalTracks = document.querySelector('.total-number');
const favText = document.querySelector('#fav-text');
// console.log(heart2);


//player details
const player = document.querySelector('.player');
const prev = document.querySelector('.prev');
const pause = document.querySelector('.pause');
const next = document.querySelector('.next');
const volume = document.querySelector('.volume');
const audio = document.querySelector('.audio');
const title = document.querySelector('.title1');
const titleAll = document.querySelector('.all-text');
const cover = document.querySelector('.cover1');
const singer = document.querySelector('.singer1');
const duration = document.querySelector('.duration1');
const timer = document.querySelector('#currentTime');
const hidePlayer = document.querySelector('.disable');
const slider = document.querySelector('#range');
let voiceValue = document.querySelector('#value');
const progressLine = document.querySelector('.progress_container');
const progressCircle = document.querySelector('.progress');
const range4 = document.getElementById('range');
let menu1 = document.querySelector('.menu1');
let showModal  = document.querySelector('.angel');
let modalOverlay  = document.querySelector('.pop-overlay');
let action  = document.querySelector('.action');
// console.log(titleAll);
// Sorting
let time = document.querySelector('.time');

// Other Details
const minimize = document.querySelector('.minimize');
const table1 = document.querySelector('.content-table');
const fans = document.querySelector('.fans');
const myTimeout = setTimeout(myGreeting, 2000);
//album details

// Album 1
const alb1 = document.getElementById('top1');
const alb2 = document.getElementById('top2');
// Album 2
const alb3 = document.getElementById('top3');
const alb4 = document.querySelector('.top4');
const alb3more = document.querySelector('.album2show');
const alb3less = document.querySelector('.album2less');
// Album 3
const alb5 = document.querySelector('.top5');
// Album 4
const alb6 = document.querySelector('.top6');
// favorite track album
const favAlbum = document.querySelector('.top7');
// console.log(favAlbum);

// Event Listeners
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);



volume.addEventListener('click', volumeToggle);
hidePlayer.addEventListener('click', hide);
minimize.addEventListener('click', minimizeToggle);
fans.addEventListener('click', jumpDown);
audio.addEventListener('timeupdate', updateProgress);
progressLine.addEventListener('click', rewindSong);
// Auto Next
audio.addEventListener('ended', nextSong);

//show more Album ?????
alb3more.addEventListener('click', () => {
// console.log('00');

if (alb3more.style.display = "block"){
    alb3more.style.display = "none";
    alb3less.style.display = "block";
    console.log('111');
    alb4.style.display = "flex";
}else{
    alb3more.style.display = "block";
    alb3less.style.display = "none";
    console.log('222');
}
});
alb3less.addEventListener('click', () => {

if (alb3more.style.display = "none"){
    alb3more.style.display = "block";
    alb3less.style.display = "none";
    console.log('111');
    alb4.style.display = "none";
}else{
    alb3more.style.display = "none";
    alb3less.style.display = "block";
    console.log('222');
}
});

// Music array
const tracks = [
    {
        id: 0,
        img:'./IMG/songs/img_1.png',
        title: 'Faded',
        artist: 'David Bowie',
        album: 'NCS',
        time: '04:20',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Alan_Walker_Fade.mp3',
        playerSrc: './IMG/first/1.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list/1.png',
        numberOfUnits: 1,
    },
    {
        id: 1,
        img:'./IMG/songs/img_2_5.png',
        title: 'Sky High',
        artist: 'David Bowie',
        album: 'Hunky Dory',
        time: '03:58',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Sky_High.mp3',
        playerSrc: './IMG/first/2.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list/2.png',
        numberOfUnits: 1,
    },
    {
        id: 2,
        img:'./IMG/songs/img_3.png',
        title: 'Disfigure Blank',
        artist: 'David Bowie',
        album: 'Scary Monsters (and Super Creeps)',
        time: '03:29',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Disfigure_Blank.mp3',
        playerSrc: './IMG/first/3.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list/3.png',
        numberOfUnits: 1,
    },
    {
        id: 3,
        img:'./IMG/songs/img_4.png',
        title: 'Heroes',
        artist: 'David Bowie',
        album: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
        time: '03:28',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Janji_Heroes_Tonight.mp3',
        playerSrc: './IMG/first/4.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list/4.png',
        numberOfUnits: 1,
    },
    {
        id: 4,
        img:'./IMG/songs/img_2_5.png',
        title: 'Mortals',
        artist: 'David Bowie',
        album: 'Hunky Dory',
        time: '03:50',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Warriyo_Mortals.mp3',
        playerSrc: './IMG/first/5.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list/5.png',
        numberOfUnits: 1,
    },
    {
        id: 5,
        img:'./IMG/songs/img_1.png',
        title: 'Faded',
        artist: 'David Bowie',
        album: 'Heroes',
        time: '06:11',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Alan_Walker_Fade.mp3',
        playerSrc: './IMG/first/1.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list/6.png',
        numberOfUnits: 1,
    },
    {
        id: 6,
        img:'./IMG/songs/img_2_5.png',
        title: 'Sky High',
        artist: 'David Bowie',
        album: 'Hunky Dory',
        time: '03:56',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Sky_High.mp3',
        playerSrc: './IMG/first/3.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list/7.png',
        numberOfUnits: 1,
    },
    {
        id: 7,
        img:'./IMG/songs/img_3.png',
        title: 'Disfigure',
        artist: 'David Bowie',
        album: 'Scary Monsters (and Super Creeps)',
        time: '04:26',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Disfigure_Blank.mp3',
        playerSrc: './IMG/first/4.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list/8.png',
        numberOfUnits: 1,
    },
    {
        id: 8,
        img:'./IMG/songs/img_4.png',
        title: 'Heroes',
        artist: 'David Bowie',
        album: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
        time: '04:14',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Janji_Heroes_Tonight.mp3',
        playerSrc: './IMG/first/4.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list/9.png',
        numberOfUnits: 1,
    },
    {
        id: 9,
        img:'./IMG/songs/img_2_5.png',
        title: 'Mortals',
        artist: 'David Bowie',
        album: 'Hunky Dory',
        time: '03:38',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Warriyo_Mortals.mp3',
        playerSrc: './IMG/first/5.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list/10.png',
        numberOfUnits: 1,
    },
    {
        id: 10,
        img:'./IMG/songs/img_1.png',
        title: 'Faded',
        artist: 'David Bowie',
        album: 'Heroes',
        time: '06:11',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Alan_Walker_Fade.mp3',
        playerSrc: './IMG/first/1.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list/11.png',
        numberOfUnits: 1,
    },
    {
        id: 11,
        img:'./IMG/songs/img_2_5.png',
        title: 'Sky High',
        artist: 'David Bowie',
        album: 'Hunky Dory',
        time: '03:56',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Sky_High.mp3',
        playerSrc: './IMG/first/2.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list/12.png',
        numberOfUnits: 1,
    },
    {
        id: 12,
        img:'./IMG/songs/img_3.png',
        title: 'Disfigure',
        artist: 'David Bowie',
        album: 'Scary Monsters (and Super Creeps)',
        time: '04:26',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Disfigure_Blank.mp3',
        playerSrc: './IMG/first/3.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list2/1.png',
        numberOfUnits: 1,
    },
    {
        id: 13,
        img:'./IMG/songs/img_4.png',
        title: 'Heroes',
        artist: 'David Bowie',
        album: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
        time: '04:14',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Janji_Heroes_Tonight.mp3',
        playerSrc: './IMG/first/4.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list2/2.png',
        numberOfUnits: 1,
    },
    {
        id: 14,
        img:'./IMG/songs/img_2_5.png',
        title: 'Mortals',
        artist: 'David Bowie',
        album: 'Hunky Dory',
        time: '03:38',
        play: './ICONS/music/Play.svg',
        add: './ICONS/songs/Add.svg',
        src: './audio/Warriyo_Mortals.mp3',
        playerSrc: './IMG/first/5.png',
        release: 'Released: 15/02/2019',
        poster: './IMG/play_list2/3.png',
        numberOfUnits: 1,
    }
];
// Album array
const Albums = [
{
    id: 0,
    album1: [
        {
            id: 0,
            img: './IMG/play_list/1.png',
            title: 'Dance',
            release: 'Released: 15/02/2019',
            songSrc: ''
        },
        {
            id: 1,
            img: './IMG/play_list/2.png',
            title: 'Glastonbury 2000 (Live) 222',
            release: 'Released: 30/11/2018  2222',
            songSrc: ''
        },
        {
            id: 2,
            img: './IMG/play_list/3.png',
            title: 'Welcome To The Blackout 333',
            release: 'Released: 30/11/2018',
            songSrc: ''
        },
        {
            id: 3,
            img: './IMG/play_list/4.png',
            title: 'Stage (2017) (Live) 44',
            release: 'Released: 29/09/2017 44',
            songSrc: ''
        },
        {
            id: 4,
            img: './IMG/play_list/5.png',
            title: 'Cracked Actor (Live)',
            release: 'Released: 22/04/2017',
            songSrc: ''
        },
        {
            id: 5,
            img: './IMG/play_list/6.png',
            title: 'Blackstar',
            release: 'Released: 08/01/2016',
            songSrc: ''
        },
        {
            id: 6,
            img: './IMG/play_list/7.png',
            title: 'The Next Day',
            release: 'Released: 15/02/2019',
            songSrc: ''
        },
        {
            id: 7,
            img: './IMG/play_list/8.png',
            title: 'A Reality Tour',
            release: 'Released: 30/11/2018',
            songSrc: ''
        },
        {
            id: 8,
            img: './IMG/play_list/9.png',
            title: 'VH1 Storytellers (Live)',
            release: 'Released: 20/04/2018',
            songSrc: ''
        },
        {
            id: 9,
            img: './IMG/play_list/10.png',
            title: 'Reality',
            release: 'Released: 29/09/2017',
            songSrc: ''
        },
        {
            id: 10,
            img: './IMG/play_list/11.png',
            title: 'Heathen',
            release: 'Released: 22/04/2017',
            songSrc: ''
        },
        {
            id: 11,
            img: './IMG/play_list/12.png',
            title: 'Hours',
            release: 'Released: 08/01/2016',
            songSrc: ''
        }
    ]
},
{
    id: 1,
    album2:  [
    {
        id: 0,
        img: './IMG/play_list2/1.png',
        title: "Let's Dance (Nile Rodgers' St...",
        release: "Released: 15/02/2019",
        songSrc: ''
    },
    {
        id: 1,
        img: './IMG/play_list2/2.png',
        title: 'Beat Of Your Drum (2018) (R...',
        release: 'Released: 30/11/2018',
        songSrc: ''
    },
    {
        id: 2,
        img: './IMG/play_list2/3.png',
        title: 'Zeroes (2018, Radio Edit)',
        release: 'Released: 29/09/2016',
        songSrc: ''
    },
    {
        id: 3,
        img: './IMG/play_list2/4.png',
        title: "Let's Dance (Demo)",
        release: 'Released: 22/04/2017',
        songSrc: ''
    },
    {
        id: 4,
        img: './IMG/play_list2/5.png',
        title: 'Rebel Rebel (Live)',
        release: 'Released: 22/03/2015',
        songSrc: ''
    },
    {
        id: 5,
        img: './IMG/play_list2/6.png',
        title: 'No Plan - EP',
        release: 'Released: 02/04/2019',
        songSrc: ''
    },
    {
        id: 6,
        img: './IMG/play_list2/7.png',
        title: 'Life On Mars? (2016 Mix)',
        release: 'Released: 24/07/2017',
        songSrc: ''
    },
    {
        id: 7,
        img: './IMG/play_list2/8.png',
        title: 'TVC15 (2010 Harry Maslin Mix)',
        release: 'Released: 21/01/2019',
        songSrc: ''
    },
    {
        id: 8,
        img: './IMG/play_list2/9.png',
        title: "Rock 'N' Roll With Me",
        release: 'Released: 03/09/2014',
        songSrc: ''
    },
    {
        id: 9,
        img: './IMG/play_list2/10.png',
        title: 'Sue (Or In A Season Of Crime)',
        release: 'Released: 10',
        songSrc: ''
    },
    {
        id: 10,
        img: './IMG/play_list2/11.png',
        title: 'Tis A Pity She Was A Whore',
        release: 'Released: 22/04/2017',
        songSrc: ''
    },
    {
        id: 11,
        img: './IMG/play_list2/12.png',
        title: 'The Next Day Extra - EP',
        release: 'Released: 25/01/2018',
        songSrc: ''
    }
]

},
{
    id: 2,
    album3: [
        {
            id: 0,
            img: './IMG/play_list3/1.png',
            title: "80s Symphonic",
            release: "Released: 15/02/2019",
            songSrc: ''
        },
        {
            id: 1,
            img: './IMG/play_list3/2.png',
            title: "Bohemian Rhapsody (The Or...",
            release: "Released: 30/11/2018",
            songSrc: ''
        },
        {
            id: 2,
            img: './IMG/play_list3/3.png',
            title: "Piano Odyssey",
            release: "Released: 20/04/2018",
            songSrc: ''
        },
        {
            id: 3,
            img: './IMG/play_list3/4.png',
            title: "Live Aid (Live, 13th July 1985)",
            release: "Released: 29/09/2017",
            songSrc: ''
        },
        {
            id: 4,
            img: './IMG/play_list3/5.png',
            title: "Pub Songs",
            release: "Released: 22/04/2017",
            songSrc: ''
        },
        {
            id: 5,
            img: './IMG/play_list3/6.png',
            title: "Paradise: The Sound Of Ivor...",
            release: "Released: 08/01/2016",
            songSrc: ''
        }
    ]
},
{
    id: 3,
    album4: [
        {
            id: 0,
            img: './IMG/play_list4/1.png',
            name: "Lou Reed",
            folowers: "429,222",
            songSrc: ''
        },
        {
            id: 1,
            img: './IMG/play_list4/2.png',
            name: "Talking Heads",
            folowers: "189,152",
            songSrc: ''
        },
        {
            id: 2,
            img: './IMG/play_list4/3.png',
            name: "T.Rex",
            folowers: "53,145",
            songSrc: ''
        },
        {
            id: 3,
            img: './IMG/play_list4/4.png',
            name: "Iggy Pop",
            folowers: "471,145",
            songSrc: ''
        },
        {
            id: 4,
            img: './IMG/play_list4/5.png',
            name: "Queen",
            folowers: "948,117",
            songSrc: ''
        },
        {
            id: 5,
            img: './IMG/play_list4/6.png',
            name: "The Velvet Underground",
            folowers: "147,423",
            songSrc: ''
        }
    ]
}
];
// Album Load Functions
let amount = 6;
let amount2 = 12;

function loadAlbum(album1, amount) {
album1.slice(0, amount).forEach((elem) => {     
    let row = `
            <div class="item">
                <img src="${elem.img}">
                <div class="text">
                    <h4>${elem.title}</h4>
                    <h5>${elem.release}</h5>
                </div>
            </div>
    `;
alb1.insertAdjacentHTML('beforeend', row);
});
}
loadAlbum(Albums[0].album1, amount);

function loadAlbum1(x, amount2) {
x.slice(6, amount2).forEach((elem) => {
    let row = `
            <div class="item">
                <img src="${elem.img}">
                <div class="text">
                    <h4>${elem.title}</h4>
                    <h5>${elem.release}</h5>
                </div>
            </div>
    `;
alb2.insertAdjacentHTML('beforeend', row);
});
}
loadAlbum1(Albums[0].album1, amount2);

function loadAlbum2(album2,amount){
album2.slice(0, amount).forEach((elem) => {
    let row = `
<div class="item">
    <img src="${elem.img}">
    <div class="text">
        <h4>${elem.title}</h4>
        <h5>${elem.release}</h5>
    </div>
</div>
    `;
    alb3.insertAdjacentHTML('beforeend', row);
});
}
loadAlbum2(Albums[1].album2,amount);

function loadAlbum2_2(album2,amount2){
album2.slice(6, amount2).forEach((elem) => {
    let roww1 = `
<div class="item">
    <img src="${elem.img}">
    <div class="text">
        <h4>${elem.title}</h4>
        <h5>${elem.release}</h5>
    </div>
</div>
    `;
    alb4.insertAdjacentHTML('beforeend', roww1);
});
}
loadAlbum2_2(Albums[1].album2,amount2);

function loadAlbum3(x,y){
x.slice(0, y).forEach((elem) => {
    let roww1 = `
<div class="item">
    <img src="${elem.img}">
    <div class="text">
        <h4>${elem.title}</h4>
        <h5>${elem.release}</h5>
    </div>
</div>
    `;
    alb5.insertAdjacentHTML('beforeend', roww1);
});
}
loadAlbum3(Albums[2].album3,amount);

function loadAlbum4(x,y){
    x.slice(0, y).forEach((elem) => {
        let roww1 = `
    <div class="item">
        <img src="${elem.img}">
        <div class="text" style="display: flex; flex-direction: column; align-items: center;">
            <h4>${elem.name}</h4>
            <h5>${elem.folowers}</h5>
        </div>
    </div>
        `;
        alb6.insertAdjacentHTML('beforeend', roww1);
});
}
loadAlbum4(Albums[3].album4);

// Music array
let musicNumber = 5;
// tracks.slice(0, musicNumber).forEach((Element)

function loadTrack(tracks) {
    tracks.forEach((Element) => {
        // console.log(musicNumber);
        let tableRow = `
        <tr class="tr">
            <td>
                <div class="align">
                    <h6>${Element.id}</h6>
                    <img class="wallpaper" src="${Element.poster}">
                </div>
            </td>
            <td class="flex-time-td">
            <div class="flex-time-div"> 
            <h2>${Element.title}</h2>
            <p class="flex-time" >${Element.time}</p>
            </div>
            </td>
            <td>${Element.artist}</td>
            <td>${Element.album}</td>
            <td>${Element.time}</td>
            <td>
                <div class="align">
                    <div class="iconPlay" onclick="playSong1('${Element.src}',${Element.id})"></div>
                                        
                    <div class="iconadd" id="step_5"  onclick="addToFavorite1(${Element.id})"></div>
                </div>
            </td>
        </tr>`;

        // <div class="iconPlay" onclick="playSong('${Element.src}',${Element.id})"></div>
        // <div class="iconPause" onclick="pauseMus('${Element.src}',${Element.id})"></div>

        tbody.insertAdjacentHTML('beforeend', tableRow);
    });
};
loadTrack(tracks, musicNumber);

let songIndex = 0;
// VARIABLES
const addIcon = document.querySelectorAll('.iconadd');
const dellIcon = document.querySelectorAll('.icon-dell');

pause.addEventListener('click', playerToggle);
// console.log(dellIcon);

// Favorit song

function addToFavorite1(id){
    favoriteTracks = favoriteTracks.filter((item) => item.id !==id);
    console.log('update List');
    updateList();

    addIcon.forEach((el, i ) =>{
        if(i === id){
            if(el.classList.contains('active9')){
                el.classList.remove('active9');
                console.log('Delete');
                if(favoriteTracks.length === 0){
                    favText.style.display = "flex";
                }
            }else{
                el.classList.add('active9');
                favText.style.display = "none";
                const item = tracks.find((pro) => pro.id === id);
                favoriteTracks.push(item);
                console.log('Add');
            }         
        }
    });
    renderTracks();
    totalMusic();
}

function dellFromFavorite(id){
    
    favoriteTracks = favoriteTracks.filter((item) => item.id !==id);
    console.log();
    updateList();
    if(favoriteTracks.length === 0){
        favText.style.display = "flex";
    }
    
    dellIcon.forEach((elem, i) => {
        if(id === i){
            if(elem.classList.contains('active')){
                elem.classList.remove('active');
                
            }
        }
    });
    totalMusicMinus();
    addIcon.forEach((elem, i) => {
        if(id === i){
            if(elem.classList.contains('active9')){
                elem.classList.remove('active9');
            }
        }
    });
}

function totalMusic(){
    let totalItems = 0;
    favoriteTracks.forEach((item) => {
        totalItems += item.numberOfUnits;
    });
    totalTracks.innerHTML = `${totalItems}`;
}

function totalMusicMinus(item){
    let totalItems = 0;
    favoriteTracks.forEach((item) => {
        totalItems += item.numberOfUnits
    });
    totalTracks.innerHTML = `${totalItems}`;
}

function updateList(){
    renderTracks();
}

// RENDER TRACKS
function renderTracks(){
    favMusic.innerHTML = "";
    favoriteTracks.forEach((elem) => {
        favMusic.innerHTML += `
            <tr>
                <td>
                    <div class="align1">
                        <h6>${elem.id}</h6>
                        <img class="wallpaper" src="${elem.poster}">
                    </div>
                </td>
                <td class="title">${elem.title}</td>
                <td class="singer">${elem.artist}</td>
                <td class="duration">${elem.time}</td>
                <td>
                    <div class="align2">
                    <div class="iconPlay" onclick="playSong1('${elem.src}',${elem.id})"></div>
                        <div class="icon-dell" onclick="dellFromFavorite(${elem.id})"></div>
                    </div>
                </td>
            </tr>
        `;
    });
}

// player Poster
function loadSongs(song){
    titleAll.innerHTML = song.title +' - ' + song.artist;
    title.innerHTML = song.title;
    singer.innerHTML = song.artist;
    cover.src = `${song.poster}`;
    audio.src = `${song.src}`;
    // console.log(song);
    duration.innerHTML = song.time;
}
loadSongs(tracks[songIndex]);

// variables
let tr = document.querySelectorAll('.tr');

// neeeeeeeeeeeeeeeeeeew
const playtrack = document.querySelectorAll('.iconPlay');

// დამხმარე ფუნქცია რომელიც გაგვაგებინებს მუსიკა ჩართულია თუ არა.

function playSong1(src,id){
    var playPromise = audio.play();
    playtrack.forEach((elem, i) => {
        loadSongs(tracks[id]);
        activeClass(id);
        audio.setAttribute('src',src);
        songIndex = id;
        if(id === i){
            if(elem.classList.contains('active')){
                tbody.classList.remove('playing');
                elem.classList.remove('active');
                console.log('Pause');
            }else{
                tbody.classList.add('playing');
                elem.classList.add('active');
                console.log('Play');
                showList();
                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                      // Automatic playback started!
                      // Show playing UI.
                      audio.play();
                    })
                    .catch(error => {
                      // Auto-play was prevented
                      // Show paused UI.
                    });
                  }
            }
        }else{
            elem.classList.remove('active');
        }
    });
}

// settimeout იმდენ წამში გამოიძახებს იმ ფუნქცია
// setinterval 

// toggle icnos
function playerToggle(){
    var myAudio = document.querySelector('.audio');
    
    if (audio.duration > 0 && !audio.paused) {
    console.log('if-delete');
        //Its playing...do your job
        tbody.classList.remove('playing');
        pause.classList.remove('act2');
        audio.pause();
    
    } else {
        console.log('else- add');
        //Not playing...maybe paused, stopped or never played.
        tbody.classList.add('playing');
        pause.classList.add('act2');
        audio.play();
    }
}

function activeClass(id){
    const tr = document.querySelectorAll('.content-table tr');
    tr.forEach((elem, i) => {
        if(id + 1 === i){
            if(elem.classList.contains('act1')){
                elem.classList.remove('act1'); 
                pause.classList.remove('act2');
            }else{
                elem.classList.add('act1');
                pause.classList.add('act2');
            }
        }else{
            elem.classList.remove('act1');
            // elem.setAttribute('activ-music','false');  
        }
    });
}

function pauseSong(){
    tbody.classList.remove('playing');
    cover.classList.remove('active');
    audio.pause();
    audio.load();
}

function nextSong(id){
    songIndex++;
    loadSongs(tracks[songIndex]);
    pause.classList.add('act2');
    if(songIndex > tracks.length -1){
        songIndex = 0;
    }
    console.log('next');
    playSong1(tracks.src, tracks.id);
}
// prev song
function prevSong(){
    songIndex--;
    loadSongs(tracks[songIndex]);
    pause.classList.add('act2');
    if(songIndex < 0){
        songIndex = tracks.length - 1;
    }
    console.log('prev');
    audio.play();
}

// volume toggle
function volumeToggle(){
    volume.classList.toggle('act3');
    let soundOff = volume.classList.contains('act3')
    if(soundOff){
        volOff();
    }else{
        volOn();
    }
}
function volOn(){
    audio.volume = 1.0;
    range4.value = 100;
}
function volOff() {
    audio.volume = 0.0;
    range4.value = 0.0;

}

// volume Slider
range4.addEventListener('change', function(e){
    audio.volume = e.currentTarget.value / 100;
    if(range4.value <= 0){
        volume.classList.add('act3');
        
    }else{
        volume.classList.remove('act3');
    }
});

// volume percentage 
// voiceValue.innerHTML = slider.value + '%';
// slider.oninput = function(){
//     voiceValue.innerHTML = this.value + '%';
// }

// Hide song Table

function minimizeToggle(){
    minimize.classList.toggle('active7');
    // table1.classList.toggle('active8');

    let Hide = minimize.classList.contains('active7');
    if(Hide){
        minimize.classList.add('active7');
        console.log('1');
        table1.style.display = 'none';
        showbtn.style.display = 'none';
    }else{
        minimize.classList.remove('active7');
        console.log('2');
        table1.style.display = 'inline-table';
        showbtn.style.display = 'block';
    }
}

// Duration
function hide(){
    player.classList.remove('akk');
}
//  ===============================================
// music Player 
function showList() {
    document.querySelector('.player').classList.add('akk');
}
    // showList();
//  ===============================================

// scroll down 
function jumpDown(){
    document.documentElement.scrollTop = 3000;
}

// currnet time
function updateTrackTime(track){
    var currTimeDiv = document.getElementById('curr');

    var currTime = Math.floor(track.currentTime).toString(); 
    currTimeDiv.innerHTML = formatSecondsAsTime(currTime);
    if (isNaN(duration)){
    //   durationDiv.innerHTML = '00:00';
    } 
    else{
    }
}

function formatSecondsAsTime(secs, format) {
    var hr  = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600))/60);
    var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

    if (min < 10){ 
        min = "0" + min; 
    }
    if (sec < 10){ 
        sec  = "0" + sec;
    }
    return min + ':' + sec;
}

// Progress Bar
function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const ProgressPercent = (currentTime / duration) * 100;
    progressCircle.style.width = `${ProgressPercent}%`
}

// Rewind Song
function rewindSong(e){
    const width = this.clientWidth;
    const clickX = e.offsetX; 
    const durationX = audio.duration;

    audio.currentTime = (clickX / width) * durationX;
}

// USER INFORMATION 
showModal.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
});

modalOverlay.onclick = function(){
    modalOverlay.style.display = 'none';
}
// FAVORITE SHOW BUTTON
heart.addEventListener('click',() => {
    favList.style.display = "block";
});

heart2.addEventListener('click',() => {
    if(favList.classList.contains('active')){
        favList.classList.remove('active');
    }else{
        favList.style.display = "block";
        favList.classList.add('active');
    }
    
});

window.onclick = function(event) {
    if (event.target == closeSpace) {
        favList.style.display = "none";
        
    }
}

exitFav.addEventListener('click', () => {
    favList.style.display = "none";
});

exitFav1.addEventListener('click', () => {
    favList.classList.remove('active');
});

// lazy loading simulation with javascript



const wt = new WebTour();
const steps = [
    {
        element: '#step_1',            
        title: 'Welcome to Music Box Tour!',         
        content: 'Collect songs and playlists. Subscribe to friends and musicians. Listen to podcasts, comedy shows and news',    
        placement: 'right-start',      
    },
    {
        element: '#step_2',            
        title: 'Navigation Menu',         
        content: 'Main MENU to navigate easily',     
        placement: 'bottom',       
    },
    {
        element: '#step_3',            
        title: 'User Profile',         
        content: 'For SIGN UP or SIGN IN',     
        placement: 'left-start',       
    },
    {
        element: '#step_4',            
        title: 'Artist profile',         
        content: 'Here you can find songs and Albums by this artist',     
        placement: 'bottom',       
    },
    {
        element: '#step_5',            
        title: 'Add favorite song',         
        content: 'You can add Favorite song in your Playlist',     
        placement: 'top',       
    },
];

function myGreeting(){
    wt.setSteps(steps);
    wt.start();
}


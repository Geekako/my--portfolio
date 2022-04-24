const home = document.getElementById("home");
const about = document.getElementById("about");
const gallery = document.getElementById("gallery");
const homePage = document.getElementById("home-page");
const aboutPage = document.getElementById("about-page");
const galleryPage = document.getElementById("gallery-page");

home.onclick = function () {
  //スクロール処理
  homePage.scrollIntoView({
    behavior: "smooth",
  });
};
about.onclick = function () {
  //スクロール処理
  aboutPage.scrollIntoView({
    behavior: "smooth",
  });
};
gallery.onclick = function () {
  //スクロール処理
  galleryPage.scrollIntoView({
    behavior: "smooth",
  });
};

const images = [
  "images/my-dog2.jpg",
  "images/my-dog5.jpg",
  "images/my-dog4.jpg",
  "images/my-dog7.jpg",
  "images/my-dog6.jpg",
  "images/my-dog3.jpg",
];

// 以下を追記してください！
let count = 0; //初期値０
const slideimage = () => {
  //関数slideimageの定義
  if (count >= images.length) {
    //もしカウントが画像の枚数より多ければcountを0に戻す
    count = 0;
  } else {
    //そうでなければ”配列images"のcount番目の画像を表示する
    document.getElementById("slideshow").src = images[count];
    count++;
  }
};
let slideid = 0; //最初ー開始　次ボタンを押したらー停止
const startstop = () => {
  if (slideid === 0) {
    //開始ボタンを押した時の処理内容
    slideid = setInterval(slideimage, 850); //setIntervalメソッド(動作させる関数名,どの時間ごとに動作させるか)
  } else {
    //停止ボタンを押した時の処理内容
    clearInterval(slideid);
    slideid = 0;
  }
};
document.getElementById("startstopbtn").onclick = startstop;

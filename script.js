async function GetData() {
  const response = await fetch("https://www.breakingbadapi.com/api/characters");
  const data = await response.json();
  console.log(data);

  // Walter Card
  document.querySelector("#imgWalt").src = data[0].img;
  document.querySelector("#TitleWalt").innerHTML = data[0].name;
  document.querySelector(
    "#NickWalt"
  ).innerHTML = `Nickname : ${data[0].nickname}`;
  document.querySelector(
    "#BirthDateWalter"
  ).innerHTML = ` BirthDay : ${data[0].birthday}`;
  document.querySelector(
    "#ActorWalt"
  ).innerHTML = `Actor : ${data[0].portrayed}`;
  document.querySelector(
    "#StatusWalt"
  ).innerHTML = `Status : ${data[0].status}`;

  // Jese
  document.querySelector("#imgJese").src = data[1].img;
  document.querySelector("#TitleJese").innerHTML = data[1].name;
  document.querySelector(
    "#NickJese"
  ).innerHTML = `Nickname : ${data[1].nickname}`;
  document.querySelector(
    "#BirthDateJese"
  ).innerHTML = ` BirthDay : ${data[1].birthday}`;
  document.querySelector(
    "#ActorJese"
  ).innerHTML = `Actor : ${data[1].portrayed}`;
  document.querySelector(
    "#StatusJese"
  ).innerHTML = `Status : ${data[1].status}`;

  // Mike
  document.querySelector("#imgMike").src = data[6].img;
  document.querySelector("#TitleMike").innerHTML = data[1].name;
  document.querySelector(
    "#NickMike"
  ).innerHTML = `Nickname : ${data[6].nickname}`;
  document.querySelector(
    "#BirthDateMike"
  ).innerHTML = ` BirthDay : ${data[6].birthday}`;
  document.querySelector(
    "#ActorMike"
  ).innerHTML = `Actor : ${data[6].portrayed}`;
  document.querySelector(
    "#StatusMike"
  ).innerHTML = `Status : ${data[6].status}`;

  // Fring
  document.querySelector("#imgFring").src = data[8].img;
  document.querySelector("#TitleFring").innerHTML = data[8].name;
  document.querySelector(
    "#NickFring"
  ).innerHTML = `Nickname : ${data[8].nickname}`;
  document.querySelector(
    "#BirthDateFring"
  ).innerHTML = ` BirthDay : ${data[8].birthday}`;
  document.querySelector(
    "#ActorFring"
  ).innerHTML = `Actor : ${data[8].portrayed}`;
  document.querySelector(
    "#StatusFring"
  ).innerHTML = `Status : ${data[8].status}`;

  // Soul
  document.querySelector("#imgSoul").src = data[7].img;
  document.querySelector("#TitleSoul").innerHTML = data[7].name;
  document.querySelector(
    "#NickSoul"
  ).innerHTML = `Nickname : ${data[7].nickname}`;
  document.querySelector(
    "#BirthDateSoul"
  ).innerHTML = ` BirthDay : ${data[7].birthday}`;
  document.querySelector(
    "#ActorSoul"
  ).innerHTML = `Actor : ${data[7].portrayed}`;
  document.querySelector(
    "#StatusSoul"
  ).innerHTML = `Status : ${data[7].status}`;

  // Skyler
  document.querySelector("#imgSkyler").src = data[2].img;
  document.querySelector("#TitleSkyler").innerHTML = data[2].name;
  document.querySelector(
    "#NickSkyler"
  ).innerHTML = `Nickname : ${data[2].nickname}`;
  document.querySelector(
    "#BirthDateSkyler"
  ).innerHTML = ` BirthDay : ${data[2].birthday}`;
  document.querySelector(
    "#ActorSkyler"
  ).innerHTML = `Actor : ${data[2].portrayed}`;
  document.querySelector(
    "#StatusSkyler"
  ).innerHTML = `Status : ${data[2].status}`;

  // Sliders
  // document.querySelector("#FirstSlide").src =
  //   "https://images7.alphacoders.com/617/617964.jpg";

  // document.querySelector("#SecondSlide").src =
  //   "https://wallpaperscart.com/wp-content/uploads/2022/01/Breaking-Bad-Wallpapers-Backgrounds_64-1024x576.jpg";

  // document.querySelector("#ThirdSlide").src =
  //   "https://swall.teahub.io/photos/small/303-3039642_breaking-bad-wallpapers-breaking-bad-wallpaper-4k.png";
}
GetData();

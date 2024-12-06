let parentDiv = document.getElementById("parent");
let cardsInfos = [
  {
    title: "Ford F-ceri",
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/84/c8/84c8bc3ade6c28ddbbad8159484eb2bc.webp",
    info: "30 сая",
  },
  {
    title: "Toyoto Prius",
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/44/58/445875b73723412927052160c46a713c.webp",
    info: "40 сая",
  },
  {
    title: "HP 15.6, intel Core i7,8 GB RAM, 512GB",
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/a0/40/a0408f3d23608273ff718ce8dc8558ba.webp",
    info: "3 сая",
  },
  {
    title: "Toyota Prius 50",
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/da/b7/dab7ec8ace03007e6314497faccdbc63.webp",
    info: "45 сая",
  },
];
let cards = "";
for (let i = 0; i < cardsInfos.length; i++) {
  let card = `<div class="card">
       <h2>${cardsInfos[i].title}</h2>
       <div class="card-body">
         <img src="${cardsInfos[i].imgUrl}" alt="" />
         
         <p>${cardsInfos[i].info}</p>
         <p>${cardsInfos[i].info}</p></div>
       <div class="cards-footer">
       </div>
     </div>`;

  cards = cards + card;
}
parentDiv.innerHTML = cards;

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
$("#year").textContent=new Date().getFullYear();

$("#theme").onclick=()=>{
  document.body.classList.toggle("light");
  $("#theme").textContent=document.body.classList.contains("light")?"☀":"☾";
};

let active="all";
function filterCards(){
  const q=$("#search").value.toLowerCase().trim();
  let count=0;
  $$(".card").forEach(card=>{
    const okCat=active==="all"||card.dataset.category===active;
    const okSearch=card.dataset.search.includes(q)||card.querySelector("h3").textContent.toLowerCase().includes(q);
    const show=okCat&&okSearch;
    card.classList.toggle("hidden",!show);
    if(show)count++;
  });
  $("#empty").classList.toggle("hidden",count!==0);
}
$$(".filter").forEach(btn=>btn.onclick=()=>{
  $$(".filter").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active"); active=btn.dataset.filter; filterCards();
});
$("#search").oninput=filterCards;

const modal=$("#modal");
$$(".open").forEach(btn=>btn.onclick=()=>{
  $("#modalTitle").textContent=btn.dataset.title;
  $("#modalText").textContent=btn.dataset.text;
  modal.classList.add("show");
});
function close(){modal.classList.remove("show")}
$("#close").onclick=close; $("#ok").onclick=close;
modal.onclick=e=>{if(e.target===modal)close()};
document.onkeydown=e=>{if(e.key==="Escape")close()};

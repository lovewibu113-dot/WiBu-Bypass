const services=[
  ["4M","Bypass Link4m","1.000đ","Bypass link4m nhanh chóng - ổn định - không lỗi"],
  ["LAYMA","Bypass Layma","1.000đ","Bypass link layma mượt mà - an toàn - hiệu quả"],
  ["ONTOP","Bypass Ontop","1.000đ","Bypass link ontop ổn định - không giật - không ban"],
  ["GTRAFFIC","Bypass Gtraffic","1.500đ","Bypass link gtraffic cao cấp - tốc độ nhanh - siêu ổn định"]
];
const cards=document.getElementById("cards");
cards.innerHTML=services.map(s=>`
  <article class="card panel">
    <div class="card-logo">${s[0]}</div>
    <div><h3>${s[1]}</h3><div class="price">🪙 Giá: <b>${s[2]}</b>　/　1 Link</div><div class="desc">${s[3]}</div></div>
    <button class="neon-btn buy" data-name="${s[1]}">⚡ Mua Ngay</button>
  </article>`).join("");

document.querySelectorAll(".nav").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".nav").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});
document.addEventListener("click",e=>{
  if(e.target.classList.contains("buy")) alert("Bạn chọn: "+e.target.dataset.name+"\nHãy thay hành động này bằng link thanh toán của bạn.");
});
document.getElementById("bypassBtn").onclick=()=>{
  const v=document.getElementById("urlInput").value.trim();
  document.getElementById("status").textContent=v ? "Đã nhận link. Bạn có thể nối nút này với API/backend bypass của mình." : "Vui lòng nhập một link.";
};

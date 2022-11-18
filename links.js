console.log(document);
console.log(document.getElementById("text").id);
let ip=document.getElementById("text");
let op=document.getElementById("otp");
function sayextract(){
    const txt=ip.value;
    const regex=  /(((https?:\/\/)|(www\.))[^\s]+)/g;
    const links=txt.match(regex);
    const link_arr=[];
    links.forEach((link) => {
      link_arr.push(link);
    });
    op.innerHTML=""
    for(let i=0;i<links.length;i++){
    op.innerHTML+=`<div>${link_arr[i]} &nbsp &nbsp &nbsp &nbsp <a  style="border: 2px solid marine;color:darkgreen;
    text-decoration:none;background-color:aquamarine;border-radius:7px;padding-left:7px;padding-right:7px" href="${link_arr[i]}" target="_blank">Go</a><br><br></div>`;
  }
}

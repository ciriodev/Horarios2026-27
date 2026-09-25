const DAYS = ["Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte","Diumenge"];
const STORAGE = "planMarc2026_v1";

const schedule = [
  {day:0,time:"08:00–13:00",title:"PRÀCTIQUES",sub:"Empresa · dual",type:"practice"},
  {day:0,time:"13:45–14:45",title:"GYM",sub:"Sessió base",type:"gym"},
  {day:0,time:"15:55–16:50",title:"M08_6 · VAZQU",sub:"DAW",type:"class"},
  {day:0,time:"17:00–17:45",title:"IPO2_1 · AGUIL",sub:"No fer IPO II",type:"class",skip:true},
  {day:0,time:"18:15–19:10",title:"M07_0 · GISTA",sub:"DAW",type:"class"},
  {day:0,time:"19:10–20:05",title:"M12_0 · CRESP / GISTA",sub:"NO FER M12",type:"class",skip:true},
  {day:0,time:"20:05–21:00",title:"M12_0 · CRESP / GISTA",sub:"NO FER M12",type:"class",skip:true},
  {day:0,time:"22:00–22:30",title:"X · INVERSIONS",sub:"Publicar / revisar contingut",type:"project"},

  {day:1,time:"08:00–13:00",title:"PRÀCTIQUES",sub:"Empresa · dual",type:"practice"},
  {day:1,time:"14:00–14:40",title:"DAW · REPÀS / TASQUES",sub:"Estudi",type:"study"},
  {day:1,time:"15:00–15:55",title:"M06_06 · BALLE",sub:"DAW",type:"class"},
  {day:1,time:"16:00–16:50",title:"M06_06 · BALLE",sub:"DAW",type:"class"},
  {day:1,time:"17:00–17:45",title:"TUT_D · BALLE",sub:"DAW",type:"class"},
  {day:1,time:"18:15–19:10",title:"M12_0 · CRESP / DOME",sub:"NO FER M12",type:"class",skip:true},
  {day:1,time:"19:10–20:05",title:"M12_0 · DOME / GISTA",sub:"NO FER M12",type:"class",skip:true},
  {day:1,time:"20:05–21:00",title:"M12_0",sub:"NO FER M12",type:"class",skip:true},
  {day:1,time:"22:00–22:30",title:"X · INVERSIONS",sub:"Publicar / automatització",type:"project"},

  {day:2,time:"08:00–13:00",title:"PRÀCTIQUES",sub:"Empresa · dual",type:"practice"},
  {day:2,time:"13:45–14:45",title:"GYM",sub:"Sessió base",type:"gym"},
  {day:2,time:"15:15–16:30",title:"WEB MONETITZABLE",sub:"Treball profund",type:"project"},
  {day:2,time:"16:50–17:45",title:"OPT_D · CRESP",sub:"DAW",type:"class"},
  {day:2,time:"18:15–19:10",title:"M07_0 · GISTA",sub:"DAW",type:"class"},
  {day:2,time:"19:10–20:05",title:"M07_0 · GISTA",sub:"DAW",type:"class"},
  {day:2,time:"20:05–21:00",title:"M12_0 · CRESP",sub:"NO FER M12",type:"class",skip:true},

  {day:3,time:"08:00–13:00",title:"PRÀCTIQUES",sub:"Empresa · dual",type:"practice"},
  {day:3,time:"14:00–14:40",title:"DAW · REPÀS / TASQUES",sub:"Estudi",type:"study"},
  {day:3,time:"15:00–15:55",title:"IPO2_1 · AGUIL",sub:"No fer IPO II",type:"class",skip:true},
  {day:3,time:"16:00–16:50",title:"M06_06 · BALLE",sub:"DAW",type:"class"},
  {day:3,time:"17:00–17:45",title:"M08_6 · VAZQU",sub:"DAW",type:"class"},
  {day:3,time:"18:15–19:10",title:"M09_06 · BALLE",sub:"DAW",type:"class"},
  {day:3,time:"19:10–20:05",title:"M12_0 · DOME / GISTA",sub:"NO FER M12",type:"class",skip:true},
  {day:3,time:"21:00–22:00",title:"X · INVERSIONS",sub:"Contingut + afiliació",type:"project"},

  {day:4,time:"08:00–13:00",title:"PRÀCTIQUES",sub:"Empresa · dual",type:"practice"},
  {day:4,time:"14:00–15:00",title:"DAW · TASQUES",sub:"Estudi",type:"study"},
  {day:4,time:"15:00–15:55",title:"M09_06 · BALLE",sub:"DAW",type:"class"},
  {day:4,time:"16:00–16:50",title:"OPT_D · CRESP",sub:"DAW",type:"class"},
  {day:4,time:"17:00–17:45",title:"OPT_D · CRESP",sub:"DAW",type:"class"},
  {day:4,time:"18:00–19:15",title:"GYM",sub:"Sessió base",type:"gym"},
  {day:4,time:"20:00–22:00",title:"WEB MONETITZABLE",sub:"Construcció profunda",type:"project"},

  {day:5,time:"10:00–11:30",title:"GYM",sub:"Sessió opcional / completa",type:"gym"},
  {day:5,time:"12:00–14:00",title:"WEB MONETITZABLE",sub:"Construcció",type:"project"},
  {day:5,time:"16:00–17:30",title:"X · INVERSIONS",sub:"Contingut + afiliació",type:"project"},
  {day:5,time:"18:00–19:00",title:"HYPEDROP",sub:"Experiment afiliació",type:"project"},

  {day:6,time:"11:00–13:00",title:"WEB MONETITZABLE",sub:"Construcció",type:"project"},
  {day:6,time:"13:00–14:00",title:"DAW · ORGANITZACIÓ",sub:"Tasques / estudi",type:"study"},
  {day:6,time:"16:00–17:00",title:"X · INVERSIONS",sub:"Contingut + anàlisi",type:"project"},
  {day:6,time:"17:00–17:30",title:"REVISIÓ SETMANAL",sub:"Planificar setmana",type:"study"},
  {day:6,time:"18:00–19:00",title:"GYM",sub:"Opcional",type:"gym"}
];

const defaultTasks = [
  ["Acabar una funcionalitat de la web monetitzable",0,"web",""],
  ["Publicar / preparar contingut per X",0,"x","22:00"],
  ["Repàs o tasques de DAW",1,"daw","14:00"],
  ["Avançar MVP o SEO de la web",2,"web","15:15"],
  ["Publicar i analitzar contingut a X",3,"x","21:00"],
  ["Fer 3 sessions de gym aquesta setmana",4,"gym","18:00"],
  ["Construcció profunda de la web",4,"web","20:00"],
  ["Provar una peça / link de HypeDrop",5,"hypedrop","18:00"],
  ["Revisar mètriques dels projectes",6,"personal","17:00"],
  ["Planificar la setmana següent",6,"personal","17:00"]
];

let data = JSON.parse(localStorage.getItem(STORAGE) || "null");
if(!data){
  data = {tasks: defaultTasks.map((x,i)=>({id:crypto.randomUUID(),title:x[0],day:x[1],category:x[2],time:x[3],done:false})), goals:{}};
  save();
}

function save(){localStorage.setItem(STORAGE,JSON.stringify(data));}
function categoryLabel(c){return {web:"💻 Webs",x:"🟡 X inversions",hypedrop:"🔵 HypeDrop",gym:"🏋️ Gym",daw:"📚 DAW",personal:"🌱 Personal"}[c]||c;}
function today(){let d=new Date().getDay(); return d===0?6:d-1;}
function formatToday(){return new Intl.DateTimeFormat("ca-ES",{weekday:"long",day:"numeric",month:"long"}).format(new Date());}

function renderTasks(){
  const filter = document.querySelector(".filter.active")?.dataset.filter || "all";
  const cat = document.getElementById("categoryFilter")?.value || "all";
  const list = data.tasks.filter(t => (filter==="all" || (filter==="done"?t.done:!t.done)) && (cat==="all"||t.category===cat));
  document.getElementById("allTasks").innerHTML = list.length ? list.map(taskHTML).join("") : `<div class="empty-day">No hi ha tasques amb aquest filtre.</div>`;
  const todayTasks = data.tasks.filter(t=>t.day===today()).slice(0,8);
  document.getElementById("todayTasks").innerHTML = todayTasks.length ? todayTasks.map(taskHTML).join("") : `<div class="empty-day">Cap tasca afegida per avui.</div>`;
  bindTaskEvents();
  updateProgress();
}
function taskHTML(t){
  return `<div class="task-item ${t.done?"done":""}">
    <input class="check" type="checkbox" data-id="${t.id}" ${t.done?"checked":""}>
    <div class="task-content"><div class="task-name">${escapeHtml(t.title)}</div><div class="task-meta">${categoryLabel(t.category)} · ${DAYS[t.day]}${t.time?" · "+t.time:""}</div></div>
    <button class="task-delete" data-delete="${t.id}" title="Eliminar">×</button>
  </div>`;
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function bindTaskEvents(){
  document.querySelectorAll(".check").forEach(el=>el.onchange=()=>{const t=data.tasks.find(x=>x.id===el.dataset.id);if(t){t.done=el.checked;save();renderTasks();}});
  document.querySelectorAll("[data-delete]").forEach(el=>el.onclick=()=>{data.tasks=data.tasks.filter(t=>t.id!==el.dataset.delete);save();renderTasks();});
}
function updateProgress(){
  const total=data.tasks.length, done=data.tasks.filter(t=>t.done).length;
  const p=total?Math.round(done/total*100):0;
  document.getElementById("weekProgress").textContent=p+"%";
}
function renderSchedule(){
  document.getElementById("scheduleGrid").innerHTML = DAYS.map((day,i)=>{
    const events=schedule.filter(x=>x.day===i);
    return `<div class="day-column"><div class="day-head"><strong>${day}</strong><small>${i<5?"Pràctiques + DAW":"Focus personal"}</small></div>
      ${events.map(e=>`<div class="schedule-event ${e.type}" style="${e.skip?'opacity:.28':''}">
        <div class="schedule-time">${e.time}</div><div class="schedule-title">${e.title}</div><div class="schedule-sub">${e.sub}</div>
      </div>`).join("")}</div>`;
  }).join("");
}
function openModal(){document.getElementById("taskModal").classList.remove("hidden");document.getElementById("taskTitle").focus();}
function closeModal(){document.getElementById("taskModal").classList.add("hidden");document.getElementById("taskForm").reset();}

document.querySelectorAll(".nav-btn").forEach(btn=>btn.onclick=()=>showSection(btn.dataset.section));
document.querySelectorAll("[data-section-link]").forEach(btn=>btn.onclick=()=>showSection(btn.dataset.sectionLink));
function showSection(id){
  document.querySelectorAll(".section").forEach(s=>s.classList.toggle("active",s.id===id));
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.section===id));
  const titles={dashboard:"Dashboard",week:"Horari setmanal",tasks:"Tasques",projects:"Projectes"};
  document.getElementById("pageTitle").textContent=titles[id];
  window.scrollTo({top:0,behavior:"smooth"});
}
document.getElementById("addTaskTop").onclick=openModal;
document.getElementById("addTaskMain").onclick=openModal;
document.getElementById("closeModal").onclick=closeModal;
document.getElementById("taskModal").onclick=e=>{if(e.target.id==="taskModal")closeModal();};
document.getElementById("taskForm").onsubmit=e=>{
  e.preventDefault();
  data.tasks.push({id:crypto.randomUUID(),title:document.getElementById("taskTitle").value.trim(),day:+document.getElementById("taskDay").value,category:document.getElementById("taskCategory").value,time:document.getElementById("taskTime").value,done:false});
  save();closeModal();renderTasks();showSection("tasks");
};
document.querySelectorAll(".filter").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderTasks();});
document.getElementById("categoryFilter").onchange=renderTasks;
document.querySelectorAll("[data-goal]").forEach(el=>{
  const key=el.dataset.goal; el.checked=!!data.goals[key];
  el.onchange=()=>{data.goals[key]=el.checked;save();};
});
document.getElementById("resetData").onclick=()=>{
  if(confirm("Això eliminarà les tasques i configuració guardades. Continuar?")){
    localStorage.removeItem(STORAGE);location.reload();
  }
};

document.getElementById("todayLabel").textContent=formatToday();
document.getElementById("todayHeading").textContent="Tasques d'avui · "+DAYS[today()];
renderSchedule();renderTasks();

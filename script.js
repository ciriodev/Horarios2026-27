const DAYS = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

const schedule = [
  // LUNES
  {day:0,time:"08:00–13:00",title:"PRÁCTICAS",sub:"Empresa · dual",type:"practice",hours:5},
  {day:0,time:"13:00–13:45",title:"COMER",sub:"Descanso",type:"study",hours:.75},
  {day:0,time:"13:45–14:45",title:"GYM",sub:"Sesión base · prioritario",type:"gym",hours:1},
  {day:0,time:"14:45–15:30",title:"DUCHA + DESPLAZAMIENTO",sub:"Transición",type:"study",hours:.75},
  {day:0,time:"15:55–16:50",title:"M08",sub:"DAW",type:"class",hours:.92},
  {day:0,time:"16:50–18:15",title:"TIEMPO LIBRE / PROYECTO",sub:"Hueco de IPO II · flexible",type:"free",hours:1.42},
  {day:0,time:"18:15–19:10",title:"M07",sub:"DAW",type:"class",hours:.92},
  {day:0,time:"19:10–21:00",title:"WEBS MONETIZABLES",sub:"Hueco de M12 · bloque profundo",type:"project",project:"web",hours:1.83},
  {day:0,time:"21:00–22:00",title:"CENA",sub:"Descanso",type:"study",hours:1},
  {day:0,time:"22:00–22:30",title:"X · INVERSIONES",sub:"Publicar / revisar contenido",type:"project",project:"x",hours:.5},

  // MARTES
  {day:1,time:"08:00–13:00",title:"PRÁCTICAS",sub:"Empresa · dual",type:"practice",hours:5},
  {day:1,time:"13:00–14:00",title:"COMER",sub:"Descanso",type:"study",hours:1},
  {day:1,time:"14:00–14:40",title:"DAW / TAREAS",sub:"Estudio",type:"study",hours:.67},
  {day:1,time:"15:00–15:55",title:"M06",sub:"DAW",type:"class",hours:.92},
  {day:1,time:"16:00–16:50",title:"M06",sub:"DAW",type:"class",hours:.83},
  {day:1,time:"16:50–17:00",title:"DESCANSO",sub:"Pausa",type:"study",hours:.17},
  {day:1,time:"17:00–17:45",title:"TUT",sub:"DAW",type:"class",hours:.75},
  {day:1,time:"17:45–18:15",title:"DESCANSO",sub:"Transición",type:"study",hours:.5},
  {day:1,time:"18:15–19:30",title:"GYM",sub:"Sesión base",type:"gym",hours:1.25},
  {day:1,time:"19:30–21:00",title:"WEBS / HYPEDROP",sub:"Construcción + experimento afiliación",type:"project",project:"mixed",hours:1.5},
  {day:1,time:"21:00–22:00",title:"CENA",sub:"Descanso",type:"study",hours:1},
  {day:1,time:"22:00–22:30",title:"X · INVERSIONES",sub:"Publicar / automatización",type:"project",project:"x",hours:.5},

  // MIÉRCOLES
  {day:2,time:"08:00–13:00",title:"PRÁCTICAS",sub:"Empresa · dual",type:"practice",hours:5},
  {day:2,time:"13:00–13:45",title:"COMER",sub:"Descanso",type:"study",hours:.75},
  {day:2,time:"13:45–14:45",title:"GYM",sub:"Sesión base · prioritario",type:"gym",hours:1},
  {day:2,time:"14:45–15:15",title:"DUCHA",sub:"Transición",type:"study",hours:.5},
  {day:2,time:"15:15–16:30",title:"WEBS MONETIZABLES",sub:"Día fuerte de web",type:"project",project:"web",hours:1.25},
  {day:2,time:"16:30–16:50",title:"DESCANSO",sub:"Pausa",type:"study",hours:.33},
  {day:2,time:"16:50–17:45",title:"OPT",sub:"DAW",type:"class",hours:.92},
  {day:2,time:"17:45–18:15",title:"DESCANSO",sub:"Transición",type:"study",hours:.5},
  {day:2,time:"18:15–19:10",title:"M07",sub:"DAW",type:"class",hours:.92},
  {day:2,time:"19:10–20:05",title:"M07",sub:"DAW",type:"class",hours:.92},
  {day:2,time:"20:05–21:00",title:"X · INVERSIONES",sub:"Contenido + afiliación",type:"project",project:"x",hours:.92},
  {day:2,time:"21:00–22:00",title:"CENA",sub:"Descanso",type:"study",hours:1},

  // JUEVES
  {day:3,time:"08:00–13:00",title:"PRÁCTICAS",sub:"Empresa · dual",type:"practice",hours:5},
  {day:3,time:"13:00–14:00",title:"COMER",sub:"Descanso",type:"study",hours:1},
  {day:3,time:"14:00–14:40",title:"DAW",sub:"Tareas / estudio",type:"study",hours:.67},
  {day:3,time:"15:00–16:15",title:"GYM",sub:"Sesión base · hueco de IPO II",type:"gym",hours:1.25},
  {day:3,time:"16:15–16:50",title:"DUCHA / DESCANSO",sub:"Transición",type:"study",hours:.58},
  {day:3,time:"16:50–17:45",title:"M06",sub:"DAW",type:"class",hours:.92},
  {day:3,time:"17:45–18:15",title:"DESCANSO",sub:"Pausa",type:"study",hours:.5},
  {day:3,time:"18:15–19:10",title:"M08",sub:"DAW",type:"class",hours:.92},
  {day:3,time:"19:10–20:05",title:"X · INVERSIONES",sub:"Contenido + afiliación",type:"project",project:"x",hours:.92},
  {day:3,time:"20:05–21:00",title:"CENA",sub:"Descanso",type:"study",hours:.92},
  {day:3,time:"21:00–22:00",title:"X · AUTOMATIZACIÓN",sub:"Sistema / procesos",type:"project",project:"x",hours:1},

  // VIERNES
  {day:4,time:"08:00–13:00",title:"PRÁCTICAS",sub:"Empresa · dual",type:"practice",hours:5},
  {day:4,time:"13:00–14:00",title:"COMER",sub:"Descanso",type:"study",hours:1},
  {day:4,time:"14:00–15:00",title:"DAW / TAREAS",sub:"Estudio",type:"study",hours:1},
  {day:4,time:"15:00–15:55",title:"M09",sub:"DAW",type:"class",hours:.92},
  {day:4,time:"16:00–16:50",title:"OPT",sub:"DAW",type:"class",hours:.83},
  {day:4,time:"17:00–17:45",title:"OPT",sub:"DAW",type:"class",hours:.75},
  {day:4,time:"18:00–19:15",title:"GYM",sub:"Sesión base · prioritario",type:"gym",hours:1.25},
  {day:4,time:"19:15–20:00",title:"DUCHA + COMER",sub:"Transición",type:"study",hours:.75},
  {day:4,time:"20:00–22:00",title:"WEBS MONETIZABLES",sub:"BLOQUE PROFUNDO",type:"project",project:"web",hours:2},
  {day:4,time:"22:00–23:30",title:"LIBRE",sub:"Gaming / amigos / descanso",type:"free",hours:1.5},

  // SÁBADO
  {day:5,time:"09:00–10:00",title:"DESAYUNO",sub:"Arranque",type:"study",hours:1},
  {day:5,time:"10:00–11:30",title:"GYM",sub:"4.º entrenamiento opcional",type:"gym",hours:1.5},
  {day:5,time:"12:00–14:00",title:"WEBS MONETIZABLES",sub:"Construcción",type:"project",project:"web",hours:2},
  {day:5,time:"14:00–16:00",title:"COMER + DESCANSO",sub:"Tiempo personal",type:"study",hours:2},
  {day:5,time:"16:00–17:30",title:"X · INVERSIONES",sub:"Contenido + afiliación",type:"project",project:"x",hours:1.5},
  {day:5,time:"17:30–18:00",title:"DESCANSO",sub:"Pausa",type:"study",hours:.5},
  {day:5,time:"18:00–19:00",title:"HYPEDROP",sub:"Experimento afiliación",type:"project",project:"hype",hours:1},
  {day:5,time:"19:00–23:00",title:"LIBRE",sub:"Tiempo personal",type:"free",hours:4},

  // DOMINGO
  {day:6,time:"10:00–11:00",title:"DESAYUNO",sub:"Arranque",type:"study",hours:1},
  {day:6,time:"11:00–13:00",title:"WEBS MONETIZABLES",sub:"Construcción",type:"project",project:"web",hours:2},
  {day:6,time:"13:00–14:00",title:"ORGANIZAR DAW",sub:"Tareas / estudio",type:"study",hours:1},
  {day:6,time:"14:00–16:00",title:"COMER + DESCANSO",sub:"Tiempo personal",type:"study",hours:2},
  {day:6,time:"16:00–17:00",title:"X · INVERSIONES",sub:"Contenido + análisis",type:"project",project:"x",hours:1},
  {day:6,time:"17:00–17:30",title:"REVISIÓN SEMANAL",sub:"Planificar próxima semana",type:"study",hours:.5},
  {day:6,time:"17:30–18:00",title:"LIBRE",sub:"No llenar por obligación",type:"free",hours:.5},
  {day:6,time:"18:00–19:00",title:"GYM",sub:"Opcional",type:"gym",hours:1},
  {day:6,time:"19:00–22:00",title:"LIBRE",sub:"Descanso",type:"free",hours:3}
];

const defaultTasks = [
  {id:crypto.randomUUID(),title:"Definir la idea de la próxima web monetizable",project:"web",priority:"high",date:"",done:false},
  {id:crypto.randomUUID(),title:"Preparar 3 publicaciones para X",project:"x",priority:"medium",date:"",done:false},
  {id:crypto.randomUUID(),title:"Investigar una oferta/producto de HypeDrop",project:"hype",priority:"low",date:"",done:false},
  {id:crypto.randomUUID(),title:"Revisar tareas pendientes de DAW",project:"daw",priority:"medium",date:"",done:false}
];

let tasks = JSON.parse(localStorage.getItem("jarvisTasks") || "null") || defaultTasks;
let taskFilter = "all";

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function save(){ localStorage.setItem("jarvisTasks", JSON.stringify(tasks)); updateAll(); }

function hoursFor(project){
  return schedule.filter(x => x.project === project || (project === "web" && x.project === "mixed")).reduce((a,x)=>a+x.hours,0);
}

function renderSchedule(){
  const container = $("#schedule");
  container.innerHTML = DAYS.map((day,i)=>`
    <div class="day-col">
      <div class="day-head"><strong>${day}</strong><span>${i<5 ? "Prácticas + DAW" : "Emprendimiento / descanso"}</span></div>
      <div class="event-list">
        ${schedule.filter(x=>x.day===i).map(e=>`
          <div class="event ${e.type}">
            <div class="time">${e.time}</div>
            <strong>${e.title}</strong>
            <small>${e.sub}</small>
          </div>`).join("")}
      </div>
    </div>`).join("");
}

function renderTasks(){
  const list = $("#tasksList");
  let visible = tasks.filter(t => taskFilter==="all" || (taskFilter==="done" ? t.done : !t.done));
  visible.sort((a,b)=>Number(a.done)-Number(b.done) || ({high:0,medium:1,low:2}[a.priority]-{high:0,medium:1,low:2}[b.priority]));
  list.innerHTML = visible.length ? visible.map(task => `
    <div class="task-row">
      <button class="check ${task.done?"done":""}" data-toggle="${task.id}">${task.done?"✓":""}</button>
      <div class="task-content ${task.done?"done":""}">
        <strong>${escapeHtml(task.title)}</strong>
        <small>${projectName(task.project)}${task.date ? " · "+task.date : ""}</small>
      </div>
      <span class="priority ${task.priority}">${priorityName(task.priority)}</span>
      <button class="delete-task" data-delete="${task.id}">×</button>
    </div>`).join("") : `<div class="panel"><p style="color:var(--muted)">No hay tareas aquí. Milagro estadístico.</p></div>`;
}

function renderPriority(){
  const list = $("#priorityTasks");
  const pending = tasks.filter(t=>!t.done).sort((a,b)=>({high:0,medium:1,low:2}[a.priority]-{high:0,medium:1,low:2}[b.priority])).slice(0,4);
  list.innerHTML = pending.length ? pending.map(t=>`
    <div class="task-row">
      <button class="check" data-toggle="${t.id}"></button>
      <div class="task-content"><strong>${escapeHtml(t.title)}</strong><small>${projectName(t.project)}</small></div>
      <span class="priority ${t.priority}">${priorityName(t.priority)}</span>
    </div>`).join("") : `<p style="color:var(--muted);font-size:12px">Todo limpio. Sospechosamente limpio.</p>`;
}

function renderMini(){
  $("#weekMini").innerHTML = DAYS.map((d,i)=>{
    const p = schedule.filter(x=>x.day===i && x.type==="project").reduce((a,x)=>a+x.hours,0);
    const gym = schedule.filter(x=>x.day===i && x.type==="gym").reduce((a,x)=>a+x.hours,0);
    const total = schedule.filter(x=>x.day===i).reduce((a,x)=>a+x.hours,0);
    const pct = Math.min(100, total ? (p/Math.max(total,8))*100 : 0);
    return `<div class="mini-day"><strong>${d}</strong><div class="mini-bar"><span style="width:${pct}%"></span></div><small>${fmtHours(p)} negocio · ${fmtHours(gym)} gym</small></div>`;
  }).join("");
}

function updateStats(){
  const baseGym = schedule.filter(x=>x.type==="gym" && x.day<5);
  $("#gymStat").textContent = `${baseGym.length}/3`;
  const business = schedule.filter(x=>x.type==="project").reduce((a,x)=>a+x.hours,0);
  $("#businessHours").textContent = fmtHours(business);
  const done = tasks.filter(t=>t.done).length;
  const pct = tasks.length ? Math.round(done/tasks.length*100) : 0;
  $("#taskStat").textContent = pct+"%";
  $("#heroPercent").textContent = pct+"%";
  $("#heroRing").style.background = `conic-gradient(#e9eff4 ${pct*3.6}deg,#27313b 0deg)`;
  $("#webHours").textContent = fmtHours(hoursFor("web"));
  $("#xHours").textContent = fmtHours(hoursFor("x"));
  $("#hypeHours").textContent = fmtHours(hoursFor("hype"));
}

function updateNext(){
  const now = new Date();
  const day = (now.getDay()+6)%7;
  const minutes = now.getHours()*60+now.getMinutes();
  const candidates = schedule.filter(x=>x.day===day).map(x=>({...x,start:toMin(x.time)})).filter(x=>x.start>=minutes);
  const next = candidates[0] || schedule.find(x=>x.day===(day+1)%7);
  $("#nextBlock").innerHTML = next ? `<div class="time">${DAYS[next.day]} · ${next.time}</div><strong>${next.title}</strong><span>${next.sub}</span>` : `<strong>Semana libre</strong>`;
  $("#dailyBrief").textContent = `Hoy: ${DAYS[day]}. Tienes ${fmtHours(schedule.filter(x=>x.day===day && x.type==="project").reduce((a,x)=>a+x.hours,0))} de emprendimiento y ${fmtHours(schedule.filter(x=>x.day===day && x.type==="gym").reduce((a,x)=>a+x.hours,0))} de Gym programados.`;
}

function updateAll(){ renderTasks();renderPriority();renderMini();updateStats();updateNext(); }

function projectName(p){return {web:"Webs monetizables",x:"X · Inversiones",hype:"HypeDrop",daw:"DAW",other:"Personal"}[p]||p}
function priorityName(p){return {high:"Alta",medium:"Media",low:"Baja"}[p]}
function fmtHours(h){return Number.isInteger(h)?h+"h":h.toFixed(1).replace(".",",")+"h"}
function toMin(range){return Number(range.split("–")[0].split(":")[0])*60+Number(range.split("–")[0].split(":")[1])}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

function openModal(){ $("#taskModal").classList.add("open"); $("#taskTitle").focus(); }
function closeModal(){ $("#taskModal").classList.remove("open"); $("#taskForm").reset(); }

$$(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>showView(btn.dataset.view)));
$$("[data-go]").forEach(btn=>btn.addEventListener("click",()=>showView(btn.dataset.go)));
function showView(view){
  $$(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  $$(".view").forEach(v=>v.classList.toggle("active",v.id===view));
  $("#pageTitle").textContent={dashboard:"Dashboard",week:"Horario",tasks:"Tareas",projects:"Proyectos"}[view];
  window.scrollTo({top:0,behavior:"smooth"});
}

$("#quickAddBtn").onclick=openModal;
$("#addTaskBtn2").onclick=openModal;
$("#closeModal").onclick=closeModal;
$("#taskModal").addEventListener("click",e=>{if(e.target.id==="taskModal")closeModal()});

$("#taskForm").addEventListener("submit",e=>{
  e.preventDefault();
  tasks.push({
    id:crypto.randomUUID(),title:$("#taskTitle").value.trim(),project:$("#taskProject").value,
    priority:$("#taskPriority").value,date:$("#taskDate").value,done:false
  });
  save();closeModal();showView("tasks");
});

document.addEventListener("click",e=>{
  const toggle=e.target.closest("[data-toggle]");
  if(toggle){const t=tasks.find(x=>x.id===toggle.dataset.toggle);if(t){t.done=!t.done;save();}}
  const del=e.target.closest("[data-delete]");
  if(del){tasks=tasks.filter(x=>x.id!==del.dataset.delete);save();}
});

$$(".filter").forEach(b=>b.addEventListener("click",()=>{
  $$(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");taskFilter=b.dataset.filter;renderTasks();
}));

$("#resetBtn").onclick=()=>{
  if(confirm("¿Borrar todas las tareas y volver a la configuración inicial?")){tasks=defaultTasks;save();}
};

const dateNow = new Date();
$("#todayLabel").textContent = dateNow.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long"});
$("#greeting").textContent = dateNow.getHours()<14 ? "Buenos días, Marc." : dateNow.getHours()<20 ? "Buenas tardes, Marc." : "Buenas noches, Marc.";

renderSchedule();
updateAll();

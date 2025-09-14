/* ============ Data (from resume) ============ */
const topPicks = [
  { id:'skills', title:'Skills', img:'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop', tag:'Explore', type:'skills'},
  { id:'projects', title:'Projects', img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop', tag:'Capstone', type:'projects'},
  { id:'professional', title:'Experience', img:'https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1200&auto=format&fit=crop', tag:'2 State Clients', type:'professional'}
];

const continueWatching = [
  { id:'hireme', title:'Hire Me', img:'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop', tag:'Reach Out', type:'hireme'},
  { id:'resume', title:'Resume Highlights', img:'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&auto=format&fit=crop', tag:'One‑pager', type:'resume'}
];

// Experience (two clients only) — show 3 bullets + View More
const timeline = [
  { role:'Application Development Analyst – Accenture', place:'State of Michigan — MLCC', when:'Jul 2022 – Jun 2023',
    stack:'Lightning, Experience Cloud, 30+ LWCs, REST, Azure DevOps, Data Loader',
    bullets:[
      'Migrated Classic to Lightning, remediating 100+ Apex/Aura/VF components.',
      'Built branded Experience Cloud portals with custom themes.',
      'Automated CI/CD with Azure DevOps YAML (validate & deploy).',
      'Developed 30+ LWCs for permit/license workflows.',
      'Built REST services, migrated 800k+ records with integrity checks.',
      'Created Apex Triggers/Batch/Queueable for task automation and SLAs.'
    ]},
  { role:'Application Development Associate – Accenture', place:'State of Massachusetts — MA Health Connector', when:'Feb 2020 – Jul 2022',
    stack:'LWC (30+), Flows, Apex, MuleSoft, Copado, Entitlements/Milestones',
    bullets:[
      'Designed 30+ LWCs for dynamic questionnaires with branching logic.',
      'Built screen/auto flows with Apex actions; case routing & queue logic.',
      'Integrated with MS D365 via MuleSoft; real‑time dashboards.',
      'Configured SLAs & entitlements; CTI/Omni‑Channel.',
      'Managed deployments via Copado across SIT/QA/PROD.',
      'Performed 500k+ record migrations; training & documentation.'
    ]}
];

// Skills — categories pulled from resume (full coverage)
const skills = [
  { title:'Salesforce Ecosystem', desc:'Sales Cloud, Service Cloud' },
  { title:'Languages & Frameworks', desc:'Apex, LWC, Aura, Visualforce, JavaScript, SQL, Omni‑Channel, CTI' },
  { title:'Automation & Tools', desc:'Flows, Validation Rules, Approval Processes, Process Builder, Workbench' },
  { title:'Deployment & DevOps', desc:'Copado, Azure DevOps, Git, SFDX/CLI, Gearset, Change Sets, GitHub' },
  { title:'API & Integrations', desc:'REST, SOAP, Salesforce Connect, OAuth, LinkedIn Sales Navigator' },
  { title:'Security & Compliance', desc:'MFA, Platform Encryption, GDPR, HIPAA' },
  { title:'Project Management', desc:'Agile (Scrum/Kanban), Jira, ServiceNow' },
  { title:'Data & Analysis', desc:'Salesforce Data Loader, Excel (Advanced), Tableau' },
  { title:'CRM Architecture', desc:'Permission Sets, Sharing Rules, Profile Management' },
  { title:'Document Automation', desc:'Global Relay (Chatter archiving)' },
  { title:'Testing & Coverage', desc:'Apex Unit Testing (90%+), Batch Apex, Triggers, HTML Email Templates, Selenium' },
  { title:'Frontend & Email Design', desc:'HTML, CSS, Responsive Email Templates' },
  { title:'CDP & Marketing Data', desc:'Salesforce CDP, Segment, APIs for marketing pipelines' },
  { title:'Lightning UX/UI & Experience Cloud', desc:'LWC, Aura, Custom Theme Layouts, CSS Frameworks' },
  { title:'UX/UI & Front‑End', desc:'Responsive Web Design, HTML5, CSS3, Design‑to‑Code' },
  { title:'Contact Center & UX', desc:'Omni‑Channel, Queues, Case Assignment, Lightning Page Templates, CTI Tools' }
];

// Projects — Capstone only + a skills showcase card, no action buttons
const projects = [
  { title:'Family Express CRM (Capstone)', img:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    summary:'FastAPI + React microservices with AI article preview & PDF export; PostgreSQL; Docker; AWS Lambda (40% perf gain).'},
  { title:'Skills Showcase', img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    summary:'Hands‑on with Apex/LWC, CI/CD (Copado/Azure DevOps), REST/SOAP, Data Loader, Security & Sharing.'}
];

const resumeBullets = [
  'End‑to‑end Salesforce delivery for public‑sector clients (Accenture).',
  'Apex, LWC, Flows; secure data modeling & sharing; Experience Cloud.',
  '90%+ test coverage; UAT planning; SDLC best practices.',
  'Integrations with MuleSoft, REST/SOAP; CTI/Omni‑Channel.',
  'CI/CD with Copado & Azure DevOps; Git branching & rollbacks.',
  'Large data migrations with Data Loader & Excel VLOOKUP.'
];

/* ============ Helpers ============ */
const $ = (sel, el=document)=>el.querySelector(sel);
const $$ = (sel, el=document)=>Array.from(el.querySelectorAll(sel));

function cardTemplate(item){
  return `<article class="card" data-id="${item.id}" data-type="${item.type||'card'}">
    <div class="thumb"><img alt="${item.title}" src="${item.img}"/></div>
    <div class="meta">
      <span class="tag">${item.tag||'Open'}</span>
      <h4>${item.title}</h4>
    </div>
  </article>`;
}

function addCards(rowId, items){
  const row = document.getElementById(rowId);
  row.innerHTML = items.map(cardTemplate).join('');
}

function addTimeline(){
  const list = $('#timeline');
  list.innerHTML = timeline.map(t=>{
    const shortBullets = t.bullets.slice(0,3).map(b=>`<li>${b}</li>`).join('');
    const rest = t.bullets.slice(3).map(b=>`<li>${b}</li>`).join('');
    const more = rest ? `<details><summary>View more</summary><ul class="bullets">${rest}</ul></details>` : '';
    return `
   <li class="timeline-item">
     <h3>${t.role}</h3>
     <div class="stack">${t.place} • ${t.when}</div>
     <div class="stack">${t.stack}</div>
     <ul class="bullets">${shortBullets}</ul>
     ${more}
   </li>`
  }).join('');
}

function addSkills(){
  const grid = $('#skillsGrid');
  grid.innerHTML = skills.map(s=>`
   <div class="skill">
     <h4>${s.title}</h4>
     <p>${s.desc}</p>
   </div>`).join('');
}

function addProjects(){
  const grid = $('#projectsGrid');
  grid.innerHTML = projects.map(p=>`
   <div class="project">
     <div class="banner"><img alt="${p.title}" src="${p.img}"/></div>
     <h4>${p.title}</h4>
     <p>${p.summary}</p>
   </div>`).join('');
}

function addResume(){
  $('#resumeBullets').innerHTML = resumeBullets.map(b=>`<li>${b}</li>`).join('');
}

/* ============ Typing Effect & Reveal ============ */
function typeLine(el){
  const text = el.dataset.text || el.textContent; el.textContent = '';
  let i=0; const tick = ()=>{ el.textContent = text.slice(0, i++); if(i <= text.length) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
},{threshold:.12});

/* ============ Screen Router ============ */
function showScreen(id){
  $$('.screen').forEach(s=>s.classList.add('hidden'));
  if(id && document.getElementById(id)){
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'});
  }
}

/* ============ Init ============ */
function init(){
  addCards('topRow', topPicks);
  addCards('continueRow', continueWatching);
  addTimeline(); addSkills(); addProjects(); addResume();
  typeLine($('.typing'));
  $$('.reveal').forEach(el=> io.observe(el));
  $('#year').textContent = new Date().getFullYear();

  document.body.addEventListener('click', (e)=>{
    if(e.target.matches('[data-nav]')){
      const id = e.target.getAttribute('data-nav');
      if(id==='home'){ window.scrollTo({top:0, behavior:'smooth'}); return; }
      showScreen(id); e.preventDefault();
    }
    const card = e.target.closest('.card');
    if(card){ const target = card.dataset.id || card.dataset.type; if(target){ showScreen(target); } }
  });
}

init();

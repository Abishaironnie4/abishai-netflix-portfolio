/* ============ Data (from resume) ============ */
const topPicks = [
  { id:'skills', title:'Skills', img:'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop', tag:'Explore', type:'skills'},
  { id:'projects', title:'Projects', img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop', tag:'Hands‑on', type:'projects'},
  { id:'contact', title:'Contact Me', img:'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=1200&auto=format&fit=crop', tag:'Let’s Talk', type:'contact'}
];

const continueWatching = [
  { id:'resume', title:'Resume Highlights', img:'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&auto=format&fit=crop', tag:'One‑pager', type:'resume'},
  { id:'professional', title:'Professional', img:'https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1200&auto=format&fit=crop', tag:'Timeline', type:'timeline'},
  { id:'hireme', title:'Hire Me', img:'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop', tag:'Reach Out', type:'contact'}
];

const timeline = [
  { role:'Application Development Analyst – Accenture', place:'State of Michigan — MLCC', when:'Jul 2022 – Jun 2023',
    stack:'Lightning, Experience Cloud, 30+ LWCs, REST, Azure DevOps, Data Loader',
    bullets:[
      'Migrated Salesforce Classic to Lightning; remediated 100+ Apex/Aura/Visualforce.',
      'Built Experience Cloud portals with custom themes & navigation.',
      'Automated CI/CD with YAML pipelines (validation & deployment).',
      'Developed REST services; migrated 800k+ records with data integrity checks.'
    ]},
  { role:'Application Development Associate – Accenture', place:'State of Massachusetts — Health Connector', when:'Feb 2020 – Jul 2022',
    stack:'LWC (30+), Flows, Apex (Triggers/Batch), MuleSoft, Copado, Omni‑Channel',
    bullets:[
      'Dynamic questionnaires with branching logic using LWCs.',
      'Screen/Auto flows with Apex actions; SLA & milestones.',
      'Integrated with MS Dynamics via MuleSoft; CTI & Omni‑Channel.',
      'Large‑scale migrations (500k+ records), dashboards & training.'
    ]},
  { role:'Capstone — Family Express (Valparaiso Univ.)', place:'FastAPI • React • PostgreSQL • Docker • AWS', when:'Aug 2024 – Dec 2024',
    stack:'Microservices, AI content preview, auth, PDF export',
    bullets:[
      'REST services with FastAPI & PostgreSQL; React front‑end.',
      'Lambda for async workflows; 40% perf gain; Dockerized microservices.'
    ]},
  { role:'Education', place:'M.S. IT — Valparaiso Univ. | B.E. ECE — Vasavi College', when:'2016 – 2024', stack:'GPA 3.6 (MS)', bullets:['Salesforce Admin • App Builder • PD‑I']}
];

const skills = [
  { title:'Salesforce', desc:'Sales, Service & Experience Cloud; LWC, Apex, Flows, Reports, Sharing, Security.' },
  { title:'DevOps', desc:'Copado, Azure DevOps, Git, SFDX/CLI, Gearset; PR validation & rollback.' },
  { title:'APIs & Integrations', desc:'REST/SOAP, OAuth, Salesforce Connect, CTI, Omni‑Channel.' },
  { title:'Data & Quality', desc:'Data Loader, SOQL, Excel (VLOOKUP), 90%+ test coverage.' },
  { title:'Cloud/Infra', desc:'AWS basics, Docker, Netlify/GitHub Pages deploys.' },
  { title:'Frontend', desc:'HTML5, CSS3, Responsive Email Templates, Lightning UX.' }
];

const projects = [
  { title:'Experience Cloud Portal', img:'https://images.unsplash.com/photo-1604147706289-17a7de0bf1c8?q=80&w=1200&auto=format&fit=crop',
    summary:'Branded community with custom theme, navigation menus, and secure access.',
    links:[{label:'Read More', href:'#'},{label:'Contact', href:'#hireme'}]},
  { title:'CI/CD Pipeline (Azure DevOps)', img:'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    summary:'YAML pipeline for validate & deploy; org creds and PR checks.',
    links:[{label:'Read More', href:'#'},{label:'Contact', href:'#hireme'}]},
  { title:'Healthcare Case Automation', img:'https://images.unsplash.com/photo-1536305030437-94b3a2b62f30?q=80&w=1200&auto=format&fit=crop',
    summary:'Triggers/Batch/Flows for task generation & queue routing; dashboards.',
    links:[{label:'Read More', href:'#'},{label:'Contact', href:'#hireme'}]},
  { title:'Family Express CRM (Capstone)', img:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    summary:'FastAPI + React microservices with AI article preview & PDF export.',
    links:[{label:'Read More', href:'#'},{label:'Contact', href:'#hireme'}]}
];

const resumeBullets = [
  'End‑to‑end Salesforce delivery for large public‑sector clients (Accenture).',
  'Custom development with Apex, LWC, Flows; secure data modeling & sharing.',
  '90%+ Apex test coverage; UAT planning; SDLC & release best practices.',
  'Integrations with MuleSoft, REST/SOAP; CTI/Omni‑Channel experience.',
  'CI/CD across Copado & Azure DevOps; Git branching & rollbacks.',
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
    <button class="play">▶</button>
  </article>`;
}

function addCards(rowId, items){
  const row = document.getElementById(rowId);
  row.innerHTML = items.map(cardTemplate).join('');
}

function addTimeline(){
  const list = $('#timeline');
  list.innerHTML = timeline.map(t=>`
   <li class="timeline-item">
     <h3>${t.role}</h3>
     <div class="stack">${t.place} • ${t.when}</div>
     <div class="stack">${t.stack}</div>
     <ul class="bullets">${t.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
   </li>`).join('');
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
     <div class="actions">${p.links.map(l=>`<a class="btn btn-ghost" href="${l.href}">${l.label}</a>`).join('')}</div>
   </div>`).join('');
}

function addResume(){
  $('#resumeBullets').innerHTML = resumeBullets.map(b=>`<li>${b}</li>`).join('');
}

/* ============ Recently Viewed ============ */
const recent = [];
function pushRecent(el){
  const id = el.dataset.id || el.querySelector('[data-id]')?.dataset.id || el.textContent.trim();
  const title = el.querySelector('h4')?.textContent || el.getAttribute('aria-label') || 'Item';
  const img = el.querySelector('img')?.src || 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop';
  recent.unshift({id, title, img, tag:'Viewed'});
  const unique = []; const map = new Set();
  for(const r of recent){ if(!map.has(r.id)){ map.add(r.id); unique.push(r);} }
  $('#recentRow').innerHTML = unique.slice(0,12).map(cardTemplate).join('');
}

/* ============ Typing Effect ============ */
function typeLine(el){
  const text = el.dataset.text || el.textContent;
  el.textContent = '';
  let i=0; const tick = ()=>{
    el.textContent = text.slice(0, i++);
    if(i <= text.length) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ============ Reveal on Scroll ============ */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} 
  });
},{threshold:.12});

/* ============ Modal ============ */
function openModal(html){ $('#modalBody').innerHTML = html; $('#modal').classList.add('open'); }
function closeModal(){ $('#modal').classList.remove('open'); $('#modalBody').innerHTML=''; }

/* ============ Init ============ */
function init(){
  // Rows
  addCards('topRow', topPicks);
  addCards('continueRow', continueWatching);
  // Content sections
  addTimeline(); addSkills(); addProjects(); addResume();
  // Typing headline
  typeLine($('.typing'));
  // Scroll reveal
  $$('.reveal').forEach(el=> io.observe(el));
  // Year
  $('#year').textContent = new Date().getFullYear();
  // Click handling (navigate & recent)
  document.body.addEventListener('click', (e)=>{
    const card = e.target.closest('.card');
    if(card){
      pushRecent(card);
      const anchor = card.dataset.id ? document.getElementById(card.dataset.id) : null;
      if(anchor){ anchor.scrollIntoView({behavior:'smooth', block:'start'}); }
      return;
    }
    if(e.target.id==='closeModal') closeModal();
  });
}

init();

/* ============ Data (from resume) ============ */
const topPicks = [
  { id:'skills', title:'Skills', img:'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop', tag:'Explore', type:'skills'},
  { id:'projects', title:'Projects', img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop', tag:'Capstone', type:'projects'},
  { id:'professional', title:'Experience', img:'https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1200&auto=format&fit=crop', tag:'2 State Clients', type:'professional'}
];

const continueWatching = [
  { id:'certs', title:'Certifications', img:'https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1200&auto=format&fit=crop', tag:'Creds', type:'certs'},
  { id:'hireme', title:'Hire Me', img:'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop', tag:'Reach Out', type:'hireme'}
];

/* ---------- Experience (exact text you sent) ---------- */
const timeline = [
  {
    role:'Application Development Analyst — Accenture',
    place:'State of Michigan – MLCC (Michigan Liquor Control Commission)',
    when:'Hyderabad, India | Jul 2022 – Jun 2023',
    stack:'Classic → Lightning migration • Experience Cloud • CI/CD (Azure DevOps) • REST • LWC (30+) • Data Loader',
    bullets:[
      'Upgraded legacy Salesforce Classic org with 100+ Apex Classes, Aura Components, and Visualforce pages into Lightning Experience with accessibility remediation.',
      'Built and deployed Community Portals using Experience Cloud with custom themes, navigation menus, and branded UI components.',
      'Resolved deployment blockers with Community metadata by isolating them into separate source folders and establishing pre-deployment routines for successful deployment via Azure DevOps.',
      'Automated CI/CD process using YAML-based pipelines for validation and deployment, including org credential management and pull request validation logic.',
      'Developed and deployed 30+ Lightning Web Components tailored to permit/license workflows and contact center needs.',
      'Built RESTful services for external system integration without middleware, ensuring secure authentication and data mapping.',
      'Migrated over 800,000 records across environments, using VLOOKUP logic and API name verification to ensure relational data integrity.',
      'Regularly collaborated with business stakeholders in workshops, translated requirements into technical solutions, and delivered end-user training.',
      'Created and executed Apex Triggers, Batch, and Queueable classes to generate tasks dynamically based on case and permit status.',
      'Authored UAT scripts, coordinated test cycles with business users, and drove 90%+ post-deployment satisfaction.',
      'Presented Pub/Sub messaging demo during Accenture knowledge-sharing events to mentor peers and promote reusable patterns.'
    ]
  },
  {
    role:'Application Development Associate — Accenture',
    place:'State of Massachusetts – MA Health Connector',
    when:'Hyderabad, India | Feb 2020 – Jul 2022',
    stack:'LWC • Flows (+ Apex actions) • Triggers/Batch • MuleSoft • Copado • Entitlements/Milestones • Omni-Channel',
    bullets:[
      'Designed and implemented 30+ custom Lightning Web Components (LWCs) for dynamic questionnaire screens with branching logic.',
      'Created custom dashboards for case workers to view user-specific data, indicators, and workflow status in real time.',
      'Built screen flows and coded flows (with Apex actions) to support conditional updates, navigation, and dynamic input processing.',
      'Wrote Triggers (before/after insert/update) and Batch Classes to automate case task creation and queue-based ownership logic.',
      'Configured SLAs, entitlements, and milestone criteria to support healthcare service-level commitments and escalation triggers.',
      'Integrated Salesforce with Microsoft D365 via MuleSoft middleware, ensuring secure and seamless real-time data sync.',
      'Designed a custom Voice Call object and integrated with Omni-Channel, AWS-based call handling, and chatbot workflows to auto-transfer calls to available agents.',
      'Managed end-to-end deployments via Copado, committing components per user story, validating metadata, and promoting across SIT, QA, and PROD.',
      'Customized data model with new objects, record types, master-detail and lookup fields, custom page layouts, and validation rules.',
      'Performed large-scale data migrations and sanitization (500,000+ records) using Salesforce Data Loader and external matching logic.',
      'Provided internal team documentation, walkthroughs, and hands-on training for over 15 users across state departments.'
    ]
  }
];

/* ---------- Skills (grouped) ---------- */
const skills = [
  { title:'Salesforce', desc:'Sales Cloud, Service Cloud, Experience Cloud' },
  { title:'Languages/Frameworks', desc:'Apex, LWC, Aura, Visualforce, JavaScript, SOQL/SQL' },
  { title:'Automation', desc:'Flows, Validation Rules, Approvals, Process Builder, Workbench' },
  { title:'DevOps', desc:'Azure DevOps (YAML), Copado, Git/GitHub, SFDX/CLI, Gearset, Change Sets' },
  { title:'Integrations', desc:'REST & SOAP, OAuth, Salesforce Connect, MuleSoft, CTI/Omni-Channel' },
  { title:'Security', desc:'MFA, Profiles, Permission Sets, Sharing Rules, Platform Encryption' },
  { title:'Data & Analytics', desc:'Data Loader, Excel (VLOOKUP), Reports/Dashboards' },
  { title:'Frontend', desc:'HTML, CSS, Responsive Email Templates, Lightning UX' }
];

/* ---------- Certifications (separate tab) ---------- */
const certs = [
  { title:'Salesforce Certified Administrator', desc:'Active' },
  { title:'Salesforce Platform App Builder', desc:'Active' },
  { title:'Salesforce Platform Developer I', desc:'Active' }
];

/* ---------- Projects ---------- */
const projects = [
  { title:'Family Express CRM (Capstone)', img:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    summary:'FastAPI + React microservices with AI article preview & PDF export; PostgreSQL; Docker; AWS Lambda (40% perf gain).'},
  { title:'Skills Showcase', img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    summary:'Hands-on with Apex/LWC, CI/CD (Copado/Azure DevOps), REST/SOAP, Data Loader, Security & Sharing.'}
];

const resumeBullets = [
  'End-to-end Salesforce delivery for public-sector clients (Accenture).',
  'Apex, LWC, Flows; secure data modeling & sharing; Experience Cloud.',
  '90%+ test coverage; UAT planning; SDLC best practices.',
  'Integrations with MuleSoft, REST/SOAP; CTI/Omni-Channel.',
  'CI/CD with Copado & Azure DevOps; Git branching & rollbacks.',
  'Large data migrations with Data Loader & Excel VLOOKUP.'
];

/* ============ Helpers ============ */
const $  = (sel, el=document)=>el.querySelector(sel);
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
function addCards(rowId, items){ const row = document.getElementById(rowId); row.innerHTML = items.map(cardTemplate).join(''); }

function addTimeline(){
  const list = $('#timeline');
  list.innerHTML = timeline.map(t=>{
    const shortBullets = t.bullets.slice(0,3).map(b=>`<li>${b}</li>`).join('');
    const rest        = t.bullets.slice(3).map(b=>`<li>${b}</li>`).join('');
    const more        = rest ? `<details class="more"><summary>View more</summary><ul class="bullets">${rest}</ul></details>` : '';
    return `
     <li class="timeline-item">
       <h3>${t.role}</h3>
       <div class="stack">${t.place} • ${t.when}</div>
       <div class="stack">${t.stack}</div>
       <ul class="bullets">${shortBullets}</ul>
       ${more}
     </li>`;
  }).join('');

  // Toggle summary text View more/Hide
  $$('.more').forEach(d=>{
    d.addEventListener('toggle', ()=>{ d.querySelector('summary').textContent = d.open ? 'Hide' : 'View more'; });
  });
}

function addSkills(){ $('#skillsGrid').innerHTML = skills.map(s=>`
   <div class="skill"><h4>${s.title}</h4><p>${s.desc}</p></div>`).join(''); }

function addProjects(){ $('#projectsGrid').innerHTML = projects.map(p=>`
   <div class="project">
     <div class="banner"><img alt="${p.title}" src="${p.img}"/></div>
     <h4>${p.title}</h4><p>${p.summary}</p>
   </div>`).join(''); }

function addCerts(){ $('#certsGrid').innerHTML = certs.map(c=>`
   <div class="skill"><h4>${c.title}</h4><p>${c.desc}</p></div>`).join(''); }

function addResume(){ $('#resumeBullets').innerHTML = resumeBullets.map(b=>`<li>${b}</li>`).join(''); }

/* ============ Typing Effect & Reveal ============ */
function typeLine(el){
  const text = el.dataset.text || el.textContent; el.textContent = '';
  let i=0; const tick = ()=>{ el.textContent = text.slice(0, i++); if(i <= text.length) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}
const io = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} }); },{threshold:.12});

/* ============ Router (show ONE screen at a time) ============ */
function setActive(linkId){
  $$('#navLinks a').forEach(a=>a.classList.toggle('active', a.dataset.nav===linkId));
}
function showScreen(id){
  const isHome = (id==='home' || !id);
  // Hide/Show the home wrapper
  $('#homeWrapper').classList.toggle('hidden', !isHome);
  // Hide all other screens
  $$('.screen').forEach(s=>s.classList.add('hidden'));
  if(!isHome && document.getElementById(id)){
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'});
  } else {
    window.scrollTo({top:0, behavior:'smooth'});
  }
  setActive(isHome ? 'home' : id);
  history.replaceState(null, '', `#${id||'home'}`);
}

/* ============ Init ============ */
function init(){
  addCards('topRow', topPicks);
  addCards('continueRow', continueWatching);
  addTimeline(); addSkills(); addProjects(); addCerts(); addResume();
  typeLine($('.typing'));
  $$('.reveal').forEach(el=> io.observe(el));
  $('#year').textContent = new Date().getFullYear();

  // Click handling (nav + tiles)
  document.body.addEventListener('click', (e)=>{
    const nav = e.target.closest('[data-nav]');
    if(nav){ showScreen(nav.getAttribute('data-nav')); e.preventDefault(); return; }
    const card = e.target.closest('.card');
    if(card){ const target = card.dataset.id || card.dataset.type; if(target){ showScreen(target); } }
  });

  // Deep link support (hash)
  const initial = (location.hash||'').replace('#','') || 'home';
  showScreen(initial);
}
init();

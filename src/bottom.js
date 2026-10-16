/* ---------- state ---------- */
const S={view:'home',ch:2,tab:'lessons',paper:null,qf:'All',mode:store.get('mode','tap'),pf:{ch:'all',lang:'all'}};
const prog=store.get('prog',{});            // {q2:{q0:true,...}, q3:{...}}
const saveProg=()=>store.set('prog',prog);
const P=n=>(prog['q'+n]=prog['q'+n]||{});
function chColor(n){return `var(${CH[n-1].c})`}
const ready=n=>!!CHD[n];
function chStats(n){const D=CHD[n];if(!D)return{t:0,a:0,ok:0};const p=prog['q'+n]||{};return{t:D.quiz.length,a:Object.keys(p).length,ok:Object.values(p).filter(Boolean).length}}

/* ---------- renderers ---------- */
function steps(st){return `<div class="sol">${st.map(([k,v],i)=>`<div class="step"><span class="k">${i+1}</span><div class="v"><span class="tag">${k}</span> <span class="f">${v}</span></div></div>`).join('')}</div>`}
function solBlock(o){return `${steps(o.steps)}<div class="res">✓ ${o.res}</div>${o.tip?`<div class="tip"><b>Examiner’s tip</b>${T(o.tip,'span')}</div>`:''}`}

function nav(){
 const items=[['home','Home'],['chapters','Chapters'],['papers','Past Papers'],['formulas','Formula Sheet'],['labs','Labs'],['glossary','Glossary'],['mistakes','My Mistakes']];
 $('#nav').innerHTML=items.map(([k,t])=>`<button data-go="${k}" aria-current="${S.view===k||(k==='chapters'&&S.view==='chapter')}">${t}</button>`).join('');
}

function totals(){let t=0,a=0,ok=0;for(let n=1;n<=9;n++){const s=chStats(n);t+=s.t;a+=s.a;ok+=s.ok}return{t,a,ok}}

function chapterGrid(){
 return `<div class="chapters">
  ${CH.map(c=>{const pq=PAPERS.reduce((n,p)=>n+p.qs.filter(q=>q.ch===c.n).length,0);const st=chStats(c.n);const cp=st.t?Math.round(st.a/st.t*100):0;return `<button class="chap" style="--cc:var(${c.c})" data-ch="${c.n}">
   <span class="num">CHAPTER ${c.n} · p. ${c.p}</span><h3>${c.t}</h3>
   <span style="font-family:var(--arabic);direction:rtl;color:var(--muted);font-size:14px">${c.ar}</span>
   ${ready(c.n)?`<span class="bar-p"><i style="width:${cp}%"></i></span>`:''}
   <span class="meta"><span>${c.s.length} lessons · ${ready(c.n)?st.t+' quiz Qs · ':''}${pq} past Qs</span><span class="pill ${ready(c.n)?'ready':'soon'}">${ready(c.n)?(cp?cp+'% done':'Full chapter'):'Coming next'}</span></span></button>`}).join('')}
 </div>`;
}

function home(){
 const {t,a,ok}=totals();const pct=t?Math.round(a/t*100):0;
 return `
 <section class="hero">
  <div>
   <div class="eyebrow">Scientific Secondary · Grade 4 · Distinguished Schools</div>
   <h1>Physics 4, <em>measured</em> one chapter at a time.</h1>
   ${T(L('Lessons, laws, worked examples, quizzes and real past papers — all in English, with an Arabic translation one tap away beside every paragraph.','دروس وقوانين وأمثلة محلولة واختبارات وأوراق امتحانات حقيقية، كلها بالإنكليزية، مع ترجمة عربية بلمسة واحدة بجانب كل فقرة.'),'p','lead')}
  </div>
  <div class="gauge" aria-label="Your progress">
   <div class="eyebrow">Your progress · all quizzes</div>
   <svg viewBox="0 0 200 110"><path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="var(--line)" stroke-width="14" stroke-linecap="round"/>
   <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="var(--accent)" stroke-width="14" stroke-linecap="round" pathLength="100" stroke-dasharray="${pct} 100" ${pct?'':'hidden'}/>
   ${[0,25,50,75,100].map(v=>{const an=Math.PI*(1-v/100);return `<line x1="${100+62*Math.cos(an)}" y1="${100-62*Math.sin(an)}" x2="${100+68*Math.cos(an)}" y2="${100-68*Math.sin(an)}" stroke="var(--muted)"/>`}).join('')}
   <text x="100" y="92" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="26" fill="var(--ink)">${pct}%</text></svg>
   <div class="g-l"><span>${a} / ${t} answered</span><span>${ok} correct</span></div>
  </div>
 </section>
 <div class="quick">
  <button data-go="papers"><b>Past Papers</b><span>${PAPERS.length} real exams · ${PAPERS.reduce((n,p)=>n+p.qs.length,0)} solved questions</span></button>
  <button data-go="formulas"><b>Formula Sheet</b><span>Every law on one page</span></button>
  <button data-go="labs"><b>Labs</b><span>${LABS.length} interactive simulations</span></button>
  <button data-go="glossary"><b>Glossary</b><span>EN ↔ AR with pronunciation</span></button>
 </div>
 <div class="sec-h"><h2>Chapters</h2><span class="eyebrow">Book: Physics 4 · 5th translated ed. 2025</span></div>
 ${chapterGrid()}`;
}
function chaptersView(){return `<div class="sec-h"><h2>Chapters</h2><span class="eyebrow">Tap a chapter to open it</span></div>${chapterGrid()}`}

function chapter(){
 const c=CH[S.ch-1], D=CHD[S.ch];
 const head=`<button class="back" data-go="chapters">← All chapters</button>
 <div class="ch-head" style="--cc:var(${c.c})"><div class="num">CHAPTER ${c.n} · BOOK PAGES ${c.p}</div><h1>${c.t}</h1><div style="font-family:var(--arabic);color:var(--muted);direction:rtl;text-align:left">${c.ar}</div></div>`;
 if(!D){
  const pq=[];PAPERS.forEach(p=>p.qs.forEach(q=>{if(q.ch===c.n)pq.push({p,q})}));
  return head+`<div class="soon-box" style="--cc:var(${c.c})"><b>Lessons in this chapter</b><ul class="list" style="margin-top:8px">${c.s.map(s=>`<li>${s}</li>`).join('')}</ul>
  <p class="lead" style="margin:8px 0 0">Full lessons and quizzes for this chapter are coming next. Its past-paper questions are ready below.</p></div>
  <div class="sec-h"><h2>Past-paper questions · Chapter ${c.n}</h2><span class="eyebrow">${pq.length} solved</span></div>
  ${pq.map(({p,q})=>pqCard(p,q)).join('')||'<div class="empty">No past-paper questions for this chapter yet.</div>'}`;
 }
 const pqn=PAPERS.reduce((n,p)=>n+p.qs.filter(q=>q.ch===c.n).length,0);
 const tabs=[['lessons','Lessons'],['laws','Laws'],['examples','Worked Examples'],['quiz','Quiz'],['exam','Exam-Style'],['book','From the Book'],...(pqn?[['past','Past Papers']]:[]),['summary','Summary']];
 if(!tabs.some(t=>t[0]===S.tab)) S.tab='lessons';
 let body='';
 if(S.tab==='lessons'){
  body=`<div class="box def"><span class="bl">Objectives</span>${D.obj.map(o=>T(o)).join('')}</div>`+
  D.lessons.map(ls=>`<section class="lesson"><h2><span class="sn">${ls.sn}</span>${ls.t}</h2><span class="pg">Book p. ${ls.p}</span>${ls.blocks.map(blk).join('')}</section>`).join('');
 } else if(S.tab==='laws'){
  body=`<div class="laws">${D.laws.map(l=>`<article class="law"><h3>${l.t}</h3><div class="eq">${l.eq}</div><dl>${l.d.map(([a,b])=>`<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl>${T(l.use)}${l.err?`<div class="tip"><b>Common mistake</b>${T(l.err,'span')}</div>`:''}</article>`).join('')}</div>`;
 } else if(S.tab==='examples'){
  body=D.examples.map((e,i)=>`<article class="qcard"><div class="qhead"><span class="qn">Example ${i+1}</span><span class="tag">Book p. ${e.p}</span></div>${T(e.t)}${solBlock(e)}</article>`).join('');
 } else if(S.tab==='quiz'){ body=quiz(D); }
 else if(S.tab==='exam'){
  body=`${T(L('Questions written in the style of distinguished-school exams. Try first, then open the solution.','أسئلة مكتوبة بأسلوب امتحانات مدارس المتميزين. حاول أولًا ثم افتح الحل.'),'p','lead')}`+
  D.exam.map((e,i)=>`<article class="qcard"><div class="qhead"><span class="qn">ES-${i+1}</span><span class="tag">${e.m} marks</span></div>${T(e.q)}<button class="btn" data-reveal>Show solution</button><div class="reveal" hidden>${solBlock(e)}</div></article>`).join('');
 } else if(S.tab==='book'){
  const B=D.book;
  body=(B.mcq&&B.mcq.length?`<div class="sec-h"><h2>Q1 · Choose the correct answer</h2><span class="tag">Book p. ${B.p||''}</span></div>`+
  B.mcq.map((m,i)=>mcqCard({q:L(m.q,m.ar),o:m.o,a:m.a},'fb'+i,`Q1-${i+1}`,'From the Book')).join(''):'')+
  (B.open&&B.open.length?`<div class="sec-h"><h2>${B.openTitle||'Answer the following'}</h2></div>`+
  B.open.map(([q,a])=>`<article class="qcard">${T(q)}<button class="btn" data-reveal>Show answer</button><div class="reveal" hidden>${typeof a==='string'?`<div class="res">✓ ${a}</div>`:T(a)}</div></article>`).join(''):'')+
  (B.probs&&B.probs.length?`<div class="sec-h"><h2>Problems</h2></div>`+
  B.probs.map(p=>`<article class="qcard">${T(p.q)}<button class="btn" data-reveal>Show solution</button><div class="reveal" hidden>${solBlock(p)}</div></article>`).join(''):'');
 } else if(S.tab==='past'){
  const pq=[];PAPERS.forEach(p=>p.qs.forEach(q=>{if(q.ch===c.n)pq.push({p,q})}));
  body=pq.map(({p,q})=>pqCard(p,q)).join('');
 } else if(S.tab==='summary'){
  const fs=FS.find(f=>f.ch===c.n);
  body=`<div class="box def"><span class="bl">Chapter ${c.n} in one page</span>${D.summary.map(s=>T(s)).join('')}</div>
  <div class="fs">${fs?`<div class="fsc" style="--cc:var(${c.c})"><h3>Laws</h3><ul>${fs.items.map(([a,b])=>`<li><span>${a}</span><span class="f">${b}</span></li>`).join('')}</ul></div>`:''}
  ${D.extra?`<div class="fsc" style="--cc:var(${c.c})"><h3>${D.extra.t}</h3><ul>${D.extra.items.map(([a,b])=>`<li><span>${a}</span><span class="f">${b}</span></li>`).join('')}</ul></div>`:''}</div>`;
 }
 return head+`<div class="tabs" role="tablist" style="--cc:var(${c.c})">${tabs.map(([k,t])=>`<button role="tab" data-tab="${k}" aria-selected="${S.tab===k}">${t}</button>`).join('')}</div><div style="--cc:var(${c.c})">${body}</div>`;
}

function blk(b){
 if(b.p) return T(b.p);
 if(b.h) return `<h3 style="font-size:17px;margin:18px 0 8px">${b.h}</h3>`;
 if(b.eq) return `<div class="eq">${b.eq}</div>`;
 if(b.fig) return `<figure>${b.fig}<figcaption>${b.cap}</figcaption></figure>`;
 if(b.table) return `<div class="tblw"><table><thead><tr>${b.table.h.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${b.table.r.map(r=>`<tr>${r.map((c,i)=>`<td class="${/\d/.test(c)&&i>0?'n':''}">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div><figcaption>${b.table.cap}</figcaption>`;
 if(b.box) return `<div class="box ${b.box}"><span class="bl">${b.label}</span>${b.list.map(x=>T(x)).join('')}</div>`;
 if(b.list) return b.list.map(x=>T(x)).join('');
 return '';
}

function mcqCard(q,id,label,kind){
 return `<article class="qcard"><div class="qhead"><span class="qn">${label}</span><span class="tag">${kind}</span></div>${T(q.q)}
 <div class="opts">${q.o.map((o,i)=>`<button class="opt" data-pick="${i}" data-ans="${q.a}"><span class="L">${'abcd'[i]}</span><span class="en">${o}</span></button>`).join('')}</div>
 <div class="fb"></div></article>`;
}
function quiz(D){
 const Q=D.quiz,p=prog['q'+S.ch]||{};
 const kinds=['All',...new Set(Q.map(q=>q.k.split(' ·')[0]))];
 const ans=Object.keys(p).length,ok=Object.values(p).filter(Boolean).length;
 let list=Q.map((q,i)=>({q,i}));
 if(S.qf==='Wrong') list=list.filter(({i})=>p['q'+i]===false); else if(S.qf!=='All') list=list.filter(({q})=>q.k.startsWith(S.qf));
 return `<div class="qtools">${[...kinds,'Wrong'].map(k=>`<button class="chip" data-qf="${k}" aria-pressed="${S.qf===k}">${k==='Wrong'?'Retry wrong':k}</button>`).join('')}
 <span class="score">Score <b>${ok}</b> / ${ans} answered · ${Q.length} total</span></div>
 ${list.length?list.map(({q,i})=>qCard(q,i,S.ch)).join(''):'<div class="empty">Nothing here yet. Answer some questions first.</div>'}
 <div class="btnrow"><button class="btn b" data-reset>Reset my answers for this chapter</button></div>`;
}
function qCard(q,i,n){
 const st=(prog['q'+n]||{})['q'+i];
 const cls=st===true?'ok':st===false?'no':'';
 let inner='';
 if(q.ty==='mcq') inner=`<div class="opts">${q.o.map((o,j)=>`<button class="opt ${st!==undefined&&j===q.a?'right':''}" data-qi="${i}" data-pick="${j}" ${st!==undefined?'disabled':''}><span class="L">${'abcd'[j]}</span><span class="en">${o}</span></button>`).join('')}</div>`;
 if(q.ty==='tf') inner=`<div class="btnrow"><button class="btn" data-qi="${i}" data-tf="1" ${st!==undefined?'disabled':''}>True</button><button class="btn" data-qi="${i}" data-tf="0" ${st!==undefined?'disabled':''}>False</button></div>`;
 if(q.ty==='open') inner=st===undefined?`<button class="btn" data-open="${i}">Show answer</button>`:'';
 return `<article class="qcard ${cls}" id="Q${n}_${i}"><div class="qhead"><span class="qn">Q${i+1}</span><span class="tag c">${q.k}</span></div>${T(q.q)}${inner}
 <div class="fbk">${st!==undefined?`<div class="verdict ${st?'ok':'no'}">${st?'Correct':'Not quite'}</div>${T(q.x)}`:''}</div></article>`;
}

function pqCard(p,q,mock){
 return `<article class="qcard" style="--cc:${chColor(q.ch)}"><div class="tagline"><span class="tag c">Ch ${q.ch}</span><span class="tag">${p.srcAr}</span><span class="tag">${p.yr}</span><span class="tag">${q.k}</span><span class="tag">${q.m} marks</span>${p.lang==='AR'?'<span class="tag">original in Arabic</span>':''}</div>
 ${T(q.q)}<button class="btn" data-reveal ${mock?'hidden':''}>Show solution</button><div class="reveal" hidden>${solBlock(q)}</div></article>`;
}

function papers(){
 if(S.paper){
  const p=PAPERS.find(x=>x.id===S.paper);
  return `<button class="back" data-paper="">← All papers</button>
  <div class="ptop"><div class="eyebrow">Paper ${p.id} · ${p.lang==='EN'?'English paper':'Arabic paper, rewritten in book terms'}</div><h2>${p.src}</h2>
  <div style="font-family:var(--arabic);direction:rtl;text-align:left;color:var(--muted)">${p.srcAr}</div>
  <div class="tagline" style="margin-top:10px"><span class="tag">${p.yr}</span><span class="tag">${p.ex}</span><span class="tag">Source: ${p.where}</span></div>
  <div class="btnrow"><button class="btn pri" data-mock="${p.id}">${S.mock?'Finish & show all solutions':'Start mock exam (2 h)'}</button>${S.mock?`<span class="timer" id="timer">2:00:00</span>`:''}</div></div>
  ${p.qs.map(q=>pqCard(p,q,S.mock)).join('')}`;
 }
 const f=S.pf;
 const list=PAPERS.filter(p=>(f.lang==='all'||p.lang===f.lang));
 return `<div class="sec-h"><h2>Past Papers</h2><span class="eyebrow">Read from photos of the original papers</span></div>
 ${T(L('Real 4th-scientific physics exams. Every school name, year and number here was checked against the photo of the original paper. Papers that do not name a school are labelled as they appear.','امتحانات فيزياء حقيقية للرابع العلمي. كل اسم مدرسة وسنة ورقم هنا تم التحقق منه من صورة الورقة الأصلية. الأوراق التي لا تذكر اسم مدرسة كُتبت كما وردت.'),'p','lead')}
 <div class="qtools"><label>Chapter <select class="sel" id="pfch"><option value="all">All</option>${CH.map(c=>`<option value="${c.n}" ${f.ch==c.n?'selected':''}>${c.n}. ${c.t}</option>`).join('')}</select></label>
 <label>Language <select class="sel" id="pflang"><option value="all">All</option><option value="EN" ${f.lang==='EN'?'selected':''}>English (distinguished)</option><option value="AR" ${f.lang==='AR'?'selected':''}>Arabic schools</option></select></label></div>
 ${f.ch!=='all'?(list.flatMap(p=>p.qs.filter(q=>q.ch==+f.ch).map(q=>pqCard(p,q))).join('')||'<div class="empty">No questions for this chapter in the selected papers.</div>'):
 `<div class="papers">${list.map(p=>`<button class="paper" data-paper="${p.id}"><span class="code">${p.id}</span><span style="min-width:0"><h3>${p.src}</h3><span class="sub">${p.yr} · ${p.ex} · ${p.qs.length} solved</span></span><span class="lang tag">${p.lang}</span></button>`).join('')}</div>`}`;
}

function formulas(){
 return `<div class="sec-h"><h2>Formula Sheet</h2><span class="eyebrow">All nine chapters</span></div>
 <div class="fs">${FS.map(g=>{const c=CH[g.ch-1];return `<div class="fsc" style="--cc:var(${c.c})"><h3>${c.n}. ${c.t}</h3><ul>${g.items.map(([a,b])=>`<li><span>${a}</span><span class="f">${b}</span></li>`).join('')}</ul></div>`}).join('')}</div>
 <div class="box rem" style="margin-top:16px"><span class="bl">Constants used in the book</span>${T(L('c water = 4200 · c ice = 2093 · c steam = 2010 J/kg·°C · Lf ice = 335 kJ/kg · Lv = 2260 kJ/kg · h = 6.63 × 10⁻³⁴ J·s · c = 3 × 10⁸ m/s · k = 9 × 10⁹ N·m²/C²','ثوابت الكتاب: الحرارة النوعية للماء 4200 وللجليد 2093 وللبخار 2010 J/kg·°C، الحرارة الكامنة للانصهار 335 kJ/kg وللتبخر 2260 kJ/kg، ثابت بلانك 6.63 × 10⁻³⁴ J·s، سرعة الضوء 3 × 10⁸ m/s، ثابت كولوم 9 × 10⁹.'))}</div>`;
}

/* ---------- labs ---------- */
const LABS=[];
function labs(){
 return `<div class="sec-h"><h2>Labs</h2><span class="eyebrow">${LABS.length} simulations</span></div>`+
 LABS.map(l=>`<section class="lab" style="--cc:var(${CH[l.ch-1].c})"><div class="tagline"><span class="tag c">Chapter ${l.ch}</span></div><h3>${l.t}</h3>${T(l.d)}${l.html}</section>`).join('');
}
function sci(x){if(!isFinite(x))return '—';if(x===0)return '0';const e=Math.floor(Math.log10(Math.abs(x)));const m=x/10**e;return (Math.abs(e)<3)?(+x.toPrecision(4)).toString():`${(+m.toFixed(3))} × 10${String(e).replace('-','⁻').replace(/\d/g,d=>'⁰¹²³⁴⁵⁶⁷⁸⁹'[d])}`}
function initLabs(){LABS.forEach(l=>{try{l.init&&l.init()}catch(e){}})}

LABS.push({ch:2,t:'Hooke’s spring',d:L('Add weight and watch the spring. Up to 0.45 N the spring obeys Hooke’s law (k = 33.3 N/m, as in Table 1). Beyond that the elasticity limit is passed.','زِد الثقل وراقب النابض. حتى 0.45 N يخضع النابض لقانون هوك (k = 33.3 N/m كما في الجدول 1). بعد ذلك يتجاوز حد المرونة.'),
 html:`<div class="lab-grid"><svg id="springSvg" viewBox="0 0 200 300" style="width:100%;max-width:200px;background:var(--paper);border-radius:8px"></svg>
  <div><label for="fr" class="eyebrow">Force F (N)</label><input type="range" id="fr" min="0" max="0.6" step="0.05" value="0.2">
   <div class="readout"><div><span>F</span><b id="rF">0.20 N</b></div><div><span>ΔL</span><b id="rL">0.60 cm</b></div><div><span>k</span><b>33.3 N/m</b></div></div>
   <svg id="graph" viewBox="0 0 320 180" style="width:100%;margin-top:10px;background:var(--paper);border-radius:8px"></svg><div id="hk"></div></div></div>`,
 init(){const frEl=$('#fr');const k=33.33,lim=0.45;const dlf=F=>F<=lim?F/k:lim/k+(F-lim)/k*3.2;
  const draw=()=>{const F=+frEl.value,dl=dlf(F);
  $('#rF').textContent=F.toFixed(2)+' N';$('#rL').textContent=(dl*100).toFixed(2)+' cm';
  const len=60+dl*100*55;let p='M100 20 v10';for(let i=0;i<12;i++){p+=` L${100+(i%2?-16:16)} ${30+(i+.5)*len/12}`}p+=` L100 ${30+len}`;
  const w=18+F*40;
  $('#springSvg').innerHTML=`<rect x="40" y="10" width="120" height="10" fill="var(--ink)"/><path d="${p}" fill="none" stroke="${F>lim?'var(--bad)':'var(--c2)'}" stroke-width="3"/><rect x="${100-w/2}" y="${32+len}" width="${w}" height="${w*.7}" rx="3" fill="var(--ink)"/>`;
  const X=v=>30+v/2.4*270, Y=v=>160-v/0.6*140;
  let pts='';for(let f=0;f<=F+1e-9;f+=0.05){pts+=`${X(dlf(f)*100)},${Y(f)} `}
  $('#graph').innerHTML=`<g font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--muted)"><path d="M30 160 H310 M30 160 V12" stroke="var(--muted)" fill="none"/><text x="310" y="174" text-anchor="end">ΔL (cm)</text><text x="34" y="14">F (N)</text>${[0,0.2,0.4,0.6].map(v=>`<text x="26" y="${Y(v)+3}" text-anchor="end">${v}</text>`).join('')}${[0,1,2].map(v=>`<text x="${X(v)}" y="172" text-anchor="middle">${v}</text>`).join('')}<polyline points="${pts}" fill="none" stroke="var(--c2)" stroke-width="2.5"/><circle cx="${X(dl*100)}" cy="${Y(F)}" r="4.5" fill="${F>lim?'var(--bad)':'var(--accent)'}"/><line x1="30" x2="310" y1="${Y(lim)}" y2="${Y(lim)}" stroke="var(--amber)" stroke-dasharray="2 3"/><text x="306" y="${Y(lim)-4}" text-anchor="end" fill="var(--amber)">elasticity limit</text></g>`;
  $('#hk').innerHTML=F>lim?`<div class="alert bad">Elasticity limit passed — plastic (permanent) deformation. The spring will not return to its original length.</div>`:`<div class="alert ok">Within the elasticity limit — ΔL is directly proportional to F.</div>`;};
  frEl.oninput=draw;draw();}});
LABS.push({ch:2,t:'Young modulus calculator',d:L('Enter what you know. The calculator converts units for you and shows the steps.','أدخل ما تعرفه، وستحوّل الحاسبة الوحدات وتعرض الخطوات.'),
 html:`<div class="calc">
   <label>Force F (N)<input id="cF" type="number" value="500" step="any"></label>
   <label>Length L₀ (m)<input id="cL" type="number" value="4" step="any"></label>
   <label>Area<input id="cA" type="number" value="0.05" step="any"></label>
   <label>Area unit<select id="cAu"><option value="1e-4">cm²</option><option value="1e-6">mm²</option><option value="1">m²</option></select></label>
   <label>Material<select id="cM"><option value="200e9">Steel 200×10⁹</option><option value="70e9">Aluminium 70×10⁹</option><option value="120e9">Copper 120×10⁹</option><option value="16e9">Lead 16×10⁹</option><option value="79e9">Gold 79×10⁹</option><option value="360e9">Tungsten 360×10⁹</option><option value="1200e9">Diamond 1200×10⁹</option><option value="65e9">Glass 65×10⁹</option><option value="100e9">Bronze 1×10¹¹</option></select></label>
  </div><div id="cOut" style="margin-top:12px"></div>`,
 init(){const calc=()=>{const F=+$('#cF').value,L0=+$('#cL').value,A=+$('#cA').value*+$('#cAu').value,Y=+$('#cM').value;const dl=F*L0/(Y*A);
  $('#cOut').innerHTML=steps([['A',`${$('#cA').value} ${$('#cAu').selectedOptions[0].text} = ${sci(A)} m²`],['Law',`ΔL = ${fr('F · L₀','Y · A')}`],['Sub',`${fr(`${F} × ${L0}`,`${sci(Y)} × ${sci(A)}`)}`],['Stress',`F/A = ${sci(F/A)} N/m²`]])+`<div class="res">✓ ΔL = ${sci(dl)} m = ${sci(dl*1000)} mm</div>`;};
  ['cF','cL','cA','cAu','cM'].forEach(i=>$('#'+i).oninput=calc);calc();}});
(window.XL||[]).forEach(l=>LABS.push(l));

function glossary(){
 return `<div class="sec-h"><h2>Glossary</h2><span class="eyebrow">${GL.length} terms · tap ▶ to hear</span></div>
 <input class="gsearch" id="gq" placeholder="Search in English or Arabic…" aria-label="Search glossary" value="${S.gq||''}">
 <div class="gl" id="gl">${glItems()}</div>`;
}
function glItems(){const q=(S.gq||'').trim().toLowerCase();return GL.filter(([e,a])=>!q||e.toLowerCase().includes(q)||a.includes(q)).sort((x,y)=>x[2]-y[2]).map(([e,a,c])=>`<div class="gi"><b>${e}</b><span class="a">${a}</span><span class="c">Chapter ${c}</span><button class="say" data-say="${e}" aria-label="Pronounce ${e}"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button></div>`).join('')||'<div class="empty">No term matches.</div>'}

function mistakes(){
 const w=[];for(let n=1;n<=9;n++){const D=CHD[n];if(!D)continue;const p=prog['q'+n]||{};D.quiz.forEach((q,i)=>{if(p['q'+i]===false)w.push({n,q,i})})}
 return `<div class="sec-h"><h2>My Mistakes</h2><span class="eyebrow">${w.length} to review</span></div>
 ${T(L('Every quiz question you get wrong is collected here. Review the explanation, then retry it from the chapter quiz.','كل سؤال تخطئ فيه في الاختبار يُجمع هنا. راجع الشرح ثم أعد المحاولة من اختبار الفصل.'),'p','lead')}
 ${w.length?w.map(({n,q,i})=>`<article class="qcard no" style="--cc:${chColor(n)}"><div class="qhead"><span class="tag c">Chapter ${n}</span><span class="qn">Q${i+1}</span><span class="tag">${q.k}</span></div>${T(q.q)}<div class="verdict ok">Correct answer</div>${q.o?`<p class="f">${q.o[q.a]}</p>`:q.ty==='tf'?`<p class="f">${q.a?'True':'False'}</p>`:''}${T(q.x)}</article>`).join(''):'<div class="empty">No mistakes saved. Take a chapter quiz to start.</div>'}`;
}

function credits(){
 $('#credits').innerHTML=`
 <div class="cr"><span class="av">م</span><div><span class="role">Designed by · Student</span><b>Mohammed Ali Abdulwahab</b><span class="arn">الطالب: محمد علي عبد الوهاب</span></div></div>
 <p class="foot-note">Content follows <i>Physics 4 — Scientific Secondary</i>, Ministry of Education, Republic of Iraq, 5th translated edition (2025). Past papers are reproduced for study from photos shared publicly by students and teachers; sources are listed on each paper.</p>`;
}

/* ---------- router ---------- */
let timerId=null;
function render(){
 document.documentElement.classList.remove('mode-en','mode-tap','mode-both');document.documentElement.classList.add('mode-'+S.mode);
 document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.mode===S.mode));
 const v={home,chapters:chaptersView,chapter,papers,formulas,labs,glossary,mistakes}[S.view]||home;
 const app=$('#app');app.innerHTML=v();app.classList.remove('view');void app.offsetWidth;app.classList.add('view');
 nav(); if(S.view==='labs') initLabs();
 if(S.view==='glossary'){const g=$('#gq');g.oninput=()=>{S.gq=g.value;$('#gl').innerHTML=glItems()}}
 if(S.view==='papers'&&!S.paper){const a=$('#pfch'),b=$('#pflang');a.onchange=()=>{S.pf.ch=a.value;render()};b.onchange=()=>{S.pf.lang=b.value;render()}}
 clearInterval(timerId);
 if(S.mock&&$('#timer')){let left=S.mockLeft;const tick=()=>{const h=Math.floor(left/3600),m=Math.floor(left%3600/60),s=left%60;$('#timer').textContent=`${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;S.mockLeft=left;if(left--<=0){clearInterval(timerId);finishMock()}};tick();timerId=setInterval(tick,1000)}
}
function go(v){
 const m=/^ch([1-9])$/.exec(v); if(m){S.view='chapter';S.ch=+m[1];S.tab='lessons'} else S.view=v;
 if(S.view!=='papers'){S.paper=null;S.mock=false}
 render();window.scrollTo({top:0});try{history.replaceState(null,'',v==='home'?location.pathname:'#'+v)}catch(e){}}
function finishMock(){S.mock=false;render();document.querySelectorAll('.reveal').forEach(r=>r.hidden=false);document.querySelectorAll('[data-reveal]').forEach(b=>b.hidden=true)}

document.addEventListener('click',e=>{
 const t=e.target.closest('button');if(!t)return;
 if(t.classList.contains('trb')){t.parentElement.classList.toggle('open');t.textContent=t.parentElement.classList.contains('open')?'EN':'AR';return}
 if(t.dataset.go){go(t.dataset.go);return}
 if(t.dataset.mode){S.mode=t.dataset.mode;store.set('mode',S.mode);render();return}
 if(t.dataset.ch){go('ch'+t.dataset.ch);return}
 if(t.dataset.tab){S.tab=t.dataset.tab;S.qf='All';render();return}
 if(t.dataset.qf){S.qf=t.dataset.qf;render();return}
 if(t.hasAttribute('data-reveal')){const r=t.nextElementSibling;r.hidden=!r.hidden;t.textContent=r.hidden?t.textContent.replace('Hide','Show'):t.textContent.replace('Show','Hide');return}
 if(t.dataset.paper!==undefined&&!t.dataset.mock){S.paper=t.dataset.paper||null;S.mock=false;render();window.scrollTo({top:0});return}
 if(t.dataset.mock){if(S.mock){finishMock()}else{S.mock=true;S.mockLeft=7200;render()}return}
 if(t.hasAttribute('data-reset')){prog['q'+S.ch]={};saveProg();render();return}
 if(t.dataset.say){try{const u=new SpeechSynthesisUtterance(t.dataset.say);u.lang='en-US';u.rate=.9;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(err){}return}
 const n=S.ch, Q=CHD[n]?CHD[n].quiz:null;
 if(t.dataset.qi!==undefined&&Q){const i=+t.dataset.qi,q=Q[i];let ok;if(t.dataset.pick!==undefined)ok=+t.dataset.pick===q.a;else ok=(t.dataset.tf==='1')===q.a;
   P(n)['q'+i]=ok;saveProg();
   $('#Q'+n+'_'+i).outerHTML=qCard(q,i,n);
   if(q.ty==='mcq'&&!ok){$('#Q'+n+'_'+i).querySelectorAll('.opt')[+t.dataset.pick].classList.add('wrong')}
   updScore();return}
 if(t.dataset.open!==undefined&&Q){const i=+t.dataset.open,q=Q[i];const c=$('#Q'+n+'_'+i);t.remove();
   c.querySelector('.fbk').innerHTML=`${T(q.x)}<div class="btnrow"><button class="btn g" data-self="${i}" data-v="1">I got it right</button><button class="btn b" data-self="${i}" data-v="0">I missed it</button></div>`;return}
 if(t.dataset.self!==undefined&&Q){const i=+t.dataset.self;P(n)['q'+i]=t.dataset.v==='1';saveProg();$('#Q'+n+'_'+i).outerHTML=qCard(Q[i],i,n);updScore();return}
 if(t.dataset.pick!==undefined&&t.dataset.ans!==undefined){const card=t.closest('.qcard');const a=+t.dataset.ans,p=+t.dataset.pick;card.querySelectorAll('.opt').forEach((o,j)=>{o.disabled=true;if(j===a)o.classList.add('right');else if(j===p)o.classList.add('wrong')});card.querySelector('.fb').innerHTML=`<div class="verdict ${p===a?'ok':'no'}">${p===a?'Correct':'Answer: '+'abcd'[a]}</div>`;return}
});
function updScore(){const s=$('.score');if(!s)return;const p=prog['q'+S.ch]||{};s.innerHTML=`Score <b>${Object.values(p).filter(Boolean).length}</b> / ${Object.keys(p).length} answered · ${CHD[S.ch].quiz.length} total`}

/* theme */
(function(){const saved=store.get('theme',null);if(saved)document.documentElement.setAttribute('data-theme',saved);
 $('#themeBtn').onclick=()=>{const cur=document.documentElement.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');const nx=cur==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',nx);store.set('theme',nx)}})();

/* migrate old progress key */
if(prog.q2&&Object.keys(prog.q2).some(k=>!/^q\d+$/.test(k))){prog.q2={};saveProg()}
credits();
const h0=(location.hash||'').slice(1);
if(['papers','formulas','labs','glossary','mistakes','chapters'].includes(h0)||/^ch[1-9]$/.test(h0)) go(h0); else render();
</script>

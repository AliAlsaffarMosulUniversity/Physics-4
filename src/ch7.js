/* ---------- Chapter 7: Mirrors ---------- */
/* shared ray-diagram drawer for mirrors (kind 'mirror') and lenses (kind 'lens'); f signed (cm), u > 0 (cm) */
window.RAY=function(kind,f,u){
 const W=600,H=240,cx=kind==='mirror'?390:300,ay=120;
 const inf=Math.abs(u-f)<1e-9;const v=inf?Infinity:1/(1/f-1/u);const M=inf?Infinity:-v/u;
 const vf=isFinite(v)?v:0;
 const leftNeed=Math.max(u, kind==='mirror'?Math.max(vf>0?vf:0,f>0?2*f:0):Math.max(vf<0?-vf:0,Math.abs(f)))*1.08;
 const rightNeed=(kind==='mirror'?Math.max(vf<0?-vf:0,f<0?-2*f:0):Math.max(vf>0?vf:0,Math.abs(f)))*1.08;
 const s=Math.min((cx-20)/leftNeed, rightNeed>0?(W-cx-20)/rightNeed:Infinity);
 const h=Math.min(46,95/Math.max(1,isFinite(M)?Math.abs(M):1));
 const ox=cx-u*s, top=ay-h;
 let ix=null, itop=null;
 if(isFinite(v)){ ix = kind==='mirror' ? cx - v*s : cx + v*s; itop = ay - M*h; }
 const F1=kind==='mirror'?cx-f*s:cx-f*s, F2=kind==='lens'?cx+f*s:null;
 const C=kind==='mirror'?cx-2*f*s:null;
 const mk=(x,l)=>x>=0&&x<=W?`<line x1="${x}" y1="${ay-4}" x2="${x}" y2="${ay+4}" stroke="var(--ink)"/><text x="${x}" y="${ay+18}" text-anchor="middle">${l}</text>`:'';
 const ext=(px,py,dx,dy,len)=>{const n=Math.hypot(dx,dy)||1;return [px+dx/n*len,py+dy/n*len]};
 let rays='';
 const pts=[[cx,top],[cx,ay]];
 if(itop!==null){ pts.forEach(([px,py])=>{ rays+=`<line x1="${ox}" y1="${top}" x2="${px}" y2="${py}" stroke="var(--amber)" stroke-width="2"/>`;
   const real=(kind==='mirror'&&v>0)||(kind==='lens'&&v>0);
   const dx=real?ix-px:px-ix, dy=real?itop-py:py-itop;
   const [ex,ey]=ext(px,py,dx,dy,real?Math.hypot(ix-px,itop-py)+80:260);
   rays+=`<line x1="${px}" y1="${py}" x2="${ex}" y2="${ey}" stroke="var(--amber)" stroke-width="2"/>`;
   if(!real) rays+=`<line x1="${px}" y1="${py}" x2="${ix}" y2="${itop}" stroke="var(--amber)" stroke-width="1.4" stroke-dasharray="4 4"/>`; });
 } else { rays+=`<line x1="${ox}" y1="${top}" x2="${cx}" y2="${top}" stroke="var(--amber)" stroke-width="2"/>`; }
 const dev=kind==='mirror'
  ? (f>0?`<path d="M${cx-14} 20 Q${cx+10} 120 ${cx-14} 220" stroke="var(--c7)" stroke-width="4" fill="none"/>`:`<path d="M${cx+10} 20 Q${cx-14} 120 ${cx+10} 220" stroke="var(--c7)" stroke-width="4" fill="none"/>`)
  : (f>0?`<path d="M${cx} 20 Q${cx+18} 120 ${cx} 220 Q${cx-18} 120 ${cx} 20" fill="var(--c8)" opacity=".35" stroke="var(--c8)"/>`:`<path d="M${cx-10} 20 L${cx+10} 20 Q${cx} 120 ${cx+10} 220 L${cx-10} 220 Q${cx} 120 ${cx-10} 20" fill="var(--c8)" opacity=".35" stroke="var(--c8)"/>`);
 const arrow=(x,y1,y2,col,dash)=>`<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${col}" stroke-width="3" ${dash?'stroke-dasharray="5 4"':''}/><path d="M${x-6} ${y2+(y2<y1?8:-8)} L${x} ${y2} L${x+6} ${y2+(y2<y1?8:-8)}" stroke="${col}" stroke-width="3" fill="none"/>`;
 const svg=`<svg viewBox="0 0 ${W} ${H}" style="width:100%;background:var(--paper);border-radius:8px" role="img" aria-label="Ray diagram"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
 <line x1="0" y1="${ay}" x2="${W}" y2="${ay}" stroke="var(--muted)"/>${dev}${mk(F1,kind==='mirror'?'F':'F')}${F2!==null?mk(F2,'F′'):''}${C!==null&&C>0&&C<W?mk(C,'C'):''}
 ${rays}${arrow(ox,ay,top,'var(--ink)')}${itop!==null&&ix>-50&&ix<W+50?arrow(ix,ay,itop,(v>0)?'var(--c7)':'var(--c6)',v<0):''}
 <text x="${ox}" y="${top-6}" text-anchor="middle" fill="var(--ink)">object</text>${itop!==null&&ix>0&&ix<W?`<text x="${ix}" y="${Math.min(itop,ay)-6}" text-anchor="middle">image</text>`:''}</g></svg>`;
 let desc;
 if(!isFinite(v)) desc='No image: the rays leave parallel (object at the focus).';
 else desc=`${v>0?'Real':'Virtual'}, ${M<0?'inverted':'erect'}, ${Math.abs(Math.abs(M)-1)<1e-6?'same size':Math.abs(M)>1?'magnified':'diminished'} (M = ${(+M.toFixed(3))})`;
 return {svg,v,M,desc};
};
const MIRROR_TYPES_SVG=`<svg viewBox="0 0 520 170" role="img" aria-label="Concave and convex mirror terms"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<line x1="20" y1="85" x2="250" y2="85" stroke="var(--muted)"/><path d="M226 15 Q250 85 226 155" stroke="var(--c7)" stroke-width="4" fill="none"/>
<circle cx="70" cy="85" r="3" fill="var(--ink)"/><text x="70" y="104" text-anchor="middle">C</text><circle cx="150" cy="85" r="3" fill="var(--ink)"/><text x="150" y="104" text-anchor="middle">F</text><circle cx="243" cy="85" r="3" fill="var(--ink)"/><text x="243" y="104" text-anchor="middle">V</text>
<path d="M70 70 H150" stroke="var(--amber)"/><text x="110" y="64" text-anchor="middle" fill="var(--amber)">f</text><text x="130" y="160" text-anchor="middle" fill="var(--ink)">concave (converging)</text>
<line x1="280" y1="85" x2="510" y2="85" stroke="var(--muted)"/><path d="M330 15 Q306 85 330 155" stroke="var(--c7)" stroke-width="4" fill="none"/>
<circle cx="313" cy="85" r="3" fill="var(--ink)"/><text x="313" y="104" text-anchor="middle">V</text><circle cx="400" cy="85" r="3" fill="var(--ink)"/><text x="400" y="104" text-anchor="middle">F (virtual)</text><circle cx="480" cy="85" r="3" fill="var(--ink)"/><text x="480" y="104" text-anchor="middle">C</text>
<text x="400" y="160" text-anchor="middle" fill="var(--ink)">convex (diverging)</text></g></svg>`;
CHD[7]={
 obj:[L('Describe the image in a plane mirror and the number of images in angled mirrors.','وصف الصورة في المرآة المستوية وعدد الصور في المرآتين المتقاطعتين.'),
      L('Define the terms of spherical mirrors and draw ray diagrams.','تعريف مصطلحات المرايا الكروية ورسم مخططات الأشعة.'),
      L('State the image characteristics in concave and convex mirrors for each object position.','ذكر صفات الصورة في المرآة المقعرة والمحدبة لكل موضع للجسم.'),
      L('Apply the mirror equation and the magnification law with correct signs.','تطبيق القانون العام للمرايا وقانون التكبير مع الإشارات الصحيحة.'),
      L('Explain spherical aberration and the applications of mirrors.','تفسير الزيغ الكروي وتطبيقات المرايا.')],
 lessons:[
  {sn:'7.1',t:'Plane Mirror',p:'98',blocks:[
   {p:L('A plane mirror is a flat smooth surface that reflects light regularly. Everyday mirrors are polished glass with one face coated with silver or aluminium compounds. Its quality depends on the glass or metal and the degree of polishing.','المرآة المستوية سطح مستوٍ أملس يعكس الضوء انعكاسًا منتظمًا. والمرايا المستعملة زجاج مصقول طُلي أحد وجهيه بمركبات الفضة أو الألمنيوم. وتعتمد كفاءتها على نوع الزجاج أو الفلز ودرجة الصقل.')}
  ]},
  {sn:'7.2',t:'Images in a Plane Mirror',p:'98–99',blocks:[
   {box:'def',label:'The image in a plane mirror is',list:[L('Virtual (cannot be projected on a screen), erect, the same size as the object, at the same distance behind the mirror as the object is in front, and laterally reversed (right ↔ left).','وهمية (لا يمكن استلامها على حاجز)، معتدلة، بحجم الجسم نفسه، وبعدها خلف المرآة يساوي بعد الجسم أمامها، ومقلوبة جانبيًا (اليمين ↔ اليسار).')]},
   {p:L('That is why AMBULANCE is written reversed on the front of ambulances: the driver ahead reads it correctly in his mirror.','لهذا تُكتب كلمة AMBULANCE معكوسة على مقدمة سيارات الإسعاف، فيقرؤها السائق الذي أمامها صحيحة في مرآته.')}
  ]},
  {sn:'7.3',t:'Multiple Images in Angled Mirrors',p:'100–101',blocks:[
   {eq:`n = ${fr('360°','θ')} − 1`},
   {p:L('θ is the angle between the two mirrors. Two parallel facing mirrors (θ = 0) give an infinite number of images, as at the barber.','θ هي الزاوية بين المرآتين. والمرآتان المتوازيتان المتقابلتان (θ = 0) تعطيان عددًا لا نهائيًا من الصور، كما عند الحلاق.')}
  ]},
  {sn:'7.4',t:'Spherical Mirrors',p:'101–103',blocks:[
   {p:L('A spherical mirror is part of a spherical surface. <b>Concave:</b> the inner face reflects. <b>Convex:</b> the outer face reflects.','المرآة الكروية جزء من سطح كرة. <b>المقعرة:</b> سطحها العاكس هو الداخلي. <b>المحدبة:</b> سطحها العاكس هو الخارجي.')},
   {fig:MIRROR_TYPES_SVG,cap:'Figures (7.9) and (7.10)'},
   {table:{h:['Term','Meaning'],r:[['Centre of curvature C','centre of the sphere the mirror was cut from'],['Pole V','centre point of the mirror’s surface'],['Principal axis','line through C and the pole'],['Radius of curvature R','radius of that sphere'],['Focus F','point where reflected rays (or extensions) of rays parallel to the axis meet'],['Focal length f','distance from pole to focus; f = ½ R']],cap:'Book p. 102'}},
   {box:'rem',label:'Rays for drawing images',list:[
     L('1) A ray parallel to the axis reflects through F (concave) or as if from the virtual F (convex).','1) الشعاع الموازي للمحور ينعكس مارًا بالبؤرة (المقعرة) أو كأنه صادر من البؤرة الوهمية (المحدبة).'),
     L('2) A ray through F (or toward it) reflects parallel to the axis.','2) الشعاع المار بالبؤرة (أو المتجه نحوها) ينعكس موازيًا للمحور.'),
     L('3) A ray through C (or toward it) reflects back on itself.','3) الشعاع المار بمركز التكور (أو المتجه نحوه) يرتد على نفسه.')]},
   {p:L('A <b>real image</b> is formed by the reflected rays themselves and can be caught on a screen. A <b>virtual image</b> is formed by their extensions.','<b>الصورة الحقيقية</b> تتكون من التقاء الأشعة المنعكسة نفسها ويمكن استلامها على حاجز. و<b>الصورة الوهمية</b> تتكون من التقاء امتداداتها.')}
  ]},
  {sn:'7.5',t:'Image in a Concave Mirror',p:'104–105',blocks:[
   {table:{h:['Object position','Image position','Characteristics'],r:[['beyond C (u > 2f)','between F and C','real, inverted, diminished'],['at C (u = 2f)','at C','real, inverted, same size'],['between F and C','beyond C','real, inverted, magnified'],['at F (u = f)','no image','reflected rays are parallel'],['between F and pole (u < f)','behind the mirror','virtual, erect, magnified'],['at infinity','at F','real, inverted, a point']],cap:'Figures (7.15)–(7.19)'}}
  ]},
  {sn:'7.6',t:'Image in a Convex Mirror',p:'105–106',blocks:[
   {box:'def',label:'Convex (diverging) mirror',list:[L('Whatever the object distance, the image is <b>virtual, erect and diminished</b>, behind the mirror.','مهما كان بعد الجسم، تكون الصورة <b>وهمية، معتدلة، مصغرة</b>، خلف المرآة.')]},
   {h:'Spherical aberration'},
   {p:L('<b>Spherical aberration:</b> the failure of the rays reflected from a spherical mirror to meet at one point. Rays far from the pole cross nearer the mirror than F. It is reduced by making the mirror parabolic, or by using spherical mirrors with a small face (light reflectors, reflecting telescopes).','<b>الزيغ الكروي:</b> عدم تجمع الأشعة المنعكسة عن سطح المرآة الكروية في نقطة واحدة؛ فالأشعة البعيدة عن القطب تلتقي في نقطة أقرب إلى المرآة من البؤرة. ويُعالج بجعل المرآة على شكل قطع مكافئ، أو باستعمال مرايا كروية صغيرة الفتحة (العاكسات، المقاريب العاكسة).')}
  ]},
  {sn:'7.7',t:'General Equation of Spherical Mirrors',p:'106–107',blocks:[
   {eq:`${fr('1','f')} = ${fr('1','u')} + ${fr('1','v')}`},
   {box:'rem',label:'Signs',list:[
     L('u is positive for a real object in front of the mirror.','u موجبة للجسم الحقيقي أمام المرآة.'),
     L('v is positive for a real image and negative for a virtual image.','v موجبة للصورة الحقيقية وسالبة للوهمية.'),
     L('f is positive for a concave mirror and negative for a convex mirror.','f موجبة للمرآة المقعرة وسالبة للمحدبة.')]}
  ]},
  {sn:'7.8',t:'Magnification Law',p:'107–110',blocks:[
   {eq:`M = ${fr('h′','h')} = − ${fr('v','u')}`},
   {list:[L('M negative: real, inverted image. M positive: virtual, erect image. |M| > 1 magnified; |M| < 1 diminished; |M| = 1 same size.','M سالب: صورة حقيقية مقلوبة. M موجب: صورة وهمية معتدلة. |M| > 1 مكبرة، |M| < 1 مصغرة، |M| = 1 بالحجم نفسه.')]}
  ]},
  {sn:'7.9',t:'Applications of Mirrors',p:'111–112',blocks:[
   {table:{h:['Mirror','Applications'],r:[['Plane','home mirrors; angled mirrors in shops; the driver’s front (rear-view) mirror'],['Concave','dentist’s mirror (magnified teeth); car headlights (lamp at the focus); solar cooker'],['Convex','side driving mirrors (erect, diminished, wide field of view); shop security mirrors']],cap:'Book p. 111–112'}},
   {box:'dyk',label:'Did you know?',list:[L('A satellite dish works like a big concave mirror that reflects broadcast waves and focuses them on the receiver (LNB).','طبق الستلايت يعمل عمل مرآة مقعرة كبيرة تعكس موجات البث وتجمعها على وحدة الاستقبال (LNB).')]}
  ]}
 ],
 laws:[
  {t:'Angled mirrors',eq:`n = ${fr('360°','θ')} − 1`,d:[['n','number of images'],['θ','angle between the mirrors']],use:L('θ = 0 (parallel) ⇒ infinite images.','θ = 0 (متوازيتان) ⇒ عدد لا نهائي.')},
  {t:'Focal length',eq:'f = ½ R',d:[['R','radius of curvature']],use:L('Concave: f > 0; convex: f < 0.','المقعرة f موجبة، والمحدبة f سالبة.')},
  {t:'Mirror equation',eq:`${fr('1','f')} = ${fr('1','u')} + ${fr('1','v')}`,d:[['u','object distance (+ real)'],['v','image distance (+ real, − virtual)']],use:L('Always write the signs before substituting.','اكتب الإشارات دائمًا قبل التعويض.'),err:L('Forgetting the minus sign of f for a convex mirror.','نسيان الإشارة السالبة لـ f في المرآة المحدبة.')},
  {t:'Magnification',eq:`M = ${fr('h′','h')} = −${fr('v','u')}`,d:[['h′','image height'],['h','object height']],use:L('Real image ⇒ M < 0; virtual ⇒ M > 0.','الصورة الحقيقية M سالب، والوهمية M موجب.'),err:L('For “virtual, 3 times magnified” use M = +3 ⇒ v = −3u.','للصورة "الوهمية المكبرة 3 مرات" استعمل M = +3 ⇒ v = −3u.')}
 ],
 examples:[
  {t:L('Book: an object between two mirrors at 24°. Number of images?','الكتاب: جسم بين مرآتين بينهما 24°. كم صورة تتكون؟'),p:'101',steps:[['Law','n = 360/θ − 1'],['Sub','360/24 − 1 = 15 − 1']],res:'n = 14 images'},
  {t:L('Book: concave mirror f = 20 cm, object at 30 cm. Find the image.','الكتاب: مرآة مقعرة f = 20 cm والجسم على بعد 30 cm. أوجد الصورة.'),p:'108',steps:[['Law','1/v = 1/20 − 1/30 = 1/60'],['v','v = +60 cm'],['M','M = −60/30 = −2']],res:'real, inverted, magnified ×2, beyond C'},
  {t:L('Book: concave mirror f = 15 cm. Where is the object for an image 3 times magnified that is (1) real (2) virtual?','الكتاب: مرآة مقعرة f = 15 cm. أين يوضع الجسم لتكون الصورة مكبرة 3 مرات (1) حقيقية (2) وهمية؟'),p:'109',steps:[['Real','M = −3 ⇒ v = 3u ⇒ 1/15 = 1/u + 1/3u ⇒ u = 20 cm, v = 60 cm'],['Virtual','M = +3 ⇒ v = −3u ⇒ 1/15 = 1/u − 1/3u ⇒ u = 10 cm, v = −30 cm']],res:'u = 20 cm (real) ; u = 10 cm (virtual)'},
  {t:L('Book: convex mirror R = 8 cm, object at 6 cm. Find the image.','الكتاب: مرآة محدبة R = 8 cm والجسم على بعد 6 cm. أوجد الصورة.'),p:'110',steps:[['f','f = −4 cm'],['v','1/v = −1/4 − 1/6 = −5/12 ⇒ v = −2.4 cm'],['M','M = 2.4/6 = +0.4']],res:'virtual, erect, diminished (0.4)'}
 ],
 quiz:[
  {ty:'mcq',k:'MCQ',q:L('The image in a plane mirror is:','الصورة في المرآة المستوية:'),o:['real and inverted','virtual and erect','real and magnified','virtual and inverted'],a:1,x:L('Virtual, erect, same size.','وهمية، معتدلة، بالحجم نفسه.')},
  {ty:'mcq',k:'MCQ',q:L('Two mirrors at 90° give:','مرآتان بينهما 90° تعطيان:'),o:['2 images','3 images','4 images','infinite'],a:1,x:L('360/90 − 1 = 3.','360/90 − 1 = 3.')},
  {ty:'mcq',k:'MCQ',q:L('Two parallel facing mirrors give:','مرآتان متوازيتان متقابلتان تعطيان:'),o:['1 image','2 images','180 images','infinite images'],a:3,x:L('θ = 0.','θ = 0.')},
  {ty:'mcq',k:'MCQ',q:L('A spherical mirror of focal length 15 cm has radius of curvature:','مرآة كروية بعدها البؤري 15 cm نصف قطر تكورها:'),o:['7.5 cm','15 cm','30 cm','60 cm'],a:2,x:L('R = 2f.','R = 2f.')},
  {ty:'mcq',k:'MCQ',q:L('A concave mirror gives an erect image when the object is:','تعطي المرآة المقعرة صورة معتدلة عندما يكون الجسم:'),o:['beyond C','at C','between F and the pole','at F'],a:2,x:L('Virtual, erect, magnified.','وهمية معتدلة مكبرة.')},
  {ty:'mcq',k:'MCQ',q:L('The image in a convex mirror is always:','الصورة في المرآة المحدبة دائمًا:'),o:['real, erect, diminished','virtual, erect, diminished','real, inverted, magnified','virtual, inverted, magnified'],a:1,x:L('Book p. 106.','الكتاب صفحة 106.')},
  {ty:'mcq',k:'MCQ',q:L('An object at C of a concave mirror forms an image that is:','جسم عند مركز تكور مرآة مقعرة تكون صورته:'),o:['virtual, magnified','real, inverted, same size, at C','at infinity','real, diminished, at F'],a:1,x:L('u = 2f ⇒ v = 2f, M = −1.','u = 2f ⇒ v = 2f و M = −1.')},
  {ty:'mcq',k:'MCQ',q:L('The focal length of a convex mirror is taken as:','يُعد البعد البؤري للمرآة المحدبة:'),o:['positive','negative','zero','infinite'],a:1,x:L('Its focus is virtual.','بؤرتها وهمية.')},
  {ty:'mcq',k:'MCQ',q:L('A negative magnification means the image is:','التكبير السالب يعني أن الصورة:'),o:['virtual, erect','real, inverted','diminished only','magnified only'],a:1,x:L('M = −v/u with v > 0.','M = −v/u مع v موجبة.')},
  {ty:'mcq',k:'MCQ',q:L('Side driving mirrors in cars are:','مرايا السيارة الجانبية:'),o:['plane','concave','convex','parabolic'],a:2,x:L('Wide field of view, erect diminished images.','مجال رؤية واسع وصور معتدلة مصغرة.')},
  {ty:'mcq',k:'MCQ',q:L('In car headlights the lamp is placed:','في مصابيح السيارة الأمامية يوضع المصباح:'),o:['at the centre of curvature','at the focus of a parabolic mirror','behind the mirror','anywhere'],a:1,x:L('Rays reflect parallel.','تنعكس الأشعة متوازية.')},
  {ty:'mcq',k:'MCQ',q:L('If your image in a mirror is magnified, the mirror is:','إذا كانت صورتك في مرآة مكبرة فالمرآة:'),o:['concave','convex','plane','any'],a:0,x:L('Only concave can magnify.','المقعرة فقط تكبّر.')},
  {ty:'tf',k:'True/False',q:L('A virtual image can be projected on a screen.','يمكن استلام الصورة الوهمية على حاجز.'),a:false,x:L('False → only real images.','خطأ ← الحقيقية فقط.')},
  {ty:'tf',k:'True/False',q:L('The image distance in a plane mirror equals the object distance.','بعد الصورة في المرآة المستوية يساوي بعد الجسم.'),a:true,x:L('True.','صح.')},
  {ty:'tf',k:'True/False',q:L('An object at the focus of a concave mirror forms a magnified real image.','الجسم في بؤرة المرآة المقعرة يكوّن صورة حقيقية مكبرة.'),a:false,x:L('False → <b>no image</b>; the reflected rays are parallel.','خطأ ← <b>لا تتكون صورة</b>، فالأشعة المنعكسة متوازية.')},
  {ty:'tf',k:'True/False',q:L('Spherical aberration is reduced by using parabolic mirrors.','يقل الزيغ الكروي باستعمال مرايا على شكل قطع مكافئ.'),a:true,x:L('True.','صح.')},
  {ty:'tf',k:'True/False',q:L('A ray through the centre of curvature reflects back on itself.','الشعاع المار بمركز التكور يرتد على نفسه.'),a:true,x:L('True.','صح.')},
  {ty:'open',k:'Define',q:L('Define: Focus of a spherical mirror.','عرّف: بؤرة المرآة الكروية.'),x:L('The point on the principal axis where reflected rays (or their extensions) of rays parallel to the axis meet.','النقطة على المحور الأساسي التي تلتقي فيها الأشعة المنعكسة (أو امتداداتها) للأشعة الساقطة موازية للمحور.')},
  {ty:'open',k:'Define',q:L('Define: Spherical aberration.','عرّف: الزيغ الكروي.'),x:L('The failure of rays reflected from a spherical mirror to meet at one point.','عدم تجمع الأشعة المنعكسة عن المرآة الكروية في نقطة واحدة.')},
  {ty:'open',k:'Define',q:L('What is a real focus and a virtual focus?','ما البؤرة الحقيقية والبؤرة الوهمية؟'),x:L('Real: the reflected rays themselves meet there (concave). Virtual: their extensions meet there (convex).','الحقيقية: تلتقي فيها الأشعة المنعكسة نفسها (المقعرة). الوهمية: تلتقي فيها امتداداتها (المحدبة).')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: AMBULANCE is written reversed on ambulances.','علّل: تُكتب كلمة AMBULANCE معكوسة على سيارات الإسعاف.'),x:L('The plane mirror reverses left and right, so the driver in front reads it correctly in his mirror.','لأن المرآة المستوية تقلب الصورة جانبيًا، فيقرؤها السائق الذي في المقدمة صحيحة في مرآته.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: convex mirrors are used on the sides of cars, not concave ones.','علّل: تُستعمل المرايا المحدبة على جانبي السيارة لا المقعرة.'),x:L('Convex mirrors always give erect, diminished images with a wide field of view; concave ones can give inverted images and a narrow field.','لأن المحدبة تعطي دائمًا صورًا معتدلة مصغرة بمجال رؤية واسع، أما المقعرة فقد تعطي صورًا مقلوبة ومجالًا ضيقًا.')},
  {ty:'open',k:'Problem · easy',q:L('Two mirrors at 120°. Number of images?','مرآتان بينهما 120°. كم صورة؟'),x:L('n = 360/120 − 1 = <b>2</b>','n = 360/120 − 1 = <b>2</b>')},
  {ty:'open',k:'Problem · medium',q:L('An object 4 cm from a mirror gives a virtual image magnified 3 times. Mirror type and f?','جسم على بعد 4 cm من مرآة تكوّنت له صورة وهمية مكبرة 3 مرات. نوع المرآة وبعدها البؤري؟'),x:L('v = −12 cm; 1/f = 1/4 − 1/12 = 1/6 ⇒ <b>f = +6 cm, concave</b>','v = −12 cm؛ 1/f = 1/4 − 1/12 = 1/6 ⇒ <b>f = +6 cm مقعرة</b>')},
  {ty:'open',k:'Problem · hard',q:L('A 4 cm object is 40 cm in front of a convex mirror of R = 20 cm. Find the image height and type.','جسم طوله 4 cm على بعد 40 cm أمام مرآة محدبة R = 20 cm. أوجد طول الصورة ونوعها.'),x:L('f = −10; 1/v = −1/10 − 1/40 ⇒ v = −8 cm; M = 0.2 ⇒ <b>h′ = 0.8 cm</b>, virtual, erect, diminished','f = −10؛ 1/v = −1/10 − 1/40 ⇒ v = −8 cm؛ M = 0.2 ⇒ <b>h′ = 0.8 cm</b> وهمية معتدلة مصغرة')}
 ],
 exam:[
  {m:10,q:L('An object 4 cm from a mirror forms a virtual image magnified 5 times. Type of mirror and focal length?','جسم على بعد 4 cm من مرآة تكونت له صورة وهمية مكبرة 5 مرات. نوع المرآة وبعدها البؤري؟'),steps:[['Type','virtual & magnified ⇒ concave'],['v','M = +5 ⇒ v = −20 cm'],['f','1/f = 1/4 − 1/20 = 4/20']],res:'concave, f = 5 cm',tip:L('Paper C (distinguished final 2026) used this question.','جاء في الورقة C (المتميزين 2026).')},
  {m:10,q:L('Concave mirror f = 15 cm; object at 20 cm. Image distance and characteristics?','مرآة مقعرة f = 15 cm والجسم على بعد 20 cm. بعد الصورة وصفاتها؟'),steps:[['v','1/v = 1/15 − 1/20 = 1/60 ⇒ v = 60 cm'],['M','−60/20 = −3']],res:'real, inverted, magnified ×3'},
  {m:10,q:L('Concave mirror f = 12 cm gives a real image 4 times magnified. Find u and v.','مرآة مقعرة f = 12 cm تعطي صورة حقيقية مكبرة 4 مرات. أوجد u و v.'),steps:[['M','−4 ⇒ v = 4u'],['Law','1/12 = 1/u + 1/4u = 5/4u']],res:'u = 15 cm ; v = 60 cm'},
  {m:10,q:L('Concave mirror R = 36 cm forms an erect image 3 times magnified. Where is the object?','مرآة مقعرة R = 36 cm تكوّن صورة معتدلة مكبرة 3 مرات. أين الجسم؟'),steps:[['f','18 cm'],['M','+3 ⇒ v = −3u'],['Law','1/18 = 1/u − 1/3u = 2/3u']],res:'u = 12 cm'},
  {m:8,q:L('Show by drawing the image of an object beyond C for (a) a concave mirror (b) a convex mirror.','وضّح بالرسم صورة جسم أبعد من مركز التكور لـ (أ) مرآة مقعرة (ب) مرآة محدبة.'),steps:[['a','between F and C: real, inverted, diminished'],['b','behind the mirror between pole and F: virtual, erect, diminished']],res:'use the Labs ray diagram to see both'},
  {m:8,q:L('Compare concave and convex mirrors (reflecting surface and images).','قارن بين المرآة المقعرة والمحدبة (السطح العاكس والصور).'),steps:[['Concave','inner surface; real or virtual images depending on position'],['Convex','outer surface; always virtual, erect, diminished']],res:'inner vs outer surface'}
 ],
 book:{p:'113–114',mcq:[
  {q:'A virtual image is:',ar:'الصورة الوهمية:',o:['erect relative to the object','inverted relative to the object','can be projected on a screen','in front of the mirror'],a:0},
  {q:'A concave mirror shows an erect image when the object distance is:',ar:'تُظهر المرآة المقعرة صورة معتدلة عندما يكون بعد الجسم:',o:['less than f','equal to f','twice f','very far'],a:0},
  {q:'Number of images in parallel facing mirrors:',ar:'عدد الصور في مرآتين متوازيتين متقابلتين:',o:['30','180','infinity','0'],a:2},
  {q:'The principal axis of a spherical mirror passes through:',ar:'المحور الأساسي للمرآة الكروية يمر بـ:',o:['C and another point','C and the pole','F and any point','tangent to the mirror'],a:1},
  {q:'If your image is magnified, the mirror is:',ar:'إذا كانت صورتك مكبرة فالمرآة:',o:['concave','convex','plane','all of the above'],a:0},
  {q:'The radius of curvature equals:',ar:'نصف قطر التكور يساوي:',o:['half of f','twice f','three times f','one third of f'],a:1},
  {q:'The image in a convex mirror is:',ar:'الصورة في المرآة المحدبة:',o:['real, erect, diminished','virtual, erect, diminished','real, magnified, inverted','virtual, inverted, magnified'],a:1},
  {q:'A mirror of focal length 15 cm has a radius of curvature of:',ar:'مرآة بعدها البؤري 15 cm نصف قطر تكورها:',o:['15 cm','7.5 cm','60 cm','30 cm'],a:3},
  {q:'A 10 cm ruler at 100 cm from a concave mirror of f = +50 cm gives an image of length:',ar:'مسطرة 10 cm على بعد 100 cm من مرآة مقعرة f = +50 cm طول صورتها:',o:['3 cm erect','10 cm erect','3 cm inverted','10 cm inverted'],a:3}
 ],
 openTitle:'Answer the following',
 open:[
  [L('Q1. Someone suggests concave mirrors on both sides of the car instead of convex. Is he right?','س1. اقترح شخص وضع مرايا مقعرة على جانبي السيارة بدل المحدبة. هل اقتراحه صحيح؟'),L('No. Convex mirrors give erect, diminished images with a wide field of view; concave mirrors may give inverted images and a narrow field.','لا. المحدبة تعطي صورًا معتدلة مصغرة ومجال رؤية واسعًا، والمقعرة قد تعطي صورًا مقلوبة ومجالًا ضيقًا.')],
  [L('Q2. Ahmed wears a shirt with “81”. How does it read in a plane mirror?','س2. أحمد يلبس قميصًا عليه الرقم 81. كيف يُقرأ في المرآة المستوية؟'),L('Laterally reversed: the digits swap places and each digit is mirrored, so it reads like “18” written backwards.','مقلوبًا جانبيًا: يتبادل الرقمان مكانيهما ويُعكس كل رقم، فيظهر كأنه 18 مكتوبًا معكوسًا.')],
  [L('Q4. Why is no image formed for an object at the focus of a concave mirror?','س4. لماذا لا تتكون صورة لجسم في بؤرة مرآة مقعرة؟'),L('The reflected rays are parallel and never meet.','لأن الأشعة المنعكسة متوازية ولا تلتقي.')],
  [L('Q5. What is a real focus and a virtual focus?','س5. ما البؤرة الحقيقية والوهمية؟'),L('Real: reflected rays meet there (concave). Virtual: their extensions meet there (convex).','الحقيقية: تلتقي فيها الأشعة المنعكسة (المقعرة)، والوهمية: تلتقي فيها امتداداتها (المحدبة).')]
 ],
 probs:[
  {q:L('P1. Concave mirror R = 36 cm, erect image, M = 3. Find u.','م1. مرآة مقعرة R = 36 cm وصورة معتدلة M = 3. أوجد u.'),steps:[['f','18 cm'],['v','v = −3u'],['Law','1/18 = 2/3u']],res:'u = 12 cm'},
  {q:L('P2. Two plane mirrors at 120°. Number of images?','م2. مرآتان بينهما 120°. عدد الصور؟'),steps:[['Sub','360/120 − 1']],res:'n = 2'},
  {q:L('P3. Object 4 cm from a mirror; virtual image 3 times magnified. Mirror type and f?','م3. جسم على بعد 4 cm وصورة وهمية مكبرة 3 مرات. نوع المرآة و f؟'),steps:[['v','−12 cm'],['f','1/4 − 1/12 = 1/6']],res:'concave, f = +6 cm'},
  {q:L('P4. Concave mirror f = 12 cm; real image 4 times magnified. Find u and v.','م4. مرآة مقعرة f = 12 cm وصورة حقيقية مكبرة 4 مرات. أوجد u و v.'),steps:[['v','4u'],['Law','1/12 = 5/4u']],res:'u = 15 cm ; v = 60 cm'},
  {q:L('P5. 4 cm object, 40 cm from a convex mirror of R = 20 cm. Image type and length?','م5. جسم 4 cm على بعد 40 cm من مرآة محدبة R = 20 cm. نوع الصورة وطولها؟'),steps:[['f','−10 cm'],['v','1/v = −1/10 − 1/40 ⇒ v = −8 cm'],['h′','M = 8/40 = 0.2 ⇒ h′ = 0.8 cm']],res:'virtual, erect, diminished, 0.8 cm'}
 ]},
 summary:[
  L('Plane mirror: virtual, erect, same size, same distance, laterally reversed.','المرآة المستوية: وهمية، معتدلة، بالحجم والبعد نفسيهما، مقلوبة جانبيًا.'),
  L('Angled mirrors: n = 360°/θ − 1; parallel ⇒ infinite.','المرآتان المتقاطعتان: n = 360°/θ − 1، والمتوازيتان ⇒ لا نهائي.'),
  L('Spherical mirrors: C, V, axis, R, F, f = R/2.','المرايا الكروية: C و V والمحور و R و F، و f = R/2.'),
  L('Concave: image depends on position; convex: always virtual, erect, diminished.','المقعرة: الصورة تعتمد على الموضع؛ المحدبة: دائمًا وهمية معتدلة مصغرة.'),
  L('1/f = 1/u + 1/v; M = h′/h = −v/u (f + concave, − convex; v + real, − virtual).','1/f = 1/u + 1/v؛ M = h′/h = −v/u.'),
  L('Applications: dentist, headlights, solar cooker (concave); car side and shop mirrors (convex).','التطبيقات: طبيب الأسنان والمصابيح والطباخ الشمسي (مقعرة)؛ مرايا السيارة الجانبية والمحلات (محدبة).')
 ],
 extra:{t:'Sign rules',items:[['f','+ concave · − convex'],['v','+ real · − virtual'],['M','− real inverted · + virtual erect'],['f','R/2']]}
};
(window.XL=window.XL||[]).push({ch:7,t:'Mirror ray diagram',d:L('Choose the mirror, its focal length and the object distance. The diagram, the image position and its characteristics update instantly.','اختر نوع المرآة وبعدها البؤري وبعد الجسم، فيتحدث المخطط وموضع الصورة وصفاتها فورًا.'),
 html:`<div class="calc"><label>Mirror<select id="mK"><option value="1">Concave</option><option value="-1">Convex</option></select></label><label>|f| (cm)<input id="mF" type="number" value="15"></label><label>Object distance u (cm)<input id="mU" type="range" min="2" max="60" value="20"></label></div><div id="mSvg" style="margin-top:10px"></div><div id="mOut"></div>`,
 init(){const d=()=>{const f=+$('#mK').value*Math.abs(+$('#mF').value),u=+$('#mU').value;const r=RAY('mirror',f,u);$('#mSvg').innerHTML=r.svg;
  $('#mOut').innerHTML=steps([['u',u+' cm'],['Law',`1/v = 1/${f} − 1/${u}`],['v',isFinite(r.v)?(+r.v.toFixed(2))+' cm':'∞']])+`<div class="res">✓ ${r.desc}</div>`};['mK','mF','mU'].forEach(i=>$('#'+i).oninput=d);d();}});
(window.XL=window.XL||[]).push({ch:7,t:'Angled mirrors',d:L('Change the angle between two plane mirrors and count the images.','غيّر الزاوية بين مرآتين مستويتين واحسب عدد الصور.'),
 html:`<label class="eyebrow" for="amA">Angle θ (°)</label><input id="amA" type="range" min="10" max="180" step="1" value="60" style="width:100%;accent-color:var(--c7)"><div id="amOut"></div>`,
 init(){const d=()=>{const a=+$('#amA').value;const n=360/a-1;$('#amOut').innerHTML=steps([['Law','n = 360/θ − 1'],['Sub',`360/${a} − 1`]])+`<div class="res">✓ n = ${(+n.toFixed(2))}${Number.isInteger(+n.toFixed(6))?' images':' (not a whole number: use angles that divide 360°)'}</div>`};$('#amA').oninput=d;d();}});

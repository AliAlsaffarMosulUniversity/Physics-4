/* ---------- Chapter 1: Basic Parameters in Physics ---------- */
const DT_SVG=`<svg viewBox="0 0 520 250" role="img" aria-label="Distance–time graph of a car"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<path d="M60 210 H490 M60 210 V20" stroke="var(--muted)" fill="none"/>
${[0.25,0.5,0.75,1,1.25].map(t=>`<line x1="${60+t*320}" y1="210" x2="${60+t*320}" y2="214" stroke="var(--muted)"/><text x="${60+t*320}" y="228" text-anchor="middle">${t}</text>`).join('')}
${[20,40,60,80,100].map(d=>`<line x1="56" y1="${210-d*1.7}" x2="60" y2="${210-d*1.7}" stroke="var(--muted)"/><text x="52" y="${214-d*1.7}" text-anchor="end">${d}</text>`).join('')}
<text x="490" y="244" text-anchor="end">t (h)</text><text x="64" y="26">d (km)</text>
<path d="M60 210 L${60+1.25*320} ${210-100*1.7}" stroke="var(--c1)" stroke-width="2.5"/>
${[0.25,0.5,0.75,1,1.25].map((t,i)=>`<circle cx="${60+t*320}" cy="${210-(i+1)*20*1.7}" r="4" fill="var(--c1)"/>`).join('')}
<path d="M${60+0.5*320} ${210-40*1.7} H${60+1*320} V${210-80*1.7}" stroke="var(--amber)" stroke-dasharray="4 3" fill="none"/>
<text x="${60+0.75*320}" y="${210-40*1.7+16}" text-anchor="middle" fill="var(--amber)">Δt = 0.5 h</text><text x="${60+1*320+8}" y="${210-60*1.7}" fill="var(--amber)">Δd = 40 km</text>
<text x="${60+0.5*320-6}" y="${210-40*1.7-8}" text-anchor="end" fill="var(--ink)">P₁</text><text x="${60+1*320-6}" y="${210-80*1.7-8}" text-anchor="end" fill="var(--ink)">P₂</text>
</g></svg>`;
const RAD_SVG=`<svg viewBox="0 0 520 200" role="img" aria-label="Radian and solid angle"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<circle cx="120" cy="100" r="70" fill="none" stroke="var(--muted)"/><path d="M120 100 L190 100" stroke="var(--c1)" stroke-width="2"/><path d="M120 100 L${120+70*Math.cos(1)} ${100-70*Math.sin(1)}" stroke="var(--c1)" stroke-width="2"/>
<path d="M190 100 A70 70 0 0 0 ${120+70*Math.cos(1)} ${100-70*Math.sin(1)}" stroke="var(--bad)" stroke-width="3" fill="none"/>
<text x="150" y="116" fill="var(--c1)">r</text><text x="200" y="60" fill="var(--bad)">arc = r</text><text x="138" y="92" fill="var(--ink)">1 rad</text>
<text x="120" y="192" text-anchor="middle">θ = arc ÷ radius</text>
<circle cx="390" cy="100" r="70" fill="var(--accent-soft)" stroke="var(--accent)"/><path d="M390 100 L440 40 M390 100 L455 70" stroke="var(--c1)"/><path d="M440 40 Q455 50 455 70 L430 75 Q428 58 418 52 Z" fill="var(--c1)" opacity=".5"/>
<text x="390" y="192" text-anchor="middle">area = r² ⇒ 1 sr ; sphere = 4π sr</text>
</g></svg>`;
CHD[1]={
 obj:[L('Name the seven base units and the two supplementary units of the SI system.','تسمية الوحدات الأساسية السبع والوحدتين الإضافيتين في النظام الدولي.'),
      L('Use prefixes to convert between parts and multiples of units.','استعمال البادئات للتحويل بين أجزاء الوحدات ومضاعفاتها.'),
      L('Distinguish instrument errors from personal errors and know which can be reduced by repeating.','التمييز بين أخطاء الأجهزة والأخطاء الشخصية ومعرفة أيها يقل بالتكرار.'),
      L('Plot a graph from readings and find a constant from its slope.','رسم خط بياني من القراءات وإيجاد ثابت من ميله.'),
      L('Solve problems on direct and inverse proportion, and derive PV = nRT.','حل مسائل التناسب الطردي والعكسي، واشتقاق PV = nRT.')],
 lessons:[
  {sn:'1.1',t:'Measurements',p:'5',blocks:[
   {p:L('All sciences, and physics in particular, depend on measurement. Mass, distance, time, speed, force, pressure, area and temperature are <b>physical quantities</b>: each is described by a numerical value and a unit.','تعتمد العلوم جميعها، والفيزياء خاصة، على القياس. الكتلة والمسافة والزمن والسرعة والقوة والضغط والمساحة ودرجة الحرارة <b>كميات فيزيائية</b>، توصف كل منها بقيمة عددية ووحدة قياس.')},
   {p:L('Human senses are useful but limited in range, trueness and accuracy. The heart pulse, the day (one rotation of the Earth about its axis) and the year (one revolution around the Sun) are natural scales of time.','الحواس البشرية مفيدة لكنها محدودة في المدى والصدق والدقة. نبضات القلب، واليوم (دورة الأرض حول محورها)، والسنة (دورة الأرض حول الشمس) مقاييس طبيعية للزمن.')}
  ]},
  {sn:'1.2',t:'International System of Units (SI)',p:'6–7',blocks:[
   {p:L('SI comes from the French <i>Système International</i>. It continues the metric system, is decimal, and gives every quantity only one unit.','النظام الدولي للوحدات (SI) اختصار لعبارة فرنسية. وهو امتداد للنظام المتري، ونظام عشري، ولكل كمية فيه وحدة قياس واحدة فقط.')},
   {table:{h:['#','Quantity','Unit','Symbol'],r:[['1','Length','metre','m'],['2','Mass','kilogram','kg'],['3','Time','second','s'],['4','Electric current','ampere','A'],['5','Amount of substance','mole','mol'],['6','Temperature','kelvin','K'],['7','Luminous intensity','candela','cd']],cap:'Table (1) — the seven base units, Book p. 6'}},
   {table:{h:['Quantity','Unit','Symbol'],r:[['Plane angle','radian','rad'],['Solid angle','steradian','sr']],cap:'Table (2) — supplementary units'}},
   {fig:RAD_SVG,cap:'Radian (left) and steradian (right), Book p. 7'},
   {box:'def',label:'Definitions',list:[
     L('<b>Radian:</b> a central angle whose arc length equals the radius of the circle. 2π rad = 360°, so 1 rad = 360°/2π ≈ 57.3°.','<b>الزاوية نصف القطرية (الراديان):</b> زاوية مركزية يساوي طول القوس المقابل لها نصف قطر الدائرة. 2π rad = 360°، إذن 1 rad ≈ 57.3°.'),
     L('<b>Solid angle (steradian):</b> a central solid angle facing a part of a sphere’s surface whose area equals the square of the radius. A whole sphere = 4πr²/r² = 4π sr.','<b>الزاوية المجسمة (الستيراديان):</b> زاوية مجسمة مركزية تقابل جزءًا من سطح كرة مساحته تساوي مربع نصف قطرها. الكرة كلها = 4πr²/r² = 4π sr.')]},
   {table:{h:['Prefix','Symbol','Factor','Example'],r:[['tera','T','10¹²','—'],['giga','G','10⁹','—'],['mega','M','10⁶','1 Mm = 10⁶ m'],['kilo','k','10³','1 km = 10³ m'],['centi *','c','10⁻²','—'],['milli','m','10⁻³','1 mA = 10⁻³ A'],['micro','μ','10⁻⁶','1 μC = 10⁻⁶ C'],['nano','n','10⁻⁹','1 ns = 10⁻⁹ s'],['pico','p','10⁻¹²','1 pC = 10⁻¹² C'],['femto','f','10⁻¹⁵','1 fm = 10⁻¹⁵ m']],cap:'Table (3) — prefixes; multiples go in steps of 10³ (* centi is not an SI step)'}}
  ]},
  {sn:'1.3',t:'Measurement Errors',p:'8',blocks:[
   {p:L('The accuracy of a measurement depends on the instrument, the skill of the experimenter and the conditions of the experiment.','تعتمد دقة القياس على الجهاز المستعمل، ومهارة المجرّب، وظروف التجربة.')},
   {box:'def',label:'1. Instrument errors',list:[
     L('Caused by poor manufacture or wrong calibration, and by the smallest reading of the device: a metre ruler reads to 1 mm, a micrometer to 0.01 mm. Repeating the reading with the same device does <b>not</b> reduce this error.','تنتج عن رداءة الصنع أو خطأ المعايرة، وعن أصغر قراءة للجهاز: المسطرة المترية تقرأ إلى 1 mm والمايكرومتر إلى 0.01 mm. تكرار القراءة بالجهاز نفسه <b>لا</b> يقلل هذا الخطأ.'),
     L('Always state the error range, e.g. 1.32 cm ± 0.02.','يجب دائمًا ذكر مدى الخطأ، مثل: 1.32 cm ± 0.02.')]},
   {box:'def',label:'2. Personal errors',list:[L('Caused by lack of reading skill or by surrounding conditions. These <b>random errors are the only ones</b> that can be reduced by repeating the measurement and taking the <b>arithmetic mean</b>, the best guess for the true value.','تنتج عن قلة مهارة القراءة أو عن الظروف المحيطة. وهذه <b>الأخطاء العشوائية هي الوحيدة</b> التي تقل بتكرار القياس وأخذ <b>الوسط الحسابي</b>، وهو أفضل تقدير للقيمة الحقيقية.')]},
   {box:'think',label:'Remember',list:[L('A small error measuring a distance on a map with a ruler can mean a big error in the real distance.','الخطأ الصغير في قياس مسافة على الخريطة بالمسطرة قد يعني خطأً كبيرًا في المسافة الحقيقية.')]}
  ]},
  {sn:'1.4',t:'Graphs',p:'9–10',blocks:[
   {p:L('A graph shows the relation between two variables, gives the mean of many readings, and lets us find constants from its slope.','يوضح الرسم البياني العلاقة بين متغيرين، ويعطي معدل قراءات كثيرة، ويمكّننا من إيجاد الثوابت من ميله.')},
   {box:'act',label:'To plot a graph',list:[
     L('1. Choose the origin (0,0) in a proper place on the graph paper.','1. حدد نقطة الأصل (0,0) في مكان مناسب من ورقة الرسم.'),
     L('2. Draw two perpendicular axes: x horizontal, y vertical.','2. ارسم محورين متعامدين: x أفقي و y عمودي.'),
     L('3. Choose a suitable scale for each axis; even numbers are better.','3. اختر مقياس رسم مناسبًا لكل محور، والأفضل الأعداد الزوجية.')]},
   {table:{h:['d (km)','20','40','60','80','100'],r:[['t (h)','0.25','0.5','0.75','1','1.25']],cap:'Book application: a car at constant speed'}},
   {fig:DT_SVG,cap:'Figure (1.2) — slope between P₁ and P₂ is the speed'},
   {eq:`v = m = ${fr('d₂ − d₁','t₂ − t₁')} = ${fr('80 − 40','1 − 0.5')} = 80 km/h`}
  ]},
  {sn:'1.5',t:'Direct and Inverse Proportion',p:'10–13',blocks:[
   {box:'def',label:'Direct proportion',list:[L('a ∝ b means a = k·b, where k is the proportion constant. If b changes, a changes in the same ratio: a₁/b₁ = a₂/b₂.','a ∝ b تعني a = k·b حيث k ثابت التناسب. إذا تغيرت b تتغير a بالنسبة نفسها: a₁/b₁ = a₂/b₂.')]},
   {box:'def',label:'Inverse proportion',list:[L('a ∝ 1/b means a = k/b. So a₁·b₁ = a₂·b₂.','a ∝ 1/b تعني a = k/b. إذن a₁·b₁ = a₂·b₂.')]},
   {p:L('A quantity may depend on more than one variable. The volume of a cylinder: V ∝ r² (h constant) and V ∝ h (r constant), so V = k·r²·h, and the book finds k = 22/7 = π.','قد تعتمد الكمية على أكثر من متغير. حجم الأسطوانة: V ∝ r² (عند ثبوت h) و V ∝ h (عند ثبوت r)، إذن V = k·r²·h، ويجد الكتاب أن k = 22/7 = π.')},
   {h:'The ideal gas equation'},
   {p:L('Charles’s law: V ∝ T at constant pressure. Boyle’s law: V ∝ 1/P at constant temperature. Together V ∝ T/P, so V = kT/P and PV = kT = nRT, with R = 8.314 J·mol⁻¹·K⁻¹.','قانون شارل: V ∝ T عند ثبوت الضغط. قانون بويل: V ∝ 1/P عند ثبوت درجة الحرارة. معًا V ∝ T/P، إذن V = kT/P و PV = kT = nRT، حيث R = 8.314 J·mol⁻¹·K⁻¹.')},
   {eq:'PV = nRT'},
   {box:'rem',label:'Remember',list:[
     L('y = 2x : direct linear change; the line passes through the origin.','y = 2x : تغير طردي خطي، والخط يمر بنقطة الأصل.'),
     L('y = 2x + a (a ≠ 0): direct linear change, but the line does <b>not</b> pass through the origin.','y = 2x + a حيث a ≠ 0: تغير خطي، لكن الخط <b>لا</b> يمر بنقطة الأصل.')]}
  ]}
 ],
 laws:[
  {t:'Radian',eq:`θ = ${fr('arc length','radius')} ,  1 rad = ${fr('360°','2π')} ≈ 57.3°`,d:[['θ','angle in rad'],['2π rad','one full circle']],use:L('Circular motion and angle conversion.','الحركة الدائرية وتحويل الزوايا.'),err:L('Using 180° instead of 360° in 1 rad = 360°/2π.','استعمال 180° بدل 360° في العلاقة 1 rad = 360°/2π.')},
  {t:'Solid angle of a sphere',eq:`${fr('4πr²','r²')} = 4π sr`,d:[['sr','steradian']],use:L('The whole surface of a sphere faces 4π sr.','سطح الكرة كله يقابل 4π sr.')},
  {t:'Slope of a straight line',eq:`m = ${fr('Δy','Δx')} = ${fr('y₂ − y₁','x₂ − x₁')}`,d:[['m','slope (has units of y ÷ x)']],use:L('Take two points on the line, not from the table.','خذ نقطتين من الخط نفسه لا من الجدول.')},
  {t:'Direct proportion',eq:`a = k · b  ⇒  ${fr('a₁','b₁')} = ${fr('a₂','b₂')}`,d:[['k','proportion constant']],use:L('Distance ∝ time at constant speed (k = speed).','المسافة ∝ الزمن عند ثبوت السرعة (k = السرعة).')},
  {t:'Inverse proportion',eq:`a = ${fr('k','b')}  ⇒  a₁b₁ = a₂b₂`,d:[['k','proportion constant']],use:L('Boyle’s law: V ∝ 1/P.','قانون بويل: V ∝ 1/P.'),err:L('Writing a₁/b₁ = a₂/b₂ for an inverse relation.','كتابة a₁/b₁ = a₂/b₂ لعلاقة عكسية.')},
  {t:'Ideal gas',eq:'PV = nRT',d:[['P','pressure (Pa)'],['V','volume (m³)'],['n','number of moles'],['R','8.314 J/mol·K'],['T','absolute temperature (K)']],use:L('Combines Charles’s and Boyle’s laws.','تجمع قانوني شارل وبويل.')}
 ],
 examples:[
  {t:L('Book: a train at constant speed covers 160 km in 2 h. How long does it need for 400 km?','الكتاب: قطار بسرعة ثابتة يقطع 160 km في 2 h. كم يحتاج لقطع 400 km؟'),p:'11',steps:[['Law','d = k·t'],['k','k = 160 / 2 = 80 km/h'],['t','t = 400 / 80']],res:'t = 5 h'},
  {t:L('Book: a cylinder of radius 14 cm and height 10 cm has volume 6160 cm³. Find its height when V = 3080 cm³ and r = 7 cm.','الكتاب: أسطوانة نصف قطرها 14 cm وارتفاعها 10 cm حجمها 6160 cm³. أوجد ارتفاعها عندما V = 3080 cm³ و r = 7 cm.'),p:'12',steps:[['Law','V = k·r²·h'],['k','k = 6160 / (14 × 14 × 10) = 22/7 = π'],['h','3080 = (22/7) × 7² × h']],res:'h = 20 cm'},
  {t:L('Book: find the car’s speed from the distance–time graph.','الكتاب: أوجد سرعة السيارة من رسم المسافة والزمن.'),p:'10',steps:[['P₁, P₂','(0.5 h, 40 km) and (1 h, 80 km)'],['Slope',`${fr('80 − 40','1 − 0.5')}`]],res:'v = 80 km/h'},
  {t:L('Convert 2 rad to degrees, and 90° to radians.','حوّل 2 rad إلى درجات، و 90° إلى راديان.'),p:'7',steps:[['1','2 × 57.3° = 114.6°'],['2','90° × 2π/360° = π/2 rad']],res:'114.6° ; π/2 ≈ 1.57 rad'}
 ],
 quiz:[
  {ty:'mcq',k:'MCQ',q:L('The number of base units in the SI system is:','عدد الوحدات الأساسية في النظام الدولي:'),o:['5','7','9','2'],a:1,x:L('Seven base units, Table (1).','سبع وحدات أساسية، الجدول (1).')},
  {ty:'mcq',k:'MCQ',q:L('The SI unit of luminous intensity is:','وحدة شدة الإضاءة في النظام الدولي:'),o:['lux','lumen','candela','watt'],a:2,x:L('Candela (cd).','الشمعة (cd).')},
  {ty:'mcq',k:'MCQ',q:L('The supplementary unit of the plane angle is:','الوحدة الإضافية للزاوية المستوية:'),o:['degree','radian','steradian','metre'],a:1,x:L('rad; the solid angle uses sr.','rad، والزاوية المجسمة تستعمل sr.')},
  {ty:'mcq',k:'MCQ',q:L('1 rad is approximately:','1 rad يساوي تقريبًا:'),o:['90°','180°','57.3°','1°'],a:2,x:L('360°/2π ≈ 57.3°.','360°/2π ≈ 57.3°.')},
  {ty:'mcq',k:'MCQ',q:L('The whole surface of a sphere faces a solid angle of:','سطح الكرة كله يقابل زاوية مجسمة مقدارها:'),o:['π sr','2π sr','4π sr','1 sr'],a:2,x:L('4πr²/r² = 4π.','4πr²/r² = 4π.')},
  {ty:'mcq',k:'MCQ',q:L('1 μC equals:','1 μC يساوي:'),o:['10⁻³ C','10⁻⁶ C','10⁻⁹ C','10⁶ C'],a:1,x:L('micro = 10⁻⁶.','مايكرو = 10⁻⁶.')},
  {ty:'mcq',k:'MCQ',q:L('1 pC equals:','1 pC يساوي:'),o:['10⁻¹² C','10⁻⁹ C','10⁻¹⁵ C','10¹² C'],a:0,x:L('pico = 10⁻¹².','بيكو = 10⁻¹².')},
  {ty:'mcq',k:'MCQ',q:L('1 cm² equals:','1 cm² يساوي:'),o:['10⁻² m²','10⁻⁴ m²','10⁻⁶ m²','10⁻³ m²'],a:1,x:L('(10⁻² m)² = 10⁻⁴ m².','(10⁻² m)² = 10⁻⁴ m².')},
  {ty:'mcq',k:'MCQ',q:L('The errors that can be reduced by repeating the measurement are:','الأخطاء التي تقل بتكرار القياس هي:'),o:['instrument errors','calibration errors','personal (random) errors','all errors'],a:2,x:L('Only random personal errors — take the arithmetic mean.','الأخطاء الشخصية العشوائية فقط، بأخذ الوسط الحسابي.')},
  {ty:'mcq',k:'MCQ',q:L('The smallest reading of a micrometer is:','أصغر قراءة للمايكرومتر:'),o:['1 mm','0.1 mm','0.01 mm','1 cm'],a:2,x:L('0.01 mm, while a ruler reads to 1 mm.','0.01 mm، بينما المسطرة 1 mm.')},
  {ty:'mcq',k:'MCQ',q:L('In a distance–time graph the slope represents:','في رسم المسافة والزمن يمثل الميل:'),o:['acceleration','speed','time','distance'],a:1,x:L('Δd/Δt = speed.','Δd/Δt = السرعة.')},
  {ty:'mcq',k:'MCQ',q:L('If x ∝ y and x = 6 when y = 2, then x when y = 5 is:','إذا x ∝ y و x = 6 عندما y = 2، فإن x عندما y = 5:'),o:['12','15','2.4','30'],a:1,x:L('x = 6 × 5/2 = 15.','x = 6 × 5/2 = 15.')},
  {ty:'mcq',k:'MCQ',q:L('If x ∝ 1/y and x = 10 when y = 4, then x when y = 8 is:','إذا x ∝ 1/y و x = 10 عندما y = 4، فإن x عندما y = 8:'),o:['20','5','2.5','40'],a:1,x:L('x₂ = 10 × 4 / 8 = 5.','x₂ = 10 × 4 / 8 = 5.')},
  {ty:'mcq',k:'MCQ',q:L('Boyle’s law states that at constant temperature:','ينص قانون بويل على أنه عند ثبوت درجة الحرارة:'),o:['V ∝ T','V ∝ 1/P','P ∝ T','V ∝ P'],a:1,x:L('Volume is inversely proportional to pressure.','الحجم يتناسب عكسيًا مع الضغط.')},
  {ty:'mcq',k:'MCQ',q:L('The value of the general gas constant R is:','قيمة ثابت الغازات العام R:'),o:['9.8','8.314 J/mol·K','6.63 × 10⁻³⁴','273'],a:1,x:L('R = 8.314 J·mol⁻¹·K⁻¹.','R = 8.314 J·mol⁻¹·K⁻¹.')},
  {ty:'tf',k:'True/False',q:L('In the SI system each quantity can have several units.','في النظام الدولي يمكن أن يكون للكمية الواحدة عدة وحدات.'),a:false,x:L('False → each quantity has only <b>one</b> unit.','خطأ ← لكل كمية وحدة <b>واحدة</b> فقط.')},
  {ty:'tf',k:'True/False',q:L('Multiples of SI units go in steps of 10³.','مضاعفات وحدات النظام الدولي تكون بخطوات 10³.'),a:true,x:L('True; parts go in steps of 10⁻³.','صح، والأجزاء بخطوات 10⁻³.')},
  {ty:'tf',k:'True/False',q:L('Repeating a reading with a poorly calibrated device reduces its error.','تكرار القراءة بجهاز سيئ المعايرة يقلل خطأه.'),a:false,x:L('False → instrument errors are <b>not</b> reduced by repetition.','خطأ ← أخطاء الأجهزة <b>لا</b> تقل بالتكرار.')},
  {ty:'tf',k:'True/False',q:L('The graph of y = 2x + 5 is a straight line through the origin.','الخط البياني لـ y = 2x + 5 مستقيم يمر بنقطة الأصل.'),a:false,x:L('False → it does <b>not</b> pass through the origin.','خطأ ← <b>لا</b> يمر بنقطة الأصل.')},
  {ty:'tf',k:'True/False',q:L('Centi (10⁻²) is one of the SI prefix steps.','السنتي (10⁻²) من خطوات بادئات النظام الدولي.'),a:false,x:L('False → the book marks centi as not included in the SI steps.','خطأ ← يذكر الكتاب أن السنتي غير مشمول في خطوات النظام الدولي.')},
  {ty:'tf',k:'True/False',q:L('Any number raised to the power zero equals 1.','أي عدد مرفوع للقوة صفر يساوي 1.'),a:true,x:L('True: 5⁰ = 1.','صح: 5⁰ = 1.')},
  {ty:'open',k:'Define',q:L('Define: Radian.','عرّف: الزاوية نصف القطرية (الراديان).'),x:L('A central angle whose arc length equals the radius of the circle.','زاوية مركزية يساوي طول القوس المقابل لها نصف قطر الدائرة.')},
  {ty:'open',k:'Define',q:L('Define: Solid angle (steradian).','عرّف: الزاوية المجسمة (الستيراديان).'),x:L('A central solid angle facing a part of a sphere’s surface whose area equals the square of its radius.','زاوية مجسمة مركزية تقابل جزءًا من سطح كرة مساحته تساوي مربع نصف قطرها.')},
  {ty:'open',k:'Define',q:L('Define: Direct proportion.','عرّف: التناسب الطردي.'),x:L('Quantity a is directly proportional to b if, when b changes, a changes in the same ratio: a = k·b.','تتناسب a طرديًا مع b إذا تغيرت a بالنسبة نفسها عند تغير b: a = k·b.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: we take the arithmetic mean of repeated readings.','علّل: نأخذ الوسط الحسابي للقراءات المتكررة.'),x:L('Because random (personal) errors are reduced by repetition, and the mean is the best guess for the true value.','لأن الأخطاء العشوائية (الشخصية) تقل بالتكرار، والوسط الحسابي أفضل تقدير للقيمة الحقيقية.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: a micrometer is preferred to a ruler for measuring a thin wire.','علّل: يُفضَّل المايكرومتر على المسطرة لقياس سلك رفيع.'),x:L('Its smallest reading is 0.01 mm, compared with 1 mm for a ruler, so the error is much smaller.','لأن أصغر قراءة له 0.01 mm مقارنة بـ 1 mm للمسطرة، فيكون الخطأ أصغر بكثير.')},
  {ty:'open',k:'Problem · easy',q:L('Convert 3.5 km, 250 mA and 600 nm to SI base units.','حوّل 3.5 km و 250 mA و 600 nm إلى الوحدات الأساسية.'),x:L('3.5 × 10³ m ; 0.25 A ; 6 × 10⁻⁷ m','3.5 × 10³ m ؛ 0.25 A ؛ 6 × 10⁻⁷ m')},
  {ty:'open',k:'Problem · medium',q:L('A gas has V = 2 L at P = 100 kPa. Find V at 250 kPa (T constant).','غاز حجمه 2 L عند ضغط 100 kPa. أوجد حجمه عند 250 kPa (درجة الحرارة ثابتة).'),x:L('P₁V₁ = P₂V₂ ⇒ V₂ = 100 × 2 / 250 = <b>0.8 L</b>','P₁V₁ = P₂V₂ ⇒ V₂ = 100 × 2 / 250 = <b>0.8 L</b>')},
  {ty:'open',k:'Problem · medium',q:L('A gas has V = 3 m³ at 300 K. Find V at 400 K (P constant).','غاز حجمه 3 m³ عند 300 K. أوجد حجمه عند 400 K (الضغط ثابت).'),x:L('V ∝ T ⇒ V₂ = 3 × 400/300 = <b>4 m³</b>','V ∝ T ⇒ V₂ = 3 × 400/300 = <b>4 m³</b>')},
  {ty:'open',k:'Problem · hard',q:L('V of a cylinder ∝ r²h. If r doubles and h is halved, what happens to V?','حجم الأسطوانة ∝ r²h. إذا تضاعف r ونقص h إلى النصف، ماذا يحدث لـ V؟'),x:L('V₂/V₁ = (2)² × ½ = 2 ⇒ the volume <b>doubles</b>.','V₂/V₁ = (2)² × ½ = 2 ⇒ <b>يتضاعف</b> الحجم.')}
 ],
 exam:[
  {m:10,q:L('x is inversely proportional to y, and x = 12 when y = 12/8. Find x when y = 4.5.','x تتناسب عكسيًا مع y، و x = 12 عندما y = 12/8. أوجد x عندما y = 4.5.'),steps:[['Law','x₁y₁ = x₂y₂'],['Sub','12 × 1.5 = x₂ × 4.5']],res:'x₂ = 4',tip:L('This exact question came in the distinguished final exam 2026 (Paper C).','هذا السؤال نفسه جاء في امتحان نهاية الكورس الأول للمتميزين 2026 (الورقة C).')},
  {m:10,q:L('x varies directly with y. x = 8 when y = 15. Find x when y = 10.','x تتغير طرديًا مع y. x = 8 عندما y = 15. أوجد x عندما y = 10.'),steps:[['Law','x₁/y₁ = x₂/y₂'],['Sub','x₂ = 8 × 10/15']],res:'x₂ = 16/3 ≈ 5.33'},
  {m:12,q:L('Prove that PV = nRT using Charles’s and Boyle’s laws.','أثبت أن PV = nRT باستعمال قانوني شارل وبويل.'),steps:[['Charles','V ∝ T (P constant)'],['Boyle','V ∝ 1/P (T constant)'],['Combine','V ∝ T/P ⇒ V = kT/P ⇒ PV = kT'],['k','k = nR']],res:'PV = nRT'},
  {m:8,q:L('A length is measured as 1.32 cm by a device that may err by 0.2 mm. How do you write the result?','قيس طول فكان 1.32 cm بجهاز قد يخطئ 0.2 mm. كيف تكتب النتيجة؟'),steps:[['Error','0.2 mm = 0.02 cm']],res:'1.32 cm ± 0.02 cm'},
  {m:10,q:L('A car covers 20, 40, 60, 80, 100 km in 0.25, 0.5, 0.75, 1, 1.25 h. Find its speed graphically.','سيارة تقطع 20، 40، 60، 80، 100 km في 0.25، 0.5، 0.75، 1، 1.25 h. أوجد سرعتها بيانيًا.'),steps:[['Points','(0.5, 40) and (1, 80)'],['Slope','(80 − 40)/(1 − 0.5)']],res:'v = 80 km/h'},
  {m:8,q:L('What is the solid angle of a hemisphere?','ما الزاوية المجسمة لنصف كرة؟'),steps:[['Sphere','4π sr'],['Half','4π / 2']],res:'2π sr'}
 ],
 book:{p:'14',mcq:[
  {q:'Radian is the central angle facing an arc of length:',ar:'الراديان زاوية مركزية تقابل قوسًا طوله:',o:['Circle radius','Circle diameter','Half circumference','Circumference'],a:0},
  {q:'The circumference faces:',ar:'محيط الدائرة يقابل:',o:['π rad','2π rad','3π rad','one rad'],a:1},
  {q:'The surface area of a sphere faces:',ar:'المساحة السطحية للكرة تقابل:',o:['π sr','2π sr','3π sr','4π sr'],a:3},
  {q:'Which quantity is measured in ampere?',ar:'أي كمية تقاس بالأمبير؟',o:['Voltage difference','Resistance','Electric current','Electric power'],a:2},
  {q:'A square millimetre equals:',ar:'المليمتر المربع يساوي:',o:['10⁻² m²','10⁻⁶ m²','10⁻⁴ m²','10⁻³ m²'],a:1},
  {q:'x ∝ y and x = 8 when y = 15. x when y = 10 is:',ar:'x ∝ y و x = 8 عندما y = 15. قيمة x عندما y = 10:',o:['7/3','2','16/3','3'],a:2},
  {q:'x ∝ 1/y and x = 7 when y = 3. x when y = 7/3 is:',ar:'x ∝ 1/y و x = 7 عندما y = 3. قيمة x عندما y = 7/3:',o:['7','9','10/3','6'],a:1},
  {q:'1 rad equals:',ar:'1 rad يساوي:',o:['57.3°','360°/π','90°/π','1°'],a:0},
  {q:'5⁰ equals:',ar:'5⁰ يساوي:',o:['5','zero','1','infinity'],a:2},
  {q:'If y = 2x + 5, then y changes:',ar:'إذا y = 2x + 5 فإن y تتغير:',o:['linearly with x through the origin','inversely with x','linearly with x, not through the origin','not linearly with x'],a:2},
  {q:'If y = mx, then y changes:',ar:'إذا y = mx فإن y تتغير:',o:['linearly, not through the origin','inversely with x','not linearly with x','linearly with x through the origin'],a:3}
 ]},
 summary:[
  L('SI: 7 base units (m, kg, s, A, mol, K, cd) + 2 supplementary (rad, sr).','النظام الدولي: 7 وحدات أساسية + وحدتان إضافيتان (rad و sr).'),
  L('1 rad ≈ 57.3°; full circle 2π rad; full sphere 4π sr.','1 rad ≈ 57.3°، الدائرة 2π rad، الكرة 4π sr.'),
  L('Prefixes go in steps of 10³: T, G, M, k, m, μ, n, p, f.','البادئات بخطوات 10³: T, G, M, k, m, μ, n, p, f.'),
  L('Instrument errors are not reduced by repetition; random personal errors are (arithmetic mean).','أخطاء الأجهزة لا تقل بالتكرار، أما الأخطاء الشخصية العشوائية فتقل (الوسط الحسابي).'),
  L('Slope m = Δy/Δx gives constants such as speed.','الميل m = Δy/Δx يعطي ثوابت مثل السرعة.'),
  L('Direct: a₁/b₁ = a₂/b₂. Inverse: a₁b₁ = a₂b₂. PV = nRT.','الطردي: a₁/b₁ = a₂/b₂. العكسي: a₁b₁ = a₂b₂. PV = nRT.')
 ],
 extra:{t:'Prefixes',items:[['T · G · M · k','10¹² · 10⁹ · 10⁶ · 10³'],['m · μ · n','10⁻³ · 10⁻⁶ · 10⁻⁹'],['p · f','10⁻¹² · 10⁻¹⁵'],['1 cm² · 1 mm²','10⁻⁴ · 10⁻⁶ m²']]}
};

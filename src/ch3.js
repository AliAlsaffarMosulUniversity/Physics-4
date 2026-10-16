/* ---------- Chapter 3: Static Fluids ---------- */
const BARO_SVG=`<svg viewBox="0 0 520 230" role="img" aria-label="Torricelli barometer and hydraulic lift"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<rect x="40" y="170" width="160" height="40" fill="var(--c3)" opacity=".35" stroke="var(--c3)"/><rect x="108" y="20" width="24" height="185" fill="none" stroke="var(--ink)"/>
<rect x="109" y="55" width="22" height="150" fill="var(--c3)" opacity=".6"/><text x="138" y="40">empty space</text>
<path d="M150 55 V170" stroke="var(--amber)" stroke-dasharray="3 3"/><text x="156" y="115" fill="var(--amber)">76 cm Hg</text>
<path d="M60 150 v18 M180 150 v18" stroke="var(--c2)" stroke-width="2"/><text x="60" y="145">P₀</text>
<text x="120" y="225" text-anchor="middle">Torricelli barometer</text>
<rect x="270" y="150" width="220" height="40" fill="var(--c3)" opacity=".3" stroke="var(--c3)"/>
<rect x="280" y="110" width="30" height="40" fill="var(--c3)" opacity=".3" stroke="var(--c3)"/><rect x="400" y="90" width="80" height="60" fill="var(--c3)" opacity=".3" stroke="var(--c3)"/>
<rect x="278" y="104" width="34" height="8" fill="var(--ink)"/><rect x="396" y="84" width="88" height="8" fill="var(--ink)"/>
<path d="M295 70 V100" stroke="var(--c2)" stroke-width="2.5"/><text x="300" y="80" fill="var(--c2)">F₁ small</text>
<path d="M440 82 V40" stroke="var(--c2)" stroke-width="3"/><text x="448" y="56" fill="var(--c2)">F₂ large</text>
<text x="295" y="140" text-anchor="middle">A₁</text><text x="440" y="130" text-anchor="middle">A₂</text>
<text x="380" y="225" text-anchor="middle">Hydraulic lift: F₁/A₁ = F₂/A₂</text></g></svg>`;
const PIPE_SVG=`<svg viewBox="0 0 520 150" role="img" aria-label="Continuity in a narrowing pipe"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<path d="M20 30 H200 C250 30 260 55 300 55 H500 V95 H300 C260 95 250 120 200 120 H20 Z" fill="var(--c3)" opacity=".25" stroke="var(--c3)"/>
${[50,75,100].map(y=>`<path d="M40 ${y} H120" stroke="var(--c3)" stroke-width="2" marker-end="url(#ah3)"/>`).join('')}
${[65,85].map(y=>`<path d="M340 ${y} H470" stroke="var(--c3)" stroke-width="2" marker-end="url(#ah3)"/>`).join('')}
<defs><marker id="ah3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--c3)"/></marker></defs>
<text x="80" y="140" text-anchor="middle">A₁ large · v₁ slow · P₁ high</text><text x="400" y="140" text-anchor="middle">A₂ small · v₂ fast · P₂ low</text></g></svg>`;
CHD[3]={
 obj:[L('Define a fluid and calculate the pressure of a liquid at a depth.','تعريف المائع وحساب ضغط السائل عند عمق معين.'),
      L('Explain the Torricelli barometer and Pascal’s principle with its applications.','شرح بارومتر تورشيلي ومبدأ باسكال وتطبيقاته.'),
      L('Apply Archimedes’ principle to immersed and floating objects.','تطبيق مبدأ أرخميدس على الأجسام المغمورة والطافية.'),
      L('Explain surface tension, capillarity and viscosity.','تفسير الشد السطحي والخاصية الشعرية واللزوجة.'),
      L('Use the continuity equation and Bernoulli’s principle.','استعمال معادلة الاستمرارية ومبدأ برنولي.')],
 lessons:[
  {sn:'3.1',t:'Fluid',p:'27',blocks:[
   {box:'def',label:'Definition',list:[L('<b>Fluid:</b> a material with weak cohesive forces that cannot keep a certain shape; its particles move and take the shape of their container. This fits liquids and gases.','<b>المائع:</b> مادة قوى التماسك بين جزيئاتها ضعيفة، ولا تحتفظ بشكل معين، فتتحرك دقائقها وتأخذ شكل الإناء الذي توضع فيه. ويشمل السوائل والغازات.')]},
   {box:'dyk',label:'Did you know?',list:[L('Mercury is the metal found in the liquid state at room temperature, so it is a fluid.','الزئبق هو الفلز الموجود في الحالة السائلة بدرجة حرارة الغرفة، لذلك يُعد مائعًا.')]}
  ]},
  {sn:'3.2',t:'Fluid Pressure',p:'27–29',blocks:[
   {eq:`P = ${fr('F<sub>⊥</sub>','A')}   (N/m² = Pascal)`},
   {p:L('<b>1 Pascal</b> is the pressure of a perpendicular force of 1 N on an area of 1 m².','<b>الباسكال</b> هو الضغط الناتج عن قوة عمودية مقدارها 1 N على مساحة 1 m².')},
   {p:L('At depth h the force on area A is the weight of the liquid column above it: F = ρghA. So the liquid pressure is:','عند عمق h تكون القوة على المساحة A هي وزن عمود السائل فوقها: F = ρghA. إذن ضغط السائل:')},
   {eq:'P<sub>h</sub> = ρ g h      P = P₀ + ρ g h'},
   {box:'rem',label:'Remember',list:[L('Liquids are incompressible and their molecules slide easily, so liquid pressure acts in <b>all directions</b>, upward as well as downward.','السوائل غير قابلة للانضغاط وجزيئاتها تنزلق بسهولة، لذلك يؤثر ضغط السائل في <b>جميع الاتجاهات</b>، إلى الأعلى كما إلى الأسفل.')]}
  ]},
  {sn:'3.3',t:'Measuring Atmospheric Pressure',p:'29–30',blocks:[
   {p:L('Atmospheric pressure is the weight of the air column on a unit area. Torricelli’s barometer: a 1 m glass tube full of mercury is inverted in a mercury dish. The mercury settles at <b>76 cm</b> at sea level and 0 °C, leaving an empty space at the top.','الضغط الجوي هو وزن عمود الهواء على وحدة المساحة. بارومتر تورشيلي: أنبوب زجاجي طوله 1 m مملوء بالزئبق يُنكس في حوض زئبق، فيستقر الزئبق عند <b>76 cm</b> عند مستوى سطح البحر و 0 °C، تاركًا فراغًا في أعلاه.')},
   {fig:BARO_SVG,cap:'Figures (3.5) and (3.7)'},
   {p:L('The column height changes with the height of the place above sea level.','يتغير ارتفاع العمود بتغير ارتفاع المكان عن سطح البحر.')},
   {box:'dyk',label:'Did you know?',list:[L('The blood-pressure device is a mercury manometer: normal systolic ≈ 120 mm Hg and diastolic ≈ 80 mm Hg.','جهاز قياس ضغط الدم مانومتر زئبقي: الانقباضي الطبيعي ≈ 120 mm Hg والانبساطي ≈ 80 mm Hg.')]}
  ]},
  {sn:'3.4',t:'Pascal’s Principle',p:'30–31',blocks:[
   {box:'def',label:'Pascal’s principle',list:[L('When an enclosed fluid is exposed to external pressure, that pressure is transmitted <b>equally</b> to all parts of the fluid and to the walls of its container.','عندما يتعرض مائع محصور لضغط خارجي، ينتقل ذلك الضغط <b>بالتساوي</b> إلى جميع أجزاء المائع وإلى جدران الإناء.')]},
   {eq:`${fr('F₁','A₁')} = ${fr('F₂','A₂')}   ⇒   F₂ = F₁ · ${fr('A₂','A₁')}`},
   {p:L('Applications: car brakes, presses, hydraulic hammers and lifts. Oil is used because it has very low compressibility.','التطبيقات: كوابح السيارات، والمكابس، والمطارق والروافع الهيدروليكية. ويُستعمل الزيت لأن قابليته للانضغاط قليلة جدًا.')},
   {box:'dyk',label:'Did you know?',list:[L('The liquid in presses must not freeze or become very viscous at low temperature, must not evaporate, and must not be poisonous or flammable.','يجب ألا يتجمد سائل المكابس أو يزداد لزوجة كثيرًا في درجات الحرارة المنخفضة، وألا يتبخر، وألا يكون سامًا أو قابلًا للاشتعال.')]}
  ]},
  {sn:'3.5',t:'Archimedes’ Principle',p:'31–34',blocks:[
   {box:'def',label:'Archimedes’ principle',list:[L('An object partially or totally immersed in a fluid loses from its weight an amount equal to the weight of the fluid it displaces.','الجسم المغمور كليًا أو جزئيًا في مائع يفقد من وزنه مقدارًا يساوي وزن المائع المزاح.')]},
   {eq:'F<sub>B</sub> = ρ g V = W<sub>air</sub> − W<sub>liquid</sub>'},
   {table:{h:['Case','Forces','Result'],r:[['ρ object > ρ liquid','F<sub>B</sub> < mg','sinks'],['ρ object = ρ liquid','F<sub>B</sub> = mg','suspended in equilibrium'],['ρ object < ρ liquid','F<sub>B</sub> > mg (until floating)','floats']],cap:'Figure (3.9)'}},
   {p:L('For a floating object: weight of the object = weight of displaced liquid, so (ρV)<sub>object</sub> = (ρV)<sub>immersed part in water</sub> using weight densities.','للجسم الطافي: وزن الجسم = وزن السائل المزاح، إذن (ρV) للجسم = (ρV) للجزء المغمور باستعمال الكثافات الوزنية.')}
  ]},
  {sn:'3.6',t:'Surface Tension',p:'35',blocks:[
   {p:L('Molecules inside a liquid are pulled equally in all directions. Surface molecules feel a net force inward, so the surface behaves like a thin stretched elastic membrane and tries to make its area as small as possible.','تتأثر الجزيئات داخل السائل بقوى متساوية في جميع الاتجاهات، أما جزيئات السطح فتتأثر بمحصلة نحو الداخل، فيسلك السطح كغشاء مرن رقيق مشدود ويحاول تقليل مساحته إلى أقل ما يمكن.')},
   {p:L('Examples: a needle floating on water, insects walking on water, spherical drops.','أمثلة: طفو الإبرة على الماء، وسير الحشرات على سطحه، والشكل الكروي للقطرات.')}
  ]},
  {sn:'3.7',t:'Capillary Property',p:'35–36',blocks:[
   {p:L('In a capillary tube water <b>rises</b> above the outside level, while mercury <b>falls</b> below it.','في الأنبوب الشعري <b>يرتفع</b> الماء فوق مستواه في الخارج، بينما <b>ينخفض</b> الزئبق دونه.')},
   {box:'def',label:'Cohesion and adhesion',list:[
     L('<b>Cohesive force:</b> attraction between particles of the same material (mercury–mercury).','<b>قوة التماسك:</b> التجاذب بين جزيئات المادة نفسها (زئبق–زئبق).'),
     L('<b>Adhesive force:</b> attraction between particles of different materials (water–glass).','<b>قوة التلاصق:</b> التجاذب بين جزيئات مواد مختلفة (ماء–زجاج).'),
     L('Water rises because adhesion with glass is greater than its cohesion; mercury falls because its cohesion is greater.','يرتفع الماء لأن تلاصقه مع الزجاج أكبر من تماسكه، وينخفض الزئبق لأن تماسكه أكبر.')]},
   {box:'rem',label:'Importance of capillarity',list:[L('1) Rise of underground water in soil (salt appears on the surface). 2) Rise of water in plant roots and stems. 3) Blood filtration in the kidney. 4) Rise of oil in the wick of an oil heater.','1) صعود المياه الجوفية في مسامات التربة (ظهور الأملاح على السطح). 2) صعود الماء في جذور النبات وسيقانه. 3) ترشيح الدم في الكلية. 4) صعود النفط في فتيل المدفأة.')]}
  ]},
  {sn:'3.8',t:'Dynamic Fluids — the Ideal Fluid',p:'36–37',blocks:[
   {table:{h:['Property of the ideal fluid','Meaning'],r:[['Incompressible','its density stays constant'],['Regular (steady) flow','speed at a point is constant with time'],['Non-viscous','internal friction is zero'],['Irrotational','flow lines do not cross; no eddies']],cap:'Book p. 37'}}
  ]},
  {sn:'3.9',t:'Continuity Equation',p:'37–38',blocks:[
   {box:'def',label:'Continuity',list:[L('The amount of fluid flowing through any section of the pipe per second stays constant.','كمية المائع المارة في أي مقطع من الأنبوب في الثانية تبقى ثابتة.')]},
   {eq:'A₁ v₁ = A₂ v₂'},
   {fig:PIPE_SVG,cap:'Speed is inversely proportional to the cross-section area'}
  ]},
  {sn:'3.10',t:'Bernoulli’s Equation',p:'38–39',blocks:[
   {p:L('Bernoulli (1738): the pressure of a fluid changes when its speed changes. For an ideal fluid, the sum of pressure, kinetic energy per unit volume and potential energy per unit volume is constant along the flow.','برنولي (1738): يتغير ضغط المائع بتغير سرعته. للمائع المثالي يكون مجموع الضغط والطاقة الحركية لوحدة الحجم والطاقة الكامنة لوحدة الحجم ثابتًا على طول المسار.')},
   {eq:'P + ½ρv² + ρgh = constant'},
   {box:'rem',label:'Key idea',list:[L('Where the speed is higher, the pressure is lower. Bernoulli’s principle is based on the law of conservation of energy.','حيث تكون السرعة أكبر يكون الضغط أقل. ويستند مبدأ برنولي إلى قانون حفظ الطاقة.')]}
  ]},
  {sn:'3.11',t:'Applications of Bernoulli’s Principle',p:'39–41',blocks:[
   {list:[
     L('<b>Venturi meter:</b> measures fluid speed from the pressure difference P₁ − P₂ = ρgh read on a mercury manometer.','<b>مقياس فنتوري:</b> يقيس سرعة المائع من فرق الضغط P₁ − P₂ = ρgh المقروء على مانومتر زئبقي.'),
     L('<b>Atomizer:</b> fast air over the vertical tube lowers its pressure; atmospheric pressure (P₀ > P₁) pushes the liquid up, where it breaks into fine drops. Used in car paint sprayers, insecticides, perfume and the carburettor.','<b>المرذاذ:</b> الهواء السريع فوق الأنبوب العمودي يخفض الضغط فيه، فيدفع الضغط الجوي (P₀ > P₁) السائل إلى الأعلى فيتحول إلى قطرات دقيقة. يُستعمل في مرذاذ صبغ السيارات والمبيدات والعطور والمكربن.'),
     L('<b>Aeroplane lift:</b> air moves faster over the upper surface of the wing, so the pressure below is greater, giving an upward lifting force.','<b>قوة رفع الطائرة:</b> يتحرك الهواء فوق السطح العلوي للجناح أسرع، فيكون الضغط تحته أكبر، فتنشأ قوة رفع إلى الأعلى.')]},
   {h:'Viscosity'},
   {box:'def',label:'Definition',list:[L('<b>Viscosity:</b> the friction between the layers of the fluid itself and between the fluid and the walls of its tube. It depends on 1) the type of fluid and 2) its temperature.','<b>اللزوجة:</b> قوة الاحتكاك بين طبقات المائع نفسه وبين طبقاته وجدران الأنبوب الذي يحتويه. وتعتمد على 1) نوع المائع 2) درجة حرارته.')]},
   {p:L('In liquids, viscosity <b>decreases</b> when temperature rises (weaker attraction between particles). In gases it <b>increases</b> (more collisions between particles).','في السوائل <b>تقل</b> اللزوجة بارتفاع درجة الحرارة (يضعف التجاذب بين الدقائق). وفي الغازات <b>تزداد</b> (تكثر التصادمات بين الدقائق).')},
   {box:'think',label:'Think',list:[L('Which engine oil do you advise in summer and in winter? Thicker (more viscous) oil in summer, thinner oil in winter.','أي زيت محرك تنصح به صيفًا وشتاءً؟ زيت أكثر لزوجة صيفًا، وأقل لزوجة شتاءً.')]}
  ]}
 ],
 laws:[
  {t:'Pressure',eq:`P = ${fr('F','A')}`,d:[['P','pressure (Pa = N/m²)'],['F','perpendicular force (N)'],['A','area (m²)']],use:L('Any perpendicular force on an area.','أي قوة عمودية على مساحة.')},
  {t:'Liquid pressure',eq:'P = ρ g h  ;  P<sub>total</sub> = P₀ + ρ g h',d:[['ρ','density (kg/m³)'],['g','9.8 or 10 m/s²'],['h','depth (m)'],['P₀','atmospheric pressure']],use:L('Use the g value given in the question.','استعمل قيمة g المعطاة في السؤال.'),err:L('Forgetting P₀ when the question asks for the total pressure.','نسيان P₀ عندما يطلب السؤال الضغط الكلي.')},
  {t:'Pascal (hydraulic press)',eq:`${fr('F₁','A₁')} = ${fr('F₂','A₂')}`,d:[['F₁, A₁','small piston'],['F₂, A₂','large piston']],use:L('If A₂ = 50 A₁ then F₂ = 50 F₁.','إذا كانت A₂ = 50 A₁ فإن F₂ = 50 F₁.')},
  {t:'Archimedes',eq:'F<sub>B</sub> = ρ g V = W<sub>air</sub> − W<sub>liquid</sub>',d:[['V','immersed volume (m³)'],['ρ','liquid density']],use:L('Floating: W object = ρ g V<sub>immersed</sub>.','الطافي: وزن الجسم = ρ g V للجزء المغمور.')},
  {t:'Continuity',eq:'A₁ v₁ = A₂ v₂',d:[['A','cross-section area'],['v','flow speed']],use:L('For diameters: d₁² v₁ = d₂² v₂.','للأقطار: d₁² v₁ = d₂² v₂.'),err:L('Using the diameter ratio directly instead of its square.','استعمال نسبة القطرين مباشرة بدل مربعها.')},
  {t:'Bernoulli',eq:'P + ½ρv² + ρgh = constant',d:[['P','pressure'],['½ρv²','kinetic energy per volume'],['ρgh','potential energy per volume']],use:L('Venturi: P₁ − P₂ = ρ g h (manometer).','فنتوري: P₁ − P₂ = ρ g h (المانومتر).')}
 ],
 examples:[
  {t:L('Book: find the pressure on a diver 20 m below the water surface (ρ = 1000 kg/m³).','الكتاب: احسب الضغط على غواص على عمق 20 m تحت سطح الماء (ρ = 1000 kg/m³).'),p:'29',steps:[['Law','P = ρ g h'],['Sub','1000 × 9.8 × 20']],res:'P = 196 000 N/m²'},
  {t:L('Book: what water column balances 76 cm of mercury? (ρ water 1000, ρ mercury 13 600)','الكتاب: ما طول عمود الماء الذي يعادل 76 cm من الزئبق؟'),p:'30',steps:[['Law','ρ<sub>m</sub> g h<sub>m</sub> = ρ<sub>w</sub> g h<sub>w</sub>'],['Sub','13600 × 0.76 = 1000 × h<sub>w</sub>']],res:'h<sub>w</sub> ≈ 10.33 m'},
  {t:L('Book: force needed to lift a 3000 kg car with a hydraulic lift; small cylinder 15 cm², large 2000 cm² (g = 10).','الكتاب: القوة اللازمة لرفع سيارة 3000 kg بالرافعة الهيدروليكية؛ مقطع الصغيرة 15 cm² والكبيرة 2000 cm² (g = 10).'),p:'31',steps:[['F₂','3000 × 10 = 30 000 N'],['Law','F₁ = F₂ × A₁/A₂'],['Sub','30 000 × 15 / 2000']],res:'F₁ = 225 N'},
  {t:L('Book: an object weighs 5 N in air and 4.55 N in water. Find its volume (g = 10).','الكتاب: جسم وزنه 5 N في الهواء و 4.55 N في الماء. أوجد حجمه (g = 10).'),p:'34',steps:[['F<sub>B</sub>','5 − 4.55 = 0.45 N'],['V','0.45 / (1000 × 10)']],res:'V = 0.45 × 10⁻⁴ m³'},
  {t:L('Book: a wooden cube of side 10 cm and weight density 7840 N/m³ floats on water. Find the immersed length.','الكتاب: مكعب خشبي طول ضلعه 10 cm وكثافته الوزنية 7840 N/m³ يطفو على الماء. أوجد طول الجزء المغمور.'),p:'34',steps:[['Law','(weight density × V)<sub>cube</sub> = (weight density × V)<sub>immersed</sub>'],['Sub','7840 × 0.1³ = 9800 × 0.1² × h']],res:'h = 0.08 m = 8 cm'},
  {t:L('Book: water flows in a pipe from a section of radius 2.5 cm at 2 m/s to a section of radius 1.5 cm. Find the new speed.','الكتاب: يجري الماء في أنبوب من مقطع نصف قطره 2.5 cm بسرعة 2 m/s إلى مقطع نصف قطره 1.5 cm. أوجد السرعة الجديدة.'),p:'38',steps:[['Law','v₂ = v₁ × A₁/A₂ = v₁ (r₁/r₂)²'],['Sub','2 × (2.5/1.5)²']],res:'v₂ ≈ 5.55 m/s'},
  {t:L('Book: Venturi meter — the manometer level difference is 0.075 m of mercury. Find P₁ − P₂.','الكتاب: مقياس فنتوري — فرق مستوى الزئبق في المانومتر 0.075 m. أوجد P₁ − P₂.'),p:'39',steps:[['Law','P₁ − P₂ = ρ g h'],['Sub','13600 × 9.8 × 0.075']],res:'≈ 9.996 × 10³ N/m²'}
 ],
 quiz:[
  {ty:'mcq',k:'MCQ',q:L('The unit N/m² is called:','الوحدة N/m² تُسمى:'),o:['joule','pascal','watt','newton'],a:1,x:L('1 Pa = 1 N/m².','1 Pa = 1 N/m².')},
  {ty:'mcq',k:'MCQ',q:L('At sea level and 0 °C, the mercury column of a barometer is:','عند مستوى سطح البحر و 0 °C يكون عمود الزئبق في البارومتر:'),o:['76 mm','76 cm','10.33 m','1 m'],a:1,x:L('76 cm Hg.','76 cm زئبق.')},
  {ty:'mcq',k:'MCQ',q:L('The pressure applied to an enclosed fluid is transmitted equally according to:','ينتقل الضغط المسلط على مائع محصور بالتساوي حسب:'),o:['Archimedes','Pascal','Bernoulli','continuity'],a:1,x:L('Pascal’s principle.','مبدأ باسكال.')},
  {ty:'mcq',k:'MCQ',q:L('Oil is used in hydraulic lifts because it:','يُستعمل الزيت في الروافع الهيدروليكية لأنه:'),o:['is cheap','has very low compressibility','is heavy','evaporates fast'],a:1,x:L('Book p. 30.','الكتاب صفحة 30.')},
  {ty:'mcq',k:'MCQ',q:L('The weight loss of an immersed object depends on its:','النقص في وزن الجسم المغمور يعتمد على:'),o:['mass','shape','volume','colour'],a:2,x:L('F<sub>B</sub> = ρgV.','F<sub>B</sub> = ρgV.')},
  {ty:'mcq',k:'MCQ',q:L('An object whose density equals the liquid’s density:','جسم كثافته تساوي كثافة السائل:'),o:['floats','sinks','stays suspended in equilibrium','jumps out'],a:2,x:L('F<sub>B</sub> = mg.','F<sub>B</sub> = mg.')},
  {ty:'mcq',k:'MCQ',q:L('Water rises in a glass capillary tube because:','يرتفع الماء في الأنبوب الشعري الزجاجي لأن:'),o:['cohesion > adhesion','adhesion > cohesion','gravity is weak there','the tube is hot'],a:1,x:L('Adhesion of water to glass dominates.','تلاصق الماء بالزجاج هو الغالب.')},
  {ty:'mcq',k:'MCQ',q:L('Mercury in a capillary glass tube:','الزئبق في الأنبوب الشعري الزجاجي:'),o:['rises','falls','stays level','boils'],a:1,x:L('Its cohesion is greater than its adhesion to glass.','تماسكه أكبر من تلاصقه بالزجاج.')},
  {ty:'mcq',k:'MCQ',q:L('If the diameter of a pipe is halved, the flow speed becomes:','إذا نقص قطر الأنبوب إلى النصف، تصبح سرعة الجريان:'),o:['half','double','four times','the same'],a:2,x:L('A ∝ d², so A becomes ¼ and v ×4.','A ∝ d²، فتصبح A الربع و v أربعة أمثال.')},
  {ty:'mcq',k:'MCQ',q:L('Where a fluid moves faster, its pressure is:','حيث يتحرك المائع أسرع يكون ضغطه:'),o:['higher','lower','the same','zero'],a:1,x:L('Bernoulli.','برنولي.')},
  {ty:'mcq',k:'MCQ',q:L('Bernoulli’s principle is based on:','يستند مبدأ برنولي إلى:'),o:['Pascal’s principle','energy conservation','Archimedes','capillarity'],a:1,x:L('Conservation of energy.','حفظ الطاقة.')},
  {ty:'mcq',k:'MCQ',q:L('Which does NOT depend on the Bernoulli effect?','أيها لا يعتمد على تأثير برنولي؟'),o:['atomizer','aeroplane wing','hydraulic press','Venturi meter'],a:2,x:L('The press works by Pascal’s principle.','المكبس يعمل بمبدأ باسكال.')},
  {ty:'mcq',k:'MCQ',q:L('When a liquid is heated, its viscosity:','عند تسخين السائل فإن لزوجته:'),o:['increases','decreases','does not change','becomes infinite'],a:1,x:L('Attraction between particles weakens.','يضعف التجاذب بين الدقائق.')},
  {ty:'mcq',k:'MCQ',q:L('When a gas is heated, its viscosity:','عند تسخين الغاز فإن لزوجته:'),o:['increases','decreases','does not change','becomes zero'],a:0,x:L('More collisions between particles.','تكثر التصادمات بين الدقائق.')},
  {ty:'mcq',k:'MCQ',q:L('To describe the regular flow of a fluid we need its:','لوصف الجريان المنتظم لمائع نحتاج معرفة:'),o:['density, weight, pressure','density and speed only','density, volume, pressure','pressure, density and flow speed'],a:3,x:L('Book Q1-13.','سؤال الكتاب 1-13.')},
  {ty:'tf',k:'True/False',q:L('Liquid pressure acts downward only.','ضغط السائل يؤثر نحو الأسفل فقط.'),a:false,x:L('False → in <b>all directions</b>.','خطأ ← في <b>جميع الاتجاهات</b>.')},
  {ty:'tf',k:'True/False',q:L('The ideal fluid has zero viscosity.','المائع المثالي لزوجته صفر.'),a:true,x:L('True — non-viscous.','صح — غير لزج.')},
  {ty:'tf',k:'True/False',q:L('Surface tension makes a liquid surface try to increase its area.','الشد السطحي يجعل سطح السائل يحاول زيادة مساحته.'),a:false,x:L('False → to <b>decrease</b> its area as much as possible.','خطأ ← <b>تقليل</b> مساحته إلى أقل ما يمكن.')},
  {ty:'tf',k:'True/False',q:L('The atmospheric pressure balances the mercury column in the barometer.','الضغط الجوي يوازن عمود الزئبق في البارومتر.'),a:true,x:L('True.','صح.')},
  {ty:'tf',k:'True/False',q:L('An object denser than a liquid floats on it.','الجسم الأكبر كثافة من السائل يطفو عليه.'),a:false,x:L('False → it <b>sinks</b>.','خطأ ← <b>يغطس</b>.')},
  {ty:'open',k:'Define',q:L('Define: Pascal’s principle.','عرّف: مبدأ باسكال.'),x:L('When an enclosed fluid is exposed to external pressure, the pressure is transmitted equally to all parts of the fluid and the container walls.','عندما يتعرض مائع محصور لضغط خارجي ينتقل الضغط بالتساوي إلى جميع أجزاء المائع وجدران الإناء.')},
  {ty:'open',k:'Define',q:L('Define: Archimedes’ principle.','عرّف: مبدأ أرخميدس.'),x:L('An object immersed partially or totally in a fluid loses from its weight an amount equal to the weight of the displaced fluid.','الجسم المغمور جزئيًا أو كليًا في مائع يفقد من وزنه مقدارًا يساوي وزن المائع المزاح.')},
  {ty:'open',k:'Define',q:L('Define: Viscosity. What does it depend on?','عرّف: اللزوجة. وعلامَ تعتمد؟'),x:L('Friction between the fluid layers and between the fluid and its tube walls. It depends on the fluid type and its temperature.','الاحتكاك بين طبقات المائع وبينها وبين جدران الأنبوب. تعتمد على نوع المائع ودرجة حرارته.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: a razor blade can rest on still water.','علّل: يمكن وضع شفرة حلاقة على سطح ماء ساكن دون أن تغطس.'),x:L('Surface tension makes the surface act like a stretched elastic membrane that supports the blade.','الشد السطحي يجعل السطح كغشاء مرن مشدود يحمل الشفرة.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: aluminium roofs fly off during hurricanes.','علّل: تطير السقوف المصنوعة من الألمنيوم أثناء الأعاصير.'),x:L('Fast wind over the roof lowers the pressure above it (Bernoulli); the higher pressure under the roof pushes it up.','الريح السريعة فوق السقف تخفض الضغط فوقه (برنولي)، والضغط الأكبر تحته يدفعه إلى الأعلى.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: a barefoot swimmer feels less pain on a rough beach as he goes deeper.','علّل: يقل ألم السباح الحافي على الشاطئ الخشن كلما تعمق في الماء.'),x:L('The immersed volume increases, so the buoyant force increases and his apparent weight on his feet decreases.','يزداد الحجم المغمور فتزداد قوة الطفو ويقل وزنه الظاهري على قدميه.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: liquid surfaces touching capillary tube walls are curved.','علّل: تقعّر سطوح السوائل الملامسة لجدران الأنابيب الشعرية.'),x:L('Because of the difference between adhesive forces (liquid–glass) and cohesive forces (liquid–liquid).','بسبب الفرق بين قوى التلاصق (سائل–زجاج) وقوى التماسك (سائل–سائل).')},
  {ty:'open',k:'Problem · easy',q:L('Find the pressure at the bottom of a pool 5 m deep (ρ = 1000, g = 9.8).','احسب الضغط في قاع مسبح عمقه 5 m.'),x:L('P = 1000 × 9.8 × 5 = <b>49 000 N/m²</b>','P = 1000 × 9.8 × 5 = <b>49 000 N/m²</b>')},
  {ty:'open',k:'Problem · medium',q:L('A person totally immersed in water is about to float. His weight is 600 N. Find his volume (g = 10).','شخص مغمور كليًا في الماء على وشك الطفو، وزنه 600 N. أوجد حجمه (g = 10).'),x:L('F<sub>B</sub> = W ⇒ V = 600/(1000 × 10) = <b>0.06 m³</b>','F<sub>B</sub> = W ⇒ V = 600/(1000 × 10) = <b>0.06 m³</b>')},
  {ty:'open',k:'Problem · medium',q:L('A barometer reads 75 cm Hg. Find the atmospheric pressure (ρ = 13 600, g = 9.8).','قراءة البارومتر 75 cm زئبق. احسب الضغط الجوي.'),x:L('P = 13600 × 9.8 × 0.75 = <b>99 960 Pa</b>','P = 13600 × 9.8 × 0.75 = <b>99 960 Pa</b>')},
  {ty:'open',k:'Problem · hard',q:L('Water speed rises from 1.2 m/s to 6 m/s in a narrowing pipe. Find the ratio of the diameters.','تزداد سرعة الماء من 1.2 m/s إلى 6 m/s في أنبوب يضيق. أوجد نسبة القطرين.'),x:L('A₁/A₂ = 6/1.2 = 5 ⇒ d₁/d₂ = √5 ≈ <b>2.24</b> (the area ratio is 5)','A₁/A₂ = 6/1.2 = 5 ⇒ d₁/d₂ = √5 ≈ <b>2.24</b> (نسبة المساحتين 5)')}
 ],
 exam:[
  {m:12,q:L('Hydraulic press: the big piston area is 60 times the small one; the force on the big piston is 7200 N. Find the force on the small one.','مكبس هيدروليكي مساحة الكبير 60 مرة الصغير، والقوة على الكبير 7200 N. أوجد القوة على الصغير.'),steps:[['Law','F₁ = F₂ A₁/A₂'],['Sub','7200/60']],res:'F₁ = 120 N'},
  {m:12,q:L('A solid weighs 40 N in air and 35 N in water. Find its volume and its density (g = 10).','جسم صلب وزنه 40 N في الهواء و 35 N في الماء. أوجد حجمه وكثافته (g = 10).'),steps:[['F<sub>B</sub>','40 − 35 = 5 N'],['V','5 / 10⁴ = 5 × 10⁻⁴ m³'],['m','40/10 = 4 kg'],['ρ','4 / 5 × 10⁻⁴']],res:'V = 5 × 10⁻⁴ m³ ; ρ = 8000 kg/m³'},
  {m:12,q:L('A rectangular fish pool 20 m × 12 m holds water 5 m deep. Find (a) the pressure on its base (b) the force on the base (g = 9.8).','حوض أسماك مستطيل 20 m × 12 m وعمق الماء فيه 5 m. احسب (أ) الضغط على القاعدة (ب) القوة على القاعدة.'),steps:[['P','1000 × 9.8 × 5 = 49 000 N/m²'],['A','20 × 12 = 240 m²'],['F','49 000 × 240']],res:'P = 4.9 × 10⁴ Pa ; F = 1.176 × 10⁷ N'},
  {m:10,q:L('Water flows at 1.6 m/s in the big section and 3.6 m/s in the small section. Find the ratio of the diameters.','يجري الماء بسرعة 1.6 m/s في المقطع الكبير و 3.6 m/s في الصغير. أوجد نسبة القطرين.'),steps:[['Law','d₁² v₁ = d₂² v₂'],['Ratio','√(3.6/1.6) = 1.5']],res:'d₁ : d₂ = 3 : 2'},
  {m:10,q:L('A wooden cube of side 20 cm and weight density 6000 N/m³ floats on water (weight density 9800 N/m³). Find the immersed depth.','مكعب خشبي ضلعه 20 cm وكثافته الوزنية 6000 N/m³ يطفو على الماء (الكثافة الوزنية 9800). أوجد عمق الجزء المغمور.'),steps:[['Law','6000 × 0.2³ = 9800 × 0.2² × h'],['h','6000 × 0.2 / 9800']],res:'h ≈ 0.122 m ≈ 12.2 cm'},
  {m:8,q:L('Mention the properties of the ideal fluid.','اذكر خواص المائع المثالي.'),steps:[['1','incompressible'],['2','regular (steady) flow'],['3','non-viscous'],['4','irrotational (no eddies)']],res:'4 properties'},
  {m:8,q:L('What is the importance of capillarity?','ما أهمية الخاصية الشعرية؟'),steps:[['1','rise of underground water in soil'],['2','rise of water in plants'],['3','blood filtration in kidneys'],['4','oil rising in a heater wick']],res:'4 applications'},
  {m:8,q:L('Where can the atomizer be used, and how does it work?','أين يُستعمل المرذاذ، وكيف يعمل؟'),steps:[['Work','fast air lowers pressure above the tube; P₀ pushes the liquid up and it breaks into drops'],['Uses','car paint, insecticides, perfume, carburettor']],res:'Bernoulli’s principle'}
 ],
 book:{p:'42–44',mcq:[
  {q:'A horizontal tube narrows from 10 cm to 5 cm in diameter. Which is true?',ar:'أنبوب أفقي يقل قطره من 10 إلى 5 cm. أي العبارات صحيحة؟',o:['speed and pressure increase','speed and pressure decrease','speed increases and pressure decreases','speed decreases and pressure increases'],a:2},
  {q:'Pressure on an enclosed fluid moves in all directions without decrease according to:',ar:'الضغط على مائع محصور ينتقل في جميع الاتجاهات دون نقصان حسب:',o:['Archimedes’ principle','Pascal’s principle','Bernoulli effect','continuity equation'],a:1},
  {q:'The weight loss of an object immersed in a liquid depends on:',ar:'النقص في وزن الجسم المغمور في سائل يعتمد على:',o:['mass of the object','weight of the object','shape of the object','volume of the object'],a:3},
  {q:'Bernoulli’s principle is based on:',ar:'يستند مبدأ برنولي إلى:',o:['energy conservation law','Archimedes’ principle','Pascal’s principle','capillary tubes'],a:0},
  {q:'Gases and liquids flow because of:',ar:'تنساب الغازات والسوائل بسبب:',o:['high internal friction','big distance between particles','big particle forces','low internal friction between particles'],a:3},
  {q:'The upward force of fluids on immersed objects is called:',ar:'القوة التي يرفع بها المائع الأجسام المغمورة فيه تُسمى:',o:['buoyant force','gravitational force','frictional force','compressing force'],a:0},
  {q:'Which application does NOT depend on the Bernoulli effect?',ar:'أي تطبيق لا يعتمد على تأثير برنولي؟',o:['sailing boat','aeroplane','hydraulic press','atomizer'],a:2},
  {q:'A pool 100 m × 20 m with water 5 m deep. The pressure on its base is:',ar:'مسبح 100 m × 20 m وارتفاع الماء 5 m. الضغط على قاعه:',o:['98 × 10² N/m²','95 × 10⁶ N/m²','49 × 10⁶ N/m²','49 × 10³ N/m²'],a:3},
  {q:'An object of weight mg is suspended in equilibrium inside a liquid. Then F<sub>B</sub>:',ar:'جسم وزنه mg معلق في حالة اتزان داخل سائل. إذن F<sub>B</sub>:',o:['> mg','= mg','< mg','= 2mg'],a:1},
  {q:'To describe the regular flow of a fluid we need to know:',ar:'لوصف الجريان المنتظم لمائع نحتاج معرفة:',o:['density, weight, pressure','density and speed only','density, volume, pressure','pressure, density and flow speed'],a:3},
  {q:'An object denser than the liquid is:',ar:'جسم كثافته أكبر من كثافة السائل:',o:['floating on the surface','fully immersed (sinks)','suspended in equilibrium','partially immersed'],a:1}
 ],
 openTitle:'Q2 · Give reasons',
 open:[
  [L('1. A razor can be placed on still water without sinking.','1. يمكن وضع شفرة حلاقة على سطح ماء ساكن دون أن تغطس.'),L('Surface tension: the surface acts like a stretched elastic membrane.','الشد السطحي: يسلك السطح كغشاء مرن مشدود.')],
  [L('2. A swimming shirt sticks to the body out of the water but not inside it.','2. يلتصق قميص السباحة بالجسم خارج الماء ولا يلتصق داخله.'),L('Out of the water, a thin water film between shirt and skin has a free surface whose tension and adhesion pull them together. Inside the water there is no free surface.','خارج الماء تتكون طبقة ماء رقيقة بين القميص والجلد لها سطح حر، فيجذبهما الشد السطحي والتلاصق. داخل الماء لا يوجد سطح حر.')],
  [L('3. Pressing the inside of a tent with a finger in rain lets water through at that point.','3. عند الضغط على السطح الداخلي للخيمة بالإصبع أثناء المطر ينفذ الماء من تلك النقطة.'),L('The finger breaks the surface-tension film over the fabric pores, so water passes by capillarity.','الإصبع يكسر غشاء الشد السطحي فوق مسامات القماش، فينفذ الماء بالخاصية الشعرية.')],
  [L('4. A wet towel absorbs water from the skin faster than a dry one.','4. المنشفة المبللة تمتص الماء من الجلد أسرع من الجافة.'),L('Water in the towel attracts water on the skin by cohesion, in addition to capillarity in the fibres.','الماء في المنشفة يجذب الماء على الجلد بقوى التماسك، إضافة إلى الخاصية الشعرية في الألياف.')],
  [L('5. Liquid surfaces touching capillary walls are curved.','5. تقعّر سطوح السوائل الملامسة لجدران الأنابيب الشعرية.'),L('The difference between adhesive and cohesive forces.','الفرق بين قوى التلاصق وقوى التماسك.')],
  [L('6. Aluminium roofs fly during hurricanes.','6. تطاير سقوف الألمنيوم أثناء الأعاصير.'),L('Fast air above lowers the pressure (Bernoulli); greater pressure below pushes the roof up.','الهواء السريع فوق السقف يخفض الضغط (برنولي)، والضغط الأكبر تحته يدفعه إلى الأعلى.')],
  [L('7. A barefoot swimmer’s pain on a rough beach decreases as he goes deeper.','7. يقل ألم السباح الحافي على الشاطئ الخشن كلما تعمق.'),L('The buoyant force grows with the immersed volume, reducing his apparent weight.','تزداد قوة الطفو بازدياد الحجم المغمور فيقل وزنه الظاهري.')]
 ],
 probs:[
  {q:L('P1. A fish pool 20 m × 12 m with water 5 m deep. Find (a) the pressure on its base (b) the force on the base.','م1. حوض أسماك 20 m × 12 m وعمق الماء 5 m. احسب (أ) الضغط على القاعدة (ب) القوة.'),steps:[['P','1000 × 9.8 × 5 = 49 000 N/m²'],['F','49 000 × (20 × 12)']],res:'49 000 N/m² ; 1176 × 10⁴ N'},
  {q:L('P2. A mercury barometer reads 75 cm. Find the atmospheric pressure in pascal.','م2. قراءة بارومتر زئبقي 75 cm. أوجد الضغط الجوي بالباسكال.'),steps:[['Law','P = ρ g h'],['Sub','13600 × 9.8 × 0.75']],res:'P = 99 960 Pa'},
  {q:L('P3. Hydraulic press: big piston area = 50 × small; force on big = 6000 N. Find the force on the small piston.','م3. مكبس هيدروليكي مساحة الكبير 50 مرة الصغير والقوة على الكبير 6000 N. احسب القوة على الصغير.'),steps:[['Sub','6000/50']],res:'F₁ = 120 N'},
  {q:L('P4. A person totally immersed in water is about to float; weight 600 N. Find the volume (g = 10).','م4. شخص مغمور كليًا على وشك الطفو، وزنه 600 N. احسب حجمه (g = 10).'),steps:[['Law','W = ρ g V'],['Sub','600/(1000 × 10)']],res:'V = 0.06 m³'},
  {q:L('P5. A solid weighs 20 N in air and 15 N in water. Find its volume.','م5. جسم صلب وزنه 20 N في الهواء و 15 N في الماء. احسب حجمه.'),steps:[['F<sub>B</sub>','5 N'],['V','5/(1000 × 10)']],res:'V = 5 × 10⁻⁴ m³'},
  {q:L('P6. Water speed is 1.2 m/s in the big section and 6 m/s in the small section. Find the ratio between the two diameters.','م6. سرعة الماء 1.2 m/s في المقطع الكبير و 6 m/s في الصغير. احسب النسبة بين القطرين.'),steps:[['Areas','A₁/A₂ = v₂/v₁ = 6/1.2 = 5'],['Diameters','d₁/d₂ = √5']],res:'area ratio 5 ; diameter ratio √5 ≈ 2.24',tip:L('The book’s answer “5” is the ratio of the areas. The ratio of the diameters is √5.','جواب الكتاب "5" هو نسبة المساحتين. أما نسبة القطرين فهي √5.')}
 ]},
 summary:[
  L('Fluid: weak cohesion, takes the shape of its container (liquids and gases).','المائع: تماسك ضعيف، ويأخذ شكل إنائه (السوائل والغازات).'),
  L('P = F/A (Pa); liquid pressure P = ρgh, total P = P₀ + ρgh, in all directions.','P = F/A بالباسكال؛ ضغط السائل ρgh والكلي P₀ + ρgh، وفي جميع الاتجاهات.'),
  L('Barometer: 76 cm Hg at sea level and 0 °C.','البارومتر: 76 cm زئبق عند مستوى سطح البحر و 0 °C.'),
  L('Pascal: F₁/A₁ = F₂/A₂ (presses, brakes, lifts).','باسكال: F₁/A₁ = F₂/A₂ (المكابس، الكوابح، الروافع).'),
  L('Archimedes: F<sub>B</sub> = ρgV = W<sub>air</sub> − W<sub>liquid</sub>; sink, suspend or float by density.','أرخميدس: F<sub>B</sub> = ρgV = الوزن في الهواء − الوزن في السائل؛ يغطس أو يعلق أو يطفو حسب الكثافة.'),
  L('Surface tension and capillarity come from cohesion and adhesion.','الشد السطحي والخاصية الشعرية ينتجان عن التماسك والتلاصق.'),
  L('Continuity A₁v₁ = A₂v₂; Bernoulli P + ½ρv² + ρgh = constant (faster ⇒ lower pressure).','الاستمرارية A₁v₁ = A₂v₂؛ برنولي P + ½ρv² + ρgh = ثابت (أسرع ⇒ ضغط أقل).'),
  L('Viscosity: liquids ↓ with temperature, gases ↑.','اللزوجة: تقل في السوائل بالتسخين وتزداد في الغازات.')
 ],
 extra:{t:'Densities used in problems',items:[['Water','1000 kg/m³'],['Mercury','13 600 kg/m³'],['Weight density of water','9800 N/m³'],['1 cm²','10⁻⁴ m²']]}
};

(window.XL=window.XL||[]).push({ch:3,t:'Floating, suspended or sinking?',d:L('Choose the object’s density and the liquid. See the forces and how much of the object is under the surface.','اختر كثافة الجسم والسائل، وشاهد القوى ونسبة الجزء المغمور من الجسم.'),
 html:`<div class="calc"><label>Object density (kg/m³)<input id="aR" type="range" min="200" max="15000" step="100" value="800"></label>
  <label>Liquid<select id="aL"><option value="1000">Water 1000</option><option value="13600">Mercury 13 600</option><option value="800">Oil 800</option></select></label>
  <label>Object volume (cm³)<input id="aV" type="number" value="1000"></label></div>
  <div class="lab-grid" style="margin-top:10px"><svg id="aSvg" viewBox="0 0 200 200" style="width:100%;max-width:200px;background:var(--paper);border-radius:8px"></svg><div id="aOut"></div></div>`,
 init(){const d=()=>{const ro=+$('#aR').value,rl=+$('#aL').value,V=+$('#aV').value*1e-6,g=10;const W=ro*V*g;let frac=Math.min(1,ro/rl),state=ro<rl?'floats':ro===rl?'suspended':'sinks';const Fb=rl*g*V*frac;
  const y=state==='sinks'?140:state==='suspended'?100:80+ (frac*60);const top=y-60*frac;
  $('#aSvg').innerHTML=`<rect x="0" y="80" width="200" height="120" fill="var(--c3)" opacity=".25"/><line x1="0" y1="80" x2="200" y2="80" stroke="var(--c3)"/><rect x="70" y="${state==='floats'?80-60*(1-frac):state==='sinks'?138:70}" width="60" height="60" fill="var(--amber)" opacity=".85" stroke="var(--ink)"/>`;
  $('#aOut').innerHTML=steps([['W','ρ<sub>obj</sub> g V = '+sci(W)+' N'],['F<sub>B</sub> max','ρ<sub>liq</sub> g V = '+sci(rl*g*V)+' N'],['Compare',ro+' vs '+rl+' kg/m³']])+`<div class="res">✓ The object ${state}${state==='floats'?` — ${(frac*100).toFixed(0)}% under the surface`:''}</div>`;};
  ['aR','aL','aV'].forEach(i=>$('#'+i).oninput=d);d();}});
(window.XL=window.XL||[]).push({ch:3,t:'Hydraulic press',d:L('Change the piston areas and the force on the small piston; the press multiplies the force by A₂/A₁.','غيّر مساحتي المكبسين والقوة على الصغير، فالمكبس يضاعف القوة بالنسبة A₂/A₁.'),
 html:`<div class="calc"><label>F₁ (N)<input id="hF" type="number" value="225"></label><label>A₁ (cm²)<input id="hA1" type="number" value="15"></label><label>A₂ (cm²)<input id="hA2" type="number" value="2000"></label></div><div id="hOut" style="margin-top:10px"></div>`,
 init(){const d=()=>{const F1=+$('#hF').value,A1=+$('#hA1').value,A2=+$('#hA2').value;const F2=F1*A2/A1;$('#hOut').innerHTML=steps([['Law',`F₂ = F₁ × ${fr('A₂','A₁')}`],['Sub',`${F1} × ${A2}/${A1}`]])+`<div class="res">✓ F₂ = ${sci(F2)} N · lifts a mass of ${sci(F2/10)} kg (g = 10)</div>`};['hF','hA1','hA2'].forEach(i=>$('#'+i).oninput=d);d();}});

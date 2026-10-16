/* ---------- Chapter 2 content ---------- */
const SPRING_SVG=`<svg viewBox="0 0 520 210" role="img" aria-label="Spring stretched by weights"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<rect x="20" y="14" width="480" height="8" fill="var(--ink)"/>
${[0,1,2].map(i=>{const x=90+i*170,len=[60,90,120][i];let p=`M${x} 22`;const coils=10;for(let k=0;k<coils;k++){const y=22+8+k*(len/coils);p+=` L${x+(k%2?-10:10)} ${y}`}p+=` L${x} ${30+len}`;return `<path d="M${x} 22 v8" stroke="var(--ink)" stroke-width="2"/><path d="${p}" fill="none" stroke="var(--c2)" stroke-width="2"/>`+(i?`<rect x="${x-14}" y="${32+len}" width="28" height="${16+i*6}" rx="3" fill="var(--ink)"/><text x="${x}" y="${32+len+(16+i*6)+16}" text-anchor="middle">F = ${(i*0.1).toFixed(1)} N</text>`:`<text x="${x}" y="${30+len+18}" text-anchor="middle">F = 0 N</text>`)+`<path d="M${x+30} 22 V${30+len}" stroke="var(--accent)" stroke-dasharray="3 3"/><text x="${x+36}" y="${26+len/2+16}" fill="var(--accent)">${['L₀','L₀+0.3 cm','L₀+0.6 cm'][i]}</text>`}).join('')}
</g></svg>`;
const STRESS_SVG=`<svg viewBox="0 0 520 240" role="img" aria-label="Stress–strain curve"><g font-family="IBM Plex Mono, monospace" font-size="11">
<path d="M50 200 H490 M50 200 V20" stroke="var(--muted)" fill="none"/>
<text x="490" y="218" text-anchor="end" fill="var(--muted)">Strain</text><text x="56" y="28" fill="var(--muted)">Stress</text>
<path d="M50 200 L170 90" stroke="var(--accent)" stroke-width="3" fill="none"/>
<path d="M170 90 C210 70 260 58 320 52 C370 48 400 54 430 80" stroke="var(--c2)" stroke-width="3" fill="none"/>
<circle cx="170" cy="90" r="5" fill="var(--amber)"/><text x="150" y="80" text-anchor="end" fill="var(--amber)">Elasticity limit</text>
<circle cx="325" cy="52" r="4" fill="var(--ink)"/><text x="325" y="42" text-anchor="middle" fill="var(--ink)">greatest force</text>
<path d="M430 80 l8 8 m-8 0 l8 -8" stroke="var(--bad)" stroke-width="2"/><text x="446" y="92" fill="var(--bad)">break</text>
<text x="70" y="182" fill="var(--accent)">elastic region</text><text x="70" y="196" fill="var(--accent)">(Hooke’s law, linear)</text>
<text x="250" y="120" fill="var(--c2)">plastic deformation</text><text x="250" y="134" fill="var(--c2)">(non-linear)</text>
</g></svg>`;
const STRESSTYPES_SVG=`<svg viewBox="0 0 520 150" role="img" aria-label="Tensile, compressive and shear stress"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--c2)"/></marker></defs>
<rect x="55" y="45" width="70" height="50" fill="var(--accent-soft)" stroke="var(--accent)"/><path d="M55 70 H15 M125 70 H165" stroke="var(--c2)" stroke-width="2.5" marker-end="url(#ah)"/><text x="90" y="125" text-anchor="middle">Tensile</text>
<rect x="225" y="45" width="70" height="50" fill="var(--accent-soft)" stroke="var(--accent)"/><path d="M190 70 H222 M330 70 H298" stroke="var(--c2)" stroke-width="2.5" marker-end="url(#ah)"/><text x="260" y="125" text-anchor="middle">Compressive</text>
<path d="M395 95 H465 L485 45 H415 Z" fill="var(--accent-soft)" stroke="var(--accent)"/><path d="M420 38 H495" stroke="var(--c2)" stroke-width="2.5" marker-end="url(#ah)"/><path d="M465 104 H385" stroke="var(--c2)" stroke-width="2.5" marker-end="url(#ah)"/><text x="440" y="125" text-anchor="middle">Shear (θ)</text>
</g></svg>`;

const C2={
 obj:[
  L('Explain why a solid returns to its original shape after a deforming force is removed.','تفسير سبب عودة الجسم الصلب إلى شكله الأصلي بعد زوال القوة المشوِّهة.'),
  L('State Hooke’s law and use F = kΔL to find the spring constant.','ذكر نص قانون هوك واستعمال العلاقة F = kΔL لإيجاد ثابت مرونة النابض.'),
  L('Distinguish between the types of stress and the types of strain.','التمييز بين أنواع الإجهاد وأنواع المطاوعة.'),
  L('Calculate Young modulus, stress, strain and elongation of a wire.','حساب معامل يونك والإجهاد والمطاوعة ومقدار الاستطالة في سلك.'),
  L('Describe the mechanical properties of solids and compare elastic and plastic deformation.','وصف الخواص الميكانيكية للمواد الصلبة والمقارنة بين التشوه المرن والتشوه اللدن.')
 ],
 lessons:[
  {sn:'Intro',t:'Introduction',p:'15',blocks:[
   {p:L('The mechanical properties of a material depend on its behaviour when external forces act on it. Matter has three states — solid, liquid and gas — plus a fourth state called <b>plasma</b>.','تعتمد الخواص الميكانيكية للمادة على سلوكها عند تأثير قوى خارجية فيها. للمادة ثلاث حالات: صلبة وسائلة وغازية، إضافة إلى حالة رابعة تُسمى <b>البلازما</b>.')},
   {p:L('Gases keep neither their shape nor their volume. Liquids keep their volume but not their shape. External forces cause <b>deformation</b> in solids, meaning their shape changes.','الغازات لا تحتفظ بشكلها ولا بحجمها. والسوائل تحتفظ بحجمها لا بشكلها. أما المواد الصلبة فتسبب القوى الخارجية فيها <b>تشوهًا</b>، أي يتغير شكلها.')},
   {box:'def',label:'Factors of deformation',list:[
     L('1. The magnitude of the external force acting on the object.','1. مقدار القوة الخارجية المؤثرة في الجسم.'),
     L('2. The dimensions of the material.','2. أبعاد المادة.'),
     L('3. The material it is made of.','3. نوع المادة المصنوع منها الجسم.')]},
   {p:L('Studying mechanical properties led to new industrial materials such as synthetic fibre, which bears high stress despite its light weight. Applications include aircraft wings, gas cans, tyres, sports equipment, rockets and fuel tanks.','أدت دراسة الخواص الميكانيكية إلى صنع مواد صناعية جديدة، مثل الألياف الصناعية التي تتحمل إجهادًا كبيرًا رغم خفة وزنها. ومن تطبيقاتها: أجنحة الطائرات، وعلب الغاز المضغوط، والإطارات، والأدوات الرياضية، والصواريخ، وخزانات الوقود.')}
  ]},
  {sn:'2.1',t:'Elasticity Concept and Hooke’s Law',p:'16–18',blocks:[
   {p:L('If you pull a rubber rope from both ends it resists, but it stretches. When you let go it returns to its original length. A steel wire with a weight hung on it also stretches slightly, then returns when the weight is removed.','إذا سحبت حبلًا مطاطيًا من طرفيه فإنه يقاوم، لكنه يستطيل. وعندما تتركه يعود إلى طوله الأصلي. وكذلك السلك الفولاذي المعلق به ثقل يستطيل قليلًا، ثم يعود عند إزالة الثقل.')},
   {p:L('<b>Explanation:</b> the wire resists the external force by the <b>molecular attraction forces</b> between its molecules. These forces appear when the shape or length changes, and they restore the object to its original state once the force is gone.','<b>التفسير:</b> يقاوم السلك القوة الخارجية بواسطة <b>قوى التجاذب الجزيئية</b> بين جزيئاته. تظهر هذه القوى عند تغير الشكل أو الطول، وتعيد الجسم إلى حالته الأصلية بعد زوال القوة.')},
   {p:L('Gases and liquids also resist a change in volume when compressed (liquids resist more), and return to their original volume when the pressure is removed.','كذلك تقاوم الغازات والسوائل تغير حجمها عند ضغطها (والسوائل تقاوم أكثر)، وتعود إلى حجمها الأصلي عند زوال الضغط.')},
   {box:'act',label:'Activity — Elasticity concept',list:[
     L('Tools: a spring, equal weights of 0.1 N each, an iron hanger, a graduated ruler, paper.','الأدوات: نابض، أثقال متساوية كل منها 0.1 N، حامل حديدي، مسطرة مدرجة، ورقة.'),
     L('Hang the spring vertically and mark its last ring on the paper.','علّق النابض شاقوليًا وضع علامة عند آخر حلقة منه على الورقة.'),
     L('Hang 0.1 N and record the increase in length. Add another 0.1 N: the increase doubles.','علّق ثقلًا 0.1 N وسجّل الزيادة في الطول. أضف ثقلًا آخر 0.1 N فتتضاعف الزيادة.'),
     L('Repeat with more weights and plot force against stretching.','كرّر بأثقال أخرى وارسم العلاقة بين القوة والاستطالة.')]},
   {fig:SPRING_SVG,cap:'Figure (2.3) — each 0.1 N adds 0.3 cm (book Table 1)'},
   {table:{h:['Force F (N)','ΔL (× 10⁻² m)'],r:[['0','0'],['0.1','0.3'],['0.2','0.6'],['0.3','0.9'],['0.4','1.2']],cap:'Table (1), Book p. 17'}},
   {p:L('The graph is a straight line through the origin. <b>The increase in spring length is directly proportional to the tensile force, within the limits of elasticity.</b>','الرسم البياني خط مستقيم يمر بنقطة الأصل. <b>الزيادة في طول النابض تتناسب طرديًا مع قوة الشد، ضمن حدود المرونة.</b>')},
   {eq:`F = k · ΔL`},
   {p:L('<b>k</b> is the spring elasticity constant, equal to the slope of the line, measured in <b>N/m</b>. It changes only if the spring’s shape or material changes. From Table (1): k = 0.1 ÷ 0.003 ≈ 33.3 N/m.','<b>k</b> هو ثابت مرونة النابض، ويساوي ميل المستقيم، ويُقاس بوحدة <b>N/m</b>. ولا يتغير إلا بتغير شكل النابض أو مادته. من الجدول (1): k = 0.1 ÷ 0.003 ≈ 33.3 N/m.')},
   {box:'def',label:'Definitions',list:[
     L('<b>Elasticity:</b> the resistance an object shows to a force that changes its shape, volume or length, and its return to its previous condition after the force is gone.','<b>المرونة:</b> الممانعة التي يبديها الجسم للقوة التي تغير شكله أو حجمه أو طوله، وعودته إلى حالته السابقة بعد زوال القوة.'),
     L('<b>Elasticity limit:</b> the limit beyond which, if the force exceeds it, the object does not return as before after the force is gone — a <b>permanent deformation</b> has happened.','<b>حد المرونة:</b> الحد الذي إذا تجاوزته القوة المؤثرة لا يعود الجسم كما كان بعد زوالها، ويُقال إنه حدث فيه <b>تشوه دائم</b>.')]},
   {box:'rem',label:'The elastic object',list:[
     L('Returns to its previous shape, volume or length after the force is gone.','يعود إلى شكله أو حجمه أو طوله السابق بعد زوال القوة.'),
     L('Its deformation is linearly proportional to the causing force, within the elasticity limit.','يتناسب تشوهه خطيًا مع القوة المسببة له ضمن حد المرونة.')]}
  ]},
  {sn:'2.2',t:'Stress and Strain',p:'19–21',blocks:[
   {box:'def',label:'Definition',list:[L('<b>Stress:</b> the magnitude of the perpendicular force acting on the unit area of the object. Unit: N/m².','<b>الإجهاد:</b> مقدار القوة العمودية المؤثرة في وحدة المساحة من الجسم. وحدته: N/m².')]},
   {fig:STRESSTYPES_SVG,cap:'Figures (2.5), (2.6), (2.7)'},
   {h:'1. Longitudinal stress'},
   {p:L('Causes a change in the <b>length</b> of the object. It has two types: <b>tensile stress</b> (two perpendicular pulling forces on opposite faces — the length increases) and <b>compressive stress</b> (two perpendicular forces pushing inward — the length decreases).','يسبب تغيرًا في <b>طول</b> الجسم. وله نوعان: <b>إجهاد الشد</b> (قوتا سحب عموديتان على وجهين متقابلين فيزداد الطول)، و<b>إجهاد الانضغاط</b> (قوتان عموديتان نحو الداخل فيقل الطول).')},
   {eq:`Longitudinal stress = ${fr('F<sub>⊥</sub>','A')}`},
   {h:'2. Shear stress'},
   {p:L('Push a book on a rough table with a force tangent to its surface: its shape deforms. Shear stress changes the <b>shape</b>, not the volume.','ادفع كتابًا على طاولة خشنة بقوة مماسة لسطحه، فيتشوه شكله. إجهاد القص يغيّر <b>الشكل</b> ولا يغيّر الحجم.')},
   {eq:`Shear stress = ${fr('F<sub>∥</sub> (tangential)','A')}`},
   {box:'def',label:'Definition',list:[L('<b>Strain:</b> the measure of the amount of deformation (change in shape or volume) caused by the stress the material is exposed to. Strain has no unit.','<b>المطاوعة:</b> مقياس لمقدار تشوه المادة (تغير الشكل أو الحجم) بسبب الإجهاد الذي تتعرض له. ليس للمطاوعة وحدة.')]},
   {table:{h:['Strain type','Meaning','Formula'],r:[['Longitudinal','shape changes, volume does not','ΔL / L₀'],['Shear','lateral displacement; measured by angle θ','θ'],['Volume','volume decreases, shape constant','ΔV / V₀']],cap:'Types of strain, Book p. 20–21'}},
   {box:'think',label:'Think',list:[L('Why does strain have no unit? Because it is a ratio of two lengths (or two volumes).','لماذا ليس للمطاوعة وحدة؟ لأنها نسبة بين طولين (أو حجمين).')]}
  ]},
  {sn:'2.3',t:'Young Modulus',p:'21–22',blocks:[
   {p:L('The ratio of stress to relative strain is called <b>Young modulus</b> (or the elasticity modulus). It is a special property of <b>solid</b> materials, measured in N/m².','تُسمى النسبة بين الإجهاد والمطاوعة النسبية <b>معامل يونك</b> (أو معامل المرونة). وهو خاصية مميزة للمواد <b>الصلبة</b>، ويُقاس بوحدة N/m².')},
   {eq:`Y = ${fr('F / A','ΔL / L₀')} = ${fr('F · L₀','A · ΔL')}`},
   {table:{h:['Material','Young modulus (N/m²)'],r:[['Aluminium','70 × 10⁹'],['Lead','16 × 10⁹'],['Copper','120 × 10⁹'],['Diamond','1200 × 10⁹'],['Gold','79 × 10⁹'],['Tungsten','360 × 10⁹'],['Steel','200 × 10⁹'],['Concrete','(25–30) × 10⁹'],['Glass','65 × 10⁹']],cap:'Table (2), Book p. 22'}},
   {box:'dyk',label:'Did you know?',list:[L('Diamond has the largest Young modulus in the table, so it needs the greatest stress for the same strain. Lead has the smallest.','الماس له أكبر معامل يونك في الجدول، فيحتاج أكبر إجهاد لإحداث المطاوعة نفسها. والرصاص له أصغر قيمة.')]}
  ]},
  {sn:'2.4',t:'Some Mechanical Properties of Solid Materials',p:'23–24',blocks:[
   {table:{h:['Property','Meaning','Example'],r:[['Ductility','ability to be elongated, compressed, rolled, drawn or hammered','copper'],['Brittleness','cannot resist sudden stress; breaks without permanent deformation','glass, cast iron, concrete'],['Stiffness','resists deformation; needs high stress for the same strain (high Y)','steel, 2×10¹¹ N/m²'],['Toughness','resists cutting force; = cutting force / area (N/m²)','—'],['Hardness','ability to scratch other materials or resist scratching','diamond'],['Failure','loses its resistance under external stress','—']],cap:'Book p. 23'}},
   {list:[
     L('<b>Brittle materials:</b> break directly after exceeding the elasticity limit, like glass, iron and concrete.','<b>المواد الهشة:</b> تنكسر مباشرة بعد تجاوز حد المرونة، مثل الزجاج والحديد والخرسانة.'),
     L('<b>Hardness scale (1→10):</b> Talc, Gypsum, Calcite, Fluoride, Apatite, Feldspar, Quartz, Topaz, Ruby, Diamond. Each one scratches every material below it.','<b>مقياس القساوة (1→10):</b> التلك، الجبس، الكالسايت، الفلورايت، الأباتايت، الفلسبار، الكوارتز، التوباز، الياقوت، الماس. كل مادة تخدش جميع المواد التي قبلها.')]},
   {fig:STRESS_SVG,cap:'Figure (2.11) — stress–strain graph of an iron rod'},
   {box:'def',label:'Elastic vs plastic deformation',list:[
     L('<b>Elastic deformation:</b> a temporary increase in length or shape within the elasticity limit, obeying Hooke’s law; the object returns to its original state when the force is gone.','<b>التشوه المرن:</b> زيادة مؤقتة في الطول أو الشكل ضمن حد المرونة، تخضع لقانون هوك، ويعود الجسم إلى حالته الأصلية عند زوال القوة.'),
     L('<b>Plastic deformation:</b> a permanent increase in length or shape beyond the elasticity limit, not obeying Hooke’s law; the object does not return when the force is gone.','<b>التشوه اللدن:</b> زيادة دائمة في الطول أو الشكل خارج حد المرونة، لا تخضع لقانون هوك، ولا يعود الجسم إلى حالته عند زوال القوة.')]},
   {p:L('Copper example: a 150 N force on a copper wire of section 1 mm² reaches the elasticity limit, yet the wire does not break until the force is doubled.','مثال النحاس: قوة 150 N على سلك نحاس مساحة مقطعه 1 mm² تبلغ به حد المرونة، لكنه لا ينقطع إلا إذا تضاعفت القوة.')},
   {box:'dyk',label:'Did you know?',list:[
     L('Breaking starts on the surface at places of low toughness that have cracks in their crystal structure.','يبدأ الكسر على سطح المادة في المواضع قليلة المتانة التي فيها تشققات في تركيبها البلوري.'),
     L('The resistance of brittle materials increases under compression: at 10 km depth rocks are less likely to break and more likely to deform.','تزداد مقاومة المواد الهشة بالضغط: على عمق 10 km تقل احتمالية كسر الصخور وتزداد احتمالية تشوهها.'),
     L('Laminated glass: two glass sheets separated by a Polyvinyl butyral layer that absorbs crack growth.','الزجاج المقوّى: لوحان زجاجيان بينهما طبقة من بولي فينيل بيوترال تمتص نمو التشققات.')]},
   {box:'think',label:'Think',list:[L('What mechanical properties do rubber and diamond have? Rubber: high elasticity (returns easily), low stiffness. Diamond: the highest hardness and a very high Young modulus.','ما الخواص الميكانيكية للمطاط والماس؟ المطاط: مرونة عالية وصلابة قليلة. الماس: أعلى قساوة ومعامل يونك كبير جدًا.')]}
  ]}
 ],
 laws:[
  {t:'Hooke’s Law',eq:'F = k · ΔL',d:[['F','tensile force (N)'],['k','spring constant (N/m) = slope of F–ΔL line'],['ΔL','change in length (m)']],use:L('Springs and wires, within the elasticity limit only.','للنوابض والأسلاك، ضمن حد المرونة فقط.'),err:L('Using ΔL in cm. Always convert to metres.','استعمال ΔL بالسنتيمتر. حوّل دائمًا إلى المتر.')},
  {t:'Longitudinal Stress',eq:`Stress = ${fr('F','A')}`,d:[['F','perpendicular force (N)'],['A','cross-section area (m²)']],use:L('Any force spread on a cross-section. Unit N/m².','أي قوة موزعة على مساحة مقطع. الوحدة N/m².'),err:L('1 cm² = 10⁻⁴ m², 1 mm² = 10⁻⁶ m² — not 10⁻² or 10⁻³.','1 cm² = 10⁻⁴ m² و 1 mm² = 10⁻⁶ m²، وليس 10⁻² أو 10⁻³.')},
  {t:'Longitudinal Strain',eq:`Strain = ${fr('ΔL','L₀')}`,d:[['ΔL','change in length'],['L₀','original length']],use:L('Both lengths in the same unit. Strain has no unit.','الطولان بالوحدة نفسها. المطاوعة بلا وحدة.'),err:L('Dividing by the new length instead of the original length.','القسمة على الطول الجديد بدل الطول الأصلي.')},
  {t:'Volume Strain',eq:`Strain = ${fr('ΔV','V₀')}`,d:[['ΔV','change in volume'],['V₀','original volume']],use:L('Object compressed from all sides; shape constant.','جسم مضغوط من جميع الجهات، والشكل ثابت.'),err:L('Confusing it with shear strain (that one is an angle θ).','الخلط بينها وبين مطاوعة القص (وهي زاوية θ).')},
  {t:'Young Modulus',eq:`Y = ${fr('F · L₀','A · ΔL')}  ⇒  ΔL = ${fr('F · L₀','Y · A')}`,d:[['Y','Young modulus (N/m²)'],['F','force (N)'],['L₀','original length (m)'],['A','area (m²)'],['ΔL','elongation (m)']],use:L('Wires and rods of solid material.','للأسلاك والقضبان من المواد الصلبة.'),err:L('If a diameter is given, find A = πd²/4 first. If a mass is given, F = m·g.','إذا أُعطي القطر فاحسب أولًا A = πd²/4. وإذا أُعطيت الكتلة فإن F = m·g.')},
  {t:'Toughness',eq:`Toughness = ${fr('Cutting force','A')}`,d:[['A','cross-section area (m²)']],use:L('Cutting force depends on area, not on length.','قوة القطع تعتمد على المساحة لا على الطول.'),err:L('Changing the force when only the length changes. A longer identical wire needs the same force.','تغيير القوة عند تغير الطول فقط. السلك الأطول من المادة نفسها والمقطع نفسه يحتاج القوة نفسها.')}
 ],
 examples:[
  {t:L('Book example: A steel wire of length 4 m and cross-section area 0.05 cm² is pulled by a force of 500 N. Find the increase in its length. (Y steel = 200 × 10⁹ N/m²)','مثال الكتاب: سلك فولاذي طوله 4 m ومساحة مقطعه 0.05 cm² سُحب بقوة 500 N. ما مقدار الزيادة في طوله؟ (معامل يونك للفولاذ 200 × 10⁹ N/m²)'),p:'22',
   steps:[['Given','L₀ = 4 m, A = 0.05 cm² = 0.05 × 10⁻⁴ m², F = 500 N'],['Law',`ΔL = ${fr('F · L₀','Y · A')}`],['Sub',`ΔL = ${fr('500 × 4','200 × 10⁹ × 0.05 × 10⁻⁴')}`]],res:'ΔL = 2 × 10⁻³ m = 2 mm'},
  {t:L('From Table (1): find the spring constant k.','من الجدول (1): أوجد ثابت مرونة النابض k.'),p:'17',
   steps:[['Given','F = 0.1 N gives ΔL = 0.3 × 10⁻² m'],['Law','k = F / ΔL (slope)'],['Sub','k = 0.1 / 0.003']],res:'k ≈ 33.3 N/m'},
  {t:L('Book question (Table 3): a wire 2 m long, area 1.25 × 10⁻⁶ m². Forces 0–500 N give stretching 0, 2.8, 6.2, 8.7, 12.1, 15 mm. Find Y from the slope.','سؤال الكتاب (جدول 3): سلك طوله 2 m ومساحة مقطعه 1.25 × 10⁻⁶ m². القوى من 0 إلى 500 N تعطي استطالات 0، 2.8، 6.2، 8.7، 12.1، 15 mm. أوجد معامل يونك من الميل.'),p:'22',
   steps:[['Plot','F (y-axis) against ΔL (x-axis): an almost straight line'],['Slope','slope = ΔF/ΔL ≈ 500 / 0.015 ≈ 3.3 × 10⁴ N/m'],['Law',`Y = slope × ${fr('L₀','A')} = 3.33 × 10⁴ × ${fr('2','1.25 × 10⁻⁶')}`]],res:'Y ≈ 5.3 × 10¹⁰ N/m²'},
  {t:L('Book problem 2: a steel wire 2 m long, diameter 1 mm, carries a mass of 8 kg (g = 10). Find the elongation. (Y = 200 × 10⁹)','مسألة الكتاب 2: سلك فولاذي طوله 2 m وقطره 1 mm عُلّقت به كتلة 8 kg (g = 10). أوجد الاستطالة. (Y = 200 × 10⁹)'),p:'26',
   steps:[['Area','r = 0.5 mm = 0.5 × 10⁻³ m ⇒ A = πr² ≈ 7.85 × 10⁻⁷ m²'],['Force','F = m·g = 8 × 10 = 80 N'],['Sub',`ΔL = ${fr('80 × 2','200 × 10⁹ × 7.85 × 10⁻⁷')}`]],res:'ΔL ≈ 1.0 × 10⁻³ m = 1 mm',tip:L('The diameter is 1 mm, so the radius is 0.5 mm. Using the diameter in πr² makes the answer 4 times too small.','القطر 1 mm، إذن نصف القطر 0.5 mm. استعمال القطر في πr² يجعل الجواب أصغر بأربع مرات.')}
 ],
 summary:[
  L('Deformation depends on the force, the dimensions and the material.','يعتمد التشوه على القوة وأبعاد الجسم ونوع المادة.'),
  L('Hooke’s law: F = kΔL, within the elasticity limit. k (N/m) = slope.','قانون هوك: F = kΔL ضمن حد المرونة، و k (N/m) هو الميل.'),
  L('Stress = F/A (N/m²): tensile, compressive (longitudinal) or shear.','الإجهاد = F/A بوحدة N/m²: شد أو انضغاط (طولي)، أو قص.'),
  L('Strain (no unit): longitudinal ΔL/L₀, shear θ, volume ΔV/V₀.','المطاوعة (بلا وحدة): طولية ΔL/L₀، قص θ، حجمية ΔV/V₀.'),
  L('Young modulus Y = stress/strain = FL₀/(AΔL), a property of solids.','معامل يونك Y = الإجهاد/المطاوعة = FL₀/(AΔL)، خاصية للمواد الصلبة.'),
  L('Properties: ductility, brittleness, stiffness, toughness, hardness, failure.','الخواص: المطيلية، الهشاشة، الصلابة، المتانة، القساوة، العجز.'),
  L('Elastic deformation is temporary; plastic deformation is permanent.','التشوه المرن مؤقت، والتشوه اللدن دائم.')
 ]
};

/* ---- Chapter 2 quiz bank (type: mcq | tf | open) ---- */
const Q2=[
 {ty:'mcq',k:'MCQ',q:L('The SI unit of stress is:','وحدة الإجهاد في النظام الدولي هي:'),o:['N','N/m','N/m²','J'],a:2,x:L('Stress = force ÷ area, so N/m².','الإجهاد = القوة ÷ المساحة، إذن N/m².')},
 {ty:'mcq',k:'MCQ',q:L('The unit of the spring constant k is:','وحدة ثابت مرونة النابض k هي:'),o:['N','N/m','N/m²','N·m'],a:1,x:L('k = F/ΔL ⇒ N/m.','k = F/ΔL ⇒ N/m.')},
 {ty:'mcq',k:'MCQ',q:L('Strain is measured in:','تُقاس المطاوعة بوحدة:'),o:['m','N/m²','m²','it has no unit'],a:3,x:L('It is a ratio of two lengths or two volumes.','هي نسبة بين طولين أو حجمين.')},
 {ty:'mcq',k:'MCQ',q:L('In the force–stretching graph of a spring, the slope represents:','في الرسم البياني للقوة والاستطالة لنابض، يمثل الميل:'),o:['the stress','the spring constant k','the strain','Young modulus'],a:1,x:L('F = kΔL, so the slope ΔF/ΔL = k.','F = kΔL، إذن الميل ΔF/ΔL = k.')},
 {ty:'mcq',k:'MCQ',q:L('According to Table (2), the material with the largest Young modulus is:','حسب الجدول (2)، المادة ذات أكبر معامل يونك هي:'),o:['Steel','Tungsten','Diamond','Copper'],a:2,x:L('Diamond = 1200 × 10⁹ N/m².','الماس = 1200 × 10⁹ N/m².')},
 {ty:'mcq',k:'MCQ',q:L('The softest material on the hardness scale is:','أقل المواد قساوة في مقياس القساوة هي:'),o:['Gypsum','Talc','Quartz','Calcite'],a:1,x:L('Talc is number 1; Diamond is number 10.','التلك رقم 1، والماس رقم 10.')},
 {ty:'mcq',k:'MCQ',q:L('If the diameter of a wire is doubled (same force, length, material), its elongation becomes:','إذا تضاعف قطر سلك (القوة والطول والمادة ثابتة)، تصبح استطالته:'),o:['double','half','a quarter','four times'],a:2,x:L('A ∝ d², so A becomes 4 times. ΔL = FL/(YA) becomes ¼.','A تتناسب مع d²، فتصبح 4 أمثال. إذن ΔL = FL/(YA) تصبح الربع.')},
 {ty:'mcq',k:'MCQ',q:L('If the length of a wire is doubled (same force, area, material), its elongation:','إذا تضاعف طول سلك (القوة والمساحة والمادة ثابتة)، فإن استطالته:'),o:['doubles','halves','stays the same','becomes four times'],a:0,x:L('ΔL ∝ L₀.','ΔL تتناسب طرديًا مع L₀.')},
 {ty:'mcq',k:'MCQ',q:L('The stress that decreases the length of an object is:','الإجهاد الذي يقلل طول الجسم هو:'),o:['tensile stress','compressive stress','shear stress','volume stress'],a:1,x:L('Two perpendicular forces pushing inward.','قوتان عموديتان نحو الداخل.')},
 {ty:'mcq',k:'MCQ',q:L('Shear strain is measured by:','تُقاس مطاوعة القص بـ:'),o:['ΔL/L₀','ΔV/V₀','the angle θ','F/A'],a:2,x:L('The angle by which the two opposite faces deviate.','الزاوية التي تنحرف بها الوجهان المتقابلان.')},
 {ty:'mcq',k:'MCQ',q:L('Glass, iron and concrete are examples of:','الزجاج والحديد والخرسانة أمثلة على مواد:'),o:['ductile materials','brittle materials','elastic materials','hard-to-scratch materials'],a:1,x:L('They break directly after the elasticity limit.','تنكسر مباشرة بعد حد المرونة.')},
 {ty:'mcq',k:'MCQ',q:L('Copper is a good example of:','النحاس مثال جيد على:'),o:['brittleness','ductility','failure','hardness'],a:1,x:L('It can be drawn, rolled and hammered.','يمكن سحبه ودرفلته وطرقه.')},
 {ty:'mcq',k:'MCQ',q:L('The unit of toughness is:','وحدة المتانة هي:'),o:['N','N/m','N/m²','no unit'],a:2,x:L('Toughness = cutting force ÷ area.','المتانة = قوة القطع ÷ المساحة.')},
 {ty:'mcq',k:'MCQ',q:L('Beyond the elasticity limit, the deformation is:','بعد تجاوز حد المرونة يكون التشوه:'),o:['elastic','temporary','plastic (permanent)','zero'],a:2,x:L('The object does not return to its original state.','لا يعود الجسم إلى حالته الأصلية.')},
 {ty:'mcq',k:'MCQ',q:L('A force of 6 N stretches a spring by 3 cm. Its constant k is:','قوة 6 N تمط نابضًا 3 cm. ثابته k يساوي:'),o:['2 N/m','200 N/m','18 N/m','0.5 N/m'],a:1,x:L('k = 6 / 0.03 = 200 N/m.','k = 6 / 0.03 = 200 N/m.')},
 {ty:'mcq',k:'MCQ',q:L('The fourth state of matter is:','الحالة الرابعة للمادة هي:'),o:['vapour','plasma','crystal','ice'],a:1,x:L('Book p. 15.','الكتاب صفحة 15.')},
 {ty:'tf',k:'True/False',q:L('Stress is the force acting on a unit length.','الإجهاد هو القوة المؤثرة في وحدة الطول.'),a:false,x:L('False → on a unit <b>area</b>.','خطأ ← في وحدة <b>المساحة</b>.')},
 {ty:'tf',k:'True/False',q:L('The spring constant depends on the force applied to the spring.','يعتمد ثابت النابض على القوة المؤثرة فيه.'),a:false,x:L('False → it depends only on the spring’s <b>shape and material</b>.','خطأ ← يعتمد فقط على <b>شكل النابض ومادته</b>.')},
 {ty:'tf',k:'True/False',q:L('The ratio stress/strain is a special property of solid materials.','النسبة إجهاد/مطاوعة خاصية مميزة للمواد الصلبة.'),a:true,x:L('True — Young modulus, Book p. 21.','صح — معامل يونك، الكتاب صفحة 21.')},
 {ty:'tf',k:'True/False',q:L('In longitudinal strain, the volume of the object changes.','في المطاوعة الطولية يتغير حجم الجسم.'),a:false,x:L('False → the <b>shape</b> changes without a change in volume.','خطأ ← يتغير <b>الشكل</b> دون تغير الحجم.')},
 {ty:'tf',k:'True/False',q:L('Brittle materials reach permanent deformation before breaking.','المواد الهشة تصل إلى التشوه الدائم قبل أن تنكسر.'),a:false,x:L('False → they break <b>directly</b> without reaching permanent deformation.','خطأ ← تنكسر <b>مباشرة</b> دون الوصول إلى التشوه الدائم.')},
 {ty:'tf',k:'True/False',q:L('On the hardness scale, each material scratches the materials below it.','في مقياس القساوة، كل مادة تخدش المواد التي قبلها.'),a:true,x:L('True.','صح.')},
 {ty:'tf',k:'True/False',q:L('Shear stress changes the shape of an object without changing its volume.','إجهاد القص يغير شكل الجسم دون أن يغير حجمه.'),a:true,x:L('True.','صح.')},
 {ty:'tf',k:'True/False',q:L('Steel is more elastic than rubber because the Young modulus of steel is large.','الفولاذ أكثر مرونة من المطاط لأن معامل يونك للفولاذ كبير.'),a:true,x:L('True — book Q1-2.','صح — سؤال الكتاب 1-2.')},
 {ty:'tf',k:'True/False',q:L('Liquids resist a change in volume less than gases do.','السوائل تقاوم تغير حجمها أقل من الغازات.'),a:false,x:L('False → liquids resist <b>more</b>.','خطأ ← السوائل تقاوم <b>أكثر</b>.')},
 {ty:'tf',k:'True/False',q:L('In elastic deformation the object returns to its original state after the force is removed.','في التشوه المرن يعود الجسم إلى حالته الأصلية بعد زوال القوة.'),a:true,x:L('True.','صح.')},
 {ty:'open',k:'Fill in',q:L('Hooke’s law is applied to solid materials within the ………… limit.','يُطبَّق قانون هوك على المواد الصلبة ضمن حد …………'),x:L('<b>Elasticity</b> limit.','حد <b>المرونة</b>.')},
 {ty:'open',k:'Fill in',q:L('The ratio of stress to relative strain is called …………','النسبة بين الإجهاد والمطاوعة النسبية تُسمى …………'),x:L('<b>Young modulus</b> (elasticity modulus).','<b>معامل يونك</b> (معامل المرونة).')},
 {ty:'open',k:'Fill in',q:L('The property of a material to resist a cutting force is …………','خاصية المادة في مقاومة قوة القطع هي …………'),x:L('<b>Toughness</b>.','<b>المتانة</b>.')},
 {ty:'open',k:'Fill in',q:L('The property of a material to lose its resistance under external stress is …………','خاصية المادة في فقدان مقاومتها تحت إجهاد خارجي هي …………'),x:L('<b>Failure</b>.','<b>العجز</b>.')},
 {ty:'open',k:'Fill in',q:L('The number of reference materials in the hardness table is ………… and the hardest is …………','عدد المواد المرجعية في جدول القساوة ………… وأقساها …………'),x:L('<b>10</b>; <b>Diamond</b>.','<b>10</b>، <b>الماس</b>.')},
 {ty:'open',k:'Define',q:L('Define: Elasticity.','عرّف: المرونة.'),x:C2.lessons[1].blocks[9].list[0]},
 {ty:'open',k:'Define',q:L('Define: Elasticity limit.','عرّف: حد المرونة.'),x:C2.lessons[1].blocks[9].list[1]},
 {ty:'open',k:'Define',q:L('Define: Stress.','عرّف: الإجهاد.'),x:C2.lessons[2].blocks[0].list[0]},
 {ty:'open',k:'Define',q:L('Define: Strain.','عرّف: المطاوعة.'),x:C2.lessons[2].blocks[8].list[0]},
 {ty:'open',k:'Define',q:L('Define: Stiffness.','عرّف: الصلابة.'),x:L('The property of a material to resist deformation in shape or volume due to an external force; it needs high stress for the same strain and has a high Young modulus, like steel.','خاصية المادة في مقاومة التشوه في الشكل أو الحجم بسبب قوة خارجية، وتحتاج إجهادًا كبيرًا لإحداث المطاوعة نفسها، ولها معامل يونك كبير مثل الفولاذ.')},
 {ty:'open',k:'Give reasons',q:L('Give reasons: a stretched wire returns to its length when the weight is removed.','علّل: يعود السلك المشدود إلى طوله عند إزالة الثقل.'),x:L('Because of the molecular attraction forces between its molecules, which appear when the length changes and restore the wire to its original state.','بسبب قوى التجاذب الجزيئية بين جزيئاته، التي تظهر عند تغير طوله وتعيده إلى حالته الأصلية.')},
 {ty:'open',k:'Give reasons',q:L('Give reasons: steel is more elastic than rubber.','علّل: الفولاذ أكثر مرونة من المطاط.'),x:L('Because the Young modulus of steel is large: it needs a large tension or compression force to deform, and returns to its shape.','لأن معامل يونك للفولاذ كبير، فيحتاج قوة شد أو انضغاط كبيرة لتشويهه، ويعود إلى شكله.')},
 {ty:'open',k:'Give reasons',q:L('Give reasons: laminated car glass does not shatter easily.','علّل: زجاج السيارات المقوّى لا يتهشم بسهولة.'),x:L('It is two glass sheets separated by a Polyvinyl butyral layer that works as a crack-growth absorber.','لأنه لوحان من الزجاج بينهما طبقة من بولي فينيل بيوترال تعمل كماص لنمو التشققات.')},
 {ty:'open',k:'Give reasons',q:L('Give reasons: rocks at 10 km depth are less likely to break.','علّل: تقل احتمالية كسر الصخور على عمق 10 km.'),x:L('The resistance of brittle materials increases under compression, so they deform rather than break.','لأن مقاومة المواد الهشة تزداد بالضغط، فتتشوه بدل أن تنكسر.')},
 {ty:'open',k:'Compare',q:L('Compare elastic and plastic deformation.','قارن بين التشوه المرن والتشوه اللدن.'),x:L('Elastic: temporary, within the elasticity limit, obeys Hooke’s law, object returns. Plastic: permanent, beyond the elasticity limit, does not obey Hooke’s law, object does not return.','المرن: مؤقت، ضمن حد المرونة، يخضع لقانون هوك، ويعود الجسم. اللدن: دائم، خارج حد المرونة، لا يخضع لقانون هوك، ولا يعود الجسم.')},
 {ty:'open',k:'Factors',q:L('What are the factors that determine the amount and type of deformation in a solid?','ما العوامل التي يعتمد عليها مقدار ونوع التشوه في المادة الصلبة؟'),x:L('1) The magnitude of the external force. 2) The dimensions of the material. 3) The type of material.','1) مقدار القوة الخارجية. 2) أبعاد المادة. 3) نوع المادة.')},
 {ty:'open',k:'Problem · easy',q:L('A tensile stress of 20 × 10⁶ N/m² acts on a wire of section 1.5 mm². Find the force.','إجهاد شد مقداره 20 × 10⁶ N/m² يؤثر في سلك مساحة مقطعه 1.5 mm². أوجد القوة.'),x:L('F = stress × A = 20 × 10⁶ × 1.5 × 10⁻⁶ = <b>30 N</b>','F = الإجهاد × A = 20 × 10⁶ × 1.5 × 10⁻⁶ = <b>30 N</b>')},
 {ty:'open',k:'Problem · easy',q:L('A rod 0.4 m long is compressed by 0.05 m. Find its relative strain.','قضيب طوله 0.4 m ضُغط فقصر 0.05 m. أوجد مطاوعته النسبية.'),x:L('Strain = 0.05 / 0.4 = <b>0.125</b> (no unit)','المطاوعة = 0.05 / 0.4 = <b>0.125</b> (بلا وحدة)')},
 {ty:'open',k:'Problem · easy',q:L('A force of 200 N acts on a wire of section 2 mm². Find the stress.','قوة 200 N تؤثر في سلك مساحة مقطعه 2 mm². أوجد الإجهاد.'),x:L('Stress = 200 / (2 × 10⁻⁶) = <b>1 × 10⁸ N/m²</b>','الإجهاد = 200 / (2 × 10⁻⁶) = <b>1 × 10⁸ N/m²</b>')},
 {ty:'open',k:'Problem · medium',q:L('A wire 1.5 m long, section 0.2 cm², stretches 0.5 mm under 1000 N. Find Young modulus.','سلك طوله 1.5 m ومساحة مقطعه 0.2 cm² يستطيل 0.5 mm تحت قوة 1000 N. أوجد معامل يونك.'),x:L('Y = FL₀/(AΔL) = (1000 × 1.5)/(2 × 10⁻⁵ × 5 × 10⁻⁴) = <b>1.5 × 10¹¹ N/m²</b>','Y = FL₀/(AΔL) = (1000 × 1.5)/(2 × 10⁻⁵ × 5 × 10⁻⁴) = <b>1.5 × 10¹¹ N/m²</b>')},
 {ty:'open',k:'Problem · medium',q:L('An aluminium rod 2 m long, section 4 cm², is compressed by 28 000 N. Find the shortening. (Y = 70 × 10⁹)','قضيب ألمنيوم طوله 2 m ومساحة مقطعه 4 cm² ضُغط بقوة 28000 N. أوجد مقدار القصر. (Y = 70 × 10⁹)'),x:L('ΔL = (28000 × 2)/(70 × 10⁹ × 4 × 10⁻⁴) = <b>2 × 10⁻³ m = 2 mm</b>','ΔL = (28000 × 2)/(70 × 10⁹ × 4 × 10⁻⁴) = <b>2 × 10⁻³ m = 2 mm</b>')},
 {ty:'open',k:'Problem · medium',q:L('A copper wire 3 m long, diameter 1 mm, carries 100 N. Find the elongation. (Y = 120 × 10⁹)','سلك نحاس طوله 3 m وقطره 1 mm يحمل 100 N. أوجد الاستطالة. (Y = 120 × 10⁹)'),x:L('A = π(0.5 × 10⁻³)² ≈ 7.85 × 10⁻⁷ m². ΔL = (100 × 3)/(120 × 10⁹ × 7.85 × 10⁻⁷) ≈ <b>3.18 × 10⁻³ m</b>','A = π(0.5 × 10⁻³)² ≈ 7.85 × 10⁻⁷ m². ΔL = (100 × 3)/(120 × 10⁹ × 7.85 × 10⁻⁷) ≈ <b>3.18 × 10⁻³ m</b>')},
 {ty:'open',k:'Problem · hard',q:L('A wire of radius 0.5 mm and length 120 cm hangs vertically. What force makes its length 121.2 cm? (Y = 1.4 × 10¹⁰ N/m²)','سلك نصف قطر مقطعه 0.5 mm وطوله 120 cm معلق شاقوليًا. ما القوة اللازمة ليصبح طوله 121.2 cm؟ (Y = 1.4 × 10¹⁰ N/m²)'),x:L('ΔL = 1.2 cm = 0.012 m, A ≈ 7.85 × 10⁻⁷ m². F = YAΔL/L₀ = 1.4 × 10¹⁰ × 7.85 × 10⁻⁷ × 0.012 / 1.2 ≈ <b>110 N</b> (book: 109.9 N)','ΔL = 1.2 cm = 0.012 m و A ≈ 7.85 × 10⁻⁷ m². F = YAΔL/L₀ = 1.4 × 10¹⁰ × 7.85 × 10⁻⁷ × 0.012 / 1.2 ≈ <b>110 N</b> (جواب الكتاب: 109.9 N)')},
 {ty:'open',k:'Problem · hard',q:L('Two wires of the same material: x is twice as long as y, same diameter, same force. Compare their elongations.','سلكان من المادة نفسها: طول x ضعف طول y، والقطر نفسه والقوة نفسها. قارن بين استطالتيهما.'),x:L('ΔL ∝ L₀ (F, Y, A equal) ⇒ <b>ΔLx = 2 ΔLy</b>','ΔL تتناسب مع L₀ (F و Y و A متساوية) ⇒ <b>ΔLx = 2 ΔLy</b>')},
 {ty:'open',k:'Problem · hard',q:L('The elasticity-limit stress of a steel wire is 2.5 × 10⁸ N/m² and its section is 0.5 mm². What is the largest mass it can hold without permanent deformation? (g = 10)','إجهاد حد المرونة لسلك فولاذي 2.5 × 10⁸ N/m² ومساحة مقطعه 0.5 mm². ما أكبر كتلة يحملها دون تشوه دائم؟ (g = 10)'),x:L('F = 2.5 × 10⁸ × 0.5 × 10⁻⁶ = 125 N ⇒ m = 125/10 = <b>12.5 kg</b>','F = 2.5 × 10⁸ × 0.5 × 10⁻⁶ = 125 N ⇒ m = 125/10 = <b>12.5 kg</b>')}
];

/* ---- Exam-style (chapter 2) ---- */
const ES2=[
 {m:12,q:L('A tungsten wire 1 m long and of section 1 mm² must stretch by 0.5 mm. What force is needed? (Y = 360 × 10⁹ N/m²)','سلك تنكستن طوله 1 m ومساحة مقطعه 1 mm² يُراد أن يستطيل 0.5 mm. ما القوة اللازمة؟ (Y = 360 × 10⁹ N/m²)'),steps:[['Given','L₀ = 1 m, A = 1 × 10⁻⁶ m², ΔL = 5 × 10⁻⁴ m'],['Law',`F = ${fr('Y · A · ΔL','L₀')}`],['Sub','F = 360 × 10⁹ × 1 × 10⁻⁶ × 5 × 10⁻⁴ / 1']],res:'F = 180 N'},
 {m:12,q:L('A spring stretches 4 cm under 6 N. Find k, then the stretching under 9 N.','نابض يستطيل 4 cm تحت قوة 6 N. أوجد k ثم الاستطالة تحت 9 N.'),steps:[['k','k = 6 / 0.04 = 150 N/m'],['ΔL','ΔL = F/k = 9 / 150 = 0.06 m']],res:'k = 150 N/m ; ΔL = 6 cm'},
 {m:12,q:L('A steel wire is under a stress of 4 × 10⁸ N/m². Find its strain. (Y = 200 × 10⁹)','سلك فولاذي تحت إجهاد 4 × 10⁸ N/m². أوجد مطاوعته. (Y = 200 × 10⁹)'),steps:[['Law','strain = stress / Y'],['Sub','= 4 × 10⁸ / 2 × 10¹¹']],res:'strain = 2 × 10⁻³'},
 {m:10,q:L('A body of volume 2 m³ is compressed from all sides and its volume decreases by 0.004 m³. Find the volume strain.','جسم حجمه 2 m³ ضُغط من جميع الجهات فنقص حجمه 0.004 m³. أوجد المطاوعة الحجمية.'),steps:[['Law','ΔV / V₀'],['Sub','0.004 / 2']],res:'2 × 10⁻³'},
 {m:12,q:L('The force needed to cut a wire is F. What force cuts: (a) two identical wires tied together, (b) a wire of the same material with twice the diameter, (c) a wire of the same material with twice the length?','القوة اللازمة لقطع سلك هي F. ما القوة اللازمة لقطع: (أ) سلكين متماثلين مربوطين معًا، (ب) سلك من المادة نفسها قطره ضعف الأول، (ج) سلك من المادة نفسها طوله ضعف الأول؟'),steps:[['Rule','cutting force = toughness × area'],['a','area doubles ⇒ 2F'],['b','d doubles ⇒ area × 4 ⇒ 4F'],['c','length does not affect area ⇒ F']],res:'2F , 4F , F',tip:L('This is book question Q2 — it appears often in exams.','هذا سؤال الكتاب Q2، ويتكرر كثيرًا في الامتحانات.')},
 {m:12,q:L('Two identical wires, 125 cm and 375 cm long. The first is cut by 489 N. What force cuts the second?','سلكان متماثلان طولاهما 125 cm و 375 cm. قُطع الأول بقوة 489 N. ما القوة اللازمة لقطع الثاني؟'),steps:[['Rule','toughness = force / area; same material and area'],['So','length does not matter']],res:'F = 489 N'},
 {m:8,q:L('What is meant by the elasticity constant of a spring? What is its unit, and on what does it depend?','ما المقصود بثابت مرونة النابض؟ وما وحدته؟ وعلامَ يعتمد؟'),steps:[['Meaning','the ratio F/ΔL = slope of the force–stretching line'],['Unit','N/m'],['Depends on','the spring’s shape and the material it is made of']],res:'k = F/ΔL (N/m)'},
 {m:8,q:L('Name the strain type defined by: (a) ΔL/L₀, (b) ΔV/V₀, (c) the angle by which two opposite faces deviate.','سمِّ نوع المطاوعة المعرّفة بـ: (أ) ΔL/L₀، (ب) ΔV/V₀، (ج) الزاوية التي ينحرف بها وجهان متقابلان.'),steps:[['a','longitudinal strain'],['b','volume strain'],['c','shear strain']],res:'longitudinal · volume · shear'},
 {m:8,q:L('Copper: 150 N on a wire of section 1 mm² reaches the elasticity limit. Find the stress at the limit and the force that breaks it.','النحاس: 150 N على سلك مقطعه 1 mm² تبلغ به حد المرونة. أوجد الإجهاد عند الحد والقوة التي تقطعه.'),steps:[['Stress','150 / 1 × 10⁻⁶ = 1.5 × 10⁸ N/m²'],['Break','the force must be doubled: 2 × 150']],res:'1.5 × 10⁸ N/m² ; 300 N'},
 {m:8,q:L('Why does a material need a high stress to produce a strain if it has stiffness? Give an example.','لماذا تحتاج المادة ذات الصلابة إجهادًا كبيرًا لإحداث مطاوعة؟ أعط مثالًا.'),steps:[['Reason','stiffness means a high Young modulus Y = stress/strain'],['Example','steel, Y = 2 × 10¹¹ N/m²']],res:'high Y ⇒ high stress per unit strain'}
];

/* ---- From the book (end of chapter 2) ---- */
const FB2={
 mcq:[
  {q:'The property that makes a spring return to its original length after being pulled a little and left is:',o:['Brittleness','Ductility','Stiffness','Elasticity'],a:3},
  {q:'Steel’s elasticity is greater than rubber’s because:',o:['Steel needs a large tension or compressive force','Rubber needs a large tension or compressive force','Young modulus of steel is small','Young modulus of steel is large'],a:3},
  {q:'Hooke’s law is applied to solid material within the limit of:',o:['Toughness','Failure','Elasticity','Shear stress'],a:2},
  {q:'Materials whose length can’t be increased except by high stress within their elasticity limit are:',o:['Brittle','Highly elastic','Not elastic','Can be hammered'],a:1},
  {q:'When a force acts on an object, the longitudinal stress equals:',o:['Relative change in its dimensions','Perpendicular force acting on a unit area','Young modulus','Elasticity limits'],a:1},
  {q:'Shear stress on an object affects its:',o:['Length','Width','Volume','Shape'],a:3},
  {q:'The stress on a vertical wire carrying a load does NOT depend on:',o:['Length of the wire','Diameter of the wire','Mass of the load','Gravitational acceleration'],a:0},
  {q:'Wire x is half the length of y and twice its diameter; equal elongations. The force on x is:',o:['Half the force on y','Twice the force on y','Four times the force on y','Eight times the force on y'],a:3},
  {q:'The increase in length or shape out of the elasticity limit is called:',o:['Temporary deformation','Permanent deformation','Directly proportional to force','Proportional to force'],a:1},
  {q:'Two equal and opposite pulling forces acting on an object along the same line put it under:',o:['Tensile stress','Compressive stress','Strain','Shear stress'],a:0}
 ],
 ar:['الخاصية التي تجعل النابض يعود إلى طوله الأصلي بعد سحبه قليلًا وتركه هي:','مرونة الفولاذ أكبر من مرونة المطاط لأن:','يُطبَّق قانون هوك على المواد الصلبة ضمن حد:','المواد التي لا يزداد طولها إلا بإجهاد كبير ضمن حد مرونتها تُسمى:','عند تأثير قوة في جسم فإن الإجهاد الطولي فيه يساوي:','إجهاد القص يؤثر في الجسم على:','الإجهاد في سلك شاقولي معلق به ثقل لا يعتمد على:','طول السلك x نصف طول y وقطره ضعف قطر y، والاستطالتان متساويتان. القوة على x تساوي:','الزيادة في الطول أو الشكل خارج حد المرونة تُسمى:','قوتا سحب متساويتان ومتعاكستان على خط واحد تجعلان الجسم تحت تأثير:'],
 probs:[
  {q:L('Q1: A tensile stress of 20 × 10⁶ N/m² acts on a wire of section 1.5 mm². Find the force.','س1: إجهاد شد 20 × 10⁶ N/m² يؤثر في سلك مقطعه 1.5 mm². أوجد القوة.'),steps:[['Law','F = stress × A'],['Sub','20 × 10⁶ × 1.5 × 10⁻⁶']],res:'F = 30 N'},
  {q:L('Q2: A steel wire 2 m long, diameter 1 mm, carries 8 kg (g = 10). Find ΔL. (Y = 200 × 10⁹)','س2: سلك فولاذي طوله 2 m وقطره 1 mm يحمل 8 kg (g = 10). أوجد ΔL. (Y = 200 × 10⁹)'),steps:[['A','π(0.5 × 10⁻³)² = 7.85 × 10⁻⁷ m²'],['F','8 × 10 = 80 N'],['ΔL',`${fr('80 × 2','200 × 10⁹ × 7.85 × 10⁻⁷')}`]],res:'ΔL ≈ 0.001 m'},
  {q:L('Q3: A wire of radius 0.5 mm, length 120 cm, must become 121.2 cm. Find the force. (Y = 1.4 × 10¹⁰)','س3: سلك نصف قطره 0.5 mm وطوله 120 cm يُراد أن يصبح 121.2 cm. أوجد القوة. (Y = 1.4 × 10¹⁰)'),steps:[['ΔL','121.2 − 120 = 1.2 cm = 0.012 m'],['F',`${fr('1.4 × 10¹⁰ × 7.85 × 10⁻⁷ × 0.012','1.2')}`]],res:'F ≈ 109.9 N'},
  {q:L('Q4: Two identical wires, 125 cm and 375 cm. The first is cut by 489 N. Force for the second?','س4: سلكان متماثلان طولاهما 125 cm و 375 cm. قُطع الأول بقوة 489 N. ما القوة لقطع الثاني؟'),steps:[['Rule','cutting depends on area, not length']],res:'F = 489 N'},
  {q:L('Q5: A rod 0.4 m long is shortened by 0.05 m. Relative strain?','س5: قضيب طوله 0.4 m قصر 0.05 m. ما مطاوعته النسبية؟'),steps:[['Law','ΔL / L₀ = 0.05 / 0.4']],res:'0.125'},
  {q:L('Q6: A bronze wire 2.5 m, section 1 × 10⁻³ cm², stretches 1 mm under 0.4 kg (g = 10). Find Y.','س6: سلك برونز طوله 2.5 m ومقطعه 1 × 10⁻³ cm² استطال 1 mm بتعليق 0.4 kg (g = 10). أوجد Y.'),steps:[['F','0.4 × 10 = 4 N'],['A','1 × 10⁻³ × 10⁻⁴ = 1 × 10⁻⁷ m²'],['Y',`${fr('4 × 2.5','1 × 10⁻⁷ × 1 × 10⁻³')}`]],res:'Y = 1 × 10¹¹ N/m²'}
 ]
};


const FB2_OPEN=[[L('Q2. The force to cut a wire is F. Force for: (a) two identical wires tied together (b) twice the diameter (c) twice the length?','س2. القوة اللازمة لقطع سلك F. ما القوة لـ: (أ) سلكين متماثلين مربوطين (ب) قطر مضاعف (ج) طول مضاعف؟'),'(a) 2F · (b) 4F · (c) F'],
 [L('Q3. What factors determine the amount and type of deformation in solids?','س3. ما العوامل التي يعتمد عليها مقدار ونوع التشوه في المواد الصلبة؟'),'force magnitude · dimensions · material'],
 [L('Q4. What is meant by the spring constant? Its unit? What does it depend on?','س4. ما المقصود بثابت مرونة النابض؟ وما وحدته؟ وعلامَ يعتمد؟'),'k = F/ΔL · N/m · shape & material of the spring'],
 [L('Q5. Strain type for: (a) ΔL/L₀ (b) ΔV/V₀ (c) angle of deviation of two faces?','س5. نوع المطاوعة المعرّفة بـ: (أ) ΔL/L₀ (ب) ΔV/V₀ (ج) زاوية انحراف الوجهين؟'),'(a) longitudinal · (b) volume · (c) shear']];
const CH2_EXTRA={t:'Unit conversions you will need',items:[['1 cm²','10⁻⁴ m²'],['1 mm²','10⁻⁶ m²'],['1 mm','10⁻³ m'],['Area from diameter','A = πd²/4'],['Weight','F = m·g']]};

CHD[2]={...C2,quiz:Q2,exam:ES2,book:{mcq:FB2.mcq.map((m,i)=>({...m,ar:FB2.ar[i]})),open:FB2_OPEN,probs:FB2.probs},extra:CH2_EXTRA};

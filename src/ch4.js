/* ---------- Chapter 4: Thermal Properties of Material ---------- */
const HEATCURVE_SVG=`<svg viewBox="0 0 520 230" role="img" aria-label="Heating curve of water"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<path d="M50 200 H500 M50 200 V15" stroke="var(--muted)" fill="none"/><text x="500" y="218" text-anchor="end">heat supplied Q →</text><text x="54" y="22">T (°C)</text>
<line x1="46" y1="160" x2="50" y2="160" stroke="var(--muted)"/><text x="42" y="164" text-anchor="end">0</text>
<line x1="46" y1="70" x2="50" y2="70" stroke="var(--muted)"/><text x="42" y="74" text-anchor="end">100</text>
<path d="M50 190 L90 160 L170 160 L250 70 L430 70 L470 45" stroke="var(--c4)" stroke-width="3" fill="none"/>
<text x="62" y="186" fill="var(--ink)">ice</text><text x="130" y="152" text-anchor="middle" fill="var(--amber)">melting · m·Lf</text>
<text x="200" y="128" fill="var(--ink)">water · mcΔT</text><text x="340" y="62" text-anchor="middle" fill="var(--amber)">boiling · m·Lv</text><text x="440" y="40" fill="var(--ink)">steam</text>
<text x="130" y="176" text-anchor="middle">T constant</text><text x="340" y="86" text-anchor="middle">T constant</text></g></svg>`;
const BIMETAL_SVG=`<svg viewBox="0 0 520 140" role="img" aria-label="Bimetallic strip"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<rect x="40" y="40" width="180" height="10" fill="var(--c4)"/><rect x="40" y="50" width="180" height="10" fill="var(--c1)"/><text x="130" y="85" text-anchor="middle">room temperature: straight, circuit closed</text>
<path d="M300 40 Q390 40 470 80" stroke="var(--c4)" stroke-width="10" fill="none"/><path d="M300 50 Q385 50 462 89" stroke="var(--c1)" stroke-width="10" fill="none"/>
<text x="390" y="118" text-anchor="middle">heated: bends toward the lower-α metal, circuit opens</text>
<text x="40" y="30" fill="var(--c4)">high α</text><text x="40" y="76" fill="var(--c1)">low α</text></g></svg>`;
CHD[4]={
 obj:[L('Calculate the quantity of heat using specific heat and heat capacity.','حساب كمية الحرارة باستعمال الحرارة النوعية والسعة الحرارية.'),
      L('Apply heat lost = heat gained to reach thermal equilibrium.','تطبيق الحرارة المفقودة = الحرارة المكتسبة للوصول إلى الاتزان الحراري.'),
      L('Calculate linear, surface and volume expansion of solids and liquids.','حساب التمدد الطولي والسطحي والحجمي للمواد الصلبة والسوائل.'),
      L('Use latent heat of fusion and vaporization in multi-stage problems.','استعمال الحرارة الكامنة للانصهار والتبخر في المسائل متعددة المراحل.'),
      L('Calculate the rate of heat conduction and explain convection, radiation and thermal pollution.','حساب معدل انتقال الحرارة بالتوصيل وتفسير الحمل والإشعاع والتلوث الحراري.')],
 lessons:[
  {sn:'4.1',t:'Quantity of Heat and Specific Heat',p:'45–47',blocks:[
   {p:L('The sum of the kinetic and potential energies of the particles is the <b>internal energy</b>. Heating raises the internal energy and the temperature.','مجموع الطاقتين الحركية والكامنة لدقائق المادة هو <b>الطاقة الداخلية</b>. والتسخين يرفع الطاقة الداخلية ودرجة الحرارة.')},
   {box:'def',label:'The heat needed depends on',list:[L('1) the mass of the object 2) the change in its temperature 3) the type of material.','1) كتلة الجسم 2) التغير في درجة حرارته 3) نوع المادة.')]},
   {eq:'Q = m · C<sub>p</sub> · ΔT = m C<sub>p</sub> (T₂ − T₁)'},
   {box:'def',label:'Specific heat',list:[L('<b>Specific heat C<sub>p</sub>:</b> the quantity of heat needed to raise the temperature of 1 kg of a material by 1 °C. Unit: J/kg·°C.','<b>الحرارة النوعية:</b> كمية الحرارة اللازمة لرفع درجة حرارة 1 kg من المادة درجة سيليزية واحدة. وحدتها J/kg·°C.')]},
   {p:L('Q and ΔT are positive when the material gains heat and negative when it loses heat.','تكون Q و ΔT موجبتين عندما تكتسب المادة حرارة، وسالبتين عندما تفقدها.')},
   {box:'dyk',label:'Did you know?',list:[L('Heat is also measured in calories: 1 cal = 4.2 J. A burning matchstick produces about 2000 J.','تُقاس الحرارة أيضًا بالسعرة: 1 cal = 4.2 J. وعود الثقاب المشتعل يعطي نحو 2000 J.')]}
  ]},
  {sn:'4.2',t:'Heat Capacity',p:'46–48',blocks:[
   {box:'def',label:'Heat capacity',list:[L('<b>Heat capacity C:</b> the amount of heat needed to raise the temperature of the whole mass of an object by 1 °C. Unit: J/°C.','<b>السعة الحرارية:</b> كمية الحرارة اللازمة لرفع درجة حرارة الكتلة كلها درجة سيليزية واحدة. وحدتها J/°C.')]},
   {eq:'C = m · C<sub>p</sub>   ⇒   Q = C · ΔT'},
   {table:{h:['Material','C<sub>p</sub> (J/kg·°C)','Material','C<sub>p</sub> (J/kg·°C)'],r:[['Water at 15 °C','4186','Glass','837'],['Ice at 0 °C','2093','Steel','500'],['Water vapour at 100 °C','2010','Iron','448'],['Wood','1750','Copper','387'],['Aluminium','900','Silver','234']],cap:'Table (1), Book p. 47 (problems use 4200 for water)'}},
   {box:'rem',label:'Remember',list:[L('Specific heat depends only on the type of material; heat capacity depends on the mass and the material.','الحرارة النوعية تعتمد على نوع المادة فقط، أما السعة الحرارية فتعتمد على الكتلة ونوع المادة.')]},
   {p:L('Water has the largest specific heat of common materials, which explains land and sea breezes and its use for cooling car engines and factory machines.','للماء أكبر حرارة نوعية بين المواد الشائعة، وهذا يفسر نسيم البر والبحر، واستعماله في تبريد محركات السيارات ومكائن المصانع.')}
  ]},
  {sn:'4.3',t:'Thermal Equilibrium',p:'48–50',blocks:[
   {p:L('Heat cannot be created or destroyed; it moves from the hot object to the cold one until their temperatures are equal. In an isolated system:','لا تفنى الحرارة ولا تُستحدث، بل تنتقل من الجسم الساخن إلى البارد حتى تتساوى درجتا حرارتهما. في نظام معزول:')},
   {eq:'Heat lost = Heat gained'},
   {p:L('The <b>calorimeter</b> measures specific heat: a thin copper container inside another, separated by an insulator (sawdust or fibres), with a lid holding a thermometer and a stirrer.','يُستعمل <b>المسعر</b> لقياس الحرارة النوعية: إناء نحاسي رقيق داخل إناء آخر يفصل بينهما عازل (نشارة أو ألياف)، وله غطاء فيه محرار ومحرك.')}
  ]},
  {sn:'4.4',t:'Heat Effect on Materials (Expansion)',p:'51–57',blocks:[
   {p:L('Heating increases the average kinetic energy and the gaps between particles. For equal heat, gases expand more than liquids, and liquids more than solids.','يزيد التسخين متوسط الطاقة الحركية والمسافات بين الدقائق. وعند تساوي الحرارة المكتسبة تتمدد الغازات أكثر من السوائل، والسوائل أكثر من المواد الصلبة.')},
   {table:{h:['Expansion','Law','Coefficient'],r:[['Linear (1D)','ΔL = α L ΔT','α (1/°C)'],['Surface (2D)','ΔA = γ A ΔT','γ = 2α'],['Volume (3D)','ΔV = β V ΔT','β = 3α']],cap:'Book p. 51–53'}},
   {box:'def',label:'Linear expansion coefficient',list:[L('<b>α:</b> the increase in each unit length of a material when heated by 1 °C. Unit 1/°C.','<b>معامل التمدد الطولي α:</b> مقدار الزيادة في وحدة الأطوال من المادة عند تسخينها درجة سيليزية واحدة. وحدته 1/°C.')]},
   {table:{h:['Material','α (1/°C)'],r:[['Aluminium','24 × 10⁻⁶'],['Copper','17 × 10⁻⁶'],['Steel','12 × 10⁻⁶'],['Glass','9 × 10⁻⁶'],['Lead','29 × 10⁻⁶'],['Cement','12 × 10⁻⁶']],cap:'Table (2), Book p. 52'}},
   {fig:BIMETAL_SVG,cap:'Figure (4.10) — bimetallic strip in a thermostat'},
   {p:L('Applications: the automatic thermostat (fridge, iron, fire alarm); lamp glass with the same α as its wire; gaps in bridges and railways.','التطبيقات: المنظم الحراري الأوتوماتيكي (الثلاجة، المكواة، جهاز إنذار الحريق)؛ زجاج المصباح بمعامل تمدد يساوي معامل سلكه؛ ترك فراغات في الجسور وسكك الحديد.')},
   {h:'Liquids'},
   {p:L('When a liquid in a glass flask is heated, its level first <b>drops</b> (the glass expands first) and then <b>rises</b>. What we see is the <b>apparent</b> expansion, less than the real one.','عند تسخين سائل في دورق زجاجي <b>ينخفض</b> مستواه أولًا (لأن الزجاج يتمدد أولًا) ثم <b>يرتفع</b>. وما نشاهده هو التمدد <b>الظاهري</b>، وهو أقل من الحقيقي.')},
   {eq:'β<sub>real</sub> = β<sub>apparent</sub> + 3α<sub>container</sub>'},
   {table:{h:['Liquid','β (× 10⁻⁴ /°C)'],r:[['Alcohol','1.12'],['Gasoline','9.6'],['Glycerin','4.85'],['Mercury','1.85']],cap:'Table (3), Book p. 56'}},
   {h:'Gases'},
   {p:L('Gases expand more than liquids and solids. All gases have the same β at constant pressure: β = 1/273 per °C. The container’s expansion is negligible, so apparent expansion = real expansion.','تتمدد الغازات أكثر من السوائل والمواد الصلبة. ولجميع الغازات المعامل نفسه عند ثبوت الضغط: β = 1/273 لكل °C. ويُهمل تمدد الإناء، فيكون التمدد الظاهري = الحقيقي.')},
   {box:'dyk',label:'Did you know?',list:[L('Pyrex glass withstands fast temperature changes because its linear expansion coefficient is very small.','يتحمل زجاج البايركس التغيرات السريعة في درجة الحرارة لأن معامل تمدده الطولي صغير جدًا.')]}
  ]},
  {sn:'4.5',t:'State Change of Matter',p:'57–60',blocks:[
   {box:'def',label:'Latent heat',list:[
     L('<b>Latent heat of fusion L<sub>f</sub>:</b> the heat needed to convert a unit mass from solid to liquid at the same temperature (melting point) and constant pressure. Unit J/kg.','<b>الحرارة الكامنة للانصهار:</b> كمية الحرارة اللازمة لتحويل وحدة الكتل من الحالة الصلبة إلى السائلة بالدرجة نفسها (درجة الانصهار) وتحت ضغط ثابت. وحدتها J/kg.'),
     L('<b>Latent heat of vaporization L<sub>v</sub>:</b> the heat needed to convert a unit mass from liquid to gas at the boiling point.','<b>الحرارة الكامنة للتبخر:</b> كمية الحرارة اللازمة لتحويل وحدة الكتل من السائل إلى الغاز عند درجة الغليان.')]},
   {eq:'Q = m · L<sub>f</sub>      Q = m · L<sub>v</sub>'},
   {fig:HEATCURVE_SVG,cap:'During melting and boiling the temperature stays constant'},
   {table:{h:['Material','Melting °C','L<sub>f</sub> kJ/kg','Boiling °C','L<sub>v</sub> kJ/kg'],r:[['Water / ice','0','335','100','2260'],['Aluminium','658.7','321','—','—'],['Copper','1083','175','2300','4820'],['Iron','1535','96','3000','6290'],['Mercury','—','—','357','284'],['Silver','—','—','2100','2360']],cap:'Tables (4) and (5), Book p. 57–60'}},
   {p:L('Evaporation happens at the surface at any temperature; boiling happens throughout the liquid at the boiling point.','التبخر يحدث على السطح وبأي درجة حرارة، أما الغليان فيحدث في السائل كله عند درجة الغليان.')}
  ]},
  {sn:'4.6',t:'Methods of Heat Transfer',p:'61–66',blocks:[
   {h:'Conduction'},
   {p:L('Heat moves through solids without the particles moving. Metals conduct well because of free electrons and close atoms; wood, rubber and plastic conduct poorly.','تنتقل الحرارة في المواد الصلبة دون انتقال الدقائق. الفلزات موصلة جيدة بسبب الإلكترونات الحرة وتقارب الذرات، والخشب والمطاط والبلاستك رديئة التوصيل.')},
   {eq:`Thermal gradient = ${fr('ΔT','L')}      H = k A ${fr('ΔT','L')}`},
   {table:{h:['Material','k (W/m·°C)','Material','k (W/m·°C)'],r:[['Silver','406','Steel','46'],['Red copper','385','Mercury','8.7'],['Gold','293','Glass','0.8'],['Aluminium','210','Bricks','0.63'],['Yellow copper','109','Water','0.61'],['Iron','79','Wood','0.15'],['Cement','0.3','Air','0.025']],cap:'Table (6), Book p. 63'}},
   {box:'think',label:'Question',list:[L('Why do firefighters wear helmets of yellow copper rather than red copper? Yellow copper (k = 109) conducts heat much less than red copper (k = 385).','لماذا يلبس رجال الإطفاء خوذًا من النحاس الأصفر لا الأحمر؟ لأن النحاس الأصفر (k = 109) أقل توصيلًا للحرارة من الأحمر (k = 385).')]},
   {h:'Convection'},
   {p:L('The particles of the fluid themselves move, carrying heat. It happens only in fluids. <b>Free convection</b> is driven by gravity (hot air rises); <b>forced convection</b> uses a pump or fan, as in car engine cooling and central heating.','تنتقل دقائق المائع نفسها حاملة الحرارة، ويحدث في الموائع فقط. <b>الحمل الحر</b> بتأثير الجاذبية (الهواء الساخن يرتفع)، و<b>الحمل القسري</b> بمضخة أو مروحة، كما في تبريد محرك السيارة والتدفئة المركزية.')},
   {h:'Radiation'},
   {p:L('Heat travels as electromagnetic waves at the speed of light, even through empty space (from the Sun). The energy emitted depends on the surface (area and colour — black emits more) and the temperature. Good emitters are good absorbers; rough dark surfaces absorb more than smooth light ones.','تنتقل الحرارة بموجات كهرومغناطيسية بسرعة الضوء حتى في الفراغ (من الشمس). تعتمد الطاقة المنبعثة على طبيعة السطح (المساحة واللون، والأسود يشع أكثر) وعلى درجة الحرارة. والمشع الجيد ماص جيد، والسطوح الخشنة الداكنة تمتص أكثر من الملساء الفاتحة.')}
  ]},
  {sn:'4.7',t:'Thermal Pollution',p:'67',blocks:[
   {p:L('Human activities raise the temperature of land, air and water, disturbing the environment. Main sources: power stations (including nuclear) that discharge hot cooling water into rivers and seas, and oil refineries whose hot water also carries oil and fat.','ترفع أنشطة الإنسان درجة حرارة الأرض والهواء والماء فتخل بالتوازن البيئي. أهم المصادر: محطات توليد الطاقة (ومنها النووية) التي تصرف مياه التبريد الساخنة إلى الأنهار والبحار، ومصافي النفط التي تحمل مياهها الساخنة زيوتًا ودهونًا.')}
  ]}
 ],
 laws:[
  {t:'Quantity of heat',eq:'Q = m C<sub>p</sub> ΔT',d:[['m','mass (kg)'],['C<sub>p</sub>','specific heat (J/kg·°C)'],['ΔT','T₂ − T₁ (°C)']],use:L('Heating or cooling without a change of state.','التسخين أو التبريد دون تغير الحالة.'),err:L('Using grams instead of kilograms.','استعمال الغرام بدل الكيلوغرام.')},
  {t:'Heat capacity',eq:'C = m C<sub>p</sub>  ;  Q = C ΔT',d:[['C','heat capacity (J/°C)']],use:L('A calorimeter or a whole object.','المسعر أو الجسم كاملًا.')},
  {t:'Thermal equilibrium',eq:'Σ Q<sub>lost</sub> = Σ Q<sub>gained</sub>',d:[['T<sub>f</sub>','final common temperature']],use:L('Mixtures; include the calorimeter if its heat capacity is given.','الخلائط؛ أضف المسعر إذا أُعطيت سعته الحرارية.')},
  {t:'Expansion',eq:'ΔL = αLΔT · ΔA = γAΔT · ΔV = βVΔT',d:[['γ','2α'],['β','3α (solids); 1/273 for gases']],use:L('β<sub>real</sub> = β<sub>apparent</sub> + 3α<sub>container</sub>.','β الحقيقي = β الظاهري + 3α للإناء.')},
  {t:'Latent heat',eq:'Q = m L<sub>f</sub>  ;  Q = m L<sub>v</sub>',d:[['L<sub>f</sub>','335 kJ/kg (ice)'],['L<sub>v</sub>','2260 kJ/kg (water)']],use:L('At constant temperature during melting or boiling.','عند ثبوت درجة الحرارة أثناء الانصهار أو الغليان.'),err:L('Multiplying by ΔT during a change of state.','الضرب في ΔT أثناء تغير الحالة.')},
  {t:'Heat conduction',eq:`H = k A ${fr('ΔT','L')}`,d:[['H','rate of heat transfer (W)'],['k','conductivity (W/m·°C)'],['L','length or thickness (m)']],use:L('Rods, windows and walls.','القضبان والنوافذ والجدران.'),err:L('Forgetting to convert cm² to m² and mm to m.','نسيان تحويل cm² إلى m² و mm إلى m.')}
 ],
 examples:[
  {t:L('Book: heat to raise 3 kg of aluminium from 15 °C to 25 °C (C<sub>p</sub> = 900).','الكتاب: الحرارة اللازمة لرفع درجة حرارة 3 kg من الألمنيوم من 15 إلى 25 °C.'),p:'47',steps:[['Law','Q = m C<sub>p</sub> ΔT'],['Sub','3 × 900 × 10']],res:'Q = 27 000 J'},
  {t:L('Book: a 0.5 kg aluminium cube at 100 °C is put in 1 kg of water at 20 °C. Find the final temperature.','الكتاب: مكعب ألمنيوم 0.5 kg بدرجة 100 °C وُضع في 1 kg ماء بدرجة 20 °C. أوجد درجة الحرارة النهائية.'),p:'49',steps:[['Balance','1 × 4200 (T<sub>f</sub> − 20) = 0.5 × 900 (100 − T<sub>f</sub>)'],['Solve','4650 T<sub>f</sub> = 129 000']],res:'T<sub>f</sub> ≈ 27.7 °C'},
  {t:L('Book: a calorimeter holds 100 g of water at 10 °C; 100 g at 80 °C is added; the mixture reaches 38 °C. Find the calorimeter’s heat capacity.','الكتاب: مسعر فيه 100 g ماء بدرجة 10 °C أُضيف إليه 100 g بدرجة 80 °C فأصبحت 38 °C. أوجد السعة الحرارية للمسعر.'),p:'50',steps:[['Gained','0.1 × 4200 × 28 + 28C = 11 760 + 28C'],['Lost','0.1 × 4200 × 42 = 17 640'],['Solve','28C = 5880']],res:'C = 210 J/°C'},
  {t:L('Book: heat to convert 2 kg of ice at −15 °C to water at 25 °C.','الكتاب: الحرارة اللازمة لتحويل 2 kg جليد بدرجة −15 °C إلى ماء بدرجة 25 °C.'),p:'58',steps:[['Q₁','ice −15→0: 2 × 2093 × 15 = 62 790 J'],['Q₂','melting: 2 × 335 000 = 670 000 J'],['Q₃','water 0→25: 2 × 4200 × 25 = 210 000 J']],res:'Q = 942 790 J'},
  {t:L('Book: a 60 L petrol tank at 25 °C is heated to 45 °C. How much spills? (β = 9.6 × 10⁻⁴)','الكتاب: خزان بنزين 60 L بدرجة 25 °C سخن إلى 45 °C. كم يتسرب؟'),p:'56',steps:[['Law','ΔV = V β ΔT'],['Sub','60 × 9.6 × 10⁻⁴ × 20']],res:'ΔV = 1.152 L'},
  {t:L('Book: a glass window 2.2 m × 1.2 m, 5 mm thick, 22 °C inside and 3 °C outside (k = 0.8). Find the rate of heat loss.','الكتاب: نافذة زجاجية 2.2 m × 1.2 m وسمكها 5 mm، الداخل 22 °C والخارج 3 °C (k = 0.8). أوجد معدل انتقال الحرارة.'),p:'64',steps:[['Law','H = k A ΔT / L'],['Sub','0.8 × 2.64 × 19 / 0.005']],res:'H ≈ 8026 W'}
 ],
 quiz:[
  {ty:'mcq',k:'MCQ',q:L('The unit of specific heat is:','وحدة الحرارة النوعية:'),o:['J','J/°C','J/kg·°C','W'],a:2,x:L('Per kg per °C.','لكل kg لكل °C.')},
  {ty:'mcq',k:'MCQ',q:L('The unit of heat capacity is:','وحدة السعة الحرارية:'),o:['J/kg','J/°C','J/kg·°C','W/m·°C'],a:1,x:L('C = mC<sub>p</sub>.','C = mC<sub>p</sub>.')},
  {ty:'mcq',k:'MCQ',q:L('Among these, the largest specific heat belongs to:','أكبر حرارة نوعية بين هذه المواد:'),o:['iron','water','copper','aluminium'],a:1,x:L('Water, about 4200 J/kg·°C.','الماء، نحو 4200 J/kg·°C.')},
  {ty:'mcq',k:'MCQ',q:L('1 calorie equals:','السعرة تساوي:'),o:['1 J','4.2 J','42 J','0.24 J'],a:1,x:L('1 cal = 4.2 J.','1 cal = 4.2 J.')},
  {ty:'mcq',k:'MCQ',q:L('During melting, the temperature of ice:','أثناء الانصهار تبقى درجة حرارة الجليد:'),o:['rises','falls','stays constant','doubles'],a:2,x:L('All heat goes to changing the state.','كل الحرارة تذهب لتغيير الحالة.')},
  {ty:'mcq',k:'MCQ',q:L('The surface expansion coefficient γ equals:','معامل التمدد السطحي γ يساوي:'),o:['α','2α','3α','α/2'],a:1,x:L('γ = 2α.','γ = 2α.')},
  {ty:'mcq',k:'MCQ',q:L('The volume expansion coefficient β of a solid equals:','معامل التمدد الحجمي β للصلب يساوي:'),o:['α','2α','3α','α³'],a:2,x:L('β = 3α.','β = 3α.')},
  {ty:'mcq',k:'MCQ',q:L('β for any gas at constant pressure is:','β لأي غاز عند ثبوت الضغط:'),o:['1/100','1/273 per °C','273','zero'],a:1,x:L('Book p. 57.','الكتاب صفحة 57.')},
  {ty:'mcq',k:'MCQ',q:L('Heat reaches us from the Sun by:','تصلنا حرارة الشمس بطريقة:'),o:['conduction','convection','radiation','all three'],a:2,x:L('Space has no material medium.','الفضاء ليس فيه وسط مادي.')},
  {ty:'mcq',k:'MCQ',q:L('Convection happens only in:','يحدث الحمل فقط في:'),o:['solids','fluids','vacuum','metals'],a:1,x:L('The particles must move.','يجب أن تتحرك الدقائق.')},
  {ty:'mcq',k:'MCQ',q:L('The best conductor in Table (6) is:','أفضل موصل في الجدول (6):'),o:['red copper','gold','silver','aluminium'],a:2,x:L('Silver, k = 406.','الفضة، k = 406.')},
  {ty:'mcq',k:'MCQ',q:L('If a window’s area and thickness are both halved, the rate of heat transfer becomes:','إذا نقصت مساحة النافذة وسمكها إلى النصف، يصبح معدل انتقال الحرارة:'),o:['4H','2H','H','H/2'],a:2,x:L('H ∝ A/L, both halved ⇒ unchanged.','H ∝ A/L، وكلاهما نصف ⇒ لا يتغير.')},
  {ty:'mcq',k:'MCQ',q:L('When vapour condenses into liquid, it:','عندما يتكاثف البخار إلى سائل فإنه:'),o:['absorbs heat','emits heat','gets hotter','gets colder'],a:1,x:L('It gives out its latent heat.','يطلق حرارته الكامنة.')},
  {ty:'mcq',k:'MCQ',q:L('Car engine cooling uses:','تبريد محرك السيارة يستعمل:'),o:['free convection','forced convection','radiation only','conduction only'],a:1,x:L('A pump moves the water.','مضخة تحرك الماء.')},
  {ty:'mcq',k:'MCQ',q:L('Which metal of equal length is longest after heating to 250 °C?','أي فلز بطول متساوٍ يكون الأطول بعد تسخينه إلى 250 °C؟'),o:['steel','copper','aluminium','glass'],a:2,x:L('Aluminium has the largest α (24 × 10⁻⁶).','للألمنيوم أكبر α.')},
  {ty:'tf',k:'True/False',q:L('Specific heat depends on the mass of the object.','الحرارة النوعية تعتمد على كتلة الجسم.'),a:false,x:L('False → only on the <b>type of material</b>.','خطأ ← على <b>نوع المادة</b> فقط.')},
  {ty:'tf',k:'True/False',q:L('The real expansion of a liquid is greater than its apparent expansion.','التمدد الحقيقي للسائل أكبر من تمدده الظاهري.'),a:true,x:L('True: β<sub>r</sub> = β<sub>a</sub> + 3α.','صح: β<sub>r</sub> = β<sub>a</sub> + 3α.')},
  {ty:'tf',k:'True/False',q:L('Black surfaces radiate energy less than light-coloured ones.','السطوح السوداء تشع طاقة أقل من الفاتحة.'),a:false,x:L('False → they radiate <b>more</b>.','خطأ ← تشع <b>أكثر</b>.')},
  {ty:'tf',k:'True/False',q:L('Evaporation can happen at any temperature.','يمكن أن يحدث التبخر بأي درجة حرارة.'),a:true,x:L('True — boiling happens only at the boiling point.','صح، أما الغليان فعند درجة الغليان فقط.')},
  {ty:'tf',k:'True/False',q:L('Power stations near rivers can cause thermal pollution.','محطات الطاقة القريبة من الأنهار قد تسبب تلوثًا حراريًا.'),a:true,x:L('True — hot cooling water is discharged into the river.','صح، تُصرف مياه التبريد الساخنة إلى النهر.')},
  {ty:'open',k:'Define',q:L('Define: Specific heat.','عرّف: الحرارة النوعية.'),x:L('The heat needed to raise the temperature of 1 kg of a material by 1 °C.','كمية الحرارة اللازمة لرفع درجة حرارة 1 kg من المادة درجة سيليزية واحدة.')},
  {ty:'open',k:'Define',q:L('Define: Thermal gradient.','عرّف: الانحدار الحراري.'),x:L('The change in the conductor’s temperature per metre of its length when heat flows perpendicular to its cross-section: ΔT/L.','مقدار التغير في درجة حرارة الموصل لكل متر من طوله عند انتقال الحرارة عموديًا على مقطعه: ΔT/L.')},
  {ty:'open',k:'Define',q:L('Define: Latent heat of fusion.','عرّف: الحرارة الكامنة للانصهار.'),x:L('The heat needed to convert a unit mass from solid to liquid at the melting point without changing its temperature.','كمية الحرارة اللازمة لتحويل وحدة الكتل من الصلب إلى السائل عند درجة الانصهار دون تغير درجة حرارتها.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: steel is suitable for reinforcing cement.','علّل: الحديد الصلب مناسب لتقوية الإسمنت.'),x:L('Both have the same α (12 × 10⁻⁶ /°C), so they expand together without cracking.','لأن لهما معامل التمدد نفسه (12 × 10⁻⁶)، فيتمددان معًا دون تشقق.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: solar-heater pipes are painted black.','علّل: تُطلى أنابيب السخان الشمسي باللون الأسود.'),x:L('Black surfaces absorb radiation more.','لأن السطوح السوداء تمتص الإشعاع أكثر.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: iron at 0 °C feels colder than wood at 0 °C.','علّل: نشعر أن الحديد بدرجة 0 °C أبرد من الخشب بالدرجة نفسها.'),x:L('Iron is a good conductor and takes heat from the hand quickly; wood is a poor conductor.','الحديد موصل جيد فيسحب الحرارة من اليد بسرعة، والخشب رديء التوصيل.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: a mercury thermometer in a hot liquid first drops a little, then rises.','علّل: المحرار الزئبقي في سائل ساخن ينخفض قليلًا أولًا ثم يرتفع.'),x:L('The glass heats and expands first, so the level drops; then the mercury heats and expands more than the glass.','يسخن الزجاج ويتمدد أولًا فينخفض المستوى، ثم يسخن الزئبق ويتمدد أكثر من الزجاج.')},
  {ty:'open',k:'Problem · easy',q:L('Heat gained by 200 g of water from 20 °C to 80 °C.','الحرارة التي يكتسبها 200 g ماء من 20 °C إلى 80 °C.'),x:L('Q = 0.2 × 4200 × 60 = <b>50 400 J</b>','Q = 0.2 × 4200 × 60 = <b>50 400 J</b>')},
  {ty:'open',k:'Problem · easy',q:L('Heat capacity of 4 kg of iron (C<sub>p</sub> = 448).','السعة الحرارية لـ 4 kg من الحديد (C<sub>p</sub> = 448).'),x:L('C = 4 × 448 = <b>1792 J/°C</b>','C = 4 × 448 = <b>1792 J/°C</b>')},
  {ty:'open',k:'Problem · medium',q:L('An aluminium rod 2 m long is heated by 50 °C. Find its increase in length (α = 24 × 10⁻⁶).','قضيب ألمنيوم طوله 2 m سخن 50 °C. أوجد الزيادة في طوله.'),x:L('ΔL = 24 × 10⁻⁶ × 2 × 50 = <b>2.4 × 10⁻³ m</b>','ΔL = 24 × 10⁻⁶ × 2 × 50 = <b>2.4 × 10⁻³ m</b>')},
  {ty:'open',k:'Problem · medium',q:L('Final temperature of 300 g of water at 20 °C after gaining 37 800 J.','درجة الحرارة النهائية لـ 300 g ماء بدرجة 20 °C بعد اكتسابه 37800 J.'),x:L('ΔT = 37 800 / (0.3 × 4200) = 30 ⇒ <b>50 °C</b>','ΔT = 37 800 / (0.3 × 4200) = 30 ⇒ <b>50 °C</b>')},
  {ty:'open',k:'Problem · hard',q:L('A brick wall of area 10 m², 15 cm thick, with sides at 20 °C and 10 °C (k = 0.63). Find H.','جدار طابوق مساحته 10 m² وسمكه 15 cm، وجهاه بدرجتي 20 و 10 °C (k = 0.63). أوجد H.'),x:L('H = 0.63 × 10 × 10 / 0.15 = <b>420 W</b>','H = 0.63 × 10 × 10 / 0.15 = <b>420 W</b>')}
 ],
 exam:[
  {m:12,q:L('Heat required to convert 2 kg of water at 30 °C to vapour at 110 °C.','الحرارة اللازمة لتحويل 2 kg ماء بدرجة 30 °C إلى بخار بدرجة 110 °C.'),steps:[['Q₁','2 × 4200 × 70 = 588 000 J'],['Q₂','2 × 2 260 000 = 4 520 000 J'],['Q₃','2 × 2010 × 10 = 40 200 J']],res:'Q = 5 148 200 J',tip:L('Paper A (distinguished, 2026) used this question.','جاء هذا السؤال في الورقة A (المتميزين 2026).')},
  {m:12,q:L('0.5 kg of water at 20 °C is frozen into ice at −5 °C. How much energy is removed?','0.5 kg ماء بدرجة 20 °C جُمِّد إلى جليد بدرجة −5 °C. ما الطاقة المسحوبة؟'),steps:[['Q₁','0.5 × 4200 × (−20) = −42 000 J'],['Q₂','−0.5 × 335 000 = −167 500 J'],['Q₃','0.5 × 2093 × (−5) = −5 232.5 J']],res:'Q = −214 732.5 J'},
  {m:12,q:L('A calorimeter of heat capacity 50 J/°C holds 0.5 kg of water at 10 °C; 1 kg of water at 80 °C is added. Find the final temperature.','مسعر سعته الحرارية 50 J/°C فيه 0.5 kg ماء بدرجة 10 °C، أُضيف إليه 1 kg ماء بدرجة 80 °C. أوجد درجة الحرارة النهائية.'),steps:[['Gained','(50 + 0.5 × 4200)(T<sub>f</sub> − 10) = 2150 (T<sub>f</sub> − 10)'],['Lost','1 × 4200 (80 − T<sub>f</sub>)'],['Solve','6350 T<sub>f</sub> = 357 500']],res:'T<sub>f</sub> ≈ 56.3 °C'},
  {m:12,q:L('An iron rod 50 cm long and 1 cm² in section: one end at 200 °C, the other at 0 °C (k = 79). Find the thermal gradient and H.','قضيب حديد طوله 50 cm ومقطعه 1 cm²، أحد طرفيه 200 °C والآخر 0 °C (k = 79). أوجد الانحدار الحراري و H.'),steps:[['Gradient','200 / 0.5 = 400 °C/m'],['H','79 × 10⁻⁴ × 400']],res:'400 °C/m ; 3.16 W'},
  {m:10,q:L('A gold piece of 100 g at 25 °C (C<sub>p</sub> = 129) receives 516 J. Find its heat capacity and final temperature.','قطعة ذهب 100 g بدرجة 25 °C (C<sub>p</sub> = 129) تكتسب 516 J. أوجد سعتها الحرارية ودرجة حرارتها النهائية.'),steps:[['C','0.1 × 129 = 12.9 J/°C'],['ΔT','516 / 12.9 = 40 °C']],res:'C = 12.9 J/°C ; T = 65 °C'},
  {m:10,q:L('Heat lost by 500 g of copper cooling from 75 °C to 25 °C (C<sub>p</sub> = 387).','الحرارة التي يفقدها 500 g نحاس عند تبريده من 75 إلى 25 °C.'),steps:[['Sub','0.5 × 387 × (25 − 75)']],res:'Q = −9675 J'},
  {m:8,q:L('Three masses of water 0.5, 0.1 and 1 kg are heated by identical heaters for 3 min. Which rises most in temperature, and why?','ثلاث كتل ماء 0.5 و 0.1 و 1 kg تُسخن بمسخنات متماثلة 3 دقائق. أيها ترتفع درجة حرارتها أكثر، ولماذا؟'),steps:[['Same Q','ΔT = Q / (m C<sub>p</sub>)'],['So','smallest mass ⇒ largest ΔT']],res:'0.1 kg'},
  {m:8,q:L('Equal masses of water and oil are heated for the same time. Which warms faster, and why?','كتلتان متساويتان من الماء والزيت تُسخنان المدة نفسها. أيهما يسخن أسرع، ولماذا؟'),steps:[['Reason','oil has a smaller specific heat than water']],res:'the oil'}
 ],
 book:{p:'68–70',mcq:[
  {q:'When water changes from one state to another, its temperature:',ar:'عندما يتحول الماء من حالة إلى أخرى فإن درجة حرارته:',o:['increases by 1 °C','always changes','decreases 1 °C then stays constant','stays constant until all of it is converted'],a:3},
  {q:'Two insulated objects with T₁ > T₂ touch. Heat flows until:',ar:'جسمان معزولان T₁ > T₂ تلامسا. تنتقل الحرارة حتى:',o:['T₂ becomes less than T₁','T₁ becomes less than T₂','both reach T with T₂ < T < T₁','T₁ becomes zero'],a:2},
  {q:'A window passes heat at rate H. If its area and thickness are halved, the rate becomes:',ar:'نافذة تنقل الحرارة بمعدل H. إذا نقصت مساحتها وسمكها إلى النصف يصبح المعدل:',o:['4H','2H','H','H/2'],a:2},
  {q:'When vapour condenses into liquid:',ar:'عندما يتكاثف البخار ويصبح سائلًا:',o:['its temperature increases','its temperature decreases','it absorbs heat','it emits heat'],a:3},
  {q:'Heat transfer in space is done by:',ar:'انتقال الحرارة في الفضاء يتم بـ:',o:['radiation only','convection only','radiation and convection only','radiation, conduction and convection'],a:0},
  {q:'With constant mass and temperature change, the heat quantity depends on:',ar:'عند ثبوت الكتلة والتغير في درجة الحرارة تعتمد كمية الحرارة على:',o:['volume of the object','shape of the object','type of material','all of the above'],a:2},
  {q:'To convert a liquid to gas at the boiling point we supply:',ar:'لتحويل سائل إلى غاز عند درجة الغليان نجهزه بحرارة تساوي:',o:['m × Lv × temperature','m × temperature difference','Lv only','m × Lv'],a:3}
 ],
 openTitle:'Q2 · Answer the following',
 open:[
  [L('1. Rods of copper, steel and aluminium are equal at 0 °C. Which is longest at 250 °C?','1. قضبان نحاس وفولاذ وألمنيوم متساوية الطول عند 0 °C. أيها أطول عند 250 °C؟'),L('Aluminium — it has the largest α (24 × 10⁻⁶ /°C).','الألمنيوم، لأن له أكبر معامل تمدد طولي.')],
  [L('2. Why is steel suitable for reinforcing cement?','2. لماذا يُعد الفولاذ مناسبًا لتقوية الإسمنت؟'),L('Steel and cement have the same α (12 × 10⁻⁶ /°C), so they expand and contract together.','لأن لهما معامل التمدد نفسه (12 × 10⁻⁶)، فيتمددان وينكمشان معًا.')],
  [L('3. Why should the radiator cap not be opened until the engine cools?','3. لماذا يُنصح بعدم فتح غطاء المشع حتى يبرد المحرك؟'),L('The hot water is under pressure; opening the cap lowers the pressure, the water boils suddenly and hot water and steam spray out.','الماء الساخن تحت ضغط، وفتح الغطاء يخفض الضغط فيغلي الماء فجأة ويندفع الماء والبخار الساخن.')],
  [L('4. Why are solar-heater pipes painted black?','4. لماذا تُطلى أنابيب السخان الشمسي بالأسود؟'),L('Black absorbs radiation more.','لأن الأسود يمتص الإشعاع أكثر.')],
  [L('5. Water in an aluminium cup freezes before water in a glass cup in the fridge.','5. يتجمد الماء في كوب الألمنيوم قبل الماء في كوب الزجاج داخل الثلاجة.'),L('Aluminium conducts heat much better than glass (210 vs 0.8 W/m·°C), so heat leaves faster.','الألمنيوم أفضل توصيلًا من الزجاج بكثير، فتخرج الحرارة أسرع.')],
  [L('6. Iron feels colder than wood at 0 °C.','6. نشعر أن الحديد أبرد من الخشب عند 0 °C.'),L('Iron conducts heat away from the hand quickly.','الحديد يسحب الحرارة من اليد بسرعة لأنه موصل جيد.')],
  [L('7. Hot water is poured on the metal lid of a glass jar to open it easily.','7. يُصب الماء الساخن على الغطاء المعدني لوعاء زجاجي ليُفتح بسهولة.'),L('The metal lid expands more than the glass and loosens.','الغطاء المعدني يتمدد أكثر من الزجاج فيرتخي.')]
 ],
 probs:[
  {q:L('P1. Gold 100 g at 25 °C (C<sub>p</sub> = 129). Find (a) its heat capacity (b) its temperature after receiving 516 J.','م1. ذهب 100 g بدرجة 25 °C. أوجد (أ) سعته الحرارية (ب) درجة حرارته بعد اكتساب 516 J.'),steps:[['C','0.1 × 129'],['ΔT','516/12.9 = 40']],res:'12.9 J/°C ; 65 °C'},
  {q:L('P2. Heat lost by 160 g of steam at 100 °C becoming water at 20 °C.','م2. الحرارة التي يفقدها 160 g بخار بدرجة 100 °C حين يصبح ماء بدرجة 20 °C.'),steps:[['Condense','−0.16 × 2 260 000 = −361 600 J'],['Cool','0.16 × 4200 × (−80) = −53 760 J']],res:'Q = −415 360 J'},
  {q:L('P3. A container (50 J/°C) holds 0.5 kg of water at 10 °C; 1 kg at 80 °C is added. Final temperature?','م3. إناء سعته 50 J/°C فيه 0.5 kg ماء بدرجة 10 °C، أُضيف 1 kg بدرجة 80 °C. ما درجة الحرارة النهائية؟'),steps:[['Balance','2150 (T − 10) = 4200 (80 − T)']],res:'T<sub>f</sub> ≈ 56.3 °C'},
  {q:L('P4. Brick wall 10 m², 15 cm thick, sides 20 °C and 10 °C (k = 0.63). Find H.','م4. جدار طابوق 10 m² وسمكه 15 cm، وجهاه 20 و 10 °C. أوجد H.'),steps:[['Sub','0.63 × 10 × 10 / 0.15']],res:'H = 420 W'},
  {q:L('P7. Heat gained by 200 g of water from 20 °C to 80 °C.','م7. الحرارة التي يكتسبها 200 g ماء من 20 إلى 80 °C.'),steps:[['Sub','0.2 × 4200 × 60']],res:'Q = 50 400 J'},
  {q:L('P8. Heat lost by 500 g of copper from 75 °C to 25 °C (C<sub>p</sub> = 387).','م8. الحرارة التي يفقدها 500 g نحاس من 75 إلى 25 °C.'),steps:[['Sub','0.5 × 387 × (−50)']],res:'Q = −9675 J'},
  {q:L('P9. Final temperature of 300 g of water at 20 °C gaining 37 800 J.','م9. درجة الحرارة النهائية لـ 300 g ماء بدرجة 20 °C اكتسب 37800 J.'),steps:[['ΔT','37 800/(0.3 × 4200) = 30']],res:'T = 50 °C'},
  {q:L('P10. 0.5 kg of water at 20 °C becomes ice at −5 °C. Energy removed?','م10. 0.5 kg ماء بدرجة 20 °C يصبح جليدًا بدرجة −5 °C. ما الطاقة المسحوبة؟'),steps:[['Q₁','−42 000 J'],['Q₂','−167 500 J'],['Q₃','−5 232.5 J']],res:'Q = −214 732.5 J'}
 ]},
 summary:[
  L('Q = m C<sub>p</sub> ΔT; heat capacity C = m C<sub>p</sub> (J/°C).','Q = m C<sub>p</sub> ΔT؛ السعة الحرارية C = m C<sub>p</sub> بوحدة J/°C.'),
  L('Thermal equilibrium: heat lost = heat gained.','الاتزان الحراري: الحرارة المفقودة = الحرارة المكتسبة.'),
  L('Expansion: ΔL = αLΔT, γ = 2α, β = 3α; gases β = 1/273; β<sub>real</sub> = β<sub>apparent</sub> + 3α.','التمدد: ΔL = αLΔT، γ = 2α، β = 3α؛ الغازات 1/273؛ β الحقيقي = الظاهري + 3α.'),
  L('Change of state at constant temperature: Q = mL<sub>f</sub> (335 kJ/kg), Q = mL<sub>v</sub> (2260 kJ/kg).','تغير الحالة بدرجة ثابتة: Q = mL<sub>f</sub> و Q = mL<sub>v</sub>.'),
  L('Conduction H = kAΔT/L; convection (free/forced) in fluids; radiation through space.','التوصيل H = kAΔT/L؛ الحمل (حر/قسري) في الموائع؛ الإشعاع عبر الفضاء.'),
  L('Thermal pollution: power stations and refineries discharging hot water.','التلوث الحراري: محطات الطاقة والمصافي التي تصرف مياهًا ساخنة.')
 ],
 extra:{t:'Constants from the book',items:[['C<sub>p</sub> water','4200 J/kg·°C'],['C<sub>p</sub> ice','2093 J/kg·°C'],['C<sub>p</sub> steam','2010 J/kg·°C'],['L<sub>f</sub> ice','335 kJ/kg'],['L<sub>v</sub> water','2260 kJ/kg']]}
};
(window.XL=window.XL||[]).push({ch:4,t:'Heating curve calculator',d:L('Choose a mass of water/ice and the start and end temperatures. Every stage of the heating curve is calculated with the book’s constants.','اختر كتلة الماء أو الجليد ودرجتي البداية والنهاية، وستُحسب كل مرحلة من منحنى التسخين بثوابت الكتاب.'),
 html:`<div class="calc"><label>Mass (kg)<input id="qm" type="number" value="2" step="any"></label><label>Start T (°C)<input id="qT1" type="number" value="-15"></label><label>End T (°C)<input id="qT2" type="number" value="110"></label></div><div id="qOut" style="margin-top:10px"></div>`,
 init(){const d=()=>{const m=+$('#qm').value,a=+$('#qT1').value,b=+$('#qT2').value;const st=[];let tot=0;const lo=Math.min(a,b),hi=Math.max(a,b),sg=b>=a?1:-1;
  const add=(k,v)=>{st.push([k,`${sci(v*sg)} J`]);tot+=v};
  if(lo<0) add('ice '+lo+'→'+Math.min(hi,0)+' °C',m*2093*(Math.min(hi,0)-lo));
  if(lo<=0&&hi>0) add('melting at 0 °C',m*335000);
  if(hi>0&&lo<100) add('water '+Math.max(lo,0)+'→'+Math.min(hi,100)+' °C',m*4200*(Math.min(hi,100)-Math.max(lo,0)));
  if(lo<100&&hi>=100&&hi>lo) add('boiling at 100 °C',m*2260000);
  if(hi>100) add('steam '+Math.max(lo,100)+'→'+hi+' °C',m*2010*(hi-Math.max(lo,100)));
  $('#qOut').innerHTML=steps(st.length?st:[['—','no change']])+`<div class="res">✓ Q = ${sci(tot*sg)} J ${sg<0?'(heat removed)':''}</div>`};['qm','qT1','qT2'].forEach(i=>$('#'+i).oninput=d);d();}});

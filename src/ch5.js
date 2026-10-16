/* ---------- Chapter 5: The Light ---------- */
const SPEC_SVG=`<svg viewBox="0 0 520 120" role="img" aria-label="Visible spectrum"><defs><linearGradient id="vis" x1="0" x2="1"><stop offset="0" stop-color="#7b2ff7"/><stop offset=".2" stop-color="#2f5bff"/><stop offset=".4" stop-color="#1fb3a6"/><stop offset=".55" stop-color="#3cc23c"/><stop offset=".7" stop-color="#f2d22b"/><stop offset=".85" stop-color="#f28a2b"/><stop offset="1" stop-color="#e2322b"/></linearGradient></defs>
<g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)"><rect x="140" y="30" width="240" height="34" fill="url(#vis)" rx="4"/>
<rect x="20" y="30" width="120" height="34" fill="var(--line)"/><rect x="380" y="30" width="120" height="34" fill="var(--line)"/>
<text x="80" y="52" text-anchor="middle" fill="var(--ink)">UV · X-ray · γ</text><text x="440" y="52" text-anchor="middle" fill="var(--ink)">IR · radio</text>
<text x="140" y="82" text-anchor="middle">400 nm violet</text><text x="380" y="82" text-anchor="middle">700 nm red</text>
<text x="260" y="105" text-anchor="middle">← higher frequency, higher photon energy</text></g></svg>`;
const INV_SVG=`<svg viewBox="0 0 520 170" role="img" aria-label="Inverse square law"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<circle cx="30" cy="85" r="7" fill="var(--c5)"/><path d="M30 85 L480 15 M30 85 L480 155" stroke="var(--c5)" stroke-dasharray="3 3"/>
${[[130,1,'1 m','A'],[230,2,'2 m','4A'],[330,3,'3 m','9A']].map(([x,k,d,a])=>{const h=(x-30)/450*140/2;return `<rect x="${x-3}" y="${85-h}" width="6" height="${2*h}" fill="var(--c5)" opacity=".7"/><text x="${x}" y="${85+h+16}" text-anchor="middle">${d}</text><text x="${x}" y="${85-h-6}" text-anchor="middle" fill="var(--ink)">${a} · E/${k*k}</text>`}).join('')}
</g></svg>`;
CHD[5]={
 obj:[L('Compare the particle and wave theories of light and Maxwell’s electromagnetic theory.','المقارنة بين النظرية الدقائقية والنظرية الموجية للضوء ونظرية ماكسويل الكهرومغناطيسية.'),
      L('Calculate frequency and photon energy from wavelength.','حساب التردد وطاقة الفوتون من الطول الموجي.'),
      L('State Huygens’ principle and explain the point light source.','ذكر مبدأ هايغنز وتوضيح المصدر الضوئي النقطي.'),
      L('Distinguish luminous intensity, luminous flux and illuminance with their units.','التمييز بين شدة الإضاءة والفيض الضوئي والاستضاءة ووحداتها.'),
      L('Apply the inverse square law and the photometer condition.','تطبيق قانون التربيع العكسي وشرط الفوتومتر.')],
 lessons:[
  {sn:'5.1',t:'Nature of Light and its Propagation',p:'71–73',blocks:[
   {p:L('<b>Luminous objects</b> emit light (a candle, the Sun). <b>Illuminated objects</b> reflect light (the Moon). Light carries energy from the Sun to the Earth through empty space.','<b>الأجسام المضيئة</b> تبعث الضوء (الشمعة، الشمس). و<b>الأجسام المستضيئة</b> تعكس الضوء (القمر). والضوء يحمل طاقة من الشمس إلى الأرض عبر الفراغ.')},
   {table:{h:['Theory','By','Explained','Failed / note'],r:[['Particulate (corpuscles)','Newton','reflection, refraction, straight-line travel','its refraction explanation was wrong'],['Wave','Huygens','reflection, refraction, interference, diffraction','—'],['Electromagnetic','Clark Maxwell (end of 19th c.)','every light ray is an electromagnetic wave','black-body radiation, photoelectric effect'],['Quantum (photons)','Max Planck','black-body radiation','light comes in packets of energy']],cap:'Book p. 71–72'}},
   {fig:SPEC_SVG,cap:'Figure (5.3) — visible light from about 400 nm (violet) to 700 nm (red)'},
   {eq:`f = ${fr('c','λ')}      E = h · f = ${fr('h · c','λ')}`},
   {p:L('c = 3 × 10⁸ m/s; h = Planck’s constant = 6.63 × 10⁻³⁴ J·s. The photon energy is directly proportional to the frequency.','c = 3 × 10⁸ m/s؛ h ثابت بلانك = 6.63 × 10⁻³⁴ J·s. وطاقة الفوتون تتناسب طرديًا مع التردد.')},
   {box:'def',label:'Photon',list:[L('<b>Photon:</b> an indivisible packet (quantum) of light energy; light is radiated from the source in photons, not continuously.','<b>الفوتون:</b> حزمة (كمّة) من طاقة الضوء غير قابلة للتجزئة، فالضوء ينبعث من المصدر على شكل فوتونات لا بشكل مستمر.')]},
   {box:'dyk',label:'Did you know?',list:[L('A light year is the distance light travels in vacuum in 365 days, about 10¹³ km.','السنة الضوئية هي المسافة التي يقطعها الضوء في الفراغ خلال 365 يومًا، نحو 10¹³ km.')]}
  ]},
  {sn:'5.2',t:'Point Light Source',p:'74',blocks:[
   {table:{h:['Opening diameter d','What happens'],r:[['d ≫ λ','the wave passes and continues in a straight line'],['d ≈ λ','the wave spreads from the opening in all directions'],['d ≪ λ','the opening acts as a point source of light']],cap:'Figure (5.4)'}},
   {p:L('Light from a point source spreads in vacuum in <b>all directions</b>.','ينتشر ضوء المصدر النقطي في الفراغ في <b>جميع الاتجاهات</b>.')}
  ]},
  {sn:'5.3',t:'Huygens’ Principle',p:'74',blocks:[
   {box:'def',label:'Huygens’ principle',list:[L('Each point on a wave front acts as a point source of secondary spherical waves (wavelets). After a time, the new wave front is the surface tangent to all the wavelets.','كل نقطة على جبهة الموجة تُعد مصدرًا نقطيًا لموجات كروية ثانوية (مويجات). وبعد زمن ما تكون جبهة الموجة الجديدة هي السطح المماس لجميع المويجات.')]},
   {p:L('Example: plane sea waves passing through openings in a breakwater spread out as circular waves toward the shore.','مثال: موجات البحر المستوية التي تمر من فتحات في حاجز الأمواج تنتشر موجاتٍ دائرية نحو الشاطئ.')}
  ]},
  {sn:'5.4',t:'Luminous Intensity',p:'75',blocks:[
   {box:'def',label:'Definitions',list:[
     L('<b>Luminous intensity (I):</b> the amount of visible light energy emitted from a source per unit time. Unit: candela (cd).','<b>شدة الإضاءة (I):</b> مقدار الطاقة الضوئية المرئية المنبعثة من المصدر في وحدة الزمن. وحدتها: الشمعة (cd).'),
     L('<b>Luminous flux (Φ):</b> the part of the radiant flux that produces the sensation of light in the eye. Unit: lumen (Lm).','<b>الفيض الضوئي (Φ):</b> الجزء من الفيض الإشعاعي الذي يولد الإحساس بالضوء في العين. وحدته: اللومن (Lm).'),
     L('<b>Lumen:</b> the flux falling on 1 m² of a sphere of radius 1 m with a 1 cd point source at its centre.','<b>اللومن:</b> الفيض الساقط على 1 m² من سطح كرة نصف قطرها 1 m في مركزها مصدر نقطي شدته 1 cd.')]},
   {eq:'Φ = 4π · I'},
   {box:'dyk',label:'Did you know?',list:[L('A 100 W lamp has an intensity of about 139 cd and gives a luminous flux of about 1750 Lm.','مصباح 100 W شدة إضاءته نحو 139 cd ويعطي فيضًا ضوئيًا نحو 1750 Lm.')]}
  ]},
  {sn:'5.5',t:'Illuminance (E)',p:'76',blocks:[
   {box:'def',label:'Illuminance',list:[L('<b>Illuminance (E):</b> the luminous flux falling perpendicularly on a unit area of a surface. Unit: lux = Lm/m². Measured by the photometer and the luxmeter.','<b>الاستضاءة (E):</b> الفيض الضوئي الساقط عموديًا على وحدة المساحة من السطح. وحدتها: lux = Lm/m². وتُقاس بالفوتومتر والمقياس الضوئي (اللوكسميتر).')]},
   {eq:`E = ${fr('Φ','A')}`}
  ]},
  {sn:'5.6',t:'Inverse Square Law',p:'76–78',blocks:[
   {box:'rem',label:'Ways to increase the illuminance from a point source',list:[L('1) Increase the luminous flux (intensity) of the source. 2) Decrease the distance between the source and the surface. (And the light should fall perpendicularly.)','1) زيادة الفيض الضوئي (الشدة) للمصدر. 2) تقليل المسافة بين المصدر والسطح. (ويكون سقوط الضوء عموديًا.)')]},
   {eq:`E = ${fr('Φ','4πr²')} = ${fr('I','r²')}`},
   {fig:INV_SVG,cap:'Activity: at 2 m the same flux covers 4A, at 3 m it covers 9A'},
   {p:L('The illuminance on a surface is inversely proportional to the square of its distance from the point source (perpendicular incidence only):','الاستضاءة على سطح تتناسب عكسيًا مع مربع بعده عن المصدر النقطي (في حالة السقوط العمودي فقط):')},
   {eq:`${fr('E₁','E₂')} = ${fr('r₂²','r₁²')}`},
   {h:'The photometer'},
   {p:L('When the illuminance on both sides of a photometer screen is equal:','عندما تتساوى الاستضاءة على جانبي حاجز الفوتومتر:')},
   {eq:`${fr('I₁','r₁²')} = ${fr('I₂','r₂²')}`}
  ]}
 ],
 laws:[
  {t:'Frequency',eq:`f = ${fr('c','λ')}`,d:[['c','3 × 10⁸ m/s'],['λ','wavelength (m)'],['f','frequency (Hz)']],use:L('Convert nm to m: 1 nm = 10⁻⁹ m.','حوّل nm إلى m: 1 nm = 10⁻⁹ m.')},
  {t:'Photon energy',eq:`E = h f = ${fr('h c','λ')}`,d:[['h','6.63 × 10⁻³⁴ J·s'],['E','energy (J)']],use:L('Shorter wavelength ⇒ more energy.','الطول الموجي الأقصر ⇒ طاقة أكبر.'),err:L('Forgetting 10⁻⁹ for nm.','نسيان 10⁻⁹ عند التحويل من nm.')},
  {t:'Luminous flux',eq:'Φ = 4π I',d:[['Φ','lumen (Lm)'],['I','candela (cd)']],use:L('Total flux of a point source in all directions.','الفيض الكلي لمصدر نقطي في جميع الاتجاهات.')},
  {t:'Illuminance',eq:`E = ${fr('Φ','A')} = ${fr('I','r²')}`,d:[['E','lux (Lm/m²)'],['r','distance (m)']],use:L('Perpendicular incidence from a point source.','السقوط العمودي من مصدر نقطي.')},
  {t:'Photometer',eq:`${fr('I₁','r₁²')} = ${fr('I₂','r₂²')}`,d:[['I₁, I₂','intensities'],['r₁, r₂','distances to the screen']],use:L('Equal illuminance on both sides.','تساوي الاستضاءة على الجانبين.'),err:L('Forgetting to square the distances.','نسيان تربيع المسافات.')}
 ],
 examples:[
  {t:L('Book: frequency of violet light of wavelength 400 nm.','الكتاب: تردد الضوء البنفسجي الذي طوله الموجي 400 nm.'),p:'73',steps:[['Law','f = c/λ'],['Sub',`${fr('3 × 10⁸','400 × 10⁻⁹')}`]],res:'f = 7.5 × 10¹⁴ Hz'},
  {t:L('Book: energy of a green-light photon of wavelength 555 nm.','الكتاب: طاقة فوتون الضوء الأخضر الذي طوله الموجي 555 nm.'),p:'73',steps:[['Law','E = hc/λ'],['Sub',`${fr('6.63 × 10⁻³⁴ × 3 × 10⁸','555 × 10⁻⁹')}`]],res:'E ≈ 3.58 × 10⁻¹⁹ J'},
  {t:L('Book: a 5 cd point source; a screen 5 m away perpendicular to the rays. Find the illuminance.','الكتاب: مصدر نقطي 5 cd، وحاجز عمودي على الأشعة يبعد 5 m. أوجد الاستضاءة.'),p:'78',steps:[['Law','E = I/r²'],['Sub','5/25']],res:'E = 0.2 lux'},
  {t:L('Book: a 32 cd lamp is 0.6 m from a screen; the second lamp on the other side is 1.2 m away; equal illuminance. Find I₂.','الكتاب: مصباح 32 cd يبعد 0.6 m عن حاجز، والثاني في الجهة الأخرى يبعد 1.2 m، والاستضاءة متساوية. أوجد I₂.'),p:'78',steps:[['Law','I₁/r₁² = I₂/r₂²'],['Sub','I₂ = 32 × 1.44 / 0.36']],res:'I₂ = 128 cd'}
 ],
 quiz:[
  {ty:'mcq',k:'MCQ',q:L('The unit of luminous intensity is:','وحدة شدة الإضاءة:'),o:['lux','lumen','candela','watt'],a:2,x:L('candela (cd).','الشمعة (cd).')},
  {ty:'mcq',k:'MCQ',q:L('The unit of luminous flux is:','وحدة الفيض الضوئي:'),o:['lumen','lux','candela','joule'],a:0,x:L('lumen (Lm).','اللومن (Lm).')},
  {ty:'mcq',k:'MCQ',q:L('The unit of illuminance is:','وحدة الاستضاءة:'),o:['candela','lux','lumen','watt'],a:1,x:L('lux = Lm/m².','lux = Lm/m².')},
  {ty:'mcq',k:'MCQ',q:L('The scientist who proposed the corpuscle (particle) theory of light was:','العالم الذي وضع النظرية الدقائقية للضوء:'),o:['Huygens','Newton','Maxwell','Planck'],a:1,x:L('Newton.','نيوتن.')},
  {ty:'mcq',k:'MCQ',q:L('Maxwell showed that every light ray is:','بيّن ماكسويل أن كل شعاع ضوئي هو:'),o:['a stream of particles','an electromagnetic wave','a sound wave','a photon only'],a:1,x:L('Electromagnetic theory, end of the 19th century.','النظرية الكهرومغناطيسية، أواخر القرن التاسع عشر.')},
  {ty:'mcq',k:'MCQ',q:L('The electromagnetic theory failed to explain:','فشلت النظرية الكهرومغناطيسية في تفسير:'),o:['reflection','refraction','the photoelectric effect','diffraction'],a:2,x:L('And black-body radiation; Planck explained them with photons.','وإشعاع الجسم الأسود، وفسّرهما بلانك بالفوتونات.')},
  {ty:'mcq',k:'MCQ',q:L('The wavelength of violet light is about:','الطول الموجي للضوء البنفسجي نحو:'),o:['700 nm','555 nm','400 nm','1000 nm'],a:2,x:L('Red is about 700 nm.','الأحمر نحو 700 nm.')},
  {ty:'mcq',k:'MCQ',q:L('Photon energy is directly proportional to:','تتناسب طاقة الفوتون طرديًا مع:'),o:['wavelength','frequency','speed','distance'],a:1,x:L('E = hf.','E = hf.')},
  {ty:'mcq',k:'MCQ',q:L('If the distance from a point source is doubled, the illuminance becomes:','إذا تضاعفت المسافة عن مصدر نقطي، تصبح الاستضاءة:'),o:['half','double','a quarter','four times'],a:2,x:L('E ∝ 1/r².','E ∝ 1/r².')},
  {ty:'mcq',k:'MCQ',q:L('A point source at the centre of a sphere: if the sphere’s radius increases, the total flux on it:','مصدر نقطي في مركز كرة: إذا ازداد نصف قطرها، فإن الفيض الكلي الساقط عليها:'),o:['decreases','increases','does not change','doubles'],a:2,x:L('Φ = 4πI does not depend on r.','Φ = 4πI لا يعتمد على r.')},
  {ty:'mcq',k:'MCQ',q:L('To double the illuminance on a table under a lamp at 1 m, the lamp should be raised/lowered to:','لمضاعفة الاستضاءة على منضدة تحت مصباح على ارتفاع 1 m يجب جعل المصباح على ارتفاع:'),o:['0.75 m','0.707 m','0.5 m','0.25 m'],a:1,x:L('E ∝ 1/r² ⇒ r = 1/√2 ≈ 0.707 m.','E ∝ 1/r² ⇒ r = 1/√2 ≈ 0.707 m.')},
  {ty:'mcq',k:'MCQ',q:L('An opening much smaller than the wavelength (d ≪ λ) acts as:','الفتحة الأصغر كثيرًا من الطول الموجي تسلك كـ:'),o:['a mirror','a point source','a lens','a barrier'],a:1,x:L('Figure (5.4c).','الشكل (5.4c).')},
  {ty:'mcq',k:'MCQ',q:L('The flux of a 10 cd point source in all directions is:','الفيض الكلي لمصدر نقطي شدته 10 cd:'),o:['10 Lm','40π Lm','10π Lm','4 Lm'],a:1,x:L('Φ = 4π × 10 = 40π Lm.','Φ = 4π × 10 = 40π Lm.')},
  {ty:'tf',k:'True/False',q:L('The Moon is a luminous object.','القمر جسم مضيء.'),a:false,x:L('False → it is an <b>illuminated</b> object (it reflects sunlight).','خطأ ← هو جسم <b>مستضيء</b> يعكس ضوء الشمس.')},
  {ty:'tf',k:'True/False',q:L('Newton’s explanation of refraction was correct.','كان تفسير نيوتن للانكسار صحيحًا.'),a:false,x:L('False → it was <b>wrong</b>.','خطأ ← كان <b>خاطئًا</b>.')},
  {ty:'tf',k:'True/False',q:L('Huygens explained interference and diffraction with the wave theory.','فسّر هايغنز التداخل والحيود بالنظرية الموجية.'),a:true,x:L('True.','صح.')},
  {ty:'tf',k:'True/False',q:L('The inverse square law applies to oblique incidence of light.','قانون التربيع العكسي ينطبق على السقوط المائل للضوء.'),a:false,x:L('False → only for <b>perpendicular</b> incidence from a point source.','خطأ ← فقط للسقوط <b>العمودي</b> من مصدر نقطي.')},
  {ty:'tf',k:'True/False',q:L('Red light photons have more energy than violet ones.','فوتونات الضوء الأحمر أكبر طاقة من البنفسجي.'),a:false,x:L('False → violet has a shorter wavelength, so more energy.','خطأ ← البنفسجي طوله الموجي أقصر فطاقته أكبر.')},
  {ty:'open',k:'Define',q:L('Define: Luminous intensity.','عرّف: شدة الإضاءة.'),x:L('The amount of visible light energy emitted from a source per unit time; unit candela.','مقدار الطاقة الضوئية المرئية المنبعثة من المصدر في وحدة الزمن، ووحدتها الشمعة.')},
  {ty:'open',k:'Define',q:L('Define: Illuminance.','عرّف: الاستضاءة.'),x:L('The luminous flux falling perpendicularly on a unit area; unit lux.','الفيض الضوئي الساقط عموديًا على وحدة المساحة، ووحدتها اللوكس.')},
  {ty:'open',k:'Define',q:L('Define: Light year.','عرّف: السنة الضوئية.'),x:L('The distance light travels in vacuum in one year (365 days), about 10¹³ km.','المسافة التي يقطعها الضوء في الفراغ خلال سنة (365 يومًا)، نحو 10¹³ km.')},
  {ty:'open',k:'Define',q:L('State Huygens’ principle.','اذكر نص مبدأ هايغنز.'),x:L('Each point on a wave front is a point source of secondary spherical wavelets; the new wave front is the surface tangent to them.','كل نقطة على جبهة الموجة مصدر نقطي لمويجات كروية ثانوية، وجبهة الموجة الجديدة هي السطح المماس لها.')},
  {ty:'open',k:'Factors',q:L('What are the ways to increase the illuminance on a surface using a point source?','ما طرق زيادة الاستضاءة على سطح باستعمال مصدر نقطي؟'),x:L('Increase the luminous flux of the source; decrease the distance to the surface (with perpendicular incidence).','زيادة الفيض الضوئي للمصدر، وتقليل المسافة إلى السطح (مع السقوط العمودي).')},
  {ty:'open',k:'Problem · easy',q:L('Frequency of red light of wavelength 600 nm.','تردد ضوء طوله الموجي 600 nm.'),x:L('f = 3 × 10⁸ / 6 × 10⁻⁷ = <b>5 × 10¹⁴ Hz</b>','f = 3 × 10⁸ / 6 × 10⁻⁷ = <b>5 × 10¹⁴ Hz</b>')},
  {ty:'open',k:'Problem · medium',q:L('A book page under a lamp of flux 100π Lm has an illuminance of 4 lux. How far is it?','صفحة كتاب تحت مصباح فيضه 100π Lm استضاءتها 4 lux. كم تبعد؟'),x:L('I = 100π/4π = 25 cd; r² = 25/4 ⇒ <b>r = 2.5 m</b>','I = 100π/4π = 25 cd؛ r² = 25/4 ⇒ <b>r = 2.5 m</b>')},
  {ty:'open',k:'Problem · hard',q:L('Two lamps 1 m apart; the first is 9 times as intense as the second. Where is the photometer placed for equal illuminance?','مصباحان بينهما 1 m، شدة الأول 9 أمثال الثاني. أين يوضع الفوتومتر لتتساوى الاستضاءة؟'),x:L('9/x² = 1/(1 − x)² ⇒ 3(1 − x) = x ⇒ <b>x = 0.75 m from the stronger lamp</b>','9/x² = 1/(1 − x)² ⇒ 3(1 − x) = x ⇒ <b>x = 0.75 m من المصباح الأقوى</b>')},
  {ty:'open',k:'Problem · hard',q:L('On a full-moon night the illuminance is 0.6 lux; the Moon is 3.84 × 10⁸ m away. Find the Moon’s luminous intensity.','في ليلة بدر كانت الاستضاءة 0.6 lux، وبعد القمر 3.84 × 10⁸ m. أوجد شدة إضاءة القمر.'),x:L('I = E r² = 0.6 × (3.84 × 10⁸)² ≈ <b>8.85 × 10¹⁶ cd</b>','I = E r² = 0.6 × (3.84 × 10⁸)² ≈ <b>8.85 × 10¹⁶ cd</b>')}
 ],
 exam:[
  {m:10,q:L('A lamp of intensity 12 cd is 1.2 m from a photometer; another lamp on the other side is 1.32 m away; equal illuminance. Find I₂.','مصباح 12 cd يبعد 1.2 m عن فوتومتر، والآخر في الجهة الثانية يبعد 1.32 m، والاستضاءة متساوية. أوجد I₂.'),steps:[['Law','I₂ = I₁ (r₂/r₁)²'],['Sub','12 × 1.21']],res:'I₂ = 14.52 cd'},
  {m:10,q:L('A screen is 4 m from a 96 cd point source, perpendicular to the rays. Find the illuminance.','حاجز يبعد 4 m عن مصدر نقطي 96 cd وعمودي على أشعته. أوجد الاستضاءة.'),steps:[['Law','E = I/r²'],['Sub','96/16']],res:'E = 6 lux'},
  {m:10,q:L('A lamp gives a flux of 200π Lm; a page perpendicular to it has 8 lux. How far is it?','مصباح فيضه 200π Lm، وصفحة عمودية عليه استضاءتها 8 lux. كم تبعد؟'),steps:[['I','200π/4π = 50 cd'],['r','√(50/8)']],res:'r = 2.5 m'},
  {m:10,q:L('Find the energy of a photon of wavelength 600 nm.','أوجد طاقة فوتون طوله الموجي 600 nm.'),steps:[['Law','E = hc/λ'],['Sub',`${fr('6.63 × 10⁻³⁴ × 3 × 10⁸','6 × 10⁻⁷')}`]],res:'E = 3.315 × 10⁻¹⁹ J'},
  {m:8,q:L('What are the theories that explained the nature of light? Mention the scientist of each.','ما النظريات التي فسّرت طبيعة الضوء؟ اذكر عالم كل منها.'),steps:[['1','particle theory — Newton'],['2','wave theory — Huygens'],['3','electromagnetic theory — Maxwell'],['4','quantum (photon) theory — Planck']],res:'4 theories'},
  {m:8,q:L('Define: photon, luminous flux, light year.','عرّف: الفوتون، الفيض الضوئي، السنة الضوئية.'),steps:[['Photon','indivisible packet of light energy'],['Flux','part of radiant flux causing the sensation of light (Lm)'],['Light year','distance light travels in one year ≈ 10¹³ km']],res:'3 definitions'}
 ],
 book:{p:'79–80',mcq:[
  {q:'Light from a point source spreads in vacuum in:',ar:'ينتشر ضوء المصدر النقطي في الفراغ في:',o:['one direction','two directions','all directions','all of the above'],a:2},
  {q:'To double the illuminance on a table under a lamp at 1 m, the lamp must be at height:',ar:'لمضاعفة الاستضاءة على منضدة تحت مصباح على ارتفاع 1 m يوضع المصباح على ارتفاع:',o:['0.75 m','0.707 m','0.5 m','0.25 m'],a:1},
  {q:'Luminous intensity is measured in:',ar:'تُقاس شدة الإضاءة بـ:',o:['candle','lux','watt','lumen'],a:0},
  {q:'Illuminance is measured in:',ar:'تُقاس الاستضاءة بـ:',o:['joule','lumen','lux','watt'],a:2},
  {q:'As the distance of a surface from a point source increases, the illuminance:',ar:'كلما ازداد بعد السطح عن المصدر النقطي فإن الاستضاءة:',o:['decreases','increases','is not affected','all of the above'],a:0},
  {q:'A point source at the centre of a sphere: if the radius increases, the flux on it:',ar:'مصدر نقطي في مركز سطح كروي: إذا ازداد نصف القطر فإن الفيض الساقط:',o:['decreases','increases','does not change','all of the above'],a:2}
 ],
 probs:[
  {q:L('P1. Two lamps 1 m apart; the first is 9 times the second. Where is the photometer placed?','م1. مصباحان بينهما 1 m، شدة الأول 9 أمثال الثاني. أين يوضع الفوتومتر؟'),steps:[['Law','9/x² = 1/(1 − x)²'],['Root','3(1 − x) = x']],res:'x = 0.75 m from the stronger lamp'},
  {q:L('P2. 12 cd lamp at 1.2 m; another lamp at 1.32 m; equal illuminance. Find I₂.','م2. مصباح 12 cd على بعد 1.2 m، وآخر على 1.32 m، والاستضاءة متساوية. أوجد I₂.'),steps:[['Sub','12 × (1.32/1.2)²']],res:'I₂ = 14.52 cd'},
  {q:L('P3. A lamp gives 100π Lm; the page illuminance is 4 lux. Find the distance.','م3. مصباح فيضه 100π Lm، واستضاءة الصفحة 4 lux. أوجد البعد.'),steps:[['I','100π/4π = 25 cd'],['r','√(25/4)']],res:'r = 2.5 m'},
  {q:L('P4. Full Moon: illuminance 0.6 lux; distance 3.84 × 10⁸ m. Find the Moon’s intensity.','م4. البدر: الاستضاءة 0.6 lux والبعد 3.84 × 10⁸ m. أوجد شدة إضاءة القمر.'),steps:[['Law','I = E r²'],['Sub','0.6 × (3.84 × 10⁸)²']],res:'I ≈ 8.84 × 10¹⁶ cd'},
  {q:L('P5. A photon has λ = 600 nm. Find its energy.','م5. فوتون طوله الموجي 600 nm. أوجد طاقته.'),steps:[['Law','E = hc/λ']],res:'E = 3.315 × 10⁻¹⁹ J'}
 ]},
 summary:[
  L('Theories: particle (Newton), wave (Huygens), electromagnetic (Maxwell), photons (Planck).','النظريات: الدقائقية (نيوتن)، الموجية (هايغنز)، الكهرومغناطيسية (ماكسويل)، الفوتونات (بلانك).'),
  L('Visible light ≈ 400 nm (violet) to 700 nm (red); f = c/λ; E = hf = hc/λ.','الضوء المرئي من نحو 400 nm (بنفسجي) إلى 700 nm (أحمر)؛ f = c/λ؛ E = hf = hc/λ.'),
  L('Huygens: every point of a wave front is a source of wavelets.','هايغنز: كل نقطة على جبهة الموجة مصدر لمويجات.'),
  L('I in candela; Φ = 4πI in lumen; E = Φ/A in lux.','I بالشمعة؛ Φ = 4πI باللومن؛ E = Φ/A باللوكس.'),
  L('Inverse square: E = I/r²; photometer I₁/r₁² = I₂/r₂².','التربيع العكسي: E = I/r²؛ الفوتومتر I₁/r₁² = I₂/r₂².')
 ],
 extra:{t:'Constants and units',items:[['c','3 × 10⁸ m/s'],['h','6.63 × 10⁻³⁴ J·s'],['1 nm','10⁻⁹ m'],['lux','Lm/m²']]}
};
(window.XL=window.XL||[]).push({ch:5,t:'Photometer',d:L('Place two lamps on either side of the photometer screen. Drag the screen until the illuminance is equal on both sides.','ضع مصباحين على جانبي حاجز الفوتومتر، واسحب الحاجز حتى تتساوى الاستضاءة على الجانبين.'),
 html:`<div class="calc"><label>I₁ (cd)<input id="pI1" type="number" value="32"></label><label>I₂ (cd)<input id="pI2" type="number" value="128"></label><label>Distance between lamps (m)<input id="pD" type="number" value="1.8" step="any"></label></div>
 <label class="eyebrow" for="pX" style="display:block;margin-top:10px">Screen position from lamp 1</label><input id="pX" type="range" min="0.05" max="0.95" step="0.01" value="0.5" style="width:100%;accent-color:var(--c5)">
 <svg id="pSvg" viewBox="0 0 520 90" style="width:100%;margin-top:6px;background:var(--paper);border-radius:8px"></svg><div id="pOut"></div>`,
 init(){const d=()=>{const I1=+$('#pI1').value,I2=+$('#pI2').value,D=+$('#pD').value,x=+$('#pX').value*D;const E1=I1/x**2,E2=I2/(D-x)**2;const xe=D/(1+Math.sqrt(I2/I1));
  const X=v=>30+v/D*460;const sh=Math.min(1,E1/Math.max(E1,E2)),sh2=Math.min(1,E2/Math.max(E1,E2));
  $('#pSvg').innerHTML=`<g font-family="IBM Plex Mono, monospace" font-size="11"><line x1="30" y1="60" x2="490" y2="60" stroke="var(--muted)"/><circle cx="30" cy="40" r="10" fill="var(--c5)"/><circle cx="490" cy="40" r="10" fill="var(--c5)"/><rect x="${X(x)-8}" y="15" width="8" height="45" fill="var(--c5)" opacity="${0.25+0.75*sh}"/><rect x="${X(x)}" y="15" width="8" height="45" fill="var(--c5)" opacity="${0.25+0.75*sh2}"/><text x="30" y="82" text-anchor="middle" fill="var(--muted)">I₁</text><text x="490" y="82" text-anchor="middle" fill="var(--muted)">I₂</text><path d="M${X(xe)} 62 v8" stroke="var(--good)" stroke-width="2"/></g>`;
  $('#pOut').innerHTML=steps([['E₁',`I₁/r₁² = ${sci(E1)} lux (r₁ = ${x.toFixed(2)} m)`],['E₂',`I₂/r₂² = ${sci(E2)} lux (r₂ = ${(D-x).toFixed(2)} m)`]])+(Math.abs(E1-E2)/Math.max(E1,E2)<0.03?`<div class="res">✓ Balanced: equal illuminance</div>`:`<div class="alert bad">Not balanced — equal illuminance is at ${xe.toFixed(2)} m from lamp 1 (green mark)</div>`)};
  ['pI1','pI2','pD','pX'].forEach(i=>$('#'+i).oninput=d);d();}});

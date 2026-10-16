/* ---------- Chapter 6: Reflection and Refraction of Light ---------- */
const REFR_SVG=`<svg viewBox="0 0 520 220" role="img" aria-label="Refraction toward and away from the normal"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<rect x="10" y="110" width="240" height="100" fill="var(--c6)" opacity=".15"/><line x1="10" y1="110" x2="250" y2="110" stroke="var(--c6)"/><line x1="130" y1="15" x2="130" y2="205" stroke="var(--muted)" stroke-dasharray="4 3"/>
<path d="M60 40 L130 110 L165 200" stroke="var(--amber)" stroke-width="2.5" fill="none"/><text x="20" y="30">air (less dense)</text><text x="20" y="200">glass (denser)</text>
<text x="104" y="84" fill="var(--amber)">θ₁</text><text x="140" y="150" fill="var(--amber)">θ₂</text><text x="130" y="232" text-anchor="middle"></text>
<text x="130" y="125" text-anchor="middle" fill="var(--ink)" font-size="10">toward the normal</text>
<rect x="270" y="10" width="240" height="100" fill="var(--c6)" opacity=".15"/><line x1="270" y1="110" x2="510" y2="110" stroke="var(--c6)"/><line x1="390" y1="15" x2="390" y2="205" stroke="var(--muted)" stroke-dasharray="4 3"/>
<path d="M355 25 L390 110 L470 190" stroke="var(--amber)" stroke-width="2.5" fill="none"/><text x="280" y="30">glass</text><text x="280" y="200">air</text>
<text x="390" y="125" text-anchor="middle" fill="var(--ink)" font-size="10">away from the normal</text></g></svg>`;
const TIR_SVG=`<svg viewBox="0 0 520 200" role="img" aria-label="Critical angle and total internal reflection"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<rect x="10" y="100" width="500" height="90" fill="var(--c6)" opacity=".15"/><line x1="10" y1="100" x2="510" y2="100" stroke="var(--c6)"/><text x="20" y="20">air n₂ = 1</text><text x="20" y="185">glass n₁</text>
${[[90,'1',0.3],[200,'2',0.55],[310,'3 critical',0.72],[420,'4 TIR',0.9]].map(([x,l,a])=>{const sx=x-90*Math.tan(a*1.2);return `<line x1="${x}" y1="40" x2="${x}" y2="180" stroke="var(--muted)" stroke-dasharray="3 3"/><path d="M${sx} 185 L${x} 100" stroke="var(--amber)" stroke-width="2"/>`+(l==='4 TIR'?`<path d="M${x} 100 L${x+(x-sx)} 185" stroke="var(--bad)" stroke-width="2"/>`:l==='3 critical'?`<path d="M${x} 100 L${x+70} 100" stroke="var(--bad)" stroke-width="2"/>`:`<path d="M${x} 100 L${x+(x-sx)*1.6} ${100-85}" stroke="var(--c6)" stroke-width="2"/>`)+`<text x="${x}" y="198" text-anchor="middle" fill="var(--ink)">${l}</text>`}).join('')}
</g></svg>`;
CHD[6]={
 obj:[L('Define reflection, refraction and optical density.','تعريف الانعكاس والانكسار والكثافة الضوئية.'),
      L('State and verify the laws of reflection and refraction.','ذكر قانوني الانعكاس والانكسار والتحقق منهما.'),
      L('Use the relative and absolute index of refraction and Snell’s law.','استعمال معامل الانكسار النسبي والمطلق وقانون سنل.'),
      L('Calculate the critical angle and state the conditions of total internal reflection.','حساب الزاوية الحرجة وذكر شروط الانعكاس الكلي الداخلي.'),
      L('Explain the reflecting prism and fibre optics with their applications.','شرح الموشور العاكس والألياف البصرية وتطبيقاتهما.')],
 lessons:[
  {sn:'6.1',t:'Introduction',p:'81–82',blocks:[
   {box:'def',label:'Definitions',list:[
     L('<b>Reflection of light:</b> the rebound of light falling on a surface separating two media back into the medium it came from.','<b>انعكاس الضوء:</b> ارتداد الضوء الساقط على سطح فاصل بين وسطين إلى الوسط الذي جاء منه.'),
     L('<b>Refraction of light:</b> the change of direction of a light ray moving obliquely between two transparent media of different optical density.','<b>انكسار الضوء:</b> تغير اتجاه الشعاع الضوئي عند انتقاله بصورة مائلة بين وسطين شفافين مختلفين في الكثافة الضوئية.'),
     L('<b>Optical density:</b> a property of a transparent medium on which the speed of light in it depends. Greater optical density ⇒ lower speed of light.','<b>الكثافة الضوئية:</b> خاصية للوسط الشفاف تعتمد عليها سرعة الضوء فيه. كلما ازدادت الكثافة الضوئية قلت سرعة الضوء.')]},
   {p:L('Refraction explains why a fish looks shallower than it is, and why a pen looks broken in a glass of water.','يفسر الانكسار ظهور السمكة أقرب من عمقها الحقيقي، وظهور القلم مكسورًا في قدح ماء.')}
  ]},
  {sn:'6.2',t:'Reflection and its Laws',p:'82–83',blocks:[
   {table:{h:['Incidence angle θ₁','25°','30°','35°','40°'],r:[['Reflection angle θ′₁','25°','30°','35°','40°']],cap:'Table (1) — activity with a laser and a plane mirror'}},
   {box:'def',label:'Laws of reflection',list:[
     L('<b>First law:</b> the incident ray, the reflected ray and the normal at the point of incidence all lie in one plane.','<b>القانون الأول:</b> الشعاع الساقط والشعاع المنعكس والعمود المقام من نقطة السقوط تقع جميعها في مستوٍ واحد.'),
     L('<b>Second law:</b> the angle of incidence equals the angle of reflection.','<b>القانون الثاني:</b> زاوية السقوط تساوي زاوية الانعكاس.')]}
  ]},
  {sn:'6.3',t:'Refraction and its Laws',p:'84–85',blocks:[
   {fig:REFR_SVG,cap:'Figures (6.8) and (6.9)'},
   {p:L('From a less dense to a denser medium (air → glass) the ray bends <b>toward</b> the normal: θ₁ > θ₂. From a denser to a less dense medium it bends <b>away</b> from the normal: θ₁ < θ₂. A ray falling perpendicularly is not refracted.','من وسط أقل كثافة إلى أكثر كثافة (هواء ← زجاج) ينكسر الشعاع <b>مقتربًا</b> من العمود: θ₁ > θ₂. ومن الأكثر كثافة إلى الأقل ينكسر <b>مبتعدًا</b> عن العمود: θ₁ < θ₂. والشعاع الساقط عموديًا لا ينكسر.')},
   {box:'def',label:'Laws of refraction',list:[
     L('<b>First law:</b> the incident ray, the refracted ray and the normal all lie in one plane perpendicular to the separating surface.','<b>القانون الأول:</b> الشعاع الساقط والشعاع المنكسر والعمود تقع جميعها في مستوٍ واحد عمودي على السطح الفاصل.'),
     L('<b>Second law:</b> the ratio of the sine of the incidence angle to the sine of the refraction angle is constant.','<b>القانون الثاني:</b> النسبة بين جيب زاوية السقوط وجيب زاوية الانكسار مقدار ثابت.')]}
  ]},
  {sn:'6.4',t:'Index of Refraction and Snell’s Law',p:'86–90',blocks:[
   {eq:`₁n₂ = ${fr('sin θ₁','sin θ₂')} = ${fr('v₁','v₂')} = ${fr('λ₁','λ₂')} = ${fr('n₂','n₁')}`},
   {p:L('<b>Relative index of refraction ₁n₂</b>: from the first medium to the second.','<b>معامل الانكسار النسبي ₁n₂</b>: من الوسط الأول إلى الثاني.')},
   {box:'def',label:'Absolute index of refraction',list:[L('<b>n = c / v</b>: the ratio of the speed of light in vacuum to its speed in the medium. It has no unit; for vacuum n = 1; for any material n > 1.','<b>n = c / v</b>: النسبة بين سرعة الضوء في الفراغ وسرعته في الوسط. ليس له وحدة، وللفراغ n = 1، ولأي مادة n > 1.')]},
   {table:{h:['Material','n','Material','n'],r:[['Air','1.00029','Water','1.33'],['Water vapour','1.00025','Acetone','1.36'],['CO₂','1.00045','Glycerin','1.47'],['Polystyrene','1.49','Window glass','1.52'],['Sodium chloride','1.54','Zircon','1.92'],['Diamond','2.42','—','—']],cap:'Table (2) — sodium light 589 nm, 20 °C'}},
   {eq:'n₁ sin θ₁ = n₂ sin θ₂   (Snell’s law)'},
   {box:'rem',label:'Remember',list:[L('“The absolute index of refraction of water is 1.33” means the speed of light in vacuum is 1.33 times its speed in water.','عبارة "معامل الانكسار المطلق للماء 1.33" تعني أن سرعة الضوء في الفراغ تساوي 1.33 مرة سرعته في الماء.')]}
  ]},
  {sn:'6.5',t:'Critical Angle and Total Internal Reflection',p:'90–93',blocks:[
   {box:'def',label:'Critical angle',list:[L('<b>Critical angle θc:</b> the angle of incidence in the denser medium for which the refraction angle in the less dense medium is 90°.','<b>الزاوية الحرجة:</b> زاوية السقوط في الوسط الأكثر كثافة التي تقابلها زاوية انكسار 90° في الوسط الأقل كثافة.')]},
   {fig:TIR_SVG,cap:'Figure (6.12) — rays 1, 2 refract; ray 3 at the critical angle; ray 4 totally reflected'},
   {eq:`sin θc = ${fr('n₂','n₁')}      n = ${fr('1','sin θc')}  (to air)`},
   {box:'rem',label:'Conditions of total internal reflection',list:[L('1) Light travels from a denser medium to a less dense medium. 2) The incidence angle is greater than the critical angle.','1) ينتقل الضوء من وسط أكبر كثافة ضوئية إلى وسط أقل كثافة. 2) زاوية السقوط أكبر من الزاوية الحرجة.')]},
   {p:L('<b>Diamond:</b> n ≈ 2.42 and θc ≈ 24.4°, one of the smallest critical angles, so light undergoes many internal reflections before leaving — this is its brilliance.','<b>الماس:</b> n ≈ 2.42 و θc ≈ 24.4°، من أصغر الزوايا الحرجة، فيعاني الضوء انعكاسات داخلية كثيرة قبل خروجه، وهذا سبب تألقه.')},
   {p:L('<b>Reflecting prism</b> (45°–90°–45°) turns light by 90° or 180°. Used in prism binoculars and submarine periscopes. It is better than a plane mirror: total internal reflection reflects about 100%, while a mirror absorbs some light (about 90% reflected), so the image is sharper and brighter.','<b>الموشور العاكس</b> (45°–90°–45°) يغيّر مسار الضوء 90° أو 180°. يُستعمل في الناظور ذي الموشورين وفي بيرسكوب الغواصات. وهو أفضل من المرآة المستوية: لأن الانعكاس الكلي يعكس نحو 100%، بينما المرآة تمتص جزءًا (تعكس نحو 90%)، فتكون الصورة أوضح وأسطع.')},
   {p:L('Mirages are also explained by total internal reflection.','تُفسَّر ظاهرة السراب أيضًا بالانعكاس الكلي الداخلي.')}
  ]},
  {sn:'6.6',t:'Fiber-Optics',p:'94',blocks:[
   {box:'def',label:'Optical fibres',list:[L('Fine glass or plastic fibres that carry light from place to place by total internal reflection, losing very little energy, even when curved. The cladding has a slightly lower refractive index than the core, which keeps light inside.','ألياف رفيعة من الزجاج أو البلاستك تنقل الضوء من مكان إلى آخر بالانعكاس الكلي الداخلي، دون أن تفقد إلا قليلًا من الطاقة حتى لو كانت منحنية. والغلاف معامل انكساره أقل قليلًا من اللب، فيمنع خروج الضوء.')]}
  ]},
  {sn:'6.7',t:'Fiber-Optics Applications',p:'95',blocks:[
   {list:[
     L('1) Medicine: the endoscope (stomach, kidneys) for diagnosis, taking samples, cauterizing or surgery; the arthroscope for knee surgery.','1) الطب: المنظار الداخلي (المعدة، الكلى) للتشخيص وأخذ العينات والكي والعمليات، ومنظار المفاصل لعمليات الركبة.'),
     L('2) Controlling internal parts of machines, electronic devices and nuclear reactors.','2) التحكم في الأجزاء الداخلية للمكائن والأجهزة الإلكترونية والمفاعلات النووية.'),
     L('3) Communication: carrying light and sound data on laser beams across oceans. A pair of copper wires carries about 32 calls; one optical fibre carries more than a million.','3) الاتصالات: نقل المعلومات الضوئية والصوتية على أشعة الليزر عبر المحيطات. زوج أسلاك نحاس ينقل نحو 32 مكالمة، وليف بصري واحد أكثر من مليون مكالمة.')]}
  ]}
 ],
 laws:[
  {t:'Laws of reflection',eq:'θ₁ = θ′₁',d:[['θ₁','incidence angle (from the normal)'],['θ′₁','reflection angle']],use:L('All rays and the normal lie in one plane.','الأشعة والعمود في مستوٍ واحد.'),err:L('Measuring angles from the surface instead of from the normal.','قياس الزوايا من السطح بدل العمود.')},
  {t:'Relative index',eq:`₁n₂ = ${fr('sin θ₁','sin θ₂')} = ${fr('v₁','v₂')} = ${fr('λ₁','λ₂')} = ${fr('n₂','n₁')}`,d:[['v','speed of light'],['λ','wavelength']],use:L('Frequency stays the same; speed and wavelength change.','التردد ثابت، والسرعة والطول الموجي يتغيران.')},
  {t:'Absolute index',eq:`n = ${fr('c','v')}`,d:[['c','3 × 10⁸ m/s'],['v','speed in the medium']],use:L('No unit; n ≥ 1.','بلا وحدة؛ n ≥ 1.')},
  {t:'Snell’s law',eq:'n₁ sin θ₁ = n₂ sin θ₂',d:[['n₁, θ₁','first medium'],['n₂, θ₂','second medium']],use:L('Any ray crossing a boundary.','أي شعاع يعبر سطحًا فاصلًا.')},
  {t:'Critical angle',eq:`sin θc = ${fr('n₂','n₁')} ;  n = ${fr('1','sin θc')}`,d:[['n₁','denser medium'],['n₂','less dense medium']],use:L('Only from denser to less dense.','فقط من الأكثر كثافة إلى الأقل.'),err:L('Putting the larger n on top — sin θc must be less than 1.','وضع n الأكبر في البسط؛ يجب أن يكون sin θc أقل من 1.')}
 ],
 examples:[
  {t:L('Book: the speed of light in a medium is 1.56 × 10⁸ m/s. Find its absolute index.','الكتاب: سرعة الضوء في وسط 1.56 × 10⁸ m/s. أوجد معامل انكساره المطلق.'),p:'88',steps:[['Law','n = c/v'],['Sub','3 × 10⁸ / 1.56 × 10⁸']],res:'n ≈ 1.92'},
  {t:L('Book: light enters water from air at 60° and refracts at 40.5°. Find n of water (sin 60° = 0.866, sin 40.5° = 0.649).','الكتاب: يسقط ضوء من الهواء على الماء بزاوية 60° فينكسر بزاوية 40.5°. أوجد n للماء.'),p:'90',steps:[['Law','n₁ sin θ₁ = n₂ sin θ₂'],['Sub','1 × 0.866 = n₂ × 0.649']],res:'n₂ = 1.33'},
  {t:L('Book: the critical angle from a material to air is 41.1° (sin = 0.657). Find n.','الكتاب: الزاوية الحرجة من مادة إلى الهواء 41.1° (sin = 0.657). أوجد n.'),p:'92',steps:[['Law','n = 1/sin θc'],['Sub','1/0.657']],res:'n ≈ 1.52'},
  {t:L('Light goes from air into glass (n = 1.5) at 30°; its wavelength in air is 600 nm. Find the refraction angle and the wavelength in glass.','ينتقل ضوء من الهواء إلى زجاج (n = 1.5) بزاوية 30°، وطوله الموجي في الهواء 600 nm. أوجد زاوية الانكسار والطول الموجي في الزجاج.'),p:'97',steps:[['θ₂','sin θ₂ = 0.5/1.5 = 0.333 ⇒ θ₂ ≈ 19.45°'],['λ₂','λ₂ = λ₁/n = 600/1.5']],res:'19.45° ; 400 nm'}
 ],
 quiz:[
  {ty:'mcq',k:'MCQ',q:L('The speed of light in glass is:','سرعة الضوء في الزجاج:'),o:['less than in vacuum','greater than in vacuum','equal to vacuum','zero'],a:0,x:L('Any material has n > 1.','لأي مادة n > 1.')},
  {ty:'mcq',k:'MCQ',q:L('The unit of the absolute index of refraction is:','وحدة معامل الانكسار المطلق:'),o:['m','1/m','m/s','no unit'],a:3,x:L('n = c/v, a ratio.','n = c/v نسبة.')},
  {ty:'mcq',k:'MCQ',q:L('When light goes from air to glass obliquely, it bends:','عندما ينتقل الضوء مائلًا من الهواء إلى الزجاج فإنه ينكسر:'),o:['away from the normal','toward the normal','along the surface','it does not bend'],a:1,x:L('To the denser medium ⇒ toward the normal.','إلى الوسط الأكثر كثافة ⇒ مقتربًا من العمود.')},
  {ty:'mcq',k:'MCQ',q:L('A ray falling perpendicularly on the boundary:','الشعاع الساقط عموديًا على السطح الفاصل:'),o:['is totally reflected','passes without bending','bends toward the normal','disappears'],a:1,x:L('Activity 2.','النشاط 2.')},
  {ty:'mcq',k:'MCQ',q:L('The absolute index of refraction of vacuum is:','معامل الانكسار المطلق للفراغ:'),o:['0','1','1.33','3 × 10⁸'],a:1,x:L('n = c/c = 1.','n = c/c = 1.')},
  {ty:'mcq',k:'MCQ',q:L('The material with the largest index in Table (2) is:','المادة ذات أكبر معامل انكسار في الجدول (2):'),o:['zircon','window glass','diamond','water'],a:2,x:L('Diamond, 2.42.','الماس، 2.42.')},
  {ty:'mcq',k:'MCQ',q:L('If n = 1.5, the speed of light in the medium is:','إذا كان n = 1.5 فسرعة الضوء في الوسط:'),o:['4.5 × 10⁸ m/s','2 × 10⁸ m/s','1.5 × 10⁸ m/s','3 × 10⁸ m/s'],a:1,x:L('v = 3 × 10⁸/1.5.','v = 3 × 10⁸/1.5.')},
  {ty:'mcq',k:'MCQ',q:L('Total internal reflection needs light to travel:','الانعكاس الكلي الداخلي يحتاج أن ينتقل الضوء:'),o:['from less dense to denser','from denser to less dense','in vacuum only','perpendicularly'],a:1,x:L('And with θ > θc.','ومع زاوية سقوط أكبر من الحرجة.')},
  {ty:'mcq',k:'MCQ',q:L('The critical angle of diamond is about:','الزاوية الحرجة للماس نحو:'),o:['41°','49°','24.4°','90°'],a:2,x:L('Book p. 92.','الكتاب صفحة 92.')},
  {ty:'mcq',k:'MCQ',q:L('The reflecting prism has angles:','زوايا الموشور العاكس:'),o:['60°–60°–60°','45°–90°–45°','30°–60°–90°','90°–90°–0°'],a:1,x:L('Book p. 93.','الكتاب صفحة 93.')},
  {ty:'mcq',k:'MCQ',q:L('Optical fibres work by:','تعمل الألياف البصرية على أساس:'),o:['refraction only','diffraction','total internal reflection','absorption'],a:2,x:L('Book p. 94.','الكتاب صفحة 94.')},
  {ty:'mcq',k:'MCQ',q:L('When light enters a denser medium, which stays the same?','عندما يدخل الضوء وسطًا أكثر كثافة، أيها يبقى ثابتًا؟'),o:['speed','wavelength','frequency','direction'],a:2,x:L('λ₁/λ₂ = v₁/v₂, frequency unchanged.','λ₁/λ₂ = v₁/v₂، والتردد ثابت.')},
  {ty:'tf',k:'True/False',q:L('The angle of incidence equals twice the angle of reflection.','زاوية السقوط تساوي ضعف زاوية الانعكاس.'),a:false,x:L('False → they are <b>equal</b>.','خطأ ← <b>متساويتان</b>.')},
  {ty:'tf',k:'True/False',q:L('Greater optical density means a lower speed of light.','الكثافة الضوئية الأكبر تعني سرعة ضوء أقل.'),a:true,x:L('True.','صح.')},
  {ty:'tf',k:'True/False',q:L('The critical angle occurs in the medium with the smaller index.','الزاوية الحرجة تحدث في الوسط ذي معامل الانكسار الأصغر.'),a:false,x:L('False → in the medium with the <b>greater</b> index.','خطأ ← في الوسط ذي المعامل <b>الأكبر</b>.')},
  {ty:'tf',k:'True/False',q:L('A reflecting prism reflects more light than a plane mirror.','الموشور العاكس يعكس ضوءًا أكثر من المرآة المستوية.'),a:true,x:L('True — about 100% versus about 90%.','صح — نحو 100% مقابل نحو 90%.')},
  {ty:'tf',k:'True/False',q:L('One optical fibre can carry more phone calls than a pair of copper wires.','الليف البصري الواحد ينقل مكالمات أكثر من زوج أسلاك النحاس.'),a:true,x:L('True — over a million vs 32.','صح — أكثر من مليون مقابل 32.')},
  {ty:'open',k:'Define',q:L('Define: Critical angle.','عرّف: الزاوية الحرجة.'),x:L('The incidence angle in the denser medium for which the refraction angle in the less dense medium is 90°.','زاوية السقوط في الوسط الأكثر كثافة التي تقابلها زاوية انكسار 90° في الوسط الأقل كثافة.')},
  {ty:'open',k:'Define',q:L('What is meant by “the absolute index of refraction of water is 1.33”?','ما المقصود بأن معامل الانكسار المطلق للماء 1.33؟'),x:L('The speed of light in vacuum is 1.33 times its speed in water.','أن سرعة الضوء في الفراغ تساوي 1.33 مرة سرعته في الماء.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: a pen looks broken in a glass of water.','علّل: يبدو القلم مكسورًا في قدح ماء.'),x:L('Light from the pen refracts when it leaves water into air, changing direction at the surface.','لأن الضوء القادم من القلم ينكسر عند خروجه من الماء إلى الهواء فيتغير اتجاهه عند السطح.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: diamonds sparkle.','علّل: تألق الماس.'),x:L('Its large index (2.42) gives a small critical angle (24.4°), so light is totally reflected many times inside before leaving.','لأن معامل انكساره كبير (2.42) فزاويته الحرجة صغيرة (24.4°)، فيعاني الضوء انعكاسات كلية كثيرة قبل خروجه.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: the reflecting prism is preferred to the plane mirror in optical instruments.','علّل: يُفضل الموشور العاكس على المرآة المستوية في الأجهزة البصرية.'),x:L('It reflects about 100% by total internal reflection, while a mirror absorbs part of the light; the image is sharper and brighter.','لأنه يعكس نحو 100% بالانعكاس الكلي، والمرآة تمتص جزءًا من الضوء، فتكون الصورة أوضح وأسطع.')},
  {ty:'open',k:'Problem · easy',q:L('Speed of light in diamond (n = 2.42).','سرعة الضوء في الماس (n = 2.42).'),x:L('v = 3 × 10⁸ / 2.42 ≈ <b>1.24 × 10⁸ m/s</b>','v = 3 × 10⁸ / 2.42 ≈ <b>1.24 × 10⁸ m/s</b>')},
  {ty:'open',k:'Problem · medium',q:L('Light enters water (n = 4/3) from air at 30°. Find the reflection and refraction angles (sin 22.02° = 0.375).','يسقط ضوء من الهواء على الماء (n = 4/3) بزاوية 30°. أوجد زاويتي الانعكاس والانكسار.'),x:L('Reflection = <b>30°</b>; sin θ₂ = 0.5 ÷ 4/3 = 0.375 ⇒ <b>θ₂ = 22.02°</b>','الانعكاس = <b>30°</b>؛ sin θ₂ = 0.5 ÷ 4/3 = 0.375 ⇒ <b>θ₂ = 22.02°</b>')},
  {ty:'open',k:'Problem · hard',q:L('Critical angle between glass (n = 3/2) and water (n = 4/3) (sin 62.75° = 0.889).','الزاوية الحرجة بين زجاج (n = 3/2) وماء (n = 4/3).'),x:L('sin θc = (4/3)/(3/2) = 0.889 ⇒ <b>θc = 62.75°</b> (in the glass)','sin θc = (4/3)/(3/2) = 0.889 ⇒ <b>θc = 62.75°</b> (في الزجاج)')}
 ],
 exam:[
  {m:10,q:L('The absolute index of diamond is 2.42. Find the speed of light in it.','معامل الانكسار المطلق للماس 2.42. أوجد سرعة الضوء فيه.'),steps:[['Law','v = c/n'],['Sub','3 × 10⁸ / 2.42']],res:'v ≈ 1.24 × 10⁸ m/s'},
  {m:10,q:L('The speed of light in ice is c/1.31. Find the critical angle from ice to air (sin 49.73° = 0.763).','سرعة الضوء في الجليد c/1.31. أوجد الزاوية الحرجة من الجليد إلى الهواء.'),steps:[['n','n = 1.31'],['Law','sin θc = 1/1.31 = 0.763']],res:'θc = 49.73°'},
  {m:10,q:L('Derive Snell’s law n₁ sin θ₁ = n₂ sin θ₂.','اشتق قانون سنل n₁ sin θ₁ = n₂ sin θ₂.'),steps:[['1','₁n₂ = sin θ₁ / sin θ₂'],['2','n₁ = c/v₁ and n₂ = c/v₂ ⇒ n₂/n₁ = v₁/v₂ = ₁n₂'],['3','sin θ₁ / sin θ₂ = n₂/n₁']],res:'n₁ sin θ₁ = n₂ sin θ₂'},
  {m:8,q:L('What are the conditions for total internal reflection?','ما شروط حدوث الانعكاس الكلي الداخلي؟'),steps:[['1','from a denser to a less dense medium'],['2','incidence angle > critical angle']],res:'2 conditions'},
  {m:8,q:L('Mention three applications of optical fibres.','اذكر ثلاثة تطبيقات للألياف البصرية.'),steps:[['1','endoscope and arthroscope in medicine'],['2','control inside machines and nuclear reactors'],['3','telephone and data communication']],res:'medicine · control · communication'},
  {m:8,q:L('State the two laws of reflection and the two laws of refraction.','اذكر قانوني الانعكاس وقانوني الانكسار.'),steps:[['Reflection 1','incident, reflected and normal in one plane'],['Reflection 2','θ incidence = θ reflection'],['Refraction 1','incident, refracted and normal in one plane'],['Refraction 2','sin θ₁ / sin θ₂ = constant']],res:'4 laws'}
 ],
 book:{p:'96–97',mcq:[
  {q:'Which statement is a law of reflection?',ar:'أي العبارات تمثل أحد قوانين الانعكاس؟',o:['incidence = twice reflection','incidence = half reflection','incidence angle = reflection angle','incidence = √reflection'],a:2},
  {q:'The speed of light in glass is:',ar:'سرعة الضوء في الزجاج:',o:['less than in vacuum','greater than in vacuum','equal to vacuum','all of the above'],a:0},
  {q:'The constant ratio sin θ₁ / sin θ₂ between two media is called:',ar:'النسبة الثابتة sin θ₁ / sin θ₂ بين وسطين تُسمى:',o:['energy of the ray','momentum of the ray','relative index of refraction','frequency of the ray'],a:2},
  {q:'The unit of the absolute index of refraction is:',ar:'وحدة معامل الانكسار المطلق:',o:['m','1/m','m²','no unit'],a:3}
 ],
 openTitle:'Q2 · Answer the following',
 open:[
  [L('1. What is the reason for the brilliance of diamonds?','1. ما سبب تألق الماس؟'),L('Small critical angle (24.4°) from its large index (2.42) — light suffers many total internal reflections before it leaves.','زاوية حرجة صغيرة (24.4°) بسبب معامل انكسار كبير (2.42)، فيعاني الضوء انعكاسات كلية كثيرة قبل خروجه.')],
  [L('2. Which reflects light better, a reflecting prism or a plane mirror? Why?','2. أيهما أكفأ في عكس الضوء: الموشور العاكس أم المرآة المستوية؟ ولماذا؟'),L('The reflecting prism: ~100% by total internal reflection; a mirror absorbs part (≈ 90% reflected).','الموشور العاكس: نحو 100% بالانعكاس الكلي، والمرآة تمتص جزءًا (تعكس نحو 90%).')],
  [L('4. State Snell’s law and the meaning of each symbol.','4. اكتب قانون سنل ومعنى كل رمز.'),L('n₁ sin θ₁ = n₂ sin θ₂: n₁, n₂ absolute indices of the first and second media; θ₁ incidence angle; θ₂ refraction angle.','n₁ sin θ₁ = n₂ sin θ₂: n₁ و n₂ معاملا الانكسار المطلقان للوسطين، θ₁ زاوية السقوط، θ₂ زاوية الانكسار.')],
  [L('5. What is the critical angle, and how is it related to the absolute index?','5. ما الزاوية الحرجة؟ وما علاقتها بمعامل الانكسار المطلق؟'),L('The incidence angle giving 90° refraction; n = 1/sin θc (to air).','زاوية السقوط التي تقابلها زاوية انكسار 90°، و n = 1/sin θc (إلى الهواء).')],
  [L('6. What is meant by “the absolute index of water is 1.33”?','6. ما المقصود بأن معامل الانكسار المطلق للماء 1.33؟'),L('c/v = 1.33: light in vacuum is 1.33 times faster than in water.','c/v = 1.33: سرعة الضوء في الفراغ 1.33 مرة سرعته في الماء.')]
 ],
 probs:[
  {q:L('P1. Diamond n = 2.42. Find the speed of light in it.','م1. للماس n = 2.42. أوجد سرعة الضوء فيه.'),steps:[['Sub','3 × 10⁸ / 2.42']],res:'v ≈ 1.24 × 10⁸ m/s'},
  {q:L('P2. Light speed in a material is c/1.52. Find n.','م2. سرعة الضوء في مادة c/1.52. أوجد n.'),steps:[['Law','n = c/v = c ÷ (c/1.52)']],res:'n = 1.52'},
  {q:L('P3. Water n = 4/3, glass n = 3/2. Find the critical angle between them (sin 62.75° = 0.889).','م3. للماء n = 4/3 وللزجاج n = 3/2. أوجد الزاوية الحرجة بينهما.'),steps:[['Law','sin θc = n₂/n₁ = (4/3)/(3/2) = 0.889']],res:'θc = 62.75°'},
  {q:L('P4. Light enters water (n = 4/3) at 30°. Find (a) the reflection angle (b) the refraction angle.','م4. يسقط ضوء على الماء (n = 4/3) بزاوية 30°. أوجد (أ) زاوية الانعكاس (ب) زاوية الانكسار.'),steps:[['a','reflection = incidence = 30°'],['b','sin θ₂ = 0.5 × 3/4 = 0.375']],res:'30° ; 22.02°'},
  {q:L('P5. Speed of light in ice = c/1.31. Critical angle from ice to air?','م5. سرعة الضوء في الجليد c/1.31. ما الزاوية الحرجة من الجليد إلى الهواء؟'),steps:[['Law','sin θc = 1/1.31 = 0.763']],res:'θc = 49.73°'},
  {q:L('P6. Air to medium n = 1.5 at 30°; λ in air = 600 nm. Find (a) θ₂ (b) λ in the medium.','م6. من الهواء إلى وسط n = 1.5 بزاوية 30°، و λ في الهواء 600 nm. أوجد (أ) θ₂ (ب) λ في الوسط.'),steps:[['a','sin θ₂ = 0.5/1.5 = 0.333'],['b','λ₂ = 600/1.5']],res:'19.45° ; 400 nm'}
 ]},
 summary:[
  L('Reflection: incidence = reflection, all in one plane.','الانعكاس: زاوية السقوط = زاوية الانعكاس، والجميع في مستوٍ واحد.'),
  L('Refraction: toward the normal into a denser medium; away from it into a less dense one.','الانكسار: مقتربًا من العمود إلى الوسط الأكثف، ومبتعدًا عنه إلى الأقل كثافة.'),
  L('₁n₂ = sin θ₁/sin θ₂ = v₁/v₂ = λ₁/λ₂ = n₂/n₁; n = c/v (no unit).','₁n₂ = sin θ₁/sin θ₂ = v₁/v₂ = λ₁/λ₂ = n₂/n₁؛ n = c/v بلا وحدة.'),
  L('Snell: n₁ sin θ₁ = n₂ sin θ₂.','سنل: n₁ sin θ₁ = n₂ sin θ₂.'),
  L('Critical angle: sin θc = n₂/n₁; TIR when denser → less dense and θ > θc.','الزاوية الحرجة: sin θc = n₂/n₁؛ والانعكاس الكلي من الأكثف إلى الأقل وبزاوية أكبر من الحرجة.'),
  L('Applications: diamond brilliance, reflecting prism, periscope, optical fibres.','التطبيقات: تألق الماس، الموشور العاكس، البيرسكوب، الألياف البصرية.')
 ],
 extra:{t:'Useful indices',items:[['Water','1.33 (4/3)'],['Window glass','1.52'],['Diamond','2.42 · θc ≈ 24.4°'],['Vacuum / air','1']]}
};
(window.XL=window.XL||[]).push({ch:6,t:'Snell’s law and the critical angle',d:L('Choose the two media and the incidence angle. Watch the ray refract, or reflect totally beyond the critical angle.','اختر الوسطين وزاوية السقوط، وراقب انكسار الشعاع أو انعكاسه كليًا بعد الزاوية الحرجة.'),
 html:`<div class="calc"><label>Medium 1 (n₁)<select id="sN1"><option value="1">Air 1.00</option><option value="1.33">Water 1.33</option><option value="1.52" selected>Glass 1.52</option><option value="2.42">Diamond 2.42</option></select></label>
 <label>Medium 2 (n₂)<select id="sN2"><option value="1" selected>Air 1.00</option><option value="1.33">Water 1.33</option><option value="1.52">Glass 1.52</option><option value="2.42">Diamond 2.42</option></select></label>
 <label>Incidence θ₁ (°)<input id="sT" type="range" min="0" max="89" value="30"></label></div>
 <svg id="sSvg" viewBox="0 0 320 240" style="width:100%;max-width:420px;margin-top:10px;background:var(--paper);border-radius:8px"></svg><div id="sOut"></div>`,
 init(){const d=()=>{const n1=+$('#sN1').value,n2=+$('#sN2').value,t=+$('#sT').value*Math.PI/180;const s2=n1*Math.sin(t)/n2;const crit=n1>n2?Math.asin(n2/n1)*180/Math.PI:null;const tir=s2>1;
  const L=100,cx=160,cy=120;const ix=cx-L*Math.sin(t),iy=cy+L*Math.cos(t);let out='';
  if(tir) out=`<path d="M${cx} ${cy} L${cx+L*Math.sin(t)} ${cy+L*Math.cos(t)}" stroke="var(--bad)" stroke-width="2.5"/>`; else {const t2=Math.asin(s2);out=`<path d="M${cx} ${cy} L${cx+L*Math.sin(t2)} ${cy-L*Math.cos(t2)}" stroke="var(--c6)" stroke-width="2.5"/><path d="M${cx} ${cy} L${cx+L*Math.sin(t)} ${cy+L*Math.cos(t)}" stroke="var(--c6)" stroke-width="1" opacity=".35"/>`}
  $('#sSvg').innerHTML=`<rect x="0" y="120" width="320" height="120" fill="var(--c6)" opacity="${0.08+0.08*n1}"/><rect x="0" y="0" width="320" height="120" fill="var(--c6)" opacity="${0.08*n2-0.05}"/><line x1="0" y1="120" x2="320" y2="120" stroke="var(--c6)"/><line x1="160" y1="5" x2="160" y2="235" stroke="var(--muted)" stroke-dasharray="4 3"/><path d="M${ix} ${iy} L${cx} ${cy}" stroke="var(--amber)" stroke-width="2.5"/>${out}<g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)"><text x="8" y="232">n₁ = ${n1}</text><text x="8" y="16">n₂ = ${n2}</text></g>`;
  $('#sOut').innerHTML=steps([['Snell',`${n1} × sin ${(+$('#sT').value)}° = ${n2} × sin θ₂`],['sin θ₂',s2.toFixed(3)],['θc',crit?crit.toFixed(1)+'°':'none (light goes to a denser medium)']])+(tir?`<div class="alert bad">θ₁ is greater than the critical angle — total internal reflection</div>`:`<div class="res">✓ θ₂ = ${(Math.asin(s2)*180/Math.PI).toFixed(1)}°</div>`)};
  ['sN1','sN2','sT'].forEach(i=>$('#'+i).oninput=d);d();}});

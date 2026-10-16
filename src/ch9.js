/* ---------- Chapter 9: Electrostatic ---------- */
const FIELD_SVG=`<svg viewBox="0 0 520 190" role="img" aria-label="Field lines and equipotential surfaces"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<defs><marker id="ah9" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--c9)"/></marker></defs>
${[30,55,80].map(r=>`<circle cx="120" cy="90" r="${r}" fill="none" stroke="var(--muted)" stroke-dasharray="4 4"/>`).join('')}
${Array.from({length:8},(_,i)=>{const a=i*Math.PI/4;return `<line x1="${120+14*Math.cos(a)}" y1="${90+14*Math.sin(a)}" x2="${120+92*Math.cos(a)}" y2="${90+92*Math.sin(a)}" stroke="var(--c9)" stroke-width="1.8" marker-end="url(#ah9)"/>`}).join('')}
<circle cx="120" cy="90" r="12" fill="var(--c9)"/><text x="120" y="94" text-anchor="middle" fill="#fff">+</text><text x="120" y="186" text-anchor="middle">point charge: non-homogeneous field</text>
<rect x="300" y="20" width="10" height="140" fill="var(--bad)"/><rect x="470" y="20" width="10" height="140" fill="var(--c9)"/><text x="305" y="15" text-anchor="middle">+</text><text x="475" y="15" text-anchor="middle">−</text>
${[40,70,100,130].map(y=>`<line x1="312" y1="${y}" x2="466" y2="${y}" stroke="var(--c9)" stroke-width="1.8" marker-end="url(#ah9)"/>`).join('')}
${[350,390,430].map(x=>`<line x1="${x}" y1="25" x2="${x}" y2="155" stroke="var(--muted)" stroke-dasharray="4 4"/>`).join('')}
<text x="390" y="186" text-anchor="middle">parallel plates: homogeneous field</text></g></svg>`;
CHD[9]={
 obj:[L('State the properties of electric charge and Q = ne.','ذكر خواص الشحنة الكهربائية والعلاقة Q = ne.'),
      L('Apply Coulomb’s law to two or three point charges.','تطبيق قانون كولوم على شحنتين أو ثلاث شحنات نقطية.'),
      L('Classify materials by conductivity and describe charge distribution on conductors.','تصنيف المواد حسب توصيلها الكهربائي ووصف توزيع الشحنات على الموصلات.'),
      L('Calculate electric field, flux, potential, potential difference and work.','حساب المجال والفيض والجهد وفرق الجهد والشغل.'),
      L('Explain equipotential surfaces, earthing, lightning and electrostatic applications.','تفسير سطوح تساوي الجهد والتأريض والبرق وتطبيقات الكهربائية الساكنة.')],
 lessons:[
  {sn:'9.1',t:'Electric Charge',p:'137',blocks:[
   {box:'def',label:'Properties of electric charge',list:[
     L('1) Unlike charges attract; like charges repel.','1) الشحنات المختلفة تتجاذب والمتشابهة تتنافر.'),
     L('2) Electric charge is conserved.','2) الشحنة الكهربائية محفوظة.'),
     L('3) Charge is quantized: any charge is a whole multiple of the electron charge e.','3) الشحنة مكمّاة: أي شحنة مضاعف صحيح لشحنة الإلكترون e.')]},
   {eq:'Q = n · e      e = 1.6 × 10⁻¹⁹ C'},
   {box:'dyk',label:'Did you know?',list:[L('There are six kinds of quarks inside the nucleus: three with +2/3 and three with −1/3 of the proton’s charge.','يوجد داخل النواة ستة أنواع من الكواركات: ثلاثة شحنتها +2/3 وثلاثة −1/3 من شحنة البروتون.')]}
  ]},
  {sn:'9.2',t:'Coulomb’s Law',p:'138–140',blocks:[
   {p:L('Coulomb used a torsion balance he designed: the twist of a bar hung by a thin fibre measured the force between two charged balls.','استعمل كولوم ميزان اللي الذي صممه: مقدار التواء قضيب معلق بخيط رفيع يقيس القوة بين كرتين مشحونتين.')},
   {box:'def',label:'Coulomb’s law',list:[L('The electric force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them.','القوة الكهربائية بين شحنتين نقطيتين تتناسب طرديًا مع حاصل ضرب الشحنتين وعكسيًا مع مربع المسافة بينهما.')]},
   {eq:`F = k ${fr('q₁ q₂','r²')}      k = ${fr('1','4πε₀')} = 9 × 10⁹ N·m²/C²`},
   {p:L('ε₀ = 8.85 × 10⁻¹² C²/N·m² is the permittivity of free space. In an insulating medium of greater permittivity the force is smaller. The forces on the two charges are equal and opposite (Newton’s third law).','ε₀ = 8.85 × 10⁻¹² C²/N·m² سماحية الفراغ. وفي وسط عازل سماحيته أكبر تكون القوة أصغر. والقوتان على الشحنتين متساويتان ومتعاكستان (القانون الثالث لنيوتن).')}
  ]},
  {sn:'9.3',t:'Electric Conductivity',p:'141',blocks:[
   {table:{h:['Type','Why','Examples'],r:[['Insulators','electrons tightly bound to nuclei','rubber, glass, mica, dry silk, distilled water'],['Conductors','valence electrons move freely','silver (best), copper, aluminium'],['Semiconductors','between conductors and insulators','silicon (Si), germanium (Ge) — transistors, diodes, solar cells']],cap:'Book p. 141'}}
  ]},
  {sn:'9.4',t:'Charge Distribution on Conductors',p:'141–143',blocks:[
   {p:L('Activity with a charged metal net: when it is bent, only the papers on the outer surface repel. <b>Charges stay on the outer surface of an isolated charged conductor</b> because like charges repel.','نشاط الشبكة المعدنية المشحونة: عند ثنيها تتنافر الأوراق على السطح الخارجي فقط. <b>تستقر الشحنات على السطح الخارجي للموصل المشحون المعزول</b> لأن الشحنات المتشابهة تتنافر.')},
   {eq:`σ = ${fr('q','A')}   (C/m²)`},
   {box:'rem',label:'Remember',list:[L('Charges concentrate at sharp points, where the charge density is greatest.','تتركز الشحنات عند الرؤوس المدببة حيث تكون كثافة الشحنة أكبر.')]}
  ]},
  {sn:'9.5',t:'The Electric Field',p:'144–149',blocks:[
   {p:L('The electric field is the space around a charge where an electric force acts on a positive test charge. It is a vector.','المجال الكهربائي هو الحيز المحيط بالشحنة الذي تظهر فيه قوة كهربائية على شحنة اختبار موجبة. وهو كمية متجهة.')},
   {eq:`E = ${fr('F','q′')}      E = k ${fr('q','r²')}   (N/C)`},
   {fig:FIELD_SVG,cap:'Field lines (solid) and equipotential surfaces (dashed)'},
   {box:'def',label:'Electric field lines',list:[
     L('Leave positive charges and end on negative charges, perpendicular to the charged surfaces.','تخرج من الشحنات الموجبة وتنتهي في السالبة، عمودية على السطوح المشحونة.'),
     L('The tangent at any point gives the direction of the field there.','المماس في أي نقطة يحدد اتجاه المجال فيها.'),
     L('They never intersect; they repel and tend to be as short as possible.','لا تتقاطع، وتتنافر وتميل لأن تكون أقصر ما يمكن.')]},
   {table:{h:['Field','Description','Example'],r:[['Homogeneous','same magnitude and direction everywhere; parallel equally spaced lines','between two wide parallel plates with equal opposite charges'],['Non-homogeneous','changes from point to point','around a point charge or charged sphere']],cap:'Book p. 146–147'}},
   {p:L('Inside a charged conducting sphere E = 0, because all the charge is on its outer surface.','داخل الكرة الموصلة المشحونة E = 0، لأن الشحنة كلها على سطحها الخارجي.')}
  ]},
  {sn:'9.6',t:'Electric Flux',p:'150–151',blocks:[
   {p:L('The electric flux Φ is the number of field lines crossing a surface perpendicularly. It increases with the field and with the area.','الفيض الكهربائي Φ هو عدد خطوط المجال التي تخترق سطحًا عموديًا. ويزداد بزيادة المجال والمساحة.')},
   {eq:'Φ = E<sub>⊥</sub> · A   (N·m²/C)'}
  ]},
  {sn:'9.7',t:'Electric Potential',p:'152–153',blocks:[
   {box:'def',label:'Electric potential',list:[L('The electric potential energy per unit charge at a point in the field. It is a scalar, measured in volts; positive near a positive charge and negative near a negative charge.','الطاقة الكامنة الكهربائية لوحدة الشحنات عند نقطة في المجال. وهو كمية قياسية تقاس بالفولت؛ موجب قرب الشحنة الموجبة وسالب قرب السالبة.')]},
   {eq:`V = ${fr('W','q')}      V = k ${fr('q','r')}`}
  ]},
  {sn:'9.8',t:'Potential Difference',p:'153–155',blocks:[
   {p:L('The potential difference between A and B is the work needed to move a positive charge between them divided by that charge.','فرق الجهد بين A و B هو الشغل اللازم لنقل شحنة موجبة بينهما مقسومًا على تلك الشحنة.')},
   {eq:`V<sub>AB</sub> = ${fr('W<sub>AB</sub>','q')}  ⇒  W = q · V<sub>AB</sub>      E = ${fr('V<sub>AB</sub>','x')}  (potential gradient, V/m)`},
   {box:'rem',label:'Remember',list:[L('The electric field always points toward lower potential.','يكون اتجاه المجال الكهربائي دائمًا نحو الجهد الأقل.')]},
   {box:'dyk',label:'Did you know?',list:[L('A heart stress test (ECG) records potential differences between metal electrodes over time.','فحص الجهد للقلب يسجل فروق الجهد بين أقطاب معدنية مع الزمن.')]}
  ]},
  {sn:'9.9',t:'Equipotential Surfaces',p:'156–160',blocks:[
   {box:'def',label:'Equipotential surface',list:[L('A surface whose points all have the same potential; the potential difference between any two of its points is zero.','سطح جميع نقاطه لها الجهد نفسه، وفرق الجهد بين أي نقطتين عليه صفر.')]},
   {list:[L('Properties: they do not intersect; field lines are perpendicular to them; they get closer where the field is strong (near sharp points). Around a point charge they are concentric spheres; between parallel plates they are parallel planes.','خواصها: لا تتقاطع؛ خطوط المجال عمودية عليها؛ تتقارب حيث يكون المجال قويًا (قرب الرؤوس المدببة). حول الشحنة النقطية كرات متحدة المركز، وبين الصفيحتين المتوازيتين مستويات متوازية.')]},
   {h:'Earth, lightning and applications'},
   {p:L('The Earth’s potential is taken as zero: it is a huge reservoir of charge, so adding or removing charge does not change it. A charged conductor connected to the Earth reaches zero potential.','جهد الأرض يُعد صفرًا: فهي مخزن هائل للشحنات، فلا يتغير جهدها بإضافة شحنة أو أخذها. والموصل المشحون المتصل بالأرض يصبح جهده صفرًا.')},
   {p:L('<b>Lightning:</b> a discharge between parts of a cloud or between two clouds, lasting about 1/1000 s, heating air to about 30 000 °C. The sudden expansion of air makes <b>thunder</b>. A discharge between a cloud and the ground is a <b>lightning stroke</b>.','<b>البرق:</b> تفريغ بين أجزاء الغيمة أو بين غيمتين، يستمر نحو 1/1000 s ويسخن الهواء إلى نحو 30000 °C، والتمدد المفاجئ للهواء يُحدث <b>الرعد</b>. والتفريغ بين غيمة والأرض يُسمى <b>الصاعقة</b>.')},
   {p:L('<b>Lightning arrester:</b> a conductor with a sharp top above the building and its other end in moist ground; it discharges the atmosphere gradually through the sharp point.','<b>مانعة الصواعق:</b> موصل له رأس مدبب فوق البناية وطرفه الآخر في أرض رطبة، يفرغ الشحنة تدريجيًا عبر الرأس المدبب.')},
   {p:L('<b>Applications:</b> electrostatic filters for factory smoke, and the photocopier.','<b>التطبيقات:</b> المرشحات الكهروستاتيكية لدخان المصانع، وآلة الاستنساخ.')}
  ]}
 ],
 laws:[
  {t:'Quantized charge',eq:'Q = n e',d:[['e','1.6 × 10⁻¹⁹ C'],['n','whole number']],use:L('Number of electrons: n = Q/e.','عدد الإلكترونات n = Q/e.')},
  {t:'Coulomb’s law',eq:`F = k ${fr('q₁q₂','r²')}`,d:[['k','9 × 10⁹ N·m²/C²'],['r','distance (m)']],use:L('Point charges. Like ⇒ repulsion, unlike ⇒ attraction.','الشحنات النقطية. متشابهة ⇒ تنافر، مختلفة ⇒ تجاذب.'),err:L('Forgetting μC = 10⁻⁶ and cm → m.','نسيان أن μC = 10⁻⁶ وتحويل cm إلى m.')},
  {t:'Electric field',eq:`E = ${fr('F','q′')} = k ${fr('q','r²')}`,d:[['E','N/C'],['r','from the centre of a sphere']],use:L('Inside a charged conductor E = 0.','داخل الموصل المشحون E = 0.'),err:L('For a sphere, r = radius + distance from the surface.','للكرة r = نصف القطر + البعد عن السطح.')},
  {t:'Electric flux',eq:'Φ = E<sub>⊥</sub> A',d:[['A','area (m²); sphere 4πr²']],use:L('Unit N·m²/C.','الوحدة N·m²/C.')},
  {t:'Potential',eq:`V = k ${fr('q','r')}`,d:[['V','volt']],use:L('Scalar: add potentials with their signs.','كمية قياسية: تجمع الجهود مع إشاراتها.')},
  {t:'Work & potential gradient',eq:`W = q V<sub>AB</sub> ;  E = ${fr('ΔV','x')}`,d:[['ΔV','potential difference (V)'],['x','distance (m)']],use:L('Homogeneous field between plates.','المجال المنتظم بين الصفيحتين.')}
 ],
 examples:[
  {t:L('Book: +2 μC and +5 μC are 90 cm apart. Find the force and its type.','الكتاب: +2 μC و +5 μC بينهما 90 cm. أوجد القوة ونوعها.'),p:'139',steps:[['Law','F = k q₁q₂/r²'],['Sub',`${fr('9 × 10⁹ × 2 × 10⁻⁶ × 5 × 10⁻⁶','0.9²')}`]],res:'F = 1/9 N ≈ 0.11 N, repulsion (like charges)'},
  {t:L('Book: a 2 × 10⁻⁶ C charge between charged parallel plates feels 6 × 10⁻⁴ N along the field. Find E; what force at another point b?','الكتاب: شحنة 2 × 10⁻⁶ C بين صفيحتين مشحونتين تتأثر بقوة 6 × 10⁻⁴ N باتجاه المجال. أوجد E، وما القوة عند نقطة أخرى b؟'),p:'147',steps:[['Type','force along the field ⇒ positive charge'],['E','6 × 10⁻⁴ / 2 × 10⁻⁶ = 300 N/C'],['b','homogeneous field ⇒ same force']],res:'E = 3 × 10² N/C ; F = 6 × 10⁻⁴ N at b'},
  {t:L('Book: a sphere of 100 pC and radius 1 cm. Find E at 50 cm from the centre, on the surface, and inside.','الكتاب: كرة شحنتها 100 pC ونصف قطرها 1 cm. أوجد E على بعد 50 cm من المركز، وعلى السطح، وفي الداخل.'),p:'148',steps:[['50 cm','9 × 10⁹ × 10⁻¹⁰ / 0.25 = 3.6 N/C'],['surface','9 × 10⁹ × 10⁻¹⁰ / 10⁻⁴ = 9000 N/C'],['inside','no charge inside ⇒ E = 0']],res:'3.6 N/C · 9000 N/C · 0'},
  {t:L('Book: two 1 μC charges 2 m apart. Find E at a point 0.5 m from the first.','الكتاب: شحنتان 1 μC بينهما 2 m. أوجد E عند نقطة تبعد 0.5 m عن الأولى.'),p:'149',steps:[['E₁','9 × 10⁹ × 10⁻⁶ / 0.25 = 36 × 10³ N/C'],['E₂','9 × 10⁹ × 10⁻⁶ / 2.25 = 4 × 10³ N/C'],['Opposite','E₁ − E₂']],res:'E = 32 × 10³ N/C toward the second charge'},
  {t:L('Book: a 5 cm sphere carries 20 μC. Find V on its surface and 15 cm from its surface.','الكتاب: كرة نصف قطرها 5 cm شحنتها 20 μC. أوجد V على سطحها وعلى بعد 15 cm من سطحها.'),p:'156',steps:[['Surface','9 × 10⁹ × 20 × 10⁻⁶ / 0.05'],['15 cm','… / (0.05 + 0.15)']],res:'36 × 10⁵ V ; 9 × 10⁵ V'},
  {t:L('Book: A is 30 cm and B 90 cm from a sphere with 2 × 10⁻⁹ C. Work to move 1 μC from B to A?','الكتاب: A على 30 cm و B على 90 cm من كرة شحنتها 2 × 10⁻⁹ C. الشغل لنقل 1 μC من B إلى A؟'),p:'157',steps:[['V<sub>A</sub>','9 × 10⁹ × 2 × 10⁻⁹ / 0.3 = 60 V'],['V<sub>B</sub>','… / 0.9 = 20 V'],['W','10⁻⁶ × (60 − 20)']],res:'W = 40 × 10⁻⁶ J'}
 ],
 quiz:[
  {ty:'mcq',k:'MCQ',q:L('The charge of the electron is:','شحنة الإلكترون:'),o:['1.6 × 10⁻¹⁹ C','9 × 10⁹ C','8.85 × 10⁻¹² C','1 C'],a:0,x:L('e = 1.6 × 10⁻¹⁹ C.','e = 1.6 × 10⁻¹⁹ C.')},
  {ty:'mcq',k:'MCQ',q:L('If the distance between two charges is doubled, the force becomes:','إذا تضاعفت المسافة بين شحنتين تصبح القوة:'),o:['double','half','a quarter','four times'],a:2,x:L('F ∝ 1/r².','F ∝ 1/r².')},
  {ty:'mcq',k:'MCQ',q:L('Coulomb measured the force with a:','قاس كولوم القوة بواسطة:'),o:['spring balance','torsion balance','voltmeter','barometer'],a:1,x:L('Book p. 138.','الكتاب صفحة 138.')},
  {ty:'mcq',k:'MCQ',q:L('The best electrical conductor is:','أفضل موصل للكهربائية:'),o:['copper','aluminium','silver','gold'],a:2,x:L('Silver, then copper, then aluminium.','الفضة ثم النحاس ثم الألمنيوم.')},
  {ty:'mcq',k:'MCQ',q:L('Silicon and germanium are:','السليكون والجرمانيوم:'),o:['insulators','conductors','semiconductors','superconductors'],a:2,x:L('Used in transistors and solar cells.','تُستعمل في الترانزستورات والخلايا الشمسية.')},
  {ty:'mcq',k:'MCQ',q:L('On an isolated charged conductor, charges stay:','على الموصل المشحون المعزول تستقر الشحنات:'),o:['inside','on the outer surface','at the centre','uniformly in the volume'],a:1,x:L('Like charges repel.','الشحنات المتشابهة تتنافر.')},
  {ty:'mcq',k:'MCQ',q:L('The charge density is greatest at:','تكون كثافة الشحنة أكبر عند:'),o:['flat parts','sharp points','the centre','inside'],a:1,x:L('Book p. 143.','الكتاب صفحة 143.')},
  {ty:'mcq',k:'MCQ',q:L('The unit of the electric field is:','وحدة المجال الكهربائي:'),o:['N/C','C/N','V·m','J'],a:0,x:L('Also V/m.','وكذلك V/m.')},
  {ty:'mcq',k:'MCQ',q:L('The field inside a charged conducting sphere is:','المجال داخل كرة موصلة مشحونة:'),o:['maximum','zero','equal to the surface value','negative'],a:1,x:L('No charge inside.','لا شحنة في الداخل.')},
  {ty:'mcq',k:'MCQ',q:L('In a homogeneous field, the field lines are:','في المجال المنتظم تكون خطوط القوة:'),o:['radial','parallel and equally spaced','circular','crossing'],a:1,x:L('Between parallel plates.','بين صفيحتين متوازيتين.')},
  {ty:'mcq',k:'MCQ',q:L('Electric potential is:','الجهد الكهربائي:'),o:['a vector','a scalar','always positive','measured in N/C'],a:1,x:L('Measured in volts.','يقاس بالفولت.')},
  {ty:'mcq',k:'MCQ',q:L('A free positive charge in a field moves:','الشحنة الموجبة الحرة في مجال تتحرك:'),o:['against the field','along the field','perpendicular','in a circle'],a:1,x:L('Negative charges move against the field.','والسالبة عكس المجال.')},
  {ty:'mcq',k:'MCQ',q:L('The Earth’s potential is taken as:','يُعد جهد الأرض:'),o:['positive','negative','zero','infinite'],a:2,x:L('Huge charge reservoir.','مخزن هائل للشحنات.')},
  {ty:'mcq',k:'MCQ',q:L('The angle between field lines and equipotential surfaces is:','الزاوية بين خطوط المجال وسطوح تساوي الجهد:'),o:['0°','45°','90°','180°'],a:2,x:L('Always perpendicular.','دائمًا متعامدة.')},
  {ty:'tf',k:'True/False',q:L('The electric force between two charged objects is greater than the gravitational force between their masses.','القوة الكهربائية بين جسمين مشحونين أكبر من قوة التجاذب الكتلي بينهما.'),a:true,x:L('True.','صح.')},
  {ty:'tf',k:'True/False',q:L('The electron attracts the proton with a smaller force than the proton attracts the electron.','الإلكترون يجذب البروتون بقوة أصغر من قوة جذب البروتون له.'),a:false,x:L('False → <b>equal</b> forces (Newton’s third law).','خطأ ← القوتان <b>متساويتان</b> (القانون الثالث لنيوتن).')},
  {ty:'tf',k:'True/False',q:L('Coulomb’s law applies to equal charges only.','قانون كولوم ينطبق على الشحنات المتساوية فقط.'),a:false,x:L('False → it applies to <b>point charges</b>.','خطأ ← ينطبق على <b>الشحنات النقطية</b>.')},
  {ty:'tf',k:'True/False',q:L('All points of a charged conducting sphere have the same potential.','جميع نقاط الكرة الموصلة المشحونة لها الجهد نفسه.'),a:true,x:L('True — it is an equipotential body.','صح — جسم متساوي الجهد.')},
  {ty:'tf',k:'True/False',q:L('Electric field lines can intersect.','يمكن أن تتقاطع خطوط المجال الكهربائي.'),a:false,x:L('False → never; the field would have two directions at one point.','خطأ ← لا تتقاطع، وإلا كان للمجال اتجاهان في نقطة واحدة.')},
  {ty:'tf',k:'True/False',q:L('The charge is distributed uniformly on any conductor surface.','تتوزع الشحنة بانتظام على سطح أي موصل.'),a:false,x:L('False → it concentrates at sharp points.','خطأ ← تتركز عند الرؤوس المدببة.')},
  {ty:'open',k:'Define',q:L('State Coulomb’s law.','اذكر نص قانون كولوم.'),x:L('The force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them.','القوة بين شحنتين نقطيتين تتناسب طرديًا مع حاصل ضرب الشحنتين وعكسيًا مع مربع المسافة بينهما.')},
  {ty:'open',k:'Define',q:L('Define: Equipotential surface.','عرّف: سطح تساوي الجهد.'),x:L('A surface whose points all have the same potential; the potential difference between any two of its points is zero.','سطح جميع نقاطه بالجهد نفسه، وفرق الجهد بين أي نقطتين عليه صفر.')},
  {ty:'open',k:'Define',q:L('Define: Charge density.','عرّف: كثافة الشحنة.'),x:L('The charge per unit area of the surface of an isolated charged conductor: σ = q/A (C/m²).','الشحنة لوحدة المساحة من سطح الموصل المشحون المعزول: σ = q/A.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: there is no electric field inside a charged metal ball.','علّل: انعدام المجال داخل كرة معدنية مشحونة.'),x:L('All the charges are on its outer surface, so the fields inside cancel.','لأن الشحنات كلها على سطحها الخارجي، فتلغي المجالات بعضها في الداخل.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: we see lightning before we hear thunder.','علّل: نرى البرق قبل سماع الرعد.'),x:L('Light travels at 3 × 10⁸ m/s, much faster than sound (about 340 m/s).','لأن سرعة الضوء 3 × 10⁸ m/s أكبر بكثير من سرعة الصوت (نحو 340 m/s).')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: a person in an aeroplane is not harmed when it passes through a charged cloud.','علّل: لا يتأذى راكب الطائرة عند مرورها في غيمة مشحونة.'),x:L('The metal body is a conductor: the charges stay on its outer surface and the field inside is zero.','لأن جسم الطائرة المعدني موصل، فتبقى الشحنات على سطحه الخارجي ويكون المجال داخله صفرًا.')},
  {ty:'open',k:'Problem · easy',q:L('Force between two 1 μC charges 10 cm apart.','القوة بين شحنتين 1 μC بينهما 10 cm.'),x:L('F = 9 × 10⁹ × 10⁻¹² / 0.01 = <b>0.9 N</b> (repulsion)','F = 9 × 10⁹ × 10⁻¹² / 0.01 = <b>0.9 N</b> (تنافر)')},
  {ty:'open',k:'Problem · medium',q:L('Plates at +10 V and −2 V, 4 mm apart. Find E.','صفيحتان جهدهما +10 V و −2 V والمسافة 4 mm. أوجد E.'),x:L('E = 12 / 0.004 = <b>3000 N/C</b>','E = 12 / 0.004 = <b>3000 N/C</b>')},
  {ty:'open',k:'Problem · hard',q:L('6 μC and 5 μC are 1.2 m apart. Work to bring the second to 0.9 m?','6 μC و 5 μC بينهما 1.2 m. الشغل لتقريب الثانية إلى 0.9 m؟'),x:L('W = q₂(V₂ − V₁) = 5 × 10⁻⁶ × 9 × 10⁹ × 6 × 10⁻⁶ (1/0.9 − 1/1.2) ≈ <b>+0.075 J</b>','W = q₂(V₂ − V₁) ≈ <b>+0.075 J</b>')}
 ],
 exam:[
  {m:12,q:L('+27 μC and +3 μC are 1 m apart. Where must a third charge be placed so the net force on it is zero?','+27 μC و +3 μC بينهما 1 m. أين توضع شحنة ثالثة لتنعدم محصلة القوة عليها؟'),steps:[['Where','like charges ⇒ between them, nearer the smaller'],['Law','27/x² = 3/(1 − x)² ⇒ 3(1 − x) = x']],res:'0.75 m from +27 μC (0.25 m from +3 μC)',tip:L('Paper I (2022–2023) used this exact question.','جاء هذا السؤال نفسه في الورقة I (2022–2023).')},
  {m:10,q:L('A conducting sphere of 100 pC and radius 1.5 cm. Find E and V at 5 cm from its surface.','كرة موصلة 100 pC ونصف قطرها 1.5 cm. أوجد E و V على بعد 5 cm من سطحها.'),steps:[['r','1.5 + 5 = 6.5 cm'],['E','9 × 10⁹ × 10⁻¹⁰ / 0.065²'],['V','9 × 10⁹ × 10⁻¹⁰ / 0.065']],res:'E ≈ 213 N/C ; V ≈ 13.8 V'},
  {m:10,q:L('Three charges on a line: q₁ = +4 μC, q₃ = −5 μC 2 m to its right, q₂ = +6 μC 4 m to the right of q₃. Find the net force on q₃.','ثلاث شحنات على خط: q₁ = +4 μC و q₃ = −5 μC على بعد 2 m يمينها و q₂ = +6 μC على بعد 4 m يمين q₃. أوجد محصلة القوة على q₃.'),steps:[['F₁','9 × 10⁹ × 4 × 5 × 10⁻¹² / 4 = 0.045 N (left)'],['F₂','9 × 10⁹ × 6 × 5 × 10⁻¹² / 16 ≈ 0.0169 N (right)']],res:'≈ 0.0281 N toward q₁ (left)'},
  {m:10,q:L('A point is 0.5 m and another 0.9 m from a ball of charge 1 × 10⁻³ μC. Work to move 2 μC from the far point to the near one?','نقطة على 0.5 m وأخرى على 0.9 m من كرة شحنتها 1 × 10⁻³ μC. الشغل لنقل 2 μC من البعيدة إلى القريبة؟'),steps:[['V<sub>A</sub>','9 × 10⁹ × 10⁻⁹ / 0.5 = 18 V'],['V<sub>B</sub>','… / 0.9 = 10 V'],['W','2 × 10⁻⁶ × 8']],res:'W = 16 × 10⁻⁶ J'},
  {m:8,q:L('Mention the properties of electric field lines.','اذكر خواص خطوط المجال الكهربائي.'),steps:[['1','from + to −, perpendicular to charged surfaces'],['2','tangent gives the field direction'],['3','never intersect; repel; shortest length']],res:'3 properties'},
  {m:8,q:L('What is a lightning arrester and how does it work?','ما مانعة الصواعق وكيف تعمل؟'),steps:[['What','a conductor with a sharp top above the building, its end in moist ground'],['How','charges are induced at the sharp point and discharge gradually into the air, reducing the danger']],res:'gradual discharge by sharp points'}
 ],
 book:{p:'161–163',mcq:[
  {q:'The charge density on a charged isolated conductor with sharp points is:',ar:'كثافة الشحنة على موصل مشحون معزول ذي رؤوس مدببة:',o:['greatest at the sharp points','smallest at the sharp points','equal at all points','all of the above'],a:0},
  {q:'In a homogeneous electric field:',ar:'في المجال الكهربائي المنتظم:',o:['the magnitude changes everywhere','magnitude and direction are constant everywhere','only the direction is constant','both change everywhere'],a:1},
  {q:'The potential of points between two oppositely charged parallel plates is:',ar:'جهد النقاط بين صفيحتين متوازيتين مشحونتين بشحنتين متساويتين مختلفتين:',o:['always positive','always negative','positive or negative','may be positive, negative or zero'],a:3},
  {q:'A free charge placed in an electric field moves:',ar:'الشحنة الحرة في مجال كهربائي تتحرك:',o:['always along the field','always against the field','along the field if positive, against it if negative','perpendicular to the field'],a:2},
  {q:'A point on an isolated charged conducting sphere is at 1 V. Its centre is at:',ar:'نقطة على كرة موصلة مشحونة معزولة جهدها 1 V. جهد مركزها:',o:['1 V','zero','between 0 and 1 V','greater than 1 V'],a:0}
 ],
 openTitle:'Q2 – Q11',
 open:[
  [L('Q2-2. The electron attracts the proton with a force smaller than the proton attracts the electron.','س2-2. الإلكترون يجذب البروتون بقوة أصغر من قوة جذب البروتون للإلكترون.'),L('False → the two forces are equal in magnitude and opposite in direction.','خطأ ← القوتان متساويتان مقدارًا ومتعاكستان اتجاهًا.')],
  [L('Q2-4. Semiconductors are always good conductors.','س2-4. أشباه الموصلات موصلات جيدة دائمًا.'),L('False → their conductivity is between conductors and insulators.','خطأ ← توصيلها بين الموصلات والعوازل.')],
  [L('Q2-5 / 6. Coulomb’s law applies to equal charges only / to large charged bodies.','س2-5 / 6. قانون كولوم ينطبق على الشحنات المتساوية فقط / على الشحنات كبيرة الحجم.'),L('False → it applies to point charges.','خطأ ← ينطبق على الشحنات النقطية.')],
  [L('Q2-7. Charge is distributed uniformly on a conductor surface.','س2-7. تتوزع الشحنة بانتظام على سطح الموصل.'),L('False → it concentrates at sharp points (uniform only on a sphere).','خطأ ← تتركز عند الرؤوس المدببة (منتظمة على الكرة فقط).')],
  [L('Q2-10. The Earth can be charged with a positive charge.','س2-10. يمكن شحن الأرض بشحنة موجبة.'),L('False → its potential stays zero; it is a huge reservoir of charge.','خطأ ← يبقى جهدها صفرًا لأنها مخزن هائل للشحنات.')],
  [L('Q2 (others): 1, 3, 8, 9, 11, 12','س2 (البقية): 1، 3، 8، 9، 11، 12'),L('All true.','جميعها صحيحة.')],
  [L('Q3. Can two field lines intersect? Why?','س3. هل يمكن أن يتقاطع خطا قوة؟ ولماذا؟'),L('No — the field would have two directions at the intersection point.','لا، لأن المجال سيكون له اتجاهان في نقطة التقاطع.')],
  [L('Q6. If the potential at a point is zero, must the field be zero?','س6. إذا كان الجهد في نقطة صفرًا، هل يجب أن يكون المجال صفرًا؟'),L('No. Midway between equal opposite charges V = 0 but E ≠ 0.','لا. في منتصف المسافة بين شحنتين متساويتين مختلفتين V = 0 لكن E ≠ 0.')],
  [L('Q7. Which is larger: the potential inside a charged metal ball or on its surface?','س7. أيهما أكبر: الجهد داخل كرة معدنية مشحونة أم على سطحها؟'),L('Equal — the field inside is zero, so no work is needed to move a charge from the surface inward.','متساويان، لأن المجال في الداخل صفر فلا يلزم شغل لنقل شحنة من السطح إلى الداخل.')],
  [L('Q10. Why do we see lightning before hearing thunder?','س10. لماذا نرى البرق قبل سماع الرعد؟'),L('Light is far faster than sound.','لأن سرعة الضوء أكبر بكثير من سرعة الصوت.')],
  [L('Q11. The field inside a charged hollow ball is zero. Is the potential inside zero too?','س11. المجال داخل كرة جوفاء مشحونة صفر. هل الجهد داخلها صفر أيضًا؟'),L('No — the potential inside is constant and equal to the surface potential.','لا، الجهد في الداخل ثابت ويساوي جهد السطح.')]
 ],
 probs:[
  {q:L('P1. Two equal 1 μC charges 10 cm apart. Force?','م1. شحنتان 1 μC بينهما 10 cm. القوة؟'),steps:[['Sub','9 × 10⁹ × 10⁻¹² / 0.01']],res:'F = 0.9 N'},
  {q:L('P2. +3 μC and +27 μC 1 m apart. Where is the net force on a third charge zero?','م2. +3 μC و +27 μC بينهما 1 m. أين تنعدم محصلة القوة على شحنة ثالثة؟'),steps:[['Law','3/x² = 27/(1 − x)² ⇒ (1 − x) = 3x']],res:'x = 25 cm from +3 μC'},
  {q:L('P3. V<sub>AB</sub> = 60 V. Work to move (a) a proton (b) an electron from A to B.','م3. فرق الجهد V<sub>AB</sub> = 60 V. الشغل لنقل (أ) بروتون (ب) إلكترون من A إلى B.'),steps:[['Size','1.6 × 10⁻¹⁹ × 60 = 9.6 × 10⁻¹⁸ J'],['Signs','proton −, electron + (book convention)']],res:'(a) −9.6 × 10⁻¹⁸ J ; (b) +9.6 × 10⁻¹⁸ J'},
  {q:L('P4. Points at 10 V and −2 V, 4 mm apart. Find E.','م4. نقطتان جهدهما 10 V و −2 V والمسافة 4 mm. أوجد E.'),steps:[['Law','E = ΔV/x = 12/0.004']],res:'E = 3000 N/C'},
  {q:L('P5. A at 0.5 m, B at 0.9 m from a ball of 1 × 10⁻³ μC. Work to move 2 μC from B to A.','م5. A على 0.5 m و B على 0.9 m من كرة شحنتها 1 × 10⁻³ μC. الشغل لنقل 2 μC من B إلى A.'),steps:[['V','V<sub>A</sub> = 18 V, V<sub>B</sub> = 10 V'],['W','2 × 10⁻⁶ × 8']],res:'W = 16 × 10⁻⁶ J'},
  {q:L('P6. 6 μC and 5 μC are 1.2 m apart in vacuum. Work to bring the 5 μC to 0.9 m.','م6. 6 μC و 5 μC بينهما 1.2 m في الفراغ. الشغل لتقريب 5 μC إلى 0.9 m.'),steps:[['V₁','9 × 10⁹ × 6 × 10⁻⁶ / 1.2 = 45 000 V'],['V₂','… / 0.9 = 60 000 V'],['W','5 × 10⁻⁶ × 15 000']],res:'W = +0.075 J'}
 ]},
 summary:[
  L('Charge: like repel, unlike attract; conserved; quantized Q = ne, e = 1.6 × 10⁻¹⁹ C.','الشحنة: المتشابهة تتنافر والمختلفة تتجاذب؛ محفوظة؛ مكمّاة Q = ne.'),
  L('Coulomb: F = kq₁q₂/r², k = 9 × 10⁹ = 1/4πε₀.','كولوم: F = kq₁q₂/r²، k = 9 × 10⁹.'),
  L('Conductors, insulators, semiconductors; charges on the outer surface; σ = q/A, largest at sharp points.','موصلات وعوازل وأشباه موصلات؛ الشحنات على السطح الخارجي؛ σ = q/A وأكبرها عند الرؤوس المدببة.'),
  L('E = F/q′ = kq/r²; zero inside a conductor; homogeneous between plates.','E = F/q′ = kq/r²؛ صفر داخل الموصل؛ منتظم بين الصفيحتين.'),
  L('Φ = E⊥A; V = kq/r; W = qV; E = ΔV/x.','Φ = E⊥A؛ V = kq/r؛ W = qV؛ E = ΔV/x.'),
  L('Equipotential surfaces ⊥ field lines; Earth V = 0; lightning, arrester, filters, photocopier.','سطوح تساوي الجهد عمودية على خطوط المجال؛ جهد الأرض صفر؛ البرق ومانعة الصواعق والمرشحات وآلة الاستنساخ.')
 ],
 extra:{t:'Constants',items:[['k','9 × 10⁹ N·m²/C²'],['ε₀','8.85 × 10⁻¹² C²/N·m²'],['e','1.6 × 10⁻¹⁹ C'],['μC · pC','10⁻⁶ · 10⁻¹² C']]}
};
(window.XL=window.XL||[]).push({ch:9,t:'Coulomb’s law and the null point',d:L('Set two charges and the distance. See the force between them, and where a third charge would feel zero net force.','حدد شحنتين والمسافة بينهما، وشاهد القوة بينهما والموضع الذي تنعدم فيه محصلة القوة على شحنة ثالثة.'),
 html:`<div class="calc"><label>q₁ (μC)<input id="cq1" type="number" value="27" step="any"></label><label>q₂ (μC)<input id="cq2" type="number" value="3" step="any"></label><label>Distance r (m)<input id="cr" type="number" value="1" step="any"></label></div>
 <svg id="cSvg" viewBox="0 0 520 90" style="width:100%;margin-top:10px;background:var(--paper);border-radius:8px"></svg><div id="cOut2"></div>`,
 init(){const d=()=>{const q1=+$('#cq1').value,q2=+$('#cq2').value,r=+$('#cr').value;const F=9e9*Math.abs(q1*q2)*1e-12/(r*r);const like=q1*q2>0;
  let x=null,where='';if(q1&&q2){const k=Math.sqrt(Math.abs(q2/q1));if(like){x=r/(1+k);where=`between them, ${(+x.toFixed(3))} m from q₁`}else if(Math.abs(q1)!==Math.abs(q2)){const xx=r/(1-k);x=xx; where=xx>0?`outside, beyond q₂, ${(+xx.toFixed(3))} m from q₁`:`outside, beyond q₁, ${(+Math.abs(xx).toFixed(3))} m from q₁`}else where='none (equal and opposite charges)'}
  const X=v=>60+v/r*400;const col=q=>q>0?'var(--bad)':'var(--c9)';
  $('#cSvg').innerHTML=`<g font-family="IBM Plex Mono, monospace" font-size="11"><line x1="10" y1="45" x2="510" y2="45" stroke="var(--muted)"/><circle cx="60" cy="45" r="14" fill="${col(q1)}"/><circle cx="460" cy="45" r="14" fill="${col(q2)}"/><text x="60" y="80" text-anchor="middle" fill="var(--muted)">q₁</text><text x="460" y="80" text-anchor="middle" fill="var(--muted)">q₂</text>${x!==null&&X(x)>0&&X(x)<520?`<circle cx="${X(x)}" cy="45" r="6" fill="var(--good)"/><text x="${X(x)}" y="25" text-anchor="middle" fill="var(--good)">F = 0</text>`:''}</g>`;
  $('#cOut2').innerHTML=steps([['F',`k|q₁q₂|/r² = ${sci(F)} N`],['Type',like?'repulsion':'attraction']])+`<div class="res">✓ Null point: ${where}</div>`};['cq1','cq2','cr'].forEach(i=>$('#'+i).oninput=d);d();}});

/* ---------- Chapter 8: Thin Lenses ---------- */
const LENSES_SVG=`<svg viewBox="0 0 520 150" role="img" aria-label="Converging and diverging lenses"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<path d="M70 20 Q95 75 70 130 Q45 75 70 20" fill="var(--c8)" opacity=".35" stroke="var(--c8)"/><path d="M140 20 Q160 75 140 130 L130 130 L130 20 Z" fill="var(--c8)" opacity=".35" stroke="var(--c8)"/><path d="M205 20 Q228 75 205 130 Q215 75 205 20" fill="var(--c8)" opacity=".35" stroke="var(--c8)"/>
<text x="140" y="146" text-anchor="middle" fill="var(--ink)">converging: thicker at the centre</text>
<path d="M300 20 L320 20 Q308 75 320 130 L300 130 Q312 75 300 20" fill="var(--c8)" opacity=".35" stroke="var(--c8)"/><path d="M370 20 L385 20 Q373 75 385 130 L370 130 Z" fill="var(--c8)" opacity=".35" stroke="var(--c8)"/><path d="M440 20 Q452 75 440 130 L460 130 Q448 75 460 20 Z" fill="var(--c8)" opacity=".35" stroke="var(--c8)"/>
<text x="380" y="146" text-anchor="middle" fill="var(--ink)">diverging: thinner at the centre</text></g></svg>`;
const CHROM_SVG=`<svg viewBox="0 0 520 150" role="img" aria-label="Chromatic aberration"><g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">
<line x1="10" y1="75" x2="510" y2="75" stroke="var(--muted)"/><path d="M150 15 Q172 75 150 135 Q128 75 150 15" fill="var(--c8)" opacity=".3" stroke="var(--c8)"/>
<path d="M20 30 H150 L330 75" stroke="#7b2ff7" stroke-width="2" fill="none"/><path d="M20 34 H150 L390 75" stroke="#e2322b" stroke-width="2" fill="none"/>
<path d="M20 120 H150 L330 75" stroke="#7b2ff7" stroke-width="2" fill="none"/><path d="M20 116 H150 L390 75" stroke="#e2322b" stroke-width="2" fill="none"/>
<text x="330" y="100" text-anchor="middle" fill="#7b2ff7">violet focus (closer)</text><text x="400" y="60" text-anchor="middle" fill="#e2322b">red focus (farther)</text></g></svg>`;
CHD[8]={
 obj:[L('Distinguish converging and diverging lenses and their types.','التمييز بين العدسات اللامة والمفرقة وأنواعها.'),
      L('Define the optical centre, principal axis, focus, focal length and secondary axis.','تعريف المركز البصري والمحور الأساس والبؤرة والبعد البؤري والمحور الثانوي.'),
      L('Draw ray diagrams and state image characteristics for each object position.','رسم مخططات الأشعة وذكر صفات الصورة لكل موضع للجسم.'),
      L('Apply the lens law, magnification, lens combinations and lens power.','تطبيق قانون العدسات والتكبير وتركيب العدسات وقدرة العدسة.'),
      L('Explain spherical and chromatic aberration and lens applications (eye, camera, microscope, telescope).','تفسير الزيغ الكروي واللوني وتطبيقات العدسات (العين، الكاميرا، المجهر، المقراب).')],
 lessons:[
  {sn:'8.1',t:'Thin Lenses',p:'115',blocks:[
   {p:L('A lens is a transparent material with two spherical surfaces, or one spherical and one plane surface. It is made of glass for visible light, quartz for ultraviolet and germanium for far infrared. A thin lens has a thickness small compared to its focal length.','العدسة مادة شفافة لها سطحان كرويان، أو سطح كروي وآخر مستوٍ. تُصنع من الزجاج للضوء المرئي، ومن الكوارتز للأشعة فوق البنفسجية، ومن الجرمانيوم للأشعة تحت الحمراء البعيدة. والعدسة الرقيقة سمكها صغير مقارنة ببعدها البؤري.')},
   {fig:LENSES_SVG,cap:'Figures (8.1) and (8.2)'},
   {table:{h:['Type','Shape','Kinds'],r:[['Converging (convex)','centre thicker than edge','biconvex · convex–concave · plano–convex'],['Diverging (concave)','centre thinner than edge','double-concave · convex–concave · plano–concave']],cap:'Book p. 115'}},
   {box:'rem',label:'Remember',list:[L('A converging lens is like two prisms base to base; a diverging lens is like two prisms vertex to vertex.','العدسة اللامة كموشورين متلاصقين من قاعدتيهما، والمفرقة كموشورين متلاصقين من رأسيهما.')]}
  ]},
  {sn:'8.2',t:'Basic Concepts in Lenses',p:'116–118',blocks:[
   {table:{h:['Term','Meaning'],r:[['Optical centre','a ray through it passes without deviation (the faces there are almost parallel)'],['Principal axis','line through the optical centre and the two foci'],['Focus','point on the principal axis; rays from it (or toward it) leave parallel to the axis'],['Focal length f','distance between the focus and the optical centre'],['Secondary axis','any other straight line through the optical centre']],cap:'Book p. 116–117'}},
   {box:'rem',label:'Rays for drawing images',list:[
     L('Ray 1: parallel to the principal axis ⇒ refracts through the focus F′ on the other side.','الشعاع 1: موازٍ للمحور ⇒ ينكسر مارًا بالبؤرة F′ في الجهة الأخرى.'),
     L('Ray 2: through the optical centre ⇒ continues without deviation.','الشعاع 2: مار بالمركز البصري ⇒ ينفذ دون انحراف.'),
     L('Ray 3: through the focus F ⇒ leaves parallel to the principal axis.','الشعاع 3: مار بالبؤرة F ⇒ يخرج موازيًا للمحور.')]},
   {p:L('Object at 2f from a converging lens ⇒ image real, inverted, same size, at 2f on the other side. Object beyond 2f ⇒ real, inverted, diminished, between F′ and 2F′.','جسم على بعد 2f من عدسة لامة ⇒ صورة حقيقية مقلوبة مساوية على بعد 2f في الجهة الأخرى. جسم أبعد من 2f ⇒ حقيقية مقلوبة مصغرة بين F′ و 2F′.')}
  ]},
  {sn:'8.3',t:'Images by a Converging Lens',p:'118–119',blocks:[
   {table:{h:['Object position','Image','Characteristics'],r:[['at infinity','at F′','real, inverted, a point'],['beyond 2f','between F′ and 2F′','real, inverted, diminished'],['at 2f','at 2F′','real, inverted, same size'],['between F and 2f','beyond 2F′','real, inverted, magnified'],['at F','at infinity','no image'],['between F and the lens','same side as object','virtual, erect, magnified']],cap:'Book p. 118–119'}}
  ]},
  {sn:'8.4',t:'Images by a Diverging Lens',p:'119',blocks:[
   {box:'def',label:'Diverging lens',list:[L('Wherever the object is, the image is <b>virtual, erect, diminished</b>, on the same side as the object, in front of the lens.','أينما كان الجسم تكون الصورة <b>وهمية، معتدلة، مصغرة</b>، في جهة الجسم نفسها أمام العدسة.')]},
   {box:'act',label:'Activity — quick focal length',list:[L('Point the lens at the Sun (or a far tree through the window) and move it until a sharp image forms on paper. The lens–paper distance ≈ f.','وجّه العدسة نحو الشمس (أو شجرة بعيدة من الشباك) وحرّكها حتى تتكون صورة واضحة على الورقة. المسافة بين العدسة والورقة ≈ f.')]}
  ]},
  {sn:'8.5',t:'Lens Law and Magnification',p:'120–125',blocks:[
   {eq:`${fr('1','f')} = ${fr('1','u')} + ${fr('1','v')}      M = ${fr('h′','h')} = −${fr('v','u')}`},
   {box:'rem',label:'Signs (light moving left → right)',list:[
     L('u positive for a real object on the left.','u موجبة للجسم الحقيقي على اليسار.'),
     L('v positive for a real image on the right; negative for a virtual image on the left.','v موجبة للصورة الحقيقية على اليمين، وسالبة للوهمية على اليسار.'),
     L('f positive for a converging lens; negative for a diverging lens.','f موجبة للعدسة اللامة، وسالبة للمفرقة.'),
     L('M positive: virtual, erect. M negative: real, inverted.','M موجب: وهمية معتدلة. M سالب: حقيقية مقلوبة.')]},
   {eq:`${fr('A′','A')} = ${fr('v²','u²')}`},
   {h:'Combination of thin lenses'},
   {p:L('Find the image of the first lens; it becomes the object of the second. Total magnification M = M₁ × M₂.','أوجد صورة العدسة الأولى، فتصبح جسمًا للعدسة الثانية. والتكبير الكلي M = M₁ × M₂.')},
   {eq:`${fr('1','f')} = ${fr('1','f₁')} + ${fr('1','f₂')} − ${fr('d','f₁f₂')}   (in contact, d = 0: ${fr('1','f')} = ${fr('1','f₁')} + ${fr('1','f₂')})`}
  ]},
  {sn:'8.6',t:'Lens Power',p:'126',blocks:[
   {eq:`P = ${fr('1','f (m)')}   (diopter, D)`},
   {p:L('A converging lens of f = 20 cm: P = 1/0.2 = +5 D. A diverging lens of f = 25 cm: P = 1/(−0.25) = −4 D.','عدسة لامة f = 20 cm: P = 1/0.2 = +5 D. وعدسة مفرقة f = 25 cm: P = 1/(−0.25) = −4 D.')},
   {eq:`P = (n − 1)(${fr('1','R₁')} − ${fr('1','R₂')})   (lens-maker’s equation)`}
  ]},
  {sn:'8.7',t:'Spherical Aberration',p:'127–128',blocks:[
   {box:'def',label:'Spherical aberration',list:[L('Parallel rays far from the axis converge closer to the lens than rays near the axis, so they do not meet at one focus. Reduced by a barrier (stop) at the lens edge, or by using a plano-convex lens (telescope objectives, eyeglasses).','الأشعة الموازية البعيدة عن المحور تتجمع أقرب إلى العدسة من الأشعة القريبة منه، فلا تلتقي في بؤرة واحدة. ويقل بوضع حاجز عند حافة العدسة، أو باستعمال عدسة مستوية–محدبة (العدسات الشيئية للمقاريب والنظارات).')]}
  ]},
  {sn:'8.8',t:'Chromatic Aberration',p:'128–129',blocks:[
   {fig:CHROM_SVG,cap:'Figure (8.15) — violet focuses nearer the lens than red'},
   {box:'def',label:'Chromatic aberration',list:[L('The refractive index of glass differs for each wavelength, so the colours of white light focus at different points on the axis (violet nearest, red farthest).','يختلف معامل انكسار الزجاج باختلاف الطول الموجي، فتتجمع ألوان الضوء الأبيض في نقاط مختلفة على المحور (البنفسجي أقربها والأحمر أبعدها).')]},
   {p:L('<b>Treatment:</b> an achromatic lens — a converging crown-glass lens (f₁, large positive power) cemented to a diverging flint-glass lens (f₂, small negative power); their dispersions cancel. 1/f = 1/f₁ + 1/f₂.','<b>المعالجة:</b> عدسة لا لونية — عدسة لامة من زجاج التاج (f₁ قدرة موجبة كبيرة) ملصقة بعدسة مفرقة من زجاج الصوان (f₂ قدرة سالبة صغيرة)، فيلغي تفريق إحداهما تفريق الأخرى. 1/f = 1/f₁ + 1/f₂.')}
  ]},
  {sn:'8.9',t:'Applications of Lenses',p:'129–133',blocks:[
   {table:{h:['Use','Lens / idea'],r:[['Myopia (short sight)','images in front of the retina ⇒ diverging lens'],['Hyperopia (long sight)','images behind the retina ⇒ converging lens'],['Astigmatism','irregular curvature of cornea/lens ⇒ cylindrical lens'],['Camera','converging lens, object beyond 2f ⇒ real, inverted, diminished on the film'],['Simple magnifier','converging lens of short f, object inside f ⇒ virtual, erect, magnified'],['Compound microscope','short-f objective (object just beyond f) + longer-f eyepiece'],['Projectors (data show, cinema)','object between F and 2F ⇒ real, inverted, magnified'],['Refracting (astronomical) telescope','wide long-f objective + short-f eyepiece'],['Reflecting telescope','concave mirror instead of the objective lens']],cap:'Book p. 129–133'}}
  ]}
 ],
 laws:[
  {t:'Lens law',eq:`${fr('1','f')} = ${fr('1','u')} + ${fr('1','v')}`,d:[['f','+ converging, − diverging'],['u','+ real object'],['v','+ real (right), − virtual (left)']],use:L('Same equation as mirrors; only the side of the real image differs.','المعادلة نفسها للمرايا؛ يختلف فقط جانب الصورة الحقيقية.'),err:L('Forgetting f is negative for a diverging lens.','نسيان أن f سالبة للعدسة المفرقة.')},
  {t:'Magnification',eq:`M = ${fr('h′','h')} = −${fr('v','u')}  ;  ${fr('A′','A')} = ${fr('v²','u²')}`,d:[['M','− real inverted · + virtual erect']],use:L('Areas scale with M².','المساحات تتناسب مع M².')},
  {t:'Two lenses',eq:`M = M₁ × M₂ ;  ${fr('1','f')} = ${fr('1','f₁')} + ${fr('1','f₂')} − ${fr('d','f₁f₂')}`,d:[['d','distance between optical centres']],use:L('Image of lens 1 = object of lens 2 (u₂ = d − v₁).','صورة العدسة الأولى = جسم الثانية (u₂ = d − v₁).')},
  {t:'Lens power',eq:`P = ${fr('1','f')}  (f in metres)`,d:[['P','diopter D (+ converging, − diverging)']],use:L('Convert cm to m first.','حوّل cm إلى m أولًا.'),err:L('Using f in cm gives a power 100 times too small.','استعمال f بالسنتيمتر يعطي قدرة أصغر بمئة مرة.')},
  {t:'Lens maker',eq:`P = (n − 1)(${fr('1','R₁')} − ${fr('1','R₂')})`,d:[['n','index of the lens material'],['R₁, R₂','radii of curvature']],use:L('Depends on the material and curvature, not on the diameter.','تعتمد على المادة والتكور لا على القطر.')}
 ],
 examples:[
  {t:L('Book: converging lens f = 10 cm; objects at 30 cm, 10 cm and 5 cm. Find each image.','الكتاب: عدسة لامة f = 10 cm والأجسام على 30 و 10 و 5 cm. أوجد كل صورة.'),p:'122–123',steps:[['u = 30','1/v = 1/10 − 1/30 ⇒ v = +15 cm, M = −0.5 (real, inverted, diminished)'],['u = 10','object at F ⇒ image at infinity'],['u = 5','1/v = 1/10 − 1/5 ⇒ v = −10 cm, M = +2 (virtual, erect, magnified)']],res:'15 cm · ∞ · −10 cm'},
  {t:L('Book: object 12 cm in front of a diverging lens of f = 6 cm.','الكتاب: جسم على بعد 12 cm أمام عدسة مفرقة f = 6 cm.'),p:'124',steps:[['f','−6 cm'],['v','1/v = −1/6 − 1/12 ⇒ v = −4 cm'],['M','+4/12 = +1/3']],res:'virtual, erect, ⅓ of the object'},
  {t:L('Book: two converging lenses f₁ = 10 cm, f₂ = 5 cm, 40 cm apart; object 15 cm left of the first.','الكتاب: عدستان لامتان f₁ = 10 cm و f₂ = 5 cm بينهما 40 cm، والجسم 15 cm يسار الأولى.'),p:'127',steps:[['Lens 1','1/v₁ = 1/10 − 1/15 ⇒ v₁ = 30 cm, M₁ = −2'],['Lens 2','u₂ = 40 − 30 = 10 cm ⇒ v₂ = 10 cm, M₂ = −1'],['Total','M = (−2)(−1)']],res:'final image 10 cm right of lens 2, M = +2 (erect)'},
  {t:L('Book: power of a converging lens f = 20 cm and a diverging lens f = 25 cm.','الكتاب: قدرة عدسة لامة f = 20 cm وعدسة مفرقة f = 25 cm.'),p:'126',steps:[['1','P = 1/0.2'],['2','P = 1/(−0.25)']],res:'+5 D ; −4 D'}
 ],
 quiz:[
  {ty:'mcq',k:'MCQ',q:L('A converging lens is:','العدسة اللامة:'),o:['thinner at the centre','thicker at the centre','flat on both faces','always plano-concave'],a:1,x:L('Its centre is thicker than its edge.','وسطها أسمك من حافتها.')},
  {ty:'mcq',k:'MCQ',q:L('A ray through the optical centre of a thin lens:','الشعاع المار بالمركز البصري لعدسة رقيقة:'),o:['passes without deviation','reflects','passes through F','becomes parallel'],a:0,x:L('The faces there are almost parallel.','الوجهان هناك متوازيان تقريبًا.')},
  {ty:'mcq',k:'MCQ',q:L('A ray parallel to the principal axis of a converging lens refracts:','الشعاع الموازي للمحور في العدسة اللامة ينكسر:'),o:['through F′','through the optical centre','parallel','back'],a:0,x:L('Ray 1.','الشعاع 1.')},
  {ty:'mcq',k:'MCQ',q:L('For a real, inverted, magnified image with a converging lens, the object is:','لصورة حقيقية مقلوبة مكبرة بعدسة لامة يوضع الجسم:'),o:['beyond 2f','between F and 2f','inside f','at 2f'],a:1,x:L('Book Q1-2.','سؤال الكتاب 1-2.')},
  {ty:'mcq',k:'MCQ',q:L('A diverging lens always gives an image that is:','العدسة المفرقة تعطي دائمًا صورة:'),o:['real, inverted','virtual, erect, diminished','virtual, magnified','real, magnified'],a:1,x:L('Book p. 119.','الكتاب صفحة 119.')},
  {ty:'mcq',k:'MCQ',q:L('The unit of lens power is:','وحدة قدرة العدسة:'),o:['watt','metre','diopter','joule'],a:2,x:L('D = 1/m.','D = 1/m.')},
  {ty:'mcq',k:'MCQ',q:L('A lens of power −2.5 D has f =','عدسة قدرتها −2.5 D بعدها البؤري:'),o:['+40 cm','−40 cm','−25 cm','+2.5 m'],a:1,x:L('f = 1/P = −0.4 m.','f = 1/P = −0.4 m.')},
  {ty:'mcq',k:'MCQ',q:L('Short sight (myopia) is corrected with:','قصر النظر يُعالج بـ:'),o:['converging lens','diverging lens','cylindrical lens','prism'],a:1,x:L('Images form in front of the retina.','الصور تتكون أمام الشبكية.')},
  {ty:'mcq',k:'MCQ',q:L('Astigmatism is corrected with:','اللابؤرية تُعالج بـ:'),o:['converging lens','diverging lens','cylindrical lens','plane mirror'],a:2,x:L('Book p. 130.','الكتاب صفحة 130.')},
  {ty:'mcq',k:'MCQ',q:L('In chromatic aberration the colour that focuses nearest the lens is:','في الزيغ اللوني اللون الذي يتجمع أقرب إلى العدسة:'),o:['red','yellow','green','violet'],a:3,x:L('Shortest wavelength, largest deviation.','أقصر طول موجي وأكبر انحراف.')},
  {ty:'mcq',k:'MCQ',q:L('Two thin lenses in contact, f₁ = 10 cm and f₂ = −20 cm, act as a lens of f =','عدستان رقيقتان متلاصقتان f₁ = 10 و f₂ = −20 cm تكافئان عدسة بعدها البؤري:'),o:['+20 cm','−20 cm','+6.7 cm','30 cm'],a:0,x:L('1/f = 1/10 − 1/20 = 1/20.','1/f = 1/10 − 1/20 = 1/20.')},
  {ty:'mcq',k:'MCQ',q:L('A camera forms an image that is:','الكاميرا تكوّن صورة:'),o:['virtual, erect','real, inverted, diminished','real, erect','virtual, magnified'],a:1,x:L('Object beyond 2f.','الجسم أبعد من 2f.')},
  {ty:'mcq',k:'MCQ',q:L('M = −3 for a converging lens means the image is:','M = −3 لعدسة لامة يعني أن الصورة:'),o:['virtual, erect, ×3','real, inverted, ×3','real, inverted, ⅓','virtual, inverted'],a:1,x:L('Negative ⇒ real, inverted.','سالب ⇒ حقيقية مقلوبة.')},
  {ty:'tf',k:'True/False',q:L('The focal length of a lens depends on its diameter.','يعتمد البعد البؤري للعدسة على قطرها.'),a:false,x:L('False → on n and the radii of curvature, not the diameter.','خطأ ← على n وأنصاف أقطار التكور لا على القطر.')},
  {ty:'tf',k:'True/False',q:L('A diverging lens has a positive focal length.','للعدسة المفرقة بعد بؤري موجب.'),a:false,x:L('False → negative.','خطأ ← سالب.')},
  {ty:'tf',k:'True/False',q:L('A simple magnifier is a converging lens with the object inside its focal length.','المكبرة البسيطة عدسة لامة والجسم داخل بعدها البؤري.'),a:true,x:L('True.','صح.')},
  {ty:'tf',k:'True/False',q:L('An object at infinity forms a real image at the focus of a converging lens.','الجسم في اللانهاية تتكون صورته حقيقية في بؤرة العدسة اللامة.'),a:true,x:L('True.','صح.')},
  {ty:'tf',k:'True/False',q:L('Hyperopia is corrected with a diverging lens.','بعد النظر يُعالج بعدسة مفرقة.'),a:false,x:L('False → converging lens.','خطأ ← عدسة لامة.')},
  {ty:'open',k:'Define',q:L('Define: Optical centre.','عرّف: المركز البصري.'),x:L('The point at the centre of the lens through which a ray passes without deviation.','النقطة في مركز العدسة التي إذا مر بها شعاع نفذ دون انحراف.')},
  {ty:'open',k:'Define',q:L('Define: Lens power.','عرّف: قدرة العدسة.'),x:L('The reciprocal of the focal length in metres; unit diopter.','مقلوب البعد البؤري بالمتر، ووحدتها الدايوبتر.')},
  {ty:'open',k:'Define',q:L('Define: Chromatic aberration. How is it treated?','عرّف: الزيغ اللوني. وكيف يُعالج؟'),x:L('Different colours focus at different points because n depends on wavelength. Treated by an achromatic lens (crown converging + flint diverging cemented).','تتجمع الألوان في نقاط مختلفة لأن n يعتمد على الطول الموجي. ويُعالج بعدسة لا لونية (لامة من زجاج التاج ملصقة بمفرقة من زجاج الصوان).')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: the focal length differs with the colour of light.','علّل: يختلف البعد البؤري للعدسة باختلاف لون الضوء.'),x:L('The refractive index of the lens material differs for each wavelength.','لأن معامل انكسار مادة العدسة يختلف باختلاف الطول الموجي.')},
  {ty:'open',k:'Give reasons',q:L('Give reasons: a converging lens’s focal length changes when moved from air into water.','علّل: يتغير البعد البؤري للعدسة اللامة عند نقلها من الهواء إلى الماء.'),x:L('f depends on the index of the lens relative to the surrounding medium; in water the relative index is smaller, so f increases.','لأن f يعتمد على معامل انكسار العدسة نسبةً إلى الوسط المحيط، وفي الماء يقل المعامل النسبي فيزداد f.')},
  {ty:'open',k:'Problem · easy',q:L('Power of a lens of f = 50 cm (converging).','قدرة عدسة لامة f = 50 cm.'),x:L('P = 1/0.5 = <b>+2 D</b>','P = 1/0.5 = <b>+2 D</b>')},
  {ty:'open',k:'Problem · medium',q:L('A magnifier of f = 15 cm gives an erect image 3 times magnified. Where is the object?','مكبرة f = 15 cm تعطي صورة معتدلة مكبرة 3 مرات. أين الجسم؟'),x:L('v = −3u; 1/15 = 1/u − 1/3u = 2/3u ⇒ <b>u = 10 cm</b>','v = −3u؛ 1/15 = 1/u − 1/3u = 2/3u ⇒ <b>u = 10 cm</b>')},
  {ty:'open',k:'Problem · hard',q:L('A slide 5 cm high gives an image 1.5 m high on a screen 6 m away. Find f of the projector lens.','شريحة ارتفاعها 5 cm تعطي صورة ارتفاعها 1.5 m على حاجز يبعد 6 m. أوجد البعد البؤري لعدسة العارض.'),x:L('M = 150/5 = 30 ⇒ u = 600/30 = 20 cm; 1/f = 1/20 + 1/600 ⇒ <b>f ≈ 19.4 cm</b>','M = 150/5 = 30 ⇒ u = 600/30 = 20 cm؛ 1/f = 1/20 + 1/600 ⇒ <b>f ≈ 19.4 cm</b>')}
 ],
 exam:[
  {m:10,q:L('An object 12 cm in front of a diverging lens of f = 6 cm. Image characteristics?','جسم على بعد 12 cm أمام عدسة مفرقة f = 6 cm. صفات الصورة؟'),steps:[['v','1/v = −1/6 − 1/12 ⇒ v = −4 cm'],['M','+1/3']],res:'virtual, erect, diminished ⅓',tip:L('This came in the 2022–2023 end-of-year paper (Paper I).','جاء في امتحان نهاية السنة 2022–2023 (الورقة I).')},
  {m:10,q:L('A diverging lens of f = 12 cm gives an image ⅓ the object. Find u and v.','عدسة مفرقة f = 12 cm تعطي صورة ثلث الجسم. أوجد u و v.'),steps:[['M','+1/3 ⇒ v = −u/3'],['Law','−1/12 = 1/u − 3/u = −2/u']],res:'u = 24 cm ; v = −8 cm'},
  {m:10,q:L('A 10 cm pencil is 70 cm left of a lens of f = +50 cm. Find the image.','قلم طوله 10 cm على بعد 70 cm يسار عدسة f = +50 cm. أوجد صورته.'),steps:[['v','1/v = 1/50 − 1/70 ⇒ v = 175 cm'],['M','−175/70 = −2.5'],['h′','−2.5 × 10']],res:'h′ = −25 cm: real, inverted, magnified'},
  {m:10,q:L('Object 80 cm left of a diverging lens forms a virtual image 16 cm on the left. Find the lens power.','جسم على بعد 80 cm يسار عدسة مفرقة تكوّن له صورة وهمية على بعد 16 cm يسارها. أوجد قدرة العدسة.'),steps:[['Law','1/f = 1/80 − 1/16 = −4/80'],['f','−20 cm = −0.2 m']],res:'P = −5 D'},
  {m:8,q:L('What is the reason for spherical aberration and how is it treated?','ما سبب الزيغ الكروي وكيف يُعالج؟'),steps:[['Cause','edge rays focus closer than central rays'],['Treatment','a stop at the lens edge, or a plano-convex lens']],res:'cause + treatment'},
  {m:8,q:L('Mention vision defects and how each is corrected.','اذكر عيوب الإبصار وطريقة معالجة كل منها.'),steps:[['Myopia','diverging lens'],['Hyperopia','converging lens'],['Astigmatism','cylindrical lens']],res:'3 defects'}
 ],
 book:{p:'134–136',mcq:[
  {q:'The focal length of a thin lens does NOT depend on:',ar:'البعد البؤري للعدسة الرقيقة لا يعتمد على:',o:['index of the lens material','index of the surrounding medium','its two radii of curvature','the diameter of the lens'],a:3},
  {q:'For a real, inverted, magnified image with a converging lens, the object is:',ar:'لصورة حقيقية مقلوبة مكبرة بعدسة لامة يوضع الجسم على بعد:',o:['greater than 2f','between f and 2f','less than f','equal to 2f'],a:1},
  {q:'For an erect, virtual, magnified image with a converging lens, the object is:',ar:'لصورة معتدلة وهمية مكبرة بعدسة لامة يوضع الجسم على بعد:',o:['equal to f','equal to 2f','less than f','greater than 2f'],a:2},
  {q:'To get an erect, virtual, magnified image we use:',ar:'للحصول على صورة معتدلة وهمية مكبرة نستعمل:',o:['double-concave diverging lens','plano-concave diverging lens','converging lens with the object inside f','converging lens with the object beyond f'],a:2},
  {q:'A diverging lens gives a virtual diminished image when the object is:',ar:'تعطي العدسة المفرقة صورة وهمية مصغرة عندما يكون الجسم:',o:['inside f','at any distance','beyond f','at 2f'],a:1},
  {q:'An object at infinity from a converging lens forms an image that is:',ar:'جسم في اللانهاية أمام عدسة لامة تكون صورته:',o:['real','virtual','erect','larger than the object'],a:0},
  {q:'For a converging lens of f = 15 cm, the image distance depends on:',ar:'لعدسة لامة f = 15 cm يعتمد بعد الصورة على:',o:['the object distance','the object height','whether the object is erect','all of the above'],a:0},
  {q:'Diverging lens f = 10 cm, object at 40 cm. The image is at:',ar:'عدسة مفرقة f = 10 cm والجسم على 40 cm. الصورة على بعد:',o:['+16 cm','−10 cm','+20 cm','−8 cm'],a:3},
  {q:'Object 40 cm from a converging lens of f = 20 cm. The image is at:',ar:'جسم على 40 cm من عدسة لامة f = 20 cm. الصورة على بعد:',o:['30 cm','20 cm','15 cm','40 cm'],a:3},
  {q:'If M = −3 for a converging lens, the image is:',ar:'إذا كان M = −3 لعدسة لامة فالصورة:',o:['virtual, erect, ×3','virtual, inverted, ×3','real, inverted, ×3','real, inverted, ⅓'],a:2},
  {q:'Object 80 cm left of a diverging lens; virtual erect image 16 cm on the left. The power is:',ar:'جسم 80 cm يسار عدسة مفرقة وصورته الوهمية 16 cm يسارها. القدرة:',o:['−5 D','−4 D','−2 D','−1.25 D'],a:0}
 ],
 openTitle:'Answer the following',
 open:[
  [L('Q1-a. Why does the focal length differ with the colour of light?','س1-أ. لماذا يختلف البعد البؤري باختلاف لون الضوء؟'),L('The refractive index of the lens differs for each wavelength.','لأن معامل انكسار العدسة يختلف باختلاف الطول الموجي.')],
  [L('Q1-b. Why does the focal length of a converging lens change from air to water?','س1-ب. لماذا يتغير البعد البؤري للعدسة اللامة من الهواء إلى الماء؟'),L('f depends on the lens index relative to the medium; in water it is smaller, so f increases.','لأن f يعتمد على معامل انكسار العدسة نسبةً إلى الوسط، وهو أصغر في الماء فيزداد f.')],
  [L('Q1-c. Why do rays through the optical centre leave in the same direction?','س1-ج. لماذا تنفذ الأشعة المارة بالمركز البصري بالاتجاه نفسه؟'),L('The two faces at the optical centre are almost parallel, and the lens is thin.','لأن الوجهين عند المركز البصري متوازيان تقريبًا والعدسة رقيقة.')],
  [L('Q2. Cause and treatment of chromatic aberration?','س2. سبب الزيغ اللوني ومعالجته؟'),L('n depends on wavelength ⇒ colours focus at different points. Treated by an achromatic lens (crown + flint).','n يعتمد على الطول الموجي ⇒ تتجمع الألوان في نقاط مختلفة. يُعالج بعدسة لا لونية (تاج + صوان).')],
  [L('Q3. Cause and treatment of spherical aberration?','س3. سبب الزيغ الكروي ومعالجته؟'),L('Edge rays focus closer than central rays. Treated with a stop at the edge or a plano-convex lens.','الأشعة الطرفية تتجمع أقرب من المركزية. يُعالج بحاجز عند الحافة أو بعدسة مستوية–محدبة.')]
 ],
 probs:[
  {q:L('P1. Diverging lens f = 12 cm; image ⅓ of the object. Find u and v.','م1. عدسة مفرقة f = 12 cm وصورة ثلث الجسم. أوجد u و v.'),steps:[['v','−u/3'],['Law','−1/12 = −2/u']],res:'u = 24 cm ; v = −8 cm'},
  {q:L('P2. Magnifier f = 15 cm; erect image ×3. Find u.','م2. مكبرة f = 15 cm وصورة معتدلة ×3. أوجد u.'),steps:[['v','−3u'],['Law','1/15 = 2/3u']],res:'u = 10 cm'},
  {q:L('P3. Slide 5 cm, image 1.5 m on a screen 6 m away. Find f.','م3. شريحة 5 cm وصورتها 1.5 m على حاجز يبعد 6 m. أوجد f.'),steps:[['M','30 ⇒ u = 20 cm, v = 600 cm'],['f','1/f = 1/20 + 1/600 = 31/600']],res:'f ≈ 19.4 cm'},
  {q:L('P4. Pencil 10 cm at 70 cm from a lens of f = +50 cm. Image?','م4. قلم 10 cm على بعد 70 cm من عدسة f = +50 cm. صفات الصورة؟'),steps:[['v','175 cm'],['M','−2.5']],res:'h′ = −25 cm: real, magnified, inverted'}
 ]},
 summary:[
  L('Converging (thick centre) and diverging (thin centre) lenses.','العدسة اللامة (وسطها أسمك) والمفرقة (وسطها أرق).'),
  L('Three rays: parallel → F′; through centre → straight; through F → parallel.','ثلاثة أشعة: الموازي ← F′؛ المار بالمركز ← مستقيم؛ المار بـ F ← موازٍ.'),
  L('Diverging lens: always virtual, erect, diminished.','العدسة المفرقة: دائمًا وهمية معتدلة مصغرة.'),
  L('1/f = 1/u + 1/v; M = −v/u; A′/A = v²/u²; M = M₁M₂.','1/f = 1/u + 1/v؛ M = −v/u؛ A′/A = v²/u²؛ M = M₁M₂.'),
  L('P = 1/f (m) in diopter; in contact 1/f = 1/f₁ + 1/f₂.','P = 1/f بالمتر بوحدة الدايوبتر؛ المتلاصقتان 1/f = 1/f₁ + 1/f₂.'),
  L('Spherical and chromatic aberration; eye defects; camera, magnifier, microscope, projector, telescope.','الزيغ الكروي واللوني؛ عيوب الإبصار؛ الكاميرا والمكبرة والمجهر والعارض والمقراب.')
 ],
 extra:{t:'Sign rules',items:[['f','+ converging · − diverging'],['v','+ real (right) · − virtual (left)'],['P','1/f, f in metres'],['A′/A','v²/u²']]}
};
(window.XL=window.XL||[]).push({ch:8,t:'Lens ray diagram',d:L('Choose a converging or diverging lens, its focal length and the object distance. Watch the image change.','اختر عدسة لامة أو مفرقة وبعدها البؤري وبعد الجسم، وراقب تغير الصورة.'),
 html:`<div class="calc"><label>Lens<select id="lK"><option value="1">Converging</option><option value="-1">Diverging</option></select></label><label>|f| (cm)<input id="lF" type="number" value="10"></label><label>Object distance u (cm)<input id="lU" type="range" min="2" max="50" value="30"></label></div><div id="lSvg" style="margin-top:10px"></div><div id="lOut"></div>`,
 init(){const d=()=>{const f=+$('#lK').value*Math.abs(+$('#lF').value),u=+$('#lU').value;const r=RAY('lens',f,u);$('#lSvg').innerHTML=r.svg;
  $('#lOut').innerHTML=steps([['u',u+' cm'],['Law',`1/v = 1/${f} − 1/${u}`],['v',isFinite(r.v)?(+r.v.toFixed(2))+' cm':'∞'],['P',`1/f = ${(+(100/f).toFixed(2))} D`]])+`<div class="res">✓ ${r.desc}</div>`};['lK','lF','lU'].forEach(i=>$('#'+i).oninput=d);d();}});

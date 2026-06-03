/* =========================================================================
   BEN · BILINGUAL (EN / TH)
   All Thai strings live here. Applied by structural selectors so the HTML
   stays untouched. English is captured from the DOM on first run.
   ========================================================================= */
(function () {
  "use strict";

  var T = {
    nav: ["เกี่ยวกับฉัน", "ประสบการณ์", "ทักษะ", "การศึกษา", "ติดต่อ"],

    dpHead: ["โปรไฟล์โดยย่อ", "ลำดับความสำคัญสูง"],
    dpRows: [
      '<span class="k">ชื่อ:</span> รุจิรัชช์ กาญจน์จรินทร์ (เบญ)',
      '<span class="k">สถานะ:</span> พร้อมให้คำปรึกษา',
      '<span class="k">ตำแหน่ง:</span> Product Strategist / BSA',
      '<span class="k">จุดเด่น:</span> เปลี่ยนไอเดียให้เป็นผลิตภัณฑ์จริง',
      '<span class="k">รับงาน:</span> ฟรีแลนซ์ &amp; ที่ปรึกษา — เปิดรับ'
    ],
    dpMore: "ข้อมูลโดยละเอียด",

    meta: ["ประสบการณ์ 6+ ปี", "ค้าปลีก · ฟินเทค", "ประกันชีวิต", "เฮลท์เทค", "CRM · องค์กร", "ภาครัฐ"],
    h1: 'รุจิรัชช์ กาญจน์จรินทร์ <em>(เบญ)</em>',
    lede: 'ฉันเปลี่ยนไอเดียให้กลายเป็น <strong>ผลิตภัณฑ์ที่ใช้งานได้จริง</strong> ด้วยกลยุทธ์ผลิตภัณฑ์ การเป็นเจ้าของผลิตภัณฑ์ และการวิเคราะห์ระบบ — ตั้งแต่ไอเดียแรกจนถึงการเปิดตัว',
    btnView: 'ดูประสบการณ์ <span class="arw">↗</span>',
    btnHire: "ติดต่อฉัน",

    ticker: [
      "6+ ปี เปลี่ยนไอเดียที่ซับซ้อนให้เป็นผลิตภัณฑ์จริง",
      "รองชนะเลิศอันดับ 1 · Lovable Hackathon Thailand",
      "สร้างผลิตภัณฑ์ใช้งานได้ในเวลาไม่ถึง 2 ชั่วโมง — สดบนเวที",
      "สร้างแพลตฟอร์มค้าปลีก CP Axtra · Makro จากศูนย์",
      "ตรรกะบริหารกองทุนที่ MUFG & State Street ไว้วางใจ",
      "10+ โปรเจกต์ลูกค้า · ตรงเวลา 100% · ไม่มีข้อผิดพลาดหลังเปิดใช้งาน",
      "เกียรตินิยมอันดับหนึ่ง · GPA 3.89 / 4.00",
      "ได้รับคัดเลือก NIA ACC Program 3 · AI Tech Talent",
      "กำลังศึกษาปริญญาโท AI MBA ที่ UTCC",
      "ตั้งแต่ไอเดียแรกจนถึงการเปิดตัว — เธอดูแลครบทุกขั้น",
      "สถานะ: พร้อมร่วมงาน"
    ],

    secHead: {
      dossier: { idx: "01 — เกี่ยวกับฉัน", h2: 'เกี่ยวกับ <em>เบญ</em>', shr: "พร้อมร่วมงาน · เปิดรับตอนนี้<br />สำหรับผู้ว่าจ้าง &amp; ลูกค้า" },
      ops: { idx: "02 — ประสบการณ์", h2: "<em>ประสบการณ์</em>", shr: "เปิดเผยข้อมูลทั้งหมด<br />แตะที่รายการเพื่อดูเพิ่มเติม" },
      skills: { idx: "03 — ทักษะ", h2: 'ทักษะ &amp; <em>เครื่องมือ</em>', shr: "เน้นกลยุทธ์ · ขับเคลื่อนด้วยงานวิจัย<br />ผลิตภัณฑ์ AI · การวิเคราะห์ · ภาษา" },
      edu: { idx: "04 — ประวัติการศึกษา", h2: "การศึกษา", shr: "ตรวจสอบแล้ว" }
    },
    subheads: ["ประสบการณ์ก่อนหน้า", "ประสบการณ์ฝึกงาน"],

    dossHead: {
      a: "กลยุทธ์ผลิตภัณฑ์ &amp; การวิเคราะห์ระบบ",
      b: "โปรไฟล์มืออาชีพ — สิ่งที่ฉันมอบให้ทีมของคุณ",
      no: "โปรไฟล์ № R-2727<br />สถานะ · พร้อมร่วมงาน"
    },
    dossCopy: "สำหรับผู้ว่าจ้าง &amp; ลูกค้า — นี่คือสิ่งที่ฉันช่วยคุณได้",
    spec: [
      '<span class="k">ตำแหน่ง</span><span class="v"><b>ที่ปรึกษาด้านผลิตภัณฑ์ ธุรกิจ &amp; AI</b></span>',
      '<span class="k">รู้จักในชื่อ</span><span class="v">"เบญ" — เปลี่ยนไอเดียให้เป็นผลิตภัณฑ์ ระบบ &amp; การเติบโต</span>',
      '<span class="k">ถนัด</span><span class="v">กลยุทธ์ผลิตภัณฑ์ · การวิเคราะห์ธุรกิจ · การนำ AI มาใช้</span>',
      '<span class="k">ประจำอยู่</span><span class="v">กรุงเทพฯ ประเทศไทย</span>',
      '<span class="k">ภาษา</span><span class="v">ไทย (เจ้าของภาษา) · อังกฤษ (คล่อง)</span>'
    ],
    inShortH: "โดยสรุป",
    inShort: [
      'ฉันเป็น <strong>ที่ปรึกษาด้านผลิตภัณฑ์ ธุรกิจ &amp; AI</strong> ที่ช่วยให้บริษัทเปลี่ยนไอเดียให้กลายเป็นผลิตภัณฑ์ที่ขยายผลได้ ระบบที่ใช้งานจริง และกลยุทธ์การเติบโต — ด้วยประสบการณ์กว่า 6 ปี ครอบคลุมค้าปลีก ฟินเทค ประกันภัย เฮลท์แคร์ HR-tech ซอฟต์แวร์องค์กร ภาครัฐ &amp; สตาร์ทอัพ',
      'ฉันทำงานร่วมกับผู้ก่อตั้ง ผู้บริหาร และทีมธุรกิจ <strong>แบบครบวงจร</strong> — ตั้งแต่การตรวจสอบไอเดียและกลยุทธ์ผลิตภัณฑ์ ไปจนถึงการวิเคราะห์ธุรกิจ การนำ AI มาใช้ และการลงมือทำ — จนถึงการเปิดตัวและการเติบโต',
      '<b>เปิดรับงาน:</b> ที่ปรึกษาด้านผลิตภัณฑ์ · ธุรกิจ · AI · กลยุทธ์ผลิตภัณฑ์ &amp; การพัฒนาธุรกิจ · Fractional Product Lead · งานที่ปรึกษาแบบโปรเจกต์'
    ],
    whyH: "ทำไมลูกค้าถึงเลือกฉัน",
    why: [
      'ประสบการณ์ครอบคลุม <b>มากกว่า 7 อุตสาหกรรม</b> — ฉันถ่ายทอดไอเดียที่พิสูจน์แล้วข้ามภาคส่วน',
      'ฉันเปลี่ยน <b>โจทย์ธุรกิจที่คลุมเครือให้เป็นแผนที่ทำได้จริงและมีโครงสร้าง</b>',
      'ฉันเชื่อม <b>ธุรกิจ ผลิตภัณฑ์ เทคโนโลยี &amp; ปฏิบัติการ</b> เข้าด้วยกันในบทสนทนาเดียว',
      'ทำงานได้ตั้งแต่ <b>ระดับกลยุทธ์ลงไปถึงรายละเอียดการลงมือทำ</b>',
      'พิสูจน์แล้วทั้ง <b>การทรานส์ฟอร์มระดับองค์กร</b> และ <b>สตาร์ทอัพแบบ zero-to-one</b>',
      'แนวทาง <b>AI-native</b> ในการพัฒนาผลิตภัณฑ์ งานวิจัย และการเพิ่มประสิทธิภาพเวิร์กโฟลว์'
    ],

    introVideo: "วิดีโอแนะนำตัว",
    introCap: "ทักทายสั้นๆ จากเบญ",
    qrCap: "เพิ่มเพื่อนทาง LINE",
    callCap: "เบอร์ติดต่อโดยตรง",
    callH: "ติดต่อโดยตรง",
    callAct: "แตะเพื่อโทร ↗",
    idcIl: ["ชื่อ", "ชื่อเล่น", "วันเกิด", "สถานะ"],
    idcIv: ["รุจิรัชช์ กาญจน์จรินทร์", '"เบญ"', "27-01-2000", "เปิดรับ / ว่าจ้าง"],

    ops: [
      { /* OP-01 CP Axtra */
        org: 'เป็น <b>หน่วยธุรกิจค้าปลีก-ค้าส่ง B2B &amp; B2C ของเครือ CP</b> (Makro &amp; Lotus\'s) — หนึ่งในผู้ค้าปลีกรายใหญ่ที่สุดในเอเชียตะวันออกเฉียงใต้',
        role: "Product Owner · แพลตฟอร์มค้าปลีก",
        ov: [
          'Product Owner ของ <strong>Commercial Hub</strong> แพลตฟอร์มบริหารงานค้าปลีก และ <strong>MSP</strong> ระบบบริหารสินค้าของซัพพลายเออร์ ฉันสร้างรากฐานหลักของ Item Management และ Pricing/Promotion <strong>ตั้งแต่เริ่มต้น</strong>',
          'นอกจากการส่งมอบฟีเจอร์ ฉันดูแล backlog และ roadmap ด้วยมุมมองระยะยาว — ออกแบบเพื่อ <strong>การขยายผลและกลยุทธ์ธุรกิจระยะยาว</strong> ไม่ใช่แค่ sprint ถัดไป'
        ],
        dh: "สิ่งที่ฉันส่งมอบ",
        del: [
          'ดูแล <strong>backlog &amp; roadmap</strong> ของผลิตภัณฑ์ โดยเน้นการขยายผลเป็นหลัก',
          'นำทีม <strong>Commercial Hub</strong> (ค้าปลีก) &amp; <strong>MSP</strong> (บริหารสินค้าซัพพลายเออร์)',
          'สร้างแพลตฟอร์ม Item Management &amp; Pricing/Promotion จากศูนย์',
          'จัดเวิร์กช็อปเก็บความต้องการ &amp; ทำ customer mapping',
          'ขับเคลื่อนการตัดสินใจด้วย <strong>Power BI &amp; SQL</strong>; นำทีมนานาชาติด้วยภาษาอังกฤษ'
        ]
      },
      { /* OP-02 Lovable */
        org: 'เป็น <b>งาน Lovable AI build-hackathon ครั้งแรกในประเทศไทย</b> — จากไอเดียสู่ต้นแบบที่ใช้งานได้ สดบนเวที',
        role: "ผู้ก่อตั้ง &amp; Product Lead · AI for SME",
        ov: [
          'ฉันพิตช์และสร้าง <strong>AI for SME</strong> — เครื่องมือ AI ที่ช่วยให้ธุรกิจขนาดเล็กของไทยทำงานได้ฉลาดขึ้น — ที่งาน <strong>Lovable Meetup &amp; Hackathon Thailand</strong>',
          'ไอเดียของฉันเองตั้งแต่ต้นจนจบ: ฉันกำหนดคอนเซ็ปต์ ออกแบบผลิตภัณฑ์ สร้างเดโมที่ใช้งานได้ในเวลาประมาณ <strong>สองชั่วโมง</strong> พิตช์บนเวที และได้รางวัล <strong>รองชนะเลิศอันดับ 1</strong>'
        ],
        dh: "สิ่งที่ฉันทำ",
        del: [
          'สร้างไอเดียสตาร์ทอัพ <strong>AI for SME</strong>',
          'กำหนดผลิตภัณฑ์ &amp; user flow ภายใต้แรงกดดันด้านเวลาจริง',
          'สร้างต้นแบบที่ใช้งานได้ใน <strong>~2 ชั่วโมง</strong>',
          'พิตช์ต่อกรรมการ — ได้ <strong>รองชนะเลิศอันดับ 1</strong>'
        ],
        figs: ["การนำเสนอ &amp; ตัดสิน — รอบชิงชนะเลิศ", "รับรางวัลรองชนะเลิศอันดับ 1"]
      },
      { /* OP-03 Telehealth */
        org: 'เป็น <b>แพลตฟอร์มเทเลฟาร์มาซีระดับชาติภายใต้สภาเภสัชกรรม</b> — ผู้ป่วยปรึกษา ชำระเงิน และรับยาออนไลน์',
        role: "ผู้ประสานงานโครงการ · Product Analyst",
        ov: [
          'แพลตฟอร์ม <strong>เทเลเฮลท์ระดับชาติของสภาเภสัชกรรมแห่งประเทศไทย</strong> — ผู้ป่วยปรึกษาเภสัชกร ชำระเงิน และรับยาแบบครบวงจร ฉันประสานงานพาร์ทเนอร์และดูแลเวิร์กโฟลว์ผลิตภัณฑ์ที่เชื่อมทุกอย่างเข้าด้วยกัน',
          'ส่วนที่ยากคือการเชื่อมพาร์ทเนอร์ภายนอกให้เป็นขั้นตอนเดียวที่ราบรื่น — การยืนยันตัวตน การชำระเงิน และการจัดส่ง ต้องไร้รอยต่อสำหรับผู้ป่วย'
        ],
        dh: "สิ่งที่ฉันส่งมอบ",
        del: [
          'จัดการการเชื่อมต่อกับ <strong>Lalamove</strong> (จัดส่ง), <strong>Krungthai / KTB</strong> (ชำระเงิน) &amp; <strong>เป๋าตัง</strong> (eKYC)',
          'ออกแบบเวิร์กโฟลว์ผลิตภัณฑ์ การแมป API &amp; สถาปัตยกรรมข้อมูล',
          'เขียน PRD &amp; user flow; ประสานงาน SIT/UAT และ go-live',
          'เพิ่มความเสถียรด้วยระบบอัตโนมัติ &amp; การปรับปรุงกระบวนการ'
        ],
        figs: ["Telehealth Thailand — แพลตฟอร์มระดับชาติที่ใช้งานจริง"]
      },
      { /* OP-04 SS&C */
        org: 'เป็น <b>บริษัทซอฟต์แวร์ฟินเทค &amp; บริหารกองทุนระดับโลกที่จดทะเบียนใน NASDAQ</b> — ลูกค้ารวมถึง MUFG และ State Street',
        role: "Business System Analyst · HiTrust",
        ov: [
          'งานวิเคราะห์ระบบธุรกิจบน <strong>HiTrust</strong> แพลตฟอร์มบริหารกองทุน ที่มีลูกค้าระดับโลกอย่าง <strong>MUFG และ State Street</strong> — ตรรกะการเงินที่ซับซ้อนและมีความเสี่ยงสูง ที่ความแม่นยำคือทุกอย่าง',
          'ฉันกำหนดกฎที่ระบบทำงาน — การชำระราคา การประเมินมูลค่า ค่าธรรมเนียม — และดูแล <strong>ตั้งแต่ข้อกำหนดจนถึงการขึ้นระบบจริง</strong>'
        ],
        dh: "สิ่งที่ฉันส่งมอบ",
        del: [
          'วิเคราะห์เวิร์กโฟลว์กองทุน — <strong>NAV, ค่าธรรมเนียมรายงวด, การควบรวมกองทุน, การชำระราคา</strong>',
          'กำหนดรอบการชำระราคา (T+1 / T+2) &amp; ตรรกะการปัดเศษ',
          'เขียน <strong>BRD, CID &amp; SOW</strong> สำหรับการพัฒนา &amp; การอนุมัติ',
          'ออกแบบการตั้งค่าพารามิเตอร์ &amp; ไดอะแกรมการประเมินมูลค่า',
          'นำ SIT/UAT ตรวจสอบการคำนวณ &amp; สนับสนุนการปล่อยระบบ'
        ]
      },
      { /* OP-05 SAW */
        org: 'เป็น <b>แอปพลิเคชันบริหารงานบุคคล (HR-tech)</b> ที่สร้างเครื่องมือสำหรับการสรรหา การบริหารคน และการจัดการกำลังคน',
        role: "Product Consultant · กลยุทธ์ &amp; Roadmap",
        ov: [
          'งานที่ปรึกษาผลิตภัณฑ์ให้ <strong>SAW แอปพลิเคชัน HR</strong> — ดูแล roadmap และกลยุทธ์ผลิตภัณฑ์ และกำหนดทิศทาง <strong>ตั้งแต่ไอเดียจนถึงการลงมือทำ</strong>',
          'ฉันทำงานครอบคลุมทั้งธุรกิจ: จัดแนว <strong>การพัฒนา การขาย และปฏิบัติการ</strong> ให้สอดคล้องกับกลยุทธ์เดียวและ roadmap ที่ทุกคนมุ่งมั่นร่วมกันได้'
        ],
        dh: "สิ่งที่ฉันส่งมอบ",
        del: [
          'กำหนด <strong>roadmap &amp; กลยุทธ์ระยะยาว</strong> ของผลิตภัณฑ์',
          'จัดแนวกลยุทธ์ระหว่าง <strong>การพัฒนา การขาย &amp; ปฏิบัติการ</strong>',
          'จัดลำดับความสำคัญฟีเจอร์ &amp; รวมผู้มีส่วนได้ส่วนเสียให้เห็นวิสัยทัศน์ร่วมกัน',
          'แปลงเป้าหมายธุรกิจเป็นแผนการลงมือทำ'
        ],
        figs: ["SAW — แอปพลิเคชัน HR (ผลิตภัณฑ์ที่ใช้งานจริง)"]
      },
      { /* OP-06 Muang Thai */
        org: 'หนึ่งใน <b>บริษัทประกันชีวิตชั้นนำของไทย</b> ที่ให้บริการผู้ถือกรมธรรม์หลายล้านคนทั่วประเทศ',
        role: "Business Analyst · ประกันชีวิตกลุ่ม",
        ov: [
          'งานวิเคราะห์ธุรกิจบน <strong>ระบบประกันชีวิตกลุ่ม</strong> — ครบวงจรกรมธรรม์ตั้งแต่การเสนอราคาจนถึงการเคลม',
          'ฉันแปลงกฎประกันที่ซับซ้อนให้เป็น <strong>ข้อกำหนดที่ชัดเจนและพร้อมพัฒนา</strong> และทำให้ทีมธุรกิจกับทีมพัฒนาทำงานสอดคล้องกันตลอดการส่งมอบ'
        ],
        dh: "สิ่งที่ฉันส่งมอบ",
        del: [
          'วิเคราะห์เวิร์กโฟลว์ <strong>การเสนอราคา การพิจารณารับประกัน กรมธรรม์ &amp; การเคลม</strong>',
          'กำหนดระดับความคุ้มครอง กฎเบี้ยประกัน &amp; โครงสร้างผลประโยชน์',
          'สร้าง <strong>SRS, BRD &amp; API specs</strong>; ประสานงานกับ คปภ. &amp; โรงพยาบาลพันธมิตร',
          'นำ SIT/UAT รับรองการปฏิบัติตามข้อกำหนด &amp; ความถูกต้องของข้อมูล'
        ]
      },
      { /* OP-07 Bright Integration */
        org: 'เป็น <b>บริษัทซอฟต์แวร์เฮาส์ระดับองค์กร</b> ที่สร้างระบบขนาดใหญ่ให้ลูกค้าภาครัฐและองค์กร',
        role: "Business &amp; Data Analyst · โครงการซอฟต์แวร์กองทัพบก",
        ov: [
          'นักวิเคราะห์ธุรกิจและข้อมูลหลักในโครงการ <strong>ระบบซอฟต์แวร์สำหรับกองทัพบก</strong> — โครงการขนาดใหญ่ที่มีความอ่อนไหวด้านความปลอดภัย มีข้อกำหนดเข้มงวดและผู้มีส่วนได้ส่วนเสียจำนวนมาก',
          'ฉันเป็นตัวกลางระหว่างนายทหาร เจ้าของโครงการ และนักพัฒนา เปลี่ยนความต้องการเชิงปฏิบัติการที่ซับซ้อนให้เป็น <strong>ข้อกำหนดที่ชัดเจน ผังกระบวนการ และระบบที่ทีมสร้างและทดสอบได้จริง</strong>'
        ],
        dh: "สิ่งที่ฉันส่งมอบ",
        del: [
          'จัด <strong>เวิร์กช็อปเก็บความต้องการ</strong> กับนายทหาร &amp; ผู้มีส่วนได้ส่วนเสีย',
          'ออกแบบ <strong>โครงสร้างระบบ &amp; ฐานข้อมูล</strong> และผังกระบวนการแบบครบวงจร',
          'แมปเวิร์กโฟลว์ปัจจุบันเทียบกับอนาคตด้วย <strong>BPMN</strong>; ทำ gap analysis',
          'เขียนเอกสาร <strong>BRD, FSD &amp; SRS</strong> ฉบับเต็มให้ทีมพัฒนา',
          'สร้าง <strong>แดชบอร์ด &amp; รายงานข้อมูล</strong> เพื่อการติดตามและตัดสินใจ',
          'ออกแบบ test case และนำ <strong>SIT &amp; UAT</strong> จนถึงการอนุมัติ',
          'ประสานงานนักพัฒนา QA &amp; ลูกค้า เพื่อให้ส่งมอบตามกำหนด'
        ],
        figs: ["นำเสนอระบบฐานข้อมูลด้านการข่าวร่วมบนเวที", "เวิร์กช็อปบูรณาการด้านการข่าว · หัวหิน, มี.ค. 2567"]
      }
    ],

    /* earlier experience (grid 0) then internships (grid 1) */
    gcards: [
      [
        { role: "นักวิเคราะห์ธุรกิจ &amp; QA", d: "บริษัทพัฒนาซอฟต์แวร์ ระบบเว็บแบบ POS ระบบติดตามข่าว &amp; แพลตฟอร์มบริหารงานก่อสร้าง" },
        { role: "ผู้จัดการโครงการ &amp; Product Owner", d: "งานอีคอมเมิร์ซอิสระ — เก็บความต้องการ ออกแบบร้าน เปิดตัว &amp; อบรมลูกค้า" }
      ],
      [
        { role: "นักวิเคราะห์ธุรกิจ · Salesforce", d: "คู่มือผู้ดูแล/ผู้ใช้ Salesforce, การล้างข้อมูล, เทมเพลตนำเข้า UAT &amp; การตั้งค่า" },
        { role: "นักวิเคราะห์ข้อมูล", d: "ข้อมูลอะไหล่โลจิสติกส์ เพิ่มประสิทธิภาพสินค้าคงคลัง &amp; การบำรุงรักษาด้วย Excel, SQL &amp; Python" },
        { role: "นักวิจัยตลาด", d: "วิจัยตลาดไทยให้ผลิตภัณฑ์สุขภาพธรรมชาติ ŌKU NZ; วิเคราะห์แบบสำรวจ &amp; รายงานเชิงลึก" },
        { role: "พัฒนาธุรกิจ", d: "การลงทุนอสังหาฯ: ประเมินโรงแรม สรุป IPO/ตรวจสอบบัญชี &amp; สนับสนุนการประเมินมูลค่า" },
        { role: "ผู้ช่วยฝ่ายจัดซื้อ", d: "ใบสั่งซื้อ ติดตามสินค้าคงคลัง &amp; ประสานงานวัสดุก่อสร้าง" },
        { role: "ผู้ช่วยฝ่ายจัดซื้อ", d: "ใบเสนอราคาซัพพลายเออร์ เปรียบเทียบราคา &amp; วิเคราะห์ต้นทุนการจัดซื้อวัสดุ" },
        { role: "ผู้ช่วยฝ่ายบัญชี", d: "บันทึกรายการ งบการเงิน &amp; กระทบยอดบัญชี" }
      ]
    ],

    edu: [
      { status: "กำลังศึกษา", uni: "มหาวิทยาลัยหอการค้าไทย", deg: 'ปริญญาโท — <em>AI MBA (บริหารธุรกิจด้านปัญญาประดิษฐ์)</em>', hl: "จุดเน้น", hv: "AI &amp; ธุรกิจ", hg: "กำลังศึกษา · UTCC" },
      { uni: "มหาวิทยาลัยอัสสัมชัญ", deg: 'ปริญญาตรีเศรษฐศาสตร์ธุรกิจ — <em>เน้นการวิเคราะห์ข้อมูล</em>', hl: "เกียรตินิยม", hv: "เกียรตินิยมอันดับหนึ่ง", hg: "GPA 3.89 / 4.00" },
      { status: "ได้รับคัดเลือก · 2569", uni: "NIA Academy · ARI Corporate Coaching (ACC Program 3)", deg: 'สำนักงานนวัตกรรมแห่งชาติ (NIA), กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม — <em>เชื่อมทักษะ AI สู่การใช้งานจริง เงินทุน &amp; การเติบโตระดับโลก</em>', hl: "สาย", hv: "AI Tech Talent", hg: "CCC Academy × NIA" },
      { uni: "JMAT · สมาคมการตลาดแห่งประเทศไทย", deg: 'ค่าย J-MAT Award — <em>รุ่นที่ 23 · โครงการอบรมการตลาด</em><br />แผนการตลาด Gen-Z &amp; วิเคราะห์คู่แข่งสำหรับแคมเปญ Ocean Life', hl: "โครงการ", hv: "ผู้เข้าอบรมการตลาด", hg: "รุ่นที่ 23" }
    ],

    contact: {
      lbl: "05 — ติดต่อฉัน",
      h2: 'เบญ <em>พร้อม<br />ให้คำปรึกษา</em>',
      sub: "งานฟรีแลนซ์ &amp; ที่ปรึกษาแบบโปรเจกต์ — กลยุทธ์ผลิตภัณฑ์ การเป็นเจ้าของผลิตภัณฑ์ การวิเคราะห์ระบบ และการพัฒนาธุรกิจ ตั้งแต่ไอเดียแรกจนถึงการเปิดตัว ฉันดูแลได้ครบ",
      cta: 'ติดต่อฉัน <span class="arw">↗</span>',
      cl: ["อีเมล", "โทรศัพท์", "LinkedIn", "Line"],
      cvCap: "สแกนเพื่อเพิ่มเพื่อน"
    },
    footFb: "เบญ · รุจิรัชช์ กาญจน์จรินทร์",
    footTop: "กลับขึ้นด้านบน ↑",

    pillT: "<b>เบญ</b> พร้อมให้คำปรึกษา",
    pillBtn: "ติดต่อเบญ"
  };

  /* ----- build list of [element, thaiHTML] ----- */
  function pairs() {
    var out = [];
    function add(el, th) { if (el && th != null) out.push([el, th]); }
    function addAll(sel, arr, ctx) {
      var els = (ctx || document).querySelectorAll(sel);
      for (var i = 0; i < els.length; i++) if (arr[i] != null) out.push([els[i], arr[i]]);
    }
    function q(sel, ctx) { return (ctx || document).querySelector(sel); }

    addAll(".tb-nav a", T.nav);
    addAll(".mmenu a", T.nav);

    add(q(".dpanel .dp-h span:first-child"), T.dpHead[0]);
    add(q(".dpanel .dp-h span:last-child"), T.dpHead[1]);
    addAll(".dpanel .dp-b .row", T.dpRows);
    add(q(".dp-more span:first-child"), T.dpMore);

    addAll(".headline .meta span", T.meta);
    add(q(".headline h1"), T.h1);
    add(q(".headline .lede"), T.lede);
    add(q(".headline .acts .btn-primary"), T.btnView);
    add(q(".headline .acts .btn-ghost"), T.btnHire);

    (function () {
      var sp = document.querySelectorAll(".ticker-track span");
      for (var i = 0; i < sp.length; i++) add(sp[i], T.ticker[i % T.ticker.length]);
    })();

    Object.keys(T.secHead).forEach(function (id) {
      var sh = T.secHead[id];
      add(q("#" + id + " .sec-head .idx"), sh.idx);
      add(q("#" + id + " .sec-head h2"), sh.h2);
      add(q("#" + id + " .sec-head .sh-r"), sh.shr);
    });
    addAll("#ops .subhead", T.subheads);

    add(q(".doss-head .dh-t .a"), T.dossHead.a);
    add(q(".doss-head .dh-t .b"), T.dossHead.b);
    add(q(".doss-head .dh-no"), T.dossHead.no);
    add(q(".doss-copy"), T.dossCopy);
    addAll("#dossier .doss-spec .row", T.spec);

    var blk = document.querySelectorAll("#dossier .doss-blk");
    if (blk[0]) {
      add(blk[0].querySelector("h4"), T.inShortH);
      addAll("p", T.inShort, blk[0]);
    }
    if (blk[1]) {
      add(blk[1].querySelector("h4"), T.whyH);
      addAll(".doss-notes li", T.why, blk[1]);
    }

    add(q(".intro-clip .ic-h span:last-child"), T.introVideo);
    add(q(".intro-clip .box-cap"), T.introCap);
    add(q(".qr-box .box-cap"), T.qrCap);
    add(q(".fp-box .box-cap"), T.callCap);
    add(q(".callcard .cc-h span:first-child"), T.callH);
    add(q(".callcard .cc-act"), T.callAct);
    addAll(".idc-meta .il", T.idcIl);
    addAll(".idc-meta .iv", T.idcIv);

    var ops = document.querySelectorAll("#ops .op");
    T.ops.forEach(function (o, i) {
      var op = ops[i]; if (!op) return;
      add(op.querySelector(".op-org"), o.org);
      add(op.querySelector(".op-role"), o.role);
      addAll(".ov p", o.ov, op);
      add(op.querySelector(".op-deliver h4"), o.dh);
      addAll(".op-deliver li", o.del, op);
      if (o.figs) addAll("figcaption", o.figs, op);
    });

    var grids = document.querySelectorAll("#ops .grid-cards");
    T.gcards.forEach(function (cards, gi) {
      var grid = grids[gi]; if (!grid) return;
      var gc = grid.querySelectorAll(".gcard");
      cards.forEach(function (c, ci) {
        var card = gc[ci]; if (!card) return;
        add(card.querySelector(".gc-role"), c.role);
        add(card.querySelector(".gc-d"), c.d);
      });
    });

    var edu = document.querySelectorAll("#edu .edu-card");
    T.edu.forEach(function (e, i) {
      var card = edu[i]; if (!card) return;
      if (e.status) add(card.querySelector(".status"), e.status);
      add(card.querySelector(".uni"), e.uni);
      add(card.querySelector(".deg"), e.deg);
      add(card.querySelector(".hl"), e.hl);
      add(card.querySelector(".hv"), e.hv);
      add(card.querySelector(".hg"), e.hg);
    });

    add(q(".contact .lbl-line"), T.contact.lbl);
    add(q(".contact > .wrap > h2"), T.contact.h2);
    add(q(".contact .sub"), T.contact.sub);
    add(q(".contact .cta"), T.contact.cta);
    addAll(".contact-links .cl", T.contact.cl);
    add(q(".cv-cap"), T.contact.cvCap);
    add(q(".foot .fb"), T.footFb);
    add(q(".foot a"), T.footTop);
    add(q(".hire-pill .hp-t"), T.pillT);
    add(q(".hire-pill .hp-btn"), T.pillBtn);

    return out;
  }

  var P = null, EN = null;
  var lang = localStorage.getItem("ben-lang") || "en";

  function ensure() {
    if (P) return;
    P = pairs();
    EN = P.map(function (pr) { return pr[0].innerHTML; });
  }

  function apply(l) {
    ensure();
    for (var i = 0; i < P.length; i++) {
      P[i][0].innerHTML = (l === "th") ? P[i][1] : EN[i];
    }
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.setAttribute("lang", l === "th" ? "th" : "en");
    lang = l;
    try { localStorage.setItem("ben-lang", l); } catch (e) {}
  }

  function wire() {
    var btn = document.querySelector(".lang-tog");
    if (btn) {
      btn.addEventListener("click", function () {
        apply(lang === "th" ? "en" : "th");
      });
    }
    apply(lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();

        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Inline SVG icons (replaces the external lucide library - zero network requests)
        const ICON_SVGS = {"activity": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\"></path></svg>", "arrow-right": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"></path><path d=\"m12 5 7 7-7 7\"></path></svg>", "award": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\"></path><circle cx=\"12\" cy=\"8\" r=\"6\"></circle></svg>", "baby": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5\"></path><path d=\"M15 12h.01\"></path><path d=\"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1\"></path><path d=\"M9 12h.01\"></path></svg>", "building": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 10h.01\"></path><path d=\"M12 14h.01\"></path><path d=\"M12 6h.01\"></path><path d=\"M16 10h.01\"></path><path d=\"M16 14h.01\"></path><path d=\"M16 6h.01\"></path><path d=\"M8 10h.01\"></path><path d=\"M8 14h.01\"></path><path d=\"M8 6h.01\"></path><path d=\"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3\"></path><rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\"></rect></svg>", "calendar": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"></rect><path d=\"M3 9h18\"></path></svg>", "calendar-check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"></rect><path d=\"M3 9h18\"></path><path d=\"m9 15 2 2 4-4\"></path></svg>", "check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 6 9 17l-5-5\"></path></svg>", "chevron-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\"></path></svg>", "chevron-right": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m9 18 6-6-6-6\"></path></svg>", "clock": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M12 6v6l4 2\"></path></svg>", "flame": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4\"></path></svg>", "heart-handshake": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762\"></path></svg>", "home": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"></path><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path></svg>", "map-pin": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle></svg>", "menu": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 5h16\"></path><path d=\"M4 12h16\"></path><path d=\"M4 19h16\"></path></svg>", "message-circle": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"></path></svg>", "phone": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\"></path></svg>", "scissors": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M8.12 8.12 12 12\"></path><path d=\"M20 4 8.12 15.88\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M14.8 14.8 20 20\"></path></svg>", "smile": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 10V9\"></path><path d=\"M16.472 15a6 6 0 01-8.943 0\"></path><path d=\"M9 10V9\"></path><circle cx=\"12\" cy=\"12\" r=\"10\"></circle></svg>", "sparkles": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\"></path><path d=\"M20 2v4\"></path><path d=\"M22 4h-4\"></path><circle cx=\"4\" cy=\"20\" r=\"2\"></circle></svg>", "star": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"></path></svg>", "stethoscope": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M11 2v2\"></path><path d=\"M5 2v2\"></path><path d=\"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1\"></path><path d=\"M8 15a6 6 0 0 0 12 0v-3\"></path><circle cx=\"20\" cy=\"10\" r=\"2\"></circle></svg>", "users": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"></path><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle></svg>", "x": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M18 6 6 18\"></path><path d=\"m6 6 12 12\"></path></svg>"};
        function iconSvg(name, cls) {
            const svg = ICON_SVGS[name] || ICON_SVGS['stethoscope'] || '';
            if (!svg) return '';
            return cls ? svg.replace('<svg', '<svg class="' + cls + '"') : svg;
        }

        // Scroll Intersection Observer for Reveal Animations (including left/right directions)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.10
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
        });

        const servicesData = [
            {
                id: "1",
                slug: "gynaecology",
                title: "Gynaecology",
                shortDesc: "Comprehensive preventive and curative health care tailored for women at every stage of life.",
                fullDesc: "Complete gynaecological consultations, preventive screenings, cervical cancer vaccination and pap smears, pelvic pain diagnosis, ovarian cysts management, and reproductive healthcare.",
                icon: "stethoscope",
                commonSymptoms: ["Pelvic discomfort or persistent lower abdominal pain", "Abnormal vaginal discharge or irritation", "Pain during intimacy or urination", "Routine annual preventive checkups"],
                treatments: ["Well-Woman Annual Health Screenings", "Pap Smear & Liquid Based Cytology", "Fibroid & Ovarian Cyst Medical Management", "Vaginal & Pelvic Infection Treatments"],
                keyBenefits: ["Holistic approach to hormonal and physical health", "Early detection of cervical & ovarian disorders", "Compassionate, private, and confidential environment"]
            },
            {
                id: "2",
                slug: "pcod-pcos-treatment",
                title: "PCOD/PCOS Treatment",
                shortDesc: "Targeted hormonal balancing, metabolic support, and lifestyle modification plans for PCOS.",
                fullDesc: "Polycystic Ovary Syndrome (PCOS) and PCOD require multi-dimensional management. Dr. Sargam Soni designs customized protocols integrating hormonal stabilization, insulin resistance management, menstrual regularization, and fertility optimization.",
                icon: "activity",
                commonSymptoms: ["Irregular, delayed, or missed menstrual cycles", "Excess facial/body hair (Hirsutism) and stubborn acne", "Unexplained weight gain and difficulty losing weight", "Hair thinning and skin pigmentation (Acanthosis nigricans)"],
                treatments: ["Hormonal Profile Mapping & Ultrasound Evaluation", "Personalized Medical Management & Cycle Regulation", "Dietary & Nutritional Lifestyle Guidance", "Ovulation Induction for Conception"],
                keyBenefits: ["Restore regular menstrual rhythm safely", "Address root metabolic drivers rather than just symptoms", "Preserve future fertility and metabolic health"]
            },
            {
                id: "3",
                slug: "weightloss-treatment",
                title: "Weightloss Treatment",
                shortDesc: "Medically supervised weight management tailored for hormonal and metabolic harmony.",
                fullDesc: "Weight issues in women are frequently rooted in thyroid imbalances, postpartum metabolic shifts, insulin resistance, or PCOS. Dr. Sargam Soni provides evidence-based medical weight loss guidance focused on sustainable results.",
                icon: "flame",
                commonSymptoms: ["Difficulty losing weight despite diet and exercise", "Postpartum weight retention", "Sluggish metabolism with fatigue", "Weight gain associated with hormonal fluctuations"],
                treatments: ["Metabolic & Thyroid Evaluation", "Hormone-Aware Dietary Planning", "Medical Support & Insulin Sensitization", "Continuous Progress Monitoring & Body Composition Review"],
                keyBenefits: ["Improve energy levels and insulin sensitivity", "Enhance fertility and reproductive wellness", "Safe, doctor-guided, sustainable lifestyle changes"]
            },
            {
                id: "4",
                slug: "laparoscopy",
                title: "Laparoscopy",
                shortDesc: "Minimally invasive keyhole surgeries ensuring minimal pain, tiny scars, and rapid recovery.",
                fullDesc: "Advanced diagnostic and operative laparoscopic surgeries for fibroids, ovarian cysts, endometriosis, tubal patency, ectopic pregnancies, and diagnostic fertility evaluations.",
                icon: "scissors",
                commonSymptoms: ["Chronic pelvic pain resistant to medications", "Suspected endometriosis or pelvic adhesions", "Large or symptomatic ovarian cysts and fibroids", "Unexplained infertility requiring tubal assessment"],
                treatments: ["Diagnostic Laparoscopy & Chromopertubation", "Laparoscopic Cystectomy & Myomectomy (Fibroid Removal)", "Laparoscopic Management of Endometriosis", "Laparoscopic Assisted Vaginal Hysterectomy (LAVH)"],
                keyBenefits: ["Micro-incisions with minimal post-op discomfort", "Shorter hospital stays (often same-day or 24-48 hrs)", "Significantly faster return to everyday life and work"]
            },
            {
                id: "5",
                slug: "managing-pregnancies",
                title: "Managing Pregnancies",
                shortDesc: "Dedicated prenatal, antenatal, and high-risk pregnancy care from conception to delivery.",
                fullDesc: "Empathetic, rigorous antenatal care for both low-risk and high-risk pregnancies. Includes routine ultrasound monitoring, gestational diabetes management, hypertension in pregnancy (preeclampsia), and mental readiness for normal delivery.",
                icon: "heart-handshake",
                commonSymptoms: ["First trimester nausea, fatigue, and early pregnancy questions", "Gestational diabetes or elevated blood pressure", "Twin/multiple gestation pregnancies", "History of recurrent miscarriages or preterm labor"],
                treatments: ["Comprehensive Trimester-Wise Antenatal Protocols", "High-Risk Pregnancy Intensive Monitoring", "Nutritional, Iron, and Calcium Optimization", "Birthing Preparation & Mental Readiness Workshops"],
                keyBenefits: ["Personalized focus on achieving safe normal deliveries", "24x7 emergency backup at Sai Nest Hospital", "Warm, family-centered environment during labor and delivery"]
            },
            {
                id: "6",
                slug: "menstrual-problems",
                title: "Menstrual Problems",
                shortDesc: "Expert diagnosis and relief for painful, heavy, irregular, or absent menstrual periods.",
                fullDesc: "From adolescent dysmenorrhea to perimenopausal heavy bleeding, Dr. Soni provides clear diagnostic pathways and effective treatments to restore comfortable, predictable cycles.",
                icon: "calendar",
                commonSymptoms: ["Severe cramps (Dysmenorrhea) disrupting daily routine", "Heavy bleeding with clots (Menorrhagia)", "Frequent, delayed, or unpredictable periods", "Severe premenstrual syndrome (PMS) and mood shifts"],
                treatments: ["Pelvic Ultrasound & Endometrial Evaluation", "Hormone Level Assessments & Thyroid Checks", "Medical Therapy & Non-Hormonal Symptom Relief", "Hysteroscopy for Polyps & Submucosal Fibroids"],
                keyBenefits: ["Freedom from disabling monthly pain and anxiety", "Prevention of chronic iron-deficiency anemia", "Safe, clear solutions tailored to age and lifestyle"]
            },
            {
                id: "7",
                slug: "obstetrician",
                title: "Obstetrician",
                shortDesc: "Complete maternal-fetal care, safe normal labor, painless delivery, and caesarean section.",
                fullDesc: "Full obstetric care covering pre-conceptional counseling, labor ward management, epidural painless deliveries, safe emergency caesareans when medically necessary, and post-delivery lactation support.",
                icon: "baby",
                commonSymptoms: ["Planning for pregnancy and pre-conceptional health checks", "Onset of labor contractions or water breakage", "Fetal growth and Doppler tracking", "Post-delivery healing and newborn feeding support"],
                treatments: ["Pre-Conception Health Optimization & Folate Planning", "Normal Vaginal Delivery & Painless Delivery (Epidural)", "Elective & Emergency Lower Segment Cesarean Section (LSCS)", "Postnatal & Lactation Counseling"],
                keyBenefits: ["Trusted clinical decision-making with no hidden agendas", "Compassionate nursing and delivery support team", "Stress-free transition from pregnancy to motherhood"]
            },
            {
                id: "8",
                slug: "infertility-treatment",
                title: "Infertility Treatment",
                shortDesc: "Advanced Assisted Reproductive Technologies (ART), IVF guidance, and fertility restoration.",
                fullDesc: "With specialized training from EART and the Embryology & PGD Academy in the UK, Dr. Sargam Soni provides cutting-edge fertility evaluations, ovulation induction, intrauterine insemination (IUI), and IVF guidance for couples facing conception challenges.",
                icon: "sparkles",
                commonSymptoms: ["Inability to conceive after 12 months (or 6 months if age > 35)", "Blocked fallopian tubes or low ovarian reserve (AMH)", "Male factor fertility parameters (low sperm count/motility)", "Previous unsuccessful conception attempts"],
                treatments: ["Complete Couple Fertility Diagnostic Workup", "Follicular Tracking Ultrasound Scans", "Ovulation Induction & Timed Intercourse Guidance", "Intrauterine Insemination (IUI) & IVF/ICSI Protocols"],
                keyBenefits: ["UK & EART certified ART reproductive expertise", "Empathetic, non-judgmental couple-centric counseling", "Transparent recommendations focused on achieving healthy birth"]
            }
        ];

        // Render Apple-Style Stacking Cards for Specialties
        const specialtiesWrapper = document.getElementById('specialties-stacking-wrapper');
        servicesData.forEach((service, idx) => {
            const card = document.createElement('div');
            card.className = "stack-card luxury-card rounded-3xl p-7 sm:p-9 border border-[#E8E4DC] shadow-md transition-all duration-300";
            card.style.setProperty('--card-index', idx);
            card.innerHTML = `
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div class="space-y-3 flex-1">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-inner">
                                ${iconSvg(service.icon, "w-6 h-6")}
                            </div>
                            <div>
                                <span class="text-xs font-bold text-primary tracking-wider uppercase">0${idx + 1} • Specialty</span>
                                <h3 class="font-serif-heading font-bold text-xl sm:text-2xl text-[#1E242B]">${service.title}</h3>
                            </div>
                        </div>
                        <p class="text-xs sm:text-sm text-[#5A6472] leading-relaxed font-light">${service.fullDesc}</p>
                    </div>
                    <div class="flex sm:flex-col items-center sm:items-end gap-3 shrink-0 w-full md:w-auto justify-between pt-4 md:pt-0 border-t md:border-t-0 border-[#F0EBE1]">
                        <button onclick="openServiceModal('${service.id}')" class="text-primary font-bold text-xs flex items-center gap-1.5 hover:underline cursor-pointer group/btn">
                            <span>View Full Details</span>
                            <svg class="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </button>
                        <button onclick="openBookingModal('${service.title}')" class="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm">
                            Book Slot
                        </button>
                    </div>
                </div>
            `;
            specialtiesWrapper.appendChild(card);
        });

        const credentialsData = [
            { title: "MBBS", institution: "K.J. Somaiya Medical College, Mumbai", badge: "Graduation", desc: "Comprehensive foundation in medical sciences and clinical practice from one of Mumbai's premier medical institutions." },
            { title: "Specialization (OBGYN & TDD)", institution: "Obstetrics & Gynecology and TDD Chest Medicine", badge: "Specialist", desc: "Dual specialization ensuring robust management of both maternal-fetal wellness and respiratory/cardiopulmonary considerations during pregnancy." },
            { title: "Advanced ART & IVF Training", institution: "EART & Embryology & PGD Academy, United Kingdom", badge: "Fellowship / ART", desc: "International fellowship focusing on state-of-the-art reproductive technologies, embryo culture, and personalized fertility protocols." },
            { title: "Ultrasound Certification", institution: "Ian Donald Inter-University School of Medical Ultrasound", badge: "Diagnostic USG", desc: "Advanced mastery in fetal anomaly scans, obstetric doppler studies, and high-resolution gynaecological ultrasound diagnostics." },
            { title: "National Speaker & Panelist", institution: "AICOG, FOGSI, ISAR, and RECOGYN conferences", badge: "Keynote", desc: "Active keynote speaker and scientific panelist contributing to peer education and clinical guidelines in women's healthcare since 2020." },
            { title: "Young Gynecologist of the Year (2017)", institution: "Recognized for clinical excellence and patient care in women's health", badge: "Excellence Award", desc: "Prestigious Mumbai-wide recognition awarded for exceptional surgical precision, compassionate bedside manner, and maternal care." },
            { title: "Young Meritorious Woman Achiever (2015)", institution: "Awarded in Mumbai for pioneering healthcare leadership", badge: "City Honors", desc: "Honored for leadership and innovation in accessible women's healthcare and community health advocacy across western suburbs." }
        ];

        // Render Apple-Style Stacking Cards for Credentials
        const credentialsWrapper = document.getElementById('credentials-stacking-wrapper');
        credentialsData.forEach((cred, idx) => {
            const card = document.createElement('div');
            card.className = "stack-card luxury-card rounded-3xl p-6 sm:p-8 border border-[#E8E4DC] shadow-md transition-all duration-300";
            card.style.setProperty('--card-index', idx);
            card.innerHTML = `
                <div class="flex items-start justify-between gap-4 mb-3">
                    <div>
                        <span class="text-xs font-bold text-primary tracking-wider uppercase">0${idx + 1} • Credential</span>
                        <h4 class="font-serif-heading font-bold text-lg sm:text-xl text-[#1E242B] mt-1">${cred.title}</h4>
                    </div>
                    <span class="px-3 py-1 rounded-full bg-[#7A1C2E]/10 text-primary text-xs font-semibold shrink-0">${cred.badge}</span>
                </div>
                <p class="text-xs sm:text-sm font-semibold text-[#1E242B] mb-2">${cred.institution}</p>
                <p class="text-xs sm:text-sm text-[#5A6472] leading-relaxed font-light">${cred.desc || "Advanced clinical certification and professional recognition demonstrating unwavering commitment to medical excellence."}</p>
            `;
            credentialsWrapper.appendChild(card);
        });

        const testimonialsData = [
            {
                patientName: "Mother of Vihaan",
                condition: "Infertility & High-Risk Pregnancy Conception",
                highlight: "Conceived beautifully despite complications — today Vihaan is in my arms!",
                text: "I had lost complete hopes of getting pregnant ... then a friend recommended me to Dr Sargam Soni. I conceived beautifully even despite having many complications which were sorted out very easily by her and today i have the happiness of my life VIHAAN in my arms only because of Dr Sargam Soni. She is not just a fantastic doctor but also a fabulous human being ... she treated me like a family and still treats me the same. Thanku Doc."
            },
            {
                patientName: "Delighted New Parents",
                condition: "Full Term Antenatal Care & Normal Delivery",
                highlight: "Staff here is very courteous and always ready to help — prepared us for normal delivery.",
                text: "Personally had a great experience as we welcomed our baby.. right from first month we were associated with the hospital and what we found here was happiness always.. infact our regular check up visits were what we were always looking forward to.. staff here is very courteous and always ready to help.. our stay for delivery and couple of day after that was really amazing.. nursing staff was very helpful and infact were hand-holding and preparing us for our so-called challenges after discharge :). Dr. Sargam Soni (our gynaecologist) special thanks to her for mentally preparing us for normal delivery."
            },
            {
                patientName: "Grateful Patient",
                condition: "Complex Gynecological Treatment",
                highlight: "Straight forward without any hidden agenda. Patient comfort is prime importance.",
                text: "Straight forward without any hidden agenda . Service , patient comfort & issue resolution is of prime importance to her. I have never had any issues under Dr. Sargam. I would definitely recommend Dr. Sargam to every woman who is looking for a cure to toughest of ailments & complications."
            },
            {
                patientName: "Family of Blessed Newborn",
                condition: "Conception, Entire Pregnancy & Delivery",
                highlight: "Made my conception, entire pregnancy, & delivery absolutely stress-free.",
                text: "I personally had a great experience with Dr. Sargam Soni, Me & my family are blessed to have met Dr. Sargam , she is fantastic at work. An absolute fantastic doc who made my conception, entire pregnancy, & delivery absolutely stressfree. She is very very caring with a gem of a heart, absolutely not money minded unlike others. Thank you & God bless you."
            }
        ];

        const blogData = [
            {
                id: "b1",
                title: "Understanding PCOD/PCOS: Key Symptoms, Diet Tips, and Medical Management",
                category: "Women's Health",
                readTime: "4 min read",
                date: "March 2025",
                summary: "How modern lifestyle, insulin resistance, and hormonal patterns influence PCOS, and actionable steps to regulate your cycle naturally.",
                content: [
                    "Polycystic Ovary Syndrome (PCOS) is one of the most common endocrine disorders affecting women of reproductive age. While the terms PCOD and PCOS are often used interchangeably, understanding the nuances can help you seek timely medical intervention.",
                    "The primary symptoms include irregular menstrual periods, androgen excess causing hirsutism and facial acne, and polycystic morphology on ultrasound. Early diagnosis through hormonal profiling prevents long-term risks such as diabetes and metabolic syndrome.",
                    "At Sai Nest Hospital, we champion a balanced treatment model combining targeted low-glycemic nutrition, stress management, regular physical activity, and medical cycle regulation."
                ],
                tags: ["PCOS", "Hormones", "Wellness"]
            },
            {
                id: "b2",
                title: "Preparing for a Normal Delivery: What Every Expectant Mother Should Know",
                category: "Obstetrics",
                readTime: "5 min read",
                date: "February 2025",
                summary: "Practical guidance on pelvic exercises, breathing techniques, and mental preparation for a calm, confident birth experience.",
                content: [
                    "A normal vaginal birth is a natural, empowering physiological event. However, proper antenatal preparation makes a significant difference in labor duration and maternal comfort.",
                    "Beginning in your second trimester, maintaining gentle pelvic mobility, practicing diaphragmatic breathing, and attending antenatal workshops builds essential muscular endurance.",
                    "Dr. Sargam Soni emphasizes close fetal monitoring, epidural analgesia options for painless labor when desired, and transparent communication throughout the delivery journey."
                ],
                tags: ["Pregnancy", "Normal Delivery", "Maternity"]
            },
            {
                id: "b3",
                title: "When Should You Consult an Infertility Specialist? Myths vs. Facts",
                category: "Fertility",
                readTime: "4 min read",
                date: "January 2025",
                summary: "Breaking the silence around fertility struggles: knowing the right timeline, diagnostic tests like AMH and semen analysis, and advanced ART options.",
                content: [
                    "Conception challenges can feel isolating, but they are remarkably common and treatable. Couples are generally advised to consult a specialist if pregnancy has not occurred after 12 months of unprotected intercourse (or 6 months if the female partner is 35 or older).",
                    "Advanced diagnostics, including follicular tracking, tubal patency tests (HSG/HyCoSy), and hormonal assays, pinpoint the exact underlying factors.",
                    "With UK and EART certified expertise, Dr. Sargam Soni provides gentle ovulation induction, IUI, and personalized IVF guidance in a supportive, ethical environment."
                ],
                tags: ["Infertility", "IVF", "Conception"]
            }
        ];

        const faqData = [
            {
                q: "Where is Dr. Sargam Dev Soni's clinic located in Mumbai?",
                a: "Dr. Sargam Soni practices at Sai Nest Hospital, located on the 1st Floor of Sai Niketan CHS, Sai Baba Nagar, Borivali West, Mumbai – 400092 (Opposite the famous Sai Baba Mandir)."
            },
            {
                q: "How can I book an appointment with Dr. Sargam Soni?",
                a: "You can book directly by calling +91 8928031080, sending a message via WhatsApp, or using the online 'Book an Appointment' form on this website. Our hospital desk will confirm your preferred slot."
            },
            {
                q: "Does Sai Nest Hospital handle 24x7 pregnancy emergencies and deliveries?",
                a: "Yes. Sai Nest Hospital provides round-the-clock emergency obstetrics, labor room facilities, and maternity admissions under Dr. Sargam Soni's supervision."
            },
            {
                q: "What advanced fertility treatments are available?",
                a: "Dr. Sargam Soni offers comprehensive fertility diagnostic workups, follicular ultrasound tracking, ovulation induction, Intrauterine Insemination (IUI), and advanced IVF guidance backed by UK and EART certifications."
            },
            {
                q: "What are the clinic OPD consultation hours?",
                a: "General OPD hours are Monday to Saturday from 10:00 AM – 1:00 PM (Morning) and 6:00 PM – 9:00 PM (Evening). Sundays are reserved for emergency and prior booked appointments."
            }
        ];

        // Render Testimonials
        const testimonialsGrid = document.getElementById('testimonials-grid');
        testimonialsData.forEach((t, idx) => {
            const card = document.createElement('div');
            card.className = `bg-white/95 p-7 sm:p-10 rounded-3xl border border-[#E8E4DC] shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-400 reveal`;
            card.innerHTML = `
                <div>
                    <div class="flex items-center gap-1.5 text-amber-500 mb-4 sm:mb-5">
                        ${'<svg class="w-4 h-4 fill-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>'.repeat(5)}
                    </div>
                    <h3 class="font-serif-heading font-bold text-base sm:text-lg text-[#1E242B] mb-2.5 sm:mb-3">"${t.highlight}"</h3>
                    <p class="text-[#4A5568] text-xs sm:text-sm leading-relaxed italic mb-6 sm:mb-8 font-light">"${t.text}"</p>
                </div>
                <div class="pt-4 sm:pt-5 border-t border-[#F0EBE1] flex items-center justify-between">
                    <div>
                        <div class="font-bold text-xs sm:text-sm text-[#1E242B]">${t.patientName}</div>
                        <div class="text-[11px] sm:text-xs text-primary font-medium mt-0.5">${t.condition}</div>
                    </div>
                    <span class="px-2.5 sm:px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs font-semibold border border-emerald-200">Verified Patient</span>
                </div>
            `;
            testimonialsGrid.appendChild(card);
            observer.observe(card);
        });

        // Render Blog
        const blogGrid = document.getElementById('blog-grid');
        blogData.forEach((blog, idx) => {
            const card = document.createElement('div');
            card.className = `bg-white/95 rounded-3xl border border-[#E8E4DC] overflow-hidden flex flex-col justify-between shadow-2xs hover:border-primary hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 reveal`;
            card.innerHTML = `
                <div class="p-6 sm:p-7 space-y-3 sm:space-y-4">
                    <div class="flex items-center justify-between text-xs text-[#5A6472]">
                        <span class="font-semibold text-primary px-2.5 py-1 rounded-full bg-primary/10">${blog.category}</span>
                        <span>${blog.readTime}</span>
                    </div>
                    <h3 class="font-serif-heading font-bold text-lg sm:text-xl text-[#1E242B] leading-snug">${blog.title}</h3>
                    <p class="text-[#5A6472] text-xs sm:text-sm leading-relaxed font-light">${blog.summary}</p>
                </div>
                <div class="p-6 sm:p-7 pt-0 flex items-center justify-between">
                    <button onclick="openBlogModal('${blog.id}')" class="text-primary font-bold text-xs flex items-center gap-1.5 hover:underline cursor-pointer group/btn" aria-label="Read full article">
                        <span>Read Full Article</span>
                        <svg class="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </button>
                    <span class="text-xs text-gray-500">${blog.date}</span>
                </div>
            `;
            blogGrid.appendChild(card);
            observer.observe(card);
        });

        // Render FAQs
        const faqList = document.getElementById('faq-list');
        faqData.forEach((faq, index) => {
            const item = document.createElement('div');
            item.className = "rounded-2xl border border-[#E8E4DC] transition-all overflow-hidden bg-white/95 shadow-2xs hover:border-primary/50";
            item.innerHTML = `
                <button onclick="toggleFaq(${index})" class="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none" >
                    <span class="font-bold text-xs sm:text-base text-[#1E242B] pr-2">${faq.q}</span>
                    <div id="faq-icon-${index}" class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 bg-[#FAF9F6] text-[#5A6472] border border-[#E8E4DC]">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                    </div>
                </button>
                <div id="faq-answer-${index}" class="hidden px-5 sm:px-7 pb-6 sm:pb-7 text-[#4A5568] text-xs sm:text-sm leading-relaxed border-t border-[#F0EBE1] pt-4 sm:pt-5 font-light">
                    ${faq.a}
                </div>
            `;
            faqList.appendChild(item);
        });

        // Initialize Lucide icons

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // FAQ Toggle
        let activeFaqIndex = null;
        function toggleFaq(index) {
            const answer = document.getElementById(`faq-answer-${index}`);
            const icon = document.getElementById(`faq-icon-${index}`);
            
            if (activeFaqIndex === index) {
                answer.classList.add('hidden');
                icon.classList.remove('rotate-180', 'bg-primary', 'text-white', 'border-primary');
                icon.classList.add('bg-[#FAF9F6]', 'text-[#5A6472]', 'border-[#E8E4DC]');
                activeFaqIndex = null;
            } else {
                if (activeFaqIndex !== null) {
                    document.getElementById(`faq-answer-${activeFaqIndex}`).classList.add('hidden');
                    const prevIcon = document.getElementById(`faq-icon-${activeFaqIndex}`);
                    prevIcon.classList.remove('rotate-180', 'bg-primary', 'text-white', 'border-primary');
                    prevIcon.classList.add('bg-[#FAF9F6]', 'text-[#5A6472]', 'border-[#E8E4DC]');
                }
                answer.classList.remove('hidden');
                icon.classList.add('rotate-180', 'bg-primary', 'text-white', 'border-primary');
                icon.classList.remove('bg-[#FAF9F6]', 'text-[#5A6472]', 'border-[#E8E4DC]');
                activeFaqIndex = index;
            }
        }

        // Modal Functions
        const backdrop = document.getElementById('modal-backdrop');
        const modalContent = document.getElementById('modal-content');

        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) closeModal();
        });

        function closeModal() {
            backdrop.classList.add('hidden');
            backdrop.setAttribute('aria-hidden', 'true');
            modalContent.removeAttribute('role');
            modalContent.removeAttribute('aria-modal');
            modalContent.innerHTML = '';
        }

        function openBookingModal(preselectedService) {
            modalContent.className = "bg-white rounded-3xl max-w-lg w-full p-6 sm:p-9 shadow-2xl relative border border-[#E8E4DC] max-h-[90vh] overflow-y-auto";
            modalContent.setAttribute("role", "dialog");
            modalContent.setAttribute("aria-modal", "true");
            modalContent.innerHTML = `
                <button onclick="closeModal()" class="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#1E242B] hover:bg-gray-100 transition-colors cursor-pointer border border-[#E8E4DC]" aria-label="Close modal">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                </button>
                <div class="flex items-center gap-3.5 mb-6">
                    <div class="w-13 h-13 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v3"></path><path d="M16 2v3"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path></svg>
                    </div>
                    <div>
                        <h3 class="font-serif-heading font-bold text-xl text-[#1E242B]">Book OPD Consultation</h3>
                        <p class="text-xs text-[#5A6472]">Sai Nest Hospital • Dr. Sargam Dev Soni</p>
                    </div>
                </div>
                <form id="booking-form" onsubmit="handleBookingSubmit(event)" class="space-y-4">
                    <div>
                        <label for="b-name" class="block text-xs font-bold text-[#1E242B] mb-1.5">Patient Full Name *</label>
                        <input type="text" id="b-name" required placeholder="Enter patient full name" class="w-full px-4.5 py-3 rounded-2xl border border-[#E8E4DC] text-sm focus:outline-none focus:border-primary bg-[#FAF9F6] shadow-2xs">
                    </div>
                    <div>
                        <label for="b-phone" class="block text-xs font-bold text-[#1E242B] mb-1.5">Mobile Number (WhatsApp) *</label>
                        <input type="tel" id="b-phone" required placeholder="e.g. 9820012345" class="w-full px-4.5 py-3 rounded-2xl border border-[#E8E4DC] text-sm focus:outline-none focus:border-primary bg-[#FAF9F6] shadow-2xs">
                    </div>
                    <div>
                        <label for="b-service" class="block text-xs font-bold text-[#1E242B] mb-1.5">Select Specialty / Service *</label>
                        <select id="b-service" class="w-full px-4.5 py-3 rounded-2xl border border-[#E8E4DC] text-sm focus:outline-none focus:border-primary bg-[#FAF9F6] shadow-2xs">
                            ${servicesData.map(s => `<option value="${s.title}" ${s.title === preselectedService ? 'selected' : ''}>${s.title}</option>`).join('')}
                        </select>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label for="b-date" class="block text-xs font-bold text-[#1E242B] mb-1.5">Preferred Date *</label>
                            <input type="date" id="b-date" required class="w-full px-4.5 py-3 rounded-2xl border border-[#E8E4DC] text-sm focus:outline-none focus:border-primary bg-[#FAF9F6] shadow-2xs">
                        </div>
                        <div>
                            <label for="b-slot" class="block text-xs font-bold text-[#1E242B] mb-1.5">Time Slot *</label>
                            <select id="b-slot" class="w-full px-4.5 py-3 rounded-2xl border border-[#E8E4DC] text-sm focus:outline-none focus:border-primary bg-[#FAF9F6] shadow-2xs">
                                <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                                <option value="Evening (6 PM - 9 PM)">Evening (6 PM - 9 PM)</option>
                                <option value="Emergency / Urgent">Emergency / Urgent</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="b-notes" class="block text-xs font-bold text-[#1E242B] mb-1.5">Medical Notes or Symptoms (Optional)</label>
                        <textarea id="b-notes" rows="3" placeholder="Briefly describe your symptoms or consultation requirement..." class="w-full px-4.5 py-3 rounded-2xl border border-[#E8E4DC] text-sm focus:outline-none focus:border-primary bg-[#FAF9F6] shadow-2xs"></textarea>
                    </div>
                    <div class="pt-2">
                        <button type="submit" class="bg-primary hover:bg-primary-dark text-white w-full py-4 rounded-2xl text-sm font-bold shadow-lg cursor-pointer flex items-center justify-center gap-2 transition-all">
                            <span>Confirm & Submit Appointment Request</span>
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </button>
                    </div>
                </form>
            `;
            backdrop.classList.remove('hidden');
            backdrop.setAttribute('aria-hidden', 'false');
        }

        function handleBookingSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('b-name').value;
            const phone = document.getElementById('b-phone').value;
            const service = document.getElementById('b-service').value;
            const date = document.getElementById('b-date').value;
            const slot = document.getElementById('b-slot').value;

            modalContent.innerHTML = `
                <div class="text-center py-8 space-y-4">
                    <div class="w-18 h-18 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                        <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <h3 class="font-serif-heading font-bold text-2xl text-[#1E242B]">Appointment Request Received!</h3>
                    <p class="text-sm text-[#5A6472] leading-relaxed max-w-sm mx-auto font-light">
                        Thank you, <strong class="text-[#1E242B]">${name}</strong>. Our reception desk at Sai Nest Hospital has received your booking request for <strong class="text-[#1E242B]">${service}</strong> on <strong class="text-[#1E242B]">${date}</strong> (${slot}).
                    </p>
                    <div class="bg-[#FAF9F6] p-4.5 rounded-2xl border border-[#E8E4DC] text-xs text-[#5A6472] font-light">
                        We will call you shortly at <span class="font-bold text-[#1E242B]">${phone}</span> to confirm your time slot. For immediate assistance, call <a href="tel:+918928031080" class="text-primary font-bold">+91 8928031080</a>.
                    </div>
                    <div class="pt-4 flex gap-3">
                        <a href="https://wa.me/918928031080?text=Hello%20Dr.%20Sargam%20Soni%2C%20my%20name%20is%20${encodeURIComponent(name)}.%20I%20have%20submitted%20an%20OPD%20appointment%20request%20for%20${encodeURIComponent(service)}%20on%20${encodeURIComponent(date)}." target="_blank" rel="noopener noreferrer" class="bg-green-700 hover:bg-green-800 text-white flex-1 py-3.5 rounded-2xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md" aria-label="Confirm via WhatsApp">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                            <span>Confirm via WhatsApp</span>
                        </a>
                        <button onclick="closeModal()" class="bg-white text-[#1E242B] border border-[#E8E4DC] flex-1 py-3.5 rounded-2xl text-xs font-bold cursor-pointer hover:bg-gray-50">
                            Close
                        </button>
                    </div>
                </div>
            `;
        }

        function openServiceModal(serviceId) {
            const service = servicesData.find(s => s.id === serviceId);
            if (!service) return;

            modalContent.className = "bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative border border-[#E8E4DC] max-h-[90vh] overflow-y-auto text-left";
            modalContent.innerHTML = `
                <button onclick="closeModal()" class="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#1E242B] hover:bg-gray-100 transition-colors cursor-pointer border border-[#E8E4DC]" aria-label="Close modal">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                </button>
                <div class="flex items-center gap-4.5 mb-6">
                    <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-inner">
                        ${iconSvg(service.icon, "w-8 h-8")}
                    </div>
                    <div>
                        <span class="text-xs font-bold text-primary uppercase tracking-wider">Clinical Specialty</span>
                        <h3 class="font-serif-heading font-bold text-2xl text-[#1E242B]">${service.title}</h3>
                    </div>
                </div>
                <div class="space-y-6 text-sm text-[#4A5568]">
                    <div>
                        <h4 class="font-bold text-xs uppercase tracking-wider text-[#1E242B] mb-2">Overview</h4>
                        <p class="leading-relaxed text-[#5A6472] font-light">${service.fullDesc}</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-xs uppercase tracking-wider text-[#1E242B] mb-2.5">Common Symptoms & Indicators</h4>
                        <ul class="space-y-2">
                            ${service.commonSymptoms.map(sym => `<li class="flex items-start gap-2.5 font-light"><span class="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></span><span>${sym}</span></li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-xs uppercase tracking-wider text-[#1E242B] mb-2.5">Treatments & Procedures</h4>
                        <ul class="space-y-2">
                            ${service.treatments.map(tr => `<li class="flex items-start gap-2.5"><div class="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 shrink-0"><svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div><span class="font-medium text-[#1E242B]">${tr}</span></li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-xs uppercase tracking-wider text-[#1E242B] mb-2.5">Key Clinical Benefits</h4>
                        <div class="grid grid-cols-1 gap-2.5">
                            ${service.keyBenefits.map(ben => `<div class="bg-[#FAF9F6] p-3.5 rounded-2xl border border-[#E8E4DC] text-xs font-medium text-[#1E242B] flex items-center gap-3"><svg class="w-4 h-4 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg><span>${ben}</span></div>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="mt-8 pt-6 border-t border-[#E8E4DC] flex items-center justify-between">
                    <button onclick="closeModal()" class="bg-white hover:bg-gray-50 text-[#1E242B] border border-[#E8E4DC] px-5.5 py-3 rounded-2xl text-xs font-semibold cursor-pointer">
                        Close
                    </button>
                    <button onclick="closeModal(); openBookingModal('${service.title}');" class="bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-2xl text-xs font-bold cursor-pointer shadow-md">
                        Book OPD Slot for ${service.title}
                    </button>
                </div>
            `;
            backdrop.classList.remove('hidden');
            backdrop.setAttribute('aria-hidden', 'false');
        }

        function openBlogModal(blogId) {
            const blog = blogData.find(b => b.id === blogId);
            if (!blog) return;

            modalContent.className = "bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative border border-[#E8E4DC] max-h-[90vh] overflow-y-auto text-left";
            modalContent.innerHTML = `
                <button onclick="closeModal()" class="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#1E242B] hover:bg-gray-100 transition-colors cursor-pointer border border-[#E8E4DC]" aria-label="Close modal">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                </button>
                <div class="space-y-4">
                    <div class="flex items-center gap-3 text-xs text-[#5A6472]">
                        <span class="font-semibold text-primary px-2.5 py-1 rounded-full bg-primary/10">${blog.category}</span>
                        <span>•</span>
                        <span>${blog.date}</span>
                        <span>•</span>
                        <span>${blog.readTime}</span>
                    </div>
                    <h2 class="font-serif-heading font-bold text-2xl text-[#1E242B] leading-snug">${blog.title}</h2>
                    <div class="space-y-4 pt-4 text-[#4A5568] text-sm sm:text-base leading-relaxed border-t border-[#F0EBE1] font-light">
                        ${blog.content.map(p => `<p>${p}</p>`).join('')}
                    </div>
                    <div class="flex flex-wrap gap-2 pt-4">
                        ${blog.tags.map(tag => `<span class="px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E8E4DC] text-xs font-semibold text-[#1E242B]">#${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="mt-8 pt-6 border-t border-[#E8E4DC] flex justify-end">
                    <button onclick="closeModal()" class="bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-2xl text-xs font-bold cursor-pointer shadow-md">
                        Close Article
                    </button>
                </div>
            `;
            backdrop.classList.remove('hidden');
            backdrop.setAttribute('aria-hidden', 'false');
        }
    
        // Global Escape key listener for modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

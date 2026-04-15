const questions = [
    {
        hint: "يرتبط هذا التاريخ برحيل أحد أعظم علماء الجزائر.",
        question: "ما هو الحدث التاريخي الذي يخلده 'يوم العلم' في الجزائر في 16 أفريل من كل عام؟",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Abdelhamid_Ben_Badis.jpg/800px-Abdelhamid_Ben_Badis.jpg",
        options: [
            "ذكرى تأسيس جمعية العلماء المسلمين الجزائريين عام 1931.",
            "ذكرى وفاة رائد النهضة الإصلاحية الشيخ عبد الحميد بن باديس عام 1940.",
            "ذكرى افتتاح أول مدرسة حديثة تابعة للجمعية في مدينة قسنطينة."
        ],
        answer: 1
    },
    {
        hint: "ولِد هذا العالم الجليل في مدينة الجسور المعلقة.",
        question: "أين وُلِد الشيخ عبد الحميد بن باديس؟",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pont_Sidi_M%27Cid.jpg/1024px-Pont_Sidi_M%27Cid.jpg",
        options: [
            "مدينة قسنطينة.",
            "مدينة الجزائر العاصمة.",
            "مدينة تلمسان."
        ],
        answer: 0
    },
    {
        hint: "كان هدفها الحفاظ على الهوية الجزائرية واللغة العربية.",
        question: "ما هو اسم الجمعية التي أسسها ابن باديس عام 1931؟",
        image: "https://upload.wikimedia.org/wikipedia/ar/5/52/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9_%D8%A7%D9%84%D8%B9%D9%84%D9%85%D8%A7%D8%A1_%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85%D9%8A%D9%86_%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1%D9%8A%D9%8A%D9%81.png",
        options: [
            "جمعية الهلال الأحمر الجزائري.",
            "جمعية العلماء المسلمين الجزائريين.",
            "اتحاد المثقفين الجزائريين."
        ],
        answer: 1
    },
    {
        hint: "جامعة عريقة في تونس درس فيها الشيخ عبد الحميد.",
        question: "أين تلقى الشيخ عبد الحميد بن باديس تعليمه العالي؟",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Mosqu%C3%A9e_Zitouna2.jpg/1024px-Mosqu%C3%A9e_Zitouna2.jpg",
        options: [
            "جامعة القرويين في المغرب.",
            "جامعة الزيتونة في تونس.",
            "جامعة الأزهر في مصر."
        ],
        answer: 1
    },
    {
        hint: "عبارة شهيرة تلخص الهوية الجزائرية.",
        question: "كيف أكمل ابن باديس قوله الشهير: 'شعب الجزائر مسلم... '؟",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Stamp_of_Algeria_-_1990_-_Colnect_438787_-_Abdelhamid_Ben_Badis_1889-1940.jpg/402px-Stamp_of_Algeria_-_1990_-_Colnect_438787_-_Abdelhamid_Ben_Badis_1889-1940.jpg",
        options: [
            "وإلى العروبة ينتسب.",
            "وبالعلم يرتقي.",
            "وللحرية يطلب."
        ],
        answer: 0
    },
    {
        hint: "كانت لسان حال الجمعية وتنشر الوعي بين الجزائريين.",
        question: "ما اسم المجلة الشهيرة التي أصدرها ابن باديس؟",
        image: "hero.png",
        options: [
            "مجلة الشروق.",
            "مجلة الشهاب.",
            "مجلة الوعي."
        ],
        answer: 1
    },
    {
        hint: "خلف ابن باديس في رئاسة الجمعية وكان رفيق دربه.",
        question: "من هو العالم الذي تولى رئاسة الجمعية بعد وفاة ابن باديس؟",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Mohamed_Bachir_El_Ibrahimi.jpg",
        options: [
            "الشيخ الطيب العقبي.",
            "الشيخ محمد البشير الإبراهيمي.",
            "الشيخ مبارك الميلي."
        ],
        answer: 1
    },
    {
        hint: "أحد أبرز أعضاء الجمعية ومؤلف كتاب 'تاريخ الجزائر في القديم والحديث'.",
        question: "من هو العالم الملقب بمؤرخ النهضة الجزائرية؟",
        image: "https://upload.wikimedia.org/wikipedia/ar/d/d3/%D8%A7%D9%84%D8%B4%D9%8A%D8%AE_%D9%85%D8%A8%D8%A7%D8%B1%D9%83_%D8%A7%D9%84%D9%85%D9%8A%D9%84%D9%8A.jpg",
        options: [
            "الشيخ مبارك الميلي.",
            "الشيخ العربي التبسي.",
            "الشيخ الفضيل الورتيلاني."
        ],
        answer: 0
    },
    {
        hint: "شعار الجمعية الذي يركز على الدين واللغة والوطن.",
        question: "ما هو شعار جمعية العلماء المسلمين الجزائريين؟",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1200px-Flag_of_Algeria.svg.png",
        options: [
            "العلم نور والجهل ظلام.",
            "الإسلام ديننا، العربية لغتنا، الجزائر وطننا.",
            "الجزائر أولاً وأخيراً."
        ],
        answer: 1
    },
    {
        hint: "سنة مهمة في تاريخ النهضة والإصلاح.",
        question: "في أي سنة تم تأسيس جمعية العلماء المسلمين الجزائريين؟",
        image: "hero.png",
        options: [
            "عام 1920.",
            "عام 1931.",
            "عام 1945."
        ],
        answer: 1
    }
];

/**
 * ==============================================================================
 * Moving Up 1: Critical Reading (ม.4) - Master Exercise Dataset
 * Application Version: v1.0.5-marine (Book Code: MU-B1)
 * Publisher: สำนักพิมพ์ไทยวัฒนาพานิช (TWP) & WorldCom ELT
 * Author: Brady Fotheringham
 * ------------------------------------------------------------------------------
 * Zero Shared Dependencies | Fully Scoped Dataset | 10 Units x 3 Parts (150 Items)
 * ==============================================================================
 */

const APP_META = {
  "bookCode": "MU-B1",
  "version": "1.0.4",
  "buildTag": "v1.0.4-marine",
  "title": "Moving Up 1: Critical Reading",
  "level": "ชั้นมัธยมศึกษาปีที่ 4 (Grade 10)",
  "publisher": "สำนักพิมพ์ไทยวัฒนาพานิช (ทวพ)",
  "themePrimary": "#003865",
  "themeAccent": "#f59e0b",
  "totalUnits": 10,
  "totalItems": 150
};

const PRODUCT_COVERS = [
  {
    "id": "mu1",
    "title": "Moving Up 1: Critical Reading",
    "level": "ม.4 (Grade 10)",
    "series": "Moving Up",
    "image": "assets/images/covers/mu1.jpg",
    "tag": "เล่มปัจจุบัน"
  },
  {
    "id": "mu2",
    "title": "Moving Up 2: Critical Reading",
    "level": "ม.5 (Grade 11)",
    "series": "Moving Up",
    "image": "assets/images/covers/mu2.jpg",
    "tag": "ม.5 เล่มถัดไป"
  },
  {
    "id": "mu3",
    "title": "Moving Up 3: Critical Reading",
    "level": "ม.6 (Grade 12)",
    "series": "Moving Up",
    "image": "assets/images/covers/mu3.jpg",
    "tag": "ม.6 เล่มจบ"
  },
  {
    "id": "nw1",
    "title": "NEW Weaving It Together 1",
    "level": "ม.4 (Grade 10)",
    "series": "New Weaving",
    "image": "assets/images/covers/nw1.jpg",
    "tag": "Bestseller"
  },
  {
    "id": "nw2",
    "title": "NEW Weaving It Together 2",
    "level": "ม.5 (Grade 11)",
    "series": "New Weaving",
    "image": "assets/images/covers/nw2.jpg",
    "tag": "Bestseller"
  },
  {
    "id": "nw3",
    "title": "NEW Weaving It Together 3",
    "level": "ม.6 (Grade 12)",
    "series": "New Weaving",
    "image": "assets/images/covers/nw3.jpg",
    "tag": "Bestseller"
  },
  {
    "id": "step1",
    "title": "Step Up 1: Reading & Writing",
    "level": "ม.1 (Grade 7)",
    "series": "Step Up",
    "image": "assets/images/covers/step1.jpg",
    "tag": "หลักสูตรแกนกลาง"
  },
  {
    "id": "step2",
    "title": "Step Up 2: Reading & Writing",
    "level": "ม.2 (Grade 8)",
    "series": "Step Up",
    "image": "assets/images/covers/step2.jpg",
    "tag": "หลักสูตรแกนกลาง"
  },
  {
    "id": "step3",
    "title": "Step Up 3: Reading & Writing",
    "level": "ม.3 (Grade 9)",
    "series": "Step Up",
    "image": "assets/images/covers/step3.jpg",
    "tag": "หลักสูตรแกนกลาง"
  }
];

const DEFAULT_EXERCISES = [
  {
    "id": 1,
    "unit": 1,
    "title": "Two Sides of the Same Story",
    "skill": "Main Idea",
    "skill_desc": "For main idea, students should be able to identify the most important idea or message of the text.",
    "cover": "assets/images/ex1.jpg",
    "audio": "assets/audio/ex1.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 26
      },
      {
        "start": 26,
        "end": 48
      },
      {
        "start": 48,
        "end": 67.2
      },
      {
        "start": 67.2,
        "end": 82
      }
    ],
    "passage": [
      "When we read something online, we often think we are getting the complete story. However, two people can describe the same event in very different ways. They may choose different facts to include or use different words to describe what happened. This does not always mean that one person is lying. Sometimes, people simply see the same situation from different points of view.",
      "Imagine that a school holds a music festival. One student writes, “The festival was a great success. Hundreds of students came and enjoyed the performances.” Another student writes, “The festival was too crowded, and many people had to wait a long time to buy food.” Both students attended the same event, but they focused on different experiences.",
      "This is why good readers should not depend on only one source. When possible, they should compare information from different places and look for facts that appear in more than one source. They should also notice whether a writer is sharing a fact or a personal opinion. Asking questions can help readers understand a story more clearly.",
      "Critical reading does not mean that we should believe nothing. Instead, it means that we should think carefully before deciding what to believe. By looking at different points of view and checking the information, we can develop a more complete understanding of a situation."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What is the main idea of the passage?",
        "options": [
          "Different people may describe the same situation differently.",
          "School festivals are usually too crowded.",
          "People should not trust anything they read online."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Different people may describe the same situation differently.\" ซึ่งตรงกับทักษะ Main Idea"
      },
      {
        "id": 2,
        "question": "Why does the writer give the example of the music festival?",
        "options": [
          "To show how to organize a successful event",
          "To explain how different viewpoints can change a story",
          "To show that students enjoy music festivals"
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"To explain how different viewpoints can change a story\" ซึ่งตรงกับทักษะ Main Idea"
      },
      {
        "id": 3,
        "question": "What is the main idea of the third paragraph?",
        "options": [
          "Readers should compare different sources and check information.",
          "Personal opinions are more important than facts.",
          "Readers should always trust the first source they find."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Readers should compare different sources and check information.\" ซึ่งตรงกับทักษะ Main Idea"
      },
      {
        "id": 4,
        "question": "What does the writer want readers to learn about critical reading?",
        "options": [
          "We should find mistakes in every text we read.",
          "We should avoid reading other people's opinions.",
          "We should think carefully before deciding what to believe."
        ],
        "answer": 2,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"We should think carefully before deciding what to believe.\" ซึ่งตรงกับทักษะ Main Idea"
      },
      {
        "id": 5,
        "question": "Which title best expresses the main idea of the passage?",
        "options": [
          "A Successful School Festival",
          "Looking at More Than One Side",
          "Why People Disagree"
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Looking at More Than One Side\" ซึ่งตรงกับทักษะ Main Idea"
      }
    ],
    "wordBank": {
      "words": [
        "compare",
        "evidence",
        "opinion",
        "source",
        "viewpoint"
      ],
      "scrambledWords": [
        "viewpoint",
        "compare",
        "source",
        "evidence",
        "opinion"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Before believing a story, check if the __________ is reliable.",
          "answer": "source"
        },
        {
          "id": 2,
          "sentence": "Good readers __________ information from different places.",
          "answer": "compare"
        },
        {
          "id": 3,
          "sentence": "A writer should provide __________ to support a claim.",
          "answer": "evidence"
        },
        {
          "id": 4,
          "sentence": "An __________ expresses what someone thinks or feels about something.",
          "answer": "opinion"
        },
        {
          "id": 5,
          "sentence": "People can have a different __________ about the same event.",
          "answer": "viewpoint"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "People may understand the same event in different ways.",
        "tokens": [
          "the same event",
          "People",
          "in different ways",
          "may understand"
        ],
        "shuffledTokens": [
          "in different ways.",
          "may understand",
          "People",
          "the same event"
        ]
      },
      {
        "id": 2,
        "target": "Personal experiences can affect how people tell a story.",
        "tokens": [
          "Personal experiences",
          "can affect",
          "how",
          "people",
          "tell a story"
        ],
        "shuffledTokens": [
          "people",
          "tell a story.",
          "Personal experiences",
          "how",
          "can affect"
        ]
      },
      {
        "id": 3,
        "target": "Reading different sources can give you a clearer picture.",
        "tokens": [
          "can give",
          "Reading",
          "a clearer picture",
          "different sources",
          "you"
        ],
        "shuffledTokens": [
          "different sources",
          "a clearer picture.",
          "Reading",
          "you",
          "can give"
        ]
      },
      {
        "id": 4,
        "target": "Good readers can separate facts from personal opinions.",
        "tokens": [
          "personal opinions",
          "can separate",
          "from",
          "facts",
          "Good readers"
        ],
        "shuffledTokens": [
          "personal opinions.",
          "can separate",
          "facts from",
          "Good readers"
        ]
      },
      {
        "id": 5,
        "target": "Asking questions helps us understand information more clearly.",
        "tokens": [
          "more clearly",
          "helps us",
          "understand",
          "Asking questions",
          "information"
        ],
        "shuffledTokens": [
          "information",
          "understand",
          "Asking questions",
          "helps us",
          "more clearly."
        ]
      }
    ]
  },
  {
    "id": 2,
    "unit": 2,
    "title": "What Does “Healthy” Really Mean?",
    "skill": "Facts and details",
    "skill_desc": "For facts and details, students should be able to find specific facts and details that are directly stated in the text.",
    "cover": "assets/images/ex2.jpg",
    "audio": "assets/audio/ex2.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 21.5
      },
      {
        "start": 21.5,
        "end": 46.5
      },
      {
        "start": 46.5,
        "end": 65.5
      },
      {
        "start": 65.5,
        "end": 76.5
      }
    ],
    "passage": [
      "When people buy food or drinks, they often look at the words on the front of the package. Some products use phrases such as “natural,” “low fat,” or “high in protein.” These words can make a product sound healthy. However, they do not always tell the whole story about what is inside the package.",
      "For example, a breakfast drink may say that it contains vitamins and real fruit. However, it may also contain a large amount of sugar. A snack marked “low fat” may still have a lot of salt or sugar. This does not mean that these products are always unhealthy, but shoppers should look at more than the large words on the front.",
      "One useful habit is to read the nutrition information and ingredient list. The ingredient list shows what was used to make the product, while the nutrition information tells you about things such as sugar, fat, and protein. Comparing two similar products can also help shoppers understand the differences between them.",
      "Food packages are designed to attract attention and encourage people to buy products. Therefore, careful shoppers should not make decisions based only on attractive pictures or simple claims. Reading the details can help them make choices based on better information."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What words may appear on the front of food packages?",
        "options": [
          "Natural, low fat, or high in protein",
          "Expensive, cheap, or popular",
          "Fresh, delicious, or homemade"
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Natural, low fat, or high in protein\" ซึ่งตรงกับทักษะ Facts and details"
      },
      {
        "id": 2,
        "question": "What may a breakfast drink contain besides vitamins and fruit?",
        "options": [
          "A large amount of sugar",
          "Too much protein",
          "No ingredients at all"
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"A large amount of sugar\" ซึ่งตรงกับทักษะ Facts and details"
      },
      {
        "id": 3,
        "question": "What does an ingredient list show?",
        "options": [
          "Where the product is sold",
          "What was used to make the product",
          "How popular the product is"
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"What was used to make the product\" ซึ่งตรงกับทักษะ Facts and details"
      },
      {
        "id": 4,
        "question": "Why is it useful to compare two similar products?",
        "options": [
          "To find the most attractive package",
          "To understand the differences between them",
          "To decide which company is more famous"
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"To understand the differences between them\" ซึ่งตรงกับทักษะ Facts and details"
      },
      {
        "id": 5,
        "question": "According to the passage, what should shoppers do before making a choice?",
        "options": [
          "Choose products with colorful packages",
          "Believe the words on the front of the package",
          "Read the details about the product"
        ],
        "answer": 2,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Read the details about the product\" ซึ่งตรงกับทักษะ Facts and details"
      }
    ],
    "wordBank": {
      "words": [
        "ingredients",
        "compare",
        "package",
        "nutrition",
        "attract"
      ],
      "scrambledWords": [
        "package",
        "ingredients",
        "attract",
        "compare",
        "nutrition"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Food companies design their products to __________ customers’ attention.",
          "answer": "attract"
        },
        {
          "id": 2,
          "sentence": "The __________ list tells us what is used to make a food product.",
          "answer": "ingredients"
        },
        {
          "id": 3,
          "sentence": "Shoppers should __________ similar products before making a choice.",
          "answer": "compare"
        },
        {
          "id": 4,
          "sentence": "The __________ information shows the amount of sugar, fat, and protein.",
          "answer": "nutrition"
        },
        {
          "id": 5,
          "sentence": "Words on the front of a __________ may not tell the whole story.",
          "answer": "package"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Reading food labels can help you make better choices.",
        "tokens": [
          "Reading food labels",
          "can help",
          "you",
          "make",
          "better choices"
        ],
        "shuffledTokens": [
          "can help",
          "Reading food labels",
          "make",
          "better choices.",
          "you"
        ]
      },
      {
        "id": 2,
        "target": "A product that looks healthy may still contain a lot of sugar.",
        "tokens": [
          "A product",
          "that looks healthy",
          "may still contain",
          "a lot of",
          "sugar"
        ],
        "shuffledTokens": [
          "that looks healthy",
          "A product",
          "a lot of",
          "sugar.",
          "may still contain"
        ]
      },
      {
        "id": 3,
        "target": "Shoppers should check the ingredients before buying a product.",
        "tokens": [
          "should check",
          "before",
          "the ingredients",
          "Shoppers",
          "buying a product"
        ],
        "shuffledTokens": [
          "buying a product.",
          "the ingredients",
          "should check",
          "before",
          "Shoppers"
        ]
      },
      {
        "id": 4,
        "target": "Nutrition information provides useful details about a food product.",
        "tokens": [
          "a food product",
          "Nutrition information",
          "useful details",
          "about",
          "provides"
        ],
        "shuffledTokens": [
          "provides",
          "about",
          "Nutrition information",
          "a food product.",
          "useful details"
        ]
      },
      {
        "id": 5,
        "target": "Colorful packaging can influence what people decide to buy.",
        "tokens": [
          "can influence",
          "decide to buy",
          "Colorful packaging",
          "what people"
        ],
        "shuffledTokens": [
          "decide to buy.",
          "can influence",
          "what people",
          "Colorful packaging"
        ]
      }
    ]
  },
  {
    "id": 3,
    "unit": 3,
    "title": "What Happens to a Plastic Bottle After Recycling?",
    "skill": "Sequence of events",
    "skill_desc": "For sequences of events, student should be able to Identify the order in which events or steps happen.",
    "cover": "assets/images/ex3.jpg",
    "audio": "assets/audio/ex3.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 22.5
      },
      {
        "start": 22.5,
        "end": 42.8
      },
      {
        "start": 42.8,
        "end": 58.5
      },
      {
        "start": 58.5,
        "end": 78.5
      }
    ],
    "passage": [
      "Many people put empty plastic bottles into recycling bins, but what happens to them next? Recycling a plastic bottle involves several steps before the material can be used again. The process begins when recycling trucks collect bottles and other recyclable waste from homes, schools, and public places.",
      "First, the waste is taken to a recycling center, where different materials are separated. Plastic bottles are sorted by type and color. Next, the bottles are cleaned to remove labels, dirt, and leftover liquid. After they are clean, machines cut the bottles into many small plastic pieces called flakes.",
      "The plastic flakes are then washed again and dried. After that, they are heated until they melt. The melted plastic is formed into small pieces called pellets. These pellets can be sent to factories and used as material for making new products.",
      "Finally, the recycled plastic may become new bottles, clothing, bags, or other useful items. Recycling does not completely solve the problem of plastic waste, but it can reduce the amount of new plastic that needs to be produced. Understanding this process also shows why correctly sorting waste is important."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What happens first after plastic waste arrives at a recycling center?",
        "options": [
          "It is melted.",
          "Different materials are separated.",
          "It is made into new bottles."
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Different materials are separated.\" ซึ่งตรงกับทักษะ Sequence of events"
      },
      {
        "id": 2,
        "question": "What happens after the plastic bottles are sorted?",
        "options": [
          "They are cleaned.",
          "They are sent to shops.",
          "They are heated."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"They are cleaned.\" ซึ่งตรงกับทักษะ Sequence of events"
      },
      {
        "id": 3,
        "question": "When are plastic bottles cut into small flakes?",
        "options": [
          "Before they are collected",
          "After they are cleaned",
          "After they become pellets"
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"After they are cleaned\" ซึ่งตรงกับทักษะ Sequence of events"
      },
      {
        "id": 4,
        "question": "What happens after the plastic flakes are washed and dried?",
        "options": [
          "They are thrown away.",
          "They are mixed with paper.",
          "They are heated and melted."
        ],
        "answer": 2,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"They are heated and melted.\" ซึ่งตรงกับทักษะ Sequence of events"
      },
      {
        "id": 5,
        "question": "Which sequence is correct?",
        "options": [
          "Sort → Clean → Cut → Melt → Make pellets",
          "Clean → Melt → Sort → Cut → Make pellets",
          "Sort → Melt → Clean → Make pellets → Cut"
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Sort → Clean → Cut → Melt → Make pellets\" ซึ่งตรงกับทักษะ Sequence of events"
      }
    ],
    "wordBank": {
      "words": [
        "collect",
        "separated",
        "flakes",
        "melted",
        "pellets"
      ],
      "scrambledWords": [
        "flakes",
        "melted",
        "pellets",
        "collect",
        "separated"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Recycling trucks __________ plastic bottles from different places.",
          "answer": "collect"
        },
        {
          "id": 2,
          "sentence": "At the recycling center, different materials are __________ from each other.",
          "answer": "separated"
        },
        {
          "id": 3,
          "sentence": "Machines cut clean plastic bottles into small pieces called __________.",
          "answer": "flakes"
        },
        {
          "id": 4,
          "sentence": "The plastic is heated until it is completely __________.",
          "answer": "melted"
        },
        {
          "id": 5,
          "sentence": "The melted plastic is formed into small pieces called __________.",
          "answer": "pellets"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Recycling helps reduce plastic waste in the environment.",
        "tokens": [
          "Recycling",
          "plastic waste",
          "helps reduce",
          "in the environment"
        ],
        "shuffledTokens": [
          "in the environment.",
          "Recycling",
          "plastic waste",
          "helps reduce"
        ]
      },
      {
        "id": 2,
        "target": "Different types of waste are separated at recycling centers.",
        "tokens": [
          "recycling centers",
          "are separated",
          "Different types of waste",
          "at"
        ],
        "shuffledTokens": [
          "at",
          "Different types of waste",
          "are separated",
          "recycling centers."
        ]
      },
      {
        "id": 3,
        "target": "Recycled materials can be used to create new products.",
        "tokens": [
          "new products",
          "can be used",
          "Recycled materials",
          "to create"
        ],
        "shuffledTokens": [
          "can be used",
          "Recycled materials",
          "to create",
          "new products."
        ]
      },
      {
        "id": 4,
        "target": "Plastic waste can harm animals and the environment.",
        "tokens": [
          "can harm",
          "Plastic waste",
          "the environment",
          "animals and"
        ],
        "shuffledTokens": [
          "animals and",
          "can harm",
          "Plastic waste",
          "the environment."
        ]
      },
      {
        "id": 5,
        "target": "Recycling can reduce the need to produce new plastic.",
        "tokens": [
          "to produce",
          "Recycling",
          "the need",
          "new plastic",
          "can reduce"
        ],
        "shuffledTokens": [
          "the need",
          "to produce",
          "new plastic.",
          "can reduce",
          "Recycling"
        ]
      }
    ]
  },
  {
    "id": 4,
    "unit": 4,
    "title": "What Happens When Arctic Ice Melts?",
    "skill": "Cause and effect",
    "skill_desc": "For cause and effect, students should be able to identify what causes something to happen and what happens as a result.",
    "cover": "assets/images/ex4.jpg",
    "audio": "assets/audio/ex4.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 21
      },
      {
        "start": 21,
        "end": 39.5
      },
      {
        "start": 39.5,
        "end": 60.8
      },
      {
        "start": 60.8,
        "end": 77
      }
    ],
    "passage": [
      "The Arctic is the region around the North Pole. Much of the Arctic Ocean is covered by sea ice, especially during the winter. However, as the Earth becomes warmer, more of this ice melts during the summer. Higher temperatures also make it more difficult for the ice to grow back during the colder months.",
      "Melting ice can affect animals that live in the Arctic. Polar bears, for example, use sea ice to travel and hunt for food. When there is less ice, they may need to travel farther to find food. Other animals, such as seals, also depend on sea ice for resting and raising their young.",
      "The loss of Arctic ice can also affect the Earth's temperature. Ice has a bright surface that reflects sunlight back into space. Dark ocean water absorbs more heat. Therefore, when ice disappears, the ocean absorbs more energy from the sun. This can cause the Arctic to become even warmer and lead to more melting.",
      "Changes in the Arctic can have effects beyond the North Pole. Scientists continue to study how these changes may influence weather, oceans, and ecosystems around the world. Reducing greenhouse gas emissions can help slow global warming and protect the Arctic environment."
    ],
    "partA": [
      {
        "id": 1,
        "question": "Why is more Arctic ice melting during summer?",
        "options": [
          "Animals are breaking the ice.",
          "The Earth is becoming warmer.",
          "The ocean is becoming smaller."
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"The Earth is becoming warmer.\" ซึ่งตรงกับทักษะ Cause and effect"
      },
      {
        "id": 2,
        "question": "What can happen when there is less sea ice for polar bears?",
        "options": [
          "They spend more time in trees.",
          "They can find food more easily.",
          "They may need to travel farther for food."
        ],
        "answer": 2,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"They may need to travel farther for food.\" ซึ่งตรงกับทักษะ Cause and effect"
      },
      {
        "id": 3,
        "question": "Why does the ocean absorb more heat when sea ice disappears?",
        "options": [
          "Dark ocean water absorbs more energy from sunlight.",
          "Sea animals produce more heat.",
          "The ocean becomes shallower."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Dark ocean water absorbs more energy from sunlight.\" ซึ่งตรงกับทักษะ Cause and effect"
      },
      {
        "id": 4,
        "question": "What can happen when the ocean absorbs more heat?",
        "options": [
          "More sea ice forms immediately.",
          "The Arctic becomes darker and colder.",
          "The Arctic may become even warmer."
        ],
        "answer": 2,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"The Arctic may become even warmer.\" ซึ่งตรงกับทักษะ Cause and effect"
      },
      {
        "id": 5,
        "question": "Which cause-and-effect relationship is correct?",
        "options": [
          "Less sea ice → lower ocean temperatures",
          "Higher temperatures → more Arctic ice melts",
          "More greenhouse gases → more sea ice forms"
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Higher temperatures → more Arctic ice melts\" ซึ่งตรงกับทักษะ Cause and effect"
      }
    ],
    "wordBank": {
      "words": [
        "absorbs",
        "melting",
        "reflects",
        "temperatures",
        "protect"
      ],
      "scrambledWords": [
        "melting",
        "absorbs",
        "protect",
        "reflects",
        "temperatures"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Higher __________ can cause more Arctic ice to melt.",
          "answer": "temperatures"
        },
        {
          "id": 2,
          "sentence": "The bright surface of ice __________ sunlight back into space.",
          "answer": "reflects"
        },
        {
          "id": 3,
          "sentence": "Dark ocean water __________ more heat from the sun.",
          "answer": "absorbs"
        },
        {
          "id": 4,
          "sentence": "Warmer conditions can lead to more ice __________ in the Arctic.",
          "answer": "melting"
        },
        {
          "id": 5,
          "sentence": "Reducing greenhouse gas emissions can help __________ the Arctic environment.",
          "answer": "protect"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Rising temperatures cause Arctic ice to disappear more rapidly.",
        "tokens": [
          "Rising temperatures",
          "cause",
          "Arctic ice",
          "to disappear",
          "more rapidly"
        ],
        "shuffledTokens": [
          "Arctic ice",
          "Rising temperatures",
          "cause",
          "more rapidly.",
          "to disappear"
        ]
      },
      {
        "id": 2,
        "target": "The loss of sea ice can affect the survival of Arctic animals.",
        "tokens": [
          "the survival of",
          "The loss of",
          "can affect",
          "sea ice",
          "Arctic animals"
        ],
        "shuffledTokens": [
          "can affect",
          "Arctic animals.",
          "The loss of",
          "the survival of",
          "sea ice"
        ]
      },
      {
        "id": 3,
        "target": "Dark ocean water absorbs more energy from the sun.",
        "tokens": [
          "Dark ocean water",
          "absorbs",
          "more energy",
          "from the sun"
        ],
        "shuffledTokens": [
          "absorbs",
          "more energy",
          "from the sun.",
          "Dark ocean water"
        ]
      },
      {
        "id": 4,
        "target": "Warmer oceans can increase the speed of ice melting.",
        "tokens": [
          "can increase",
          "the speed of",
          "Warmer oceans",
          "ice melting"
        ],
        "shuffledTokens": [
          "ice melting.",
          "Warmer oceans",
          "can increase",
          "the speed of"
        ]
      },
      {
        "id": 5,
        "target": "Many Arctic animals depend on cold environments to survive.",
        "tokens": [
          "Many Arctic animals",
          "depend on",
          "cold environments",
          "to survive"
        ],
        "shuffledTokens": [
          "to survive.",
          "cold environments",
          "depend on",
          "Many Arctic animals"
        ]
      }
    ]
  },
  {
    "id": 5,
    "unit": 5,
    "title": "City Life and Country Life",
    "skill": "Compare and contrast",
    "skill_desc": "For Compare and contrast, students should look at the information and identify how the two things are similar or different.",
    "cover": "assets/images/ex5.jpg",
    "audio": "assets/audio/ex5.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 26
      },
      {
        "start": 26,
        "end": 49.5
      },
      {
        "start": 49.5,
        "end": 69.5
      },
      {
        "start": 69.5,
        "end": 88
      }
    ],
    "passage": [
      "Living in a city and living in the countryside can offer very different experiences. Cities are usually crowded and busy, with large populations, tall buildings, and many forms of public transportation. In contrast, the countryside generally has fewer people, more open spaces, and a quieter environment. Both places can be enjoyable, but they suit different lifestyles.",
      "One advantage of city life is convenience. People often live close to schools, hospitals, shops, and entertainment. Public transportation can also make travelling easier. However, cities may have heavy traffic, noise, and air pollution. The countryside is usually more peaceful and has greater access to nature, but people may need to travel farther to reach important services.",
      "Despite these differences, city and country life also have some similarities. People in both places need places to work, study, shop, and spend their free time. Communities can also be strong in both environments. While city residents may meet many different people, those in smaller communities may develop closer relationships with their neighbours.",
      "Choosing between the city and countryside depends on a person's needs and preferences. Someone who enjoys an active lifestyle and easy access to services may prefer a city. On the other hand, someone who values peace, space, and nature may prefer the countryside. Neither lifestyle is suitable for everyone."
    ],
    "partA": [
      {
        "id": 1,
        "question": "How is the countryside different from the city?",
        "options": [
          "It usually has more public transportation.",
          "It generally has fewer people and more open space.",
          "It has more shops and entertainment."
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"It generally has fewer people and more open space.\" ซึ่งตรงกับทักษะ Compare and contrast"
      },
      {
        "id": 2,
        "question": "What is one advantage of living in a city?",
        "options": [
          "Important services are often nearby.",
          "There is usually less traffic.",
          "People have more access to nature."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Important services are often nearby.\" ซึ่งตรงกับทักษะ Compare and contrast"
      },
      {
        "id": 3,
        "question": "What do city and country life have in common?",
        "options": [
          "Both always have strong public transportation.",
          "Both have large populations.",
          "People in both places work, study, shop, and enjoy free time."
        ],
        "answer": 2,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"People in both places work, study, shop, and enjoy free time.\" ซึ่งตรงกับทักษะ Compare and contrast"
      },
      {
        "id": 4,
        "question": "How may communities in cities and the countryside differ?",
        "options": [
          "City residents may meet a wider variety of people.",
          "People in the countryside never meet their neighbours.",
          "City communities are always closer."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"City residents may meet a wider variety of people.\" ซึ่งตรงกับทักษะ Compare and contrast"
      },
      {
        "id": 5,
        "question": "Which statement best compares the two lifestyles?",
        "options": [
          "Country life is convenient because everything is nearby.",
          "City life offers convenience, while country life often offers more peace and space.",
          "City and country life provide exactly the same experience."
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"City life offers convenience, while country life often offers more peace and space.\" ซึ่งตรงกับทักษะ Compare and contrast"
      }
    ],
    "wordBank": {
      "words": [
        "convenience",
        "environment",
        "transportation",
        "peaceful",
        "communities"
      ],
      "scrambledWords": [
        "communities",
        "peaceful",
        "convenience",
        "transportation",
        "environment"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Public __________ makes it easier to travel around a city.",
          "answer": "transportation"
        },
        {
          "id": 2,
          "sentence": "Living close to shops and services offers greater __________.",
          "answer": "convenience"
        },
        {
          "id": 3,
          "sentence": "The countryside often has a quieter and more __________ atmosphere.",
          "answer": "peaceful"
        },
        {
          "id": 4,
          "sentence": "Strong __________ can develop in both cities and rural areas.",
          "answer": "communities"
        },
        {
          "id": 5,
          "sentence": "The countryside usually offers a natural __________ with more open space.",
          "answer": "environment"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "City residents usually have easy access to shops and public services.",
        "tokens": [
          "usually have",
          "to shops",
          "City residents",
          "and public services",
          "easy access"
        ],
        "shuffledTokens": [
          "easy access",
          "City residents",
          "to shops",
          "usually have",
          "and public services."
        ]
      },
      {
        "id": 2,
        "target": "Rural areas often provide a more peaceful atmosphere.",
        "tokens": [
          "often provide",
          "a more",
          "Rural areas",
          "peaceful",
          "atmosphere"
        ],
        "shuffledTokens": [
          "a more",
          "peaceful",
          "atmosphere.",
          "Rural areas",
          "often provide"
        ]
      },
      {
        "id": 3,
        "target": "Public transportation is generally more available in large cities.",
        "tokens": [
          "Public transportation",
          "is generally",
          "in large cities",
          "more available"
        ],
        "shuffledTokens": [
          "is generally",
          "in large cities.",
          "more available",
          "Public transportation"
        ]
      },
      {
        "id": 4,
        "target": "Cities usually offer a wider variety of entertainment and activities.",
        "tokens": [
          "and activities",
          "usually offer",
          "Cities",
          "of entertainment",
          "a wider variety"
        ],
        "shuffledTokens": [
          "a wider variety",
          "Cities",
          "of entertainment",
          "usually offer",
          "and activities."
        ]
      },
      {
        "id": 5,
        "target": "The best place to live depends on a person’s lifestyle.",
        "tokens": [
          "to live",
          "a person’s",
          "The best place",
          "depends on",
          "lifestyle"
        ],
        "shuffledTokens": [
          "lifestyle.",
          "to live",
          "depends on",
          "The best place",
          "a person’s"
        ]
      }
    ]
  },
  {
    "id": 6,
    "unit": 6,
    "title": "Why Do Some Cafés Want You to Stay?",
    "skill": "Inference",
    "skill_desc": "For Inference, students should use clues in a text and what they already know to understand something the writer does not say directly.",
    "cover": "assets/images/ex6.jpg",
    "audio": "assets/audio/ex6.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 22.5
      },
      {
        "start": 22.5,
        "end": 46.2
      },
      {
        "start": 46.2,
        "end": 67.5
      },
      {
        "start": 67.5,
        "end": 86.5
      }
    ],
    "passage": [
      "When you enter a café, you may notice more than the smell of coffee. Some cafés have comfortable chairs, soft lighting, quiet music, and free Wi-Fi. These details are not always chosen by accident. Café owners often think carefully about how the space makes customers feel.",
      "A comfortable environment may encourage people to stay longer. Someone might order a drink, sit down to study, and later decide to buy a snack or a second drink. Some cafés also provide large tables and electrical outlets, making it easier for customers to work or meet friends. The longer customers stay, the more opportunities there are for them to purchase something else.",
      "However, not every café follows this approach. Some have smaller tables, brighter lights, or fewer comfortable seats. During busy hours, this can help customers finish their drinks and leave sooner, allowing new customers to find a seat. The design of a café can therefore influence how people behave without them noticing it.",
      "The next time you visit a café, pay attention to its surroundings. The furniture, music, lighting, and even the distance between tables may have a purpose. A café is not only designed to look attractive; its environment can also support the way the business wants customers to use the space."
    ],
    "partA": [
      {
        "id": 1,
        "question": "Why might a café provide comfortable chairs and free Wi-Fi?",
        "options": [
          "It may want customers to spend more time there.",
          "It wants customers to leave quickly.",
          "It does not sell enough coffee."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"It may want customers to spend more time there.\" ซึ่งตรงกับทักษะ Inference"
      },
      {
        "id": 2,
        "question": "What can we infer about a person who stays in a café for several hours?",
        "options": [
          "They are not allowed to order food.",
          "They may buy more than one item during their visit.",
          "They probably work at the café."
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"They may buy more than one item during their visit.\" ซึ่งตรงกับทักษะ Inference"
      },
      {
        "id": 3,
        "question": "Why might a busy café use smaller tables and less comfortable seating?",
        "options": [
          "The owners dislike comfortable furniture.",
          "The café wants people to sleep there.",
          "It may want seats to become available more quickly."
        ],
        "answer": 2,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"It may want seats to become available more quickly.\" ซึ่งตรงกับทักษะ Inference"
      },
      {
        "id": 4,
        "question": "What can we infer about café design from the passage?",
        "options": [
          "Design can affect customer behavior.",
          "Customers always notice how cafés influence them.",
          "All cafés use the same design strategy."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Design can affect customer behavior.\" ซึ่งตรงกับทักษะ Inference"
      },
      {
        "id": 5,
        "question": "What does the passage suggest about business spaces in general?",
        "options": [
          "Their design may be planned to encourage certain behaviors.",
          "Their only purpose is to look attractive.",
          "Customers choose businesses only because of their furniture."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Their design may be planned to encourage certain behaviors.\" ซึ่งตรงกับทักษะ Inference"
      }
    ],
    "wordBank": {
      "words": [
        "environment",
        "influence",
        "comfortable",
        "customers",
        "purchase"
      ],
      "scrambledWords": [
        "purchase",
        "customers",
        "influence",
        "comfortable",
        "environment"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Soft lighting and music can create a relaxing __________.",
          "answer": "environment"
        },
        {
          "id": 2,
          "sentence": "Some cafés provide __________ chairs to encourage people to stay longer.",
          "answer": "comfortable"
        },
        {
          "id": 3,
          "sentence": "Café design can __________ the way people behave.",
          "answer": "influence"
        },
        {
          "id": 4,
          "sentence": "People who stay longer may decide to __________ another drink or snack.",
          "answer": "purchase"
        },
        {
          "id": 5,
          "sentence": "Smaller tables can help new __________ find a seat during busy hours.",
          "answer": "customers"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Comfortable furniture can encourage customers to stay longer.",
        "tokens": [
          "to stay",
          "Comfortable furniture",
          "customers",
          "can encourage",
          "longer"
        ],
        "shuffledTokens": [
          "customers",
          "to stay",
          "Comfortable furniture",
          "longer.",
          "can encourage"
        ]
      },
      {
        "id": 2,
        "target": "Soft music can create a more relaxing atmosphere.",
        "tokens": [
          "a more",
          "Soft music",
          "relaxing",
          "can create",
          "atmosphere"
        ],
        "shuffledTokens": [
          "can create",
          "atmosphere.",
          "a more",
          "Soft music",
          "relaxing"
        ]
      },
      {
        "id": 3,
        "target": "Bright lighting can make a space feel more active and energetic.",
        "tokens": [
          "Bright lighting",
          "can make",
          "a space",
          "feel more active",
          "and energetic"
        ],
        "shuffledTokens": [
          "a space",
          "feel more active",
          "and energetic.",
          "can make",
          "Bright lighting"
        ]
      },
      {
        "id": 4,
        "target": "Businesses often design their spaces to influence customer behavior.",
        "tokens": [
          "Businesses",
          "often design",
          "their spaces",
          "to influence",
          "customer behavior"
        ],
        "shuffledTokens": [
          "often design",
          "their spaces",
          "customer behavior.",
          "Businesses",
          "to influence"
        ]
      },
      {
        "id": 5,
        "target": "Small details can have a powerful effect on our decisions.",
        "tokens": [
          "a powerful effect",
          "our decisions",
          "on",
          "Small details",
          "can have"
        ],
        "shuffledTokens": [
          "Small details",
          "on",
          "can have",
          "our decisions.",
          "a powerful effect"
        ]
      }
    ]
  },
  {
    "id": 7,
    "unit": 7,
    "title": "The Language of Advertising",
    "skill": "Analyzing language",
    "skill_desc": "For Analyzing Language, students should understand how a writer’s choice of words affects meaning and feelings.",
    "cover": "assets/images/ex7.jpg",
    "audio": "assets/audio/ex7.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 31.5
      },
      {
        "start": 31.5,
        "end": 56.5
      },
      {
        "start": 56.5,
        "end": 77.2
      },
      {
        "start": 77.2,
        "end": 97.5
      }
    ],
    "passage": [
      "Advertisements are everywhere. We see them on websites, social media, television, and even on the streets. Companies use advertisements to introduce their products, but they also carefully choose words that make those products sound attractive. Words such as “amazing,” “perfect,” and “new” can create a positive feeling, even when they do not give us much information about the product.",
      "Advertisements also speak directly to customers. Phrases like “You deserve the best” or “Don’t miss your chance” can make a message feel personal and urgent. Some advertisements use words such as “limited” or “today only” to encourage people to make a quick decision. These expressions can create the feeling that customers may lose an opportunity if they wait too long.",
      "Another common technique is using powerful words to describe simple features. A company might call a normal drink “refreshing and energizing” or describe a small improvement as a “revolutionary change.” These words can influence how customers imagine a product before they have even tried it.",
      "Understanding advertising language can help people become more careful consumers. Instead of focusing only on exciting words, readers can ask what information an advertisement actually provides. By paying attention to word choice, we can better understand how language is used to influence our decisions."
    ],
    "partA": [
      {
        "id": 1,
        "question": "Why does the writer put “amazing,” “perfect,” and “new” together?",
        "options": [
          "They are words commonly used to make products sound attractive.",
          "They describe the price of a product.",
          "They give detailed information about products."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"They are words commonly used to make products sound attractive.\" ซึ่งตรงกับทักษะ Analyzing language"
      },
      {
        "id": 2,
        "question": "What feeling does the phrase “Don’t miss your chance” try to create?",
        "options": [
          "Confusion",
          "Urgency",
          "Relaxation"
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Urgency\" ซึ่งตรงกับทักษะ Analyzing language"
      },
      {
        "id": 3,
        "question": "Why might an advertisement use the word “limited”?",
        "options": [
          "To encourage customers to make a decision quickly",
          "To explain how a product is made",
          "To show that the product is inexpensive"
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"To encourage customers to make a decision quickly\" ซึ่งตรงกับทักษะ Analyzing language"
      },
      {
        "id": 4,
        "question": "What does the word “revolutionary” suggest about a product?",
        "options": [
          "It is ordinary and familiar.",
          "It is old and unpopular.",
          "It is very new or different."
        ],
        "answer": 2,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"It is very new or different.\" ซึ่งตรงกับทักษะ Analyzing language"
      },
      {
        "id": 5,
        "question": "Why does the writer use the phrase “exciting words” in the final paragraph?",
        "options": [
          "To describe words designed to attract people's attention",
          "To show that advertisements are always entertaining",
          "To suggest that customers need more vocabulary"
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"To describe words designed to attract people's attention\" ซึ่งตรงกับทักษะ Analyzing language"
      }
    ],
    "wordBank": {
      "words": [
        "urgent",
        "attractive",
        "influence",
        "limited",
        "powerful"
      ],
      "scrambledWords": [
        "powerful",
        "urgent",
        "attractive",
        "influence",
        "limited"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Advertisers use positive words to make their products sound more __________.",
          "answer": "attractive"
        },
        {
          "id": 2,
          "sentence": "Words like “today only” can make a message feel __________.",
          "answer": "urgent"
        },
        {
          "id": 3,
          "sentence": "The word “__________” may encourage customers to buy something before it is gone.",
          "answer": "limited"
        },
        {
          "id": 4,
          "sentence": "Advertisements often use __________ words to describe simple products.",
          "answer": "powerful"
        },
        {
          "id": 5,
          "sentence": "Carefully chosen language can __________ the decisions people make.",
          "answer": "influence"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Advertisements often use positive language to attract customers.",
        "tokens": [
          "often use",
          "to attract",
          "Advertisements",
          "positive language",
          "customers"
        ],
        "shuffledTokens": [
          "positive language",
          "customers.",
          "to attract",
          "often use",
          "Advertisements"
        ]
      },
      {
        "id": 2,
        "target": "Powerful words can make an ordinary product seem more special.",
        "tokens": [
          "an ordinary product",
          "Powerful words",
          "more special",
          "can make",
          "seem"
        ],
        "shuffledTokens": [
          "Powerful words",
          "seem",
          "can make",
          "an ordinary product",
          "more special."
        ]
      },
      {
        "id": 3,
        "target": "Companies carefully choose words to make their products sound attractive.",
        "tokens": [
          "Companies",
          "carefully choose",
          "words to make",
          "their products",
          "sound attractive"
        ],
        "shuffledTokens": [
          "carefully choose",
          "words to make",
          "sound attractive.",
          "Companies",
          "their products"
        ]
      },
      {
        "id": 4,
        "target": "Customers should think carefully before trusting advertisements.",
        "tokens": [
          "before trusting",
          "Customers",
          "carefully",
          "should think",
          "advertisements"
        ],
        "shuffledTokens": [
          "carefully",
          "should think",
          "advertisements.",
          "before trusting",
          "Customers"
        ]
      },
      {
        "id": 5,
        "target": "Some advertisements make customers feel like they need to act quickly.",
        "tokens": [
          "Some advertisements",
          "make customers",
          "feel like",
          "they",
          "need to act quickly"
        ],
        "shuffledTokens": [
          "make customers",
          "Some advertisements",
          "they",
          "need to act quickly.",
          "feel like"
        ]
      }
    ]
  },
  {
    "id": 8,
    "unit": 8,
    "title": "Why You Should Take Breaks While Studying",
    "skill": "Writer’s purpose",
    "skill_desc": "For Writer’s Purpose, students should be able to identify whether a writer wants to inform, explain, persuade, entertain, or warn.",
    "cover": "assets/images/ex8.jpg",
    "audio": "assets/audio/ex8.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 25
      },
      {
        "start": 25,
        "end": 46
      },
      {
        "start": 46,
        "end": 63.8
      },
      {
        "start": 63.8,
        "end": 80
      }
    ],
    "passage": [
      "Many students believe that studying for several hours without stopping will help them learn more. However, working for too long can make it difficult to concentrate. After spending a long time on the same task, you may become tired, lose focus, and find it harder to remember information.",
      "Taking short breaks can help your mind recover. You could stand up, stretch, drink some water, or walk around for a few minutes. When you return to your work, you may feel more refreshed and ready to concentrate again. A short break can also reduce the stress of studying for a long period.",
      "However, a study break should not become a long distraction. Checking social media or watching videos can easily turn a five-minute break into thirty minutes. Setting a timer can help you control the length of your break and return to studying on time.",
      "Studying effectively is not always about spending more hours at your desk. It is also about using your time wisely. Try including short breaks in your study routine and notice whether they help you stay focused and productive."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What is the writer’s main purpose?",
        "options": [
          "To persuade students to include short breaks when studying",
          "To entertain readers with a story about school",
          "To describe different school subjects"
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"To persuade students to include short breaks when studying\" ซึ่งตรงกับทักษะ Writer’s purpose"
      },
      {
        "id": 2,
        "question": "Why does the writer mention stretching, drinking water, and walking?",
        "options": [
          "To explain activities students can do during a short break",
          "To describe a daily exercise routine",
          "To show that studying is unhealthy"
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"To explain activities students can do during a short break\" ซึ่งตรงกับทักษะ Writer’s purpose"
      },
      {
        "id": 3,
        "question": "Why does the writer mention social media and videos?",
        "options": [
          "To recommend ways to relax after school",
          "To warn that short breaks can become long distractions",
          "To explain why students enjoy their phones"
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"To warn that short breaks can become long distractions\" ซึ่งตรงกับทักษะ Writer’s purpose"
      },
      {
        "id": 4,
        "question": "What does the writer want readers to understand from the final paragraph?",
        "options": [
          "Longer study sessions always produce better results.",
          "Students should avoid studying at home.",
          "Using study time effectively is more important than simply studying longer."
        ],
        "answer": 2,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Using study time effectively is more important than simply studying longer.\" ซึ่งตรงกับทักษะ Writer’s purpose"
      },
      {
        "id": 5,
        "question": "Which sentence best shows the writer trying to persuade the reader?",
        "options": [
          "“After spending a long time on the same task, you may become tired.”",
          "“Try including short breaks in your study routine.”",
          "“Setting a timer can help you control the length of your break.”"
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"“Try including short breaks in your study routine.”\" ซึ่งตรงกับทักษะ Writer’s purpose"
      }
    ],
    "wordBank": {
      "words": [
        "concentrate",
        "recover",
        "distraction",
        "refreshed",
        "effectively"
      ],
      "scrambledWords": [
        "recover",
        "refreshed",
        "concentrate",
        "effectively",
        "distraction"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Taking a short break can help your mind __________ after studying for a long time.",
          "answer": "recover"
        },
        {
          "id": 2,
          "sentence": "Students may find it difficult to __________ when they become tired.",
          "answer": "concentrate"
        },
        {
          "id": 3,
          "sentence": "Social media can become a __________ during a study break.",
          "answer": "distraction"
        },
        {
          "id": 4,
          "sentence": "After resting for a few minutes, students may feel more __________.",
          "answer": "refreshed"
        },
        {
          "id": 5,
          "sentence": "Managing your time well can help you study more __________.",
          "answer": "effectively"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Taking regular breaks can help students maintain their focus.",
        "tokens": [
          "Taking",
          "regular breaks",
          "can help",
          "students",
          "maintain their focus"
        ],
        "shuffledTokens": [
          "can help",
          "maintain their focus.",
          "students",
          "Taking",
          "regular breaks"
        ]
      },
      {
        "id": 2,
        "target": "Studying for too long may make it harder to remember information.",
        "tokens": [
          "for too long",
          "harder",
          "Studying",
          "may make it",
          "information",
          "to remember"
        ],
        "shuffledTokens": [
          "Studying",
          "information.",
          "may make it",
          "to remember",
          "for too long",
          "harder"
        ]
      },
      {
        "id": 3,
        "target": "Students should avoid unnecessary distractions while studying.",
        "tokens": [
          "studying",
          "Students",
          "unnecessary distractions",
          "should avoid",
          "while"
        ],
        "shuffledTokens": [
          "unnecessary distractions",
          "studying.",
          "while",
          "Students",
          "should avoid"
        ]
      },
      {
        "id": 4,
        "target": "A good study routine should include enough time to rest and recover.",
        "tokens": [
          "should include",
          "and recover",
          "A good study routine",
          "enough time",
          "to rest"
        ],
        "shuffledTokens": [
          "A good study routine",
          "enough time",
          "to rest",
          "should include",
          "and recover."
        ]
      },
      {
        "id": 5,
        "target": "Managing your time wisely can make studying more effective.",
        "tokens": [
          "more effective",
          "can make",
          "studying",
          "wisely",
          "Managing your time"
        ],
        "shuffledTokens": [
          "studying",
          "Managing your time",
          "wisely",
          "more effective.",
          "can make"
        ]
      }
    ]
  },
  {
    "id": 9,
    "unit": 9,
    "title": "Why Teenagers Need Enough Sleep",
    "skill": "Recognizing coherence",
    "skill_desc": "For Recognizing Coherence, students should understand how ideas and sentences connect logically.",
    "cover": "assets/images/ex9.jpg",
    "audio": "assets/audio/ex9.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 24.5
      },
      {
        "start": 24.5,
        "end": 46.5
      },
      {
        "start": 46.5,
        "end": 66.5
      },
      {
        "start": 66.5,
        "end": 85.5
      }
    ],
    "passage": [
      "Sleep is important for everyone, but it is especially important for teenagers. During the teenage years, the body and brain are still developing. Because of this, teenagers generally need more sleep than adults. Getting enough rest helps them stay alert and prepare for the next day.",
      "However, many teenagers do not get enough sleep. Homework, social activities, and late-night screen time can keep them awake. In addition, teenagers may naturally feel sleepy later at night. As a result, waking up early for school can be difficult, and they may feel tired during the day.",
      "A lack of sleep can affect both learning and mood. Tired students may have difficulty concentrating in class or remembering new information. In addition, they may become more easily annoyed or stressed. These effects can make everyday activities more challenging.",
      "Developing a regular sleep routine can help. For example, teenagers can try going to bed at a similar time each night and avoiding screens shortly before bed. Therefore, making sleep a priority can help teenagers feel more prepared for school and daily activities."
    ],
    "partA": [
      {
        "id": 1,
        "question": "Which sentence best follows this idea?Teenagers need enough sleep because their bodies and brains are still developing.",
        "options": [
          "Many adults drink coffee in the morning.",
          "Getting enough rest can help them stay alert during the day.",
          "Teenagers have many different hobbies."
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Getting enough rest can help them stay alert during the day.\" ซึ่งตรงกับทักษะ Recognizing coherence"
      },
      {
        "id": 2,
        "question": "Which sentence does NOT belong in a paragraph about the effects of poor sleep?",
        "options": [
          "Tired students may struggle to concentrate in class.",
          "Lack of sleep can make people feel stressed or annoyed.",
          "Many schools offer different sports after class."
        ],
        "answer": 2,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Many schools offer different sports after class.\" ซึ่งตรงกับทักษะ Recognizing coherence"
      },
      {
        "id": 3,
        "question": "Among these 3 sentences, which sentence should come first?",
        "options": [
          "As a result, he struggled to stay awake during class.",
          "Tom stayed up very late finishing his homework.",
          "He found it difficult to concentrate on the lesson."
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Tom stayed up very late finishing his homework.\" ซึ่งตรงกับทักษะ Recognizing coherence"
      },
      {
        "id": 4,
        "question": "Which sentence best connects these two ideas?Many teenagers use their phones before bed. __________ They may find it harder to fall asleep.",
        "options": [
          "However, smartphones are available in many different models.",
          "For example, some students prefer studying in the morning.",
          "As a result, they may stay awake longer than planned."
        ],
        "answer": 2,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"As a result, they may stay awake longer than planned.\" ซึ่งตรงกับทักษะ Recognizing coherence"
      },
      {
        "id": 5,
        "question": "Which sentence would best end a paragraph about improving sleep habits?",
        "options": [
          "Developing healthy sleep habits can help teenagers feel more prepared each day.",
          "Teenagers enjoy many different activities after school.",
          "Some people prefer sleeping with two pillows."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Developing healthy sleep habits can help teenagers feel more prepared each day.\" ซึ่งตรงกับทักษะ Recognizing coherence"
      }
    ],
    "wordBank": {
      "words": [
        "developing",
        "concentrate",
        "routine",
        "alert",
        "importance"
      ],
      "scrambledWords": [
        "importance",
        "routine",
        "alert",
        "concentrate",
        "developing"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Teenagers’ bodies and brains are still __________ during these years.",
          "answer": "developing"
        },
        {
          "id": 2,
          "sentence": "Getting enough sleep can help students stay __________ during the day.",
          "answer": "alert"
        },
        {
          "id": 3,
          "sentence": "Tired students may find it difficult to __________ in class.",
          "answer": "concentrate"
        },
        {
          "id": 4,
          "sentence": "Going to bed at a similar time can create a healthy sleep __________.",
          "answer": "routine"
        },
        {
          "id": 5,
          "sentence": "Teenagers should understand the of ________getting enough sleep.",
          "answer": "importance"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Getting enough sleep can improve your concentration at school.",
        "tokens": [
          "at school",
          "can improve",
          "Getting enough sleep",
          "concentration",
          "your"
        ],
        "shuffledTokens": [
          "your",
          "Getting enough sleep",
          "concentration",
          "at school.",
          "can improve"
        ]
      },
      {
        "id": 2,
        "target": "Staying up late can make you feel exhausted the next day.",
        "tokens": [
          "the next day",
          "exhausted",
          "Staying up late",
          "can make",
          "you feel"
        ],
        "shuffledTokens": [
          "exhausted",
          "can make",
          "you feel",
          "Staying up late",
          "the next day."
        ]
      },
      {
        "id": 3,
        "target": "A lack of rest can affect your mood and energy.",
        "tokens": [
          "can affect",
          "A lack of",
          "your mood",
          "rest",
          "and energy"
        ],
        "shuffledTokens": [
          "and energy.",
          "your mood",
          "can affect",
          "A lack of",
          "rest"
        ]
      },
      {
        "id": 4,
        "target": "Healthy sleep habits can improve your daily performance.",
        "tokens": [
          "Healthy sleep habits",
          "can improve",
          "your",
          "daily performance"
        ],
        "shuffledTokens": [
          "can improve",
          "Healthy sleep habits",
          "daily performance.",
          "your"
        ]
      },
      {
        "id": 5,
        "target": "Developing a regular sleep routine can help teenagers feel better.",
        "tokens": [
          "Developing",
          "a regular sleep routine",
          "can help",
          "teenagers",
          "feel better"
        ],
        "shuffledTokens": [
          "feel better.",
          "can help",
          "teenagers",
          "a regular sleep routine",
          "Developing"
        ]
      }
    ]
  },
  {
    "id": 10,
    "unit": 10,
    "title": "The Hidden Cost of Fast Fashion",
    "skill": "Drawing conclusion",
    "skill_desc": "For Drawing Conclusions, students should be able to combine several details from the text to understand something that is not directly stated.",
    "cover": "assets/images/ex10.jpg",
    "audio": "assets/audio/ex10.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 29.5
      },
      {
        "start": 29.5,
        "end": 55.8
      },
      {
        "start": 55.8,
        "end": 77.5
      },
      {
        "start": 77.5,
        "end": 98.5
      }
    ],
    "passage": [
      "Fashion trends can change very quickly. Many clothing companies produce large amounts of inexpensive clothes so customers can regularly buy new styles. This is known as fast fashion. It allows people to follow new trends without spending too much money, but these low prices can come with other costs.",
      "Producing clothes requires water, energy, and raw materials. For example, cotton needs large amounts of water to grow, while making synthetic fabrics requires energy and chemicals. When companies produce millions of new items every year, they use a large amount of these resources. Transporting clothes around the world also requires fuel.",
      "Another problem happens after people buy the clothes. Because fast-fashion items are inexpensive, some people wear them only a few times before buying something new. Unwanted clothes may be thrown away, creating more waste. Although some clothes can be donated or recycled, not everything can be reused.",
      "Consumers can make different choices. They can buy fewer items, choose clothes that last longer, repair damaged clothes, or buy second-hand products. These actions may seem small, but when many people change their habits, they can reduce waste and the demand for new clothing."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What can we conclude about inexpensive clothing?",
        "options": [
          "A low price does not mean there are no environmental costs.",
          "Cheap clothes always last longer.",
          "Inexpensive clothes require fewer resources."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"A low price does not mean there are no environmental costs.\" ซึ่งตรงกับทักษะ Drawing conclusion"
      },
      {
        "id": 2,
        "question": "What conclusion can be drawn about frequently changing fashion trends?",
        "options": [
          "They may encourage people to buy clothes more often.",
          "They make clothes more expensive to produce.",
          "They help people keep clothes longer."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"They may encourage people to buy clothes more often.\" ซึ่งตรงกับทักษะ Drawing conclusion"
      },
      {
        "id": 3,
        "question": "Based on the passage, what can we conclude about throwing clothes away?",
        "options": [
          "It is the best way to recycle clothing.",
          "It can increase the amount of waste.",
          "It reduces the production of new clothes."
        ],
        "answer": 1,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"It can increase the amount of waste.\" ซึ่งตรงกับทักษะ Drawing conclusion"
      },
      {
        "id": 4,
        "question": "What can we conclude about buying clothes that last longer?",
        "options": [
          "It may reduce the need to buy new clothes frequently.",
          "It makes fashion trends change faster.",
          "It increases the amount of clothing waste."
        ],
        "answer": 0,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"It may reduce the need to buy new clothes frequently.\" ซึ่งตรงกับทักษะ Drawing conclusion"
      },
      {
        "id": 5,
        "question": "What overall conclusion can be drawn from the passage?",
        "options": [
          "People should stop buying clothes completely.",
          "Only clothing companies can reduce fashion waste.",
          "Our shopping habits can affect the environment."
        ],
        "answer": 2,
        "explanation": "ข้อความในบทอ่านระบุชัดเจนว่า \"Our shopping habits can affect the environment.\" ซึ่งตรงกับทักษะ Drawing conclusion"
      }
    ],
    "wordBank": {
      "words": [
        "resources",
        "trends",
        "waste",
        "repair",
        "inexpensive"
      ],
      "scrambledWords": [
        "waste",
        "repair",
        "trends",
        "inexpensive",
        "resources"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Fast fashion allows people to buy __________ clothes more often.",
          "answer": "inexpensive"
        },
        {
          "id": 2,
          "sentence": "Fashion __________ can change quickly and encourage people to buy new styles.",
          "answer": "trends"
        },
        {
          "id": 3,
          "sentence": "Producing clothes requires natural __________ such as water and energy.",
          "answer": "resources"
        },
        {
          "id": 4,
          "sentence": "Throwing away unwanted clothes creates more __________.",
          "answer": "waste"
        },
        {
          "id": 5,
          "sentence": "People can __________ damaged clothes instead of replacing them.",
          "answer": "repair"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Fast fashion is cheap and trendy clothing produced quickly.",
        "tokens": [
          "produced quickly",
          "Fast fashion",
          "is cheap and trendy",
          "clothing"
        ],
        "shuffledTokens": [
          "clothing",
          "is cheap and trendy",
          "Fast fashion",
          "produced quickly."
        ]
      },
      {
        "id": 2,
        "target": "Clothing production uses a large amount of natural resources.",
        "tokens": [
          "a large amount of",
          "uses",
          "natural",
          "Clothing production",
          "resources"
        ],
        "shuffledTokens": [
          "resources.",
          "natural",
          "uses",
          "a large amount of",
          "Clothing production"
        ]
      },
      {
        "id": 3,
        "target": "Cheap clothing may encourage people to shop more often.",
        "tokens": [
          "to shop",
          "may encourage",
          "Cheap clothing",
          "more often",
          "people"
        ],
        "shuffledTokens": [
          "Cheap clothing",
          "more often.",
          "people",
          "may encourage",
          "to shop"
        ]
      },
      {
        "id": 4,
        "target": "Choosing second-hand clothes can help reduce waste.",
        "tokens": [
          "can help",
          "second-hand clothes",
          "reduce",
          "Choosing",
          "waste"
        ],
        "shuffledTokens": [
          "waste.",
          "can help",
          "Choosing",
          "second-hand clothes",
          "reduce"
        ]
      },
      {
        "id": 5,
        "target": "Small changes can have a positive environmental impact.",
        "tokens": [
          "Small changes",
          "can have",
          "a positive",
          "environmental impact"
        ],
        "shuffledTokens": [
          "environmental impact.",
          "Small changes",
          "can have",
          "a positive"
        ]
      }
    ]
  }
];

// Universal Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { APP_META, PRODUCT_COVERS, DEFAULT_EXERCISES };
}

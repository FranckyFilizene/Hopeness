import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  phrases: {
    translation: {
      "A propos de": "À propos de",
      "Notre histoire, notre engagement.": "Notre histoire, notre engagement.",
      "HOPENESS est une centre de formation professionnelle a Madagascar, ": "HOPENESS is a vocational training center in Madagascar, ",
      "qui accompagne les apprenants dans le développement de leurs compétences ": "supporting learners as they develop their skills ",
      "pour un avenir meilleur.": "for a better future.",
      "Hopeness — Centre de formation": "Hopeness — Training Center",
      "Qui somme-nous ?": "Who are we?",
      "Qui sommes-nous ?": "Who are we?",
      "Découvrez notre identité et notre engagement envers la formation.": "Discover who we are and our commitment to education.",
      "Notre mission": "Our mission",
      "Notre vision": "Our vision",
      "HOPENESS est un centre de formation professionnelle a Madagascar , spécialisé dans l'accompagnement des jeunes et des adulte vers l'aquisition de compétences pratiques et durables. Nous croyons que chaque personne a un potentiel et mérite une chance de se former et de réussir.": "HOPENESS is a vocational training center in Madagascar, specializing in helping young people and adults acquire practical, lasting skills. We believe everyone has potential and deserves the opportunity to learn and succeed.",
      "Offrir une formation professionnelle accessible de qualité et axée sur la pratique, afin de permettre a chacun de dévélopper ses compétences, d'améliorer son employabilité et de contribuer au développement de son avenir et de sa communauté.": "To provide accessible, high-quality, hands-on vocational training that enables everyone to develop their skills, improve their employability, and contribute to their future and community.",
      "Devenir une référence en matière de formation professionnelle a Madagascar et en Afrique, en formant des professionnels compétences, innovants et engagés pour un avenir meilleur.": "To become a leading vocational training center in Madagascar and Africa, developing skilled, innovative professionals committed to a better future.",
      "Nous vision la qualité dans tout ce que nous ": "We pursue quality in everything we ",
      "faisons.": "do.",
      "Nous croyons en l'effort et à la réussite de ": "We believe in hard work and the success of ",
      "chacun.": "everyone.",
      "Nous adaptons des méthodes modernes et ": "We use modern and ",
      "adaptées.": "adapted methods.",
      "Nous avançons, pour un impact ": "We move forward to create a ",
      "durable.": "lasting impact.",
      "Nos valeurs": "Our values",
      "Les principes qui guident chacune de nos actions.": "The principles that guide everything we do.",
      "Notre centre en images": "Our center in pictures",
      "Découvrez notre environnement et notre cadre de formation.": "Discover our learning environment and training facilities.",
      "Excellence": "Excellence",
      "Engagement": "Commitment",
      "Innovation": "Innovation",
      "Solidarité": "Solidarity",
      "CONTACTEZ-NOUS": "CONTACT US",
      "Nous sommes à votre écoute.": "We're here to help.",
      "Nos coordonnées": "Contact details",
      "Adresse": "Address",
      "Téléphone": "Phone",
      "Email": "Email",
      "Horaires": "Opening hours",
      "Lun - Ven : 8h - 12h | 14h - 17h": "Mon - Fri: 8 am - 12 pm | 2 pm - 5 pm",
      "Nous trouver": "Find us",
      "notre passion.": "our passion.",
      "Découvrez notre collection de costards, t-shirts, polos et baskets. Des articles sélectionnés pour allier élégance, confort et tendance.": "Explore our collection of suits, T-shirts, polos, and sneakers. Carefully selected pieces that combine elegance, comfort, and style.",
      "Qualité": "Quality",
      "Confort": "Comfort",
      "Style": "Style",
      "Tendance": "On-trend",
      "Collection de costards": "Suit collection",
      "Votre boutique": "Your shop",
      "Style & Élégance": "Style & Elegance",
      "Nos collections": "Our collections",
      "Explorez nos catégories": "Explore our categories",
      "Découvrez une sélection d'articles pour compléter votre style au quotidien.": "Discover a selection of pieces to complete your everyday style.",
      "Élégance et raffinement": "Elegance and refinement",
      "T-shirts": "T-shirts",
      "Polos": "Polo shirts",
      "Sneakers & Baskets": "Sneakers",
      "Polo élégant": "Elegant polo shirt",
      "Sneakers tendance": "On-trend sneakers",
      "Notre sélection": "Our selection",
      "Une sélection de nos articles incontournables.": "A selection of our must-have items.",
      "Disponible en boutique": "Available in store",
      "Le style à chaque pas.": "Style with every step.",
      "SNEAKERS & BASKETS": "SNEAKERS",
      "Découvrez notre sélection de baskets et sneakers pour tous les goûts. Des modèles classiques aux styles modernes, trouvez les chaussures qui correspondent à votre personnalité.": "Explore our selection of sneakers for every taste. From classic designs to modern styles, find the shoes that suit your personality.",
      "Collection de baskets et sneakers": "Sneaker collection",
      "Pourquoi nous choisir ?": "Why choose us?",
      "Notre engagement": "Our commitment",
      "Des articles soigneusement sélectionnés": "Carefully selected products",
      "Des modèles pour hommes et femmes": "Styles for men and women",
      "Une équipe toujours à votre écoute": "A team always ready to help",
      "Retrouvez-nous à Mahavatse II": "Find us in Mahavatse II",
      "ÉLÉGANCE · STYLE · QUALITÉ": "ELEGANCE · STYLE · QUALITY",
      "Votre style,": "Your style,",
      "notre passion": "our passion",
      "Découvrez notre collection de costards, t-shirts, polos et Air Force. Qualité, confort et tendance au rendez-vous.": "Explore our collection of suits, T-shirts, polos, and Air Force sneakers. Quality, comfort, and style in every piece.",
      "Mannequin en costard": "Model wearing a suit",
      "Costards": "Suits",
      "Élégance au quotidien": "Everyday elegance",
      "Confort et style": "Comfort and style",
      "Chic et décontracté": "Smart and casual",
      "Le classique intemporel": "A timeless classic",
      "Costard classique": "Classic suit",
      "T-shirt premium": "Premium T-shirt",
      "Polo uni": "Plain polo",
      "Nos produits phares": "Featured products",
      "Les articles les plus appréciés de nos clients.": "Our customers' favorite items.",
      "Le style intemporel": "Timeless style",
      "Des sneakers qui s'adaptent à toutes vos tenues.": "Sneakers that go with every outfit.",
      "Produits de qualité": "Quality products",
      "Des marques fiables": "Trusted brands",
      "Toutes les tailles": "All sizes",
      "Pour hommes et femmes": "For men and women",
      "Service client": "Customer service",
      "Toujours à votre écoute": "Always here to help",
      "Boutique à Toliara": "Shop in Toliara",
      "Mahavatse II": "Mahavatse II",
      "Nos Domaines d'Excellence": "Our areas of excellence",
      "Des formations adaptées au marché": "Training tailored to the job market",
      "Découvrez nos programmes conçus pour vous transmettre des compétences pratiques et immédiatement valorisables.": "Explore our programs, designed to teach practical skills you can put to use right away.",
      "1 An de Formation": "1-year program",
      "École de Mécanique Automobile": "Automotive Mechanics School",
      "Formation complète théorique et pratique pour maîtriser le diagnostic, la réparation et la maintenance des véhicules modernes.": "Comprehensive classroom and hands-on training in diagnostics, repair, and maintenance of modern vehicles.",
      "En savoir plus sur le programme": "Learn more about the program",
      "Cours de Langues (FR / EN)": "Language Courses (FR / EN)",
      "Perfectionnez votre communication orale et écrite en francais et en anglai grâce à des modules interactifs adaptés à votre niveau.": "Improve your spoken and written French and English with interactive modules tailored to your level.",
      "Informatique & Électronique": "Computer Science & Electronics",
      "Apprenez la bureautique, la maintenance informatique ainsi que les bases fondamentales de l'électronique générale.": "Learn office software, computer maintenance, and the fundamentals of electronics.",
      "Atelier & Sur-mesure": "Workshop & Custom-made",
      "Confection textile, logos et tenues professionnelles": "Custom clothing, logos, and workwear",
      "Au-delà de nos formations, Hopeness met son savoir-faire au service de vos projets vestimentaires. De la création de logos personnalisés à la confection de t-shirts, polos et costumes sur mesure, nous garantissons une qualité irréprochable.": "Beyond training, Hopeness brings its expertise to your apparel projects. From custom logos to made-to-measure T-shirts, polos, and suits, we deliver dependable quality.",
      "Confection de Polos & T-shirts": "Custom polos & T-shirts",
      "Création de Logos & Badges": "Logo & badge design",
      "Costumes sur mesure": "Made-to-measure suits",
      "Commandes en gros & particuliers": "Wholesale and individual orders",
      "Visiter la Boutique": "Visit the shop",
      "Demander un devis": "Request a quote",
      "Exprimez votre style avec Hopeness": "Express your style with Hopeness",
      "Que ce soit pour une tenue professionnelle, un événement ou une collection de vêtements personnalisés, notre équipe vous accompagne de la conception à la réalisation finale.": "Whether you need workwear, event clothing, or a custom collection, our team supports you from initial design through final production.",
      "Cours de langue": "Language course",
      "Cours de Francais": "French course",
      "Cours d'Anglais": "English course",
      "Apprenez le francais, ouvrez vous au monde !": "Learn French and open up to the world!",
      "Apprenez l'anglais, construire votre futur!": "Learn English and build your future!",
      "Le francais est une langue de communication ,de culture et d'opportunités. ": "French is a language of communication, culture, and opportunity. ",
      "L'anglais est une langue de communication ,de culture et d'opportunités. ": "English is a language of communication, culture, and opportunity. ",
      "vous propose une formation complète et pratique ": "offers comprehensive, hands-on training ",
      "pour maitriser le francais, a l'oral comme a l'écrit, quel que soit votre niveau.": "to help you master French, spoken and written, whatever your level.",
      "pour maitriser l'anglais, a l'oral comme a l'écrit, quel que soit votre niveau.": "to help you master English, spoken and written, whatever your level.",
      "Inscrivez-vous": "Enroll now",
      "Pourquoi choisir notre formation ?": "Why choose our program?",
      "Une formation pensée pour votre réussite": "Training designed for your success",
      "Ce que vous aller apprendre": "What you will learn",
      "Une programmme complet pour tous les niveaux.": "A comprehensive program for every level.",
      "Les niveaux proposés": "Levels offered",
      "Du débutant a l'avancé, nous avons un parcours adapté a vos besoins..": "From beginner to advanced, we have a program suited to your needs.",
      "Notre méthode": "Our method",
      "Une approche moderne et efficace": "A modern, effective approach",
      "Cours en présentiel": "In-person classes",
      "Supports pédagogiques modernes": "Modern learning materials",
      "Mise en situation réelle": "Real-world practice",
      "Suivi personnalisé": "Personalized support",
      "Evaluation regulières": "Regular assessments",
      "Quelques images de nos cours": "A look inside our classes",
      "Decouvrez notre environnement d'apprentissage.": "Discover our learning environment.",
      "MECANIQUE": "MECHANICS",
      "Cours Mécanique": "Mechanics course",
      "Mécanique Automobile": "Automotive Mechanics",
      "Apprendre aujourd'hui, réparer demain": "Learn today, repair tomorrow",
      "Formez-vous aux métiers de la mécanique automobile et ": "Train for a career in automotive mechanics and ",
      "construisez votre avenir avec nous.": "build your future with us.",
      "Des parcours adaptés a tous les niveaux, du débutant au professionnel.": "Programs for every level, from beginner to professional.",
      "Mécanique automobile (niveau débutant a avancé)": "Automotive mechanics (beginner to advanced)",
      "Diagnostic électronique auto": "Automotive electronic diagnostics",
      "Entretien et réparation des moteurs": "Engine maintenance and repair",
      "Systèmes de freinage, direction et suspension": "Braking, steering, and suspension systems",
      "Climatisation automobile": "Automotive air conditioning",
      "Notre école en images": "Our school in pictures",
      "Cours Electronique": "Electronics course",
      "Cours électronique": "Electronics course",
      "Apprendre , convoir, innover": "Learn, design, innovate",
      "Maitrisez les technologies d'aujoud'hui et ": "Master today's technologies and ",
      "préparez-vous aux métiers de demain dans le domaine de l'électronique et de l'electrotechnique.": "prepare for tomorrow's careers in electronics and electrical engineering.",
      "Electronique": "Electronics",
      "Nos formations": "Our programs",
      "Des formations complètes pour devenir un professionnel.": "Comprehensive training to help you become a professional.",
      "Electronique de base": "Fundamentals of electronics",
      "Electronique appliquée (systémes embarqués)": "Applied electronics (embedded systems)",
      "Maintenance des equipements electronique": "Electronic equipment maintenance",
      "Autorisation et controle industriel": "Industrial automation and control",
      "Pourquoi choisir notre formation ?": "Why choose our program?",
      "Une formation pensée pour votre réussite": "Training designed for your success",
      "Cours Informatique": "Computer science course",
      "Cours d'Informatique": "Computer Science Course",
      "Maitrisez les outils d'aujoud'hui, construisez le métier de demain !": "Master today's tools and build tomorrow's career!",
      "Chez ": "At ",
      "nous vous formons aux compétences numériques": "we train you in the digital skills",
      "indispensable pour réussir dans un monde connecté. Que vous soyez ": "you need to succeed in a connected world. Whether you are a ",
      "Débutant ou souhaitiez vous perfectionner, nos formations s'adaptent ": "beginner or looking to improve, our courses are tailored ",
      "a votre niveau et a vos objectifs.": "to your level and goals.",
      "Une formation complète, pratique et orientée vers l'employabilité.": "Comprehensive, practical training focused on employability.",
      "Nos parcours de formation": "Our training paths",
      "Une formation adaptées a tous les niveaux du debutant a l'avancé.": "Training for all levels, from beginner to advanced.",
      "Bureautique": "Office software",
      "Bureautique Plus": "Advanced Office Skills",
      "Maitriser le Word": "Master Microsoft Word",
      "Maitriser le Excel": "Master Microsoft Excel",
      "Maitriser le PowerPoint": "Master Microsoft PowerPoint",
      "Access (Base de donnée)": "Access (Database)",
      "Excel avancé": "Advanced Excel",
      "Gestion des fichiers": "File management",
      "Outils collaboratifs": "Collaboration tools",
      "Quelques images de nos cours": "A look inside our classes",
      "Atelier & Sur-mesure": "Workshop & Custom-made",
      "Confection et Personnalisation": "Tailoring & Customization",
      "Votre idée, notre savoir-faire !": "Your idea, our expertise!",
      "HOPENESS vous accompagne dans la création et la personnalisation de ": "HOPENESS supports you in creating and customizing ",
      "vetement, logos, et support visuels. Que ce soit pour votre entreprise. ": "clothing, logos, and visual materials, for your business, ",
      "club, association ou usage personnel, donnez vie a vos idée avec des produits de qualité et un service sur mesure.": "club, association, or personal use. Bring your ideas to life with quality products and personalized service.",
      "Nos services": "Our services",
      "Une large gamme de prestations pour répondre à tous vos besoins.": "A wide range of services to meet your needs.",
      "Nos realisations": "Our work",
      "Decouvrez quelques exemple de nos créations.": "Discover some examples of our work.",
      "Pourquoi choisir HOPENESS ?": "Why choose HOPENESS?",
      "Qualité des materiaux": "Quality materials",
      "Equipe créative et professionelle": "Creative, professional team",
      "Delais respectés": "On-time delivery",
      "Vous avez un projet ?": "Have a project?",
      "Contactez-nous des maintenant pour une devis personnalisé.": "Contact us today for a personalized quote.",
      "Nous contactez": "Contact us",
      "Services": "Services",
      "Confection sur mesure": "Custom tailoring",
      "Création de logos": "Logo design",
      "Personnalisation T-shirts/Polos": "Custom T-shirts and polos",
      "Boutique de costumes": "Suit shop",
      "Mahavatse II,TOLIARA Madagascar": "Mahavatse II, Toliara, Madagascar",
      "© 2026 HOPENESS. Tous droits réservés.": "© 2026 HOPENESS. All rights reserved.",
      "Designed & Developed by ": "Designed & Developed by ",
      "Changer de langue": "Change language",
      "Basculer le thème": "Toggle theme",
      "Costard": "Suit",
      "Le": "The",
      "A": "A",
      "Des formateurs experimenté": "Experienced instructors",
      "Une equipe pédagogique qualifié et passionné.": "A qualified and passionate teaching team.",
      "Une méthode interactive": "An interactive method",
      "Apprendre par la pratique, la conversation et les projets.": "Learn through practice, conversation, and projects.",
      "Des groupes réduits": "Small groups",
      "Un suivi personnalisé pour progresser plus vite.": "Personalized support to help you progress faster.",
      "Une certification": "Certification",
      "Attestation de formation a la fin du parcours.": "Certificate of completion at the end of the program.",
      "Expression orale": "Speaking",
      "Conversation quotidienne": "Everyday conversation",
      "Prononciation": "Pronunciation",
      "Débats et présentations": "Debates and presentations",
      "Expression écrite": "Writing",
      "Grammaire": "Grammar",
      "Rédaction de textes": "Writing texts",
      "Email professionnel": "Professional email",
      "Compréhension": "Comprehension",
      "Lecture": "Reading",
      "Ecoute": "Listening",
      "Vidéo et médias": "Video and media",
      "Culture Francaise": "French culture",
      "Culture Anglais": "English culture",
      "Expressions idiomatique": "Idiomatic expressions",
      "Culture , civilisation": "Culture and civilization",
      "Vie cquotidienne": "Everyday life",
      "Débutant": "Beginner",
      "Elémentaire": "Elementary",
      "Intermediaire": "Intermediate",
      "Avancé": "Advanced",
      "Découvrir la langue et les bases": "Discover the language and its basics",
      "Communiquer dans les situations simples": "Communicate in everyday situations",
      "Evaluation regulières": "Regular assessments",
      "Materiel moderne": "Modern equipment",
      "Equipements et outils professionnels.": "Professional equipment and tools.",
      "Encadrement personnalisé": "Personalized guidance",
      "Suivi individuel de chaque apprenant.": "Individual support for every learner.",
      "Stage en entreprise": "Company internship",
      "Mise en pratique en milieu professionnel.": "Practical experience in a professional setting.",
      "Taux de réussite élevé": "High success rate",
      "Nos anciens diplomés sont sur le terrain.": "Our graduates are already working in the field.",
      "Formation pratique": "Hands-on training",
      "Ateliers équipés et véhicules réels.": "Equipped workshops and real vehicles.",
      "Formateurs qualifiés": "Qualified instructors",
      "Professionnels du métier et pédagogues.": "Industry professionals and experienced educators.",
      "Insertion professionnelle": "Career placement",
      "Aide a l'emploi et partenariats.": "Job assistance and partnerships.",
      "Diplome": "Diploma",
      "Attestation a la fin de la formation.": "Certificate awarded upon completion.",
      "Plateaux techniques": "Technical facilities",
      "Equipements modernes et variés.": "Modern, versatile equipment.",
      "Projets concrets": "Hands-on projects",
      "Réalisation des projets réels.": "Work on real-world projects.",
      "Encadrement de qualité": "Quality guidance",
      "Suivi et accompagnement personnalisé.": "Personalized support and guidance.",
      "Partenariats": "Partnerships",
      "Avec des entreprises et des acteurs du secteur.": "With companies and industry stakeholders.",
      "Formations modermes": "Modern training",
      "Théorie et pratique sur équipements réels.": "Theory and practice using real equipment.",
      "Formateurs experts": "Expert instructors",
      "Ingénieurs et techniciens expérimentés.": "Experienced engineers and technicians.",
      "Débouchés garantis": "Career opportunities",
      "Un secteur en pleine croissance.": "A rapidly growing industry.",
      "Diplome certifié": "Certified diploma",
      "Reconnu par l'Etat et les entreprises.": "Recognized by the government and employers.",
      "Formateurs qualifiés": "Qualified instructors",
      "Des professionnels passionnés et expérimentés.": "Passionate and experienced professionals.",
      "Méthode pratique": "Hands-on method",
      "Beaucoup de travaux pratiques et des projets concrèts.": "Extensive practical work and real-world projects.",
      "Petits groupes": "Small groups",
      "Confection des vêtements": "Clothing production",
      "T-Shirt, Polos, Sweats, vestes, uniforme.": "T-shirts, polos, sweatshirts, jackets, and uniforms.",
      "Designs unique et professionnels.": "Unique, professional designs.",
      "Impression personnalisée": "Custom printing",
      "Sérigraphie, transfert, DTF, broderie....": "Screen printing, transfer, DTF, and embroidery.",
      "Personnalisation": "Customization",
      "Noms, numéros, motifs, textes....": "Names, numbers, designs, and text.",
      ...{
      "Français": "French"
      ,"Anglais": "English"
      ,"Informatique": "Computer Science"
      ,"Électronique": "Electronics"
      ,"Le": "The"
      ,"Centre de formation professionnelle, confection textile et création sur mesure.": "Vocational training, textile production, and custom-made creations."
      ,"Mahavatse II, Toliara, Madagascar": "Mahavatse II, Toliara, Madagascar"
      ,"Mahavatse II,TOLIARA Madagascar": "Mahavatse II, Toliara, Madagascar"
      ,"Confection et Personnalisation": "Tailoring & Customization"
      ,"Votre idée, notre savoir-faire !": "Your idea, our expertise!"
      ,"HOPENESS vous accompagne dans la création et la personnalisation de ": "HOPENESS supports you in creating and customizing "
      ,"vetement, logos, et support visuels. Que ce soit pour votre entreprise. ": "clothing, logos, and visual materials for your business, "
      ,"club, association ou usage personnel, donnez vie a vos idée avec des produits de qualité et un service sur mesure.": "club, association, or personal use. Bring your ideas to life with quality products and personalized service."
      ,"Nos realisations": "Our work"
      ,"Decouvrez quelques exemple de nos créations.": "Discover some examples of our work."
      ,"Equipe créative et professionelle": "Creative, professional team"
      ,"Delais respectés": "On-time delivery"
      ,"Vous avez un projet ?": "Have a project?"
      ,"Contactez-nous des maintenant pour une devis personnalisé.": "Contact us today for a personalized quote."
      ,"Nous contactez": "Contact us"
      ,"Notre école en images": "Our school in pictures"
      ,"Apprendre aujourd'hui, réparer demain": "Learn today, repair tomorrow"
      ,"Formez-vous aux métiers de la mécanique automobile et ": "Train for a career in automotive mechanics and "
      ,"construisez votre avenir avec nous.": "build your future with us."
      ,"Des parcours adaptés a tous les niveaux, du débutant au professionnel.": "Programs for every level, from beginner to professional."
      ,"Cours d'Informatique": "Computer Science Course"
      ,"Maitrisez les outils d'aujoud'hui, construisez le métier de demain !": "Master today's tools and build tomorrow's career!"
      ,"Chez ": "At "
      ,"nous vous formons aux compétences numériques": "we train you in the digital skills"
      ,"indispensable pour réussir dans un monde connecté. Que vous soyez ": "you need to succeed in a connected world. Whether you are a "
      ,"Débutant ou souhaitiez vous perfectionner, nos formations s'adaptent ": "beginner or looking to improve, our courses are tailored "
      ,"a votre niveau et a vos objectifs.": "to your level and goals."
      ,"Une formation complète, pratique et orientée vers l'employabilité.": "Comprehensive, practical training focused on employability."
      ,"Nos parcours de formation": "Our training paths"
      ,"Une formation adaptées a tous les niveaux du debutant a l'avancé.": "Training for all levels, from beginner to advanced."
      ,"Maitriser le Word": "Master Microsoft Word"
      ,"Maitriser le Excel": "Master Microsoft Excel"
      ,"Maitriser le PowerPoint": "Master Microsoft PowerPoint"
      ,"Access (Base de donnée)": "Access (Database)"
      ,"Excel avancé": "Advanced Excel"
      ,"Gestion des fichiers": "File management"
      ,"Outils collaboratifs": "Collaboration tools"
      ,"Apprendre , convoir, innover": "Learn, design, innovate"
      ,"Maitrisez les technologies d'aujoud'hui et ": "Master today's technologies and "
      ,"préparez-vous aux métiers de demain dans le domaine de l'électronique et de l'electrotechnique.": "prepare for tomorrow's careers in electronics and electrical engineering."
      ,"Nos services": "Our services"
      ,"Une large gamme de prestations pour répondre à tous vos besoins.": "A wide range of services to meet your needs."
      ,"Qualité des materiaux": "Quality materials"
      ,"Une programmme complet pour tous les niveaux.": "A comprehensive program for every level."
      ,"Du débutant a l'avancé, nous avons un parcours adapté a vos besoins..": "From beginner to advanced, we have a program suited to your needs."
      ,"Quelques images de nos cours": "A look inside our classes"
      ,"Decouvrez notre environnement d'apprentissage.": "Discover our learning environment."
      ,"Une approche moderne et efficace": "A modern, effective approach"
      ,"Cours en présentiel": "In-person classes"
      ,"Supports pédagogiques modernes": "Modern learning materials"
      ,"Mise en situation réelle": "Real-world practice"
      ,"Suivi personnalisé": "Personalized support"
      ,"Evaluation regulières": "Regular assessments"
      ,"Electronique de base": "Fundamentals of electronics"
      ,"Electronique appliquée (systémes embarqués)": "Applied electronics (embedded systems)"
      ,"Maintenance des equipements electronique": "Electronic equipment maintenance"
      ,"Autorisation et controle industriel": "Industrial automation and control"
      ,"Des parcours adaptés a tous les niveaux, du débutant au professionnel.": "Programs for every level, from beginner to professional."
      ,"Mécanique automobile (niveau débutant a avancé)": "Automotive mechanics (beginner to advanced)"
      ,"Diagnostic électronique auto": "Automotive electronic diagnostics"
      ,"Entretien et réparation des moteurs": "Engine maintenance and repair"
      ,"Systèmes de freinage, direction et suspension": "Braking, steering, and suspension systems"
      ,"Climatisation automobile": "Automotive air conditioning"
      ,"Formation pratique": "Hands-on training"
      ,"Ateliers équipés et véhicules réels.": "Equipped workshops and real vehicles."
      ,"Formateurs qualifiés": "Qualified instructors"
      ,"Professionnels du métier et pédagogues.": "Industry professionals and experienced educators."
      ,"Insertion professionnelle": "Career placement"
      ,"Aide a l'emploi et partenariats.": "Job assistance and partnerships."
      ,"Diplome": "Diploma"
      ,"Attestation a la fin de la formation.": "Certificate awarded upon completion."
      ,"Materiel moderne": "Modern equipment"
      ,"Equipements et outils professionnels.": "Professional equipment and tools."
      ,"Encadrement personnalisé": "Personalized guidance"
      ,"Suivi individuel de chaque apprenant.": "Individual support for every learner."
      ,"Stage en entreprise": "Company internship"
      ,"Mise en pratique en milieu professionnel.": "Practical experience in a professional setting."
      ,"Taux de réussite élevé": "High success rate"
      ,"Nos anciens diplomés sont sur le terrain.": "Our graduates are already working in the field."
      ,"Plateaux techniques": "Technical facilities"
      ,"Equipements modernes et variés.": "Modern, versatile equipment."
      ,"Projets concrets": "Hands-on projects"
      ,"Réalisation des projets réels.": "Work on real-world projects."
      ,"Encadrement de qualité": "Quality guidance"
      ,"Suivi et accompagnement personnalisé.": "Personalized support and guidance."
      ,"Partenariats": "Partnerships"
      ,"Avec des entreprises et des acteurs du secteur.": "With companies and industry stakeholders."
      ,"Formations modermes": "Modern training"
      ,"Théorie et pratique sur équipements réels.": "Theory and practice using real equipment."
      ,"Formateurs experts": "Expert instructors"
      ,"Ingénieurs et techniciens expérimentés.": "Experienced engineers and technicians."
      ,"Débouchés garantis": "Career opportunities"
      ,"Un secteur en pleine croissance.": "A rapidly growing industry."
      ,"Diplome certifié": "Certified diploma"
      ,"Reconnu par l'Etat et les entreprises.": "Recognized by the government and employers."
      ,"Confection des vêtements": "Clothing production"
      ,"T-Shirt, Polos, Sweats, vestes, uniforme.": "T-shirts, polos, sweatshirts, jackets, and uniforms."
      ,"Designs unique et professionnels.": "Unique, professional designs."
      ,"Impression personnalisée": "Custom printing"
      ,"Sérigraphie, transfert, DTF, broderie....": "Screen printing, transfer, DTF, and embroidery."
      ,"Noms, numéros, motifs, textes....": "Names, numbers, designs, and text."
      ,"Notre centre": "Our center"
      ,"En ligne • Infos sur ": "Online • Information about "
      ,"Assistant IA": "AI assistant"
      ,"Ouvrir l'assistant": "Open the assistant"
      ,"Fermer l'assistant": "Close the assistant"
      ,"Posez une question. . .": "Ask a question..."
      ,"Bonjour ! Je suis l'assistant virtuel du Centre de Formation Professionnel HOPENESS. Posez-moi vos questions sur ses formations. ": "Hello! I'm HOPENESS's virtual assistant. Ask me anything about our training programs. "
      ,"Retour en haut": "Back to top"
      ,"Localisation de l'entreprise": "Business location"
      ,"Obtenir l'itinéraire": "Get directions"
      ,"Cours théorique et pratique": "Theory and practical classes"
      ,"Projets concrète": "Practical projects"
      ,"Encadrement par des professionnels": "Guidance from professionals"
      ,"Accés a des ressources numériques": "Access to digital resources"
      ,"Suivi et évaluation regulières": "Regular support and assessments"
      ,"Oups, je rencontre un petit problème technique.": "Sorry, I'm having a technical issue."
      ,"Impossible de joindre mon serveur pour le moment.": "I can't reach my server right now."
      ,"Confection sur mesure": "Custom tailoring"
      ,"Création de logos": "Logo design"
      ,"Personnalisation T-shirts/Polos": "Custom T-shirts and polos"
      ,"Boutique de costumes": "Suit shop"
      ,"Bureautique": "Office software"
      ,"Atelier de mécanique automobile": "Automotive mechanics workshop"
      ,"Atelier d'électronique": "Electronics workshop"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        activities: "Activités",
        about: "À propos",
        shop: "Boutique",
        contact: "Contact",
        contactUs: "Nous contacter",
        courses: {
          title: "Formations",
          french: "Cours de Français",
          english: "Cours d'Anglais",
          computer: "Informatique",
          mechanics: "Mécanique automobile",
          electronics: "Électronique",
          confection: "Confection & personnalisation"
        }
      },
      hero: {
        title: "Centre de formation professionnelle",
        heading: "Développez vos compétences, construisez votre avenir.",
        subtitle: "Hopeness always hopeness",
        discover: "Découvrir nos formations"
      },
      home: {
        slogan: "Hopeness always hopeness",
        title: "Façonnez votre avenir professionnel avec",
        description: "Centre de formation professionnelle d'excellence, école de mécanique automobile, confection textile et création sur mesure.",
        ctaRegister: "Inscrivez-vous maintenant",
        ctaDiscover: "Découvrir nos programmes",
        reassurance1: "Formation Pratique",
        reassurance2: "Mécanique 1 An",
        reassurance3: "Confection Sur Mesure",
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        activities: "Activities",
        about: "About",
        shop: "Shop",
        contact: "Contact",
        contactUs: "Contact us",
        courses: {
          title: "Training Programs",
          french: "French Course",
          english: "English Course",
          computer: "Computer Science",
          mechanics: "Automotive Mechanics",
          electronics: "Electronics",
          confection: "Tailoring & Customization"
        }
      },
      hero: {
        title: "Professional training center",
        heading: "Develop your skills, build your future.",
        subtitle: "Hopeness always hopeness",
        discover: "Discover our courses"
      },
      home: {
        slogan: "Hopeness always hopeness",
        title: "Shape your professional future with",
        description: "Center of excellence for professional training, automotive mechanics school, textile confection and custom creation.",
        ctaRegister: "Register now",
        ctaDiscover: "Discover our programs",
        reassurance1: "Practical Training",
        reassurance2: "1 Year Mechanics",
        reassurance3: "Custom Tailoring",
      }
    }
  }
};

// Keep the existing French copy as phrase keys, then merge those translations into English.
const englishPhraseTranslations = resources.phrases.translation;
delete resources.phrases;

resources.en.translation = {
  ...englishPhraseTranslations,
  ...resources.en.translation,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('hopeness_language') || "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export const translate = (phrase) =>
  i18n.language.startsWith('en') ? i18n.t(phrase, { keySeparator: false }) : phrase;

 i18n.on('languageChanged', (language) => {
  localStorage.setItem('hopeness_language', language);
});

export default i18n;
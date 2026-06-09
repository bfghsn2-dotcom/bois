/* ========================================
   INTERNATIONALIZATION (i18n)
   ======================================== */

const translations = {
  fr: {
    'nav.services': 'Artisanat',
    'nav.creations': 'Créations',
    'nav.products': 'Produits',
    'nav.process': 'Processus',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    
    'hero.eyebrow': 'Artisanat du bois d\'olivier',
    'hero.title1': 'Bois d\'Olive',
    'hero.title2': 'Crafted With Passion',
    'hero.desc': 'Nous façonnons à la main des pièces uniques en bois d\'olivier : ustensiles, planches, objets décoratifs et créations sur mesure.',
    'hero.cta1': 'Découvrir nos créations',
    'hero.cta2': 'Nous contacter',
    'hero.stat1': 'Bois d\'olivier',
    'hero.stat2': 'Fait main',
    'hero.stat3': 'Tunisie',
    
    'services.tag': 'Notre savoir-faire',
    'services.title': 'Artisanat en Bois',
    'services.desc': 'Chaque pièce est taillée, poncée et finie à la main avec le respect d\'une tradition séculaire.',
    'services.s1.title': 'Créations sur mesure',
    'services.s1.desc': 'Pièces personnalisées selon vos envies : dimensions, formes et finitions adaptées à chaque projet.',
    'services.s2.title': 'Ustensiles & cuisine',
    'services.s2.desc': 'Planches à découper, saladiers, cuillères et accessoires de cuisine en bois d\'olivier naturel.',
    'services.s3.title': 'Décoration & mobilier',
    'services.s3.desc': 'Objets décoratifs, cadres, étagères et petits meubles sculptés dans le bois d\'olivier le plus noble.',
    
    'creations.tag': 'Nos créations',
    'creations.title': 'Pièces Artisanales',
    'creations.desc': 'Le bois d\'olivier offre des veinures uniques — chaque pièce est donc véritablement unique.',
    'creations.p1.title': 'Planches à découper',
    'creations.p1.desc': 'Robustes et élégantes, parfaites pour la cuisine quotidienne.',
    'creations.p2.title': 'Saladiers & bols',
    'creations.p2.desc': 'Tournés à la main, aux veinures chaudes et naturelles.',
    'creations.p3.title': 'Cuillères & ustensiles',
    'creations.p3.desc': 'Douces au toucher, idéales pour la cuisine et la table.',
    'creations.p4.title': 'Objets décoratifs',
    'creations.p4.desc': 'Sculptures, cadres et pièces d\'art pour embellir votre intérieur.',
    
    'products.tag': 'Nos produits',
    'products.title': 'Produits en Bois d\'Olivier',
    'products.desc': 'Découvrez notre collection complète de produits artisanaux, chacun unique et façonné avec passion.',
    'products.badge1': 'Planche',
    'products.badge2': 'Bol',
    'products.badge3': 'Ustensile',
    'products.badge4': 'Décoration',
    'products.badge5': 'Ensemble',
    'products.badge6': 'Sur mesure',
    'products.badge7': 'Pizza',
    'products.badge8': 'Jeu',
    'products.badge9': 'Plateau',
    'products.badge10': 'Plateau',
    'products.badge11': 'Accessoire',
    'products.badge12': 'Accessoire',
    'products.p1.title': 'Planches à découper',
    'products.p1.desc': 'Planches robustes et élégantes en bois d\'olivier massif, parfaites pour la cuisine quotidienne.',
    'products.p2.title': 'Saladiers & bols',
    'products.p2.desc': 'Bols tournés à la main avec des veinures chaudes et naturelles, idéaux pour la table.',
    'products.p3.title': 'Cuillères & ustensiles',
    'products.p3.desc': 'Cuillères douces au toucher, tournées à la main pour la cuisine et la table.',
    'products.p4.title': 'Objets décoratifs',
    'products.p4.desc': 'Sculptures et cadres en bois d\'olivier pour embellir votre intérieur avec élégance.',
    'products.p5.title': 'Ensembles & coffrets',
    'products.p5.desc': 'Coffrets cadeaux contenant plusieurs pièces assorties, parfaits pour offrir.',
    'products.p6.title': 'Créations sur mesure',
    'products.p6.desc': 'Pièces personnalisées selon vos envies, dimensions et finitions adaptées à votre projet.',
    'products.p7.title': 'Planches à pizza',
    'products.p7.desc': 'Planches rondes élégantes pour présenter et servir vos pizzas avec style.',
    'products.p8.title': 'Jeux d\'échecs',
    'products.p8.desc': 'Plateaux d\'échecs artisanaux en bois d\'olivier massif avec pièces sculptées.',
    'products.p9.title': 'Plateaux carrelés',
    'products.p9.desc': 'Plateaux de service avec carrelage bleu traditionnel, parfaits pour la cuisine marocaine.',
    'products.p10.title': 'Plateaux avec poignées',
    'products.p10.desc': 'Plateaux de service ergonomiques avec poignées intégrées pour un transport facile.',
    'products.p11.title': 'Cuillères à sauce',
    'products.p11.desc': 'Cuillères sculptées pour servir les sauces et les condiments avec élégance.',
    'products.p12.title': 'Cuillères à miel',
    'products.p12.desc': 'Cuillères spécialisées pour le miel et les sirops, avec design ergonomique.',
    'products.badge13': 'Bols',
    'products.badge14': 'Serveurs',
    'products.badge15': 'Plateau',
    'products.badge16': 'Planche',
    'products.badge17': 'Accessoire',
    'products.badge18': 'Accessoire',
    'products.p13.title': 'Bols emboîtables',
    'products.p13.desc': 'Ensembles de bols imbriqués en tailles progressives, parfaits pour le rangement et la présentation.',
    'products.p14.title': 'Serveurs à salade',
    'products.p14.desc': 'Paires de serveurs sculptés pour servir les salades et les plats avec élégance et facilité.',
    'products.p15.title': 'Plateaux compartimentés',
    'products.p15.desc': 'Plateaux divisés pour les apéritifs et les entrées, avec compartiments séparés pour différents mets.',
    'products.p16.title': 'Planches bord vivant',
    'products.p16.desc': 'Planches avec bords naturels préservés, mettant en valeur la beauté brute du bois d\'olivier.',
    'products.p17.title': 'Supports de présentation',
    'products.p17.desc': 'Supports sculptés pour présenter les fromages, charcuteries et autres délices culinaires.',
    'products.p18.title': 'Bols à trempage',
    'products.p18.desc': 'Petits bols profonds pour les sauces, les trempettes et les condiments, avec design ergonomique.',
    'products.price': 'À partir de',
    
    'process.tag': 'Notre processus',
    'process.title': 'Du Bois Brut à l\'Œuvre d\'Art',
    'process.desc': 'Découvrez le voyage de transformation du bois d\'olivier brut en pièces artisanales magnifiques.',
    'process.p1.title': 'Sélection du bois',
    'process.p1.desc': 'Nous sélectionnons les plus beaux bois d\'olivier, en cherchant les veinures et les motifs naturels les plus remarquables.',
    'process.p2.title': 'Découpe et façonnage',
    'process.p2.desc': 'Le bois est découpé et façonné selon les formes désirées, en utilisant des techniques traditionnelles et modernes.',
    'process.p3.title': 'Ponçage et finition',
    'process.p3.desc': 'Chaque pièce est poncée à la main pour obtenir une surface lisse et agréable au toucher.',
    'process.p4.title': 'Traitement naturel',
    'process.p4.desc': 'Les pièces sont traitées avec des huiles naturelles pour protéger le bois et mettre en valeur sa beauté.',
    'products.cta': 'Voir plus',
    'products.quantity': 'Quantité:',
    'products.order': 'Commander',
    
    'admin.login.title': 'Connexion Admin',
    'admin.login.password': 'Mot de passe:',
    'admin.login.submit': 'Se connecter',
    'admin.dashboard.title': 'Tableau de bord Admin',
    'admin.tabs.orders': 'Commandes',
    'admin.tabs.products': 'Produits',
    'admin.tabs.stats': 'Statistiques',
    'admin.orders.title': 'Commandes reçues',
    'admin.orders.empty': 'Aucune commande pour le moment',
    'admin.stats.title': 'Statistiques',
    'admin.stats.total_orders': 'Total des commandes:',
    'admin.stats.total_items': 'Total des articles:',
    'admin.logout': 'Déconnexion',
    'admin.orders.delete': 'Supprimer',
    'admin.products.edit': 'Éditer',
    'admin.products.delete': 'Supprimer',
    'admin.products.add': '+ Ajouter un produit',
    
    'order.title': 'Confirmer la commande',
    'order.name': 'Nom:',
    'order.email': 'Email:',
    'order.phone': 'Téléphone:',
    'order.notes': 'Notes spéciales:',
    'order.submit': 'Soumettre la commande',
    'order.success': 'Votre commande a été soumise avec succès! Nous vous appellerons bientôt pour confirmer et discuter du prix.',
    
    'about.tag': 'À propos',
    'about.title': 'Façonné avec passion',
    'about.p1': 'Artis\'Olive Wood est un atelier artisanal basé à Sfax, Tunisie. Nous travaillons exclusivement le bois d\'olivier — un matériau noble, dense et durable, aux veinures magnifiques.',
    'about.p2': 'Chaque pièce est façonnée à la main, du choix du bois à la finition finale, avec une attention méticuleuse portée aux détails pour des objets authentiques et intemporels.',
    'about.f1': '✦ Bois d\'olivier 100% naturel',
    'about.f2': '✦ Artisanat fait main à Sfax',
    'about.f3': '✦ Commandes personnalisées sur demande',
    
    'contact.tag': 'Contact',
    'contact.title': 'Commandez votre pièce',
    'contact.desc': 'Une idée, une mesure, un projet ? Contactez-nous pour une création sur mesure.',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.location': 'Localisation',
    'contact.infoTitle': 'Coordonnées',
    'contact.formTitle': 'Envoyez-nous un message',
    
    'form.name': 'Nom',
    'form.email': 'Email',
    'form.subject': 'Sujet',
    'form.message': 'Message',
    'form.submit': 'Envoyer le message',
    
    'footer.tagline': 'Crafted With Passion',
    'footer.navTitle': 'Navigation',
    'footer.contactTitle': 'Contact',
    'footer.copy': '© 2026 Artis\'Olive Wood. Tous droits réservés.',
    'nav.cart': 'Panier',
    'cart.title': 'Mon Panier',
    'cart.desc': 'Gérez vos articles avant de procéder au paiement',
    'cart.summary': 'Résumé du panier',
    'cart.subtotal': 'Sous-total:',
    'cart.tax': 'TVA (20%):',
    'cart.shipping': 'Frais de port:',
    'cart.total': 'Total:',
    'cart.checkout': 'Procéder au paiement',
    'cart.continue_shopping': 'Continuer les achats',
    'cart.empty': 'Votre panier est vide',
    'checkout.title': 'Finalisez votre commande',
    'checkout.desc': 'Complétez vos informations de livraison et de facturation',
    'checkout.personal_info': 'Informations personnelles',
    'checkout.firstname': 'Prénom',
    'checkout.lastname': 'Nom',
    'checkout.email': 'Email',
    'checkout.phone': 'Téléphone',
    'checkout.delivery': 'Adresse de livraison',
    'checkout.address': 'Adresse',
    'checkout.city': 'Ville',
    'checkout.postal': 'Code postal',
    'checkout.country': 'Pays',
    'checkout.same_billing': 'L\'adresse de facturation est la même',
    'checkout.billing': 'Adresse de facturation',
    'checkout.notes': 'Notes de commande (optionnel)',
    'checkout.submit': 'Confirmer la commande',
    'checkout.back': 'Retour au panier',
    'checkout.success': 'Commande confirmée avec succès!',
    'checkout.order_summary': 'Résumé de la commande',
    'checkout.subtotal': 'Sous-total:',
    'checkout.tax': 'TVA (20%):',
    'checkout.shipping': 'Frais de port:',
    'checkout.total': 'Total:',
  },
  
  en: {
    'nav.services': 'Craftsmanship',
    'nav.creations': 'Creations',
    'nav.products': 'Products',
    'nav.process': 'Process',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    'hero.eyebrow': 'Olive Wood Craftsmanship',
    'hero.title1': 'Olive Wood',
    'hero.title2': 'Crafted With Passion',
    'hero.desc': 'We handcraft unique pieces in olive wood: utensils, boards, decorative objects and custom creations.',
    'hero.cta1': 'Discover our creations',
    'hero.cta2': 'Contact us',
    'hero.stat1': 'Olive wood',
    'hero.stat2': 'Handmade',
    'hero.stat3': 'Tunisia',
    
    'services.tag': 'Our Expertise',
    'services.title': 'Wood Craftsmanship',
    'services.desc': 'Each piece is carved, sanded and finished by hand with respect for a centuries-old tradition.',
    'services.s1.title': 'Custom Creations',
    'services.s1.desc': 'Personalized pieces according to your wishes: dimensions, shapes and finishes adapted to each project.',
    'services.s2.title': 'Utensils & Kitchen',
    'services.s2.desc': 'Cutting boards, bowls, spoons and kitchen accessories in natural olive wood.',
    'services.s3.title': 'Decoration & Furniture',
    'services.s3.desc': 'Decorative objects, frames, shelves and small furniture carved from the finest olive wood.',
    
    'creations.tag': 'Our Creations',
    'creations.title': 'Handcrafted Pieces',
    'creations.desc': 'Olive wood offers unique grain patterns — each piece is truly one of a kind.',
    'creations.p1.title': 'Cutting Boards',
    'creations.p1.desc': 'Robust and elegant, perfect for everyday cooking.',
    'creations.p2.title': 'Bowls & Salad Bowls',
    'creations.p2.desc': 'Hand-turned with warm and natural grain patterns.',
    'creations.p3.title': 'Spoons & Utensils',
    'creations.p3.desc': 'Soft to the touch, ideal for cooking and dining.',
    'creations.p4.title': 'Decorative Objects',
    'creations.p4.desc': 'Sculptures, frames and art pieces to beautify your home.',
    
    'products.tag': 'Our Products',
    'products.title': 'Olive Wood Products',
    'products.desc': 'Discover our complete collection of handcrafted products, each unique and made with passion.',
    'products.badge1': 'Board',
    'products.badge2': 'Bowl',
    'products.badge3': 'Utensil',
    'products.badge4': 'Decoration',
    'products.badge5': 'Set',
    'products.badge6': 'Custom',
    'products.badge7': 'Pizza',
    'products.badge8': 'Game',
    'products.badge9': 'Tray',
    'products.badge10': 'Tray',
    'products.badge11': 'Accessory',
    'products.badge12': 'Accessory',
    'products.p1.title': 'Cutting Boards',
    'products.p1.desc': 'Robust and elegant cutting boards in solid olive wood, perfect for everyday cooking.',
    'products.p2.title': 'Bowls & Salad Bowls',
    'products.p2.desc': 'Hand-turned bowls with warm and natural grain patterns, ideal for the table.',
    'products.p3.title': 'Spoons & Utensils',
    'products.p3.desc': 'Soft spoons, hand-turned for cooking and dining.',
    'products.p4.title': 'Decorative Objects',
    'products.p4.desc': 'Sculptures and frames in olive wood to beautify your home with elegance.',
    'products.p5.title': 'Sets & Gift Boxes',
    'products.p5.desc': 'Gift boxes containing several assorted pieces, perfect for giving.',
    'products.p6.title': 'Custom Creations',
    'products.p6.desc': 'Personalized pieces according to your wishes, dimensions and finishes adapted to your project.',
    'products.p7.title': 'Pizza Boards',
    'products.p7.desc': 'Elegant round boards to present and serve your pizzas in style.',
    'products.p8.title': 'Chess Sets',
    'products.p8.desc': 'Artisanal chess boards in solid olive wood with hand-carved pieces.',
    'products.p9.title': 'Tiled Trays',
    'products.p9.desc': 'Service trays with traditional blue tile work, perfect for Moroccan cuisine.',
    'products.p10.title': 'Trays with Handles',
    'products.p10.desc': 'Ergonomic service trays with integrated handles for easy transport.',
    'products.p11.title': 'Sauce Spoons',
    'products.p11.desc': 'Carved spoons for serving sauces and condiments with elegance.',
    'products.p12.title': 'Honey Spoons',
    'products.p12.desc': 'Specialized spoons for honey and syrups, with ergonomic design.',
    'products.badge13': 'Bowls',
    'products.badge14': 'Servers',
    'products.badge15': 'Tray',
    'products.badge16': 'Board',
    'products.badge17': 'Accessory',
    'products.badge18': 'Accessory',
    'products.p13.title': 'Nesting Bowls',
    'products.p13.desc': 'Sets of nested bowls in progressive sizes, perfect for storage and presentation.',
    'products.p14.title': 'Salad Servers',
    'products.p14.desc': 'Pairs of carved servers for serving salads and dishes with elegance and ease.',
    'products.p15.title': 'Compartmented Trays',
    'products.p15.desc': 'Divided trays for appetizers and starters, with separate compartments for different foods.',
    'products.p16.title': 'Live Edge Boards',
    'products.p16.desc': 'Boards with preserved natural edges, showcasing the raw beauty of olive wood.',
    'products.p17.title': 'Presentation Stands',
    'products.p17.desc': 'Carved stands for presenting cheeses, charcuterie and other culinary delights.',
    'products.p18.title': 'Dipping Bowls',
    'products.p18.desc': 'Small deep bowls for sauces, dips and condiments, with ergonomic design.',
    'products.price': 'From',
    
    'process.tag': 'Our Process',
    'process.title': 'From Raw Wood to Masterpiece',
    'process.desc': 'Discover the transformation journey of raw olive wood into magnificent handcrafted pieces.',
    'process.p1.title': 'Wood Selection',
    'process.p1.desc': 'We select the finest olive wood, seeking the most remarkable grain patterns and natural motifs.',
    'process.p2.title': 'Cutting & Shaping',
    'process.p2.desc': 'The wood is cut and shaped according to desired forms, using both traditional and modern techniques.',
    'process.p3.title': 'Sanding & Finishing',
    'process.p3.desc': 'Each piece is hand-sanded to achieve a smooth and pleasant surface to the touch.',
    'process.p4.title': 'Natural Treatment',
    'process.p4.desc': 'Pieces are treated with natural oils to protect the wood and enhance its natural beauty.',
    'products.cta': 'Learn more',
    'products.quantity': 'Quantity:',
    'products.order': 'Order',
    
    'admin.login.title': 'Admin Login',
    'admin.login.password': 'Password:',
    'admin.login.submit': 'Login',
    'admin.dashboard.title': 'Admin Dashboard',
    'admin.tabs.orders': 'Orders',
    'admin.tabs.products': 'Products',
    'admin.tabs.stats': 'Statistics',
    'admin.orders.title': 'Received Orders',
    'admin.orders.empty': 'No orders yet',
    'admin.stats.title': 'Statistics',
    'admin.stats.total_orders': 'Total Orders:',
    'admin.stats.total_items': 'Total Items:',
    'admin.logout': 'Logout',
    'admin.orders.delete': 'Delete',
    'admin.products.edit': 'Edit',
    'admin.products.delete': 'Delete',
    'admin.products.add': '+ Add Product',
    
    'order.title': 'Confirm Order',
    'order.name': 'Name:',
    'order.email': 'Email:',
    'order.phone': 'Phone:',
    'order.notes': 'Special Notes:',
    'order.submit': 'Submit Order',
    'order.success': 'Your order has been submitted successfully! We will call you soon to confirm and discuss the price.',
    
    'about.tag': 'About',
    'about.title': 'Crafted with Passion',
    'about.p1': 'Artis\'Olive Wood is an artisanal workshop based in Sfax, Tunisia. We work exclusively with olive wood — a noble, dense and durable material with magnificent grain patterns.',
    'about.p2': 'Each piece is handcrafted, from the choice of wood to the final finish, with meticulous attention to detail for authentic and timeless objects.',
    'about.f1': '✦ 100% natural olive wood',
    'about.f2': '✦ Handmade craftsmanship in Sfax',
    'about.f3': '✦ Custom orders on request',
    
    'contact.tag': 'Contact',
    'contact.title': 'Order Your Piece',
    'contact.desc': 'An idea, a measurement, a project? Contact us for a custom creation.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.infoTitle': 'Contact details',
    'contact.formTitle': 'Send us a message',
    
    'form.name': 'Name',
    'form.email': 'Email',
    'form.subject': 'Subject',
    'form.message': 'Message',
    'form.submit': 'Send Message',
    
    'footer.tagline': 'Crafted With Passion',
    'footer.navTitle': 'Navigation',
    'footer.contactTitle': 'Contact',
    'footer.copy': '© 2026 Artis\'Olive Wood. All rights reserved.',
    'nav.cart': 'Cart',
    'cart.title': 'My Cart',
    'cart.desc': 'Manage your items before checkout',
    'cart.summary': 'Cart Summary',
    'cart.subtotal': 'Subtotal:',
    'cart.tax': 'Tax (20%):',
    'cart.shipping': 'Shipping:',
    'cart.total': 'Total:',
    'cart.checkout': 'Proceed to Checkout',
    'cart.continue_shopping': 'Continue Shopping',
    'cart.empty': 'Your cart is empty',
    'checkout.title': 'Complete Your Order',
    'checkout.desc': 'Fill in your delivery and billing information',
    'checkout.personal_info': 'Personal Information',
    'checkout.firstname': 'First Name',
    'checkout.lastname': 'Last Name',
    'checkout.email': 'Email',
    'checkout.phone': 'Phone',
    'checkout.delivery': 'Delivery Address',
    'checkout.address': 'Address',
    'checkout.city': 'City',
    'checkout.postal': 'Postal Code',
    'checkout.country': 'Country',
    'checkout.same_billing': 'Billing address is the same',
    'checkout.billing': 'Billing Address',
    'checkout.notes': 'Order Notes (optional)',
    'checkout.submit': 'Confirm Order',
    'checkout.back': 'Back to Cart',
    'checkout.success': 'Order confirmed successfully!',
    'checkout.order_summary': 'Order Summary',
    'checkout.subtotal': 'Subtotal:',
    'checkout.tax': 'Tax (20%):',
    'checkout.shipping': 'Shipping:',
    'checkout.total': 'Total:',
  },
  
  de: {
    'nav.services': 'Handwerk',
    'nav.creations': 'Kreationen',
    'nav.products': 'Produkte',
    'nav.process': 'Prozess',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    
    'hero.eyebrow': 'Olivenholz-Handwerk',
    'hero.title1': 'Olivenholz',
    'hero.title2': 'Crafted With Passion',
    'hero.desc': 'Wir fertigen einzigartige Stücke aus Olivenholz: Utensilien, Bretter, Dekorationsobjekte und maßgefertigte Kreationen.',
    'hero.cta1': 'Unsere Kreationen entdecken',
    'hero.cta2': 'Kontaktieren Sie uns',
    'hero.stat1': 'Olivenholz',
    'hero.stat2': 'Handgefertigt',
    'hero.stat3': 'Tunesien',
    
    'services.tag': 'Unsere Expertise',
    'services.title': 'Holzhandwerk',
    'services.desc': 'Jedes Stück wird von Hand geschnitzt, geschliffen und fertiggestellt mit Respekt vor einer jahrhundertealten Tradition.',
    'services.s1.title': 'Maßgefertigte Kreationen',
    'services.s1.desc': 'Personalisierte Stücke nach Ihren Wünschen: Abmessungen, Formen und Oberflächen für jedes Projekt.',
    'services.s2.title': 'Utensilien & Küche',
    'services.s2.desc': 'Schneidbretter, Schüsseln, Löffel und Küchengeräte aus natürlichem Olivenholz.',
    'services.s3.title': 'Dekoration & Möbel',
    'services.s3.desc': 'Dekorationsobjekte, Rahmen, Regale und kleine Möbel aus edelstem Olivenholz.',
    
    'creations.tag': 'Unsere Kreationen',
    'creations.title': 'Handgefertigte Stücke',
    'creations.desc': 'Olivenholz bietet einzigartige Maserungen — jedes Stück ist wirklich einzigartig.',
    'creations.p1.title': 'Schneidbretter',
    'creations.p1.desc': 'Robust und elegant, perfekt für den täglichen Gebrauch.',
    'creations.p2.title': 'Schüsseln & Salatschüsseln',
    'creations.p2.desc': 'Von Hand gedreht mit warmen und natürlichen Maserungen.',
    'creations.p3.title': 'Löffel & Utensilien',
    'creations.p3.desc': 'Angenehm in der Hand, ideal für Küche und Tisch.',
    'creations.p4.title': 'Dekorationsobjekte',
    'creations.p4.desc': 'Skulpturen, Rahmen und Kunstwerke zur Verschönerung Ihres Hauses.',
    
    'products.tag': 'Unsere Produkte',
    'products.title': 'Olivenholz-Produkte',
    'products.desc': 'Entdecken Sie unsere komplette Kollektion handgefertigter Produkte, jedes einzigartig und mit Leidenschaft gefertigt.',
    'products.badge1': 'Brett',
    'products.badge2': 'Schüssel',
    'products.badge3': 'Utensil',
    'products.badge4': 'Dekoration',
    'products.badge5': 'Set',
    'products.badge6': 'Maßgefertigt',
    'products.badge7': 'Pizza',
    'products.badge8': 'Spiel',
    'products.badge9': 'Tablett',
    'products.badge10': 'Tablett',
    'products.badge11': 'Zubehör',
    'products.badge12': 'Zubehör',
    'products.p1.title': 'Schneidbretter',
    'products.p1.desc': 'Robuste und elegante Schneidbretter aus massivem Olivenholz, perfekt für den täglichen Gebrauch.',
    'products.p2.title': 'Schüsseln & Salatschüsseln',
    'products.p2.desc': 'Von Hand gedrehte Schüsseln mit warmen und natürlichen Maserungen, ideal für den Tisch.',
    'products.p3.title': 'Löffel & Utensilien',
    'products.p3.desc': 'Angenehme Löffel, von Hand gedreht für Küche und Tisch.',
    'products.p4.title': 'Dekorationsobjekte',
    'products.p4.desc': 'Skulpturen und Rahmen aus Olivenholz zur eleganten Verschönerung Ihres Hauses.',
    'products.p5.title': 'Sets & Geschenkboxen',
    'products.p5.desc': 'Geschenkboxen mit mehreren sortierten Stücken, perfekt zum Verschenken.',
    'products.p6.title': 'Maßgefertigte Kreationen',
    'products.p6.desc': 'Personalisierte Stücke nach Ihren Wünschen, Abmessungen und Oberflächen für Ihr Projekt.',
    'products.p7.title': 'Pizzabretter',
    'products.p7.desc': 'Elegante runde Bretter zur Präsentation und zum Servieren Ihrer Pizzas mit Stil.',
    'products.p8.title': 'Schachspiele',
    'products.p8.desc': 'Handwerkliche Schachbretter aus massivem Olivenholz mit handgeschnitzten Figuren.',
    'products.p9.title': 'Geflieste Tabletts',
    'products.p9.desc': 'Serviertabletts mit traditioneller blauer Fliesenarbeit, perfekt für marokkanische Küche.',
    'products.p10.title': 'Tabletts mit Griffen',
    'products.p10.desc': 'Ergonomische Serviertabletts mit integrierten Griffen für einfachen Transport.',
    'products.p11.title': 'Saucenlöffel',
    'products.p11.desc': 'Geschnitzte Löffel zum Servieren von Saucen und Gewürzen mit Eleganz.',
    'products.p12.title': 'Honigelöffel',
    'products.p12.desc': 'Spezialisierte Löffel für Honig und Sirupe mit ergonomischem Design.',
    'products.badge13': 'Schüsseln',
    'products.badge14': 'Server',
    'products.badge15': 'Tablett',
    'products.badge16': 'Brett',
    'products.badge17': 'Zubehör',
    'products.badge18': 'Zubehör',
    'products.p13.title': 'Verschachtelte Schüsseln',
    'products.p13.desc': 'Sätze verschachtelter Schüsseln in progressiven Größen, perfekt für Lagerung und Präsentation.',
    'products.p14.title': 'Salatserver',
    'products.p14.desc': 'Paare geschnitzter Server zum Servieren von Salaten und Speisen mit Eleganz und Leichtigkeit.',
    'products.p15.title': 'Geteilte Tabletts',
    'products.p15.desc': 'Geteilte Tabletts für Vorspeisen und Vorspeisen mit separaten Fächern für verschiedene Lebensmittel.',
    'products.p16.title': 'Bretter mit lebender Kante',
    'products.p16.desc': 'Bretter mit erhaltenen natürlichen Kanten, die die rohe Schönheit von Olivenholz zeigen.',
    'products.p17.title': 'Präsentationsständer',
    'products.p17.desc': 'Geschnitzte Ständer zur Präsentation von Käse, Wurst und anderen kulinarischen Köstlichkeiten.',
    'products.p18.title': 'Dipschüsseln',
    'products.p18.desc': 'Kleine tiefe Schüsseln für Saucen, Dips und Gewürze mit ergonomischem Design.',
    'products.price': 'Ab',
    
    'process.tag': 'Unser Prozess',
    'process.title': 'Vom Rohholz zum Meisterwerk',
    'process.desc': 'Entdecken Sie die Transformationsreise von Rohholz zu wunderschönen handgefertigten Stücken.',
    'process.p1.title': 'Holzauswahl',
    'process.p1.desc': 'Wir wählen das feinste Olivenholz aus und suchen nach den bemerkenswertesten Maserungen und natürlichen Mustern.',
    'process.p2.title': 'Schneiden und Formen',
    'process.p2.desc': 'Das Holz wird nach gewünschten Formen geschnitten und geformt, wobei sowohl traditionelle als auch moderne Techniken verwendet werden.',
    'process.p3.title': 'Schleifen und Fertigstellung',
    'process.p3.desc': 'Jedes Stück wird von Hand geschliffen, um eine glatte und angenehme Oberfläche zu erhalten.',
    'process.p4.title': 'Natürliche Behandlung',
    'process.p4.desc': 'Stücke werden mit natürlichen Ölen behandelt, um das Holz zu schützen und seine natürliche Schönheit hervorzuheben.',
    'products.cta': 'Mehr erfahren',
    'products.quantity': 'Menge:',
    'products.order': 'Bestellen',
    
    'admin.login.title': 'Admin-Anmeldung',
    'admin.login.password': 'Passwort:',
    'admin.login.submit': 'Anmelden',
    'admin.dashboard.title': 'Admin-Dashboard',
    'admin.tabs.orders': 'Bestellungen',
    'admin.tabs.products': 'Produkte',
    'admin.tabs.stats': 'Statistiken',
    'admin.orders.title': 'Eingegangene Bestellungen',
    'admin.orders.empty': 'Noch keine Bestellungen',
    'admin.stats.title': 'Statistiken',
    'admin.stats.total_orders': 'Gesamtbestellungen:',
    'admin.stats.total_items': 'Gesamtartikel:',
    'admin.logout': 'Abmelden',
    'admin.orders.delete': 'Löschen',
    'admin.products.edit': 'Bearbeiten',
    'admin.products.delete': 'Löschen',
    'admin.products.add': '+ Produkt hinzufügen',
    
    'order.title': 'Bestellung bestätigen',
    'order.name': 'Name:',
    'order.email': 'E-Mail:',
    'order.phone': 'Telefon:',
    'order.notes': 'Spezielle Notizen:',
    'order.submit': 'Bestellung einreichen',
    'order.success': 'Ihre Bestellung wurde erfolgreich eingereicht! Wir rufen Sie bald an, um den Preis zu bestätigen und zu besprechen.',
    
    'about.tag': 'Über uns',
    'about.title': 'Mit Leidenschaft gefertigt',
    'about.p1': 'Artis\'Olive Wood ist eine Kunsthandwerkswerkstatt in Sfax, Tunesien. Wir arbeiten ausschließlich mit Olivenholz — einem edlen, dichten und langlebigen Material mit wunderschönen Maserungen.',
    'about.p2': 'Jedes Stück wird von Hand gefertigt, von der Holzauswahl bis zur endgültigen Oberflächenbehandlung, mit sorgfältiger Aufmerksamkeit für Details für authentische und zeitlose Objekte.',
    'about.f1': '✦ 100% natürliches Olivenholz',
    'about.f2': '✦ Handgefertigtes Kunsthandwerk in Sfax',
    'about.f3': '✦ Maßgefertigte Bestellungen auf Anfrage',
    
    'contact.tag': 'Kontakt',
    'contact.title': 'Bestellen Sie Ihr Stück',
    'contact.desc': 'Eine Idee, ein Maß, ein Projekt? Kontaktieren Sie uns für eine maßgefertigte Kreation.',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.location': 'Standort',
    'contact.infoTitle': 'Kontaktdaten',
    'contact.formTitle': 'Senden Sie uns eine Nachricht',
    
    'form.name': 'Name',
    'form.email': 'E-Mail',
    'form.subject': 'Betreff',
    'form.message': 'Nachricht',
    'form.submit': 'Nachricht senden',
    
    'footer.tagline': 'Crafted With Passion',
    'footer.navTitle': 'Navigation',
    'footer.contactTitle': 'Kontakt',
    'footer.copy': '© 2026 Artis\'Olive Wood. Alle Rechte vorbehalten.',
    'nav.cart': 'Warenkorb',
    'cart.title': 'Mein Warenkorb',
    'cart.desc': 'Verwalten Sie Ihre Artikel vor dem Checkout',
    'cart.summary': 'Warenkorbzusammenfassung',
    'cart.subtotal': 'Zwischensumme:',
    'cart.tax': 'Steuern (20%):',
    'cart.shipping': 'Versand:',
    'cart.total': 'Gesamtmenge:',
    'cart.checkout': 'Zur Kasse gehen',
    'cart.continue_shopping': 'Weiter einkaufen',
    'cart.empty': 'Ihr Warenkorb ist leer',
    'checkout.title': 'Bestellung abschließen',
    'checkout.desc': 'Füllen Sie Ihre Liefer- und Rechnungsinformationen aus',
    'checkout.personal_info': 'Persönliche Informationen',
    'checkout.firstname': 'Vorname',
    'checkout.lastname': 'Nachname',
    'checkout.email': 'E-Mail',
    'checkout.phone': 'Telefon',
    'checkout.delivery': 'Lieferadresse',
    'checkout.address': 'Adresse',
    'checkout.city': 'Stadt',
    'checkout.postal': 'Postleitzahl',
    'checkout.country': 'Land',
    'checkout.same_billing': 'Rechnungsadresse ist gleich',
    'checkout.billing': 'Rechnungsadresse',
    'checkout.notes': 'Bestellnotizen (optional)',
    'checkout.submit': 'Bestellung bestätigen',
    'checkout.back': 'Zurück zum Warenkorb',
    'checkout.success': 'Bestellung erfolgreich bestätigt!',
    'checkout.order_summary': 'Bestellübersicht',
    'checkout.subtotal': 'Zwischensumme:',
    'checkout.tax': 'Steuern (20%):',
    'checkout.shipping': 'Versand:',
    'checkout.total': 'Gesamtmenge:',
  }
};

let currentLanguage = 'fr';

/* ========================================
   CART MANAGEMENT
   ======================================== */

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch (e) {
    console.error('Error getting cart:', e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Error saving cart:', e);
  }
}

function addToCart(product) {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += product.quantity || 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      badge: product.badge,
      image: product.image,
      quantity: product.quantity || 1
    });
  }
  
  saveCart(cart);
  updateCartBadge();
  alert('Produit ajouté au panier');
}

function updateCartBadge() {
  const cart = getCart();
  const badge = document.getElementById('cart-badge');
  if (badge) {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (itemCount > 0) {
      badge.textContent = itemCount;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

function initCartButton() {
  updateCartBadge();
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updateTranslations();
  updateLangButtons();
}

function updateTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[currentLanguage][key];
    if (translation) {
      element.textContent = translation;
    }
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-pressed', 'false');
    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    }
  });
}

/* ========================================
   NAVIGATION & MENU
   ======================================== */

function initNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });
  }
  
  // Close menu when a link is clicked
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  
  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
}

/* ========================================
   HEADER SCROLL EFFECT
   ======================================== */

function initHeaderScroll() {
  const header = document.getElementById('header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
      header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
  });
}

/* ========================================
   FORM HANDLING
   ======================================== */

function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      
      // Show success message
      alert('Merci pour votre message! Nous vous répondrons bientôt.' + (currentLanguage === 'en' ? '\nThank you for your message! We will reply soon.' : currentLanguage === 'de' ? '\nDanke für Ihre Nachricht! Wir werden bald antworten.' : ''));
      form.reset();
    });
  }
}

/* ========================================
   SMOOTH SCROLL BEHAVIOR
   ======================================== */

function initSmoothScroll() {
  document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ========================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   ======================================== */

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.service-card, .creation-card, .product-card, .about-logo').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

/* ========================================
   ADMIN & ORDER MANAGEMENT
   ======================================== */

let orders = JSON.parse(localStorage.getItem('orders')) || [];
let products = JSON.parse(localStorage.getItem('products')) || [];
const ADMIN_PASSWORD = 'abdallah123';
let isAdminLoggedIn = false;

// Default products from the main page - empty by default, can be added via admin
const defaultProducts = [];

// Initialize products on first load
function initializeProducts() {
  if (products.length === 0) {
    products = defaultProducts;
    saveProducts();
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
  }
}

function initAdminButton() {
  const adminBtn = document.getElementById('admin-btn');
  const adminLoginModal = document.getElementById('admin-login-modal');
  const closeLoginBtn = document.getElementById('close-login-modal');
  const adminLoginBtn = document.getElementById('admin-login-btn');
  const adminPasswordInput = document.getElementById('admin-password');
  const loginError = document.getElementById('login-error');
  
  if (adminBtn) {
    adminBtn.addEventListener('click', () => {
      if (isAdminLoggedIn) {
        openModal('admin-dashboard-modal');
        displayOrders();
      } else {
        openModal('admin-login-modal');
      }
    });
  }
  
  if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', () => closeModal('admin-login-modal'));
  }
  
  if (adminLoginBtn) {
    adminLoginBtn.addEventListener('click', () => {
      const password = adminPasswordInput.value;
      if (password === ADMIN_PASSWORD) {
        isAdminLoggedIn = true;
        loginError.textContent = '';
        closeModal('admin-login-modal');
        openModal('admin-dashboard-modal');
        displayOrders();
        adminPasswordInput.value = '';
      } else {
        loginError.textContent = 'Mot de passe incorrect';
      }
    });
  }
  
  if (adminPasswordInput) {
    adminPasswordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        adminLoginBtn.click();
      }
    });
  }
  
  const closeAdminBtn = document.getElementById('close-admin-modal');
  if (closeAdminBtn) {
    closeAdminBtn.addEventListener('click', () => closeModal('admin-dashboard-modal'));
  }
  
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      isAdminLoggedIn = false;
      closeModal('admin-dashboard-modal');
    });
  }
  
  const adminTabs = document.querySelectorAll('.admin-tab-btn');
  adminTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');
      switchAdminTab(tabName);
    });
  });
}

function switchAdminTab(tabName) {
  const tabs = document.querySelectorAll('.admin-tab-content');
  const btns = document.querySelectorAll('.admin-tab-btn');
  
  tabs.forEach(tab => tab.classList.remove('active'));
  btns.forEach(btn => btn.classList.remove('active'));
  
  const activeTab = document.getElementById(tabName + '-tab');
  if (activeTab) {
    activeTab.classList.add('active');
  }
  
  const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  if (tabName === 'stats') {
    updateStats();
  }
  
  if (tabName === 'products') {
    displayProducts();
  }
}

function displayOrders() {
  const ordersList = document.getElementById('orders-list');
  if (!ordersList) return;
  
  if (orders.length === 0) {
    ordersList.innerHTML = '<p>' + translations[currentLanguage]['admin.orders.empty'] + '</p>';
    return;
  }
  
  ordersList.innerHTML = '';
  orders.forEach((order, index) => {
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    orderItem.style.position = 'relative';
    orderItem.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;">
        <div style="flex: 1;">
          <h4 style="margin-top: 0;">Commande #${index + 1} - ${order.customerName}</h4>
          <p><strong>Email:</strong> ${order.customerEmail}</p>
          <p><strong>Téléphone:</strong> ${order.customerPhone}</p>
          <p><strong>Produits:</strong></p>
          <ul style="margin-left: 1rem; margin-top: 0.5rem;">
            ${order.items.map(item => `<li>${item.name || item.title} x ${item.quantity}</li>`).join('')}
          </ul>
          ${order.customerNotes ? `<p><strong>Notes:</strong> ${order.customerNotes}</p>` : ''}
          <div class="order-date">Date: ${new Date(order.date).toLocaleString('fr-FR')}</div>
        </div>
        <button type="button" class="btn-delete-order" data-order-index="${index}" style="background: #e74c3c; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-size: 0.9rem; white-space: nowrap;">
          ${translations[currentLanguage]['admin.orders.delete'] || 'Supprimer'}
        </button>
      </div>
    `;
    ordersList.appendChild(orderItem);
  });
  
  // Add event listeners to delete buttons
  document.querySelectorAll('.btn-delete-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.target.dataset.orderIndex);
      if (confirm('Êtes-vous sûr de vouloir supprimer cette commande?')) {
        deleteOrder(index);
      }
    });
  });
}

function renderProductsGrid() {
  const grids = document.querySelectorAll('.products-grid');
  const sections = document.querySelectorAll('.products.section');
  
  grids.forEach(grid => {
    grid.innerHTML = '';
    
    if (products.length === 0) {
      // Hide the products section when there are no products
      sections.forEach(section => section.style.display = 'none');
      return;
    }
    
    // Show the products section when there are products
    sections.forEach(section => section.style.display = 'block');
    
    products.forEach(product => {
      const imageUrl = product.image || 'assets/products/placeholder.svg';
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-image">
          <img src="${imageUrl}" alt="${product.title}" loading="lazy" />
          <span class="product-badge">${product.badge}</span>
        </div>
        <h3>${product.title}</h3>
        <p>${product.desc}</p>
        <div class="product-footer">
          <input class="qty-input" type="number" min="1" value="1" aria-label="Quantité" />
          <button type="button" class="btn btn-primary order-btn">Ajouter au panier</button>
        </div>
      `;
      grid.appendChild(card);
    });
  });
}

function displayProducts() {
  const productsList = document.getElementById('products-list');
  if (!productsList) return;
  
  if (products.length === 0) {
    productsList.innerHTML = '<p>Aucun produit trouvé</p>';
    return;
  }
  
  productsList.innerHTML = '';
  products.forEach((product, index) => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';

    const productCard = document.createElement('div');
    productCard.style.padding = '1rem';
    productCard.style.border = '1px solid #ddd';
    productCard.style.borderRadius = '4px';
    productCard.style.marginBottom = '1rem';
    productCard.style.background = '#f9f9f9';

    productCard.innerHTML = `
      <h4 style="margin: 0 0 0.5rem 0;">${product.title}</h4>
      <p style="color: #666; margin: 0.5rem 0; font-size: 0.9rem;"><strong>Catégorie:</strong> ${product.badge}</p>
      <p style="color: #666; margin: 0.5rem 0; font-size: 0.9rem;"><strong>Description:</strong> ${product.desc}</p>
    `;

    const buttonRow = document.createElement('div');
    buttonRow.style.display = 'flex';
    buttonRow.style.gap = '0.5rem';
    buttonRow.style.marginTop = '1rem';

    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'btn btn-small';
    editBtn.style.flex = '1';
    editBtn.style.padding = '0.5rem';
    editBtn.textContent = 'Éditer';
    editBtn.dataset.productId = product.id;
    editBtn.classList.add('btn-edit');
    editBtn.addEventListener('click', () => editProductModal(product.id));

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'btn btn-small';
    deleteBtn.style.flex = '1';
    deleteBtn.style.padding = '0.5rem';
    deleteBtn.style.background = '#e74c3c';
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.addEventListener('click', () => deleteProduct(product.id));

    buttonRow.appendChild(editBtn);
    buttonRow.appendChild(deleteBtn);
    productCard.appendChild(buttonRow);
    productItem.appendChild(productCard);
    productsList.appendChild(productItem);
  });
}

function setProductImagePreview(imageUrl) {
  const preview = document.getElementById('product-image-preview');
  if (!preview) return;
  if (!imageUrl) {
    preview.innerHTML = '';
    return;
  }
  preview.innerHTML = `<img src="${imageUrl}" alt="Aperçu de l'image" />`;
}

function editProductModal(productId) {
  const product = products.find(p => p.id == productId);
  if (!product) return;
  
  const modal = document.getElementById('product-edit-modal');
  const h2 = modal.querySelector('h2');
  h2.textContent = 'Éditer le produit';
  document.getElementById('product-name').value = product.title;
  document.getElementById('product-desc').value = product.desc;
  document.getElementById('product-badge').value = product.badge || '';
  document.getElementById('product-image').value = product.image || '';
  document.getElementById('product-image-upload').value = '';
  setProductImagePreview(product.image || '');
  document.getElementById('product-edit-modal').dataset.productId = productId;
  document.getElementById('product-edit-modal').dataset.mode = 'edit';
  
  openModal('product-edit-modal');
}

function addProductModal() {
  const modal = document.getElementById('product-edit-modal');
  const h2 = modal.querySelector('h2');
  h2.textContent = 'Ajouter un nouveau produit';
  document.getElementById('product-name').value = '';
  document.getElementById('product-desc').value = '';
  document.getElementById('product-badge').value = '';
  document.getElementById('product-image').value = '';
  document.getElementById('product-image-upload').value = '';
  setProductImagePreview('');
  document.getElementById('product-edit-modal').dataset.productId = '';
  document.getElementById('product-edit-modal').dataset.mode = 'add';
  
  openModal('product-edit-modal');
}

function saveProducts() {
  localStorage.setItem('products', JSON.stringify(products));
}

function deleteProduct(productId) {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce produit?')) {
    products = products.filter(p => p.id !== productId);
    saveProducts();
    displayProducts();
    renderProductsGrid();
  }
}

function deleteOrder(orderIndex) {
  orders.splice(orderIndex, 1);
  localStorage.setItem('orders', JSON.stringify(orders));
  displayOrders();
}

function editProduct(index) {
  alert('Fonction d\'édition en développement');
}

function updateStats() {
  const totalOrders = document.getElementById('total-orders');
  const totalItems = document.getElementById('total-items');
  
  if (totalOrders) {
    totalOrders.textContent = orders.length;
  }
  
  if (totalItems) {
    let itemCount = 0;
    orders.forEach(order => {
      order.items.forEach(item => {
        itemCount += item.quantity;
      });
    });
    totalItems.textContent = itemCount;
  }
}

function initOrderButtons() {
  const orderBtns = document.querySelectorAll('.order-btn');
  orderBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const productCard = btn.closest('.product-card');
      if (productCard) {
        const productTitle = productCard.querySelector('h3').textContent;
        const productBadge = productCard.querySelector('.product-badge').textContent;
        const productImage = productCard.querySelector('.product-image img').src;
        const qtyInput = productCard.querySelector('.qty-input');
        const quantity = parseInt(qtyInput.value) || 1;
        
        const product = {
          id: 'product-' + Date.now() + '-' + index,
          title: productTitle,
          badge: productBadge,
          image: productImage,
          quantity: quantity
        };
        
        addToCart(product);
      }
    });
  });
}

function showOrderModal(productName, quantity) {
  const orderSummary = document.getElementById('order-summary');
  if (orderSummary) {
    orderSummary.innerHTML = `
      <div class="order-summary-item">
        <span>Produit:</span>
        <strong>${productName}</strong>
      </div>
      <div class="order-summary-item">
        <span>Quantité:</span>
        <strong>${quantity}</strong>
      </div>
    `;
  }
  
  const submitBtn = document.getElementById('submit-order-btn');
  if (submitBtn) {
    submitBtn.onclick = () => submitOrder(productName, quantity);
  }
  
  openModal('order-modal');
}

function submitOrder(productName, quantity) {
  const customerName = document.getElementById('customer-name').value;
  const customerEmail = document.getElementById('customer-email').value;
  const customerPhone = document.getElementById('customer-phone').value;
  const customerNotes = document.getElementById('customer-notes').value;
  
  if (!customerName || !customerEmail || !customerPhone) {
    alert('Veuillez remplir tous les champs obligatoires');
    return;
  }
  
  const order = {
    date: new Date().toISOString(),
    customerName,
    customerEmail,
    customerPhone,
    customerNotes,
    items: [
      {
        name: productName,
        quantity: quantity
      }
    ]
  };
  
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  const successMsg = document.getElementById('order-success');
  if (successMsg) {
    successMsg.textContent = translations[currentLanguage]['order.success'];
  }
  
  setTimeout(() => {
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-email').value = '';
    document.getElementById('customer-phone').value = '';
    document.getElementById('customer-notes').value = '';
    successMsg.textContent = '';
    closeModal('order-modal');
  }, 2000);
}

const closeOrderModal = document.getElementById('close-order-modal');
if (closeOrderModal) {
  closeOrderModal.addEventListener('click', () => closeModal('order-modal'));
}

window.addEventListener('click', (event) => {
  const adminLoginModal = document.getElementById('admin-login-modal');
  const adminDashboardModal = document.getElementById('admin-dashboard-modal');
  const orderModal = document.getElementById('order-modal');
  
  if (event.target === adminLoginModal) {
    closeModal('admin-login-modal');
  }
  if (event.target === adminDashboardModal) {
    closeModal('admin-dashboard-modal');
  }
  if (event.target === orderModal) {
    closeModal('order-modal');
  }
});

/* ========================================
   INITIALIZATION
   ======================================== */

function initProductEditModal() {
  const saveProductBtn = document.getElementById('save-product-btn');
  const deleteProductBtn = document.getElementById('delete-product-btn');
  const closeProductBtn = document.getElementById('close-product-modal');
  const addProductBtn = document.getElementById('add-product-btn');
  
  if (closeProductBtn) {
    closeProductBtn.addEventListener('click', () => closeModal('product-edit-modal'));
  }
  const productsList = document.getElementById('products-list');
  if (productsList && !productsList.dataset.delegationAttached) {
    productsList.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-edit');
      if (!btn) return;
      const id = btn.dataset.productId;
      if (!id) return;
      editProductModal(parseInt(id));
    });
    productsList.dataset.delegationAttached = '1';
  }
  
  const productImageUpload = document.getElementById('product-image-upload');
  if (productImageUpload) {
    productImageUpload.addEventListener('change', (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        const imageInput = document.getElementById('product-image');
        if (imageInput) {
          imageInput.value = imageUrl;
        }
        setProductImagePreview(imageUrl);
      };
      reader.readAsDataURL(file);
    });
  }

  if (addProductBtn) {
    addProductBtn.addEventListener('click', () => addProductModal());
  }
  
  if (saveProductBtn) {
    saveProductBtn.addEventListener('click', () => {
      const modal = document.getElementById('product-edit-modal');
      const mode = modal.dataset.mode || 'edit';
      const productName = document.getElementById('product-name').value;
      const productDesc = document.getElementById('product-desc').value;
      const productBadge = document.getElementById('product-badge').value;
      const productImage = document.getElementById('product-image').value;
      
      if (!productName || !productDesc || !productBadge) {
        alert('Veuillez remplir tous les champs');
        return;
      }
      
      if (mode === 'add') {
        // Add new product
        const newId = Math.max(...products.map(p => p.id), 0) + 1;
        const newProduct = {
          id: newId,
          title: productName,
          desc: productDesc,
          badge: productBadge,
          image: productImage || 'assets/products/placeholder.svg'
        };
        products.push(newProduct);
        saveProducts();
        renderProductsGrid();
        initOrderButtons();
        displayProducts();
        closeModal('product-edit-modal');
        alert('Produit ajouté avec succès');
      } else {
        // Edit existing product
        const productId = parseInt(modal.dataset.productId);
        const product = products.find(p => p.id === productId);
        if (product) {
          product.title = productName;
          product.desc = productDesc;
          product.badge = productBadge;
          product.image = productImage || product.image || 'assets/products/placeholder.svg';
          saveProducts();
          renderProductsGrid();
          initOrderButtons();
          displayProducts();
          closeModal('product-edit-modal');
          alert('Produit mis à jour avec succès');
        }
      }
    });
  }
  
  if (deleteProductBtn) {
    deleteProductBtn.addEventListener('click', () => {
      const modal = document.getElementById('product-edit-modal');
      const mode = modal.dataset.mode || 'edit';
      
      if (mode === 'edit') {
        const productId = parseInt(modal.dataset.productId);
        deleteProduct(productId);
        closeModal('product-edit-modal');
      }
    });
  }

  const cancelProductBtn = document.getElementById('cancel-product-btn');
  if (cancelProductBtn) {
    cancelProductBtn.addEventListener('click', () => closeModal('product-edit-modal'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Load saved language or default to French
  const savedLanguage = localStorage.getItem('language') || 'fr';
  setLanguage(savedLanguage);
  
  // Initialize all features
  initializeProducts();
  renderProductsGrid();
  initNavigation();
  initHeaderScroll();
  initContactForm();
  initSmoothScroll();
  initScrollAnimations();
  initAdminButton();
  initOrderButtons();
  initProductEditModal();
  initCartButton();
});

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    if (navLinks) {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  }
});

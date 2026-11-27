export type MenuCategoryId = 'sourdough' | 'pastry' | 'breakfast' | 'coffee';

export interface MenuItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  portion: string;
  price: number;
  image: string;
  imageAlt: string;
  note?: string;
}

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  editorialLead: string;
  items: MenuItem[];
}

export interface OvenBatch {
  id: string;
  time: string;
  loafName: string;
  grainNote: string;
  fermentation: string;
  weight: string;
  price: number;
  remaining: number;
  image: string;
  imageAlt: string;
}

export interface SpaceCard {
  id: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
  aspectClass: string;
  isArch?: boolean;
}

export const IMAGES = {
  heroSourdough: '/src/assets/images/hero_sourdough_oven_1795766045205.jpg',
  tartineCrumb: '/src/assets/images/menu_tartine_crumb_1795766045224.jpg',
  ryeCoriander: '/src/assets/images/menu_rye_coriander_1795767578870.jpg',
  buckwheatHoney: '/src/assets/images/menu_buckwheat_honey_1795767579277.jpg',
  speltWalnut: '/src/assets/images/menu_spelt_walnut_1795767580052.jpg',
  cardamomKnot: '/src/assets/images/menu_cardamom_knot_1795767580022.jpg',
  butterCroissant: '/src/assets/images/menu_butter_croissant_1795767580516.jpg',
  pearDanish: '/src/assets/images/menu_pear_danish_1795767582054.jpg',
  cannele: '/src/assets/images/menu_cannele_1795767581169.jpg',
  breakfastCoffee: '/src/assets/images/menu_breakfast_coffee_1795766046280.jpg',
  bakerBoard: '/src/assets/images/menu_baker_breakfast_board_1795767581963.jpg',
  briocheSpinach: '/src/assets/images/menu_brioche_spinach_cheddar_1795767582107.jpg',
  oatmealBowl: '/src/assets/images/menu_oatmeal_hazelnut_apple_1795767582465.jpg',
  v60Filter: '/src/assets/images/menu_v60_filter_coffee_1795767607890.jpg',
  matchaLatte: '/src/assets/images/menu_matcha_latte_1795767608125.jpg',
  flatWhite: '/src/assets/images/menu_flat_white_1795767666012.jpg',
  batchBrew: '/src/assets/images/menu_batch_brew_1795767607112.jpg',
  cardamomCroissant: '/src/assets/images/menu_cardamom_croissant_1795766046027.jpg',
  bakeryInterior: '/src/assets/images/space_bakery_interior_1795766047173.jpg',
  retailShelf: '/src/assets/images/space_retail_shelf_1795766047942.jpg',
} as const;

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'sourdough',
    label: 'Хліб на заквасці',
    editorialLead: '36 годин холодної ферментації на дикій житньо-пшеничній заквасці без промислових дріжджів.',
    items: [
      {
        id: 'classic-tartine',
        name: 'Класичний Тартін',
        subtitle: 'Пшеничне жорнове борошно · морська сіль',
        description:
          'Тонка карамелізована скоринка з легким димом подової печі та вологий, відкритий м’якуш із молочною кислинкою.',
        portion: '850 г',
        price: 185,
        image: IMAGES.tartineCrumb,
        imageAlt: 'Свіжорозрізаний класичний тартін із відкритим м’якушем та вершковим маслом',
        note: 'Випікається о 08:30, 12:00 та 16:00',
      },
      {
        id: 'rye-coriander',
        name: 'Житній на червоному солоді',
        subtitle: 'Цільнозернове жито · мелений коріандр · кмин',
        description:
          'Щільний, пряний і довговічний буханець із заварного тіста. Ідеально розкривається на другий день із солоним маслом.',
        portion: '780 г',
        price: 195,
        image: IMAGES.ryeCoriander,
        imageAlt: 'Темний житній буханець на солоді з коріандром, нарізаний на дубовому столі',
        note: 'Партія о 10:15',
      },
      {
        id: 'buckwheat-honey',
        name: 'Гречаний із липовим медом',
        subtitle: 'Смажена зелена гречка · полтавський мед · спельта',
        description:
          'Теплий горіховий аромат обсмаженої крупи, збалансований ледь помітною медовою солодкістю та хрумким дном.',
        portion: '750 г',
        price: 210,
        image: IMAGES.buckwheatHoney,
        imageAlt: 'Гречаний хліб на заквасці зі скоринкою зі смаженої гречки та чашею липового меду',
        note: 'Партія о 12:00',
      },
      {
        id: 'spelt-walnut',
        name: 'Полб’яний із волоським горіхом',
        subtitle: 'Органічна полба · підсмажений волоський горіх · чебрець',
        description:
          'Шляхетна, ніжна структура давньої пшениці з хрусткими шматочками горіха та тонким трав’яним післясмаком.',
        portion: '800 г',
        price: 230,
        image: IMAGES.speltWalnut,
        imageAlt: 'Розрізаний полб’яний хліб із половинками волоського горіха та гілочкою чебрецю',
        note: 'Лімітована партія о 14:00',
      },
    ],
  },
  {
    id: 'pastry',
    label: 'Випічка',
    editorialLead: '72-годинне листкове тісто на фермерському маслі 82,5% жирності.',
    items: [
      {
        id: 'cardamom-knot',
        name: 'Скандинавська булка з кардамоном',
        subtitle: 'Свіжозмелений зелений кардамон · тростинний цукор · масло',
        description:
          'Заплетене вручну листкове тісто з пряним масляним прошарком і хрусткою перлинною карамеллю згори.',
        portion: '135 г',
        price: 135,
        image: IMAGES.cardamomKnot,
        imageAlt: 'Заплетена вручну скандинавська булка з кардамоном і перлинним цукром',
        note: 'Найкраще смакує з чорною фільтр-кавою',
      },
      {
        id: 'butter-croissant',
        name: 'Класичний масляний круасан',
        subtitle: 'Французька мука T45 · фермерське масло · закваска левіто',
        description:
          'Дзвінка, невагома скоринка, що розсипається на десятки тонких пластин, і медовий еластичний м’якуш усередині.',
        portion: '95 г',
        price: 120,
        image: IMAGES.butterCroissant,
        imageAlt: 'Золотавий масляний круасан із відкритою листковою структурою у розрізі',
      },
      {
        id: 'brown-butter-danish',
        name: 'Даніш із паленим маслом та грушею',
        subtitle: 'Крем дипломат · запечена груша з ваніллю · мигдаль',
        description:
          'Глибокий горіховий аромат beurre noisette у парі з ніжною кисло-солодкою сезонною грушею.',
        portion: '160 г',
        price: 165,
        image: IMAGES.pearDanish,
        imageAlt: 'Листковий даніш із ванільним кремом, карамелізованою грушею та мигдалем',
      },
      {
        id: 'cannele',
        name: 'Канеле з бурбонською ваніллю',
        subtitle: 'Мідна форма · бджолиний віск · темний ром',
        description:
          'Темна, майже скляна карамельна скоринка, що приховує ніжний, схожий на заварний крем центр.',
        portion: '65 г',
        price: 95,
        image: IMAGES.cannele,
        imageAlt: 'Французькі канеле з темною карамелізованою скоринкою та ванільним кремом всередині',
      },
    ],
  },
  {
    id: 'breakfast',
    label: 'Сніданки all-day',
    editorialLead: 'Подаємо з 08:00 до 19:00 на теплому тартіні власної випічки.',
    items: [
      {
        id: 'tartine-ricotta-egg',
        name: 'Тартін зі збитою рикотою та пашотом',
        subtitle: 'Фермерські яйця · зелена олія · пластівці чилі · рукола',
        description:
          'Хрустка підсмажена скибка тартіну, прохолодна вершкова рикота та теплий рідкий жовток із морською сіллю.',
        portion: '290 г',
        price: 275,
        image: IMAGES.breakfastCoffee,
        imageAlt: 'Тартін з яйцями пашот, рикотою та руколою у ранковому світлі',
        note: 'Подаємо з 08:00 до закриття',
      },
      {
        id: 'cultured-butter-jam',
        name: 'Ранкова дошка пекаря',
        subtitle: 'Дві скибки теплого хліба · збите солоне масло · конфітюр з інжиру',
        description:
          'Чистий смак зерна та молока без зайвих слів. Масло збиваємо щоранку з пластівцями мальдонської солі.',
        portion: '210 г',
        price: 185,
        image: IMAGES.bakerBoard,
        imageAlt: 'Дубова дошка з підсмаженим тартіном, збитим маслом із сіллю та інжирним джемом',
      },
      {
        id: 'baked-eggs-brioche',
        name: 'Бріош із томленим шпинатом та чедером',
        subtitle: 'Витриманий 12 місяців чедер · яйце омлет · діжонська гірчиця',
        description:
          'Запечений до золотистої скоринки тост на солодкуватому бріоші з пікантною гостротою сиру та м’яким яйцем.',
        portion: '270 г',
        price: 260,
        image: IMAGES.briocheSpinach,
        imageAlt: 'Товстий тост із бріошу з томленим шпинатом, витриманим чедером і скремблом',
      },
      {
        id: 'oatmeal-burnt-butter',
        name: 'Плющена вівсянка на паленому маслі',
        subtitle: 'Лісовий горіх · карамелізоване яблуко · чебрець',
        description:
          'Повільно томлена на молоці та воді каша з текстурою різотто, хрумким фундуком та краплею гречаного меду.',
        portion: '310 г',
        price: 215,
        image: IMAGES.oatmealBowl,
        imageAlt: 'Керамічна миска плющеної вівсянки з карамелізованим яблуком, фундуком і медом',
      },
    ],
  },
  {
    id: 'coffee',
    label: 'Кава та матча',
    editorialLead: 'Світле обсмаження під фільтр і еспресо, вода з контрольованою мінералізацією та японська матча з Уджі.',
    items: [
      {
        id: 'hand-filter-v60',
        name: 'Воронка V60 · Ефіопія Гуджі',
        subtitle: 'Мита обробка · ноти бергамоту, жасмину та білого персика',
        description:
          'Чистий, прозорий та чайний профіль у ручній керамічній чашці. Ідеальний супровід до ранкової випічки.',
        portion: '250 мл',
        price: 130,
        image: IMAGES.v60Filter,
        imageAlt: 'Скляна воронка V60 із сервером та керамічною чашкою бурштинової фільтр-кави',
      },
      {
        id: 'uji-matcha-latte',
        name: 'Церемоніальна матча лате',
        subtitle: 'Префектура Кіото, перший збір · вівсяне або коров’яче молоко',
        description:
          'Збита бамбуковим вінчиком до оксамитової піни. Глибокий смак умамі без жодної гіркоти.',
        portion: '220 мл',
        price: 155,
        image: IMAGES.matchaLatte,
        imageAlt: 'Матча лате в керамічній чашці поруч із бамбуковим вінчиком часен',
      },
      {
        id: 'flat-white',
        name: 'Флет-вайт · Бразилія Моджіана',
        subtitle: 'Натуральна обробка · смажений фундук, темний какао',
        description:
          'Подвійний еспресо з тонким шовковистим глянцем молока. Насичений, вершковий, зігріваючий.',
        portion: '180 мл',
        price: 115,
        image: IMAGES.flatWhite,
        imageAlt: 'Керамічна чашка флет-вайту з глянцевою мікропіною на дубовій стійці',
      },
      {
        id: 'batch-brew',
        name: 'Ранковий батч-брю',
        subtitle: 'Руанда Ківу · червона смородина, тростинний цукор',
        description:
          'Збалансована чорна кава, що чекає на вас готовою вже з 08:00 — для тих, хто забіг лише по буханець.',
        portion: '220 мл',
        price: 95,
        image: IMAGES.batchBrew,
        imageAlt: 'Матове керамічне горня гарячого батч-брю поруч із крафтовою пачкою кави',
      },
    ],
  },
];

export const OVEN_SCHEDULE: OvenBatch[] = [
  {
    id: 'batch-0830',
    time: '08:30',
    loafName: 'Класичний Тартін',
    grainNote: 'Жорнова пшениця · білий м’якуш',
    fermentation: '36 год ферментації',
    weight: '850 г',
    price: 185,
    remaining: 7,
    image: IMAGES.tartineCrumb,
    imageAlt: 'Класичний тартін першої ранкової випічки',
  },
  {
    id: 'batch-1015',
    time: '10:15',
    loafName: 'Житній на червоному солоді',
    grainNote: 'Цільнозернове жито · коріандр',
    fermentation: '40 год ферментації',
    weight: '780 г',
    price: 195,
    remaining: 5,
    image: IMAGES.ryeCoriander,
    imageAlt: 'Житній буханець на заквасці з коріандром',
  },
  {
    id: 'batch-1200',
    time: '12:00',
    loafName: 'Гречаний з липовим медом',
    grainNote: 'Смажена гречка · спельта',
    fermentation: '36 год ферментації',
    weight: '750 г',
    price: 210,
    remaining: 4,
    image: IMAGES.buckwheatHoney,
    imageAlt: 'Гречаний хліб обідньої партії з медом',
  },
  {
    id: 'batch-1400',
    time: '14:00',
    loafName: 'Полб’яний із волоським горіхом',
    grainNote: 'Органічна полба · чебрець',
    fermentation: '38 год ферментації',
    weight: '800 г',
    price: 230,
    remaining: 3,
    image: IMAGES.speltWalnut,
    imageAlt: 'Полб’яний буханець з волоськими горіхами',
  },
  {
    id: 'batch-1600',
    time: '16:00',
    loafName: 'Вечірній Тартін та Фокача з розмарином',
    grainNote: 'Оливкова олія · морська сіль',
    fermentation: '36 год ферментації',
    weight: '850 г',
    price: 185,
    remaining: 9,
    image: IMAGES.heroSourdough,
    imageAlt: 'Свіжий вечірній тартін просто з печі',
  },
  {
    id: 'batch-1730',
    time: '17:30',
    loafName: 'Традиційний багет на пуліші',
    grainNote: 'Тонка скоринка · вершковий аромат',
    fermentation: '24 год ферментації',
    weight: '310 г',
    price: 95,
    remaining: 6,
    image: IMAGES.retailShelf,
    imageAlt: 'Свіжа випічка вечірньої партії на дерев’яній полиці',
  },
];

export const SPACE_CARDS: SpaceCard[] = [
  {
    id: 'space-architecture',
    kicker: 'Архітектура та світло',
    title: 'Вапняний тиньк, теплий дуб і ранкова тиша',
    description:
      'Ми прибрали візуальний шум: лише тактильні природні поверхні, кераміка українських гончарів і панорамні вікна, що ловлять перше сонце Подолу.',
    image: IMAGES.bakeryInterior,
    imageAlt: 'Мінімалістичний інтер’єр пекарні Хлібне Місце з дубовою стійкою та арковими полицями',
    aspectClass: 'aspect-[16/9]',
  },
  {
    id: 'space-retail',
    kicker: 'Полиця додому',
    title: 'Зерно, лляні мішечки й ранкові ритуали',
    description:
      'Свіжообсмажена кава у крафтових пачках, збите масло в склі, керамічні горнята ручної роботи та хліб, загорнутий у небілений льон.',
    image: IMAGES.retailShelf,
    imageAlt: 'Дубова полиця з пачками кави світлого обсмаження та загорнутими у льон буханцями',
    aspectClass: 'aspect-[3/4]',
    isArch: true,
  },
  {
    id: 'space-coffee',
    kicker: 'Спешелті бар',
    title: 'Світле обсмаження та церемонна матча',
    description:
      'Фільтр-кава на щодень і продуманий еспресо-бар. Повага до води, температури й того, хто виростив зерно.',
    image: IMAGES.breakfastCoffee,
    imageAlt: 'Стіл зі сніданком, воронкою V60 та матча лате',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'space-pastry',
    kicker: 'Pet-friendly атмосфера',
    title: 'Ранкова прогулянка з собакою',
    description:
      'Миски з чистою водою біля входу, широкі дерев’яні лави на терасі та безліч приводів затриматися на ще одну чашку.',
    image: IMAGES.cardamomCroissant,
    imageAlt: 'Тепла випічка на лляній скатертині біля вікна',
    aspectClass: 'aspect-[4/3]',
  },
];

// 「食光小馆」全站数据层：相当于模拟后端，所有页面共享

export const categories = ['全部', '热菜', '面食', '汤品', '海鲜', '甜品']

export const dishes = [
  {
    id: 'hongshaorou',
    name: '外婆红烧肉',
    category: '热菜',
    price: 48,
    rating: 4.9,
    reviewCount: 128,
    featured: true,
    tags: ['招牌', '慢炖三小时'],
    summary: '冰糖炒色，小火慢炖。肥而不腻，入口即化，是很多人记忆里外婆家的味道。',
    story:
      '每天清晨六点，师傅会把带皮五花肉切成三指宽，用冰糖慢慢炒出琥珀色，再加黄酒、八角与老抽，小火焖足三小时。掀开锅盖的那一刻，整条巷子都是酱香。',
    ingredients: [
      { name: '带皮五花肉', amount: '500g' },
      { name: '冰糖', amount: '40g' },
      { name: '黄酒', amount: '100ml' },
      { name: '八角 / 桂皮', amount: '少许' },
      { name: '小葱', amount: '2 根' },
      { name: '老抽 / 生抽', amount: '适量' },
    ],
    reviews: [
      {
        name: '林小满',
        avatar: '林',
        date: '2026-10-18',
        rating: 5,
        text: '酱汁浓到能拌两碗饭，肉皮软糯得像果冻，打包回家又热了一次还是好吃。',
      },
      {
        name: '阿栗',
        avatar: '阿',
        date: '2026-10-02',
        rating: 5,
        text: '肥瘦比例很好，不噎人。配一小碟米饭刚刚好，推荐给第一次来的朋友。',
      },
    ],
    image: '/images/hongshaorou.jpg',
  },
  {
    id: 'beefnoodle',
    name: '一碗牛肉面',
    category: '面食',
    price: 32,
    rating: 4.8,
    reviewCount: 96,
    featured: true,
    tags: ['手工面', '清汤'],
    summary: '牛骨清汤吊一整天，手擀面现点现煮，铺上厚切牛腱与一把香菜。',
    story:
      '汤底是这碗面的灵魂。牛骨与白萝卜先大火滚、再小火吊，八小时后汤色清亮却醇厚。面是每天上午手擀的，宽窄略有不同，那是手的温度。',
    ingredients: [
      { name: '手擀面', amount: '180g' },
      { name: '牛腱肉', amount: '120g' },
      { name: '牛骨高汤', amount: '500ml' },
      { name: '白萝卜', amount: '3 片' },
      { name: '香菜 / 葱花', amount: '适量' },
      { name: '秘制辣子', amount: '1 勺' },
    ],
    reviews: [
      {
        name: '周野',
        avatar: '周',
        date: '2026-10-21',
        rating: 5,
        text: '汤清但味道很足，牛肉切得厚，冬天来一碗从胃暖到脚。',
      },
      {
        name: '木木',
        avatar: '木',
        date: '2026-09-28',
        rating: 4,
        text: '面很劲道，辣子香而不燥，就是饭点要等一会儿。',
      },
    ],
    image: '/images/beefnoodle.jpg',
  },
  {
    id: 'mapotofu',
    name: '麻婆豆腐',
    category: '热菜',
    price: 26,
    rating: 4.7,
    reviewCount: 84,
    tags: ['川味', '下饭'],
    summary: '嫩豆腐配牛肉末，豆瓣酱炒香，起锅前撒一把现磨花椒面。',
    story:
      '麻辣鲜香烫，五个字缺一不可。豆腐要用当天的嫩豆腐，牛肉末煸到酥香，最后那一把花椒面必须现磨，麻味才活。',
    ingredients: [
      { name: '嫩豆腐', amount: '1 盒' },
      { name: '牛肉末', amount: '80g' },
      { name: '郫县豆瓣酱', amount: '1 勺' },
      { name: '汉源花椒', amount: '现磨少许' },
      { name: '蒜苗', amount: '2 根' },
      { name: '水淀粉', amount: '适量' },
    ],
    reviews: [
      {
        name: '小鹿',
        avatar: '鹿',
        date: '2026-10-11',
        rating: 5,
        text: '麻得很正，豆腐一点都没碎，拌饭一绝。',
      },
      {
        name: '陈三',
        avatar: '陈',
        date: '2026-09-19',
        rating: 4,
        text: '味道不错，辣度对我刚好，怕辣的朋友可以提前说。',
      },
    ],
    image: '/images/mapotofu.jpg',
  },
  {
    id: 'steamedfish',
    name: '清蒸鲈鱼',
    category: '海鲜',
    price: 68,
    rating: 4.8,
    reviewCount: 72,
    featured: true,
    tags: ['现杀', '少油'],
    summary: '活鱼现杀，姜葱去腥，蒸八分钟，淋一勺滚烫的热油。',
    story:
      '蒸鱼看似简单，火候差一分钟肉质就老。我们的师傅蒸了二十多年鱼，只看鱼眼和鱼鳍就知道该不该起锅。',
    ingredients: [
      { name: '鲜活鲈鱼', amount: '1 条（约 600g）' },
      { name: '姜丝', amount: '15g' },
      { name: '小葱', amount: '3 根' },
      { name: '蒸鱼豉油', amount: '2 勺' },
      { name: '花生油', amount: '1 勺' },
    ],
    reviews: [
      {
        name: '苏苏',
        avatar: '苏',
        date: '2026-10-25',
        rating: 5,
        text: '鱼肉一夹就蒜瓣状散开，鲜甜得很，完全没有腥味。',
      },
      {
        name: '老徐',
        avatar: '徐',
        date: '2026-10-05',
        rating: 5,
        text: '家里老人最爱的一道，少油少盐，吃着放心。',
      },
    ],
    image: '/images/steamedfish.jpg',
  },
  {
    id: 'mushroomchicken',
    name: '菌菇鸡汤',
    category: '汤品',
    price: 38,
    rating: 4.9,
    reviewCount: 61,
    featured: true,
    tags: ['砂锅', '四小时'],
    summary: '土鸡与四种山菌，砂锅慢煨四小时，只放一点点盐。',
    story:
      '汤的颜色是淡淡的茶色，面上浮着一层薄薄的鸡油。我们不勾汤、不加味精，鲜味全靠菌子和时间。',
    ingredients: [
      { name: '散养土鸡', amount: '半只' },
      { name: '干牛肝菌', amount: '20g' },
      { name: '香菇 / 口蘑', amount: '各 50g' },
      { name: '枸杞', amount: '一小把' },
      { name: '姜片', amount: '3 片' },
      { name: '盐', amount: '少许' },
    ],
    reviews: [
      {
        name: '沈知',
        avatar: '沈',
        date: '2026-10-20',
        rating: 5,
        text: '喝得出是慢慢熬的，不是调出来的味道，鸡油香但不腻。',
      },
      {
        name: '团子',
        avatar: '团',
        date: '2026-09-30',
        rating: 5,
        text: '下雨天点这锅汤，配一碗白饭，整个人都被治愈了。',
      },
    ],
    image: '/images/mushroomchicken.jpg',
  },
  {
    id: 'garlicshrimp',
    name: '蒜蓉蒸虾',
    category: '海鲜',
    price: 58,
    rating: 4.8,
    reviewCount: 90,
    tags: ['蒜香', '粉丝'],
    summary: '开背鲜虾铺在粉丝上，蒜蓉一半炸香一半生拌，鲜味翻倍。',
    story: '蒜蓉是这道菜的全部功夫：一半用油炸到金黄，一半保持生蒜的辛香，两者拌在一起，才有层次。',
    ingredients: [
      { name: '鲜虾', amount: '12 只' },
      { name: '龙口粉丝', amount: '1 把' },
      { name: '大蒜', amount: '2 头' },
      { name: '小米辣', amount: '1 根' },
      { name: '蒸鱼豉油', amount: '1 勺' },
      { name: '葱花', amount: '适量' },
    ],
    reviews: [
      {
        name: 'Nina',
        avatar: 'N',
        date: '2026-10-16',
        rating: 5,
        text: '粉丝吸满了蒜蓉汁，比虾还抢手。虾很新鲜，壳一剥就掉。',
      },
      {
        name: '阿福',
        avatar: '福',
        date: '2026-09-24',
        rating: 4,
        text: '蒜香很足，分量也实在，适合三个人分。',
      },
    ],
    image: '/images/garlicshrimp.jpg',
  },
  {
    id: 'dumplings',
    name: '手包荠菜饺',
    category: '面食',
    price: 28,
    rating: 4.7,
    reviewCount: 113,
    tags: ['现包', '当季'],
    summary: '春天挖的荠菜拌上猪肉，阿姨们每天现包，皮薄馅大。',
    story:
      '荠菜是季节给的礼物。焯水后挤干、切碎，拌上三分肥七分瘦的猪肉，包的时候褶子要捏紧，煮起来才不破。',
    ingredients: [
      { name: '荠菜', amount: '300g' },
      { name: '猪肉馅', amount: '250g' },
      { name: '饺子皮', amount: '20 张' },
      { name: '姜末', amount: '少许' },
      { name: '香油', amount: '1 勺' },
    ],
    reviews: [
      {
        name: '豆豆',
        avatar: '豆',
        date: '2026-10-23',
        rating: 5,
        text: '荠菜的清香特别明显，蘸一点醋和辣油，一口一个停不下来。',
      },
      {
        name: '小满',
        avatar: '满',
        date: '2026-09-16',
        rating: 4,
        text: '皮薄馅足，就是荠菜季过了可能会下架，且吃且珍惜。',
      },
    ],
    image: '/images/dumplings.jpg',
  },
  {
    id: 'eggplant',
    name: '鱼香茄子',
    category: '热菜',
    price: 24,
    rating: 4.6,
    reviewCount: 58,
    tags: ['酸甜', '家常'],
    summary: '茄子先煎后烧，鱼香汁酸甜微辣，一盘能扒两碗饭。',
    story: '没有鱼，却有鱼香。泡椒、蒜、姜、糖、醋调出的复合味，是老川菜里最会骗人的温柔。',
    ingredients: [
      { name: '长茄子', amount: '2 根' },
      { name: '猪肉末', amount: '60g' },
      { name: '泡椒', amount: '2 根' },
      { name: '蒜末 / 姜末', amount: '各 1 勺' },
      { name: '糖 / 醋', amount: '各 1 勺' },
    ],
    reviews: [
      {
        name: '阿岩',
        avatar: '岩',
        date: '2026-10-14',
        rating: 5,
        text: '茄子软糯不油腻，酸甜口很开胃。',
      },
      {
        name: '欣仔',
        avatar: '欣',
        date: '2026-09-21',
        rating: 4,
        text: '味道很家常，分量足够两个人。',
      },
    ],
    image: '/images/eggplant.jpg',
  },
  {
    id: 'friedrice',
    name: '金裹银炒饭',
    category: '面食',
    price: 22,
    rating: 4.8,
    reviewCount: 77,
    tags: ['锅气', '快手'],
    summary: '隔夜米裹上蛋液，大火快炒，粒粒金黄，锅气十足。',
    story: '炒饭好吃的秘密是隔夜米和一口够热的锅。米粒在锅里跳舞的声音，是厨房里最好听的背景音。',
    ingredients: [
      { name: '隔夜米饭', amount: '300g' },
      { name: '鸡蛋', amount: '2 个' },
      { name: '葱花', amount: '1 把' },
      { name: '火腿丁', amount: '40g' },
      { name: '生抽', amount: '1 勺' },
    ],
    reviews: [
      {
        name: '胖丁',
        avatar: '胖',
        date: '2026-10-08',
        rating: 5,
        text: '粒粒分明，蛋香很浓，比很多大饭店的炒饭都好。',
      },
      {
        name: '果果',
        avatar: '果',
        date: '2026-09-12',
        rating: 4,
        text: '简单但很扎实，宵夜来一份很满足。',
      },
    ],
    image: '/images/friedrice.jpg',
  },
  {
    id: 'osmanthus',
    name: '桂花酒酿圆子',
    category: '甜品',
    price: 18,
    rating: 4.9,
    reviewCount: 142,
    tags: ['手搓圆子', '微醺'],
    summary: '糯米小圆子手搓，酒酿甜汤里撒一把干桂花，热气一冲就香了。',
    story:
      '这是我们菜单上最温柔的一道。酒酿是店里自己发的，圆子是阿姨们一颗颗搓出来的，大小不太一样，但每一颗都软糯。',
    ingredients: [
      { name: '糯米小圆子', amount: '100g' },
      { name: '自酿米酒', amount: '200ml' },
      { name: '干桂花', amount: '1 小撮' },
      { name: '枸杞', amount: '5 粒' },
      { name: '冰糖', amount: '少许' },
    ],
    reviews: [
      {
        name: '阿棠',
        avatar: '棠',
        date: '2026-10-26',
        rating: 5,
        text: '桂花香一上来就让人放松，甜度刚好，饭后吃很舒服。',
      },
      {
        name: '鹿鸣',
        avatar: '鸣',
        date: '2026-10-03',
        rating: 5,
        text: '圆子软糯不粘牙，酒酿味很轻，开车来也不怕（开玩笑的）。',
      },
    ],
    image: '/images/osmanthus.jpg',
  },
  {
    id: 'ribs',
    name: '椒盐小排',
    category: '热菜',
    price: 42,
    rating: 4.7,
    reviewCount: 65,
    tags: ['酥脆', '下酒'],
    summary: '小排先卤后炸，撒上椒盐与炸蒜末，外脆里嫩。',
    story:
      '先卤入味，再高温复炸，才能做到外壳咔嚓、里面还带汁。最后撒的椒盐是我们自己炒的，花椒和盐的比例试了很多次。',
    ingredients: [
      { name: '猪小排', amount: '400g' },
      { name: '蒜末', amount: '1 头' },
      { name: '花椒盐', amount: '2 勺' },
      { name: '干辣椒', amount: '3 个' },
      { name: '料酒', amount: '1 勺' },
    ],
    reviews: [
      {
        name: '老白',
        avatar: '白',
        date: '2026-10-19',
        rating: 5,
        text: '外壳很脆，肉不柴，配一杯冰啤酒绝了。',
      },
      {
        name: '程程',
        avatar: '程',
        date: '2026-09-26',
        rating: 4,
        text: '椒盐味很正，凉了之后稍微有一点硬，建议趁热吃。',
      },
    ],
    image: '/images/ribs.jpg',
  },
]

export const stats = [
  { value: '12', unit: '年', label: '灶火不断' },
  { value: '68', unit: '道', label: '家常味道' },
  { value: '4.9', unit: '分', label: '食客评分' },
  { value: '3.2', unit: '万', label: '位老朋友' },
]

export const testimonials = [
  {
    quote:
      '推开木门，闻到的是小时候巷口那家小馆子的味道。老板记得我不吃香菜，这件事比菜本身更让人记得住。',
    name: '陈女士',
    meta: '每周来两次的老客',
  },
  {
    quote: '第一次带外地朋友来，点了红烧肉和牛肉面。朋友吃完沉默了一会儿，说想他奶奶了。',
    name: '阿哲',
    meta: '美食博主 · 26 岁',
  },
  {
    quote: '菜单不花哨，但每一道都像认真做过一百遍。桂花圆子上桌那一刻，整个冬天都变软了。',
    name: 'Momo',
    meta: '在附近工作的设计师',
  },
]

export const milestones = [
  {
    year: '2014',
    title: '一间只有六张桌子的小店',
    text: '在城南老街开张，菜单上只有八道菜，招牌红烧肉从第一天卖到现在。',
  },
  {
    year: '2018',
    title: '把外婆的菜谱补全',
    text: '走访了十几位老邻居，把那些快要失传的家常做法一条条记下来。',
  },
  {
    year: '2021',
    title: '搬进现在的小院',
    text: '有了自己的明档厨房和一方小院子，开始种香草和小葱。',
  },
  {
    year: '2026',
    title: '仍然只做家常菜',
    text: '菜单扩充到六十八道，但每季只留最当季的，不为上新而上新。',
  },
]

export const values = [
  { icon: '灶', title: '当日现做', text: '所有热菜现点现炒，不用预制包，不隔夜。' },
  { icon: '时', title: '跟着季节吃', text: '春荠菜、夏瓜果、秋菌子、冬萝卜，菜单随季节走。' },
  { icon: '盐', title: '少盐少油', text: '能尝到食材本味，是我们对一顿饭最基本的尊重。' },
]

// 图片资源
export const heroImage = '/images/hero-table.jpg'
export const storyImages = {
  kitchen: '/images/story-kitchen.jpg',
  table: '/images/hero-table.jpg',
}
export const aboutImages = {
  interior: '/images/about-interior.jpg',
  chef: '/images/about-chef.jpg',
}

export const formatPrice = (value) => `¥${Number(value).toFixed(0)}`

export const findDishById = (id) => dishes.find((dish) => dish.id === id)

export const featuredDishes = dishes.filter((dish) => dish.featured)

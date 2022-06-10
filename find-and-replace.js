// arrays with hyphens
const pokemonArray = [
  'BULBASAUR',  'IVYSAUR',    'VENUSAUR',   'CHARMANDER', 'CHARMELEON',
  'CHARIZARD',  'SQUIRTLE',   'WARTORTLE',  'BLASTOISE',  'CATERPIE',
  'METAPOD',    'BUTTERFREE', 'WEEDLE',     'KAKUNA',     'BEEDRILL',
  'PIDGEY',     'PIDGEOTTO',  'PIDGEOT',    'RATTATA',    'RATICATE',
  'SPEAROW',    'FEAROW',     'EKANS',      'ARBOK',      'PIKACHU',
  'RAICHU',     'SANDSHREW',  'SANDSLASH',  'NIDORAN♀',   'NIDORINA',
  'NIDOQUEEN',  'NIDORAN♂',   'NIDORINO',   'NIDOKING',   'CLEFAIRY',
  'CLEFABLE',   'VULPIX',     'NINETALES',  'JIGGLYPUFF', 'WIGGLYTUFF',
  'ZUBAT',      'GOLBAT',     'ODDISH',     'GLOOM',      'VILEPLUME',
  'PARAS',      'PARASECT',   'VENONAT',    'VENOMOTH',   'DIGLETT',
  'DUGTRIO',    'MEOWTH',     'PERSIAN',    'PSYDUCK',    'GOLDUCK',
  'MANKEY',     'PRIMEAPE',   'GROWLITHE',  'ARCANINE',   'POLIWAG',
  'POLIWHIRL',  'POLIWRATH',  'ABRA',       'KADABRA',    'ALAKAZAM',
  'MACHOP',     'MACHOKE',    'MACHAMP',    'BELLSPROUT', 'WEEPINBELL',
  'VICTREEBEL', 'TENTACOOL',  'TENTACRUEL', 'GEODUDE',    'GRAVELER',
  'GOLEM',      'PONYTA',     'RAPIDASH',   'SLOWPOKE',   'SLOWBRO',
  'MAGNEMITE',  'MAGNETON',   'FARFETCHD',  'DODUO',      'DODRIO',
  'SEEL',       'DEWGONG',    'GRIMER',     'MUK',        'SHELLDER',
  'CLOYSTER',   'GASTLY',     'HAUNTER',    'GENGAR',     'ONIX',
  'DROWZEE',    'HYPNO',      'KRABBY',     'KINGLER',    'VOLTORB',
  'ELECTRODE',  'EXEGGCUTE',  'EXEGGUTOR',  'CUBONE',     'MAROWAK',
  'HITMONLEE',  'HITMONCHAN', 'LICKITUNG',  'KOFFING',    'WEEZING',
  'RHYHORN',    'RHYDON',     'CHANSEY',    'TANGELA',    'KANGASKHAN',
  'HORSEA',     'SEADRA',     'GOLDEEN',    'SEAKING',    'STARYU',
  'STARMIE',    'MR.MIME',    'SCYTHER',    'JYNX',       'ELECTABUZZ',
  'MAGMAR',     'PINSIR',     'TAUROS',     'MAGIKARP',   'GYARADOS',
  'LAPRAS',     'DITTO',      'EEVEE',      'VAPOREON',   'JOLTEON',
  'FLAREON',    'PORYGON',    'OMANYTE',    'OMASTAR',    'KABUTO',
  'KABUTOPS',   'AERODACTYL', 'SNORLAX',    'ARTICUNO',   'ZAPDOS',
  'MOLTRES',    'DRATINI',    'DRAGONAIR',  'DRAGONITE',  'MEWTWO',
  'MEW',        'TREECKO',    'GROVYLE',    'SCEPTILE',   'TORCHIC',
  'COMBUSKEN',  'BLAZIKEN',   'MUDKIP',     'MARSHTOMP',  'SWAMPERT',
  'POOCHYENA',  'MIGHTYENA',  'ZIGZAGOON',  'LINOONE',    'WURMPLE',
  'SILCOON',    'BEAUTIFLY',  'CASCOON',    'DUSTOX',     'LOTAD',
  'LOMBRE',     'LUDICOLO',   'SEEDOT',     'NUZLEAF',    'SHIFTRY',
  'NINCADA',    'NINJASK',    'SHEDINJA',   'TAILLOW',    'SWELLOW',
  'SHROOMISH',  'BRELOOM',    'SPINDA',     'WINGULL',    'PELIPPER',
  'SURSKIT',    'MASQUERAIN', 'WAILMER',    'WAILORD',    'SKITTY',
  'DELCATTY',   'KECLEON',    'BALTOY',     'CLAYDOL',    'NOSEPASS',
  'TORKOAL',    'SABLEYE',    'BARBOACH',   'WHISCASH',   'LUVDISC',
  'CORPHISH',   'CRAWDAUNT',  'FEEBAS',     'MILOTIC',    'CARVANHA',
  'SHARPEDO',   'TRAPINCH',   'VIBRAVA',    'FLYGON',     'MAKUHITA',
  'HARIYAMA',   'ELECTRIKE',  'MANECTRIC',  'NUMEL',      'CAMERUPT',
  'SPHEAL',     'SEALEO',     'WALREIN',    'CACNEA',     'CACTURNE',
  'SNORUNT',    'GLALIE',     'LUNATONE',   'SOLROCK',    'AZURILL',
  'SPOINK',     'GRUMPIG',    'PLUSLE',     'MINUN',      'MAWILE',
  'MEDITITE',   'MEDICHAM',   'SWABLU',     'ALTARIA',    'WYNAUT',
  'DUSKULL',    'DUSCLOPS',   'ROSELIA',    'SLAKOTH',    'VIGOROTH',
  'SLAKING',    'GULPIN',     'SWALOT',     'TROPIUS',    'WHISMUR',
  'LOUDRED',    'EXPLOUD',    'CLAMPERL',   'HUNTAIL',    'GOREBYSS',
  'ABSOL',      'SHUPPET',    'BANETTE',    'SEVIPER',    'ZANGOOSE',
  'RELICANTH',  'ARON',       'LAIRON',     'AGGRON',     'CASTFORM',
  'VOLBEAT',    'ILLUMISE',   'LILEEP',     'CRADILY',    'ANORITH',
  'ARMALDO',    'RALTS',      'KIRLIA',     'GARDEVOIR',  'BAGON',
  'SHELGON',    'SALAMENCE',  'BELDUM',     'METANG',     'METAGROSS',
  'REGIROCK',   'REGICE',     'REGISTEEL',  'KYOGRE',     'GROUDON',
  'RAYQUAZA',   'LATIAS',     'LATIOS',     'JIRACHI',    'DEOXYS',
  'CHIMECHO'
];

const trainerArray = [
  'I-CHOOSE-YOU', 'GOTCHA',
  'TRADE',        'SAPPHIRE',
  'EVOLVE',       'ENCYCLOPEDIA',
  'NATURE',       'CENTER',
  'EGG',          'LINK',
  'SP-ABILITY',   'TRAINER',
  'VERSION',      'POKéNAV',
  'POKéMON',      'GET',
  'POKéDEX',      'RUBY',
  'LEVEL',        'RED',
  'GREEN',        'BAG',
  'FLAME',        'GOLD',
  'LEAF',         'SILVER'
];



const statusArray = [
  'DARK',         'STENCH',       'THICK-FAT',   'RAIN-DISH',    'DRIZZLE',
  'ARENA-TRAP',   'INTIMIDATE',   'ROCK',        'HEAD',         'ALT',
  'COLOR',        'ROCK',         'BEAUTIFUL',   'BEAUTY',       'AIR-LOCK',
  'PSYCHIC',      'HYPER-CUTTER', 'FIGHTING',    'SHADOW-TAG',   'SMART',
  'SMARTNESS',    'SPEED-BOOST',  'COOL',        'COOLNESS',     'BATTLE-ARMOR',
  'CUTE',         'CUTENESS',     'STURDY',      'SUCTION',      'CUPS',
  'GRASS',        'CLEAR-BODY',   'TORRENT',     'GHOST',        'ICE',
  'GUTS',         'ROUGH',        'SKIN',        'SHELL-ARMOR',  'NATURAL',
  'CURE',         'DAMP',         'GROUND',      'LIMBER',       'MAGNET-PULL',
  'WHITE-SMOKE',  'SYNCHRONIZE',  'OVERGROW',    'SWIFT-SWIM',   'SAND-STREAM',
  'SAND-VEIL',    'KEEN-EYE',     'INNER-FOCUS', 'STATIC',       'TYPE',
  'TOUGH',        'TOUGHNESS',    'SHED-SKIN',   'HUGE',         'POWER',
  'VOLT-ABSORB',  'WATER-ABSORB', 'ELECTRIC',    'FORECAST',     'SERENE-GRACE',
  'POISON',       'POISON-POINT', 'DRAGON',      'TRACE',        'OBLIVIOUS',
  'TRUANT',       'RUN-AWAY',     'STICKY-HOLD', 'CLOUD-NINE',   'NORMAL',
  'STEEL',        'ILLUMINATE',   'EARLY',       'BIRD',         'HUSTLE',
  'SHINE',        'FLYING',       'DROUGHT',     'LIGHTNINGROD', 'COMPOUNDEYES',
  'MARVEL-SCALE', 'WONDER',       'GUARD',       'INSOMNIA',     'LEVITATE',
  'PLUS',         'PRESSURE',     'LIQUID-OOZE', 'COLOR-CHANGE', 'SOUNDPROOF',
  'EFFECT-SPORE', 'PKRS',         'FIRE',        'FLAME-BODY',   'MINUS',
  'OWN',          'TEMPO',        'MAGMA-ARMOR', 'WATER',        'WATER-VEIL',
  'BUG',          'SWARM',        'CUTE',        'CHARM',        'IMMUNITY',
  'BLAZE',        'PICKUP',       'PATTERN',     'FLASH-FIRE',   'VITAL',
  'SPIRIT',       'CHLOROPHYLL',  'PURE',        'POWER',        'SHIELD-DUST'
];

const battleArray = [
  'MATCH-UP',   'GO',         'NO.1',        'DECIDE',
  'LET-ME-WIN', 'WINS',       'WIN',         'WON',
  'IF-I-WIN',   'WHEN-I-WIN', 'CAN’T-WIN',   'CAN-WIN',
  'NO-MATCH',   'SPIRIT',     'DECIDED',     'TRUMP-CARD',
  'TAKE-THAT',  'COME-ON',    'ATTACK',      'SURRENDER',
  'GUTSY',      'TALENT',     'STRATEGY',    'SMITE',
  'MATCH',      'VICTORY',    'OFFENSIVE',   'SENSE',
  'VERSUS',     'FIGHTS',     'POWER',       'CHALLENGE',
  'STRONG',     'TOO-STRONG', 'GO-EASY',     'FOE',
  'GENIUS',     'LEGEND',     'ESCAPE',      'AIM',
  'BATTLE',     'FIGHT',      'RESUSCITATE', 'POINTS',
  'SERIOUS',    'GIVE-UP',    'LOSS',        'IF',
  'I',          'LOSE',       'LOST',        'LOSE',
  'GUARD',      'PARTNER',    'REJECT',      'ACCEPT',
  'INVINCIBLE', 'RECEIVED',   'EASY',        'WEAK',
  'TOO-WEAK',   'PUSHOVER',   'LEADER',      'RULE',
  'MOVE'
];

const greetingsArray = [
  'THANKS',      'YES',        'HERE-GOES',
  'HERE-I-COME', 'HERE-IT-IS', 'YEAH',
  'WELCOME',     'OI',         'HOW',
  'DO',          'CONGRATS',   'GIVE',
  'ME',          'SORRY',      'APOLOGIZE',
  'FORGIVE',     'HEY,',       'HELLO',
  'GOOD-BYE',    'THANK-YOU',  'I’VE-ARRIVED',
  'PARDON',      'EXCUSE',     'SEE-YA',
  'EXCUSE-ME',   'WELL,',      'THEN',
  'GO-AHEAD',    'APPRECIATE', 'HEY?',
  'WHAT’S',      'UP?',        'HUH?',
  'NO',          'HI',         'YEAH,',
  'YEAH',        'BYE-BYE',    'MEET-YOU',
  'HEY',         'SMELL',      'LISTENING',
  'HOO-HAH',     'YAHOO',      'YO',
  'COME-OVER',   'COUNT-ON'
];

const peopleArray = [
  'OPPONENT',    'I',           'YOU',      'YOURS',
  'SON',         'YOUR',        'YOU’RE',   'YOU’VE',
  'MOTHER',      'GRANDFATHER', 'UNCLE',    'FATHER',
  'BOY',         'ADULT',       'BROTHER',  'SISTER',
  'GRANDMOTHER', 'AUNT',        'PARENT',   'MAN',
  'ME',          'GIRL',        'BABE',     'FAMILY',
  'HER',         'HIM',         'HE',       'PLACE',
  'DAUGHTER',    'HIS',         'HE’S',     'AREN’T',
  'SIBLINGS',    'KID',         'CHILDREN', 'MR.',
  'MRS.',        'MYSELF',      'I-WAS',    'TO-ME',
  'MY',          'I-AM',        'I’VE',     'WHO',
  'SOMEONE',     'WHO-WAS',     'TO-WHOM',  'WHOSE',
  'WHO-IS',      'IT’S',        'LADY',     'FRIEND',
  'ALLY',        'PERSON',      'DUDE',     'THEY',
  'THEY-WERE',   'TO-THEM',     'THEIR',    'THEY’RE',
  'THEY’VE',     'WE',          'BEEN',     'TO-US',
  'OUR',         'WE’RE',       'RIVAL',    'WE’VE',
  'WOMAN',       'SHE',         'SHE-WAS',  'TO-HER',
  'HERS',        'SHE-IS',      'SOME'
];

const voicesArray = [
  '!',        '!!',     '?!',     '?',
  '…',        '…!',     '………',    'UH-OH',
  'WAAAH',    'AHAHA',  'OH?',    'NOPE',
  'URGH',     'HMM',    'WHOAH',  'WROOOAAR!',
  'WOW',      'GIGGLE', 'SIGH',   'UNBELIEVABLE',
  'CRIES',    'AGREE',  'EH?',    'CRY',
  'EHEHE',    'OI,',    'OI,',    'OI',
  'OH,',      'YEAH',   'OH',     'OOPS',
  'SHOCKED',  'EEK',    'GRAAAH', 'GWAHAHAHA',
  'WAY',      'TCH',    'HEHE',   'HAH',
  'YUP',      'HAHAHA', 'AIYEEH', 'HIYAH',
  'FUFUFU',   'LOL',    'SNORT',  'HUMPH',
  'HEHEHE',   'HEH',    'HOHOHO', 'UH-HUH',
  'OH,',      'DEAR',   'ARRGH',  'MUFUFU',
  'MMM',      'OH-KAY', 'OKAY',   'LALALA',
  'YAY',      'AWW',    'WOWEE',  'GWAH',
  'WAHAHAHA'
];

const speechArray = [
  'LISTEN',     'NOT-VERY',  'MEAN',    'LIE',
  'LAY',        'RECOMMEND', 'NITWIT',  'QUITE',
  'FROM',       'FEELING',   'BUT',     'HOWEVER',
  'CASE',       'THE',       'MISS',    'HOW',
  'HIT',        'ENOUGH',    'A-LOT',   'A-LITTLE',
  'ABSOLUTELY', 'AND',       'ONLY',    'AROUND',
  'PROBABLY',   'IF',        'VERY',    'A-TINY-BIT',
  'WILD',       'THAT’S',    'JUST',    'EVEN-SO,',
  'MUST-BE',    'NATURALLY', 'FOR',     'NOW,',
  'UNDERSTOOD', 'JOKING',    'READY',   'SOMETHING',
  'SOMEHOW',    'ALTHOUGH',  'ALSO',    'PERFECT',
  'AS-MUCH-AS', 'REALLY',    'TRULY',   'SERIOUSLY',
  'TOTALLY',    'UNTIL',     'AS-IF',   'MOOD',
  'RATHER',     'AWFULLY',   'MODE',    'MORE',
  'TOO',        'LATE',      'FINALLY', 'ANY',
  'INSTEAD',    'FANTASTIC'
];

const endingsArray = [
  'WILL',       'WILL-BE', 'HERE',   'OR',      'TIMES',
  'WONDER',     'IS-IT?',  'BE',     'GIMME',   'COULD',
  'LIKELY-TO',  'WOULD',   'IS',     'ISN’T',   'IT?',
  'LET’S',      'OTHER',   'ARE',    'WAS',     'WERE',
  'THOSE',      'ISN’T',   'WON’T',  'CAN’T',   'CAN',
  'DON’T',      'DO',      'DOES',   'WHOM',    'WHICH',
  'WASN’T',     'WEREN’T', 'HAVE',   'HAVEN’T', 'A',
  'AN',         'NOT',     'THERE',  'OK?',     'SO',
  'MAYBE',      'ABOUT',   'OVER',   'IT',      'ALL',
  'FOR',        'ON',      'OFF',    'AS',      'TO',
  'WITH',       'BETTER',  'EVER',   'SINCE',   'OF',
  'BELONGS-TO', 'AT',      'IN',     'OUT',     'TOO',
  'LIKE',       'DID',     'DIDN’T', 'DOESN’T', 'WITHOUT',
  'AFTER',      'BEFORE',  'WHILE',  'THAN',    'ONCE',
  'ANYWHERE'
];

const feelingsArray = [
  'MEET',         'PLAY',        'HURRIED',   'GOES',
  'GIDDY',        'HAPPY',       'HAPPINESS', 'EXCITE',
  'IMPORTANT',    'FUNNY',       'GOT',       'GO-HOME',
  'DISAPPOINTED', 'DISAPPOINTS', 'SAD',       'TRY',
  'TRIES',        'HEARS',       'THINK',     'HEAR',
  'WANTS',        'MISHEARD',    'DISLIKE',   'ANGRY',
  'ANGER',        'SCARY',       'LONESOME',  'DISAPPOINT',
  'JOY',          'GETS',        'NEVER',     'DARN',
  'DOWNCAST',     'INCREDIBLE',  'LIKES',     'DISLIKES',
  'BORING',       'CARE',        'CARES',     'ALL-RIGHT',
  'ADORE',        'DISASTER',    'ENJOY',     'ENJOYS',
  'EAT',          'LACKING',     'BAD',       'HARD',
  'TERRIBLE',     'SHOULD',      'NICE',      'DRINK',
  'SURPRISE',     'FEAR',        'WANT',      'WAIT',
  'SATISFIED',    'SEE',         'RARE',      'NEGATIVE',
  'DONE',         'DANGER',      'DEFEATED',  'BEAT',
  'GREAT',        'ROMANTIC',    'QUESTION',  'UNDERSTAND',
  'UNDERSTANDS'
]

const conditionsArray = [
  'HOT',          'EXISTS',      'EXCESS',    'APPROVED',
  'HAS',          'GOOD',        'LESS',      'MOMENTUM',
  'GOING',        'WEIRD',       'BUSY',      'TOGETHER',
  'FULL',         'ABSENT',      'BEING',     'NEED',
  'TASTY',        'SKILLED',     'NOISY',     'BIG',
  'LATE',         'CLOSE',       'DOCILE',    'AMUSING',
  'ENTERTAINING', 'PERFECTION',  'PRETTY',    'HEALTHY',
  'EXCELLENT',    'UPSIDE',      'DOWN',      'COLD',
  'REFRESHING',   'UNAVOIDABLE', 'MUCH',      'OVERWHELMING',
  'FABULOUS',     'ELSE',        'EXPENSIVE', 'CORRECT',
  'IMPOSSIBLE',   'SMALL',       'DIFFERENT', 'TIRED',
  'SKILL',        'TOP',         'NON-STOP',  'PREPOSTEROUS',
  'NONE',         'NOTHING',     'NATURAL',   'BECOMES',
  'LUKEWARM',     'FAST',        'LOW',       'AWFUL',
  'ALONE',        'BORED',       'SECRET',    'MYSTERY',
  'LACKS',        'BEST',        'LOUSY',     'MISTAKE',
  'KIND',         'WELL',        'WEAKENED',  'SIMPLE',
  'SEEMS',        'BADLY'
];

const actionsArray = [
  'MEETS',    'CONCEDE', 'GIVE',      'GIVES',    'PLAYED',
  'PLAYS',    'COLLECT', 'WALKING',   'WALKS',    'SAYS',
  'WENT',     'SAID',    'WAKE-UP',   'WAKES-UP', 'ANGERS',
  'TEACH',    'TEACHES', 'PLEASE',    'LEARN',    'CHANGE',
  'STORY',    'TRUST',   'LAVISH',    'LISTENS',  'HEARING',
  'TRAINS',   'CHOOSE',  'COME',      'CAME',     'SEARCH',
  'MAKE',     'CAUSE',   'KNOW',      'KNOWS',    'REFUSE',
  'STORES',   'BRAG',    'IGNORANT',  'THINKS',   'BELIEVE',
  'SLIDE',    'EATS',    'USE',       'USES',     'USING',
  'COULDN’T', 'CAPABLE', 'DISAPPEAR', 'APPEAR',   'THROW',
  'WORRY',    'SLEPT',   'SLEEP',     'RELEASE',  'DRINKS',
  'RUNS',     'RUN',     'WORKS',     'WORKING',  'TALKING',
  'TALK',     'SINK',    'SMACK',     'PRETEND',  'PRAISE',
  'OVERDO',   'SHOW',    'LOOKS',     'SEES',     'SEEK',
  'OWN',      'TAKE',    'ALLOW',     'FORGET',   'FORGETS',
  'APPEARS',  'FAINT',   'FAINTED'
];

const lifestyleArray = [
  'CHORES',      'HOME',         'MONEY',
  'ALLOWANCE',   'BATH',         'CONVERSATION',
  'SCHOOL',      'COMMEMORATE',  'HABIT',
  'GROUP',       'WORD',         'STORE',
  'SERVICE',     'WORK',         'SYSTEM',
  'TRAIN',       'CLASS',        'LESSONS',
  'INFORMATION', 'LIVING',       'TEACHER',
  'TOURNAMENT',  'LETTER',       'EVENT',
  'DIGITAL',     'TEST',         'DEPT.-STORE',
  'TELEVISION',  'PHONE',        'ITEM',
  'NAME',        'NEWS',         'POPULAR',
  'PARTY',       'STUDY',        'MACHINE',
  'MAIL',        'MESSAGE',      'PROMISE',
  'DREAM',       'KINDERGARTEN', 'LIFE',
  'RADIO',       'RENTAL',       'WORLD'
];

const hobbiesArray = [
  'IDOL',       'ANIME',      'SONG',         'MOVIE',
  'SWEETS',     'CHAT',       "CHILD'S-PLAY", 'TOYS',
  'MUSIC',      'CARDS',      'SHOPPING',     'CAMERA',
  'VIEWING',    'SPECTATOR',  'GOURMET',      'GAME',
  'RPG',        'COLLECTION', 'COMPLETE',     'MAGAZINE',
  'WALK',       'BIKE',       'HOBBY',        'SPORTS',
  'SOFTWARE',   'SONGS',      'DIET',         'TREASURE',
  'TRAVEL',     'DANCE',      'CHANNEL',      'MAKING',
  'FISHING',    'DATE',       'DESIGN',       'LOCOMOTIVE',
  'PLUSH-DOLL', 'PC',         'FLOWERS',      'HERO',
  'NAP',        'HEROINE',    'FASHION',      'ADVENTURE',
  'BOARD',      'BALL',       'BOOK',         'FESTIVAL',
  'COMICS',     'HOLIDAY',    'PLANS',        'TRENDY',
  'VACATION',   'LOOK'
];

const miscArray = [
  'HIGHS',      'LOWS',       'UM',
  'REAR',       'THINGS',     'THING',
  'BELOW',      'ABOVE',      'BACK',
  'HIGH',       'HERE',       'INSIDE',
  'OUTSIDE',    'BESIDE',     'THIS-IS-IT!',
  'THIS',       'EVERY',      'THESE',
  'THESE-WERE', 'DOWN',       'THAT',
  'THOSE-ARE',  'THOSE-WERE', 'THAT’S-IT!',
  'AM',         'THAT-WAS',   'FRONT',
  'UP',         'CHOICE',     'FAR',
  'AWAY',       'NEAR',       'WHERE',
  'WHEN',       'WHAT',       'DEEP',
  'SHALLOW',    'WHY',        'CONFUSED',
  'OPPOSITE',   'LEFT',       'RIGHT'
];

const adjectivesArray = [
  'WANDERING', 'RICKETY',     'ROCK-SOLID', 'HUNGRY',
  'TIGHT',     'TICKLISH',    'TWIRLING',   'SPIRALING',
  'THIRSTY',   'LOLLING',     'SILKY',      'SADLY',
  'HOPELESS',  'USELESS',     'DROOLING',   'EXCITING',
  'THICK',     'SMOOTH',      'SLIMY',      'THIN',
  'BREAK',     'VORACIOUS',   'SCATTER',    'AWESOME',
  'WIMPY',     'WOBBLY',      'SHAKY',      'RIPPED',
  'SHREDDED',  'INCREASING',  'YET',        'DESTROYED',
  'FIERY',     'LOVEY-DOVEY', 'HAPPILY',    'ANTICIPATION',
  '-EVENT',    'APPEAL',      'EVENTS',     'STAY-AT-HOME',
  'BERRY',     'CONTEST',     'MC',         'JUDGE',
  'SUPER',     'STAGE',       'HALL',       'OF',
  'FAME',      'EVOLUTION',   'HYPER',      'BATTLE',
  'TOWER',     'LEADERS',     'BATTLE',     'ROOM',
  'HIDDEN',    'SECRET',      'BASE',       'BLEND',
  'POKéBLOCK', 'MASTER',      'RANK',       'RIBBON',
  'CRUSH',     'DIRECT',      'TOWER',      'UNION',
  'ROOM',      'WIRELESS',    'FRONTIER'
];

const movesArray = [
  'KARATE-CHOP',  'DOUBLESLAP',   'THUNDERPUNCH', 'RAZOR-WIND',   'CUT',
  'GUST',         'FLY',          'BIND',         'SAND-ATTACK',  'HEADBUTT',
  'THRASH',       'DOUBLE-EDGE',  'TAIL',         'WHIP',         'BITE',
  'SING',         'SONICBOOM',    'DISABLE',      'FLAMETHROWER', 'MIST',
  'PSYBEAM',      'AURORA',       'BEAM',         'SUBMISSION',   'LOW',
  'KICK',         'COUNTER',      'STRENGTH',     'ABSORB',       'GROWTH',
  'SOLARBEAM',    'STUN-SPORE',   'STRING-SHOT',  'THUNDERBOLT',  'THUNDER',
  'ROCK-THROW',   'EARTHQUAKE',   'FISSURE',      'DIG',          'PSYCHIC',
  'HYPNOSIS',     'AGILITY',      'RAGE',         'SCREECH',      'DOUBLE',
  'TEAM',         'RECOVER',      'HARDEN',       'SMOKESCREEN',  'CONFUSE',
  'RAY',          'WITHDRAW',     'HAZE',         'FOCUS',        'ENERGY',
  'BIDE',         'MIRROR',       'MOVE',         'SELFDESTRUCT', 'LICK',
  'SMOG',         'CLAMP',        'SWIFT',        'CONSTRICT',    'KINESIS',
  'LEECH-LIFE',   'LOVELY',       'KISS',         'SKY-ATTACK',   'BUBBLE',
  'SPORE',        'PSYWAVE',      'CRABHAMMER',   'ROCK-SLIDE',   'SHARPEN',
  'SUPER-FANG',   'SLASH',        'SKETCH',       'SPIDER-WEB',   'MIND-READER',
  'NIGHTMARE',    'FLAME-WHEEL',  'SNORE',        'FLAIL',        'AEROBLAST',
  'REVERSAL',     'SPITE',        'POWDER-SNOW',  'SCARY',        'FACE',
  'OCTAZOOKA',    'ICY-WIND',     'OUTRAGE',      'SANDSTORM',    'GIGA-DRAIN',
  'ENDURE',       'CHARM',        'ROLLOUT',      'SWAGGER',      'SPARK',
  'MEAN-LOOK',    'HEAL-BELL',    'RETURN',       'SAFEGUARD',    'PAIN-SPLIT',
  'SACRED-FIRE',  'ENCORE',       'PURSUIT',      'RAPID',        'SPIN',
  'SWEET',        'SCENT',        'IRON-TAIL',    'VITAL-THROW',  'MORNING-SUN',
  'SYNTHESIS',    'CROSS-CHOP',   'RAIN-DANCE',   'CRUNCH',       'PSYCH-UP',
  'EXTREMESPEED', 'ANCIENTPOWER', 'SHADOW-BALL',  'ROCK-SMASH',   'WHIRLPOOL',
  'UPROAR',       'HAIL',         'TORMENT',      'FLATTER',      'WILL-O-WISP',
  'MEMENTO',      'FACADE',       'FOCUS-PUNCH',  'SMELLINGSALT', 'FOLLOW-ME',
  'NATURE',       'POWER',        'CHARGE',       'BRICK',        'BREAK',
  'YAWN',         'ENDEAVOR',     'SKILL-SWAP',   'GRUDGE',       'ICE-BALL',
  'METEOR-MASH',  'ASTONISH',     'WEATHER-BALL', 'AROMATHERAPY', 'FAKE-TEARS',
  'AIR-CUTTER',   'OVERHEAT',     'ODOR',         'SLEUTH',       'ROCK',
  'TOMB',         'SILVER-WIND',  'METAL-SOUND',  'GRASSWHISTLE', 'TICKLE',
  'COSMIC',       'POWER',        'WATER-SPOUT',  'SIGNAL-BEAM',  'SHADOW-PUNCH',
  'EXTRASENSORY', 'SKY-UPPERCUT', 'SAND-TOMB',    'SHEER-COLD',   'PSYCHO-BOOST',
  'POUND',        'COMET',        'PUNCH',        'MEGA-PUNCH',   'PAY-DAY',
  'FIRE-PUNCH',   'ICE-PUNCH',    'SCRATCH',      'VICEGRIP',     'GUILLOTINE',
  'SWORDS-DANCE', 'WING',         'ATTACK',       'WHIRLWIND',    'SLAM',
  'VINE-WHIP',    'STOMP',        'DOUBLE-KICK',  'MEGA-KICK',    'JUMP-KICK',
  'ROLLING-KICK', 'HORN-ATTACK',  'FURY-ATTACK',  'HORN-DRILL',   'TACKLE',
  'BODY',         'SLAM',         'WRAP',         'TAKE-DOWN'
];

const trendyArray = [
  'THX-BYE.',  'YES-SIR!',     'AVANT-GARDE',
  'COUPLE',    'MUCH OBLIGED', 'YEEHAW!',
  'MEGA',      '1-HIT-KO!',    'DESTINY',
  'CANCEL',    'NEW',          'FLATTEN',
  'KIDDING',   'LOSER',        'LOSING',
  'HAPPENING', 'HIP-AND',      'SHAKE',
  'SHADY',     'UPBEAT',       'MODERN',
  'SMELL-YA',  'BANG',         'KNOCKOUT',
  'HASSLE',    'WINNER',       'FEVER',
  'WANNABE',   'BABY',         'HEART',
  'OLD',       'YOUNG',        'UGLY'
];

const timeArray = [
  'FALL',      'MORNING',   'TOMORROW',  'LAST',
  'DAY',       'SOMETIME',  'ALWAYS',    'CURRENT',
  'FOREVER',   'DAYS',      'END',       'TUESDAY',
  'YESTERDAY', 'TODAY',     'FRIDAY',    'MONDAY',
  'LATER',     'EARLIER',   'ANOTHER',   'TIME',
  'FINISH',    'WEDNESDAY', 'SOON',      'START',
  'MONTH',     'STOP',      'NOW',       'FINAL',
  'NEXT',      'AGE',       'SATURDAY',  'SUMMER',
  'SUNDAY',    'BEGINNING', 'SPRING',    'DAYTIME',
  'WINTER',    'DAILY',     'OLDEN',     'ALMOST',
  'NEARLY',    'THURSDAY',  'NIGHTTIME', 'NIGHT',
  'WEEK'
];

// creating an object of arrays for the findHyphenAndReplaceWith function
let allArrays = {
  pokemonArray,
  trainerArray,
  statusArray,
  battleArray,
  greetingsArray,
  peopleArray,
  voicesArray,
  speechArray,
  endingsArray,
  feelingsArray,
  conditionsArray,
  actionsArray,
  lifestyleArray,
  hobbiesArray,
  miscArray,
  adjectivesArray,
  movesArray,
  trendyArray,
  timeArray
};

// function for returning all arrays without hyphens
const findHyphenAndReplaceWith = (param, find, replace) => {
for (const [key, value] of Object.entries(param)) {
  param[key] = value.map(element => {
    return element.replace(find, replace)
  });
}
return param;
}

// shows all arrays without hyphens
allArrays = findHyphenAndReplaceWith(allArrays,/-/g, " ")
// prints all items on all arrays
console.dir(allArrays, {'maxArrayLength': null}); 
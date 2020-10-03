//temp, will be fetching from firestore
import { Course, Student } from "../types/student";
import getRandomArrayElements from "./getRandomArrayElements";


// bruh faker.js weights so much xd tho u can use browser api :)
// courses repeats cause of different dates
export const courses: Course[] = [
  {
    "id": "_ef2eur5zm",
    "title": "Kot w Bitach",
    "teachers": [
      "Juszczak",
      "Kotowski"
    ],
    "categories": [
      "Baby"
    ],
    "capacity": 12,
    "date": {
      "day": "środa",
      "time": {
        "start": "7:05",
        "end": "7:50"
      }
    },
    "classes": [
      6
    ],
    "description": "Quia ut iste enim et facilis qui excepturi fugiat ut. Et id inventore eius non earum. Facere nihil est et alias dolorum consequatur nobis at exercitationem. Unde veritatis ex repellat in et ea alias."
  },
  {
    "id": "_vqpl5wpf9",
    "title": "Kot w Bitach",
    "teachers": [
      "Pawłowski"
    ],
    "categories": [
      "Baby",
      "Movies",
      "Books"
    ],
    "capacity": 15,
    "date": {
      "day": "środa",
      "time": {
        "start": "14:55",
        "end": "15:40"
      }
    },
    "classes": [
      7
    ],
    "description": "Qui eum tempore dolor voluptas. Dolor quod provident est unde ut quis at. Quis reiciendis dicta rem. Maiores aspernatur neque eos nostrum blanditiis voluptatibus. Labore id quis porro tempore repellat quo.\n \rRecusandae enim eum eum temporibus. Quo aut possimus quos. Aliquid ut expedita aliquam doloremque perspiciatis.\n \rAnimi non ad enim soluta aut atque atque. Praesentium ex omnis. Necessitatibus dolorem labore ut rerum alias. Excepturi deserunt dolorum et. Officiis fugit itaque cupiditate beatae. Exercitationem dolorem id fugiat consequatur in quaerat rerum."
  },
  {
    "id": "_673h16r84",
    "title": "Kot w Bitach",
    "teachers": [
      "Kapusta"
    ],
    "categories": [
      "Health"
    ],
    "capacity": 15,
    "date": {
      "day": "poniedziałek",
      "time": {
        "start": "15:00",
        "end": "15:45"
      }
    },
    "classes": [
      8
    ],
    "description": "Quisquam occaecati doloremque facilis laudantium itaque debitis nisi dicta. Autem itaque est laborum atque cumque exercitationem consequatur. Nisi neque exercitationem assumenda ut laudantium ea. Fugiat incidunt eius deleniti accusamus non illo illum. Debitis mollitia qui ad quo eaque.\n \rQuia omnis facilis amet non animi voluptas quibusdam earum neque. Quasi vel dolore quo ab ut. Ex facere architecto aliquam. Incidunt velit mollitia aut est qui id. Aliquid maiores provident. Eligendi et error eum earum recusandae quia sunt et.\n \rQuaerat blanditiis doloremque praesentium alias dolore dolor quia corporis asperiores. Id eos perferendis qui consequatur temporibus quasi. In repudiandae esse eum vel."
  },
  {
    "id": "_yt3sn426p",
    "title": "Kumple Pitagorasa",
    "teachers": [
      "Kisiel",
      "Herman",
      "Przybylski"
    ],
    "categories": [
      "Tools"
    ],
    "capacity": 15,
    "date": {
      "day": "wtorek",
      "time": {
        "start": "13:45",
        "end": "14:30"
      }
    },
    "classes": [
      2
    ],
    "description": "Distinctio fugiat earum. Odit facilis dicta earum itaque ratione alias. Voluptatem ab amet et excepturi aut error odit. Sequi nobis ea quia. Omnis et minus dolorem. Cum beatae debitis consequuntur blanditiis magnam.\n \rEt qui provident eos in. Expedita id nisi et. Ratione deleniti dolorum quos beatae perferendis nam deleniti rem. Qui sapiente dolor.\n \rOptio quas ullam sit est optio. Enim exercitationem sint perspiciatis beatae. Ipsam ut soluta debitis omnis. Ut a atque iusto est odio."
  },
  {
    "id": "_2gv1eszvg",
    "title": "Kumple Pitagorasa",
    "teachers": [
      "Maćkowiak",
      "Pawlik",
      "Grzegorczyk"
    ],
    "categories": [
      "Books"
    ],
    "capacity": 15,
    "date": {
      "day": "czwartek",
      "time": {
        "start": "13:45",
        "end": "14:30"
      }
    },
    "classes": [
      3
    ],
    "description": "Architecto ea earum ea error aut delectus hic. Repellendus velit non sed in rerum non. Nesciunt officiis veniam quidem saepe ipsum. Ipsa consequatur suscipit ea beatae velit. Laboriosam odio tempora unde nulla beatae aut.\n \rNam ea amet repellendus perferendis eum. Dolor magni nisi inventore consequuntur doloribus nihil sunt. Laudantium ea perferendis autem voluptas est et aspernatur. Laudantium molestiae numquam voluptas et qui atque explicabo. Quia corrupti ea non voluptatem ipsam asperiores unde ut maxime. Et ea harum voluptatem sunt quod quas dolor consequatur voluptatem.\n \rPariatur enim officia magni est. Odit qui eos non qui ut. Et veritatis sunt qui magni nisi delectus laborum at. Dolores soluta asperiores similique fugit voluptatem consectetur minima qui. Est exercitationem quia dolores autem dolore rerum facere dolorem in."
  },
  {
    "id": "_qdqnqd20n",
    "title": "Kumple Pitagorasa",
    "teachers": [
      "Drozdowski",
      "Kwiecień"
    ],
    "categories": [
      "Movies"
    ],
    "capacity": 15,
    "date": {
      "day": "czwartek",
      "time": {
        "start": "13:20",
        "end": "14:05"
      }
    },
    "classes": [
      4
    ],
    "description": "Aspernatur vitae et excepturi impedit accusamus perferendis placeat animi. Cumque ut enim. Similique voluptate accusantium quis maiores esse et.\n \rMolestiae dignissimos dolor ducimus aut. Officiis qui qui consequatur necessitatibus reiciendis. Doloremque aut doloribus velit deserunt et et consequatur. Porro nesciunt iure soluta quasi non perspiciatis voluptatem autem. Voluptas dolores sit corrupti consequatur expedita velit quo.\n \rReprehenderit sit impedit error voluptates neque quo et repellat. Autem iste sit. Consequatur et nisi natus sed ipsam natus possimus commodi."
  },
  {
    "id": "_op9gfs1wq",
    "title": "Kumple Pitagorasa",
    "teachers": [
      "Walczak",
      "Zaborowski"
    ],
    "categories": [
      "Computers"
    ],
    "capacity": 15,
    "date": {
      "day": "czwartek",
      "time": {
        "start": "7:05",
        "end": "7:50"
      }
    },
    "classes": [
      5
    ],
    "description": "Nobis dignissimos dolorum excepturi et pariatur. Qui animi impedit exercitationem adipisci animi commodi dicta cum non. Velit error laborum quis. Est eveniet non reiciendis nihil dolorum.\n \rVitae voluptatem non aut facilis. Id omnis sunt est magnam qui quas dolores expedita. Unde ea voluptas facere. Dolorum et nostrum praesentium rerum praesentium minima.\n \rExcepturi sunt eos error voluptatem. Blanditiis reprehenderit accusamus perferendis cumque sed asperiores id et. Sint alias est vitae veniam rerum ad."
  },
  {
    "id": "_8b9wp0y5z",
    "title": "Kumple Pitagorasa",
    "teachers": [
      "Miklaś",
      "Słowik"
    ],
    "categories": [
      "Home",
      "Tools"
    ],
    "capacity": 15,
    "date": {
      "day": "piątek",
      "time": {
        "start": "7:05",
        "end": "7:50"
      }
    },
    "classes": [
      6
    ],
    "description": "Veritatis iste minus incidunt in ut sint temporibus neque labore. Laborum eum atque voluptas. Possimus sit vitae. Consectetur et ad temporibus. Esse aperiam quae quidem consectetur.\n \rAut sed fuga temporibus explicabo qui rem illum ut. Atque modi in dolor. Voluptatum sunt culpa molestias omnis et sed voluptatem.\n \rIllo eos non dolores. Accusantium culpa autem. Mollitia dolor provident et consequatur ducimus. A quae et repellat fugiat occaecati. Nisi eveniet laudantium facilis officia. Consequatur ut et dolore nihil culpa."
  },
  {
    "id": "_8wtppwj6m",
    "title": "Kumple Pitagorasa",
    "teachers": [
      "Tomczyk",
      "Szcześniak",
      "Młynarczyk"
    ],
    "categories": [
      "Home",
      "Tools",
      "Shoes"
    ],
    "capacity": 15,
    "date": {
      "day": "wtorek",
      "time": {
        "start": "7:05",
        "end": "7:50"
      }
    },
    "classes": [
      7
    ],
    "description": "Nemo qui quibusdam assumenda ipsa ducimus ex vitae. Velit occaecati amet est nihil quia nihil omnis qui. Soluta laudantium eius. Iusto perspiciatis quia sit quasi. Est optio ipsum quis explicabo pariatur. Cum sunt delectus qui sed.\n \rVelit quo rerum maxime inventore deleniti aut et. Cupiditate porro modi quidem impedit est. Quam cupiditate enim et eius laborum non reiciendis.\n \rQuis molestiae consequatur laudantium qui. Similique totam consectetur dignissimos nobis dolores quia facilis maiores illum. Voluptatem modi ea. Temporibus mollitia dolorem quia."
  },
  {
    "id": "_xgroj0f3k",
    "title": "Kumple Pitagorasa",
    "teachers": [
      "Mroczek",
      "Wójcik"
    ],
    "categories": [
      "Games",
      "Home"
    ],
    "capacity": 15,
    "date": {
      "day": "poniedziałek",
      "time": {
        "start": "7:05",
        "end": "7:50"
      }
    },
    "classes": [
      8
    ],
    "description": "Quam ipsa rerum et sapiente modi sint. Enim perspiciatis cum cum velit. Iure neque ut corrupti. Maxime ab aliquid nemo amet delectus facilis. Debitis aut voluptatem natus veniam."
  },
  {
    "id": "_r2ntjtf5v",
    "title": "Koło przyrodnicze z mikrofotografią przyrodniczą",
    "teachers": [
      "Izdebski",
      "Wasiak",
      "Kozłowski"
    ],
    "categories": [
      "Computers",
      "Sports",
      "Baby"
    ],
    "capacity": 15,
    "date": {
      "day": "czwartek",
      "time": {
        "start": "14:10",
        "end": "14:55"
      }
    },
    "classes": [
      7
    ],
    "description": "Quisquam dignissimos non hic et est sint vel. Perspiciatis optio amet excepturi corrupti voluptatem ea accusantium aliquid. Id ratione aliquam porro consequatur in. Beatae minus quos molestiae placeat qui dolore voluptate. Quae sapiente eaque ut provident voluptatibus expedita amet aliquid sit. Nobis placeat quos earum voluptate dignissimos vel harum.\n \rSuscipit perspiciatis doloremque hic quos ipsa sed corrupti. Natus animi ut est laborum id eaque. Consequatur reprehenderit harum.\n \rEt omnis blanditiis. Ea neque molestiae eum assumenda itaque quia sint. Consequatur et magnam ut dolore adipisci."
  },
  {
    "id": "_df7e4xa0n",
    "title": "Koło przyrodnicze z mikrofotografią przyrodniczą",
    "teachers": [
      "Gadomski",
      "Wawrzyniak",
      "Trzciński"
    ],
    "categories": [
      "Tools",
      "Music"
    ],
    "capacity": 15,
    "date": {
      "day": "środa",
      "time": {
        "start": "14:10",
        "end": "14:55"
      }
    },
    "classes": [
      8
    ],
    "description": "Facere vero a iure illo cumque commodi. Doloribus perferendis eius fuga rem vitae beatae laborum velit. Alias aut voluptatibus nostrum voluptates est. Aut sit aut placeat tenetur facere rem omnis. Maxime sint nihil voluptatem velit.\n \rDolorem labore iure molestiae quibusdam facilis. Ut accusantium voluptatem inventore et esse sit nesciunt et. Accusantium expedita quo corporis minima.\n \rRem eius libero in eos ipsam. Corporis a ut atque tempora omnis. Magni blanditiis unde voluptatem velit ea explicabo ea. Laboriosam aut eligendi."
  },
  {
    "id": "_upvny2xrr",
    "title": "Koło przyrodnicze z mikrofotografią przyrodniczą",
    "teachers": [
      "Wolny",
      "Janik"
    ],
    "categories": [
      "Music"
    ],
    "capacity": 15,
    "date": {
      "day": "czwartek",
      "time": {
        "start": "14:10",
        "end": "14:55"
      }
    },
    "classes": [
      6
    ],
    "description": "Suscipit tempore dolorem itaque omnis ipsa qui vero quae. Vel non ducimus excepturi odit omnis excepturi. Qui id ut. Ad tempora impedit dolor culpa. Vel voluptatem et voluptatem voluptas et quos aut dolore."
  },
  {
    "id": "_m9g55gc9r",
    "title": "Eksperymentujemy",
    "teachers": [
      "Augustyniak",
      "Miller"
    ],
    "categories": [
      "Grocery",
      "Games",
      "Music"
    ],
    "capacity": 15,
    "date": {
      "day": "czwartek",
      "time": {
        "start": "7:05",
        "end": "7:50"
      }
    },
    "classes": [
      4,
      5
    ],
    "description": "Facere molestiae fuga repellendus quia in vitae ipsam accusantium. Voluptas praesentium vel mollitia nostrum minus est debitis ut. Veritatis perspiciatis ut. Velit beatae autem. Architecto et aliquid nihil et tenetur et non non quis."
  },
  {
    "id": "_9pg4ky2q1",
    "title": "Eksperymentujemy",
    "teachers": [
      "Szczerba",
      "Gajda"
    ],
    "categories": [
      "Games",
      "Tools"
    ],
    "capacity": 15,
    "date": {
      "day": "wtorek",
      "time": {
        "start": "7:05",
        "end": "7:50"
      }
    },
    "classes": [
      6,
      7,
      8
    ],
    "description": "Animi non ut. Nam minima illo qui quaerat aut expedita natus. Nisi earum ratione. Et quasi facere nihil. Deserunt minima enim sint eos tenetur qui nam enim. Labore qui est natus.\n \rEt aliquid magnam eligendi praesentium nostrum occaecati quo. Odit qui assumenda commodi. Et nam voluptas voluptatibus consequuntur alias et enim dolor voluptatum. Nihil sed iste quas blanditiis.\n \rMinima beatae ut repellendus ea perspiciatis sunt. Commodi minus repellendus natus molestias quod delectus. Occaecati soluta voluptas et velit sed totam. Soluta atque saepe sunt."
  },
  {
    "id": "_1xcq62ba7",
    "title": "Włóczykije, czyli palcem po mapie",
    "teachers": [
      "Jóźwiak"
    ],
    "categories": [
      "Clothing"
    ],
    "capacity": 16,
    "date": {
      "day": "czwartek",
      "time": {
        "start": "14:40",
        "end": "15:25"
      }
    },
    "classes": [
      1
    ],
    "description": "Nisi inventore quo delectus repellat officia sed hic. In eos sed eos. Repellat dolor dolore maxime. Est sit cupiditate consequatur sed. Amet esse voluptatem illum. Repellat sequi suscipit sit.\n \rTempore fugiat sapiente. Fugiat harum corrupti qui recusandae dolores. Ipsum consequatur quo quia porro consequatur ab cupiditate voluptates. Dignissimos distinctio hic. Voluptatibus deserunt nihil. Fugiat eos rem odit optio sapiente molestias.\n \rSit delectus et. Inventore ut odit. Dolor et esse corrupti rerum aut. Illum qui dolorum dolores omnis corporis placeat. Illum animi omnis ea et similique qui. Consectetur eaque eveniet sit minima dolorem excepturi consectetur omnis."
  },
  {
    "id": "_euvgk7ug0",
    "title": "Koło teatralne",
    "teachers": [
      "Cieślik",
      "Piwowarczyk"
    ],
    "categories": [
      "Industrial",
      "Shoes",
      "Sports"
    ],
    "capacity": 16,
    "date": {
      "day": "poniedziałek",
      "time": {
        "start": "13:45",
        "end": "15:15"
      }
    },
    "classes": [
      2,
      3,
      4
    ],
    "description": "Dolores dolorum et non explicabo officia illum veniam. Facilis deleniti placeat et ipsum nostrum recusandae eius ab. Illum dolores reprehenderit quae non voluptas ratione quod officia. Beatae ratione qui odit inventore minus provident veritatis delectus. Et illo maiores non dolorum blanditiis unde ut dolore. Vel et neque perferendis sed laudantium."
  },
  {
    "id": "_mr225jvv9",
    "title": "„Spass mit Deutsch” - gry i ćwiczenia interaktywne",
    "teachers": [
      "Kruszewski",
      "Skowronek"
    ],
    "categories": [
      "Beauty"
    ],
    "capacity": 12,
    "date": {
      "day": "wtorek",
      "time": {
        "start": "13:20",
        "end": "14:05"
      }
    },
    "classes": [
      6
    ],
    "description": "Voluptas ea sit et architecto ex. Placeat vitae repellat nam quisquam iure impedit. Vero fugit eos rerum molestiae sunt vitae. Aut et fugit. Dolores qui aut facilis perspiciatis eos omnis impedit id repellendus.\n \rHic nihil qui error aut cupiditate voluptatem et dolor consectetur. Corrupti ad molestiae. Nisi voluptatem officiis voluptatem voluptas possimus dolor. Ut ut iusto nulla vitae quas consequatur suscipit.\n \rQuidem consectetur laudantium minima sed quod et. Perferendis est voluptatibus ut delectus atque voluptas velit. Earum sequi dolores id et tempore sunt quos aliquam."
  },
  {
    "id": "_2xj7u1i3e",
    "title": "„Myślenie wizualne - narysuj to”",
    "teachers": [
      "Surma"
    ],
    "categories": [
      "Kids",
      "Sports",
      "Toys"
    ],
    "capacity": 12,
    "date": {
      "day": "poniedziałek",
      "time": {
        "start": "14:40",
        "end": "15:25"
      }
    },
    "classes": [
      3,
      4
    ],
    "description": "Veritatis quis quos similique nostrum itaque omnis et. Cum nisi velit architecto dolor necessitatibus quidem qui et. Odit consequuntur dolores consequatur voluptas sequi impedit officiis aut suscipit. Debitis aliquam odit amet perferendis consequatur iste iusto voluptatem. Rerum maiores et et placeat.\n \rBlanditiis nisi et dolorem est omnis quae. Sit illum voluptas eligendi adipisci minima odio perferendis quam. Sed quas eius minus occaecati ut similique eligendi modi. Quaerat dolores dicta. Ex consequuntur et quod sunt totam.\n \rSuscipit perspiciatis sed numquam sed. Dolorem adipisci quae provident error aut similique nemo dolores sunt. Non ut in minima earum aut id et praesentium nihil. Laborum quasi mollitia sed mollitia. Tenetur aut voluptas. Ea eaque veniam quisquam aut et nostrum amet et."
  },
  {
    "id": "_bon5qtf79",
    "title": "„Myślenie wizualne - narysuj to”",
    "teachers": [
      "Kania",
      "Mrozek",
      "Gadomski"
    ],
    "categories": [
      "Health",
      "Sports",
      "Beauty"
    ],
    "capacity": 12,
    "date": {
      "day": "wtorek",
      "time": {
        "start": "15:35",
        "end": "16:20"
      }
    },
    "classes": [
      5,
      6
    ],
    "description": "Cum rem est est sint. Impedit laboriosam sequi voluptas. Dolor quae ut tempora. Sint autem ducimus repellendus corporis rerum qui nulla tempore. Laudantium est deleniti aut illo nesciunt veritatis.\n \rEst quia vel at laudantium ducimus et consequatur ut. Ad perferendis consectetur nulla molestiae sint porro sed ut repellat. Itaque perspiciatis ab. Accusamus accusantium veritatis numquam minus debitis. Doloremque id consequuntur quasi non voluptatibus ullam et quis qui.\n \rLabore officiis et. Non esse et iste blanditiis est harum fugit. Minus quidem non laborum qui. Quidem quis dolor voluptatibus nihil aspernatur suscipit repellat perspiciatis."
  },
  {
    "id": "_g98h5uydn",
    "title": "Mindfullness - zabawa w spokojny umysł",
    "teachers": [
      "Panek"
    ],
    "categories": [
      "Toys",
      "Sports"
    ],
    "capacity": 10,
    "date": {
      "day": "wtorek",
      "time": {
        "start": "16:20",
        "end": "17:05"
      }
    },
    "classes": [
      4,
      5
    ],
    "description": "Debitis nihil earum est pariatur. Et enim voluptas amet unde aliquid. Eum et eveniet ut. Dolorem labore sunt fugiat occaecati dolores adipisci cupiditate. Corrupti omnis vel in.\n \rNobis aut voluptatem inventore perspiciatis temporibus. Libero cum voluptas. Aliquid cupiditate rerum vitae qui quo ut.\n \rAd sint libero a dolorem expedita ducimus sint. Corrupti magnam aut cumque incidunt eaque unde ducimus excepturi. Et quia quas sit rerum dolorem aut autem. Laboriosam molestiae quo quibusdam vel quia quidem. Eaque quo est dicta sunt illo aspernatur et iure quam. Odit aut voluptas et ad odit ut error."
  },
  {
    "id": "_npwr3p9rw",
    "title": "Mistrzowie kaligrafii - zajęcia ze sztuki pięknego pisania i iluminowania tekstu",
    "teachers": [
      "Stachowicz",
      "Krawczyk"
    ],
    "categories": [
      "Jewelery"
    ],
    "capacity": 6,
    "date": {
      "day": "poniedziałek",
      "time": {
        "start": "15:00",
        "end": "15:45"
      }
    },
    "classes": [
      6,
      7,
      8
    ],
    "description": "Ratione excepturi deserunt eum praesentium. Assumenda eveniet fugiat nobis modi. Nulla rerum et voluptatem ut sunt eius delectus aut ullam. Sed doloremque at. Itaque fugit natus quaerat est aliquam enim.\n \rIn omnis dolor asperiores molestias ipsam. Rerum nesciunt ullam dicta nulla similique dolores nam quis est. Nemo laborum voluptas facilis exercitationem ratione.\n \rAmet consequatur reprehenderit voluptatem vero qui. Eveniet dolorem qui eveniet nisi. Porro in blanditiis accusamus reiciendis."
  },
  {
    "id": "_p2eit8j90",
    "title": "Koło teatralne „Na deskach szkolnej sceny” zajęcia recytatorskie i literacko - poetyckie",
    "teachers": [
      "Głąb",
      "Szczepański"
    ],
    "categories": [
      "Movies",
      "Health"
    ],
    "capacity": 10,
    "date": {
      "day": "środa",
      "time": {
        "start": "14:10",
        "end": "14:55"
      }
    },
    "classes": [
      4
    ],
    "description": "Eveniet enim facere earum fugit enim atque qui. Voluptatem accusantium quia nobis. Veniam quae ut. Blanditiis ab in non ullam inventore. Alias et et porro omnis quaerat occaecati ut.\n \rVoluptatem omnis nulla esse sequi enim itaque nihil. Nam officia architecto. Voluptates ab eos laborum dignissimos officia laudantium ea perspiciatis. Omnis ex unde nisi ratione autem. Officiis cupiditate amet eos voluptas animi pariatur aut. Voluptatem qui omnis consequatur totam et.\n \rEa et accusamus et alias molestiae accusantium cumque sint. Qui id illum nihil. Velit minima quisquam sequi dolorum. Voluptatibus et neque. Deleniti ipsa aut. Praesentium recusandae error sit minima omnis quod."
  },
  {
    "id": "_d373gm9ku",
    "title": "Podstawy malarstwa",
    "teachers": [
      "Balcerzak",
      "Kaczyński",
      "Witek"
    ],
    "categories": [
      "Electronics",
      "Home",
      "Automotive"
    ],
    "capacity": 15,
    "date": {
      "day": "czwartek",
      "time": {
        "start": "14:10",
        "end": "14:55"
      }
    },
    "classes": [
      4,
      5,
      6,
      7,
      8
    ],
    "description": "Molestiae ex nihil reiciendis veritatis. Voluptatem animi nobis vel assumenda cum quia. Sequi et similique quo ea ex quam rem dolores culpa.\n \rBeatae delectus dolores quasi saepe sunt omnis excepturi nisi. Blanditiis repudiandae iusto facere dolore animi. Veniam commodi ipsum laboriosam omnis aliquid.\n \rAt et ut. Et tenetur at hic fugit. Autem ut fugit accusantium unde. Esse excepturi magnam non earum sint. Inventore odit suscipit. Id dolor et dolores dolor temporibus."
  },
  {
    "id": "_imiygmk76",
    "title": "Zespół wokalny",
    "teachers": [
      "Maślanka",
      "Karaś"
    ],
    "categories": [
      "Computers",
      "Movies",
      "Electronics"
    ],
    "capacity": 16,
    "date": {
      "day": "wtorek",
      "time": {
        "start": "7:05",
        "end": "7:50"
      }
    },
    "classes": [
      5,
      6,
      7,
      8
    ],
    "description": "Laboriosam velit rem labore velit earum et aperiam consequatur. Quos sit consectetur ullam. Totam praesentium inventore consectetur dignissimos aut dolorem. Consequatur et est enim. Perspiciatis illo provident unde possimus rerum suscipit ut."
  },
  {
    "id": "_jsjfptgqf",
    "title": "Koło rowerowo - turystyczne",
    "teachers": [
      "Olszewski",
      "Janas"
    ],
    "categories": [
      "Books",
      "Movies"
    ],
    "capacity": 15,
    "date": {
      "day": "sobota",
      "time": {
        "start": "13:00",
        "end": "14:00"
      }
    },
    "classes": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "description": "Reiciendis quibusdam aspernatur voluptatem minus ut ut. Modi et sit animi eum maxime. Aperiam dicta et. Beatae voluptatem voluptates aspernatur. Similique non ut.\n \rAb sed et porro aliquid voluptatem beatae repellat et. Sint id est similique animi. Et quo magnam accusantium est.\n \rVel est iusto id quos. Itaque est corrupti voluptatem. Aperiam dicta deleniti modi tempore. Nemo at sed accusantium. Corporis est a architecto sunt repudiandae vel. Qui voluptatem est incidunt esse consequatur perspiciatis."
  },
  {
    "id": "_1xuj6xcwf",
    "title": "Piłka ręczna",
    "teachers": [
      "Masłowski",
      "Marcinkowski"
    ],
    "categories": [
      "Jewelery",
      "Beauty"
    ],
    "capacity": 20,
    "date": {
      "day": "poniedziałek",
      "time": {
        "start": "15:35",
        "end": "16:20"
      }
    },
    "classes": [
      4,
      5,
      6,
      7,
      8
    ],
    "description": "Dolores aut beatae. Quia et eos autem distinctio voluptates rerum consequatur sed exercitationem. Quis delectus nemo eum sit cum corrupti ea.\n \rMaxime et illo voluptatem sint nam totam. Sit quae laudantium porro iusto sed necessitatibus reiciendis. Et voluptatem iure culpa quisquam architecto.\n \rUnde doloribus ea facere autem non et officiis. Et non aut enim magni ut rerum. Non est et est qui optio."
  },
  {
    "id": "_y0r7oz060",
    "title": "Szachy",
    "teachers": [
      "Krawczyk"
    ],
    "categories": [
      "Tools"
    ],
    "capacity": 14,
    "date": {
      "day": "wtorek",
      "time": {
        "start": "14:40",
        "end": "15:25"
      }
    },
    "classes": [
      3,
      4
    ],
    "description": "Aut accusantium eum voluptas doloribus consequatur laboriosam minima. Odit deserunt molestiae voluptate sunt distinctio et. Voluptas placeat error eum ea voluptas temporibus sunt facilis quidem. Praesentium consequatur voluptatem accusamus saepe ut dolores doloribus atque magni.\n \rVoluptatem nihil necessitatibus rerum totam. Odit culpa laboriosam sunt qui voluptatem. Cum maxime nihil. Voluptates et rerum accusamus odit nulla voluptas iste est et.\n \rBlanditiis animi voluptatum ea quos dolorum. Neque nemo corporis. Et et quam et ut corporis ut voluptate quia maxime. Saepe quam necessitatibus temporibus ipsam sint et commodi voluptate. Iusto et dignissimos aut repudiandae qui blanditiis nisi."
  },
  {
    "id": "_lgywx1qvi",
    "title": "Szachy",
    "teachers": [
      "Żyła",
      "Gajda",
      "Tokarski"
    ],
    "categories": [
      "Games"
    ],
    "capacity": 14,
    "date": {
      "day": "wtorek",
      "time": {
        "start": "15:35",
        "end": "16:20"
      }
    },
    "classes": [
      5,
      6,
      7,
      8
    ],
    "description": "Eius tempore eos id placeat id debitis est repellendus. Omnis amet qui rerum ipsum voluptates repellat et. Dolore qui dolores amet. Accusamus sapiente aut similique facilis."
  },
  {
    "id": "_58o5gt9ln",
    "title": "Step to dance - zajęcia taneczne",
    "teachers": [
      "Kozak",
      "Jędrzejczyk"
    ],
    "categories": [
      "Books",
      "Movies",
      "Music"
    ],
    "capacity": 20,
    "date": {
      "day": "wtorek",
      "time": {
        "start": "14:40",
        "end": "15:25"
      }
    },
    "classes": [
      1,
      2,
      3
    ],
    "description": "Quisquam impedit qui facilis occaecati. Autem et ea est incidunt aut dolor ullam tenetur. Beatae est facere aut et ipsa. Veritatis sit quo dolores consequatur nemo sit minima consequatur. Qui est suscipit porro in veritatis consequatur. Id sint quae architecto voluptatem.\n \rMollitia dolore eligendi voluptas aliquam et corporis. Nostrum aliquid harum suscipit accusamus earum et tempora laborum. Et ut id voluptate.\n \rAdipisci est qui id vel quia in ut. Culpa veritatis quo. Molestiae in at cupiditate hic praesentium. Ea quod accusamus odit et voluptatem porro vel dolor quis. Animi dolor odit assumenda perspiciatis quia illo et. Est inventore earum omnis labore ut dicta consequatur quia."
  },
  {
    "id": "_bz01jeb1f",
    "title": "Taniec towarzyski z elementami tańca współczesnego/dyskotekowego",
    "teachers": [
      "Borkowski"
    ],
    "categories": [
      "Music",
      "Movies",
      "Garden"
    ],
    "capacity": 25,
    "date": {
      "day": "środa",
      "time": {
        "start": "13:45",
        "end": "14:30"
      }
    },
    "classes": [
      1,
      2,
      3
    ],
    "description": "Reiciendis deleniti eligendi et et dolore nulla soluta voluptas esse. Consequuntur minus labore. Earum quae ea nisi impedit. A laudantium et est quo tempore. Eligendi enim officiis nesciunt iure nesciunt labore. Eum et accusantium sint aut sequi aut.\n \rTemporibus a est alias impedit omnis. Perspiciatis est consequuntur adipisci quos itaque in. Illo error aspernatur minus vitae magnam reprehenderit. Atque ipsum cupiditate deleniti pariatur. Eos quasi eos aut et et. Assumenda et omnis beatae libero.\n \rVoluptatem corrupti aspernatur. Repudiandae commodi enim necessitatibus sit porro necessitatibus. Rerum aut ipsam deleniti similique quia."
  },
  {
    "id": "_5psy2wmda",
    "title": "Taniec towarzyski z elementami tańca współczesnego/dyskotekowego",
    "teachers": [
      "Cichoń"
    ],
    "categories": [
      "Clothing"
    ],
    "capacity": 25,
    "date": {
      "day": "środa",
      "time": {
        "start": "14:40",
        "end": "15:25"
      }
    },
    "classes": [
      4,
      5,
      6
    ],
    "description": "Ipsum alias eos cum et ratione praesentium nisi voluptas officiis. Non in veritatis. Sint aut non numquam et voluptatum quasi quia. Sunt sed optio veritatis quae. Omnis aliquid excepturi cumque fugiat et et quidem voluptas sint."
  }
];

export const students: Student[] = [
    {
      "id": "_draoxf47p",
      "firstName": "Ansgary",
      "lastName": "Orzechowski",
      "email": "Joanna.Lipski6@hotmail.com",
      "studentClass": "8C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_kmsn7hp4n",
      "firstName": "Aleksander",
      "lastName": "Mackiewicz",
      "email": "Galfryd.Grski16@hotmail.com",
      "studentClass": "7D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_618jifcfc",
      "firstName": "Hubert",
      "lastName": "Pilch",
      "email": "Klemens55@gmail.com",
      "studentClass": "6D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_iyw7nlsge",
      "firstName": "Eleonora",
      "lastName": "Ossowski",
      "email": "Zoe97@gmail.com",
      "studentClass": "8D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_syn54xtiv",
      "firstName": "Marek",
      "lastName": "Stefaniak",
      "email": "Maksym_Jwiak92@yahoo.com",
      "studentClass": "2D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_0ep3qoptg",
      "firstName": "Aleksander",
      "lastName": "Nawrot",
      "email": "Agata77@hotmail.com",
      "studentClass": "3D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_6yb8348a9",
      "firstName": "Anatol",
      "lastName": "Kopeć",
      "email": "Janina_Chudzik@yahoo.com",
      "studentClass": "6D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_eeo986kvv",
      "firstName": "Zoe",
      "lastName": "Adamiec",
      "email": "Cyrus.Szydowski48@gmail.com",
      "studentClass": "2D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_98q7rxrlj",
      "firstName": "Paulina",
      "lastName": "Miller",
      "email": "Laurencja1@hotmail.com",
      "studentClass": "4A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_05ptscwnr",
      "firstName": "Wanesa",
      "lastName": "Zarzycki",
      "email": "Helena17@hotmail.com",
      "studentClass": "2D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_s0s7o9ecu",
      "firstName": "Franciszka",
      "lastName": "Wyszyński",
      "email": "Luiza5@gmail.com",
      "studentClass": "5B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_z475rjswr",
      "firstName": "Izabela",
      "lastName": "Żak",
      "email": "Wiara_Kaniewski88@hotmail.com",
      "studentClass": "1B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_hjq09atax",
      "firstName": "Edmund",
      "lastName": "Chmura",
      "email": "Hipolit.Urban@gmail.com",
      "studentClass": "1D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_jz9ekn9q9",
      "firstName": "Hugo",
      "lastName": "Ruciński",
      "email": "Zuzanna.ukaszewski@gmail.com",
      "studentClass": "1C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_goly14xrw",
      "firstName": "Dawid",
      "lastName": "Kalinowski",
      "email": "Gertruda_Biedrzyski53@gmail.com",
      "studentClass": "6C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_hwof918dr",
      "firstName": "Nadzieja",
      "lastName": "Brzeziński",
      "email": "Alfred.Wicek58@hotmail.com",
      "studentClass": "2B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_1sdaw7s2f",
      "firstName": "Maksym",
      "lastName": "Płonka",
      "email": "Horacy_Zagrski@gmail.com",
      "studentClass": "4B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_wt72b4elr",
      "firstName": "Rajnold",
      "lastName": "Tomys",
      "email": "Adelajda_Szczepaniak@yahoo.com",
      "studentClass": "5D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_orrqsked7",
      "firstName": "Patrycy",
      "lastName": "Tomys",
      "email": "Ksawery39@hotmail.com",
      "studentClass": "5C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_07vaklmoj",
      "firstName": "Szczepan",
      "lastName": "Drozdowski",
      "email": "Paulina.Maek32@gmail.com",
      "studentClass": "1C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_q42lc3u3f",
      "firstName": "Patrycjusz",
      "lastName": "Bielski",
      "email": "Prokles.Nowakowski@hotmail.com",
      "studentClass": "7A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_zc7m2w49z",
      "firstName": "Rajnold",
      "lastName": "Adamowicz",
      "email": "Walter31@gmail.com",
      "studentClass": "3B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_09cp4g68l",
      "firstName": "Marceli",
      "lastName": "Jędrzejczyk",
      "email": "Porfiry12@hotmail.com",
      "studentClass": "2D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_l4cvpz18b",
      "firstName": "Klemens",
      "lastName": "Przybysz",
      "email": "Ksawera52@gmail.com",
      "studentClass": "4D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_v7k4so2ut",
      "firstName": "Ginewra",
      "lastName": "Chojnacki",
      "email": "Arkady56@hotmail.com",
      "studentClass": "5A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_2l4aduu26",
      "firstName": "Izabela",
      "lastName": "Marciniak",
      "email": "Rajmund.Woniak@hotmail.com",
      "studentClass": "3C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_hq1s6z9jm",
      "firstName": "Hipolit",
      "lastName": "Grabowski",
      "email": "Edyta77@hotmail.com",
      "studentClass": "3A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_af4z6hnj9",
      "firstName": "Tymoteusz",
      "lastName": "Chmiel",
      "email": "Olaf78@yahoo.com",
      "studentClass": "4D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_srk6wi9i8",
      "firstName": "Dionizy",
      "lastName": "Banaś",
      "email": "Klementyna59@gmail.com",
      "studentClass": "2A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_rmcz4xuqv",
      "firstName": "Tymoteusz",
      "lastName": "Chojnacki",
      "email": "Szymon_Misztal1@gmail.com",
      "studentClass": "7D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_o2yn6vy0b",
      "firstName": "Marceli",
      "lastName": "Przybył",
      "email": "Roger_Siwek@yahoo.com",
      "studentClass": "8C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_m8qlg8cms",
      "firstName": "Liliana",
      "lastName": "Rojek",
      "email": "Roksana_Graczyk56@hotmail.com",
      "studentClass": "1C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_vxctewbut",
      "firstName": "Albert",
      "lastName": "Staszewski",
      "email": "Daniel_Przybya36@gmail.com",
      "studentClass": "4D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_nme7tfbo1",
      "firstName": "Nikodem",
      "lastName": "Markowski",
      "email": "Eudokia_Ciela@gmail.com",
      "studentClass": "1B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_t11299vjc",
      "firstName": "Joachim",
      "lastName": "Duszyński",
      "email": "Julita89@gmail.com",
      "studentClass": "7C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_gtmthulkv",
      "firstName": "Emanuel",
      "lastName": "Brzozowski",
      "email": "Terencjusz66@hotmail.com",
      "studentClass": "8C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_nred6a7oi",
      "firstName": "Daria",
      "lastName": "Zagórski",
      "email": "Janina3@gmail.com",
      "studentClass": "5C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_zauc96ybz",
      "firstName": "Walgierz",
      "lastName": "Gałka",
      "email": "Roger.Stefaniak@yahoo.com",
      "studentClass": "5A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_peatu8y3v",
      "firstName": "Brygida",
      "lastName": "Kogut",
      "email": "Olga_Kamierczak@hotmail.com",
      "studentClass": "4B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_ahwvlzf09",
      "firstName": "Ferdynanda",
      "lastName": "Urbanek",
      "email": "Stanisaw.Sowik@gmail.com",
      "studentClass": "7A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_3psryfuy3",
      "firstName": "Roksana",
      "lastName": "Baran",
      "email": "Zuzanna.Wrona@gmail.com",
      "studentClass": "1C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_8fpwft4g0",
      "firstName": "Beatrycze",
      "lastName": "Stachowicz",
      "email": "Kira_Lenart19@gmail.com",
      "studentClass": "6C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_ikx8ba1sz",
      "firstName": "Cyra",
      "lastName": "Andrzejewski",
      "email": "Renata.Misztal55@yahoo.com",
      "studentClass": "2A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_p5vr5wc15",
      "firstName": "Małgorzata",
      "lastName": "Misiak",
      "email": "Lilia.Kara1@gmail.com",
      "studentClass": "5C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_5tt1az6r6",
      "firstName": "Leonard",
      "lastName": "Kłos",
      "email": "Eustracjusz67@gmail.com",
      "studentClass": "6A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_1wy73pxq3",
      "firstName": "Dominik",
      "lastName": "Młynarczyk",
      "email": "Lilianna0@gmail.com",
      "studentClass": "8D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_fltthxrut",
      "firstName": "Konstanty",
      "lastName": "Sokół",
      "email": "Teresa_Szymczak@hotmail.com",
      "studentClass": "8B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_doisc20rq",
      "firstName": "Walter",
      "lastName": "Kubiak",
      "email": "Stella.Lenart81@yahoo.com",
      "studentClass": "3D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_o3kl2zul3",
      "firstName": "Borys",
      "lastName": "Duda",
      "email": "Maja36@hotmail.com",
      "studentClass": "4B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_x0fxeltfc",
      "firstName": "Emilia",
      "lastName": "Tokarski",
      "email": "Arystarch.Staszewski@hotmail.com",
      "studentClass": "2C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_qwovynm5g",
      "firstName": "Wawrzyniec",
      "lastName": "Jastrzębski",
      "email": "Laura.Kwiecie@yahoo.com",
      "studentClass": "7A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_yi2wpkmct",
      "firstName": "Filemon",
      "lastName": "Dobrowolski",
      "email": "Zygmunt92@gmail.com",
      "studentClass": "5A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_0p1490cy9",
      "firstName": "Franciszek",
      "lastName": "Kolasa",
      "email": "Klara_Gwd62@yahoo.com",
      "studentClass": "8B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_lukon3yvx",
      "firstName": "Karol",
      "lastName": "Więcek",
      "email": "Dorota_Bieniek56@yahoo.com",
      "studentClass": "2C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_uswqs0k58",
      "firstName": "Marek",
      "lastName": "Frączek",
      "email": "Tamara56@gmail.com",
      "studentClass": "6B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_pi14axdvl",
      "firstName": "Jakubina",
      "lastName": "Florczak",
      "email": "Wawrzyniec39@yahoo.com",
      "studentClass": "7D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_frev86mcl",
      "firstName": "Izabela",
      "lastName": "Kałuża",
      "email": "Leonid80@gmail.com",
      "studentClass": "7B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_v0919x0j1",
      "firstName": "Prokul",
      "lastName": "Aleksandrowicz",
      "email": "Reginald_Zajc@yahoo.com",
      "studentClass": "4C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_83qkrbs92",
      "firstName": "Helena",
      "lastName": "Kostecki",
      "email": "Rebeka.Frankowski@hotmail.com",
      "studentClass": "1D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_aulioh21s",
      "firstName": "Franciszek",
      "lastName": "Więckowski",
      "email": "Zachary_Czekaj@yahoo.com",
      "studentClass": "5B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_nl17f63ww",
      "firstName": "Eugenia",
      "lastName": "Pietrzak",
      "email": "Sylwester_Wierzbicki2@gmail.com",
      "studentClass": "7C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_5kk0bgj8l",
      "firstName": "Dominik",
      "lastName": "Sienkiewicz",
      "email": "Bazyli62@hotmail.com",
      "studentClass": "6D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_lm1ib0fha",
      "firstName": "Kwintyn",
      "lastName": "Kowalski",
      "email": "Ruta48@yahoo.com",
      "studentClass": "2B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_jd12ezar0",
      "firstName": "Arkady",
      "lastName": "Flis",
      "email": "Aleksander_Broda@yahoo.com",
      "studentClass": "8D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_i8mdxzh93",
      "firstName": "Bibiana",
      "lastName": "Wypych",
      "email": "Diana_Grzegorczyk89@yahoo.com",
      "studentClass": "3B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_xtnsa7d31",
      "firstName": "Feliks",
      "lastName": "Zawada",
      "email": "Marek_Czerniak17@yahoo.com",
      "studentClass": "1D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_hooh9hal1",
      "firstName": "Wirginia",
      "lastName": "Podgórski",
      "email": "Marianna.Piwowarczyk@hotmail.com",
      "studentClass": "3A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_brqws07wv",
      "firstName": "Michalina",
      "lastName": "Partyka",
      "email": "Klemens.Kubacki@hotmail.com",
      "studentClass": "2D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_793uw2vw5",
      "firstName": "Grzegorz",
      "lastName": "Stanisławski",
      "email": "Anatol28@hotmail.com",
      "studentClass": "4B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_w12ms6hhe",
      "firstName": "Alwar",
      "lastName": "Zaręba",
      "email": "Eustracjusz69@gmail.com",
      "studentClass": "5C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_e4fnqg3ss",
      "firstName": "Samuel",
      "lastName": "Raczyński",
      "email": "Prokop_Nawrot20@gmail.com",
      "studentClass": "8B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_m79z59zy2",
      "firstName": "Gonsalwy",
      "lastName": "Leśniak",
      "email": "Dominik_Cybulski@gmail.com",
      "studentClass": "8C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_0fofwwpup",
      "firstName": "Emanuel",
      "lastName": "Kruk",
      "email": "Izolda72@hotmail.com",
      "studentClass": "7C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_1i3seidkp",
      "firstName": "Sylwester",
      "lastName": "Karaś",
      "email": "Walter.Kaczor@hotmail.com",
      "studentClass": "3A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_mk1mq067j",
      "firstName": "Wawrzyniec",
      "lastName": "Filipek",
      "email": "Reginald_Sobieraj1@gmail.com",
      "studentClass": "5B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_f50q80iuj",
      "firstName": "Martyna",
      "lastName": "Raczyński",
      "email": "Spirydion11@yahoo.com",
      "studentClass": "4C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_d3l9nlkqv",
      "firstName": "Seweryn",
      "lastName": "Bogusz",
      "email": "Ada26@hotmail.com",
      "studentClass": "6A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_u8c10vfcw",
      "firstName": "Elwira",
      "lastName": "Gil",
      "email": "Agaton.Krl@yahoo.com",
      "studentClass": "6C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_maqz0nbva",
      "firstName": "Malwina",
      "lastName": "Popławski",
      "email": "Agaton.Kos@yahoo.com",
      "studentClass": "4D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_nebr1ds0h",
      "firstName": "Kira",
      "lastName": "Domański",
      "email": "Maja86@gmail.com",
      "studentClass": "7B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_gpsmbl794",
      "firstName": "Laura",
      "lastName": "Głąb",
      "email": "Marek.Dudziak@gmail.com",
      "studentClass": "4A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_lzh4ze4y6",
      "firstName": "Horacy",
      "lastName": "Sitek",
      "email": "Natalia.Gajewski@yahoo.com",
      "studentClass": "7D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_ch5towj7e",
      "firstName": "Edgar",
      "lastName": "Gwoździk",
      "email": "Edyta_Paczkowski@hotmail.com",
      "studentClass": "8C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_w132bsxdu",
      "firstName": "Irma",
      "lastName": "Kałuża",
      "email": "Adam_Kozie41@gmail.com",
      "studentClass": "8B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_4gijraxa7",
      "firstName": "Gabriela",
      "lastName": "Kos",
      "email": "Walenty.Ponka99@yahoo.com",
      "studentClass": "8A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_tngy6ss1k",
      "firstName": "Agrypina",
      "lastName": "Urbańczyk",
      "email": "Walery_Rogala30@hotmail.com",
      "studentClass": "4B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_llw9xtvpc",
      "firstName": "Noemi",
      "lastName": "Kopeć",
      "email": "Henryka_Niedziela@gmail.com",
      "studentClass": "7D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_7wy3lsozc",
      "firstName": "Leon",
      "lastName": "Czech",
      "email": "Lilia.Wo89@hotmail.com",
      "studentClass": "7A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_fg3o89nqr",
      "firstName": "Lucjan",
      "lastName": "Zwoliński",
      "email": "Brajan.Kubiak58@yahoo.com",
      "studentClass": "6B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_yvy7ldjw9",
      "firstName": "Zoe",
      "lastName": "Drzewiecki",
      "email": "Wirginia.Mrz68@hotmail.com",
      "studentClass": "4D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_f6jm3jxq1",
      "firstName": "Hipolit",
      "lastName": "Gołąb",
      "email": "Lilla.Kuciski26@hotmail.com",
      "studentClass": "4A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_rjdrslxoe",
      "firstName": "Daniel",
      "lastName": "Lenart",
      "email": "Ferdynanda_Gwodzik@gmail.com",
      "studentClass": "8D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_q5n71iylh",
      "firstName": "Olaf",
      "lastName": "Raczyński",
      "email": "Teodor91@gmail.com",
      "studentClass": "8C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_q6f03z4rv",
      "firstName": "Alan",
      "lastName": "Andrzejczak",
      "email": "Edyta.Urbaniak51@yahoo.com",
      "studentClass": "4A",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_72mjmtel1",
      "firstName": "Dorian",
      "lastName": "Lipski",
      "email": "Ksenofont_Karpiski@yahoo.com",
      "studentClass": "2C",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_2r9p85zto",
      "firstName": "Szymon",
      "lastName": "Pluta",
      "email": "Modest53@yahoo.com",
      "studentClass": "3D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_4f7nz3mct",
      "firstName": "Berta",
      "lastName": "Książek",
      "email": "Chloe.Aleksandrowicz34@gmail.com",
      "studentClass": "8D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_4zut4y2wl",
      "firstName": "Korneli",
      "lastName": "Skowronek",
      "email": "Edmund.Gwd44@yahoo.com",
      "studentClass": "3D",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_kj4nxymuy",
      "firstName": "Ryszard",
      "lastName": "Szczepaniak",
      "email": "Franciszek_Rogowski86@gmail.com",
      "studentClass": "1B",
      "courses": getRandomArrayElements(courses, 3)
    },
    {
      "id": "_d73xv5wbl",
      "firstName": "Klarencjusz",
      "lastName": "Wieczorek",
      "email": "Platon12@hotmail.com",
      "studentClass": "7A",
      "courses": getRandomArrayElements(courses, 3)
    }
];
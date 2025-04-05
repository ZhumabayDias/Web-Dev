import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  
  getProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      const products: Product[] = [
        {
          id: 1,
          like: 0,
          category: "White goods",
          name: "Электрочайник Yingzheng ZY-305 черный",
          description: "Современный и стильный, этот электрический чайник сочетает в себе элегантный дизайн и передовые функции",
          rating: 4.8,
          images:["https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium",], 
          link: "https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 2,
          like: 0,
          category: "Musical instruments",
          name: "Укулеле 30284035_443310265 розовый",
          description: "",
          rating: 4.9,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/ha7/h5e/85993689776158.jpg?format=gallery-medium",
          ],
          link: "https://kaspi.kz/shop/p/30284035-443310265-rozovyi-119302804/?c=750000000",
        },
        {
          id: 3,
          like: 0,
          category: "Medicine",
          name: "Танфлекс спрей 0.15% 30 мл",
          description: "Воспалительные заболевания полости рта и ЛОР-органов различной этиологии:(в составе комплексной терапии)",
          rating: 5,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/h45/h9a/86624084656158.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h52/hf7/86624084688926.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hb3/hd1/86624084787230.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/ha2/h55/86624084852766.jpg?format=gallery-medium"
          ],
          link: "https://kaspi.kz/shop/p/tanfleks-sprei-0-15-30-ml-101143382/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 4,
          like: 0,
          category: "White goods",
          name: "Пылесос Deerma DX118C белый",
          description: "С вертикальным пылесосом Deerma DX118C все члены семьи полюбят уборку настолько, что будут гореть желанием делать ее каждый день.",
          rating: 4.8,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/h77/h59/64155430780958.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h1b/h72/65249067958302.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h1f/h24/65249068220446.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hb1/h15/65249068515358.jpg?format=gallery-medium"
          ],
          link: "https://kaspi.kz/shop/p/deerma-dx118c-belyi-100825416/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 5,
          like: 0,
          category: "Furniture",
          name: "Morbido диван прямой Комфорт, обивка микровелюр, 80х210х80 см, серый",
          description: "Практичный  диван-кровать с легкой системой трансформации. Каркас изготовлен из ДСП, деревянный брус. Мягкие элементы выполнены из пенополиуретана. Диван оснащен механизмом трансформации еврокнижка (поднять сидение в верх, подтянуть на себя, спинка подает вперед) такой механизм позволяет легко раскладывать и складывать диван без особых усилий. Благодаря своей универсальности и функциональности, он является идеальным решением для тех, кто ищет удобную и практичную мебель для своего дома.",
          rating: 4.6,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/ha6/h5b/86777038307358.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/he2/h45/86777038340126.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p5f/p69/5692499.png?format=gallery-medium"
          ],
          link: "https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 6,
          like: 0,
          category: "Medicine",
          name: "Мукалтин таблетки 50 мг 10 шт",
          description: "",
          rating: 5,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/hd3/h1c/83678055694366.png?format=gallery-medium"],
          link: "https://kaspi.kz/shop/p/mukaltin-tabletki-50-mg-10-sht-100990373/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 7,
          like: 0,
          category: "Furniture",
          name: "Диван прямой Nasip Raiana, обивка ткань, 85х230х70 см, светло-коричневый",
          description: "Практичный раскладной диван, компактный и простой в уходе. ППУ (пенополиуретан) — это сверхлегкий пластичный материал, получаемый из синтетических полимеров. Ячеистая структура обеспечивает наполнителю хорошие вентилирующие и гигиенические свойства. Материал обладает ортопедическим и анатомическим эффектом, не слеживается и не проминается, легко восстанавливает форму. Пенополиуретан не собирает пыль, поэтому он абсолютно безопасен для тех, кто страдает аллергией. «Еврокнижка» («Альтернатива») оптимально подходит для ежедневного применения. Чтобы перевести конструкцию в режим «кровать», достаточно выдвинуть вперед сиденье, а затем привести спинку в горизонтальное положение. Когда потребуется собрать диван, эти же действия нужно выполнить в обратном порядке: сначала поднять спинку, а затем придвинуть сиденье. В диванах с такой системой трансформации всегда есть вместительный ящик для хранения белья.",
          rating: 4.6,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/p70/pdb/6045250.jpeg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hf4/h65/84622517764126.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h84/hf2/84622517829662.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p32/p6a/5693756.png?format=gallery-medium"
          ],
          link: "https://kaspi.kz/shop/p/divan-prjamoi-nasip-raiana-obivka-tkan-85h230h70-sm-svetlo-korichnevyi-115023255/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 8,
          like: 0,
          category: "Furniture",
          name: "Лего 0107 детский игровой стол, 48x48x49 см, пластик, мультиколор",
          description: "Детский стол и стул для конструирования — это современный и функциональный набор, созданный специально для развития детей дошкольного возраста. Этот комплект включает в себя удобный детский стол, стул и детали блочного конструктора, что делает его универсальным решением для разнообразных творческих занятий.",
          rating: 4.6,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/h5c/h12/80175235760158.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h26/h7b/80175236284446.jpg?format=gallery-medium"
          ],
          link: "https://kaspi.kz/shop/p/lego-0107-detskii-igrovoi-stol-48x48x49-sm-plastik-mul-tikolor-109929201/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 9,
          like: 0,
          category: "Musical instruments",
          name: "Оркестровый (professional)",
          description: "Кәсіби домбырашыларға, өнер университеті студенттеріне, музыка мектебінің 4,5 сынып оқушыларына арналған домбыра.9 шанақты - Оркестр домбырасы.Төкпе күйді - төгетін аспап.Кәсіби домбыраТүрі, түсі, оюы ерекше шебердің туындысыХит Сатылымдағы аспап",
          rating: 5,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/h07/h6a/64393265020958.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hee/h09/64393268592670.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h50/h9b/64393270853662.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hdc/h9b/64393343762462.jpg?format=gallery-medium"
    
          ],
    
          link: "https://kaspi.kz/shop/p/orkestrovyi-professional--106652877/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 10,
          like: 0,
          category: "Musical instruments",
          name: "Флейта Kazimport YRS-23 бежевый",
          description: "",
          rating: 5,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/h25/h3b/84022212001822.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h7a/h6f/84022212067358.jpg?format=gallery-medium",
           
          ],
          link: "https://kaspi.kz/shop/p/kazimport-yrs-23-bezhevyi-113522858/?c=750000000",
        },
    
        {
          id: 11,
          like: 0,
          category: "White goods",
          name: "Кухонные весы Generic SF-400",
          description: "Современные электронные кухонные весы имеют элегантную платформу из пластика. Весы выполнены в белом корпусе. Предел взвешивания 10 кг.",
          rating: 4.9,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium",
          ],
          link: "https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 12,
          like: 0,
          category: "White goods",
          name: "Блендер Slaouwo HB-2075 черный",
          description: "",
          rating: 4.8,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium",
          ],
          link: "https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 13,
          like: 0,
          category: "White goods",
          name: "Утюг Vitek VT-1215 розовый",
          description: "Утюг Vitek VT-1215 PK – это гарант отсутствия складочек на Вашей одежде. Это быстрое и комфортное утюжение постельного белья с минимумом энергозатрат. Данная модель потребляет всего лишь 2400 Вт электроэнергии, которую она тратит на выпуск пара со скоростью 140 г/мин и нагрев подошвы. Для пересушенных на солнце или батареи отопления тканей существует функция разбрызгивания. Подошва Vitek VT-1215 PK изготовлена из керамики, зарекомендовавшей себя в качестве отличного борца против самых мелких заломов на одежде. С противокапельной системой Вам больше не придется беспокоиться о водяных разводах, возникающих при утюжении вещей на небольшой температуре. Система защиты от накипи вместе с самоочисткой призвана продлить срок службы Vitek VT-1215 PK на долгие годы. Располагающийся на подошве утюга специальный желобок поможет прогладить непокорные складочки между пуговицами.",
          rating: 4.6,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/h53/haa/63760686743582.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h2b/h5b/63760687398942.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h52/hf5/63760688185374.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h2f/hd4/63760690216990.jpg?format=gallery-medium"
          ],
          link: "https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 14,
          like: 0,
          category: "Furniture",
          name: "Стул C06, 80x46x40 см, белый",
          description: "Благодаря сочетанию пластика с металлом и деревом изделие органично вписывается практически в любую среду, делая обстановку более естественной и «живой». Еще одно достоинство модели – удобная для обеденного стола высота",
          rating: 4.9,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/pa4/p2b/3187773.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p50/p2b/3187776.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p6c/p2b/3187775.jpg?format=gallery-medium"
          ],
          link: "https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 15,
          like: 0,
          category: "Furniture",
          name: "Игровое кресло KG 04, черный, белый",
          description: "",
          rating: 4.9,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/hbb/h5f/86565391892510.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/ha0/h7e/86565391958046.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hf1/hee/86565392023582.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h9b/hdb/86565392089118.jpg?format=gallery-medium"
          ],
          link: "https://kaspi.kz/shop/p/igrovoe-kreslo-kg-04-chernyi-belyi-121567527/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 16,
          like: 0,
          category: "Medicine",
          name: "Супрастин таблетки 25 мг 20 шт",
          description: "",
          rating: 5,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/h23/h6c/64015630794782.jpg?format=gallery-medium",
          ],
          link: "https://kaspi.kz/shop/p/suprastin-tabletki-25-mg-20-sht-101142377/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 17,
          like: 0,
          category: "Medicine",
          name: "Цитрамон П таблетки 240 мг 10 шт",
          description: "",
          rating: 5,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/h04/h90/86581566636062.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hea/hf3/86581566701598.jpg?format=gallery-medium"
          ],
          link: "https://kaspi.kz/shop/p/tsitramon-p-tabletki-240-mg-10-sht-100979731/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 18,
          like: 0,
          category: "Medicine",
          name: "Энтерожермина Форте суспензия 4 млдрд/5 мл 10 шт",
          description: "",
          rating: 5,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/p7f/p34/17407707.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p46/p34/17407709.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p31/p31/17407716.jpg?format=gallery-medium"
          ],
          link: "https://kaspi.kz/shop/p/enterozhermina-forte-suspenzija-4-mldrd-5-ml-10-sht-101062213/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
        },
        {
          id: 19,
          like: 0,
          category: "Musical instruments",
          name: "Цифровое пианино Konix PJ88C",
          description: "Konix PJ88C — это доступное и функциональное цифровое пианино, предназначенное для начинающих музыкантов и тех, кто ищет компактный инструмент для домашнего использования. Оно оснащено 88 полноразмерными клавишами, которые обеспечивают комфортную игру. Пианино предлагает несколько различных тембров и эффектов, а также встроенные функции, такие как метроном и возможность записи, что делает его удобным для обучения и практики. Конструкция пианино проста и удобна, а благодаря относительно невысокой цене Konix PJ88C становится хорошим выбором для тех, кто только начинает осваивать игру на фортепиано.",
          rating: 5,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/p11/p34/25421098.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p44/p7e/25421100.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p7d/p7e/25421102.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p99/p7e/25421103.jpg?format=gallery-medium"
          ],
          link: "https://kaspi.kz/shop/p/tsifrovoe-pianino-konix-pj88c-110759140/?c=750000000",
        },
        {
          id: 20,
          like: 0,
          category: "Musical instruments",
          name: "Каподастр Dadi Skbd007",
          description: "",
          rating: 4.9,
          images: ["https://resources.cdn-kaspi.kz/img/m/p/hda/hf0/85302761979934.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h0d/h31/85302762045470.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h70/h5d/85302762111006.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h64/h13/85302762242078.jpg?format=gallery-medium"
          ],
          link: "https://kaspi.kz/shop/p/dadi-skbd007-117044357/?c=750000000",
        },
        
      ];
      resolve(products);
    });
 }
}
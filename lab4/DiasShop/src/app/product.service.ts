import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[]= [
    {
      id: 1,
      name: "Электрочайник Yingzheng ZY-305 черный",
      description: "Современный и стильный, этот электрический чайник сочетает в себе элегантный дизайн и передовые функции",
      rating: 4.8,
      images:["https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium",], 
      link: "https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
    },
    {
      id: 2,
      name: "Стиральная машина LG F2J3NS0W белый",
      description: "Глубина стиральной машины LG F2J3NS0W всего 44 см, благодаря чему она поместится даже в небольшую ванную комнату. Барабан вмещает 6 кг сухого белья, чего вполне достаточно для семьи из трёх-четырёх человек. Эта модель снабжена инверторным двигателем с прямым приводом, он отличается более длительным сроком службы, чем обычный, так как в его конструкции нет щёток и ремня.",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium",],
      link: "https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
    },
    {
      id: 3,
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
      name: "Мукалтин таблетки 50 мг 10 шт",
      description: "",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/hd3/h1c/83678055694366.png?format=gallery-medium"],
      link: "https://kaspi.kz/shop/p/mukaltin-tabletki-50-mg-10-sht-100990373/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
    },
    {
      id: 7,
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
      name: "Головоломка Фрукты и овощи, цвета, фигуры, машинки, рыбы,цифры картон",
      description: "",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p8a/pe2/4968832.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p6d/pe2/4968833.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pfd/pe1/4968837.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p2a/pa9/4968839.jpeg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/golovolomka-frukty-i-ovoschi-tsveta-figury-mashinki-ryby-tsifry-karton-116422441/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gFIoT3xuD2ca0MghDEUTMiy&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQsLMpXQYouBO6cIeK3rGm9-JT7MftIlcCEygLwakjazLO_iYvqNxohoC4MgQAvD_BwE",
    },
  ]
  
  getProducts(): Product[] {
    return this.products;
  }
  constructor() { }
}

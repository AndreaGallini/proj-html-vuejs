import { reactive } from "vue";
export const store = reactive({

 navbarArray : [
        'Home',
        'Recipes',
        'Places',
        'Blog',
        'About',
        'Contact',


    ],
    foodieJournalArray: [
        {
            image: '/images/single-post-img3-600x395.jpg',
            title:'Food Corner: Top Japanese Resturants for Sushi',
            date:'By admin | March 25th,2019',
        },
              {
            image: '/images/fi-roundup-600x395.jpg',
            title:'Roundup : My New Favorite Recipes FOr Healty Living',
            date:'By admin | March 25th,2019',
        }  ,
              {
            image: '/images/fi-toasts-600x395.jpg',
            title:'Why These Toasts with Tea are My New Favorite',
            date:'By admin | March 25th,2019',
      }          

    ],
    popularRecipes: [
        {
            img: '/images/Mixed-fruits-460x295.jpg',
            testo: 'Fruit Platter with Banana,Mango,Berries and Orange',
            link:'https://avada.theme-fusion.com/food/recipes/fruit-platter-with-banana-mango-berries-and-orange/',


        },
        {
            img: '/images/r-rachel-park-366508-unsplash-min-460x295.jpg',
            testo: 'Breakfast Delight With STrawberry, Egg And Fruit',
            link:'https://avada.theme-fusion.com/food/recipes/breakfast-delight-with-strawberry-egg-and-fruit/',


        },
        {
            img: '/images/r-michelle-tsang-500721-unsplash-min-460x295.jpg',
            testo: 'Ice Cream HeaveWith Vanilla,Chocolate And Pistacchio',
            link:'https://avada.theme-fusion.com/food/recipes/ice-cream-heaven-with-vanilla-chocolate-and-pistachio/',


        },
        {
            img: '/images/quick-summer-drink-460x295.jpg',
            testo: 'Video Recipe: How to Make a Cool Summer Drink',
            link:'https://avada.theme-fusion.com/food/recipes/video-recipe-how-to-make-a-cool-summer-drink/',


        },
        {
            img: '/images/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg',
            testo: 'Ketogenic Diet Recipe with Avocado',
            link:'https://avada.theme-fusion.com/food/recipes/ketogenic-diet-recipe-with-avocado/',


        },
        {
            img: '/images/perfect-cosmopolitan-460x295.jpg',
            testo: 'Video Recipe : The Perfect Cosmopolitan',
            link:'https://avada.theme-fusion.com/food/recipes/video-recipe-the-perfect-cosmopolitan/',


        },
        {
            img: '/images/r-brooke-lark-96398-unsplash-min-460x295.jpg',
            testo: 'Summer Cheese Platter with Berries, Crackers and Wine',
            link:'https://avada.theme-fusion.com/food/recipes/summer-cheese-platter-with-berries-crackers-and-wine/',


        },
        {
            img: '/images/fi2x-6-460x295.jpg',
            testo: 'Strawberyy Fruit Pies Served With Tea',
            link:'https://avada.theme-fusion.com/food/recipes/strawberry-fruit-pies-served-with-tea/',


        },

    ],
    culinaryCollection: [
        {
            image: '/images/drinks-recipes.png',
            title:'drinks',
        },
        {
            image: '/images/soups-recipes.png',
            title:'soups',
        },
        {
            image: '/images/baking-recipes.png',
            title:'bakery',
        },
        {
            image: '/images/dinner-recipes.png',
            title:'dinner',
        },
        {
            image: '/images/healthy-recipes.png',
            title:'healty',
        },
        {
            image: '/images/staff-picks.png',
            title:'staff picks',
        },
        {
            image: '/images/premium-recipes.png',
            title:'appetisers',
        },
        {
            image: '/images/quick-easy-recipes.png',
            title:'quick & easy',
      },
    ],
    PostsArray: [
        {
            img: '/images/fi-roundup-200x132.jpg',
            title: 'Roundup : My new Favorite reciper for healthy living',
            date:'By admin | March 25th, 2019',
        },
        {
            img: '/images/fi-korean-food-200x132.jpg',
            title: 'Meal Prep : Korean Bibimbap with Kinchi',
            date:'By admin | March 25th, 2019',
        },
        {
            img: '/images/fi-toasts-600x395.jpg',
            title:'Why These Toasts with Tea are My New Favorite',
            date:'By admin | March 25th,2019',
        },
        {
            img: '/images/fi-street-food-200x132.jpg',
            title: 'Exploring Street Food in Bangkok',
            date:'By admin | March 25th,2019',
        },
        {
            img: '/images/fi-organic-breakfast-200x132.jpg',
            title: 'Organic Choices For HEaltier Living',
            date:'By admin | March 25th,2019',
        },
        {
            img: '/images/fi-water-side-rest-200x132.jpg',
            title: ' 5 Waterside Reastaurant in Instanbul for SPecial Events',
            date:'By admin | March 25th,2019',
        },
    ],
    commentArray: [
                {
            img: '/images/single-post-img3.jpg',
            title: 'Food Corner: Top Japanese Restaurant for Sushi',
            date:' March 25th,2019',
        },
        {
            img: '/images/singapore-featured-image.jpg',
            title: 'City Guide: Singapore',
            date:'February 27th,2019',
        },
        {
            img: '/images/slide1-bg-150x150.jpg',
            title: '6 Nutritional Tips to Help Burn Body Fat',
            date:'February 28th,2019',
        },

    ],
    cardsJumboArray: [
        'images/Yogurt-Nan.jpg' ,
      'images/Mixed-fruits.jpg' , 
      'images/r-rachel-park-366508-unsplash-min.jpg'  ,
      'images/r-michelle-tsang-500721-unsplash-min.jpg'  ,
    ],

    footerLinks: [
        'Recipes',
        'Places',
        'Blog',
        'About',
        'Contacs',
      
    ],
});
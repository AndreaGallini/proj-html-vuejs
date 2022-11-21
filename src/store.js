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
        '/images/Mixed-fruits-460x295.jpg',
        '/images/r-rachel-park-366508-unsplash-min-460x295.jpg',
        '/images/r-michelle-tsang-500721-unsplash-min-460x295.jpg',
        '/images/quick-summer-drink-460x295.jpg',
        '/images/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg',
        '/images/perfect-cosmopolitan-460x295.jpg',
        '/images/r-brooke-lark-96398-unsplash-min-460x295.jpg',
        '/images/fi2x-6-460x295.jpg',
    ]
});
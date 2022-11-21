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
            image: '/public/images/single-post-img3-600x395.jpg',
            title:'Food Corner: Top Japanese Resturants for Sushi',
            date:'By admin | March 25th,2019',
        },
              {
            image: '/public/images/fi-roundup-600x395.jpg',
            title:'Roundup : My New Favorite Recipes FOr Healty Living',
            date:'By admin | March 25th,2019',
        }  ,
              {
            image: '/public/images/fi-toasts-600x395.jpg.jpg',
            title:'Why These Toasts with Tea are My New Favorite',
            date:'By admin | March 25th,2019',
      }          

    ],
});
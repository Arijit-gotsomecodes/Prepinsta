import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address: "Westminster Bridge, London SW1A 2JH, United Kingdom",
    price: 99,
    maxGroupSize: 10,
    desc: "Westminster Bridge is a renowned landmark in the heart of London, connecting the areas of Westminster and Lambeth. First opened in 1750, it replaced an earlier wooden bridge and has since undergone several reconstructions, with the current structure completed in 1862. The bridge is notable for its elegant Victorian design, characterized by its green-colored cast iron structure, which complements the nearby Houses of Parliament and the iconic Big Ben clock tower.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address: "Bali, Indonesia",
    price: 99,
    maxGroupSize: 8,
    desc: "Bali is an Indonesian island and province known for its stunning natural beauty, rich cultural heritage, and vibrant tourism industry. Located in the westernmost end of the Lesser Sunda Islands, Bali is renowned for its picturesque landscapes, including lush rice terraces, volcanic mountains, and beautiful beaches with crystal-clear waters.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Australia",
    city: "Australia",
    distance: 500,
    address: "Snowy Mountains, New South Wales, Australia",
    price: 99,
    maxGroupSize: 8,
    desc: "The Snowy Mountains are a stunning mountain range located in southeastern New South Wales, Australia. Known for their alpine scenery and winter sports, the Snowy Mountains feature the highest peaks in Australia, including Mount Kosciuszko, which stands at 2,228 meters (7,310 feet) above sea level.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Southern Thailand",
    price: 99,
    maxGroupSize: 8,
    desc: "Phuket, the largest island in Thailand, is famous for its picturesque sunrises over the Andaman Sea. Patong Beach, Nai Harn Beach, and Promthep Cape are popular spots to catch the early morning light. The calm waters and scenic views make for a breathtaking start to the day.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: "Nusa Penida, Bali, Indonesia",
    price: 99,
    maxGroupSize: 8,
    desc: "Nusa Penida is a captivating island located southeast of Bali, Indonesia, and is part of the Klungkung Regency. Known for its dramatic coastal cliffs, crystal-clear waters, and unique natural formations, Nusa Penida is a popular destination for those seeking adventure and natural beauty.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address: "Kiyoto, Japan",
    price: 99,
    maxGroupSize: 8,
    desc: "Cherry blossoms typically bloom in spring, creating spectacular displays of pink and white flowers. The blooming period is short, often lasting just a couple of weeks, making it a highly anticipated and cherished event.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
      {
        name: "jhon doe",
        rating: 3.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "Norway",
    distance: 500,
    address: "Holmen, Lofoten Islands, Nordland County, Norway",
    price: 99,
    maxGroupSize: 8,
    desc: "Holmen is a picturesque area located in the Lofoten Islands, a stunning archipelago in Northern Norway. Known for its dramatic landscapes, the Lofoten Islands are famous for their rugged mountains, fjords, and charming fishing villages.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Somewhere in the earth",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
      {
        name: "jhon doe",
        rating: 3.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;

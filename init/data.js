const sampleListings = [
  {
    name: "Simba",
    desc: "Simba was rescued from a busy marketplace where he had been searching for food for days. This charming orange tabby cat has a playful spirit and adores cuddles once he feels safe. He’s looking for a calm home where he can nap in sunny spots and be treated with kindness and patience.",
    image: {
      filename: "listingimg",
      url: "https://cdn.pixabay.com/photo/2021/10/04/07/04/cat-6679699_1280.jpg"
    },
    age: 1,
    gender: "Male",
    location: "Bangalore",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    },
    reviews: [],
    owner: "690a5bc1c412325e655eb31e",
    category:"Cat"
  },

  {
    name: "Chintu",
    desc: "Once a stray roaming near construction sites, Chintu is a brave little dog with a heart full of courage. He loves gentle walks and has quickly learned to trust humans again. He would thrive in a home where he can feel secure and loved every single day.",
    image: {
      filename: "listingimg",
      url: "https://cdn.pixabay.com/photo/2020/06/12/21/13/animal-5291882_1280.jpg"
    },
    age: 3,
    gender: "Male",
    location: "Bangalore",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    },
    reviews: [],
    owner: "690a5bc1c412325e655eb31e",
    category:"Dog"
  },

  {
    name: "Misty",
    desc: "Misty was found sheltering from the rain under a parked car. Despite her timid beginnings, she has blossomed into a loving and affectionate cat. She enjoys quiet corners, gentle pats, and would make a wonderful companion for someone looking for a loyal friend.",
    image: {
      filename: "listingimg",
      url: "https://cdn.pixabay.com/photo/2015/05/14/11/23/cat-766643_1280.jpg"
    },
    age: 2,
    gender: "Female",
    location: "Bangalore",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    },
    reviews: [],
    owner: "690a5bc1c412325e655eb31e",
    category:"cat"
  },

  {
    name: "Rocky",
    desc: "Rocky was abandoned near a highway but rescued just in time. Strong and spirited, he still has a gentle soul. Rocky loves playing fetch and giving warm hugs. He’s hoping to find an active family who will cherish him and give him the love he’s always deserved.",
    image: {
      filename: "listingimg",
      url: "https://cdn.pixabay.com/photo/2015/05/02/23/31/border-collie-750562_1280.jpg"
    },
    age: 4,
    gender: "Male",
    location: "Bangalore",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    },
    reviews: [],
    owner: "690a5bc1c412325e655eb31e",
    category:"Dog"
  },

  {
    name: "Luna",
    desc: "Luna, a graceful white cat with bright green eyes, was rescued after being left behind in an empty apartment. She’s gentle, affectionate, and enjoys curling up near her favorite humans. Luna is looking for a forever home where she’ll never feel lonely again.",
    image: {
      filename: "listingimg",
      url: "https://cdn.pixabay.com/photo/2021/11/14/05/46/animal-6792925_1280.jpg"
    },
    age: 3,
    gender: "Female",
    location: "Bangalore",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    },
    reviews: [],
    owner: "690a5bc1c412325e655eb31e",
    category:"Cat"
  },

  {
    name: "Bruno",
    desc: "Bruno spent his early life surviving on the streets, yet his trust in people remains unshaken. He’s playful, intelligent, and loves belly rubs. Bruno would be the perfect fit for someone who enjoys outdoor adventures and lots of tail wags.",
    image: {
      filename: "listingimg",
      url: "https://cdn.pixabay.com/photo/2020/04/12/02/24/collie-in-water-5032472_1280.jpg"
    },
    age: 5,
    gender: "Male",
    location: "Bangalore",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    },
    reviews: [],
    owner: "690a5bc1c412325e655eb31e",
    category:"Dog"
  },

  {
    name: "Tara",
    desc: "Rescued as a kitten from a drainpipe, Tara has grown into a curious and loving cat. She’s full of energy and enjoys playing with toys and exploring new spaces. Tara would love a home with lots of cozy corners and gentle humans to love her.",
    image: {
      filename: "listingimg",
      url: "https://cdn.pixabay.com/photo/2018/05/09/16/15/dog-3385541_1280.jpg"
    },
    age: 1,
    gender: "Female",
    location: "Bangalore",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    },
    reviews: [],
    owner: "690a5bc1c412325e655eb31e",
    category:"Cat"
  },

  {
    name: "Shadow",
    desc: "Shadow was found injured near a park but made a full recovery thanks to kind rescuers. He’s calm, loyal, and has a protective nature. Shadow would make an excellent companion for anyone seeking a devoted furry friend.",
    image: {
      filename: "listingimg",
      url: "https://cdn.pixabay.com/photo/2017/09/01/11/59/dog-2704022_1280.jpg"
    },
    age: 6,
    gender: "Male",
    location: "Bangalore",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    },
    reviews: [],
    owner: "690a5bc1c412325e655eb31e",
    category:"Dog"
  },

  {
    name: "Nikki",
    desc: "Nikki, a cheerful little pup rescued from a garbage dump, now shines with joy and gratitude. She loves people, enjoys playtime, and has an infectious zest for life. All she needs now is a loving home to call her own.",
    image: {
      filename: "listingimg",
      url: "https://cdn.pixabay.com/photo/2020/11/21/17/22/dog-5764675_1280.jpg"
    },
    age: 2,
    gender: "Female",
    location: "Bangalore",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    },
    reviews: [],
    owner: "690a5bc1c412325e655eb31e",
    category:"Dog"
  },

  {
    name: "Max",
    desc: "Max was discovered near a bus station, patiently waiting beside a bench for someone who never came back. Despite being abandoned, he remains incredibly affectionate and hopeful. With his warm eyes and gentle nature, Max wins hearts instantly. He loves long walks, gentle pats, and simply being around people. Max is now ready to find a forever home where he’ll never have to wait alone again.",
    image: {
      filename: "listingimg",
      url: "https://cdn.pixabay.com/photo/2020/11/21/17/22/dog-5764675_1280.jpg"
    },
    age: 1,
    gender: "Male",
    location: "Bangalore",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    },
    reviews: [],
    owner: "690a5bc1c412325e655eb31e",
    category:"Dog"
  }
];

module.exports = { data: sampleListings };

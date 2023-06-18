const SHOP_DATA = [
  {
    title: "Dinnerware",
    items: [
      {
        id: 1,
        name: "Dan x evenlynn Dinnerware set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id1-main.jpeg?alt=media&token=7ce7e5a6-93f3-40e5-a71f-5085cb97c70d",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id1-2.jpeg?alt=media&token=b7c85f39-70e0-4f38-b3cd-f590c4210103",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id1-2.jpeg?alt=media&token=b7c85f39-70e0-4f38-b3cd-f590c4210103",
        ],
        price: 89,
        tag: ["12-piece dinnerware set", "collection"],
        longdesc: `The newest dinnerware set designed by San Fransico's famous designer production house 'dan and evenlynn'. Brings you modern and chic.`,
        size: "varies",
        including:
          "8 plates (dia. 26cm), 8 side plates (dia. 20cm), and 8 bowls (dia.16cm, height 6cm)",
        material: "Stoneware",
        care: ["Microwave-safe", "Dishwasher-safe"],
      },
      {
        id: 2,
        name: "Dusk Plates",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id2-main.avif?alt=media&token=6bec3799-09b6-4fa2-a298-fa629bea54e9",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id2-1.avif?alt=media&token=8dc7c69d-ec15-46e0-b79c-3f973f15945d",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id2-1.avif?alt=media&token=8dc7c69d-ec15-46e0-b79c-3f973f15945d",
        ],
        price: 40,
        tag: ["4-piece plates", "26cm"],
        longdesc: `Asymmetrical shape with character. Glazed stoneware. `,
        size: "26cm",
        including: "4 plates (dia. 26cm)",
        material: "Stoneware",
        care: ["Microwave-safe", "Dishwasher-safe"],
      },
      {
        id: 3,
        name: "Elegant Porcelain Dinnerware Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id3-1.avif?alt=media&token=df561918-6ade-4dbe-bff6-7baa20ad59da",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id3-main.avif?alt=media&token=57ef5c0e-f40d-4fe3-a01c-7f51970af85b",
        ],
        price: 120,
        tag: ["16-piece porcelain set", "classic design"],
        longdesc:
          "Timeless and elegant porcelain dinnerware set perfect for any occasion.",
        size: "varies",
        including: "4 dinner plates, 4 salad plates, 4 soup bowls, and 4 mugs",
        material: "Porcelain",
        care: ["Dishwasher-safe", "Not suitable for microwave use"],
      },
      {
        id: 4,
        name: "Modern Square Plates",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id4-main.jpeg?alt=media&token=1af7aee2-ff5f-4436-acb6-a7b7dbc6c7ce",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id4-1.jpeg?alt=media&token=645f1e86-4023-46ca-9b56-8639ec76c98e",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id4-2.jpeg?alt=media&token=efa073be-34bc-40ad-8776-1fedb303c169",
        ],
        price: 55,
        tag: ["6-piece square plates", "contemporary style"],
        longdesc:
          "Sleek and modern square plates that add a touch of contemporary style to your table setting.",
        size: "23cm",
        including: "6 square plates (23cm)",
        material: "Ceramic",
        care: ["Dishwasher-safe", "Microwave-safe"],
      },
      {
        id: 5,
        name: "Nature-Inspired Salad Bowl Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id5-main.avif?alt=media&token=c69f96de-86b3-489f-8c91-da63358a0e42",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id5-2.avif?alt=media&token=62909896-2bec-4c64-8f1f-cbe81c06c7e7",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id5-1.avif?alt=media&token=6cd1dbcf-1806-4454-bca2-79f001da67f2",
        ],
        price: 65,
        tag: ["3-piece salad bowl set", "organic design"],
        longdesc:
          "Bring the beauty of nature to your table with this set of organic-inspired salad bowls.",
        size: "varies",
        including:
          "1 large salad bowl (30cm diameter), 2 individual salad bowls (15cm diameter)",
        material: "Bamboo fiber",
        care: ["Handwash only", "Not suitable for microwave use"],
      },
      {
        id: 6,
        name: "Dan x Evenlynn Grey 16-Piece Dinnerware Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id6-main.jpeg?alt=media&token=bf19e10e-22fb-4568-b69c-67f5a4712222",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id6-1.jpeg?alt=media&token=9b817221-fcbf-49d5-a37b-bc15051b85bc",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id6-2.jpeg?alt=media&token=f91e8ea7-5b35-48c3-95e1-f39d26b2780f",
        ],
        price: 65,
        tag: ["Elegant grey dinnerware set", "perfect for any occasion"],
        longdesc:
          "Upgrade your dining experience with this elegant grey dinnerware set, suitable for any occasion.",
        size: "Standard",
        including:
          "16 pieces: 4 dinner plates, 4 salad plates, 4 bowls, 4 mugs",
        material: "Porcelain",
        care: ["Microwave-safe", "Dishwasher-safe"],
      },
      {
        id: 7,
        name: "Rustic Dinnerware Collection",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id7-main.jpeg?alt=media&token=269939d9-a394-4579-91e8-e937eaa8c8b3",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id7-1.jpeg?alt=media&token=3958729c-3357-4706-97b6-1ca471aeffca",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id7-2.jpeg?alt=media&token=15a68559-2892-46a2-9ac5-e40f834d2094",
        ],
        price: 95,
        tag: ["12-piece rustic dinnerware set", "handcrafted look"],
        longdesc:
          "Capture the charm of rustic dining with this handcrafted earthenware dinnerware collection.",
        size: "varies",
        including: "4 dinner plates, 4 salad plates, and 4 bowls",
        material: "Earthenware",
        care: ["Handwash only", "Not suitable for microwave use"],
      },
      {
        id: 8,
        name: "Minimalist Soup Bowls",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id8-main.jpeg?alt=media&token=70e170c3-2b1f-4052-a212-e692cbde4061",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id8-1.jpeg?alt=media&token=651151d7-2f54-4f75-ba28-f82cc6bd68ab",
        ],
        price: 30,
        tag: ["Set of 6 soup bowls", "minimalist design"],
        longdesc:
          "Enjoy your favorite soups in style with these sleek and minimalist porcelain soup bowls.",
        size: "500ml",
        including: "6 soup bowls (500ml)",
        material: "Porcelain",
        care: ["Dishwasher-safe", "Microwave-safe"],
      },
      {
        id: 9,
        name: "Vintage-Inspired Dessert Plates",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id9-main.jpeg?alt=media&token=3159ab38-0b62-4d8f-b300-295d5d8cfd7a",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id9-1.jpeg?alt=media&token=0311a15e-586f-463e-9758-6ad732c8910b",
        ],
        price: 35,
        tag: ["Set of 4 dessert plates", "vintage design"],
        longdesc:
          "Add a touch of vintage charm to your desserts with these delightful ceramic dessert plates.",
        size: "20cm",
        including: "4 dessert plates (20cm)",
        material: "Ceramic",
        care: ["Dishwasher-safe", "Microwave-safe"],
      },
    ],
  },
  {
    title: "Drinkware",
    items: [
      {
        id: 11,
        name: "Crystal Glass Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id11-main.avif?alt=media&token=c1b58b7b-b135-4e93-bd38-a794edce9693",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id11-1.avif?alt=media&token=164c0fd2-ab28-45e8-b3b4-97052bdadcd3",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id11-2.avif?alt=media&token=e1082b4c-1cdf-46e5-b306-dbd832187683",
        ],
        price: 59,
        tag: ["Set of 6 crystal glasses", "elegant design"],
        longdesc:
          "Indulge in luxury with this exquisite set of crystal glasses.",
        size: "200ml",
        including: "6 crystal glasses (200ml)",
        material: "Crystal",
        care: ["Handwash recommended"],
      },
      {
        id: 12,
        name: "Wine Glass Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id12-main.avif?alt=media&token=5bab455f-b9c2-45e6-ab29-9d8b03123f20",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id12-1.avif?alt=media&token=e2496ba4-d5ad-4166-9fa0-7213b4684d3f",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id12-2.avif?alt=media&token=bdf9776b-d4a9-4846-862a-a74e046dfa2d",
        ],
        price: 32,
        tag: ["Set of 4 wine glasses", "elevate your wine tasting experience"],
        longdesc:
          "Indulge in your favorite wines with this set of 4 wine glasses, designed to elevate your wine tasting experience.",
        size: "Standard",
        including: "4 wine glasses",
        material: "Crystal glass",
        care: ["Handwash recommended"],
      },
      {
        id: 13,
        name: "Ceramic Coffee Mug Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id13-main.jpeg?alt=media&token=d364e613-7b3d-43ba-8a7a-dbabaf947bb2",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id13-1.jpeg?alt=media&token=c0dafbb8-f149-4ed0-9fa0-e2d05257e8cd",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id13-2.jpeg?alt=media&token=2e481e7a-dfaa-4963-b162-0c681480120f",
        ],
        price: 42,
        tag: ["Set of 4 ceramic coffee mugs", "colorful patterns"],
        longdesc:
          "Enjoy your favorite hot beverages in style with this set of colorful ceramic coffee mugs.",
        size: "300ml",
        including: "4 ceramic coffee mugs (300ml)",
        material: "Ceramic",
        care: ["Dishwasher-safe", "Microwave-safe"],
      },
      {
        id: 14,
        name: "Champagne Coupe Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id14-main.avif?alt=media&token=0790cfa0-5ad9-4766-8094-853d09ead6b8",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id14-1.avif?alt=media&token=115e2444-e8ac-4e2f-8afa-37ec03066b63",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id14-2.avif?alt=media&token=a2420cd9-83ea-4a05-bf0a-f383991d346f",
        ],
        price: 42,
        tag: ["Set of 2 champagne coupes", "celebrate in style"],
        longdesc:
          "Toast to special moments with this set of 2 elegant champagne coupes, perfect for celebrating in style.",
        size: "Standard",
        including: "2 champagne coupes",
        material: "Crystal glass",
        care: ["Handwash recommended"],
      },
      {
        id: 15,
        name: "Japanese Style Wine Glass Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id15-main.avif?alt=media&token=d082e0da-72f6-4384-985c-81136a4d51e2",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id15-1.avif?alt=media&token=8d111deb-7646-4077-979b-b628189ad846",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id15-2.avif?alt=media&token=0c4800d8-8a0a-40c3-901c-f4afb194a10b",
        ],
        price: 28,
        tag: [
          "Set of 4 Japanese style wine glasses",
          "exquisite craftsmanship",
        ],
        longdesc:
          "Experience the art of wine drinking with this set of 4 Japanese style wine glasses, showcasing exquisite craftsmanship.",
        size: "Standard",
        including: "4 wine glasses",
        material: "Glass",
        care: ["Handwash recommended"],
      },
      {
        id: 16,
        name: "Whiskey Glass Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id16-main.avif?alt=media&token=d805d24d-d644-4803-9f02-bb2be1c8dc64",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id16-1.avif?alt=media&token=5d5c831b-a89f-4d2f-849b-78b0f3f59f1d",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id16-2.avif?alt=media&token=9f5b6b81-2e15-4f89-b4ed-99915751232b",
        ],
        price: 35,
        tag: [
          "Set of 2 whiskey glasses",
          "enhance your whiskey tasting experience",
        ],
        longdesc:
          "Savor the rich flavors of whiskey with this set of 2 whiskey glasses, designed to enhance your whiskey tasting experience.",
        size: "Standard",
        including: "2 whiskey glasses",
        material: "Crystal glass",
        care: ["Handwash recommended"],
      },
      {
        id: 17,
        name: "Goblet Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id17-main.avif?alt=media&token=9d2271fc-a432-43c6-bccd-1e17fc1963ec",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id17-1.avif?alt=media&token=66a9195b-6e62-4fb4-ac14-f1b8ab533d80",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id17-2.avif?alt=media&token=6f05d645-a1c3-4d06-ba53-e0e0317264ad",
        ],
        price: 48,
        tag: ["Set of 4 goblets", "elegant and versatile"],
        longdesc:
          "Add a touch of elegance to your table setting with this set of 4 goblets, perfect for various beverages.",
        size: "Standard",
        including: "4 goblets",
        material: "Glass",
        care: ["Handwash recommended"],
      },
      {
        id: 20,
        name: "Iced Tea Pitcher",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id20-main.jpeg?alt=media&token=7986808e-5c83-42b7-8c05-af800bfc6068",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id20-1.jpeg?alt=media&token=b5155be6-1041-4963-aa7e-729457fce4df",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/image-id20-2.jpeg?alt=media&token=8ad02625-ec5d-4fa9-8522-dd56aa7aa393",
        ],
        price: 28,
        tag: ["Glass iced tea pitcher", "removable infuser"],
        longdesc:
          "Serve refreshing iced tea with ease using this glass pitcher with a removable infuser.",
        size: "1.5L",
        including: "1 glass iced tea pitcher (1.5L)",
        material: "Glass",
        care: ["Handwash recommended"],
      },
    ],
  },
  {
    title: "Bakeware",
    items: [
      {
        id: 21,
        name: "Non-Stick Baking Pan Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id21-main.jpeg?alt=media&token=cec11ffe-ea32-4145-ac1f-6f32b9f1c862",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id21-1.jpeg?alt=media&token=05cac7ad-f85c-4373-84b8-1f8f3a9f9d61",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id21-2.jpeg?alt=media&token=8ec50068-a033-4a6c-a4eb-1e04794d55e9",
        ],
        price: 80,
        tag: ["Set of 3 non-stick baking pans", "even heat distribution"],
        longdesc:
          "Bake delicious treats with ease using this set of non-stick baking pans.",
        size: "Various",
        including: "3 baking pans (various sizes)",
        material: "Aluminum",
        care: ["Handwash recommended"],
      },
      {
        id: 22,
        name: "Silicone Baking Mat",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id22-main.jpeg?alt=media&token=66cd9a5e-d3bf-4ead-85b0-c3431046f26b",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id22-1.jpeg?alt=media&token=8f7c1b89-3100-48c9-9160-06ec5904e4c8",
        ],
        price: 12,
        tag: ["Non-stick silicone baking mat", "oven-safe"],
        longdesc:
          "Achieve perfect baking results every time with this non-stick silicone baking mat.",
        size: "Standard",
        including: "1 silicone baking mat (standard size)",
        material: "Silicone",
        care: ["Dishwasher-safe", "Oven-safe"],
      },
      {
        id: 23,
        name: "Ceramic Pie Dish",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id23-main.avif?alt=media&token=1104c262-c4e6-408c-a608-0ebf9556282f",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id23-1.avif?alt=media&token=ccfae1f6-4e8f-4cfe-bb7d-9d49c222fbd7",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id23-2.avif?alt=media&token=94c9012a-fe43-4bff-98e1-83f173deee03",
        ],
        price: 18,
        tag: ["Classic ceramic pie dish", "fluted edges"],
        longdesc:
          "Bake your favorite pies to perfection with this classic ceramic pie dish.",
        size: "9-inch",
        including: "1 ceramic pie dish (9-inch)",
        material: "Ceramic",
        care: ["Dishwasher-safe", "Microwave-safe", "Oven-safe"],
      },
      {
        id: 24,
        name: "Stainless Steel Mixing Bowls",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id24-main.jpeg?alt=media&token=b339d8e3-47a2-465a-8dae-edada31b2d0d",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id24-1.jpeg?alt=media&token=5430dd7a-903e-4809-8e0b-358b1c4f4b57",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id24-2.jpeg?alt=media&token=b122bfe9-1329-43b7-8929-1d4a98a34ea6",
        ],
        price: 28,
        tag: ["Set of 3 stainless steel mixing bowls", "stackable design"],
        longdesc:
          "Prepare ingredients with ease using this set of durable stainless steel mixing bowls.",
        size: "Various",
        including: "3 mixing bowls (various sizes)",
        material: "Stainless steel",
        care: ["Dishwasher-safe"],
      },
      {
        id: 25,
        name: "Rolling Pin",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id25-main.avif?alt=media&token=fc0c050e-3dd9-4ef6-8516-638db6e6bbb6",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id25-1.avif?alt=media&token=b530a099-70c9-4cec-913b-8a3fdd7cf4df",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id25-2.avif?alt=media&token=3076ab5c-210f-4877-abcc-4a6746f2e71a",
        ],
        price: 15,
        tag: ["Classic wooden rolling pin", "smooth rolling"],
        longdesc:
          "Achieve perfect dough thickness with this classic wooden rolling pin.",
        size: "Standard",
        including: "1 rolling pin (standard size)",
        material: "Wood",
        care: ["Handwash recommended"],
      },
      {
        id: 26,
        name: "Muffin Pan",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id26-main.avif?alt=media&token=589cb7ae-2dcb-4f1b-af5d-6a9b79ab608b",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id26-1.avif?alt=media&token=012d3285-f961-43bd-8283-b19da3988cf9",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id26-2.avif?alt=media&token=9a76131b-9497-4893-ab99-6e1b3ac5e162",
        ],
        price: 20,
        tag: ["Non-stick muffin pan", "12-cup capacity"],
        longdesc:
          "Bake delicious muffins and cupcakes with ease using this non-stick muffin pan.",
        size: "Standard",
        including: "1 muffin pan (12-cup capacity)",
        material: "Aluminum",
        care: ["Handwash recommended"],
      },
      {
        id: 27,
        name: "Cake Decorating Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id27-main.avif?alt=media&token=f18f8966-15e2-4011-a2b2-5168147fe4a3",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id27-1.avif?alt=media&token=9af12587-dfa1-4426-91d9-b76063414b3c",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id27-2.avif?alt=media&token=57bde865-c9f4-4d8d-a08b-112915ae9540",
        ],
        price: 30,
        tag: ["Complete cake decorating set", "variety of tips and tools"],
        longdesc:
          "Create stunning cakes with this comprehensive cake decorating set.",
        size: "Standard",
        including: "Assorted cake decorating tips and tools",
        material: "Plastic, metal",
        care: ["Handwash recommended"],
      },
      {
        id: 28,
        name: "Bundt Cake Pan",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id28-main.avif?alt=media&token=43c6659e-7d68-4d07-84f6-26f9527ded32",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id28-1.avif?alt=media&token=31545407-c98b-486d-92c8-bde695842672",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id28-2.avif?alt=media&token=96da933e-84c0-4851-b58b-d1db310221b9",
        ],
        price: 22,
        tag: ["Non-stick bundt cake pan", "distinctive fluted design"],
        longdesc:
          "Bake beautiful and delicious bundt cakes with this non-stick pan featuring a distinctive fluted design.",
        size: "Standard",
        including: "1 bundt cake pan",
        material: "Aluminum",
        care: ["Handwash recommended"],
      },
      {
        id: 29,
        name: "Loaf Pan",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id29-1.avif?alt=media&token=8085933c-a5ee-4f51-bccd-bb9fd547d3d1",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id29-main.avif?alt=media&token=c276921f-1f4b-4970-82c0-de4b62bf131f",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id29-2.avif?alt=media&token=7bcb8394-461b-4620-8f42-36433563cd29",
        ],
        price: 16,
        tag: ["Non-stick loaf pan", "ideal for bread and cakes"],
        longdesc:
          "Bake perfectly-shaped loaves of bread and cakes with this non-stick loaf pan.",
        size: "Standard",
        including: "1 loaf pan",
        material: "Aluminum",
        care: ["Handwash recommended"],
      },
      {
        id: 30,
        name: "Pastry Brush",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id30-main.avif?alt=media&token=68948a72-b475-49b4-8c35-52d9a2df49f4",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id30-1.avif?alt=media&token=3dc1b112-361c-49c3-829e-440fe89dfd30",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/bakeware%2Fimage-id30-2.avif?alt=media&token=e10680b5-6511-4863-a12f-dd70e8e4d3c2",
        ],
        price: 8,
        tag: ["Silicone pastry brush", "heat-resistant bristles"],
        longdesc:
          "Apply glazes, sauces, and more with precision using this versatile and heat-resistant silicone pastry brush.",
        size: "Standard",
        including: "1 pastry brush",
        material: "Silicone",
        care: ["Dishwasher-safe"],
      },
    ],
  },
  {
    title: "Cookware",
    items: [
      {
        id: 31,
        name: "Non-Stick Fry Pan Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id31-main.avif?alt=media&token=117712cb-1480-4fa7-ac94-c4b247b638fc",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id31-1.avif?alt=media&token=596ea7a7-7d9f-4db7-9f3a-cae47d508265",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id31-2.avif?alt=media&token=e98eb594-e239-4a9f-b6de-0a68aca6a4d6",
        ],
        price: 45,
        tag: ["Set of 2 non-stick fry pans", "even heat distribution"],
        longdesc:
          "Cook delicious meals with ease using this set of non-stick fry pans.",
        size: "Various",
        including: "2 fry pans (various sizes)",
        material: "Aluminum",
        care: ["Handwash recommended"],
      },
      {
        id: 32,
        name: "Stainless Steel Saucepan",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id32-1.avif?alt=media&token=85673cbf-cda8-4f5b-8f11-1ad970adcca7",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id32-main.avif?alt=media&token=4a6e552e-a228-4ed5-8006-35db0f07d443",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id32-2.avif?alt=media&token=876c81f7-89ad-406c-9eed-fb3683ee9769",
        ],
        price: 30,
        tag: ["Classic stainless steel saucepan", "even heat distribution"],
        longdesc:
          "Prepare sauces and soups with this classic stainless steel saucepan.",
        size: "1.5L",
        including: "1 stainless steel saucepan (1.5L)",
        material: "Stainless steel",
        care: ["Dishwasher-safe"],
      },
      {
        id: 33,
        name: "Cast Iron Dutch Oven",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id33-main.webp?alt=media&token=b2952932-11a4-411b-b1c2-58c206025d35",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id33-1.webp?alt=media&token=e4eb364b-acf0-4b96-a2d5-53695ab20e74",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id33-2.webp?alt=media&token=a618acbf-de3c-4eab-ad37-011ae9450d13",
        ],
        price: 75,
        tag: ["Heavy-duty cast iron Dutch oven", "excellent heat retention"],
        longdesc:
          "Slow cook flavorful meals with this durable cast iron Dutch oven.",
        size: "5.5L",
        including: "1 cast iron Dutch oven (5.5L)",
        material: "Cast iron",
        care: ["Handwash recommended"],
      },
      {
        id: 34,
        name: "Non-Stick Grill Pan",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id31-main.avif?alt=media&token=117712cb-1480-4fa7-ac94-c4b247b638fc",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id31-1.avif?alt=media&token=596ea7a7-7d9f-4db7-9f3a-cae47d508265",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id31-2.avif?alt=media&token=e98eb594-e239-4a9f-b6de-0a68aca6a4d6",
        ],
        price: 28,
        tag: ["Non-stick grill pan", "ridged surface"],
        longdesc:
          "Grill your favorite foods indoors with this non-stick grill pan featuring a ridged surface.",
        size: "Standard",
        including: "1 grill pan",
        material: "Aluminum",
        care: ["Handwash recommended"],
      },
      {
        id: 35,
        name: "Stainless Steel Stockpot",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id35-main.avif?alt=media&token=08bab0be-604e-4eef-bbaa-300407c47363",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id35-1.avif?alt=media&token=ab50398f-d6c8-46fc-97b6-65e83cc0b272",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id35-2.avif?alt=media&token=72274489-17d0-4fe5-963a-b57afbb9ddc5",
        ],
        price: 50,
        tag: ["Heavy-duty stainless steel stockpot", "large capacity"],
        longdesc:
          "Prepare large batches of soups, stews, and more with this heavy-duty stainless steel stockpot.",
        size: "8L",
        including: "1 stainless steel stockpot (8L)",
        material: "Stainless steel",
        care: ["Dishwasher-safe"],
      },
      {
        id: 36,
        name: "Copper Saucepan Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id36-1.webp?alt=media&token=29ae43f2-5bc6-43e4-9d1b-6bc54f05f465",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id35-main.avif?alt=media&token=08bab0be-604e-4eef-bbaa-300407c47363",
        ],
        price: 150,
        tag: ["Set of 3 copper saucepans", "superior heat conductivity"],
        longdesc:
          "Experience professional cooking with this set of copper saucepans known for their superior heat conductivity.",
        size: "Various",
        including: "3 copper saucepans (various sizes)",
        material: "Copper",
        care: ["Handwash recommended"],
      },
      {
        id: 37,
        name: "Non-Stick Wok",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id37-main.avif?alt=media&token=94af6e5b-f07c-4796-aa34-a43005cb23a7",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id37-1.avif?alt=media&token=0d70c9e3-d737-40d9-8a79-6e78bbccc6e7",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id37-2.avif?alt=media&token=c24e31a9-541d-4167-8070-82dd2287d84b",
        ],
        price: 38,
        tag: ["Non-stick wok", "stir-fry with ease"],
        longdesc:
          "Create delicious stir-fry dishes with this non-stick wok designed for easy cooking and cleaning.",
        size: "Standard",
        including: "1 wok",
        material: "Aluminum",
        care: ["Handwash recommended"],
      },
      {
        id: 38,
        name: "Enamel Coated Roasting Pan",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id38-main.webp?alt=media&token=b2e2125c-422a-4103-9c71-710cf1639a87",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id38-1.webp?alt=media&token=d6d8dbb9-00a8-41dd-a2fd-d139869d3737",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id38-2.webp?alt=media&token=f34abf39-8e67-4a8a-b441-83af5e6c4784",
        ],
        price: 55,
        tag: ["Durable enamel coated roasting pan", "large capacity"],
        longdesc:
          "Roast meats and vegetables to perfection with this durable enamel coated roasting pan.",
        size: "Standard",
        including: "1 roasting pan",
        material: "Steel, enamel",
        care: ["Handwash recommended"],
      },
      {
        id: 39,
        name: "Stainless Steel Skillet",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id39-main.webp?alt=media&token=8e698647-0cb8-4997-b3c3-3fbb7950d6d9",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id39-1.jpeg?alt=media&token=cf8ecc30-db4f-4e7a-b726-6e83dd951ec9",
        ],
        price: 32,
        tag: ["Versatile stainless steel skillet", "even heat distribution"],
        longdesc:
          "Cook a variety of dishes with this versatile stainless steel skillet known for its even heat distribution.",
        size: "10-inch",
        including: "1 stainless steel skillet (10-inch)",
        material: "Stainless steel",
        care: ["Dishwasher-safe"],
      },
      {
        id: 40,
        name: "Ceramic Coated Dutch Oven",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id40-main.webp?alt=media&token=0bfc0614-db8b-4f04-83e9-738c6bdd3943",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id40-1.webp?alt=media&token=53814b1c-398a-4dad-872b-75db12d633ea",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/cookware%2Fimage-id40-2.webp?alt=media&token=4f48b7ef-918a-4e30-b245-ff6ce8ea59eb",
        ],
        price: 65,
        tag: ["Ceramic coated Dutch oven", "excellent heat retention"],
        longdesc:
          "Slow cook delicious meals with this ceramic coated Dutch oven known for its excellent heat retention.",
        size: "6.5L",
        including: "1 ceramic coated Dutch oven (6.5L)",
        material: "Cast iron",
        care: ["Handwash recommended"],
      },
    ],
  },
  {
    title: "Serveware",
    items: [
      {
        id: 41,
        name: "Porcelain Serving Platter",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id41-main.jpg?alt=media&token=a8ce314a-19cd-4150-b87b-c0f098e18cab",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id41-1.jpeg?alt=media&token=11c8495d-ce4c-4b5c-bfc8-f09d689e04ac",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id41-2.jpeg?alt=media&token=6d22e520-44ff-4409-960b-23f0a662f5c3",
        ],
        price: 25,
        tag: ["Elegant porcelain serving platter", "perfect for entertaining"],
        longdesc:
          "Serve your culinary creations in style with this elegant porcelain serving platter.",
        size: "Standard",
        including: "1 serving platter",
        material: "Porcelain",
        care: ["Dishwasher-safe"],
      },
      {
        id: 42,
        name: "Round Wooden Tray",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id42-main.avif?alt=media&token=d7389d0c-776f-431d-bc8d-f7130a46592e",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id42-1.avif?alt=media&token=d84fa031-ba44-40fb-a4db-d961fa8a01bc",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id42-2.avif?alt=media&token=a6188156-e79d-4c1e-b909-f2cf98288814",
        ],
        price: 38,
        tag: ["Round wooden serving tray", "stylish and functional"],
        longdesc:
          "Serve your favorite snacks and drinks in style with this round wooden tray, combining elegance and functionality.",
        size: "Standard",
        including: "1 round wooden tray",
        material: "Wood",
        care: ["Wipe clean"],
      },
      {
        id: 43,
        name: "Glass Beverage Dispenser",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id43-main.webp?alt=media&token=454c1255-a3a0-4659-a665-ba4cee1c944f",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id43-1.jpeg?alt=media&token=12c3bc49-0cec-4a1a-b705-9c9cfd63bd5f",
        ],
        price: 40,
        tag: ["Large glass beverage dispenser", "perfect for parties"],
        longdesc:
          "Keep your guests refreshed with this large glass beverage dispenser ideal for parties and gatherings.",
        size: "5L",
        including: "1 glass beverage dispenser (5L)",
        material: "Glass, metal",
        care: ["Handwash recommended"],
      },
      {
        id: 44,
        name: "Cheese Board and Knife Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id44-main.jpeg?alt=media&token=0d5db525-82d2-4ac2-84c2-6df8444bdd5b",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id44-1.jpeg?alt=media&token=f195e534-54c8-46b3-a365-937f1580faa9",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id44-2.jpeg?alt=media&token=e4af013b-d2b5-4471-a411-41f14a470249",
        ],
        price: 80,
        tag: [
          "Complete cheese board and knife set",
          "perfect for cheese lovers",
        ],
        longdesc:
          "Serve and enjoy a variety of cheeses with this complete cheese board and knife set.",
        size: "Standard",
        including: "1 cheese board, 3 cheese knives",
        material: "Wood, stainless steel",
        care: ["Handwash recommended"],
      },
      {
        id: 45,
        name: "Ceramic Chip and Dip Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id45-main.jpeg?alt=media&token=ed1c21a7-290f-4341-ab8a-0f473aedfa02",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id45-1.jpeg?alt=media&token=2da56192-e157-43fb-be73-0d6c77051d68",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id45-2.jpeg?alt=media&token=50794b97-bba8-414d-bae0-3b975818bc97",
        ],
        price: 32,
        tag: ["Stylish ceramic chip and dip set", "perfect for parties"],
        longdesc:
          "Serve your favorite chips and dips in style with this stylish ceramic chip and dip set.",
        size: "Standard",
        including: "1 chip bowl, 1 dip bowl",
        material: "Ceramic",
        care: ["Dishwasher-safe"],
      },
      {
        id: 46,
        name: "Serving Tray with Handles",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id46-main.avif?alt=media&token=48a1aa5a-561d-4acb-9420-9c7a789815cd",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id46-1.avif?alt=media&token=de4b5b32-39bf-44ec-8b96-4cb0056a8cf6",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id46-2.avif?alt=media&token=00b59da3-970d-410d-8535-515d26692761",
        ],
        price: 22,
        tag: ["Versatile serving tray with handles", "easy to carry"],
        longdesc:
          "Serve and transport food and drinks easily with this versatile serving tray with handles.",
        size: "Standard",
        including: "1 serving tray",
        material: "Wood, metal",
        care: ["Handwash recommended"],
      },
      {
        id: 47,
        name: "Stainless Steel Salad Servers",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id47-main.avif?alt=media&token=1ec11789-65ce-4a93-9eef-b4ad34d99ec8",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id47-1.avif?alt=media&token=ae88a92d-3bba-40d1-ad96-ef633aeff456",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id47-2.avif?alt=media&token=82dd0591-d7e9-464f-9ebc-13343bf61284",
        ],
        price: 18,
        tag: ["Durable stainless steel salad servers", "easy to clean"],
        longdesc:
          "Toss and serve salads with these durable stainless steel salad servers.",
        size: "Standard",
        including: "1 pair of salad servers",
        material: "Stainless steel",
        care: ["Dishwasher-safe"],
      },
      {
        id: 48,
        name: "Marble Cheese Board",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id48-main.jpeg?alt=media&token=fdd42df3-bb59-4520-ae96-4266394741af",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id48-1.jpeg?alt=media&token=c37099a6-3306-4587-9d5f-9aad8b96b365",
        ],
        price: 30,
        tag: ["Elegant marble cheese board", "perfect for entertaining"],
        longdesc:
          "Display and serve your favorite cheeses on this elegant marble cheese board.",
        size: "Standard",
        including: "1 cheese board",
        material: "Marble",
        care: ["Handwash recommended"],
      },
      {
        id: 49,
        name: "Ceramic Serving Bowl",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id49-main.jpeg?alt=media&token=bf5f865a-68ec-4ab1-8066-edce92224f14",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id49-1.jpeg?alt=media&token=715dbb07-ddb4-4989-8082-fa6b223f39af",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id49-2.jpeg?alt=media&token=c7656e15-4690-4616-91a3-76a5cfefddbd",
        ],
        price: 20,
        tag: ["Versatile ceramic serving bowl", "great for salads and sides"],
        longdesc:
          "Serve salads, sides, and more with this versatile ceramic serving bowl.",
        size: "Standard",
        including: "1 serving bowl",
        material: "Ceramic",
        care: ["Dishwasher-safe"],
      },
      {
        id: 50,
        name: "Tiered Serving Stand",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id50-main.jpeg?alt=media&token=f90cdbc3-648f-4ccd-a5fb-ef5336b3f16a",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id50-1.jpeg?alt=media&token=e6860511-dc99-4cb5-8f49-d70490ace98f",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/serveware%2Fimage-id50-2.jpeg?alt=media&token=c543da7c-3d5f-4332-bbfa-d43785dbb576",
        ],
        price: 38,
        tag: [
          "Stylish tiered serving stand",
          "perfect for showcasing desserts",
        ],
        longdesc:
          "Create an impressive dessert display with this stylish tiered serving stand.",
        size: "Standard",
        including: "1 tiered serving stand",
        material: "Metal",
        care: ["Handwash recommended"],
      },
    ],
  },
  {
    title: "Storage",
    items: [
      {
        id: 51,
        name: "Glass Canister Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id51-main.jpeg?alt=media&token=4b887898-fc48-46bd-b2be-5a62c61c8392",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id51-1.jpeg?alt=media&token=99e2f276-5cef-4a66-8987-7a66d4c440d6",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id51-2.jpeg?alt=media&token=50f43962-e23c-4de9-951d-5facc52850fb",
        ],
        price: 42,
        tag: ["Set of 3 glass canisters", "ideal for storing dry ingredients"],
        longdesc:
          "Keep your kitchen essentials fresh and organized with this set of 3 glass canisters.",
        size: "Various",
        including: "3 glass canisters (various sizes)",
        material: "Glass, metal",
        care: ["Handwash recommended"],
      },
      {
        id: 52,
        name: "Stackable Food Storage Containers",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id52-main.avif?alt=media&token=c630c1b7-a002-43f7-942a-b19ef1442453",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id52-1.avif?alt=media&token=7a72e9e0-f789-4806-a29f-4258c28ca52f",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id52-2.avif?alt=media&token=5c3ba814-a400-4323-ae1b-ce48de0c895f",
        ],
        price: 45,
        tag: ["Set of 5 stackable food containers", "maximize storage space"],
        longdesc:
          "Organize and store your food with these stackable food storage containers.",
        size: "Various",
        including: "5 food containers (various sizes)",
        material: "Plastic",
        care: ["Dishwasher-safe"],
      },
      {
        id: 53,
        name: "Spice Jar Set",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id53-main.avif?alt=media&token=b51fffdb-ce33-4fcf-b17c-666d00fdecf6",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id53-1.avif?alt=media&token=98d757b1-f663-4eee-bf31-c2a74f14abe5",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id53-2.avif?alt=media&token=d0e621c7-6dc4-4f48-8963-cc18b1bd876c",
        ],
        price: 40,
        tag: ["Set of 12 spice jars", "keep your spices organized"],
        longdesc:
          "Store and label your favorite spices with this set of 12 spice jars.",
        size: "Standard",
        including: "12 spice jars, 1 rack",
        material: "Glass, plastic",
        care: ["Handwash recommended"],
      },
      {
        id: 54,
        name: "Jar with Lid",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id54-main.avif?alt=media&token=f1b72b47-1b3e-4a71-8fb4-e147747d8c34",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id54-1.avif?alt=media&token=8f2414e2-7762-413e-a57e-1b60414df566",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id54-2.avif?alt=media&token=5a07737a-fa6a-41e0-b15d-91236e424b9f",
        ],
        price: 12,
        tag: ["Versatile jar with lid", "ideal for storage"],
        longdesc:
          "Keep your food and ingredients fresh with this versatile jar with lid, perfect for all your storage needs.",
        size: "Standard",
        including: "1 jar with lid",
        material: "Glass, plastic",
        care: ["Handwash recommended"],
      },
      {
        id: 55,
        name: "Bamboo Bread Box",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id55-main.webp?alt=media&token=c8ee24dd-8114-493e-840f-5357adbdc55b",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id55-1.jpeg?alt=media&token=3b9561a7-7f9b-462f-b060-4a55d26acaaf",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id55-2.jpeg?alt=media&token=cf9cc9e5-dc42-42c5-98e4-9ec82fd2ea61",
        ],
        price: 48,
        tag: ["Stylish bamboo bread box", "keep your bread fresh"],
        longdesc:
          "Store your bread and baked goods in this stylish bamboo bread box that helps maintain freshness.",
        size: "Standard",
        including: "1 bread box",
        material: "Bamboo",
        care: ["Handwash recommended"],
      },
      {
        id: 56,
        name: "Glass Meal Prep Containers",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id56-1.avif?alt=media&token=5aba18d4-6f16-4b81-853f-a14019d3bf09",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id56-main.avif?alt=media&token=779105b1-2690-453f-9cbb-7787ad4b2b2a",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id56-2.webp?alt=media&token=b19e230f-0fde-4f62-9ed5-295b51b069c6",
        ],
        price: 35,
        tag: [
          "Set of 5 glass meal prep containers",
          "perfect for portion control",
        ],
        longdesc:
          "Prepare and store your meals with these glass meal prep containers ideal for portion control.",
        size: "Various",
        including: "5 meal prep containers (various sizes)",
        material: "Glass, plastic",
        care: ["Dishwasher-safe"],
      },
      {
        id: 57,
        name: "Utensil Holder",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id57-main.jpeg?alt=media&token=8aa691c2-fb9b-4b1b-bad3-130c7d6d86e5",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id57-1.jpeg?alt=media&token=31f12ed5-3518-4d1e-8a91-3be91f183969",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id57-2.jpeg?alt=media&token=135e2bef-1742-44c9-950a-0889d56b6f26",
        ],
        price: 22,
        tag: ["Stylish utensil holder", "keep your kitchen tools organized"],
        longdesc:
          "Keep your kitchen tools organized and within reach with this stylish utensil holder.",
        size: "Standard",
        including: "1 utensil holder",
        material: "Ceramic",
        care: ["Handwash recommended"],
      },
      {
        id: 58,
        name: "Wall-Mounted Wine Rack",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id58-1.webp?alt=media&token=f43cfe2f-1020-4197-8e8c-769b1d59ff46",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id58-main.webp?alt=media&token=7be99c6b-f9c1-4fde-8037-1a7d4ce4925c",
        ],
        price: 200,
        tag: [
          "Space-saving wall-mounted wine rack",
          "display and store your favorite wines",
        ],
        longdesc:
          "Display and store your favorite wines in this space-saving wall-mounted wine rack.",
        size: "Standard",
        including: "1 wine rack",
        material: "Metal",
        care: ["Wipe clean"],
      },
      {
        id: 59,
        name: "Bottle Jar with Lid",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id59-main.avif?alt=media&token=136455e9-eab6-4e82-b43d-86d3eac6c516",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id59-1.avif?alt=media&token=f7aa9bd1-8265-44a9-9b0a-0ee4ee8d8f0a",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id59-2.avif?alt=media&token=776fc809-3c6d-435c-8a22-afc2156681b7",
        ],
        price: 32,
        tag: ["Set of 6 bottle jars with lids", "versatile storage solution"],
        longdesc:
          "Store and organize various items with this set of 6 bottle jars with lids, providing a versatile storage solution for your needs.",
        size: "Standard",
        including: "6 bottle jars with lids",
        material: "Glass, metal",
        care: ["Handwash recommended"],
      },
      {
        id: 60,
        name: "Drawer Organizer",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id60-1.webp?alt=media&token=69e56744-6c56-4937-bef3-a68a4e586d4c",
        otherImage: [
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id60-main.webp?alt=media&token=6588f838-feb4-4232-bd61-66c35fb77f52",
          "https://firebasestorage.googleapis.com/v0/b/online-shop-db-b29ff.appspot.com/o/storage%2Fimage-id60-2.webp?alt=media&token=40b499c3-d263-48de-bcbd-92171e67f7e8",
        ],
        price: 16,
        tag: ["Versatile drawer organizer", "keep your drawers tidy"],
        longdesc:
          "Organize and declutter your drawers with this versatile drawer organizer.",
        size: "Standard",
        including: "1 drawer organizer",
        material: "Plastic",
        care: ["Wipe clean"],
      },
    ],
  },
];

export default SHOP_DATA;

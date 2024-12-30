const barber = {
    number: "212-675-6736",
    name: "BARBER SHOP",
    email: "villagecuts@gmail.com",
    location: ["179 West 4th Street", "New York, New York"],
    working_hours: [
      { name: "Mon-Fridy", hours: "11:30 AM – 7:30 PM" },
      { name: "Saturday", hours: "10:00 AM – 7:30 PM" },
      { name: "Sunday", hours: "10:00 AM – 6:00 PM" },
    ],
    prices: [
      {
        name: "Hot Towel Razor Shave",
        price: "$50",
        description:
          "Enjoy a classic hot towel razor shave, featuring a soothing pre-shave treatment, straight-edge razor, and a refreshing cold towel finish.",
        image_path: "",
      },
      {
        name: "Haircut And Beard Trim",
        price: "$50",
        description:
          "We trim your beard using clippers and scissors to give it a natural look. Your beard will be outlined with the straight-edge razor.",
      },
      {
        name: "Beard Trim",
        price: "$20",
        description:
          "We provide precise and stylish trimming service to maintain and shape your beard.",
      },
      {
        name: "Tailored Haircut",
        price: "$35 - $40",
        description:
          "Get a haircut tailored to your style, including a consultation, neck shave, scalp massage, and styling.",
      },
      {
        name: "Shape-Up",
        price: "$20",
        description:
          "This grooming service focuses on tidying up unwanted fuzz, targeting the areas around your neck and ears for a neat and clean appearance.",
      },
      {
        name: "The Works",
        price: "$90",
        description:
          "A complete grooming experience with tailored haircut, energizing shampoo, precision shave, styling, and a relaxing scalp massage for stress relief.",
      },
      {
        name: "Buddy Cut",
        price: "$25",
        description:
          "A haircut service for ages 12 and under, featuring personal consultation, tailored cuts, and staff assistance to ensure each young Buddy is comfortable.",
      },
      {
        name: "Deep Conditioning Treatment",
        price: "$25",
        description:
          "This service includes a deep conditioning treatment to nourish and revitalize hair, providing hydration and improved hair texture.",
      },
    ],
    barbers: [
      {
        name: "DOMINICK",
        description:
          "Dominick is a seasoned professional with over 30 years of experience. His warm and friendly demeanor makes him a favorite among the local community.",
          img_path: "/barbers/1.jfif",
          socials: [
              { name: "facebook", url: "google.com" },
              { name: "instagram", url: "google.com" },
              { name: "email", url: "google.com" },
          ]
      },
      {
        name: "GREG",
        description:
          "Greg, with over 20 years in the industry brings a wealth of expertise, skillful hands, and a warm personality. He takes the time to understand each client’s preference and personal style.",
          img_path: "/barbers/2.jfif",
          socials: [
              { name: "facebook", url: "google.com" },
              { name: "instagram", url: "google.com" },
              { name: "email", url: "google.com" },
          ]
  
      },
      {
        name: "AJ",
        description:
          "Aj is a skilled and dedicated professional who has been mastering his skills for an impressive 16 years while staying current with the latest trends and techniques.",
          img_path: "/barbers/3.jfif",
          socials: [
              { name: "facebook", url: "google.com" },
              { name: "instagram", url: "google.com" },
              { name: "email", url: "google.com" },
          ]
      
      },
    ],
    status: [
      { text: "Years of Exprience", number: 80 },
      { text: "Awards Winning Barber", number: 15 },
      { text: "Beards Scultping Daily", number: 20 },
      { text: "Clients Every Month", number: 450 },
    ],
    reviews: [
      { name: "Jhon Doe 1", description: "Great experience here! They did a fantastic job, will be returning soon!", date: "2024-01-04", photo: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=" },
      { name: "Jhon Doe 2", description: "Great experience here! They did a fantastic job, will be returning soon!", date: "2024-01-04" },
      { name: "Jhon Doe 3", description: "Great experience here! They did a fantastic job, will be returning soon!", date: "2024-01-04" },
    ],
    socials: [
      { name: "facebook", url: "google.com" },
      { name: "instagram", url: "google.com" },
      { name: "email", url: "google.com" },
  ],
    booking_url: "google.com",
    clients_number: 430,
    about:
      "Village Cuts opened in 2006 and is located in the heart of Greenwich Village.We are proud to offer our clients over 80 years of experience. During your visit, you can enjoy the relaxed environment, take advantage of the free wi-fi while enjoying a free drink and magazines. Village Cuts guarantees you will have the highest quality haircut possible. Customizing every aspect of your experience tailored to your individual needs.",
  };
  export default barber;
  
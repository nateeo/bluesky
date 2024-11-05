import Airtable from "airtable";

export const KEY =
  "patIwQeK1tPNudJ86.0d166b3254e9296950ffd54c0cd7ecca8c8a1b17d6f5d0bf43d52b7a0f4a02fc";

Airtable.configure({ apiKey: KEY });

export const getStuff = async () => {
  const base = Airtable.base("appkDvccjaYcfTu37");
  const records = await base("tblVomBLYsG01oR2D").select({}).all();
  return records
    .map((record) => {
      if (!record.fields) return undefined;
      const description = record.fields["[SYDNEY] Description - 2024"];
      const unit = record.fields["Unit"];
      const cost = record.fields["Cost"];
      const supplier = record.fields["Supplier"];
      const note = record.fields["Note"];

      if (unit && cost && description) {
        return { description, unit, cost, supplier, note };
      }

      return undefined;
    })
    .filter((item) => item != null);
};

export const data = [
  {
    description: " B&S Sydney City Tour (Half day)",
    unit: "Session",
    cost: 433.32,
    supplier: "BSE",
  },
  {
    description: "Room USYD Chapel half day 60-100 ",
    unit: "hire",
    cost: 550,
    supplier: "USYD",
  },
  {
    description: "Excursion NGO Reverse Garbage Recycling Centre ",
    unit: "person",
    cost: 80,
    supplier: "DE",
  },
  {
    description: "Meal RMC Lunch",
    unit: "meal",
    cost: 15,
    supplier: "MQ",
    note: "updated",
  },
  {
    description: "Room USYD Main library full day 30-35",
    unit: "hire",
    cost: 450,
    supplier: "USYD",
  },
  {
    description: "Room DLC Seminar room - full day",
    unit: "6H",
    cost: 495,
    supplier: "MQ",
  },
  {
    description: "Room DLC Saville - full day",
    unit: "6H",
    cost: 385,
    supplier: "MQ",
    note: "https://www.standrewscollege.edu.au/wp-content/uploads/2022/04/St-Andrews-Brochure_Conferences.pdf",
  },
  {
    description: "Room USYD Reading / Erickson room full day 35-60",
    unit: "hire",
    cost: 480,
    supplier: "USYD",
  },
  {
    description:
      "Accommodation Collaroy Center (Twin / Triple Share) - meals included",
    unit: "night",
    cost: 125,
    supplier: "Collaroy Centre",
  },
  {
    description: "Room USYD Reading / Erickson room half day 35-60",
    unit: "3H",
    cost: 224,
    supplier: "WSU",
  },
  {
    description: " Activity Environmental Workshop (Add Room)",
    unit: "Session",
    cost: 165.32,
    supplier: "BSE",
  },
  {
    description:
      "Labour BSE Camp Manager cum Teacher (for group of 10-15 students)",
    unit: "daily ",
    cost: 300,
  },
  {
    description: "Excursion Starline Alpaca",
    unit: "person",
    cost: 25,
  },
  {
    description:
      "Accommodation Campus Robert Menzies Colleges (ensuite, 3 meals included)",
    unit: "night",
    cost: 115,
    supplier: "RMC",
  },
  {
    description: "Transport WSU Campbelltown - airport (departure)",
    unit: "hire",
    cost: 1460,
    supplier: "Kinetic",
  },
  {
    description: "Transport WSU Campbeltown - Castle Hill HS (return) 39 pax",
    unit: "hire",
    cost: 1490,
    supplier: "Kinetic",
  },
  {
    description: "Room DLC Saville - half day",
    unit: "3H",
    cost: 255,
    supplier: "MQ",
  },
  {
    description: "Transport WSU Penrith - Castle Hill HS (return) 39 pax",
    unit: "hire",
    cost: 1510,
    supplier: "Kinetic",
  },
  {
    description:
      " (Full Day) AM ARRIVAL PACKAGE - Airport - Orientation - Campus Tour (Add Room)",
    unit: "Session",
    cost: 812.475,
    supplier: "BSE",
  },
  {
    description:
      "Excurion Luna Park (child and adult same rate) - 2 rides ($8 per ride)",
    unit: "person ",
    cost: 16,
  },
  {
    description:
      "Meal WSU per day - Cash for meals (lunch-dinner $15, breakfast $10)",
    unit: "person",
    cost: 40,
    supplier: "BS",
  },
  {
    description: "Excursion Reverse Garbage (10 - 25 pax max)",
    unit: "person",
    cost: 27,
  },
  {
    description: "Labour Aboriginal Authentic",
    unit: "session",
    cost: 600,
    supplier: "BSE",
  },
  {
    description: " B&S Australian Museum",
    unit: "Session",
    cost: 433.32,
    supplier: "BSE",
  },
  {
    description: "Transport Airport - WSU Campbelltown (arrival)",
    unit: "hire",
    cost: 540,
    supplier: "Kinetic",
  },
  {
    description: " Lesson Public Speaking & Leadership Lesson 1 (Add Room)",
    unit: "class",
    cost: 291.655,
    supplier: "BSE",
  },
  {
    description: "Transport Macquarie to Bondi (return) 57 pax",
    unit: "hire",
    cost: 1170,
    supplier: "Kinetic",
  },
  {
    description: " B&S Shopping at Westfield",
    unit: "Session",
    cost: 433.32,
    supplier: "BSE",
  },
  {
    description: " B&S Taronga Zoo (Half Day - add private coach if needed)",
    unit: "Session",
    cost: 1158.32,
    supplier: "BSE",
  },
  {
    description: "Room DLC Dining- half day",
    unit: "3H",
    cost: 300,
    supplier: "MQ",
  },
  {
    description: "Transport WSU Penrith- Bondi (return) 39 pax",
    unit: "hire",
    cost: 390,
    supplier: "USYD",
  },
  {
    description: "Labour Sports Facilitator",
    unit: "session",
    cost: 200,
  },
  {
    description: "Meal WSU - One Pot Catering - breakfast only ",
    unit: "meal",
    cost: 16,
  },
  {
    description: " Activity Aboriginal Art & Culture Workshop (Add Room)",
    unit: "Session",
    cost: 733.3199999999999,
    supplier: "BSE",
  },
  {
    description:
      "Excursion 1 Hour Horse Riding Lesson (Papilion Riding Center) - weekend",
    unit: "person",
    cost: 135,
  },
  {
    description: "Room RMC S Conference half day hire",
    unit: "4H",
    cost: 300,
    supplier: "MQ",
  },
  {
    description:
      "Room Metro Hotel Marlowe Sydney - Conference Room (30 Pax, 4 hours,w/ Video and Sounds)",
    unit: "4H",
    cost: 800,
    supplier: "Metro Hotel Marlowe",
  },
  {
    description: "Accommodation Campus Western Sydney (Meal N/A)",
    unit: "night",
    cost: 58,
    supplier: "WSU",
    note: "5 beds block = $290 (latest quote for Feb Tet Group)",
  },
  {
    description: "Accommodation Homestay Weekly Fee (2Stay) - single room ",
    unit: "week",
    cost: 475,
  },
  {
    description: "Excursion Environtment (Plastic Ocean)",
    unit: "person",
    cost: 17,
  },
  {
    description: "Excursion Collaroy Center activities ",
    unit: "session ",
    cost: 350,
  },
  {
    description: "Labour Guest Speaker (PhD)",
    unit: "1.5H",
    cost: 150,
    supplier: "BSE",
  },
  {
    description: "Excursion Farm Visit - Calmsley Hill (Adult)",
    unit: "person",
    cost: 83,
  },
  {
    description: "Meal BBQ",
    unit: "meal ",
    cost: 35,
  },
  {
    description: "Excursion Sydney Aquarium",
    unit: "person",
    cost: 24,
    supplier: "Sydney Attraction",
  },
  {
    description:
      " B&S Leaders of the future: Team-building game at the beach  (add private coach as needed)",
    unit: "Session",
    cost: 633.3199999999999,
    supplier: "BSE",
  },
  {
    description: "Transport WSU Penrith - Mitchell HS (return) 39 pax",
    unit: "hire",
    cost: 1510,
    supplier: "Kinetic",
  },
  {
    description:
      "Excursion Full Day Fruit Picking (transport included) - ADULT",
    unit: "hour",
    cost: 160,
  },
  {
    description: "Meal WSU - One Pot Catering lunch or dinner (1 meal)",
    unit: "meal",
    cost: 26,
  },
  {
    description: "Labour Guest Speaker (Professor)",
    unit: "1.5H",
    cost: 250,
    supplier: "BSE",
  },
  {
    description: "Room USYD Main library half day 30-35",
    unit: "hire",
    cost: 600,
    supplier: "USYD",
  },
  {
    description: "Excursion Farm Visit - Calmsley Hill (Child less than 17)",
    unit: "person ",
    cost: 78,
    note: "https://oziatours.com.au/tour/apple-persimmon-picking-with-apple-cider-tasting/",
  },
  {
    description: " B&S Powerhouse Science Museum",
    unit: "Session",
    cost: 865.3199999999999,
    supplier: "BSE",
  },
  {
    description: "Transport WSU Campbeltown- Mitchell HS (return) 39 pax",
    unit: "hire",
    cost: 1475,
    supplier: "Kinetic",
  },
  {
    description: " B&S Taronga Zoo (Full Day - add private coach if needed)",
    unit: "Session",
    cost: 1537.475,
    supplier: "BSE",
  },
  {
    description: "Meal DLC Lunch",
    unit: "meal",
    cost: 11,
    supplier: "MQ",
  },
  {
    description: "Transport Opal Weekly Cap (adult)",
    unit: "week",
    cost: 25,
    supplier: "Transport NSW",
  },
  {
    description: "Excurion Port Stephene Sand Boarding (over 14)",
    unit: "person ",
    cost: 35,
  },
  {
    description: "Transport Macquarie Uni - Bondi (return) 39 pax",
    unit: "hire",
    cost: 1085,
    supplier: "Kinetic",
  },
  {
    description: "Transport Macquarie Uni - Mitchell HS (return) 39 pax",
    unit: "hire",
    cost: 1095,
    supplier: "Kinetic",
  },
  {
    description: "Accommodation Meriton Top Ryde (MQ) - twin room per pax",
    unit: "night",
    cost: 94.5,
    supplier: "Meriton",
    note: "added 5% increase for 2025",
  },
  {
    description: "Excursion Horse Riding - East Ride (Shared)",
    unit: "person",
    cost: 17.5,
    supplier: "NGO",
    note: "$350 per workshop of 25 students max",
  },
  {
    description: "Transport Opal Weekly Cap (child)",
    unit: "hire",
    cost: 1000,
    supplier: "Kinetic",
  },
  {
    description: "Meal WSU Catering delivery fee",
    unit: "day",
    cost: 25,
    supplier: "WSU",
    note: "WSU does not offer meal",
  },
  {
    description: "Transport WSU Bankstown- Bondi (return) 39 pax",
    unit: "hire",
    cost: 985,
    supplier: "Kinetic",
  },
  {
    description:
      "Excursion 1 Hour Horse Riding Lesson (Papilion Riding Center) - weekday",
    unit: "person",
    cost: 125,
  },
  {
    description: "Excursion Blue Mountains Full Day Tour",
    unit: "person ",
    cost: 30,
  },
  {
    description: " Activity Local Immersion School Programme (Half Day)",
    unit: "Session",
    cost: 613.3199999999999,
    supplier: "BSE",
  },
  {
    description:
      " Lesson Orientation + Public Speaking & Leadership Lesson 1 (Add Room)",
    unit: "Lesson",
    cost: 554.155,
    supplier: "BSE",
  },
  {
    description: "Transport WSU Bankstown - Castle Hill HS (return) 39 pax",
    unit: "hire",
    cost: 985,
    supplier: "Kinetic",
  },
  {
    description: "Room DLC Reid - half day",
    unit: "3H",
    cost: 180,
    supplier: "MQ",
  },
  {
    description: "Excursion Taronga Zoo",
    unit: "person",
    cost: 25,
    supplier: "Sydney Attraction",
  },
  {
    description: "Meal WSU - One Pot Catering (3 hot meals delivery)",
    unit: "meal",
    cost: 68,
    supplier: "WSU",
    note: "One pot catering $26/lunch/dinner, $16(breakfast)",
  },
  {
    description: "Excursion Royal Randwick Racecourse",
    unit: "person",
    cost: 15,
  },
  {
    description:
      "Excursion Australia National Maritime Museum (4-15 years old)",
    unit: "person",
    cost: 112,
    supplier: "Viator",
    note: "https://www.viator.com/tours/Sydney/Blue-Mountains-Day-Trip-The-backpackers-option/d357-41231P1",
  },
  {
    description: "Room RMC Trinity Chapel",
    unit: "4H",
    cost: 400,
    supplier: "MQ",
  },
  {
    description: "Excursion NSW DE 5 days or more additional half days",
    unit: "person",
    cost: 80,
    supplier: "DE",
    note: "Mai updated DE 2024 price",
  },
  {
    description: "Excursion NSW DE Full day additional full day",
    unit: "session",
    cost: 350,
  },
  {
    description: "Labour BSE Camp Manager",
    unit: "H",
    cost: 33.33,
    supplier: "BSE",
  },
  {
    description:
      "Accommodation hotel  (Metro Hotel Marlow Sydney Central) - twin room  per pax",
    unit: "night",
    cost: 125,
    note: "around $250 per twin room",
  },
  {
    description: "Room USYD (Venue Hire, Seminar Room) - half day",
    unit: "hire",
    cost: 390,
    supplier: "USYD",
  },
  {
    description: "Labour Aboriginal Generic",
    unit: "session",
    cost: 150,
    supplier: "BSE",
  },
  {
    description: "Transport Macquarie campus  - airport (departure)",
    unit: "hire",
    cost: 1300,
    supplier: "Kinetic",
  },
  {
    description: "Room Western Sydney Uni (half day, Welcome/Finale)",
    unit: "hire",
    cost: 800,
    supplier: "Kinetic",
  },
  {
    description:
      "Excursion Full Day Fruit Picking (transport included) - CHILD ",
    unit: "person",
    cost: 32,
    supplier: "Koala Park",
  },
  {
    description: "Meal lunch or dinner - restaurant ",
    unit: "meal ",
    cost: 30,
  },
  {
    description: "Room DLC Reid - full day",
    unit: "6H",
    cost: 315,
    supplier: "MQ",
  },
  {
    description: "Admin general",
    unit: "each",
    cost: 20,
    supplier: "BSE",
  },
  {
    description:
      "Excursion ANSTO (The Australian Nuclear Science & Technology Organisation)",
    unit: "person",
    cost: 15,
    supplier: "ANSTO",
  },
  {
    description: "Labour BSE Counseller",
    unit: "H",
    cost: 25,
    supplier: "BSE",
  },
  {
    description: "Excursion Australia National Maritime Museum (Adult)",
    unit: "person",
    cost: 189,
    supplier: "Viator",
    note: "https://www.viator.com/tours/Canberra/Canberra-Explore-our-unique-capital-city/d819-8746P5",
  },
  {
    description: "Room DLC Seminar room - half day",
    unit: "3H",
    cost: 315,
    supplier: "MQ",
  },
  {
    description: "Transport WSU Bankstown - Lindfield HS (return) 39 pax",
    unit: "hire",
    cost: 1060,
    supplier: "Kinetic",
  },
  {
    description:
      "Accommodation Campus Uni of Sydney (Double Room with ensuit bathroom, meals included)",
    unit: "person",
    cost: 155,
    supplier: "Usyd",
    note: "room $90, 3 meals bundle price $65",
  },
  {
    description: "Transport Macquarie Uni - Castle Hill HS (return) 39 pax",
    unit: "hire",
    cost: 1025,
    supplier: "Kinetic",
  },
  {
    description: "Meal hotel breakfast (Metro Hotel Marlow Sydney Central) ",
    unit: "person ",
    cost: 18,
  },
  {
    description: " B&S University of Sydney Visit",
    unit: "Session",
    cost: 433.32,
    supplier: "BSE",
  },
  {
    description: "Excursion  Horse Riding - Glen Worth Valley",
    unit: "person",
    cost: 127,
  },
  {
    description: "Room USYD Chapel full day 60-100 ",
    unit: "hire",
    cost: 500,
    supplier: "USYD",
  },
  {
    description: "Transport Macquarie Uni - Lindfield HS (return) 39 pax",
    unit: "hire",
    cost: 1150,
    supplier: "Kinetic",
  },
  {
    description: "Accommodation Meriton Top Ryde (MQ) - single room per pax",
    unit: "night",
    cost: 189,
    supplier: "Meriton",
    note: "added 5% increase for 2025",
  },
  {
    description: "Accommodation Campus Dunmore Lang Colleges (meals included)",
    unit: "night",
    cost: 113.3,
    supplier: "DLC",
    note: "assuming 3% incrrease from $110 in 2023. ",
  },
  {
    description: "Accommodation Homestay matching fee (2Stay)",
    unit: "person",
    cost: 380,
    supplier: "Homestay NW",
  },
  {
    description:
      "Accommodation Campus Uni of Sydney (Double Room with shared bathroom, meals included)",
    unit: "person",
    cost: 135,
    supplier: "Usyd",
    note: "room $70, 3 meals bundle price $65",
  },
  {
    description: "Excursion Powerhouse museum (16yr and under FREE)",
    unit: "person",
    cost: 18,
  },
  {
    description: "Transport WSU Penrith - Lindfield HS (return) 39 pax",
    unit: "hire",
    cost: 1430,
    supplier: "Kinetic",
  },
  {
    description: " Activity Local Immersion School Programme (Full Day)",
    unit: "Session",
    cost: 249.975,
    supplier: "BSE",
  },
  {
    description: "Transport WSU Campbelltown- Bondi (return) 39 pax",
    unit: "hire",
    cost: 1325,
    supplier: "Kinetic",
  },
  {
    description: "Meal hotel stay - cash for lucnh",
    unit: "person",
    cost: 20,
  },
  {
    description: "Excursion NSW DE 5 days",
    unit: "person",
    cost: 125,
    supplier: "DE",
  },
  {
    description: " Lesson Public Speaking & Leadership Lesson 2~ (Add Room)",
    unit: "class",
    cost: 266.655,
    supplier: "BSE",
  },
  {
    description:
      "Accommodation Collaroy Center (6-8 bed sharing) - meals included",
    unit: "night",
    cost: 98,
    supplier: "Collaroy Centre",
  },
  {
    description: " B&S University Campus Amazing Race Led by Local Students",
    unit: "Session",
    cost: 433.32,
    supplier: "BSE",
  },
  {
    description: "Labour BSE Teacher",
    unit: "H",
    cost: 50,
    supplier: "BSE",
  },
  {
    description: "Excursion Environmental Workshop",
    unit: "person",
    cost: 32,
  },
  {
    description: " B&S Sydney City Tour (Full day)",
    unit: "Session",
    cost: 812.475,
    supplier: "BSE",
  },
  {
    description: "Excurion Port Stephene Sand Boarding (child under 14)",
    unit: "person ",
    cost: 30,
  },
  {
    description: "Transport Macquarie Uni - Taronga Zoo (return)",
    unit: "week",
    cost: 50,
    supplier: "Transport NSW",
  },
  {
    description: "Excursion Canberra Day Trip from Sydney",
    unit: "session",
    cost: 300,
  },
  {
    description:
      "Accommodation Campus Robert Menzies Colleges (shared toilet, 3 meals included)",
    unit: "night",
    cost: 100,
    supplier: "RMC",
    note: "RMC verbally said they would increase to around $100/night",
  },
  {
    description: "Admin Prizes and Printing Cost",
    unit: "person",
    cost: 10,
  },
  {
    description: "Excursion NSW DE 5 days or more additional full days",
    unit: "person",
    cost: 110,
    supplier: "DE",
    note: "Mai updated DE 2024 price",
  },
  {
    description: " Activity Evening Activity (2H)",
    unit: "session",
    cost: 216.66,
    supplier: "BSE",
  },
  {
    description: "Meal Cost General",
    unit: "meal",
    cost: 12,
    supplier: "MQ",
  },
  {
    description:
      " Lesson Public Speaking & Leadership Lesson Finale (Add Room)",
    unit: "class",
    cost: 633.3199999999999,
    supplier: "BSE",
  },
  {
    description: "Excursion Koala Park Sanctuary (14 and UP)",
    unit: "person",
    cost: 490,
    supplier: "DE",
  },
  {
    description: " B&S Campus Sports",
    unit: "Session",
    cost: 433.32,
    supplier: "BSE",
  },
  {
    description: "Room RMC Dining- half day",
    unit: "3H",
    cost: 280,
    supplier: "MQ",
  },
  {
    description: "Excursion Madame Taussauds",
    unit: "person",
    cost: 110,
    supplier: "DE",
    note: "Mai updated DE 2024 price",
  },
  {
    description: "Accommodation Homestay Weekly Fee (2Stay) - shared room",
    unit: "week",
    cost: 450,
    supplier: "Homestay NW",
  },
  {
    description: "Admin Goodies Bag",
    unit: "each",
    cost: 10,
    supplier: "BSE",
  },
  {
    description: "Room DLC Thomson - half day",
    unit: "3H",
    cost: 130,
    supplier: "MQ",
  },
  {
    description: "Accommodation Collaroy Center (Single) - meals included",
    unit: "night",
    cost: 174,
    supplier: "Collaroy Centre",
  },
  {
    description: "Excursion NSW DE Half day",
    unit: "person",
    cost: 20,
  },
  {
    description: "Transport WSU Bankstown- Mitchell HS (return) 39 pax",
    unit: "hire",
    cost: 800,
    supplier: "Kinetic",
  },
  {
    description: "Transport WSU Campbeltown - Lindfield HS (return) 39 pax",
    unit: "hire",
    cost: 1430,
    supplier: "Kinetic",
  },
  {
    description: "Room Western Sydney Uni (half day, classroom)",
    unit: "3H",
    cost: 264,
    supplier: "WSU",
  },
];

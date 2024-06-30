const express = require('express');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nghfy93.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    const spotCollection = client.db('spotDB').collection('spot');
    const countryCollection = client.db('spotDB').collection('country');
    const userSpotCollection = client.db('spotDB').collection('userspot');
    const userCollection = client.db('spotDB').collection('user');
    const countrySpotCollection = client.db('spotDB').collection('countryspot');

   
    
   
    

    /******/
    app.get('/countryspot' ,(req ,res) =>{
      res.send(
        {
          "countries": [
            {
              "img": "https://64.media.tumblr.com/2e613b3b5098acebcf04514541639e5b/4f616db5a8e55fdd-cc/s500x750/51c54aa60842e0afe39fbd08e64082a682a023a1.jpg",
              "_id": "666450dbfe61f57cb3a18606",
              "countryName": "Bangladesh",
              "description": "Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal Bengal tiger. ― Google",
              "title": "Bangladesh Touristsspot",
              "tourismSpots": [
                {
                  "id": 1,
                  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn9f_0NZpJ5V_nVunSgAelSeWVfyXv_ltYZ43GT_x2z0HLevs8PMuGTNJWnG1Tedz3es&usqp=CAU",
                  "tourist_spot_name": "Sundarban",
                  "country_name": "Bangladesh",
                  "location": "Khulna Division",
                  "short_description": "The largest mangrove forest in the world.Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. Spread across parts of India and Bangladesh, this forest is the largest mangrove forest in the world.The Sundarbans is of universal importance for globally endangered species including the Royal Bengal Tiger, Ganges and Irawadi dolphins, estuarine crocodiles and the critically endangered endemic river terrapin (Batagur baska). It is the only mangrove habitat in the world for Panthera tigris tigris species.",
                  "average_cost": "$150",
                  "seasonality": "November to February"
                },
                {
                  "id": 2,
                  "image": "https://static.javatpoint.com/tourist-places/images/tourist-places-in-bangladesh11.png",
                  "tourist_spot_name": "Cox’s Bazar",
                  "country_name": "Bangladesh",
                  "location": "Chittagong Division",
                  "short_description": "The longest natural sea beach in the world.Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island. ― Google",
                  "average_cost": "$200",
                  "seasonality": "October to March"
                },
                {
                  "id": 3,
                  "image": "https://lh5.googleusercontent.com/p/AF1QipPBM1iEGC60RiD0eBy0bd49pv2A5rnbBSp7emZI=w810-h468-n-k-no",
                  "tourist_spot_name": "Rangamati",
                  "country_name": "Bangladesh",
                  "location": "Chittagong Hill Tracts",
                  "short_description": "Famous for its scenic beauty and tribal culture.Rangamati is the administrative headquarter and town of Rangamati Hill District in the Chittagong Hill Tracts of Bangladesh. The town is located at 22°37'60N 92°12'0E and has an altitude of 14 metres. It is also where Ropuiliani, a Mizo chieftess, was jailed and died, during British rule in Mizoram.Rangamati is also famous for cashew nut, water melon, Bangla Banana, fresh fishes of Kaptai lake. The district is also known to all for having a hydraulic Power Plant at Kaptai and Terrestrial Earth Satellite at Betbunia, Kawkhli.",
                  "average_cost": "$100",
                  "seasonality": "Throughout the year"
                },
                {
                  "id": 4,
                  "image":"https://media.sciencephoto.com/image/f0393368/800wm/F0393368-Aerial_view_of_golden_temple,_Bandarban,_Bangladesh.jpg" ,
                  "tourist_spot_name": "Bandarban",
                  "country_name": "Bangladesh",
                  "location": "Chittagong Hill Tracts",
                  "short_description": "Known for its beautiful hills and waterfalls.Bandarban is a city in the Chittagong Hill Tracts of southeastern Bangladesh. It is the headquarters of Bandarban District. It is located on the Sangu River.The three highest peak of Bangladesh - Tahjindong (1280 meters, also known as bijoy, Mowdok Mual (1052 m), and Keokradong (1230 m), - are located in Bandarban district, as well as Raikhiang Lake, the highest lake in Bangladesh. Chimbuk peak and Boga Lake are two more highly noted features of the district.",
                  "average_cost": "$120",
                  "seasonality": "Throughout the year"
                },
                {
                  "id": 5,
                  "image":"https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogzB8BGDn5J45LisskNSi5r3F07ohqWXZ4.png" ,
                  "tourist_spot_name": "Sajek Valley",
                  "country_name": "Bangladesh",
                  "location": " Rangamati District.",
                  "short_description": "It is one of the prime tourist destinations in Bangladesh.Sajek Valley is a popular tourist spot in Bangladesh, situated among the hills of the Kasalong range of mountains in the northern area of the Chittagong Hill Tracts.Sajek Valley is known for its natural environment and is surrounded by green mountains, dense forests, and hilly terrain. Many small rivers flow through the mountains, among which the Sajek (also Kasalong) and the Masalong are notable. On the way to Sajek Valley, one has to cross the Mayni Range and the Mayni River.",
                  "average_cost": "$120",
                  "seasonality": "Throughout the year"
                },
                {
                  "id": 6,
                  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4WlN8Pc7u90y3pW-_8fLl9s_FL4kzByotWg&s" ,
                  "tourist_spot_name": "Saint Martin’s Island",
                  "country_name": "Bangladesh",
                  "location": "Chittagong Division",
                  "short_description": "The only coral island in Bangladesh.Saint Martin Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip.Martin is generally known as “Narikel Zinzira” in Bengali, means 'Coconut Island' and this is the only coral reef island in Bangladesh. It is a small island in the north eastern part of the Bay of Bengal, created the southernmost part of our country.",
                  "average_cost": "$250",
                  "seasonality": "November to February"
                }
              ]
            },
            {
              "_id": "6664586efe61f57cb3a1860b",
              "img":"https://www.shutterstock.com/image-photo/aerial-view-bangkok-skyline-skyscraper-260nw-1104510797.jpg" ,
              "countryName": "Thailand",
              "description": "Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts include bustling Pattaya and fashionable Hua Hin. ― Google",
              "title": "Thailand Touristsspot",
              "tourismSpots": [
                {
                  "id":7,
                  "image":"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTCVgpDUucFnUeFG-3eiabZo7z30DalkK86Uxu5k90UOh7KqYeIuTPdiC-jD8WejDWvJ6OP5NfUywINTSChR98glFTnj3ukOKrcAPiC1g" ,
                  "tourist_spot_name": "Bangkok",
                  "country_name": "Thailand",
                  "location": "Central Thailand",
                  "short_description": "The capital city known for vibrant street life.Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its steep steps and Khmer-style spire. ― Google",
                  "average_cost": "$300",
                  "seasonality": "November to February"
                },
                {
                  "id":8,
                  "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg/1200px-0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg" ,
                  "tourist_spot_name": "Chiang Mai",
                  "country_name": "Thailand",
                  "location": "Northern Thailand",
                  "short_description": "Known for its beautiful temples and mountains.Chiang Mai is a city in mountainous northern Thailand. Founded in 1296, it was capital of the independent Lanna Kingdom until 1558. Its Old City area still retains vestiges of walls and moats from its history as a cultural and religious center. It’s also home to hundreds of elaborate Buddhist temples, including 14th-century Wat Phra Singh and 15th-century Wat Chedi Luang, adorned with carved serpents. ― Google",
                  "average_cost": "$250",
                  "seasonality": "November to February"
                },
                {
                  "id":9,
                  "image":"https://www.introducingbangkok.com/f/tailandia/bangkok/guia/ayutthaya.jpg" ,
                  "tourist_spot_name": "Ayutthaya",
                  "country_name": "Thailand",
                  "location": "Central Thailand",
                  "short_description": "Historic city with ancient ruins.Discover the ruins of the ancient Ayutthaya kingdom on a one-day tour from Bangkok. Visit the UNESCO-listed site with an expert guide and learn about Thailand's rich history and culture.The Historic City of Ayutthaya, founded in 1350, was the second capital of the Siamese Kingdom. It flourished from the 14th to the 18th centuries, during which time it grew to be one of the world's largest and most cosmopolitan urban areas and a center of global diplomacy and commerce.",
                  "average_cost": "$200",
                  "seasonality": "November to February"
                },
                {
        
                 "id":10,
                  "image":"https://lh4.googleusercontent.com/proxy/BpHkaI6np8r3YG_-xXHHtUdPlqbP6GXhtdiaGWp_HX6BkmoXn8LnIYKSKIDL2X7D3THOTCynmUcysoBb94O6ji13dCBECu7a7ZLNToCYNQCsjrP6wasXtNEAQcT2aIUBgB-bb5tzHhlHcS5X9VhYQba-9o-4Vh4=w810-h468-n-k-no" ,
                  "tourist_spot_name": "Phuket",
                  "country_name": "Thailand",
                  "location": "Southern Thailand",
                  "short_description": "Famous for its beautiful beaches and resorts.Phuket City, on Phuket Island, is the capital of Thailand’s Phuket Province. In the Old Town, Thalang Road is lined with colorful 19th-century shophouses and Sino-Portuguese buildings. Built in 1903 by a wealthy tin merchant, Baan Chinpracha mansion has Italian floor tiles, shuttered windows and antique furniture. Set in a 1930s manor, the Thai Hua Museum has exhibits on Phuket’s culture and history. ― Google",
                  "average_cost": "$400",
                  "seasonality": "November to April"
                },
                {
                 "id":11,
                  "image":"https://thailandstartshere.com/wp-content/uploads/2024/03/Krabi.jpeg" ,
                  "tourist_spot_name": "Krabi",
                  "country_name": "Thailand",
                  "location": "Southern Thailand",
                  "short_description": "Krabi, the capital of southern Thailand's Krabi Province, is a resort town near the Andaman  coast.Krabi, the capital of southern Thailand's Krabi Province, is a resort town near the Andaman coast. It lies in an area of limestone karsts and mangrove forest. On a hilltop reached by stairs, the Tiger Cave Temple is a Buddhist site with panoramic views. Khao Kanab Nam, 2 slanting hills rising out of water, form a local landmark. Andaman Sea destinations like the Phi Phi Islands are accessible by ferry. ― Google",
                  "average_cost": "$400",
                  "seasonality": "November to April"
                },
                {
                 "id":12,
                  "image":"https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQvrTrbbcLV5c9Wd3BrlVETb9Feh2AOxzIIVWX8GrFnIYp5gyJOtmp06j6CtWqENGgHGju0ZlJc8ITKlKWLp2QuHpqzI_xDV-4kWsVyZw" ,
                  "tourist_spot_name": "Phi Phi Islands",
                  "country_name": "Thailand",
                  "location": "Southern Thailand",
                  "short_description": "Known for their stunning beaches and clear waters.The Phi Phi Islands are an island group in Thailand between the large island of Phuket and the Straits of Malacca coast of Thailand. The islands are administratively part of Krabi Province .That is definitely true! These beautiful islands have plenty for you to photograph, discover, and explore, and their natural beauty will be sure to incite a sense of wonder in you. If you're curious to find out whether a trip from Phuket to the Phi Phi Islands is worth it, read on to find out more.",
                  "average_cost": "$350",
                  "seasonality": "November to April"
                }
              ]
            },
            {
              
              "_id": "66645376fe61f57cb3a18607",
              "img":"https://media.istockphoto.com/id/1383790382/video/indonesian-flag-on-the-roof-in-jakarta-old-city.jpg?s=640x640&k=20&c=DlgAMaugoS77lyFfSi-H6vOFYH0lG3tGDCUunZZdTqQ=" ,
              "countryName": "Indonesia",
              "description": "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Wikipedia",
              "title": "Indonesia Touristsspot",
              "tourismSpots": [
                {
                  "id":13,
                  "image":"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRFLYiR2N3v7WEnyBKRmRbk6Y3-D5uL8s8iGLTVYdb_dyQKpYL0VsWlkMmm5cAVZhlVfWKoJvWwKN0fj8UOLdZ3cm8m_gRXDTuCIhn7bg" ,
                  "tourist_spot_name": "Bali",
                  "country_name": "Indonesia",
                  "location": "Bali Island",
                  "short_description": "Famous for its forested volcanic mountains and beaches.Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast.Bali is the only Hindu-majority province in Indonesia, with 86.9% of the population adhering to Balinese Hinduism. It is renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music.",
                  "average_cost": "$500",
                  "seasonality": "April to October"
                },
                {
                  "id":14,
                  "image":"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR3jT6hd3BVsnNruuincsVh20yluo9nMaHVHY12CGLMhQ3yWeWDLRPrsnUgyGMp7rLJDfLZvFcYHWj_IwwOh1AeSrUQaUcdbVaRVuSrGQ" ,
                  "tourist_spot_name": "Borobudur Temple",
                  "country_name": "Indonesia",
                  "location": "Central Java",
                  "short_description": "The world's largest Buddhist temple.Borobudur, also transcribed Barabudur, is a 9th-century Mahayana Buddhist temple in Magelang Regency, near the city of Magelang and the town of Muntilan, in Central Java, Indonesia.Borobudur Temple is famous because it is the largest Buddhist temple compound in the world. The temple features hundreds of Buddha statues, decorative relief sculptures, and stories from the life and teachings of Buddha.",
                  "average_cost": "$100",
                  "seasonality": "April to October"
                },
                {
                  "id":15,
                  "image":"https://media.istockphoto.com/id/1137129725/photo/komodo-dragon.jpg?s=612x612&w=0&k=20&c=8OTzDKGtrfIuadIwHV8IYnK0k6W3Vk-V0H-sm_lQQBs=" ,
                  "tourist_spot_name": "Komodo National Park",
                  "country_name": "Indonesia",
                  "location": "Lesser Sunda Islands",
                  "short_description": "Home to the Komodo dragon.Komodo National Park is a national park in Indonesia located within the Lesser Sunda Islands in the border region between the provinces of East Nusa Tenggara and West Nusa Tenggara. The park includes the three larger islands Komodo, Padar and Rinca, and 26 smaller ones, with a total area of 1,733 km².As well as being home to the Komodo dragon, the Park provides a refuge for many other notable terrestrial species such as the orange-footed scrub fowl, an endemic rat, and the Timor deer.",
                  "average_cost": "$300",
                  "seasonality": "April to December"
                },
                {
                  "id":16,
                  "image":"https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ6k7AlwEejPaLZ6tju-kMw9_LjvOcGgcg0fAAdQ-vw3qMvs-Ttee4I5SWkYkEogOU-0pXUa-QfNUmL_T9HPXgGqQgjN_uJBA10BycnrQ" ,
                  "tourist_spot_name": "Derawan Islands",
                  "country_name": "Indonesia",
                  "location": "Lesser Sunda Islands",
                  "short_description": "The Derawan Islands are in the province of East Kalimantan in Indonesia.The Derawan Islands are in the province of East Kalimantan in Indonesia. They consist of 31 islands, most well known among these are the islands of Derawan, Kakaban, Maratua, and Sangalaki. There are also numerous submerged reefs and islets.To reach Derawan, SilkAir flies from Singapore to Balikpapan in East Kalimantan. Or you can take a flight from Jakarta, Surabaya or Denpasar to Balikpapan or Tarakan by Garuda Indonesia. Then take a connecting flight to Tanjung Redeb in Berau. From here, boats will take you to the islands.",
                  "average_cost": "$300",
                  "seasonality": "April to December"
                },
                {
                  "id":17,
                  "image":"https://lp-cms-production.imgix.net/2022-11/shutterstockRF_388459495.jpg?auto=format&w=1500&h=640&q=75" ,
                  "tourist_spot_name": "Raja Ampat Islands",
                  "country_name": "Indonesia",
                  "location": "West Papua",
                  "short_description": "Known for its coral reefs and marine life.",
                  "average_cost": "$600",
                  "seasonality": "October to April"
                },
        
                {
                  "id":18,
                  "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg/402px-Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg" ,
                  "tourist_spot_name": "Yogyakarta",
                  "country_name": "Indonesia",
                  "location": "Central Java",
                  "short_description": "Known for its traditional arts and cultural heritage.The Raja Ampat Islands are an Indonesian archipelago off the northwest tip of Bird’s Head Peninsula in West Papua. Comprising hundreds of jungle-covered islands, Raja Ampat is known for its beaches and coral reefs rich with marine life. Ancient rock paintings and caves are on Misool Island, while the crimson bird of paradise lives on Waigeo Island. Batanta and Salawati are the archipelago’s other main islands. ― Google",
                  "average_cost": "$150",
                  "seasonality": "April to October"
                }
              ]
            },
            {
              "_id": "6664544cfe61f57cb3a18608",
              "img":"https://lh4.googleusercontent.com/proxy/rK3Dfr_vTnHZEy9k1y4lid_4NPPYNkbIWQ5y6J2xcHk1DRGCIx-yj-oOFQDTJmoceMydk7wR86VqtBkqm6YTUevWqd337XHtYkY39wYVRpQ_BakkArjMexMwNjlKaNAJy5cn8vqABRlY9Jf52E_s0nU_jyY0ww=w810-h468-n-k-no" ,
              "countryName": "Malaysia",
              "title": "Malaysia Touristsspot",
              "description": "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers. ― Google",
              "tourismSpots": [
                {
                 "id":19,
                  "image":"https://lh5.googleusercontent.com/p/AF1QipM8TBJqn6jDxfK10NE_YB0aL32-YMPkF9H0AVub=w810-h468-n-k-no" ,
                  "tourist_spot_name": "Kuala Lumpur",
                  "country_name": "Malaysia",
                  "location": "Central Malaysia",
                  "short_description": "The capital city known for the Petronas Towers.",
                  "average_cost": "$400",
                  "seasonality": "May to July"
                },
                {
                 "id":20,
                  "image":"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS3wCb1L-TGYYPS-q7R-ijXNLhN6Oy-YIx0P5w7avSwsa6PbzZJnXAiuOtuu5ZQNGoS4ChGk7wP8DSBZiC5-AQTsPwhi9wkEP1OPskgVQ" ,
                  "tourist_spot_name": "Langkawi",
                  "country_name": "Malaysia",
                  "location": "Northwestern Malaysia",
                  "short_description": "Famous for its beaches, mangroves, and duty-free shopping.Langkawi, officially known by its sobriquet Langkawi, the Jewel of Kedah, is a duty-free island and an archipelago of 99 islands located some 30 km off the coast of northwestern Malaysia and a few kilometres south of Ko Tarutao, adjacent to the Thai border.The unspoiled forests and diverse wildlife are the top reasons to spend your next vacation here. Three of the best geoparks of SouthEast Asia, Mount Machincang Cambrian, Kilim Karst and the Dayang Bunting are in Langkawi. These geoparks protect the rainforests, mangroves, mountains and waterfalls from the modern world.",
                  "average_cost": "$300",
                  "seasonality": "November to March"
                },
                {
                 "id":21,
                  "image":"https://lh5.googleusercontent.com/p/AF1QipMgKEYhQvgX0S3NGQDw3-kq2eB7lqurM31nUM6f=w810-h468-n-k-no" ,
                  "tourist_spot_name": "Penang",
                  "country_name": "Malaysia",
                  "location": "Northwestern Malaysia",
                  "short_description": "Known for its historic George Town.The Penan are a nomadic indigenous people living in Sarawak and Brunei, although there is only one small community in Brunei; among those in Brunei half have been converted to Islam, even if only superficially. Penan are one of the last such peoples remaining as hunters and gatherers.",
                  "average_cost": "$200",
                  "seasonality": "November to January"
                },
                {
                 "id":22,
                  "image":"https://lh5.googleusercontent.com/p/AF1QipMJcgGFB2jx1kiICZLnzgZRQxEQ8RvZlK61eMWa=w810-h468-n-k-no" ,
                  "tourist_spot_name": "Cameron Highlands",
                  "country_name": "Malaysia",
                  "location": "Western Malaysia",
                  "short_description": "Known for its tea plantations and cool climate.The Cameron Highlands is a district in Pahang, Malaysia, occupying an area of 712.18 square kilometres. To the north, its boundary touches that of Kelantan; to the west, it shares part of its border with Perak.Cool weather, rolling hills of scenic tea plantations, and a whole range of leisure activities make Cameron Highlands a desirable tourist destination.",
                  "average_cost": "$250",
                  "seasonality": "December to February"
                },
                {
                 "id":23,
                  "image":"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSGA_6nEehFL5s8HwgnCGVgB5mQYoSIXQSrQw-DzfX1E4xcrDmrMeJ8shf0nsrflnBlF2hYN9n8y_CBSPC_AlluEbrkaL_-k7I__pdg5w" ,
                  "tourist_spot_name": "Malacca",
                  "country_name": "Malaysia",
                  "location": "Western Malaysia",
                  "short_description": "Malacca City (also spelled Melaka) is the capital of the coastal state of Malacca, in southwestern Malaysia.Malacca City (also spelled Melaka) is the capital of the coastal state of Malacca, in southwestern Malaysia. At its center, Jonker Street, Chinatown’s main thoroughfare, is known for antique shops and its night market. Nearby, the 17th-century Chinese Cheng Hoon Teng temple has ornate decorations and multiple prayer halls. A green, 3-tiered roof tops the 18th-century, Javanese-influenced Kampung Kling Mosque. ― Google",
                  "average_cost": "$250",
                  "seasonality": "December to February"
                },
                {
                 "id":24,
                  "image":"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSUNjM5Faf0Nv3r0AmhMptb39aCUNurIjSURdz86PT5YqjNS4VKgl24niLxmqi4pxWepA5POCpRxa4dYcMyAK9IN3jS8BSFvUlFI0kT6Hw" ,
                  "tourist_spot_name": "Taman Negara National Park",
                  "country_name": "Malaysia",
                  "location": "Central Malaysia",
                  "short_description": "One of the world's oldest tropical rainforests.Taman Negara is a vast national park in Malaysia on the Malay peninsula. It encompasses a sprawling tropical rainforest that's said to be 130 million years old. Kuala Tahan, the main entry point, is a base for the nearby canopy walkway, river trips and treks through the jungle to the top of Mt. Tahan. The park is home to tigers, macaques and birdlife, as well as the enormous flowers of the rafflesia plant. ― Google",
                  "average_cost": "$150",
                  "seasonality": "March to October"
                }
              ]
            },
            {
              "_id": "66645550fe61f57cb3a18609",
              "img":"https://vnis.edu.vn/wp-content/uploads/2023/07/vietnam0.jpeg" ,
              "countryName": "Vietnam",
              "title": "Vietnam Touristsspot",
              "description": "Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. Hanoi, the capital, pays homage to the nation’s iconic Communist-era leader, Ho Chi Minh, via a huge marble mausoleum. Ho Chi Minh City (formerly Saigon) has French colonial landmarks, plus Vietnamese War history museums and the Củ Chi tunnels, used by Viet Cong soldiers. ― Google",
              "tourismSpots": [
                {
                 "id":25,
                  "image":"https://t3.ftcdn.net/jpg/01/28/78/98/360_F_128789847_DplsTlayUMVgzz3at1afhS3JuGAHvigy.jpg" ,
                  "tourist_spot_name": "Ha Long Bay",
                  "country_name": "Vietnam",
                  "location": "Northeastern Vietnam",
                  "short_description": "Hạ Long Bay, in northeast Vietnam, is known for its emerald waters and thousands of towering limestone islands topped by rainforests. Junk boat tours and sea kayak expeditions take visitors past islands named for their shapes, including Stone Dog and Teapot islets. The region is popular for scuba diving, rock climbing and hiking, particularly in mountainous Cát Bà National Park. ― Google",
                  "average_cost": "$350",
                  "seasonality": "October to April"
                },
                {
                 "id":26,
                  "image":"https://media.istockphoto.com/id/1351410941/photo/aerial-view-of-ho-chi-minh-city-vietnam-beauty-skyscrapers-along-river-light-smooth-down.webp?b=1&s=170667a&w=0&k=20&c=_N0rx-htT9YiHTeytsUh9fe9f7yEuoHB-Vh5bp1qzA8=" ,
                  "tourist_spot_name": "Ho Chi Minh City",
                  "country_name": "Vietnam",
                  "location": "Southern Vietnam",
                  "short_description": "Known for its French colonial landmarks. Ho Chi Minh City, commonly referred to by its former name Saigon, is the most populous city in Vietnam, with a population of around 10 million in 2023. The city's geography is defined by rivers and canals, of which the eponymously-named Saigon River is the largest. _Wikipedia",
                  "average_cost": "$300",
                  "seasonality": "December to March"
                },
                {
                 "id":27,
                  "image":"https://cdn.getyourguide.com/img/tour/f0b5cd32ea99001d6e57a70d3120f6107d967d9de06ba072d8506981e22ef814.jpg/132.webp" ,
                  "tourist_spot_name": "Nha Trang ",
                  "country_name": "Vietnam",
                  "location": "Southern Vietnam",
                  "short_description": "Nha Trang is a coastal resort city in southern Vietnam known for its beaches, diving sites and offshore islands. Its main beach is a long, curving stretch along Tran Phu Street backed by a promenade, hotels and seafood restaurants. Aerial cable cars cross over to Hòn Tre Island, and the nature reserves of Hòn Mun and Hòn Tằm islands, reachable by boat, have coral reefs. ― Google",
                  "average_cost": "$300",
                  "seasonality": "December to March"
                },
                {
                 "id":28,
                  "image":"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRh9R6Zm14XxQg7SV7h9vddKd8yK9e418aRCp7Zvh5yVOazhdVuMrQpLC7HKRJVa8iWTKWQar1T0Oyy2D3D8138KV4yWiX8Xzq3qUpW2w" ,
                  "tourist_spot_name": "Hoi An Ancient Town",
                  "country_name": "Vietnam",
                  "location": "Central Vietnam",
                  "short_description": "A well-preserved example of a Southeast Asian trading port.Hội An is a city on Vietnam’s central coast known for its well-preserved Ancient Town, cut through with canals. The former port city’s melting-pot history is reflected in its architecture, a mix of eras and styles from wooden Chinese shophouses and temples to colorful French colonial buildings, ornate Vietnamese tube houses and the iconic Japanese Covered Bridge with its pagoda. ― Google",
                  "average_cost": "$200",
                  "seasonality": "February to May"
                },
                {
                 "id":29,
                  "image":"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQKTYCPyCgiMAVNjTfy5uH--u_S889542pXAOV8GBp5Ko7C8HjTByFiJmGhdvCh4YuOnLwlLgVUPa__kjU1eFUwnzk9_nuDCGphDE-H-w" ,
                  "tourist_spot_name": "Phong Nha Caves",
                  "country_name": "Vietnam",
                  "location": "Central Vietnam",
                  "short_description": "Known for its cave systems and underground rivers. Phong Nha-Kẻ Bàng National Park is a protected area in north-central Vietnam bordering the Hin Namno Reserve in Laos. Characterized by mountains, tropical forests and underground rivers, it’s known for its ancient limestone karsts and vast network of caves. These include the huge Sơn Đoòng cave and Phong Nha cave, which is big enough for boats. The area’s rich wildlife includes tigers, black bears and elephants. ― Google",
                  "average_cost": "$250",
                  "seasonality": "February to August"
                },
                {
                 "id":30,
                  "image":"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRWhCv3hzKGVsM1YJaKIR_-r6UheIbERTufzosHn1f-u23qFIjWv5O5xC4F--EeVHhkJGRDiwlem6Xmd9QwAj_XHq13WzaEA9_iE97lyw" ,
                  "tourist_spot_name": "Mekong Delta",
                  "country_name": "Vietnam",
                  "location": "Southern Vietnam",
                  "short_description": "Known for its rivers, swamps, and floating markets. The Mekong Delta in southern Vietnam is a vast maze of rivers, swamps and islands, home to floating markets, Khmer pagodas and villages surrounded by rice paddies. Boats are the main means of transportation, and tours of the region often start in nearby Ho Chi Minh City (formerly known as Saigon) or Can Tho, a bustling town in the heart of the delta. ― Google",
                  "average_cost": "$150",
                  "seasonality": "December to April"
                }
              ]
            },
            {
              "_id": "66645617fe61f57cb3a1860a",
              "img":"https://lh5.googleusercontent.com/p/AF1QipO6W0jnHXYR9PZfHPJ4xCOl7PE2oxgAgQKm5jYS=w810-h468-n-k-no" ,
              "countryName": "Cambodia",
              "description": "Cambodia is a Southeast Asian nation whose landscape spans low-lying plains, the Mekong Delta, mountains and Gulf of Thailand coastline. Phnom Penh, its capital, is home to the art deco Central Market, glittering Royal Palace and the National Museum's historical and archaeological exhibits. In the country's northwest are the ruins of Angkor Wat, a massive stone temple complex built during the Khmer Empire. ― Google",
              "title": "Camnodia Touristsspot",
              "tourismSpots": [
                {
                 "id":31,
                  "image":"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQkD5jrMjlBpXlQMIMckYLTVMpt52I0muCQhxJJo-miUB1cEXzYG93ywuI5ZRMZ7m2__2eRwp874XhVoHCUXxHYa-apODHz448SgjU_Fw" ,
                  "tourist_spot_name": "Angkor Wat",
                  "country_name": "Cambodia",
                  "location": "Siem Reap",
                  "short_description": "The largest religious monument in the world.Angkor Wat is a Hindu-Buddhist temple complex in Cambodia. Located on a site measuring 162.6 hectares within the ancient Khmer capital city of Angkor, it is considered as the largest religious structure in the world by Guinness World Records. Wikipedia",
                  "average_cost": "$300",
                  "seasonality": "November to March"
                },
                {
                 "id":32,
                  "image":"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ4yKzlv6ea1n794ZSM_8PTGRONaFba6bH2kG_8dvvXwXl8XyzZepjTtyghNazun2lvJNWnkLrj1h4Vv3t4rJMTBQsRRLPFDP1mIgzgkg" ,
                  "tourist_spot_name": "Siem Reap",
                  "country_name": "Cambodia",
                  "location": "Northwestern Cambodia",
                  "short_description": "Gateway to the ruins of Angkor Wat. Siem Reap, a resort town in northwestern Cambodia, is the gateway to the ruins of Angkor, the seat of the Khmer kingdom from the 9th–15th centuries. Angkor’s vast complex of intricate stone buildings includes preserved Angkor Wat, the main temple, which is pictured on Cambodia’s flag. Giant, mysterious faces are carved into the Bayon Temple at Angkor Thom. ― Google",
                  "average_cost": "$250",
                  "seasonality": "November to March"
                },
                {
                 "id":33,
                  "image":"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRlQZ5XWTtlSl0qVCkzysUJTJfgThu2xLo-wHbA-O7mD5Z7cp6SyWyp8UmuhLhzzSc8aPcQg26gBoLI_WDo4I68ZQqGujG31koVuIvcJw" ,
                  "tourist_spot_name": "Phnom Penh",
                  "country_name": "Cambodia",
                  "location": "Southern Cambodia",
                  "short_description": "The capital city known for its Royal Palace.Phnom Penh, Cambodia’s busy capital, sits at the junction of the Mekong and Tonlé Sap rivers. It was a hub for both the Khmer Empire and French colonialists. On its walkable riverfront, lined with parks, restaurants and bars, are the ornate Royal Palace, Silver Pagoda and the National Museum, displaying artifacts from around the country. At the city’s heart is the massive, art deco Central Market. ― Google",
                  "average_cost": "$200",
                  "seasonality": "November to February"
                },
                {
                 "id":34,
                  "image":"https://lh5.googleusercontent.com/p/AF1QipMwlu6N8ImTW4fSmUgldSn-nHS8A4jxHG0cbROr=w810-h468-n-k-no" ,
                  "tourist_spot_name": "Kep",
                  "country_name": "Cambodia",
                  "location": "Southwestern Cambodia",
                  "short_description": "Known for its seafood and national park.Kep is the capital of Kep Province in southern Cambodia. It lies near Kep National Park. The small city has a population of 35,990. Wikipedia",
                  "average_cost": "$150",
                  "seasonality": "November to March"
                },
                {
                 "id":35,
                  "image":"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRDZA8vHCaxvt40cVluLL7tn0k7QCuDrupq7Vv8p3rWkxj-Wpm9BLbEmCPdMk_C-aFbdtE4sZcUjP7huJXlcSYC4ImgFzyAm2lufTvX2w" ,
                  "tourist_spot_name": "Bayon Temple",
                  "country_name": "Cambodia",
                  "location": "Southwestern Cambodia",
                  "short_description": "The Bayon is a richly decorated Khmer temple related to Buddhism at Angkor in Cambodia. Built in the late 12th or early 13th century as the state temple of the King Jayavarman VII, the Bayon stands at the centre of Jayavarman's capital, Angkor Thom. Wikipedia",
                  "average_cost": "$150",
                  "seasonality": "November to March"
                },
                {
                 "id":36,
                  "image":"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSSnmHobfDwuI5R4bo0y8Uf0PchUpWUVGBeL14pMaJB2nMiYwYMHu-pyYuL4Iv7PV7Je6BxkeigwlvD9mTQ9DwUl2vWuclb0Ynk_oHG4Q" ,
                  "tourist_spot_name": "Bokor National Park",
                  "country_name": "Cambodia",
                  "location": "Southwestern Cambodia",
                  "short_description": "Known for its abandoned French hill station and cool climate.Preah Monivong Bokor National Park is a national park in southern Cambodia's Kampot Province that was established in 1993 and covers 1,544.58 km². In 2003, it was designated as an ASEAN Heritage Park. It is located in the Dâmrei Mountains, forming the southeastern parts of the Cardamom Mountains. Wikipedia",
                  "average_cost": "$100",
                  "seasonality": "November to February"
                }

              ]
            }
          ]
        }
        
      )
    });
    
    app.post('/countryspot', async (req, res) => {
      const newCountrySpot = req.body;
      const result = await countrySpotCollection.insertOne(newCountrySpot);
      res.send(result);
    });




app.get('/countrySpot/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await countrySpotCollection.findOne({ 'tourismSpots.id': id });
  if (result) {
    const tourismSpot = result.tourismSpots.find(spot => spot.id === id);
    res.send(tourismSpot);
  } else {
    res.status(404).send({ message: 'Spot not found' });
  }
});

// Add a new country spot
app.post('/countrySpot', async (req, res) => {
  const newCountrySpot = req.body;
  const result = await countrySpotCollection.insertOne(newCountrySpot);
  res.send(result);
});

   
    


    // SPOT API
    // app.get('/spot', async (req, res) => {
    //   const { sort = 'asc' } = req.query;
    //   const sortOrder = sort === 'asc' ? 1 : -1;
    //   const cursor = spotCollection.find().sort({ averagecost: sortOrder });
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });

    app.get('/spot', async (req, res) => {
      res.send(
        [
          {
          "_id": "666337d0905856bbe0a42b0b",
          "userName": "Nusrat Jahan",
          "email": "nusrat@gmail.com",
          "spotName": "Saint Martin's Island",
          "countryName": "Bangladesh",
          "location": "Bay of Bengal",
          "description": "Saint Martin's Island is the only coral island in Bangladesh, known for its clear blue waters, sandy beaches, and vibrant marine life. It's a popular destination for relaxation and water activities.\nSaint Martin's Island, with its clear blue waters, sandy beaches, and vibrant marine life, is a unique and captivating destination. Whether you're looking to relax on the beach, explore the underwater world, or immerse yourself in the local culture, the island offers something for everyone. A visit to this coral paradise is sure to be a memorable and rejuvenating experience.",
          "image": "https://i.ibb.co/GM7MqTL/Saint-Martin-Travels-awesome-Beautiful-experience.png",
          "averagecost": "100",
          "traveltime": "2 days",
          "totalvisitors": "50000",
          "seasonality": "Winter"
          },
          {
          "_id": "6663319e905856bbe0a42b06",
          "userName": "Nafu Ahmeed",
          "email": "nafi@gmail.com",
          "spotName": "Sundarban",
          "countryName": "Bangladesh",
          "location": "Khulna",
          "description": "A vast forest in the coastal region of the Bay of Bengal, famous for its unique mangrove ecosystem and the Bengal tiger.The Sundarbans, with its enchanting mangrove forests and the majestic Bengal tiger, offers a unique and unforgettable experience. It stands as a testament to the intricate balance of nature and the enduring beauty of the wild. Come and discover the magic of the Sundarbans, where every visit promises a new adventure and a deeper connection with nature.",
          "image": "https://i.ibb.co/XthzyB2/04n0mzmjcm6m2o00hm585v4fkbn5-sundarban-day-2002140623.png",
          "averagecost": "200",
          "traveltime": "5 days",
          "totalvisitors": "150000",
          "seasonality": "Winter"
          },
          {
          "_id": "666333f3905856bbe0a42b07",
          "userName": "Swaira Fatiha",
          "email": "sawaira@gmail.com",
          "spotName": "Bangkok",
          "countryName": "Thailand",
          "location": "Central Thailand",
          "description": "      The capital city known for its vibrant street life, cultural landmarks, and bustling markets.\nBangkok, the capital city of Thailand, is renowned for its vibrant street life, cultural landmarks, and bustling markets. This dynamic metropolis, situated on the Chao Phraya River, is a hub of activity where tradition meets modernity in a unique blend.",
          "image": "https://i.ibb.co/3Yr85Xx/gettyimages-1408713221-612x612.jpg",
          "averagecost": "500",
          "traveltime": "7 days",
          "totalvisitors": "22000000",
          "seasonality": "All year"
          },
          {
          "_id": "666336eb905856bbe0a42b0a",
          "userName": "Nusrat Jahan",
          "email": "nusrat@gmail.com",
          "spotName": "Rangamati",
          "countryName": "Bangladesh",
          "location": "Rangamati Hill District",
          "description": "Rangamati is known for its picturesque landscapes, lakes, and hills. It is a popular destination for nature lovers and those seeking tranquility.Rangamati, with its picturesque landscapes, tranquil lakes, and rolling hills, is a perfect destination for those seeking tranquility and a close connection with nature. Its rich cultural heritage and diverse attractions offer a unique and memorable experience for every visitor. Whether exploring its scenic beauty or immersing in its cultural richness, Rangamati promises a serene and enchanting escape from the hustle and bustle of everyday life.",
          "image": "https://i.ibb.co/2F9sGZS/vtcz9-Mk2q-Fct-Vum-H283nm1gk-OE3u-F63iu-T77-Heay.jpg",
          "averagecost": "500 ",
          "traveltime": "3 days",
          "totalvisitors": "100000",
          "seasonality": "Winter"
          },
          {
          "_id": "6663359b905856bbe0a42b09",
          "userName": "Nusrat Jahan",
          "email": "nusrat@gmail.com",
          "spotName": "Kuala Lumpur",
          "countryName": "Malaysia",
          "location": "West Malaysia",
          "description": "    The capital city known for its modern skyline dominated by the iconic Petronas Twin Towers.\nKuala Lumpur is a dynamic capital city that seamlessly blends modernity with cultural richness. Its iconic Petronas Twin Towers dominate a skyline filled with architectural wonders, while its cultural landmarks, bustling markets, and diverse cuisine reflect the city's multifaceted character. Whether exploring its contemporary marvels or delving into its cultural heritage, Kuala Lumpur offers a captivating experience for every visitor.",
          "image": "https://i.ibb.co/TtpfftV/download.jpg",
          "averagecost": "600 ",
          "traveltime": "7 days",
          "totalvisitors": "9000000",
          "seasonality": "All year"
          },
          {
          "_id": "666334e6905856bbe0a42b08",
          "userName": "Nusaiba Halim",
          "email": "nusaiba@gmail.com",
          "spotName": "Bali",
          "countryName": "Indonesia",
          "location": "Island of Bali",
          "description": "    An Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.\nBali is a captivating island that offers a diverse range of experiences for every traveler. Its forested volcanic mountains, iconic rice paddies, stunning beaches, and vibrant coral reefs create a natural paradise, while its rich cultural heritage adds depth and charm to the island. Whether you are seeking adventure, relaxation, or cultural exploration, Bali promises an unforgettable journey into the heart of Indonesia's natural and cultural wonders.",
          "image": "https://i.ibb.co/SsqFxVJ/gettyimages-1171238080-612x612.jpg",
          "averagecost": "800",
          "traveltime": "10 days",
          "totalvisitors": "6000000",
          "seasonality": "All year"
          }
          ]
      )
    });


 // GET specific spot by ID
 
 app.get('/spot/:id', async(req ,res) =>{
  const id = req.params.id;
  const query = {_id: new ObjectId(id)}
  const result = await spotCollection.findOne(query);
  res.send(result);
})
   


    app.post('/spot', async (req, res) => {
      const newSpot = req.body;
      const result = await spotCollection.insertOne(newSpot);
      res.send(result);
    });

    // COUNTRY API
    app.get('/country', async (req, res) => {
      const cursor = countryCollection.find();
      const country = await cursor.toArray();
      res.send(country);
    });

    app.get('/country/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await countryCollection.findOne(query);
      res.send(result);
    });

    // USER SPOT COLLECTION API
    app.get('/userspot', async (req, res) => {
      const cursor = userSpotCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/userspot/:id', async(req ,res) =>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await userSpotCollection.findOne(query);
      res.send(result);
    })

    app.post('/userspot', async (req, res) => {
      const newUserSpot = req.body;
      const result = await userSpotCollection.insertOne(newUserSpot);
      res.send(result);
    });

    app.delete('/userspot/:id',async(req ,res) =>{
      const id = req.params.id;
      const query ={_id: new ObjectId(id)}
      const result = await userSpotCollection.deleteOne(query);
      res.send(result);
    })


  app.put('/userspot/:id', async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const updatedSpot = req.body;
    const updatedFields = {
        $set: {
            userName: updatedSpot.userName,
            email: updatedSpot.email,
            spotName: updatedSpot.spotName,
            countryName: updatedSpot.countryName,
            location: updatedSpot.location,
            description: updatedSpot.description,
            image: updatedSpot.image,
            averagecost: updatedSpot.averagecost,
            traveltime: updatedSpot.traveltime,
            totalvisitors: updatedSpot.totalvisitors,
            seasonality: updatedSpot.seasonality
        }
    };
    const result = await userSpotCollection.updateOne(filter, updatedFields);  
    res.send(result);
});

// user related api

app.get('/user' ,async(req ,res) =>{
  const cursor = userCollection.find();
  const users = await cursor.toArray();
  res.send(users);
})



app.post('/user' ,async(req ,res) =>{
  const user = req.body;
  console.log(user);
  const result = await userCollection.insertOne(user);
  res.send(result);
})

app.patch('/user' , async(req ,res) =>{
  const user = req.body;
  const filter = {email:user.email}
  const updateDoc ={
    $set:{
      lastLoggedAt: user.lastLoggedAt
    }
  }
  const result = await userCollection.updateOne(filter,updateDoc);
  res.send(result);
})

app.delete('/user/:id' , async(req , res) =>{
  const id = req.params.id;
  const query = {_id: new ObjectId(id)};
  const result = await userCollection.deleteOne(query);
  res.send(result);
})


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('tourism store server is running');
});

app.listen(port, () => {
  console.log(`tourism server is running on port: ${port}`);
});



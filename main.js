// this is data countries
const arabCountriesCities = {
  Algeria: [
    "Algiers",
    "Oran",
    "Constantine",
    "Annaba",
    "Blida",
    "Batna",
    "Setif",
    "Tlemcen",
    "Chlef",
    "Ouargla",
    "Biskra",
    "Tiaret",
    "Bejaia",
    "Skikda",
    "El Oued",
    "M'sila",
    "El Tarf",
    "Ain Temouchent",
    "Laghouat",
  ],
  Bahrain: [
    "Manama",
    "Riffa",
    "Muharraq",
    "A'ali",
    "Isa Town",
    "Sitra",
    "Zallaq",
    "Budaiya",
    "Juffair",
    "Sanabis",
    "Adliya",
    "Saar",
    "West Riffa",
  ],
  Comoros: [
    "Moroni",
    "Moutsamoudou",
    "Fomboni",
    "Domoni",
    "Chandra",
    "Mitsi",
    "Kaweni",
    "Moutsamoudou",
    "Nioumachoua",
    "Bwe Andzé",
  ],
  Djibouti: [
    "Djibouti City",
    "Ali Sabieh",
    "Tadjoura",
    "Obock",
    "Dikhil",
    "Markazi",
    "Arta",
    "Khor Ambado",
  ],
  Egypt: [
    "Cairo",
    "Alexandria",
    "Giza",
    "Sharm El Sheikh",
    "Luxor",
    "Aswan",
    "Port Said",
    "Suez",
    "Ismailia",
    "Tanta",
    "Mansoura",
    "Zagazig",
    "Damanhur",
    "Beni Suef",
    "Fayoum",
    "Sohag",
    "Minya",
    "Cairo Governorate",
    "Hurghada",
    "Asyut",
  ],
  Iraq: [
    "Baghdad",
    "Basra",
    "Mosul",
    "Erbil",
    "Kirkuk",
    "Najaf",
    "Karbala",
    "Sulaymaniyah",
    "Dohuk",
    "Amara",
    "Samarra",
    "Najaf",
    "Kufa",
    "Ramadi",
    "Diwaniya",
    "Al Hillah",
    "Kut",
    "Tikrit",
    "Baqubah",
  ],
  Jordan: [
    "Amman",
    "Zarqa",
    "Irbid",
    "Aqaba",
    "Madaba",
    "Salt",
    "Mafraq",
    "Tafileh",
    "Karak",
    "Ajloun",
    "Jerash",
    "Maan",
    "Al-Muwaqqar",
    "Al-Karak",
    "Ruseifa",
  ],
  Kuwait: [
    "Kuwait City",
    "Hawalli",
    "Salmiya",
    "Jabriya",
    "Al Farwaniya",
    "Ahmadi",
    "Fintas",
    "Khaitan",
    "Mubarak Al Kabeer",
    "Jleeb Al-Shuyoukh",
    "Shuwaikh",
    "Riggai",
    "Sabah Al-Salem",
    "Al Jahra",
  ],
  Lebanon: [
    "Beirut",
    "Tripoli",
    "Sidon",
    "Byblos",
    "Tyre",
    "Zahle",
    "Baabda",
    "Jounieh",
    "Bekaa",
    "Baalbek",
    "Batroun",
    "Choueifat",
    "Hadath",
    "Hermel",
    "Nabatieh",
  ],
  Libya: [
    "Tripoli",
    "Benghazi",
    "Misrata",
    "Zawiya",
    "Tobruk",
    "Sabha",
    "Al-Bayda",
    "Khoms",
    "Derna",
    "Sirte",
    "Bani Walid",
    "Sabratha",
    "Zintan",
    "Ajdabiya",
    "Al-Marj",
    "Al Jufra",
  ],
  Mauritania: [
    "Nouakchott",
    "Nouadhibou",
    "Kiffa",
    "Atar",
    "Rosso",
    "Akjoujt",
    "Zouérat",
    "Nema",
    "Tidjikja",
    "Arafat",
    "Boutilimit",
    "Bira",
    "Wad Naga",
  ],
  Morocco: [
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Fes",
    "Tangier",
    "Meknes",
    "Agadir",
    "Oujda",
    "Taza",
    "Essaouira",
    "Meknes",
    "El Jadida",
    "Tetouan",
    "Nador",
    "Safi",
    "Mohammedia",
    "Beni Mellal",
    "Kénitra",
    "Taroudant",
  ],
  Oman: [
    "Muscat",
    "Salalah",
    "Sohar",
    "Nizwa",
    "Barka",
    "Ibri",
    "Sur",
    "Bahla",
    "Rustaq",
    "Dhofar",
    "Ibra",
    "Seeb",
    "Al Buraimi",
    "Musandam",
    "Sohar",
    "Nizwa",
    "Khasab",
    "Sur",
  ],
  Palestine: [
    "Ramallah",
    "Gaza City",
    "Hebron",
    "Nablus",
    "Jenin",
    "Bethlehem",
    "Tulkarm",
    "Jericho",
    "Qalqilya",
    "Nablus",
    "Jalazon",
    "Khan Yunis",
    "Deir al-Balah",
    "Rafah",
    "Beit Lahia",
    "Taffuh",
  ],
  Qatar: [
    "Doha",
    "Al Rayyan",
    "Al Wakrah",
    "Al Khor",
    "Umm Salal",
    "Madinat ash Shamal",
    "Dukhan",
    "Al Daayen",
    "Al Zubara",
    "Mesaieed",
  ],
  "Saudi Arabia": [
    "Riyadh",
    "Jeddah",
    "Mecca",
    "Medina",
    "Dammam",
    "Khobar",
    "Ta'if",
    "Buraidah",
    "Abha",
    "Jubail",
    "Khamis Mushait",
    "Najran",
    "Tabuk",
    "Hail",
    "Jizan",
    "Al Khobar",
    "Riyadh",
    "Yanbu",
    "Bisha",
    "Dahran",
  ],
  Somalia: [
    "Mogadishu",
    "Hargeisa",
    "Burao",
    "Kismayo",
    "Bossaso",
    "Baidoa",
    "Galcaio",
    "Merca",
    "Balcad",
    "Berbera",
    "Jowhar",
    "Khadija",
    "Las Anod",
  ],
  Sudan: [
    "Khartoum",
    "Omdurman",
    "Port Sudan",
    "Nyala",
    "El Obeid",
    "Kassala",
    "Dongola",
    "Wad Madani",
    "El Fasher",
    "Juba",
    "Kadugli",
    "Damazin",
    "Rabak",
    "Beb Kermat",
    "Sinnar",
  ],
  Syria: [
    "Damascus",
    "Aleppo",
    "Homs",
    "Hama",
    "Latakia",
    "Deir ez-Zor",
    "Raqqa",
    "Tartus",
    "Idlib",
    "Daraa",
    "Qamishli",
    "Palmyra",
    "Hassakeh",
    "Zabadani",
    "Douma",
    "Hasaka",
  ],
  Tunisia: [
    "Tunis",
    "Sfax",
    "Sousse",
    "Kairouan",
    "Gabès",
    "Kairouan",
    "Monastir",
    "Bizerte",
    "Nabeul",
    "Tataouine",
    "Tozeur",
    "Mednine",
    "Mahdia",
    "Siliana",
    "Gafsa",
  ],
  UAE: [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al-Quwain",
    "Al Ain",
    "Khalifa City",
    "Dibba",
    "Al Ruwais",
    "Al Faqa",
    "Mirdif",
    "Jumeirah",
  ],
  Yemen: [
    "Sana'a",
    "Aden",
    "Taiz",
    "Al Hudaydah",
    "Ibb",
    "Dhamar",
    "Mukalla",
    "Marib",
    "Al Mukalla",
    "Rada'a",
    "Zabid",
    "Hajjah",
    "Sa'dah",
    "Al Bayda",
    "Shabwah",
    "Mareb",
  ],
};

for (key in arabCountriesCities) {
  document.querySelector("#country").innerHTML += `
    <option value="${key}">${key}</option>
`;
}

function addOptionToSelectCity() {
  const countrySelect = document.querySelector("#country").value;
  const cities = arabCountriesCities[countrySelect];

  document.querySelector("#city").innerHTML = "";
  document.querySelector("#city").innerHTML +=
    " <option value='' >Select City </option>";
  
  cities.map((c) => {
    document.querySelector("#city").innerHTML += `
        <option value="${c}">${c}</option>
    `;
  });
}

function handleFormSearch(e) {
  e.preventDefault();
  //  validation form search
  const country = document.querySelector("#country").value;
  const city = document.querySelector("#city").value;

  if (country === "" || city === "") {
    return false;
  }

  getTimesPayer(country, city);
}

// fetch data
async function getTimesPayer(country, city) {
  document.querySelector(".container-card").innerHTML = "";
  try {
  const res = await fetch(
    `https://api.aladhan.com/v1/timingsByCity/today?city=${city}&country=${country}`
  );
   if (!res.ok) {
      throw new Error("Failed to fetch prayer times.");
    }

  const data = await res.json();
    
    if (data.code !== 200) {
      throw new Error("Invalid data received from the API.");
    }
  localStorage.setItem("timings", JSON.stringify(data.data.timings));
  localStorage.setItem(
    "info",
    JSON.stringify({ country: country, city: city })
  );
  }catch(err){
    console.error('Error',err)
    document.querySelector(".container-card").innerHTML = `
      <p>There was an error fetching prayer times. Please try again later.</p>
    `;
  }

  addInfoCountryAndCity();

  readTimingsFromLocalStorage();
}

function readTimingsFromLocalStorage() {
  const timings = JSON.parse(localStorage.getItem("timings"));
  for (item in timings) {
    if (["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].find((el) => el === item)) {
      document.querySelector(".container-card").innerHTML += `
              <div class="card">
                 <h4>${item}</h4>
                 <h3>${timings[item]}</h3>
               </div>
            `;

      if (
        new Date().getHours() + ":" + new Date().getMinutes() ===
        timings[item]
      ) {
        audioCallToPrayer();
      }
    }
  }
}

readTimingsFromLocalStorage();

// add inforamtion about prayer times country and city
function addInfoCountryAndCity() {
  const info = JSON.parse(localStorage.getItem("info"));
 if(info){
   const {country , city} = info
  document.querySelector(".info").innerHTML = `
     Country is <span> ${country}</span>  ,And city is <span>${city}</span> 
  `;
 }
}
addInfoCountryAndCity();

// handle play the call to prayer
function audioCallToPrayer() {
  const audio = document.getElementById("audio");
  audio.play();
}

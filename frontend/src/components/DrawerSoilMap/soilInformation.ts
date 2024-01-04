export interface StateSoilInformation
{
    [isoCode: string]:{
        name?: string;
        description?: string;
        link1?: string;
        link2?: string;
        link3?: string
    }
}

const soilInformation: StateSoilInformation = {
    'IN-AP': {
      name: 'Andhra Pradesh',
      description:
        "Andhra Pradesh is characterized by predominantly red soils, rich in iron oxides, which are conducive to growing crops like groundnuts and millets. Additionally, laterite soils are prevalent in the Eastern Ghats region, influencing the vegetation and agricultural practices in hilly terrains.",
    },
    'IN-AR': {
      name: 'Arunachal Pradesh',
      description:
        "Arunachal Pradesh displays a diverse range of soil types. Forest soils, found in abundance, are associated with the state's dense vegetation, supporting a variety of plant species. Mountain soils dominate the higher elevations, impacting the region's unique ecosystems and agricultural patterns.",
    },
    'IN-AS': {
      name: 'Assam',
      description:
        "The fertile plains of Assam owe their productivity to alluvial soils, deposited by the Brahmaputra River. These soils are ideal for growing tea, the state's major cash crop. Additionally, riverine soils along the Brahmaputra contribute to the region's agricultural diversity.",
    },
    'IN-BR': {
      name: 'Bihar',
      description:
        "Bihar's Gangetic plains are primarily covered by alluvial soils, offering fertile ground for a variety of crops such as rice, wheat, and sugarcane. The state also features clayey soils, influencing the cultivation of crops that benefit from moisture retention and good drainage.",
    },
    'IN-CT': {
      name: 'Chhattisgarh',
      description:
        "Chhattisgarh exhibits a mix of red and yellow soils, often referred to as laterite soils, which are suitable for cultivating crops like rice, pulses, and oilseeds. The state's varied topography contributes to the diversity of soil types, impacting land use and agriculture.",
    },
    'IN-GA': {
      name: 'Goa',
      description:
        "Goa features laterite soils, which are well-drained and rich in iron. These soils influence the state's vegetation and support the cultivation of cashew nuts, a major agricultural product in the region. Additionally, red soils are found in certain areas, affecting agricultural practices.",
    },
    'IN-GJ': {
      name: 'Gujarat',
      description:
        "Gujarat is characterized by a combination of alluvial and black soils. The alluvial soils along the riverbanks contribute to the state's agricultural prosperity, while the black soils, known for their high fertility, are conducive to the cultivation of crops like cotton and groundnuts.",
    },
    'IN-HR': {
      name: 'Haryana',
      description:
        "The state of Haryana predominantly has alluvial soils, especially in the Yamuna-Ghaggar plain, making it highly suitable for growing crops such as wheat, rice, and sugarcane. Sandy soils are also present in some regions, affecting local agricultural practices.",
    },
    'IN-HP': {
      name: 'Himachal Pradesh',
      description:
        "Himachal Pradesh showcases diverse soil types, with mountain soils dominating the hilly terrains. These soils influence the region's unique flora and fauna. Brown soils are also prevalent, impacting agriculture in certain areas of the state.",
    },
    'IN-JH': {
      name: 'Jharkhand',
      description:
        "Jharkhand is characterized by a combination of red and yellow soils, often associated with laterite formations. These soils influence land use patterns and impact the cultivation of crops such as paddy, pulses, and oilseeds. The state's hilly areas contribute to the presence of forest soils.",
    },
    'IN-KA': {
      name: 'Karnataka',
      description:
        "Karnataka features a variety of soils, including laterite soils in the Western Ghats, red soils in the Deccan Plateau, and black soils in some northern regions. These soil types influence the cultivation of crops like coffee in the hilly areas, and cotton and millets in the plateau regions.",
    },
    'IN-KL': {
      name: 'Kerala',
      description:
        "Kerala's soils are predominantly lateritic and red, with high iron and aluminum content. These soils impact the state's lush vegetation and are suitable for crops like rubber, tea, and spices. Additionally, the coastal regions feature alluvial soils, influencing the cultivation of rice and other crops.",
    },
    'IN-MP': {
      name: 'Madhya Pradesh',
      description:
        "Madhya Pradesh exhibits a diverse range of soils, including black soils in the Malwa Plateau and parts of Bundelkhand, red and yellow soils in the Vindhyan and Satpura regions, and alluvial soils along the river valleys. These soil types contribute to the state's varied agricultural practices, supporting crops such as soybeans, wheat, and cotton.",
    },
    'IN-MH': {
      name: 'Maharashtra',
      description:
        "Maharashtra is known for its black soils, particularly in the Vidarbha region, which are highly fertile and suitable for cultivating crops like cotton and soybeans. Red and yellow soils are found in other parts of the state, influencing the cultivation of crops such as millets and pulses.",
    },
    'IN-MN': {
      name: 'Manipur',
      description:
        "Manipur's soils vary across the state, with alluvial soils in the valley areas and hill soils in the elevated regions. These soil types impact the state's agriculture, supporting the cultivation of crops like rice in the valleys and horticultural crops in the hills.",
    },
    'IN-ML': {
      name: 'Meghalaya',
      description:
        "Meghalaya features diverse soil types, including forest soils in the densely wooded areas and red and yellow soils in the plateau regions. These soils influence the state's agriculture and horticulture, supporting the cultivation of crops like potatoes, fruits, and spices.",
    },
    'IN-MZ': {
      name: 'Mizoram',
      description:
        "Mizoram's soils are characterized by forest soils in the hilly and densely forested areas and red and yellow soils in the plateau regions. These soil types impact the state's vegetation and agriculture, supporting the cultivation of crops such as rice, maize, and horticultural crops.",
    },
    'IN-NL': {
      name: 'Nagaland',
      description:
        "Nagaland exhibits a mix of hill soils and laterite soils, particularly in the hilly and mountainous areas. These soils influence the state's agriculture, supporting the cultivation of crops like rice, millets, and horticultural crops.",
    },
    'IN-OR': {
      name: 'Odisha',
      description:
        "Odisha is known for its alluvial soils, especially in the coastal plains, which are conducive to growing rice, pulses, and oilseeds. Red and yellow soils are also found in certain areas, influencing the cultivation of crops like millets and cotton.",
    },
    'IN-PB': {
      name: 'Punjab',
      description:
        "Punjab's fertile plains are primarily covered by alluvial soils, making the region highly suitable for growing crops such as wheat, rice, and sugarcane. The state's agricultural practices are significantly influenced by the presence of these soils.",
    },
    'IN-RJ': {
      name: 'Rajasthan',
      description:
        "Rajasthan's soils vary across the state, with desert soils in the arid regions and saline soils in some areas. These soil types impact the state's agriculture, influencing the cultivation of crops such as millets, oilseeds, and pulses, especially in the more arid regions.",
    },
    'IN-SK': {
      name: 'Sikkim',
      description:
        "Sikkim's soils are diverse, with forest soils in the densely wooded areas and mountain soils in the elevated regions. These soil types influence the state's unique ecosystems and agricultural practices, supporting the cultivation of crops like cardamom, ginger, and fruits.",
    },
    'IN-TN': {
      name: 'Tamil Nadu',
      description:
        "Tamil Nadu features a mix of red and black soils, particularly in the Deccan Plateau, which are suitable for growing crops like millets, pulses, and oilseeds. The state's coastal regions exhibit alluvial soils, impacting the cultivation of rice and other crops.",
    },
    'IN-TG': {
      name: 'Telangana',
      description:
        "Telangana's soils are predominantly red, with high iron content, especially in the Deccan Plateau. These soils influence the state's agriculture, supporting the cultivation of crops like cotton, red gram, and oilseeds.",
    },
    'IN-TR': {
      name: 'Tripura',
      description:
        "Tripura's soils vary, with alluvial soils in the plains and hill soils in the elevated regions. These soil types impact the state's agriculture, supporting the cultivation of crops like rice, jute, and horticultural crops.",
    },
    'IN-UP': {
      name: 'Uttar Pradesh',
      description:
        "Uttar Pradesh's Gangetic plains are primarily covered by alluvial soils, providing fertile ground for a variety of crops such as wheat, rice, and sugarcane. Clayey soils are also present, influencing local agricultural practices.",
    },
    'IN-UT': {
      name: 'Uttarakhand',
      description:
        "Uttarakhand exhibits diverse soil types, with alluvial soils in the river valleys and mountain soils in the elevated regions. These soils impact the state's agriculture and horticulture, supporting the cultivation of crops like rice, wheat, and fruits.",
    },
    'IN-WB': {
      name: 'West Bengal',
      description:
        "West Bengal is known for its fertile alluvial soils, especially in the Gangetic plains, which support the cultivation of rice, jute, and sugarcane. The state's agricultural practices are significantly influenced by the presence of these soils.",
    },
  };
  
  export default soilInformation;
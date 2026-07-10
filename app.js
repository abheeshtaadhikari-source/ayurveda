const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let ayurvedhas = [
    {
        name: "Tulsi",
        image: "https://images.pexels.com/photos/29657646/pexels-photo-29657646.jpeg",
        uses: ["Cold & cough", "Fever", "Immunity building"],
        benefits: ["Antibacterial", "Rich in antioxidants", "Relieves stress"]
    },
    {
        name: "Ginger",
        image: "https://images.pexels.com/photos/33930747/pexels-photo-33930747.jpeg",
        uses: ["Nausea", "Sore throat", "Indigestion"],
        benefits: ["Reduces inflammation", "Boosts immunity", "Improves digestion"]
    },
    {
        name: "Turmeric",
        image: "https://images.pexels.com/photos/6104651/pexels-photo-6104651.jpeg",
        uses: ["Wound healing", "Joint pain", "Common cold"],
        benefits: ["Anti-inflammatory", "Natural antiseptic", "Purifies blood"]
    },
    {
        name: "Clove",
        image: "https://images.pexels.com/photos/6087276/pexels-photo-6087276.jpeg",
        uses: ["Toothache", "Bad breath", "Cough"],
        benefits: ["Numbing effect", "Fights bacteria", "Improves digestion"]
    },
    {
        name: "Ajwain",
        image: "https://images.pexels.com/photos/6102604/pexels-photo-6102604.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Stomach gas", "Indigestion", "Acidity"],
        benefits: ["Instant relief from bloating", "Improves appetite", "Relieves asthma symptoms"]
    },
    {
        name: "Black Pepper",
        image: "https://images.pexels.com/photos/5988689/pexels-photo-5988689.jpeg",
        uses: ["Throat infection", "Chest congestion", "Weight management"],
        benefits: ["Enhances nutrient absorption", "Improves gut health", "Detoxifies the body"]
    },
    {
        name: "Cardamom",
        image: "https://images.pexels.com/photos/6086300/pexels-photo-6086300.jpeg",
        uses: ["Detoxification", "Bad breath", "Digestive issues"],
        benefits: ["Lowers blood pressure", "Cooling effect", "Rich in antioxidants"]
    },
    {
        name: "Cinnamon",
        image: "https://images.pexels.com/photos/15388238/pexels-photo-15388238.jpeg",
        uses: ["Blood sugar balance", "Cold prevention", "Metabolism boost"],
        benefits: ["Strong antioxidant", "Heart healthy", "Reduces insulin resistance"]
    },
    {
        name: "Coriander Seeds",
        image: "https://images.pexels.com/photos/5988179/pexels-photo-5988179.jpeg",
        uses: ["Body heat reduction", "Digestion", "Thyroid health"],
        benefits: ["Diuretic properties", "Lowers cholesterol", "Cooling nature"]
    },
    {
        name: "Cumin",
        image: "https://images.pexels.com/photos/19974811/pexels-photo-19974811.jpeg",
        uses: ["Digestion flatulence", "Iron deficiency", "Weight loss"],
        benefits: ["Promotes digestion", "Rich source of iron", "Reduces free radicals"]
    },
    {
        name: "Mint",
        image: "https://images.pexels.com/photos/32756463/pexels-photo-32756463.jpeg",
        uses: ["Headache", "IBS symptoms", "Skin irritation"],
        benefits: ["Soothes stomach", "Instant freshness", "Improves alertness"]
    },
    {
        name: "Fennel Seeds",
        image: "https://images.pexels.com/photos/5988041/pexels-photo-5988041.jpeg",
        uses: ["Mouth freshener", "Stomach cramps", "Eyesight improvement"],
        benefits: ["Reduces bloating", "Regulates blood pressure", "Purifies blood"]
    },
    {
        name: "Garlic",
        image: "https://images.pexels.com/photos/29640700/pexels-photo-29640700.jpeg",
        uses: ["High blood pressure", "Earache", "Chronic cough"],
        benefits: ["Highly nutritious", "Combats sickness", "Improves cholesterol levels"]
    },
    {
        name: "Fenugreek",
        image: "https://images.pexels.com/photos/11579290/pexels-photo-11579290.jpeg",
        uses: ["Diabetes management", "Hair fall", "Lactation support"],
        benefits: ["Reduces hair thinning", "Controls glucose levels", "Improves metabolism"]
    },
    {
        name: "Amla",
        image: "https://images.pexels.com/photos/34928286/pexels-photo-34928286.jpeg",
        uses: ["Hair graying", "Immunity depletion", "Acid reflux"],
        benefits: ["Extremely rich in Vitamin C", "Anti-aging properties", "Improves skin health"]
    },
    {
        name: "Neem",
        image: "https://images.pexels.com/photos/12643734/pexels-photo-12643734.jpeg",
        uses: ["Acne & dandruff", "Skin allergies", "Deworming"],
        benefits: ["Powerful blood purifier", "Anti-fungal", "Excellent for oral hygiene"]
    },
    {
        name: "Honey",
        image: "https://images.pexels.com/photos/5634212/pexels-photo-5634212.jpeg",
        uses: ["Sore throat", "Dry skin", "Weight management"],
        benefits: ["Natural energy booster", "Heals wounds quickly", "Suppresses nighttime coughs"]
    },
    {
        name: "Licorice",
        image: "https://images.pexels.com/photos/18530136/pexels-photo-18530136.jpeg",
        uses: ["Hyperacidity", "Throat irritation", "Mouth ulcers"],
        benefits: ["Protects stomach lining", "Expectorant action", "Boosts respiratory health"]
    },
    {
        name: "Ashwagandha",
        image: "https://images.pexels.com/photos/37614041/pexels-photo-37614041.jpeg",
        uses: ["Insomnia", "Physical weakness", "Anxiety"],
        benefits: ["Adaptogenic herb", "Restores stamina", "Regulates cortisol levels"]
    },
    {
        name: "Giloy",
        image: "https://images.pexels.com/photos/38180247/pexels-photo-38180247.jpeg",
        uses: ["Chronic fever", "Platelet recovery", "Arthritis"],
        benefits: ["Immunomodulator", "Improves liver function", "Reduces toxic waste"]
    }
];

app.get('/', (request, response) => {
    response.json(ayurvedhas);
});

app.get('/:name', (request, response) => {
    let name = request.params.name.toLowerCase();
    let ayurvedha = ayurvedhas.find((item) => item.name.toLowerCase() === name);
    if (ayurvedha) {
        return response.json(ayurvedha);
    }
    return response.json({ "Message": "Medicine not found" });
});

app.listen(3000, () => {
    console.log('localhost:3000');
});
const express = require('express');

const app = express();

app.use(express.json());

let ayurvedhas = [
    {
        name: "Tulsi",
        image: "https://images.pexels.com/photos/4038868/pexels-photo-4038868.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Cold & cough", "Fever", "Immunity building"],
        benefits: ["Antibacterial", "Rich in antioxidants", "Relieves stress"]
    },
    {
        name: "Ginger",
        image: "https://images.pexels.com/photos/1337585/pexels-photo-1337585.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Nausea", "Sore throat", "Indigestion"],
        benefits: ["Reduces inflammation", "Boosts immunity", "Improves digestion"]
    },
    {
        name: "Turmeric",
        image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Wound healing", "Joint pain", "Common cold"],
        benefits: ["Anti-inflammatory", "Natural antiseptic", "Purifies blood"]
    },
    {
        name: "Clove",
        image: "https://images.pexels.com/photos/2288691/pexels-photo-2288691.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
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
        image: "https://images.pexels.com/photos/2288693/pexels-photo-2288693.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Throat infection", "Chest congestion", "Weight management"],
        benefits: ["Enhances nutrient absorption", "Improves gut health", "Detoxifies the body"]
    },
    {
        name: "Cardamom",
        image: "https://images.pexels.com/photos/2085352/pexels-photo-2085352.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Detoxification", "Bad breath", "Digestive issues"],
        benefits: ["Lowers blood pressure", "Cooling effect", "Rich in antioxidants"]
    },
    {
        name: "Cinnamon",
        image: "https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Blood sugar balance", "Cold prevention", "Metabolism boost"],
        benefits: ["Strong antioxidant", "Heart healthy", "Reduces insulin resistance"]
    },
    {
        name: "Coriander Seeds",
        image: "https://images.pexels.com/photos/4197434/pexels-photo-4197434.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Body heat reduction", "Digestion", "Thyroid health"],
        benefits: ["Diuretic properties", "Lowers cholesterol", "Cooling nature"]
    },
    {
        name: "Cumin",
        image: "https://images.pexels.com/photos/6102598/pexels-photo-6102598.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Digestion flatulence", "Iron deficiency", "Weight loss"],
        benefits: ["Promotes digestion", "Rich source of iron", "Reduces free radicals"]
    },
    {
        name: "Mint",
        image: "https://images.pexels.com/photos/3577391/pexels-photo-3577391.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Headache", "IBS symptoms", "Skin irritation"],
        benefits: ["Soothes stomach", "Instant freshness", "Improves alertness"]
    },
    {
        name: "Fennel Seeds",
        image: "https://images.pexels.com/photos/4197438/pexels-photo-4197438.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Mouth freshener", "Stomach cramps", "Eyesight improvement"],
        benefits: ["Reduces bloating", "Regulates blood pressure", "Purifies blood"]
    },
    {
        name: "Garlic",
        image: "https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["High blood pressure", "Earache", "Chronic cough"],
        benefits: ["Highly nutritious", "Combats sickness", "Improves cholesterol levels"]
    },
    {
        name: "Fenugreek",
        image: "https://images.pexels.com/photos/4197441/pexels-photo-4197441.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Diabetes management", "Hair fall", "Lactation support"],
        benefits: ["Reduces hair thinning", "Controls glucose levels", "Improves metabolism"]
    },
    {
        name: "Amla",
        image: "https://images.pexels.com/photos/36029/aroniabeere-black-chokeberry-fruits-berries.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Hair graying", "Immunity depletion", "Acid reflux"],
        benefits: ["Extremely rich in Vitamin C", "Anti-aging properties", "Improves skin health"]
    },
    {
        name: "Neem",
        image: "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Acne & dandruff", "Skin allergies", "Deworming"],
        benefits: ["Powerful blood purifier", "Anti-fungal", "Excellent for oral hygiene"]
    },
    {
        name: "Honey",
        image: "https://images.pexels.com/photos/3421920/pexels-photo-3421920.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Sore throat", "Dry skin", "Weight management"],
        benefits: ["Natural energy booster", "Heals wounds quickly", "Suppresses nighttime coughs"]
    },
    {
        name: "Licorice",
        image: "https://images.pexels.com/photos/8455351/pexels-photo-8455351.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Hyperacidity", "Throat irritation", "Mouth ulcers"],
        benefits: ["Protects stomach lining", "Expectorant action", "Boosts respiratory health"]
    },
    {
        name: "Ashwagandha",
        image: "https://images.pexels.com/photos/4054224/pexels-photo-4054224.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Insomnia", "Physical weakness", "Anxiety"],
        benefits: ["Adaptogenic herb", "Restores stamina", "Regulates cortisol levels"]
    },
    {
        name: "Giloy",
        image: "https://images.pexels.com/photos/5911001/pexels-photo-5911001.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        uses: ["Chronic fever", "Platelet recovery", "Arthritis"],
        benefits: ["Immunomodulator", "Improves liver function", "Reduces toxic waste"]
    }
];

app.get('/', (request, response) => {
    response.json(ayurvedhas);
});

app.get('/:name', (request, response) => {
    let name = request.params.name;
    let ayurvedha = ayurvedhas.find((item) => item.name === name);
    if (ayurvedha) {
        response.json(ayurvedha);
    }
    response.json({ "Message": "not found" });
});

app.listen(3000, () => {
    console.log('localhost:3000');
});
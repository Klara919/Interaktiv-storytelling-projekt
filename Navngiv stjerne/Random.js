const navne = [
"Aldebaran",
"Betelgeuse",
"Sirius",
"Vega",
"Rigel",
"Polaris",
"Antares",
"Capella",
"Procyon",
"Deneb",
"Altair",
"Spica",
"Arcturus",
"Fomalhaut",
"Bellatrix",
"Regulus",
"Castor",
"Pollux",
"Alnitak",
"Alnilam",
"Mintaka",
"Canopus",
"Mirach",
"Alhena",
"Saiph",
"Dubhe",
"Merak",
"Phecda",
"Megrez",
"Alioth"

];

function generateName() {
    const randomIndex = Math.floor(Math.random() * navne.length);
    const randomName = navne[randomIndex];
    document.getElementById("navn").textContent = randomName;
}
"use strict"

let mother = {
    name: "Ines",
    age: 56,
    occupation: "Caregiver",
    hobbies: ["cooking", "Watching dramatic shows"],
    favoriteColor: "Pink",
    birthplace: "Obregon, Mexico",
    favoriteFoods: ["Tacos", "Salad", "Tortas", "Dairy Queen ice cream" ],
    favoriteSayings: "Como los quiero",
    giftIdeas: ["a house", "a very nice vacation" ]
};

const messages = [
    "Thank you for always being so supportive",
    "You are my biggest inspiration.",
    "Thank you for always having my back even when I made bad decision.",
    "Thank you for teaching me how to be a kind loving person through you",
    "Thank you for always making time for all of us",
    "You are the best and kindest mom/person I have ever met and would love to be just like you"
];

    

  function momMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
}
  




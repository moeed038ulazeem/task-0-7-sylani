// Create a pet object
let pet = {
    name: "Fido",
    type: "Dog",
    age: 2,
    happiness: 50,
    hunger: 50,
    
    feed: function() {
        this.hunger = Math.max(0, this.hunger - 20);
        updatePetInfo();
    },
    
    play: function() {
        this.happiness = Math.min(100, this.happiness + 20);
        updatePetInfo();
    },
    
    agePet: function() {
        this.age += 1;
        this.happiness = Math.max(0, this.happiness - 5);
        this.hunger = Math.min(100, this.hunger + 10);
        updatePetInfo();
    }
};

// Function to update pet info on the webpage
function updatePetInfo() {
    document.getElementById('pet-name').textContent = pet.name;
    document.getElementById('pet-type').textContent = pet.type;
    document.getElementById('pet-age').textContent = pet.age;
    document.getElementById('pet-happiness').textContent = pet.happiness;
    document.getElementById('pet-hunger').textContent = pet.hunger;
}

// Set up button event listeners
document.getElementById('feed-button').addEventListener('click', () => pet.feed());
document.getElementById('play-button').addEventListener('click', () => pet.play());
document.getElementById('age-button').addEventListener('click', () => pet.agePet());

// Initialize pet info on the page
updatePetInfo();

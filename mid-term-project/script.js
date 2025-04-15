const story = {
    start: {
        text: "You and Alex stand outside Vault X, ready to steal the Eternal Prism. Alex looks at you with determination, saying, 'We can do this together. Just trust me.' Do you go in disguised or force your way in?",
        choices: [
            { text: "Go Undercover", next: "undercover", image: "undercover.jpg" },
            { text: "Break in Forcefully", next: "forceful", image: "forceful.jpg" }
        ],
        image: "start.jpg"
    },
    undercover: {
        text: "You sneak in as a security officer while Alex stays back to monitor. 'I’ll keep an eye on things,' Alex assures you. As you reach the diamond, you hear a faint click behind you—the vault door starts sealing shut!",
        choices: [
            { text: "Escape before it closes", next: "narrow_escape", image: "narrow_escape.jpg" },
            { text: "Investigate the noise", next: "investigate", image: "investigate.jpg" }
        ],
        image: "undercover.jpg"
    },
    narrow_escape: {
        text: "You dive through the closing vault door just in time. Catching your breath, you check the security feed. To your shock, Alex is the one who triggered the lockdown!",
        choices: [
            { text: "Confront Alex", next: "confront", image: "confront.jpg" },
            { text: "Find another way to outsmart him", next: "outsmart", image: "outsmart.jpg" }
        ],
        image: "narrow_escape.jpg"
    },
    forceful: {
        text: "You blast open the vault. Alex shouts, 'Hurry, we need to grab it before anyone notices!' You grab the Eternal Prism, but suddenly, you hear footsteps approaching.",
        choices: [
            
            { text: "Stand your ground", next: "stand_ground", image: "stand_ground.jpg" }
        ],
        image: "forceful.jpg"
    },
    investigate: {
        text: "You turn around to find Alex standing at the vault entrance, a smirk on his face. 'Did you really think I’d let you take it?'",
        choices: [
            { text: "Distract Alex and grab the diamond", next: "distract", image: "distract.jpg" },
            { text: "Use a hidden gadget to turn the tables", next: "gadget", image: "betrayal.jpg" }
        ],
        image: "betrayal.jpg"
    },
    distract: {
        text: "You toss a smoke bomb, momentarily blinding Alex. Using the chaos, you grab the diamond and dash toward the exit.",
        choices: [
            { text: "Escape through the ventilation shaft", next: "vent_escape", image: "vent_escape.jpg" },
            { text: "Fight Alex head-on", next: "fight", image: "fight.jpg" }
        ],
        image: "distract.jpg"
    },
    gadget: {
        text: "You press a hidden button on your wristwatch, activating an EMP that disables Alex’s weapon. He stumbles in shock as you seize control.",
        choices: [
            { text: "Knock Alex out and take the diamond", next: "knockout", image: "emp.jpg" },
            { text: "Convince Alex to join you instead", next: "convince", image: "emp.jpg" }
        ],
        image: "emp.jpg"
    },
    vent_escape: {
        text: "You crawl through the narrow air ducts, avoiding security. Finally, you drop into the getaway car with the diamond in hand!",
        choices: [ 
            { text: "Drive away with the diamond", next: "escape_win", image: "escape_win.jpg" },
        ],
        image: "vent_escape.jpg"
    },
    fight: {
        text: "You engage Alex in a brutal hand-to-hand fight. Despite his tricks, you overpower him and take back what's yours!",
        choices: [
            { text: "Finish him off", next: "knockout", image: "fight.jpg" },
        ],
        image: "fight.jpg"
    },
    knockout: {
        text: "A swift punch knocks Alex unconscious. With no time to waste, you grab the diamond and vanish into the night.",
        choices: [
            { text: "Escape with the diamond", next: "escape_win", image: "escape_win.jpg" },
            { text: "Listen to what Alex has to say", next: "leave_alone", image: "leave_alone.jpg" }
        ],
        image: "knockout.jpg"
    },
    leave_alone: {
        text: "You decide to leave Alex behind, but as you walk away, you hear him whisper, 'You’ll regret this.'",
        choices: [ 
            { text: "Escape with the diamond and let the guards kill him", next: "emotional_win", image: "emotional_win.jpg" },
        ],
        image: "leave_alone.jpg"
    },
    emotional_win: {
        text: "You escape with the diamond, but the weight of your betrayal lingers. You’ve won, but at what cost?",
        choices: [],
        image: "emotional_win.jpg"
    },

    convince: {
        text: "You remind Alex of your history together, making him hesitate. Torn by guilt, he helps you escape and you split the prize.",
        choices: [
            { text: "Share the diamond", next: "alliance", image: "alliance.jpg" },
            { text: "Double-cross him later", next: "next_time", image: "next time.jpg" }
        ],
        image: "convince.jpg"
    },
    alliance: {
        text: "You and Alex escape together, but you know you can never fully trust him again. The diamond is yours, but at what cost?",
        choices: [],
        image: "alliance.jpg"
    },
   next_time: { 
        text: "You decide to double-cross Alex later. As you escape, you can’t shake the feeling that this partnership was a mistake.",
        choices: [],
        image: "next time.jpg"
    },

    outsmart: {
        text: "You quickly devise a plan to outsmart Alex. Using the security system to your advantage, you create a diversion and slip past him.",
        choices: [
            { text: "Grab the diamond and escape", next: "vent_escape", image: "vent_escape.jpg" },
            { text: "Set a trap for Alex", next: "trap_alex", image: "trap.jpg" }
        ],
        image: "outsmart.jpg"
    },
    trap_alex: {
        text: "You set a clever trap using the security system. When Alex approaches, he triggers the alarm, giving you the upper hand.",
        choices: [
            { text: "Confront him now", next: "confront", image: "confront.jpg" },
            { text: "Escape while he's distracted", next: "vent_escape", image: "vent_escape.jpg" }
        ],
        image: "trap.jpg"
    },
    stand_ground: {
        text: "You stand your ground, ready to fight. But as the door swings open, you see Alex standing there, a gun in hand.",
        choices: [
            { text: "Fight Alex", next: "fight", image: "fight.jpg" },
            { text: "Try to talk him down", next: "convince", image: "convince.jpg" }
        ],
        image: "betrayal.jpg"
    },
    search_alex: {
        text: "You find Alex in a side room, looking at the diamond with a glint in their eye. 'I could be rich, you know,' he says, smirking.",
        choices: [
            { text: "Join him", next: "join", image: "join.jpg" },
            { text: "Confront him", next: "confront", image: "confront.jpg" }
        ],
        image: "search.jpg"
    },
     
    confront: {
        text: "You find Alex with the diamond. 'Did you really think I’d let you take it?' he says, revealing their true intentions.",
        choices: [
            { text: "Fight Alex", next: "fight", image: "fight.jpg" },
            { text: "Try to reason with him", next: "convince", image: "convince.jpg" }
        ],
        image: "confront.jpg"
    },
    join: {
        text: "You decide to join Alex. Together, you escape with the diamond, but you know you can never trust him again.",
        choices: [],
        image: "escape_win.jpg"
    },
    escape_win: {
        text: "You escape with proof of Alex’s betrayal. The diamond is with you, mission is a success... at a cost.",
        choices: [],
        image: "escape_win.jpg"
    },
}



// Function to start the game
function startGame() {
    document.getElementById("game-container").style.display = "block"; // Show the game container
    document.getElementById("start-button").style.display = "none"; // Hide the start button
    showStory("start"); // Show the initial story
}

function showStory(storyKey) {
    const scene = story[storyKey];
    document.getElementById("story-text").innerText = scene.text; // Update story text
    document.getElementById("scene-image").src = scene.image; // Update image for the current scene
    
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ""; // Clear previous choices

    if (scene.choices.length > 0) {
        // If choices exist, create buttons
        document.getElementById("restart").style.display = "none"; // Hide restart button
        document.getElementById("addendum-button").style.display = "none"; // Hide Addendum button
        scene.choices.forEach(choice => {
            const button = document.createElement("button");
            button.innerText = choice.text;
            button.onclick = () => {
                showStory(choice.next); // Show the next story based on the choice
            };
            choicesDiv.appendChild(button);
        });
    } else {
        // If no choices left (end of story), show Addendum & Restart buttons
        document.getElementById("restart").style.display = "block";
        document.getElementById("addendum-button").style.display = "block";
    }
}

// Function to show the addendum modal with dynamic content
function showAddendum() {
    const addendumContent = document.getElementById("addendum-content");
    
    // Add dynamic text based on the last story shown
    addendumContent.innerHTML = `
        <p><strong>Final Outcome:</strong> ${document.getElementById("story-text").innerText}</p>
        <p>Addendum: The Making of Mission Impossible - The Diamond Deception

The design and development of Mission Impossible: The Diamond Deception were driven by a desire to create an interactive and immersive experience inspired by espionage and heist storytelling. The project incorporates narrative-driven decision-making, visual engagement, and a retro gaming aesthetic to enhance player immersion.

Font Choices and Aesthetic Design

The fonts were deliberately selected to evoke a sense of adventure and nostalgia. Rubik Pixels was chosen to give a modern pixelated effect, reminiscent of classic spy video games, while Press Start 2P reinforces the retro gaming atmosphere. This combination ensures that players feel a blend of both old-school arcade charm and modern storytelling.

The dark, gradient background (from #0f2027 to #2c5364) conveys secrecy, danger, and mystery, which are integral to the story’s theme. The color contrast between the text and the background improves readability while maintaining a stealthy aesthetic.

Game Process and Structure

The game follows a branching narrative where player decisions shape the outcome. Each decision leads to different scenarios, creating a dynamic and replayable experience. This structure ensures that no two playthroughs are the same, encouraging players to explore multiple storylines.

To enhance immersion, images are tied to key moments, reinforcing the gravity of choices made. The use of an interactive button system simplifies navigation, making the game accessible and intuitive.

The Addendum Mechanism

An innovative feature of the game is the Addendum Button, which appears at the end of each playthrough. This provides an epilogue, reflecting on the final choice and encouraging players to reconsider their decisions. A hidden double-click function further deepens the experience by introducing an alternate perspective on the character Alex.</p>
        <p>Would you make the same choice again?</p>
    `;
    

    document.getElementById("addendum-modal").style.display = "block";
}

// Function to close the addendum modal
function closeAddendum() {
    document.getElementById("addendum-modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addendum-button").addEventListener("dblclick", function () {
        const addendumContent = document.getElementById("addendum-content");
        addendumContent.innerHTML += `<p style="color: red;">A hidden truth: What if Alex was never the enemy?</p>`;
    });
});


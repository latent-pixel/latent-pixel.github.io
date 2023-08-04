// Skills data
var skills = [
    { name: "Skill 1", rating: 4 },
    { name: "Skill 2", rating: 3 },
    { name: "Skill 3", rating: 5 },
    // Add more skills as needed...
];

// Function to create skill rating elements
function createSkillRating(skill) {
    var skillRating = document.createElement("div");
    skillRating.classList.add("skill-rating");

    var skillName = document.createElement("h3");
    skillName.textContent = skill.name;
    skillRating.appendChild(skillName);

    var skillRatingBar = document.createElement("div");
    skillRatingBar.classList.add("skill-rating-bar");
    skillRatingBar.style.width = (skill.rating * 20) + "%";
    skillRating.appendChild(skillRatingBar);

    return skillRating;
}

// Create skill ratings and add them to the skill ratings container
var skillRatingsContainer = document.getElementById("skill-ratings");
skills.forEach(function(skill) {
    var skillRating = createSkillRating(skill);
    skillRatingsContainer.appendChild(skillRating);
});

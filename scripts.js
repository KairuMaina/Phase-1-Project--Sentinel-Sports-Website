// Fetch data from the local JSON file or API
async function fetchMatches() {
    try {
        console.log("Fetching matches...");
        const response = await fetch("http://localhost:3000/matches");
        if (!response.ok) {
            throw new Error("Failed to fetch matches");
        }
        const data = await response.json();
        console.log("Matches fetched:", data);
        displayMatches(data);
    } catch (error) {
        console.error("Error fetching matches:", error);
        alert("Failed to load matches. Please try again later.");
    }
}

// Display the matches dynamically
function displayMatches(matches) {
    const container = document.getElementById("matches-container");
    container.innerHTML = ""; // Clear previous matches

    matches.forEach(match => {
        const matchDiv = document.createElement("div");
        matchDiv.classList.add("card", "mb-3");

        matchDiv.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${match.homeTeam} vs ${match.awayTeam}</h5>
                <p class="card-text">Date: ${new Date(match.date).toLocaleString()}</p>
                <button class="btn btn-warning place-bet-btn" data-match-id="${match.id}">Place Bet</button>
            </div>
        `;
        container.appendChild(matchDiv);
    });

    // Add event listeners to "Place Bet" buttons
    const placeBetButtons = document.querySelectorAll(".place-bet-btn");
    placeBetButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const matchId = parseInt(event.target.getAttribute("data-match-id"));
            updateBettingSection(matchId, matches);
        });
    });
}


// Handle placing a bet
function placeBet() {
    const selectedTeam = document.querySelector('input[name="team"]:checked');
    const betAmount = document.getElementById("bet-amount").value;

    if (!selectedTeam || !betAmount) {
        alert("Please select a team and enter a valid bet amount!");
        return;
    }

    alert(`Bet placed on ${selectedTeam.value} with an amount of $${betAmount}!`);
}

// Handle search functionality
function search() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const matches = document.querySelectorAll(".card");
    matches.forEach(match => {
        const matchTitle = match.querySelector(".card-title").textContent.toLowerCase();
        if (matchTitle.includes(searchTerm)) {
            match.style.display = "block";
        } else {
            match.style.display = "none";
        }
    });
}

// Fetch matches when the page loads
window.onload = () => {
    fetchMatches();

    // Attach event listener to "Place Bet" button
    const placeBetButton = document.getElementById("place-bet-btn");
    if (placeBetButton) {
        placeBetButton.addEventListener("click", placeBet);
    }

    // Attach event listener to the search button
    document.querySelector(".btn-warning").addEventListener("click", search);
};

// Update the betting section with the selected match details
function updateBettingSection(matchId, matches) {
    console.log("Selected Match ID:", matchId);  // Log the matchId passed in
    console.log("All Matches:", matches);  // Log all available matches

    // Debugging: Print the types of match.id and matchId
    console.log("matchId type:", typeof matchId);
    console.log("match.id type:", typeof matches[0]?.id);

    // Ensure both IDs are compared as strings (if they are strings)
    const match = matches.find(m => String(m.id) === String(matchId));

    console.log("Match Found:", match);

    if (!match) {
        console.error("Match not found! Match ID:", matchId);  // Log the error
        alert("Match not found!");  // Alert user if no match is found
        return;
    }

    // Update match title
    const matchTitleElement = document.getElementById("match-title");
    matchTitleElement.textContent = `Upcoming Match: ${match.homeTeam} vs ${match.awayTeam}`;

    // Update team options
    const teamSelectionContainer = document.getElementById("team-selection-container");
    const teamOptionsElement = document.getElementById("team-options");

    teamOptionsElement.innerHTML = `
        <div class="form-check">
            <input class="form-check-input" type="radio" name="team" id="team-${match.homeTeam}" value="${match.homeTeam}">
            <label class="form-check-label" for="team-${match.homeTeam}">
                ${match.homeTeam}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="team" id="team-${match.awayTeam}" value="${match.awayTeam}">
            <label class="form-check-label" for="team-${match.awayTeam}">
                ${match.awayTeam}
            </label>
        </div>
    `;

    // Show team selection container
    teamSelectionContainer.style.display = "block";
}


// Handle placing a bet
function placeBet() {
    const selectedTeam = document.querySelector('input[name="team"]:checked');
    const betAmount = document.getElementById("bet-amount").value;

    // Check if the user has selected a team and entered a valid bet amount
    if (!selectedTeam || !betAmount || betAmount <= 0) {
        alert("Please select a team and enter a valid bet amount!");
        return;
    }

    // Create a message displaying the bet details
    const betDetailsMessage = `Bet placed on ${selectedTeam.value} with an amount of $${betAmount}!`;

    // Display the confirmation message
    const betStatus = document.getElementById("bet-status");
    betStatus.innerHTML = betDetailsMessage;
    betStatus.style.display = "block";  // Show the bet status message

    // Optionally, disable the "Place Bet" button after placing the bet
    const placeBetButton = document.getElementById("place-bet-btn");
    placeBetButton.disabled = true;

    // Clear inputs after placing the bet (optional)
    document.getElementById("bet-amount").value = "";
    document.querySelectorAll('input[name="team"]').forEach(input => input.checked = false);

    // Allow the user to place another bet after a brief timeout
    setTimeout(resetBettingSection, 2000);  // 2 seconds timeout before allowing another bet
}

// Reset betting section to allow placing a new bet
function resetBettingSection() {
    // Hide the bet status message
    const betStatus = document.getElementById("bet-status");
    betStatus.style.display = "none";  // Hide the bet status message

    // Enable the "Place Bet" button again
    const placeBetButton = document.getElementById("place-bet-btn");
    placeBetButton.disabled = false;

    // Clear the team selection and bet amount input
    document.getElementById("bet-amount").value = "";
    document.querySelectorAll('input[name="team"]').forEach(input => input.checked = false);
}

// Add event listener to "Place Bet" button
document.getElementById("place-bet-btn").addEventListener("click", placeBet);


// Initialize an array to store placed bets
let betHistory = [];

// Handle placing a bet
function placeBet() {
    const selectedTeam = document.querySelector('input[name="team"]:checked');
    const betAmount = document.getElementById("bet-amount").value;

    // Check if the user has selected a team and entered a valid bet amount
    if (!selectedTeam || !betAmount || betAmount <= 0) {
        alert("Please select a team and enter a valid bet amount!");
        return;
    }

    // Store the placed bet
    const betDetails = {
        team: selectedTeam.value,
        amount: betAmount
    };

    // Add the bet to the bet history
    betHistory.push(betDetails);

    // Display the bet status message
    displayBetHistory();

    // Optionally, disable the "Place Bet" button after placing the bet (if you want)
    const placeBetButton = document.getElementById("place-bet-btn");
    placeBetButton.disabled = true;

    // Clear the inputs
    document.getElementById("bet-amount").value = "";
    document.querySelectorAll('input[name="team"]').forEach(input => input.checked = false);
}

// Display the bet history
function displayBetHistory() {
    const betHistoryContainer = document.getElementById("bet-history-container");
    betHistoryContainer.innerHTML = ""; // Clear the previous bet history

    // Iterate through all bets and display them
    betHistory.forEach((bet, index) => {
        const betDiv = document.createElement("div");
        betDiv.classList.add("bet-history-item", "mb-2");

        betDiv.innerHTML = `
            <div class="alert alert-info">
                <strong>Bet ${index + 1}:</strong> Placed on ${bet.team} with an amount of $${bet.amount}
            </div>
        `;
        betHistoryContainer.appendChild(betDiv);
    });

    // Show the bet history container if there are any placed bets
    if (betHistory.length > 0) {
        betHistoryContainer.style.display = "block";
    } else {
        betHistoryContainer.style.display = "none";
    }

    // Re-enable the "Place Bet" button to allow for additional bets
    const placeBetButton = document.getElementById("place-bet-btn");
    placeBetButton.disabled = false;
}

// Attach event listener to "Place Bet" button
document.getElementById("place-bet-btn").addEventListener("click", placeBet);

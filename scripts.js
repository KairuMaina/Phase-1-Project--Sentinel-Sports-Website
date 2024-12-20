function placeBet() {
    // Get the selected team
    const selectedTeam = document.querySelector('input[name="team"]:checked').value;
    
    // Get the bet amount
    const betAmount = document.getElementById("bet-amount").value;

    // Check if the bet amount is valid
    if (betAmount <= 0 || isNaN(betAmount)) {
        alert("Please enter a valid bet amount.");
        return;
    }

    // Display the bet result
    const betResult = document.getElementById("bet-result");
    betResult.innerHTML = `You have placed a bet of ${betAmount} on ${selectedTeam}.`;

    // Additional logic to process the bet can go here (e.g., send data to the server)
}

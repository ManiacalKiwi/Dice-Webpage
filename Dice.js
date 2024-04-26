function rollDice() {
    const results = [];
    const dice = {d4: 4, d6: 6, d8: 8, d10: 10, d12: 12, d20: 20}; // Map dice ids to their maximum values
    let total = 0;

    for (let die in dice) {
        const count = parseInt(document.getElementById(die).value) || 0; // Get the number of each die to roll
        for (let i = 0; i < count; i++) {
            const roll = Math.floor(Math.random() * dice[die]) + 1; // Roll the die
            results.push(`${roll} (${die})`); // Add result
            total += roll; // Sum the result
        }
    }

    // Update the results text with individual rolls and the total
    document.getElementById('diceResults').textContent = "Results: " + results.join(', ') + " | Total: " + total;
    // Optionally update the textarea to show rolled values and the total
    document.getElementById('formula').value = "Rolled: " + results.join(', ') + " | Total: " + total;
}

// Optional: If you want to roll dice when Enter is pressed in the textarea
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formula').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission
            rollDice();
        }
    });
});

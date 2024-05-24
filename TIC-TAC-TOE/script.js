// script.js
document.addEventListener("DOMContentLoaded", () => {//MENEI ADDEVENT DALA JISE JESE HEI FUNTION CALL HOJAYE
    let boxes = document.querySelectorAll(".box");
    let resetBtn = document.getElementById("reset");
    let newGameBtn = document.getElementById("new-btn");
    let msgContainer = document.querySelector(".msg-container");
    let msg = document.getElementById("winner");

    // Initialize turn variable
    let turn0 = true;

    // Define winning patterns
    const winningPattern = [
        [0, 1, 2], [0, 3, 6], [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8], [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    // Add event listeners to each box
//     boxes.forEach(...): Iterates over each box and adds a click event listener.
// Inside the event listener:
// Sets the inner text of the box to "0" or "X" depending on the current turn.
// Toggles the turn0 variable to switch turns.
// Disables the clicked box to prevent further clicks.
// Calls checkWinner() to check if the current move resulted in a win.
    boxes.forEach((box, index) => {
        box.addEventListener("click", () => {
            console.log("box was clicked");

            if (turn0) {
                box.innerText = "0";
                turn0 = false;
            } else {
                box.innerText = "X";
                turn0 = true;
            }
            box.disabled = true;
            checkWinner();
        });
    });

    // Disable all boxes
    // disableBoxes(): Disables all boxes to prevent any moves after the game ends.
    const disableBoxes = () => {
        boxes.forEach(box => {//wahi function hai jo aapka hai bass foreach loop use kiya
            box.disabled = true;
        });
    };

    // Enable all boxes and reset text
    
// enableBoxes(): Enables all boxes and clears their inner text to reset the game. Also hides the winner message.
    const enableBoxes = () => {
        boxes.forEach(box => {
            box.disabled = false;
            box.innerText = "";
        });
        msgContainer.classList.add("hide");
    };

    // Show the winner message
    // showWinner(winner): Updates the winner message, shows the message container, and disables all boxes.
    const showWinner = (winner) => {
        msg.innerHTML = `Congratulations! Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    };

    // Check for a winner: YAHA CHANGE HAI
//     checkWinner(): Iterates over all winning patterns and checks if any pattern is satisfied (i.e., all three boxes in the pattern contain the same non-empty value).
// If a winning pattern is found, it calls showWinner() with the winner's symbol.
    const checkWinner = () => {
        for (let pattern of winningPattern) {
            //aapke valei console vala hata diya menei
            let [a, b, c] = pattern;
            let posVal1 = boxes[a].innerText;//pattern hata diya andhar seah
            let posVal2 = boxes[b].innerText;
            let posVal3 = boxes[c].innerText;

            if (posVal1 !== "" && posVal1 === posVal2 && posVal2 === posVal3) {//condition change kiya menei
                console.log("winner");
                showWinner(posVal1);
                return;
            }
        }
    };

    // Reset the game
    const resetGame = () => {
        turn0 = true;
        enableBoxes();
    };

    // Attach event listeners to the buttons
    newGameBtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);

    // Enable boxes when the page loads: BOXES VAPAS LOAD KARNE KEAH LIYE NAHI BHI KAROGE TOH CHALEGA
    window.onload = enableBoxes;
    // resetGame(): Resets the game state by setting turn0 to true and enabling all boxes.
// Event listeners for "New Game" and "RESET GAME" buttons to call resetGame() when clicked.
// window.onload = enableBoxes: Ensures the boxes are enabled and cleared when the page loads.
});

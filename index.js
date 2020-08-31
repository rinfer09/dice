document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        document.querySelector(".quotes").innerHTML = "Who wins?"
        let player1Number,player2Number;
        const interval = setInterval(() => {
            document.body.classList.toggle("background-change");
            player1Number = Math.floor(Math.random() * 6) + 1;
            player2Number = Math.floor(Math.random() * 6) + 1;

            const player1Dice = "dice" + player1Number + ".png";
            const player2Dice = "dice" + player2Number + ".png";

            document.querySelector(".img1").setAttribute("src", "images/" + player1Dice);
            document.querySelector(".img2").setAttribute("src", "images/" + player2Dice);

            
        }, 100)

        setTimeout(() => {
            clearInterval(interval)
            let quotes = ""
            if (player1Number > player2Number){
                quotes = "Player 1 Wins!";
            }else if (player1Number < player2Number){
                quotes = "Player 2 Wins!";
            }else{
                quotes = "Draw!"
            }

            document.querySelector(".quotes").innerHTML = quotes;
        },1000)

        
    }
})

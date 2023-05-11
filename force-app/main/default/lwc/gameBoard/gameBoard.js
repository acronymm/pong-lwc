import { LightningElement } from "lwc";

export default class GameBoard extends LightningElement {
    renderedCallback() {
        const mainDiv = this.template.querySelector(".gameboard");
        mainDiv.focus();
    }
    handleKeyPress(event) {
        event.stopPropagation();
        console.log(JSON.stringify(event, null, 2));
        console.log(event?.key);

        switch (event.key.toLowerCase()) {
            case "w":
                this.movePlayer1();
                break;
            default:
                break;
        }
    }

    movePlayer1(key) {
        const player1 = this.template.querySelector('[data-id="player1"]');
        if (key === "w") {
            player1.style.transform = "translateY(-10px)";
        }
    }
}

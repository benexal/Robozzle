import Phaser from "phaser";
import { config } from '../main.js';


export default class Game extends Phaser.Scene{
 
    preload(){
        this.load.image('voiture', 'src/images/voiture-robozzle.png');
        this.load.image('humain', 'src/images/human-robozzle.png');
        this.load.image('haut', 'src/images/up-arrow-upload_9661010.png');
    }
   
    create(){
        
        this.createCases()
        const instructionsSprite = this.add.sprite(100, 450, 'haut');

    }


    createCases(){
        const numberOfSquares = 10;
        const squareSize = 50;
        const startX = (config.width - (numberOfSquares * squareSize)) / 2;

        const squaresGroup = this.add.group();

        for (let i = 0; i < numberOfSquares; i++) {
        let squareColor = 0x0000ff; // Bleu par défaut

        if (i === numberOfSquares - 1) {
            squareColor = 0xffff00; // Jaune pour la dernière case
        }

        const square = this.add.rectangle(
            startX + i * squareSize,  // Position X
            config.height / 2,       // Position Y
            squareSize,              // Largeur du rectangle
            squareSize,              // Hauteur du rectangle
            squareColor              // Couleur du rectangle
        );

        // Ajoutez un contour autour de chaque case
        square.setStrokeStyle(2, 0x000000); // Épaisseur du trait de 2 pixels, couleur noire

        squaresGroup.add(square);
        }
    }


}
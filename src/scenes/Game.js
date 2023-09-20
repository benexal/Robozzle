import Phaser from "phaser";
import { config,numberOfSquares, squareSize, startX } from '../main.js';
import InstructionsScene from "./instructions";
 

export default class Game extends Phaser.Scene{
 
    preload(){
        this.voiture = this.load.image('voiture', 'voiture-robozzle.png');
        this.humain  = this.load.image('humain', 'human-robozzle.jpg');



    }
   
    create(){

        this.createCases()  

        this.voiture = this.add.image(startX + 6* squareSize, config.height / 2,'voiture');
        this.scene.start('InstructionsScene');
        //this.scene.add('InstructionsScene', InstructionsScene);

        
    }


    createCases(){
       

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
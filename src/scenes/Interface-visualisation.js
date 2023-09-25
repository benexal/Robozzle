import Phaser from "phaser";
import { config,numberOfSquares, squareSize, startX } from '../main.js';

export default class InterfaceVisualisation extends Phaser.Scene{

    preload(){
        this.load.image('voiture', 'voiture-robozzle.png');
        this.load.image('humain', 'humain-robozzle.png');
        

      
    }
    
    create(){

        this.scene.run('interfaceProgrammation')
        this.createCases()  
        this.placerlaVoiture()
       this.placerLesHumains()
    
      

        
    }


    createCases(){
       

        const squaresGroup = this.add.group();

        for (let i = 0; i < numberOfSquares; i++) {
        let squareColor = 0x093f96; // Bleu par défaut

        if (i === numberOfSquares - 1) {
            squareColor = 0xdde810; // Jaune pour la dernière case
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

        this.squaresGroup = squaresGroup.add(square);
        }

       
    }
    placerlaVoiture(){
        this.voiture = this.add.sprite(startX + 6* squareSize, config.height / 2,'voiture');
        this.voiture.setFlip(true, false);
        this.voiture.displayWidth = 45;
        this.voiture.displayHeight = 45;
    }
    placerLesHumains(){
        for (let i = 0; i < 5; i++){
            this.humain = this.add.image(startX + i* squareSize, config.height / 2+5,'humain');     
            this.humain.displayWidth = 30;
            this.humain.displayHeight = 30;
        }
       
    }


}
import Phaser from "phaser";
import { config, squareSize, startX,numberOfSquares } from '../main.js';

export default class interfaceProgrammation extends Phaser.Scene{

preload(){
    this.load.image('total-execution', 'total-execution.png');
    this.load.image('partial-execution', 'partial-execution.png');
    this.load.image('restart', 'restart.png');
    

}

create(){
    this.add.line(0,300,0,0,1600,0, 0x000000)
    this.creerLesCasesGrises()
    this.ajouterBouttonsExcécutions()
    this.redSquare = this.add.rectangle(100, 450, 40, 40, 0x454545); // Carré girs
    this.greenSquare = this.add.rectangle(140, 450, 40, 40, 0x259609); // Carré vert
    this.blueSquare = this.add.rectangle(180, 450, 40, 40, 0x093f96); // Carré bleu
    this.yellowSquare = this.add.rectangle(220, 450, 40, 40, 0xdde810); // Carré jaune    
}



creerLesCasesGrises(){
    const squaresGroup = this.add.group();

    for (let i = 0; i < 6; i++) {
     const grayBox= this.add.rectangle(
         startX + (2+ i)* squareSize,  // Position X
         350,                       // Position Y
         squareSize,              // Largeur du rectangle
         squareSize,              // Hauteur du rectangle
         0x888888              // Couleur du rectangle
     
         );
         grayBox.setStrokeStyle(1, 0x000000); // Épaisseur du trait de 1 pixels, couleur noire
         this.squaresGroup = squaresGroup.add(grayBox);
         grayBox.setInteractive(); // Rend le rectangle interactif pour le glisser-déposer
 
          
         this.input.setDraggable(grayBox);   // Écoutez les événements de glisser-déposer
 
         this.input.on('dragstart', (pointer, gameObject) => {
             // Code à exécuter lorsque le glisser-déposer commence
           });
         
           this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
             // Code à exécuter pendant le glisser-déposer
            
           });
       
           this.input.on('dragend', (pointer, gameObject) => {
             // Code à exécuter lorsque le glisser-déposer se termine
           });
 
     }
 
}

ajouterBouttonsExcécutions(){
    this.totalExecBoutton = this.add.sprite(700, 330,'total-execution');
    this.totalExecBoutton.displayHeight=30
    this.totalExecBoutton.displayWidth=30
    this.partialExecBoutton = this.add.sprite(700, 380,'partial-execution');
    this.partialExecBoutton.displayHeight=30
    this.partialExecBoutton.displayWidth=30
    this.restartBoutton = this.add.sprite(700, 430,'restart');
    this.restartBoutton.displayHeight=30
    this.restartBoutton.displayWidth=30
}


}
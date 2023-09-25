import Phaser from "phaser";
import { config, squareSize, startX,numberOfSquares } from '../main.js';

export default class interfaceProgrammation extends Phaser.Scene{

preload(){
    this.load.image('total-execution', 'total-execution.png');
    this.load.image('partial-execution', 'partial-execution.png');
    this.load.image('restart', 'restart.png');
    this.upButton = this.load.image('upButton', 'up-arrow-upload_9661010.png');
    this.leftButton = this.load.image('leftButton', 'left-arrow_10559346.png');
    this.rightButton = this.load.image('rightButton', 'right-arrow_9688251.png');
    this.errorButton = this.load.image('errorButton', 'close_8982958.png');

}

create(){
   this.add.line(0,300,0,0,1600,0, 0x000000)
   this.creerLesCasesGrises();
  // this.totalExecBoutton = this.add.sprite(700, 400,'total-execution');
   //this.totalExecBoutton.displayHeight=30
  // this.totalExecBoutton.displayWidth=30

      this.upButton = this.add.sprite(89, 408, 'upButton').setInteractive();
      this.upButton.displayWidth = 45;
      this.upButton.displayHeight = 45;  
  
      this.leftButton = this.add.sprite(50, 407, 'leftButton').setInteractive();
      this.leftButton.displayWidth = 45;
      this.leftButton.displayHeight = 45;       

      this.rightButton = this.add.sprite(130, 407, 'rightButton').setInteractive();
      this.rightButton.displayWidth = 45;
      this.rightButton.displayHeight = 45;

      this.errorButton = this.add.sprite(180, 480, 'errorButton').setInteractive();
      this.errorButton.displayWidth = 45;
      this.errorButton.displayHeight = 45;

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


}
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
      this.createGrayCases()
      this.addColorsInGrayCases()
      this.addMovementButton()
      this.addErrorButton()  
      this.ajouterBouttonsExcécutions()
      this.addColorsCases()
      this.clickColorCases()
      
      
  }



  createGrayCases(){
      const squaresGroup = this.add.group();

      for (let i = 0; i < 6; i++) {
      const grayBox= this.add.rectangle(
          startX + (2+ i)* squareSize,  // Position X
          350,                       // Position Y
          squareSize,              // Largeur du rectangle
          squareSize,              // Hauteur du rectangle
          0x888888              // Couleur du rectangle
      
          ).setInteractive().setStrokeStyle(1, 0x000000);
         
          this.squaresGroup = squaresGroup.add(grayBox);

    }
    

    
  }

  addColorsInGrayCases(){

    // this.squaresGroup.children.iterate((grayBox) => {
    //   grayBox.on('pointerdown', () => {
    //     if (this.selectedColor !== null) {
    //       if(this.selectedColor == 0x454545 ){
    //         grayBox.fillColor = 0x888888;
  
    //       }else{
    //         grayBox.fillColor = this.selectedColor;
    //       }
    //       // Définissez la couleur de la case sur la couleur sélectionnée
         
  
    //       // Changez la taille de la case pour qu'elle paraisse plus grande
    //       grayBox.setStrokeStyle(2, 0xffffff);
  
    //       // Désactivez la bordure des autres cases grises
    //       this.squaresGroup.children.iterate((child) => {
    //         if (child !== grayBox) {
    //           child.setStrokeStyle(1, 0x000000);
    //         }
    //       });
    //     }
    //   });
    // });


    this.squaresGroup.children.iterate((grayBox) => {
      grayBox.on('pointerdown', () => {
        if (this.selectedColor !== null) {
          if (this.selectedColor === 0x454545) {
            grayBox.fillColor = 0x888888;
          } else {
            grayBox.fillColor = this.selectedColor;
          }
    
          // Changez la taille de la case pour qu'elle paraisse plus grande
          grayBox.setStrokeStyle(2, 0xffffff);
    
          // Désactivez la bordure des autres cases grises
          this.squaresGroup.children.iterate((child) => {
            if (child !== grayBox) {
              child.setStrokeStyle(1, 0x000000); // Supprimez la bordure des autres cases
            }
          });
    
          // Attendez un court instant (par exemple, 200 ms) et réinitialisez la bordure
          setTimeout(() => {
            grayBox.setStrokeStyle(1, 0x000000);
          }, 200);
        }
      });
    });
    
  }

  ajouterBouttonsExcécutions(){
      this.totalExecBoutton = this.add.sprite(700, 340,'total-execution');
      this.totalExecBoutton.displayHeight=30
      this.totalExecBoutton.displayWidth=30
      this.partialExecBoutton = this.add.sprite(698, 380,'partial-execution');
      this.partialExecBoutton.displayHeight=30
      this.partialExecBoutton.displayWidth=30
      this.restartBoutton = this.add.sprite(695, 420,'restart');
      this.restartBoutton.displayHeight=30
      this.restartBoutton.displayWidth=30
  }

  addMovementButton(){
    this.upButton = this.add.sprite(89, 408, 'upButton').setInteractive();
    this.upButton.displayWidth = 40;
    this.upButton.displayHeight = 40;

    this.leftButton = this.add.sprite(50, 407, 'leftButton').setInteractive();
    this.leftButton.displayWidth = 40;
    this.leftButton.displayHeight = 40;
    
    this.rightButton = this.add.sprite(130, 407, 'rightButton').setInteractive();
    this.rightButton.displayWidth = 40;
    this.rightButton.displayHeight = 40;
  }

  addErrorButton(){
    this.errorButton = this.add.sprite(210, 470, 'errorButton').setInteractive();
        this.errorButton.displayWidth = 60;
        this.errorButton.displayHeight = 60;
  }

  addColorsCases(){

    const couleurParNom = {
      graySquare: 0x454545, // Carré gris
      greenSquare: 0x259609, // Carré vert
      blueSquare: 0x093f96, // Carré bleu
      yellowSquare: 0xdde810 // Carré jaune
    };
    
    let emplacement = 0
    // Créez et ajoutez les rectangles interactifs en utilisant le dictionnaire
    for (const nom in couleurParNom) {
      emplacement+=40
      if (couleurParNom.hasOwnProperty(nom)) {
        this[nom] = this.add.rectangle(emplacement, 470, 40, 40, couleurParNom[nom]).setInteractive();
      }
    }

    this.colorsByName = couleurParNom

  }

  clickColorCases(){
    
   // Déclarez une variable pour stocker la case précédemment cliquée
    this.previousCase = null;

  // Associez des gestionnaires d'événements aux rectangles interactifs
    for (const name in this.colorsByName) {
      const currentCase = this[name];

      currentCase.on('pointerdown', () => {
        // Cette fonction sera appelée lorsque la case est cliquée

        // Si la même case est cliquée deux fois, réinitialise la couleur sélectionnée et supprime la bordure
        if (this.previousCase === currentCase) {
          if (this.selectedColor === null) {
            // Si la couleur sélectionnée est nulle, définissez-la sur la couleur de la case
            this.selectedColor = this.colorsByName[name];
            currentCase.setStrokeStyle(4, 0xffffff); // Ajoutez une bordure blanche à la case actuelle
          } else {
            // Si la couleur sélectionnée est la même que la couleur de la case, réinitialisez la couleur et supprimez la bordure
            this.selectedColor = null;
            currentCase.setStrokeStyle(0, 0xffffff); // Supprimez la bordure
          }
        } else {
          // Sinon, désactivez les bordures de la case précédente
          if (this.previousCase) {
            this.previousCase.setStrokeStyle(0, 0xffffff); // Supprimez la bordure de la case précédente
          }

          // Activez la bordure de la case actuelle et mettez à jour la couleur sélectionnée
          this.selectedColor = this.colorsByName[name]; // Sélectionnez la nouvelle couleur
          currentCase.setStrokeStyle(4, 0xffffff); // Ajoutez une bordure blanche à la case actuelle
        }

        // Mettez à jour la case précédemment cliquée
        this.previousCase = currentCase;
        console.log(this.previousCase, currentCase);
        console.log(this.selectedColor.toString(16));
        
      });
    }
  }


}
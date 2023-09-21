import Phaser from 'phaser';

export default class InstructionsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'InstructionsScene' });
    }

    preload() {
        this.upButton = this.load.image('upButton', 'up-arrow-upload_9661010.png');
        this.leftButton = this.load.image('leftButton', 'left-arrow_10559346.png');
        this.rightButton = this.load.image('rightButton', 'right-arrow_9688251.png');
        this.errorButton = this.load.image('errorButton', 'error_3329336.png');
    }
   

    create() {
        this.upButton = this.add.sprite(89, 408, 'upButton').setInteractive();
        const nouvelleLargeur = this.upButton.width * 0.1; // 50% de la largeur d'origine
const nouvelleHauteur = this.upButton.height * 0.1; // 50% de la hauteur d'origine

this.upButton.setDisplaySize(nouvelleLargeur, nouvelleHauteur);

        this.leftButton = this.add.sprite(50, 407, 'leftButton').setInteractive();
        const newLargeur = this.leftButton.width * 0.1; // 50% de la largeur d'origine
const newHauteur = this.leftButton.height * 0.1; // 50% de la hauteur d'origine

this.leftButton.setDisplaySize(newLargeur, newHauteur);

        this.rightButton = this.add.sprite(130, 407, 'rightButton').setInteractive();
                const newLar = this.rightButton.width * 0.1; // 50% de la largeur d'origine
        const newHaut = this.rightButton.height * 0.1; // 50% de la hauteur d'origine

        this.rightButton.setDisplaySize(newLar, newHaut);

        this.errorButton = this.add.sprite(180, 480, 'errorButton').setInteractive();
        const newLa = this.errorButton.width * 0.1/2;
        const newHau = this.errorButton.height * 0.1/2;

        this.errorButton.setDisplaySize(newLa, newHau);





    }
}

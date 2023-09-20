import Phaser from 'phaser';

export default class InstructionsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'InstructionsScene' });
    }

    preload() {
        this.upButton = this.load.image('upButton', 'src/images/up-arrow-upload_9661010.png');
    }

    create() {
        this.upButton = this.add.sprite(100, 400, 'upButton').setInteractive();
    }
}

import Phaser from "phaser";
import TitleScreen from "./scenes/TitleScreen";
import Game from "./scenes/Game";
import InstructionsScene from "./scenes/instructions";



const config = {
    width : 800,
    height : 500,
    type: Phaser.AUTO,
    backgroundColor: '#cccaca',
    
}
export const numberOfSquares = 10;
export const squareSize = 50;
export const startX = (config.width - (numberOfSquares * squareSize)) / 2;

export { config };
const game = new Phaser.Game(config)

//game.scene.add('titlescreen', TitleScreen)
game.scene.add('game', Game)
game.scene.add('instructions', InstructionsScene)


//game.scene.start('titlescreen')
game.scene.start('game')
//game.scene.start('instructions')

// const instruction = new Phaser.Game(config);

// InstructionsScene.add('instructions', InstructionsScene )
// InstructionsScene.start('instructions')
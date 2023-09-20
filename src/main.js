import Phaser from "phaser";
import interfaceProgrammation from "./scenes/Interface-programmation";
import InterfaceVisualisation from "./scenes/Interface-visualisation";



const config = {
    width : 800,
    height : 500,
    type: Phaser.AUTO,
    backgroundColor: '#edeef0',
}
export const numberOfSquares = 10;
export const squareSize = 50;
export const startX = (config.width - (numberOfSquares * squareSize)) / 2;

export { config };
const game = new Phaser.Game(config)


game.scene.add('interfaceVisualisation', InterfaceVisualisation)
game.scene.add('interfaceProgrammation', interfaceProgrammation)
game.scene.start('interfaceVisualisation')


class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }

    preload() {
        this.load.image("background", "assets/background.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ship", "spritesheets/ship.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ship2", "spritesheets/ship2.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ship3", "spritesheets/ship3.png", {
            frameWidth: 16,
            frameHeight: 16
        });
    }

    create() {
        this.add.text(20, 20, "Loading Game...");
        this.scene.start("playGame");
    }
}
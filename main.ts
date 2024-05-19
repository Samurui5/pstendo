namespace SpriteKind {
    export const Fondo = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Fondo, function (sprite, location) {
	
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(15)
    controller.moveSprite(Selecciones)
    scene.setBackgroundColor(2)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(2)
    controller.moveSprite(Selecciones)
    scene.setBackgroundColor(15)
})
let Selecciones: Sprite = null
music.play(music.createSong(assets.song`de inicio sesión canción número 1`), music.PlaybackMode.LoopingInBackground)

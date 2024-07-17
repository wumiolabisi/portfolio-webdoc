export default function keyboardListeners() {
    alert(KeyboardEvent.key)
    if (KeyboardEvent.key == 'ArrowLeft') {
        alert('touche touchée left-gauche');
    }
    else if (KeyboardEvent.key == 'ArrowRight') {
        alert('touche touchée right-droite');
    }
}
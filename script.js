// Function to change the font style
function changeFont() {
    const fontSelect = document.getElementById('font-select').value;
    if (fontSelect === 'Chaucer') {
        document.body.style.fontFamily = "'Chaucer', serif";
    } else if (fontSelect === 'ComicSansMS') {
        document.body.style.fontFamily = "'Comic Sans MS', cursive";
    }
}

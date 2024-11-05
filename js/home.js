// funçao de curtir
let liked = false; // Variável de controle

function somarLike() {
    var likeElement = document.getElementById('like');
    var likeCount = parseInt(likeElement.innerText);

    if (!liked) {
        // Incrementa o like e adiciona o 'k'
        likeCount += 1;
        likeElement.innerText = likeCount + 'k';
        likeIcon.classList.add('liked'); // Adiciona a classe 'liked' para mudar a cor
        liked = true; // Marca como "curtido"
    } else {
        // Volta ao valor original 
        likeCount -= 1;
        likeElement.innerText = likeCount + 'k';
        likeIcon.classList.remove('liked'); //Remove
        liked = false; // Marca como "não curtido"
    }
}

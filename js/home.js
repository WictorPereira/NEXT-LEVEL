// funçao de curtir

function somarLike (){
    var likeElement = document.getElementById('like');
    var likeCount = parseInt(likeElement.innerText);
    likeCount += 1;
    
    likeElement.innerText = likeCount+'k';
}
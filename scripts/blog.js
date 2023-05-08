document.addEventListener("DOMContentLoaded", function () {
    displayArticle();
});



const displayArticle = async () => {
    console.log(window.location);
    fetch('../files/writings/articles.txt')
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error reading file:', error);
    });
}
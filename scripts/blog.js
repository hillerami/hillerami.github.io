window.addEventListener('DOMContentLoaded', () => {
  hideArticles();
});


const hideArticles = () => {
  var articles = document.getElementsByClassName("article");
  for (var i = 0; i < articles.length; i++) {
    articles[i].style.display = "none";
  }
}

const displayArticle = (articleId) => {
  // hide articles first then show selected article
  hideArticles();
  // Show the selected article
  var article = document.getElementById(articleId);
  article.style.display = "block";
}
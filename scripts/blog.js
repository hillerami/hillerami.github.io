window.addEventListener('DOMContentLoaded', () => {
  hideArticles();
});


const hideArticles = () => {
  const articleContainer = document.getElementsByClassName("article-container");
  articleContainer[0].style.visibility = "hidden";
  const articles = document.getElementsByClassName("article");
  for (var i = 0; i < articles.length; i++) {
    articles[i].style.display = "none";
  }
}

const displayArticle = (articleId) => {
  // hide articles first then show selected article
  hideArticles();
  const articleContainer = document.getElementsByClassName("article-container");
  articleContainer[0].style.visibility = "visible";
  // Show the selected article
  const article = document.getElementById(articleId);
  article.style.display = "block";
}
window.addEventListener('DOMContentLoaded', () => {
    const fileURL = '../files/writings/articles.txt'; // Change 'textfile.txt' to the name of your text file
    fetchFileContent(fileURL)
      .then((content) => {
        displayTextFileContent(content);
      })
      .catch((error) => {
        console.error('Error reading file:', error);
      });
  });
  
  function fetchFileContent(fileURL) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', fileURL, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  }
  
  function displayTextFileContent(content) {
    const lines = content.split('\n');
    const container = document.getElementById('content');
  
    lines.forEach((line) => {
      if (line.trim().length > 0) {
        const paragraph = document.createElement('p');
        paragraph.textContent = line.trim();
        container.appendChild(paragraph);
      }
    });
  }
  
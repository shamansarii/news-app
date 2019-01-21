$.ajax({
  url: `https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=2a4ccfa06976411caf75445335f4997a`,
  success: function(data) {
    console.log(data);
    for (i = 0; i < 7; i++) {
      document.querySelector(".news-story").innerHTML +=
      `
      <div id="info">
      <span class="news-image" style="background-image: url(${data.articles[i].urlToImage});"></span>   
      <div class="head-line">
      <h1> ${data.articles[i].title} </h1>           
      <p> ${data.articles[i].description}</p>
      </div>           
      </div>
      `
    }
  }
})
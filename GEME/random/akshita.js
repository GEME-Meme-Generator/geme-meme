//12d1cd05e03148d2a414c994ef486cbd
console.log("This is my index js file");

// Initialize the news api parameters
// let source = 'Hindustan Times';
let apiKey = 'd47ece9fa5814ff29f3d4d93441de7ca';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                        <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}"
                                data-parent="#newsAccordian">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank">Read more
                                        here</a> </div>
                            </div>
                        </div>`
            newsHtml +=news;
        });
        newsAccordian.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();

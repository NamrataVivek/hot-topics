// GET THE REFERENCES
const container = document.querySelector('.html-dynamic');
const links = document.querySelectorAll('.link');
let url = './partials/articles.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL 
const loadContent = (urlFeed) => {
   /*
   IMPORTANT NOTES:
   loadContent RUNS EVERY TIME A LINK IS CLICKED.
   loadContent REQUIRES THE INPUT. THIS INPUT IS
   THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
   EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
   THE UPDATED PATH TO THE REQUESTED CONTENT.
   */

   // RUN THE fetch(urlFeed).then().then().catch()
   fetch(urlFeed)
      .then((response) => {
         if (response.ok) {
            return response.text();
         }
      })
      .then((data) => {
        container.innerHTML = data;
      })
      .catch((err) => {
         console.log('Error');
      })

// CLOSE YOUR FUNCTION loadContent HERE
};

// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = (event) => {
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   event.preventDefault();

   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   let urlFeed = event.target.getAttribute('href');

   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.
   loadContent(urlFeed);

// CLOSE YOUR FUNCTION selectContent HERE
};

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (let i = 0; i < links.length; i ++) {
   links[i].addEventListener('click', selectContent);
}
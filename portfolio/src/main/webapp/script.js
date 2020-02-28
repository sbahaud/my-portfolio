// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/** Adds a random greeting to the page. */
function addRandomMovie() {
  const movies = [
    'Parasite', 'Foreigner', 'The Farewell', 'Downton Abbey', 'American factory'
  ];

  const movie = movies[Math.floor(Math.random() * movies.length)];
  const movieName = document.getElementById('movie-name');
  movieName.innerText = movie;
}

/** Displays comments fetched from the server. */
function showComments() {
  fetch('/data').then(response => response.json()).then((comments) => {
    const commentsElement = document.getElementById('comments');
    // Only add the comments if it isn't already there.
    if (!commentsElement.hasChildNodes()) {
      for (i = 0; i < comments.length; ++i) {
        commentsElement.appendChild(createDivElement(comments[i]));
      }
    }
  });
}

/** Creates a div element containing the given text. */
function createDivElement(text) {
  var divElement = document.createElement('div');
  divElement.classList.add('comment-text');
  divElement.innerText = text;
  return divElement;
}

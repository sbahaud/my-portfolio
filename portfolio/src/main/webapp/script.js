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
  fetch('/movies').then(response => response.json()).then((movie) => {
    const movieName = document.getElementById('movie-name');
    // URL is the attribute for "<a>"" tag href.
    movieName.URL = movie.link;
    movieName.innerText = movie.name;
  });
}

/** Displays comments fetched from the server. */
function showComments() {
  fetch('/data').then(response => response.json()).then((comments) => {
    console.log('showComments');
    const containerElement = document.getElementById('comments');
    for (i = 0; i < comments.length; ++i) {
      addComment(containerElement, comments[i]);
    }
  });
}

/** Adds a comment block to the given container element. */
function addComment(containerElement, comment) {
  // Create a parent element for time & comment text
  let element = containerElement.appendChild(
      createElement('div', 'comment-container', ''));

  element.appendChild(createElement('span', 'comment-time', comment.timestamp));
  element.appendChild(createElement('span', 'comment-text', comment.comment));
}

/** Creates a div element containing the given text. */
function createElement(elementType, className, text) {
  let element = document.createElement(elementType);
  element.classList.add(className);
  if (text != '') {
    element.innerText = text;
  }
  return element;
}

const cdb = {
  "ox": {
    "color": "red",
    "name": "Ox Bellows",
    "alt": "flash",
    "init": [4, 2, 2, 2],
    "speed": [2, 2, 2, 3, 4, 5, 5, 6],
    "might": [4, 5, 5, 6, 6, 7, 8, 8],
    "sanity": [2, 2, 3, 4, 5, 5, 6, 7],
    "knowledge": [2, 2, 3, 3, 5, 5, 6, 6]
  },
  "flash": {
    "color": "red",
    "name": "Darrin \"Flash\" Williams",
    "alt": "ox",
    "init": [4, 2, 2, 2],
    "speed": [4, 4, 4, 5, 6, 7, 7, 8],
    "might": [2, 3, 3, 4, 5, 6, 6, 7],
    "sanity": [1, 2, 3, 4, 5, 5, 5, 7],
    "knowledge": [2, 3, 3, 4, 5, 5, 5, 7]
  },
  "jenny": {
    "color": "purple",
    "name": "Jenny LeClerc",
    "alt": "heather",
    "init": [3, 2, 4, 2],
    "speed": [2, 3, 4, 4, 4, 5, 6, 8],
    "might": [3, 4, 4, 4, 4, 5, 6, 8],
    "sanity": [1, 1, 2, 4, 4, 4, 5, 6],
    "knowledge": [2, 3, 3, 4, 4, 5, 6, 8]
  },
  "heather": {
    "color": "purple",
    "name": "Heather Granville",
    "alt": "jenny",
    "init": [2, 2, 2, 4],
    "speed": [3, 3, 4, 5, 6, 6, 7, 8],
    "might": [3, 3, 3, 4, 5, 6, 7, 8],
    "sanity": [3, 3, 3, 4, 5, 6, 6, 6],
    "knowledge": [2, 3, 3, 4, 5, 6, 7, 8]
  },
  "peter": {
    "color": "green",
    "name": "Peter Akimoto",
    "alt": "brandon",
    "init": [3, 2, 3, 2],
    "speed": [3, 3, 3, 4, 6, 6, 7, 7],
    "might": [2, 3, 3, 4, 5, 5, 6, 8],
    "sanity": [3, 4, 4, 4, 5, 6, 6, 7],
    "knowledge": [3, 4, 4, 5, 6, 7, 7, 8]
  },
  "brandon": {
    "color": "green",
    "name": "Brandon Jaspers",
    "alt": "peter",
    "init": [3, 2, 2, 3],
    "speed": [3, 4, 4, 4, 5, 6, 7, 8],
    "might": [2, 3, 3, 4, 5, 6, 6, 7],
    "sanity": [3, 3, 3, 4, 5, 6, 7, 8],
    "knowledge": [1, 3, 3, 5, 5, 6, 6, 7]
  },
  "father": {
    "color": "white",
    "name": "Father Rhinehardt",
    "alt": "professor",
    "init": [2, 2, 4, 3],
    "speed": [2, 3, 3, 4, 5, 6, 7, 7],
    "might": [1, 2, 2, 4, 4, 5, 5, 7],
    "sanity": [3, 4, 5, 5, 6, 7, 7, 8],
    "knowledge": [1, 3, 3, 4, 5, 6, 6, 8]
  },
  "professor": {
    "color": "white",
    "name": "Professor Longfellow",
    "alt": "father",
    "init": [3, 2, 2, 4],
    "speed": [2, 2, 4, 4, 5, 5, 6, 6],
    "might": [1, 2, 3, 4, 5, 5, 6, 6],
    "sanity": [1, 3, 3, 4, 5, 5, 6, 7],
    "knowledge": [4, 5, 5, 5, 5, 6, 7, 8]
  },
  "vivian": {
    "color": "blue",
    "name": "Vivian Lopez",
    "alt": "madame",
    "init": [3, 2, 2, 3],
    "speed": [3, 4, 4, 4, 4, 6, 7, 8],
    "might": [2, 2, 2, 4, 4, 5, 6, 6],
    "sanity": [4, 4, 4, 5, 6, 7, 8, 8],
    "knowledge": [4, 5, 5, 5, 5, 6, 6, 7]
  },
  "madame": {
    "color": "blue",
    "name": "Madame Zostra",
    "alt": "vivian",
    "init": [2, 3, 2, 3],
    "speed": [2, 3, 3, 5 ,5, 6, 6, 7],
    "might": [2, 3, 3, 4, 5, 5, 5, 6],
    "sanity": [4, 4, 4, 5, 6, 7, 8, 8],
    "knowledge": [1, 3, 4, 4, 4, 5, 6, 6]
  },
  "zoe": {
    "color": "yellow",
    "name": "Zoe Ingstrom",
    "alt": "missy",
    "init": [3, 3, 2, 2],
    "speed": [4, 4, 4, 4, 5, 6, 8, 8],
    "might": [2, 2, 3, 3, 4, 4, 6, 7],
    "sanity": [3, 4, 5, 5, 6, 6, 7, 8],
    "knowledge": [1, 2, 3, 4, 4, 5, 5, 5]
  },
  "missy": {
    "color": "yellow",
    "name": "Missy Dubourde",
    "alt": "zoe",
    "init": [2, 3, 2, 3],
    "speed": [3, 4, 5, 6, 6, 6, 7, 7],
    "might": [2, 3, 3, 3, 4, 5, 6, 7],
    "sanity": [1, 2, 3, 4, 5, 5, 6, 7],
    "knowledge": [2, 3, 4, 4, 5, 6, 6, 6]
  }
}

export default cdb
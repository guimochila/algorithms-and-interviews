/* Harmless Rasom Note Algorithm 
  Time Complexity: O(n) + O(m) = O(n + m) Linear Time Complexity
*/
function harmlessRansomNote(noteText, magazineText) {
  const noteArray = noteText.split(' ');
  const magazineArray = magazineText.split(' ');
  const magazineObj = {};

  for (let word of magazineArray) {
    if (!magazineObj[word]) magazineObj[word] = 1;
    else magazineObj[word] += 1;
  }

  let noteIsPossible = true;

  for (let word of noteArray) {
    if (magazineObj[word]) {
      magazineObj[word] -= 1;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else noteIsPossible = false;
  }

  return noteIsPossible;
}

harmlessRansomNote(
  'this is a secret note for you from a secret admirer',
  'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited',
);

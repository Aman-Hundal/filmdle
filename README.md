# filmdle

### Gameplay

Version 1.00.

More features (such as a user analysis/statistics feature) and improved UI/UX design will be continuously added to improve the overall app gameplay/design.

Users have three guesses to guess the movie title and are given some background on what the movie can be. After each guess the user is also given input on how close they are to the answer (grey = the letter exists in the movie but is not in the correct spot, white = the letter does not exist in the movie title, black = the letter exists in the movie title and is in the correct spot). If the user guesses the correct movie title or if all 3 guesses are used (and movie is not correctly guessed), the user is locked out until next week where a new movie will be given.

App uses various CSS animations, and was developed using a MERN stack + TypeScript. The app also uses a 3rd party IMDB API and was deployed via AWS (Cloud Front + S3 + Route 53 for Frontend/Client and Elastic BeanStalk for Backend/API). 

You can find the app here: filmdle.ca.

### Screenshots
!["Start"](https://github.com/Aman-Hundal/filmdle/blob/main/docs/start.png?raw=true)
!["Guess"](https://github.com/Aman-Hundal/filmdle/blob/main/docs/play.png?raw=true)
!["End"](https://github.com/Aman-Hundal/filmdle/blob/main/docs/end.png?raw=true)

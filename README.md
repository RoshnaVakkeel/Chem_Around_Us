# CHEM AROUND US
A chemistry based informative Quiz for all. The inspiration is to provide a small challenge to the user and let them know how chemistry is everywhere. This quiz will leave them with some little extra knowledge and a smile! 
<br>
**So go ahead and have some fun!!**

## CONTENTS
<a href= "#ux">USER EXPERIENCE UX </a> 
- <a href= "#us"> User Stories </a>
    -  First Time Visitor Goals
    -  Returning Visitor Goals
-  <a href= "#design">Design</a>
    -  Quiz Structure
    -  Typography
    -  Wireframes
-  FEATURES
-  Landing Section
    -  Header
    -  Introduction Area
    -  Username Input Field
    -  Let's Begin Button
-  Quiz Section
    -  Question Area
    -  Answer Area
    -  Next Button
-  Result Area 
    -  Score Area
    -  Back to Quiz Button
    -  Rating
    -  Accessibility
- TECHNOLOGIES
-  Languages Used
-  Libraries Used
- ISSUES AND FIXES
- TESTING 
-  Validation
    -  W3C Validator (HTML)
    -  W3C Jigsaw Validator (CSS)
    -  JSHint (Javascript)
-  Performance
    -  Lighthouse Tool
    -  WAVE Accessibilty Tool
-  DEPLOYMENT
    -  Project Deployment on GitHub pages
    -  Forking Repository on GitHub 
    -  Cloning Repository on GitHub 
-  CREDITS
    -  Content
-  ACKNOWLEDGEMENTS

<br>

<h2 id = "ux"> USER EXPERIENCE UX </h2>
<h3 id = "us"> User Stories </h3>

<h3 id = "first-time">  First Time Visitor Goals</h3>
- As a student who is looking for a chemistry-based quiz, I want to solve challenges in the quiz that are inspired from academia, so that it helps me learn new concepts.
- As a student who is looking for a chemistry-based quiz, I want to be given one chance only to click an answer, so that it lets me assess myself well.
- As a student who is looking for a chemistry-based quiz, I want to get awarded for my efforts and my scores to be evaluated, so that I can assess how good I know the subject.
- As a student who is looking for a chemistry-based quiz, I wish to be able to rate the quiz, so that I can let the creator know how I felt.

<h3 id="returning"> Returning Visitor Goals</h3>
- As a student who is revisiting the quiz, I want to be encouraged to play the quiz again and again, so that they I can memorize the contents thoroghly.
- As a student who is revisiting the quiz, I want to retake the quiz if my scores are low, so that I can try again and learn the answers well.

- <h2 id = "design">  Design </h2>
    - <h3 id="quiz-struture">  Quiz Structure </h3>
    - <h3 id="typography"> Typography </h3>
    - <h3 id="wireframes"> Wireframes </h3>
<h2 id = "features"> FEATURES </h2>
- <h3 id= ""> Landing Section </h3>
    - <h3 id= ""> Header</h3>
    - <h3 id= ""> Introduction Area </h3>
    - <h3 id= ""> Username Input Field </h3>
    - <h3 id= ""> Let's Begin Button</h3>
- <h3 id= ""> Quiz Section</h3>
    - <h3 id= ""> Question Area</h3>
    - <h3 id= ""> Answer Area</h3>
    - <h3 id= ""> Next Button</h3>
- <h3 id= ""> Results Area </h3>
    - <h3 id= ""> Score Area</h3>
    - <h3 id= ""> Back to Quiz Button</h3>
    - <h3 id= ""> Rating</h3>
- <h3 id= ""> Accessibility</h3>

<h2 id=""></h2>TECHNOLOGIES
<h3 id= ""> Languages Used</h3>
This quiz is created  using HTML5, CSS3 and JavaScript.

<h3 id= ""> Libraries Used</h3>
- Git - For version control
- GitHub - To create my repositories, save and store my project files
- Google Fonts - To import fonts
- Font Awesome - For the iconography used in footer and links
- Google Dev Tools - To debug, troubleshoot and test features and adjust property values. Using the  Lighthouse extension installed in Chrome Browser, the performance report was generated.

<h2 id="">ISSUES AND FIXES </h2>
- Design Implementations
1. My initial plan involved superposing each page on one another. But as there are buttons in different pages, it got confusing and styling became very complicated, So, to remove the confusion, I introduced an additional page named "questions.html". From the index.html, the page was  linked using "action" tag. Clicking on which, user would directly get to the questions page. 
   After recieving Mentor's suggestion on keeping no additional page and it is better in the initial stage to have a single html file i.e. "index.html". I copied all the codes from "questions.html" and pasted it to the "index.html" file. But there was an overlap of the sections, as I had provided style to #landing {position: absolute;} earlier. That was then changed to  #landing {position: relative;} and the overlapping or super position was solved.

2. Another change from the initial designs implemented were: removal of "Previous" button as the function implementation was going to be difficult as the data storage step would be involved.

3. Styling of each div was made easy using flexboxes so that respinsiveness could be easily implemented. Initially all the divs were placed on the same page as per to document flow. In order to make it superpose one above the other. The class attribute named "hide" was introduced with display set to none to the sections "quiz-box" and "result". When we aspire to display the desired section, we could turn its display on using JavaScript "quizBox.classList.remove('hide'). The other method used to hide the previous section is "quizBox.style.display = 'none';".


<h2 id="">TESTING </h2>
- <h3 id= ""> Validation</h3>
    - <h3 id= ""> W3C Validator (HTML)</h3>
    - <h3 id= ""> W3C Jigsaw Validator (CSS)</h3>
    - <h3 id= ""> JSHint (Javascript)</h3>
- <h3 id="">Performance
    - <h3 id= ""> Lighthouse Tool</h3>
    - <h3 id= ""> WAVE Accessibilty Tool</h3>
- <h3 id="">DEPLOYMENT
     <h3 id= ""> Project Deployment on GitHub pages</h3>
     <h3 id= ""> Forking Repository on GitHub </h3>
     <h3 id= ""> Cloning Repository on GitHub </h3>

- ## CREDITS
<h3 id= ""> Content</h3>
- The fonts are imported from Google Fonts.
<h3 id= ""> Media</h3>
-

## ACKNOWLEDGEMENTS
I would like to acknowledge the following people who have helped me along the way in completing my second milestone project:

- My Mentor Jubril Akolade for his guidance, best suggestions and constant encouragement. I very much appreciate his coding tips that helped me solve really complicated challenges I faced.
- My fellow students for their company and encouragement. Kenan and Lane for guiding us through. Special thanks to Kristyna Maulerova for her encouragement and support.
- My tutors who helped me understand the concepts better.

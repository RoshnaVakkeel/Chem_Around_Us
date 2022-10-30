#### CHEM AROUND US
A chemistry based informative Quiz for all. The inspiration is to provide a small challenge to the user and let them know how chemistry is everywhere. This quiz will leave them with some little extra knowledge and a smile! So go ahead and have some fun!!

## CONTENTS

<a href= "#ux">USER EXPERIENCE UX </a> 
- <a href= "#us"> User Stories </a>
    -  First Time Visitor Goals
    -  Returning Visitor Goals
-  Design
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

### First Time Visitor Goals
- As a student who is looking for a quiz, I want to solve challenges in the quiz that are inspired from academia, so that it helps me learn new concepts.
- As a student who is looking for a quiz, I want to get awarded for my efforts and my scores to be evaluated, so that I can assess how good I know the subject.

### Returning Visitor Goals
- As a student who is looking for a quiz, I want to be encouraged to play the quiz again and again, so that they I can memorize the contents thoroghly.


- ## Design
    - ### Quiz Structure
    - ### Typography
    - ### Wireframes
## FEATURES
- ### Landing Section
    - ### Header
    - ### Introduction Area
    - ### Username Input Field
    - ### Let's Begin Button
- ### Quiz Section
    - ### Question Area
    - ### Answer Area
    - ### Next Button
- ### Results Area 
    - ### Score Area
    - ### Back to Quiz Button
    - ### Rating
- ### Accessibility

## TECHNOLOGIES
### Languages Used
This quiz is created  using HTML5, CSS3 and JavaScript.

### Libraries Used
- Git - For version control
- GitHub - To create my repositories, save and store my project files
- Google Fonts - To import fonts
- Font Awesome - For the iconography used in footer and links
- Google Dev Tools - To debug, troubleshoot and test features and adjust property values. Using the  Lighthouse extension installed in Chrome Browser, the performance report was generated.

## ISSUES AND FIXES
- Design Implementations
1. My initial plan involved superposing each page on one another. But as there are buttons in different pages, it got confusing and styling became very complicated, So, to remove the confusion, I introduced an additional page named "questions.html". From the index.html, the page was  linked using <a> tag. Clicking on which, user would directly get to the questions page. 
   After recieving Mentor's suggestion on keeping no additional page and it is better in the initial stage to have a single html file i.e. "index.html". I copied all the codes from "questions.html" and pasted it to the "index.html" file. But there was an overlap of the sections, as I had provided style to #landing {position: absolute;} earlier. That was then changed to  #landing {position: relative;} and the overlapping or super position was solved.

2. Another change from the initial designs implemented were: removal of "Previous" button as the function implementation was going to be difficult as the data storage step would be involved.

3. Styling of each div was made easy using flexboxes so that respinsiveness could be easily implemented. Initially all the divs were placed on the same page as per to document flow. In order to make it superpose one above the other. The class attribute named "hide" was introduced with display set to none to the sections "quiz-box" and "result". When we aspire to display the desired section, we could turn its display on using JavaScript "quizBox.classList.remove('hide'). The other method used to hide the previous section is "quizBox.style.display = 'none';".


## TESTING 
- ### Validation
    - ### W3C Validator (HTML)
    - ### W3C Jigsaw Validator (CSS)
    - ### JSHint (Javascript)
- ## Performance
    - ### Lighthouse Tool
    - ### WAVE Accessibilty Tool
- ## DEPLOYMENT
     ### Project Deployment on GitHub pages
     ### Forking Repository on GitHub 
     ### Cloning Repository on GitHub 

- ## CREDITS
### Content
- The fonts are imported from Google Fonts.
### Media
-

## ACKNOWLEDGEMENTS
I would like to acknowledge the following people who have helped me along the way in completing my second milestone project:

- My Mentor Jubril Akolade for his guidance, best suggestions and constant encouragement. I very much appreciate his coding tips that helped me solve really complicated challenges I faced.
- My fellow students for their company and encouragement. Kenan and Lane for guiding us through. Special thanks to Kristyna Maulerova for her encouragement and support.
- My tutors who helped me understand the concepts better.


/*  
    const form = document.getElementById('survey-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      let score = 0;
      const questions = form.querySelectorAll('input[type="radio"]');
      
      questions.forEach(function(question) {
        if (question.checked && question.value === 'yes') {
          score += 2;
        } else {
          score += 1;
        }
      });
      
      alert(`Your total score is ${score}`);
    });
 */

/*

  const form = document.getElementById("survey-form");
  const submitButton = form.querySelector("input[type=submit]");
  
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    const unansweredQuestions = [];
    const questions = form.querySelectorAll("input[type=radio]");
    
    questions.forEach((question) => {
      const groupName = question.name;
      
      if (!form.querySelector(`input[name=${groupName}]:checked`)) {
        unansweredQuestions.push(groupName);
      }
    });
    
    if (unansweredQuestions.length > 0) {
      const message = `Please answer the following questions: ${unansweredQuestions.join(", ")}`;
      alert(message);
    } else {
      calculateScore();
    }
  });
      


    function calculateScore() {
      const questions = document.querySelectorAll("input[type=radio]");
      let score = 0;
      
      questions.forEach((question) => {
        if (question.checked) {
          if (question.value === "yes") {
            score += 2;
          } else if (question.value === "no") {
            score += 1;
          }
        }
      });
      
      alert("Your score is: " + score)
      console.log(`Your score is: ${score}`);
      // You can add code here to display the score in the HTML
    }

*/




const form = document.getElementById("survey-form");
  const submitButton = form.querySelector("input[type=submit]");
  
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
 
/*
  function checkAnswered() {
    var unansweredQuestions = [];
    const questions = form.querySelectorAll("input[type=radio]");
    for (var i = 0; i < questions.length; i++) {
      var radioButtons = questions[i].getElementsByTagName("input");
      if (!radioButtons[0].checked && !radioButtons[1].checked) {
        unansweredQuestions.push(questions[i].textContent);
      }
    }
    return unansweredQuestions;
  }  
*/

    const unansweredQuestions = [];
    var questions = form.querySelectorAll("input[type=radio]");
    
/*
    questions.forEach((question) => {
      const groupName = question.name;
      
      if (!form.querySelector(`input[name=${groupName}]:checked`)) {
        unansweredQuestions.push(groupName);
      }
    });
*/

    for (var i = 0; i < questions.length; i += 2) {
      var question = questions[i];
      var groupName = question.name;
      if (!form.querySelector(`input[name=${groupName}]:checked`)) {
        unansweredQuestions.push(groupName);
      }
    }


    if (unansweredQuestions.length > 0) {
      const message = `${unansweredQuestions.join(", ")}`;
      alert("يرجى الأجابة على الأسئلة التالية: \n" + message);
    } else {
      calculateScore();
    }
});



function calculateScore() {
  const questions = document.querySelectorAll("input[type=radio]:checked");
  let score = 0;

  questions.forEach((question) => {
    if (question.value === "yes") {
      score += 2;
    } else if (question.value === "no") {
      score += 1;
    }
  });

  alert("نسبة الرهاب الإجتماعي لديك هي:  " + score + "/64")
  console.log(`Your score is: ${score}`);
  // You can add code here to display the score in the HTML
}

function clearAllFields() {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'radio') {
      inputs[i].checked = false;
    }
  }
}

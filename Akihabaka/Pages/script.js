function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var correct = 0;


    if (question1 == "dix-sept ans") {
        correct++;
}
    if (question2 == "Hiroyuki") {
        correct++;
}   
    if (question3 == "Guaken x Fuusa") {
        correct++;
}
    if (question4 == "shonen") {
        correct++;
}
    if (question5 == "Shibusen") {
        correct++;
}
    if (question6 == "Kaizuka Inaho") {
        correct++;
}
    if (question7 == "un pouvoir") {
        correct++;
}
    if (question8 == "trois") {
        correct++;
}
    if (question9 == "des frères et soeurs") {
        correct++;
}
    if (question10 == "des titans") {
        correct++;
}

    
    var pictures = ["ressource/giphy (1).gif", "ressource/giphy (2).gif", "ressource/giphy.gif"];
    var messages = ["bravo, c'est un sans-faute!", "tu es doué(e) mais ce n'est pas assez...", "tu ne veux pas recommencer ?"];
    var score;

    if (correct > -1 && correct < 6) {
        score = 2;
    }

    if (correct > 5 && correct < 10) {
        score = 1;
    }

    if (correct == 10) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "Tu as " + correct + " réponses correctes";
    document.getElementById("picture").src = pictures[score];
    window.scrollTo(0 ,0);
    }
    
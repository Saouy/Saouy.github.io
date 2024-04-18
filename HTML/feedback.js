function toggleFeedbackOptions() {
    var feedbackOptions = document.getElementById("feedbackOptions");
    if (feedbackOptions.style.display === "none") {
        feedbackOptions.style.display = "block";
    } else {
        feedbackOptions.style.display = "none";
    }
}

function showAlert(type) {
    if (type === 'like') {
        alert('感谢您的阅读');
    } else if (type === 'dislike') {
        alert('对不起，下次会继续改进');
    }
    document.getElementById("feedbackOptions").style.display = "none";
}

function provideOpinion() {
    window.location.href = 'thought.html';}

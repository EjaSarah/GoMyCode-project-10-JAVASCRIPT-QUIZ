function submitQuiz() {
    const answers = {
        q1: 'C',
        q2: 'B',
        q3: 'C'
    };

    let score = 0;

    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    for (let [question, correctAnswer] of Object.entries(answers)) {
        if (formData.get(question) === correctAnswer) {
            score++;
        }
    }

    alert(`You scored ${score} out of ${Object.keys(answers).length}`);
}

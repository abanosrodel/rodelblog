function react(reaction) {{
    const reactionButtons = document.querySelectorAll('.reaction-btn');

    reactionButtons.forEach(button => {
        button.classList.remove('active');
    });

    const clickedButton = document.querySelector(`.reaction-btn.${reaction}`);
    clickedButton.classList.add('active');
}
    {
    const clickedButton = document.querySelector(`.reaction-btn.${reaction}`);

    if (clickedButton) {
        let countSpan = clickedButton.querySelector('.reaction-count');

        if (!countSpan) {
            countSpan = document.createElement('span');
            countSpan.className = 'reaction-count';
            clickedButton.appendChild(countSpan);
        }

        let count = parseInt(countSpan.textContent) || 0;

        count++;

        countSpan.textContent = count;
    }
}
}
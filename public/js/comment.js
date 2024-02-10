console.log('working');

const submitComment = async (event) => {
    console.log('button clicked');
    event.preventDefault();

    const comment = document.querySelector('.comment')

    if (comment) {
        try {
            const response = await fetch('/api/dash/comment', {
                method: 'POST',
                body: JSON.stringify({ comment }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                const responseData = await response.json();
                console.error('Error during fetch:', responseData);
                alert('Something went wrong. See console for details.');
            }
        } catch (error) {
            console.error('Error during fetch:', error);
            alert('An error occurred while processing your request.');
        }
    } else {
        alert('error submitting comment');
    }
};

const commentButtons = document.querySelectorAll('.btn');

commentButtons.forEach((button) => {
    button.addEventListener('click', submitComment);
});

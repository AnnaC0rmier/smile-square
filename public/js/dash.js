const submitPost = async (event) => {
    console.log('button clicked');
    event.preventDefault();

    const title = document.querySelector('#exampleFormControlInput1').value;
    const content = document.querySelector('#exampleFormControlTextarea1').value;

    if (content && title) {
        try {
            const response = await fetch('/api/dash/blogpost', {
                method: 'POST',
                body: JSON.stringify({ title, content }),
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
        alert('Please fill in both title and content fields.');
    }
};

document.querySelector('.submit').addEventListener('click', submitPost);

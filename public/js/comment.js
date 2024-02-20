const submitComment = async(event)=>{
    console.log('button clicked');
    event.preventDefault();

    const comment = document.querySelector('.comment');
    

    if (comment){
        try{
            const response = await fetch ('/api/comments', 
            {
                method: 'POST',
                body: JSON.stringify({content}),
                headers: {'Content-Type': 'application/json'},

            });

            if (response.ok) {
             document.location.replace('/');
            }
           
        }

        catch (error){
            console.error('issue posting comment')
        }
    }
};

document.querySelector('.btn').addEventListener('click', submitComment)


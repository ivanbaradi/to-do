export default function About(){

    const content = {
        width: '70%',
        margin: '0 auto',
        marginTop: '40px'
    }

    const title = {
        marginBottom: '20px'
    }

    return (
        <main style={content} className="text-start content">
            <div className='sub-content'>
                <h1 className="title" style={title}>Story</h1>
                <p>
                    There are times that we need to get certain things done for the day especially for me since I am
                    always busy. Most of the time, I buy groceries, plan for vacations, and do other errands. I can't
                    really remember everything that needs to be done. Therefore, I use an application from my phone, 
                    which allows me to write a list. 
                </p>
                <p>
                    After using it for a while, it feels very limiting because I can only add, remove, and check items. I can't
                    really do much there. What if I want to delete all items I checked? What if I want to filter items
                    for uncompleted tasks? What if I want to sort them based off my own preferences?
                </p>
                <p>
                    To answer my own questions, I decided to create my own "to-do list" application with a twist of my own 
                    designs and functionalities. 
                </p>
            </div>
            <div className='sub-content'>
                <h1 className="title" style={title}>Mission</h1>
                <p>
                    Our goal is simple. We want our users to thrive on convenience when completing their to-do lists. Everyone
                    is different, and we want to create features that match users' preferences.
                </p>
                <p>
                    It is also vital for users to provide us feedback to improve our application and meet their satisfactions.
                    We encourage users to reach out for us.
                </p>
            </div>
            <div className='sub-content'>
                <h1 className="title" style={title}>Features</h1>
                <p>
                    Users can add, edit, check, and delete items from the list. They can also sort and filter items. 
                    Ultimately, they have an option to delete all checked items. 
                </p>
            </div>
        </main>
    )
}
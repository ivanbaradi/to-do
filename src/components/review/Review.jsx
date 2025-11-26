import reviewers from '../../data/reviewers.json'
import Reviewer from './Reviewer'

export default function Review(){

    const n = reviewers.length

    return (
        <main className="sub-content">
            <h2 className='title'>See What Customers Have to Say</h2>
            <div className="container">
                <div className="row">
                    {
                        reviewers.map(({name, caption, text}, index) => 
                            <Reviewer 
                                key={index}
                                name={name}
                                caption={caption}
                                text={text}
                                tabletMarginAdjust={index < n-1}
                                laptopMarginAdjust={index < n-2}
                            />
                        )
                    }
                </div>
            </div>
        </main>
    )
}
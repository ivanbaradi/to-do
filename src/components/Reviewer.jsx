import { useMediaQuery } from "react-responsive"

export default function Reviewer({name, caption, text, tabletMarginAdjust, laptopMarginAdjust}){

    // adjusts CSS for mobile and tablet users
    const onMobile = useMediaQuery({maxWidth: 767})
    const onTablet = useMediaQuery({maxWidth: 991})

    // reviewer borders
    const customBorder = '3px ridge black'

    const reviewer = {
        border: customBorder,
        borderRadius: '10px',
        backgroundColor: 'white',
        maxWidth: onMobile ? '60%' : '95%',
        margin: '0 auto',
    }

    // reviewer icon, name, and rating
    const section1 = {
        paddingBottom: '10px',
        borderRight: !onMobile && customBorder
    }

    const icon = {
        fontSize: '4rem',
        paddingTop: '15px',
    }

    // reviewer caption and text
    const section2 = {
        textAlign: !onMobile && 'left',
        marginTop: !onMobile && '18px'
    }

    const _caption = {
        fontSize: '17px',
        fontWeight: 500,
        marginBottom: 0
    }

    // media responsiveness to dynamically change margin bottoms between reviewers
    const reviewMarginQuery =  {marginBottom: ((onTablet && tabletMarginAdjust) || laptopMarginAdjust) && '50px'}

    return (
        <div className="col-lg-6" style={reviewMarginQuery}>
            <div className="row" style={reviewer}>
                <div className="col-md-4" style={section1}>
                    <i className="material-symbols-outlined" style={icon}>sentiment_very_satisfied</i>
                    <h3 style={{fontSize: '20px'}}>{name}</h3>
                    <p style={{marginBottom: 0}}>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                </div>
                <div className="col-md-8" style={section2}>
                    <p style={_caption}>{caption}</p>
                    <p style={{fontSize: '14px'}}>{text}</p>
                </div>
            </div>
        </div>
    )
}
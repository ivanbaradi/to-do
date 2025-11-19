import { useMediaQuery } from "react-responsive"

function FeatureCard(props){

    // adjusts CSS for mobile and tablet users
    const onMobile = useMediaQuery({maxWidth: 768})
    const onTablet = useMediaQuery({maxWidth: 992})

    // subtitles that discuss features
    const subtitle = {
        fontFamily: 'Knewave, system-ui',
        fontWeight: 400,
        fontStyle: 'normal'
    }

    // aka container item
    const card = {
        marginBottom: (onMobile | onTablet) && '40px'
    }

    // container item description
    const desc = {
        textAlign: !onMobile && 'left' // text aligns leftwards when on larger devices (e.g. desktop, tablet)
    }

    return (
        <div className="col-12 col-md-6 col-lg-3" style={card}>
            <h3 style={subtitle}>{props.subtitle}</h3>
            <p style={desc}>{props.description}</p>
        </div>
    )
}

export default FeatureCard
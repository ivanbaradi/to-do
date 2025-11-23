import { useMediaQuery } from "react-responsive"

function FeatureInfo({iconName, subTitle, desc, mobileCompatible, tabletCompatible}){

    // adjusts CSS for mobile and tablet users
    const onMobile = useMediaQuery({maxWidth: 767})
    const onTablet = useMediaQuery({maxWidth: 991})

    // sub-titles that discuss features
    const _subTitle = {
        fontFamily: 'Knewave, system-ui',
        fontWeight: 400,
    }

    const feature = {
        padding: '0 50px'
    }

    const featureMobile = {
        marginBottom: '40px' 
    }

    const featureTablet = {
        marginBottom: '80px'
    }

    // feature description
    const _desc = {
        textAlign: !onMobile && 'left' // text aligns leftwards when on larger devices (e.g. desktop, tablet)
    }

    // feature icon
    const icon = {
        fontSize: '4rem',
        marginBottom: '20px'
    }

    const featureQuery = onMobile ? (mobileCompatible && featureMobile) : onTablet && (tabletCompatible && featureTablet) // media responsiveness for dynamic CSS changing on features

    return (
        <div className="col-12 col-md-6 col-lg-3" style={{...feature, ...featureQuery}}>
            <i className='material-symbols-outlined' style={icon}>{iconName}</i>
            <h3 style={_subTitle}>{subTitle}</h3>
            <p style={_desc}>{desc}</p>
        </div>
    )
}

export default FeatureInfo
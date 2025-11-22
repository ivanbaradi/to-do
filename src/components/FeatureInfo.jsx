import { useMediaQuery } from "react-responsive"

function FeatureInfo({iconName, subTitle, desc}){

    // adjusts CSS for mobile and tablet users
    const onMobile = useMediaQuery({maxWidth: 767})
    const onTablet = useMediaQuery({maxWidth: 991})

    // sub-titles that discuss features
    const _subTitle = {
        fontFamily: 'Knewave, system-ui',
        fontWeight: 400,
        fontStyle: 'normal'
    }

    // aka feature item
    const card = {
        marginBottom: onTablet && '40px' // adds margin from the bottom for small and medium devices
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

    return (
        <div className="col-12 col-md-6 col-lg-3" style={card}>
            <i className='material-symbols-outlined' style={icon}>{iconName}</i>
            <h3 style={_subTitle}>{subTitle}</h3>
            <p style={_desc}>{desc}</p>
        </div>
    )
}

export default FeatureInfo
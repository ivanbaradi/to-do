import { useMediaQuery } from "react-responsive"

export default function FeatureInfo({iconName, subTitle, desc, mobileMarginAdjust, tabletMarginAdjust, laptopMarginAdjust}){

    // adjusts CSS for mobile and tablet users
    const onMobile = useMediaQuery({maxWidth: 767})
    const onTablet = useMediaQuery({maxWidth: 991})

    // sub-titles that discuss features
    const _subTitle = {
        fontFamily: 'Knewave, system-ui',
        fontWeight: 400,
    }

    // feature including icon and description
    const feature = {
        padding: '0 50px',
        marginBottom: laptopMarginAdjust && '60px'
    }

    // feature icon
    const icon = {
        fontSize: '4rem',
        marginBottom: '20px'
    }

    // media responsiveness to dynamically change margins for mobiles and tablets
    const featureMarginQuery = onMobile ? mobileMarginAdjust && {marginBottom: '40px'} : onTablet && tabletMarginAdjust && {marginBottom: '80px'}

    return (
        <div className="col-md-6 col-lg-3" style={{...feature, ...featureMarginQuery}}>
            <i className='material-symbols-outlined' style={icon}>{iconName}</i>
            <h3 style={_subTitle}>{subTitle}</h3>
            <p style={{textAlign: !onMobile && 'left'}}>{desc}</p> {/* text aligns leftwards when on tablets and laptops */}
        </div>
    )
}
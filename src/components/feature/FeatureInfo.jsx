import { useMediaQuery } from "react-responsive"

export default function FeatureInfo({iconName, subTitle, desc, ...props}){

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
        marginBottom: props.laptopMarginAdjust && '60px'
    }

    // feature icon
    const icon = {
        fontSize: '4rem',
        marginBottom: '20px'
    }

    // media responsiveness to dynamically change margin bottoms between features
    const marginAdjust = onMobile ? 
    props.mobileMarginAdjust && {marginBottom: '40px'} : 
    onTablet && props.tabletMarginAdjust && {marginBottom: '80px'}

    return (
        <div className="col-md-6 col-lg-3" style={{...feature, ...marginAdjust}}>
            <i className='material-symbols-outlined' style={icon}>{iconName}</i>
            <h3 style={_subTitle}>{subTitle}</h3>
            <p style={{textAlign: !onMobile && 'left'}}>{desc}</p> {/* text aligns leftwards when on tablets and laptops */}
        </div>
    )
}
import { useMediaQuery } from "react-responsive"

function FeatureInfo(props){

    // adjusts CSS for mobile and tablet users
    const onMobile = useMediaQuery({maxWidth: 768})
    const onTablet = useMediaQuery({maxWidth: 992})

    // sub-titles that discuss features
    const subTitle = {
        fontFamily: 'Knewave, system-ui',
        fontWeight: 400,
        fontStyle: 'normal'
    }

    // aka feature item
    const card = {
        marginBottom: (onMobile | onTablet) && '40px'
    }

    // feature description
    const desc = {
        textAlign: !onMobile && 'left' // text aligns leftwards when on larger devices (e.g. desktop, tablet)
    }

    // feature icon
    const icon = {
        fontSize: '4rem',
        marginBottom: '20px'
    }

    return (
        <div className="col-12 col-md-6 col-lg-3" style={card}>
            <i className='material-symbols-outlined' style={icon}>{props.iconName}</i>
            <h3 style={subTitle}>{props.subTitle}</h3>
            <p style={desc}>{props.desc}</p>
        </div>
    )
}

export default FeatureInfo
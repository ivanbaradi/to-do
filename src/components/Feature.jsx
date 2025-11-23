import FeatureInfo from "../components/FeatureInfo"
import features from "../data/features.json"


function Feature(){

    const n = features.length // total features

    return (
        <div className="sub-content">
            <h2 className="title">What Can You Do Here?</h2>
            <div className="container">
                <div className="row">
                    {
                        features.map((info, index) => 
                            <FeatureInfo 
                                key={index}
                                iconName={info.iconName} 
                                subTitle={info.subTitle}
                                desc={info.desc}
                                mobileCompatible={index < n-1 && true}  // adds margin bottoms on features except ones from the last row on mobile
                                tabletCompatible={index < n-2 && true}  // adds margin bottoms on features except ones from the last row on tablet
                            />
                        )
                    }
                </div>
            </div>                
        </div>
    )
}

export default Feature
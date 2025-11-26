import FeatureInfo from "./FeatureInfo"
import features from "../../data/features.json"

export default function Feature(){

    const n = features.length // total features

    return (
        <div className="sub-content">
            <h2 className="title">What Can You Do Here?</h2>
            <div className="container">
                <div className="row">
                    {
                        features.map(({iconName, subTitle, desc}, index) => 
                            <FeatureInfo 
                                key={index}
                                iconName={iconName} 
                                subTitle={subTitle}
                                desc={desc}
                                mobileMarginAdjust={index < n-1}  // adds margins between features from on mobile
                                tabletMarginAdjust={index < n-2}  // same but on tablet
                                laptopMarginAdjust={index < n-4}  // same but on laptop
                            />
                        )
                    }
                </div>
            </div>                
        </div>
    )
}
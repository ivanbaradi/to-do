import FeatureInfo from "../components/FeatureInfo"

function Home(){

    const title = {
        marginBottom: '40px',
        fontWeight: 600,
        fontSize: '35px'
    }

    return (
        <div className="content">
            <div className="sub-content">
                <h2 style={title}>What Can You Do Here?</h2>
                <div className="container">
                    <div className="row">
                        <FeatureInfo 
                            iconName='add_notes'
                            subTitle='Add Item'
                            desc='Add items to the list you need for shopping, errands, etc.'
                        />
                        <FeatureInfo 
                            iconName='edit'
                            subTitle='Edit Item'
                            desc='Made a mistake? Never too late to change! We got you!'
                        />
                        <FeatureInfo 
                            iconName='check_box'
                            subTitle='Check Item'
                            desc="Don't forget to check the item once you have it!"
                        />
                        <FeatureInfo 
                            iconName='delete'
                            subTitle='Delete Item'
                            desc='Done for your item for good? Might as well just throw it away! Otherwise, just cross it.'
                        />
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Home
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
                        subtitle='➕ Add Item'
                        description='Add items to the list you need for shopping, errands, etc.'
                    />
                    <FeatureInfo 
                        subtitle='📝 Edit Item'
                        description='Made a mistake? Never too late to change! We got you!'
                    />
                    <FeatureInfo 
                        subtitle='✅ Check Item'
                        description="Don't forget to cross the item once you have it!"
                    />
                    <FeatureInfo 
                        subtitle='🗑️ Delete Item'
                        description='Done for your item for good? Might as well just throw it away! Otherwise, just cross it.'
                    />
                </div>
            </div>                
            </div>
        </div>
    )
}

export default Home
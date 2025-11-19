import FeatureCard from "../components/FeatureCard"

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
                    <FeatureCard 
                        subtitle='➕ Add Item'
                        description='Add items to the list you need for shopping, errands, etc.'
                    />
                    <FeatureCard 
                        subtitle='📝 Edit Item'
                        description='Made a mistake? Never too late to change! We got you!'
                    />
                    <FeatureCard 
                        subtitle='✅ Check Item'
                        description="Don't forget to cross the item once you have it!"
                    />
                    <FeatureCard 
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
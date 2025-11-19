import { useMediaQuery } from "react-responsive"

function Home(){

    // adjusts CSS for mobile and tablet users
    const onMobile = useMediaQuery({maxWidth: 768})
    const onTablet = useMediaQuery({maxWidth: 992})

    // headers that discuss features
    const header = {
        fontFamily: 'Knewave, system-ui',
        fontWeight: 400,
        fontStyle: 'normal'
    }

    // aka container item
    const card = {
        marginBottom: (onMobile | onTablet) && '40px'
    }

    // container item description
    const desc = {
        textAlign: !onMobile && 'left' // text aligns leftwards when on smaller devices (e.g. mobile)
    }

    return (
        <div style={{marginTop: '40px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3" style={card}>
                        <h2 style={header}>➕ Add Item</h2>
                        <p style={desc}>Add items to the list you need for shopping, errands, etc.</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" style={card}>
                        <h2 style={header}>📝 Edit Item</h2>
                        <p style={desc}>Made a mistake? Never too late to change! We got you!</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" style={card}>
                        <h2 style={header}>✅ Check Item</h2>
                        <p style={desc}>Don't forget to cross the item once you have it!</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" style={card}>
                        <h2 style={header}>🗑️ Delete Item</h2>
                        <p style={desc}>Done for your item for good? Might as well just throw it away! Otherwise, just cross it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
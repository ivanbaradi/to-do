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
        
    }

    // aka container item (for tablet users)
    const card_tablet = {
        marginBottom: '40px'
    }

    // aka container item (for mobile users)
    const card_mobile = {
        marginBottom: '40px'
    }

    // container item description
    const desc = {
        textAlign: 'left'
    }

    // container item description (for mobile users)
    const desc_mobile = {
        textAlign: 'center' 
    }

    return (
        <div style={{marginTop: '40px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3" style={onMobile ? card_mobile : (onTablet ? card_tablet : card)}>
                        <h2 style={header}>➕ Add Item</h2>
                        <p style={onMobile ? desc_mobile : desc}>Add items to the list you need for shopping, errands, etc.</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" style={onMobile ? card_mobile : (onTablet ? card_tablet : card)}>
                        <h2 style={header}>📝 Edit Item</h2>
                        <p style={onMobile ? desc_mobile : desc}>Made a mistake? Never too late to change! We got you!</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" style={onMobile ? card_mobile : card}>
                        <h2 style={header}>✅ Check Item</h2>
                        <p style={onMobile ? desc_mobile : desc}>Don't forget to cross the item once you have it!</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" style={onMobile ? card_mobile : card}>
                        <h2 style={header}>🗑️ Delete Item</h2>
                        <p style={onMobile ? desc_mobile : desc}>Done for your item for good? Might as well just throw it away! Otherwise, just cross it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
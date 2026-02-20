import { useMobile } from "../../hooks/mediaQuery"

export default function ListDropdown({header, optionGroups, ...props}){

    const onMobile = useMobile()

    const subHeader = {
        fontSize: '11px',
        color: 'lightgray'
    }

    const optionCSS = {
        fontSize: '13px',
        cursor: 'pointer'
    }

    const mobileQuery = {
        textAlign: 'left',
        marginBottom: props.mobileMarginAdjust && '10px'
    }

    const featureQuery = onMobile && mobileQuery

    return (
        <div className="col-md-4" style={{...featureQuery}}>
            <div className='btn-group' style={{width: '110px'}}>
                <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">{header}</button>
                <ul className="dropdown-menu" data-bs-theme='dark'>
                    {optionGroups.map(({subheader, options}, i) => {
                        return (
                            <div key={i}>
                                {subheader !== undefined && <li><h6 className='dropdown-header' style={subHeader}>{subheader}</h6></li>}                                
                                {options.map(({option, activeComparison, optionFunc}, j) => <li key={j}><a style={optionCSS} className={`${activeComparison} dropdown-item`} onClick={optionFunc}>{option}</a></li>)}
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default function({header, optionGroups}){

    const dropdown = {
        width: '110px'
    }

    const subHeader = {
        fontSize: '11px',
        color: 'lightgray'
    }

    const optionCSS = {
        fontSize: '13px',
        cursor: 'pointer'
    }

    return (
        <div className='btn-group col-6' style={dropdown}>
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
    )
}
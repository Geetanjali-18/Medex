import React from 'react'
import Sidebar from './Sidebar'

const BillSectionCard = (props) => {
    return (
        <>
            <Sidebar />

            <div className='BillingCard' style={{ backgroundColor: "white" }}>

                <div className="checkupCost billingBoth">
                    <div className="AskedTagBilling">Checkup Cost</div> {props.checkupCost}
                </div>
                <div className="TotalMedCost billingBoth">
                    <div className="AskedTagBilling">Total Medical Cost</div> {props.totalMedCost}
                </div>
                <hr className='BillingCardGap' />
                <div className="allMedicines">
                    <h2 className='allMedH2'>List of Medicines</h2>
                    {props.allMed.map((i) => {
                        return <div className="medicinesData billingBoth">
                            <div className="AskedTagBilling">{i[0]}</div> <div className="">{i[1]}</div>
                        </div>
                    })}
                    {/* {props.allMed} */}

                </div>
                <hr className='BillingCardGap' />
                <div className="totaCost billingBoth">

                    <div className="AskedTagBilling">Total Cost</div>{props.totCost}
                </div>
            </div>
        </>
    )
}

export default BillSectionCard
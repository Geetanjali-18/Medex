import React from 'react'
import BillSectionCard from './BillSectionCard'
import "./Style/BillingCard.css"
import Footer from './Footer'

const ClientSectionBilling = () => {


    const billingsArr = [{
        CheckupCost: "200 Rs",
        totalMedicinesCost: "4000 Rs",
        medicines: [
            ["Probuphine", "300mg"],
            ["Rybelsus", "500mg"],
            ["secukinumab", "1000mg"],
            ["Sublocade", "1200mg"]
        ],
        TotalCost: "4200 Rs"

    },
    {
        CheckupCost: "500 Rs",
        totalMedicinesCost: "3000 Rs",
        medicines: [
            ["Amitriptyline", "300mg"],
            ["Amlodipine", "500mg"],
            ["Amoxicillin", "1000mg"],
            ["Ativan", "200mg"]
        ],
        TotalCost: "3500 Rs"

    },

    ]
    return (
        <>


            <div className='BillSection'>
                <h1 style={{ textAlign: "center", padding: "0% 0% 0% 0%",fontSize: "45px", color: "#3c3b58" }}>Bill History</h1>
                {billingsArr.map((i) => {
                    return <BillSectionCard i={i} checkupCost={i.CheckupCost} totalMedCost={i.totalMedicinesCost}
                        allMed={i.medicines} totCost={i.TotalCost} />
                })}
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default ClientSectionBilling
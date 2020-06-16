import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                <li className="plus">
                    Project Income Deliverable 1
                    <span>$10,000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    Salary Payment 
                    <span>-$1000</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}

import React from 'react'
import './topbar.css'

export default function Topbar() {

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span onClick={() => window.location.href = "https://mayshech.tech/"} className="logo">Books Store</span>
                </div>
            </div>
        </div>
    )
}

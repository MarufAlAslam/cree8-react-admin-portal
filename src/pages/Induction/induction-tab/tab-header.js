import React, { useEffect } from 'react'

const TabHeader = ({handleTabChange}) => {

    // handle active tab

    useEffect(() => {
        const tabBtns = document.querySelectorAll('.tab-header-btn')
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(btn => btn.classList.remove('active'))
                btn.classList.add('active')
            })
        })
    }, [])
    
    return (
        <div className='bg-white p-5'>
            <div className='tab-header lg:w-[85%] mx-auto flex items-center gap-10'>
                <button className='tab-header-btn active'>
                    <span className='tab-header-btn-text text-lg' onClick={()=>handleTabChange(1)}>
                        1 Read Disclaimer
                    </span>
                </button>
                <button className='tab-header-btn' onClick={()=>handleTabChange(2)}>
                    <span className='tab-header-btn-text text-lg'>
                        2 Submit Workers Details
                    </span>
                </button>
            </div>
        </div>
    )
}

export default TabHeader
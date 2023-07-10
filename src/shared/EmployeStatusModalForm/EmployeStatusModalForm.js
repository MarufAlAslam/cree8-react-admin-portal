import { Button, Checkbox, Input } from 'antd'
import React from 'react'

const EmployeStatusModalForm = () => {
    return (
       
        <form className="mt-4">
        <div className="item mt-5">
            <label htmlFor="name">Name</label>
            <Input type="text" className="mt-3"  name="name" id="name" />
        </div>
        <div className="item mt-5">
            <label htmlFor="name" className="text-lg">Ignore Worker Allowances </label>
            <div className="flex mt-3 justify-start items-center">
                <Checkbox id="c1"/> <label htmlFor="c1" className="ml-3">Ignore this category when determining worker allowances.</label>
            </div>
        </div>
        <div className="item mt-5">
            <label htmlFor="name" className="text-lg">Pay as Salary</label>
            <div className="flex mt-3 justify-start items-center">
                <Checkbox id="c2"/> <label htmlFor="c2" className="ml-3">Calcuate totals to 40 hour work week regardless of clocked hours.</label>
            </div>
        </div>
        <div className="item mt-5">
            <label htmlFor="name" className="text-lg">Ignore Allowances</label>
            <div className="flex mt-3 justify-start items-center">
                <Checkbox id="c3"/> <label htmlFor="c3" className="ml-3"> Ignore Allowances for all shifts worked on this Employment Status.</label>
            </div>
        </div>
        <div className="item mt-5 text-center">
            <Button className="btn btn-blue">Create</Button>
        </div>
      </form>
    )
}

export default EmployeStatusModalForm
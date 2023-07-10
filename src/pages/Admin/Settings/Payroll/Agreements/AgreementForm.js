import { Input } from 'antd'
import React from 'react'
import CreateAgreementTable from '../../../../../shared/DataTable/CreateAgreementTable'

const AgreementForm = () => {
    return (
        <form>
        <div className="card bg-white p-4">
          <p className="">Enter Agreement Name</p>
          <Input className="mt-4 w-full" />
        </div>

        <div className="card mt-5 bg-white p-4">
          <p className="">Hours</p>
         <CreateAgreementTable/>
        </div>
        <div className="card mt-5 bg-white p-4">
          <p className="">Hours</p>
          <table className="w-full mt-4 agdtable">
            <thead className="bg-[#E8F3FF] text-center">
              <tr className="text-left">
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    Unpaid Break
                  </div>
                </th>
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-center">
                    First Break
                  </div>
                </th>
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-center">
                    Second Break
                  </div>
                </th>
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-center">
                    Third Break
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              <tr className="text-left">
                <td className=" px-4 py-3">
                  <div className="flex items-center justify-start">
                    <Input />
                    <select className="w-full ml-2">
                      <option value="jack">Minutes</option>
                    </select>
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                    <select className="w-full ml-2">
                      <option value="jack">Minutes</option>
                    </select>
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                    <select className="w-full ml-2">
                      <option value="jack">Minutes</option>
                    </select>
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                    <select className="w-full ml-2">
                      <option value="jack">Minutes</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr className="text-left">
                <th className=" px-4 py-3 ">
                  
                </th>
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-center">
                    Paid After
                  </div>
                </th>
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-center">
                  Paid After
                  </div>
                </th>
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-center">
                  Paid After
                  </div>
                </th>
              </tr>
              <tr className="text-left">
                <td className=" px-4 py-3">
                  
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                    <select className="w-full ml-2">
                      <option value="jack">Hours</option>
                    </select>
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                    <select className="w-full ml-2">
                      <option value="jack">Hours</option>
                    </select>
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                    <select className="w-full ml-2">
                      <option value="jack">Hours</option>
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>
      </form>
    )
}

export default AgreementForm
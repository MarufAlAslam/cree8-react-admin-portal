import { Input } from 'antd'
import React from 'react'

const CreateAgreementTable = () => {
    return (
        <div>
             <table className="w-full mt-4 agtable">
            <thead className="bg-[#E8F3FF] text-center">
              <tr className="text-left">
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">Time</div>
                </th>
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-center">
                    Mon to Thr
                  </div>
                </th>
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-center">Friday</div>
                </th>
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-center">
                    Saturday
                  </div>
                </th>
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-center">Sunday</div>
                </th>
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-center">
                    Late and Early
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              <tr className="text-left">
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    Normal Time
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                  </div>
                </td>
              </tr>
              <tr className="text-left">
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    Over Time
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <Input />
                  </div>
                </td>
              </tr>
              <tr className="text-left">
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    Double Time
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <select className="w-full">
                      <option value="jack">All Remaining</option>
                    </select>
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <select className="w-full">
                      <option value="jack">All Remaining</option>
                    </select>
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <select className="w-full">
                      <option value="jack">All Remaining</option>
                    </select>
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <select className="w-full">
                      <option value="jack">Custom</option>
                    </select>
                  </div>
                </td>
                <td className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    <select className="w-full">
                      <option value="jack">All Remaining</option>
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default CreateAgreementTable
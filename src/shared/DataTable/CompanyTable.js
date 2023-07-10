import React from "react";
import AvailableEmailModal from "../Modal/AvailableEmailsModal";
import AvailableDisclaimerConfig from "../Modal/AvailableDisclaimerConfigModal";
import { EditSvg } from "../../assets/svg/editsvg";

const CompanyTable = ({
  company,
  setCompany,
  handleEmail,
  modalVisible,
  setModalVisible,
  configModalVisible,
  setConfigModalVisible,
  EmailModalVisible,
  ConfigModalVisible,
}) => {
  return (
    <>
      {modalVisible && (
        <AvailableEmailModal
          setVisibleEdit={setModalVisible}
          handle={handleEmail}
          company={company}
        />
      )}

      {configModalVisible && (
        <AvailableDisclaimerConfig
          setVisibleEdit={setConfigModalVisible}
          handle={handleEmail}
          company={company}
        />
      )}
      <table className="w-full">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Company Name
              </div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Emails</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Disclaimer Configuration
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {company?.data?.map((item, index) => (
            <tr key={index} className="border-b border-[#F0F0F0]">
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item?.name}
                </div>
              </td>
              <td className="px-4 py-3">
                {item?.email_templates ? (
                  <div className="flex items-center justify-center">
                    <button
                      className=""
                      onClick={() => EmailModalVisible(item)}
                    >
                      <div className="flex">
                        <div> {item?.email_templates?.subject}</div>
                        <div className="mt-1 pl-3">
                          <EditSvg className="" />
                        </div>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <button
                      className="text-blue-600"
                      onClick={() => EmailModalVisible(item)}
                    >
                      + Setup
                    </button>
                  </div>
                )}
              </td>
              <td className="px-4 py-3">
                {item?.disclaimers ? (
                  <div className="flex items-center justify-center">
                    <button
                      className=""
                      onClick={() => ConfigModalVisible(item)}
                    >
                      <div className="flex">
                        <div> {item?.disclaimers?.name}</div>
                        <div className="mt-1 pl-3">
                          <EditSvg className="" />
                        </div>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <button
                      className="text-blue-600"
                      onClick={() => ConfigModalVisible(item)}
                    >
                      + Setup
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CompanyTable;

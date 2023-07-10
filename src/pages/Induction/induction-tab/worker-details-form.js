import React from "react";

const WorkerDetails = () => {
  return (
    <div className="p-5">
      <h2 className="text-lg font-bold">Worker Details</h2>
      <form>
        <div>
          <label className="mt-4 block">Name</label>
          <input className="mt-5 h-[40px] border rounded p-2 w-full" />
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full">
            <label className="mt-4 block">Gender</label>
            <select className="mt-5 h-[40px] border rounded p-2 w-full">
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"other"}>Other</option>
            </select>
          </div>
          <div className="w-full">
            <label className="mt-4 block">Date of Birth</label>
            <input
              type="date"
              className="mt-5 h-[40px] border rounded p-2 w-full"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="mt-4 block">Address</label>
          <input className="mt-5 h-[40px] border rounded p-2 w-full" />
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full">
            <label className="mt-4 block">City</label>
            <input className="mt-5 h-[40px] border rounded p-2 w-full" />
          </div>
          <div className="w-full">
            <label className="mt-4 block">Post Code</label>
            <input
              type="text"
              className="mt-5 h-[40px] border rounded p-2 w-full"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full">
            <label className="mt-4 block">Mobile</label>
            <input className="mt-5 h-[40px] border rounded p-2 w-full" />
          </div>
          <div className="w-full">
            <label className="mt-4 block">Driver License</label>
            <input
              type="text"
              className="mt-5 h-[40px] border rounded p-2 w-full"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full">
            <label className="mt-4 block">Shirt Size</label>
            <input className="mt-5 h-[40px] border rounded p-2 w-full" />
          </div>
          <div className="w-full">
            <label className="mt-4 block">Pant Size</label>
            <input
              type="text"
              className="mt-5 h-[40px] border rounded p-2 w-full"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full">
            <label className="mt-4 block">Super Fund Name</label>
            <input className="mt-5 h-[40px] border rounded p-2 w-full" />
          </div>
          <div className="w-full">
            <label className="mt-4 block">Super Fund Number</label>
            <input
              type="text"
              className="mt-5 h-[40px] border rounded p-2 w-full"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="mt-4 block">Tax File Number</label>
          <input
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          />
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full">
            <label className="mt-4 block">BERT</label>
            <input className="mt-5 h-[40px] border rounded p-2 w-full" />
          </div>
          <div className="w-full">
            <label className="mt-4 block">QLeave</label>
            <input
              type="text"
              className="mt-5 h-[40px] border rounded p-2 w-full"
            />
          </div>
        </div>

        <h2 className="text-lg font-bold mt-6">Bank</h2>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full">
            <label className="mt-4 block">BSB</label>
            <input className="mt-5 h-[40px] border rounded p-2 w-full" />
          </div>
          <div className="w-full">
            <label className="mt-4 block">Account</label>
            <input
              type="text"
              className="mt-5 h-[40px] border rounded p-2 w-full"
            />
          </div>
        </div>
        <h2 className="text-lg font-bold mt-6">Emergency Contacts</h2>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full">
            <label className="mt-4 block">Name</label>
            <input className="mt-5 h-[40px] border rounded p-2 w-full" />
          </div>
          <div className="w-full">
            <label className="mt-4 block">Ph. Number</label>
            <input
              type="text"
              className="mt-5 h-[40px] border rounded p-2 w-full"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full">
            <label className="mt-4 block">Existing Innjuries</label>
            <input className="mt-5 h-[40px] border rounded p-2 w-full" />
          </div>
          <div className="w-full">
            <label className="mt-4 block">Medical Condition</label>
            <input
              type="text"
              className="mt-5 h-[40px] border rounded p-2 w-full"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <label className="mt-4 block">
            Have You ever made a worker's compensation claim?
          </label>
          <select
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          >
            <option value={"not set"}>Not Set</option>
          </select>
        </div>
        <div className="lg:w-1/2">
          <label className="mt-4 block">Blood Type</label>
          <select
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          >
            <option value={"not set"}>Not Set</option>
          </select>
        </div>
        <div className="lg:w-1/2">
          <label className="mt-4 block">Are you a Subcontractor ?</label>
          <select
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          >
            <option value={"not set"}>Not Set</option>
          </select>
        </div>

        <h2 className="text-lg font-bold mt-6">Experience</h2>
        <div className="lg:w-1/2">
          <label className="mt-4 block">Trade Certificate</label>
          <select
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          >
            <option value={"not set"}>Not Set</option>
          </select>
          <p className="text-sm mt-2">*Copy of certificate must be provided</p>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full">
            <label className="mt-4 block">Trade</label>
            <input className="mt-5 h-[40px] border rounded p-2 w-full" />
          </div>
          <div className="w-full">
            <label className="mt-4 block">Trade</label>
            <input
              type="text"
              className="mt-5 h-[40px] border rounded p-2 w-full"
            />
          </div>
        </div>

        <h2 className="text-lg font-bold mt-6">Previous Employment Details</h2>
        <div className="w-full">
          <label className="mt-4 block">Company</label>
          <input
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          />
        </div>
        <div className="w-full">
          <label className="mt-4 block">Job</label>
          <input
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          />
        </div>
        <div className="w-full">
          <label className="mt-4 block">Duties</label>
          <input
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          />
        </div>
        <div className="w-full">
          <label className="mt-4 block">Duration</label>
          <input
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          />
        </div>

        <h2 className="text-lg font-bold mt-6">
          Previous Employment Details #2
        </h2>
        <div className="w-full">
          <label className="mt-4 block">Company</label>
          <input
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          />
        </div>
        <div className="w-full">
          <label className="mt-4 block">Job</label>
          <input
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          />
        </div>
        <div className="w-full">
          <label className="mt-4 block">Duties</label>
          <input
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          />
        </div>
        <div className="w-full">
          <label className="mt-4 block">Duration</label>
          <input
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          />
        </div>

        <div className="lg:w-1/2">
          <label className="mt-4 block">Do you Posses a working visa ?</label>
          <select
            type="text"
            className="mt-5 h-[40px] border rounded p-2 w-full"
          >
            <option value={"not set"}>Not Set</option>
          </select>
        </div>

        <h2 className="text-lg font-bold mt-6">Additional Documents</h2>

        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full">
            <label className="mt-4 block">Photo of Licence</label>
            <input
              type="file"
              id="f1"
              className="mt-5 h-[40px] border rounded p-2 w-full hidden"
            />
            <label
              htmlFor="f1"
              className="mt-5 h-[40px] border rounded w-full text-center block px-5 py-3"
            >
              Choose File
            </label>
          </div>
          <div className="w-full">
            <label className="mt-4 block">Photo of Licence</label>
            <input
              type="file"
              id="f2"
              className="mt-5 h-[40px] border rounded p-2 w-full hidden"
            />
            <label
              htmlFor="f2"
              className="mt-5 h-[40px] border rounded w-full text-center block px-5 py-3"
            >
              Choose File
            </label>
          </div>
        </div>

        <h2 className="mt-6 font-bold text-xl mb-2">
          By Clicking OK you certify that to the best of your knowledge that the
          above details are correct.
        </h2>
        <p>
          You acknowledge that you have read and understand the contents of this
          SAFETY INDUCTION HANDBOOK and agree to abide by the Company Work Place
          Health & Safety Policy, General Work Place Health & Safety Procedures,
          Company Rules, Company Policies, Administration Procedures, Code of
          Conduct and Ethics, Confidentiality Agreement and Site requirements of
          CREE8 and to comply with your obligations to the Workplace Health and
          Safety Act in the interests of safety to yourself, fellow workers and
          the general public.
        </p>

        <div className="text-right mt-6 flex justify-end items-center gap-4">
          <button className="bg-[#fff] border border-[#0F4C7D] text-[#0F4C7D] px-10 py-2 rounded">
            Print
          </button>

          <button className="bg-[#0F4C7D] text-white px-10 py-2 rounded ml-4">
            Agree and Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkerDetails;

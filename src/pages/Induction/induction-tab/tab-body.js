import React from "react";
import WorkerDetails from "./worker-details-form";

const TabBody = ({ activeTab }) => {
  return (
    <div className="p-5">
      <div className="lg:w-[85%] mx-auto">
        {activeTab === 1 ? (
          <div>
            <div className="bg-white p-5 rounded">
              <div>
                <h2 className="text-lg font-bold mb-3">
                  1.0 Obligations - Leading Hands & Site Managers
                </h2>
                <p className="text-sm">
                  Cree8 is committed to providing and maintaining work
                  environments and systems of work that are safe and without
                  undue risk to the health, safety and well being of our
                  employees, subcontractors and all other persons. We believe
                  that this can be achieved through a diligent and responsible
                  attitude to management of the company’s activities. <br />{" "}
                  <br /> It is Cree8’s policy that management and staff at all
                  levels are responsible for ensuring that all reasonable steps
                  are taken to identify, prevent and eliminate (where possible)
                  the risk of injury and disease to our employees and other
                  persons by adopting a planned and systematic approach to the
                  proactive management of health, safety & welfare matters by
                  providing the appropriate resources for its successful
                  implementation.
                </p>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-bold mb-3">
                  1.1 Obligations - Employer
                </h2>
                <p className="text-sm">
                  Cree8 has an obligation to its personnel under all the
                  relevant State and Federal Work Place Health and Safety
                  legislations to ensure all employees and personnel have a safe
                  environment to work in. <br /> <br /> Cree8 is committed to
                  providing and maintaining work environments and systems of
                  work that are safe and without undue risk to the health,
                  safety and well being of our employees, subcontractors and all
                  other persons. We believe that this can be achieved through a
                  diligent and responsible attitude to management of the
                  company’s activities. <br /> <br /> It is Cree8’s policy that
                  management and staff at all levels are responsible for
                  ensuring that all reasonable steps are taken to identify,
                  prevent and eliminate (where possible) the risk of injury and
                  disease to our employees and other persons by adopting a
                  planned and systematic approach to the proactive management of
                  health, safety & welfare matters by providing the appropriate
                  resources for its successful implementation. Cree8 is
                  committed to providing and maintaining work environments and
                  systems of work that are safe and without undue risk to the
                  health, safety and well being of our employees, subcontractors
                  and all other persons. We believe that this can be achieved
                  through a diligent and responsible attitude to management of
                  the company’s activities. <br /> <br /> It is Cree8’s policy
                  that management and staff at all levels are responsible for
                  ensuring that all reasonable steps are taken to identify,
                  prevent and eliminate (where possible) the risk of injury and
                  disease to our employees and other persons by adopting a
                  planned and systematic approach to the proactive management of
                  health, safety & welfare matters by providing the appropriate
                  resources for its successful implementation.
                </p>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-bold mb-3">
                  1.1 Obligations - Employer
                </h2>
                <p className="text-sm">
                  Cree8 has an obligation to its personnel under all the
                  relevant State and Federal Work Place Health and Safety
                  legislations to ensure all employees and personnel have a safe
                  environment to work in. <br /> <br /> Cree8 is committed to
                  providing and maintaining work environments and systems of
                  work that are safe and without undue risk to the health,
                  safety and well being of our employees, subcontractors and all
                  other persons. We believe that this can be achieved through a
                  diligent and responsible attitude to management of the
                  company’s activities. <br /> <br /> It is Cree8’s policy that
                  management and staff at all levels are responsible for
                  ensuring that all reasonable steps are taken to identify,
                  prevent and eliminate (where possible) the risk of injury and
                  disease to our employees and other persons by adopting a
                  planned and systematic approach to the proactive management of
                  health, safety & welfare matters by providing the appropriate
                  resources for its successful implementation. Cree8 is
                  committed to providing and maintaining work environments and
                  systems of work that are safe and without undue risk to the
                  health, safety and well being of our employees, subcontractors
                  and all other persons. We believe that this can be achieved
                  through a diligent and responsible attitude to management of
                  the company’s activities. <br /> <br /> It is Cree8’s policy
                  that management and staff at all levels are responsible for
                  ensuring that all reasonable steps are taken to identify,
                  prevent and eliminate (where possible) the risk of injury and
                  disease to our employees and other persons by adopting a
                  planned and systematic approach to the proactive management of
                  health, safety & welfare matters by providing the appropriate
                  resources for its successful implementation.
                </p>
              </div>
            </div>

            <div className="my-6 text-right">
              <button className="btn btn-blue rounded px-5 py-2">
                Agree and Continue
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white lg:w-[65%] mx-auto p-5 rounded">
            <WorkerDetails />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabBody;

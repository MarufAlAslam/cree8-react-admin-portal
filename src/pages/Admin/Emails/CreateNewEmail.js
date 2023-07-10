import React, { useState, useRef, useEffect } from "react";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate, useParams } from "react-router-dom";
import {
  CreateEditEmail,
  GetEmailById,
} from "../../../helper/setup/induction/email";
import { ButtonSpinner } from "../../../components/spinners";
import { TextShimmer } from "../../../components/shimmer/shimmer";

const CreateNewEmail = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  let subject = useRef();
  let tax_link = useRef();
  let body = useRef();
  let confirmation_message = useRef();
  let confirmation_email = useRef();

  const initialvalue = {
    id: id ? id : "",
    isSave: id ? 0 : 1,
    subject: "",
    tax_link: "",
    body: "",
    confirmation_message: "",
    confirmation_email: "",
    errors: {
      subject: "",
      tax_link: "",
      body: "",
      confirmation_message: "",
      confirmation_email: "",
    },
    isLoading: false,
    isShimmer: true,
  };

  const [email, setEmail] = useState(initialvalue);

  const handleEmail = {
    getEmailData: (e) => {
      console.log(e);
      setEmail({
        ...email,
        [e?.target?.name]: e?.target?.value,
      });
    },
    submitEmail: async () => {
      if (email?.subject == "") {
        setEmail({
          ...email,
          errors: {
            subject: "Enter subject",
            tax_link: "",
            body: "",
            confirmation_message: "",
            confirmation_email: "",
          },
        });
        subject.current.focus();
      } else if (email?.tax_link == "") {
        setEmail({
          ...email,
          errors: {
            subject: "",
            tax_link: "Enter tax link",
            body: "",
            confirmation_message: "",
            confirmation_email: "",
          },
        });
        tax_link.current.focus();
      } else if (email?.body == "") {
        setEmail({
          ...email,
          errors: {
            subject: "",
            tax_link: "",
            body: "Enter body",
            confirmation_message: "",
            confirmation_email: "",
          },
        });
        body.current.focus();
      } else if (email?.confirmation_message == "") {
        setEmail({
          ...email,
          errors: {
            subject: "",
            tax_link: "",
            body: "",
            confirmation_message: "Enter confirmation message",
            confirmation_email: "",
          },
        });
        confirmation_message.current.focus();
      } else if (email?.confirmation_email == "") {
        setEmail({
          ...email,
          errors: {
            subject: "",
            tax_link: "",
            body: "",
            confirmation_message: "",
            confirmation_email: "Enter confirmation email",
          },
        });
        confirmation_email.current.focus();
      } else {
        setEmail({
          ...email,
          errors: {
            subject: "",
            tax_link: "",
            body: "",
            confirmation_message: "",
            confirmation_email: "",
          },
          isLoading: true,
        });
        let data = await CreateEditEmail(email);
        console.log(data);
        if (data?.status) {
          console.log(email);
          navigate("/admin/settings/induction/emails");
          setEmail({
            ...email,
            isLoading: false,
          });
        } else {
          setEmail({
            ...email,
            isLoading: false,
          });
        }
      }
    },
  };

  useEffect(() => {
    (async () => {
      if (id) {
        let data = await GetEmailById(email);
        console.log(data?.data?.data?.[0]);
        if (data?.status) {
          setEmail({
            ...email,
            ...data?.data?.data?.[0],
            isShimmer: false,
          });
          setTimeout(() => {
            subject.current.focus();
          }, 100);
        }
      } else {
        setEmail({
          ...email,
          isShimmer: false,
        });
        setTimeout(() => {
          subject.current.focus();
        }, 100);
      }
    })();
  }, []);

  return (
    <>
      {email?.isShimmer ? (
        <div className="mt-5 lg:w-1/2 w-full mx-auto bg-white p-5 shadow-sm">
          <TextShimmer data={{ gap: 15, line: 30 }} />
        </div>
      ) : (
        <>
          <form className="mt-5">
            <div className="lg:w-1/2 w-full mx-auto bg-white p-5 shadow-sm">
              <p className="fs-18 font-bold">
                {email?.id ? "Editing" : "Creating"} Induction Email
              </p>

              <div className="mt-5">
                <label className="block font-normal">Subject</label>
                <Input
                  className={
                    email?.errors?.subject
                      ? "w-full mt-4 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "w-full mt-4"
                  }
                  ref={subject}
                  name="subject"
                  value={email?.subject}
                  onChange={handleEmail?.getEmailData}
                />
                {email?.errors?.subject && (
                  <p className="pt-2 text-red-600 text-sm">
                    {email?.errors?.subject}
                  </p>
                )}
              </div>
              <div className="mt-5">
                <label className="block font-normal">Tax Link</label>
                <Input
                  className={
                    email?.errors?.tax_link
                      ? "w-full mt-4 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "w-full mt-4"
                  }
                  name="tax_link"
                  ref={tax_link}
                  value={email?.tax_link}
                  onChange={handleEmail?.getEmailData}
                />
                {email?.errors?.tax_link && (
                  <p className="pt-2 text-red-600 text-sm">
                    {email?.errors?.tax_link}
                  </p>
                )}
              </div>
              <div className="mt-5">
                <label className="block font-normal">Body</label>
                <TextArea
                  rows={10}
                  ref={body}
                  className={
                    email?.errors?.body
                      ? "w-full mt-4 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "w-full mt-4"
                  }
                  name="body"
                  value={email?.body}
                  onChange={handleEmail?.getEmailData}
                />
                {email?.errors?.body && (
                  <p className="pt-2 text-red-600 text-sm">
                    {email?.errors?.body}
                  </p>
                )}
              </div>
              <div className="mt-5">
                <label className="block font-normal">
                  Confirmation Message
                </label>
                <TextArea
                  rows={10}
                  ref={confirmation_message}
                  className={
                    email?.errors?.confirmation_message
                      ? "w-full mt-4 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "w-full mt-4"
                  }
                  name="confirmation_message"
                  value={email?.confirmation_message}
                  onChange={handleEmail?.getEmailData}
                />
                {email?.errors?.confirmation_message && (
                  <p className="pt-2 text-red-600 text-sm">
                    {email?.errors?.confirmation_message}
                  </p>
                )}
                <p className="text-sm mt-2">
                  *This message will appear to the worker when they are
                  submitting their completed induction.
                </p>
              </div>
              <div className="mt-5">
                <label className="block font-normal">Confirmation Email</label>
                <TextArea
                  rows={10}
                  ref={confirmation_email}
                  className={
                    email?.errors?.confirmation_email
                      ? "w-full mt-4 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "w-full mt-4"
                  }
                  name="confirmation_email"
                  value={email?.confirmation_email}
                  onChange={handleEmail?.getEmailData}
                />
                {email?.errors?.confirmation_email && (
                  <p className="pt-2 text-red-600 text-sm">
                    {email?.errors?.confirmation_email}
                  </p>
                )}
                <p className="text-sm mt-2">
                  *This message will be sent to the worker, with a copy of their
                  induction.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 mt-5 w-full mx-auto bg-transparent py-5">
              <div className="text-right">
                <Button
                  className="btn-blue text-white h-[40px] ml-auto flex justify-center items-center w-1/4 bg-blue-disable"
                  onClick={handleEmail?.submitEmail}
                  disabled={email?.isLoading ? true : false}
                >
                  {email?.isLoading ? (
                    <ButtonSpinner />
                  ) : email?.id ? (
                    "Update Changes"
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default CreateNewEmail;

import { Button, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

const EditEmails = () => {

    return (
        <form className='mt-5'>
            <div className='lg:w-1/2 w-full mx-auto bg-white p-5 shadow-sm'>
                <p className='fs-18 font-bold'>Editing Induction Email</p>

                <div className='mt-5'>
                    <label className='block font-normal'>
                    Subject
                    </label>
                    <Input className='w-full mt-4' />
                </div>
                <div className='mt-5'>
                    <label className='block font-normal'>
                    Tax Link
                    </label>
                    <Input className='w-full mt-4' />
                </div>
                <div className='mt-5'>
                    <label className='block font-normal'>
                    Body
                    </label>
                    <TextArea rows={10} className='w-full mt-4'/>
                </div>
                <div className='mt-5'>
                    <label className='block font-normal'>
                    Confirmation Message 
                    </label>
                    <TextArea rows={10} className='w-full mt-4'/>
                    <p className='text-sm mt-2'>*This message will appear to the worker when they are submitting their completed induction.</p>
                </div>
                <div className='mt-5'>
                    <label className='block font-normal'>
                    Confirmation Email 
                    </label>
                    <TextArea rows={10} className='w-full mt-4'/>
                    <p className='text-sm mt-2'>*This message will be sent to the worker, with a copy of their induction.</p>
                </div>
            </div>


            <div className='lg:w-1/2 mt-5 w-full mx-auto bg-transparent py-5'>
                <div className='text-right'>
                    <Button className='btn-blue text-white h-[40px] ml-auto flex justify-center items-center'>
                        Save Changes
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default EditEmails;
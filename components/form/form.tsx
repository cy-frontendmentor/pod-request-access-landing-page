'use client';

import { useEffect, useRef, useState } from 'react';

const Form = ({ className }: { className: string }) => {
  const [requestStatus, setRequestStatus] = useState('');
  const [requestMsg, setRequestMsg] = useState('');
  const emailInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (requestStatus === 'success') {
      const timer = setTimeout(() => {
        setRequestStatus('');
        setRequestMsg('');
        formRef.current?.reset();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const submitHandler = (event: any) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current?.value;
    fetch('/api/registration', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/jason',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setRequestStatus('success');
        } else {
          setRequestStatus('error');
        }
        setRequestMsg(data.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <form
      onSubmit={submitHandler}
      ref={formRef}
      className={`grid gap-y-4 sm:relative sm:max-w-[427px] sm:gap-y-2 ${className}`}
    >
      <input
        type='text'
        placeholder='Email address'
        className=' bg-tuna text-white font-bold text-sm leading-[28px] py-[9px] px-8 rounded-[28px] sm:py-[14px]'
        ref={emailInputRef}
      />
      {requestMsg && (
        <p className={`px-8 ${requestStatus == 'success' ? 'text-medium-aquamarine' : 'text-red-700'} `}>
          {requestMsg}
        </p>
      )}
      <button
        type='submit'
        className=' bg-medium-aquamarine text-mirage font-bold leading-[28px] text-sm py-[9px] rounded-[28px] sm:absolute sm:px-[27px] sm:right-[5px] sm:top-[5px] hover:bg-[#B3FFE2]'
      >
        Request Access
      </button>
    </form>
  );
};

export default Form;

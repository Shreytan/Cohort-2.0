import React, { useRef } from 'react';

function SubOtp({ reference, onDone, onBack }) {
  return (
    <input
      ref={reference}
      type="text"
      maxLength={1}
      onChange={(e) => {
        const value = e.target.value;

        // Only trigger onDone if a digit is typed
        if (value.length === 1 && !isNaN(value)) {
          onDone();
        } else {
          console.log("Invalid input");
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Backspace" && !e.target.value) {
          onBack();
        }
      }}
      className="m-1 p-4 rounded-2xl w-[40px] h-[40px] text-white bg-blue-400 px-4.5 transform transition hover:-translate-y-0.5 text-center"
    />
  );
}

const Otp = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  return (
    <div className="flex justify-center mt-10">
      <SubOtp
        reference={ref1}
        onDone={() => ref2.current.focus()}
        onBack={() => ref1.current.value = ""}
      />
      <SubOtp
        reference={ref2}
        onDone={() => ref3.current.focus()}
        onBack={() => {
          ref1.current.focus();
          ref1.current.value = "";
        }}
      />
      <SubOtp
        reference={ref3}
        onDone={() => ref4.current.focus()}
        onBack={() => {
          ref2.current.focus();
          ref2.current.value = "";
        }}
      />
      <SubOtp
        reference={ref4}
        onDone={() => ref5.current.focus()}
        onBack={() => {
          ref3.current.focus();
          ref3.current.value = "";
        }}
      />
      <SubOtp
        reference={ref5}
        onDone={() => ref6.current.focus()}
        onBack={() => {
          ref4.current.focus();
          ref4.current.value = "";
        }}
      />
      <SubOtp
        reference={ref6}
        onDone={() => {
          setTimeout(() => {
            ref1.current.value = "";
            ref2.current.value = "";
            ref3.current.value = "";
            ref4.current.value = "";
            ref5.current.value = "";
            ref6.current.value = "";
            alert("done");
            ref1.current.focus();
          }, 100);
        }}
        onBack={() => {
          ref5.current.focus();
          ref5.current.value = "";
        }}
      />
    </div>
  );
};

export default Otp;

import React from 'react';
import questionMarkIcon from '../assets/question-mark-button-svgrepo-com.svg';

const RevenueCard = ({ title, orderCount, amount }) => {
    return (
        <div className='bg-white shadow-md rounded p-4'>
            <div className='flex mb-7 items-center text-gray-500'>
                {title}
                <img className='h-5 w-5 ml-2' src={questionMarkIcon} alt="?" />
            </div>
            <div className='flex font-semibold text-2xl justify-between'>
                <span>Rs. {amount}</span>
            
                {orderCount ? (
                    <div className='font-semibold flex items-center text-blue-600 underline cursor-pointer'>
                        {orderCount} order(s)
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
  </svg>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default RevenueCard;

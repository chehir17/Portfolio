import React from 'react';
import GridShape from './GridShape';
import { Link } from 'react-router-dom';
import image404 from '../../assets/images/error/404.svg';
import image404dark from '../../assets/images/error/404-dark.svg';

const Error = () => {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1 bg-white">
                <GridShape />
                <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
                    <h1 className="mb-8 font-bold text-gray-800 text-title-md  xl:text-title-2xl">
                        ERROR
                    </h1>

                    <img src={image404} alt="404" className="" />
                    <img
                        src={image404dark}
                        alt="404"
                        className="hidden"
                    />

                    <p className="mt-10 mb-6 text-base text-gray-700 sm:text-lg">
                        We can't find the page you are looking for!
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800"
                    >
                        Back to home page
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Error;

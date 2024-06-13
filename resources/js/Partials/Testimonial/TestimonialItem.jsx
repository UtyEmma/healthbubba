import React from 'react'
import TestimonialContent from './TestimonialContent'

export default function ({active = false, message, author, role, image, classes = {
    message: '',
    image: '',
    author: '',
    role: ''
}, className, ...props}) {
    return (
        <div style={{
            zoom: active ? 1 : 0.95
        }} className={`${active ? '' : 'bg-white shadow-lg p-5 md:p-10 md:rounded-2xl rounded-lg'}  overflow-hidden ${className}`}>
            <div className={active ? 'md:rounded-2xl rounded-lg bg-white bg-opacity-95 shadow-lg p-5 md:p-16 space-y-5 relative z-50' : 'blur'}>
                <div className={`space-y-5`}>
                    <p className={`text-muted text-sm md:text-lg font-medium leading-relaxed ${classes.message}`}>"{message}"</p>
                    <div className="justify-start items-center gap-4 inline-flex">
                        <img className={`h-14 ${classes.image}`} src={image} />
                        <div className="flex-col text-xs md:text-base justify-start items-start inline-flex">
                            <div className={`text-neutral-900 font-medium ${author}`}>{author}</div>
                            <div className={`text-gray-600 text-base font-normal ${role}`}>{role}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
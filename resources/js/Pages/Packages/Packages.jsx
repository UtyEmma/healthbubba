import GuestLayout from '@/Layouts/GuestLayout'
import { Cta } from '@/Partials/Cta'
import PackageList from '@/Partials/Packages/PackageList'
import SinglePackage from '@/Partials/Packages/SinglePackage'
import { Head, Link } from '@inertiajs/react'
import Fuse from 'fuse.js'
import React, { useState } from 'react'

export default function ({categories, tests}) {

    const [category, setCategory] = useState(null)

    const [showing, setShowing] = useState(tests)

    const reset = () => setShowing(tests)

    const [search, setSearch] = useState()

    const changeCategory = (e, category) => {
        if(e.target.checked) {
            setCategory(category)
            if(!category) return reset();
            return setShowing(tests.filter(test => test.category_id == category?.category_id))
        }

        setCategory(null)
    }

    const searchTest = (e) => {
        const val = e.target.value;
        if(!val) return reset();
        
        const fuse = new Fuse(tests, {
            keys: ["test_name"]
        })

        const results = fuse.search(val);
        setShowing(results.map(item => item.item));
    }

    return (
        <GuestLayout>
            <Head title='Test Packages' />
            <div className={''}>
                <div className={'max-w-7xl mx-auto mb-5 px-4'}>
                    <ul className={'flex font-medium text-muted text-[14px] space-x-1 items-center'}>
                        <li>
                            <Link className=' hover:text-primary' href={route('home')}>Home</Link>
                        </li>
                        <li>/</li>
                        <li>Packages</li>
                    </ul>

                    <h2 className={'text-2xl md:text-4xl font-medium'}>Explore the available medical test packages</h2>
                </div>

                <div className="py-3 border-y border-gray-200 ">
                    <div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
                        <div className='md:block hidden'>
                            <p className="text-muted">1 - {showing.length} of {showing.length} results</p>
                        </div>

                        <div className={'w-full md:w-2/5'}>
                            <div className={'relative  flex items-center '}>
                                <span className={'absolute left-2'}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.4999 17.5L13.8749 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#9CA3AF" stroke-width="1.31602" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                                <input type="text" onChange={searchTest} className={'pl-10 w-full border border-primary rounded-md shadow'} placeholder='Search medical tests' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'max-w-7xl mx-auto grid md:grid-cols-12 gap-5 py-5 md:py-10 px-4'}>
                    <div className="md:col-span-3">
                        <ul className={'space-y-2 sticky top-10'}>
                            <li >
                                <label className='flex space-x-2 items-center font-medium'>
                                    <input type="checkbox" checked={category == null} onChange={(e) => changeCategory(e, null)} className='rounded p-2 text-primary' />
                                    <span>All</span>
                                </label>
                            </li>
                            {
                                categories.map(item => (
                                    <li >
                                        <label className='flex space-x-2 items-center font-medium'>
                                            <input type="checkbox" checked={item.category_id == category?.category_id} onChange={(e) => changeCategory(e, item)} className='rounded p-2 text-primary' />
                                            <span>{item.category_name}</span>
                                        </label>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="md:col-span-9">
                        <div className="grid md:grid-cols-3 gap-5 mb-4">
                            {
                                showing.map(test => {
                                    return (
                                        <div>
                                            <SinglePackage key={test.test_id} test={test} />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* <div className={'flex justify-between text-muted'}>
                            <div>
                                <p>1 - 13 of 200 results</p>
                            </div>
                            <div className={'flex space-x-5'}>
                                <p>1 of 16 pages</p>

                                <div className="flex space-x-3">
                                    <p>Prev</p>
                                    <p>Next</p>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>

                <div className="py-20 px-4 max-w-7xl mx-auto">
                    <Cta />
                </div>
            </div>
        </GuestLayout>
    )
}

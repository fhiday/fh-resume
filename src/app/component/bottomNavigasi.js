'use client'

import Image from 'next/image'
import React from 'react'
import { arrowLeft, arrowLeftDisable, arrowRight, arrowRightDisable } from '../img'
import Link from 'next/link';

function BottomNavigasi({ page, url, nextUrl }) {
    const [isArrowLeftActive, setIsArrowLeftActive] = React.useState(false);
    const [isArrowRightActive, setIsArrowRightActive] = React.useState(false);

    React.useEffect(() => {
        const isActive = () => {
            if (page !== 1 && page !== 6) {
                setIsArrowLeftActive(true);
                setIsArrowRightActive(true);
            }

            if (page === 1) {
                setIsArrowLeftActive(false);
                setIsArrowRightActive(true);
            }

            if (page === 6) {
                setIsArrowLeftActive(true);
                setIsArrowRightActive(false);
            }

        }

        return () => isActive();
    }, [page]);

    return (
        <div>
            {isArrowLeftActive ? (
                <Link href={url}>
                    <Image src={arrowLeft} className="float-left mt-[3px]" width={16} height={16} alt={`${url}`} />
                </Link>
            ) : (
                <Link href={'#'}>
                    <Image src={arrowLeftDisable} className="float-left mt-[3px]" width={16} height={16} alt={'url disable'} />
                </Link>
            )}
            <span className="float-left font-sans font-semibold text-sm mx-5">{page} / 6</span>
            {isArrowRightActive ? (
                <Link href={nextUrl}>
                    <Image src={arrowRight} className="float-left mt-[3px]" width={16} height={16} alt={`${nextUrl}`} />
                </Link>
            ) : (
                <Link href={'#'}>
                    <Image src={arrowRightDisable} className="float-left mt-[3px]" width={16} height={16} alt="next url disable" />
                </Link>
            )}
        </div>
    )
}

export default BottomNavigasi
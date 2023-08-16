'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { menuIcon, menuIconDisable } from '../img'

export default function LeftMenu() {
    const [isActive, setIsActive] = React.useState('');
    const pathname = usePathname();
    const imgActive = (active) => {
        if (active) {
            return menuIcon;
        }
        return menuIconDisable;
    }

    React.useEffect(() => {
        setIsActive(pathname);
    }, [pathname]);

    return (
        <div>
            <ul>
                <li className='w-full float-left'>
                    <Link href="/profil" className={isActive === '/profil' ? `font-sans` : `font-sans text-[#646464] hover:text-white`}>
                        <Image src={isActive === '/profil' ? imgActive(true) : imgActive(false)} width={16} height={4} className='float-left flex-shrink mt-[10px] mr-3' alt='menu-icon' />
                        Profil
                    </Link>
                </li>
                <li className='w-full float-left'>
                    <Link href="/pendidikan" className={isActive === '/pendidikan' ? `font-sans` : `font-sans text-[#646464] hover:text-white`}>
                        <Image src={isActive === '/pendidikan' ? imgActive(true) : imgActive(false)} width={16} height={4} className='float-left flex-shrink mt-[10px] mr-3' alt='menu-icon' />
                        Pendidikan
                    </Link>
                </li>
                <li className='w-full float-left'>
                    <Link href="pengalaman-kerja" className={isActive === '/pengalaman-kerja' ? `font-sans` : `font-sans text-[#646464] hover:text-white`}>
                        <Image src={isActive === '/pengalaman-kerja' ? imgActive(true) : imgActive(false)} width={16} height={4} className='float-left flex-shrink mt-[10px] mr-3' alt='menu-icon' />
                        Pengalaman Kerja
                    </Link>
                </li>
                <li className='w-full float-left'>
                    <Link href="#" className={isActive === '/keterampilan' ? `font-sans` : `font-sans text-[#646464] hover:text-white`}>
                        <Image src={isActive === '/keterampilan' ? imgActive(true) : imgActive(false)} width={16} height={4} className='float-left flex-shrink mt-[10px] mr-3' alt='menu-icon' />
                        Keterampilan
                    </Link>
                </li>
                <li className='w-full float-left'>
                    <Link href="#" className={isActive === '/penghargaan' ? `font-sans` : `font-sans text-[#646464] hover:text-white`}>
                        <Image src={isActive === '/penghargaan' ? imgActive(true) : imgActive(false)} width={16} height={4} className='float-left flex-shrink mt-[10px] mr-3' alt='menu-icon' />
                        Penghargaan
                    </Link>
                </li>
                <li className='w-full float-left'>
                    <Link href="#" className={isActive === '/portofolio' ? `font-sans` : `font-sans text-[#646464] hover:text-white`}>
                        <Image src={isActive === '/portofolio' ? imgActive(true) : imgActive(false)} width={16} height={4} className='float-left flex-shrink mt-[10px] mr-3' alt='menu-icon' />
                        Portofolio
                    </Link>
                </li>
            </ul>
        </div>
    )
}

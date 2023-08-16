import './globals.css'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import { LeftMenu } from './component'
import { avatar, background, facebook, instagram, twitter, youtube } from './img'
import Link from 'next/link'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Fauzan Hidayat',
  description: 'Selamat datang di website resume saya, semoga anda menemukan apa yang anda cari :)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{
        backgroundImage: `url('background.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <div className='grid md:grid-cols-12 gap-4 p-10'>
          <div className='md:col-span-2 col-span-12'>
            <Link href={'/'}>
              <Image className='mb-3 rounded-full mx-auto md:left-24' src={avatar} alt="foto profil fauzan hidayat" width={132}
                height={132} />
            </Link>
          </div>
          <div className='md:col-span-10 col-span-12'>
            <div className="text-white mb-5 md:text-4xl text-center md:text-justify text-2xl font-semibold">Fauzan Hidayat</div>
            <div className="text-[#646464] text-xs md:text-sm font-semibold">Jl. Cempedak I No.10, Wonorejo, Kec. Marpoyan Damai, Kota Pekanbaru, Riau 28121</div>
            <div className="text-[#646464] text-xs md:text-sm font-semibold">+62-823-8768-5517     /    +62-831-6563-3269</div>
            <div className="text-[#646464] text-xs md:text-sm font-semibold">Fauzanhidayat112@gmail.com</div>
          </div>

          <div className='col-span-12 bg-[#646464] h-[1px]'></div>
        </div>

        <div className='grid md:grid-cols-12 gap-4 px-10'>
          <div className='md:col-span-2 col-span-12 hidden md:block'>
            <LeftMenu />
          </div>
          <div className='col-span-10'>
            {children}
          </div>
        </div>

        <div className='grid md:grid-cols-12 gap-4 px-10'>
          <div className='mt-20 col-span-12 w-full bg-[#646464] h-[1px]'></div>
          <div className='col-span-12'>
            <div className="w-60 mx-auto h-10 p-10">
              <Image src={facebook} width={24} height={24} className="float-left" alt='facebook' />
              <Image src={instagram} width={24} height={24} className="float-left ml-5" alt='instagram' />
              <Image src={twitter} width={24} height={24} className="float-left ml-5" alt='twitter' />
              <Image src={youtube} width={24} height={24} className="float-left ml-5" alt='youtube' />
            </div>
          </div>
          <div className="col-span-12 font-sans text-sm text-[#646464] text-center mb-10">&copy; copyright 2023 - Fauzan Hidayat</div>
        </div>
      </body>
    </html >
  )
}

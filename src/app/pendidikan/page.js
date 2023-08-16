import React from 'react'
import { BottomNavigasi } from '../component'

function Pendidikan() {
    return (
        <div>
            <h2 className="font-sans font-semibold md:text-2xl text-xl mb-5">Pendidikan Terakhir</h2>
            <p className='text-md font-sans font-semibold'>Sekolah Menengah Kejuruan (SMK) Negeri 2 Kecamatan Guguak</p>
            <ul className='list-disc ml-10 font-sans font-normal text-sm text-[#AEADAD] mb-5'>
                <li>Jurusan: <b>Rekayasa Perangkat Lunak</b></li>
                <li>Tahun Lulus: <b>2015</b></li>
            </ul>
            <p className="font-sans font-normal text-sm text-[#AEADAD] mb-20">
                Pada pendidikan di SMK Negeri 2 Kecamatan Guguak dengan jurusan Rekayasa Perangkat Lunak, saya telah memperoleh pengetahuan dan keterampilan yang penting dalam pengembangan perangkat lunak. Program studi ini memberikan pemahaman mendalam tentang konsep pemrograman, desain perangkat lunak, pengujian, dan manajemen proyek. Selama di SMK, saya juga telah berpartisipasi dalam proyek-proyek praktis yang memungkinkan saya untuk mengembangkan aplikasi nyata dan memahami bagaimana penerapan teknologi dalam dunia nyata.
                Pendidikan di SMK Negeri 2 Kecamatan Guguak telah memberikan landasan yang kokoh bagi saya untuk meraih karir di bidang pengembangan perangkat lunak. Saya merasa sangat beruntung telah mendapatkan pelatihan dan pendidikan yang relevan dalam mengembangkan keterampilan teknis dan pemahaman yang diperlukan dalam industri teknologi informasi.
            </p>
            <BottomNavigasi page={2} url={'/profil'} nextUrl={'/pengalaman-kerja'} />
        </div>
    )
}

export default Pendidikan
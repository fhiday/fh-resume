import React from 'react'
import { BottomNavigasi } from '../component'

function PengalamanKerja() {
    return (
        <div>
            <h2 className="font-sans font-semibold md:text-2xl text-xl mb-5">Pengalaman Kerja</h2>
            <p className='text-md font-sans font-semibold'>PT.Raksasa Indonesia</p>
            <ul className='list-disc ml-10 font-sans font-normal text-sm text-[#AEADAD] mb-5'>
                <li>Jabatan: <b>Front End Developer</b></li>
                <li>Tanggal Mulai: <b>11 Juni 2023</b></li>
                <li>Tanggal Berakhir: <b>11 Juli 2023</b></li>
            </ul>

            <h3 className='font-sans md:ml-5 font-normal text-sm'>Tanggung Jawab Utama</h3>
            <ul className='list-decimal ml-5 md:ml-16 font-sans font-normal text-sm text-[#AEADAD] mb-10'>
                <li>
                    Membangun antarmuka pengguna interaktif dan responsif menggunakan HTML, CSS, dan JavaScript. ( React Js )
                </li>
                <li>
                    Berkolaborasi dengan desainer UI/UX dalam menerjemahkan desain menjadi kode yang fungsional dan estetis.
                </li>
                <li>
                    Mengoptimalkan kinerja antarmuka pengguna untuk pengalaman yang lebih baik.
                </li>
            </ul>

            <p className='text-md font-sans font-semibold'>Badan Keuangan Daerah ( BKD Mentawai )</p>
            <ul className='list-disc ml-10 font-sans font-normal text-sm text-[#AEADAD] mb-5'>
                <li>Jabatan: <b>Full Stack Developer</b></li>
                <li>Tanggal Mulai: <b>8 Maret 2020</b></li>
                <li>Tanggal Berakhir: <b>8 Februari 2021</b></li>
            </ul>

            <h3 className='font-sans md:ml-5 font-normal text-sm'>Tanggung Jawab Utama</h3>
            <ul className='list-decimal ml-5 md:ml-16 font-sans font-normal text-sm text-[#AEADAD] mb-10'>
                <li>
                    Bertanggung jawab atas pengembangan dan pemeliharaan aplikasi manajemen keuangan daerah menggunakan teknologi MEAN (MongoDB, Express.js, Angular, Node.js).
                </li>
                <li>
                    Mengimplementasikan integrasi dengan sistem pihak ketiga melalui RESTful API, yang berhasil mengurangi waktu pemrosesan input data sebesar 30%.
                </li>
                <li>
                    Memimpin tim junior dalam pengembangan proyek dan memberikan pelatihan mengenai praktik terbaik dalam pengembangan perangkat lunak.
                </li>
            </ul>

            <p className='text-md font-sans font-semibold'>Badan Kepegawaian dan Sumber Daya Manusia ( BKPSDM Kab. Lima Puluh Kota )</p>
            <ul className='list-disc ml-10 font-sans font-normal text-sm text-[#AEADAD] mb-5'>
                <li>Jabatan: <b>Full Stack Engineer</b></li>
                <li>Tanggal Mulai: <b>8 Maret 2018</b></li>
                <li>Tanggal Berakhir: <b>8 Februari 2019</b></li>
            </ul>

            <h3 className='font-sans md:ml-5 font-normal text-sm'>Tanggung Jawab Utama</h3>
            <ul className='list-decimal ml-5 md:ml-16 font-sans font-normal text-sm text-[#AEADAD] mb-10'>
                <li>
                    Bertanggung jawab atas pengembangan lengkap dari aplikasi web ( Sistem Imformasi Pegawai ) SIMPEG dengan penekanan pada aspek teknis dan antarmuka.
                </li>
                <li>
                    Berpartisipasi dalam perancangan basis data, pengembangan API, serta implementasi fitur-fitur kunci.
                </li>
                <li>
                    Memastikan keamanan aplikasi dan perlindungan data melalui praktik terbaik dalam pengembangan.
                </li>
            </ul>

            <p className='text-md font-sans font-semibold'>PT Yokogawa Manufacturing Batam</p>
            <ul className='list-disc ml-10 font-sans font-normal text-sm text-[#AEADAD] mb-5'>
                <li>Jabatan: <b>Full Stack Developer</b></li>
                <li>Tanggal Mulai: <b> 9 Juni 2017</b></li>
                <li>Tanggal Berakhir: <b>8 Desember 2017</b></li>
            </ul>

            <h3 className='font-sans md:ml-5 font-normal text-sm'>Tanggung Jawab Utama</h3>
            <ul className='list-decimal ml-5 md:ml-16 font-sans font-normal text-sm text-[#AEADAD] mb-10'>
                <li>
                    Mengembangkan fitur-fitur baru untuk produk perangkat lunak OT ( Over Time ) dengan fokus pada bagian depan dan belakang menggunakan PHP dan .NET
                </li>
                <li>
                    Merancang dan mengimplementasikan arsitektur yang efisien dan skalabel untuk memastikan kinerja dan keandalan.
                </li>
                <li>
                    Berkolaborasi dengan tim desain dalam seluruh siklus pengembangan.
                </li>
            </ul>

            {/** bottom navigasi */}
            <BottomNavigasi page={3} url={'/pendidikan'} nextUrl={'/keterampilan'} />
        </div>
    )
}

export default PengalamanKerja
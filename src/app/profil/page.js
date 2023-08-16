'use client'

import Image from "next/image"
import { BottomNavigasi } from "../component"

export default function Profil() {
  return (
    <div>
      <h2 className="font-sans font-semibold md:text-2xl text-xl mb-5">Profil Singkat: Pengembang Perangkat Lunak Berpengalaman :</h2>

      <p className="font-sans font-normal text-sm text-[#AEADAD] mb-20">
        Saya adalah seorang pengembang perangkat lunak berpengalaman dengan lebih dari 4 tahun di industri teknologi informasi. Dengan latar belakang pendidikan dalam bidang IT, saya telah menghasilkan solusi perangkat lunak inovatif dan efisien untuk berbagai tantangan teknis. Kemampuan saya dalam Front End, Back End, dan Pengembangan Perangkat Lunak lainnya telah memungkinkan saya untuk menghadirkan produk-produk berkualitas tinggi serta berkontribusi dalam tim pengembangan yang kolaboratif. Saya percaya bahwa kombinasi antara pemahaman mendalam tentang kode dan ketertarikan saya terhadap perkembangan teknologi memungkinkan saya untuk terus menghadapi tantangan baru dalam dunia pengembangan perangkat lunak. Saya siap untuk terus berinovasi dan berkontribusi dalam memajukan industri teknologi informasi.
      </p>

      <BottomNavigasi page={1} url={'#'} nextUrl={'/pendidikan'} />
    </div>
  )
}

import React from "react"
export default function Profile(){
    return (
    <div id="profile" className="section">
           <div className="container mx auto max-w-[1200px] p-3 overflow-hidden">
            <div className="font-secondary text-center font font-bold mb-12">
                 <h4 className="text-secondary mb-3">ALAMAT</h4>
                 <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">Desa : Klatakan </h2>
                 <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">Kecamatan : Tanggul</h2>
                 <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">Kabupaten : jember</h2>
                 <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">Provinsi : Jawa Timur</h2>
            </div>
           </div>
        </div>
    )
}

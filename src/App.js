import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const [formData, setFormData] = useState({
    nama: '',
    nik: '',
    noKk: '',
    alamat: '',
    jenisKendaraan: '',
    tahun: '',
    harga: '',
    tenor: '',
    angsuran: '',
    status: 'Menunggu Approval'
  });

  const jenisKendaraanOptions = [
    { label: 'Motor', value: 'Motor' },
    { label: 'Mobil', value: 'Mobil' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Data Pengajuan:', formData);
    alert('Pengajuan berhasil disimpan!');
  };

  const items = [
    { label: 'Input/Approve Pengajuan', icon: 'pi pi-file', command: () => window.location.reload() },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Menubar model={items} />
      <div style={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem'
      }} className='gap-3'>
        <div className="card shadow-2 border-round" style={{ width: '400px' }}>
          <h1 className="text-center mb-4">Form Pengajuan BCA FINANCE by <br/> Fadhil Khusnul Hakim</h1>
          
        </div> 
        <div>
          <div className="grid gap-3 gap-x-4 align-center">
            <span className="p-float-label">
              <InputText id="nama" name="nama" value={formData.nama} onChange={handleInputChange} className="w-full" />
              <label htmlFor="nama">Nama Lengkap</label>
            </span>
            <span className="p-float-label">
              <InputText id="nik" name="nik" value={formData.nik} onChange={handleInputChange} className="w-full" />
              <label htmlFor="nik">NIK</label>
            </span>
            <span className="p-float-label">
              <InputText id="noKk" name="noKk" value={formData.noKk} onChange={handleInputChange} className="w-full" />
              <label htmlFor="noKk">No. KK</label>
            </span>
            <span className="p-float-label">
              <InputText id="alamat" name="alamat" value={formData.alamat} onChange={handleInputChange} className="w-full" />
              <label htmlFor="alamat">Alamat</label>
            </span>
            <span className="p-float-label">
              <Dropdown id="jenisKendaraan" name="jenisKendaraan" value={formData.jenisKendaraan} options={jenisKendaraanOptions} onChange={handleInputChange} className="w-full" />
              <label htmlFor="jenisKendaraan">Jenis Kendaraan</label>
            </span>
            <span className="p-float-label">
              <InputText id="tahun" name="tahun" value={formData.tahun} onChange={handleInputChange} className="w-full" />
              <label htmlFor="tahun">Tahun</label>
            </span>
            <span className="p-float-label">
              <InputText id="harga" name="harga" value={formData.harga} onChange={handleInputChange} className="w-full" />
              <label htmlFor="harga">Harga Kendaraan</label>
            </span>
            <span className="p-float-label">
              <InputText id="tenor" name="tenor" value={formData.tenor} onChange={handleInputChange} className="w-full" />
              <label htmlFor="tenor">Tenor (bulan)</label>
            </span>
            <span className="p-float-label">
              <InputText id="angsuran" name="angsuran" value={formData.angsuran} onChange={handleInputChange} className="w-full" />
              <label htmlFor="angsuran">Angsuran per Bulan</label>
            </span>
            <Button label="Kirim Pengajuan" icon="pi pi-send" className="w-full mt-3" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

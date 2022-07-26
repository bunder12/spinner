import React, {useState} from 'react';
import './input.css'

const Input = () => {

    const [token, setToken] = useState(false);
    
    var tiket = [
            "PROMO12",
            "SEMOGABERUNTUNG",
            "KURANG45",
            "ASIA77",
    ];

    
    const handleinput = () => {
        const nilai = document.getElementById("nilai").value;
        const penutup = document.querySelector(".penutup");
        console.log(nilai)
        var id = tiket.includes(nilai);

            if(id){
                setToken(true)
                alert("selamat memutar spin")
                penutup.classList.add("open")
            }else if(nilai == ""){
                alert("Code tidak boleh kosong")
            }else{
                setToken(false)
                alert("Code yang anda masukan tidak terdaftar")
            }
    }

  return (
    <div className='container-input'>
        <label>Masukan Code Tiket</label>
        <input id='nilai' type="text" placeholder='Masukkan Code Tiket Anda'/>
        <button onClick={handleinput}>Masukan</button>
        <div className='penutup'></div>
    </div>
  )
}

export default Input
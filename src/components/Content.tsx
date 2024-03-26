import React from 'react'
import '../styles/Content.css'
import whatsapp from '../assets/whatsapp.png'
import mainImagem from '../assets/svg/main-image.svg'

export default function Content() {
    return (
        <div className='main-container'>
            <div className='content-container'>
                <div className='content-h1'>
                    <p>Treinos <span>exclusivos</span><br />para você</p>
                </div>
                <div className='paragraphs'>
                    <p>Nós criamos treinos <span>exclusivos e únicos para você</span></p>
                    <p>Invista no seu corpo e tenha muito mais <span>perfomance e qualidade de vida</span></p>
                </div>

                <label className='content-button'>
                    <img src={whatsapp} />
                    <button>
                        Comece já
                    </button>
                </label>


            </div>

            <div className='main-image'>
                    <img src={mainImagem} />
                </div>
        </div>
    )
}

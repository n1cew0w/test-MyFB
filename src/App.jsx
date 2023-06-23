import './App.css'
import bg from './assets/6-d0bbd183d187d188d0b8d185-d181d0bfd0bed181d0bed0b1d0bed0b2-d0b8d181d0bfd180d0b0d0b2d0b8d182d18c-d180d0b0d0b7d0bcd18bd182d18bd0b5-d184-1.jpg'
import avatar from './assets/photo_2023-06-23_22-13-25.jpg'
import viber from './assets/viber.png'
import tg from './assets/telegram.png'
import inst from './assets/instagram.png'
function App() {
    return (
        <>
            <div>
                <div className='avatar'>
                    <span className='avatar_text'>СТЕЛЛА FACEBOOK</span>
                    <img src={avatar} className='avatar_img' alt=""/>
                </div>
                <div className='main'>
                    <span className='main_text'>ЩОБ ПОЧАТИ <span className='green_text'>ЗАРОБЛЯТИ</span>, ВИБЕРИ ЗРУЧНИЙ  ДЛЯ ТЕБЕ МЕСЕНДЖЕР</span>
                </div>
                <div className='buttons'>
                    <div className='button button-vb'>
                        <img className='viber logo' src={viber} alt=""/>
                        <a href="viber://chat?number=%2B380666995051" className='vb_text'>
                            Написати у Viber
                        </a>
                    </div>
                    <div className='button button-tg'>
                        <img className='tg logo' src={tg} alt=""/>
                        <a href="" className='tg_text'>
                            Написати у Telegram
                        </a>
                    </div>
                    <div className='button button-inst'>
                        <img className='inst logo' src={inst} alt=""/>
                        <a href="" className='inst_text'>
                            Написати у Instagram
                        </a>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default App

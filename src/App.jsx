import './App.css'
import bg from './assets/bg.jpg'
import avatar from './assets/avatar.jpg'
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

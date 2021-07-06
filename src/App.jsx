import { useState } from 'react';
import classes from './App.module.css';

import { Header } from './components/Header';
import { Slide } from './components/Slide';
import { Footer } from './components/Footer';
import { BlockScroll } from './components/BlockScroll';
import { Popup } from './components/Popup';


function App() {
  const [targetSlide, setTargetSlide] = useState(0);
  const [clickPoint, setClickPoint] = useState({ x1: null, y1: null });
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleTouchStart = (e) => {
    const firstTouch = e.touches[0];
    setClickPoint({ x1: firstTouch.clientX, y1: firstTouch.clientY });
  }

  const handleTouchMove = (e) => {
    if (isOpenPopup) {
      return;
    }

    if (clickPoint.x1 == null || clickPoint.y1 == null) {
      return false;
    }

    let x2 = e.touches[0].clientX;
    let y2 = e.touches[0].clientY;
    let xDiff = x2 - clickPoint.x1;
    let yDiff = y2 - clickPoint.y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        if (targetSlide <= 0) {
          return ;
        }
        
        setTargetSlide((prev) => prev - 1);
      }
      else {
        if (targetSlide >= 2) {
          return ;
        }
        
        setTargetSlide((prev) => prev + 1);
      }
    }
    setClickPoint({ x1: null, y1: null });
  }

  return (
    <div className={ classes.root }>
      <Header disabled={ isOpenPopup } handleChangeSlide={ setTargetSlide } />

      <div className={ classes.slider }>
        <div
          className={ classes.sliderLine }
          style={{ left: `-${ targetSlide * 1024 }px` }}
          onTouchStart={ handleTouchStart }
          onTouchMove={ handleTouchMove }
        >
          <Slide numberSlide={ 1 }>
            <div className={ classes.preTitle }>
              Привет,
            </div>
            <div className={ classes.title }>
              Это <span className={ classes.bold }>не</span> коммерческое задание
              <div className={ classes.buttonRoot }>
                <button className={ classes.button } onClick={ () => setTargetSlide(1) }>
                  <span className={`material-icons ${ classes.icon }`}>east</span>
                  Что дальше?
                </button>
              </div>
            </div>

            <img className={`${ classes.bgElems } ${ classes.box1Elem1 }`} src="/imgs/box1/1.png" alt="box1-1" />
            <img className={`${ classes.bgElems } ${ classes.box1Elem2 }`} src="/imgs/box1/2.png" alt="box1-2" />
            <img className={`${ classes.bgElems } ${ classes.box1Elem3 }`} src="/imgs/box1/3.png" alt="box1-3" />
            <img className={`${ classes.bgElems } ${ classes.box1Elem4 }`} src="/imgs/box1/4.png" alt="box1-4" />
            <img className={`${ classes.bgElems } ${ classes.box1Elem5 }`} src="/imgs/box1/5.png" alt="box1-5" />
            <img className={`${ classes.bgElems } ${ classes.box1Elem6 }`} src="/imgs/box1/6.png" alt="box1-6" />
            <img className={`${ classes.bgElems } ${ classes.box1Elem7 }`} src="/imgs/box1/7.png" alt="box1-7" />
            <img className={`${ classes.bgElems } ${ classes.box1Elem8 }`} src="/imgs/box1/8.png" alt="box1-8" />
            <img className={`${ classes.bgElems } ${ classes.box1Elem9 }`} src="/imgs/box1/9.png" alt="box1-9" />
          </Slide>
          <Slide numberSlide={ 2 }>
            <div className={ classes.titleMessage }>Текст сообщения</div>
            <BlockScroll />
            <img className={`${ classes.bgElems } ${ classes.box2Elem1 } ${ targetSlide === 1 && classes.animatonStart }`} src="/imgs/box2/1.png" alt="box2-1" />
            <img className={`${ classes.bgElems } ${ classes.box2Elem3 } ${ targetSlide === 1 && classes.animatonStart }`} src="/imgs/box2/3.png" alt="box2-3" />
            <img className={`${ classes.bgElems } ${ classes.box2Elem4 } ${ targetSlide === 1 && classes.animatonStart }`} src="/imgs/box2/4.png" alt="box2-4" />
            <img className={`${ classes.bgElems } ${ classes.box2Elem5 } ${ targetSlide === 1 && classes.animatonStart }`} src="/imgs/box2/5.png" alt="box2-5" />
          </Slide>
          <Slide numberSlide={ 3 }>
            <img className={`${ classes.bgElems } ${ classes.box3ElemBottle } `} src="/imgs/box3/bottle.png" alt="bottle" />
            <img className={`${ classes.bgElems } ${ classes.box3Elem1 } `} src="/imgs/box3/1.png" alt="box3-1" />
            <img className={`${ classes.bgElems } ${ classes.box3Elem2 } `} src="/imgs/box3/2.png" alt="box3-2" />
            <img className={`${ classes.bgElems } ${ classes.box3Elem3 } `} src="/imgs/box3/3.png" alt="box3-3" />
            <img className={`${ classes.bgElems } ${ classes.box3Elem4 } `} src="/imgs/box3/4.png" alt="box3-4" />
            <img className={`${ classes.bgElems } ${ classes.box3Elem5 } `} src="/imgs/box3/5.png" alt="box3-5" />
            <img className={`${ classes.bgElems } ${ classes.box3Elem6 } `} src="/imgs/box3/6.png" alt="box3-6" />
            <img className={`${ classes.bgElems } ${ classes.box3Elem7 } `} src="/imgs/box3/7.png" alt="box3-7" />
            <img className={`${ classes.bgElems } ${ classes.box3Elem8 } `} src="/imgs/box3/8.png" alt="box3-8" />
            <div className={ classes.keyMessage }>
              Ключевое сообщение
              <div className={ classes.subtitle }>
                Brend <span className={ classes.bold }>XY</span>
              </div>
            </div>
            <div className={ classes.content }>
              <div className={`${ classes.block } ${ classes.block1 }`}>
                <img src="/imgs/box3/icon2.png" alt="icon" />
                <div className={ classes.textBlock1 }>
                  3 раза в день после еды. После приема препарата рекомендуется воздержаться от пищи и напитков в течение 1 часа
                </div>
              </div>
              <div className={ classes.column }>
                <div className={`${ classes.block } ${ classes.block2 }`}>
                  <img src="/imgs/box3/icon1.png" alt="icon" />
                  <div className={ classes.textBlock2 }>
                    Курс лечения от 7 дней до 1 мес.
                  </div>
                </div>
                <div className={ classes.buttonRoot }>
                  <button className={`${ classes.button } ${ isOpenPopup && classes.openPopup }`} onClick={ () => setIsOpenPopup(true) }>
                    <span className={`material-icons ${ classes.icon }`}>add_circle_outline</span>
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          </Slide>
        </div>

      </div>      

      <Popup open={ isOpenPopup } handleClose={ () => setIsOpenPopup(false) } />

      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './Slider.css';

export default function Slider() {
  const _sliderItems = Array(6).fill('item');

  const [total, setTotal] = useState(0);
  const [_view, setView] = useState(1);
  const [curSlider, setCurSlider] = useState(1);

  useEffect(() => {
    setTotal(prev => document.querySelector('.slider-list').childElementCount);
    // setView(prev => document.querySelector('#view').value || prev);
  }, []);

  return (
    <div className='project-slider'>
      <section className='slider-view'>
        <header>
          <h2>슬라이더</h2>
        </header>

        <div className='slider'>
          <div
            className='slider-list'
            style={{
              transform: `translateX(-${100 * (curSlider - 1)}%)`,
            }}
          >
            {_sliderItems.map((v, index) => (
              <div
                className='slider-item'
                style={{
                  width: `${100 / _view}%`,
                }}  
              >
                <article>{index + 1}</article>
              </div>
            ))}
          </div>
        </div>

        <div className='controller'>
          <ControllerBtn
            btnType='prev'
            setCurSlider={setCurSlider}
            isDisabled={curSlider === 1}
            view={_view}
          >
              &lt;
          </ControllerBtn>
          <ControllerBtn
            btnType='next'
            setCurSlider={setCurSlider}
            isDisabled={curSlider === Math.ceil(total/_view)}
            view={_view}
          >
              &gt;
          </ControllerBtn>
        </div>

        <dl className='pagenation'>
          <dt>현재 페이지</dt>
          <dd>{curSlider}/{Math.ceil(total/_view)}</dd>
        </dl>
      </section>

      <section className='slider-option'>
        <header>
          <h2>슬라이더 옵션</h2>
        </header>

        <label>
          <span>보여줄 슬라이더 개수</span>
          <input type="text" name='view' id='view' onChange={(e) => {
            const newView = e.currentTarget.value;
            const isChange = newView && newView <= total;

            if (newView > total) {
              alert(total + '보다 작거나 같은 값을 입력해주세요');
              e.currentTarget.value = '';
              return;
            }
            
            setView(prev => isChange ? newView : prev);
            setCurSlider(prev => isChange ? 1 : prev);
          }} />
        </label>

        <label>
          <span>gutter</span>
          <input type="text" />
        </label>
      </section>
    </div>
  );
}

const ControllerBtn = ({children, setCurSlider, btnType, isDisabled, view}) => {
  const handleCurSlider = () => {
    setCurSlider(prev => btnType === 'prev' ? prev - 1 : prev + 1);
  };

  return (
    <button type='button'
      onClick={handleCurSlider}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
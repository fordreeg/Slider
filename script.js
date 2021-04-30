function Carousel ({sliderContainer, prevBtn, nextBtn, sliderWrappper, sliderSpace, slideItem}) {

    const container = document.querySelector(sliderContainer),
          prev = document.querySelector(prevBtn),
          next = document.querySelector(nextBtn),
          sliderWrap = document.querySelector(sliderWrappper),
          sliderField = document.querySelector(sliderSpace),
          slides = document.querySelectorAll(slideItem),
          width = window.getComputedStyle(sliderWrap).width;
    
    let slideIndex = 1;
    let offset = 0;

    sliderField.style.cssText = `
        display: flex;
        width: ${100 * slides.length}%;
        transition: .5s all;
    `;

    sliderWrap.style.cssText = `
        overflow: hidden;
        width: 100%;
    `;

    slides.forEach(item => {
        item.style.cssText = `
            width: ${width};
            height: 400px;
        `;
    });

    const indicators = document.createElement('ol'),
          dots = [];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    container.append(indicators);

    for (let i = 0; i < slides.length; i++) {

        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        if(i === 0) {
            dot.style.opacity = '1';
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function setOpacity(dots) {
        dots.forEach(item => item.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    }
    
    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
    
            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);
            sliderField.style.transform = `translateX(-${offset}px)`;
    
            setOpacity(dots);
        });
    });

    next.addEventListener('click', () => {
        if(offset === deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }
        sliderField.style.transform = `translateX(-${offset}px)`;
    
        if (slideIndex === slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
    
        setOpacity(dots);
    });
    
    prev.addEventListener('click', () => {
        if(offset === 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }
        sliderField.style.transform = `translateX(-${offset}px)`;
    
        if (slideIndex === 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
    
        setOpacity(dots);
    });

};

Carousel({
    sliderContainer: '.container',
    prevBtn: '#prev',
    nextBtn: '#next',
    sliderWrappper: '.slider-wrap',
    sliderSpace: '.slides',
    slideItem: '.slide',

});
// const container = document.querySelector('.container'),
//       prev = document.querySelector('#prev'),
//       next = document.querySelector('#next'),
//       sliderWrap = document.querySelector('.slider-wrap'),
//       sliderField = document.querySelector('.slides'),
//       slides = document.querySelectorAll('.slide'),
//       width = window.getComputedStyle(sliderWrap).width;
      
// let slideIndex = 1;
// let offset = 0;

// sliderField.style.cssText = `
//     display: flex;
//     width: ${100 * slides.length}%;
//     transition: .5s all;
//     `;

// sliderWrap.style.overflow = "hidden";

// slides.forEach(item => {
//     item.style.width = width;
// });

// const indicators = document.createElement('ol'),
//       dots = [];

// indicators.classList.add('carousel-indicators');
// indicators.style.cssText = `
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: 15;
//     display: flex;
//     justify-content: center;
//     margin-right: 15%;
//     margin-left: 15%;
//     list-style: none;
// `;

// container.append(indicators);

// for (let i = 0; i < slides.length; i++) {

//     const dot = document.createElement('li');
//     dot.setAttribute('data-slide-to', i + 1);
//     dot.style.cssText = `
//         box-sizing: content-box;
//         flex: 0 1 auto;
//         width: 30px;
//         height: 6px;
//         margin-right: 3px;
//         margin-left: 3px;
//         cursor: pointer;
//         background-color: #fff;
//         background-clip: padding-box;
//         border-top: 10px solid transparent;
//         border-bottom: 10px solid transparent;
//         opacity: .5;
//         transition: opacity .6s ease;
//     `;
//     if(i == 0) {
//         dot.style.opacity = '1';
//     }
//     indicators.append(dot);
//     dots.push(dot);
// }

// function setOpacity(dots) {
//     dots.forEach(item => item.style.opacity = '.5');
//     dots[slideIndex - 1].style.opacity = '1';
// }

// function deleteNotDigits(str) {
//     return +str.replace(/\D/g, '');
// }

// dots.forEach(dot => {
//     dot.addEventListener('click', (e) => {
//         const slideTo = e.target.getAttribute('data-slide-to');

//         slideIndex = slideTo;
//         offset = deleteNotDigits(width) * (slideTo - 1);
//         sliderField.style.transform = `translateX(-${offset}px)`;

//         setOpacity(dots);
//     });
// });
      
// next.addEventListener('click', () => {
//     if(offset === deleteNotDigits(width) * (slides.length - 1)) {
//         offset = 0;
//     } else {
//         offset += deleteNotDigits(width);
//     }
//     sliderField.style.transform = `translateX(-${offset}px)`;

//     if (slideIndex === slides.length) {
//         slideIndex = 1;
//     } else {
//         slideIndex++;
//     }

//     setOpacity(dots);
// });

// prev.addEventListener('click', () => {
//     if(offset === 0) {
//         offset = deleteNotDigits(width) * (slides.length - 1);
//     } else {
//         offset -= deleteNotDigits(width);
//     }
//     sliderField.style.transform = `translateX(-${offset}px)`;

//     if (slideIndex === 1) {
//         slideIndex = slides.length;
//     } else {
//         slideIndex--;
//     }

//     setOpacity(dots);
// });
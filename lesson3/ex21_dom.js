// 모든 링크 비활성화 하기
Array.from(document.querySelectorAll('a')).forEach(el => {
    el.addEventListener('click', event => {
        event.preventDefault();
        alert('링크 비활성화');
    }, false);
})

// 로고 변경
document
    .querySelector('#header > div.special_bg > div > div.logo_area > h1')
    .innerHTML = '<div style="color:#03CF5B;font-size:4rem;display:flex;align-items:center;justify-content:center;width:222px;height:52px;" onclick="">👒 NEVER</div>';

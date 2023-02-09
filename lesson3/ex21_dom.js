// 모든 링크 비활성화 하기
Array.from(document.querySelectorAll('a')).forEach(el => {
    el.addEventListener('click', event => {
        event.preventDefault();
        alert('링크 비활성화');
    }, false);
})

// 로고 변경
document
    .querySelector('#ad_topexpand > div')
    .innerHTML = '<img src="https://images.ctfassets.net/x63mv991hgep/7mUGb8LFa6Ed7JKz2hWw0d/8feadf039c73ccb15e092fd4a5023af2/febBenefit1.jpg" alt="카이트 호텔" style = "width: 750px; height: 135px">';


'use strict';

const userNameInput = document.getElementById('user-name')

const assessmentButton = document.getElementById('assessment')

const resultDivided = document.getElementById('result-area')

const tweetDivided = document.getElementById('tweet-area')


const answers = [
    '{userName}の良い所は、ａです。{userName}の特徴はａ、で良いです',

    '{userName}の良い所は、ｂです。{userName}の特徴はｂ、で良いです',

    '{userName}の良い所は、ｃです。{userName}の特徴はｃ、で良いです',

    '{userName}の良い所は、ｄです。{userName}の特徴はｄ、で良いです',

    '{userName}の良い所は、ｅです。{userName}の特徴はｅ、で良いです',

    '{userName}の良い所は、ｆです。{userName}の特徴はｆ、で良いです',

    '{userName}の良い所は、ｇです。{userName}の特徴はｇ、で良いです',

    '{userName}の良い所は、ｈです。{userName}の特徴はｈ、で良いです',

    '{userName}の良い所は、ｉです。{userName}の特徴はｉ、で良いです',

    '{userName}の良い所は、ｊです。{userName}の特徴はｊ、で良いです',

]

/*
　＊　コメント
　＊　コメント
*/

function assessment(userName) {
    // 全文字のコード番号を取得し、足し算する
    let sumOfCharCode = 0;
    for (let i = 0;i <userName.length;i++){
        sumOfCharCode = sumOfCharCode +userName.charCodeAt(i);
    }
    //上記を割って添え字の数値を求める
    const index = sumOfCharCode % answers.length;
   
    let result = answers[index];

    result = result.replace(/\{userName\}/g,userName);

    return result;

}

function removeAllChildren(element){
    while (resultDivided.firstChild) {
    //* ２回目以降で、行が追記されているを防ぐ

    resultDivided.removeChild(resultDivided.firstChild);
    }
}


console.log(assessment('たろう'))

console.log(assessment('じろう'))

console.log(assessment('さぶろう'))


assessmentButton.onclick = () => {

const userName = userNameInput.value;

console.log(userName);
console.log('ボタンオン！！！');

if (userName.length === 0) {

  return;

}

removeAllChildren(resultDivided);

const header = document.createElement('h3');
header.innerText = '診断結果';
resultDivided.appendChild(header);

const paragraph = document.createElement('p')
const result = assessment(userName);
paragraph.innerText = result;
resultDivided.appendChild(paragraph);

const anchor = document.createElement('a');
const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' +
encodeURIComponent('あなたのいいところ')  + '&ref_src=twsrc%5Etfw' ;
anchor.setAttribute('href',hrefValue);
anchor.className = 'twitter-hashtag-button';
anchor.setAttribute('data-text',result);
anchor.innerText = '#あなたのいいところ'; 

const script = document.createElement('script');
script.setAttribute('src','https://platform.twitter.com/widgets.js');
tweetDivided.appendChild(script);

tweetDivided.appendChild(anchor);

}


function qs(target){
    return(document.querySelector(target))
}

qs("#container1").style.display="none";
function start(){
    qs("#container1").style.display="flex";
    qs("#container2").style.display="none";
}

let haiku = [
    "村雨の 露もまだひぬ 槇の葉に 霧立ちのぼる 秋の夕暮れ",
    "住の江の 岸による波 よるさへや 夢の通ひ路 人目よくらむ",
    "めぐり逢ひて 見しやそれとも わかぬ間に 雲隠れにし 夜半の月かな",
    "吹くからに 秋の草木の しをるれば むべ山風を あらしといふらむ",
    "さびしさに 宿を立ち出でて ながむれば いづこも同じ 秋の夕暮れ",
    "ほととぎす なきつる方を 眺むれば ただ有り明けの 月ぞ残れる",
    "瀬を早み 岩にせかるる 滝川の われても末に 逢はむぞと思ふ",
    "春過ぎて 夏来にけらし 白妙の 衣ほすてふ 天の香具山",
    "あしひきの 山鳥の尾の しだり尾の ながながし夜を ひとりかも寝む",
    "田子の浦に うち出でて見れば 白妙の 富士の高嶺に 雪は降りつつ",
    "花の色は 移りにけりな いたづらに わが身世にふる ながめせし間に",
    "ひさかたの 光のどけき 春の日に しづごころなく 花の散るらむ",
    "人はいさ 心も知らず ふるさとは 花ぞ昔の 香ににほひける",
    "玉の緒よ 絶えなば絶えぬ ながらへば 忍ぶることの 弱りもぞする",
]

let shuffledHaiku = haiku.sort(() => Math.random() - 0.5)
let questionNumber = 0;
let question
let answer
let questionlength = 3;
let questionlengthNow;

function ChangeQuestion(){
    if(questionNumber>13){
        shuffledHaiku = haiku.sort(() => Math.random() - 0.5)
        questionNumber = 0;
    }
    questionlengthNow = questionlength;
    questionNumber++
    answer = shuffledHaiku[questionNumber - 1]
    question = answer.slice(0, questionlength)
    qs("#question").innerHTML = question;
}

let buttonsArray = ["","","","",""];

function ChangeButton(){
    buttonsArray = ["","","","",""];
    buttonsArray[Math.floor(Math.random() * 5)] = answer[questionlengthNow];
    

    for(const [i,button] of buttonsArray.entries()){
        if(buttonsArray[i]==""){
            let random1 = Math.floor(Math.random() * 14)
            let random2 = Math.floor(Math.random() * haiku[random1].length)
            buttonsArray[i] = haiku[random1][random2]
        }
    }
    console.log(buttonsArray);
    qs("#b0").innerHTML = buttonsArray[0]
    qs("#b1").innerHTML = buttonsArray[1]
    qs("#b2").innerHTML = buttonsArray[2]
    qs("#b3").innerHTML = buttonsArray[3]
    qs("#b4").innerHTML = buttonsArray[4]

    qs("#b0").style.backgroundColor = "white";
    qs("#b1").style.backgroundColor = "white";
    qs("#b2").style.backgroundColor = "white";
    qs("#b3").style.backgroundColor = "white";
    qs("#b4").style.backgroundColor = "white";
}

function ClickButton(number){
    if(buttonsArray[number] == answer[questionlengthNow]){
        questionlengthNow++
        question += buttonsArray[number];
        qs("#question").innerHTML = question;

        if(answer[questionlengthNow]===undefined){
            setTimeout(() => {
                ChangeQuestion();

                ChangeButton();
            }, 1000);
        }else{
            ChangeButton();
        }
    }else{
        qs(`#b${number}`).style.backgroundColor = "red";
    }
}

ChangeQuestion();

ChangeButton();
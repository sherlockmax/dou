<template lang="pug">
.container-fluid.about.text-white
  h4.mb-4.text-primary
    span.mr-2
      font-awesome-icon(:icon="['fa', 'star']")
    span Gua
  p 當前服務版本：{{ $store.getters.getGuaVersion }}
  p Github：
    a(href='https://github.com/syhlion/gua', target='_blank') https://github.com/syhlion/gua
  h4.mb-4.text-primary
    span.mr-2
      font-awesome-icon(:icon="['fa', 'star']")
    span Dou
  p 當前介面版本：{{ $store.getters.getPackageVersion }}
  p 支援服務版本：{{ $store.getters.getPackageVersion }}
  p Github：
    a(href='https://github.com/sherlockmax/dou', target='_blank') https://github.com/sherlockmax/dou
  h4.mb-4.text-primary
    span.mr-2
      font-awesome-icon(:icon="['fa', 'star']")
    span 種瓜得瓜，種豆得豆
  div
    p 出自明朝馮夢龍著的《古今小說》第十二卷，意思是造什麼因，就得什麼樣的果。
    p 故事發生在宋高宗紹興年間。一個叫柳宣教的人在考取進士後，出任當時的臨安、也就是今天的杭州的府尹。上任第一天，當地知名人士都前來參拜，只有城南水月寺竹林峰的住持玉通禪師沒有到。柳宣教非常生氣，就想派人將其抓來，後在眾人的勸解下作罷。不過，柳宣教卻懷恨在心。
    p 後來，柳宣教派一個絕色女子去引誘玉通禪師，以此加害他。玉通禪師沒能收住心性，破了色戒，但他亦識破了柳宣教的詭計，隨即圓寂。玉通禪師死後，投胎在柳宣教家。柳宣教的妻子為其生下了一女，名叫柳翠，前世就是玉通禪師。長大後的柳翠不守婦道，風流韻事不斷。佛家認為，這是玉通禪師在報復柳宣教。
    p 玉通禪師生前有一個好友叫月明。月明和尚看到玉通禪師墮落風塵時間太久了，就決定點化他，也就是現在的柳翠，於是他派法空和尚去點化柳翠。
    p 一天，柳翠在西湖遊玩回來，聽見外面有一和尚在化緣，而且言語不俗。柳翠心有所動，便讓丫鬟將和尚喚了進來。柳翠問道：「你有什麼本事，到這裡來化緣？」法空和尚應道：「貧僧沒什麼本事，但會解說因果之事。」「何為因果？」法空說：「前為因，後為果；作者為因，受者為果。如同種瓜得瓜、種豆得豆一樣，種是因，得是果。沒有播種，怎麼會有收成？好因得好果，惡因得惡果。」
    p 柳翠聽完這番因果論，茅塞頓開，於是皈依了佛門。她死後，人們說是活佛顯化，都前來送葬。
    p 同「善有善報，惡有惡報」一樣，一個人種下了善因，收穫的必定是善果。那些任意妄為之人，是因為不相信這一道理啊。
</template>

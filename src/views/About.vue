<template lang="pug">
.container-fluid.about.text-white
  h4.mb-4.text-primary
    span.mr-2
      font-awesome-icon(:icon="['fa', 'star']")
    span Gua
  p Current Version：
    span.text-primary(v-if="$store.getters.getGuaVersion") {{ $store.getters.getGuaVersion }}
    span.text-warning(v-if="!$store.getters.getGuaVersion") Can not connect to GUA server.
  p Github：
    a(href='https://github.com/syhlion/gua', target='_blank') https://github.com/syhlion/gua
  h4.mb-4.text-primary
    span.mr-2
      font-awesome-icon(:icon="['fa', 'star']")
    span Dou
  p Current Version：
    span.text-primary(v-if="$store.getters.getPackageVersion") {{ $store.getters.getPackageVersion }}
    span.text-warning(v-if="!$store.getters.getPackageVersion") Can not get version.
  p Support GUA Version：
    span.text-primarg(v-if="supportGuaVersion") {{ supportGuaVersion }}
    span.text-warning(v-if="!supportGuaVersion") Can not get version.
  p Github：
    a(href='https://github.com/sherlockmax/dou', target='_blank') https://github.com/sherlockmax/dou
  
  h4.mb-4.text-primary
    span.mr-2
      font-awesome-icon(:icon="['fa', 'star']")
    span 種瓜得瓜，種豆得豆
  div
    p.text-muted(style="font-size: 0.8em") 為什麼服務名稱是「GUA」和「DOU」呢？
    p.text-muted(style="font-size: 0.8em") 因為「瓜」的羅馬拼音為「Gua」，「豆」羅馬拼音為「Dou」
    p 出自明朝馮夢龍著的《古今小說》第十二卷，意思是造什麼因，就得什麼樣的果。
    p 故事發生在宋高宗紹興年間。一個叫柳宣教的人在考取進士後，出任當時的臨安、也就是今天的杭州的府尹。上任第一天，當地知名人士都前來參拜，只有城南水月寺竹林峰的住持玉通禪師沒有到。柳宣教非常生氣，就想派人將其抓來，後在眾人的勸解下作罷。不過，柳宣教卻懷恨在心。
    p 後來，柳宣教派一個絕色女子去引誘玉通禪師，以此加害他。玉通禪師沒能收住心性，破了色戒，但他亦識破了柳宣教的詭計，隨即圓寂。玉通禪師死後，投胎在柳宣教家。柳宣教的妻子為其生下了一女，名叫柳翠，前世就是玉通禪師。長大後的柳翠不守婦道，風流韻事不斷。佛家認為，這是玉通禪師在報復柳宣教。
    p 玉通禪師生前有一個好友叫月明。月明和尚看到玉通禪師墮落風塵時間太久了，就決定點化他，也就是現在的柳翠，於是他派法空和尚去點化柳翠。
    p 一天，柳翠在西湖遊玩回來，聽見外面有一和尚在化緣，而且言語不俗。柳翠心有所動，便讓丫鬟將和尚喚了進來。柳翠問道：「你有什麼本事，到這裡來化緣？」法空和尚應道：「貧僧沒什麼本事，但會解說因果之事。」「何為因果？」法空說：「前為因，後為果；作者為因，受者為果。如同種瓜得瓜、種豆得豆一樣，種是因，得是果。沒有播種，怎麼會有收成？好因得好果，惡因得惡果。」
    p 柳翠聽完這番因果論，茅塞頓開，於是皈依了佛門。她死後，人們說是活佛顯化，都前來送葬。
    p 同「善有善報，惡有惡報」一樣，一個人種下了善因，收穫的必定是善果。那些任意妄為之人，是因為不相信這一道理啊。
  
  h4.mb-4.text-primary
    span.mr-2
      font-awesome-icon(:icon="['fa', 'star']")
    span As you sow, so shall you reap.
  div
    p.text-muted(style="font-size: 0.9em") Why server name is 「GUA」 and 「DOU」？
    p.text-muted(style="font-size: 0.9em") Because chinese has a proverb is 「You seed 
      span.text-warning melon
      span  then get 
      span.text-warning melon
      span , you seed 
      span.text-warning bean
      span  then get 
      span.text-warning bean
      span 」
    p.text-muted(style="font-size: 0.9em") In chinese, melon's prnonceation is 'Gua', bean's pronunciation is 'Dou'
    p This is a proverb from the bible. 
    p (Biblical.) You should stop being so cruel to other people. As you sow, so shall you reap. Fred built an immense fortune by swindling others, but lost it all when someone swindled him. As a man sows, so shall he reap.
    p Things will happen to you good or bad, according to how you behave.
    p Man is responsible for the effect of his actions. If the action is based on goodness, it will churn out only goodness in the long run. If the action has been evil, the outcome also tends to be evil.
    p The Holy Gita and Koran also emphasize the same. Goodness is the child of good deeds and misfortune and calamities are the children of evil. If we do good, even if it doesn’t yield proper results immediately we can certainly expect goodness out of it in the future.
    p This wants us to check our actions whenever they tend to be evil or harmful to others. Besides, good deeds endow us with a clear conscience thus making our lives smooth and cheerful.
    p In short goodness will always bear goodness in our life.
</template>

<script>
export default {
  data() {
    return {
      supportGuaVersion: process.env.SUPPORT_GUA_VERSION
    }
  }
}
</script>

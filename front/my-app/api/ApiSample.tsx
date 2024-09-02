import internal from "stream"

export const Fetchs = {
	getQuestions:async()=>{
		return questionsSample
	},
	getQuestion:async(id:number)=>{
		var question=null
		for (let q of questionsSample){
			if (q.id == id){
				question=q
			}
		}
		return question
	},
	getAnswer:async(question_id:number)=>{
		var answer=null
		for (let a of answerSample){
			if(a.question_id == question_id){
				answer=a
			}
		}
		return answer
	},
	getUsers:async()=>{
		return usersSample
	}
}

export type Question = {
	id: number;
	q: string;
	user_id: number;
}

export const questionsSample:Question[]=[
	{id:1, q:"幸せとは何か、それをどのように定義できますか？", user_id:1},
	{id:2, q:"地球温暖化を防ぐために、個人ができる具体的なアクションは何ですか？", user_id:2},
	{id:3, q:"第二次世界大戦が現代社会に与えた最も大きな影響は何だと思いますか？", user_id:4},
	{id:4, q:"AIの発展が未来の仕事にどのような影響を与えると思いますか？", user_id:2},
	{id:5, q:"世界の異なる文化の中で、最も興味深いと感じる習慣は何ですか？", user_id:9},
	{id:6, q:"ベーシックインカムは、社会にどのような影響を与える可能性がありますか？", user_id:9},
	// ここから追加問題
	{id:7, q: "宇宙の起源についての最新の理論は何ですか？", user_id: 11 },
    {id:8, q: "人間の意識はどのようにして生まれるのか？", user_id: 12 },
    {id:9, q: "未来のエネルギー源として最も有望なものは何ですか？", user_id: 13 },
    {id:10, q: "量子コンピュータが実用化されたら、どのような変化が起こるか？", user_id: 14 },
    {id:11, q: "人類が火星に移住する可能性はどれくらいあるか？", user_id: 15 },
    {id:12, q: "気候変動が生態系に与える影響は何ですか？", user_id: 16 },
    {id:13, q: "人工知能が人間の感情を理解することは可能か？", user_id: 17 },
    {id:14, q: "未来の都市はどのように変わるか？", user_id: 18 },
    {id:15, q: "教育の未来はどのように変わるか？", user_id: 19 },
    {id:16, q: "人間の寿命を延ばすための最新の研究は何ですか？", user_id: 20 },
    {id:17, q: "宇宙旅行が一般化する日は来るか？", user_id: 11 },
    {id:18, q: "バイオテクノロジーの進化が医療に与える影響は何ですか？", user_id: 12 },
    {id:19, q: "未来の交通手段はどのように変わるか？", user_id: 13 },
    {id:20, q: "人間の脳を完全に理解することは可能か？", user_id: 14 },
    {id:21, q: "気候変動を逆転させるための最も効果的な方法は何ですか？", user_id: 15 },
    {id:22, q: "未来の食糧問題を解決するための技術は何ですか？", user_id: 16 },
    {id:23, q: "人間の遺伝子編集がもたらす倫理的な問題は何ですか？", user_id: 17 },
    {id:24, q: "未来のエネルギー政策はどのように変わるか？", user_id: 18 },
    {id:25, q: "人工知能が創造性を持つことは可能か？", user_id: 19 },
    {id:26, q: "未来の仕事の形態はどのように変わるか？", user_id: 20 },
    {id:27, q: "人間の意識をデジタル化することは可能か？", user_id: 11 },
    {id:28, q: "未来の住宅はどのように変わるか？", user_id: 12 },
    {id:29, q: "人間の健康を維持するための最新の技術は何ですか？", user_id: 13 },
    {id:30, q: "未来の教育システムはどのように変わるか？", user_id: 14 },
	
];


export type Answer ={
	id: number;
	a: string;
	question_id: number;
	user_id: number;
}

export const answerSample:Answer[]=[
	{id:1, a:"幸せ（幸福）とは、個人が人生において満足感や充実感を感じる状態を指します。これは非常に主観的な概念であり、人によって幸せの定義やその要素は異なります。", question_id:1, user_id:3},
	{id:2, a:"地球温暖化を防ぐために個人ができる具体的なアクションはいくつかあります。まず、エネルギーの節約が重要です。たとえば、省エネ家電を使用したり、LED照明を使ったりすることで、家庭での電力消費を減らすことができます。また、使用していない電化製品の電源を切る、部屋を出る際に照明を消すなど、小さな習慣も効果的です。", question_id:2, user_id:4},
	{id:3, a:"第二次世界大戦が現代社会に与えた最も大きな影響は、国際秩序の再構築と冷戦構造の形成です。", question_id:3, user_id:7},
	{id:4, a:"AIの進化によって多くの業務が自動化されるでしょう。特に、ルーチンで繰り返しの多い作業やデータ処理、分析などの業務がAIによって効率化されると考えられます。これにより、企業はコストを削減し、業務の迅速化を図ることができますが、同時に従来の仕事が減少する可能性があります。例えば、製造業や事務職などでの仕事がAIに取って代わられることが予想されます。", question_id:4, user_id:7},
	{id:5, a:"世界の異なる文化の中で、特に興味深い習慣の一つは、日本の「おもてなし」の文化です。おもてなしは、訪問者やゲストに対して心からの歓迎と気配りを示す日本独特のホスピタリティの概念です。単なるサービスの提供を超えて、相手の期待を上回る配慮や細やかな心遣いを大切にします。", question_id:5, user_id:8},
	{id:6, a:"貧困の削減が期待されます。ベーシックインカムにより、最低限の生活費が保証されるため、貧困層の生活の質が向上し、生活の安定が図れる可能性があります。これにより、社会的な格差の縮小や、貧困によるストレスや健康問題の軽減が期待されます。", question_id:6, user_id:10},
	// ここから追加回答
	{id:7, a: "宇宙の起源についての最新の理論は、ビッグバン理論です。これは、宇宙が約138億年前に非常に高温高密度の状態から急速に膨張し始めたというものです。", question_id: 7, user_id: 3 },
    {id:8, a: "人間の意識は、脳の神経活動の結果として生まれると考えられています。しかし、意識の具体的なメカニズムはまだ完全には解明されていません。", question_id: 8, user_id: 4 },
    {id:9, a: "未来のエネルギー源として最も有望なのは、再生可能エネルギー（太陽光、風力、水力など）と核融合エネルギーです。", question_id: 9, user_id: 7 },
    {id:10, a: "量子コンピュータが実用化されると、現在のコンピュータでは解決できない複雑な問題を高速で解決できるようになります。これにより、医薬品開発や材料科学などの分野で大きな進展が期待されます。", question_id: 10, user_id: 8 },
    {id:11, a: "人類が火星に移住する可能性は、技術的な進歩と資源の確保次第ですが、現時点ではまだ多くの課題が残っています。", question_id: 11, user_id: 3 },
    {id:12, a: "気候変動が生態系に与える影響は、種の絶滅や生息地の喪失など、多岐にわたります。", question_id: 12, user_id: 21 },
    {id:13, a: "人工知能が人間の感情を理解することは、感情認識技術の進歩により可能になりつつありますが、完全な理解にはまだ時間がかかるでしょう。", question_id: 13, user_id: 4 },
    {id:14, a: "未来の都市は、スマートシティ技術の導入により、より効率的で持続可能なものになると期待されています。", question_id: 14, user_id: 22 },
    {id:15, a: "教育の未来は、オンライン学習やAIを活用した個別指導の普及により、大きく変わるでしょう。", question_id: 15, user_id: 6 },
    {id:16, a: "人間の寿命を延ばすための最新の研究には、遺伝子編集技術や再生医療が含まれます。", question_id: 16, user_id: 25 },
    {id:17, a: "宇宙旅行が一般化する日は、技術の進歩とコストの低下により、数十年以内に訪れる可能性があります。", question_id: 17, user_id: 21 },
    {id:18, a: "バイオテクノロジーの進化が医療に与える影響は、病気の早期発見や治療法の開発など、多岐にわたります。", question_id: 18, user_id: 4 },
    {id:19, a: "未来の交通手段は、自動運転車や空飛ぶ車の普及により、大きく変わるでしょう。", question_id: 19, user_id: 7 },
    {id:20, a: "人間の脳を完全に理解することは、現在の科学技術ではまだ難しいですが、神経科学の進展により徐々に解明されつつあります。", question_id: 20, user_id: 8 },
    {id:21, a: "気候変動を逆転させるための最も効果的な方法は、再生可能エネルギーの利用拡大と森林の保護です。", question_id: 21, user_id: 10 },
    {id:22, a: "未来の食糧問題を解決するための技術には、垂直農業や培養肉の開発が含まれます。", question_id: 22, user_id: 3 },
    {id:23, a: "人間の遺伝子編集がもたらす倫理的な問題には、デザイナーベビーの作成や遺伝的多様性の喪失が含まれます。", question_id: 23, user_id: 24 },
    {id:24, a: "未来のエネルギー政策は、持続可能なエネルギーの利用拡大と化石燃料の削減に向かうでしょう。", question_id: 24, user_id: 7 },
    {id:25, a: "人工知能が創造性を持つことは、現在の技術では難しいですが、将来的には可能になるかもしれません。", question_id: 25, user_id: 6 },
    {id:26, a: "未来の仕事の形態は、リモートワークの普及やAIの導入により、大きく変わるでしょう。", question_id: 26, user_id: 22 },
    {id:27, a: "人間の意識をデジタル化することは、現在の技術ではまだ実現していませんが、将来的には可能性があります。", question_id: 27, user_id: 23 },
    {id:28, a: "未来の住宅は、スマートホーム技術や省エネ設備の導入により、より快適で持続可能なものになるでしょう。", question_id: 28, user_id: 4 },
	{id:29, a: "人間の健康を維持するための最新の技術には、遺伝子治療や再生医療が含まれます。", question_id: 29, user_id: 8 },
	{id:30, a: "未来の教育システムは、AIやVR技術の活用により、より柔軟で効果的なものになるでしょう。", question_id: 30, user_id: 20 },

]


export type User = {
	id: number;
	name: string;
	status: string;
	experience: string;
};
export const usersSample: User[] = [
	{ id:-1, name:"AI", status:"起動中", experience: "人工知能" },
	{ id: 1, name: "田中 太郎", status: "休憩中", experience: "営業1年目" },
	{ id: 2, name: "鈴木 一郎", status: "仕事中", experience: "エンジニア2年目" },
	{ id: 3, name: "高橋 由美", status: "休憩中", experience: "総務5年目" },
	{ id: 4, name: "山田 健一", status: "仕事中", experience: "営業4年目" },
	{ id: 5, name: "伊藤 明美", status: "休憩中", experience: "営業1年目" },
	{ id: 6, name: "中村 翔太", status: "仕事中", experience: "営業4年目" },
	{ id: 7, name: "渡辺 直子", status: "休憩中", experience: "エンジニア8年目" },
	{ id: 8, name: "小林 真一", status: "休憩中", experience: "エンジニア3年目" },
	{ id: 9, name: "加藤 美咲", status: "外出中", experience: "エンジニア1年目" },
	{ id: 10, name: "吉田 和彦", status:"休憩中", experience: "エンジニア2年目" },
	// 3年以下の社員データアイテムを追加
    { id: 11, name: "佐藤 健", status: "仕事中", experience: "営業2年目" },
    { id: 12, name: "松本 直樹", status: "休憩中", experience: "エンジニア1年目" },
    { id: 13, name: "林 美咲", status: "外出中", experience: "営業3年目" },
    { id: 14, name: "森田 亮", status: "仕事中", experience: "エンジニア2年目" },
    { id: 15, name: "石田 由美", status: "休憩中", experience: "営業1年目" },
    { id: 16, name: "藤田 翔太", status: "仕事中", experience: "エンジニア3年目" },
    { id: 17, name: "小川 直子", status: "休憩中", experience: "営業2年目" },
    { id: 18, name: "山本 真一", status: "外出中", experience: "エンジニア1年目" },
    { id: 19, name: "中島 健一", status: "仕事中", experience: "営業3年目" },
    { id: 20, name: "高木 美咲", status: "休憩中", experience: "エンジニア2年目" },
    // 3年以上の社員データアイテムを追加
    { id: 21, name: "川村 直樹", status: "仕事中", experience: "営業5年目" },
    { id: 22, name: "長谷川 亮", status: "休憩中", experience: "エンジニア4年目" },
    { id: 23, name: "坂本 美咲", status: "外出中", experience: "営業6年目" },
    { id: 24, name: "内田 翔太", status: "仕事中", experience: "エンジニア7年目" },
    { id: 25, name: "宮本 直子", status: "休憩中", experience: "営業8年目" },
]

export type Recipe = {
	id: number;
	title: string;
	imageUrl: string;
};

export const recipeSample: Recipe[] = [
	{
		id: 1,
		title: "にんじんのポタージュ",
		imageUrl: "https://example.com/image1.jpg",
	  },
	  {
		id: 2,
		title: "サラダそうめん",
		imageUrl: "https://example.com/image2.jpg",
	  },
	  {
		id: 3,
		title: "いかにんじん",
		imageUrl: "https://example.com/image3.jpg",
	  },
	  {
		id: 4,
		title: "具だくさん具雑煮",
		imageUrl: "https://example.com/image4.jpg",
	  },
	  {
		id: 5,
		title: "フルーツかんざらし",
		imageUrl: "https://example.com/image5.jpg",
	  },
	  {
		id: 6,
		title: "狭山茶揚げパン",
		imageUrl: "https://example.com/image6.jpg",
	  },
];

am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

networkSeries.data = [
{
  name: '電影與動畫',
  children: [
	  {name:'動畫',children:[{name: '瑪莎與熊 Masha and The Bear CH', value: 220},{name: 'counter656', value: 96.3}]},
	  {name:'電影',children:[{name: '主頻道【谷阿莫】', value: 178},{name: '超粒方', value: 67.9}]}
  ]},
{ name: '遊戲',
  children: [
	  {name: 'DE JuN', value: 158},
	  {name: '祐子和阿叡', value: 10.4},
	  {name: 'the劉沛', value: 103},
  ]},
{ name: '日常知識',
  children: [
	  {name: "Rosalina's Kitchen 蘿潔塔的廚房", value: 72.4}
  ]},
{ name: '人物生活',
  children: [
	  {name: '蔡阿嘎', value: 226},
	  {name: 'Joeman', value: 171},
	  {name: '千千進食中', value: 125},
	  {name: '安啾咪', value: 140},
	  {name: '蔡阿嘎Life', value: 119}
  ]},
{ name: '音樂',
  children: [
	  {name: 'SEANCHOU MUSIC CHANNEL', value: 92},
	  {name: '玖壹壹', value: 91.4}
  ]},
{ name: '娛樂',
  children: [
	  {name: '這群人TGOP', value: 307},
	  {name: '木曜4超玩', value: 146},
	  {name: 'WACKYBOYS 反骨男孩', value: 133},
	  {name: '白癡公主', value: 131},
	  {name: '黃氏兄弟', value:130 },
	  {name: 'HowFun', value: 118},
	  {name: '綜藝玩很大 Mr.Player', value: 118},
	  {name: '啾啾鞋', value: 118},
	  {name: 'sandy mandy', value: 113},
	  {name: '我愛貓大', value: 109},
	  {name: '含羞草', value: 84.6},
	  {name: 'NyoNyoTV妞妞TV', value: 78.7},
	  {name: '葉式特工 Yes Ranger', value: 78.1},
	  {name: 'STR Network', value: 77},
	  {name: '腦補給', value: 71},
	  {name: 'Odd Cactus', value: 69.3},
	  {name: '星培Jasper', value: 66.5},
	  {name: '卡提諾狂新聞', value: 91}
  ]},
{ name: '宗教',
  children: [
	  {name: '大日宗', value: 107}
  ]},
{ name: '教育',
  children: [
	  {name: '阿滴英文', value: 237},
	  {name: '碰碰狐 (兒童兒歌・故事)', value: 220},
	  {name: '理科太太 Li Ke Tai Tai', value: 108},
	  {name: 'Stopkiddinstudio', value: 92.1},
	  {name: 'Taiwan Bar', value: 80.1},
	  {name: 'Jay Lee Painting', value: 137}
  ]},
{ name: '搞笑',
  children: [
	  {name: '眾量級CROWD', value: 178},
	  {name: '聖結石Sain', value: 147},
	  {name: '放火 Louis', value: 133.8},
	  {name: '噪咖EBCbuzz', value: 119},
	  {name: '在不瘋狂就等死 x 狂人娛樂', value: 111},
	  {name: '頑GAME', value: 75.8},
	  {name: '黃大謙', value: 77.2 },
	  {name: '反正我很閒', value: 0.5}
  ]},	 
					 ];

networkSeries.dataFields.linkWith = "linkWith";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.id = "name";
networkSeries.dataFields.value = "value";
networkSeries.dataFields.children = "children";
networkSeries.links.template.distance = 1;
networkSeries.nodes.template.tooltipText = "{name}";
networkSeries.nodes.template.fillOpacity = 1;
networkSeries.nodes.template.outerCircle.scale = 1;

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 18;
networkSeries.nodes.template.label.hideOversized = true;
networkSeries.nodes.template.label.truncate = true;
networkSeries.minRadius = am4core.percent(3);
networkSeries.manyBodyStrength = -5;
networkSeries.links.template.strokeOpacity = 0;

}); // end am4core.ready()// JavaScript Document
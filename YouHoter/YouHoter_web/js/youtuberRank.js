am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdivRank", am4charts.XYChart);

// Add data
chart.data = [
	
	{
    "region": "宗教",
    "state": "大日宗",
    "sales": 1070000
  },
	{
    "region": "日常知識",
    "state": "蘿潔塔的廚房",
    "sales": 724000
  },
  {
    "region": "娛樂",
    "state": "星培Jasper",
    "sales": 665000
  },
	{
    "region": "娛樂",
    "state": "Odd Cactus",
    "sales": 693000
  },
	{
    "region": "娛樂",
    "state": "腦補給",
    "sales": 710000
  },
	{
    "region": "娛樂",
    "state": "STR Network",
    "sales": 770000
  },
	{
    "region": "娛樂",
    "state": "葉式特工 Yes Ranger",
    "sales": 781000
  },
	{
    "region": "娛樂",
    "state": "NyoNyoTV妞妞TV",
    "sales": 787000
  },
    {
    "region": "娛樂",
    "state": "含羞草",
    "sales": 846000
  },
	{
    "region": "娛樂",
    "state": "卡提諾狂新聞",
    "sales": 910000
  },
	{
    "region": "娛樂",
    "state": "我愛貓大",
    "sales": 1090000
  },
	{
    "region": "娛樂",
    "state": "sandy mandy",
    "sales": 1130000
  },
	{
    "region": "娛樂",
    "state": "啾啾鞋",
    "sales": 1180000
  },
	{
    "region": "娛樂",
    "state": "綜藝玩很大 Mr.Player",
    "sales": 1180000
  },
	{
    "region": "娛樂",
    "state": "HowFun",
    "sales": 1180000
  },
	{
    "region": "娛樂",
    "state": "黃氏兄弟",
    "sales": 1300000
  },
	{
    "region": "娛樂",
    "state": "白癡公主",
    "sales": 1310000
  },
	{
    "region": "娛樂",
    "state": "WACKYBOYS 反骨男孩",
    "sales": 1330000
  },
	{
    "region": "娛樂",
    "state": "木曜4超玩",
    "sales": 1460000
  },
	{
    "region": "娛樂",
    "state": "這群人TGOP",
    "sales": 3070000
  },
	{
    "region": "電影",
    "state": "超粒方",
    "sales": 679000
  },
	{
    "region": "電影",
    "state": "主頻道【谷阿莫】",
    "sales": 1780000
  },
	{
    "region": "動畫",
    "state": "counter656",
    "sales": 963000
  },
	{
    "region": "動畫",
    "state": "瑪莎與熊",
    "sales": 2200000
  },
	{
    "region": "遊戲",
    "state": "祐子和阿叡",
    "sales": 104000
  },
	{
    "region": "遊戲",
    "state": "the劉沛",
    "sales": 1030000
  },
	{
    "region": "遊戲",
    "state": "DE JuN",
    "sales": 1580000
  },
	{
    "region": "音樂",
    "state": "玖壹壹",
    "sales": 914000
  },
	{
    "region": "音樂",
    "state": "SEANCHOU MUSIC CHANNEL",
    "sales": 920000
  },
	{
    "region": "人物生活",
    "state": "蔡阿嘎Life",
    "sales": 1190000
  },
	{
    "region": "人物生活",
    "state": "千千進食中",
    "sales": 1250000
  },
	{
    "region": "人物生活",
    "state": "安啾咪",
    "sales": 1400000
  },
	{
    "region": "人物生活",
    "state": "Joeman",
    "sales": 1710000
  },
	{
    "region": "人物生活",
    "state": "蔡阿嘎",
    "sales": 1190000
  },
	{
    "region": "搞笑",
    "state": "反正我很閒",
    "sales": 5270
  },
	{
    "region": "搞笑",
    "state": "頑GAME",
    "sales": 758000
  },
	{
    "region": "搞笑",
    "state": "黃大謙",
    "sales": 772000
  },
	{
    "region": "搞笑",
    "state": "在不瘋狂就等死 x 狂人娛樂",
    "sales": 1110000
  },
	{
    "region": "搞笑",
    "state": "噪咖EBCbuzz",
    "sales": 1190000
  },
	{
    "region": "搞笑",
    "state": "放火 Louis",
    "sales": 1338000
  },
	{
    "region": "搞笑",
    "state": "聖結石Sain",
    "sales": 1470000
  },
	{
    "region": "搞笑",
    "state": "眾量級CROWD",
    "sales": 1780000
  },
	{
    "region": "教育",
    "state": "Taiwan Bar",
    "sales": 801000
  },
	{
    "region": "教育",
    "state": "Stopkiddinstudio",
    "sales": 921000
  },
	{
    "region": "教育",
    "state": "理科太太 Li Ke Tai Tai",
    "sales": 1080000
  },
	{
    "region": "教育",
    "state": "Jay Lee Painting",
    "sales": 1370000
  },
	{
    "region": "教育",
    "state": "碰碰狐 (兒童兒歌・故事)",
    "sales": 2200000
  },
	{
    "region": "教育",
    "state": "阿滴英文",
    "sales": 2370000
  }
];

// Create axes
var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
yAxis.dataFields.category = "state";
yAxis.renderer.grid.template.location = 0;
yAxis.renderer.labels.template.fontSize = 14;
yAxis.renderer.minGridDistance = 10;

var xAxis = chart.xAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueX = "sales";
series.dataFields.categoryY = "state";
series.columns.template.tooltipText = "{categoryY}: [bold]{valueX}[/]";
series.columns.template.strokeWidth = 0;
series.columns.template.adapter.add("fill", function(fill, target) {
  if (target.dataItem) {
    switch(target.dataItem.dataContext.region) {
	case "宗教":
        return chart.colors.getIndex(0);
        break;
	case "日常知識":
        return chart.colors.getIndex(1);
        break;
    case "娛樂":
        return chart.colors.getIndex(2);
        break;
    case "電影":
        return chart.colors.getIndex(3);
        break;
    case "動畫":
        return chart.colors.getIndex(4);
        break;
    case "遊戲":
        return chart.colors.getIndex(5);
        break;
	case "音樂":
        return chart.colors.getIndex(6);
        break;
	case "人物生活":
        return chart.colors.getIndex(7);
        break;
	case "搞笑":
        return chart.colors.getIndex(8);
        break;
	case "教育":
        return chart.colors.getIndex(9);
        break;
    }
  }
  return fill;
});

// Add ranges
function addRange(label, start, end, color) {
  var range = yAxis.axisRanges.create();
  range.category = start;
  range.endCategory = end;
  range.label.text = label;
  range.label.disabled = false;
  range.label.fill = color;
  range.label.location = 0;
  range.label.dx = -220;
  range.label.dy = 15;
  range.label.fontWeight = "bold";
  range.label.fontSize = 24;
  range.label.horizontalCenter = "left"
  range.label.inside = true;
  
  range.grid.stroke = am4core.color("#396478");
  range.grid.strokeOpacity = 1;
  range.tick.length = 200;
  range.tick.disabled = false;
  range.tick.strokeOpacity = 0.6;
  range.tick.stroke = am4core.color("#396478");
  range.tick.location = 0;
  
  range.locations.category = 1;
}
addRange("宗教", "大日宗", "大日宗", chart.colors.getIndex(0));
addRange("日常知識", "蘿潔塔的廚房", "蘿潔塔的廚房", chart.colors.getIndex(1));
addRange("娛樂", "這群人TGOP", "星培Jasper", chart.colors.getIndex(2));
addRange("電影", "主頻道【谷阿莫】", "超粒方", chart.colors.getIndex(3));	
addRange("動畫", "瑪莎與熊", "counter656", chart.colors.getIndex(4));
addRange("遊戲", "DE JuN", "超粒方", chart.colors.getIndex(5));
addRange("音樂", "SEANCHOU MUSIC CHANNEL", "玖壹壹", chart.colors.getIndex(6));
addRange("人物生活", "蔡阿嘎", "蔡阿嘎Life", chart.colors.getIndex(7));
addRange("搞笑", "眾量級CROWD", "頑GAME", chart.colors.getIndex(8));
addRange("教育", "阿滴英文", "Taiwan Bar", chart.colors.getIndex(9));
chart.cursor = new am4charts.XYCursor();

}); // end am4core.ready()// JavaScript Document
$(document).ready(function(){

	var navTree = getAllCitiesOfProvince();

	function getAllCitiesOfProvince(){
		var responseStr = '[{"weaid":"1","citynm":"北京","cityno":"beijing","cityid":"101010100","area_1":"北京","area_2":"城区","area_3":""},{"weaid":"2","citynm":"朝阳","cityno":"bjchaoyang","cityid":"101010300","area_1":"北京","area_2":"朝阳","area_3":""},{"weaid":"3","citynm":"顺义","cityno":"shunyi","cityid":"101010400","area_1":"北京","area_2":"顺义","area_3":""},{"weaid":"4","citynm":"怀柔","cityno":"huairou","cityid":"101010500","area_1":"北京","area_2":"怀柔","area_3":""},{"weaid":"5","citynm":"通州","cityno":"tongzhou","cityid":"101010600","area_1":"北京","area_2":"通州","area_3":""},{"weaid":"6","citynm":"昌平","cityno":"changping","cityid":"101010700","area_1":"北京","area_2":"昌平","area_3":""},{"weaid":"7","citynm":"延庆","cityno":"yanqing","cityid":"101010800","area_1":"北京","area_2":"延庆","area_3":""},{"weaid":"8","citynm":"丰台","cityno":"fengtai","cityid":"101010900","area_1":"北京","area_2":"丰台","area_3":""},{"weaid":"9","citynm":"石景山","cityno":"shijingshan","cityid":"101011000","area_1":"北京","area_2":"石景山","area_3":""},{"weaid":"10","citynm":"大兴","cityno":"daxing","cityid":"101011100","area_1":"北京","area_2":"大兴","area_3":""},{"weaid":"11","citynm":"房山","cityno":"fangshan","cityid":"101011200","area_1":"北京","area_2":"房山","area_3":""},{"weaid":"12","citynm":"密云","cityno":"miyun","cityid":"101011300","area_1":"北京","area_2":"密云","area_3":""},{"weaid":"13","citynm":"门头沟","cityno":"mentougou","cityid":"101011400","area_1":"北京","area_2":"门头沟","area_3":""},{"weaid":"14","citynm":"平谷","cityno":"pinggu","cityid":"101011500","area_1":"北京","area_2":"平谷","area_3":""},{"weaid":"22","citynm":"海淀","cityno":"haidian","cityid":"101010200","area_1":"北京","area_2":"海淀","area_3":""},{"weaid":"23","citynm":"天津","cityno":"tianjin","cityid":"101030100","area_1":"天津","area_2":"城区","area_3":""},{"weaid":"24","citynm":"宝坻","cityno":"baodi","cityid":"101030300","area_1":"天津","area_2":"宝坻","area_3":""},{"weaid":"25","citynm":"东丽","cityno":"dongli","cityid":"101030400","area_1":"天津","area_2":"东丽","area_3":""},{"weaid":"26","citynm":"西青","cityno":"xiqing","cityid":"101030500","area_1":"天津","area_2":"西青","area_3":""},{"weaid":"27","citynm":"北辰","cityno":"beichen","cityid":"101030600","area_1":"天津","area_2":"北辰","area_3":""},{"weaid":"28","citynm":"蓟县","cityno":"tjjixian","cityid":"101031400","area_1":"天津","area_2":"蓟县","area_3":""},{"weaid":"30","citynm":"静海","cityno":"jinghai","cityid":"101030900","area_1":"天津","area_2":"静海","area_3":""},{"weaid":"31","citynm":"津南","cityno":"jinnan","cityid":"101031000","area_1":"天津","area_2":"津南","area_3":""},{"weaid":"32","citynm":"滨海新区","cityno":"binhaixinqu","cityid":"101031100","area_1":"天津","area_2":"滨海新区","area_3":""},{"weaid":"34","citynm":"武清","cityno":"wuqing","cityid":"101030200","area_1":"天津","area_2":"武清","area_3":""},{"weaid":"35","citynm":"宁河","cityno":"ninghe","cityid":"101030700","area_1":"天津","area_2":"宁河","area_3":""},{"weaid":"36","citynm":"上海","cityno":"shanghai","cityid":"101020100","area_1":"上海","area_2":"城区","area_3":""},{"weaid":"37","citynm":"宝山","cityno":"shbaoshan","cityid":"101020300","area_1":"上海","area_2":"宝山","area_3":""},{"weaid":"38","citynm":"嘉定","cityno":"jiading","cityid":"101020500","area_1":"上海","area_2":"嘉定","area_3":""},{"weaid":"40","citynm":"浦东新区","cityno":"pudongxinqu","cityid":"101020600","area_1":"上海","area_2":"浦东新区","area_3":""},{"weaid":"41","citynm":"青浦","cityno":"qingpu","cityid":"101020800","area_1":"上海","area_2":"青浦","area_3":""},{"weaid":"42","citynm":"松江","cityno":"songjiang","cityid":"101020900","area_1":"上海","area_2":"松江","area_3":""},{"weaid":"43","citynm":"奉贤","cityno":"fengxian","cityid":"101021000","area_1":"上海","area_2":"奉贤","area_3":""},{"weaid":"44","citynm":"崇明","cityno":"chongming","cityid":"101021100","area_1":"上海","area_2":"崇明","area_3":""},{"weaid":"45","citynm":"徐汇","cityno":"xuhui","cityid":"101021200","area_1":"上海","area_2":"徐汇","area_3":""},{"weaid":"46","citynm":"闵行","cityno":"minhang","cityid":"101020200","area_1":"上海","area_2":"闵行","area_3":""},{"weaid":"47","citynm":"金山","cityno":"jinshan","cityid":"101020700","area_1":"上海","area_2":"金山","area_3":""},{"weaid":"48","citynm":"石家庄","cityno":"shijiazhuang","cityid":"101090101","area_1":"河北","area_2":"石家庄","area_3":"城区"},{"weaid":"49","citynm":"张家口","cityno":"zhangjiakou","cityid":"101090301","area_1":"河北","area_2":"张家口","area_3":"城区"},{"weaid":"50","citynm":"承德","cityno":"chengde","cityid":"101090402","area_1":"河北","area_2":"承德","area_3":"城区"},{"weaid":"51","citynm":"唐山","cityno":"tangshan","cityid":"101090501","area_1":"河北","area_2":"唐山","area_3":"城区"},{"weaid":"52","citynm":"秦皇岛","cityno":"qinhuangdao","cityid":"101091101","area_1":"河北","area_2":"秦皇岛","area_3":"城区"},{"weaid":"53","citynm":"沧州","cityno":"cangzhou","cityid":"101090701","area_1":"河北","area_2":"沧州","area_3":"城区"},{"weaid":"54","citynm":"衡水","cityno":"hengshui","cityid":"101090801","area_1":"河北","area_2":"衡水","area_3":"城区"},{"weaid":"55","citynm":"邢台","cityno":"xingtai","cityid":"101090901","area_1":"河北","area_2":"邢台","area_3":"城区"},{"weaid":"56","citynm":"邯郸","cityno":"handan","cityid":"101091001","area_1":"河北","area_2":"邯郸","area_3":"城区"},{"weaid":"57","citynm":"保定","cityno":"baoding","cityid":"101090201","area_1":"河北","area_2":"保定","area_3":"城区"},{"weaid":"58","citynm":"廊坊","cityno":"langfang","cityid":"101090601","area_1":"河北","area_2":"廊坊","area_3":"城区"},{"weaid":"59","citynm":"郑州","cityno":"zhengzhou","cityid":"101180101","area_1":"河南","area_2":"郑州","area_3":"城区"},{"weaid":"60","citynm":"新乡","cityno":"xinxiang","cityid":"101180301","area_1":"河南","area_2":"新乡","area_3":"城区"},{"weaid":"61","citynm":"许昌","cityno":"xuchang","cityid":"101180401","area_1":"河南","area_2":"许昌","area_3":"城区"},{"weaid":"62","citynm":"平顶山","cityno":"pingdingshan","cityid":"101180501","area_1":"河南","area_2":"平顶山","area_3":"城区"},{"weaid":"63","citynm":"信阳","cityno":"xinyang","cityid":"101180601","area_1":"河南","area_2":"信阳","area_3":"城区"},{"weaid":"64","citynm":"南阳","cityno":"nanyang","cityid":"101180701","area_1":"河南","area_2":"南阳","area_3":"城区"},{"weaid":"65","citynm":"开封","cityno":"kaifeng","cityid":"101180801","area_1":"河南","area_2":"开封","area_3":"城区"},{"weaid":"66","citynm":"洛阳","cityno":"luoyang","cityid":"101180901","area_1":"河南","area_2":"洛阳","area_3":"城区"},{"weaid":"67","citynm":"商丘","cityno":"shangqiu","cityid":"101181001","area_1":"河南","area_2":"商丘","area_3":"城区"},{"weaid":"68","citynm":"焦作","cityno":"jiaozuo","cityid":"101181101","area_1":"河南","area_2":"焦作","area_3":"城区"},{"weaid":"69","citynm":"鹤壁","cityno":"hebi","cityid":"101181201","area_1":"河南","area_2":"鹤壁","area_3":"城区"},{"weaid":"70","citynm":"濮阳","cityno":"puyang","cityid":"101181301","area_1":"河南","area_2":"濮阳","area_3":"城区"},{"weaid":"71","citynm":"周口","cityno":"zhoukou","cityid":"101181401","area_1":"河南","area_2":"周口","area_3":"城区"},{"weaid":"72","citynm":"漯河","cityno":"luohe","cityid":"101181501","area_1":"河南","area_2":"漯河","area_3":"城区"},{"weaid":"73","citynm":"驻马店","cityno":"zhumadian","cityid":"101181601","area_1":"河南","area_2":"驻马店","area_3":"城区"},{"weaid":"74","citynm":"三门峡","cityno":"sanmenxia","cityid":"101181701","area_1":"河南","area_2":"三门峡","area_3":"城区"},{"weaid":"75","citynm":"济源","cityno":"jiyuan","cityid":"101181801","area_1":"河南","area_2":"济源","area_3":"城区"},{"weaid":"76","citynm":"安阳","cityno":"anyang","cityid":"101180201","area_1":"河南","area_2":"安阳","area_3":"城区"},{"weaid":"77","citynm":"合肥","cityno":"hefei","cityid":"101220101","area_1":"安徽","area_2":"合肥","area_3":"城区"},{"weaid":"78","citynm":"芜湖","cityno":"wuhu","cityid":"101220301","area_1":"安徽","area_2":"芜湖","area_3":"城区"},{"weaid":"79","citynm":"淮南","cityno":"huainan","cityid":"101220401","area_1":"安徽","area_2":"淮南","area_3":"城区"},{"weaid":"80","citynm":"马鞍山","cityno":"maanshan","cityid":"101220501","area_1":"安徽","area_2":"马鞍山","area_3":"城区"},{"weaid":"81","citynm":"安庆","cityno":"anqing","cityid":"101220601","area_1":"安徽","area_2":"安庆","area_3":"城区"},{"weaid":"82","citynm":"宿州","cityno":"ahsuzhou","cityid":"101220701","area_1":"安徽","area_2":"宿州","area_3":"城区"},{"weaid":"83","citynm":"阜阳","cityno":"ahfuyang","cityid":"101220801","area_1":"安徽","area_2":"阜阳","area_3":"城区"},{"weaid":"84","citynm":"亳州","cityno":"bozhou","cityid":"101220901","area_1":"安徽","area_2":"亳州","area_3":"城区"},{"weaid":"85","citynm":"黄山","cityno":"huangshan","cityid":"101221001","area_1":"安徽","area_2":"黄山","area_3":"城区"},{"weaid":"86","citynm":"滁州","cityno":"chuzhou","cityid":"101221101","area_1":"安徽","area_2":"滁州","area_3":"城区"},{"weaid":"87","citynm":"淮北","cityno":"huaibei","cityid":"101221201","area_1":"安徽","area_2":"淮北","area_3":"城区"},{"weaid":"88","citynm":"铜陵","cityno":"tongling","cityid":"101221301","area_1":"安徽","area_2":"铜陵","area_3":"城区"},{"weaid":"89","citynm":"宣城","cityno":"xuancheng","cityid":"101221401","area_1":"安徽","area_2":"宣城","area_3":"城区"},{"weaid":"90","citynm":"六安","cityno":"luan","cityid":"101221501","area_1":"安徽","area_2":"六安","area_3":"城区"},{"weaid":"92","citynm":"池州","cityno":"chizhou","cityid":"101221701","area_1":"安徽","area_2":"池州","area_3":"城区"},{"weaid":"93","citynm":"蚌埠","cityno":"bengbu","cityid":"101220201","area_1":"安徽","area_2":"蚌埠","area_3":"城区"},{"weaid":"94","citynm":"杭州","cityno":"hangzhou","cityid":"101210101","area_1":"浙江","area_2":"杭州","area_3":"城区"},{"weaid":"95","citynm":"舟山","cityno":"zhoushan","cityid":"101211101","area_1":"浙江","area_2":"舟山","area_3":"城区"},{"weaid":"96","citynm":"湖州","cityno":"huzhou","cityid":"101210201","area_1":"浙江","area_2":"湖州","area_3":"城区"},{"weaid":"97","citynm":"嘉兴","cityno":"jiaxing","cityid":"101210301","area_1":"浙江","area_2":"嘉兴","area_3":"城区"},{"weaid":"98","citynm":"金华","cityno":"jinhua","cityid":"101210901","area_1":"浙江","area_2":"金华","area_3":"城区"},{"weaid":"100","citynm":"台州","cityno":"zjtaizhou","cityid":"101210601","area_1":"浙江","area_2":"台州","area_3":"城区"},{"weaid":"101","citynm":"温州","cityno":"wenzhou","cityid":"101210701","area_1":"浙江","area_2":"温州","area_3":"城区"},{"weaid":"102","citynm":"丽水","cityno":"zjlishui","cityid":"101210801","area_1":"浙江","area_2":"丽水","area_3":"城区"},{"weaid":"103","citynm":"衢州","cityno":"zjquzhou","cityid":"101211001","area_1":"浙江","area_2":"衢州","area_3":"城区"},{"weaid":"104","citynm":"宁波","cityno":"ningbo","cityid":"101210401","area_1":"浙江","area_2":"宁波","area_3":"城区"},{"weaid":"105","citynm":"重庆","cityno":"chongqing","cityid":"101040100","area_1":"重庆","area_2":"城区","area_3":""},{"weaid":"106","citynm":"合川","cityno":"hechuan","cityid":"101040300","area_1":"重庆","area_2":"合川","area_3":""},{"weaid":"107","citynm":"南川","cityno":"nanchuan","cityid":"101040400","area_1":"重庆","area_2":"南川","area_3":""},{"weaid":"108","citynm":"江津","cityno":"jiangjin","cityid":"101040500","area_1":"重庆","area_2":"江津","area_3":""},{"weaid":"110","citynm":"渝北","cityno":"yubei","cityid":"101040700","area_1":"重庆","area_2":"渝北","area_3":""},{"weaid":"111","citynm":"北碚","cityno":"beibei","cityid":"101040800","area_1":"重庆","area_2":"北碚","area_3":""},{"weaid":"112","citynm":"巴南","cityno":"banan","cityid":"101040900","area_1":"重庆","area_2":"巴南","area_3":""},{"weaid":"113","citynm":"长寿","cityno":"changshou","cityid":"101041000","area_1":"重庆","area_2":"长寿","area_3":""},{"weaid":"114","citynm":"黔江","cityno":"cqqianjiang","cityid":"101041100","area_1":"重庆","area_2":"黔江","area_3":""},{"weaid":"116","citynm":"万州","cityno":"wanzhou","cityid":"101041300","area_1":"重庆","area_2":"万州","area_3":""},{"weaid":"117","citynm":"涪陵","cityno":"fuling","cityid":"101041400","area_1":"重庆","area_2":"涪陵","area_3":""},{"weaid":"118","citynm":"开县","cityno":"kaixian","cityid":"101041500","area_1":"重庆","area_2":"开县","area_3":""},{"weaid":"119","citynm":"城口","cityno":"chengkou","cityid":"101041600","area_1":"重庆","area_2":"城口","area_3":""},{"weaid":"120","citynm":"云阳","cityno":"yunyang","cityid":"101041700","area_1":"重庆","area_2":"云阳","area_3":""},{"weaid":"121","citynm":"巫溪","cityno":"cqwuxi","cityid":"101041800","area_1":"重庆","area_2":"巫溪","area_3":""},{"weaid":"122","citynm":"奉节","cityno":"fengjie","cityid":"101041900","area_1":"重庆","area_2":"奉节","area_3":""},{"weaid":"123","citynm":"巫山","cityno":"cqwushan","cityid":"101042000","area_1":"重庆","area_2":"巫山","area_3":""},{"weaid":"124","citynm":"潼南","cityno":"tongnan","cityid":"101042100","area_1":"重庆","area_2":"潼南","area_3":""},{"weaid":"125","citynm":"垫江","cityno":"dianjiang","cityid":"101042200","area_1":"重庆","area_2":"垫江","area_3":""},{"weaid":"126","citynm":"梁平","cityno":"liangping","cityid":"101042300","area_1":"重庆","area_2":"梁平","area_3":""},{"weaid":"127","citynm":"忠县","cityno":"zhongxian","cityid":"101042400","area_1":"重庆","area_2":"忠县","area_3":""},{"weaid":"128","citynm":"石柱","cityno":"shizhu","cityid":"101042500","area_1":"重庆","area_2":"石柱","area_3":""},{"weaid":"129","citynm":"大足","cityno":"dazu","cityid":"101042600","area_1":"重庆","area_2":"大足","area_3":""},{"weaid":"130","citynm":"荣昌","cityno":"rongchang","cityid":"101042700","area_1":"重庆","area_2":"荣昌","area_3":""},{"weaid":"131","citynm":"铜梁","cityno":"tongliang","cityid":"101042800","area_1":"重庆","area_2":"铜梁","area_3":""},{"weaid":"132","citynm":"璧山","cityno":"bishan","cityid":"101042900","area_1":"重庆","area_2":"璧山","area_3":""},{"weaid":"133","citynm":"丰都","cityno":"fengdu","cityid":"101043000","area_1":"重庆","area_2":"丰都","area_3":""},{"weaid":"134","citynm":"武隆","cityno":"wulong","cityid":"101043100","area_1":"重庆","area_2":"武隆","area_3":""},{"weaid":"135","citynm":"彭水","cityno":"pengshui","cityid":"101043200","area_1":"重庆","area_2":"彭水","area_3":""},{"weaid":"136","citynm":"綦江","cityno":"qijiang","cityid":"101043300","area_1":"重庆","area_2":"綦江","area_3":""},{"weaid":"137","citynm":"酉阳","cityno":"youyang","cityid":"101043400","area_1":"重庆","area_2":"酉阳","area_3":""},{"weaid":"138","citynm":"秀山","cityno":"xiushan","cityid":"101043600","area_1":"重庆","area_2":"秀山","area_3":""},{"weaid":"140","citynm":"永川","cityno":"yongchuan","cityid":"101040200","area_1":"重庆","area_2":"永川","area_3":""},{"weaid":"141","citynm":"福州","cityno":"fjfuzhou","cityid":"101230101","area_1":"福建","area_2":"福州","area_3":"城区"},{"weaid":"142","citynm":"泉州","cityno":"quanzhou","cityid":"101230501","area_1":"福建","area_2":"泉州","area_3":"城区"},{"weaid":"143","citynm":"漳州","cityno":"zhangzhou","cityid":"101230601","area_1":"福建","area_2":"漳州","area_3":"城区"},{"weaid":"144","citynm":"龙岩","cityno":"longyan","cityid":"101230701","area_1":"福建","area_2":"龙岩","area_3":"城区"},{"weaid":"146","citynm":"南平","cityno":"nanping","cityid":"101230901","area_1":"福建","area_2":"南平","area_3":"城区"},{"weaid":"147","citynm":"厦门","cityno":"xiamen","cityid":"101230201","area_1":"福建","area_2":"厦门","area_3":"城区"},{"weaid":"148","citynm":"宁德","cityno":"ningde","cityid":"101230301","area_1":"福建","area_2":"宁德","area_3":"城区"},{"weaid":"149","citynm":"莆田","cityno":"putian","cityid":"101230401","area_1":"福建","area_2":"莆田","area_3":"城区"},{"weaid":"150","citynm":"三明","cityno":"sanming","cityid":"101230801","area_1":"福建","area_2":"三明","area_3":"城区"},{"weaid":"151","citynm":"兰州","cityno":"lanzhou","cityid":"101160101","area_1":"甘肃","area_2":"兰州","area_3":"城区"},{"weaid":"152","citynm":"平凉","cityno":"pingliang","cityid":"101160301","area_1":"甘肃","area_2":"平凉","area_3":"城区"},{"weaid":"153","citynm":"庆阳","cityno":"gsqingyang","cityid":"101160401","area_1":"甘肃","area_2":"庆阳","area_3":"城区"},{"weaid":"154","citynm":"武威","cityno":"gswuwei","cityid":"101160501","area_1":"甘肃","area_2":"武威","area_3":"城区"},{"weaid":"155","citynm":"金昌","cityno":"jinchang","cityid":"101160601","area_1":"甘肃","area_2":"金昌","area_3":"城区"},{"weaid":"156","citynm":"嘉峪关","cityno":"jiayuguan","cityid":"101161401","area_1":"甘肃","area_2":"嘉峪关","area_3":"城区"},{"weaid":"157","citynm":"酒泉","cityno":"jiuquan","cityid":"101160801","area_1":"甘肃","area_2":"酒泉","area_3":"城区"},{"weaid":"158","citynm":"天水","cityno":"tianshui","cityid":"101160901","area_1":"甘肃","area_2":"天水","area_3":"城区"},{"weaid":"160","citynm":"临夏","cityno":"linxia","cityid":"101161101","area_1":"甘肃","area_2":"临夏","area_3":"城区"},{"weaid":"162","citynm":"白银","cityno":"baiyin","cityid":"101161301","area_1":"甘肃","area_2":"白银","area_3":"城区"},{"weaid":"163","citynm":"定西","cityno":"dingxi","cityid":"101160201","area_1":"甘肃","area_2":"定西","area_3":"城区"},{"weaid":"164","citynm":"张掖","cityno":"zhangye","cityid":"101160701","area_1":"甘肃","area_2":"张掖","area_3":"城区"},{"weaid":"165","citynm":"广州","cityno":"guangzhou","cityid":"101280101","area_1":"广东","area_2":"广州","area_3":"城区"},{"weaid":"166","citynm":"惠州","cityno":"huizhou","cityid":"101280301","area_1":"广东","area_2":"惠州","area_3":"城区"},{"weaid":"167","citynm":"梅州","cityno":"meizhou","cityid":"101280401","area_1":"广东","area_2":"梅州","area_3":"城区"},{"weaid":"168","citynm":"汕头","cityno":"shantou","cityid":"101280501","area_1":"广东","area_2":"汕头","area_3":"城区"},{"weaid":"169","citynm":"深圳","cityno":"shenzhen","cityid":"101280601","area_1":"广东","area_2":"深圳","area_3":"城区"},{"weaid":"170","citynm":"珠海","cityno":"zhuhai","cityid":"101280701","area_1":"广东","area_2":"珠海","area_3":"城区"},{"weaid":"171","citynm":"佛山","cityno":"foshan","cityid":"101280800","area_1":"广东","area_2":"佛山","area_3":"城区"},{"weaid":"172","citynm":"肇庆","cityno":"zhaoqing","cityid":"101280901","area_1":"广东","area_2":"肇庆","area_3":"城区"},{"weaid":"173","citynm":"湛江","cityno":"zhanjiang","cityid":"101281001","area_1":"广东","area_2":"湛江","area_3":"城区"},{"weaid":"174","citynm":"江门","cityno":"jiangmen","cityid":"101281101","area_1":"广东","area_2":"江门","area_3":"城区"},{"weaid":"175","citynm":"河源","cityno":"heyuan","cityid":"101281201","area_1":"广东","area_2":"河源","area_3":"城区"},{"weaid":"176","citynm":"清远","cityno":"gdqingyuan","cityid":"101281301","area_1":"广东","area_2":"清远","area_3":"城区"},{"weaid":"177","citynm":"云浮","cityno":"yunfu","cityid":"101281401","area_1":"广东","area_2":"云浮","area_3":"城区"},{"weaid":"178","citynm":"潮州","cityno":"chaozhou","cityid":"101281501","area_1":"广东","area_2":"潮州","area_3":"城区"},{"weaid":"179","citynm":"东莞","cityno":"dongguan","cityid":"101281601","area_1":"广东","area_2":"东莞","area_3":"城区"},{"weaid":"180","citynm":"中山","cityno":"gdzhongshan","cityid":"101281701","area_1":"广东","area_2":"中山","area_3":"城区"},{"weaid":"181","citynm":"阳江","cityno":"yangjiang","cityid":"101281801","area_1":"广东","area_2":"阳江","area_3":"城区"},{"weaid":"182","citynm":"揭阳","cityno":"jieyang","cityid":"101281901","area_1":"广东","area_2":"揭阳","area_3":"城区"},{"weaid":"183","citynm":"茂名","cityno":"maoming","cityid":"101282001","area_1":"广东","area_2":"茂名","area_3":"城区"},{"weaid":"184","citynm":"汕尾","cityno":"shanwei","cityid":"101282101","area_1":"广东","area_2":"汕尾","area_3":"城区"},{"weaid":"185","citynm":"韶关","cityno":"shaoguan","cityid":"101280201","area_1":"广东","area_2":"韶关","area_3":"城区"},{"weaid":"186","citynm":"南宁","cityno":"nanning","cityid":"101300101","area_1":"广西","area_2":"南宁","area_3":"城区"},{"weaid":"187","citynm":"柳州","cityno":"liuzhou","cityid":"101300301","area_1":"广西","area_2":"柳州","area_3":"城区"},{"weaid":"188","citynm":"来宾","cityno":"laibin","cityid":"101300401","area_1":"广西","area_2":"来宾","area_3":"城区"},{"weaid":"189","citynm":"桂林","cityno":"guilin","cityid":"101300501","area_1":"广西","area_2":"桂林","area_3":"城区"},{"weaid":"190","citynm":"梧州","cityno":"wuzhou","cityid":"101300601","area_1":"广西","area_2":"梧州","area_3":"城区"},{"weaid":"191","citynm":"防城港","cityno":"fangchenggang","cityid":"101301401","area_1":"广西","area_2":"防城港","area_3":"城区"},{"weaid":"192","citynm":"贵港","cityno":"guigang","cityid":"101300801","area_1":"广西","area_2":"贵港","area_3":"城区"},{"weaid":"193","citynm":"玉林","cityno":"gxyulin","cityid":"101300901","area_1":"广西","area_2":"玉林","area_3":"城区"},{"weaid":"194","citynm":"百色","cityno":"baise","cityid":"101301001","area_1":"广西","area_2":"百色","area_3":"城区"},{"weaid":"195","citynm":"钦州","cityno":"qinzhou","cityid":"101301101","area_1":"广西","area_2":"钦州","area_3":"城区"},{"weaid":"196","citynm":"河池","cityno":"hechi","cityid":"101301201","area_1":"广西","area_2":"河池","area_3":"城区"},{"weaid":"197","citynm":"北海","cityno":"beihai","cityid":"101301301","area_1":"广西","area_2":"北海","area_3":"城区"},{"weaid":"198","citynm":"崇左","cityno":"chongzuo","cityid":"101300201","area_1":"广西","area_2":"崇左","area_3":"城区"},{"weaid":"199","citynm":"贺州","cityno":"hezhou","cityid":"101300701","area_1":"广西","area_2":"贺州","area_3":"城区"},{"weaid":"200","citynm":"贵阳","cityno":"guiyang","cityid":"101260101","area_1":"贵州","area_2":"贵阳","area_3":"城区"},{"weaid":"201","citynm":"安顺","cityno":"anshun","cityid":"101260301","area_1":"贵州","area_2":"安顺","area_3":"城区"},{"weaid":"204","citynm":"铜仁","cityno":"tongren","cityid":"101260601","area_1":"贵州","area_2":"铜仁","area_3":"城区"},{"weaid":"205","citynm":"毕节","cityno":"bijie","cityid":"101260701","area_1":"贵州","area_2":"毕节","area_3":"城区"},{"weaid":"207","citynm":"遵义","cityno":"zunyi","cityid":"101260201","area_1":"贵州","area_2":"遵义","area_3":"城区"},{"weaid":"209","citynm":"昆明","cityno":"kunming","cityid":"101290101","area_1":"云南","area_2":"昆明","area_3":"城区"},{"weaid":"210","citynm":"红河","cityno":"honghe","cityid":"101290301","area_1":"云南","area_2":"红河","area_3":"城区"},{"weaid":"211","citynm":"文山","cityno":"wenshan","cityid":"101290601","area_1":"云南","area_2":"文山","area_3":"城区"},{"weaid":"212","citynm":"玉溪","cityno":"yuxi","cityid":"101290701","area_1":"云南","area_2":"玉溪","area_3":"城区"},{"weaid":"213","citynm":"楚雄","cityno":"chuxiong","cityid":"101290801","area_1":"云南","area_2":"楚雄","area_3":"城区"},{"weaid":"214","citynm":"普洱","cityno":"puer","cityid":"101290901","area_1":"云南","area_2":"普洱","area_3":"城区"},{"weaid":"215","citynm":"昭通","cityno":"zhaotong","cityid":"101291001","area_1":"云南","area_2":"昭通","area_3":"城区"},{"weaid":"216","citynm":"临沧","cityno":"lincang","cityid":"101291101","area_1":"云南","area_2":"临沧","area_3":"城区"},{"weaid":"217","citynm":"怒江","cityno":"nujiang","cityid":"101291201","area_1":"云南","area_2":"怒江","area_3":"城区"},{"weaid":"219","citynm":"丽江","cityno":"lijiang","cityid":"101291401","area_1":"云南","area_2":"丽江","area_3":"城区"},{"weaid":"220","citynm":"德宏","cityno":"dehong","cityid":"101291501","area_1":"云南","area_2":"德宏","area_3":"城区"},{"weaid":"222","citynm":"大理","cityno":"yndali","cityid":"101290201","area_1":"云南","area_2":"大理","area_3":"城区"},{"weaid":"223","citynm":"曲靖","cityno":"qujing","cityid":"101290401","area_1":"云南","area_2":"曲靖","area_3":"城区"},{"weaid":"224","citynm":"保山","cityno":"ynbaoshan","cityid":"101290501","area_1":"云南","area_2":"保山","area_3":"城区"},{"weaid":"225","citynm":"呼和浩特","cityno":"huhehaote","cityid":"101080101","area_1":"内蒙古","area_2":"呼和浩特","area_3":"城区"},{"weaid":"226","citynm":"乌海","cityno":"wuhai","cityid":"101080301","area_1":"内蒙古","area_2":"乌海","area_3":"城区"},{"weaid":"228","citynm":"通辽","cityno":"tongliao","cityid":"101080501","area_1":"内蒙古","area_2":"通辽","area_3":"城区"},{"weaid":"230","citynm":"鄂尔多斯","cityno":"eerduosi","cityid":"101080701","area_1":"内蒙古","area_2":"鄂尔多斯","area_3":"城区"},{"weaid":"235","citynm":"包头","cityno":"baotou","cityid":"101080201","area_1":"内蒙古","area_2":"包头","area_3":"城区"},{"weaid":"236","citynm":"赤峰","cityno":"chifeng","cityid":"101080601","area_1":"内蒙古","area_2":"赤峰","area_3":"城区"},{"weaid":"237","citynm":"南昌","cityno":"nanchang","cityid":"101240101","area_1":"江西","area_2":"南昌","area_3":"城区"},{"weaid":"238","citynm":"上饶","cityno":"shangrao","cityid":"101240301","area_1":"江西","area_2":"上饶","area_3":"城区"},{"weaid":"239","citynm":"抚州","cityno":"fuzhou","cityid":"101240401","area_1":"江西","area_2":"抚州","area_3":"城区"},{"weaid":"240","citynm":"宜春","cityno":"jxyichun","cityid":"101240501","area_1":"江西","area_2":"宜春","area_3":"城区"},{"weaid":"241","citynm":"鹰潭","cityno":"yingtan","cityid":"101241101","area_1":"江西","area_2":"鹰潭","area_3":"城区"},{"weaid":"242","citynm":"赣州","cityno":"ganzhou","cityid":"101240701","area_1":"江西","area_2":"赣州","area_3":"城区"},{"weaid":"243","citynm":"景德镇","cityno":"jingdezhen","cityid":"101240801","area_1":"江西","area_2":"景德镇","area_3":"城区"},{"weaid":"244","citynm":"萍乡","cityno":"jxpingxiang","cityid":"101240901","area_1":"江西","area_2":"萍乡","area_3":"城区"},{"weaid":"245","citynm":"新余","cityno":"xinyu","cityid":"101241001","area_1":"江西","area_2":"新余","area_3":"城区"},{"weaid":"246","citynm":"九江","cityno":"jiujiang","cityid":"101240201","area_1":"江西","area_2":"九江","area_3":"城区"},{"weaid":"247","citynm":"吉安","cityno":"jxjian","cityid":"101240601","area_1":"江西","area_2":"吉安","area_3":"城区"},{"weaid":"248","citynm":"武汉","cityno":"wuhan","cityid":"101200101","area_1":"湖北","area_2":"武汉","area_3":"城区"},{"weaid":"249","citynm":"黄冈","cityno":"huanggang","cityid":"101200501","area_1":"湖北","area_2":"黄冈","area_3":"城区"},{"weaid":"250","citynm":"荆州","cityno":"hbjingzhou","cityid":"101200801","area_1":"湖北","area_2":"荆州","area_3":"城区"},{"weaid":"251","citynm":"宜昌","cityno":"yichang","cityid":"101200901","area_1":"湖北","area_2":"宜昌","area_3":"城区"},{"weaid":"252","citynm":"恩施","cityno":"enshi","cityid":"101201001","area_1":"湖北","area_2":"恩施","area_3":"城区"},{"weaid":"253","citynm":"十堰","cityno":"shiyan","cityid":"101201101","area_1":"湖北","area_2":"十堰","area_3":"城区"},{"weaid":"254","citynm":"神农架","cityno":"shennongjia","cityid":"101201201","area_1":"湖北","area_2":"神农架","area_3":"城区"},{"weaid":"255","citynm":"随州","cityno":"suizhou","cityid":"101201301","area_1":"湖北","area_2":"随州","area_3":"城区"},{"weaid":"256","citynm":"荆门","cityno":"jingmen","cityid":"101201401","area_1":"湖北","area_2":"荆门","area_3":"城区"},{"weaid":"257","citynm":"天门","cityno":"tianmen","cityid":"101201501","area_1":"湖北","area_2":"天门","area_3":"城区"},{"weaid":"258","citynm":"仙桃","cityno":"xiantao","cityid":"101201601","area_1":"湖北","area_2":"仙桃","area_3":"城区"},{"weaid":"259","citynm":"潜江","cityno":"hbqianjiang","cityid":"101201701","area_1":"湖北","area_2":"潜江","area_3":"城区"},{"weaid":"260","citynm":"襄阳","cityno":"xiangyang","cityid":"101200201","area_1":"湖北","area_2":"襄阳","area_3":"城区"},{"weaid":"261","citynm":"鄂州","cityno":"ezhou","cityid":"101200301","area_1":"湖北","area_2":"鄂州","area_3":"城区"},{"weaid":"262","citynm":"孝感","cityno":"xiaogan","cityid":"101200401","area_1":"湖北","area_2":"孝感","area_3":"城区"},{"weaid":"263","citynm":"黄石","cityno":"huangshi","cityid":"101200601","area_1":"湖北","area_2":"黄石","area_3":"城区"},{"weaid":"264","citynm":"咸宁","cityno":"xianning","cityid":"101200701","area_1":"湖北","area_2":"咸宁","area_3":"城区"},{"weaid":"265","citynm":"成都","cityno":"chengdu","cityid":"101270101","area_1":"四川","area_2":"成都","area_3":"城区"},{"weaid":"266","citynm":"自贡","cityno":"zigong","cityid":"101270301","area_1":"四川","area_2":"自贡","area_3":"城区"},{"weaid":"267","citynm":"绵阳","cityno":"mianyang","cityid":"101270401","area_1":"四川","area_2":"绵阳","area_3":"城区"},{"weaid":"268","citynm":"南充","cityno":"nanchong","cityid":"101270501","area_1":"四川","area_2":"南充","area_3":"城区"},{"weaid":"269","citynm":"达州","cityno":"dazhou","cityid":"101270601","area_1":"四川","area_2":"达州","area_3":"城区"},{"weaid":"270","citynm":"遂宁","cityno":"scsuining","cityid":"101270701","area_1":"四川","area_2":"遂宁","area_3":"城区"},{"weaid":"271","citynm":"广安","cityno":"guangan","cityid":"101270801","area_1":"四川","area_2":"广安","area_3":"城区"},{"weaid":"272","citynm":"巴中","cityno":"bazhong","cityid":"101270901","area_1":"四川","area_2":"巴中","area_3":"城区"},{"weaid":"273","citynm":"泸州","cityno":"luzhou","cityid":"101271001","area_1":"四川","area_2":"泸州","area_3":"城区"},{"weaid":"274","citynm":"宜宾","cityno":"yibin","cityid":"101271101","area_1":"四川","area_2":"宜宾","area_3":"城区"},{"weaid":"275","citynm":"内江","cityno":"neijiang","cityid":"101271201","area_1":"四川","area_2":"内江","area_3":"城区"},{"weaid":"276","citynm":"资阳","cityno":"scziyang","cityid":"101271301","area_1":"四川","area_2":"资阳","area_3":"城区"},{"weaid":"277","citynm":"乐山","cityno":"leshan","cityid":"101271401","area_1":"四川","area_2":"乐山","area_3":"城区"},{"weaid":"278","citynm":"眉山","cityno":"meishan","cityid":"101271501","area_1":"四川","area_2":"眉山","area_3":"城区"},{"weaid":"279","citynm":"凉山","cityno":"scliangshan","cityid":"101271601","area_1":"四川","area_2":"凉山","area_3":"城区"},{"weaid":"280","citynm":"雅安","cityno":"yaan","cityid":"101271701","area_1":"四川","area_2":"雅安","area_3":"城区"},{"weaid":"281","citynm":"甘孜","cityno":"ganzi","cityid":"101271801","area_1":"四川","area_2":"甘孜","area_3":"城区"},{"weaid":"282","citynm":"阿坝","cityno":"aba","cityid":"101271901","area_1":"四川","area_2":"阿坝","area_3":"城区"},{"weaid":"283","citynm":"德阳","cityno":"deyang","cityid":"101272001","area_1":"四川","area_2":"德阳","area_3":"城区"},{"weaid":"284","citynm":"广元","cityno":"guangyuan","cityid":"101272101","area_1":"四川","area_2":"广元","area_3":"城区"},{"weaid":"285","citynm":"攀枝花","cityno":"panzhihua","cityid":"101270201","area_1":"四川","area_2":"攀枝花","area_3":"城区"},{"weaid":"286","citynm":"银川","cityno":"yinchuan","cityid":"101170101","area_1":"宁夏","area_2":"银川","area_3":"城区"},{"weaid":"287","citynm":"中卫","cityno":"zhongwei","cityid":"101170501","area_1":"宁夏","area_2":"中卫","area_3":"城区"},{"weaid":"288","citynm":"固原","cityno":"guyuan","cityid":"101170401","area_1":"宁夏","area_2":"固原","area_3":"城区"},{"weaid":"289","citynm":"石嘴山","cityno":"shizuishan","cityid":"101170201","area_1":"宁夏","area_2":"石嘴山","area_3":"城区"},{"weaid":"290","citynm":"吴忠","cityno":"wuzhong","cityid":"101170301","area_1":"宁夏","area_2":"吴忠","area_3":"城区"},{"weaid":"291","citynm":"西宁","cityno":"xining","cityid":"101150101","area_1":"青海","area_2":"西宁","area_3":"城区"},{"weaid":"295","citynm":"玉树","cityno":"qhyushu","cityid":"101150601","area_1":"青海","area_2":"玉树","area_3":"城区"},{"weaid":"299","citynm":"济南","cityno":"jinan","cityid":"101120101","area_1":"山东","area_2":"济南","area_3":"城区"},{"weaid":"300","citynm":"潍坊","cityno":"weifang","cityid":"101120601","area_1":"山东","area_2":"潍坊","area_3":"城区"},{"weaid":"301","citynm":"临沂","cityno":"sdlinyi","cityid":"101120901","area_1":"山东","area_2":"临沂","area_3":"城区"},{"weaid":"302","citynm":"菏泽","cityno":"heze","cityid":"101121001","area_1":"山东","area_2":"菏泽","area_3":"城区"},{"weaid":"303","citynm":"滨州","cityno":"binzhou","cityid":"101121101","area_1":"山东","area_2":"滨州","area_3":"城区"},{"weaid":"304","citynm":"东营","cityno":"dongying","cityid":"101121201","area_1":"山东","area_2":"东营","area_3":"城区"},{"weaid":"305","citynm":"威海","cityno":"weihai","cityid":"101121301","area_1":"山东","area_2":"威海","area_3":"城区"},{"weaid":"306","citynm":"枣庄","cityno":"zaozhuang","cityid":"101121401","area_1":"山东","area_2":"枣庄","area_3":"城区"},{"weaid":"307","citynm":"日照","cityno":"rizhao","cityid":"101121501","area_1":"山东","area_2":"日照","area_3":"城区"},{"weaid":"308","citynm":"莱芜","cityno":"laiwu","cityid":"101121601","area_1":"山东","area_2":"莱芜","area_3":"城区"},{"weaid":"309","citynm":"聊城","cityno":"liaocheng","cityid":"101121701","area_1":"山东","area_2":"聊城","area_3":"城区"},{"weaid":"310","citynm":"青岛","cityno":"qingdao","cityid":"101120201","area_1":"山东","area_2":"青岛","area_3":"城区"},{"weaid":"311","citynm":"淄博","cityno":"zibo","cityid":"101120301","area_1":"山东","area_2":"淄博","area_3":"城区"},{"weaid":"312","citynm":"德州","cityno":"dezhou","cityid":"101120401","area_1":"山东","area_2":"德州","area_3":"城区"},{"weaid":"313","citynm":"烟台","cityno":"yantai","cityid":"101120501","area_1":"山东","area_2":"烟台","area_3":"城区"},{"weaid":"314","citynm":"济宁","cityno":"sdjining","cityid":"101120701","area_1":"山东","area_2":"济宁","area_3":"城区"},{"weaid":"315","citynm":"泰安","cityno":"sdtaian","cityid":"101120801","area_1":"山东","area_2":"泰安","area_3":"城区"},{"weaid":"316","citynm":"西安","cityno":"xian","cityid":"101110101","area_1":"陕西","area_2":"西安","area_3":"城区"},{"weaid":"317","citynm":"延安","cityno":"yanan","cityid":"101110300","area_1":"陕西","area_2":"延安","area_3":"城区"},{"weaid":"318","citynm":"榆林","cityno":"sxyulin","cityid":"101110401","area_1":"陕西","area_2":"榆林","area_3":"城区"},{"weaid":"319","citynm":"铜川","cityno":"tongchuan","cityid":"101111001","area_1":"陕西","area_2":"铜川","area_3":"城区"},{"weaid":"320","citynm":"商洛","cityno":"shangluo","cityid":"101110601","area_1":"陕西","area_2":"商洛","area_3":"城区"},{"weaid":"321","citynm":"安康","cityno":"ankang","cityid":"101110701","area_1":"陕西","area_2":"安康","area_3":"城区"},{"weaid":"322","citynm":"汉中","cityno":"hanzhong","cityid":"101110801","area_1":"陕西","area_2":"汉中","area_3":"城区"},{"weaid":"323","citynm":"宝鸡","cityno":"baoji","cityid":"101110901","area_1":"陕西","area_2":"宝鸡","area_3":"城区"},{"weaid":"324","citynm":"咸阳","cityno":"xianyang","cityid":"101110200","area_1":"陕西","area_2":"咸阳","area_3":"城区"},{"weaid":"325","citynm":"渭南","cityno":"weinan","cityid":"101110501","area_1":"陕西","area_2":"渭南","area_3":"城区"},{"weaid":"326","citynm":"太原","cityno":"taiyuan","cityid":"101100101","area_1":"山西","area_2":"太原","area_3":"城区"},{"weaid":"327","citynm":"临汾","cityno":"linfen","cityid":"101100701","area_1":"山西","area_2":"临汾","area_3":"城区"},{"weaid":"328","citynm":"运城","cityno":"yuncheng","cityid":"101100801","area_1":"山西","area_2":"运城","area_3":"城区"},{"weaid":"329","citynm":"朔州","cityno":"shuozhou","cityid":"101100901","area_1":"山西","area_2":"朔州","area_3":"城区"},{"weaid":"330","citynm":"忻州","cityno":"sxxinzhou","cityid":"101101001","area_1":"山西","area_2":"忻州","area_3":"城区"},{"weaid":"331","citynm":"长治","cityno":"changzhi","cityid":"101100501","area_1":"山西","area_2":"长治","area_3":"城区"},{"weaid":"332","citynm":"大同","cityno":"sxdatong","cityid":"101100201","area_1":"山西","area_2":"大同","area_3":"城区"},{"weaid":"333","citynm":"阳泉","cityno":"yangquan","cityid":"101100301","area_1":"山西","area_2":"阳泉","area_3":"城区"},{"weaid":"334","citynm":"晋中","cityno":"jinzhong","cityid":"101100401","area_1":"山西","area_2":"晋中","area_3":"城区"},{"weaid":"335","citynm":"晋城","cityno":"jincheng","cityid":"101100601","area_1":"山西","area_2":"晋城","area_3":"城区"},{"weaid":"336","citynm":"吕梁","cityno":"lvliang","cityid":"101101100","area_1":"山西","area_2":"吕梁","area_3":"城区"},{"weaid":"337","citynm":"乌鲁木齐","cityno":"wulumuqi","cityid":"101130101","area_1":"新疆","area_2":"乌鲁木齐","area_3":"城区"},{"weaid":"338","citynm":"石河子","cityno":"shihezi","cityid":"101130301","area_1":"新疆","area_2":"石河子","area_3":"城区"},{"weaid":"339","citynm":"昌吉","cityno":"changji","cityid":"101130401","area_1":"新疆","area_2":"昌吉","area_3":"城区"},{"weaid":"340","citynm":"吐鲁番","cityno":"tulufan","cityid":"101130501","area_1":"新疆","area_2":"吐鲁番","area_3":"城区"},{"weaid":"342","citynm":"阿拉尔","cityno":"alaer","cityid":"101130701","area_1":"新疆","area_2":"阿拉尔","area_3":"城区"},{"weaid":"343","citynm":"阿克苏","cityno":"akesu","cityid":"101130801","area_1":"新疆","area_2":"阿克苏","area_3":"城区"},{"weaid":"344","citynm":"喀什","cityno":"kashi","cityid":"101130901","area_1":"新疆","area_2":"喀什","area_3":"城区"},{"weaid":"346","citynm":"塔城","cityno":"tacheng","cityid":"101131101","area_1":"新疆","area_2":"塔城","area_3":"城区"},{"weaid":"347","citynm":"哈密","cityno":"hami","cityid":"101131201","area_1":"新疆","area_2":"哈密","area_3":"城区"},{"weaid":"348","citynm":"和田","cityno":"hetian","cityid":"101131301","area_1":"新疆","area_2":"和田","area_3":"城区"},{"weaid":"349","citynm":"阿勒泰","cityno":"aletai","cityid":"101131401","area_1":"新疆","area_2":"阿勒泰","area_3":"城区"},{"weaid":"352","citynm":"克拉玛依","cityno":"kelamayi","cityid":"101130201","area_1":"新疆","area_2":"克拉玛依","area_3":"城区"},{"weaid":"353","citynm":"拉萨","cityno":"lasa","cityid":"101140101","area_1":"西藏","area_2":"拉萨","area_3":"城区"},{"weaid":"354","citynm":"山南","cityno":"shannan","cityid":"101140301","area_1":"西藏","area_2":"山南","area_3":"城区"},{"weaid":"355","citynm":"阿里","cityno":"ali","cityid":"101140701","area_1":"西藏","area_2":"阿里","area_3":"城区"},{"weaid":"356","citynm":"昌都","cityno":"changdu","cityid":"101140501","area_1":"西藏","area_2":"昌都","area_3":"城区"},{"weaid":"357","citynm":"那曲","cityno":"naqu","cityid":"101140601","area_1":"西藏","area_2":"那曲","area_3":"城区"},{"weaid":"358","citynm":"日喀则","cityno":"rikaze","cityid":"101140201","area_1":"西藏","area_2":"日喀则","area_3":"城区"},{"weaid":"359","citynm":"林芝","cityno":"linzhi","cityid":"101140401","area_1":"西藏","area_2":"林芝","area_3":"城区"},{"weaid":"360","citynm":"台北县","cityno":"taibeixian","cityid":"101340101","area_1":"台湾","area_2":"台北","area_3":"城区"},{"weaid":"361","citynm":"高雄","cityno":"gaoxiong","cityid":"101340201","area_1":"台湾","area_2":"高雄","area_3":"城区"},{"weaid":"362","citynm":"台中","cityno":"taizhong","cityid":"101340401","area_1":"台湾","area_2":"台中","area_3":"城区"},{"weaid":"363","citynm":"海口","cityno":"haikou","cityid":"101310101","area_1":"海南","area_2":"海口","area_3":""},{"weaid":"364","citynm":"三亚","cityno":"sanya","cityid":"101310201","area_1":"海南","area_2":"三亚","area_3":""},{"weaid":"365","citynm":"东方","cityno":"dongfang","cityid":"101310202","area_1":"海南","area_2":"东方","area_3":""},{"weaid":"366","citynm":"临高","cityno":"lingao","cityid":"101310203","area_1":"海南","area_2":"临高","area_3":""},{"weaid":"367","citynm":"澄迈","cityno":"chengmai","cityid":"101310204","area_1":"海南","area_2":"澄迈","area_3":""},{"weaid":"368","citynm":"儋州","cityno":"danzhou","cityid":"101310205","area_1":"海南","area_2":"儋州","area_3":""},{"weaid":"369","citynm":"昌江","cityno":"changjiang","cityid":"101310206","area_1":"海南","area_2":"昌江","area_3":""},{"weaid":"370","citynm":"白沙","cityno":"baisha","cityid":"101310207","area_1":"海南","area_2":"白沙","area_3":""},{"weaid":"371","citynm":"琼中","cityno":"qiongzhong","cityid":"101310208","area_1":"海南","area_2":"琼中","area_3":""},{"weaid":"372","citynm":"定安","cityno":"dingan","cityid":"101310209","area_1":"海南","area_2":"定安","area_3":""},{"weaid":"373","citynm":"屯昌","cityno":"tunchang","cityid":"101310210","area_1":"海南","area_2":"屯昌","area_3":""},{"weaid":"374","citynm":"琼海","cityno":"qionghai","cityid":"101310211","area_1":"海南","area_2":"琼海","area_3":""},{"weaid":"375","citynm":"文昌","cityno":"wenchang","cityid":"101310212","area_1":"海南","area_2":"文昌","area_3":""},{"weaid":"376","citynm":"保亭","cityno":"baoting","cityid":"101310214","area_1":"海南","area_2":"保亭","area_3":""},{"weaid":"377","citynm":"万宁","cityno":"wanning","cityid":"101310215","area_1":"海南","area_2":"万宁","area_3":""},{"weaid":"378","citynm":"陵水","cityno":"lingshui","cityid":"101310216","area_1":"海南","area_2":"陵水","area_3":""},{"weaid":"381","citynm":"乐东","cityno":"ledong","cityid":"101310221","area_1":"海南","area_2":"乐东","area_3":""},{"weaid":"382","citynm":"五指山","cityno":"wuzhishan","cityid":"101310222","area_1":"海南","area_2":"五指山","area_3":""},{"weaid":"384","citynm":"长沙","cityno":"changsha","cityid":"101250101","area_1":"湖南","area_2":"长沙","area_3":"城区"},{"weaid":"385","citynm":"株洲","cityno":"zhuzhou","cityid":"101250301","area_1":"湖南","area_2":"株洲","area_3":"城区"},{"weaid":"386","citynm":"衡阳","cityno":"hengyang","cityid":"101250401","area_1":"湖南","area_2":"衡阳","area_3":"城区"},{"weaid":"387","citynm":"郴州","cityno":"chenzhou","cityid":"101250501","area_1":"湖南","area_2":"郴州","area_3":"城区"},{"weaid":"388","citynm":"常德","cityno":"changde","cityid":"101250601","area_1":"湖南","area_2":"常德","area_3":"城区"},{"weaid":"389","citynm":"益阳","cityno":"hnyiyang","cityid":"101250700","area_1":"湖南","area_2":"益阳","area_3":"城区"},{"weaid":"390","citynm":"娄底","cityno":"loudi","cityid":"101250801","area_1":"湖南","area_2":"娄底","area_3":"城区"},{"weaid":"391","citynm":"邵阳","cityno":"shaoyang","cityid":"101250901","area_1":"湖南","area_2":"邵阳","area_3":"城区"},{"weaid":"392","citynm":"岳阳","cityno":"yueyang","cityid":"101251001","area_1":"湖南","area_2":"岳阳","area_3":"城区"},{"weaid":"393","citynm":"张家界","cityno":"zhangjiajie","cityid":"101251101","area_1":"湖南","area_2":"张家界","area_3":"城区"},{"weaid":"394","citynm":"怀化","cityno":"huaihua","cityid":"101251201","area_1":"湖南","area_2":"怀化","area_3":"城区"},{"weaid":"396","citynm":"永州","cityno":"yongzhou","cityid":"101251401","area_1":"湖南","area_2":"永州","area_3":"城区"},{"weaid":"398","citynm":"湘潭","cityno":"xiangtan","cityid":"101250201","area_1":"湖南","area_2":"湘潭","area_3":"城区"},{"weaid":"399","citynm":"南京","cityno":"nanjing","cityid":"101190101","area_1":"江苏","area_2":"南京","area_3":"城区"},{"weaid":"400","citynm":"镇江","cityno":"zhenjiang","cityid":"101190301","area_1":"江苏","area_2":"镇江","area_3":"城区"},{"weaid":"401","citynm":"苏州","cityno":"jssuzhou","cityid":"101190401","area_1":"江苏","area_2":"苏州","area_3":"城区"},{"weaid":"402","citynm":"南通","cityno":"nantong","cityid":"101190501","area_1":"江苏","area_2":"南通","area_3":"城区"},{"weaid":"403","citynm":"扬州","cityno":"yangzhou","cityid":"101190601","area_1":"江苏","area_2":"扬州","area_3":"城区"},{"weaid":"404","citynm":"宿迁","cityno":"suqian","cityid":"101191301","area_1":"江苏","area_2":"宿迁","area_3":"城区"},{"weaid":"405","citynm":"徐州","cityno":"xuzhou","cityid":"101190801","area_1":"江苏","area_2":"徐州","area_3":"城区"},{"weaid":"406","citynm":"淮安","cityno":"huaian","cityid":"101190901","area_1":"江苏","area_2":"淮安","area_3":"城区"},{"weaid":"407","citynm":"连云港","cityno":"lianyungang","cityid":"101191001","area_1":"江苏","area_2":"连云港","area_3":"城区"},{"weaid":"408","citynm":"常州","cityno":"changzhou","cityid":"101191101","area_1":"江苏","area_2":"常州","area_3":"城区"},{"weaid":"409","citynm":"泰州","cityno":"jstaizhou","cityid":"101191201","area_1":"江苏","area_2":"泰州","area_3":"城区"},{"weaid":"410","citynm":"无锡","cityno":"jswuxi","cityid":"101190201","area_1":"江苏","area_2":"无锡","area_3":"城区"},{"weaid":"411","citynm":"盐城","cityno":"yancheng","cityid":"101190701","area_1":"江苏","area_2":"盐城","area_3":"城区"},{"weaid":"412","citynm":"哈尔滨","cityno":"haerbin","cityid":"101050101","area_1":"黑龙江","area_2":"哈尔滨","area_3":"城区"},{"weaid":"413","citynm":"牡丹江","cityno":"mudanjiang","cityid":"101050301","area_1":"黑龙江","area_2":"牡丹江","area_3":"城区"},{"weaid":"414","citynm":"佳木斯","cityno":"jiamusi","cityid":"101050401","area_1":"黑龙江","area_2":"佳木斯","area_3":"城区"},{"weaid":"415","citynm":"绥化","cityno":"suihua","cityid":"101050501","area_1":"黑龙江","area_2":"绥化","area_3":"城区"},{"weaid":"416","citynm":"黑河","cityno":"heihe","cityid":"101050601","area_1":"黑龙江","area_2":"黑河","area_3":"城区"},{"weaid":"417","citynm":"双鸭山","cityno":"shuangyashan","cityid":"101051301","area_1":"黑龙江","area_2":"双鸭山","area_3":"城区"},{"weaid":"418","citynm":"伊春","cityno":"hljyichun","cityid":"101050801","area_1":"黑龙江","area_2":"伊春","area_3":"城区"},{"weaid":"419","citynm":"大庆","cityno":"daqing","cityid":"101050901","area_1":"黑龙江","area_2":"大庆","area_3":"城区"},{"weaid":"420","citynm":"七台河","cityno":"qitaihe","cityid":"101051002","area_1":"黑龙江","area_2":"七台河","area_3":"城区"},{"weaid":"421","citynm":"鸡西","cityno":"jixi","cityid":"101051101","area_1":"黑龙江","area_2":"鸡西","area_3":"城区"},{"weaid":"422","citynm":"鹤岗","cityno":"hegang","cityid":"101051201","area_1":"黑龙江","area_2":"鹤岗","area_3":"城区"},{"weaid":"423","citynm":"齐齐哈尔","cityno":"qiqihaer","cityid":"101050201","area_1":"黑龙江","area_2":"齐齐哈尔","area_3":"城区"},{"weaid":"424","citynm":"大兴安岭","cityno":"daxinganling","cityid":"101050701","area_1":"黑龙江","area_2":"大兴安岭","area_3":"城区"},{"weaid":"425","citynm":"长春","cityno":"changchun","cityid":"101060101","area_1":"吉林","area_2":"长春","area_3":"城区"},{"weaid":"427","citynm":"四平","cityno":"siping","cityid":"101060401","area_1":"吉林","area_2":"四平","area_3":"城区"},{"weaid":"428","citynm":"白山","cityno":"baishan","cityid":"101060901","area_1":"吉林","area_2":"白山","area_3":"城区"},{"weaid":"429","citynm":"白城","cityno":"baicheng","cityid":"101060601","area_1":"吉林","area_2":"白城","area_3":"城区"},{"weaid":"430","citynm":"辽源","cityno":"liaoyuan","cityid":"101060701","area_1":"吉林","area_2":"辽源","area_3":"城区"},{"weaid":"431","citynm":"松原","cityno":"songyuan","cityid":"101060801","area_1":"吉林","area_2":"松原","area_3":"城区"},{"weaid":"432","citynm":"吉林","cityno":"jilin","cityid":"101060201","area_1":"吉林","area_2":"城区","area_3":""},{"weaid":"433","citynm":"通化","cityno":"tonghua","cityid":"101060501","area_1":"吉林","area_2":"通化","area_3":"城区"},{"weaid":"434","citynm":"沈阳","cityno":"shenyang","cityid":"101070101","area_1":"辽宁","area_2":"沈阳","area_3":"城区"},{"weaid":"435","citynm":"鞍山","cityno":"anshan","cityid":"101070301","area_1":"辽宁","area_2":"鞍山","area_3":"城区"},{"weaid":"436","citynm":"抚顺","cityno":"fushun","cityid":"101070401","area_1":"辽宁","area_2":"抚顺","area_3":"城区"},{"weaid":"437","citynm":"本溪","cityno":"benxi","cityid":"101070501","area_1":"辽宁","area_2":"本溪","area_3":"城区"},{"weaid":"438","citynm":"丹东","cityno":"dandong","cityid":"101070601","area_1":"辽宁","area_2":"丹东","area_3":"城区"},{"weaid":"439","citynm":"葫芦岛","cityno":"huludao","cityid":"101071401","area_1":"辽宁","area_2":"葫芦岛","area_3":"城区"},{"weaid":"440","citynm":"营口","cityno":"yingkou","cityid":"101070801","area_1":"辽宁","area_2":"营口","area_3":"城区"},{"weaid":"441","citynm":"阜新","cityno":"fuxin","cityid":"101070901","area_1":"辽宁","area_2":"阜新","area_3":"城区"},{"weaid":"442","citynm":"辽阳","cityno":"liaoyang","cityid":"101071001","area_1":"辽宁","area_2":"辽阳","area_3":"城区"},{"weaid":"443","citynm":"铁岭","cityno":"tieling","cityid":"101071101","area_1":"辽宁","area_2":"铁岭","area_3":"城区"},{"weaid":"444","citynm":"朝阳","cityno":"lnchaoyang","cityid":"101071201","area_1":"辽宁","area_2":"朝阳","area_3":"城区"},{"weaid":"445","citynm":"盘锦","cityno":"panjin","cityid":"101071301","area_1":"辽宁","area_2":"盘锦","area_3":"城区"},{"weaid":"446","citynm":"大连","cityno":"dalian","cityid":"101070201","area_1":"辽宁","area_2":"大连","area_3":"城区"},{"weaid":"447","citynm":"锦州","cityno":"jinzhou","cityid":"101070701","area_1":"辽宁","area_2":"锦州","area_3":"城区"},{"weaid":"864","citynm":"桦甸","cityno":"huadian","cityid":"101060206","area_1":"吉林","area_2":"桦甸","area_3":""},{"weaid":"993","citynm":"蛟河","cityno":"jiaohe","cityid":"101060204","area_1":"吉林","area_2":"蛟河","area_3":""},{"weaid":"1432","citynm":"磐石","cityno":"panshi","cityid":"101060205","area_1":"吉林","area_2":"磐石","area_3":""},{"weaid":"1590","citynm":"舒兰","cityno":"shulan","cityid":"101060202","area_1":"吉林","area_2":"舒兰","area_3":""},{"weaid":"1990","citynm":"永吉","cityno":"jlyongji","cityid":"101060203","area_1":"吉林","area_2":"永吉","area_3":""},{"weaid":"2345","citynm":"杨凌","cityno":"yangling","cityid":"101111101","area_1":"陕西","area_2":"杨凌","area_3":"城区"},{"weaid":"2522","citynm":"钓鱼岛","cityno":"diaoyudao","cityid":"101231001","area_1":"福建","area_2":"钓鱼岛","area_3":"城区"},{"weaid":"2628","citynm":"香港","cityno":"hongkong","cityid":"101320101","area_1":"香港","area_2":"城区","area_3":""},{"weaid":"2629","citynm":"九龙","cityno":"jiulong","cityid":"101320102","area_1":"香港","area_2":"九龙","area_3":""},{"weaid":"2630","citynm":"新界","cityno":"xinjie","cityid":"101320103","area_1":"香港","area_2":"新界","area_3":""},{"weaid":"2631","citynm":"澳门","cityno":"macao","cityid":"101330101","area_1":"澳门","area_2":"城区","area_3":""},{"weaid":"2632","citynm":"氹仔岛","cityno":"dangzidao","cityid":"101330102","area_1":"澳门","area_2":"氹仔岛","area_3":""},{"weaid":"2633","citynm":"路环岛","cityno":"luhuandao","cityid":"101330103","area_1":"澳门","area_2":"路环岛","area_3":""}]';
		var all = JSON.parse(responseStr);
		
		// convert the cities object to array
		var cityArr = [];
		for(city in all){
			cityArr.push(all[city]);
		}

		// filter all provinces
		var provinceArr = [];
		var destArr = [];
		
		cityArr.forEach(function(item){
			
			if(item.area_2 === "城区" || item.area_3 === "城区"){
				var index = provinceArr.indexOf(item.area_1);
				if(index > -1){
					destArr[index].cityList.push({cname: item.citynm, cid: item.weaid});
				}else{
					var newProvince = {
						pname: item.area_1,
						cityList: [{cname: item.citynm, cid: item.weaid}]
					};
					provinceArr.push(item.area_1);
					destArr.push(newProvince);
				}
			}
			
		});

		return destArr;
	}

	function renderNavTree(navTree){

		var cityId = navTree;

		var tree = [
		];

		// initialize the tree object
		cityId.forEach(function(item){
			// step 1: push the province object
			var p = {};
			p.text = item.pname;
			// step 2: push the cities object
			p.nodes = item.cityList.map(function(city){
				return {text: city.cname};
			});
			p.state = {expanded: false};
			
			tree.push(p);
		});
		$(".country-list-tree").treeview({
			data: tree,
			onNodeSelected: function(event, data){

				// check whether user select a parent node
				if(data.nodes){
					// province nodes clicked
					var curCities = [];
					cityId.forEach(function(item){
						if(item.pname === data.text){
							curCities = item.cityList;
						}
					});
					/*
					var curPromise = [];
					curCities.forEach(function(item){
						curPromise.push(loadData(item.cid));
					});

					$.when.apply(null, curPromise).then(function(){
						var list = [];
						for(var i=0;i<arguments.length;i++){
							list.push(arguments[i]);
						}

						//renderProvinceContent(list);
						list = list.map(function(item){
							item.aqiV = parseInt(item.aqi);
							return item;
						});
						list.sort(function(item1, item2){
							if(item1.aqiV > item2.aqiV){
								return 1;
							}else{
								return -1;
							}
							return 0;
						});

						renderContentPanel(list);

					});
					*/

					var list = '[{"weaid":"50","cityno":"chengde","citynm":"承德","cityid":"101090402","aqi":"25","aqi_scope":"0-50","aqi_levid":"1","aqi_levnm":"优","aqi_remark":"参加户外活动呼吸清新空气","aqiV":25},{"weaid":"52","cityno":"qinhuangdao","citynm":"秦皇岛","cityid":"101091101","aqi":"28","aqi_scope":"0-50","aqi_levid":"1","aqi_levnm":"优","aqi_remark":"参加户外活动呼吸清新空气","aqiV":28},{"weaid":"51","cityno":"tangshan","citynm":"唐山","cityid":"101090501","aqi":"32","aqi_scope":"0-50","aqi_levid":"1","aqi_levnm":"优","aqi_remark":"参加户外活动呼吸清新空气","aqiV":32},{"weaid":"53","cityno":"cangzhou","citynm":"沧州","cityid":"101090701","aqi":"35","aqi_scope":"0-50","aqi_levid":"1","aqi_levnm":"优","aqi_remark":"参加户外活动呼吸清新空气","aqiV":35},{"weaid":"54","cityno":"hengshui","citynm":"衡水","cityid":"101090801","aqi":"39","aqi_scope":"0-50","aqi_levid":"1","aqi_levnm":"优","aqi_remark":"参加户外活动呼吸清新空气","aqiV":39},{"weaid":"58","cityno":"langfang","citynm":"廊坊","cityid":"101090601","aqi":"40","aqi_scope":"0-50","aqi_levid":"1","aqi_levnm":"优","aqi_remark":"参加户外活动呼吸清新空气","aqiV":40},{"weaid":"57","cityno":"baoding","citynm":"保定","cityid":"101090201","aqi":"44","aqi_scope":"0-50","aqi_levid":"1","aqi_levnm":"优","aqi_remark":"参加户外活动呼吸清新空气","aqiV":44},{"weaid":"56","cityno":"handan","citynm":"邯郸","cityid":"101091001","aqi":"51","aqi_scope":"50-100","aqi_levid":"2","aqi_levnm":"良","aqi_remark":"可以正常进行室外活动","aqiV":51},{"weaid":"48","cityno":"shijiazhuang","citynm":"石家庄","cityid":"101090101","aqi":"54","aqi_scope":"50-100","aqi_levid":"2","aqi_levnm":"良","aqi_remark":"可以正常进行室外活动","aqiV":54},{"weaid":"55","cityno":"xingtai","citynm":"邢台","cityid":"101090901","aqi":"56","aqi_scope":"50-100","aqi_levid":"2","aqi_levnm":"良","aqi_remark":"可以正常进行室外活动","aqiV":56},{"weaid":"49","cityno":"zhangjiakou","citynm":"张家口","cityid":"101090301","aqi":"63","aqi_scope":"50-100","aqi_levid":"2","aqi_levnm":"良","aqi_remark":"可以正常进行室外活动","aqiV":63}]';
					list = JSON.parse(list);
					renderContentPanel(list);
				}else{
					// city nodes clicked
					// step1: get current date and calculate the previous 7 days
					var today = moment();
					var datesArr = [];
					var temp = '';
					var promiseArr = [];

					// get which city user select
					var id = '';
					cityId.forEach(function(item){
						item.cityList.forEach(function(city){
							if(city.cname === data.text){
								id = city.cid;
							}
						});
					});
					var startDate = '';
					for(var i=0;i<7;i++){
						temp = today.subtract(1, 'day').format('YYYYMMDD');
						promiseArr.push(loadPrevious7DaysData(id, temp));
						if(i == 6){
							startDate = moment(temp);
						}
					}
					
					$.when.apply(null, promiseArr).then(function(){
						var list = [];
						for(var i=0;i<arguments.length;i++){
							list.push(arguments[i]);
						}
						
						// handling the 7 days data
						var destArr = [];
						list.forEach(function(item){
							var current = 0;
							item.forEach(function(day){
								current += parseInt(day.aqi)
							});
							var average = current/item.length;
							destArr.push(Math.ceil(average));
						});

						renderHighCharts(data.text, destArr, startDate.year(), startDate.month(), startDate.date());

					});
				}
			}
		});
	}


	

	function bindEvent(){
		$(".help-btn").on("mouseenter", function(){
			$(".help-btn-tooltips").show();
		});

		$(".help-btn").on("mouseleave", function(){
			$(".help-btn-tooltips").hide();
		});

		$(".language-btn").on("click", function(){
			$(".language-list-container").toggle();
		});

		$(".admin-tools-btn").on("click", function(){
			$(".admin-tools-list-container").toggle();
		});

		$(".province-filter").on("change", function(){
			var v = $(this).val();

			var newTree = navTree.filter(function(item){
				return item.pname.indexOf(v) > -1;
			});

			renderNavTree(newTree);
		});
	}

	function renderBestThree(data){
		var cityList = data;
		var pagefn = doT.template(document.getElementById('cityItem').text);
		$("#best-3-container").html(pagefn(cityList));
	}

	function loadData(cityId){
		var defer = $.Deferred();
		var urlParameter = "http://api.k780.com/?app=weather.pm25&weaid="+cityId+"&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json";
		$.ajax({
		  url: urlParameter
		}).done(function(data) {
		  if(data.success === "1"){
		  	defer.resolve(data.result);
		  }
		});
		return defer.promise();
	}

	function loadPrevious7DaysData(cityId, date){
		var defer = $.Deferred();
		var urlParameter = "http://api.k780.com/?app=weather.history&weaid="+cityId+"&date="+date+"&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json";
		$.ajax({
		  url: urlParameter
		}).done(function(data) {
		  if(data.success === "1"){
		  	defer.resolve(data.result);
		  }
		});
		return defer.promise();
	}

	function renderHighCharts(cityName, data, year, month, date){
		Highcharts.chart('container', {

		    title: {
		        text: 'AQI of last 7 days'
		    },

		    yAxis: {
		        title: {
		            text: 'AQI value'
		        }
		    },
		    xAxis: {
		        type: 'datetime',
		        dateTimeLabelFormats: {
		            day: '%b %e'
		        }
		    },

		    series: [{
		        name: cityName,
		        data: data,
		        pointStart: Date.UTC(year, month, date),
		        pointInterval: 24 * 3600 * 1000 
		    }]

		});
	}

	function renderContentPanel(list){
		// render the cities aqi column chart

		var cate = [];
		var aqiV = [];
		list.forEach(function(item){
			cate.push(item.citynm);
			aqiV.push(item.aqiV);
		});
		Highcharts.chart('col-chart-container', {
		    chart: {
		        type: 'bar'
		    },
		    title: {
		        text: 'AQI of all cities in this province'
		    },
		    xAxis: {
		        categories: cate
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: 'AQI',
		            align: 'high'
		        },
		        labels: {
		            overflow: 'justify'
		        }
		    },
		    credits: {
		        enabled: false
		    },
		    series: [{
		        name: 'aqi',
		        data: aqiV
		    }]
		});
		// pick the 3 best cities to show more details

		renderBestThree(list.slice(0, 3));
	}

	function init(){
		bindEvent();
		renderNavTree(navTree);
	}

	init();

});
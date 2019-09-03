// wrapper
var wralist = document.getElementsByClassName("wralist")[0];
var wralistArr = wralist.children;
var rside = document.getElementsByClassName("r-side")[0];
var rsideArr = rside.children;
var wrapper = document.getElementsByClassName("wrapper")[0];
for (var i = 0; i < wralistArr.length; i++) {
    wralistArr[i].onmouseenter = (function (i) {
        var index = i;
        return function () {
            for (var j = 0; j < wralistArr.length; j++) {
                wralistArr[j].className = "unselected";
                rsideArr[j].style.display = "none";
            }
            wralistArr[index].className = "selected";
            rsideArr[index].style.display = "block";
        }
    })(i);
    
}
wrapper.onmouseleave = function(){
    for (var j = 0; j < wralistArr.length; j++){
        wralistArr[j].className = "unselected";
        rsideArr[j].style.display = "none";
    }
}

//用 vue 渲染 phone 界面
phones = [
    {
        tips: '新品',
        img: '//i1.mifile.cn/a1/pms_1550642182.7527088!220x220.jpg',
        name: '小米9 6GB+128GB',
        des: '骁龙855，索尼4800万超广角微距三摄',
        price: '2999元'
    },
    {
        tips: '新品',
        img: '//i1.mifile.cn/a1/pms_1550646283.24414368!220x220.jpg',
        name: '小米9 SE 6GB+64GB',
        des: '索尼4800万超广角三摄，骁龙712',
        price: '1999'
    },
    {
        tips: '新品',
        img: '//i1.mifile.cn/a1/pms_1547020852.30751177!220x220.jpg',
        name: 'Redmi Note 7 3GB+32G',
        des: '4800万拍照千元机，18个月超长质保',
        price: '999元'
    },
    {
        tips: '新品',
        img: '//i1.mifile.cn/a1/pms_1545457719.47232999!220x220.png',
        name: '小米Play 4GB+64GB',
        des: '5.84"小水滴全面屏，后置1200万 AI 双摄',
        price: '1099元'
    },
    {
        tips: '减200',
        img: '//i1.mifile.cn/a1/pms_1537324004.08544830!220x220.jpg',
        name: '小米8青春版6GB+64GB',
        des: '潮流镜面渐变色，2400万自拍旗舰',
        price: '1499元'
    },
    {
        tips: '享8折',
        img: '//i1.mifile.cn/a1/pms_1527685277.65255600!220x220.jpg',
        name: '小米8 SE 6GB+64GB',
        des: '三星 AMOLED 全面屏，骁龙710',
        price: '1599元'
    },
    {
        tips: '享8折',
        img: '//i1.mifile.cn/a1/pms_1524621350.77238418!220x220.jpg',
        name: '小米6X 6GB+128GB',
        des: '轻薄美观的拍照手机',
        price: '1499元'
    },
    {
        tips: '减50',
        img: '//i1.mifile.cn/a1/pms_1528719461.20891365!220x220.jpg',
        name: '红米6A 2GB+16GB',
        des: '12nm高性能处理器，1300万高清相机',
        price: '549元'
    }
]

phone = new Vue({
    el: '#phonevue',
    data: {
        phones
    }

})



wrappers = [
    {
        img: '//i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80',
        name: '小米9'
    },
    {
        img: '//i1.mifile.cn/f/i/g/2015/cn-index/m8se-80.png?width=80&height=80',
        name: '小米8 SE'
    },
    {
        img: '//i1.mifile.cn/f/i/g/2015/cn-index/mix2s80-80white.png?width=80&height=80',
        name: '小米MIX 2S'
    },
    {
        img: '//i1.mifile.cn/f/i/g/2015/cn-index/max3-80-80.png?width=80&height=80',
        name: '小米Max 3'
    },
    {
        img: '//i1.mifile.cn/f/i/g/2015/cn-index/80808080808080.jpg?width=80&height=80',
        name: '小米6X'
    },
    {
        img: '//i1.mifile.cn/f/i/g/2015/cn-index/heishahelo-80.png?width=80&height=80',
        name: '黑鲨游戏手机 Helo'
    },
    {
        img: '//i1.mifile.cn/f/i/g/2015/cn-index/heisha-80.png?width=80&height=80',
        name: '黑鲨游戏手机'
    },
    {
        img: '//i1.mifile.cn/f/i/g/2015/cn-index/note780-80.png?width=80&height=80',
        name: '红米Note 7'
    },
    {
        img: '//i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png?width=80&height=80',
        name: '红米6 Pro'
    },
    {
        img: '//i1.mifile.cn/f/i/g/2015/cn-index/666666.png?width=80&height=80',
        name: '红米6'
    },
    {
        img: '//i1.mifile.cn/f/i/g/2015/cn-index/6AAAA.png?width=80&height=80',
        name: '红米6A'
    },

]
phoneList = new Vue({
    el: '#phoneList',
    data: {
        wrappers
    }
})
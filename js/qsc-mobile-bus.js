function loadBusInfo(){
    if(!xiaoCheData)
        return;
    
    var from = $('select#from').val();
    var to = $('select#to').val();
    
    var i;
    var theBus = [];
    for(i=0; i < xiaoCheData.length; i++) {
        if(xiaoCheData[i]['起点'] != from)
            continue;
        if(xiaoCheData[i]['终点'] != to)
            continue;
        theBus.push(xiaoCheData[i]);
    }
    $('#bus_info').html('');// 清空旧数据
    if(theBus.length == 0) {
        $('#bus_info').html('<br>好像木有车的样子。');// 清空旧数据
    } else {
        for(i=0; i<theBus.length; i++) {
            $('#bus_info').append('<ul>');
            $('#bus_info').append('<li><strong>车号：</strong><span>'+theBus[i]['车号']+'</span></li>');
            $('#bus_info').append('<li><strong>发车：</strong><span>'+theBus[i]['发车时间']+'</span></li>');
            $('#bus_info').append('<li><strong>到站：</strong><span>'+theBus[i]['到站时间']+'</span></li>');
            $('#bus_info').append('<li><strong>运行：</strong><span>'+theBus[i]['运行时间']+'</span></li>');
            $('#bus_info').append('<li><strong>停靠：</strong><span>'+theBus[i]['停靠地点']+'</span></li>');
            $('#bus_info').append('</ul>');
        }
    }
}

var xiaoCheData;

if (localStorage.getItem('xiaoChe')) {
    xiaoCheData = JSON.parse(localStorage.getItem('xiaoChe'));
    loadBusInfo();
} else {
    myGetJsonp('xiaoche', function(data) {
        if(!data) return;
        xiaoCheData = data;
        localStorage.setItem('xiaoChe', JSON.stringify(xiaoCheData));
        loadBusInfo();
    });
}

$('#xiaoche select').click(function() {
    loadBusInfo();
});

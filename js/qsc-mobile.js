$.extend({
    // 封装的include_once
    // $.include(['json2.js', 'jquery.tree.js', 'jquery.tree.css']);
    include: function(files) {
        outerLoop:
        for(var i=0; i< files.length; i++){
            var scriptNode = document.createElement('script');
            scriptNode.src = 'js/'+files[i];
            
            var scripts = document.getElementsByTagName('script');
            for(var j=0; j<scripts.length; j++){
                if(scripts[j].src == scriptNode.src){
                    break outerLoop; // file already exists
                }
            }
            document.head.appendChild(scriptNode);
        }
    }
});

var siteUrl = 'http://localhost/qsc-mobile-back/index.php';
var baseUrl = 'http://zva.me/';

var stuid = localStorage.getItem('stuid') ? localStorage.getItem('stuid') : false;
var pwd = localStorage.getItem('pwd') ? localStorage.getItem('pwd') : false;
var isLogin = localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false;

$.includePath = 'js/';

// 允许在file://的时候进行跨域请求
$.support.cors = true;

$(document).ready(function() {
    $('.logo').click(function(){
        $(this).parent().hide(200);
        $('#menu').slideDown(200);
    });
    
    $('.backward').click(function(){
        $(this).parent().parent().hide(200);
        $('#menu').slideDown(200);
    });
    
    $('#menu .kebiao').click(function(){
        $.include(['qsc-mobile-jwb.js', 'qsc-mobile-kebiao.js']);
        $('#menu').hide(200);
        $('#kebiao').show(200);
    });
    
    $('#menu .xiaoche').click(function(){
        $('#menu').hide(200);
        $('#xiaoche').show(200);
        $.include(['qsc-mobile-bus.js']);
    });

    $('#menu .gaikuang').click(function(){
        $('#menu').hide(200);
        $('#gaikuang').show(200);
        $.include(['qsc-mobile-jwb.js','qsc-mobile-kebiao.js']);
    });

    $('#menu .kaoshi').click(function(){
        $('#menu').hide(200);
        $('#kaoshi').show(200);
        $.include(['qsc-mobile-kaoshi.js']);
    });
    
    $('#menu .chengji').click(function(){
        $('#menu').hide(200);
        $('#chengji').show(200);
        $.include(['qsc-mobile-chengji.js']);
    });

    $('#menu .login').click(function(){
        $('#menu').hide(200);
        $('#login').show(200);
        $.include(['qsc-mobile-login.js']);
    });
});

$(document).ready(function() {
    $('.slide header').click(function(){
	$('header').removeClass('current');
	$('.detail').slideUp(100);
	$(this).next().slideDown(100);
	$(this).addClass('current');
    });
    $('.slide header:first').click();
});
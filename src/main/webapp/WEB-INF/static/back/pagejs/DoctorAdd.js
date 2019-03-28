var areaData = address;
var $form;
var form;
var $;
layui.config({
	base : "back/../../js/"
}).use(['form','layer','upload','laydate'],function(){
	form = layui.form();
	var layer = parent.layer === undefined ? layui.layer : parent.layer;
		$ = layui.jquery;
		$form = $('form');
		laydate = layui.laydate;
        loadProvince();
        layui.upload({
        	url : "back/json/userface.json",
        	success: function(res){
        		var num = parseInt(4*Math.random());  //生成0-4的随机数
        		//随机显示一个头像信息
		    	userFace.src = res.data[num].src;
		    	window.sessionStorage.setItem('userFace',res.data[num].src);
		    }
        });//.append('<option value="'+data[i].r1_id+'">'+data[i].r1_name+'</option>');
        var test = "";
        $.ajax({
        	type: "get",
        	url: "room/roomManager",
        	dataType: "json",
        	success:function(data){
        		$('#room1').each(data,function(i,d){
        			test+= "<option>'"+d.r1_name+"'</option>";
        		})
        			$('#room1').html(test);
        		/*for (var i = 0; i < data.length; i++) {
					var room1 = '';
					room1 += '<option value="' + data.get(i).r1_id + '">' + data.get(i).r1_name + '</option>';
			        $form.find('#room1').append(room1);
				}*/
        	}
        })
        //添加验证规则
        /*form.verify({
            oldPwd : function(value, item){
                if(value != "123456"){
                    return "密码错误，请重新输入！";
                }
            },
            newPwd : function(value, item){
                if(value.length < 6){
                    return "密码长度不能小于6位";
                }
            },
            confirmPwd : function(value, item){
                if(!new RegExp($("#oldPwd").val()).test(value)){
                    return "两次输入密码不一致，请重新输入！";
                }
            }
        })*/
        //判断是否修改过头像，如果修改过则显示修改后的头像，否则显示默认头像
        if(window.sessionStorage.getItem('userFace')){
        	$("#userFace").attr("src",window.sessionStorage.getItem('userFace'));
        }else{
        	$("#userFace").attr("src","back/images/face.jpg");
        }
        //提交个人资料
        form.on("submit(addDoctor)",function(data){
        	var index = layer.msg('提交中，请稍候',{icon: 16,time:1000,shade:0.8});
        	$.ajax({
        		type: "POST",
        		url: "doctor/submitAddInfo",
        		data: {uName:$(".uName").val(),role:$(".role").val(),sex:$(".sex").val(),phone:$(".phone").val(),
        			province:$(".province option:selected").text(),city:$(".city option:selected").text(),area:$(".area option:selected").text(),time:$(".time").val(),
        			room1:$(".room1").val(),room2:$(".room2").val(),description:$(".description").val()},
        		dateType: "JSON",
        		success:function(data){
        			var index1 = layer.msg('成功',{icon: 16,time:1000,shade:0.8});
        		}	
        	})
            setTimeout(function(){
                layer.close(index);
                layer.msg("提交成功！");
            },2000);
        	//return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        })
        //修改密码
        form.on("submit(changePwd)",function(data){
        	var index = layer.msg('提交中，请稍候',{icon: 16,time:false,shade:0.8});
            setTimeout(function(){
                layer.close(index);
                layer.msg("密码修改成功！");
                $(".pwd").val('');
            },2000);
        	return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        })
})
 //加载省数据  
function loadProvince() {
    for (var i = 0; i < areaData.length; i++) {
    	  var proHtml = '';
        proHtml += '<option value="'+areaData[i].provinceCode + '_' + areaData[i].mallCityList.length + '_' + i +'">' + areaData[i].provinceName + '</option>';
        $form.find('select[name=province]').append(proHtml);
    }
    //初始化省数据
    form.render();
    form.on('select(province)', function(data) {
        $form.find('select[name=area]').html('<option value="">请选择县/区</option>');
        var value = data.value;
        var d = value.split('_');
        var code = d[0];
        var count = d[1];
        var index = d[2];
        if (count > 0) {
            loadCity(areaData[index].mallCityList);
        } else {
            $form.find('select[name=city]').attr("disabled","disabled");
        }
    });
    
/*    form.on("select",function(data){
    	alert(data.elem[data.elem.selectedIndex].text);
    })*/
    
}
 //加载市数据   '_' + citys[i].mallAreaList.length + '_' + i +    
	function loadCity(citys) {
		 $form.find('select[name=city]').html("");
		 $form.find('select[name=city]').append('<option value="">请选择市</option>');
	    for (var i = 0; i < citys.length; i++) {
	    	 var cityHtml ='';
	        cityHtml += '<option value="' + citys[i].cityCode + '_' + citys[i].mallAreaList.length + '_' + i +'">' + citys[i].cityName + '</option>';
	        $form.find('select[name=city]').append(cityHtml);
	    }
	    $form.find('select[name=city]').removeAttr("disabled");
	    form.render();
	    form.on('select(city)', function(data) {
	        var value = data.value;
	        var d = value.split('_');
	        var code = d[0];
	        var count = d[1];
	        var index = d[2];
	        if (count > 0) {
	            loadArea(citys[index].mallAreaList);
	        } else {
	            $form.find('select[name=area]').attr("disabled","disabled");
	        }
	    });
	}
 //加载县/区数据
function loadArea(areas) {
	$form.find('select[name=area]').html("");
	$form.find('select[name=area]').append('<option value="">请选择县/区</option>');
    for (var i = 0; i < areas.length; i++) {
    	var areaHtml = '';
        areaHtml += '<option value="' + areas[i].areaCode + '">' + areas[i].areaName + '</option>';
        $form.find('select[name=area]').append(areaHtml);
    }
    $form.find('select[name=area]').removeAttr("disabled");
    form.render();
    form.on('select(area)', function(data) {
    });
}
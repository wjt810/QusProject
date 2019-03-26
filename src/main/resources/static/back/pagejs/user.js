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
        	url : "back/json/a_picpath.json",
        	success: function(res){
        		var num = parseInt(4*Math.random());  //生成0-4的随机数
        		//随机显示一个头像信息
		    	userFace.src = res.data[num].src;
		    	window.sessionStorage.setItem('a_picpath',res.data[num].src);
		    }
        });

        //添加验证规则
        form.verify({
          
        })

        //提交个人资料
        form.on("submit(changeUser)",function(data){
        	var index = layer.msg('提交中，请稍候',{icon: 16,time:false,shade:0.8});
            setTimeout(function(){
                layer.close(index);
                layer.msg("提交成功！");
            },2000);
        	return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        })

        //修改密码
        	form.on("submit",function(data){
				var oldPwd = $("#oldPwd").val();
				var newPwd = $("#newPwd").val();
				var confirmPwd = $("#confirmPwd").val();
				var pwd = $("#pwd").val();
				if(oldPwd == pwd){
					if(newPwd == confirmPwd){
						$.ajax({
							type:"GET",
							url:"/admin/changPwd",
							dataType:"JSON",
							data:{"newPwd":newPwd},
							success:function(data){
								//alert("修改成功");
								/* var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
			 					parent.layer.close(index);    //关闭弹出层 */
			 					//location.href="/backLogin";
							},
							error :function(){
								layer.msg("密码修改成功！");
								window.open("/back/login.html");
								//window.location.href="/loginOut";
								/*var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
			 					parent.layer.close(index);    //关闭弹出层
*/							}
						})
					}else{
						$(".mes").attr("display","block");
					}
				}else{
					layer.msg("旧密码不正确");
					return false;
				}
			})
        })

 //加载省数据
function loadProvince() {
    var proHtml = '';
    for (var i = 0; i < areaData.length; i++) {
        proHtml += '<option value="' + areaData[i].provinceCode + '_' + areaData[i].mallCityList.length + '_' + i + '">' + areaData[i].provinceName + '</option>';
    }
    //初始化省数据
    $form.find('select[name=province]').append(proHtml);
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
}
 //加载市数据
function loadCity(citys) {
    var cityHtml = '<option value="">请选择市</option>';
    for (var i = 0; i < citys.length; i++) {
        cityHtml += '<option value="' + citys[i].cityCode + '_' + citys[i].mallAreaList.length + '_' + i + '">' + citys[i].cityName + '</option>';
    }
    $form.find('select[name=city]').html(cityHtml).removeAttr("disabled");
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
    var areaHtml = '<option value="">请选择县/区</option>';
    for (var i = 0; i < areas.length; i++) {
        areaHtml += '<option value="' + areas[i].areaCode + '">' + areas[i].areaName + '</option>';
    }
    $form.find('select[name=area]').html(areaHtml).removeAttr("disabled");
    form.render();
    form.on('select(area)', function(data) {
        //console.log(data);
    });
}
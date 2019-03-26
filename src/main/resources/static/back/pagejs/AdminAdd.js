var $;
layui.config({
	base : "back/js/"
}).use(['form','layer','jquery'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage;
		$ = layui.jquery;

 	var addUserArray = [],addUser;
 	form.on("submit(addUser)",function(data){
 		//是否添加过信息
	 	if(window.sessionStorage.getItem("addUser")){
	 		addUserArray = JSON.parse(window.sessionStorage.getItem("addUser"));
	 	}
	 	var active = {
	 		    content: function(){
	 		      alert(layedit.getContent(editIndex)); //获取编辑器内容
	 		    }
	 	};

	 	//向数据库中插入数据
	 	/*var a_roleid=1;
	 	
	 	$.ajax({
 			url : "adminAddSave",
 			type : "get",
 			data : {a_name:$("#a_name").val(),a_sex:$("#a_sex").val(),a_password:$("#a_password").val(),a_realName:$("#a_realName").val(),
 				a_email:$("#a_email").val(),info_content:layedit.getText(editIndex),a_address:$("#a_address").val(),a_picpath:$("#a_picpath").val(),
 				a_born:$(".a_born").val()},
 			dataType : "json",
 			success : function(data){
 				layui.msg("成功");
 				$.ajax({
 		 			url : "getMaxId",
 		 			type : "get",
 		 			dataType : "json",
 		 			success : function(data){
 		 		 		addUser = '{"a_name":"'+ $(".a_name").val() +'",';  //登录名
 		 		 		addUser += '"a_sex":"'+ data.field.sex +'",'; //性别
 		 		 		addUser += '"a_password":"'+ $(".a_password").val() +'",';  //登录名
 		 		 		addUser += '"a_realName":"'+ $(".a_realName").val() +'",'; //管理员真实姓名
 		 		 		addUser += '"a_email":"'+ $(".a_email").val() +'",'; //管理员邮箱
 		 		 		addUser += '"a_des":"'+ layedit.getContent(editIndex) +'",'; //管理员简介使用larui的方式来获取textarea中的数据
 		 		 		addUser += '"a_address":"'+ $(".a_address").val()+'",'; //管理员邮箱
 		 		 		addUser += '"a_picpath":"'+ $(".a_picpath").val() +'",'; //管理员头像
 		 		 		addUser += '"a_born":"'+ $(".a_born").val()'"}';  //出生日期
 		 		 		console.log(addUser);
 		 		 		addUserArray.unshift(JSON.parse(addUser));
 		 		 		window.sessionStorage.setItem("addUser",JSON.stringify(addUserArray));
 		 			}
 		 		})
 			}
 		})
 		
 		//弹出loading
 		var index = top.layer.msg('数据提交中，请稍候',{icon: 16,time:false,shade:0.8});
        setTimeout(function(){
            top.layer.close(index);
			top.layer.msg("用户添加成功！");
 			layer.closeAll("iframe");
	 		//刷新父页面
	 		parent.location.reload();
        },2000);
 		return false;*/
 	})
})

//格式化时间
function formatTime(_time){
    var year = _time.getFullYear();
    var month = _time.getMonth()+1<10 ? "0"+(_time.getMonth()+1) : _time.getMonth()+1;
    var day = _time.getDate()<10 ? "0"+_time.getDate() : _time.getDate();
    var hour = _time.getHours()<10 ? "0"+_time.getHours() : _time.getHours();
    var minute = _time.getMinutes()<10 ? "0"+_time.getMinutes() : _time.getMinutes();
    return year+"-"+month+"-"+day+" "+hour+":"+minute;
}

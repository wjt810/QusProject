layui.config({
	base : "back/js/"
}).use(['form','layer','jquery','layedit','laydate'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		layedit = layui.layedit,
		laydate = layui.laydate,
		$ = layui.jquery;
	
	//创建一个编辑器
 	var editIndex = layedit.build('news_content');
 	var addNewsArray = [],addNews;
 	form.on("submit(addNews)",function(data){
 		if(layedit.getContent(editIndex)==null || layedit.getContent(editIndex)==""){
 			alert("请输入你的资讯内容");
 			return;
 		}
 		//是否添加过信息
	 	if(window.sessionStorage.getItem("addNews")){
	 		addNewsArray = JSON.parse(window.sessionStorage.getItem("addNews"));
	 	}
	 	 var active = {
	 		    content: function(){
	 		      alert(layedit.getContent(editIndex)); //获取编辑器内容
	 		    }
	 	};
	 	//向数据库中添加一条数据
	 	 	var infoId;
	 		var roleId = $(".roleName").val();
	 		var roleName = "管理员";
	 		if(roleId==2){
	 			roleName="普通医生";
	 		}else if(roleId==3){
	 			roleName="主任医师";
	 		}
	 		$.ajax({
	 			url : "addInfo.html",
	 			type : "get",
	 			data : {info_title:$(".infoTitle").val(),info_content:layedit.getText(editIndex),info_role_id:$(".roleName").val(),info_startTime:$(".newsTime").val()},
	 			dataType : "json",
	 			success : function(data){
	 				layui.msg("成功");
	 				$.ajax({
	 		 			url : "getMaxId",
	 		 			type : "get",
	 		 			dataType : "json",
	 		 			success : function(data){
	 		 				addNews = '{"info_title":"'+$(".infoTitle").val()+'",';  //资讯标题
	 		 			 	addNews +='"info_id":"'+data.infoId+'",';  //资讯标题
	 		 		 		addNews += '"info_content":"'+layedit.getContent(editIndex)+'",'; //使用larui的方式来获取textarea中的数据
	 		 		 		addNews += '"rname":"'+$(".infoAuthor").val()+'",'; //发布人名称
	 		 		 		addNews += '"role_name":"'+roleName+'",'; //角色名称
	 		 		 		addNews += '"info_role_id":"'+$(".roleName").val()+'",'; //发布人角色
	 		 		 		addNews += '"info_startTime":"'+$(".newsTime").val()+'"}'; //发布时间
	 		 		 		addNewsArray.unshift(JSON.parse(addNews));
	 		 		 		window.sessionStorage.setItem("addNews",JSON.stringify(addNewsArray));
	 		 			}
	 		 		})
	 			}
	 		})
 		//弹出loading
 		var index = top.layer.msg('数据提交中，请稍候',{icon: 16,time:false,shade:0.8});
        setTimeout(function(){
            top.layer.close(index);
			top.layer.msg("文章添加成功！");
 			layer.closeAll("iframe");
	 		//刷新父页面
	 		parent.location.reload();
        },2000);
 		return false;
 	})
})

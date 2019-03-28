layui.config({
	base : "back/js/"
}).use(['form','layer','jquery','layedit','laydate'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		layedit = layui.layedit,
		laydate = layui.laydate,
		$ = layui.jquery;
	//出发表单提交事件
	form.on("submit(updateNews1)",function(data){
		$.ajax({
 			url : "/infoModifyReal",
 			type : "GET",
 			data : {info_id:$("#info_id").val(),info_title:$("#info_title").val(),
 				content:$("#content").val()},
 			dataType : "json",
 			success : function(data){
 				layer.msg("修改成功");
 				var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
				parent.layer.close(index);    //关闭弹出层
				window.parent.location.reload();   //刷新父界面
 			}
 		})
	})
	
	//创建一个编辑器
 	var editIndex = layedit.build('news_content');
 	var addNewsArray = [],addNews;
 	//点击提交事件
 	form.on("submit(addNews)",function(data){
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
	 		alert($(".content_info").val());
	 		$.ajax({
	 			url : "addInfo.html",
	 			type : "get",
	 			data : {info_title:$(".infoTitle").val(),info_content:$(".content_info").val()},
	 			dataType : "json",
	 			success : function(data){
	 				layer.msg("添加成功");
	 				var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
					parent.layer.close(index);    //关闭弹出层
					window.parent.location.reload();   //刷新父界面
	 			}
	 		})
 		//弹出loading
 		//var index = top.layer.msg('数据提交中，请稍候',{icon: 16,time:false,shade:0.8});
        setTimeout(function(){
            top.layer.close(index);
			top.layer.msg("文章添加成功！");
 			layer.closeAll("iframe");
	 		//刷新父页面
 			window.parent.location.reload();
        },2000);
 		return false;
 	})//form结尾
})

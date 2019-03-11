layui.config({
	base : "back/js/"
}).use(['form','layer','jquery','layedit','laydate'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		layedit = layui.layedit,
		laydate = layui.laydate,
//		$ = layui.jquery;
	
	roomList();

	// 创建一个编辑器
 	var editIndex = layedit.build('links_content');
 	var addLinksArray = [],addLinks;
 	
 	/*function roomList(){
 		alert("12345");
 		$.ajax(function(){
 			url : "room/roomManager",
			type : "get",
			dataType : "json",
			success : function(data){
				var r1html = '';
				var r2html = '';
				for(var i=0;i<data.length;i++){
					if(i==0){
						r1html+='<option value="'+data[i].r1_id+'">'+data[i].r1_name+'</option>';
						for(var j=0;j<data[i].room2s.length;j++){
							r2html+='<option value="'+data[i].room2s.r2_id+'">'+data[i].room2s.r2_name+'</option>';
						}
						continue;
					}
					r1html+='<option value="'+data[i].r1_id+'">'+data[i].r1_name+'</option>';
				}
				$("#room1").html(r1html);
				$("#room2").html(r2html);
				form.render();
			}
 		})
 	}*/
 	
 	/*$(function) {
 		var userName=$("input[name='userName']").val();
 		var doctorName=$("input[name='doctorName']").val();
 		var price=$("input[name='price']").val();
 		$.ajax({
 			url:"order/ModifyOrder",
 			type:"get",
 			dataType : "json",
 			success : function(data){
 				$(".newsName").val(userName);
 				$(".newsAuthor").val(doctorName);
 				$(".price").val(price);
 				var index = top.layer.msg('数据提交中，请稍候',{icon:
 					16,time:false,shade:0.8}); setTimeout(function(){ top.layer.close(index);
 					top.layer.msg("文章修改成功！");
 					layer.closeAll("iframe");//刷新页面
 			},
 			error:function(data){
 				
 			}
 		});
 	}*/
	
})

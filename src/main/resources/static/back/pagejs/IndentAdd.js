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
 	/**
	 * form.on("submit(addLinks)",function(data){ //是否添加过信息
	 * if(window.sessionStorage.getItem("addLinks")){ addLinksArray =
	 * JSON.parse(window.sessionStorage.getItem("addLinks")); } //显示、审核状态 var
	 * homePage = data.field.homePage=="on" ? "首页" : "", subPage =
	 * data.field.subPage=="on" ? "子页" : ""; showAddress = ''; if(subPage == '' &&
	 * homePage == ''){ showAddress = "暂不展示"; }else if(homePage == ''){
	 * showAddress = subPage; }else if(subPage == ''){ showAddress = homePage;
	 * }else{ showAddress = homePage + '，' + subPage; }
	 * 
	 * addLinks = '{"linksName":"'+ $(".linksName").val() +'",'; //网站名称 addLinks +=
	 * '"linksUrl":"'+ $(".linksUrl").val() +'",'; //网站地址 addLinks +=
	 * '"linksDesc":"'+ $(".linksDesc").text() +'",'; //站点描述 addLinks +=
	 * '"linksTime":"'+ $(".linksTime").val() +'",'; //发布时间 addLinks +=
	 * '"masterEmail":"'+ $(".masterEmail").val() +'",'; //站长邮箱 addLinks +=
	 * '"showAddress":"'+ showAddress +'"}'; //展示位置
	 * addLinksArray.unshift(JSON.parse(addLinks));
	 * window.sessionStorage.setItem("addLinks",JSON.stringify(addLinksArray));
	 * //弹出loading var index = top.layer.msg('数据提交中，请稍候',{icon:
	 * 16,time:false,shade:0.8}); setTimeout(function(){ top.layer.close(index);
	 * top.layer.msg("文章修改成功！"); layer.closeAll("iframe"); //刷新父页面
	 * parent.location.reload(); },2000); return false; })
	 */
 	
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

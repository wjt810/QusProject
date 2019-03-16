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
 	/*var editIndex = layedit.build('links_content');
 	var addLinksArray = [],addLinks;*/
	
	/*from.on("submit",function(data){
		$.ajax({
			url : "order/orderModifySave",
			type : "post",
			data : {o_id :$("#o_id").val(),u_id:$("#u_id"),userName:$("#userName"),d_id :$("#d_id").val(),doctorName:$("#doctorName")
					,room1 :$("#room1").val(),room2:$("#room2"),price :$("#price").val(),app_id:$("#app_id")
					,code:$("#code"),type:$("#type"),status:$("#status")},
			dataType : "json",
			success : function(data){
				var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
					parent.layer.close(index);    //关闭弹出层
					window.parent.location.reload();   //刷新父界面
				}
			}
	})*/
 	
})

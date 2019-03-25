layui.config({
	base : "/back/js/"
}).use(['form','layer','jquery','laypage'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;

	//加载页面数据
	var linksData = '';
	$.ajax({
		url : "/order/orderList",
		type : "get",
		dataType : "json",
		success : function(data){
			linksData = data;
			if(window.sessionStorage.getItem("addLinks")){
				var addLinks = window.sessionStorage.getItem("addLinks");
				linksData = JSON.parse(addLinks).concat(linksData);
			}
			//执行加载数据的方法
			linksList();
		}
	})

	//查询
	$(".search_btn").click(function(){
		var newArray = [];
		if($(".search_input").val() != ''){
			var index = layer.msg('查询中，请稍候',{icon: 16,time:false,shade:0.8});
            setTimeout(function(){
            	$.ajax({
					url : "/order/orderList",
					type : "get",
					dataType : "json",
					success : function(data){
						if(window.sessionStorage.getItem("addLinks")){
							var addLinks = window.sessionStorage.getItem("addLinks");
							linksData = JSON.parse(addLinks).concat(data);
						}else{
							linksData = data;
						}
						for(var i=0;i<linksData.length;i++){
							var linksStr = linksData[i];
							var selectStr = $(".search_input").val();
		            		function changeStr(data){
		            			var dataStr = '';
		            			var showNum = data.split(eval("/"+selectStr+"/ig")).length - 1;
		            			if(showNum > 1){
									for (var j=0;j<showNum;j++) {
		            					dataStr += data.split(eval("/"+selectStr+"/ig"))[j] + "<i style='color:#03c339;font-weight:bold;'>" + selectStr + "</i>";
		            				}
		            				dataStr += data.split(eval("/"+selectStr+"/ig"))[showNum];
		            				return dataStr;
		            			}else{
		            				dataStr = data.split(eval("/"+selectStr+"/ig"))[0] + "<i style='color:#03c339;font-weight:bold;'>" + selectStr + "</i>" + data.split(eval("/"+selectStr+"/ig"))[1];
		            				return dataStr;
		            			}
		            		}
		            		//用户名称
		            		if(linksStr.qusUser.u_name.indexOf(selectStr) > -1){
			            		linksStr["qusUser.u_name"] = changeStr(linksStr.qusUser.u_name);
		            		}
		            		//医生名称
		            		if(linksStr.qusDoctor.d_name.indexOf(selectStr) > -1){
			            		linksStr["qusDoctor.d_name"] = changeStr(linksStr.qusDoctor.d_name);
		            		}
		            		//科室名称
		            		if(linksStr.qusDoctor.qusRoom1.r1_name.indexOf(selectStr) > -1){
			            		linksStr["qusDoctor.qusRoom1.r1_name"] = changeStr(linksStr.qusDoctor.qusRoom1.r1_name);
		            		}
		            		//科室名称
		            		if(linksStr.qusDoctor.qusRoom2.r2_name.indexOf(selectStr) > -1){
			            		linksStr["qusDoctor.qusRoom2.r2_name"] = changeStr(linksStr.qusDoctor.qusRoom2.r2_name);
		            		}
		            		if(linksStr.qusUser.u_name.indexOf(selectStr)>-1 || linksStr.qusDoctor.d_name.indexOf(selectStr)>-1 || linksStr.qusDoctor.qusRoom1.r1_name.indexOf(selectStr)>-1||linksStr.qusDoctor.qusRoom2.r2_name.indexOf(selectStr)>-1){
		            			newArray.push(linksStr);
		            		}
		            	}
		            	linksData = newArray;
		            	linksList(linksData);
					}
				})
            	
                layer.close(index);
            },2000);
		}else{
			layer.msg("请输入需要查询的内容");
		}
	})

	//批量删除
	$(".batchDel").click(function(){
		var $checkbox = $('.links_list tbody input[type="checkbox"][name="checked"]');
		var $checked = $('.links_list tbody input[type="checkbox"][name="checked"]:checked');
		if($checkbox.is(":checked")){
			layer.confirm('确定删除选中的信息？',{icon:3, title:'提示信息'},function(index){
				var index = layer.msg('删除中，请稍候',{icon: 16,time:false,shade:0.8});
	            setTimeout(function(){
	            	//删除数据
	            	for(var j=0;j<$checked.length;j++){
	            		for(var i=0;i<linksData.length;i++){
							if(linksData[i].o_id == $checked.eq(j).parents("tr").find(".links_del").attr("data-id")){
								$.ajax({
									url : "order/deleteOrder",
									type : "get",
									data : {o_id :linksData[i].o_id },
									dataType : "json",
									success : function(data){
										layer.msg("删除成功！");
									},
									fail : function(err) {
										layer.msg(err)
									}
								})
								linksData.splice(i,1);
								linksList(linksData);
							}
						}
	            	}
	            	$('.links_list thead input[type="checkbox"]').prop("checked",false);
	            	form.render();
	                layer.close(index);
					layer.msg("删除成功");
	            },2000);
	        })
		}else{
			layer.msg("请选择需要删除的订单");
		}
	})

	//全选
	form.on('checkbox(allChoose)', function(data){
		var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]:not([name="show"])');
		child.each(function(index, item){
			item.checked = data.elem.checked;
		});
		form.render('checkbox');
	});

	//通过判断文章是否全部选中来确定全选按钮是否选中
	form.on("checkbox(choose)",function(data){
		var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]:not([name="show"])');
		var childChecked = $(data.elem).parents('table').find('tbody input[type="checkbox"]:not([name="show"]):checked')
		data.elem.checked;
		if(childChecked.length == child.length){
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = true;
		}else{
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = false;
		}
		form.render('checkbox');
	})
 
	//操作
	$("body").on("click",".links_edit",function(){  //编辑
		var _this = $(this);
		var o_id = _this.attr("data-id")
		var index = layui.layer.open({
			title : "修改订单",
			type : 2,
			content : "order/orderModify?o_id="+o_id,
			success : function(layero, index){
				layui.layer.tips('点击此处返回订单列表', '.layui-layer-setwin .layui-layer-close', {
					tips: 3
				});
			}
		})
		//改变窗口大小时，重置弹窗的高度，防止超出可视区域（如F12调出debug的操作）
		$(window).resize(function(){
			layui.layer.full(index);
		})
		layui.layer.full(index);
	})
	
	form.on("submit",function(data){
				$.ajax({
					url : "orderModifySave",
					type : "get",
					data : {o_id:$("#o_id").val(),u_id:$("#u_id").val(),d_id:$("#d_id").val(),app_id:$("#app_id").val(),
							userName:$("#userName").val(),doctorName:$("#doctorName").val(),
							room1:$("#room1").val(),room2:$("#room2").val(),price:$("#price").val(),
							code:$("#code").val(),type:$("#type").val(),status:$("#status").val()},
					dataType : "json",
					success : function(data){
						var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
							parent.layer.close(index);    //关闭弹出层
							window.parent.location.reload();   //刷新父界面
					}
			})
		})
	
	$("body").on("click",".links_see",function(){  //查看
		var _this = $(this);
		var o_id = _this.attr("data-id")
		var index = layui.layer.open({
			title : "查看订单",
			type : 2,
			content : "order/orderShow?o_id="+o_id,
			success : function(layero, index){
				layui.layer.tips('点击此处返回订单列表', '.layui-layer-setwin .layui-layer-close', {
					tips: 3
				});
			}
		})
		//改变窗口大小时，重置弹窗的高度，防止超出可视区域（如F12调出debug的操作）
		$(window).resize(function(){
			layui.layer.full(index);
		})
		layui.layer.full(index);
	
	})
	

	$("body").on("click",".links_del",function(){  //删除
		var _this = $(this);
		layer.confirm('确定删除此信息？',{icon:3, title:'提示信息'},function(index){
			_this.parents("tr").remove();
			for(var i=0;i<linksData.length;i++){
				if(linksData[i].o_id == _this.attr("data-id")){
					$.ajax({
						url : "order/deleteOrder",
						type : "get",
						data : {o_id :linksData[i].o_id },
						dataType : "json",
						success : function(data){
							layer.msg("删除成功！");
						},
						fail : function(err) {
							layer.msg(err)
						}
					})
					linksData.splice(i,1);
					linksList(linksData);
				}
			}
			layer.close(index);
		});
	})

	function linksList(that){
		//渲染数据
		function renderDate(data,curr){
			var dataHtml = '';
			if(!that){
				currData = linksData.concat().splice(curr*nums-nums, nums);
			}else{
				currData = that.concat().splice(curr*nums-nums, nums);
			}
			if(currData.length != 0){
				for(var i=0;i<currData.length;i++){
					dataHtml += '<tr>'
			    	+'<td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose"></td>'
			    	+'<td align="left">'+currData[i].qusUser.u_name+'</td>'
			    	+'<td><a style="color:#1E9FFF;" target="_blank" href="'+currData[i].qusDoctor.d_name+'">'+currData[i].qusDoctor.d_name+'</a></td>'
			    	+'<td>'+currData[i].qusDoctor.qusRoom1.r1_name+">"+currData[i].qusDoctor.qusRoom2.r2_name+'</td>'
			    	+'<td>'+currData[i].o_price+'</td>';
					if(currData[i].o_type == "0"){
			    		dataHtml += '<td style="color:#f00">'+"挂号"+'</td>';
			    	}else if(currData[i].o_type == "1"){
			    		dataHtml += '<td style="color:green">'+"咨询"+'</td>';
			    	}
			    	if(currData[i].o_status == "0"){
			    		dataHtml += '<td style="color:#f00">'+"已付款"+'</td>';
			    	}else if(currData[i].o_status == "2"){
			    		dataHtml += '<td style="color:green">'+"已完成"+'</td>';
			    	}else if(currData[i].o_status == "1"){
			    		dataHtml += '<td>'+"已取消"+'</td>';
			    	}
					dataHtml +='<td>'
					+  '<a class="layui-btn layui-btn-mini links_edit" data-id="'+currData[i].o_id+'"><i class="iconfont icon-edit"></i> 编辑</a>'
					+  '<a class="layui-btn layui-btn-mini links_see" data-id="'+currData[i].o_id+'"><i class="iconfont icon-edit"></i> 查看</a>'
					+  '<a class="layui-btn layui-btn-danger layui-btn-mini links_del" data-id="'+data[i].o_id+'"><i class="layui-icon">&#xe640;</i> 删除</a>'
			        +'</td>'
			    	+'</tr>';
				}
			}else{
				dataHtml = '<tr><td colspan="7">暂无数据</td></tr>';
			}
		    return dataHtml;
		}

		//分页
		var nums = 6; //每页出现的数据量
		if(that){
			linksData = that;
		}
		laypage({
			cont : "page",
			pages : Math.ceil(linksData.length/nums),
			jump : function(obj){
				$(".links_content").html(renderDate(linksData,obj.curr));
				$('.links_list thead input[type="checkbox"]').prop("checked",false);
		    	form.render();
			}
		})
	}
})

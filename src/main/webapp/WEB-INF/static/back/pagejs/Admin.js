layui.config({
	base : "/back/js/"
}).use(['form','layer','jquery','laypage'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;

	//加载页面数据
	var usersData = '';
	$.get("admin/lists", function(data){
		usersData = data;
		if(window.sessionStorage.getItem("addUser")){
			var addUsers = window.sessionStorage.getItem("addUser");
			usersData = JSON.parse(addUsers).concat(usersData);
		}
		//执行加载数据的方法
		usersList();
	})

	//查询
	$(".search_btn").click(function(){
		var userArray = [];
		if($(".search_input").val() != ''){
			var index = layer.msg('查询中，请稍候',{icon: 16,time:false,shade:0.8});
            setTimeout(function(){
            	$.ajax({
					url : "admin/lists",
					type : "get",
					dataType : "json",
					success : function(data){
						if(window.sessionStorage.getItem("addUsers")){
							var addUsers = window.sessionStorage.getItem("addUsers");
							usersData = JSON.parse(addUsers).concat(data);
						}else{
							usersData = data;
						}
						for(var i=0;i<usersData.length;i++){
							var usersStr = usersData[i];
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
		            		//用户名
		            		if(usersStr.a_name.indexOf(selectStr) > -1){
			            		usersStr["a_name"] = changeStr(usersStr.a_name);
		            		}
		            		//手机号
		            		if(usersStr.a_phone.indexOf(selectStr) > -1){
			            		usersStr["a_phone"] = changeStr(usersStr.a_phone);
		            		}
		            		//邮箱
		            		if(usersStr.a_email.indexOf(selectStr) > -1){
			            		usersStr["a_email"] = changeStr(usersStr.a_email);
		            		}
		            		//性别
		            		if(usersStr.a_sex.indexOf(selectStr) > -1){
			            		usersStr["a_sex"] = changeStr(usersStr.a_sex);
		            		}
		            		if(usersStr.a_name.indexOf(selectStr)>-1 || usersStr.a_phone.indexOf(selectStr)>-1 || usersStr.a_email.indexOf(selectStr)>-1 || usersStr.a_sex.indexOf(selectStr)>-1){
		            			userArray.push(usersStr);
		            		}
		            	}
		            	usersData = userArray;
		            	usersList(usersData);
					}
				})
            	
                layer.close(index);
            },2000);
		}else{
			layer.msg("请输入需要查询的内容");
		}
	})

	//添加管理员
	$(".usersAdd_btn").click(function(){
		var index = layui.layer.open({
			title : "添加管理员",
			type : 2,
			content : "adminAdd",
			success : function(layero, index){
				layui.layer.tips('点击此处返回文章列表', '.layui-layer-setwin .layui-layer-close', {
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
		if(childChecked.length == child.length){
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = true;
		}else{
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = false;
		}
		form.render('checkbox');
	})
	
	//批量删除
	$(".batchDel").click(function(){
		var $checkbox = $('.admin_list tbody input[type="checkbox"][name="checked"]');
		var $checked = $('.admin_list tbody input[type="checkbox"][name="checked"]:checked');
		if($checkbox.is(":checked")){
			layer.confirm('确定删除选中的管理员信息？',{icon:3, title:'提示信息'},function(index){
				var index = layer.msg('删除中，请稍候',{icon: 16,time:false,shade:0.8});
	            setTimeout(function(){
	            	//删除数据
	            	for(var j=0;j<$checked.length;j++){
	            		for(var i=0;i<usersData.length;i++){
							if(usersData[i].a_id == $checked.eq(j).parents("tr").find(".users_del").attr("data-id")){
								$.ajax({
									url : "/admin/deleteAdmin",
									type : "get",
									data : {a_id:usersData[i].a_id},
									dataType : "json",
									success : function(data){
										layer.msg("删除成功！");
									},
									fail : function(err) {
										layer.msg(err)
									}
								})
								usersData.splice(i,1);
								usersList(usersData);
							}
						}
	            	}
	            	$('.admin_list thead input[type="checkbox"]').prop("checked",false);
	            	form.render();
	                layer.close(index);
					layer.msg("删除成功");
	            },2000);
	        })
		}else{
			layer.msg("请选择需要删除的管理员");
		}
	})

	//操作
	$("body").on("click",".users_edit",function(){  //编辑
		var _this = $(this);
		var a_id = _this.attr("data-id")
		var index = layui.layer.open({
			title : "修改管理员",
			type : 2,
			content : "/admin/adminModify?a_id="+a_id,
			success : function(layero, index){
				layui.layer.tips('点击此处返回文章列表', '.layui-layer-setwin .layui-layer-close', {
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
	
	$("body").on("click",".users_del",function(){  //删除
		var _this = $(this);
		layer.confirm('确定删除此用户？',{icon:3, title:'提示信息'},function(index){
			_this.parents("tr").remove();
			for(var i=0;i<usersData.length;i++){
				if(usersData[i].a_id == _this.attr("data-id")){
					$.ajax({
						url : "/admin/deleteAdmin",
						type : "get",
						data : {a_id:usersData[i].a_id},
						dataType : "json",
						success : function(data){
							layer.msg("删除成功！");
						},
						fail : function(err) {
							layer.msg(err)
						}
					})
					usersData.splice(i,1);
					usersList(usersData);
				}
			}
			layer.close(index);
		});
	})

 	$("body").on("click",".users_show",function(){  //查看管理员
 		var _this = $(this);
		var a_id = _this.attr("data-id")
 		var index = layui.layer.open({
 			title : "查看管理员",
 			type : 2,
 			content : "/admin/adminShow?a_id="+a_id,
 			success : function(layero, index){
 				layui.layer.tips('点击此处返回文章列表', '.layui-layer-setwin .layui-layer-close', {
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

	function usersList(){
		//渲染数据
		function renderDate(data,curr){
			var dataHtml = '';
			currData = usersData.concat().splice(curr*nums-nums, nums);
			if(currData.length != 0){
				for(var i=0;i<currData.length;i++){
					dataHtml += '<tr>'
			    	+  '<td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose"></td>'
			    	+  '<td>'+currData[i].a_name+'</td>'
					+  '<td>'+currData[i].a_phone+'</td>'
			    	+  '<td>'+currData[i].a_email+'</td>'
			    	if(currData[i].a_sex == 1){
			    		dataHtml += '<td>'+"女"+'</td>';
			    	}else if(currData[i].a_sex == 0){
			    		dataHtml += '<td>'+"男"+'</td>';
			    	}
					dataHtml += '<td>'+currData[i].a_born+'</td>'
			    	+  '<td>'
					+    '<a class="layui-btn layui-btn-mini users_edit" data-id="'+currData[i].a_id+'"><i class="iconfont icon-edit"></i> 编辑</a>'
					+    '<a class="layui-btn layui-btn-mini users_show" data-id="'+currData[i].a_id+'"><i class="iconfont icon-edit"></i> 查看</a>'
					+    '<a class="layui-btn layui-btn-danger layui-btn-mini users_del" data-id="'+currData[i].a_id+'"><i class="layui-icon">&#xe640;</i> 删除</a>'
			        +  '</td>'
			    	+'</tr>';
				}
			}else{
				dataHtml = '<tr><td colspan="8">暂无数据</td></tr>';
			}
		    return dataHtml;
		}

		//分页
		var nums = 6; //每页出现的数据量
		laypage({
			cont : "page",
			pages : Math.ceil(usersData.length/nums),
			jump : function(obj){
				$(".users_content").html(renderDate(usersData,obj.curr));
				$('.users_list thead input[type="checkbox"]').prop("checked",false);
		    	form.render();
			}
		})
	}
        
})
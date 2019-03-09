layui.config({
	base : "back/js/"
}).use(['form','layer','jquery','laypage'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;

	//加载页面数据
	var usersData = '';
	$.get("back/json/usersList.html", function(data){
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
					url : "back/json/usersList.json",
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
		            		if(usersStr.userName.indexOf(selectStr) > -1){
			            		usersStr["userName"] = changeStr(usersStr.userName);
		            		}
		            		//用户邮箱
		            		if(usersStr.userEmail.indexOf(selectStr) > -1){
			            		usersStr["userEmail"] = changeStr(usersStr.userEmail);
		            		}
		            		//性别
		            		if(usersStr.userSex.indexOf(selectStr) > -1){
			            		usersStr["userSex"] = changeStr(usersStr.userSex);
		            		}
		            		//会员等级
		            		if(usersStr.userGrade.indexOf(selectStr) > -1){
			            		usersStr["userGrade"] = changeStr(usersStr.userGrade);
		            		}
		            		if(usersStr.userName.indexOf(selectStr)>-1 || usersStr.userEmail.indexOf(selectStr)>-1 || usersStr.userSex.indexOf(selectStr)>-1 || usersStr.userGrade.indexOf(selectStr)>-1){
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

	//添加会员
	/*$(".usersAdd_btn").click(function(){
		var index = layui.layer.open({
			title : "添加会员",
			type : 2,
			content : "User.html",
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
	})*/

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

	//操作
	$("body").on("click",".users_edit",function(){  //编辑
		var index = layui.layer.open({
			title : "修改用户",
			type : 2,
			content : "userModify",
			success : function(layero, index){
				layui.layer.tips('点击此处返回用户列表', '.layui-layer-setwin .layui-layer-close', {
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
			//_this.parents("tr").remove();
			for(var i=0;i<usersData.length;i++){
				if(usersData[i].usersId == _this.attr("data-id")){
					usersData.splice(i,1);
					usersList(usersData);
				}
			}
			layer.close(index);
		});
	})
	//待审核
	$(".audit_btn").click(function(){
		var $checkbox = $('.news_list tbody input[type="checkbox"][name="checked"]');
		var $checked = $('.news_list tbody input[type="checkbox"][name="checked"]:checked');
		if($checkbox.is(":checked")){
			var index = layer.msg('审核中，请稍候',{icon: 16,time:false,shade:0.8});
            setTimeout(function(){
            	for(var j=0;j<$checked.length;j++){
            		for(var i=0;i<newsData.length;i++){
						if(newsData[i].newsId == $checked.eq(j).parents("tr").find(".news_del").attr("data-id")){
							//修改列表中的文字
							$checked.eq(j).parents("tr").find("td:eq(6)").text("就诊").removeAttr("style");
							//将选中状态删除
							$checked.eq(j).parents("tr").find('input[type="checkbox"][name="checked"]').prop("checked",false);
							form.render();
						}
					}
            	}
                layer.close(index);
				layer.msg("审核成功");
            },2000);
		}else{
			layer.msg("请选择需要审核的文章");
		}
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
			    	+  '<td>'+currData[i].userName+'</td>'
			    	+  '<td>'+currData[i].userSex+'</td>'
			    	+  '<td>'+currData[i].userPhone+'</td>'
			    	+  '<td>'+currData[i].keshiName+'</td>'
			    	+  '<td>'+currData[i].doctor+'</td>'
			    	if(currData[i].userStatus == "准备中"){
			    		dataHtml += '<td style="color:#f00">'+currData[i].userStatus+'</td>';
			    	}else if(currData[i].userStatus == "退号"){
			    		dataHtml += '<td style="color:yellow">'+currData[i].userStatus+'</td>';
			    	}else{
			    		dataHtml += '<td>'+currData[i].userStatus+'</td>';
			    	}
			    	dataHtml += '<td>'+currData[i].userEndTime+'</td>'
			    	+  '<td>'+currData[i].youxianji+'</td>'
			    	+  '<td>'
					+    '<a class="layui-btn layui-btn-mini users_edit"><i class="iconfont icon-edit"></i> 编辑</a>'
					+    '<a class="layui-btn layui-btn-danger layui-btn-mini users_del" data-id="'+data[i].usersId+'"><i class="layui-icon">&#xe640;</i> 删除</a>'
			        +  '</td>'
			    	+'</tr>';
				}
			}else{
				dataHtml = '<tr><td colspan="8">暂无数据</td></tr>';
			}
		    return dataHtml;
		}

		//分页
		var nums = 13; //每页出现的数据量
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
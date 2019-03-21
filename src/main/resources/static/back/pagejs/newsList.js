layui.config({
	base : "back/js/"
}).use(['form','layer','jquery','laypage'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;
	
	//加载页面数据
	var newsData = '';
	$.get("/room/roomManager", function(data){
		var newArray = [];
<<<<<<< HEAD
=======
   //正常加载信息
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
			newsData = data;
			if(window.sessionStorage.getItem("addRooom")){  //添加科室后的信息
				var addRooom = window.sessionStorage.getItem("addRooom");
				newsData = JSON.parse(addRooom).concat(newsData);
			}
			
			//执行加载数据的方法
			newsList();
	})

	//查询
	$(".search_btn").click(function(){
		var newArray = [];
		if($(".search_input").val() != ''){
			var index = layer.msg('查询中，请稍候',{icon: 16,time:false,shade:0.8});
            setTimeout(function(){
            	$.ajax({
					url : "back/json/newsList.json",
					type : "get",
					dataType : "json",
					success : function(data){
						if(window.sessionStorage.getItem("addRooom")){
							var addRooom = window.sessionStorage.getItem("addRooom");
							newsData = JSON.parse(addRooom).concat(data);
						}else{
							newsData = data;
						}
						for(var i=0;i<newsData.length;i++){
							var newsStr = newsData[i];
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
		            		//科室名称
		            		if(newsStr.newsName.indexOf(selectStr) > -1){
			            		newsStr["newsName"] = changeStr(newsStr.newsName);
		            		}
		            		//科室分类名称
		            		if(newsStr.newsAuthor.indexOf(selectStr) > -1){
			            		newsStr["newsAuthor"] = changeStr(newsStr.newsAuthor);
		            		}
		            		if(newsStr.newsName.indexOf(selectStr)>-1 || newsStr.newsAuthor.indexOf(selectStr)>-1){
		            			newArray.push(newsStr);
		            		}
		            	}
		            	newsData = newArray;
		            	newsList(newsData);
					}
				})
            	
                layer.close(index);
            },2000);
		}else{
			layer.msg("请输入需要查询的内容");
		}
	})

	//添加科室
	$(".newsAdd_btn").click(function(){
		var index = layui.layer.open({
			title : "添加科室",
			type : 2,
			content : "/room/roomAdd?type=add",
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
<<<<<<< HEAD
	
=======
	//批量删除
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
	$(".batchDel").click(function(){
<<<<<<< HEAD
		var $checkbox = $('.news_list tbody input[type="checkbox"][name="checked"]');
		var $checked = $('.news_list tbody input[type="checkbox"][name="checked"]:checked');
		var chk_value =[]; 
		$('.input[type="checkbox"][name="checked"]:checked').each(function(){ 
			 chk_value.push($(this).val()); 
		});
=======
		var $checkbox = $('.news_list tbody input[type="checkbox"][name="checked"]');//每一条之前的单选按钮  --集合
		var $checked = $('.news_list tbody input[type="checkbox"][name="checked"]:checked');//被选中的集合
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
		if($checkbox.is(":checked")){
			layer.confirm('确定删除选中的信息？',{icon:3, title:'提示信息'},function(index){
				$.ajax({
		 			type : "GET",
		 			url : "/room/delMore",
		 			dataType : "json",
		 			data : {r1_id:r1,r2_id:r2},
		 			success: function(data){
		 				var re = data["result"];
		 				if(re == "SUR1"){
		 					alert("成功删除一级科室");
		 					window.location.reload();   //刷新当前界面
		 				}if(re == "SUR2"){
		 					alert("成功删除二级科室");
		 					window.location.reload();   //刷新当前界面
		 				}else{
		 					window.location.reload();   //刷新当前界面
		 				}
		 			}
		 		})
				/*var index = layer.msg('删除中，请稍候',{icon: 16,time:false,shade:0.8});
	            setTimeout(function(){
	            	//删除数据
	            	for(var j=0;j<$checked.length;j++){
	            		for(var i=0;i<newsData.length;i++){
							if(newsData[i].newsId == $checked.eq(j).parents("tr").find(".news_del").attr("data-id")){
								newsData.splice(i,1);//从第i个位置删除一个元素
								newsList(newsData);//重新加载一下数据
							}
						}
	            	}
	            	$('.news_list thead input[type="checkbox"]').prop("checked",false);
	            	form.render();
	                layer.close(index);
					layer.msg("删除成功");
	            },2000);*/
	        })
		}else{
			layer.msg("请选择需要删除的科室");
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
		if(childChecked.length == child.length){
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = true;
		}else{
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = false;
		}
		form.render('checkbox');
	})

 
	//操作
	$("body").on("click",".news_edit",function(){  //修改
		var _this = $(this);
		var r1_id = _this.attr("r1-id");
		var r2_id = _this.attr("r2-id");
        var index = layui.layer.open({
            title : "修改科室",
            type : 2,
            content : "/room/roomModify?r1_id="+r1_id+"&r2_id="+r2_id+"&type=edit",
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
	
	//操作
	$("body").on("click",".news_add",function(){  //添加
		var _this = $(this);
		var r1_id = _this.attr("r1-id");
        var index = layui.layer.open({
            title : "添加科室",
            type : 2,
            content : "/room/roomAddR2?r1_id="+r1_id+"&type=addr2",
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

	$("body").on("click",".news_collect",function(){  //收藏.
		if($(this).text().indexOf("已收藏") > 0){
			layer.msg("取消收藏成功！");
			$(this).html("<i class='layui-icon'>&#xe600;</i> 收藏");
		}else{
			layer.msg("收藏成功！");
			$(this).html("<i class='iconfont icon-star'></i> 已收藏");
		}
	})

	$("body").on("click",".news_del",function(){  //删除
		var _this = $(this);
		var r1 = _this.attr("r1-id");
		var r2 = _this.attr("r2-id");
		layer.confirm('确定删除此信息？',{icon:3, title:'提示信息'},function(index){
			//_this.parents("tr").remove();
			$.ajax({
	 			type : "GET",
	 			url : "/room/del",
	 			dataType : "json",
	 			data : {r1_id:r1,r2_id:r2},
	 			success: function(data){
	 				var re = data["result"];
	 				if(re == "SUR1"){
	 					alert("成功删除一级科室");
	 					window.location.reload();   //刷新当前界面
	 				}if(re == "SUR2"){
	 					alert("成功删除二级科室");
	 					window.location.reload();   //刷新当前界面
	 				}else{
	 					window.location.reload();   //刷新当前界面
	 				}
	 			}
	 		})
			layer.close(index);
		});
	})

	function newsList(that){
		//渲染数据
		function renderDate(data,curr){
			var dataHtml = '';
			if(!that){
				currData = newsData.concat().splice(curr*nums-nums, nums);
			}else{
				currData = that.concat().splice(curr*nums-nums, nums);
			}
			if(currData.length != 0){
				for(var i=0;i<currData.length;i++){
					dataHtml += '<tr>'
			    	+ '<td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose"></td>'
		    		+ '<td text-align="center">'+currData[i].r1_name+'</td>'
		    		if(currData[i].room2s.length != 0){
		    			dataHtml += '<td><select style="width:20%">';
			    		for (var j = 0; j < currData[i].room2s.length; j++) {
			    			dataHtml += '<option value="'+currData[i].room2s[j].r2_id+'">'+currData[i].room2s[j].r2_name+'</option>'
			    		}
			    		dataHtml += '</select></td>'
					}else{
						dataHtml += '<td>暂无数据</td>'
					}
			    	dataHtml += '<td>'
			    	if(currData[i].room2s.length != 0){
			    		dataHtml += '<a class="layui-btn layui-btn-mini news_edit" r1-id="'+currData[i].r1_id+'" r2-id="'+currData[i].room2s[0].r2_id+'"><i class="iconfont icon-edit"></i>修改</a>'
			    	}else{
			    		dataHtml += '<a class="layui-btn layui-btn-mini news_edit" r1-id="'+currData[i].r1_id+'" r2-id="null"><i class="iconfont icon-edit"></i>修改</a>'
			    	}
					dataHtml += '<a class="layui-btn layui-btn-mini news_add" r1-id="'+currData[i].r1_id+'"><i class="iconfont icon-edit"></i>添加</a>'
					if(currData[i].room2s.length != 0){
			    		dataHtml += '<a class="layui-btn layui-btn-danger layui-btn-mini news_del" r1-id="'+currData[i].r1_id+'" r2-id="'+currData[i].room2s[0].r2_id+'"><i class="layui-icon">&#xe640;</i> 删除</a>'
			    	}else{
			    		dataHtml += '<a class="layui-btn layui-btn-danger layui-btn-mini news_del" r1-id="'+currData[i].r1_id+'" r2-id="0"><i class="layui-icon">&#xe640;</i> 删除</a>'
			    	}
			        dataHtml += '</td>'
			    	+ '</tr>';
				}
			}else{
				dataHtml = '<tr><td colspan="8">暂无数据</td></tr>';
			}
		    return dataHtml;
		}
		
		// 下拉框change事件
		form.on("select", function(data){
			$(".news_edit").attr("r2-id", data.value);
			$(".news_del").attr("r2-id", data.value);
		});

		//分页
		var nums = 6; //每页出现的数据量
		if(that){
			newsData = that;
		}
		laypage({
			cont : "page",
			pages : Math.ceil(newsData.length/nums),
			jump : function(obj){
				$(".news_content").html(renderDate(newsData,obj.curr));
				$('.news_list thead input[type="checkbox"]').prop("checked",false);
		    	form.render();
			}
		})
	}
})

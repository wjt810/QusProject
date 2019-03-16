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
   //正常加载信息
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
			content : "roomAdd",
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
	//批量删除
	$(".batchDel").click(function(){
		var $checkbox = $('.news_list tbody input[type="checkbox"][name="checked"]');//每一条之前的单选按钮  --集合
		var $checked = $('.news_list tbody input[type="checkbox"][name="checked"]:checked');//被选中的集合
		if($checkbox.is(":checked")){
			layer.confirm('确定删除选中的信息？',{icon:3, title:'提示信息'},function(index){
				var index = layer.msg('删除中，请稍候',{icon: 16,time:false,shade:0.8});
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
	            },2000);
	        })
		}else{
			layer.msg("请选择需要删除的文章");
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

	//是否展示
	/*form.on('switch(isShow)', function(data){
		var index = layer.msg('修改中，请稍候',{icon: 16,time:false,shade:0.8});
        setTimeout(function(){
            layer.close(index);
			layer.msg("展示状态修改成功！");
        },2000);
	})*/
 
	//操作
	$("body").on("click",".news_edit",function(){  //编辑
        var index = layui.layer.open({
            title : "修改科室",
            type : 2,
            content : "roomModify",
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
		layer.confirm('确定删除此信息？',{icon:3, title:'提示信息'},function(index){
			//_this.parents("tr").remove();
			for(var i=0;i<newsData.length;i++){
				if(newsData[i].newsId == _this.attr("data-id")){
					newsData.splice(i,1);
					newsList(newsData);
				}
			}
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
			    	+'<td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose"></td>'
		    		+'<td text-align="center">'+currData[i].r1_name+'</td>'
		    		+'<td><select style="width:20%">'
			    		for (var j = 0; j < currData[i].room2s.length; j++) {
			    			dataHtml += '<option value="'+currData[i].room2s[j].r2_id+'">'+currData[i].room2s[j].r2_name+'</option>'
			    		}
                    dataHtml += '</select></td>'
			    	+  '<td>'
					+   '<a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a>'
//					+  '<a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon">&#xe600;</i> 收藏</a>'
					+  '<a class="layui-btn layui-btn-danger layui-btn-mini news_del" data-id="'+data[i].r1_id+'"><i class="layui-icon">&#xe640;</i> 删除</a>'
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

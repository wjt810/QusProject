var navs = [{
    "title": "后台首页",
    "icon": "icon-computer",
    "href": "templates/back//page/main.html",
    "spread": false
}, {
    "title": "科室管理",
    "icon": "icon-text",
    "href": "roomManager",
    "spread": false
},{
	 "title": "订单管理",
    "icon": "icon-text",
    "href": "orderManager",
    "spread": false,
},{
    "title": "资讯信息",
    "icon": "icon-text",
    "href": "infoManager",
    "spread": false,
},{
    "title": "用户",
    "icon": "&#xe61c;",
    "href": "user",
    "spread": false,
    "children": [
        {
            "title": "挂号人员",
            "icon": "&#xe631;",
            "href": "userManager",
            "spread": false
        }/* , {
            "title": "管理员",
            "icon": "&#xe631;",
            "href": "page/user/Admin.html",
            "spread": false
        },{
            "title": "医生",
            "icon": "&#xe631;",
            "href": "page/supplier/Supplier.html",
            "spread": false,
        } */
    ]
},{
    "title": "医护",
    "icon": "&#xe631;",
    "href": "doctor",
    "spread": false,
    "children": [
        {
            "title": "管理员",
            "icon": "&#xe61c;",
            "href": "adminManager",
            "spread": false
        },{
            "title":"医生",
            "icon":"&#xe631;",
            "href":"doctorManager",
            "spread":"false"
        }
    ]
}
]
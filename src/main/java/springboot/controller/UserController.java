package springboot.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.quartz.QuartzDataSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.mysql.cj.xdevapi.JsonArray;

import springboot.pojo.QusInfo;
import springboot.service.qusinfo.QusInfoService;



@RestController
//@Controller
public class UserController {
	
	Logger logger = LoggerFactory.getLogger(UserController.class);

	
	/**
	 * 进入首页
	 * @return
	 */
	
	@RequestMapping("list")
	/*public ModelAndView list(@RequestParam("name") String name) {
		List<User> list = userService.list(name);
		ModelAndView mv = new ModelAndView("index");
		for (User user : list) {
			logger.info(user.toString());
			mv.addObject("user", user.toString());
		}
		return mv;
	}*/
	public ModelAndView test() {
		ModelAndView mv = new ModelAndView("back/index");
		return mv;
	}
	/**
	 * 科室管理
	 * @return
	 */
	@RequestMapping("roomManager")
	public ModelAndView roomManage() {
		ModelAndView mv = new ModelAndView("back/page/news/newsList");
		return mv;
	}
	/**
	 * 科室管理(添加科室)
	 * @return
	 */
	@RequestMapping("roomAdd")
	public ModelAndView roomManageAdd() {
		ModelAndView mv = new ModelAndView("back/page/news/roomAdd");
		return mv;
	}
	/**
	 * 科室管理(修改科室)
	 * @return
	 */
	@RequestMapping("roomModify")
	public ModelAndView roomManageModify() {
		ModelAndView mv = new ModelAndView("back/page/news/roomAdd");
		return mv;
	}
	/**
	 * 订单管理
	 * @return
	 */
	@RequestMapping("orderManager")
	public ModelAndView test2() {
		ModelAndView mv = new ModelAndView("back/page/indent/Indent");
		return mv;
		
	}
	/**
	 * 订单管理（修改订单）
	 * @return
	 */
	@RequestMapping("orderModify")
	public ModelAndView orderModify() {
		ModelAndView mv = new ModelAndView("back/page/indent/IndentAdd");
		return mv;
		
	}
	/**
	 * 订单管理（查看订单）
	 * @return
	 */
	@RequestMapping("orderShow")
	public ModelAndView orderShow() {
		ModelAndView mv = new ModelAndView("back/page/indent/IndentAdd");
		return mv;
		
	}
	/**
	 * 资讯管理
	 * @return
	 */
	@RequestMapping("infoManager")
	public ModelAndView test3() {
		ModelAndView mv = new ModelAndView("back/page/news/infoList");
		return mv;
	}
	
	/**
	 * 资讯管理(添加资讯)
	 * @return
	 */
	@RequestMapping("infoAdd")
	public ModelAndView infoAdd() {
		ModelAndView mv = new ModelAndView("back/page/news/newsAdd");
		return mv;
		
	}
	/**
	 * 资讯管理（修改资讯）
	 * @return
	 */
	@RequestMapping("infoModify")
	public ModelAndView infoModify() {
		ModelAndView mv = new ModelAndView("back/page/news/newsAdd");
		return mv;
	}
	/**
	 * 用户管理
	 * @return
	 */
	@RequestMapping("userManager")
	public ModelAndView test4() {
		ModelAndView mv = new ModelAndView("back/page/user/Users");
		return mv;
		
	}
	/**
	 * 用户管理(修改用户)
	 * @return
	 */
	@RequestMapping("userModify")
	public ModelAndView userModify() {
		ModelAndView mv = new ModelAndView("back/page/user/User");
		return mv;
		
	}
	/**
	 * 管理员管理
	 * @return
	 */
	@RequestMapping("adminManager")
	public ModelAndView test5() {
		ModelAndView mv = new ModelAndView("back/page/user/Admin");
		return mv;
		
	}
	/**
	 * 管理员管理（添加）
	 * @return
	 */
	@RequestMapping("adminAdd")
	public ModelAndView AdminAdd() {
		ModelAndView mv = new ModelAndView("back/page/user/AdminAdd");
		return mv;
		
	}
	/**
	 * 管理员管理（修改）
	 * @return
	 */
	@RequestMapping("adminModify")
	public ModelAndView AdminModify() {
		ModelAndView mv = new ModelAndView("back/page/user/AdminAdd");
		return mv;
	}
	/**
	 * 管理员管理（查看）
	 * @return
	 */
	@RequestMapping("adminShow")
	public ModelAndView AdminShow() {
		ModelAndView mv = new ModelAndView("back/page/user/AdminAdd");
		return mv;
		
	}
	/**
	 * 医生管理
	 * @return
	 */
	@RequestMapping("doctorManager")
	public ModelAndView test6() {
		ModelAndView mv = new ModelAndView("back/page/doctor/Doctor");
		return mv;
		
	}
	/**
	 * 医生管理（添加）
	 * @return
	 */
	@RequestMapping("doctorAdd")
	public ModelAndView doctorAdd() {
		ModelAndView mv = new ModelAndView("back/page/doctor/DoctorAdd");
		return mv;
		
	}
	/**
	 * 医生管理（修改）
	 * @return
	 */
	@RequestMapping("doctorModify")
	public ModelAndView doctorModify() {
		ModelAndView mv = new ModelAndView("back/page/doctor/DoctorModify");
		return mv;
		
	}
	/**
	 * 医生管理（查看）
	 * @return
	 */
	@RequestMapping("doctorCheck")
	public ModelAndView doctorCheck() {
		ModelAndView mv = new ModelAndView("back/page/doctor/DoctorCheck");
		return mv;
		
	}
	/**
	 * 个人资料
	 * @return
	 */
	@RequestMapping("userInfo")
	public ModelAndView test7() {
		ModelAndView mv = new ModelAndView("back/page/user/userInfo");
		return mv;
	}
	/**
	 * 修改密码
	 * @return
	 */
	@RequestMapping("changePwd")
	public ModelAndView test8() {
		ModelAndView mv = new ModelAndView("back/page/user/changePwd");
		return mv;
	}
	/**
	 * 退出
	 * @return
	 */
	@RequestMapping("loginOut")
	public ModelAndView test9() {
		ModelAndView mv = new ModelAndView("back/login");
		return mv;
	}
	
}

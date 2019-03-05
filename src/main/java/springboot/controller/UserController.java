package springboot.controller;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


//@Controller
@RestController
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
	public ModelAndView test1() {
		ModelAndView mv = new ModelAndView("back/page/news/newsList");
		return mv;
	}
	/**
	 * 科室管理(添加科室)
	 * @return
	 */
	@RequestMapping("newsAdd")
	public ModelAndView test1Add() {
		ModelAndView mv = new ModelAndView("back/page/news/newsAdd");
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
	 * 资讯管理
	 * @return
	 */
	@RequestMapping("infoManager")
	public ModelAndView test3() {
		ModelAndView mv = new ModelAndView("back/page/news/infoList");
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
	 * 管理员管理
	 * @return
	 */
	@RequestMapping("adminManager")
	public ModelAndView test5() {
		ModelAndView mv = new ModelAndView("back/page/user/Admin");
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

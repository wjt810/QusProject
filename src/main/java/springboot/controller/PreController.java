package springboot.controller;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import springboot.pojo.QusRoom1;
import springboot.pojo.QusUser;
import springboot.service.qusroom.QusRoomService;

@RestController
public class PreController {
	Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Resource
	private QusRoomService qusRoomService ;
	
	/**
	 * 进入首页
	 *@return
	 */
	@RequestMapping("pre")
	public ModelAndView test() {
		ModelAndView mv = new ModelAndView("pre/index");
		// 查询科室
		List<QusRoom1> roomList = qusRoomService.getRoom1List(null);
		mv.addObject("roomlist", roomList);
		return mv;
	}
	/**
	 * details
	 * @return
	 */
	@RequestMapping("details")
	public ModelAndView test1() {
		ModelAndView mv=new ModelAndView("pre/details");
		return mv;
	}
	/**
	 * Hot
	 * @return
	 */
	@RequestMapping("Hot")
	public ModelAndView test2() {
		ModelAndView mv=new ModelAndView("pre/Hot");
		return mv;
	}
	/**
	 * information
	 * @return
	 */
	@RequestMapping("information")
	public ModelAndView test3() {
		ModelAndView mv=new ModelAndView("pre/information");
		return mv;
	}
	/**
	 * login
	 * @return
	 */
	@RequestMapping("pre/login")
	public ModelAndView test4() {
		ModelAndView mv=new ModelAndView("pre/login");
		return mv;
	}
	/**
	 * online
	 * @return
	 */
	@RequestMapping("online")
	public ModelAndView test5() {
		ModelAndView mv=new ModelAndView("pre/online");
		return mv;
	}
	/**
	 * order
	 * @return
	 */
	@RequestMapping("order")
	public ModelAndView test6() {
		ModelAndView mv=new ModelAndView("pre/order");
		return mv;
	}
	/**
	 * phone
	 * @return
	 */
	@RequestMapping("phone")
	public ModelAndView test7() {
		ModelAndView mv= new ModelAndView("pre/phone");
		return mv;
	}
	/**
	 *  shopcart
	 * @return
	 */
	@RequestMapping("shopcart")
	public ModelAndView test8() {
		ModelAndView mv=new ModelAndView("pre/shopcart");
		return mv;
	}
	/**
	 * shouqian
	 * @return
	 */
	@RequestMapping("shouqian")
	public ModelAndView test9() {
		ModelAndView mv=new ModelAndView("pre/shouqian");
		return mv;
	}
	/**
	 * about
	 * @return
	 */
	@RequestMapping("about")
	public ModelAndView test10() {
		ModelAndView mv=new ModelAndView("pre/about");
		return mv;
	}
	/**
	 * 个人中心
	 * @return
	 */
	@RequestMapping("index")
	public ModelAndView test11() {
		ModelAndView mv=new ModelAndView("pre/user/index");
		return mv;
	}
	/**
	 * 账号设置
	 * @return
	 */
	@RequestMapping("set")
	public ModelAndView test12() {
		ModelAndView mv=new ModelAndView("pre/user/set");
		return mv;
		
	}
	/**
	 * 个人消息
	 *@return
	 */
	@RequestMapping("message")
	public ModelAndView test13() {
		ModelAndView mv=new ModelAndView("pre/user/message");
		return mv;
	}
	/**
	 * 显示用户列表
	 * @return
	 */
	@RequestMapping("/back/json/usersList.html")
	public List<QusUser> getList(){
		
		return null;
	}
	/**
	 * 资讯页面
	 * @return
	 */
	@RequestMapping("Hotre")
	public ModelAndView test14() {
		ModelAndView mv=new ModelAndView("pre/Hotre");
		return mv;
	}
}

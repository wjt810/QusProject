package springboot.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import springboot.pojo.QusAppointment;
import springboot.pojo.QusDoctor;
import springboot.pojo.QusRoom1;
import springboot.pojo.QusUser;
import springboot.service.qusappointment.QusAppointmentService;
import springboot.service.qusdoctor.QusDoctorService;
import springboot.service.qusroom.QusRoomService;
import springboot.service.qususer.QusUserService;

@RestController
public class PreController {
	Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Resource
	private QusRoomService qusRoomService ;
	
	@Resource
	private QusDoctorService qusDoctorService;
	
	@Resource
	private QusUserService qusUserService;
	
	@Resource
	private QusAppointmentService  qusAppointmentService;
	
	/**
	 * 进入首页
	 *@return
	 */
	@RequestMapping("pre")
	public ModelAndView test() {
		ModelAndView mv = new ModelAndView("pre/index");
		// 查询科室
		List<QusRoom1> roomList = qusRoomService.getRoom1List(null);
		List<QusDoctor> doclist = qusDoctorService.getDoctorList();
		mv.addObject("doclist", doclist);
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
		List<QusDoctor> doclist = qusDoctorService.getDoctorList();
		mv.addObject("doclist", doclist);
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
	 * 用户登录
	 * @param u_name
	 * @param u_password
	 * @param session
	 * @param request
	 * @return
	 */
	@RequestMapping("/userLogin")
	public ModelAndView userLogin(@RequestParam String u_name,
			@RequestParam String u_password, 
			HttpSession session,
			HttpServletRequest request) {
		ModelAndView mv=new ModelAndView();
		List<QusUser> userList=qusUserService.getUserLogin(u_name, u_password);
		if(userList.size()>0) {
			if(userList.get(0).getU_role_id()==4) {
				System.out.println("登录成功");
				SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		        String hh=simpleDateFormat.format(new Date());
				session.setAttribute("qusUser", userList.get(0));
				session.setAttribute("hh", hh);
				mv=new ModelAndView("/pre/index");
			}
		}else {
			System.out.println("登录失败");
			request.setAttribute("error", "用户名或密码不正确");
			mv=new ModelAndView("/pre/login");
		}
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
	public ModelAndView test11(HttpSession session) {
	    ModelAndView mv=new ModelAndView("pre/user/index");
	    QusUser user=qusUserService.findUserById(2);
	    session.setAttribute("user", user);
		return mv;
	}
	/**
	 * 账号设置
	 * @return
	 * @throws ParseException 
	 */
	@RequestMapping("set")
	public ModelAndView test12(HttpSession session) throws ParseException {
	    ModelAndView mv=new ModelAndView("pre/user/set");
	    Integer u_id = ((QusUser)session.getAttribute("user")).getU_id();
	    List<QusAppointment> applist = qusAppointmentService.getUserByAppLists();
	    List<QusAppointment> apps = new ArrayList<QusAppointment>();
	    for (QusAppointment qusAppointment : applist) {
			if(qusAppointment.getApp_user_id() == u_id) {
				SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");  
			    String dateString = formatter.format(qusAppointment.getApp_time());  
			    qusAppointment.setTime(dateString);
				apps.add(qusAppointment);
			}
		}
	    mv.addObject("applist", apps);
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

package springboot.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
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

@RestController
public class PreController {
	Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Resource
	private QusRoomService qusRoomService ;
	
	@Resource
	private QusDoctorService qusDoctorService;
	
	@Resource
	private QusAppointmentService qusAppointmentService;
	
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
	@RequestMapping("/information")
	public ModelAndView test3() {
		ModelAndView mv=new ModelAndView("/pre/information");
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
	@RequestMapping("/orderShow")
	public ModelAndView test6(@RequestParam("d_id") String d_id) {
		ModelAndView mv=new ModelAndView("/pre/order");
		List<QusDoctor> doclist = qusDoctorService.getDoctorList();
		QusDoctor doc = null;
		for (QusDoctor qusDoctor : doclist) {
			if(qusDoctor.getD_id() == Integer.parseInt(d_id)) {
				doc = qusDoctor;
			}
		}
		QusAppointment app=qusAppointmentService.getAppEndInfo();
		mv.addObject("doc", doc);
		mv.addObject("app", app);
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
	 * @throws ParseException 
	 */
	@RequestMapping("/shouqian")
	public ModelAndView test9(HttpServletRequest request,HttpSession session,@RequestParam("dates")String dates,
			@RequestParam("times")String times,@RequestParam("doc_id")String doc_id,
			@RequestParam("app_id")String app_id,@RequestParam("app_priority")String app_priority) throws ParseException {
		QusAppointment app=new QusAppointment();
		/*String dates=request.getParameter("dates");
		String times=request.getParameter("times");
		String doc_id=request.getParameter("doc_id");
		String app_priority=request.getParameter("app_priority");
		String app_id=request.getParameter("app_id");*/
		
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		app.setApp_time(simpleDateFormat.parse(dates+times));
		app.setApp_status(1);
		app.setApp_user_id(((QusUser)session.getAttribute("qusUser")).getU_id());
		app.setApp_doc_id(Integer.parseInt(doc_id));
		app.setApp_priority(Integer.parseInt(app_priority));
		app.setApp_code(Integer.toString((Integer.parseInt(app_id)+1)));
		app.setApp_sta_id(2);
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

package springboot.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import springboot.pojo.QusAppointment;
import springboot.pojo.QusUser;
import springboot.service.qusappointment.QusAppointmentService;
import springboot.service.qusorder.QusOrderService;
import springboot.service.qususer.QusUserService;

@RestController
@RequestMapping("/user")
public class UsersController {
	
	Logger logger = LoggerFactory.getLogger(UserController.class);
    @Resource
	private QusUserService qusUserService;
    
    @Resource
	private QusAppointmentService qusAppointmentService;
	
	@Resource
	private QusOrderService qusOrderService;
    
    /**
	 * 获取user列表
	 * @return
	 */
	@RequestMapping("/userList")
	public List<QusAppointment> userList() {
		List<QusAppointment> qusUserList= qusUserService.getUserList();
		return qusUserList;
	}
	
	@RequestMapping("/userModify")
	public ModelAndView userModify(HttpServletRequest request) {
		Integer app_id=Integer.parseInt(request.getParameter("app_id"));
		System.out.println(app_id);
		QusAppointment user=qusUserService.getUserById(app_id); 
		ModelAndView mv = new ModelAndView("back/page/user/User.html");
		//传入数据
		mv.addObject("user",user);
		return mv;
		
	}
	
	/**
	 * 修改
	 * @return
	 */
	
	
	/**
	 * 删除
	 * @return
	 */
	@RequestMapping("/deleteUser")
	public int deleteUser(HttpServletRequest request) {
		int u_id=Integer.parseInt(request.getParameter("u_id"));
		System.out.println(u_id);
		int count=qusOrderService.deleteOrderByuserId(u_id);
		if(count>0) {
			System.out.println("delSuccess");
		}
		int count2=qusAppointmentService.deleteAppByuserId(u_id);
		if(count2>0) {
			System.out.println("delSuccess");
		}
		int count3=qusUserService.deleteUserByuserId(u_id);
		if(count3>0) {
			System.out.println("delSuccess");
		}
		return count3;
	}
	
	
}

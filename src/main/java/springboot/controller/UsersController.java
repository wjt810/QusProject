package springboot.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
	    String hh=simpleDateFormat.format(user.getApp_time());
		ModelAndView mv = new ModelAndView("back/page/user/User.html");
		//传入数据
		mv.addObject("user",user);
		mv.addObject("hh",hh);
		return mv;
		
	}
	
	/**
	 * 修改
	 * @return
	 * @throws ParseException 
	 */
	@RequestMapping(value="/UserSave")
	public int modifyAdminSave(@RequestParam("app_id") String app_id,@RequestParam("u_name") String u_name,@RequestParam("u_sex") String u_sex,
			@RequestParam("u_phone") String u_phone,@RequestParam("app_time") String app_time,
			@RequestParam("app_priority") String app_priority,HttpServletRequest request,HttpSession session) throws ParseException {
		QusAppointment user=new QusAppointment();
		user.setApp_id(Integer.parseInt(app_id));
		user.setU_name(u_name);
		user.setU_sex(u_sex);
		user.setU_phone(u_phone);
		SimpleDateFormat farmat=new SimpleDateFormat("yyyy-MM-dd");
		user.setApp_time(farmat.parse(app_time));
		user.setApp_priority(Integer.parseInt(app_priority));
		int count=qusUserService.updateUser(user);
		
		return count;
		
	}
	
	
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
	
	@RequestMapping("/changePwd")
	@ResponseBody
	public Object changePwd(@RequestParam("pwd")String pwd) {
		Map<String, String> map = new HashMap<String,String>();
		QusUser user=qusUserService.findUserById(2);
		if(qusUserService.changPwd(pwd, user.getU_id())) {
			System.out.println("密码修改成功");
			map.put("result", "success");
		}else {
			System.out.println("密码修改失败");	
			map.put("result", "error");
		}
		return map;
	}
	
}

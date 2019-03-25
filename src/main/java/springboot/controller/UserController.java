package springboot.controller;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import springboot.pojo.QusAdmin;
import springboot.pojo.QusDoctor;
import springboot.pojo.QusRole;
import springboot.service.qusadmin.QusAdminService;
import springboot.service.qusdoctor.QusDoctorService;
import springboot.service.qusrole.QusRoleService;
import springboot.service.qususer.QusUserService;
@RestController
//@Controller
public class UserController {
	
	Logger logger = LoggerFactory.getLogger(UserController.class);
     @Resource
	private QusUserService qusUserService;
     
     @Resource
 	private QusAdminService qusAdminService;
     
     @Resource
     private QusDoctorService qusDoctorService;
     
     @Resource
     private QusRoleService qusRoleService;
	/**
	 * 进入首页
	 * @return
	 */
	
	@RequestMapping("/list")
	public ModelAndView test() {
		ModelAndView mv = new ModelAndView("back/index");
		return mv;
	}
	/**
	 * 登录
	 * @return
	 */
	@RequestMapping("backLogin")
	public ModelAndView login() {
		ModelAndView mv = new ModelAndView("back/login");
		return mv;
	}

	@RequestMapping("/login")
	public ModelAndView doLogin(
			@RequestParam String a_name,
			@RequestParam String a_password, 
			HttpSession session,
			HttpServletRequest request) {
		System.out.println("8888888888888");
		ModelAndView mv=new ModelAndView();
		List<QusAdmin> qusAdmin = qusAdminService.AdminLogin(a_name,a_password);
		//List<QusDoctor> qusDoctor=qusDoctorService.doctorLogin(a_name, a_password);
		//List<QusRole> role=qusRoleService.getRoleList();
		//session.setAttribute("role", role.get(0));//&& qusDoctor.size()<0
			if(qusAdmin.size()>0) {
				if(qusAdmin.get(0).getA_roleid()==1) {
					session.setAttribute("qusAdmin", qusAdmin.get(0));
					System.out.println("管理员");
					mv=new ModelAndView("/back/index");
				}
			}else{
				System.out.println("无此账户");
				request.setAttribute("error", "用户名或密码不正确");
				mv=new ModelAndView("/back/login");
			}/*else if(qusDoctor.size()>0) {
				if(qusDoctor.get(0).getD_role_id()==2 || qusDoctor.get(0).getD_role_id()==3) {
					session.setAttribute("qusDoctor", qusDoctor.get(0));
					System.out.println("医生");
					mv=new ModelAndView("back/index");
				}
			}*/
			return mv;
	}
	
	/**
	 * 科室管理
	 * @return
	 */
	@RequestMapping("roomManager")
	public ModelAndView room() {
		ModelAndView mv = new ModelAndView("/back/page/news/newsList");
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
		ModelAndView mv = new ModelAndView("/back/page/indent/Indent");
		return mv;
	}
	/**
	 * 资讯管理
	 * @return
	 */
	@RequestMapping("infoManager")
	public ModelAndView test3() {
		ModelAndView mv = new ModelAndView("/back/page/news/infoList");
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
	 * 用户管理
	 * @return
	 */
	@RequestMapping("userManager")
	public ModelAndView test4() {
		ModelAndView mv = new ModelAndView("/back/page/user/Users");
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
		ModelAndView mv = new ModelAndView("/back/page/user/Admin");
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
	 * 医生管理
	 * @return
	 */
	@RequestMapping("doctorManager")
	public ModelAndView test6() {
		ModelAndView mv = new ModelAndView("/back/page/doctor/Doctor");
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

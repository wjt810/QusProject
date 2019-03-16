package springboot.controller;

import java.io.File.*;
import java.io.*;
import java.util.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import springboot.pojo.QusAdmin;
import springboot.service.qusAdmin.QusAdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
Logger logger = LoggerFactory.getLogger(AdminController.class);
	
	@Resource
	private QusAdminService qusAdminService;
	
	//查看管理员
	@RequestMapping("/list")
	public List<QusAdmin> selectAdminList(){
		//查看管理员
		List<QusAdmin> list = qusAdminService.SeeAdminList();
		for (QusAdmin a: list) {
			System.out.println(a.getA_id() + "\t" + a.getA_name());
		}
		return list;
	}
	 
	//登录
	@RequestMapping("/login")
	public ModelAndView doLogin(
			@RequestParam String a_name,
			@RequestParam String a_password, 
			HttpSession session,
			HttpServletRequest request) {
		System.out.println("8888888888888");
		List<QusAdmin> qusAdmin = qusAdminService.AdminLogin(a_name,a_password);
		System.out.println();
		if (qusAdmin.size()>0) { // 登录成功
			session.setAttribute("qusAdmin", qusAdmin.get(0));
			System.out.println("11111111111");
			ModelAndView mv=new ModelAndView("back/index");
			return mv;
		} else { // 登录失败
			System.out.println("无此账户");
			request.setAttribute("error", "用户名或密码不正确");
			ModelAndView mv=new ModelAndView("back/login");
			return mv;
		}
	}
	
	
	//添加管理员
	@RequestMapping(value="/adminAdd")
	public ModelAndView addUser(@ModelAttribute("QusAdmin") QusAdmin qusAdmin){
		ModelAndView mv=new ModelAndView("back/AdminAdd");
		return mv;
	}
	//保存用户
	@RequestMapping(value="/upload",method=RequestMethod.POST)
	public ModelAndView userSave(QusAdmin qusAdmin,HttpSession session){
		Integer createdBy=((QusAdmin) session.getAttribute("qusAdmin")).getA_id();
		qusAdmin.setA_createBy(createdBy);
		if(qusAdminService.AddAdmin(qusAdmin) != null){
			ModelAndView mv=new ModelAndView("back/list");
			return mv;
		}
		ModelAndView mv=new ModelAndView("back/adminAdd");
		return mv;
	}
	
	//文件上传
	 /* @GetMapping("/upload")
	    public String upload() {
	        return "upload";
	    }
	    @PostMapping("/upload")
	    @ResponseBody
	    public String upload(@RequestParam("file") MultipartFile file) {
	        if (file.isEmpty()) {
	            return "上传失败，请选择文件";
	        }

	        String fileName = file.getOriginalFilename();
	        String filePath = "C:\\Users\\a\\Pictures\\Saved Pictures";
	        File dest = new File(filePath + fileName);
	        try {
	            file.transferTo(dest);
	            logger.info("上传成功");
	            return "上传成功";
	        } catch (IOException e) {
	        	logger.error(e.toString(), e);
	        }
	        return "上传失败！";
	    }
	*/
		/*//跳转用户修改页面
		@RequestMapping("/modify.html")
		public ModelAndView getUserById(@RequestParam int a_id,Model m){
			QusAdmin qusAdmin=(QusAdmin) qusAdminService.UpdateAdmin(a_id);
			m.addAttribute("qusAdmin", qusAdmin);
			ModelAndView mv=new ModelAndView("back/index");
			return mv;
		}
		//保存修改的用户信息
		@RequestMapping(value="/usermodifysave.html",method=RequestMethod.POST)
		public ModelAndView modifyUserSave(QusAdmin qusAdmin,HttpSession sessin){
			Integer modifyId=((QusAdmin) sessin.getAttribute("qusAdmin")).getA_id();
			qusAdmin.setA_modifyBy(modifyId);
			if(qusAdminService.UpdateAdmin(modifyId) != null){
				ModelAndView mv=new ModelAndView("back/index");
				return mv;
			}
			ModelAndView mv=new ModelAndView("back/modify");
			return mv;
		}
	*/
}

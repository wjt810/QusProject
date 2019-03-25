package springboot.controller;

import java.io.File.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.io.*;
import java.util.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.annotation.JsonFormat;

import springboot.pojo.QusAdmin;
import springboot.service.qusadmin.QusAdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
Logger logger = LoggerFactory.getLogger(AdminController.class);
	
	@Resource
	private QusAdminService qusAdminService;
	
	//查看管理员
	@RequestMapping("/lists")
	public List<QusAdmin> selectAdminList(){
		//查看管理员
		List<QusAdmin> list = qusAdminService.SeeAdminList();
		for (QusAdmin qusAdmin : list) {
			System.out.println(qusAdmin);
		}
		for (QusAdmin a: list) {
			System.out.println(a.getA_id() + "\t" + a.getA_name());
		}
		return list;
	}
	 
	
	//添加管理员
	@RequestMapping(value="/adminAdd")
	public ModelAndView addUser(@ModelAttribute("QusAdmin") QusAdmin qusAdmin){
		ModelAndView mv=new ModelAndView("/back/AdminAdd");
		return mv;
	}
	//保存用户
	@RequestMapping(value="/upload",method=RequestMethod.POST)
	public ModelAndView userSave(QusAdmin qusAdmin,HttpSession session){
		Integer createdBy=((QusAdmin) session.getAttribute("qusAdmin")).getA_id();
		qusAdmin.setA_createBy(createdBy);
		if(qusAdminService.AddAdmin(qusAdmin) != null){
			ModelAndView mv=new ModelAndView("/back/list");
			return mv;
		}
		ModelAndView mv=new ModelAndView("back/adminAdd");
		return mv;
	}
	
	/**
	 * 根据a_id删除管理员
	 * @return
	 */
	@RequestMapping("/deleteAdmin")
	public int deleteAdmin(HttpServletRequest request) {
		Integer a_id=Integer.parseInt(request.getParameter("a_id"));
		int count=qusAdminService.deleteAdmin(a_id);
		return count;
	}
	
	/**
	 * 根据a_id查看管理员信息
	 * @param request
	 * @return
	 */
	@RequestMapping("/adminShow")
	public ModelAndView ShowAdmin(HttpServletRequest request) {
		Integer a_id=Integer.parseInt(request.getParameter("a_id"));
		QusAdmin admin=qusAdminService.getAdminById(a_id);
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String hh=simpleDateFormat.format(admin.getA_born());
        System.out.println(hh);
		//admin.setA_born(JsonFormat.parse(hh));
		System.out.println(admin);
		ModelAndView mv=new ModelAndView("back/page/user/AdminCheck");
		mv.addObject("admin",admin);
		mv.addObject("hh", hh);
		return mv;
	}
	
	/**
	 * 将管理员信息传入，（修改）
	 * @param request
	 * @return
	 */
	@RequestMapping("/adminModify")
	public ModelAndView ModifyAdmin(HttpServletRequest request) {
		Integer a_id=Integer.parseInt(request.getParameter("a_id"));
		QusAdmin admin=qusAdminService.getAdminById(a_id);
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String hh=simpleDateFormat.format(admin.getA_born());
        System.out.println(hh);
		//admin.setA_born(JsonFormat.parse(hh));
		System.out.println(admin);
		ModelAndView mv=new ModelAndView("back/page/user/AdminModify");
		mv.addObject("admin",admin);
		mv.addObject("hh", hh);
		return mv;
	}
	/**
	 * 保存修改内容
	 * @return
	 */
	@RequestMapping("/adminModifySave")
	public int modifyAdminSave(@RequestParam("a_id") String a_id,@RequestParam("a_name") String a_name,
			@RequestParam("a_realName") String a_realName,@RequestParam("a_sex") String a_sex,
			@RequestParam("a_phone") String a_phone,@RequestParam("a_born") Date a_born,
			@RequestParam("a_email") String a_email,@RequestParam("a_des") String a_des,
			@RequestParam("a_picpath") String a_picpath,@RequestParam("a_address") String a_address,
			HttpServletRequest request) {
		QusAdmin admin=new QusAdmin();
		admin.setA_id(Integer.parseInt(a_id));
		admin.setA_name(a_name);
		admin.setA_realName(a_realName);
		admin.setA_sex(Integer.parseInt(a_sex));
		admin.setA_phone(a_phone);
		admin.setA_born(a_born);
		admin.setA_email(a_email);
		admin.setA_des(a_des);
		admin.setA_picpath(a_picpath);
		admin.setA_address(a_address);
		int count=qusAdminService.UpdateAdmin(admin);
		return count;
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
		/*
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

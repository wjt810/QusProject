package springboot.controller;

import java.io.File.*;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.ParseException;
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
import org.springframework.web.multipart.MultipartFile;
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
	 
	
	//保存用户
	@RequestMapping(value="/addAdminSave",method=RequestMethod.POST)
	public int studentInfoSave(@RequestParam("file") MultipartFile file,HttpServletRequest request,HttpSession session) throws Exception {
		String filename = URLEncoder.encode(file.getOriginalFilename(), "utf-8");
		InputStream inputStream = file.getInputStream();
		//上传到第三方服务器（例如使用FTP传到自己搭建的FTP服务器）ftp://ftphost:port/imageDir/
		QusAdmin qusAdmin=new QusAdmin();
		qusAdmin.setA_picpath("/back/images/" + filename);
		//在Dao层将学生信息存到数据库
		String a_name=request.getParameter("a_name");
		String a_realName=request.getParameter("a_realName");
		String sex=request.getParameter("sex");
		int a_sex=0;
		if(sex=="男") {
			a_sex=0;
		}else if(sex=="女") {
			a_sex=1; 
		}
		//int a_sex=request.getParameter("a_sex");
		String a_password=request.getParameter("a_password");
		String a_phone=request.getParameter("a_phone");
		String a_born=request.getParameter("a_born");
		SimpleDateFormat sf=new SimpleDateFormat("yyyy-MM-dd");
		Date sfs=(Date)sf.parseObject(a_born);
		
		String a_address=request.getParameter("a_address");
		
		String a_email=request.getParameter("a_email");
		String a_des=request.getParameter("a_des");
		qusAdmin.setA_name(a_name);
		qusAdmin.setA_realName(a_realName);
		qusAdmin.setA_sex(a_sex);
		qusAdmin.setA_password(a_password);
		qusAdmin.setA_phone(a_phone);
		qusAdmin.setA_born(sfs);  //出生日期
		qusAdmin.setA_address(a_address);
		qusAdmin.setA_email(a_email);
		qusAdmin.setA_des(a_des);
		qusAdmin.setA_roleid(1);
		//创建者id
		String createdBy=request.getParameter("a_createBy");
		qusAdmin.setA_createBy(Integer.parseInt(createdBy));
		
		int count=qusAdminService.AddAdmin(qusAdmin);
		
		return count;
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
	 * @throws IOException 
	 * @throws ParseException 
	 */
	@RequestMapping(value="/adminModifySave",method=RequestMethod.POST)
	public int modifyAdminSave(@RequestParam("a_id") String a_id,@RequestParam("a_modify") String a_modify,@RequestParam("a_name") String a_name,
			@RequestParam("a_realName") String a_realName,@RequestParam("a_sex") String a_sex,
			@RequestParam("a_phone") String a_phone,@RequestParam("a_born") String a_born,
			@RequestParam("a_email") String a_email,@RequestParam("a_des") String a_des,
			@RequestParam("a_address") String a_address,@RequestParam("a_picpath") String a_picpath,
			HttpServletRequest request,HttpSession session) throws IOException, ParseException {
		QusAdmin admin=new QusAdmin();//,MultipartFile file
		SimpleDateFormat farmat=new SimpleDateFormat("yyyy-MM-dd");
		admin.setA_id(Integer.parseInt(a_id));
		admin.setA_name(a_name);
		admin.setA_realName(a_realName);
		admin.setA_sex(Integer.parseInt(a_sex));
		admin.setA_phone(a_phone);
		admin.setA_born(farmat.parse(a_born));
		admin.setA_email(a_email);
		admin.setA_des(a_des);
		admin.setA_picpath(a_picpath);
		admin.setA_address(a_address);
		admin.setA_modify(Integer.parseInt(a_modify));
		
		/*a_picpath = URLEncoder.encode(file.getOriginalFilename(), "utf-8");
		InputStream inputStream = file.getInputStream();
		//上传到第三方服务器（例如使用FTP传到自己搭建的FTP服务器）ftp://ftphost:port/imageDir/
		admin.setA_picpath("http://localhost:8880/static/back/images/" + a_picpath);*/
		
		int count=qusAdminService.UpdateAdmin(admin);
		return count;
	}
	
	@RequestMapping("/changPwd")
	public void changPwd(HttpServletRequest request,HttpSession session,
			@RequestParam("newPwd")String newPwd) {
		Integer id=((QusAdmin) session.getAttribute("qusAdmin")).getA_id();
		qusAdminService.changPwd(id, newPwd);
		System.out.println("修改密码成功");
	}
}

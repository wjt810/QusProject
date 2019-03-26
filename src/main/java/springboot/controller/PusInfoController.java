package springboot.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import springboot.pojo.QusAdmin;
import springboot.pojo.QusInfo;
import springboot.pojo.QusRoom1;
import springboot.service.qusinfo.QusInfoService;

@RestController
public class PusInfoController {
	@Resource
	QusInfoService  qusInfoService;
	//分页查询    
	@RequestMapping("/back/json/infoList.html")
	public List<QusInfo> getQusList(HttpServletRequest request) throws ParseException{
		QusAdmin admin = new QusAdmin();
		admin.setA_name("a_name");
		admin.setA_password("a_password");
		admin.setA_sex(1);
		admin.setA_phone("a_phone");
		admin.setA_realName("a_realName");
		admin.setA_email("a_email");
		admin.setA_des("a_des");
		admin.setA_born(new Date());
		admin.setA_address("a_address");
		admin.setA_roleid(1);
		request.getSession().setAttribute("user", admin);
		String title =null;
		List<QusInfo> qusInfoList1= qusInfoService.selectInfoByTitle1(title);//查询所有的管理员
		List<QusInfo> qusInfoList2= qusInfoService.selectInfoByTitle2(title);//查询所有的医生 和主任信息
		System.out.println("qusInfoList2 Size:  \t"+qusInfoList2.size());
		qusInfoList1.addAll(qusInfoList2);//把两个集合合并
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		return qusInfoList1;
	}
	@RequestMapping("/deleteById.html")
	public int deleteById(HttpServletRequest request) {
		int infoId =Integer.parseInt(request.getParameter("info_id"));
		int count = qusInfoService.deleteInfoById(infoId);
		return count;
	}
	@RequestMapping("/addInfo.html")
	public int addNewsInfo(HttpServletRequest request,HttpSession session,@RequestParam("info_title") String info_title,
			@RequestParam("info_content")String info_content) throws ParseException {
		QusInfo info = new QusInfo();
		
		info.setInfo_content(info_content);
		info.setInfo_role_id(1);//暂时设为管理员
		info.setInfo_title(info_title);
		info.setInfo_u_d_id(((QusAdmin)session.getAttribute("qusAdmin")).getA_id());   
		info.setInfo_startTime(new Date());
		
		int addCount = qusInfoService.addInfo(info);
		return addCount;
	}
	/**
	 * 资讯管理（修改资讯)
	 * @return
	 */
	@RequestMapping("/infoModify")
	public ModelAndView infoModify(HttpServletRequest request) {
		ModelAndView mv = new ModelAndView("back/page/news/newschange");
		String infoIdString = request.getParameter("id");
		Integer infoId =0;
		if(infoIdString!=null) {
			 infoId = Integer.parseInt(infoIdString);
			QusInfo info = null;
			int roleId = qusInfoService.selectRoleIdByInfoId(infoId);
			System.out.println("infoId: "+infoId);
			System.out.println("roleId: "+roleId);
			if(roleId==1) {
				info=qusInfoService.selectAdminById(infoId);
			}else if(roleId==2||roleId==3) {
				info=qusInfoService.selectDoctorById(infoId);
			}
			request.getSession().setAttribute("info",info);
			mv.addObject("info", info);
		}
		mv.addObject("infoId",infoId);
		return mv;
	}
	/**
	 * 修改资讯  -操作数据库
	 * @return
	 * @throws ParseException 
	 */
	@RequestMapping(value="/infoModifyReal",method=RequestMethod.GET)//infoContent username title
	public int infoModifyReal(@RequestParam("info_id")String info_id,@RequestParam("info_title") String info_title,
				@RequestParam("content")String content,HttpServletRequest request){
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		QusInfo info = new QusInfo();
		info.setInfo_id(Integer.parseInt(info_id));
		info.setInfo_title(info_title);
		info.setInfo_content(content);
		info.setInfo_modifyTime(new Date());
		try {
			info.setInfo_modifyTime(format.parse(format.format(new Date())));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		int count = qusInfoService.updateInfo(info);
		return count;
	}
	//查询刚插入的数据id
	@RequestMapping("/getMaxId")
	public String getMaxId() {
		int count = qusInfoService.selectMaxId();
		return "{\"infoId\":\""+count+"\"}";
	}
	//查询科室
	@RequestMapping("/selectKeShi")
	public List<QusRoom1> selectKeShi(){
		
		return null;
	}
}

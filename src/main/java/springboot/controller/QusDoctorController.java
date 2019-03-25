package springboot.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import springboot.pojo.QusDoctor;
import springboot.service.qusappointment.QusAppointmentService;
import springboot.service.qusdoctor.QusDoctorService;
import springboot.service.qusorder.QusOrderService;

@RestController
@RequestMapping("doctor")
public class QusDoctorController {
	Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Resource
	public QusDoctorService qusDoctorService;
	
	@Resource
	public QusAppointmentService qusAppointmentService;
	
	@Resource
	public QusOrderService qusOrderService;
	
	/**
	 * 医生列表
	 * @return
	 */
	@RequestMapping("/doctorList")
	public List<QusDoctor> getDoctorList(){
		List<QusDoctor> doctorList=qusDoctorService.getDoctorList();
		System.out.println("医生姓名\t性别\t入职时间\t工龄\t角色\t挂号费用\t咨询费用\t所属科室");
		for(QusDoctor doctor:doctorList) {
			int time=new Date().getYear()-doctor.getD_startTime().getYear();
			doctor.setWorkTime(time);
		}
		return doctorList;
	}
	@RequestMapping(value="/submitAddInfo",method=RequestMethod.POST)
	public String submitAddInfo(HttpServletRequest request) {//,@RequestParam()   ,@RequestParam("picture")MultipartFile fileUpload
		//d_name role sex email phone cDate province city area time room1 room2 description
		String uName = request.getParameter("uName");
		String role = request.getParameter("role");
		String sex = request.getParameter("sex");
		String phone = request.getParameter("phone");
		String province = request.getParameter("province");
		String city = request.getParameter("city");
		String area = request.getParameter("area");
		String time = request.getParameter("time");
		String room1 = request.getParameter("room1");
		String room2 = request.getParameter("room2");
		String description = request.getParameter("description");
		System.out.println("uName \t"+uName+" role:"+role+"\t sex:\t"+sex+"phone:"+phone+"province\t"+province+"city:\t"+city+"\t"+"area:\t"+area+"time:\t"+time+"room1:\t"+room1+"\t room2:"+room2+"description:\t"+description);
		/* //获取文件名
        String fileName = fileUpload.getOriginalFilename();
        System.out.println(fileName);
        //获取文件后缀名
        String suffixName = fileName.substring(fileName.lastIndexOf("."));
        //重新生成文件名
        fileName = UUID.randomUUID()+suffixName;
        //指定本地文件夹存储图片
        String filePath = "C:/Users/zcx/Desktop/毕业项目/test/QusProject/src/main/resources/static/mypicture/";
        try {//
            //将图片保存到static文件夹里
        	System.out.println(filePath+fileName);
            fileUpload.transferTo(new File(filePath+fileName));
        } catch (Exception e) {
            e.printStackTrace();
        	return "back/page/doctor/Doctor.html";
        }*/
        return "back/page/doctor/Doctor.html";
	}
	//deleteById.html
	/**
	 *删除医生
	 */
	@RequestMapping("deleteById.html")
	public int deleteDoctor(HttpServletRequest request) {
		String docIdStr = request.getParameter("docId");
		int result =0;
		int docId =0;
		if(docIdStr!=null && docIdStr !="") {
			docId = Integer.parseInt(docIdStr);
			int appointmentcount = qusAppointmentService.selectAppointmentByDocId(docId);
			int ordercount =qusOrderService.selectOrderByDocId(docId);
			System.out.println("appointmentcount\t"+  appointmentcount);
			System.out.println("ordercount\t"+  ordercount);
			if(appointmentcount<=0&&ordercount<=0) {
				//执行删除
				int deleteUserCount = qusDoctorService.deleteByDocId(docId);
				System.out.println("deleteUserCount \t"+deleteUserCount);
				if(deleteUserCount>0) {
					result = 1;
				}else {
					result = -1;
				}
			}else {
				result = -1;
			}
		} else {
			result = -1;
		}
		return result;
	}
	
	@RequestMapping("/seldoc")
	public ModelAndView seldoc(HttpSession session,@RequestParam("r1_id")Integer r1_id) {
		ModelAndView mv = new ModelAndView("pre/information");
		List<QusDoctor> doclist = qusDoctorService.getDoctorList();
		List<QusDoctor> dlist = new ArrayList<QusDoctor>();
		for (QusDoctor qusDoctor : doclist) {
			if(qusDoctor.getD_r1_id() == r1_id) {
				dlist.add(qusDoctor);
			}
		}
		mv.addObject("doclist", dlist);
		return mv;
	}
}

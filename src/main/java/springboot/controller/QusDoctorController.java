package springboot.controller;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.pojo.QusDoctor;
import springboot.service.qusdoctor.QusDoctorService;

@RestController
@RequestMapping("/doctor")
public class QusDoctorController {
	Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Resource
	public QusDoctorService qusDoctorService;
	
	/**
	 * 医生列表
	 * @return
	 */
	@RequestMapping("/doctorList")
	public List<QusDoctor> getDoctorList(){
		List<QusDoctor> doctorList=qusDoctorService.getDoctorList();
		System.out.println("医生姓名\t性别\t入职时间\t工龄\t角色\t挂号费用\t咨询费用\t所属科室");
		/* // 获得今天的时间
	    var date = new Date();
	    startDate = new Date(startDate);
	    var newDate = date.getTime() - startDate.getTime();*/
		
		for(QusDoctor doctor:doctorList) {
			int time=new Date().getYear()-doctor.getD_startTime().getYear();
			System.out.println(time);
			System.out.println(doctor.getD_name()+"\t"+doctor.getD_sex()+"\t"+doctor.getD_startTime()
			+"\t"+time+"\t"+doctor.getQusRole().getRole_name()+"\t"+doctor.getD_price()+"\t"+doctor.getD_consult()
			+"\t"+doctor.getQusRoom1().getR1_name()+">"+doctor.getQusRoom2().getR2_name());
		}
		return doctorList;
	}
	
}

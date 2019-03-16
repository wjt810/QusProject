package springboot.controller;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.pojo.QusAppointment;
import springboot.service.qusappointment.QusAppointmentService;

@RestController
@RequestMapping("/appointment")
public class QusAppointmentController {
	
	Logger logger = LoggerFactory.getLogger(UserController.class);
	@Resource
	public QusAppointmentService qusAppointmentService;
	
	/**
	 * 订单列表
	 * @return
	 */
	@RequestMapping("/appointmentList")
	public List<QusAppointment> getUserList(){
		List<QusAppointment> userList=qusAppointmentService.getUserByAppList();
		System.out.println("姓名\t性别\t手机号\t科室名称\t就诊医生\t状态\t预约时间\t优先级");
		for(QusAppointment user:userList) {
			System.out.println(user.getQusUser().getU_name()+"\t"+user.getQusUser().getU_sex()+"\t"+user.getQusUser().getU_phone()
							+"\t"+user.getQusDoctor().getQusRoom1().getR1_name()+">"+user.getQusDoctor().getQusRoom2().getR2_name()
							+"\t"+user.getQusDoctor().getD_name()+"\t"+user.getQusStatus().getSta_name()+"\t"
							+user.getApp_time()+"\t"+user.getApp_priority());
		}
		return userList;
	}

}

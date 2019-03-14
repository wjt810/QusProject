package springboot.qusdoctor;

import static org.junit.Assert.*;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import springboot.pojo.QusDoctor;
import springboot.service.qusdoctor.QusDoctorService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class QusDoctorTest {
	@Resource
	private QusDoctorService qusDoctorService;
	/**
	 * 医生列表
	 */
	@Test
	public void Doctortest() {
		List<QusDoctor> doctorList=qusDoctorService.getDoctorList();
		System.out.println("医生姓名\t性别\t入职时间\t工龄\t角色\t挂号费用\t咨询费用\t所属科室");
		for(QusDoctor doctor:doctorList) {
			int time=new Date().getYear()-doctor.getD_born().getYear();
			System.out.println(time);
			System.out.println(doctor.getD_name()+"\t"+doctor.getD_sex()+"\t"+doctor.getD_startTime()
			+"\t"+time+"\t"+doctor.getQusRole().getRole_name()+"\t"+doctor.getD_price()+"\t"+doctor.getD_consult()
			+"\t"+doctor.getQusRoom1().getR1_name()+">"+doctor.getQusRoom2().getR2_name());
		}
	}

}

package springboot.qusappointment;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import springboot.service.qusappointment.QusAppointmentService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class qusappointment {
	@Resource
	QusAppointmentService qusAppointmentService;
	@Test
	public void test() {
		//int count = qusAppointmentService.deleteAppointmentByDocId(3);
		//System.out.println(count);
	}
	
}

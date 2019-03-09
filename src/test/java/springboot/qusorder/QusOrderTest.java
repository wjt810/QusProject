package springboot.qusorder;

import static org.junit.Assert.*;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import springboot.pojo.QusOrder;
import springboot.service.qusorder.QusOrderService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class QusOrderTest {
	
	@Resource
	public QusOrderService qusOrderService;
	
	/**
	 * 订单列表
	 */
	@Test
	public void test() {
		List<QusOrder> orderList =	qusOrderService.orderList();
		System.out.println("用户名称\t医生名称\t科室名称\t\t预约标号\t订单费用\t订单状态\t订单类型");
		for(QusOrder order:orderList) {
			System.out.println(order.getQusUser().getU_name()+"\t"+order.getQusDoctor().getD_name()+"\t"
					+order.getQusDoctor().getQusRoom1().getR1_name()+">"+order.getQusDoctor().getQusRoom2().getR2_name()+"\t"
					+order.getQusAppointment().getApp_code()+"\t"+order.getO_price()+"\t"+order.getO_status()+"\t"
					+order.getO_type());
		}
	}
	
	/**
	 * 删除订单
	 */
	@Test
	public void deleteOrderTest() {
		Integer o_id=5;
		int count=qusOrderService.deleteOrder(o_id);
		System.out.println(count);
	}

}

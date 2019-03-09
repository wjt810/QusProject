package springboot.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import springboot.pojo.QusOrder;
import springboot.service.qusorder.QusOrderService;

@RestController
@RequestMapping("/order")
public class QusOrderController {
	
	Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Resource
	public QusOrderService qusOrderService;
	
	@RequestMapping("/orderList")
	public List<QusOrder> orderList() {
		List<QusOrder> orderList=qusOrderService.orderList();
		System.out.println("用户名称\t医生名称\t科室名称\t\t预约标号\t订单费用\t订单状态\t订单类型");
		for(QusOrder order:orderList) {
			System.out.println(order.getQusUser().getU_name()+"\t"+order.getQusDoctor().getD_name()+"\t"
					+order.getQusDoctor().getQusRoom1().getR1_name()+">"+order.getQusDoctor().getQusRoom2().getR2_name()+"\t"
					+order.getQusAppointment().getApp_code()+"\t"+order.getO_price()+"\t"+order.getO_status()+"\t"
					+order.getO_type());
		}
		return orderList;
	}
	
	@RequestMapping("/deleteOrder")
	public int deleteOrder(HttpServletRequest request) {
		int o_id=Integer.parseInt(request.getParameter("o_id"));
		int count=qusOrderService.deleteOrder(o_id);
		//System.out.println(o_id);
		return count;
	}
}

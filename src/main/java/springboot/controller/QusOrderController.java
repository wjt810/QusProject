package springboot.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import springboot.pojo.QusOrder;
import springboot.service.qusorder.QusOrderService;

@RestController
@RequestMapping("/order")
public class QusOrderController {
	
	Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Resource
	public QusOrderService qusOrderService;
	
	/**
	 * 订单列表
	 * @return
	 */
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
	
	/**
	 * 根据o-id删除订单
	 * @param request
	 * @return
	 */
	@RequestMapping("/deleteOrder")
	public int deleteOrder(HttpServletRequest request) {
		int o_id=Integer.parseInt(request.getParameter("o_id"));
		int count=qusOrderService.deleteOrder(o_id);
		//System.out.println(o_id);
		return count;
	}
	/**
	 * 根据o_id修改订单
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/orderModify")
	public ModelAndView modifyOrder(/*@RequestParam("userName") String userName,@RequestParam("doctorName") String doctorName,
			@RequestParam("room1") String room1,@RequestParam("room2") String room2,
			@RequestParam("price") String price,@RequestParam("code") String code,
			@RequestParam("type") String type,@RequestParam("status") String status,*/
			HttpServletRequest request) {
		System.out.println(request.getParameter("o_id"));
		Integer o_id = Integer.parseInt(request.getParameter("o_id"));
		QusOrder order=qusOrderService.getOrderById(o_id);
		ModelAndView mv = new ModelAndView("back/page/indent/IndentAdd");
		//传入数据
		mv.addObject("order",order);
		return mv;
	}
	
	/**
	 * 查看订单
	 * @return
	 */
	@RequestMapping(value="/orderShow")
	public ModelAndView ShowOrder(HttpServletRequest request) {
		Integer o_id=Integer.parseInt(request.getParameter("o_id"));
		QusOrder order=qusOrderService.getOrderById(o_id);
		ModelAndView mv = new ModelAndView("back/page/indent/IndentCheck");
		mv.addObject("order",order);
		return mv;
	}
}

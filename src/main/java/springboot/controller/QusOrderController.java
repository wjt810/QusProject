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

import springboot.pojo.QusAppointment;
import springboot.pojo.QusDoctor;
import springboot.pojo.QusOrder;
import springboot.pojo.QusRoom1;
import springboot.pojo.QusRoom2;
import springboot.pojo.QusUser;
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
		return count;
	}
	/**
	 * 根据o_id修改订单（先将数据传入页面）
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/orderModify")
	public ModelAndView modifyOrder(HttpServletRequest request) {
		System.out.println(request.getParameter("o_id"));
		Integer o_id = Integer.parseInt(request.getParameter("o_id"));
		QusOrder order=qusOrderService.getOrderById(o_id);
		ModelAndView mv = new ModelAndView("back/page/indent/IndentAdd");
		//传入数据
		mv.addObject("order",order);
		return mv;
	}
	/**
	 * 保存修改的内容
	 * @param o_id
	 * @param userName
	 * @param doctorName
	 * @param room1_id
	 * @param room2_id
	 * @param price
	 * @param code
	 * @param type
	 * @param status
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/orderModifySave",method=RequestMethod.POST)
	public ModelAndView modifyOrderSave(@RequestParam("o_id") String o_id,@RequestParam("u_id") String u_id,
			@RequestParam("d_id") String d_id,@RequestParam("app_id") String app_id,
			@RequestParam("userName") String userName,
			@RequestParam("doctorName") String doctorName,
			@RequestParam("room1") String room1_id,@RequestParam("room2") String room2_id,
			@RequestParam("price") String price,@RequestParam("code") String code,
			@RequestParam("type") String type,@RequestParam("status") String status,HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		QusOrder order=new QusOrder();
		QusUser user=new QusUser();
		user.setU_name(userName);
		user.setU_id(Integer.parseInt(u_id));
		QusDoctor doctor=new QusDoctor();
		doctor.setD_name(doctorName);
		doctor.setD_id(Integer.parseInt(d_id));
		doctor.setD_r1_id(Integer.parseInt(room1_id));
		doctor.setD_r2_id(Integer.parseInt(room2_id));
		QusAppointment app=new QusAppointment();
		app.setApp_code(code);
		app.setApp_id(Integer.parseInt(app_id));
		order.setQusUser(user);
		order.setQusDoctor(doctor);
		order.setQusAppointment(app);
		order.setO_price(Double.parseDouble(price));
		order.setO_type(Integer.parseInt(type));
		order.setO_status(Integer.parseInt(status));
		order.setO_id(Integer.parseInt(o_id));
		int count=qusOrderService.ModifyOrderById(order);
		if(count>0) {
			mv.setViewName("back/page/indent/Indent");
			//return new ModelAndView("redirect:order/orderList");
		}
		return new ModelAndView("redirect:order/orderModify");
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

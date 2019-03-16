package springboot.service.qusorder.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import springboot.dao.qusorder.QusOrderDao;
import springboot.pojo.QusOrder;
import springboot.service.qusorder.QusOrderService;
@Service
public class QusOrderServiceimpl implements QusOrderService {
	
	@Resource
	public QusOrderDao qusOrderDao;
	/**
	 *订单列表
	 */
	@Override
	public List<QusOrder> orderList() {
		return qusOrderDao.orderList();
	}
	/**
	 * 删除订单
	 */
	@Override
	public Integer deleteOrder(Integer o_id) {
		return qusOrderDao.deleteOrder(o_id);
	}
	/**
	 * 根据o_id查询订单信息
	 */
	@Override
	public QusOrder getOrderById(Integer o_id) {
		return qusOrderDao.getOrderById(o_id);
	}
	/**
	 * 根据o_id修改订单信息
	 */
	@Override
	public Integer ModifyOrderById(QusOrder order) {
		return qusOrderDao.ModifyOrderById(order);
	}
	/**
	 * 根据o_user_id(u_id)删除订单
	 */
	@Override
	public int deleteOrderByuserId(Integer u_id) {
		return qusOrderDao.deleteOrderByuserId(u_id);
	}

}

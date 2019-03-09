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

}

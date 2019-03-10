package springboot.service.qusorder;

import java.util.List;

import springboot.pojo.QusOrder;

public interface QusOrderService {
	/**
	 * 订单列表
	 */
	public List<QusOrder> orderList();
	/**
	 * 删除订单
	 * @param o_id
	 * @return
	 */
	public Integer deleteOrder(Integer o_id);
	/**
	 * 根据o_id查询订单信息
	 * @param o_id
	 * @return
	 */
	public QusOrder getOrderById(Integer o_id);
	/**
	 * 根据o_id修改订单信息
	 * @param o_id
	 * @return
	 */
	public Integer ModifyOrderById(QusOrder order);
}

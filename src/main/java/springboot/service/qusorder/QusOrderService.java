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
	
	/**
	 * 根据o_user_id(u_id)删除订单
	 * @param u_id
	 * @return
	 */
	public int deleteOrderByuserId(Integer u_id);
	/**
	 *根据 查询预约单个数
	 * @param docId
	 * @return
	 */
	public int selectOrderByDocId(Integer docId);
	
	/**
	 * 添加订单
	 * @param order
	 * @return
	 */
	public int addOrder(QusOrder order);
}

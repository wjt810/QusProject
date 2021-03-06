package springboot.dao.qusorder;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import springboot.pojo.QusOrder;

public interface QusOrderDao {
	/**
	 * 显示订单列表
	 */
	/*@Select("SELECT"
			+ " d.d_name, u_name,r1.r1_name,r2.r2_name app_code, o_price, o_status, o_type\r\n"
			+ "	FROM qus_order o,qus_doctor d,qus_user u,qus_appointment app,qus_room1 r1,qus_room2 r2\r\n"
			+ "	WHERE o.o_doc_id=d.d_id AND o.o_user_id=u.u_id AND o.o_app_id=app.app_id"
			+ " AND d.d_r1_id=r1.r1_id AND d.d_r2_id=r2.r2_id")*/
	@Select("SELECT * FROM qus_order")
	@Results({
		@Result(property="o_doc_id",column="o_doc_id"),
		@Result(property="o_user_id",column="o_user_id"),
		@Result(property="o_app_id",column="o_app_id"),
		@Result(property="qusUser",column="o_user_id",
				one=@One(select="springboot.dao.qususer.QusUserDao.getUser")),//用户表
		@Result(property="qusDoctor",column="o_doc_id",
				one=@One(select="springboot.dao.qusdoctor.QusDoctorDao.getDoctor")),//医生表
		@Result(property="qusAppointment",column="o_app_id",
			one=@One(select="springboot.dao.qusappointment.QusAppointmentDao.getAppointment"))//约单表
	})
	public List<QusOrder> orderList();
	
	/**
	 * 删除订单
	 * @param o_id 条件订单ID
	 * @return
	 */
	@Delete("DELETE FROM qus_order WHERE o_id = #{o_id} ")
	public Integer deleteOrder(@Param("o_id") Integer o_id);
	
	/**
	 * 根据id获取订单信息
	 * @param o_id
	 * @return
	 */
	@Select("SELECT * FROM qus_order WHERE o_id=#{o_id}")
	@Results({
		@Result(property="o_doc_id",column="o_doc_id"),
		@Result(property="o_user_id",column="o_user_id"),
		@Result(property="o_app_id",column="o_app_id"),
		@Result(property="qusUser",column="o_user_id",
				one=@One(select="springboot.dao.qususer.QusUserDao.getUser")),//用户表
		@Result(property="qusDoctor",column="o_doc_id",
				one=@One(select="springboot.dao.qusdoctor.QusDoctorDao.getDoctor")),//医生表
		@Result(property="qusAppointment",column="o_app_id",
			one=@One(select="springboot.dao.qusappointment.QusAppointmentDao.getAppointment"))//约单表
	})
	public QusOrder getOrderById(Integer o_id);
	
	/**
	 * 根据o_id修改order信息
	 * @param o_id
	 * @return
	 */
	@Update("<script> UPDATE qus_order SET"
			+ "<if test='o_doc_id != null'> o_doc_id = #{o_doc_id} ,</if>"
			+ "<if test='o_user_id != null'> o_user_id = #{o_user_id} ,</if>"
			+ "<if test='o_app_id != null'> o_app_id = #{o_app_id} ,</if>"
			+ "	o_price = #{o_price}, o_status = #{o_status} , o_type = #{o_type}"
			+ "	WHERE o_id = #{o_id}"
			+"</script>")
	
	public Integer ModifyOrderById(QusOrder order);
	
	/**
	 * 根据user_id 删除订单
	 * @param u_id
	 * @return
	 */
	@Delete("DELETE FROM qus_order WHERE o_user_id=#{u_id}")
	public int deleteOrderByuserId(@Param("u_id")Integer u_id);
	/**
	 * 根据医生id删除订单id
	 * 
	 */
	@Select("SELECT COUNT(*) FROM qus_doctor d, qus_order o WHERE o.o_doc_id=d.d_id AND d.d_id =#{docId}")
	public int selectOrderByDocId(@Param("docId")Integer docId);
	
	
	
	
	/**
	 * 添加订单
	 */
	@Insert("INSERT INTO qus_sys.qus_order (o_doc_id, o_user_id, o_app_id, o_price, o_status, o_type)" + 
			"	VALUES(#{o_doc_id},#{o_user_id},#{o_app_id},#{o_price},#{o_status},#{o_type})")
	public int addOrder(QusOrder order);
}

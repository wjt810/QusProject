package springboot.dao.qusappointment;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;

import java.util.List;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import springboot.pojo.QusAppointment;
public interface QusAppointmentDao {
	/**
	 * 根据id查找约单
	 * @param id
	 * @return
	 */
	@Select("select * from qus_appointment where app_id=#{id}")
	public QusAppointment getAppointment(@Param("id") Integer id);
	
	/**
	 *根据 查询预约单个数
	 * @param docId
	 * @return9ooooioo
	 */
	@Select("SELECT COUNT(1) FROM qus_appointment a,qus_doctor d WHERE a.app_doc_id=d.d_id AND d.d_id=#{docId}")
	public int selectAppointmentByDocId(@Param("docId")Integer docId);
	/**
	 * 查找约单的详细信息
	 * @return
	 */
	@Select("SELECT * FROM qus_appointment ")
	@Results({
		@Result(property="app_user_id",column="app_user_id"),
		@Result(property="app_doc_id",column="app_doc_id"),
		@Result(property="app_sta_id",column="app_sta_id"),
		@Result(property="qusUser",column="app_user_id",
				one=@One(select="springboot.dao.qususer.QusUserDao.getUser")),//用户表
		@Result(property="qusDoctor",column="app_doc_id",
				one=@One(select="springboot.dao.qusdoctor.QusDoctorDao.getDoctor")),//医生表
		@Result(property="qusStatus",column="app_sta_id",
				one=@One(select="springboot.dao.qusstatus.QusStatusDao.qusStatusBy"))   //医生表
	})
	public List<QusAppointment> getUserByAppLists();
	
	/**
	 * 根据app_user_id（u_id）删除约单
	 * @param u_id
	 * @return
	 */
	@Delete("DELETE FROM qus_appointment WHERE app_user_id=#{u_id}")
	public Integer deleteAppByuserId(@Param("u_id")Integer u_id);
	
	
//	public List<QusAppointment> getUserByAppList();
	
	
	/**
	 * 添加约单（用户预约）
	 * @param qusAppointment
	 * @return
	 */
	@Insert("INSERT INTO qus_appointment (app_time, app_status, app_user_id, app_doc_id," 
			+ "	app_priority, app_code, app_sta_id)"
			+ "	VALUES(#{app_time},#{app_status},#{app_user_id},#{app_doc_id},#{app_priority},#{app_code},#{app_sta_id})")
	public int addAppInfo(QusAppointment qusAppointment);
	
	/**
	 * 获取预订单的最后一条数据
	 * @return
	 */
	@Select("SELECT * FROM qus_appointment ORDER BY app_id DESC LIMIT 1")
	public QusAppointment getAppEndInfo();
}

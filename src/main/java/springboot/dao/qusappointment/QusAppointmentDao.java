package springboot.dao.qusappointment;
import org.apache.ibatis.annotations.Delete;
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
	public List<QusAppointment> getUserByAppList();
}

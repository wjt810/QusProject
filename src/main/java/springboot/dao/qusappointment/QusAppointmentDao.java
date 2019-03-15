package springboot.dao.qusappointment;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
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
}

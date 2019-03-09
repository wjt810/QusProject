package springboot.dao.qusappointment;

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
}

package springboot.service.qusappointment;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;

import springboot.pojo.QusAppointment;

public interface QusAppointmentService {
	/**
	 * 根据id查找约单
	 * @return
	 */
	public QusAppointment getAppointment(Integer id);
		/**
		 * 查询预约单
		 * @param docId
		 * @return
		 */
		public int selectAppointmentByDocId(Integer docId);
}

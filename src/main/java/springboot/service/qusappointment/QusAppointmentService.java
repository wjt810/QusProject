package springboot.service.qusappointment;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import java.util.List;
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
	/**
	 * 查找约单的详细信息----实则查询用户信息
	 * @return
	 */
	public List<QusAppointment> getUserByAppLists();
	
	/**
	 * 根据app_user_id(u_id)删除约单
	 * @param u_id
	 * @return
	 */
	public Integer deleteAppByuserId(Integer u_id);
}

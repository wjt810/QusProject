package springboot.service.qusappointment;

import springboot.pojo.QusAppointment;

public interface QusAppointmentService {
	/**
	 * 根据id查找约单
	 * @return
	 */
	public QusAppointment getAppointment(Integer id);
}

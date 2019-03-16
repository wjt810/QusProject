package springboot.service.qusstatus;

import springboot.pojo.QusStatus;

public interface QusStatusService {
	/**
	 * 根据id查找状态信息
	 * @param sta_id
	 * @return
	 */
	public QusStatus qusStatusBy(Integer sta_id);

}

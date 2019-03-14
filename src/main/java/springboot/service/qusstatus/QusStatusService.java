package springboot.service.qusstatus;

import springboot.pojo.QusStatus;

public interface QusStatusService {
	/**
	 * 根据状态Id查找信息
	 * @param sta_id
	 * @return
	 */
	public QusStatus getStatus(Integer sta_id);
}

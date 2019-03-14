package springboot.dao.qusstatus;

import org.apache.ibatis.annotations.Select;

import springboot.pojo.QusStatus;

public interface QusStatusDao {
	/**
	 * 根据状态id查找信息
	 * @param sta_id
	 * @return
	 */
	@Select("select * FROM qus_status where sta_id=#{sta_id}")
	public QusStatus getStatus(Integer sta_id);
}

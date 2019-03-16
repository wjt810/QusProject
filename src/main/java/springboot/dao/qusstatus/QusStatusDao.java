package springboot.dao.qusstatus;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import springboot.pojo.QusStatus;

public interface QusStatusDao {
	
	/**
	 * 根据Id查询状态信息
	 * @param sta_id
	 * @return
	 */
	@Select("SELECT * FROM qus_status WHERE sta_id=#{sta_id}")
	public QusStatus qusStatusBy(Integer sta_id);
}

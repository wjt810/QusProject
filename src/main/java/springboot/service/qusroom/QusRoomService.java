package springboot.service.qusroom;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import springboot.pojo.QusRoom1;
import springboot.pojo.QusRoom2;

public interface QusRoomService {
	
	public List<QusRoom1> getRoom1List(Integer r1_id);
	
	public boolean delRoom2(Integer r2_id);
	
	/**
	 * 根据id获取一级科室
	 * @param r1_id
	 * @return
	 */
	public QusRoom1 getRoom1ById(Integer r1_id);
	
	/**
	 * 根据id获取二级科室
	 * @param r2_id
	 * @return
	 */
	public QusRoom2 getRoom2ById(Integer r2_id);
}

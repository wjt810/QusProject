package springboot.service.qusroom;

import java.util.List;

import springboot.pojo.QusRoom1;

public interface QusRoomService {
	
	public List<QusRoom1> getRoom1List(Integer r1_id);
	
	public boolean delRoom2(Integer r2_id);
}

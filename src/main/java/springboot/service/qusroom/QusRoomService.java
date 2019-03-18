package springboot.service.qusroom;

import java.util.List;

import springboot.pojo.QusRoom1;
import springboot.pojo.QusRoom2;

public interface QusRoomService {
	
	public List<QusRoom1> getRoom1List(Integer r1_id);
	
	public boolean delRoom2(Integer r2_id);
	
	public boolean delRoom1(Integer r1_id);
	
	public boolean editRoom1(QusRoom1 room1);
	
	public boolean editRoom2(QusRoom2 room2);
	
	public boolean addRoom2(Integer r1_id,String r2_name);
	
	public boolean addRoom1(String r1_name);
}

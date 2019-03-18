package springboot.pojo;

import java.util.List;

public class QusRoom1 {

	private Integer r1_id; // int(11)一级科室id
	private String r1_name; // varchar(50)一级科室名称

	private List<QusRoom2> room2s; // 一对多关联
	
	public QusRoom1() {
		
	}
	
	public QusRoom1(Integer r1_id, String r1_name) {
		super();
		this.r1_id = r1_id;
		this.r1_name = r1_name;
	}

	public List<QusRoom2> getRoom2s() {
		return room2s;
	}

	public void setRoom2s(List<QusRoom2> room2s) {
		this.room2s = room2s;
	}

	public Integer getR1_id() {
		return r1_id;
	}

	public void setR1_id(Integer r1_id) {
		this.r1_id = r1_id;
	}

	public String getR1_name() {
		return r1_name;
	}

	public void setR1_name(String r1_name) {
		this.r1_name = r1_name;
	}

}

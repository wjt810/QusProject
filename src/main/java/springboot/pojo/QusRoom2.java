package springboot.pojo;

public class QusRoom2 {

	private Integer r2_id; // int(11)
	private String r2_name; // varchar(50)二级科室名称
	private Integer r2_r1_id; // int(11)所属的一级科室
	
	private QusRoom1 room1s;  //对应一级科室
	
	public QusRoom1 getRoom1s() {
		return room1s;
	}

	public void setRoom1s(QusRoom1 room1s) {
		this.room1s = room1s;
	}

	public Integer getR2_id() {
		return r2_id;
	}

	public void setR2_id(Integer r2_id) {
		this.r2_id = r2_id;
	}

	public String getR2_name() {
		return r2_name;
	}

	public void setR2_name(String r2_name) {
		this.r2_name = r2_name;
	}

	public Integer getR2_r1_id() {
		return r2_r1_id;
	}

	public void setR2_r1_id(Integer r2_r1_id) {
		this.r2_r1_id = r2_r1_id;
	}

}

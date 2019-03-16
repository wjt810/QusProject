package springboot.pojo;

import java.util.List;

public class QusRole {
	private int role_id;      //int(11)
	private String role_name; //varchar(50)角色名称
	
	private List<QusDoctor> qusDoctor;  //一对多；  医生表
	
	public List<QusDoctor> getQusDoctor() {
		return qusDoctor;
	}
	public void setQusDoctor(List<QusDoctor> qusDoctor) {
		this.qusDoctor = qusDoctor;
	}
	public int getRole_id() {
		return role_id;
	}
	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}
	public String getRole_name() {
		return role_name;
	}
	public void setRole_name(String role_name) {
		this.role_name = role_name;
	}
}

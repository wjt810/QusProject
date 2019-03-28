package springboot.pojo;

import java.io.Serializable;

public class QusStatus implements Serializable{
	private int sta_id;     // int(11)状态Id
	private String sta_name;   //  varchar(50)状态名称
	public int getSta_id() {
		return sta_id;
	}
	public void setSta_id(int sta_id) {
		this.sta_id = sta_id;
	}
	public String getSta_name() {
		return sta_name;
	}
	public void setSta_name(String sta_name) {
		this.sta_name = sta_name;
	}
	
}

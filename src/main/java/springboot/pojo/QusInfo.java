package springboot.pojo;

import java.util.Date;

public class QusInfo {

	private Integer info_id; // int(11)信息id
	private String info_title; // varchar(50)信息标题
	private String info_content; // varchar(100)信息内容
	private Date info_startTime; // datetime发表时间
	private Date info_modifyTime; // datetime修改时间
	private Integer info_role_id; // int(11)角色id
	private Integer info_u_d_id; // int(11)发布人

	public Integer getInfo_id() {
		return info_id;
	}

	public void setInfo_id(Integer info_id) {
		this.info_id = info_id;
	}

	public String getInfo_title() {
		return info_title;
	}

	public void setInfo_title(String info_title) {
		this.info_title = info_title;
	}

	public String getInfo_content() {
		return info_content;
	}

	public void setInfo_content(String info_content) {
		this.info_content = info_content;
	}

	public Date getInfo_startTime() {
		return info_startTime;
	}

	public void setInfo_startTime(Date info_startTime) {
		this.info_startTime = info_startTime;
	}

	public Date getInfo_modifyTime() {
		return info_modifyTime;
	}

	public void setInfo_modifyTime(Date info_modifyTime) {
		this.info_modifyTime = info_modifyTime;
	}

	public Integer getInfo_role_id() {
		return info_role_id;
	}

	public void setInfo_role_id(Integer info_role_id) {
		
		this.info_role_id = info_role_id;
	}

	public Integer getInfo_u_d_id() {
		return info_u_d_id;
	}

	public void setInfo_u_d_id(Integer info_u_d_id) {
		this.info_u_d_id = info_u_d_id;
	}

}

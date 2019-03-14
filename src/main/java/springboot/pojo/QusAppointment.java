package springboot.pojo;

import java.sql.Date;

/**
 * 预约表
 * 
 * @author dell
 *
 */
public class QusAppointment {

	private Integer app_id; // int(11)预约单id
	private Date app_time; // datetime预约日期
	private Integer app_status; // int(11)状态0失效1有效
	private Integer app_user_id; // int(11)用户id
	private Integer app_doc_id; // int(11)医生id
	private Integer app_priority; // int(1)0优先1不优先
	private String app_code; // varchar(50)预约编号
	private Integer app_sta_id;  //状态Id
	
	private QusUser qusUser;  //用户表
	private QusDoctor qusDoctor;  //医生表
	private QusStatus qusStatus;  //状态表
	

	public QusStatus getQusStatus() {
		return qusStatus;
	}

	public void setQusStatus(QusStatus qusStatus) {
		this.qusStatus = qusStatus;
	}

	public QusUser getQusUser() {
		return qusUser;
	}

	public void setQusUser(QusUser qusUser) {
		this.qusUser = qusUser;
	}

	public QusDoctor getQusDoctor() {
		return qusDoctor;
	}

	public void setQusDoctor(QusDoctor qusDoctor) {
		this.qusDoctor = qusDoctor;
	}

	public Integer getApp_id() {
		return app_id;
	}

	public void setApp_id(Integer app_id) {
		this.app_id = app_id;
	}

	public Date getApp_time() {
		return app_time;
	}

	public void setApp_time(Date app_time) {
		this.app_time = app_time;
	}

	public Integer getApp_status() {
		return app_status;
	}

	public void setApp_status(Integer app_status) {
		this.app_status = app_status;
	}

	public Integer getApp_user_id() {
		return app_user_id;
	}

	public void setApp_user_id(Integer app_user_id) {
		this.app_user_id = app_user_id;
	}

	public Integer getApp_doc_id() {
		return app_doc_id;
	}

	public void setApp_doc_id(Integer app_doc_id) {
		this.app_doc_id = app_doc_id;
	}

	public Integer getApp_priority() {
		return app_priority;
	}

	public void setApp_priority(Integer app_priority) {
		this.app_priority = app_priority;
	}

	public String getApp_code() {
		return app_code;
	}

	public void setApp_code(String app_code) {
		this.app_code = app_code;
	}

	public Integer getApp_sta_id() {
		return app_sta_id;
	}

	public void setApp_sta_id(Integer app_sta_id) {
		this.app_sta_id = app_sta_id;
	}
	

}

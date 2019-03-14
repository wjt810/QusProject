package springboot.pojo;

import java.util.Date;

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
	
	private String u_name;//用户名
	private String u_sex;//性别
	private String u_phone;//电话
	private String sta_name;//状态名称
	private String d_name;//医生
	private String r1_name;//科室名称
	public String getU_name() {
		return u_name;
	}

	public void setU_name(String u_name) {
		this.u_name = u_name;
	}

	public String getU_sex() {
		return u_sex;
	}

	public void setU_sex(String u_sex) {
		this.u_sex = u_sex;
	}

	public String getU_phone() {
		return u_phone;
	}

	public void setU_phone(String u_phone) {
		this.u_phone = u_phone;
	}

	public String getSta_name() {
		return sta_name;
	}

	public void setSta_name(String sta_name) {
		this.sta_name = sta_name;
	}

	public String getD_name() {
		return d_name;
	}

	public void setD_name(String d_name) {
		this.d_name = d_name;
	}

	public String getR1_name() {
		return r1_name;
	}

	public void setR1_name(String r1_name) {
		this.r1_name = r1_name;
	}

	private QusUser qusUser;    //用户表
	private QusDoctor qusDoctor;//医生表

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

	@Override
	public String toString() {
		return "QusAppointment [app_id=" + app_id + ", app_time=" + app_time + ", app_status=" + app_status
				+ ", app_user_id=" + app_user_id + ", app_doc_id=" + app_doc_id + ", app_priority=" + app_priority
				+ ", app_code=" + app_code + ", qusUser=" + qusUser + ", qusDoctor=" + qusDoctor + "]";
	}
	

}
